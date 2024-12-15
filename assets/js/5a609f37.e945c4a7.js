"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[3328],{7224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"event-loop/process-thread","title":"\u8fdb\u7a0b\u548c\u7ebf\u7a0b","description":"\u4ec0\u4e48\u662f\u8fdb\u7a0b","source":"@site/docs/event-loop/process-thread.mdx","sourceDirName":"event-loop","slug":"/event-loop/process-thread","permalink":"/docs/event-loop/process-thread","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1691927695000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u4e8b\u4ef6\u5faa\u73af","permalink":"/docs/event-loop"},"next":{"title":"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u662f\u5982\u4f55\u5de5\u4f5c\u7684","permalink":"/docs/event-loop/main-thread"}}');var r=t(3274),o=t(8438);const l={},d="\u8fdb\u7a0b\u548c\u7ebf\u7a0b",i={},c=[{value:"\u4ec0\u4e48\u662f\u8fdb\u7a0b",id:"\u4ec0\u4e48\u662f\u8fdb\u7a0b",level:2},{value:"\u4ec0\u4e48\u662f\u7ebf\u7a0b",id:"\u4ec0\u4e48\u662f\u7ebf\u7a0b",level:2},{value:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",id:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",level:2},{value:"\u6d4f\u89c8\u5668\u8fdb\u7a0b",id:"\u6d4f\u89c8\u5668\u8fdb\u7a0b",level:3},{value:"\u7f51\u7edc\u8fdb\u7a0b",id:"\u7f51\u7edc\u8fdb\u7a0b",level:3},{value:"\u6e32\u67d3\u8fdb\u7a0b",id:"\u6e32\u67d3\u8fdb\u7a0b",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b",children:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u8fdb\u7a0b",children:"\u4ec0\u4e48\u662f\u8fdb\u7a0b"}),"\n",(0,r.jsxs)(n.p,{children:["\u6bcf\u4e2a\u7a0b\u5e8f\u8fd0\u884c\u90fd\u9700\u8981\u5f00\u8f9f\u4e00\u5757",(0,r.jsx)(n.code,{children:"\u5185\u5b58\u7a7a\u95f4"}),"\u4f9b\u7a0b\u5e8f\u4f7f\u7528 (\u6bd4\u5982\u5fae\u4fe1,\u738b\u8005\u8363\u8000,QQ) \u53ef\u4ee5\u7b80\u5355\u628a\u8fd9\u5757\u5185\u5b58\u7a7a\u95f4\u7406\u89e3\u4e3a",(0,r.jsx)(n.code,{children:"\u8fdb\u7a0b"})]}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\u6bcf\u4e2a\u7a0b\u5e8f\u81f3\u5c11\u6709\u4e00\u4e2a\u8fdb\u7a0b \u8fdb\u7a0b\u4e4b\u95f4\u4e92\u4e0d\u5e72\u6270\u7684 \u5373\u4f7f\u9700\u8981\u901a\u8baf\u4e5f\u9700\u8981\u53cc\u65b9\u540c\u610f"}),"\n",(0,r.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u7ebf\u7a0b",children:"\u4ec0\u4e48\u662f\u7ebf\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"\u6709\u4e86\u8fdb\u7a0b\u4e4b\u540e \u5c31\u53ef\u4ee5\u8fd0\u884c\u7a0b\u5e8f\u8fd0\u884c\u7684\u4ee3\u7801\u4e86 \u4e00\u4e2a\u8fdb\u7a0b\u81f3\u5c11\u6709\u4e00\u4e2a\u7ebf\u7a0b \u6240\u4ee5\u8fdb\u7a0b\u5f00\u542f\u4e4b\u540e\u5c31\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b \u8fd9\u4e2a\u7ebf\u7a0b\u79f0\u4f5c\u4e3a\u4e3b\u7ebf\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u7a0b\u5e8f\u9700\u8981\u540c\u65f6\u6267\u884c\u591a\u5757\u4ee3\u7801 \u4e3b\u7ebf\u7a0b\u5c31\u4f1a\u542f\u52a8\u66f4\u591a\u7684\u7ebf\u7a0b\u6765\u6267\u884c\u4ee3\u7801 \u6240\u4ee5\u4e00\u4e2a\u8fdb\u7a0b\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u7ebf\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"event-loop",src:t(7879).A+"",width:"1936",height:"1064"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",children:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\u6d4f\u89c8\u5668\u662f\u4e00\u4e2a\u591a\u8fdb\u7a0b\u548c\u4e00\u4e2a\u591a\u7ebf\u7a0b\u7684\u5e94\u7528\u7a0b\u5e8f"})}),"\n",(0,r.jsx)(n.p,{children:"\u6d4f\u89c8\u5668\u5185\u90e8\u6781\u5176\u590d\u6742 \u4e3a\u4e86\u9632\u6b62\u907f\u514d\u4e92\u76f8\u5f71\u54cd \u51cf\u5c11\u8fde\u73af\u5d29\u6e83\u7684\u51e0\u7387 \u6240\u4ee5\u6d4f\u89c8\u5668\u5728\u542f\u52a8\u7684\u65f6\u5019 \u4e3b\u8981\u4f1a\u5f00\u542f\u4e09\u4e2a\u8fdb\u7a0b"}),"\n",(0,r.jsx)(n.h3,{id:"\u6d4f\u89c8\u5668\u8fdb\u7a0b",children:"\u6d4f\u89c8\u5668\u8fdb\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u8d1f\u8d23\u754c\u9762\u5c55\u793a\u3001\u7528\u6237\u4ea4\u4e92\u3001\u5b50\u8fdb\u7a0b\u7ba1\u7406\u7b49 \u6d4f\u89c8\u5668\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u7684\u4efb\u52a1"}),"\n",(0,r.jsx)(n.h3,{id:"\u7f51\u7edc\u8fdb\u7a0b",children:"\u7f51\u7edc\u8fdb\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"\u8d1f\u8d23\u52a0\u8f7d\u7f51\u7edc\u8d44\u3001\u7f51\u7edc\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u6765\u5904\u7406\u4e0d\u540c\u7684\u7f51\u7edc\u4efb\u52a1"}),"\n",(0,r.jsx)(n.h3,{id:"\u6e32\u67d3\u8fdb\u7a0b",children:"\u6e32\u67d3\u8fdb\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"\u6e32\u67d3\u8fdb\u7a0b\u542f\u52a8\u540e \u4f1a\u5f00\u542f\u4e00\u4e2a\u6e32\u67d3\u4e3b\u8fdb\u7a0b \u4e3b\u7ebf\u7a0b\u4e3b\u8981\u8d1f\u8d23\u89e3\u6790\u548c\u6267\u884c HTML,JS,CSS\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b \u6d4f\u89c8\u5668\u4f1a\u4e3a\u591a\u4e2a\u6807\u7b7e\u9875\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u6e32\u67d3\u8fdb\u7a0b \u4ee5\u4fdd\u8bc1\u4e0d\u540c\u7684\u6807\u7b7e\u4e4b\u95f4 \u4e92\u4e0d\u5f71\u54cd"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7879:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Snipaste_2023-08-06_19-13-46-025a60076b3fb12abeeb52c801ef01f9.png"},8438:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(9474);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);