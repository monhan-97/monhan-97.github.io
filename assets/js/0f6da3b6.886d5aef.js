"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[7879],{3232:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"prettier/how-to-use-prettier","title":"\u5982\u4f55\u4f7f\u7528 Prettier?","description":"- \u5728\u9879\u76ee\u91cc\u9762\u7684\u6839\u76ee\u5f55\u4e0b \u521b\u5efa.prettierrc.js\u6587\u4ef6","source":"@site/docs/prettier/how-to-use-prettier.mdx","sourceDirName":"prettier","slug":"/prettier/how-to-use-prettier","permalink":"/docs/prettier/how-to-use-prettier","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"\u9ec4\u68a6\u6c49","lastUpdatedAt":1681875183000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Prettier \u914d\u7f6e","permalink":"/docs/prettier/prettier-config"},"next":{"title":"Flex \u5e03\u5c40","permalink":"/docs/flex-layout"}}');var a=t(3274),l=t(8438),s=t(9151),i=t(5898),o=t(4342);const c={},u="\u5982\u4f55\u4f7f\u7528 Prettier?",d={},h=[{value:"\u624b\u52a8\u683c\u5f0f\u5316",id:"\u624b\u52a8\u683c\u5f0f\u5316",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"\u5982\u4f55\u4f7f\u7528-prettier",children:"\u5982\u4f55\u4f7f\u7528 Prettier?"})}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"npm",label:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"mkdir learn-prettier && cd learn-prettier\n\nnpm init -y\n\nnpm install prettier --save-dev --save-exact\n\n# \u5728learn-prettier/src\u76ee\u5f55\u4e0b\u521b\u5efaindex.js\u6587\u4ef6\uff0c\u7136\u540e\u81ea\u5df1\u5199\u4e00\u4e9bJS\u4ee3\u7801\n\nnpx prettier --write src/index.js\n"})})}),(0,a.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"mkdir learn-prettier && cd learn-prettier\n\nyarn init -y\n\nyarn add prettier --dev --exact\n\n#  \u5728learn-prettier/src\u76ee\u5f55\u4e0b\u521b\u5efaindex.js\u6587\u4ef6\uff0c\u7136\u540e\u81ea\u5df1\u5199\u4e00\u4e9bJS\u4ee3\u7801\n\nyarn prettier --write src/index.js\n"})})})]}),"\n",(0,a.jsx)(r.h1,{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",children:"\u521b\u5efa\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\u5728\u9879\u76ee\u91cc\u9762\u7684\u6839\u76ee\u5f55\u4e0b \u521b\u5efa",(0,a.jsx)(r.code,{children:".prettierrc.js"}),"\u6587\u4ef6"]}),"\n",(0,a.jsxs)(r.li,{children:["\u914d\u7f6e\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,a.jsx)(o.A,{to:"/docs/prettier/prettier-config",children:"Prettier \u914d\u7f6e"})]}),"\n",(0,a.jsxs)(r.li,{children:["\u5728\u9879\u76ee\u91cc\u9762\u7684\u6839\u76ee\u5f55\u4e0b \u521b\u5efa",(0,a.jsx)(r.code,{children:".prettierignore"}),"\u6587\u4ef6 \u5ffd\u7565\u8fd9\u4e9b\u6587\u4ef6\u7684\u683c\u5f0f\u5316"]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="/src/.prettierrc.js"',children:"modules.exports = {\n  // ...\u91cc\u9762\u586b\u5165\u81ea\u5b9a\u4e49\u914d\u7f6e\n};\n"})}),"\n",(0,a.jsx)(r.h1,{id:"\u6574\u5408-vs-code",children:"\u6574\u5408 VS Code"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\u5b89\u88c5 ",(0,a.jsx)(r.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier Extention"})]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"\u624b\u52a8\u683c\u5f0f\u5316",children:"\u624b\u52a8\u683c\u5f0f\u5316"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"Mac",label:"Mac",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"CMD + Shift + P\n\nFormat Document\n"})})}),(0,a.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"Ctlr + Shift + P\n\nFormat Document\n"})})})]}),"\n",(0,a.jsx)(r.h1,{id:"\u4fdd\u5b58\u6587\u4ef6\u65f6\u81ea\u52a8\u683c\u5f0f\u5316",children:"\u4fdd\u5b58\u6587\u4ef6\u65f6\u81ea\u52a8\u683c\u5f0f\u5316"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"Mac",label:"Mac",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"CMD + ,\n\n# \u52fe\u9009Text-editor \u4e0b\u7684 Format On Save\n"})})}),(0,a.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"Ctlr + ,\n\n# \u52fe\u9009Text-editor \u4e0b\u7684 Format On Save\n"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5898:(e,r,t)=>{t.d(r,{A:()=>s});t(9474);var n=t(3526);const a={tabItem:"tabItem_GYOJ"};var l=t(3274);function s(e){let{children:r,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},9151:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(9474),a=t(3526),l=t(65),s=t(241),i=t(77),o=t(4042),c=t(6883),u=t(4563);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,l=h(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[c,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(2607);const x={tabList:"tabList_zfeU",tabItem:"tabItem_fHig"};var v=t(3274);function j(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(c(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...r,...e}),(0,v.jsx)(g,{...r,...e})]})}function w(e){const r=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},8438:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var n=t(9474);const a={},l=n.createContext(a);function s(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);