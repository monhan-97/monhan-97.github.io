// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const githubURL = "https://github.com/monhan-97/monhan-97.github.io";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "黄梦汉个人博客",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://monhan-97.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "monhan-97", // Usually your GitHub org/user name.
  projectName: "monhan-97.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/styles/index.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Mohan Home",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            label: "About",
            to: "/about",
            position: "left",
          },
          {
            href: githubURL,
            label: "GitHub",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs",
              },
              {
                label: "Learn React ",
                href: "https://react.dev/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About",
                to: "/about",
              },
              {
                label: "GitHub",
                href: githubURL,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mohan's Home`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },

      algolia: {
        // The application ID provided by Algolia
        appId: "5FS9YODLSF",

        // Public API key: it is safe to commit it
        apiKey: "c6f50bd76d0edddb804ab0a3f1a296a4",

        indexName: "monhan-97io",
      },
    }),
};

module.exports = config;
