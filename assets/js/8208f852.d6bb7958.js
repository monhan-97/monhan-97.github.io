"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[1670],{6183:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Javascript/scope/scope","title":"\u4f5c\u7528\u57df","description":"\u53d8\u91cf\u5bf9\u8c61","source":"@site/docs/Javascript/scope/scope.mdx","sourceDirName":"Javascript/scope","slug":"/Javascript/scope/","permalink":"/docs/Javascript/scope/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\u9ec4\u68a6\u6c49","lastUpdatedAt":1728972394000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6267\u884c\u4e0a\u4e0b\u6587","permalink":"/docs/Javascript/scope/execution-context"},"next":{"title":"\u53d8\u91cf\u58f0\u660e","permalink":"/docs/Javascript/scope/variable-declaration"}}');var s=n(3274),t=n(8438);const c={},o="\u4f5c\u7528\u57df",i={},l=[{value:"\u53d8\u91cf\u5bf9\u8c61",id:"\u53d8\u91cf\u5bf9\u8c61",level:2},{value:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587",id:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587",level:2},{value:"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587",id:"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587",level:2},{value:"\u6267\u884c\u6b65\u9aa4",id:"\u6267\u884c\u6b65\u9aa4",level:2}];function d(e){const A={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.header,{children:(0,s.jsx)(A.h1,{id:"\u4f5c\u7528\u57df",children:"\u4f5c\u7528\u57df"})}),"\n",(0,s.jsx)(A.h2,{id:"\u53d8\u91cf\u5bf9\u8c61",children:"\u53d8\u91cf\u5bf9\u8c61"}),"\n",(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.code,{children:"\u53d8\u91cf\u5bf9\u8c61"}),"\u662f\u4e0e",(0,s.jsx)(A.code,{children:"\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u76f8\u5173\u7684\u6570\u636e\u4f5c\u7528\u57df\uff0c\u5b58\u50a8\u4e86\u5728\u4e0a\u4e0b\u6587\u4e2d\u5b9a\u4e49\u7684 ",(0,s.jsx)(A.strong,{children:"\u53d8\u91cf"})," \u548c ",(0,s.jsx)(A.strong,{children:"\u51fd\u6570\u58f0\u660e"}),"\u3002"]}),"\n",(0,s.jsx)(A.h2,{id:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587",children:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587"}),"\n",(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.code,{children:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u4e2d\u7684\u53d8\u91cf\u5bf9\u8c61\u5c31\u662f\u5168\u5c40\u5bf9\u8c61"]}),"\n",(0,s.jsx)(A.h2,{id:"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587",children:"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587"}),"\n",(0,s.jsxs)(A.p,{children:["\u5728",(0,s.jsx)(A.code,{children:"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u4e2d\uff0c\u4f7f\u7528",(0,s.jsx)(A.strong,{children:"\u6d3b\u52a8\u5bf9\u8c61(Activation Object,AO)"})," \u6765\u8868\u793a\u53d8\u91cf\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.strong,{children:"\u6d3b\u52a8\u5bf9\u8c61"}),"\u548c",(0,s.jsx)(A.strong,{children:"\u53d8\u91cf\u5bf9\u8c61"}),"\u5176\u5b9e\u662f\u540c\u4e00\u4e2a\u4e1c\u897f,",(0,s.jsx)(A.strong,{children:"\u6d3b\u52a8\u5bf9\u8c61"}),"\u662f\u5728\u8fdb\u5165\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u65f6\u523b\u88ab\u521b\u5efa\u7684\u3002"]}),"\n",(0,s.jsxs)(A.p,{children:[(0,s.jsx)(A.strong,{children:"\u6d3b\u52a8\u5bf9\u8c61"}),"\u4f7f\u7528\u51fd\u6570\u7684 ",(0,s.jsx)(A.code,{children:"arguments"})," \u5c5e\u6027\u521d\u59cb\u5316\u3002",(0,s.jsx)(A.code,{children:"arguments"})," \u5c5e\u6027\u503c\u662f ",(0,s.jsx)(A.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments",children:"Arguments \u5bf9\u8c61"})]}),"\n",(0,s.jsx)(A.h2,{id:"\u6267\u884c\u6b65\u9aa4",children:"\u6267\u884c\u6b65\u9aa4"}),"\n",(0,s.jsx)(A.pre,{children:(0,s.jsx)(A.code,{className:"language-javascript",children:'var color = "blue";\n\nconst changeColor = () => {\n  let anotherColor = "red";\n\n  const swapColors = () => {\n    let tempColor = anotherColor;\n    anotherColor = color;\n    color = tempColor;\n    // \u8fd9\u91cc\u53ef\u4ee5\u8bbf\u95ee color\u3001 anotherColor \u548c tempColor\n  };\n\n  // \u8fd9\u91cc\u53ef\u4ee5\u8bbf\u95ee color \u548c anotherColor\uff0c\u4f46\u8bbf\u95ee\u4e0d\u5230 tempColor\n  swapColors();\n};\n\n// \u8fd9\u91cc\u53ea\u80fd\u8bbf\u95ee color\nchangeColor();\n'})}),"\n",(0,s.jsxs)(A.ul,{children:["\n",(0,s.jsxs)(A.li,{children:["\u8c03\u7528\u51fd\u6570\u6267\u884c\u7684\u65f6\u5019,\u4f1a\u521b\u5efa",(0,s.jsx)(A.strong,{children:"\u53d8\u91cf\u5bf9\u8c61"}),"\u7684",(0,s.jsx)(A.strong,{children:"\u4f5c\u7528\u57df\u94fe"})]}),"\n",(0,s.jsxs)(A.li,{children:["\u8fd9\u4e2a\u4f5c\u7528\u57df\u94fe\u51b3\u5b9a\u5404\u7ea7\u4e0a\u4e0b\u6587\u4e2d\u7684\u4ee3\u7801\u5728",(0,s.jsx)(A.strong,{children:"\u8bbf\u95ee\u53d8\u91cf"}),"\u548c",(0,s.jsx)(A.strong,{children:"\u51fd\u6570"}),"\u7684\u987a\u5e8f\u3002"]}),"\n",(0,s.jsxs)(A.li,{children:["\u4ee3\u7801\u6b63\u5728\u6267\u884c\u7684\u4e0a\u4e0b\u6587\u59cb\u7ec8\u4f4d\u4e8e",(0,s.jsx)(A.strong,{children:"\u4f5c\u7528\u57df\u94fe"}),"\u7684\u6700\u524d\u7aef\u3002"]}),"\n",(0,s.jsxs)(A.li,{children:["\u4ee3\u7801\u6267\u884c\u65f6\u7684",(0,s.jsx)(A.strong,{children:"\u53d8\u91cf"}),"\u548c",(0,s.jsx)(A.strong,{children:"\u51fd\u6570"}),"\u7b49\u6807\u8bc6\u7b26\u7684\u89e3\u6790,\u662f\u901a\u8fc7\u6cbf",(0,s.jsx)(A.strong,{children:"\u4f5c\u7528\u57df\u94fe"}),"\u9010\u7ea7",(0,s.jsx)(A.strong,{children:"\u641c\u7d22\u6807\u8bc6\u7b26"}),"\u540d\u79f0\u5b8c\u6210\u7684\u3002"]}),"\n",(0,s.jsxs)(A.li,{children:["\u641c\u7d22\u8fc7\u7a0b\u59cb\u7ec8\u4ece",(0,s.jsx)(A.strong,{children:"\u4f5c\u7528\u57df"}),"\u7684",(0,s.jsx)(A.em,{children:"\u6700\u524d\u7aef"}),"\u5f00\u59cb,\u7136\u540e\u9010\u7ea7\u5f80\u540e,\u76f4\u5230\u627e\u5230\u6807\u8bc6\u7b26\u3002(\u5982\u679c\u6ca1\u6709\u6807\u8bc6\u7b26\uff0c\u901a\u5e38\u4f1a\u62a5\u9519)"]}),"\n"]}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{alt:"changeColor(\u4f5c\u7528\u57df)",src:n(6015).A+"",width:"642",height:"335"})}),"\n",(0,s.jsx)(A.p,{children:(0,s.jsx)(A.img,{alt:"swapColors(\u4f5c\u7528\u57df)",src:n(7884).A+"",width:"585",height:"266"})})]})}function a(e={}){const{wrapper:A}={...(0,t.R)(),...e.components};return A?(0,s.jsx)(A,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6015:(e,A,n)=>{n.d(A,{A:()=>r});const r=n.p+"assets/images/Snipaste_2024-10-14_15-35-31-108297daecfb9562b1975732d291694b.png"},7884:(e,A,n)=>{n.d(A,{A:()=>r});const r="data:image/png;base64,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"},8438:(e,A,n)=>{n.d(A,{R:()=>c,x:()=>o});var r=n(9474);const s={},t=r.createContext(s);function c(e){const A=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function o(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:A},e.children)}}}]);