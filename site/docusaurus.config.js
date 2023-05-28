// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rust Simplified",
  tagline: "Rust the Easy way",
  favicon: "img/muscat.png",
  url: "https://rust-lang-simplified.vercel.app/",
  baseUrl: "/",
  organizationName: "rust-circle",
  projectName: "rust-lang-simplified",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: true,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/muscat.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#ef4444",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/kolynzb/rust-lang-simplified/tree/main/rustify",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/kolynzb/rust-lang-simplified/tree/main/rustify/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/muscat.png",
      navbar: {
        title: "Rust Simplified",
        logo: {
          alt: "Rust Muscat",
          src: "img/muscat.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/showcase", label: "Showcase", position: "left" },
          {
            to: "/community/support",
            label: "Community",
            position: "left",
            activeBaseRegex: "/community/",
          },
          {
            href: "https://github.com/kolynzb/rust-lang-simplified/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      algolia: {
        appId: "X1Z85QJPUV",
        apiKey: "bf7211c161e8205da2f933a02534105a",
        indexName: "rust-essentials",
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/rust",
              },
              {
                label: "Whatsapp",
                href: "https://chat.whatsapp.com/KwukBvkzcfW3BBXAOemMT9",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/rust-circle",
              },
              {
                label: "Events",
                href: "https://www.eventbrite.com/e/rust-circle-meetup-tickets-628763577787?aff=ebdssbcitybrowse",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Kolynz_b/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rust Simplified, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
    }),
};

module.exports = config;
