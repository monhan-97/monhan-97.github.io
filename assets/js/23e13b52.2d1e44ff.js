"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[5226],{3235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Javascript/statement/switch","title":"switch \u8bed\u53e5","description":"switch\u8bed\u53e5\u662f\u4e0eif\u8bed\u53e5\u7d27\u5bc6\u76f8\u5173\u7684\u4e00\u79cd\u6d41\u63a7\u5236\u8bed\u53e5,\u5982\u4e0b\u6240\u793a:","source":"@site/docs/Javascript/statement/switch.mdx","sourceDirName":"Javascript/statement","slug":"/Javascript/statement/switch","permalink":"/docs/Javascript/statement/switch","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\u9ec4\u68a6\u6c49","lastUpdatedAt":1725267158000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u76f8\u7b49\u64cd\u4f5c\u7b26","permalink":"/docs/Javascript/operator/equality-operators"},"next":{"title":"\u539f\u59cb\u503c\u548c\u5f15\u7528\u503c","permalink":"/docs/Javascript/scope/primitive-reference-value"}}');var c=t(5105),i=t(3881);const a={},r="switch \u8bed\u53e5",o={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"switch-\u8bed\u53e5",children:"switch \u8bed\u53e5"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"switch"}),"\u8bed\u53e5\u662f\u4e0e",(0,c.jsx)(n.code,{children:"if"}),"\u8bed\u53e5\u7d27\u5bc6\u76f8\u5173\u7684\u4e00\u79cd",(0,c.jsx)(n.code,{children:"\u6d41\u63a7\u5236\u8bed\u53e5"}),",\u5982\u4e0b\u6240\u793a:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'function switchStatement(i) {\n  switch (i) {\n    case 25:\n    case 35:\n      console.log("25 or 35");\n      break;\n    case 45:\n      console.log("45");\n      break;\n    default:\n      console.log("other");\n  }\n}\n\nswitchStatement(25); //"25 or 35" ;\nswitchStatement(45); //"45" ;\nswitchStatement(46); //"other" ;\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u8fd9\u91cc\u7684\u6bcf\u4e2a",(0,c.jsx)(n.code,{children:"case(\u6761\u4ef6/\u5206\u652f)"}),"\u76f8\u5f53\u4e8e ",(0,c.jsx)(n.code,{children:'"\u5982\u679c\u8868\u8fbe\u5f0f\u7b49\u4e8e\u540e\u9762\u7684\u503c,\u5219\u6267\u884c\u4e0b\u9762\u7684\u8bed\u53e5\u3002"'}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"break"}),"\u5173\u952e\u5b57\u4f1a\u5bfc\u81f4\u4ee3\u7801\u6267\u884c\u8df3\u51fa",(0,c.jsx)(n.code,{children:"switch"}),"\u8bed\u53e5,\u5982\u679c\u6ca1\u6709\u4f1a\u7ee7\u7eed\u5339\u914d\u4e0b\u4e00\u4e2a\u6761\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"default"}),"\u5173\u952e\u5b57\u7528\u4e8e\u518d\u4efb\u4f55\u6761\u4ef6\u90fd\u6ca1\u6709\u6ee1\u8db3\u65f6\u6307\u5b9a\u9ed8\u8ba4\u6267\u884c\u7684\u8bed\u53e5",(0,c.jsx)(n.code,{children:"(\u76f8\u5f53\u4e8eelse\u8bed\u53e5)"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"switch"}),"\u8bed\u53e5\u53ef\u4ee5\u7528\u4e8e\u6240\u6709",(0,c.jsx)(n.code,{children:"\u6570\u636e\u7c7b\u578b"}),",\u56e0\u4e3a\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"\u5b57\u7b26\u4e32"}),"\u6216\u8005",(0,c.jsx)(n.code,{children:"\u5bf9\u8c61"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'function switchStatement(num) {\n  switch (true) {\n    case num < 0:\n      console.log("Less than 0.");\n      break;\n    case num >= 0 && num <= 10:\n      console.log("Between 0 and 10.");\n      break;\n    case num > 10 && num <= 20:\n      console.log("Between 10 and 20.");\n      break;\n    default:\n      console.log("More than 20.");\n  }\n}\n\nswitchStatement(-1); //"Less than 0." ;\nswitchStatement(5); //"Between 0 and 10." ;\nswitchStatement(15); //"Between 10 and 20." ;\n'})}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsx)(n.p,{children:'switch \u8bed\u53e5\u518d\u6bd4\u8f83\u6bcf\u4e2a\u6761\u4ef6\u7684\u503c\u65f6,\u4f1a\u4f7f\u7528\u5168\u7b49\u64cd\u4f5c\u7b26,\u56e0\u6b64\u4e0d\u4f1a\u5f3a\u5236\u8f6c\u6362\u6570\u636e\u7c7b\u578b(\u6bd4\u5982,\u5b57\u7b26\u4e32"10"\u4e0d\u7b49\u4e8e 10)'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},3881:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(8101);const c={},i=s.createContext(c);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);