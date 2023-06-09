import{ab as H,q as i,au as ne,aa as oe,z as G,Y as f,Z as d,A as c,M as ae,B as V,d as k,ad as x,av as ue,aw as N,ax as le,T as re,u as se,ay as ie,I as fe,as as P,az as de,a3 as ce,a5 as z,aA as me,s as R,o as Q,c as U,g as C}from"./index-a4c88f38.js";function he(){const{$storage:t,$config:e}=H(),o=()=>{ne().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=oe),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=i(()=>t==null?void 0:t.layout.layout),u=i(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:o}}const pe=G({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=f().getItem(`${d()}layout`))==null?void 0:t.sidebarStatus)??c().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=f().getItem(`${d()}layout`))==null?void 0:e.layout)??c().Layout,device:ae()?"mobile":"desktop"}},getters:{getSidebarStatus(t){return t.sidebar.opened},getDevice(t){return t.device}},actions:{TOGGLE_SIDEBAR(t,e){const o=f().getItem(`${d()}layout`);t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,o.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,o.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,o.sidebarStatus=this.sidebar.opened),f().setItem(`${d()}layout`,o)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function ge(){return pe(V)}const Te=G({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=f().getItem(`${d()}layout`))==null?void 0:t.epThemeColor)??c().EpThemeColor,epTheme:((e=f().getItem(`${d()}layout`))==null?void 0:e.theme)??c().Theme}},getters:{getEpThemeColor(t){return t.epThemeColor},fill(t){return t.epTheme==="light"?"#409eff":t.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=f().getItem(`${d()}layout`);this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,f().setItem(`${d()}layout`,e))}}});function L(){return Te(V)}function _e(t,e){const o=/^IF-/;if(o.test(t)){const n=t.split(o)[1],u=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),s=n.slice(n.indexOf(" ")+1,n.length);return k({name:"FontIcon",render(){return x(ue,{icon:u,iconType:s,...e})}})}else return typeof t=="function"||typeof(t==null?void 0:t.render)=="function"?t:typeof t=="object"?k({name:"OfflineIcon",render(){return x(N,{icon:t,...e})}}):k({name:"Icon",render(){const n=t&&t.includes(":")?le:N;return x(n,{icon:t,...e})}})}const D="当前路由配置不正确，请检查配置";function Ne(){var E;const t=re(),e=ge(),o=se().options.routes,{wholeMenus:n}=ie(fe()),u=((E=c())==null?void 0:E.TooltipEffect)??"light",s=i(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),p=i(()=>{var a;return(a=P())==null?void 0:a.username}),y=i(()=>p.value?{marginRight:"10px"}:""),v=i(()=>!e.getSidebarStatus),M=i(()=>e.getDevice),{$storage:m,$config:r}=H(),l=i(()=>{var a;return(a=m==null?void 0:m.layout)==null?void 0:a.layout}),h=i(()=>r.Title);function B(a){const g=c().Title;g?document.title=`${a.title} | ${g}`:document.title=a.title}function S(){P().logOut()}function K(){de.push(ce().path)}function Y(){z.emit("openPanel")}function Z(){e.toggleSideBar()}function J(a){a==null||a.handleResize()}function X(a){var $;if(!a.children)return console.error(D);const g=/^http(s?):\/\//,T=($=a.children[0])==null?void 0:$.path;return g.test(T)?a.path+"/"+T:T}function ee(a,g){if(n.value.length===0||te(a))return;let T="";const $=a.lastIndexOf("/");$>0&&(T=a.slice(0,$));function A(I,_){return _?_.map(b=>{b.path===I?b.redirect?A(b.redirect,b.children):z.emit("changLayoutRoute",{indexPath:I,parentPath:T}):b.children&&A(I,b.children)}):console.error(D)}A(a,g)}function te(a){return me.includes(a)}return{route:t,title:h,device:M,layout:l,logout:S,routers:o,$storage:m,backTopMenu:K,onPanel:Y,getDivStyle:s,changeTitle:B,toggleSideBar:Z,menuSelect:ee,handleResize:J,resolvePath:X,isCollapse:v,pureApp:e,username:p,avatarsStyle:y,tooltipEffect:u}}const w={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/Users/huluo/github/FastAPI_Vue_Admin/frontend/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},be="/",ve="assets";function W(t){let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e}function q(t,e,o){let n=[t.toString(16),e.toString(16),o.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function $e(t,e){let o=W(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return q(o[0],o[1],o[2])}function ye(t,e){let o=W(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return q(o[0],o[1],o[2])}function O(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function j({scopeName:t,multipleScopeVars:e}){const o=Array.isArray(e)&&e.length?e:w.multipleScopeVars;let n=document.documentElement.className;new RegExp(O(t)).test(n)||(o.forEach(u=>{n=n.replace(new RegExp(O(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function F({id:t,href:e}){const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o}function Ce(t){const e={scopeName:"theme-default",customLinkHref:s=>s,...t},o=e.themeLinkTagId||w.themeLinkTagId;let n=document.getElementById(o);const u=e.customLinkHref(`${be.replace(/\/$/,"")}${`/${ve}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const s=F({id:o,href:u});n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):n.parentNode.appendChild(s),s.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),j(e)};return}n=F({id:o,href:u}),j(e),document[(e.themeLinkTagInjectTo||w.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Pe(){var m;const{layoutTheme:t,layout:e}=he(),o=R([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=H(),u=R((m=n==null?void 0:n.layout)==null?void 0:m.darkMode),s=document.documentElement;function p(r=c().Theme??"default"){var l,h;if(t.value.theme=r,Ce({scopeName:`layout-theme-${r}`}),n.layout={layout:e.value,theme:r,darkMode:u.value,sidebarStatus:(l=n.layout)==null?void 0:l.sidebarStatus,epThemeColor:(h=n.layout)==null?void 0:h.epThemeColor},r==="default"||r==="light")v(c().EpThemeColor);else{const B=o.value.find(S=>S.themeColor===r);v(B.color)}}function y(r,l,h){document.documentElement.style.setProperty(`--el-color-primary-${r}-${l}`,u.value?$e(h,l/10):ye(h,l/10))}const v=r=>{L().setEpThemeColor(r),document.documentElement.style.setProperty("--el-color-primary",r);for(let l=1;l<=2;l++)y("dark",l,r);for(let l=1;l<=9;l++)y("light",l,r)};function M(){L().epTheme==="light"&&u.value?p("default"):p(L().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:s,dataTheme:u,layoutTheme:t,themeColors:o,dataThemeChange:M,setEpThemeColor:v,setLayoutThemeColor:p}}const Me={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Be=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Se=C("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Ae=[Be,Se];function Ie(t,e){return Q(),U("svg",Me,Ae)}const ze={render:Ie},ke={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},xe=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Le=C("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),we=[xe,Le];function He(t,e){return Q(),U("svg",ke,we)}const Re={render:He};export{_e as a,Ne as b,Pe as c,ge as d,ze as e,Re as f,he as g,Ce as t,L as u};
