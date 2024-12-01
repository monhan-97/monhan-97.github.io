"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[7279],{3643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"Redux/compose","title":"compose","description":"- \u4ece\u53f3\u5230\u5de6\u628a\u63a5\u6536\u5230\u7684\u51fd\u6570\u5408\u6210\u4e3a\u4e00\u4e2a\u6700\u7ec8\u51fd\u6570","source":"@site/docs/Redux/compose.mdx","sourceDirName":"Redux","slug":"/Redux/compose","permalink":"/docs/Redux/compose","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\u9ec4\u68a6\u6c49","lastUpdatedAt":1703489658000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"createStrore","permalink":"/docs/Redux/createStore"},"next":{"title":"combineReducers","permalink":"/docs/Redux/combineReducers"}}');var s=t(3274),o=t(8438);const c={},u="compose",d={},i=[];function a(e){const n={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"compose",children:"compose"})}),"\n",(0,s.jsx)(n.h1,{id:"compose\u7ec4\u5408-\u7b80\u4ecb",children:"compose(\u7ec4\u5408) \u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ece\u53f3\u5230\u5de6\u628a\u63a5\u6536\u5230\u7684\u51fd\u6570\u5408\u6210\u4e3a\u4e00\u4e2a\u6700\u7ec8\u51fd\u6570"}),"\n",(0,s.jsxs)(n.li,{children:["\u53f3\u8fb9\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a\u4e00\u4e2a\u53c2\u6570\u63d0\u4f9b\u7ed9\u5b83\u5de6\u8fb9\u7684\u51fd\u6570\u3002\u5373 ",(0,s.jsx)(n.code,{children:"compose(f, g, h)"})," \u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"(...args) => f(g(h(...args)))"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function compose(...funcs: Function[]) {\n  if (funcs.length === 0) {\n    return <T>(arg: T) => arg;\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce((a, b) => {\n    return (...args) => {\n      return a(b(...args));\n    };\n  });\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8438:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>u});var r=t(9474);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);