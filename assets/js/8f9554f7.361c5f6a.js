"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[7701],{2407:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"Javascript/basic-reference-types/date","title":"\u65e5\u671f","description":"\u8981\u521b\u5efa\u65e5\u671f\u5bf9\u8c61,\u4f7f\u7528new\u64cd\u4f5c\u7b26\u6765\u8c03\u7528 Date \u6784\u9020\u51fd\u6570","source":"@site/docs/Javascript/basic-reference-types/date.mdx","sourceDirName":"Javascript/basic-reference-types","slug":"/Javascript/basic-reference-types/date","permalink":"/docs/Javascript/basic-reference-types/date","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1730050949000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5783\u573e\u56de\u6536","permalink":"/docs/Javascript/scope/garbage-collection"},"next":{"title":"\u8ba1\u7b97\u673a\u7f51\u7edc","permalink":"/docs/computer-network"}}');var c=s(3274),d=s(8438);const l={},i="\u65e5\u671f",a={},t=[{value:"Date.parse",id:"dateparse",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"Date.UTC",id:"dateutc",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",level:3},{value:"Date.now",id:"datenow",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u65e5\u671f",children:"\u65e5\u671f"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u521b\u5efa",(0,c.jsx)(n.code,{children:"\u65e5\u671f"}),"\u5bf9\u8c61,\u4f7f\u7528",(0,c.jsx)(n.code,{children:"new"}),"\u64cd\u4f5c\u7b26\u6765\u8c03\u7528 ",(0,c.jsx)(n.strong,{children:"Date"})," \u6784\u9020\u51fd\u6570"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u4e0d\u7ed9",(0,c.jsx)(n.strong,{children:"Date"})," \u6784\u9020\u51fd\u6570\u4f20\u53c2\u7684\u60c5\u51b5\u4e0b,\u521b\u5efa\u7684 ",(0,c.jsx)(n.strong,{children:"Date \u5bf9\u8c61"})," \u5c06\u4fdd\u5b58\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const date = new Date();\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u57fa\u4e8e",(0,c.jsx)(n.code,{children:"\u5176\u4ed6\u65e5\u671f"}),"\u548c",(0,c.jsx)(n.code,{children:"\u65f6\u95f4"}),"\u521b\u5efa\u65e5\u671f\u5bf9\u8c61,\u5fc5\u987b\u4f20\u5165\u5bf9\u5e94\u7684",(0,c.jsx)(n.code,{children:"\u6beb\u79d2\u6570"}),"\u6765\u8868\u793a\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"ECMAScript"}),"\u4e3a\u6b64\u63d0\u4f9b\u4e86\u4e24\u4e2a\u8f85\u52a9\u65b9\u6cd5 ",(0,c.jsx)(n.code,{children:"Date.parse()"}),"\u548c",(0,c.jsx)(n.code,{children:"Date.UTC()"})]}),"\n",(0,c.jsx)(n.h2,{id:"dateparse",children:"Date.parse"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Date.parse()"}),"\u63a5\u6536\u4e00\u4e2a\u8868\u793a",(0,c.jsx)(n.strong,{children:"\u65e5\u671f\u7684\u5b57\u7b26\u4e32"}),"\u53c2\u6570,\u5c1d\u8bd5\u5c06\u8fd9\u4e2a\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a",(0,c.jsx)(n.strong,{children:"\u8868\u793a\u8be5\u65e5\u671f\u7684\u6beb\u79d2\u6570"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Date.parse()"}),"\u652f\u6301\u4e0b\u5217\u65e5\u671f\u683c\u5f0f:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"\u6708/\u65e5/\u5e74"})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'Date.parse("5/23/2019");\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"\u6708\u540d \u65e5,\u5e74"})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'Date.parse("May 23,2019");\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"\u5468\u51e0 \u6708\u540d \u65e5 \u5e74 \u65f6:\u5206:\u79d2 \u65f6\u533a"})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'Date.parse("Tue May 23 2019 00:00:00 GMT-0700");\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsxs)(n.strong,{children:["ISO 8601 \u6269\u5c55\u683c\u5f0f YYYY-MM-DDTMM-HH:mm:ss",":sssz"]})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'Date.parse("2023-05-19");\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u4f20\u7ed9 ",(0,c.jsx)(n.code,{children:"Date.parse()"}),"\u7684\u5b57\u7b26\u4e32\u5e76\u4e0d\u8868\u793a\u65e5\u671f,\u5219\u8be5\u65b9\u6cd5\u5c31\u4f1a\u8fd4\u56de ",(0,c.jsx)(n.strong,{children:"NaN"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'Date.parse("foo"); // NaN\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u628a\u8868\u793a\u65e5\u671f\u7684\u5b57\u7b26\u4e32\u4f20\u7ed9",(0,c.jsx)(n.strong,{children:"Date"})," \u6784\u9020\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u76f4\u63a5\u628a",(0,c.jsx)(n.strong,{children:"\u8868\u793a\u65e5\u671f\u7684\u5b57\u7b26\u4e32"}),"\u4f20\u7ed9",(0,c.jsx)(n.strong,{children:"Date"})," \u6784\u9020\u51fd\u6570\u3002\u90a3\u4e48 Date \u4f1a\u5728\u540e\u53f0\u8c03\u7528",(0,c.jsx)(n.code,{children:"Date.parse()"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'new Date("May 23,2019");\n// \u7b49\u4ef7\u4e8e\nnew Date(Date.parse("May 23,2019"));\n'})}),"\n",(0,c.jsx)(n.h2,{id:"dateutc",children:"Date.UTC"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Date.UTC()"}),"\u65b9\u6cd5\u8fd4\u56de",(0,c.jsx)(n.strong,{children:"\u65e5\u671f\u7684\u6beb\u79d2\u6570"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"Date.UTC(year);\nDate.UTC(year, month);\nDate.UTC(year, month, day);\nDate.UTC(year, month, day, hour);\nDate.UTC(year, month, day, hour, minute);\nDate.UTC(year, month, day, hour, minute, second);\nDate.UTC(year, month, day, hour, minute, second, millisecond);\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"year"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u4e2a\u8868\u793a\u5e74\u4efd\u7684\u6574\u6570\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ece ",(0,c.jsx)(n.strong,{children:"0 \u5230 99"})," \u7684\u503c\u4f1a\u88ab\u6620\u5c04\u5230 ",(0,c.jsx)(n.strong,{children:"1900 \u81f3 1999 \u5e74"}),"\u3002\u5176\u4ed6\u7684\u503c\u5219\u4ee3\u8868\u5b9e\u9645\u7684\u5e74\u4efd"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"month"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"0"}),"\uff08\u4e00\u6708\uff09\u5230 ",(0,c.jsx)(n.code,{children:"11"}),"\uff08\u5341\u4e8c\u6708\uff09\u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6708\u4efd\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4ece ",(0,c.jsx)(n.code,{children:"ECMAScript 2017"})," \u5f00\u59cb\uff0c\u5982\u679c\u5ffd\u7565\u8be5\u503c\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"date"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"1"})," \u5230 ",(0,c.jsx)(n.code,{children:"31"})," \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u67d0\u6708\u5f53\u4e2d\u7684\u7b2c\u51e0\u5929\u3002\u5982\u679c\u5ffd\u7565\u8be5\u503c\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"1"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"hour"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"0"})," \u5230 ",(0,c.jsx)(n.code,{children:"23"})," \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a",(0,c.jsx)(n.code,{children:"\u5c0f\u65f6"}),"\u3002\u5982\u679c\u5ffd\u7565\u8be5\u503c\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"minute"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"0"})," \u5230 ",(0,c.jsx)(n.code,{children:"59"})," \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a",(0,c.jsx)(n.code,{children:"\u5206\u949f"}),"\u3002\u5982\u679c\u5ffd\u7565\u8be5\u503c\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"second"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"0"})," \u5230 ",(0,c.jsx)(n.code,{children:"59"})," \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u79d2\u3002\u5982\u679c\u5ffd\u7565\u8be5\u503c\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"millisecond"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"0"})," \u5230 ",(0,c.jsx)(n.code,{children:"999"})," \u4e4b\u95f4\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u6beb\u79d2\u3002\u5982\u679c\u5ffd\u7565\u8be5\u503c\uff0c\u5219\u9ed8\u8ba4\u4e3a",(0,c.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879-1",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Date.UTC()"})," \u4e5f\u4f1a\u88ab",(0,c.jsx)(n.strong,{children:"Date"})," \u6784\u9020\u51fd\u6570\u9690\u5f0f\u8c03\u7528"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"new Date(2000, 0);\n// \u7b49\u4ef7\u4e8e\nnew Date(Date.UTC(2000, 0));\n"})}),"\n",(0,c.jsx)(n.h2,{id:"datenow",children:"Date.now"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Date.now()"})," \u8868\u793a\u6267\u884c\u65f6",(0,c.jsx)(n.strong,{children:"\u65e5\u671f\u548c\u65f6\u95f4\u7684\u6beb\u79d2\u6570"}),"\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8438:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(9474);const c={},d=r.createContext(c);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);