import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import customHeadingId from "remark-custom-heading-id"

export default defineConfig({
  site: "https://uplink.tech",
  base: "/knowledge-base",
  devToolbar: {
    enabled: false
  },
  markdown: {
    remarkPlugins: [customHeadingId]
  },
  integrations: [
    starlight({
      title: "Uplink Knowledge Base",
      favicon: "/images/favicon.ico",
      logo: {
        src: "./public/images/logo.png",
        alt: "Uplink",
        replacesTitle: true
      },
      editLink: {
        baseUrl: "https://github.com/uplinkhq/knowledge-base/edit/main/"
      },
      customCss: ["./src/styles/custom.css"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "Deutsch",
          lang: "de"
        },
        en: {
          label: "English",
          lang: "en"
        }
      },
      social: [
        {
          icon: "slack",
          label: "Community Slack",
          href: "https://uplinkhq.slack.com"
        }
      ],
      sidebar: [
        { slug: "" },
        {
          label: "Für Freelancer",
          translations: { en: "For Freelancers" },
          items: [
            "020-freelancers",
            "020-freelancers/020-joining-uplink",
            "020-freelancers/025-guides",
            "020-freelancers/030-public-profiles",
            "020-freelancers/040-direct-jobs",
            "020-freelancers/050-recruiter-jobs",
            "020-freelancers/060-community-slack",
            "020-freelancers/064-ressources",
            "020-freelancers/065-slack-archive",
            "020-freelancers/067-community-wiki",
            "020-freelancers/070-applying-for-a-job",
            "020-freelancers/080-working-with-a-client",
            "020-freelancers/090-our-fee",
            "020-freelancers/100-our-contract",
            "020-freelancers/110-member-area",
            "020-freelancers/120-referring-a-client",
            "020-freelancers/130-referring-a-freelancer",
            "020-freelancers/140-contract-check",
            "020-freelancers/150-meetups",
            "020-freelancers/160-partners",
            "020-freelancers/170-webinars",
            "020-freelancers/190-code-of-conduct"
          ]
        },
        {
          label: "Für Unternehmen",
          translations: { en: "For Clients" },
          items: [
            "030-clients",
            "030-clients/010-finding-a-freelancer",
            "030-clients/020-direct-engagement",
            "030-clients/030-working-with-a-freelancer"
          ]
        },
        {
          label: "Für Recruiter",
          translations: { en: "For Recruiters" },
          items: ["040-recruiters"]
        },
        {
          label: "Für Agenturen",
          translations: { en: "For Agencies" },
          items: ["050-agencies"]
        }
      ],
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://cdn.iframe.ly/embed.js",
            charset: "utf-8"
          }
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/knowledge-base/images/logo.png"
          }
        }
      ]
    })
  ]
})
