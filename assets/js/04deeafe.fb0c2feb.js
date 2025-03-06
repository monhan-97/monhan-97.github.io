"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[8959],{7386:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"learn-react-source/build","title":"\u6253\u5305\u6784\u5efa","description":"- \u7f16\u5199\u6784\u5efa\u6253\u5305\u811a\u672c","source":"@site/docs/learn-react-source/build.mdx","sourceDirName":"learn-react-source","slug":"/learn-react-source/build","permalink":"/docs/learn-react-source/build","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"monhan-97","lastUpdatedAt":1734272830000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5b9e\u73b0 JSX","permalink":"/docs/learn-react-source/jsx"},"next":{"title":"Fiber","permalink":"/docs/learn-react-source/fiber"}}');var l=n(3274),a=n(8438),s=n(9018),o=n(5003);const i={},u="\u6253\u5305\u6784\u5efa",c={},d=[{value:"\u65b0\u589e build \u547d\u4ee4",id:"\u65b0\u589e-build-\u547d\u4ee4",level:2},{value:"\u5b89\u88c5\u6784\u5efa\u5305",id:"\u5b89\u88c5\u6784\u5efa\u5305",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u7f16\u5199\u811a\u672c",id:"\u7f16\u5199\u811a\u672c",level:2},{value:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784",id:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u5f00\u53d1\u8c03\u8bd5",id:"\u5f00\u53d1\u8c03\u8bd5",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"\u6253\u5305\u6784\u5efa",children:"\u6253\u5305\u6784\u5efa"})}),"\n",(0,l.jsx)(r.admonition,{type:"info",children:(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"\u7f16\u5199\u6784\u5efa\u6253\u5305\u811a\u672c"}),"\n",(0,l.jsx)(r.li,{children:"\u5f00\u53d1\u8c03\u8bd5"}),"\n",(0,l.jsxs)(r.li,{children:["\u76f8\u5173\u4ee3\u7801\u53ef\u5728 ",(0,l.jsx)(r.a,{href:"https://github.com/monhan-97/react/tree/1.2",children:"git tag v1.2"})," \u67e5\u770b"]}),"\n"]})}),"\n",(0,l.jsxs)(r.p,{children:["\u6253\u5305\u914d\u7f6e\u548c\u811a\u672c\u53c2\u8003 ",(0,l.jsx)(r.a,{href:"https://github.com/facebook/react",children:(0,l.jsx)(r.code,{children:"React"})})," \u5b98\u65b9\u4ed3\u5e93\u7684\u6784\u5efa\u4ee3\u7801"]}),"\n",(0,l.jsx)(r.p,{children:"\u8fd9\u91cc\u9002\u5f53\u505a\u4e86\u4e00\u4e9b\u8c03\u6574\u548c\u4f18\u5316\u3002"}),"\n",(0,l.jsx)(r.h2,{id:"\u65b0\u589e-build-\u547d\u4ee4",children:"\u65b0\u589e build \u547d\u4ee4"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\u5728 ",(0,l.jsx)(r.code,{children:"scripts/rollup"})," \u76ee\u5f55\u4e0b, \u65b0\u589e\u6587\u4ef6 ",(0,l.jsx)(r.code,{children:"build.js"}),"\u3002"]}),"\n",(0,l.jsxs)(r.li,{children:["\u5728 ",(0,l.jsx)(r.code,{children:"package.json"}),"\u65b0\u589e ",(0,l.jsx)(r.code,{children:"build"})," \u547d\u4ee4"]}),"\n"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-json",metastring:'title="package.json"',children:'{\r\n  "private": true,\r\n  "workspaces": ["packages/*"],\r\n  "type": "module",\r\n  "scripts": {\r\n    "lint": "eslint --ext .ts,.jsx,.tsx --fix --quiet ./packages",\r\n    "build": "node ./scripts/rollup/build.js",\r\n    "upgrade": "yarn upgrade-interactive --latest"\r\n  },\r\n  "keywords": [],\r\n  "author": "",\r\n  "license": "MIT",\r\n  "devDependencies": {\r\n    "@types/node": "^22.10.2",\r\n    "eslint": "^9.17.0",\r\n    "eslint-plugin-import-x": "^4.5.0",\r\n    "globals": "^15.13.0",\r\n    "mkdirp": "^3.0.1",\r\n    "ncp": "^2.0.0",\r\n    "prettier": "^3.4.2",\r\n    "rimraf": "^6.0.1",\r\n    "rollup": "^4.28.1",\r\n    "rollup-plugin-typescript2": "^0.36.0",\r\n    "typescript": "^5.6.3",\r\n    "typescript-eslint": "^8.18.0"\r\n  },\r\n  "packageManager": "yarn@1.22.22"\r\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"\u5b89\u88c5\u6784\u5efa\u5305",children:"\u5b89\u88c5\u6784\u5efa\u5305"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"yarn add mkdirp rimraf ncp rollup-plugin-typescript2 -D -W\n"})}),"\n",(0,l.jsx)(r.h2,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"scripts/rollup\r\n\u2514\u2500\u2500 build.js\r\n\u2514\u2500\u2500 bundles.js\r\n\u2514\u2500\u2500 modules.js\r\n\u2514\u2500\u2500 packaging.js\r\n\u2514\u2500\u2500 utils.js\n"})}),"\n",(0,l.jsx)(r.h2,{id:"\u7f16\u5199\u811a\u672c",children:"\u7f16\u5199\u811a\u672c"}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsx)(o.A,{value:"bundles",label:"bundles.js",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-javascript",metastring:"title='scripts/rollup/bundles.js'",children:'const bundleTypes = {\r\n  NODE_DEV: "NODE_DEV",\r\n  NODE_PROD: "NODE_PROD",\r\n};\r\n\r\nconst { NODE_DEV, NODE_PROD } = bundleTypes;\r\n\r\nconst bundles = [\r\n  /******* Isomorphic *******/\r\n  {\r\n    bundleTypes: [NODE_DEV, NODE_PROD],\r\n    entry: "react",\r\n    global: "React",\r\n  },\r\n\r\n  /******* React JSX Runtime *******/\r\n  {\r\n    bundleTypes: [NODE_DEV, NODE_PROD],\r\n    entry: "react/jsx-runtime",\r\n    global: "JSXRuntime",\r\n    externals: ["react"],\r\n  },\r\n\r\n  /******* React JSX DEV Runtime *******/\r\n  {\r\n    bundleTypes: [NODE_DEV, NODE_PROD],\r\n    entry: "react/jsx-dev-runtime",\r\n    global: "JSXDEVRuntime",\r\n    externals: ["react"],\r\n  },\r\n];\r\n\r\nexport function getFilename(bundle, bundleType) {\r\n  let name = bundle.entry;\r\n  // we do this to replace / to -, for react-dom/server\r\n  name = name.replace("/index.", ".").replace("/", "-");\r\n  switch (bundleType) {\r\n    case NODE_DEV:\r\n      return `${name}.development.js`;\r\n    case NODE_PROD:\r\n      return `${name}.production.js`;\r\n  }\r\n}\r\n\r\nexport default {\r\n  bundles,\r\n  bundleTypes,\r\n};\n'})})}),(0,l.jsx)(o.A,{value:"modules",label:"modules.js",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-javascript",metastring:"title='scripts/rollup/modules.js'",children:'import { createRequire } from "node:module";\r\n\r\nconst require = createRequire(import.meta.url);\r\n\r\n// For any external that is used in a DEV-only condition, explicitly\r\n// specify whether it has side effects during import or not. This lets\r\n// us know whether we can safely omit them when they are unused.\r\nconst HAS_NO_SIDE_EFFECTS_ON_IMPORT = false;\r\n// const HAS_SIDE_EFFECTS_ON_IMPORT = true;\r\nconst importSideEffects = Object.freeze({\r\n  react: HAS_NO_SIDE_EFFECTS_ON_IMPORT,\r\n  "react/jsx-dev-runtime": HAS_NO_SIDE_EFFECTS_ON_IMPORT,\r\n});\r\n\r\n// Bundles exporting globals that other modules rely on.\r\nconst knownGlobals = Object.freeze({\r\n  react: "React",\r\n});\r\n\r\n// Determines node_modules packages that are safe to assume will exist.\r\nexport function getDependencies(bundleType, entry) {\r\n  // Replaces any part of the entry that follow the package name (like\r\n  // "/server" in "react-dom/server") by the path to the package settings\r\n  const packageJson = require(entry.replace(/(\\/.*)?$/, "/package.json"));\r\n  // Both deps and peerDeps are assumed as accessible.\r\n  return Array.from(\r\n    new Set([\r\n      ...Object.keys(packageJson.dependencies || {}),\r\n      ...Object.keys(packageJson.peerDependencies || {}),\r\n    ])\r\n  );\r\n}\r\n\r\nexport function getPeerGlobals(externals) {\r\n  const peerGlobals = {};\r\n  if (Array.isArray(externals)) {\r\n    externals.forEach((name) => {\r\n      peerGlobals[name] = knownGlobals[name];\r\n    });\r\n  }\r\n\r\n  return peerGlobals;\r\n}\r\n\r\nexport function getImportSideEffects() {\r\n  return importSideEffects;\r\n}\n'})})}),(0,l.jsx)(o.A,{value:"packaging",label:"packaging.js",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-javascript",metastring:"title='scripts/rollup/packaging.js'",children:'import { existsSync, readdirSync } from "node:fs";\r\n\r\nimport Bundles from "./bundles.js";\r\nimport { asyncCopyTo } from "./utils.js";\r\n\r\nconst { NODE_DEV, NODE_PROD } = Bundles.bundleTypes;\r\n\r\nexport function getPackageName(name) {\r\n  if (name.indexOf("/") !== -1) {\r\n    return name.split("/")[0];\r\n  }\r\n  return name;\r\n}\r\n\r\nexport function getBundleOutputPath(bundleType, filename, packageName) {\r\n  switch (bundleType) {\r\n    case NODE_DEV:\r\n    case NODE_PROD:\r\n      return `build/node_modules/${packageName}/cjs/${filename}`;\r\n  }\r\n}\r\n\r\nasync function prepareNpmPackage(name) {\r\n  await Promise.all([\r\n    asyncCopyTo("LICENSE", `build/node_modules/${name}/LICENSE`),\r\n    asyncCopyTo(\r\n      `packages/${name}/package.json`,\r\n      `build/node_modules/${name}/package.json`\r\n    ),\r\n    asyncCopyTo(\r\n      `packages/${name}/README.md`,\r\n      `build/node_modules/${name}/README.md`\r\n    ),\r\n    asyncCopyTo(`packages/${name}/npm`, `build/node_modules/${name}`),\r\n  ]);\r\n}\r\n\r\nexport async function prepareNpmPackages() {\r\n  if (!existsSync("build/node_modules")) {\r\n    // We didn\'t build any npm packages.\r\n    return;\r\n  }\r\n  const builtPackageFolders = readdirSync("build/node_modules").filter(\r\n    (dir) => dir.charAt(0) !== "."\r\n  );\r\n  await Promise.all(builtPackageFolders.map(prepareNpmPackage));\r\n}\n'})})}),(0,l.jsx)(o.A,{value:"utils",label:"utils.js",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-javascript",metastring:"title='scripts/rollup/utils.js'",children:'import path from "node:path";\r\n\r\nimport { mkdirp } from "mkdirp";\r\nimport NCP from "ncp";\r\n\r\nconst ncp = NCP.ncp;\r\n\r\nexport function asyncCopyTo(from, to) {\r\n  return mkdirp(path.dirname(to)).then(\r\n    () =>\r\n      new Promise((resolve, reject) => {\r\n        ncp(from, to, (error) => {\r\n          if (error) {\r\n            // Wrap to have a useful stack trace.\r\n            reject(new Error(error));\r\n          } else {\r\n            // Wait for copied files to exist; ncp() sometimes completes prematurely.\r\n            // For more detail, see github.com/facebook/react/issues/22323\r\n            // Also github.com/AvianFlu/ncp/issues/127\r\n            setTimeout(resolve, 10);\r\n          }\r\n        });\r\n      })\r\n  );\r\n}\n'})})}),(0,l.jsx)(o.A,{value:"build",label:"build.js",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-javascript",metastring:"title='scripts/rollup/build.js'",children:'"use strict";\r\n\r\nimport { createRequire } from "node:module";\r\n\r\nimport { rimrafSync } from "rimraf";\r\nimport { rollup } from "rollup";\r\nimport typescript from "rollup-plugin-typescript2";\r\n\r\nimport {\r\n  getBundleOutputPath,\r\n  getPackageName,\r\n  prepareNpmPackages,\r\n} from "./packaging.js";\r\nimport {\r\n  getDependencies,\r\n  getImportSideEffects,\r\n  getPeerGlobals,\r\n} from "./modules.js";\r\nimport Bundles, { getFilename } from "./bundles.js";\r\n\r\nconst { NODE_DEV, NODE_PROD } = Bundles.bundleTypes;\r\nconst require = createRequire(import.meta.url);\r\n\r\nfunction getFormat(bundleType) {\r\n  switch (bundleType) {\r\n    case NODE_DEV:\r\n    case NODE_PROD:\r\n      return `cjs`;\r\n  }\r\n}\r\nfunction getPlugins() {\r\n  return [typescript()];\r\n}\r\n\r\nconst getRollupInteropValue = () => {\r\n  return "esModule";\r\n};\r\n\r\nfunction shouldSkipBundle(bundle, bundleType) {\r\n  const shouldSkipBundleType = bundle.bundleTypes.indexOf(bundleType) === -1;\r\n  if (shouldSkipBundleType) {\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction resolveEntryFork(resolvedEntry) {\r\n  return resolvedEntry;\r\n}\r\n\r\nfunction isProductionBundleType(bundleType) {\r\n  switch (bundleType) {\r\n    case NODE_DEV:\r\n      return false;\r\n    case NODE_PROD:\r\n      return true;\r\n    default:\r\n      throw new Error(`Unknown type: ${bundleType}`);\r\n  }\r\n}\r\n\r\nasync function createBundle(bundle, bundleType) {\r\n  const filename = getFilename(bundle, bundleType);\r\n\r\n  const format = getFormat(bundleType);\r\n\r\n  const packageName = getPackageName(bundle.entry);\r\n\r\n  let resolvedEntry = resolveEntryFork(require.resolve(bundle.entry));\r\n\r\n  const peerGlobals = getPeerGlobals(bundle.externals, bundleType);\r\n  let externals = Object.keys(peerGlobals);\r\n\r\n  const deps = getDependencies(bundleType, bundle.entry);\r\n  externals = externals.concat(deps);\r\n\r\n  const importSideEffects = getImportSideEffects();\r\n  const pureExternalModules = Object.keys(importSideEffects).filter(\r\n    (module) => !importSideEffects[module]\r\n  );\r\n\r\n  /**\r\n   * @type {import("rollup").RollupOptions}\r\n   */\r\n  const rollupConfig = {\r\n    input: resolvedEntry,\r\n    treeshake: {\r\n      treeshake: {\r\n        moduleSideEffects: (id, external) =>\r\n          !(external && pureExternalModules.includes(id)),\r\n        propertyReadSideEffects: false,\r\n      },\r\n    },\r\n    external(id) {\r\n      const containsThisModule = (pkg) =>\r\n        id === pkg || id.startsWith(pkg + "/");\r\n      const isProvidedByDependency = externals.some(containsThisModule);\r\n      if (isProvidedByDependency) {\r\n        if (id.indexOf("/src/") !== -1) {\r\n          throw Error(\r\n            "You are trying to import " +\r\n              id +\r\n              " but " +\r\n              externals.find(containsThisModule) +\r\n              " is one of npm dependencies, " +\r\n              "so it will not contain that source file. You probably want " +\r\n              "to create a new bundle entry point for it instead."\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n      return !!peerGlobals[id];\r\n    },\r\n    plugins: getPlugins(),\r\n    onwarn: handleRollupWarning,\r\n    output: {\r\n      externalLiveBindings: false,\r\n      freeze: false,\r\n      interop: getRollupInteropValue,\r\n      esModule: false,\r\n    },\r\n  };\r\n\r\n  const mainOutputPath = getBundleOutputPath(bundleType, filename, packageName);\r\n\r\n  const rollupOutputOptions = getRollupOutputOptions(\r\n    mainOutputPath,\r\n    format,\r\n    peerGlobals,\r\n    bundle.global,\r\n    bundleType\r\n  );\r\n\r\n  try {\r\n    const result = await rollup(rollupConfig);\r\n    await result.write(rollupOutputOptions);\r\n  } catch (error) {\r\n    handleRollupError(error);\r\n  }\r\n}\r\n\r\nfunction getRollupOutputOptions(\r\n  outputPath,\r\n  format,\r\n  globals,\r\n  globalName,\r\n  bundleType\r\n) {\r\n  const isProduction = isProductionBundleType(bundleType);\r\n  /**\r\n   * @return  {import("rollup").RollupOutput}\r\n   */\r\n  return {\r\n    file: outputPath,\r\n    format,\r\n    globals,\r\n    freeze: !isProduction,\r\n    interop: getRollupInteropValue,\r\n    name: globalName,\r\n    sourcemap: false,\r\n    esModule: false,\r\n    exports: "auto",\r\n  };\r\n}\r\n\r\nasync function buildEverything() {\r\n  rimrafSync("build");\r\n\r\n  let bundles = [];\r\n  for (const bundle of Bundles.bundles) {\r\n    bundles.push([bundle, NODE_DEV], [bundle, NODE_PROD]);\r\n  }\r\n\r\n  bundles = bundles.filter(([bundle, bundleType]) => {\r\n    return !shouldSkipBundle(bundle, bundleType);\r\n  });\r\n\r\n  for (const [bundle, bundleType] of bundles) {\r\n    await createBundle(bundle, bundleType);\r\n  }\r\n\r\n  await prepareNpmPackages();\r\n}\r\n\r\nfunction handleRollupWarning(warning) {\r\n  if (warning.code === "UNUSED_EXTERNAL_IMPORT") {\r\n    const match = warning.message.match(/external module \'([^\']+)\'/);\r\n    if (!match || typeof match[1] !== "string") {\r\n      throw new Error(\r\n        "Could not parse a Rollup warning. " + "Fix this method."\r\n      );\r\n    }\r\n    const importSideEffects = getImportSideEffects();\r\n    const externalModule = match[1];\r\n    if (typeof importSideEffects[externalModule] !== "boolean") {\r\n      throw new Error(\r\n        \'An external module "\' +\r\n          externalModule +\r\n          \'" is used in a DEV-only code path \' +\r\n          "but we do not know if it is safe to omit an unused require() to it in production. " +\r\n          "Please add it to the `importSideEffects` list in `scripts/rollup/modules.js`."\r\n      );\r\n    }\r\n    // Don\'t warn. We will remove side effectless require() in a later pass.\r\n    return;\r\n  }\r\n\r\n  if (warning.code === "CIRCULAR_DEPENDENCY") {\r\n    // Ignored\r\n  } else if (typeof warning.code === "string") {\r\n    // This is a warning coming from Rollup itself.\r\n    // These tend to be important (e.g. clashes in namespaced exports)\r\n    // so we\'ll fail the build on any of them.\r\n    console.error();\r\n    console.error(warning.message || warning);\r\n    console.error();\r\n    process.exit(1);\r\n  } else {\r\n    // The warning is from one of the plugins.\r\n    // Maybe it\'s not important, so just print it.\r\n    console.warn(warning.message || warning);\r\n  }\r\n}\r\n\r\nfunction handleRollupError(error) {\r\n  if (!error.code) {\r\n    console.error(error);\r\n    return;\r\n  }\r\n  console.error(\r\n    `\\x1b[31m-- ${error.code}${error.plugin ? ` (${error.plugin})` : ""} --`\r\n  );\r\n  console.error(error.stack);\r\n  if (error.codeFrame) {\r\n    // This looks like an error from a plugin (e.g. Babel).\r\n    // In this case we\'ll resort to displaying the provided code frame\r\n    // because we can\'t be sure the reported location is accurate.\r\n    console.error(error.codeFrame);\r\n  }\r\n}\r\n\r\nbuildEverything();\n'})})})]}),"\n",(0,l.jsx)(r.h2,{id:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784",children:"\u8f93\u51fa\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"build/node_modules\r\n\u2514\u2500\u2500 react\r\n    \u2514\u2500\u2500 cjs\r\n        \u2514\u2500\u2500 react-jsx-dev-runtime.development.js\r\n        \u2514\u2500\u2500 react-jsx-dev-runtime.production.js\r\n        \u2514\u2500\u2500 react-jsx-runtime.development.js\r\n        \u2514\u2500\u2500 react-jsx-runtime.production.js\r\n        \u2514\u2500\u2500 react.development.js\r\n        \u2514\u2500\u2500 react.production.js\r\n    \u2514\u2500\u2500 index.js\r\n    \u2514\u2500\u2500 js-dev-runtime.js\r\n    \u2514\u2500\u2500 js-runtime.js\r\n    \u2514\u2500\u2500 LICENSE\r\n    \u2514\u2500\u2500 package.json\r\n    \u2514\u2500\u2500 README.md\r\n\n"})}),"\n",(0,l.jsx)(r.h2,{id:"\u5f00\u53d1\u8c03\u8bd5",children:"\u5f00\u53d1\u8c03\u8bd5"}),"\n",(0,l.jsxs)(r.p,{children:["\u4f7f\u7528",(0,l.jsx)(r.code,{children:"create-react-app"}),"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002"]}),"\n",(0,l.jsx)(s.A,{children:(0,l.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"pnpm link react/build/node_modules/react\r\n\r\n// \u89e3\u9664\u94fe\u63a5\u540e\uff0cpnpm \u4e0d\u4f1a\u81ea\u52a8\u5220\u9664\u5b9e\u9645\u7684\u4f9d\u8d56\u5305\u6216\u76ee\u5f55\uff0c\u53ea\u662f\u79fb\u9664\u4e86\u7b26\u53f7\u94fe\u63a5\uff0c\u6062\u590d\u6b63\u5e38\u7684\u5305\u7ba1\u7406\u65b9\u5f0f\u3002\r\n// \u5982\u679c\u9700\u8981\u5b8c\u5168\u6e05\u9664\u5305\u7684\u4f9d\u8d56\uff0c\u53ef\u4ee5\u4f7f\u7528 pnpm install \u6216\u8005\u624b\u52a8\u5220\u9664\u76f8\u5173\u7684\u4f9d\u8d56\u3002\r\npnpm unlink react/build/node_modules/react\n"})})})})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},5003:(e,r,n)=>{n.d(r,{A:()=>s});n(9474);var t=n(3526);const l={tabItem:"tabItem_OISS"};var a=n(3274);function s(e){let{children:r,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,s),hidden:n,children:r})}},9018:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(9474),l=n(3526),a=n(8487),s=n(241),o=n(6383),i=n(6360),u=n(5977),c=n(1997);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:l}}=e;return{value:r,label:n,attributes:t,default:l}}))}(n);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function m(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const l=(0,s.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(l.location.search);r.set(a,e),l.replace({...l.location,search:r.toString()})}),[a,l])]}function h(e){const{defaultValue:r,queryString:n=!1,groupId:l}=e,a=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[u,d]=f({queryString:n,groupId:l}),[h,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,a]=(0,c.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),g=(()=>{const e=u??h;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2253);const g={tabList:"tabList_AtNv",tabItem:"tabItem_tTMb"};var y=n(3274);function x(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const r=e.currentTarget,n=i.indexOf(r),l=o[n].value;l!==t&&(u(r),s(l))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function E(e){const r=h(e);return(0,y.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...r,...e}),(0,y.jsx)(j,{...r,...e})]})}function v(e){const r=(0,b.A)();return(0,y.jsx)(E,{...e,children:d(e.children)},String(r))}},8438:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(9474);const l={},a=t.createContext(l);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);