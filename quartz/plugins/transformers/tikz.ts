import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import tex2svg, { TeXOptions } from "node-tikzjax"
import { fromHtml } from "hast-util-from-html"
import fs from "fs"
import path from "path"
import crypto from "crypto"

// Helper to create a hash from the tikz code
function getHash(content: string) {
  return crypto.createHash("md5").update(content).digest("hex")
}

interface Options {
  tikzOptions?: TeXOptions
}

export const Tikz: QuartzTransformerPlugin<Partial<Options>> = (opts) => {
  return {
    name: "Tikz",
    htmlPlugins() {
      return [
        () => {
          return async (tree, file) => {
            const promises: Promise<void>[] = []
            
            // Ensure cache directory exists
            const cacheDir = path.join(process.cwd(), ".quartz-cache", "tikz")
            if (!fs.existsSync(cacheDir)) {
              fs.mkdirSync(cacheDir, { recursive: true })
            }

            visit(tree, "element", (node, index, parent) => {
              // 1. Find <pre><code>...</code></pre> blocks
              if (node.tagName === "pre" && node.children?.[0]?.tagName === "code") {
                const codeNode = node.children[0]
                const className = (codeNode.properties?.className as string[]) || []

                // 2. Check if the code block is marked as "tikz"
                if (className.includes("language-tikz")) {
                  const textNode = codeNode.children[0]
                  if (!textNode || textNode.type !== "text") return
                  
                  const tikzCode = textNode.value.trim()
                  const hash = getHash(tikzCode)
                  const cacheFile = path.join(cacheDir, `${hash}.svg`)

                  const promise = async () => {
                    try {
                      let svgString = ""

                      // 3. CACHE CHECK
                      if (fs.existsSync(cacheFile)) {
                        svgString = fs.readFileSync(cacheFile, "utf-8")
                      } else {
                        // 4. Render if not cached
                        // We wrap in a promise because tex2svg might throw or take time
                        svgString = await tex2svg(tikzCode, {
                            ...opts?.tikzOptions,
                            // Ensure we don't log every single compilation to console
                            showConsole: false 
                        })
                        
                        // Save to cache
                        fs.writeFileSync(cacheFile, svgString)
                      }

                      // 5. Convert SVG string to HTML Tree
                      const svgHast = fromHtml(svgString, { fragment: true })

                      // 6. Replace the original <pre> block with the SVG
                      if (parent && index !== undefined) {
                        parent.children[index] = {
                          type: "element",
                          tagName: "div",
                          properties: { 
                            className: ["tikz-diagram"],
                            // Optional: Center the diagram
                            style: "display: flex; justify-content: center; margin: 2rem 0;" 
                          },
                          children: svgHast.children,
                        }
                      }
                    } catch (err) {
                      console.error(`\n[TikZ] Error in ${file.path}: \n${err}`)
                    }
                  }

                  promises.push(promise())
                }
              }
            })

            await Promise.all(promises)
          }
        },
      ]
    },
  }
}
