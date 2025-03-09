"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[6793],{2701:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"Javascript/operator/unary-operator","title":"\u4e00\u5143\u64cd\u4f5c\u7b26","description":"\u53ea\u64cd\u4f5c\u4e00\u4e2a\u503c\u7684\u64cd\u4f5c\u7b26\u53eb\u505a \u4e00\u5143\u64cd\u4f5c\u7b26, \u4e00\u5143\u64cd\u4f5c\u7b26\u662f ECMAScript \u4e2d\u6700\u7b80\u5355\u7684\u64cd\u4f5c\u7b26","source":"@site/docs/Javascript/operator/unary-operator.mdx","sourceDirName":"Javascript/operator","slug":"/Javascript/operator/unary-operator","permalink":"/docs/Javascript/operator/unary-operator","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\u9ec4\u68a6\u6c49","lastUpdatedAt":1719383779000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Object \u7c7b\u578b","permalink":"/docs/Javascript/data-type/object"},"next":{"title":"\u4f4d\u64cd\u4f5c\u7b26","permalink":"/docs/Javascript/operator/bitwise-operator"}}');var c=l(5105),r=l(3881);const o={},a="\u4e00\u5143\u64cd\u4f5c\u7b26",d={},i=[{value:"\u9012\u589e/\u9012\u51cf\u64cd\u4f5c\u7b26",id:"\u9012\u589e\u9012\u51cf\u64cd\u4f5c\u7b26",level:2},{value:"\u524d\u7f00\u7248\u9012\u589e",id:"\u524d\u7f00\u7248\u9012\u589e",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u540e\u7f00\u7248\u9012\u589e",id:"\u540e\u7f00\u7248\u9012\u589e",level:3},{value:"\u8f6c\u6362\u89c4\u5219",id:"\u8f6c\u6362\u89c4\u5219",level:3},{value:"\u4e00\u5143\u52a0\u548c\u51cf",id:"\u4e00\u5143\u52a0\u548c\u51cf",level:2},{value:"\u4e00\u5143\u52a0",id:"\u4e00\u5143\u52a0",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u4e00\u5143\u51cf",id:"\u4e00\u5143\u51cf",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u4e00\u5143\u64cd\u4f5c\u7b26",children:"\u4e00\u5143\u64cd\u4f5c\u7b26"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ea\u64cd\u4f5c\u4e00\u4e2a\u503c\u7684\u64cd\u4f5c\u7b26\u53eb\u505a ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"\u4e00\u5143\u64cd\u4f5c\u7b26"})}),", ",(0,c.jsx)(n.code,{children:"\u4e00\u5143\u64cd\u4f5c\u7b26"}),"\u662f ",(0,c.jsx)(n.code,{children:"ECMAScript"})," \u4e2d\u6700\u7b80\u5355\u7684\u64cd\u4f5c\u7b26"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9012\u589e\u9012\u51cf\u64cd\u4f5c\u7b26",children:"\u9012\u589e/\u9012\u51cf\u64cd\u4f5c\u7b26"}),"\n",(0,c.jsxs)(n.p,{children:["\u9012\u589e\u548c\u9012\u51cf\u64cd\u4f5c\u7b26\u5206\u4e3a",(0,c.jsx)(n.code,{children:"\u524d\u7f00\u7248"}),"\u548c",(0,c.jsx)(n.code,{children:"\u540e\u7f00\u7248"}),"\u4e24\u4e2a\u7248\u672c\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u524d\u7f00\u7248\u9012\u589e",children:"\u524d\u7f00\u7248\u9012\u589e"}),"\n",(0,c.jsxs)(n.p,{children:["\u524d\u7f00\u7248: \u5c31\u662f\u4f4d\u4e8e\u64cd\u4f5c\u7684\u53d8\u91cf\u524d\u5934 ",(0,c.jsx)(n.strong,{children:"\u524d\u7f00\u7248\u9012\u589e\u548c\u9012\u51cf\u5728\u8bed\u53e5\u88ab\u6c42\u503c\u4e4b\u524d\u88ab\u6539\u53d8"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let age = 29;\n++age;\n\n// \u5b9e\u9645\u4e0a\u7b49\u4e8e\u5982\u4e0b\u8868\u8fbe\u5f0f\n// let age = 29\n// age = age + 1;\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let age = 29;\n--age;\n\n// \u5b9e\u9645\u4e0a\u7b49\u4e8e\u5982\u4e0b\u8868\u8fbe\u5f0f\n// let age = 29\n// age = age - 1;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,c.jsxs)(n.p,{children:["\u65e0\u8bba\u662f",(0,c.jsx)(n.code,{children:"\u524d\u7f00\u9012\u589e"}),"\u8fd8\u662f",(0,c.jsx)(n.code,{children:"\u524d\u7f00\u9012\u51cf"}),"\u64cd\u4f5c\u7b26,\u53d8\u91cf\u7684\u503c\u90fd\u4f1a\u5728\u8bed\u53e5\u88ab\u6c42\u503c\u4e4b\u524d\u88ab\u6539\u53d8"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d,\u53d8\u91cf",(0,c.jsx)(n.code,{children:"anotherage"}),"\u4ee5 ",(0,c.jsx)(n.code,{children:"age"})," \u51cf\u4e00\u540e\u7684\u503c\u518d\u52a0 ",(0,c.jsx)(n.code,{children:"2"})," \u8fdb\u884c\u521d\u59cb\u5316\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u56e0\u4e3a\u9012\u51cf\u64cd\u4f5c\u5148\u53d1\u751f\u6240\u4ee5 ",(0,c.jsx)(n.code,{children:"age"})," \u7684\u503c\u662f ",(0,c.jsx)(n.code,{children:"28"})," ",(0,c.jsx)(n.code,{children:"anotherage"}),"\u7684\u503c\u662f ",(0,c.jsx)(n.code,{children:"30"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let age = 29;\nlet anotherage = --age + 2;\n\nconsole.log(age); //28\nconsole.log(anotherage); //30\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let age = 29;\nage = age - 1;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u540e\u7f00\u7248\u9012\u589e",children:"\u540e\u7f00\u7248\u9012\u589e"}),"\n",(0,c.jsxs)(n.p,{children:["\u540e\u7f00\u7248: \u5c31\u662f\u4f4d\u4e8e\u8981\u64cd\u4f5c\u7684\u53d8\u91cf\u540e\u5934\u3002",(0,c.jsx)(n.strong,{children:"\u540e\u7f00\u7248\u9012\u589e\u548c\u9012\u51cf\u5728\u8bed\u53e5\u88ab\u6c42\u503c\u540e\u624d\u53d1\u751f"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let age = 29;\nage++;\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let age = 29;\nage--;\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u8f6c\u6362\u89c4\u5219",children:"\u8f6c\u6362\u89c4\u5219"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u8ff0\u7684\u56db\u4e2a\u64cd\u4f5c\u7b26\u53ef\u4ee5\u7528\u4f5c\u4efb\u4f55\u503c\uff0c\u610f\u601d\u662f\u4e0d\u9650\u4e8e\u6574\u6570--\u5b57\u7b26\u4e32\uff0c\u5e03\u5c14\u503c\uff0c\u6d6e\u70b9\u503c\uff0c\u751a\u81f3\u5bf9\u8c61\u90fd\u53ef\u4ee5\u3002\u9012\u589e\u548c\u9012\u51cf\u64cd\u4f5c\u7b26\u9075\u5faa\u5982\u4e0b\u89c4\u5219\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5bf9\u4e8e\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u662f\u6709\u6548\u7684\u6570\u503c\u5f62\u5f0f\uff0c\u5219\u8f6c\u6362\u4e3a\u6570\u503c\u5728\u5e94\u7528\u6539\u53d8\uff0c\u53d8\u91cf\u7c7b\u578b\u4ece\u5b57\u7b26\u4e32\u53d8\u6210\u6570\u503c"}),"\n",(0,c.jsxs)(n.li,{children:["\u5bf9\u4e8e\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u4e0d\u662f\u6709\u6548\u7684\u6570\u503c\u5f62\u5f0f\uff0c\u5219\u5c06\u53d8\u91cf\u7684\u503c\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"NaN"}),"\u3002\u53d8\u91cf\u7c7b\u578b\u4ece\u5b57\u7b26\u4e32\u53d8\u6210\u4e00\u4e2a\u6570\u503c"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5bf9\u4e8e\u5e03\u5c14\u503c\uff0c\u5982\u679c\u662f ",(0,c.jsx)(n.code,{children:"false"})," \u5219\u8f6c\u6362\u6210 ",(0,c.jsx)(n.code,{children:"0"})," \u5728\u5e94\u7528\u6539\u53d8\u3002\u53d8\u91cf\u7c7b\u578b\u4ece\u5e03\u5c14\u503c\u53d8\u6210\u6570\u503c"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5bf9\u4e8e\u5e03\u5c14\u503c\uff0c\u5982\u679c\u662f ",(0,c.jsx)(n.code,{children:"false \u5219\u8f6c\u6362\u6210 "}),"1` \u5728\u5e94\u7528\u6539\u53d8\u3002\u53d8\u91cf\u7c7b\u578b\u4ece\u5e03\u5c14\u503c\u53d8\u6210\u6570\u503c"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u662f\u5bf9\u8c61\uff0c\u5219\u8c03\u7528\u5b83\u672c\u8eab\u7684",(0,c.jsx)(n.code,{children:"valueOf()"}),"\u65b9\u6cd5\u53d6\u5f97\u53ef\u4ee5\u64cd\u4f5c\u7684\u503c\u3002\u5bf9\u5f97\u5230\u7684\u503c\u5e94\u7528\u4e0a\u8ff0\u89c4\u5219\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'let s1 = "2";\nlet s2 = "z";\nlet b = false;\nlet f = 1.1;\nlet o = {\n  valueOf() {\n    return -1;\n  },\n};\n\n++s1;\ns2++;\nb++;\nf--;\no--;\n\nconsole.log(s1); //3;\nconsole.log(s2); //NaN;\nconsole.log(b); //1;\nconsole.log(f); //0.1000000000009;\nconsole.log(o); // -2\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u4e00\u5143\u52a0\u548c\u51cf",children:"\u4e00\u5143\u52a0\u548c\u51cf"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u4e00\u5143\u52a0\u548c\u51cf\u64cd\u4f5c\u7b26"})," \u5bf9\u5927\u591a\u6570\u5f00\u53d1\u8005\u6765\u8bf4\u5e76\u4e0d\u964c\u751f\uff0c\u4ed6\u4eec\u5728 ECMAScript \u4e2d\u8ddf\u5728\u6570\u5b66\u4e2d\u7684\u7528\u9014\u4e00\u6837\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4e00\u5143\u52a0",children:"\u4e00\u5143\u52a0"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e00\u5143\u52a0\u6709\u4e00\u4e2a\u52a0\u53f7",(0,c.jsx)(n.code,{children:"(+)"}),"\u8868\u793a\uff0c\u653e\u5728\u53d8\u91cf\u524d\u9762,\u5bf9\u6570\u503c\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let num = 25;\nnum = +num;\nconsole.log(num); //25\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u5c06\u4e00\u5143\u52a0\u5e94\u7528\u5230\u975e\u6570\u503c\uff0c\u5219\u4f1a\u6267\u884c\u4e0e\u4f7f\u7528 Number()\u8f6c\u578b\u51fd\u6570\u4e00\u6837\u7684\u7c7b\u578b\u8f6c\u6362"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5e03\u5c14\u503c ",(0,c.jsx)(n.code,{children:"true"})," \u548c ",(0,c.jsx)(n.code,{children:"false"}),"\u8f6c\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"0"})," \u548c ",(0,c.jsx)(n.code,{children:"1"})]}),"\n",(0,c.jsx)(n.li,{children:"\u5b57\u7b26\u4e32\u6839\u636e\u7279\u6b8a\u89c4\u5219\u8fdb\u884c\u89e3\u6790"}),"\n",(0,c.jsxs)(n.li,{children:["\u5bf9\u8c61\u4f1a\u8c03\u7528\u4ed6\u4eec\u7684 ",(0,c.jsx)(n.code,{children:"valueOf()"}),"\u548c/\u6216 ",(0,c.jsx)(n.code,{children:"toString()"})]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'let s1 = "01";\nlet s2 = "1.1";\nlet s3 = "z";\nlet b = false;\nlet f = 1.1;\nlet o = {\n  valueOf() {\n    return -1;\n  },\n};\n\ns1 = +s1;\ns2 = +s2;\ns3 = +s3;\nb = +b;\nf = +f;\no = +o;\n\nconsole.log(s1); //1;\nconsole.log(s2); //1.1;\nconsole.log(s3); //NaN;\nconsole.log(b); //0;\nconsole.log(f); //1.1;\nconsole.log(o); // -1\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u4e00\u5143\u51cf",children:"\u4e00\u5143\u51cf"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e00\u5143\u51cf\u6709\u4e00\u4e2a\u51cf\u53f7",(0,c.jsx)(n.code,{children:"(-)"}),"\u8868\u793a\uff0c\u653e\u5728\u53d8\u91cf\u524d\u9762,\u4e3b\u8981\u7528\u4e8e\u628a\u6570\u503c\u53d8\u4e3a\u8d1f\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"let num = 25;\nnum = -num;\nconsole.log(num); //-25\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u5c06\u4e00\u5143\u51cf\u5e94\u7528\u5230\u975e\u6570\u503c\uff0c\u4e00\u5143\u51cf\u4f1a\u9075\u5faa\u548c\u4e00\u5143\u52a0\u540c\u6837\u7684\u89c4\u5219\uff0c\u5148\u5bf9\u4ed6\u4eec\u8fdb\u884c\u8f6c\u6362\uff0c\u7136\u540e\u5728\u53d6\u8d1f\u503c"}),"\n",(0,c.jsx)(n.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'let s1 = "01";\nlet s2 = "1.1";\nlet s3 = "z";\nlet b = false;\nlet f = 1.1;\nlet o = {\n  valueOf() {\n    return -1;\n  },\n};\n\ns1 = -s1;\ns2 = -s2;\ns3 = -s3;\nb = -b;\nf = -f;\no = -o;\n\nconsole.log(s1); //-1;\nconsole.log(s2); //-1.1;\nconsole.log(s3); //NaN;\nconsole.log(b); //0;\nconsole.log(f); //-1.1;\nconsole.log(o); // 1\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},3881:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>a});var s=l(8101);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);