import{d as k,q as C,s as V,as as u,r as a,o as d,i as b,j as s,e as l,D as i,h as w,g as m,G as x,c as B,F as S,C as P,aj as j,I as z,at as N}from"./index-a4c88f38.js";const U={class:"card-header"},H=k({name:"PermissionPage",__name:"index",setup(D){var n;const o=C(()=>({width:"85vw",justifyContent:"start"})),t=V((n=u())==null?void 0:n.username),_=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function p(){u().loginByUsername({username:t.value,password:"admin123"}).then(r=>{r.success&&(j().removeItem("async-routes"),z().clearAllCachePage(),N())})}return(r,c)=>{const v=a("el-tag"),f=a("el-option"),g=a("el-select"),y=a("el-card"),h=a("el-space");return d(),b(h,{direction:"vertical",size:"large"},{default:s(()=>[l(v,{style:i(o.value),size:"large",effect:"dark"},{default:s(()=>[w(" 模拟后台根据不同角色返回对应路由（具体参考完整版pure-admin代码） ")]),_:1},8,["style"]),l(y,{shadow:"never",style:i(o.value)},{header:s(()=>[m("div",U,[m("span",null,"当前角色："+x(t.value),1)])]),default:s(()=>[l(g,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=e=>t.value=e),onChange:p},{default:s(()=>[(d(),B(S,null,P(_,e=>l(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{H as default};