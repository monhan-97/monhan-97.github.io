"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[5367],{3655:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Javascript/scope/variable-declaration","title":"\u53d8\u91cf\u58f0\u660e","description":"\u4f7f\u7528 var \u7684\u51fd\u6570\u4f5c\u7528\u57df\u58f0\u660e","source":"@site/docs/Javascript/scope/variable-declaration.mdx","sourceDirName":"Javascript/scope","slug":"/Javascript/scope/variable-declaration","permalink":"/docs/Javascript/scope/variable-declaration","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1729188194000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u4f5c\u7528\u57df","permalink":"/docs/Javascript/scope/"},"next":{"title":"\u5783\u573e\u56de\u6536","permalink":"/docs/Javascript/scope/garbage-collection"}}');var c=s(3274),l=s(8438);const i={},d="\u53d8\u91cf\u58f0\u660e",o={},a=[{value:"\u4f7f\u7528 var \u7684\u51fd\u6570\u4f5c\u7528\u57df\u58f0\u660e",id:"\u4f7f\u7528-var-\u7684\u51fd\u6570\u4f5c\u7528\u57df\u58f0\u660e",level:2},{value:"\u53d8\u91cf\u63d0\u5347",id:"\u53d8\u91cf\u63d0\u5347",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f1a\u8fdb\u884c\u53d8\u91cf\u63d0\u5347\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f1a\u8fdb\u884c\u53d8\u91cf\u63d0\u5347",level:2},{value:"\u5168\u5c40\u9884\u7f16\u8bd1",id:"\u5168\u5c40\u9884\u7f16\u8bd1",level:2},{value:"\u51fd\u6570\u9884\u7f16\u8bd1",id:"\u51fd\u6570\u9884\u7f16\u8bd1",level:2},{value:"\u4f7f\u7528 let \u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e",id:"\u4f7f\u7528-let-\u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e",level:2},{value:"\u4f7f\u7528 const \u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e",id:"\u4f7f\u7528-const-\u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e",level:2}];function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\u53d8\u91cf\u58f0\u660e",children:"\u53d8\u91cf\u58f0\u660e"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4f7f\u7528-var-\u7684\u51fd\u6570\u4f5c\u7528\u57df\u58f0\u660e",children:"\u4f7f\u7528 var \u7684\u51fd\u6570\u4f5c\u7528\u57df\u58f0\u660e"}),"\n",(0,c.jsxs)(e.p,{children:["\u4f7f\u7528",(0,c.jsx)(e.code,{children:"var"}),"\u58f0\u660e\u53d8\u91cf\u65f6, \u53d8\u91cf\u4f1a\u88ab\u81ea\u52a8\u6dfb\u52a0\u5230\u6700\u8fd1\u7684",(0,c.jsx)(e.strong,{children:"\u4e0a\u4e0b\u6587"}),"\u3002\u5728\u51fd\u6570\u4e2d,\u6700\u63a5\u8fd1\u7684\u4e0a\u4e0b\u6587\u5c31\u662f",(0,c.jsx)(e.strong,{children:"\u51fd\u6570\u4e0a\u4e0b\u6587"}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function add(num1, num2) {\n  var sum = num1 + num2;\n  return sum;\n}\n\nadd(1, 2);\n\nconsole.log(sum); // Uncaught ReferenceError: sum is not defined\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u53d8\u91cf\u672a\u7ecf\u58f0\u660e\u5c31\u88ab\u521d\u59cb\u5316\u4e86,\u5b83\u5c31\u88ab\u81ea\u52a8\u6dfb\u52a0\u5230",(0,c.jsx)(e.strong,{children:"\u5168\u5c40\u4e0a\u4e0b\u6587"}),"\u4e2d\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8c03\u7528",(0,c.jsx)(e.code,{children:"add()"}),"\u4e4b\u540e,",(0,c.jsx)(e.code,{children:"sum"}),"\u88ab\u6dfb\u52a0\u5230\u4e86",(0,c.jsx)(e.strong,{children:"\u5168\u5c40\u4e0a\u4e0b\u6587"}),"\u4e2d\u3002\u5728\u51fd\u6570\u9000\u51fa\u4e4b\u540e\u4f9d\u7136\u5b58\u5728\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function add(num1, num2) {\n  sum = num1 + num2;\n  return sum;\n}\n\nadd(1, 2);\n\nconsole.log(sum); // 3\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53d8\u91cf\u63d0\u5347",children:"\u53d8\u91cf\u63d0\u5347"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"var"}),"\u58f0\u660e\u4f1a\u88ab\u62ff\u5230",(0,c.jsx)(e.strong,{children:"\u51fd\u6570"}),"\u6216\u8005",(0,c.jsx)(e.strong,{children:"\u5168\u5c40\u4f5c\u7528\u57df"}),"\u7684\u9876\u90e8,\u4f4d\u4e8e\u4f5c\u7528\u57df\u4e2d\u6240\u6709\u4ee3\u7801\u4e4b\u524d\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'var name = "Jack";\n\n// \u7b49\u4ef7\u4e8e\n\nname = "Jack";\nvar name;\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'function fn1() {\n  var name = "Jack";\n}\n\n// \u7b49\u4ef7\u4e8e\nfunction fn2() {\n  name = "Jack";\n  var name;\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u4f1a\u8fdb\u884c\u53d8\u91cf\u63d0\u5347",children:"\u4e3a\u4ec0\u4e48\u4f1a\u8fdb\u884c\u53d8\u91cf\u63d0\u5347\uff1f"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"Javascript"}),"\u5728\u4ee3\u7801",(0,c.jsx)(e.strong,{children:"\u6267\u884c\u524d"}),"\uff0c\u4f1a\u8fdb\u884c",(0,c.jsx)(e.strong,{children:"\u8bed\u6cd5\u68c0\u67e5"}),"\u548c",(0,c.jsx)(e.strong,{children:"\u9884\u7f16\u8bd1"}),"\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u8fd9\u4e48\u505a\u5c31\u662f\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u9884\u7f16\u8bd1\u4f1a\u628a\u6240\u6709 ",(0,c.jsx)(e.code,{children:"var"})," \u58f0\u660e\u7684",(0,c.jsx)(e.strong,{children:"\u53d8\u91cf"}),"\u548c",(0,c.jsx)(e.strong,{children:"\u51fd\u6570"}),"\u653e\u5728\u6700\u524d\u9762\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5168\u5c40\u9884\u7f16\u8bd1",children:"\u5168\u5c40\u9884\u7f16\u8bd1"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u521b\u5efa",(0,c.jsx)(e.strong,{children:"\u5168\u5c40\u53d8\u91cf\u5bf9\u8c61"})," GO (window \u5bf9\u8c61)"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u53d8\u91cf\u58f0\u660e"}),"\u63d0\u524d\uff0c\u5c06\u6240\u6709\u53d8\u91cf\u7684\u58f0\u660e\u653e\u5728\u6700\u524d\u9762\uff0c\u8d4b\u503c\u4e3a ",(0,c.jsx)(e.code,{children:"undefined"}),",\u5b58\u5728\u53d8\u91cf\u540d\u76f8\u540c\uff0c \u53ea\u58f0\u660e\u4e00\u4e2a\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u51fd\u6570\u58f0\u660e"}),"\u63d0\u524d\uff0c\u5c06\u51fd\u6570\u58f0\u660e\u653e\u5728\u6700\u524d\u9762\u3002\u51fd\u6570\u540d\u5982\u679c\u8ddf\u53d8\u91cf\u540d\u76f8\u540c\uff0c\u51fd\u6570\u540d\u4f1a\u8986\u76d6\u53d8\u91cf\u540d \u503c\u662f\u51fd\u6570\u4f53"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"console.log(test);\nvar test = 100;\nconsole.log(test);\nfunction test() {\n  console.log(111);\n}\nconsole.log(test);\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5206\u6790\u5982\u4e0b:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u521b\u5efa",(0,c.jsx)(e.strong,{children:"\u5168\u5c40\u5bf9\u8c61"})," GO (window \u5bf9\u8c61)"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u53d8\u91cf\u58f0\u660e"}),"\u63d0\u524d\u2014\u2014\u2014\u503c\u4e3a ",(0,c.jsx)(e.code,{children:"undefined"})]}),"\n",(0,c.jsxs)(e.li,{children:["\u627e\u5230\u4e86\u53d8\u91cf\u58f0\u660e:",(0,c.jsx)(e.code,{children:"var test = 100"}),";"]}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"test: undefined"})}),"\n",(0,c.jsx)(e.li,{children:"\u51fd\u6570\u58f0\u660e\u63d0\u524d\uff0c\u540c\u540d\u8986\u76d6 \u503c\u4e3a\u51fd\u6570\u4f53"}),"\n",(0,c.jsxs)(e.li,{children:["\u627e\u5230\u4e86\u51fd\u6570\u58f0\u660e ",(0,c.jsx)(e.code,{children:"function() {...}"})]}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"test: function(){}"})}),"\n",(0,c.jsx)(e.li,{children:"\u9884\u7f16\u8bd1\u7ed3\u675f \u4ece\u4e0a\u5230\u4e0b\u6267\u884c\u4ee3\u7801"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u51fd\u6570\u9884\u7f16\u8bd1",children:"\u51fd\u6570\u9884\u7f16\u8bd1"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u6267\u884c\u51fd\u6570\u7684\u65f6\u5019,\u521b\u5efa",(0,c.jsx)(e.strong,{children:"\u6d3b\u52a8\u5bf9\u8c61"})," AO, (\u548c",(0,c.jsx)(e.strong,{children:"\u5168\u5c40\u53d8\u91cf\u5bf9\u8c61"}),"\u7c7b\u4f3c)\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:["\u627e\u51fa",(0,c.jsx)(e.strong,{children:"\u5f62\u53c2"}),"\u548c",(0,c.jsx)(e.strong,{children:"\u53d8\u91cf\u58f0\u660e"}),"\uff0c\u503c\u8d4b\u4e88 ",(0,c.jsx)(e.code,{children:"undefined"}),"\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u5b9e\u53c2"}),",",(0,c.jsx)(e.strong,{children:"\u5f62\u53c2\u503c"}),"\u76f8\u7edf\u4e00"]}),"\n",(0,c.jsx)(e.li,{children:"\u5728\u51fd\u6570\u4f53\u91cc\u9762\u627e\u5230\u51fd\u6570\u58f0\u660e\uff0c\u503c\u8d4b\u4e88\u51fd\u6570\u4f53"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function test1(a) {\n\xa0 \xa0 \xa0console.log(b); \xa0     //1  \u8f93\u51fa function b(){}\n\xa0 \xa0 \xa0var b = 0;\n\xa0 \xa0 \xa0console.log(b); \xa0    //2  \u8f93\u51fa 0\n\xa0 \xa0 \xa0console.log(a);     \xa0//3  \u8f93\u51fa function a(){}\n\n\xa0 \xa0 \xa0function a() {\n\xa0\u200b\n\xa0 \xa0  }\n\n\xa0 \xa0 \xa0function b() {\n\xa0\u200b\n\xa0 \xa0  }\n\xa0}\n\ntest(1)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4f7f\u7528-let-\u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e",children:"\u4f7f\u7528 let \u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"let"}),"\u5173\u952e\u5b57\u662f",(0,c.jsx)(e.strong,{children:"\u5757\u7ea7\u4f5c\u7528\u57df"}),"\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u5757\u7ea7\u4f5c\u7528\u57df"}),"\u7531\u6700\u8fd1\u7684\u4e00\u5bf9\u82b1\u62ec\u53f7\u754c\u5b9a,\u6bd4\u5982",(0,c.jsx)(e.code,{children:"if\u5757"}),",",(0,c.jsx)(e.code,{children:"while\u5757"}),",",(0,c.jsx)(e.code,{children:"function\u5757"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"if (true) {\n  let a;\n}\nconsole.log(a); // ReferenceError: a is not a defined\n\nwhile (false) {\n  let b;\n}\nconsole.log(b); // ReferenceError: a is not a defined\n\nfunction foo() {\n  let c;\n}\nconsole.log(c); // ReferenceError: c is not a defined\n\n{\n  let d;\n}\nconsole.log(d); // ReferenceError: d is not a defined\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"let"}),"\u5173\u952e\u5b57 \u5728\u540c\u4e00\u4f5c\u7528\u57df\u5185\u4e0d\u80fd\u91cd\u590d\u58f0\u660e\u4e24\u6b21\u3002\u91cd\u590d\u7684 ",(0,c.jsx)(e.code,{children:"var"})," \u58f0\u660e \u4f1a\u88ab\u5ffd\u7565\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"var a;\nvar a;\n\n{\n  let b;\n  let b; // SyntaxError: Identifier 'b' has already been declared\n}\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"let"})," \u5173\u952e\u5b57 \u5728 ",(0,c.jsx)(e.code,{children:"for"})," \u5faa\u73af\u4e2d\u8fed\u4ee3\u53d8\u91cf\u4e0d\u4f1a\u6cc4\u6f0f\u5230\u5faa\u73af\u5916\u90e8\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"for (let index = 0; index < 5; index++) {}\nconsole.log(index); // ReferenceError: index is not a defined\n\nfor (var index = 0; index < 5; index++) {}\nconsole.log(index); // 5\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4f7f\u7528-const-\u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e",children:"\u4f7f\u7528 const \u7684\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"/docs/Javascript/variable",children:"\u53d8\u91cf"})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(t,{...n})}):t(n)}},8438:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>d});var r=s(9474);const c={},l=r.createContext(c);function i(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);