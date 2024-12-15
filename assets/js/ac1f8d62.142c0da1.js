"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[9670],{5687:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>t});const c=JSON.parse('{"id":"NetWork/tcp-protocol","title":"TCP \u534f\u8bae","description":"TCP\u534f\u8bae \u662f\u4e00\u79cd\u9762\u5411\u8fde\u63a5\u7684\u3001\u53ef\u9760\u7684\u4f20\u8f93\u5c42\u534f\u8bae\u3002\u5b83\u786e\u4fdd\u6570\u636e\u5728\u7f51\u7edc\u4e2d\u6309\u987a\u5e8f\u4e14\u65e0\u5dee\u9519\u5730\u4f20\u8f93\u3002","source":"@site/docs/NetWork/tcp-protocol.mdx","sourceDirName":"NetWork","slug":"/NetWork/tcp-protocol","permalink":"/docs/NetWork/tcp-protocol","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1726427124000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6d4f\u89c8\u5668\u7f13\u5b58\u534f\u8bae","permalink":"/docs/NetWork/cache-protocol"},"next":{"title":"\u7f51\u7edc\u6027\u80fd\u4f18\u5316","permalink":"/docs/NetWork/performance"}}');var d=s(3274),l=s(8438);const i={},r="TCP \u534f\u8bae",h={},t=[{value:"TCP \u6536\u53d1\u6570\u636e\u6d41\u7a0b",id:"tcp-\u6536\u53d1\u6570\u636e\u6d41\u7a0b",level:2},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",level:3},{value:"\u6570\u636e\u53d1\u9001",id:"\u6570\u636e\u53d1\u9001",level:3},{value:"\u786e\u8ba4\u63a5\u6536",id:"\u786e\u8ba4\u63a5\u6536",level:3},{value:"\u91cd\u4f20\u673a\u5236",id:"\u91cd\u4f20\u673a\u5236",level:3},{value:"\u6d41\u91cf\u63a7\u5236",id:"\u6d41\u91cf\u63a7\u5236",level:3},{value:"\u8fde\u63a5\u7ec8\u6b62",id:"\u8fde\u63a5\u7ec8\u6b62",level:3},{value:"TCP \u5982\u4f55\u786e\u4fdd\u53ef\u9760\u4f20\u8f93",id:"tcp-\u5982\u4f55\u786e\u4fdd\u53ef\u9760\u4f20\u8f93",level:2},{value:"\u8fde\u63a5\u7684\u5efa\u7acb(\u4e09\u6b21\u63e1\u624b)",id:"\u8fde\u63a5\u7684\u5efa\u7acb\u4e09\u6b21\u63e1\u624b",level:2},{value:"\u8fde\u63a5\u7684\u9500\u6bc1(\u56db\u6b21\u6325\u624b)",id:"\u8fde\u63a5\u7684\u9500\u6bc1\u56db\u6b21\u6325\u624b",level:2},{value:"HTTP \u534f\u8bae\u548c TCP \u534f\u8bae\u7684\u5173\u7cfb",id:"http-\u534f\u8bae\u548c-tcp-\u534f\u8bae\u7684\u5173\u7cfb",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"tcp-\u534f\u8bae",children:"TCP \u534f\u8bae"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"TCP\u534f\u8bae"})," \u662f\u4e00\u79cd\u9762\u5411\u8fde\u63a5\u7684\u3001\u53ef\u9760\u7684\u4f20\u8f93\u5c42\u534f\u8bae\u3002\u5b83\u786e\u4fdd\u6570\u636e\u5728\u7f51\u7edc\u4e2d\u6309\u987a\u5e8f\u4e14\u65e0\u5dee\u9519\u5730\u4f20\u8f93\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"tcp-\u6536\u53d1\u6570\u636e\u6d41\u7a0b",children:"TCP \u6536\u53d1\u6570\u636e\u6d41\u7a0b"}),"\n",(0,d.jsx)(n.h3,{id:"\u5efa\u7acb\u8fde\u63a5",children:"\u5efa\u7acb\u8fde\u63a5"}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7",(0,d.jsx)(n.code,{children:"\u4e09\u6b21\u63e1\u624b"}),"\u8fc7\u7a0b\u5efa\u7acb\u8fde\u63a5"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6570\u636e\u53d1\u9001",children:"\u6570\u636e\u53d1\u9001"}),"\n",(0,d.jsxs)(n.p,{children:["\u53d1\u9001\u65b9\u5c06\u6570\u636e",(0,d.jsx)(n.code,{children:"\u5206\u6bb5"}),"\uff0c\u5e76\u5728\u6bcf\u4e2a\u6570\u636e\u6bb5\u4e0a\u9644\u52a0",(0,d.jsx)(n.code,{children:"\u5e8f\u5217\u53f7"}),"\u3002\u6570\u636e\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u5230\u63a5\u6536\u65b9\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u786e\u8ba4\u63a5\u6536",children:"\u786e\u8ba4\u63a5\u6536"}),"\n",(0,d.jsxs)(n.p,{children:["\u63a5\u6536\u65b9\u63a5\u6536\u6570\u636e\u6bb5\u5e76\u53d1\u9001 ",(0,d.jsx)(n.code,{children:"ACK(\u786e\u8ba4)"}),"\u62a5\u6587\u6bb5\uff0c\u786e\u8ba4\u6536\u5230\u7684\u6570\u636e\u3002\u786e\u8ba4\u62a5\u6587\u6bb5\u4e2d\u5305\u542b",(0,d.jsx)(n.code,{children:"\u4e0b\u4e00\u4e2a"}),"\u671f\u671b\u63a5\u6536\u7684",(0,d.jsx)(n.code,{children:"\u5e8f\u5217\u53f7"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u91cd\u4f20\u673a\u5236",children:"\u91cd\u4f20\u673a\u5236"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u53d1\u9001\u65b9\u672a\u6536\u5230\u786e\u8ba4",(0,d.jsx)(n.code,{children:"\u62a5\u6587\u6bb5"}),"\uff0c\u4f1a\u5728\u8d85\u65f6\u540e\u91cd\u4f20",(0,d.jsx)(n.code,{children:"\u6570\u636e\u6bb5"}),"\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6d41\u91cf\u63a7\u5236",children:"\u6d41\u91cf\u63a7\u5236"}),"\n",(0,d.jsxs)(n.p,{children:["\u53d1\u9001\u65b9\u548c\u63a5\u6536\u65b9\u901a\u8fc7",(0,d.jsx)(n.code,{children:"\u6ed1\u52a8\u7a97\u53e3\u673a\u5236"}),"\u8c03\u8282\u6570\u636e\u6d41\u91cf\uff0c\u786e\u4fdd\u63a5\u6536\u65b9\u4e0d\u4f1a\u8fc7\u8f7d\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u8fde\u63a5\u7ec8\u6b62",children:"\u8fde\u63a5\u7ec8\u6b62"}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7",(0,d.jsx)(n.code,{children:"\u56db\u6b21\u6325\u624b"}),"\u8fc7\u7a0b\u7ec8\u6b62\u8fde\u63a5\uff0c\u786e\u4fdd\u53cc\u65b9\u90fd\u5b8c\u6210\u6570\u636e\u4f20\u8f93\u5e76\u5173\u95ed\u8fde\u63a5."]}),"\n",(0,d.jsx)(n.h2,{id:"tcp-\u5982\u4f55\u786e\u4fdd\u53ef\u9760\u4f20\u8f93",children:"TCP \u5982\u4f55\u786e\u4fdd\u53ef\u9760\u4f20\u8f93"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728",(0,d.jsx)(n.code,{children:"TCP\u534f\u8bae\u4e2d"}),", \u4efb\u4f55\u65f6\u5019 , \u4efb\u4f55\u4e00\u65b9\u90fd\u53ef\u4ee5\u4e3b\u52a8\u53d1\u6570\u636e\u7ed9\u53e6\u4e00\u65b9\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u9519\u4e71,\u6570\u636e\u4e22\u5931\u7b49\u95ee\u9898,",(0,d.jsx)(n.code,{children:"TCP\u534f\u8bae"}),"\u8981\u6c42:",(0,d.jsx)(n.strong,{children:"\u63a5\u6536\u65b9\u63a5\u6536\u5230\u6570\u636e\u62a5\u6587\u4e4b\u540e,\u5fc5\u987b\u8981\u505a\u51fa\u786e\u8ba4!"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"\u53ef\u9760\u4f20\u8f93",src:s(4353).A+"",width:"1074",height:"762"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"seq"}),": \u8868\u793a\u8fd9\u6b21\u6570\u636e\u62a5\u6587\u7684\u5e8f\u53f7"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"ACK"}),": \u8868\u793a\u8fd9\u6b21\u6570\u636e\u62a5\u6587\u662f\u4e00\u4e2a\u786e\u8ba4\u6570\u636e\u5305"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"ack"}),": \u8868\u793a\u671f\u671b\u4e0b\u4e00\u6b21\u63a5\u6536\u7684\u7684\u6570\u636e\u62a5\u6587\u5e8f\u53f7"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u53d1\u9001\u65b9\u957f\u65f6\u95f4\u6ca1\u6709\u6536\u5230",(0,d.jsx)(n.code,{children:"ACK(\u786e\u8ba4)"}),",\u5219\u4f1a\u5224\u5b9a\u4e22\u5931\u6216\u8005\u662f\u9519\u8bef\u3002\u7136\u540e\u91cd\u65b0\u53d1\u9001"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fde\u63a5\u7684\u5efa\u7acb\u4e09\u6b21\u63e1\u624b",children:"\u8fde\u63a5\u7684\u5efa\u7acb(\u4e09\u6b21\u63e1\u624b)"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"\u4e09\u6b21\u63e1\u624b",src:s(3486).A+"",width:"1028",height:"884"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"TCP \u534f\u8bae"}),"\u8981\u5b9e\u73b0\u6570\u636e\u7684\u6536\u53d1,\u5fc5\u987b\u8981\u5148\u5efa\u7acb\u8fde\u63a5,\u8fde\u63a5\u7684\u672c\u8d28\u5176\u5b9e\u5c31\u662f\u5728\u53cc\u65b9\u5f00\u8f9f\u4e00\u5757\u5185\u5b58\u7a7a\u95f4\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"\u4e09\u6b21\u63e1\u624b"}),"\u662f\u5efa\u7acb ",(0,d.jsx)(n.code,{children:"TCP \u8fde\u63a5"}),"\u7684\u8fc7\u7a0b\u3002\u786e\u4fdd\u53cc\u65b9\u90fd\u80fd",(0,d.jsx)(n.code,{children:"\u53d1\u9001"}),"\u548c",(0,d.jsx)(n.code,{children:"\u63a5\u6536\u6570\u636e"}),"\u3002\u8fc7\u7a0b\u5982\u4e0b:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"SYN(\u540c\u6b65)"})," \u62a5\u6587\u6bb5\uff0c\u8bf7\u6c42\u5efa\u7acb\u8fde\u63a5\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u670d\u52a1\u5668\u6536\u5230 ",(0,d.jsx)(n.strong,{children:"SYN(\u540c\u6b65)"})," \u62a5\u6587\u6bb5\u540e\uff0c\u56de\u590d\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"SYN-ACK"})," \u62a5\u6587\u6bb5\uff0c\u786e\u8ba4\u63a5\u6536\u5230\u8fde\u63a5\u8bf7\u6c42\uff0c\u5e76\u53d1\u9001\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"SYN(\u540c\u6b65)"})," \u62a5\u6587\u6bb5 \u7ed9\u5ba2\u6237\u7aef\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u6536\u5230 ",(0,d.jsx)(n.strong,{children:"SYN-ACK"})," \u62a5\u6587\u6bb5 \u540e\uff0c\u53d1\u9001\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"ACK(\u786e\u8ba4)"})," \u62a5\u6587\u6bb5\u7ed9\u670d\u52a1\u5668\uff0c\u786e\u8ba4\u6536\u5230\u670d\u52a1\u5668\u7684\u54cd\u5e94\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fde\u63a5\u7684\u9500\u6bc1\u56db\u6b21\u6325\u624b",children:"\u8fde\u63a5\u7684\u9500\u6bc1(\u56db\u6b21\u6325\u624b)"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"\u56db\u6b21\u6325\u624b",src:s(9199).A+"",width:"1286",height:"1096"})}),"\n",(0,d.jsxs)(n.p,{children:["\u56db\u6b21\u6325\u624b\u662f ",(0,d.jsx)(n.code,{children:"TCP"})," \u8fde\u63a5\u7ec8\u6b62\u7684\u8fc7\u7a0b\uff0c\u786e\u4fdd\u53cc\u65b9\u90fd\u80fd\u5b8c\u6210\u6570\u636e\u4f20\u8f93\u5e76\u6b63\u5e38\u5173\u95ed\u8fde\u63a5\u3002\u6b65\u9aa4\u5982\u4e0b:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"FIN(\u7ed3\u675f)"})," \u62a5\u6587\u6bb5\uff0c\u8868\u793a\u4e0d\u518d\u53d1\u9001\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u670d\u52a1\u5668\u63a5\u6536 ",(0,d.jsx)(n.strong,{children:"FIN(\u7ed3\u675f)"})," \u62a5\u6587\u6bb5\u540e, \u53d1\u9001\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"ACK(\u786e\u8ba4)"})," \u62a5\u6587\u6bb5,\u6b64\u65f6\u670d\u52a1\u5668\u8fde\u63a5\u7684\u4e00\u534a\u5df2\u7ecf\u5173\u95ed\uff0c\u4f46\u662f\u4ecd\u7136\u53ef\u4ee5\u7ee7\u7eed\u53d1\u9001\u6570\u636e\uff0c\u76f4\u5230\u5b83\u4e5f\u51c6\u5907\u597d\u5173\u95ed\u8fde\u63a5\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u670d\u52a1\u5668\u5728\u5b8c\u6210\u6240\u6709\u5269\u4f59\u7684\u6570\u636e\u4f20\u8f93\u540e,\u5728\u53d1\u9001\u4e00\u4e2a ",(0,d.jsx)(n.strong,{children:"FIN(\u7ed3\u675f)"})," \u62a5\u6587\u6bb5,\u8868\u793a\u670d\u52a1\u5668\u6ca1\u6709\u66f4\u591a\u7684\u6570\u636e\u9700\u8981\u53d1\u9001\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u6536\u5230\u4e4b\u540e\u670d\u52a1\u7aef\u53d1\u9001\u7684 ",(0,d.jsx)(n.strong,{children:"FIN(\u7ed3\u675f)"})," \u62a5\u6587\u6bb5\u4e4b\u540e,\u4e0d\u4f1a\u7acb\u5373\u53d1\u9001 ",(0,d.jsx)(n.strong,{children:"ACK(\u786e\u8ba4)"})," \u62a5\u6587\u6bb5\u3002\n\u56e0\u4e3a\u9700\u8981\u786e\u4fdd\u670d\u52a1\u5668\u80fd\u6536\u5230 ",(0,d.jsx)(n.strong,{children:"ACK(\u786e\u8ba4)"})," \u62a5\u6587\u6bb5,\u4f1a\u7b49\u5f85",(0,d.jsx)(n.strong,{children:"2MSL(2 \u500d\u7684\u6700\u5927\u6bb5\u5bff\u547d)"}),"\u3002\u5728\u8fd9\u4e4b\u540e\u518d\u53d1\u9001",(0,d.jsx)(n.strong,{children:"ACK(\u786e\u8ba4)"})," \u62a5\u6587\u6bb5\u3002\u7ed3\u675f",(0,d.jsx)(n.code,{children:"TCP\u8fde\u63a5"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"http-\u534f\u8bae\u548c-tcp-\u534f\u8bae\u7684\u5173\u7cfb",children:"HTTP \u534f\u8bae\u548c TCP \u534f\u8bae\u7684\u5173\u7cfb"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"HTTP \u534f\u8bae"}),"\u662f\u5bf9\u5185\u5bb9\u683c\u5f0f\u7684\u89c4\u5b9a,\u5b83\u4f7f\u7528\u4e86",(0,d.jsx)(n.code,{children:"TCP\u534f\u8bae"}),"\u6765\u5b8c\u6210\u53ef\u9760\u4f20\u8f93\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u5177\u4f53\u4f7f\u7528",(0,d.jsx)(n.code,{children:"TCP\u534f\u8bae"}),"\u7684\u65f6\u5019"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5ba2\u6237\u7aef\u53d1\u6d88\u606f\u7ed9\u670d\u52a1\u5668\u53eb\u505a",(0,d.jsx)(n.code,{children:"\u8bf7\u6c42"})," \u670d\u52a1\u5668\u53d1\u6d88\u606f\u7ed9\u5ba2\u6237\u7aef\u53eb",(0,d.jsx)(n.code,{children:"\u54cd\u5e94"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4f7f\u7528",(0,d.jsx)(n.code,{children:"HTTP \u534f\u8bae"}),"\u7684\u670d\u52a1\u5668\u4e0d\u4f1a\u4e3b\u52a8\u53d1\u6d88\u606f\u7ed9\u5ba2\u6237\u7aef(\u5c3d\u7ba1 TCP \u53ef\u4ee5)\u3002\u5b83\u53ea\u5bf9\u8bf7\u6c42\u8fdb\u884c\u54cd\u5e94\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6bcf\u4e2a",(0,d.jsx)(n.code,{children:"\u8bf7\u6c42-\u54cd\u5e94"}),",\u90fd\u8981\u5148\u5efa\u7acb",(0,d.jsx)(n.code,{children:"TCP\u8fde\u63a5"}),"(\u4e09\u6b21\u63e1\u624b),\u7136\u540e\u5b8c\u6210\u54cd\u5e94\u540e\u9500\u6bc1\u8fde\u63a5(\u56db\u6b21\u6325\u624b),\u6240\u4ee5\u6bcf\u6b21",(0,d.jsx)(n.code,{children:"\u8bf7\u6c42-\u54cd\u5e94"}),"\u90fd\u662f\u72ec\u7acb\u7684,\u65e0\u6cd5\u4fdd\u6301\u72b6\u6001\u3002"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},4353:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/Snipaste_2024-08-25_17-37-38-c40de0e988c935a074e1e25fac3d130f.png"},3486:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/Snipaste_2024-08-25_19-14-32-ef66f8ec3140098419dc25d497cf2883.png"},9199:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/Snipaste_2024-09-15_13-56-48-5c79951441bb0266c5c9e7d51d26cce8.png"},8438:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var c=s(9474);const d={},l=c.createContext(d);function i(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);