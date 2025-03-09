"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[228],{3881:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>d});var c=s(8101);const l={},i=c.createContext(l);function r(n){const e=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),c.createElement(i.Provider,{value:e},n.children)}},8061:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"NetWork/cors","title":"\u8de8\u57df\u8d44\u6e90\u5171\u4eab(CORS)","description":"\u4ecb\u7ecd","source":"@site/docs/NetWork/cors.mdx","sourceDirName":"NetWork","slug":"/NetWork/cors","permalink":"/docs/NetWork/cors","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1723908480000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6d4f\u89c8\u5668\u7684\u540c\u6e90\u7b56\u7565","permalink":"/docs/NetWork/same-origin-policy"},"next":{"title":"\u8f93\u5165 url \u5730\u5740 \u540e","permalink":"/docs/NetWork/enter-url"}}');var l=s(5105),i=s(3881);const r={},d="\u8de8\u57df\u8d44\u6e90\u5171\u4eab(CORS)",o={},h=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u7b80\u5355\u8bf7\u6c42",id:"\u7b80\u5355\u8bf7\u6c42",level:2},{value:"\u7b80\u5355\u8bf7\u6c42\u7684\u4ea4\u4e92\u89c4\u8303",id:"\u7b80\u5355\u8bf7\u6c42\u7684\u4ea4\u4e92\u89c4\u8303",level:2},{value:"\u8bf7\u6c42\u5934\u4e2d\u4f1a\u81ea\u52a8\u6dfb\u52a0 Origin \u5b57\u6bb5",id:"\u8bf7\u6c42\u5934\u4e2d\u4f1a\u81ea\u52a8\u6dfb\u52a0-origin-\u5b57\u6bb5",level:3},{value:"\u670d\u52a1\u5668\u54cd\u5e94\u5934\u4e2d\u5e94\u5305\u542b <code>Access-Control-Allow-Origin</code>",id:"\u670d\u52a1\u5668\u54cd\u5e94\u5934\u4e2d\u5e94\u5305\u542b-access-control-allow-origin",level:3},{value:"\u9884\u68c0\u8bf7\u6c42",id:"\u9884\u68c0\u8bf7\u6c42",level:2},{value:"\u6d4f\u89c8\u5668\u53d1\u8d77\u9884\u68c0\u8bf7\u6c42,\u8be2\u95ee\u670d\u52a1\u5668\u662f\u5426\u5141\u8bb8",id:"\u6d4f\u89c8\u5668\u53d1\u8d77\u9884\u68c0\u8bf7\u6c42\u8be2\u95ee\u670d\u52a1\u5668\u662f\u5426\u5141\u8bb8",level:3},{value:"\u670d\u52a1\u5668\u5141\u8bb8",id:"\u670d\u52a1\u5668\u5141\u8bb8",level:3},{value:"\u9644\u5e26\u8eab\u4efd\u51ed\u8bc1\u7684\u8bf7\u6c42",id:"\u9644\u5e26\u8eab\u4efd\u51ed\u8bc1\u7684\u8bf7\u6c42",level:3},{value:"\u989d\u5916\u8865\u5145",id:"\u989d\u5916\u8865\u5145",level:2},{value:"Access-Control-Expose-Headers",id:"access-control-expose-headers",level:3}];function t(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u8de8\u57df\u8d44\u6e90\u5171\u4eabcors",children:"\u8de8\u57df\u8d44\u6e90\u5171\u4eab(CORS)"})}),"\n",(0,l.jsx)(e.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"\u8de8\u57df\u8d44\u6e90\u5171\u4eab(CORS)"}),"\u5168\u7a0b\u4e3a",(0,l.jsx)(e.code,{children:"(Cross-Origin Resource Sharing)"}),"\u662f\u4e00\u79cd\u57fa\u4e8e ",(0,l.jsx)(e.code,{children:"HTTP"})," \u5934\u90e8\u7684\u673a\u5236,\u5141\u8bb8\u670d\u52a1\u5668\u901a\u8fc7\u8bbe\u7f6e ",(0,l.jsx)(e.code,{children:"HTTP"})," \u5934\u90e8\u6765\u63a7\u5236\u54ea\u4e9b\u6e90\u53ef\u4ee5\u8bbf\u95ee\u5176\u8d44\u6e90,\u4ece\u800c\u89e3\u51b3",(0,l.jsx)(e.code,{children:"\u540c\u6e90\u7b56\u7565"}),"\u5e26\u6765\u7684\u9650\u5236\u95ee\u9898\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"CORS"})," \u662f\u4e00\u79cd\u6807\u51c6\u5316\u7684\u65b9\u6cd5\uff0c\u80fd\u8ba9\u670d\u52a1\u5668\u5b89\u5168\u5730\u66b4\u9732\u5176\u8d44\u6e90\u7ed9\u4e0d\u540c\u7684\u6e90\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0d\u540c\u7684\u8bf7\u6c42\u65b9\u5f0f,\u4f1a\u5bf9\u670d\u52a1\u5668\u9020\u6210\u4e0d\u540c\u7a0b\u5ea6\u7684\u5f71\u54cd,\u6bd4\u5982 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"GET \u65b9\u6cd5"})})," \u901a\u5e38\u53ea\u662f\u83b7\u53d6\u4e00\u4e9b\u670d\u52a1\u5668\u6570\u636e\uff0c\u800c ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"POST \u65b9\u6cd5"})})," \u53ef\u80fd\u4f1a\u4fee\u6539\u670d\u52a1\u7684\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u9488\u5bf9\u4e0d\u7528\u7684\u8bf7\u6c42 ",(0,l.jsx)(e.strong,{children:"CORS"})," \u89c4\u5b9a\u4e86\u4e09\u79cd\u4e0d\u540c\u7684\u4ea4\u4e92\u65b9\u5f0f,\u5206\u522b\u662f:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u7b80\u5355\u8bf7\u6c42"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u9884\u68c0\u8bf7\u6c42"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u9644\u5e26\u8eab\u4efd\u51ed\u8bc1\u7684\u8bf7\u6c42"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7b80\u5355\u8bf7\u6c42",children:"\u7b80\u5355\u8bf7\u6c42"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"\u7b80\u5355\u8bf7\u6c42"})," \u4e0d\u4f1a\u89e6\u53d1 ",(0,l.jsx)(e.code,{children:"CORS \u9884\u68c0\u8bf7\u6c42"}),"\u3002\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u7684\u8bf7\u6c42\u5373\u4e3a\u7b80\u5355\u8bf7\u6c42:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8bf7\u6c42\u65b9\u6cd5\u5c5e\u4e8e\u4e0b\u9762\u7684\u4e00\u79cd"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"GET"}),"\n",(0,l.jsx)(e.li,{children:"POST"}),"\n",(0,l.jsx)(e.li,{children:"HEAD"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8bf7\u6c42\u5934\u53ea\u5305\u542b\u4ee5\u4e0b\u5b89\u5168\u7684\u5c5e\u6027:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Accept"}),"\n",(0,l.jsx)(e.li,{children:"Accept Language"}),"\n",(0,l.jsx)(e.li,{children:"Content-Language"}),"\n",(0,l.jsx)(e.li,{children:"Content-Type"}),"\n",(0,l.jsx)(e.li,{children:"DPR"}),"\n",(0,l.jsx)(e.li,{children:"Downlink"}),"\n",(0,l.jsx)(e.li,{children:"Save-Data"}),"\n",(0,l.jsx)(e.li,{children:"Viewport-Width"}),"\n",(0,l.jsx)(e.li,{children:"Width"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Content-Type \u7684\u503c\u53ea\u6709\u4ee5\u4e0b\u4e09\u79cd:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"text/plain"}),"\n",(0,l.jsx)(e.li,{children:"application/x-www-form-urlencoded"}),"\n",(0,l.jsx)(e.li,{children:"multipart/form-data"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'// \u7b80\u5355\u8bf7\u6c42\nfetch("http://crossdomain.com/api/news");\n\n// \u4e0d\u662f\u7b80\u5355\u8bf7\u6c42 \u8bf7\u6c42\u65b9\u6cd5\u4e0d\u6ee1\u8db3\nfetch("http://crossdomain.com/api/news", {\n  method: "PUT",\n});\n\n// \u4e0d\u662f\u7b80\u5355\u8bf7\u6c42 \u6709\u989d\u5916\u7684\u8bf7\u6c42\u5934\nfetch("http://crossdomain.com/api/news", {\n  headers: {\n    a: "1",\n  },\n});\n\n// \u7b80\u5355\u8bf7\u6c42 POST\u8bf7\u6c42\u65b9\u6cd5 content-type\u9ed8\u8ba4\u4e3aapplication/x-www-form-urlencoded\nfetch("http://crossdomain.com/api/news", {\n  method: "POST",\n});\n\n// \u4e0d\u662f\u7b80\u5355\u8bf7\u6c42\nfetch("http://crossdomain.com/api/news", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n  },\n});\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u7b80\u5355\u8bf7\u6c42\u7684\u4ea4\u4e92\u89c4\u8303",children:"\u7b80\u5355\u8bf7\u6c42\u7684\u4ea4\u4e92\u89c4\u8303"}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u6d4f\u89c8\u5668\u53d1\u73b0\u67d0\u4e2a",(0,l.jsx)(e.code,{children:"\u8de8\u57df\u8bf7\u6c42"}),"\u662f",(0,l.jsx)(e.code,{children:"\u7b80\u5355\u8bf7\u6c42"}),",\u4f1a\u53d1\u751f\u4ee5\u4e0b\u7684\u4e8b\u60c5:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.h3,{id:"\u8bf7\u6c42\u5934\u4e2d\u4f1a\u81ea\u52a8\u6dfb\u52a0-origin-\u5b57\u6bb5",children:"\u8bf7\u6c42\u5934\u4e2d\u4f1a\u81ea\u52a8\u6dfb\u52a0 Origin \u5b57\u6bb5"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6bd4\u5982 \u5728\u9875\u9762",(0,l.jsx)(e.code,{children:"http://my.com/index.html"}),"\u4e2d\u6709\u4ee5\u4e0b\u4ee3\u7801\u9020\u6210\u4e86\u8de8\u57df\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'fetch("http://crossdomain.com/api/news");\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u8bf7\u6c42\u53d1\u51fa\u540e,\u8bf7\u6c42\u5934\u4f1a\u662f\u4e0b\u9762\u7684\u683c\u5f0f:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"GET /api/news  HTTP/1.1\nHOST crossdomain.com\nConnection:keep-live\n...\nRefer:http://my.com/index.html\nOrigin:http://my.com\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Origin"}),"\u8fd9\u4e2a\u5b57\u6bb5\u4f1a\u544a\u8bc9\u670d\u52a1\u5668,\u662f\u54ea\u4e2a\u6e90\u5730\u5740\u5728\u8de8\u57df\u8bf7\u6c42"]}),"\n",(0,l.jsxs)(e.h3,{id:"\u670d\u52a1\u5668\u54cd\u5e94\u5934\u4e2d\u5e94\u5305\u542b-access-control-allow-origin",children:["\u670d\u52a1\u5668\u54cd\u5e94\u5934\u4e2d\u5e94\u5305\u542b ",(0,l.jsx)(e.code,{children:"Access-Control-Allow-Origin"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u670d\u52a1\u5668\u6536\u5230\u8bf7\u6c42\u540e,\u5982\u679c\u5141\u8bb8\u8be5",(0,l.jsx)(e.code,{children:"\u8de8\u57df\u8bf7\u6c42"}),"\u8bbf\u95ee,\u9700\u8981\u5728\u54cd\u5e94\u5934\u4e2d\u6dfb\u52a0",(0,l.jsx)(e.code,{children:"Access-Control-Allow-Origin"}),"\u5b57\u6bb5\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u5b57\u6bb5\u7684\u503c\u53ef\u4ee5\u662f:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"*"})," \u8868\u793a\u6240\u6709\u8bf7\u6c42\u90fd\u53ef\u4ee5\u8bbf\u95ee"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"\u5177\u4f53\u7684\u6e90"})," \u8868\u793a\u53ea\u6709\u7279\u5b9a\u7684\u6e90\u624d\u53ef\u4ee5\u8bbf\u95ee"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9884\u68c0\u8bf7\u6c42",children:"\u9884\u68c0\u8bf7\u6c42"}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u53d1\u8d77\u7684",(0,l.jsx)(e.code,{children:"\u8de8\u57df\u8bf7\u6c42"}),"\u4e0d\u7b26\u5408",(0,l.jsx)(e.code,{children:"\u7b80\u5355\u8bf7\u6c42"}),"\u6761\u4ef6\u7684\u65f6\u5019, \u6d4f\u89c8\u5668\u4f1a\u53d1\u8d77\u4e00\u4e2a",(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"}),",\u8be2\u95ee\u670d\u52a1\u5668\u662f\u5426\u5141\u8bb8\u5b9e\u9645\u8bf7\u6c42\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u53d1\u8d77\u9884\u68c0\u8bf7\u6c42\u7684\u6d41\u7a0b\u5982\u4e0b:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6d4f\u89c8\u5668\u53d1\u9001",(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"}),",\u8be2\u95ee\u6d4f\u89c8\u5668\u662f\u5426\u5141\u8bb8\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u670d\u52a1\u5668\u5141\u8bb8"}),"\n",(0,l.jsx)(e.li,{children:"\u6d4f\u89c8\u5668\u53d1\u9001\u771f\u5b9e\u8bf7\u6c42"}),"\n",(0,l.jsx)(e.li,{children:"\u670d\u52a1\u5668\u54cd\u5e94\u5b8c\u6210"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6bd4\u5982 \u5728\u9875\u9762",(0,l.jsx)(e.code,{children:"http://my.com/index.html"}),"\u4e2d\u6709\u4ee5\u4e0b\u4ee3\u7801\u9020\u6210\u4e86\u8de8\u57df\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'// \u9700\u8981\u53d1\u9001\u9884\u68c0\u8bf7\u6c42\nfetch("http://crossdomain.com/api/news", {\n  method: "POST",\n  headers: {\n    a: 1,\n    b: 2,\n    "Content-Type": "application/json",\n  },\n  body: JSON.stringify({ name: "123" }),\n});\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u6d4f\u89c8\u5668\u53d1\u73b0\u8de8\u57df\u7684\u8bf7\u6c42\u4e0d\u662f\u4e00\u4e2a",(0,l.jsx)(e.code,{children:"\u7b80\u5355\u8bf7\u6c42"}),"\u7684\u65f6\u5019,\u4f1a\u6309\u7167\u4e0b\u9762\u7684\u6d41\u7a0b\u548c\u670d\u52a1\u5668\u4ea4\u4e92:"]}),"\n",(0,l.jsx)(e.h3,{id:"\u6d4f\u89c8\u5668\u53d1\u8d77\u9884\u68c0\u8bf7\u6c42\u8be2\u95ee\u670d\u52a1\u5668\u662f\u5426\u5141\u8bb8",children:"\u6d4f\u89c8\u5668\u53d1\u8d77\u9884\u68c0\u8bf7\u6c42,\u8be2\u95ee\u670d\u52a1\u5668\u662f\u5426\u5141\u8bb8"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"OPTIONS /api/news  HTTP/1.1\nHOST crossdomain.com\nConnection:keep-live\n\nRefer:http://my.com/index.html\nOrigin:http://my.com\nAcccess-Control-Request-Method:POST\nAcccess-Control-Request-Headers:a,b,Content-Type\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u51fa, \u8fd9\u4e2a\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u53d1\u51fa\u7684\u771f\u5b9e\u8bf7\u6c42,\u8bf7\u6c42\u4e0d\u5305\u542b\u6211\u4eec\u7684\u54cd\u5e94\u5934,\u4e5f\u6ca1\u6709\u6d88\u606f\u4f53\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u662f\u4e00\u4e2a",(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"}),",\u4ed6\u7684\u76ee\u7684\u662f\u8be2\u95ee\u670d\u52a1\u5668,\u662f\u5426\u5141\u8bb8\u540e\u7eed\u771f\u5b9e\u8bf7\u6c42\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"}),"\u6709\u4ee5\u4e0b\u7279\u6027:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6ca1\u6709\u8bf7\u6c42\u4f53"}),"\n",(0,l.jsxs)(e.li,{children:["\u8bf7\u6c42\u65b9\u6cd5\u4e3a",(0,l.jsx)(e.code,{children:"OPTIONS"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u8bf7\u6c42\u5934\u4e2d\u5305\u542b:","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Acccess-Control-Request-Method"}),":\u540e\u7eed\u7684\u771f\u5b9e\u8bf7\u6c42\u5c06\u4f7f\u7528\u7684\u8bf7\u6c42\u65b9\u6cd5\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Acccess-Control-Request-Headers"}),":\u540e\u7eed\u7684\u771f\u5b9e\u8bf7\u6c42\u643a\u5e26\u7684\u8bf7\u6c42\u5934\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Origin"}),":\u8bf7\u6c42\u7684\u6e90\u5730\u5740\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u670d\u52a1\u5668\u5141\u8bb8",children:"\u670d\u52a1\u5668\u5141\u8bb8"}),"\n",(0,l.jsxs)(e.p,{children:["\u670d\u52a1\u5668\u6536\u5230",(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"}),"\u540e,\u53ef\u4ee5\u68c0\u67e5\u8be5\u8bf7\u6c42\u4e2d\u5305\u542b\u7684\u4fe1\u606f\uff0c\u5982\u679c\u5141\u8bb8\u8fd9\u6837\u7684\u8bf7\u6c42\uff0c\u9700\u8981\u54cd\u5e94\u4e0b\u9762\u7684\u6d88\u606f\u683c\u5f0f\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"HTTP/1.1 200 OK\nDate Sat Aug 17 2024 21:53:13 GMT\n...\n\nAccess-Control-Allow-Origin:http://my.com\nAccess-Control-Allow-Method:POST\nAccess-Control-Allow-Headers:a,b,content-type\nAccess-Control-Allow-Max-Age:86400\n...\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5bf9\u4e8e",(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"}),",\u4e0d\u9700\u8981\u54cd\u5e94\u4efb\u4f55\u7684\u6d88\u606f\u4f53,\u53ea\u9700\u8981\u5728\u54cd\u5e94\u5934\u4e2d\u6dfb\u52a0:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Access-Control-Allow-Origin"}),":\u8868\u793a\u5141\u8bb8\u7684\u6e90\u5730\u5740"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Access-Control-Allow-Method"}),":\u8868\u793a\u5141\u8bb8\u540e\u7eed\u771f\u5b9e\u8bf7\u6c42\u7684\u8bf7\u6c42\u65b9\u6cd5"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Access-Control-Allow-Headers"}),":\u8868\u793a\u5141\u8bb8\u6539\u52a8\u7684\u8bf7\u6c42\u5934"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Access-Control-Allow-Max-Age"}),":\u544a\u8bc9\u6d4f\u89c8\u5668,\u591a\u5c11\u79d2\u5185,\u5bf9\u4e8e\u540c\u6837\u7684",(0,l.jsx)(e.code,{children:"\u8bf7\u6c42\u6e90"}),",",(0,l.jsx)(e.code,{children:"\u8bf7\u6c42\u65b9\u6cd5"}),",",(0,l.jsx)(e.code,{children:"\u8bf7\u6c42\u5934"}),",\u90fd\u4e0d\u9700\u8981\u91cd\u590d\u53d1\u9001",(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"}),"\u4e86"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u670d\u52a1\u5668\u5141\u8bb8,\u5c31\u4f1a\u53d1\u9001\u771f\u5b9e\u7684\u8bf7\u6c42,\u540e\u7eed\u7684\u5904\u7406\u548c\u7b80\u5355\u8bf7\u6c42\u76f8\u540c\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u9644\u5e26\u8eab\u4efd\u51ed\u8bc1\u7684\u8bf7\u6c42",children:"\u9644\u5e26\u8eab\u4efd\u51ed\u8bc1\u7684\u8bf7\u6c42"}),"\n",(0,l.jsxs)(e.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b,",(0,l.jsx)(e.code,{children:"\u8de8\u57df\u8bf7\u6c42"}),"\u5e76\u4e0d\u4f1a\u9644\u5e26 ",(0,l.jsx)(e.code,{children:"cookie"}),", \u8fd9\u6837\u4e00\u6765\u6709\u4e9b\u9644\u5e26\u6743\u9650\u7684\u64cd\u4f5c\u5c31\u65e0\u6cd5\u8fdb\u884c\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u5b9e\u73b0\u9644\u5e26",(0,l.jsx)(e.code,{children:"cookie"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:'fetch(url, {\n  credentials: "include",\n});\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u6837",(0,l.jsx)(e.code,{children:"\u8de8\u57df\u8bf7\u6c42"}),"\u5c31\u4f1a\u9644\u5e26\u4e00\u4e2a\u8eab\u4efd\u51ed\u8bc1"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u4e00\u4e2a\u8bf7\u6c42\u9700\u8981\u9644\u5e26",(0,l.jsx)(e.code,{children:"cookie"}),"\u7684\u65f6\u5019,\u65e0\u8bba\u662f",(0,l.jsx)(e.code,{children:"\u7b80\u5355\u8bf7\u6c42"}),"\u8fd8\u662f",(0,l.jsx)(e.code,{children:"\u9884\u68c0\u8bf7\u6c42"})," \u90fd\u4f1a\u5728\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0",(0,l.jsx)(e.code,{children:"cookie"}),"\u5b57\u6bb5\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u800c\u670d\u52a1\u5668\u54cd\u5e94\u7684\u65f6\u5019\u9700\u8981\u660e\u786e\u544a\u77e5\u5ba2\u6237\u7aef:\u670d\u52a1\u7aef\u5141\u8bb8\u8fd9\u6837\u7684",(0,l.jsx)(e.strong,{children:"\u51ed\u636e"}),"\u3002\u9700\u8981\u5728\u54cd\u5e94\u5934\u4e2d\u6dfb\u52a0 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"Access-Control-Credentials:true"})})," \u5373\u53ef\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5bf9\u4e8e\u4e00\u4e2a\u9644\u5e26\u8eab\u4efd\u51ed\u8bc1\u7684\u8bf7\u6c42,\u5982\u679c\u670d\u52a1\u7aef\u6ca1\u6709\u660e\u786e\u544a\u77e5,\u6d4f\u89c8\u5668\u4ecd\u7136\u88ab\u89c6\u4e3a",(0,l.jsx)(e.code,{children:"\u8de8\u57df\u62d2\u7edd"}),"\u3002"]}),"\n",(0,l.jsx)(e.admonition,{type:"warning",children:(0,l.jsxs)(e.p,{children:["\u5bf9\u4e8e\u9644\u5e26\u8eab\u4efd\u51ed\u8bc1\u7684\u8bf7\u6c42,\u670d\u52a1\u5668\u4e0d\u80fd\u8bbe\u7f6e",(0,l.jsx)(e.code,{children:"Access-Control-Allow-Origin"}),"\u4e3a",(0,l.jsx)(e.code,{children:"*"})]})}),"\n",(0,l.jsx)(e.h2,{id:"\u989d\u5916\u8865\u5145",children:"\u989d\u5916\u8865\u5145"}),"\n",(0,l.jsx)(e.h3,{id:"access-control-expose-headers",children:"Access-Control-Expose-Headers"}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u60f3\u8981\u5728",(0,l.jsx)(e.code,{children:"\u54cd\u5e94\u4f53"}),"\u91cc\u9762\u83b7\u53d6",(0,l.jsx)(e.code,{children:"\u81ea\u5b9a\u4e49\u7684\u54cd\u5e94\u5934"}),",\u9700\u8981\u8bbe\u7f6e",(0,l.jsx)(e.code,{children:"Access-Control-Expose-Headers"}),"\u8fd9\u4e2a\u5c5e\u6027,\u8ba9\u670d\u52a1\u5668\u628a\u5141\u8bb8\u6d4f\u89c8\u5668\u8bbf\u95ee\u7684\u5934\u653e\u5165\u767d\u540d\u5355\u3002\u4f8b\u5982:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"Access-Control-Expose-Headers:a,b,authorization\n"})})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}}}]);