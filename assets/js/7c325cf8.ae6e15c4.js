"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[9012],{3881:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var c=s(8101);const l={},a=c.createContext(l);function o(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),c.createElement(a.Provider,{value:n},e.children)}},6299:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"Javascript/collection-reference-types/map","title":"Map","description":"Map \u662f\u4e00\u79cd\u65b0\u7684\u96c6\u5408\u7c7b\u578b,\u53ef\u4ee5\u7528\u6765\u5b58\u50a8 \u952e\u503c\u5bf9, \u5e76\u4e14\u80fd\u591f\u8bb0\u4f4f\u952e\u7684\u539f\u59cb\u63d2\u5165\u987a\u5e8f\u3002","source":"@site/docs/Javascript/collection-reference-types/map.mdx","sourceDirName":"Javascript/collection-reference-types","slug":"/Javascript/collection-reference-types/map","permalink":"/docs/Javascript/collection-reference-types/map","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1742486207000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Array","permalink":"/docs/Javascript/collection-reference-types/array"},"next":{"title":"WeakMap","permalink":"/docs/Javascript/collection-reference-types/weak-map"}}');var l=s(5105),a=s(3881);const o={},r="Map",i={},d=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u5d4c\u5957\u6570\u7ec4",id:"\u5d4c\u5957\u6570\u7ec4",level:3},{value:"\u590d\u5236 Maps",id:"\u590d\u5236-maps",level:3},{value:"\u5408\u5e76 Maps",id:"\u5408\u5e76-maps",level:3},{value:"\u57fa\u672c API",id:"\u57fa\u672c-api",level:2},{value:"\u987a\u5e8f\u4e0e\u8fed\u4ee3",id:"\u987a\u5e8f\u4e0e\u8fed\u4ee3",level:2},{value:"Map \u548c Object \u7684\u533a\u522b",id:"map-\u548c-object-\u7684\u533a\u522b",level:2},{value:"\u5185\u5b58\u5360\u7528",id:"\u5185\u5b58\u5360\u7528",level:3},{value:"\u63d2\u5165\u6027\u80fd",id:"\u63d2\u5165\u6027\u80fd",level:3},{value:"\u5220\u9664\u6027\u80fd",id:"\u5220\u9664\u6027\u80fd",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"map",children:"Map"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Map"})," \u662f\u4e00\u79cd\u65b0\u7684\u96c6\u5408\u7c7b\u578b,\u53ef\u4ee5\u7528\u6765\u5b58\u50a8 ",(0,l.jsx)(n.strong,{children:"\u952e\u503c\u5bf9"}),", \u5e76\u4e14\u80fd\u591f\u8bb0\u4f4f\u952e\u7684",(0,l.jsx)(n.strong,{children:"\u539f\u59cb\u63d2\u5165\u987a\u5e8f"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Map"})," \u4e2d\u7684 ",(0,l.jsx)(n.strong,{children:"\u4e00\u4e2a\u952e\u53ea\u80fd\u51fa\u73b0\u4e00\u6b21"}),"; \u5b83\u5728 ",(0,l.jsx)(n.code,{children:"Map"})," \u7684\u96c6\u5408\u4e2d\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u5728\u521b\u5efa\u7684\u65f6\u5019",(0,l.jsx)(n.strong,{children:"\u521d\u59cb\u5316\u5b9e\u4f8b"})," , \u53ef\u4ee5\u7ed9 ",(0,l.jsx)(n.code,{children:"Map"})," \u6784\u9020\u51fd\u6570 \u4f20\u5165\u4e00\u4e2a ",(0,l.jsx)(n.strong,{children:"Array"})," \u6216\u8005",(0,l.jsx)(n.strong,{children:"\u53ef\u8fed\u4ee3\u5bf9\u8c61"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const map = new Map();\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5d4c\u5957\u6570\u7ec4",children:"\u5d4c\u5957\u6570\u7ec4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const map = new Map([\n  [1, "one"],\n  [2, "two"],\n  [3, "three"],\n]);\n\nconsole.log(map.get(1)); //one\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u590d\u5236-maps",children:"\u590d\u5236 Maps"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const original = new Map([[1, "one"]]);\n\nconst clone = new Map(original);\n\nconsole.log(clone.get(1)); // one\nconsole.log(original === clone); // false \u56e0\u4e3a\u662f\u4e0d\u540c\u5bf9\u8c61\u7684\u5f15\u7528\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5408\u5e76-maps",children:"\u5408\u5e76 Maps"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const first = new Map([\n  [1, "one"],\n  [2, "two"],\n  [3, "three"],\n]);\n\nconst second = new Map([\n  [1, "uno"],\n  [2, "dos"],\n]);\n\n// \u5408\u5e76\u4e24\u4e2a Map \u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u6709\u91cd\u590d\u7684\u952e\u503c\uff0c\u5219\u540e\u9762\u7684\u4f1a\u8986\u76d6\u524d\u9762\u7684\u3002\n// \u5c55\u5f00\u8bed\u6cd5\u672c\u8d28\u4e0a\u662f\u5c06 Map \u5bf9\u8c61\u8f6c\u6362\u6210\u6570\u7ec4\u3002\nconst merged = new Map([...first, ...second]);\n\nconsole.log(merged.get(1)); // uno\nconsole.log(merged.get(2)); // dos\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u57fa\u672c-api",children:"\u57fa\u672c API"}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"set()"})," \u5728\u6dfb\u52a0 ",(0,l.jsx)(n.strong,{children:"\u952e\u503c\u5bf9"}),"\u3002 ",(0,l.jsx)(n.code,{children:"set()"})," \u65b9\u6cd5\u8fd4\u56de ",(0,l.jsx)(n.code,{children:"Map"})," \u5b9e\u4f8b, \u56e0\u6b64 \u53ef\u4ee5\u628a \u591a\u4e2a\u64cd\u4f5c ",(0,l.jsx)(n.strong,{children:"\u8fde\u63a5"})," \u8d77\u6765\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"get()"}),"\u548c ",(0,l.jsx)(n.code,{children:"has()"})," \u8fdb\u884c\u67e5\u8be2\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"size"})," \u5c5e\u6027\u83b7\u53d6 ",(0,l.jsx)(n.code,{children:"Map"}),"\u4e2d",(0,l.jsx)(n.strong,{children:"\u952e\u503c\u5bf9"}),"\u7684\u6570\u91cf\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"delete()"}),"\u548c ",(0,l.jsx)(n.code,{children:"clear()"})," \u5220\u9664\u503c\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const map = new Map();\n\nconsole.log(map.has("firstName")); // false\nconsole.log(map.get("firstName")); // undefined\nconsole.log(map.size); // 0\n\nmap.set("firstName", "Matt").set("lastName", "Frisbie");\n\nconsole.log(map.has("firstName")); // true\nconsole.log(map.get("firstName")); // Matt\nconsole.log(map.size); // 2\n\nmap.delete("firstName");\n\nconsole.log(map.has("firstName")); // false\nconsole.log(map.has("lastName")); // Frisbie\nconsole.log(map.size); // 1\n\nmap.clear();\n\nconsole.log(map.has("firstName")); // false\nconsole.log(map.has("lastName")); // Frisfalsebie\nconsole.log(map.size); // 0\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Map"})," \u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55 ",(0,l.jsx)(n.strong,{children:"Javascript"})," \u6570\u636e\u7c7b\u578b \u4f5c\u4e3a ",(0,l.jsx)(n.strong,{children:"\u952e"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u57fa\u672c\u4e0a\u76f8\u5f53\u4e8e\u4f7f\u7528 ",(0,l.jsx)(n.strong,{children:"\u4e25\u683c\u5bf9\u8c61\u76f8\u7b49"})," \u7684\u6807\u51c6\u68c0\u67e5 ",(0,l.jsx)(n.strong,{children:"\u952e"})," \u7684\u5339\u914d\u6027\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const map = new Map();\n\nconst functionKey = () => {};\nconst symbolKey = Symbol();\nconst objectKey = {};\n\nmap.set(functionKey, "functionValue");\nmap.set(symbolKey, "symbolValue");\nmap.set(objectKey, "objectValue");\n\nconsole.log(map.get(functionKey)); // functionValue\nconsole.log(map.get(symbolKey)); // symbolValue\nconsole.log(map.get(objectKey)); // objectValue\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u987a\u5e8f\u4e0e\u8fed\u4ee3",children:"\u987a\u5e8f\u4e0e\u8fed\u4ee3"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Map"})," \u5b9e\u4f8b\u4f1a\u7ef4\u62a4 ",(0,l.jsx)(n.strong,{children:"\u952e\u503c\u5bf9"})," \u7684\u63d2\u5165\u987a\u5e8f, \u56e0\u6b64\u53ef\u4ee5\u6839\u636e ",(0,l.jsx)(n.strong,{children:"\u63d2\u5165\u987a\u5e8f"})," \u6267\u884c\u8fed\u4ee3\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const map = new Map([\n  ["key1", "value1"],\n  ["key2", "value2"],\n  ["key3", "value3"],\n]);\n\nfor (const [key, value] of map.entries()) {\n  console.log(key, value);\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"entries()"})," \u662f\u9ed8\u8ba4\u8fed\u4ee3\u5668, \u56e0\u4e3a",(0,l.jsx)(n.code,{children:"map.entries"})," \u5168\u7b49 ",(0,l.jsx)(n.code,{children:"map[Symbol.iterator]"})," \u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u5bf9 ",(0,l.jsx)(n.code,{children:"Map"})," \u8fdb\u884c\u6269\u5c55\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u628a ",(0,l.jsx)(n.code,{children:"Map"})," \u8f6c\u6362\u6210\u6570\u7ec4:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const map = new Map([\n  ["key1", "value1"],\n  ["key2", "value2"],\n  ["key3", "value3"],\n]);\n\nconsole.log([...map]); // [["key1", "value1"],["key2", "value2"],["key3", "value3"]]\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u8c03\u7528",(0,l.jsx)(n.code,{children:"Map"}),"\u5b9e\u4f8b\u7684",(0,l.jsx)(n.code,{children:"forEach()"}),"\u65b9\u6cd5,\u4e00\u6b21\u8fed\u4ee3\u6bcf\u4e2a",(0,l.jsx)(n.strong,{children:"\u952e\u503c\u5bf9"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'const map = new Map([\n  ["key1", "value1"],\n  ["key2", "value2"],\n  ["key3", "value3"],\n]);\n\nmap.forEach((value, key) => {\n  console.log(value, key);\n});\n\n// value1  key1\n// value2  key2\n// value3  key3\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"keys()"}),"\u548c",(0,l.jsx)(n.code,{children:"values()"}),"\u5206\u522b\u8fd4\u56de\u63d2\u5165\u987a\u5e8f\u751f\u6210",(0,l.jsx)(n.code,{children:"\u952e"}),"\u548c",(0,l.jsx)(n.code,{children:"\u503c"}),"\u7684\u8fed\u4ee3\u5668"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const map = new Map([\n  [\"key1\", \"value1\"],\n  [\"key2\", \"value2\"],\n  [\"key3\", \"value3\"],\n]);\n\nconsole.log(Array.from(map.keys())); // ['key1','key2','key3']\nconsole.log(Array.from(map.values())); // ['value1','value2','value3']\n"})}),"\n",(0,l.jsx)(n.h2,{id:"map-\u548c-object-\u7684\u533a\u522b",children:"Map \u548c Object \u7684\u533a\u522b"}),"\n",(0,l.jsx)(n.h3,{id:"\u5185\u5b58\u5360\u7528",children:"\u5185\u5b58\u5360\u7528"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Map"})," \u5927\u7ea6\u53ef\u4ee5\u6bd4 ",(0,l.jsx)(n.code,{children:"Object"})," \u591a\u5b58\u50a8 ",(0,l.jsx)(n.strong,{children:"50%"})," \u7684 ",(0,l.jsx)(n.strong,{children:"\u952e\u503c\u5bf9"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u63d2\u5165\u6027\u80fd",children:"\u63d2\u5165\u6027\u80fd"}),"\n",(0,l.jsxs)(n.p,{children:["\u6d89\u53ca\u5230 ",(0,l.jsx)(n.strong,{children:"\u5927\u91cf"})," \u63d2\u5165\u64cd\u4f5c ",(0,l.jsx)(n.code,{children:"Map"}),"\u7684\u6027\u80fd\u4f1a\u6bd4",(0,l.jsx)(n.code,{children:"Object"}),"\u66f4\u597d\u4e00\u70b9\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664\u6027\u80fd",children:"\u5220\u9664\u6027\u80fd"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"delete"})," \u5173\u952e\u5b57\u5220\u9664\u5c5e\u6027\u7684\u6027\u80fd\u4e00\u76f4\u9971\u53d7\u8bdf\u75c5\u3002\u6240\u4ee5\u51fa\u73b0\u4e86\u4e00\u4e9b\u628a\u5c5e\u6027\u503c\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(n.code,{children:"null"})," \u548c ",(0,l.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6d89\u53ca\u5230 ",(0,l.jsx)(n.strong,{children:"\u5927\u91cf"})," \u5220\u9664\u64cd\u4f5c ",(0,l.jsx)(n.code,{children:"Map"})," , ",(0,l.jsx)(n.code,{children:"Map"})," \u7684\u6027\u80fd\u4f1a\u6bd4 ",(0,l.jsx)(n.code,{children:"Object"})," \u66f4\u597d\u4e00\u70b9\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}}}]);