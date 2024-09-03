import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
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
      label: "Javascript",
      link: {
        type: "generated-index",
        slug: "/script-tag",
        keywords: ["Javascript"],
      },
      items: [
        "Javascript/script-tag",
        "Javascript/variable",
        {
          type: "category",
          label: "数据类型",
          items: [
            "Javascript/data-type/typeof",
            "Javascript/data-type/undefined",
            "Javascript/data-type/null",
            "Javascript/data-type/boolean",
            "Javascript/data-type/number",
            "Javascript/data-type/string",
            "Javascript/data-type/symbol",
            "Javascript/data-type/internal-symbol",
            "Javascript/data-type/object",
          ],
        },
        {
          type: "category",
          label: "操作符",
          items: [
            "Javascript/operator/unary-operator",
            "Javascript/operator/bitwise-operator",
            "Javascript/operator/boolean-operator",
            "Javascript/operator/multiplicative-operator",
            "Javascript/operator/index-operator",
            "Javascript/operator/additive-operator",
            "Javascript/operator/relational-operator",
            "Javascript/operator/equality-operators",
          ],
        },
        {
          type: "category",
          label: "语句",
          items: ["Javascript/statement/switch"],
        },
      ],
    },
    {
      type: "category",
      label: "计算机网络",
      link: {
        type: "generated-index",
        slug: "/computer-network",
        keywords: ["计算机网络"],
      },
      items: [
        "NetWork/client-and-sever",
        "NetWork/url",
        "NetWork/http-protocol",
        "NetWork/tcp-ip-model",
        "NetWork/cookie",
        "NetWork/jwt",
        "NetWork/same-origin-policy",
        "NetWork/cors",
        "NetWork/enter-url",
        "NetWork/download-file",
        "NetWork/cache-protocol",
        "NetWork/tcp-protocol",
        "NetWork/performance",
        "NetWork/resume-broken-download",
        "NetWork/large-file-upload",
        "NetWork/domain",
      ],
    },
    {
      type: "category",
      label: "事件循环",
      link: {
        type: "generated-index",
        slug: "/event-loop",
        keywords: ["event-loop", "事件循环"],
      },
      items: [
        "event-loop/process-thread",
        "event-loop/main-thread",
        "event-loop/what-is-async",
        "event-loop/block-render",
        "event-loop/task-priority",
        "event-loop/test-case",
      ],
    },
    {
      type: "category",
      label: "Promise",
      link: {
        type: "generated-index",
        slug: "/promise",
        keywords: ["Promise A+规范"],
      },
      items: [
        "Promise/promise-standard",
        "Promise/promise-api",
        "Promise/static-method",
        "Promise/async-await",
        "Promise/promise-implement",
        "Promise/test-case",
      ],
    },
    {
      type: "category",
      label: "浏览器渲染原理",
      link: {
        type: "generated-index",
        slug: "/browser-render",
        keywords: ["浏览器渲染原理"],
      },
      items: [
        "browser-render/parse-html",
        "browser-render/recalculate-style",
        "browser-render/reflow",
        "browser-render/layer",
        "browser-render/repaint",
        "browser-render/tiling",
        "browser-render/raster",
        "browser-render/complete-process",
      ],
    },
    {
      type: "category",
      label: "Redux",
      link: {
        type: "generated-index",
        slug: "/redux",
        keywords: ["Redux"],
      },
      items: [
        "Redux/introduce",
        "Redux/createStore",
        "Redux/compose",
        "Redux/combineReducers",
        "Redux/bindActionCreators",
        "Redux/applyMiddleware",
      ],
    },
    {
      type: "category",
      label: "React",
      link: {
        type: "generated-index",
        slug: "/introduce",
        keywords: ["react"],
      },
      items: [
        "React/introduce",
        "React/jsx",
        "React/setState",
        "React/controlled-uncontrolled",
        "React/higher-order-components",
        "React/pure-components",
      ],
    },
  ],
};

export default sidebars;
