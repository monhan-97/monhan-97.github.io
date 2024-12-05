"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[8959],{4856:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"learn-react-source/build","title":"\u6253\u5305\u6784\u5efa","description":"- \u7f16\u5199\u6784\u5efa\u6253\u5305\u811a\u672c","source":"@site/docs/learn-react-source/build.mdx","sourceDirName":"learn-react-source","slug":"/learn-react-source/build","permalink":"/docs/learn-react-source/build","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"monhan-97","lastUpdatedAt":1733248028000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5b9e\u73b0 JSX","permalink":"/docs/learn-react-source/jsx"}}');var l=r(3274),a=r(8438),s=r(9151),o=r(5898);const i={},u="\u6253\u5305\u6784\u5efa",c={},d=[{value:"\u65b0\u589e build \u547d\u4ee4",id:"\u65b0\u589e-build-\u547d\u4ee4",level:2},{value:"\u5b89\u88c5\u6784\u5efa\u5305",id:"\u5b89\u88c5\u6784\u5efa\u5305",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u7f16\u5199\u811a\u672c",id:"\u7f16\u5199\u811a\u672c",level:2},{value:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784",id:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u5f00\u53d1\u8c03\u8bd5",id:"\u5f00\u53d1\u8c03\u8bd5",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u6253\u5305\u6784\u5efa",children:"\u6253\u5305\u6784\u5efa"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u5199\u6784\u5efa\u6253\u5305\u811a\u672c"}),"\n",(0,l.jsx)(n.li,{children:"\u5f00\u53d1\u8c03\u8bd5"}),"\n",(0,l.jsxs)(n.li,{children:["\u76f8\u5173\u4ee3\u7801\u53ef\u5728 ",(0,l.jsx)(n.a,{href:"https://github.com/monhan-97/react/tree/1.2",children:"git tag v1.2"})," \u67e5\u770b"]}),"\n"]})}),"\n",(0,l.jsxs)(n.p,{children:["\u6253\u5305\u914d\u7f6e\u548c\u811a\u672c\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"https://github.com/facebook/react",children:(0,l.jsx)(n.code,{children:"React"})})," \u5b98\u65b9\u4ed3\u5e93\u7684\u6784\u5efa\u4ee3\u7801"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u91cc\u9002\u5f53\u505a\u4e86\u4e00\u4e9b\u8c03\u6574\u548c\u4f18\u5316\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u65b0\u589e-build-\u547d\u4ee4",children:"\u65b0\u589e build \u547d\u4ee4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"scripts/rollup"})," \u76ee\u5f55\u4e0b, \u65b0\u589e\u6587\u4ef6 ",(0,l.jsx)(n.code,{children:"build.js"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"package.json"}),"\u65b0\u589e ",(0,l.jsx)(n.code,{children:"build"})," \u547d\u4ee4"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "private": true,\n  "workspaces": ["packages/*"],\n  "type": "module",\n  "scripts": {\n    "lint": "eslint --ext .ts,.jsx,.tsx --fix --quiet ./packages",\n    // highlight-start\n    "build": "node ./scripts/rollup/build.js"\n    // highlight-end\n  },\n  "keywords": [],\n  "author": "",\n  "license": "MIT",\n  "devDependencies": {\n    "@types/node": "^22.9.0",\n    "eslint": "^9.16.0",\n    "eslint-plugin-import-x": "^4.4.3",\n    "globals": "^15.12.0",\n    "prettier": "^3.3.3",\n    "rollup": "^4.25.0",\n    "typescript": "^5.6.3",\n    "typescript-eslint": "^8.16.0"\n  },\n  "packageManager": "yarn@1.22.22"\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5\u6784\u5efa\u5305",children:"\u5b89\u88c5\u6784\u5efa\u5305"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn add mkdirp rimraf ncp rollup-plugin-typescript2 -D -W\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"scripts/rollup\n\u2514\u2500\u2500 build.js\n\u2514\u2500\u2500 bundles.js\n\u2514\u2500\u2500 modules.js\n\u2514\u2500\u2500 packaging.js\n\u2514\u2500\u2500 utils.js\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7f16\u5199\u811a\u672c",children:"\u7f16\u5199\u811a\u672c"}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsx)(o.A,{value:"bundles",label:"bundles.js",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",metastring:"title='scripts/rollup/bundles.js'",children:'const bundleTypes = {\n  NODE_DEV: "NODE_DEV",\n  NODE_PROD: "NODE_PROD",\n};\n\nconst { NODE_DEV, NODE_PROD } = bundleTypes;\n\nconst bundles = [\n  /******* Isomorphic *******/\n  {\n    bundleTypes: [NODE_DEV, NODE_PROD],\n    entry: "react",\n    global: "React",\n  },\n\n  /******* React JSX Runtime *******/\n  {\n    bundleTypes: [NODE_DEV, NODE_PROD],\n    entry: "react/jsx-runtime",\n    global: "JSXRuntime",\n    externals: ["react"],\n  },\n\n  /******* React JSX DEV Runtime *******/\n  {\n    bundleTypes: [NODE_DEV, NODE_PROD],\n    entry: "react/jsx-dev-runtime",\n    global: "JSXDEVRuntime",\n    externals: ["react"],\n  },\n];\n\nexport function getFilename(bundle, bundleType) {\n  let name = bundle.entry;\n  // we do this to replace / to -, for react-dom/server\n  name = name.replace("/index.", ".").replace("/", "-");\n  switch (bundleType) {\n    case NODE_DEV:\n      return `${name}.development.js`;\n    case NODE_PROD:\n      return `${name}.production.js`;\n  }\n}\n\nexport default {\n  bundles,\n  bundleTypes,\n};\n'})})}),(0,l.jsx)(o.A,{value:"modules",label:"modules.js",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",metastring:"title='scripts/rollup/modules.js'",children:'import { createRequire } from "node:module";\n\nconst require = createRequire(import.meta.url);\n\n// For any external that is used in a DEV-only condition, explicitly\n// specify whether it has side effects during import or not. This lets\n// us know whether we can safely omit them when they are unused.\nconst HAS_NO_SIDE_EFFECTS_ON_IMPORT = false;\n// const HAS_SIDE_EFFECTS_ON_IMPORT = true;\nconst importSideEffects = Object.freeze({\n  react: HAS_NO_SIDE_EFFECTS_ON_IMPORT,\n  "react/jsx-dev-runtime": HAS_NO_SIDE_EFFECTS_ON_IMPORT,\n});\n\n// Bundles exporting globals that other modules rely on.\nconst knownGlobals = Object.freeze({\n  react: "React",\n});\n\n// Determines node_modules packages that are safe to assume will exist.\nexport function getDependencies(bundleType, entry) {\n  // Replaces any part of the entry that follow the package name (like\n  // "/server" in "react-dom/server") by the path to the package settings\n  const packageJson = require(entry.replace(/(\\/.*)?$/, "/package.json"));\n  // Both deps and peerDeps are assumed as accessible.\n  return Array.from(\n    new Set([\n      ...Object.keys(packageJson.dependencies || {}),\n      ...Object.keys(packageJson.peerDependencies || {}),\n    ])\n  );\n}\n\nexport function getPeerGlobals(externals) {\n  const peerGlobals = {};\n  if (Array.isArray(externals)) {\n    externals.forEach((name) => {\n      peerGlobals[name] = knownGlobals[name];\n    });\n  }\n\n  return peerGlobals;\n}\n\nexport function getImportSideEffects() {\n  return importSideEffects;\n}\n'})})}),(0,l.jsx)(o.A,{value:"packaging",label:"packaging.js",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",metastring:"title='scripts/rollup/packaging.js'",children:'import { existsSync, readdirSync } from "node:fs";\n\nimport Bundles from "./bundles.js";\nimport { asyncCopyTo } from "./utils.js";\n\nconst { NODE_DEV, NODE_PROD } = Bundles.bundleTypes;\n\nexport function getPackageName(name) {\n  if (name.indexOf("/") !== -1) {\n    return name.split("/")[0];\n  }\n  return name;\n}\n\nexport function getBundleOutputPath(bundleType, filename, packageName) {\n  switch (bundleType) {\n    case NODE_DEV:\n    case NODE_PROD:\n      return `build/node_modules/${packageName}/cjs/${filename}`;\n  }\n}\n\nasync function prepareNpmPackage(name) {\n  await Promise.all([\n    asyncCopyTo("LICENSE", `build/node_modules/${name}/LICENSE`),\n    asyncCopyTo(\n      `packages/${name}/package.json`,\n      `build/node_modules/${name}/package.json`\n    ),\n    asyncCopyTo(\n      `packages/${name}/README.md`,\n      `build/node_modules/${name}/README.md`\n    ),\n    asyncCopyTo(`packages/${name}/npm`, `build/node_modules/${name}`),\n  ]);\n}\n\nexport async function prepareNpmPackages() {\n  if (!existsSync("build/node_modules")) {\n    // We didn\'t build any npm packages.\n    return;\n  }\n  const builtPackageFolders = readdirSync("build/node_modules").filter(\n    (dir) => dir.charAt(0) !== "."\n  );\n  await Promise.all(builtPackageFolders.map(prepareNpmPackage));\n}\n'})})}),(0,l.jsx)(o.A,{value:"utils",label:"utils.js",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",metastring:"title='scripts/rollup/utils.js'",children:'import path from "node:path";\n\nimport { mkdirp } from "mkdirp";\nimport NCP from "ncp";\n\nconst ncp = NCP.ncp;\n\nexport function asyncCopyTo(from, to) {\n  return mkdirp(path.dirname(to)).then(\n    () =>\n      new Promise((resolve, reject) => {\n        ncp(from, to, (error) => {\n          if (error) {\n            // Wrap to have a useful stack trace.\n            reject(new Error(error));\n          } else {\n            // Wait for copied files to exist; ncp() sometimes completes prematurely.\n            // For more detail, see github.com/facebook/react/issues/22323\n            // Also github.com/AvianFlu/ncp/issues/127\n            setTimeout(resolve, 10);\n          }\n        });\n      })\n  );\n}\n'})})}),(0,l.jsx)(o.A,{value:"build",label:"build.js",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",metastring:"title='scripts/rollup/build.js'",children:'"use strict";\n\nimport { createRequire } from "node:module";\n\nimport { rimrafSync } from "rimraf";\nimport { rollup } from "rollup";\nimport typescript from "rollup-plugin-typescript2";\n\nimport {\n  getBundleOutputPath,\n  getPackageName,\n  prepareNpmPackages,\n} from "./packaging.js";\nimport {\n  getDependencies,\n  getImportSideEffects,\n  getPeerGlobals,\n} from "./modules.js";\nimport Bundles, { getFilename } from "./bundles.js";\n\nconst { NODE_DEV, NODE_PROD } = Bundles.bundleTypes;\nconst require = createRequire(import.meta.url);\n\nfunction getFormat(bundleType) {\n  switch (bundleType) {\n    case NODE_DEV:\n    case NODE_PROD:\n      return `cjs`;\n  }\n}\nfunction getPlugins() {\n  return [typescript()];\n}\n\nconst getRollupInteropValue = () => {\n  return "esModule";\n};\n\nfunction shouldSkipBundle(bundle, bundleType) {\n  const shouldSkipBundleType = bundle.bundleTypes.indexOf(bundleType) === -1;\n  if (shouldSkipBundleType) {\n    return true;\n  }\n  return false;\n}\n\nfunction resolveEntryFork(resolvedEntry) {\n  return resolvedEntry;\n}\n\nfunction isProductionBundleType(bundleType) {\n  switch (bundleType) {\n    case NODE_DEV:\n      return false;\n    case NODE_PROD:\n      return true;\n    default:\n      throw new Error(`Unknown type: ${bundleType}`);\n  }\n}\n\nasync function createBundle(bundle, bundleType) {\n  const filename = getFilename(bundle, bundleType);\n\n  const format = getFormat(bundleType);\n\n  const packageName = getPackageName(bundle.entry);\n\n  let resolvedEntry = resolveEntryFork(require.resolve(bundle.entry));\n\n  const peerGlobals = getPeerGlobals(bundle.externals, bundleType);\n  let externals = Object.keys(peerGlobals);\n\n  const deps = getDependencies(bundleType, bundle.entry);\n  externals = externals.concat(deps);\n\n  const importSideEffects = getImportSideEffects();\n  const pureExternalModules = Object.keys(importSideEffects).filter(\n    (module) => !importSideEffects[module]\n  );\n\n  /**\n   * @type {import("rollup").RollupOptions}\n   */\n  const rollupConfig = {\n    input: resolvedEntry,\n    treeshake: {\n      treeshake: {\n        moduleSideEffects: (id, external) =>\n          !(external && pureExternalModules.includes(id)),\n        propertyReadSideEffects: false,\n      },\n    },\n    external(id) {\n      const containsThisModule = (pkg) =>\n        id === pkg || id.startsWith(pkg + "/");\n      const isProvidedByDependency = externals.some(containsThisModule);\n      if (isProvidedByDependency) {\n        if (id.indexOf("/src/") !== -1) {\n          throw Error(\n            "You are trying to import " +\n              id +\n              " but " +\n              externals.find(containsThisModule) +\n              " is one of npm dependencies, " +\n              "so it will not contain that source file. You probably want " +\n              "to create a new bundle entry point for it instead."\n          );\n        }\n        return true;\n      }\n      return !!peerGlobals[id];\n    },\n    plugins: getPlugins(),\n    onwarn: handleRollupWarning,\n    output: {\n      externalLiveBindings: false,\n      freeze: false,\n      interop: getRollupInteropValue,\n      esModule: false,\n    },\n  };\n\n  const mainOutputPath = getBundleOutputPath(bundleType, filename, packageName);\n\n  const rollupOutputOptions = getRollupOutputOptions(\n    mainOutputPath,\n    format,\n    peerGlobals,\n    bundle.global,\n    bundleType\n  );\n\n  try {\n    const result = await rollup(rollupConfig);\n    await result.write(rollupOutputOptions);\n  } catch (error) {\n    handleRollupError(error);\n  }\n}\n\nfunction getRollupOutputOptions(\n  outputPath,\n  format,\n  globals,\n  globalName,\n  bundleType\n) {\n  const isProduction = isProductionBundleType(bundleType);\n  /**\n   * @return  {import("rollup").RollupOutput}\n   */\n  return {\n    file: outputPath,\n    format,\n    globals,\n    freeze: !isProduction,\n    interop: getRollupInteropValue,\n    name: globalName,\n    sourcemap: false,\n    esModule: false,\n    exports: "auto",\n  };\n}\n\nasync function buildEverything() {\n  rimrafSync("build");\n\n  let bundles = [];\n  for (const bundle of Bundles.bundles) {\n    bundles.push([bundle, NODE_DEV], [bundle, NODE_PROD]);\n  }\n\n  bundles = bundles.filter(([bundle, bundleType]) => {\n    return !shouldSkipBundle(bundle, bundleType);\n  });\n\n  for (const [bundle, bundleType] of bundles) {\n    await createBundle(bundle, bundleType);\n  }\n\n  prepareNpmPackages();\n}\n\nfunction handleRollupWarning(warning) {\n  if (warning.code === "UNUSED_EXTERNAL_IMPORT") {\n    const match = warning.message.match(/external module \'([^\']+)\'/);\n    if (!match || typeof match[1] !== "string") {\n      throw new Error(\n        "Could not parse a Rollup warning. " + "Fix this method."\n      );\n    }\n    const importSideEffects = getImportSideEffects();\n    const externalModule = match[1];\n    if (typeof importSideEffects[externalModule] !== "boolean") {\n      throw new Error(\n        \'An external module "\' +\n          externalModule +\n          \'" is used in a DEV-only code path \' +\n          "but we do not know if it is safe to omit an unused require() to it in production. " +\n          "Please add it to the `importSideEffects` list in `scripts/rollup/modules.js`."\n      );\n    }\n    // Don\'t warn. We will remove side effectless require() in a later pass.\n    return;\n  }\n\n  if (warning.code === "CIRCULAR_DEPENDENCY") {\n    // Ignored\n  } else if (typeof warning.code === "string") {\n    // This is a warning coming from Rollup itself.\n    // These tend to be important (e.g. clashes in namespaced exports)\n    // so we\'ll fail the build on any of them.\n    console.error();\n    console.error(warning.message || warning);\n    console.error();\n    process.exit(1);\n  } else {\n    // The warning is from one of the plugins.\n    // Maybe it\'s not important, so just print it.\n    console.warn(warning.message || warning);\n  }\n}\n\nfunction handleRollupError(error) {\n  if (!error.code) {\n    console.error(error);\n    return;\n  }\n  console.error(\n    `\\x1b[31m-- ${error.code}${error.plugin ? ` (${error.plugin})` : ""} --`\n  );\n  console.error(error.stack);\n  if (error.codeFrame) {\n    // This looks like an error from a plugin (e.g. Babel).\n    // In this case we\'ll resort to displaying the provided code frame\n    // because we can\'t be sure the reported location is accurate.\n    console.error(error.codeFrame);\n  }\n}\n\nbuildEverything();\n'})})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784",children:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"build/node_modules\n\u2514\u2500\u2500 react\n    \u2514\u2500\u2500 cjs\n        \u2514\u2500\u2500 react-jsx-dev-runtime.development.js\n        \u2514\u2500\u2500 react-jsx-dev-runtime.production.js\n        \u2514\u2500\u2500 react-jsx-runtime.development.js\n        \u2514\u2500\u2500 react-jsx-runtime.production.js\n        \u2514\u2500\u2500 react.development.js\n        \u2514\u2500\u2500 react.production.js\n    \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 js-dev-runtime.js\n    \u2514\u2500\u2500 js-runtime.js\n    \u2514\u2500\u2500 LICENSE\n    \u2514\u2500\u2500 package.json\n    \u2514\u2500\u2500 README.md\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5f00\u53d1\u8c03\u8bd5",children:"\u5f00\u53d1\u8c03\u8bd5"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"create-react-app"}),"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002"]}),"\n",(0,l.jsx)(s.A,{children:(0,l.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm link react/build/node_modules/react\n\n// \u89e3\u9664\u94fe\u63a5\u540e\uff0cpnpm \u4e0d\u4f1a\u81ea\u52a8\u5220\u9664\u5b9e\u9645\u7684\u4f9d\u8d56\u5305\u6216\u76ee\u5f55\uff0c\u53ea\u662f\u79fb\u9664\u4e86\u7b26\u53f7\u94fe\u63a5\uff0c\u6062\u590d\u6b63\u5e38\u7684\u5305\u7ba1\u7406\u65b9\u5f0f\u3002\n// \u5982\u679c\u9700\u8981\u5b8c\u5168\u6e05\u9664\u5305\u7684\u4f9d\u8d56\uff0c\u53ef\u4ee5\u4f7f\u7528 pnpm install \u6216\u8005\u624b\u52a8\u5220\u9664\u76f8\u5173\u7684\u4f9d\u8d56\u3002\npnpm unlink react/build/node_modules/react\n"})})})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},5898:(e,n,r)=>{r.d(n,{A:()=>s});r(9474);var t=r(3526);const l={tabItem:"tabItem_GYOJ"};var a=r(3274);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,s),hidden:r,children:n})}},9151:(e,n,r)=>{r.d(n,{A:()=>v});var t=r(9474),l=r(3526),a=r(65),s=r(241),o=r(77),i=r(4042),u=r(6883),c=r(4563);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,a=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[u,d]=f({queryString:r,groupId:l}),[h,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,c.Dv)(r);return[l,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),g=(()=>{const e=u??h;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(2607);const g={tabList:"tabList_zfeU",tabItem:"tabItem_fHig"};var y=r(3274);function x(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),l=o[r].value;l!==t&&(u(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function E(e){const n=h(e);return(0,y.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(j,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,y.jsx)(E,{...e,children:d(e.children)},String(n))}},8438:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(9474);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);