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
            "freelancers",
            "freelancers/joining-uplink",
            "freelancers/guides",
            "freelancers/public-profiles",
            "freelancers/direct-jobs",
            "freelancers/recruiter-jobs",
            "freelancers/community-slack",
            "freelancers/ressources",
            "freelancers/slack-archive",
            "freelancers/community-wiki",
            "freelancers/applying-for-a-job",
            "freelancers/working-with-a-client",
            "freelancers/our-fee",
            "freelancers/our-contract",
            "freelancers/member-area",
            "freelancers/referring-a-client",
            "freelancers/referring-a-freelancer",
            "freelancers/contract-check",
            "freelancers/meetups",
            "freelancers/partners",
            "freelancers/webinars",
            "freelancers/code-of-conduct"
          ]
        },
        {
          label: "Für Unternehmen",
          translations: { en: "For Clients" },
          items: [
            "clients",
            "clients/finding-a-freelancer",
            "clients/direct-engagement",
            "clients/working-with-a-freelancer"
          ]
        },
        {
          label: "Für Recruiter",
          translations: { en: "For Recruiters" },
          items: ["recruiters"]
        },
        {
          label: "Für Agenturen",
          translations: { en: "For Agencies" },
          items: ["agencies"]
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
