"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[3521],{1965:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"Javascript/scope/execution-context","title":"\u6267\u884c\u4e0a\u4e0b\u6587","description":"\u6267\u884c\u4e0a\u4e0b\u6587\u4ee5\u4e0b\u7b80\u79f0(\u4e0a\u4e0b\u6587)\u3002","source":"@site/docs/Javascript/scope/execution-context.mdx","sourceDirName":"Javascript/scope","slug":"/Javascript/scope/execution-context","permalink":"/docs/Javascript/scope/execution-context","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\u9ec4\u68a6\u6c49","lastUpdatedAt":1728451422000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u539f\u59cb\u503c\u548c\u5f15\u7528\u503c","permalink":"/docs/Javascript/scope/primitive-reference-value"},"next":{"title":"\u4f5c\u7528\u57df","permalink":"/docs/Javascript/scope/"}}');var i=c(3274),d=c(8438);const l={},r="\u6267\u884c\u4e0a\u4e0b\u6587",o={},t=[{value:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587",id:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587",level:2},{value:"\u4e0a\u4e0b\u6587\u7684\u7ec4\u6210",id:"\u4e0a\u4e0b\u6587\u7684\u7ec4\u6210",level:3},{value:"\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b",id:"\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b",level:2},{value:"\u6267\u884c\u6808",id:"\u6267\u884c\u6808",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u6267\u884c\u4e0a\u4e0b\u6587",children:"\u6267\u884c\u4e0a\u4e0b\u6587"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u4ee5\u4e0b\u7b80\u79f0",(0,i.jsx)(e.code,{children:"(\u4e0a\u4e0b\u6587)"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587",children:"\u4ec0\u4e48\u662f\u4e0a\u4e0b\u6587"}),"\n",(0,i.jsxs)(e.p,{children:["\u5373",(0,i.jsx)(e.code,{children:"\u53d8\u91cf"}),"\u548c",(0,i.jsx)(e.code,{children:"\u51fd\u6570"}),"\u7684",(0,i.jsx)(e.code,{children:"\u4e0a\u4e0b\u6587"}),"\u51b3\u5b9a\u4e86\u5b83\u4eec\u53ef\u4ee5\u8bbf\u95ee\u54ea\u4e9b\u6570\u636e,\u4ee5\u53ca\u5b83\u4eec\u7684\u884c\u4e3a\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4e0a\u4e0b\u6587\u7684\u7ec4\u6210",children:"\u4e0a\u4e0b\u6587\u7684\u7ec4\u6210"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const ExecutionContextObj = {\n  VariableObject: window, // \u53d8\u91cf\u5bf9\u8c61\n  ScopeChain: {}, // \u4f5c\u7528\u57df\u94fe\n  this: window,\n};\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"this"}),":\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d ",(0,i.jsx)(e.code,{children:"this"})," \u7684\u6307\u5411\uff0c\u6839\u636e\u8c03\u7528\u65b9\u5f0f\u4e0d\u540c\u800c\u4e0d\u540c\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u53d8\u91cf\u5bf9\u8c61"}),": \u7528\u4e8e\u5b58\u50a8\u53d8\u91cf\u548c",(0,i.jsx)(e.code,{children:"\u51fd\u6570\u58f0\u660e"}),"\uff0c\u5305\u62ec",(0,i.jsx)(e.code,{children:"\u51fd\u6570\u53c2\u6570"}),"\u548c",(0,i.jsx)(e.code,{children:"\u5185\u90e8\u53d8\u91cf"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4f5c\u7528\u57df\u94fe"}),": \u786e\u4fdd\u53ef\u4ee5\u8bbf\u95ee\u5230\u7684\u53d8\u91cf\u7684\u987a\u5e8f\uff0c\u5373\u5f53\u524d",(0,i.jsx)(e.code,{children:"\u4e0a\u4e0b\u6587"}),"\u7684\u53d8\u91cf\u5bf9\u8c61\u548c\u5916\u90e8\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b",children:"\u4e0a\u4e0b\u6587\u7684\u7c7b\u578b"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"\u4e0a\u4e0b\u6587"}),"\u7684\u7c7b\u578b\u5206\u4e3a\u4e09\u79cd:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5168\u5c40\u4e0a\u4e0b\u6587"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d,",(0,i.jsx)(e.code,{children:"\u5168\u5c40\u4e0a\u4e0b\u6587"}),"\u5c31\u662f ",(0,i.jsx)(e.code,{children:"window"})," \u5bf9\u8c61\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6240\u6709\u901a\u8fc7",(0,i.jsx)(e.code,{children:"var"}),"\u5b9a\u4e49\u7684\u5168\u5c40\u53d8\u91cf\u548c\u51fd\u6570, \u90fd\u4f1a\u6210\u4e3a ",(0,i.jsx)(e.code,{children:"window"})," \u5bf9\u8c61\u5c5e\u6027\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4f7f\u7528",(0,i.jsx)(e.code,{children:"let"}),"\u548c",(0,i.jsx)(e.code,{children:"const"}),"\u521b\u5efa\u7684\u9876\u7ea7\u58f0\u660e\u5219\u4e0d\u4f1a\u5b9a\u4e49\u5728",(0,i.jsx)(e.code,{children:"\u5168\u5c40\u4e0a\u4e0b\u6587"}),"\u4e2d\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u5e94\u7528\u7a0b\u5e8f\u9000\u51fa\u524d\u624d\u4f1a\u88ab\u9500\u6bc1,(\u6bd4\u5982\u5173\u95ed\u7f51\u9875,\u6216\u8005\u9000\u51fa\u6d4f\u89c8\u5668)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u51fd\u6570\u4e0a\u4e0b\u6587"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5f53\u51fd\u6570\u88ab",(0,i.jsx)(e.strong,{children:"\u8c03\u7528\u65f6"}),"\u521b\u5efa,\u4f1a\u4e3a\u8be5\u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,i.jsx)(e.code,{children:"\u4e0a\u4e0b\u6587"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6bcf\u4e00\u4e2a",(0,i.jsx)(e.strong,{children:"\u51fd\u6570"}),"\u90fd\u4f1a\u6709\u81ea\u5df1\u7684\u4e0a\u4e0b\u6587\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"eval \u4e0a\u4e0b\u6587"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6307\u7684\u662f\u8fd0\u884c\u5728 ",(0,i.jsx)(e.code,{children:"eval"})," \u51fd\u6570\u4e2d\u7684\u4ee3\u7801\uff0c\u5f88\u5c11\u7528\u800c\u4e14\u4e0d\u5efa\u8bae\u4f7f\u7528"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6267\u884c\u6808",children:"\u6267\u884c\u6808"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6267\u884c\u6808"}),"\uff0c\u4e5f\u53eb\u8c03\u7528\u6808\uff0c\u88ab\u7528\u6765\u5b58\u50a8\u4ee3\u7801\u8fd0\u884c\u65f6\u521b\u5efa\u7684\u6240\u6709",(0,i.jsx)(e.code,{children:"\u4e0a\u4e0b\u6587"}),"\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["\u6808\uff1a\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u9075\u5faa",(0,i.jsx)(e.strong,{children:"\u540e\u8fdb\u5148\u51fa"}),"\u7684\u539f\u5219"]})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'function fn1() {\n  console.log("fn1\u88ab\u8c03\u7528\u4e86 -- \u521b\u5efa\u4e86fn1\u7684\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587,\u538b\u5165\u6808");\n  fn2();\n  console.log("fn2\u6267\u884c\u5b8c\u6210,fn2\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4f1a\u4ece\u6808\u4e2d\u5f39\u51fa");\n}\n\nfunction fn2() {\n  console.log("fn2\u88ab\u8c03\u7528\u4e86 -- \u521b\u5efa\u4e86fn2\u7684\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587,\u538b\u5165\u6808");\n}\n\nfn1();\nconsole.log("fn1\u6267\u884c\u5b8c\u6210,fn2\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4f1a\u4ece\u6808\u4e2d\u5f39\u51fa");\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u6267\u884c\u6808\u56fe\u7247",src:c(1179).A+"",width:"812",height:"924"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd0\u884c\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"fn1\u88ab\u8c03\u7528\u4e86 -- \u521b\u5efa\u4e86fn1\u7684\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587,\u538b\u5165\u6808\nfn2\u88ab\u8c03\u7528\u4e86 -- \u521b\u5efa\u4e86fn2\u7684\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587,\u538b\u5165\u6808\nfn2\u6267\u884c\u5b8c\u6210,fn2\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4f1a\u4ece\u6808\u4e2d\u5f39\u51fa\nfn1\u6267\u884c\u5b8c\u6210,fn2\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4f1a\u4ece\u6808\u4e2d\u5f39\u51fa\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0a\u8ff0\u4ee3\u7801\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u6808\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5f53\u4e0a\u8ff0\u4ee3\u7801\u5728\u6d4f\u89c8\u5668\u52a0\u8f7d\u65f6, ",(0,i.jsx)(e.code,{children:"JavaScript \u5f15\u64ce"}),"\u521b\u5efa\u4e86\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u5e76\u628a\u5b83\u538b\u5165\u6808\u4e2d"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5f53\u51fd\u6570 ",(0,i.jsx)(e.code,{children:"fn1()"})," \u88ab\u8c03\u7528\u65f6, ",(0,i.jsx)(e.code,{children:"JavaScript \u5f15\u64ce"})," \u4e3a\u8be5\u51fd\u6570\u521b\u5efa\u4e86\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587"}),"\uff0c\u5e76\u628a\u5b83\u538b\u5165\u5f53\u524d",(0,i.jsx)(e.code,{children:"\u6267\u884c\u6808"}),"\u7684\u9876\u90e8\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5f53 ",(0,i.jsx)(e.code,{children:"fn1()\u51fd\u6570"})," \u5185\u90e8\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"fn2()\u51fd\u6570"})," \u65f6,",(0,i.jsx)(e.code,{children:"JavaScript \u5f15\u64ce"})," \u540c\u6837\u521b\u5efa\u4e86 ",(0,i.jsx)(e.code,{children:"fn2()"})," \u7684",(0,i.jsx)(e.code,{children:"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u5e76",(0,i.jsx)(e.code,{children:"\u6267\u884c\u6808"}),"\u7684\u9876\u90e8\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7136\u540e\u6267\u884c\u5b8c\u6bd5 ",(0,i.jsx)(e.code,{children:"fn2()\u51fd\u6570"})," \u540e, ",(0,i.jsx)(e.code,{children:"fn2()\u51fd\u6570"}),"\u4f1a\u4ece\u5f53\u524d",(0,i.jsx)(e.strong,{children:"\u6808\uff08\u540e\u8fdb\u5148\u51fa\u7ed3\u6784"}),"\uff09\u5f39\u51fa\uff0c\u5e76\u4e14\u6309\u7a0b\u5e8f\u6267\u884c\u987a\u5e8f\u7ee7\u7eed\u6267\u884c ",(0,i.jsx)(e.code,{children:"fn1()\u51fd\u6570"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5f53 ",(0,i.jsx)(e.code,{children:"fn1()\u51fd\u6570"})," \u6267\u884c\u5b8c\u6bd5,\u5b83\u7684",(0,i.jsx)(e.code,{children:"\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u4ece\u6808\u5f39\u51fa,\u63a7\u5236\u6d41\u7a0b\u5230\u8fbe",(0,i.jsx)(e.code,{children:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4e00\u65e6\u6240\u6709\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5,",(0,i.jsx)(e.code,{children:"JavaScript \u5f15\u64ce"}),"\u4ece\u5f53\u524d\u6808\u4e2d\u79fb\u9664\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u3002"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},1179:(n,e,c)=>{c.d(e,{A:()=>s});const s=c.p+"assets/images/Snipaste_2024-10-07_02-02-20-992532d12890d8e2a6a635be319a141e.png"},8438:(n,e,c)=>{c.d(e,{R:()=>l,x:()=>r});var s=c(9474);const i={},d=s.createContext(i);function l(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);