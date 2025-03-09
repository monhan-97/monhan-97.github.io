"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[4379],{3881:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var r=s(8101);const l={},i=r.createContext(l);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(i.Provider,{value:e},n.children)}},4151:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"Javascript/scope/garbage-collection","title":"\u5783\u573e\u56de\u6536","description":"Javascript\u662f\u4f7f\u7528\u5783\u573e\u56de\u6536\u7684\u8bed\u8a00,\u4e5f\u5c31\u662f\u8bf4\u6267\u884c\u73af\u5883\u8d1f\u8d23\u5728\u4ee3\u7801\u6267\u884c\u7684\u65f6\u5019\u7ba1\u7406\u5185\u5b58\u3002","source":"@site/docs/Javascript/scope/garbage-collection.mdx","sourceDirName":"Javascript/scope","slug":"/Javascript/scope/garbage-collection","permalink":"/docs/Javascript/scope/garbage-collection","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1729629196000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u53d8\u91cf\u58f0\u660e","permalink":"/docs/Javascript/scope/variable-declaration"},"next":{"title":"\u65e5\u671f","permalink":"/docs/Javascript/basic-reference-types/date"}}');var l=s(5105),i=s(3881);const c={},d="\u5783\u573e\u56de\u6536",t={},h=[{value:"v8 \u5f15\u64ce \u7684\u5185\u5b58\u9650\u5236",id:"v8-\u5f15\u64ce-\u7684\u5185\u5b58\u9650\u5236",level:2},{value:"V8 \u5f15\u64ce \u4e3a\u4f55\u8981\u5185\u5b58\u9650\u5236",id:"v8-\u5f15\u64ce-\u4e3a\u4f55\u8981\u5185\u5b58\u9650\u5236",level:2},{value:"\u5783\u573e\u56de\u6536\u57fa\u672c\u601d\u8def",id:"\u5783\u573e\u56de\u6536\u57fa\u672c\u601d\u8def",level:2},{value:"\u6807\u8bb0\u6e05\u7406",id:"\u6807\u8bb0\u6e05\u7406",level:2},{value:"\u5de5\u4f5c\u539f\u7406:",id:"\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"\u5f15\u7528\u8ba1\u6570",id:"\u5f15\u7528\u8ba1\u6570",level:2},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406-1",level:3},{value:"\u4f18\u70b9",id:"\u4f18\u70b9-1",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9-1",level:3}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u5783\u573e\u56de\u6536",children:"\u5783\u573e\u56de\u6536"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Javascript"}),"\u662f\u4f7f\u7528",(0,l.jsx)(e.strong,{children:"\u5783\u573e\u56de\u6536"}),"\u7684\u8bed\u8a00,\u4e5f\u5c31\u662f\u8bf4",(0,l.jsx)(e.strong,{children:"\u6267\u884c\u73af\u5883"}),"\u8d1f\u8d23\u5728",(0,l.jsx)(e.strong,{children:"\u4ee3\u7801\u6267\u884c"}),"\u7684\u65f6\u5019\u7ba1\u7406\u5185\u5b58\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Javascript"}),"\u901a\u8fc7",(0,l.jsx)(e.strong,{children:"\u81ea\u52a8\u5185\u5b58\u7ba1\u7406"}),"\u5b9e\u73b0",(0,l.jsx)(e.strong,{children:"\u5206\u914d\u5185\u5b58"}),"\u548c",(0,l.jsx)(e.strong,{children:"\u95f2\u7f6e\u8d44\u6e90\u56de\u6536"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"v8-\u5f15\u64ce-\u7684\u5185\u5b58\u9650\u5236",children:"v8 \u5f15\u64ce \u7684\u5185\u5b58\u9650\u5236"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u901a\u8fc7",(0,l.jsx)(e.code,{children:"Javascript"}),"\u4f7f\u7528\u5185\u5b58\u7684\u65f6\u5019,\u5c31\u4f1a\u53d1\u73b0",(0,l.jsx)(e.strong,{children:"\u53ea\u80fd\u4f7f\u7528\u90e8\u5206\u5185\u5b58"}),"(64 \u4f4d\u7cfb\u7edf ",(0,l.jsx)(e.strong,{children:"1.4G"}),",32 \u4f4d\u7cfb\u7edf ",(0,l.jsx)(e.strong,{children:"0.7G"}),")\u3002\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u5c06\u65e0\u6cd5\u76f4\u63a5\u64cd\u4f5c\u4e00\u4e9b",(0,l.jsx)(e.strong,{children:"\u5927\u5185\u5b58\u5bf9\u8c61"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"v8-\u5f15\u64ce-\u4e3a\u4f55\u8981\u5185\u5b58\u9650\u5236",children:"V8 \u5f15\u64ce \u4e3a\u4f55\u8981\u5185\u5b58\u9650\u5236"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"JavaScript"})," \u6700\u521d\u53ea\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u73af\u5883,\u51e0\u4e4e\u4e0d\u4f1a\u9047\u5230",(0,l.jsx)(e.strong,{children:"\u5927\u91cf\u4f7f\u7528\u5185\u5b58"}),"\u7684\u573a\u666f,\u6240\u4ee5\u5bf9\u4e8e\u7f51\u9875\u6765\u8bf4,V8 \u7684\u9650\u5236\u5df2\u7ecf\u7ef0\u7ef0\u6709\u4f59"]}),"\n",(0,l.jsxs)(e.li,{children:["V8 \u5728\u6267\u884c",(0,l.jsx)(e.strong,{children:"\u5783\u573e\u56de\u6536"}),"\u65f6\u4f1a\u963b\u585e ",(0,l.jsx)(e.code,{children:"JavaScript"})," \u5e94\u7528\u903b\u8f91,\u76f4\u5230",(0,l.jsx)(e.strong,{children:"\u5783\u573e\u56de\u6536\u7ed3\u675f"}),"\u518d\u91cd\u65b0\u6267\u884c ",(0,l.jsx)(e.code,{children:"JavaScript"})," \u5e94\u7528\u903b\u8f91\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["V8 \u7684\u5806\u5185\u5b58\u4e3a ",(0,l.jsx)(e.strong,{children:"1.5GB"}),",V8 \u505a\u4e00\u6b21\u5c0f\u7684\u5783\u573e\u56de\u6536\u9700\u8981 ",(0,l.jsx)(e.strong,{children:"50ms"})," \u4ee5\u4e0a\uff0c\u505a\u4e00\u6b21",(0,l.jsx)(e.strong,{children:"\u975e\u589e\u91cf\u5f0f"}),"\u7684\u5783\u573e\u56de\u6536\u751a\u81f3\u8981 ",(0,l.jsx)(e.strong,{children:"1 \u79d2\u4ee5\u4e0a"}),"\u3002\u8fd9\u6837\u6d4f\u89c8\u5668\u5c06\u5728 1s \u5185\u5931\u53bb\u5bf9\u7528\u6237\u7684\u54cd\u5e94\uff0c\u9020\u6210",(0,l.jsx)(e.strong,{children:"\u5047\u6b7b\u73b0\u8c61"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5783\u573e\u56de\u6536\u57fa\u672c\u601d\u8def",children:"\u5783\u573e\u56de\u6536\u57fa\u672c\u601d\u8def"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u786e\u5b9a\u54ea\u4e2a\u53d8\u91cf\u4e0d\u4f1a\u5728\u4f7f\u7528,\u7136\u540e\u91ca\u653e\u5b83\u5360\u7528\u7684\u5185\u5b58\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u5783\u573e\u56de\u6536\u8fd9\u4e2a\u8fc7\u7a0b\u662f",(0,l.jsx)(e.strong,{children:"\u5468\u671f\u6027"}),"\u7684,\u6240\u4ee5\u5783\u573e\u56de\u6536\u4f1a",(0,l.jsx)(e.strong,{children:"\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4"}),"\u5c31\u4f1a\u81ea\u52a8\u8fd0\u884c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6807\u8bb0\u6e05\u7406",children:"\u6807\u8bb0\u6e05\u7406"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Javascript"}),"\u6700",(0,l.jsx)(e.strong,{children:"\u5e38\u7528"}),"\u7684\u5783\u573e\u56de\u6536\u7b56\u7565\u662f",(0,l.jsx)(e.strong,{children:"\u6807\u8bb0\u6e05\u7406(mark-and-sweep)"}),"\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5783\u573e\u56de\u6536\u7a0b\u5e8f"}),"\u8fd0\u884c\u7684\u65f6\u5019, \u4f1a",(0,l.jsx)(e.strong,{children:"\u6807\u8bb0"}),"\u5185\u5b58\u4e2d\u5b58\u50a8\u7684\u6240\u6709\u53d8\u91cf,\u5047\u8bbe\u5185\u5b58\u4e2d\u6240\u6709\u5bf9\u8c61\u90fd\u662f\u5783\u573e,\u5168\u6807\u8bb0\u4e3a ",(0,l.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u7136\u540e\u4ece\u5404\u4e2a",(0,l.jsx)(e.strong,{children:"\u6839\u5bf9\u8c61"}),"\u5f00\u59cb\u904d\u5386, \u628a\u4e0d\u662f\u5783\u573e\u7684\u8282\u70b9\u6807\u8bb0\u4e3a ",(0,l.jsx)(e.code,{children:"1"}),"'"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5269\u4e0b\u7684\u5c31\u662f\u53d8\u91cf\u5c31\u662f",(0,l.jsx)(e.strong,{children:"\u5f85\u5220\u9664"}),"\u7684\u8282\u70b9\u4e86\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u6e05\u7406\u6240\u6709\u6807\u8bb0\u4e3a ",(0,l.jsx)(e.code,{children:"0"})," \u7684\u5783\u573e\uff0c\u9500\u6bc1\u5e76\u56de\u6536\u5b83\u4eec\u6240\u5360\u7528\u7684\u5185\u5b58\u7a7a\u95f4\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f18\u70b9",children:"\u4f18\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7b80\u5355\u6613\u61c2\uff0c\u5b9e\u65bd\u8f83\u4e3a\u76f4\u63a5\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u53ef\u4ee5\u6709\u6548\u5904\u7406",(0,l.jsx)(e.strong,{children:"\u5faa\u73af\u5f15\u7528"}),"\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u901a\u8fc7",(0,l.jsx)(e.strong,{children:"\u6839\u5bf9\u8c61"}),"\u904d\u5386\u6240\u6709\u53ef\u8fbe\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u53ef\u80fd\u5bfc\u81f4",(0,l.jsx)(e.strong,{children:"\u5185\u5b58\u788e\u7247\u5316"}),"\uff0c\u56e0\u4e3a\u6e05\u9664\u9636\u6bb5\u4e0d\u4f1a\u538b\u7f29\u5185\u5b58\u7a7a\u95f4\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u6574\u4e2a\u5806\u7684\u904d\u5386\u53ef\u80fd\u5bfc\u81f4",(0,l.jsx)(e.strong,{children:"\u6027\u80fd\u4e0b\u964d"}),"\uff0c\u7279\u522b\u662f\u5728\u5927\u89c4\u6a21\u5185\u5b58\u7684\u60c5\u51b5\u4e0b\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5f15\u7528\u8ba1\u6570",children:"\u5f15\u7528\u8ba1\u6570"}),"\n",(0,l.jsxs)(e.p,{children:["\u53e6\u4e00\u4e2a",(0,l.jsx)(e.strong,{children:"\u6ca1\u90a3\u4e48\u5e38\u7528"}),"\u7684\u5783\u573e\u56de\u6536\u7b56\u7565\u662f",(0,l.jsx)(e.strong,{children:"\u5f15\u7528\u8ba1\u6570(reference-counting)"}),"\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4e3b\u8981\u601d\u8def\u662f",(0,l.jsx)(e.strong,{children:"\u5bf9\u6bcf\u4e2a\u503c\u90fd\u8bb0\u5f55\u5b83\u88ab\u5f15\u7528\u7684\u6b21\u6570"}),"\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5de5\u4f5c\u539f\u7406-1",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,l.jsx)(e.p,{children:"\u5f15\u7528\u8ba1\u6570\u5b9a\u4e49\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6bcf\u4e2a",(0,l.jsx)(e.strong,{children:"\u5bf9\u8c61"}),"\u90fd\u6709\u4e00\u4e2a",(0,l.jsx)(e.strong,{children:"\u5f15\u7528\u8ba1\u6570\u5668"}),"\uff0c\u8868\u793a\u6709",(0,l.jsx)(e.strong,{children:"\u591a\u5c11\u4e2a\u5f15\u7528"}),"\u6307\u5411\u8be5\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5f15\u7528\u589e\u52a0\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f53\u6709",(0,l.jsx)(e.strong,{children:"\u65b0\u7684\u5f15\u7528"}),"\u6307\u5411\u8be5\u5bf9\u8c61\u65f6\uff0c\u5f15\u7528\u8ba1\u6570\u4f1a\u589e\u52a0"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'let obj1 = { name: "example" }; // obj1 \u7684\u5f15\u7528\u8ba1\u6570\u4e3a 1\nlet obj2 = obj1; // obj2 \u4e5f\u6307\u5411 obj1\uff0c\u5f15\u7528\u8ba1\u6570\u589e\u52a0\u5230 2\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5f15\u7528\u51cf\u5c11:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f53",(0,l.jsx)(e.strong,{children:"\u5f15\u7528\u88ab\u89e3\u9664"}),"\u6216",(0,l.jsx)(e.strong,{children:"\u8d85\u51fa\u4f5c\u7528\u57df"}),"\u65f6\uff0c\u5f15\u7528\u8ba1\u6570\u4f1a\u51cf\u5c11\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'let obj1 = { name: "example" }; // obj1 \u7684\u5f15\u7528\u8ba1\u6570\u4e3a 1\nlet obj2 = obj1; // obj2 \u4e5f\u6307\u5411 obj1\uff0c\u5f15\u7528\u8ba1\u6570\u589e\u52a0\u5230 2\nobj2 = null; //obj1 \u7684\u5f15\u7528\u8ba1\u6570\u51cf\u5c11\u5230 1\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u56de\u6536\u673a\u5236:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5f53",(0,l.jsx)(e.strong,{children:"\u5f15\u7528\u8ba1\u6570\u964d\u4e3a 0"})," \u65f6\uff0c\u8bf4\u660e\u6ca1\u6709\u4efb\u4f55\u5f15\u7528\u6307\u5411\u8be5\u5bf9\u8c61\uff0c\u6b64\u65f6\u53ef\u4ee5\u5b89\u5168\u5730\u91ca\u653e\u5185\u5b58"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f18\u70b9-1",children:"\u4f18\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5b9e\u65f6\u6027"}),"\uff1a\u5f15\u7528\u8ba1\u6570\u53ef\u4ee5\u5373\u65f6\u56de\u6536\u5185\u5b58\uff0c\u907f\u514d\u4e86\u957f\u65f6\u95f4\u5360\u7528\u5185\u5b58\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7b80\u5355\u6027"}),"\uff1a\u5b9e\u73b0\u76f8\u5bf9\u7b80\u5355\uff0c\u6613\u4e8e\u7406\u89e3\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u7f3a\u70b9-1",children:"\u7f3a\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5faa\u73af\u5f15\u7528\u95ee\u9898"}),":"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c",(0,l.jsx)(e.strong,{children:"\u4e24\u4e2a\u5bf9\u8c61\u4e92\u76f8\u5f15\u7528"}),"\uff0c\u5373\u4f7f\u6ca1\u6709\u5176\u4ed6\u5f15\u7528\u6307\u5411\u5b83\u4eec\uff0c\u5b83\u4eec\u7684",(0,l.jsx)(e.strong,{children:"\u5f15\u7528\u8ba1\u6570\u4e5f\u4e0d\u4f1a\u964d\u4e3a 0"}),",\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"function test() {\n  let obj1 = {};\n  let obj2 = {};\n\n  obj1.b = obj2;\n  obj2.a = obj1;\n\n  // \u8fd9\u65f6\uff0c\u5373\u4f7f obj1 \u548c obj2 \u8d85\u51fa\u4e86\u4f5c\u7528\u57df\uff0c\u5b83\u4eec\u7684\u5f15\u7528\u8ba1\u6570\u4ecd\u7136\u4e3a 1\uff0c\u65e0\u6cd5\u88ab\u56de\u6536\u3002\n}\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6027\u80fd\u5f00\u9500"}),":"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6bcf\u6b21\u5f15\u7528\u53d8\u5316\u90fd\u9700\u8981",(0,l.jsx)(e.strong,{children:"\u66f4\u65b0\u8ba1\u6570\u5668"}),"\uff0c\u589e\u52a0\u4e86\u5f00\u9500\uff0c\u5c24\u5176\u662f\u5728\u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b"]}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}}}]);