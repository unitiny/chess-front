import{d as e,r as a,a as o,o as l,s as t,b as s,c as u,w as n,e as c,f as r,g as d,F as i,h as m,i as f,t as p,n as h,j as v,k as _,l as k,I as g,m as w}from"./index-7b2f094c.js";import{r as x,P as b,H as C,m as j,a as y,_ as R}from"./_plugin-vue_export-helper.474bd404.js";const V=""+new URL("background-0d19cdc2.png",import.meta.url).href,D=R(e({__name:"index",setup(e){const R=a(null),D=a(b),I=a(0),M=a(""),U=o({show:!1,title:"",url:"",choose:0});function F(){U.show=!U.show}function H(){let e={room:M.value};C(e).then((e=>{if(console.log(e,U),0===U.choose&&1===e.data.Data)return console.log("房间已存在"),void L("房间已存在");if(1===U.choose&&0===e.data.Data)return console.log("房间不存在"),void L("房间不存在");t.commit("updateRoom",M.value);let a="";a=0===U.choose?j(["1","10","100","10000"]):j(["10","100","1000","10000"]),t.commit("updateMode",a),M.value="",v({url:U.url})})),F()}function L(e){let a={};a.text=e,R.value.show(a)}return l((()=>{t.commit("updateName","user-"+x()),t.commit("updateRoom","room-"+x()),console.log(t.state.name,t.state.room)})),(e,a)=>{const o=_,l=k,x=g,b=w("fui-toast");return s(),u(l,{class:"content"},{default:n((()=>[c(o,{class:"background",src:V}),c(l,{class:"panel"},{default:n((()=>[(s(!0),r(i,null,d(D.value,((e,a)=>(s(),u(l,{key:a,onClick:o=>function(e,a){if(0===I.value)0===a?(D.value=y,I.value=1):(t.commit("updateMode","111"),v({url:e}));else switch(a){case 0:case 1:U.title=D.value[a].text,U.url=D.value[a].url,U.choose=a,F();break;case 2:v({url:e})}}(e.url,a)},{default:n((()=>[f(p(e.text),1)])),_:2},1032,["onClick"])))),128))])),_:1}),c(l,{class:h({model:!0,hidden:!U.show}),onClick:F},{default:n((()=>[c(l,{class:"content",onClick:a[1]||(a[1]=m((()=>{}),["stop"]))},{default:n((()=>[c(l,null,{default:n((()=>[f(p(U.title),1)])),_:1}),c(x,{type:"text",modelValue:M.value,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value=e)},null,8,["modelValue"]),c(l,{class:"button",onClick:H},{default:n((()=>[f("确定")])),_:1})])),_:1})])),_:1},8,["class"]),c(b,{ref_key:"refToast",ref:R},null,512)])),_:1})}}}),[["__scopeId","data-v-1ece0649"]]);export{D as default};
