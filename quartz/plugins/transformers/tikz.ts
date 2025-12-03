import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { fromHtml } from "hast-util-from-html"
import { exec } from "child_process"
import fs from "fs"
import path from "path"
import crypto from "crypto"
import util from "util"
import { optimize } from "svgo"

const execAsync = util.promisify(exec)

// Helper to create a hash from the tikz code
function getHash(content: string) {
  return crypto.createHash("md5").update(content).digest("hex")
}

function getTemplate(code: string): string {
  code = code.trim()
  if (code.includes("\\documentclass")) return code  
  // Prepend documentclass
  return `\\documentclass[margin=10pt]{standalone}
${code}
`
}

export const Tikz: QuartzTransformerPlugin = (opts) => {
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
                  const svgFile = path.join(cacheDir, `${hash}.svg`)

                  const promise = async () => {
                    try {
                      let svgContent = ""
                      if (fs.existsSync(svgFile)) {
                        svgContent = fs.readFileSync(svgFile, "utf-8")
                      } else {
                        // // 1. Write Temp Tex File
                        // const texFile = path.join(cacheDir, `${hash}.tex`)
                        // const pdfFile = path.join(cacheDir, `${hash}.pdf`)
                        // fs.writeFileSync(texFile, getTemplate(tikzCode))

                        // // 2. Run System Commands
                        // // pdflatex -> generates PDF
                        // await execAsync(`pdflatex -output-directory=${cacheDir} -interaction=nonstopmode ${texFile}`)
                        
                        // // pdftocairo -> converts PDF to SVG (Requires poppler-utils)
                        // await execAsync(`pdftocairo -svg ${pdfFile} ${svgFile}`)

                        // // Cleanup artifacts (optional)
                        // fs.unlinkSync(texFile)
                        // fs.unlinkSync(pdfFile)
                        const response = await fetch("https://kroki.io/tikz/svg", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            diagram_source: getTemplate(tikzCode),
                            diagram_type: "tikz",
                            output_format: "svg",
                          }),
                        })

                        if (!response.ok) {
                          throw new Error(`Kroki API failed: ${response.statusText}`)
                        }

                        const rawSvg = (await response.text())
                        // // 3. Read Result
                        // const rawSvg = fs.readFileSync(svgFile, "utf-8")
                          .replace(/rgb\(0\%,0\%,0\%\)/g, "currentColor")
                          .replace(/#000000/g, "currentColor")
                          // Sometimes it uses CSS blocks, strip explicit black stroke/fill
                          .replace(/stroke:black/g, "stroke:currentColor")
                          .replace(/fill:black/g, "fill:currentColor")
                          .replace(/rgb\(100\%,100\%,100\%\)/g, "var(--light)")
                          .replace(/#ffffff/gi, "var(--light)") // Case insensitive for hex
                          .replace(/stroke:white/g, "stroke:var(--light)")
                          .replace(/fill:white/g, "fill:var(--light)")

                        const result = optimize(rawSvg, {
                          path: svgFile, // Helps svgo generate unique IDs based on filename/hash
                          multipass: true, // Run multiple times for better compression
                          plugins: [
                            "preset-default", // Standard optimizations
                            {
                              name: "prefixIds", // CRITICAL: Prevents ID collisions between diagrams
                              params: {
                                prefix: hash, // Use the file hash as the prefix
                                delim: "_",
                              },
                            },
                            {
                              name: "removeDimensions",
                            },
                          ],
                        })

                        svgContent = result.data
                        
                        // Save the OPTIMIZED version to cache (saves space and processing next time)
                        fs.writeFileSync(svgFile, svgContent)
                      }
                      // 4. Convert SVG string to HTML Tree
                      const svgHast = fromHtml(svgContent, { fragment: true })

                      // 5. Replace the original <pre> block with the SVG
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
                      console.error(`[Tikz] System Tex Failed:`, err)
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
