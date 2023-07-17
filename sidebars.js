/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "category",
      label: "Prettier",
      link: {
        type: "generated-index",
        slug: "/",
        keywords: ["prettier-config"],
      },
      items: [
        "prettier/what-is-prettier",
        "prettier/prettier-config",
        "prettier/how-to-use-prettier",
      ],
    },
    {
      type: "category",
      label: "HTML 知识点",
      link: {
        type: "generated-index",
        slug: "/html",
        keywords: ["html-semantics"],
      },
      items: ["html/html-semantics"],
    },
    {
      type: "category",
      label: "Flex 布局",
      link: {
        type: "generated-index",
        slug: "/flex-layout",
        keywords: ["flex-layout"],
      },
      items: ["flex-layout/flex-concept", "flex-layout/flex-container"],
    },
    {
      type: "category",
      label: "技术分享",
      link: {
        type: "generated-index",
        slug: "/share",
        keywords: ["react-18-features"],
      },
      items: ["share/react-18-features", "share/redux-useStore"],
    },
  ],
};

module.exports = sidebars;
