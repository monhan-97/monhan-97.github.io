"use strict";(self.webpackChunkhuangmh_blog=self.webpackChunkhuangmh_blog||[]).push([[5248],{21:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"Redux/react-redux","title":"react-redux","description":"React-Redux","source":"@site/docs/Redux/react-redux.mdx","sourceDirName":"Redux","slug":"/Redux/react-redux","permalink":"/docs/Redux/react-redux","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"mohan-97","lastUpdatedAt":1705159941000,"frontMatter":{}}');var n=r(5105),u=r(3881),l=r(3922),s=r(1630);const o={},c=void 0,i={},d=[{value:"React-Redux",id:"react-redux",level:2}];function f(e){const t={code:"code",h2:"h2",pre:"pre",...(0,u.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"react-redux",children:"React-Redux"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(s.A,{value:"npm",label:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install react-redux\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add react-redux\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,u.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},1630:(e,t,r)=>{r.d(t,{A:()=>l});r(8101);var a=r(3526);const n={tabItem:"tabItem_H_fW"};var u=r(5105);function l(e){let{children:t,hidden:r,className:l}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:r,children:t})}},3881:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var a=r(8101);const n={},u=a.createContext(n);function l(e){const t=a.useContext(u);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(u.Provider,{value:t},e.children)}},3922:(e,t,r)=>{r.d(t,{A:()=>j});var a=r(8101),n=r(3526),u=r(7372),l=r(5234),s=r(6366),o=r(4345),c=r(1590),i=r(1712);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(n.location.search);t.set(u,e),n.replace({...n.location,search:t.toString()})}),[u,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,u=f(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:u}))),[c,d]=p({queryString:r,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,u]=(0,i.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:n}),v=(()=>{const e=c??b;return h({value:e,tabValues:u})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,u]),tabValues:u}}var m=r(1702);const v={tabList:"tabList__nVm",tabItem:"tabItem_QOTQ"};var x=r(5105);function g(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.a_)(),i=e=>{const t=e.currentTarget,r=o.indexOf(t),n=s[r].value;n!==a&&(c(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:u}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:i,...u,className:(0,n.A)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:u}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===u));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==u})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}}}]);