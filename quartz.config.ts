import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cub11k's BIU Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "cub11k-biu.github.io/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.Tikz(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "mathjax",
        mathJaxOptions: {
          tex: {
            inlineMath: {'[+]': [['$', '$']]},
            packages: [
              'base',           // Required
              'ams',            // Standard math (align, gather, etc.)
              'newcommand',     // Support for \newcommand
              'configmacros',   // Support for macro configuration
              'noundefined',    // Visual error messages instead of crash
              'autoload',       // <--- THE MAGIC: Loads ext. only when used
              'require',        // Allows manual \require{} like Obsidian
              'textmacros',     // Math inside \text{}
              'tagformat',      // Tag formatting
              'braket',
              'centernot',
              'cancel',
            ],
            macros: {
              qset: ["{^{\\displaystyle #1}}\\Big/{_{\\displaystyle #2}}", 2],
              vrt: ["\\overset{ | }{ \\underset{ | }{ #1 }", 1],
              sbs: ["\\left\\{\\begin{array}{} #1 \\end{array}\\right\\}", 1],
              inp: ["\\left\\langle #1, #2 \\right\\rangle", 2],
              avg: ["\\left\\langle #1 \\right\\rangle", 1],
              abs: ["\\left\\lvert #1 \\right\\rvert", 1],
              norm: ["\\left\\lVert #1 \\right\\rVert", 1],
              ceil: ["\\left\\lceil #1 \\right\\rceil", 1],
              floor: ["\\left\\lfloor #1 \\right\\rfloor", 1],
              lrp: ["\\left( #1 \\right)", 1],
              lrs: ["\\left[ #1 \\right]", 1],
              lrc: ["\\left\\{ #1 \\right\\}", 1],
              cfg: ["#2 \\overset{ * }{ \\underset{ #1 }{ \\implies } } #3", 3],
            },
            environments: {
              aeqsys: ["\\left\\{\\begin{align}", "\\end{align}\\right."],
              eqsys: ["\\left\\{\\begin{array}{}", "\\end{array}\\right."],
              eqany: ["\\left[\\begin{array}{}", "\\end{array}\\right."],
              eqmat: ["\\left(\\begin{array}{#1}", "\\end{array}\\right)", 1],
            }
          }
        }
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
