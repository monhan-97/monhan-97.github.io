"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[4724],{3881:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(8101);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}},4385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"React/pure-components","title":"PureComponent","description":"\u4e00\u79cd\u7eaf\u7ec4\u4ef6\uff0c\u7528\u4e8e\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\uff0c\u4ece\u800c\u63d0\u9ad8\u6e32\u67d3\u6548\u7387\u3002","source":"@site/docs/React/pure-components.mdx","sourceDirName":"React","slug":"/React/pure-components","permalink":"/docs/React/pure-components","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1711471990000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u9ad8\u9636\u7ec4\u4ef6","permalink":"/docs/React/higher-order-components"},"next":{"title":"\u624b\u5199 React \u6e90\u7801","permalink":"/docs/setup"}}');var r=t(5105),s=t(3881);const c={},a="PureComponent",p={},d=[];function i(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"purecomponent",children:"PureComponent"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u79cd\u7eaf\u7ec4\u4ef6\uff0c\u7528\u4e8e\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\uff0c\u4ece\u800c\u63d0\u9ad8\u6e32\u67d3\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f18\u5316: \u5982\u679c\u4e00\u4e2a\u7ec4\u4ef6\u7684\u5c5e\u6027\u548c\u72b6\u6001 \u90fd\u6ca1\u6709\u53d1\u751f\u53d8\u5316 \u91cd\u65b0\u6e32\u67d3\u8fd9\u4e2a\u7ec4\u4ef6\u662f\u6ca1\u6709\u5fc5\u8981\u7684"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PureComponent"})," \u662f\u4e00\u4e2a\u7ec4\u4ef6 \u5982\u679c\u67d0\u4e2a\u7ec4\u4ef6\u7ee7\u627f\u8be5\u7ec4\u4ef6\uff0c\u5219\u8be5\u7ec4\u4ef6\u7684",(0,r.jsx)(n.code,{children:"shouldComponentUpdate"})," \u4f1a\u8fdb\u884c\u4f18\u5316\uff0c\n\u5bf9\u5c5e\u6027\u548c\u72b6\u6001\u8fdb\u884c\u6d45\u6bd4\u8f83 \u5982\u679c\u76f8\u7b49\u5219\u4e0d\u6e32\u67d3"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6765\u8bf4\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"React.memo"})," \u8fd9\u4e2a\u9ad8\u9636\u51fd\u6570 \u6765\u8fdb\u884c\u5bf9\u6e32\u67d3\u6548\u7387\u7684\u4f18\u5316, ",(0,r.jsx)(n.code,{children:"React.memo"}),"\u5b9e\u73b0\u539f\u7406\u5982\u4e0b:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const memo = (Component) => {\n    return class Memo  extends PureComponent {\n        render (){\n            return <Component {...this.props}>\n        }\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}}}]);