import { themes as prismThemes }  from "prism-react-renderer";
import rehypeCloudinaryDocusaurus from "rehype-cloudinary-docusaurus";

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Uplink Knowledge Base",
  favicon: "images/favicon.ico",

  url: "https://uplink.tech",
  baseUrl: "/knowledge-base/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"]
  },

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/uplinkhq/knowledge-base/tree/main/",
          editLocalizedFiles: true,
          rehypePlugins: [
            process.env.NODE_ENV === "production" && [
              rehypeCloudinaryDocusaurus,
              {
                cloudName: "uplinkhq",
                baseUrl: "https://uplink.tech"
              }
            ]
          ].filter(Boolean)
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      })
    ]
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["de", "en"]
      })
    ]
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      image: "images/logo.png",
      colorMode: {
        respectPrefersColorScheme: true
      },
      navbar: {
        // title: "My Site",
        logo: {
          alt: "Uplink",
          src: "images/logo.png",
          // href: "https://uplink.tech/", // Set explicitly, otherwise "/" is assumed and a broken link error is thrown.
          target: "_self"
        },
        items: [
          {
            label: "Knowledge Base",
            to: "/"
          }, {
            label: "Uplink Website",
            href: "https://uplink.tech/",
            position: "right"
          }, {
            label: "Community Slack",
            href: "https://uplinkhq.slack.com",
            position: "right"
          }, {
            type: "localeDropdown",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Uplink",
            items: [
              {
                label: "Uplink Website",
                href: "https://uplink.tech/"
              }, {
                label: "Community Slack",
                href: "https://uplinkhq.slack.com"
              }
            ]
          }, {
            title: "Login",
            items: [
              {
                label: "Freelancer Login",
                href: "https://my.uplink.tech"
              }, {
                label: "Company Login",
                href: "https://app.uplink.tech"
              }, {
                label: "Recruiter Login",
                href: "https://partners.uplink.tech"
              }
            ]
          }
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
}

export default config
