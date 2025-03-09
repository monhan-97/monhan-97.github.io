"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[1360],{1630:(e,n,r)=>{r.d(n,{A:()=>l});r(8101);var s=r(3526);const t={tabItem:"tabItem_H_fW"};var a=r(5105);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:r,children:n})}},3881:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(8101);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}},3922:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(8101),t=r(3526),a=r(7372),l=r(5234),c=r(6366),i=r(4345),o=r(1590),d=r(1712);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,u]=j({queryString:r,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),f=(()=>{const e=o??x;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(1702);const f={tabList:"tabList__nVm",tabItem:"tabItem_QOTQ"};var g=r(5105);function b(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=c[r].value;t!==s&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{i.push(e)},onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},4617:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"learn-react-source/jsx","title":"\u5b9e\u73b0 JSX","description":"- \u6e90\u7801\u76ee\u5f55\u7ed3\u6784\u5206\u6790","source":"@site/docs/learn-react-source/jsx.mdx","sourceDirName":"learn-react-source","slug":"/learn-react-source/jsx","permalink":"/docs/learn-react-source/jsx","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\u9ec4\u68a6\u6c49","lastUpdatedAt":1736338532000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u9879\u76ee\u6846\u67b6\u642d\u5efa","permalink":"/docs/learn-react-source/setup"},"next":{"title":"\u6253\u5305\u6784\u5efa","permalink":"/docs/learn-react-source/build"}}');var t=r(5105),a=r(3881),l=r(3922),c=r(1630);const i={},o="\u5b9e\u73b0 JSX",d={},u=[{value:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784",id:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784",level:2},{value:"JSX \u4ecb\u7ecd",id:"jsx-\u4ecb\u7ecd",level:2},{value:"\u521d\u59cb\u5316 react",id:"\u521d\u59cb\u5316-react",level:2},{value:"react \u76ee\u5f55\u7ed3\u6784",id:"react-\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u5b9e\u73b0 JSX \u65b9\u6cd5",id:"\u5b9e\u73b0-jsx-\u65b9\u6cd5",level:2},{value:"\u521b\u5efa share \u76ee\u5f55",id:"\u521b\u5efa-share-\u76ee\u5f55",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5b9e\u73b0-jsx",children:"\u5b9e\u73b0 JSX"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784\u5206\u6790"}),"\n",(0,t.jsx)(n.li,{children:"\u5b9e\u73b0 JSX \u65b9\u6cd5`"}),"\n",(0,t.jsxs)(n.li,{children:["\u76f8\u5173\u4ee3\u7801\u53ef\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/monhan-97/react/tree/1.1",children:"git tag v1.1"})," \u67e5\u770b"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784",children:"\u6e90\u7801\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"React"}),"\u4f7f\u7528\u7684\u662f ",(0,t.jsx)(n.a,{href:"/docs/learn-react-source/setup",children:(0,t.jsx)(n.code,{children:"Mono-repo"})})," \u7684\u7ed3\u6784\u7ba1\u7406\u5404\u4e2a\u5305\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6e90\u7801\u4e3b\u8981\u5305\u62ec\u5982\u4e0b\u90e8\u5206:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fixtures"}),": \u6d4b\u8bd5\u7528\u4f8b"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"packages"}),": \u4e3b\u8981\u90e8\u5206\uff0c\u5305\u542b ",(0,t.jsx)(n.code,{children:"scheduler"}),",",(0,t.jsx)(n.code,{children:"reconciler"})," \u7b49\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"scripts"}),": ",(0,t.jsx)(n.code,{children:"react"})," \u6784\u5efa\u76f8\u5173\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u4e3b\u8981\u7684\u5305\u5728 ",(0,t.jsx)(n.code,{children:"packages \u76ee\u5f55\u4e0b"}),"\uff0c\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u6a21\u5757\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react"}),": \u6838\u5fc3 Api \u6240\u5728\uff0c\u5982 React.createElement\u3001React.Component"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-reconclier"}),": \u534f\u8c03\u5668, \u5728 ",(0,t.jsx)(n.code,{children:"render"})," \u9636\u6bb5\u7528\u6765\u6784\u5efa ",(0,t.jsx)(n.code,{children:"fiber"})," \u8282\u70b9\uff0c\u548c\u5bbf\u4e3b\u73af\u5883\u65e0\u5173"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"scheduler"}),": \u8c03\u5ea6\u5668\u76f8\u5173"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-server"}),": ssr \u76f8\u5173"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-interactions"}),": \u548c\u4e8b\u4ef6\u5982\u70b9\u51fb\u4e8b\u4ef6\u76f8\u5173"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5404\u79cd\u5bbf\u4e3b\u73af\u5883\u7684\u5305:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"react-dom: \u6d4f\u89c8\u5668\u73af\u5883"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-native-renderer"}),":\u539f\u751f\u73af\u5883"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-art"}),": canvas & svg \u6e32\u67d3"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-noop-renderer"}),": \u8c03\u8bd5\u6216 fiber \u7528"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8f85\u52a9\u5305:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"shared"}),": \u516c\u7528\u8f85\u52a9\u65b9\u6cd5\uff0c\u5bbf\u4e3b\u73af\u5883\u65e0\u5173"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-is"})," : \u5224\u65ad\u7c7b\u578b"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-client"}),": \u6d41\u76f8\u5173"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-fetch"}),": \u6570\u636e\u8bf7\u6c42\u76f8\u5173"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"react-refresh"}),": \u70ed\u52a0\u8f7d\u76f8\u5173"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"jsx-\u4ecb\u7ecd",children:"JSX \u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"React"}),"\u4e2d\u4f7f\u7528",(0,t.jsx)(n.code,{children:"JSX"}),"\u8bed\u6cd5\u63cf\u8ff0\u7528\u6237\u754c\u9762\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"JSX"})," \u8bed\u6cd5\u5c31\u662f\u4e00\u79cd\u8bed\u6cd5\u7cd6\uff0c\u662f \u4e00\u79cd ",(0,t.jsx)(n.code,{children:"JavaScript"})," \u8bed\u6cd5\u6269\u5c55\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u8005\u5728 ",(0,t.jsx)(n.code,{children:"JavaScript"})," \u4ee3\u7801\u4e2d\u76f4\u63a5\u7f16\u5199\u7c7b\u4f3c ",(0,t.jsx)(n.code,{children:"HTML"})," \u7684\u4ee3\u7801\uff0c\u5e76\u5728\u8fd0\u884c\u65f6\u5c06\u5176\u8f6c\u6362\u4e3a React \u5143\u7d20\u3002"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(c.A,{value:"JSX\u6e90\u4ee3\u7801",label:"JSX\u6e90\u4ee3\u7801",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// JSX \u6e90\u4ee3\u7801\nimport React from "react";\n\nfunction App() {\n  return <h1>Hello World</h1>;\n}\n'})})}),(0,t.jsx)(c.A,{value:"JSX\u8f6c\u6362\u7ed3\u679c",label:"JSX\u8f6c\u6362\u7ed3\u679c",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// React 17\u4e4b\u524d\uff0cJSX \u8f6c\u6362\u7ed3\u679c\nimport React from "react";\n\nfunction App() {\n  return React.createElement("div", null, "Hello world!");\n}\n\n// React 17\u4e4b\u540e\uff0cJSX \u8f6c\u6362\u7ed3\u679c\nimport { jsx as _jsx } from "react/jsx-runtime";\n\nfunction App() {\n  return _jsx("div", { children: "Hello world!" });\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"JSX"})," \u8f6c\u6362\u7684\u8fc7\u7a0b\u5927\u81f4\u5206\u4e3a\u4e24\u6b65:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7f16\u8bd1\u65f6"}),"\uff1a\u7531 ",(0,t.jsx)(n.code,{children:"Babel"})," \u7f16\u8bd1\u5b9e\u73b0, ",(0,t.jsx)(n.code,{children:"Babel"})," \u4f1a\u5c06 ",(0,t.jsx)(n.code,{children:"JSX"})," \u8bed\u6cd5\u8f6c\u6362\u4e3a\u6807\u51c6\u7684 ",(0,t.jsx)(n.code,{children:"JavaScript"})," API;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6"}),"\uff1a\u7531 ",(0,t.jsx)(n.code,{children:"React"})," \u5b9e\u73b0,",(0,t.jsx)(n.code,{children:"jsx"})," \u65b9\u6cd5 \u548c ",(0,t.jsx)(n.code,{children:"React.createElement"})," \u65b9\u6cd5;"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5b9e\u73b0\u8fd0\u884c\u65f6\u7684\u90e8\u5206\u5373\u53ef\uff0c\u5373 ",(0,t.jsx)(n.code,{children:"jsx"})," \u65b9\u6cd5\u548c ",(0,t.jsx)(n.code,{children:"React.createElement"})," \u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u521d\u59cb\u5316-react",children:"\u521d\u59cb\u5316 react"}),"\n",(0,t.jsxs)(n.p,{children:["\u5148\u5728",(0,t.jsx)(n.code,{children:"packages"}),"\u76ee\u5f55, \u65b0\u5efa ",(0,t.jsx)(n.code,{children:"react"})," \u6587\u4ef6\u5939\u3002\u6267\u884c ",(0,t.jsx)(n.code,{children:"yarn init"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/react\n\nyarn init\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"package.json"})," \u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"title='package/react/package.json'",children:'{\n  "name": "react",\n  "version": "1.0.0",\n  "description": "React is a JavaScript library for building user interfaces.",\n  "main": "index.js",\n  "keywords": [],\n  "author": "",\n  "exports": {\n    ".": {\n      "default": "./index.js"\n    },\n    "./package.json": "./package.json",\n    "./jsx-runtime": "./jsx-runtime.js",\n    "./jsx-dev-runtime": "./jsx-dev-runtime.js",\n    "./src/*": "./src/*"\n  },\n  "license": "ISC"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"react-\u76ee\u5f55\u7ed3\u6784",children:"react \u76ee\u5f55\u7ed3\u6784"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u53c2\u8003 ",(0,t.jsx)(n.code,{children:"React"})," \u5b98\u65b9\u7684\u76ee\u5f55\u7ed3\u6784\u3002\u57fa\u672c\u76ee\u5f55\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"react\n\u2514\u2500\u2500 npm\n    \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 jsx-dev-runtime.js\n    \u2514\u2500\u2500 jsx-runtime.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 jsx\n        \u2514\u2500\u2500 ReactJSXElement.js\n    \u2514\u2500\u2500 React.ts\n\u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 jsx-dev-runtime.js\n\u2514\u2500\u2500 jsx-runtime.js\n\u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 README.md\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u73b0-jsx-\u65b9\u6cd5",children:"\u5b9e\u73b0 JSX \u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"$$typeof"}),": \u8fd9\u4e2a\u5b57\u6bb5\u53ef\u4ee5\u7528\u6765\u6807\u8bb0\u662f\u5426\u662f React \u5143\u7d20\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"type"}),": \u7528\u6765\u8868\u793a React \u5143\u7d20\u6216\u8005\u7ec4\u4ef6\u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(c.A,{value:"ReactJSXElement.js",label:"ReactJSXElement.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:"title='packages/react/src/jsx/ReactJSXElement.js'",children:'import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";\n\nfunction getOwner() {\n  return null;\n}\n\nfunction hasValidKey(config) {\n  return config.key !== undefined;\n}\n\n/**\n * \u521b\u5efa\u65b0\u7684 React \u5143\u7d20\u7684\u5de5\u5382\u65b9\u6cd5.\n * \u8fd9\u4e2a\u51fd\u6570\u4e0d\u518d\u9075\u5b88\u7c7b\u6a21\u5f0f, \u6240\u4ee5\u4e0d\u8981\u4f7f\u7528new\u6765\u8c03\u7528\u5b83\u3002\n * \u53e6\u5916\uff0cinstanceof \u68c0\u67e5\u4e0d\u4f1a\u5de5\u4f5c.\n * \u6839\u636e Symbol.for(\'react.element\') \u6d4b\u8bd5 $$typeof \u5b57\u6bb5\u6765\u68c0\u67e5\u662f\u5426\u662f React \u5143\u7d20\n *\n * @param {*} type\n * @param {*} props\n * @param {*} key\n * @param {string|object} ref\n * @param {*} owner\n * @param {*} self A *temporary* helper to detect places where `this` is\n * different from the `owner` when React.createElement is called, so that we\n * can warn. We want to get rid of owner and replace string `ref`s with arrow\n * functions, and as long as `this` and owner are the same, there will be no\n * change in behavior.\n * @param {*} source An annotation object (added by a transpiler or otherwise)\n * indicating filename, line number, and/or other information.\n * @internal\n */\nfunction ReactElement(type, key, self, source, owner, props) {\n  // Ignore whatever was passed as the ref argument and treat `props.ref` as\n  // the source of truth. The only thing we use this for is `element.ref`,\n  // which will log a deprecation warning on access. In the next release, we\n  // can remove `element.ref` as well as the `ref` argument.\n  const refProp = props.ref;\n\n  // An undefined `element.ref` is coerced to `null` for\n  // backwards compatibility.\n  const ref = refProp !== undefined ? refProp : null;\n\n  // In prod, `ref` is a regular property and _owner doesn\'t exist.\n  let element = {\n    // This tag allows us to uniquely identify this as a React Element\n    $$typeof: REACT_ELEMENT_TYPE,\n\n    // Built-in properties that belong on the element\n    type,\n    key,\n    ref,\n\n    props,\n  };\n\n  return element;\n}\n\n/**\n * https://github.com/reactjs/rfcs/pull/107\n * @param {*} type\n * @param {object} props\n * @param {string} key\n */\nexport function jsx(type, config, maybeKey) {\n  let key = null;\n\n  // Currently, key can be spread in as a prop. This causes a potential\n  // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />\n  // or <div key="Hi" {...props} /> ). We want to deprecate key spread,\n  // but as an intermediary step, we will use jsxDEV for everything except\n  // <div {...props} key="Hi" />, because we aren\'t currently able to tell if\n  // key is explicitly declared to be undefined or not.\n  if (maybeKey !== undefined) {\n    key = "" + maybeKey;\n  }\n\n  if (hasValidKey(config)) {\n    key = "" + config.key;\n  }\n\n  let props;\n  if (!("key" in config)) {\n    // If key was not spread in, we can reuse the original props object. This\n    // only works for `jsx`, not `createElement`, because `jsx` is a compiler\n    // target and the compiler always passes a new object. For `createElement`,\n    // we can\'t assume a new object is passed every time because it can be\n    // called manually.\n    //\n    // Spreading key is a warning in dev. In a future release, we will not\n    // remove a spread key from the props object. (But we\'ll still warn.) We\'ll\n    // always pass the object straight through.\n    props = config;\n  } else {\n    // We need to remove reserved props (key, prop, ref). Create a fresh props\n    // object and copy over all the non-reserved props. We don\'t use `delete`\n    // because in V8 it will deopt the object to dictionary mode.\n    props = {};\n    for (const propName in config) {\n      // Skip over reserved prop names\n      if (propName !== "key") {\n        props[propName] = config[propName];\n      }\n    }\n  }\n\n  return ReactElement(\n    type,\n    key,\n    undefined,\n    undefined,\n    getOwner(),\n    props,\n    undefined,\n    undefined\n  );\n}\n'})})}),(0,t.jsx)(c.A,{value:"jsx-runtime.js",label:"jsx-runtime.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:"title='packages/react/jsx-runtime.js'",children:'export { jsx } from "./src/jsx/ReactJSXElement";\n'})})}),(0,t.jsx)(c.A,{value:"jsx-dev-runtime.js",label:"jsx-dev-runtime.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:"title='packages/react/jsx-dev-runtime.js'",children:'export { jsx as jsxDEV } from "./src/jsx/ReactJSXElement";\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efa-share-\u76ee\u5f55",children:"\u521b\u5efa share \u76ee\u5f55"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5148\u5728",(0,t.jsx)(n.code,{children:"packages"}),"\u76ee\u5f55, \u65b0\u5efa ",(0,t.jsx)(n.code,{children:"shared"})," \u6587\u4ef6\u5939\u3002\u6267\u884c ",(0,t.jsx)(n.code,{children:"yarn init"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/shared\n\nyarn init\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"shared"})," \u5305\u4e0d\u9700\u8981\u5165\u53e3\u6587\u4ef6\uff0c\u56e0\u4e3a\u5b83\u91cc\u9762\u7684\u6240\u6709\u65b9\u6cd5\u90fd\u4f1a\u76f4\u63a5\u5728\u5176\u4ed6\u5305\u91cc\u9762\u88ab\u5f15\u7528\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(c.A,{value:"package.json",label:"package.json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"title='packages/shared/package.json'",children:'{\n  "private": true,\n  "name": "shared",\n  "version": "0.0.0"\n}\n'})})}),(0,t.jsx)(c.A,{value:"ReactSymbols.ts",label:"ReactSymbols.ts",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:"title='packages/shared/ReactSymbols.ts'",children:'import { renameElementSymbol } from "shared/ReactFeatureFlag";\n\nexport const REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");\n\n// The Symbol used to tag the ReactElement-like types.\nexport const REACT_ELEMENT_TYPE = renameElementSymbol\n  ? Symbol.for("react.transitional.element")\n  : REACT_LEGACY_ELEMENT_TYPE;\n'})})}),(0,t.jsx)(c.A,{value:"hasOwnProperty.ts",label:"ReactFeatureFlag.ts",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:"title='packages/shared/ReactFeatureFlag.ts'",children:"// Renames the internal symbol for elements since they have changed signature/constructor\nexport const renameElementSymbol = true;\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);