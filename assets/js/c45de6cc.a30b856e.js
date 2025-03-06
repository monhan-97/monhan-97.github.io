"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[7838],{2718:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"browser-render/parse-html","title":"HTML \u89e3\u6790","description":"\u5f53\u6d4f\u89c8\u5668\u7684\u7f51\u7edc\u7ebf\u7a0b\u6536\u5230 HTML \u6587\u6863\u4e4b\u540e,\u4f1a\u4ea7\u751f\u4e00\u4e2a\u6e32\u67d3\u4efb\u52a1\u3002\u4f20\u9012\u7ed9\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u3002","source":"@site/docs/browser-render/parse-html.mdx","sourceDirName":"browser-render","slug":"/browser-render/parse-html","permalink":"/docs/browser-render/parse-html","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1722386501000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6d4f\u89c8\u5668\u6e32\u67d3\u539f\u7406","permalink":"/docs/browser-render"},"next":{"title":"\u6837\u5f0f\u8ba1\u7b97","permalink":"/docs/browser-render/recalculate-style"}}');var c=s(3274),r=s(8438);const i={},l="HTML \u89e3\u6790",h={},t=[{value:"DOM \u6811",id:"dom-\u6811",level:2},{value:"CSSOM \u6811",id:"cssom-\u6811",level:2},{value:"\u89e3\u6790\u89c4\u5219",id:"\u89e3\u6790\u89c4\u5219",level:2},{value:"HTML \u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230 CSS \u5916\u90e8\u94fe\u63a5 \u600e\u4e48\u529e\uff1f",id:"html-\u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230-css-\u5916\u90e8\u94fe\u63a5-\u600e\u4e48\u529e",level:3},{value:"HTML \u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230 <code>&lt;script&gt;</code>\u6216\u8005 <code>JS \u4ee3\u7801</code> \u600e\u4e48\u529e\uff1f",id:"html-\u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230-script\u6216\u8005-js-\u4ee3\u7801-\u600e\u4e48\u529e",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"html-\u89e3\u6790",children:"HTML \u89e3\u6790"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\u6d4f\u89c8\u5668\u7684\u7f51\u7edc\u7ebf\u7a0b\u6536\u5230 ",(0,c.jsx)(n.code,{children:"HTML"})," \u6587\u6863\u4e4b\u540e,\u4f1a\u4ea7\u751f\u4e00\u4e2a\u6e32\u67d3\u4efb\u52a1\u3002\u4f20\u9012\u7ed9\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9996\u5148\u4f1a\u628a HTML \u5b57\u7b26\u4e32\u6784\u5efa\u6210 ",(0,c.jsx)(n.code,{children:"DOM\u6811"}),"\u548c",(0,c.jsx)(n.code,{children:"CSSOM\u6811"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u8ba9\u540e\u7eed\u7684\u6b65\u9aa4\u4e0d\u5728\u64cd\u4f5c\u5b57\u7b26\u4e32\uff0c\u53ea\u64cd\u4f5c ",(0,c.jsx)(n.code,{children:"DOM \u6811"}),"\u548c ",(0,c.jsx)(n.code,{children:"CSSOM \u6811"}),"\uff0c\u4e3a\u540e\u7eed\u7684\u6e32\u67d3\u6b65\u9aa4\u505a\u51c6\u5907\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"DOM-CSSOM",src:s(8600).A+"",width:"1572",height:"920"})}),"\n",(0,c.jsx)(n.h2,{id:"dom-\u6811",children:"DOM \u6811"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"DOM \u6811",src:s(2603).A+"",width:"1798",height:"1012"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DOM(\u6587\u6863\u5bf9\u8c61\u6a21\u578b)"})," \u6811\u662f\u6307\u5728\u7f51\u9875\u4e2d\uff0cHTML \u6587\u6863\u7684\u7ed3\u6784\u5316\u7684\u8868\u793a\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5b83\u7531\u8282\u70b9(node)\u6784\u6210\uff0c\u8fd9\u4e9b\u8282\u70b9\u4ee5\u6811\u5f62\u7ed3\u6784\u7ec4\u7ec7\u8d77\u6765\uff0c\u6bcf\u4e2a\u8282\u70b9\u4ee3\u8868\u6587\u6863\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\u3001\u5c5e\u6027\u6216\u8005\u6587\u672c\u3002\r\n\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d HTML \u9875\u9762\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u89e3\u6790 HTML \u4ee3\u7801\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"DOM \u6811"}),"\u7684\u5f62\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5177\u4f53\u6765\u8bf4\uff0c",(0,c.jsx)(n.code,{children:"DOM \u6811"}),"\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\u548c\u7ec4\u6210\u90e8\u5206\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6839\u8282\u70b9(Root Node)"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6574\u4e2a\u6587\u6863\u7684\u6839\u8282\u70b9\uff0c\u901a\u5e38\u662f ",(0,c.jsx)(n.code,{children:"<html/>"})," \u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8282\u70b9(Node)"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DOM \u6811"}),"\u4e2d\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u53ef\u4ee5\u662f\u5143\u7d20\u8282\u70b9\u3001\u6587\u672c\u8282\u70b9\u3001\u6ce8\u91ca\u8282\u70b9\u7b49\u3002\u6bcf\u4e2a HTML \u5143\u7d20\u3001\u5c5e\u6027\u6216\u8005\u6587\u672c\u5185\u5bb9\u90fd\u662f\u4e00\u4e2a\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5143\u7d20\u8282\u70b9(Element Node)"})}),"\n",(0,c.jsxs)(n.p,{children:["HTML \u4e2d\u7684\u6807\u7b7e(\u5982 ",(0,c.jsx)(n.code,{children:"<div/>\u3001<p/>"})," \u7b49)\u4ee5\u53ca\u5b83\u4eec\u7684\u5c5e\u6027\u4f1a\u88ab\u89e3\u6790\u4e3a\u5143\u7d20\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6587\u672c\u8282\u70b9(Text Node)"})}),"\n",(0,c.jsx)(n.p,{children:"HTML \u4e2d\u7684\u6587\u672c\u5185\u5bb9\u4f1a\u88ab\u89e3\u6790\u4e3a\u6587\u672c\u8282\u70b9\uff0c\u5982\u6bb5\u843d\u4e2d\u7684\u6587\u5b57\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5c5e\u6027\u8282\u70b9(Attribute Node)"})}),"\n",(0,c.jsxs)(n.p,{children:["HTML \u5143\u7d20\u7684\u5c5e\u6027\u4f1a\u88ab\u89e3\u6790\u4e3a\u5c5e\u6027\u8282\u70b9\uff0c\u5982 ",(0,c.jsx)(n.code,{children:'<div id="example" />'})," \u4e2d\u7684 id \u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u7236\u8282\u70b9(Parent Node)"})," \u548c \u5b50\u8282\u70b9(Child Node)"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DOM \u6811"}),"\u4e2d\u7684\u8282\u70b9\u53ef\u4ee5\u76f8\u4e92\u5305\u542b\u548c\u5d4c\u5957\uff0c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u5b50\u8282\u70b9\uff0c\u4e5f\u53ef\u4ee5\u6709\u4e00\u4e2a\u7236\u8282\u70b9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DOM \u6811"}),"\u7684\u7ed3\u6784\u53cd\u6620\u4e86 HTML \u6587\u6863\u7684\u5c42\u7ea7\u5173\u7cfb\u548c\u7ed3\u6784\u3002",(0,c.jsx)(n.code,{children:"JavaScript"})," \u53ef\u4ee5\u901a\u8fc7\u64cd\u4f5c DOM \u6811\u6765\u52a8\u6001\u4fee\u6539\u9875\u9762\u5185\u5bb9\u3001\u6837\u5f0f\u548c\u7ed3\u6784\uff0c\u4ece\u800c\u5b9e\u73b0\u52a8\u6001\u4ea4\u4e92\u6548\u679c\u548c\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"cssom-\u6811",children:"CSSOM \u6811"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"CSSOM \u6811",src:s(5175).A+"",width:"1808",height:"960"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"CSSOM(CSS Object Model)"}),"\u6811\u662f\u4e0e ",(0,c.jsx)(n.code,{children:"DOM \u6811"}),"\u7c7b\u4f3c\u7684\u6982\u5ff5\uff0c\u4f46\u5b83\u4ee3\u8868\u7684\u662f CSS \u6837\u5f0f\u8868\u7684\u5c42\u7ea7\u7ed3\u6784\u548c\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"StyleSheetList"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8868\u793a\u662f",(0,c.jsx)(n.code,{children:"CSSOM \u6811"}),"\u7684\u6839\u8282\u70b9\u3002 \u662f\u4e00\u4e2a\u8868\u793a\u6587\u6863\u4e2d\u6240\u6709\u6837\u5f0f\u8868\u96c6\u5408\u7684\u5bf9\u8c61\u3002\u5b83\u662f\u4e00\u4e2a\u53ea\u8bfb\u7684\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u6587\u6863\u4e2d\u6240\u6709\u6837\u5f0f\u8868\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"CSSStyleSheet"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8868\u793a\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"CSS \u6837\u5f0f\u8868"}),"\u5bf9\u8c61,\u63d0\u4f9b\u4e86\u7279\u5b9a\u4e8e ",(0,c.jsx)(n.code,{children:"CSS \u6837\u5f0f\u8868"}),"\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"CSS \u6837\u5f0f\u8868"}),"\u5305\u542b\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5185\u90e8\u6837\u5f0f\u8868\uff1a\u5728 HTML \u6587\u6863\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"<style>"})," \u5143\u7d20\u5b9a\u4e49\u7684\u6837\u5f0f\u8868\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5916\u90e8\u6837\u5f0f\u8868\uff1a\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:'<link rel="stylesheet">'})," \u94fe\u63a5\u7684 CSS \u6587\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5185\u8054\u6837\u5f0f\u8868\uff1a\u5728 HTML \u6587\u6863\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:'<div style=""></div>'})," \u5143\u7d20\u5b9a\u4e49\u7684\u6837\u5f0f\u8868\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f\u8868"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"CSSStyleRule"})}),"\n",(0,c.jsxs)(n.p,{children:["\u662f\u4e00\u4e2a\u8868\u793a ",(0,c.jsx)(n.code,{children:"CSS \u89c4\u5219"}),"\u7684\u63a5\u53e3\uff0c\u5b83\u7528\u4e8e\u63cf\u8ff0\u6837\u5f0f\u8868\u4e2d\u7684\u5177\u4f53\u89c4\u5219\u6216\u9009\u62e9\u5668,\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u7ba1\u7406\u548c\u64cd\u4f5c\u9875\u9762\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"CSS \u6837\u5f0f\u89c4\u5219"}),"\uff0c\u4ece\u800c\u5b9e\u73b0\u66f4\u52a0\u52a8\u6001\u548c\u7075\u6d3b\u7684\u9875\u9762\u6837\u5f0f\u63a7\u5236\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u89e3\u6790\u89c4\u5219",children:"\u89e3\u6790\u89c4\u5219"}),"\n",(0,c.jsx)(n.h3,{id:"html-\u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230-css-\u5916\u90e8\u94fe\u63a5-\u600e\u4e48\u529e",children:"HTML \u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230 CSS \u5916\u90e8\u94fe\u63a5 \u600e\u4e48\u529e\uff1f"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u63d0\u9ad8\u89e3\u6790\u6548\u7387,\u6d4f\u89c8\u5668\u4f1a\u542f\u52a8\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"\u9884\u89e3\u6790\u7ebf\u7a0b"}),"\u7387\u5148",(0,c.jsx)(n.code,{children:"\u4e0b\u8f7d"}),"\u548c ",(0,c.jsx)(n.code,{children:"\u89e3\u6790 CSS"}),"\uff0c\u6240\u4ee5",(0,c.jsx)(n.code,{children:"CSS"}),"\u4e0d\u4f1a\u963b\u585e HTML \u89e3\u6790\u7684\u6b65\u9aa4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f46\u662f ",(0,c.jsx)(n.strong,{children:"CSS"})," \u4f1a\u5f71\u54cd DOM \u7684\u6e32\u67d3\u3002\u56e0\u4e3a ",(0,c.jsx)(n.strong,{children:"DOM \u89e3\u6790"})," \u4e0d\u9700\u8981 ",(0,c.jsx)(n.strong,{children:"CSS"})," \u7684\u53c2\u4e0e,",(0,c.jsx)(n.strong,{children:"DOM \u6e32\u67d3"})," \u9700\u8981 ",(0,c.jsx)(n.strong,{children:"CSS"})," \u7684\u53c2\u4e0e"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u89e3\u6790CSS",src:s(8619).A+"",width:"1626",height:"752"})}),"\n",(0,c.jsxs)(n.h3,{id:"html-\u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230-script\u6216\u8005-js-\u4ee3\u7801-\u600e\u4e48\u529e",children:["HTML \u89e3\u6790\u8fc7\u7a0b\u4e2d\u9047\u5230 ",(0,c.jsx)(n.code,{children:"<script>"}),"\u6216\u8005 ",(0,c.jsx)(n.code,{children:"JS \u4ee3\u7801"})," \u600e\u4e48\u529e\uff1f"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u89e3\u6790\u5230",(0,c.jsx)(n.code,{children:"<script>"}),"\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u8fd9\u4e2a",(0,c.jsx)(n.code,{children:"<script>"}),"\u5143\u7d20\u7684",(0,c.jsx)(n.code,{children:"async"}),"\u548c ",(0,c.jsx)(n.code,{children:"defer"}),"\u5c5e\u6027\u3002\u5224\u65ad\u89e3\u6790 ",(0,c.jsx)(n.code,{children:"JS \u811a\u672c"})," \u7684\u89c4\u5219\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65/\u5176\u4ed6\u89e3\u6790\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u662f\u540c\u6b65\u7684\u5219\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\u63a5\u4e0b\u6765\u7684 ",(0,c.jsx)(n.code,{children:"HTML \u89e3\u6790"}),"\u6b65\u9aa4\uff0c"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u89e3\u6790\u5230 JS \u4ee3\u7801\u7684\u65f6\u5019\u4f1a\u6682\u505c\u4e00\u5207\u884c\u4e3a\u7b49\u5f85 JS \u4ee3\u7801\u89e3\u6790\u5b8c\u6210,\u56e0\u4e3a JS \u811a\u672c\u53ef\u80fd\u4f1a\u4fee\u6539\u5f53\u524d\u7684 ",(0,c.jsx)(n.code,{children:"DOM \u6811"})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8600:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/Snipaste_2024-07-06_22-35-27-6d5c1e494fb24bcb29732aebee129879.png"},2603:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/Snipaste_2024-07-07_23-57-04-5ed4ea060d6de0b5c22f0ef6d6f2f7ec.png"},5175:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/Snipaste_2024-07-07_23-58-34-2cb5c9a2c731c5f3ceac5487d2c55a2e.png"},8619:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/Snipaste_2024-07-08_00-43-41-ad4b31e166662ce36171ff66307a045b.png"},8438:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var d=s(9474);const c={},r=d.createContext(c);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);