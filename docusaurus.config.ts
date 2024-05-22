import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";

const githubURL = "https://github.com/monhan-97/monhan-97.github.io";

const lightTheme = themes.oneDark;

const darkTheme = themes.oneDark;

const config: Config = {
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

  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",

          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/styles/index.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-live-codeblock"],

  themeConfig: {
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
      theme: lightTheme,
      darkTheme: darkTheme,
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
  } satisfies Preset.ThemeConfig,
};

export default config;
