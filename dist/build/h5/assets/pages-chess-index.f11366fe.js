var e=Object.defineProperty,t=(t,s,a)=>(((t,s,a)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a})(t,"symbol"!=typeof s?s+"":s,a),a);import{s,p as a,d as l,r as n,a as u,q as o,o as i,b as r,c,w as d,e as f,u as h,i as v,n as m,f as p,g,F as x,v as y,t as T,j as C,k as S,l as _,S as k,I as b,x as w,y as O,z as E}from"./index-7b2f094c.js";import{C as I,b as H,d as A,c as M,i as D,e as N,M as B,h as K,f as L,g as P,j as G,k as R,l as J,n as W,A as V,s as $,o as j,p as q,U,q as z,_ as F,T as Y,t as Q,u as X,v as Z,w as ee,x as te}from"./_plugin-vue_export-helper.474bd404.js";const se=""+new URL("chessboard-2b88416f.png",import.meta.url).href;class ae{constructor(){t(this,"width"),t(this,"height"),t(this,"lt_pos"),t(this,"landing"),this.width=I.WIDTH,this.height=I.HEIGHT,this.lt_pos=I.LT_POS,this.landing={hidden:!0,blueBox:"blueBox.png",redBox:"redBox.png",box:"redBox.png",style:""}}getLanding(e){this.landing.hidden=!1;let t=I.LT_POS[0]-H.WIDTH/2+I.WIDTH*e[0]+"rpx",s=I.LT_POS[1]-H.HEIGHT/2+I.HEIGHT*e[1]+10+"rpx";this.landing.style=`left:${t};top: ${s}`}getPos(e){let{x:t,y:a}=e.detail;t*=s.state.ratio,a*=s.state.ratio;const l=I.WIDTH,n=I.HEIGHT,u=I.LT_POS[0],o=I.LT_POS[1];let i=Math.abs(Math.round((t-u)/l)),r=Math.abs(Math.round((a-o)/n));i=i>=9?8:i,r=r>=10?9:r;let c=[i,r];return this.getLanding(c),setTimeout((()=>{this.landing.hidden=!0}),200),c}}class le{constructor(e,s){t(this,"curIndex",0),t(this,"curCamp",2),t(this,"curStep",0),t(this,"process",0),t(this,"processTime",{}),t(this,"record",[]),t(this,"close",!1),this.curIndex=e,this.curCamp=s}get camp(){return this.curCamp}get index(){return this.curIndex}get mode(){return a((()=>s.state.mode))}reset(e,t,s){this.curCamp=e,this.curIndex=t,this.curStep=s,this.record=[]}setProcess(e,t){this.process=e,0===e?this.processTime.start=t:1===e?this.processTime.choose=t:2===e?this.processTime.move=t:3===e?this.processTime.end=t:4===e&&(this.processTime.back=t)}push(e){this.record.push(e),this.curStep=this.record.length}pop(){let e=this.record.length;if(0===e)return{};let t=this.record[e-1];return this.record.pop(),this.curStep=this.record.length,t}}let ne={};function ue(e,t){return{start:{x:e[0],y:e[1]},end:{x:t[0],y:t[1]}}}function oe(e,t){for(let s=0;s<e.length;s++){let a=e[s];if(a.x===t[0]&&a.y===t[1]&&a.live)return s}return-1}function ie(e,t){let s=e[t],a=[[1,0],[-1,0],[0,1],[0,-1]],l=[];for(let i=0;i<a.length;i++){let t=a[i],n=[s.x+t[0],s.y+t[1]],u=oe(e,n);if(-1!==u){let t=e[u];if(D(t.status,s.camp))continue}l.push(n)}let n=[],u=[s.x,s.y];for(let i=0;i<l.length;i++){let t=l[i];try{N[s.name](e,u,t,s.bottom);let a={start:{x:s.x,y:s.y},end:{x:t[0],y:t[1]}};n.push(a)}catch(o){}}return n}function re(e,t){let s=e[t],a=[],l=[s.x,s.y],n=!1;for(let u=s.y-1;u>=0;u--){let t=[s.x,u];if(n){let n=oe(e,t);if(-1!==n){if(!D(e[n].status,s.camp)){let e=ue(l,t);a.push(e)}break}}else if(-1===oe(e,t)){let e=ue(l,t);a.push(e)}else n=!0}n=!1;for(let u=s.y+1;u<=9;u++){let t=[s.x,u];if(n){let n=oe(e,t);if(-1!==n){if(!D(e[n].status,s.camp)){let e=ue(l,t);a.push(e)}break}}else if(-1===oe(e,t)){let e=ue(l,t);a.push(e)}else n=!0}n=!1;for(let u=s.x-1;u>=0;u--){let t=[u,s.y];if(n){let n=oe(e,t);if(-1!==n){if(!D(e[n].status,s.camp)){let e=ue(l,t);a.push(e)}break}}else if(-1===oe(e,t)){let e=ue(l,t);a.push(e)}else n=!0}n=!1;for(let u=s.x+1;u<=8;u++){let t=[u,s.y];if(n){let n=oe(e,t);if(-1!==n){if(!D(e[n].status,s.camp)){let e=ue(l,t);a.push(e)}break}}else if(-1===oe(e,t)){let e=ue(l,t);a.push(e)}else n=!0}return a}function ce(e,t){let s=e[t],a=[],l=[s.x,s.y];for(let n=s.y-1;n>=0;n--){let t=[s.x,n],u=oe(e,t);if(-1!==u){if(!D(e[u].status,s.camp)){let e=ue(l,t);a.push(e)}break}let o=ue(l,t);a.push(o)}for(let n=s.y+1;n<=9;n++){let t=[s.x,n],u=oe(e,t);if(-1!==u){if(!D(e[u].status,s.camp)){let e=ue(l,t);a.push(e)}break}let o=ue(l,t);a.push(o)}for(let n=s.x-1;n>=0;n--){let t=[n,s.y],u=oe(e,t);if(-1!==u){if(!D(e[u].status,s.camp)){let e=ue(l,t);a.push(e)}break}let o=ue(l,t);a.push(o)}for(let n=s.x+1;n<=8;n++){let t=[n,s.y],u=oe(e,t);if(-1!==u){if(!D(e[u].status,s.camp)){let e=ue(l,t);a.push(e)}break}let o=ue(l,t);a.push(o)}return a}function de(e,t){let s=e[t],a=[[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]],l=[];for(let i=0;i<a.length;i++){let t=a[i],n=[s.x+t[0],s.y+t[1]],u=oe(e,n);if(-1!==u){let t=e[u];if(D(t.status,s.camp))continue}l.push(n)}let n=[],u=[s.x,s.y];for(let i=0;i<l.length;i++){let t=l[i];try{N[s.name](e,u,t,s.bottom);let a={start:{x:s.x,y:s.y},end:{x:t[0],y:t[1]}};n.push(a)}catch(o){}}return n}function fe(e,t){let s=e[t],a=[[2,2],[2,-2],[-2,2],[-2,-2]],l=[];for(let i=0;i<a.length;i++){let t=a[i],n=[s.x+t[0],s.y+t[1]],u=oe(e,n);if(-1!==u){let t=e[u];if(D(t.status,s.camp))continue}l.push(n)}let n=[],u=[s.x,s.y];for(let i=0;i<l.length;i++){let t=l[i];try{N[s.name](e,u,t,s.bottom);let a={start:{x:s.x,y:s.y},end:{x:t[0],y:t[1]}};n.push(a)}catch(o){}}return n}function he(e,t){let s=e[t],a=[[1,1],[-1,1],[1,-1],[-1,-1]],l=[];for(let i=0;i<a.length;i++){let t=a[i],n=[s.x+t[0],s.y+t[1]];if(n[1]<0||n[1]>9)continue;let u=oe(e,n);if(-1!==u){let t=e[u];if(D(t.status,s.camp))continue}l.push(n)}let n=[],u=[s.x,s.y];for(let i=0;i<l.length;i++){let t=l[i];try{N[s.name](e,u,t,s.bottom);let a={start:{x:s.x,y:s.y},end:{x:t[0],y:t[1]}};n.push(a)}catch(o){}}return n}function ve(e,t){let s=e[t],a=[[1,0],[-1,0],[0,1],[0,-1]],l=[];for(let i=0;i<a.length;i++){let t=a[i],n=[s.x+t[0],s.y+t[1]],u=oe(e,n);if(-1!==u){let t=e[u];if(D(t.status,s.camp))continue}l.push(n)}for(let i=0;i<e.length;i++)if(e[i].name===M.KING&&!D(e[i].status,s.camp)){let t=[e[i].x,e[i].y];l.push(t)}let n=[],u=[s.x,s.y];for(let i=0;i<l.length;i++){let t=l[i];try{N[s.name](e,u,t,s.bottom);let a={start:{x:s.x,y:s.y},end:{x:t[0],y:t[1]}};n.push(a)}catch(o){}}return n}function me(e,t){let s=A(e),a=function(e,t){let s=[];for(let a=0;a<e.length;a++){let l=e[a];if(l.live&&D(l.status,t.toString())){let t=ne[l.name](e,a);for(let e=0;e<t.length;e++){let l={index:a,move:t[e]};s.push(l)}}}return s}(s,t);for(let l=0;l<a.length;l++){let e=pe(s,a[l]);if(!xe(s,t))return!1;ge(s,a[l],e)}return!0}function pe(e,t){let s=oe(e,[t.move.end.x,t.move.end.y]);return e[t.index].x=t.move.end.x,e[t.index].y=t.move.end.y,-1!==s&&e[s].die(),s}function ge(e,t,s){e[t.index].x=t.move.start.x,e[t.index].y=t.move.start.y,-1!==s&&e[s].alive()}function xe(e,t){let s={x:0,y:0};for(let a=0;a<e.length;a++)e[a].name===M.KING&&D(e[a].status,t.toString())&&(s.x=e[a].x,s.y=e[a].y);for(let a=0;a<e.length;a++)if(e[a].live&&!D(e[a].status,t.toString())){let t=ne[e[a].name](e,a);for(let e=0;e<t.length;e++)if(JSON.stringify(t[e].end)===JSON.stringify(s))return!0}return!1}ne[M.SOLDIER]=ie,ne[M.CANNON]=re,ne[M.CAR]=ce,ne[M.HORSE]=de,ne[M.ELEPHANT]=fe,ne[M.SCHOLAR]=he,ne[M.KING]=ve;const ye=""+new URL("red-king-3c50a97a.png",import.meta.url).href;class Te{constructor(e){t(this,"url"),t(this,"ws"),t(this,"message"),t(this,"connected"),this.url=e,this.message={action:B.NOT_ACTION,message:""},this.init()}init(){K(s.state.mode,"10000")&&(this.ws=new WebSocket(this.url),this.ws.onopen=e=>{console.log("open"),this.connected=!0},this.ws.onmessage=e=>{this.handlerMsg(e.data)},this.ws.onerror=e=>{console.log("error",e),this.connected=!1},this.ws.onclose=e=>{console.log("onclose",e),this.connected=!1})}close(){this.ws.close()}handlerMsg(e){let t=JSON.parse(e);L(t.content)&&(this.message={},this.message=JSON.parse(t.content)),s.commit("updateReceive",!0)}sendMsg(e,t){if(!this.ws)return;e.name=t||s.state.name,console.log("sendMsg",e);let a=JSON.stringify(e);this.ws.send(a)}sendMachineMsg(e){console.log("sendMachineMsg",e);let t=JSON.stringify(e);this.ws.send(t)}}const Ce=F(l({__name:"edit",emits:["start","tryBack","goBack","choose","moveChess","attackTheChess","machineStep"],setup(e,{expose:t,emit:l}){let w=n(R);const O=u({menu:!1,start:!1,chat:!1,status:"11"}),E=n(a((()=>s.state.tip))),I=u({messages:[],isSelf:[],editMsg:""}),H=n(s.state.mode);let A=u(Z());function M(e){for(const t in O)"boolean"==typeof O[t]&&(O[t]=t===e&&!O[t])}async function N(){if(null!==A&&A.close(),s.commit("updateMode",H.value),l("start"),M(P.START),ee(H.value)){A=u(Z()),await te()&&s.commit("updateTip","对局开始")}else{let e={id:0,action:J.CLEAR,room:s.state.room,start:{},end:{}};Y(e).then((()=>{(D(H.value,"00",1)||D(H.value,"00"))&&(e.action=J.GO,Y(e))}))}}function F(){if(!A)return;let e={action:B.CHAT,message:I.editMsg};A.sendMsg(e),I.editMsg=""}async function Y(e){await W(e).then((t=>{console.log("发送的msg:",e),console.log("返回的数据：",t.data),null!==t.data.data&&L(t.data.data.toString())&&l("machineStep",t.data.data)}))}function Q(){l("tryBack")}function X(){null==A||A.close(),O.status="11",C({url:"../index/index"})}function Z(){let{name:e,room:t,mode:a}=s.state;if(!ee(a)&&D(a,"11",1))return null;let l=`${V.chat}?name=${e}&room=${t}`;return new Te(l)}function ee(e){return K(e,"10000")}const te=async()=>!(null===A||!A.connected)||(await new Promise((e=>{setTimeout(e,500)})),await te());return o((()=>O.status),(()=>{if(ee(H.value))K(O.status,"1")?(w.value[0].span="先手",H.value=$(H.value,"1")):(w.value[0].span="后手",H.value=j(H.value,"1"));else switch(w.value[0].span=K(O.status,"10")?"棋手":"电脑",w.value[1].span=K(O.status,"1")?"棋手":"电脑",console.log(w.value),O.status){case"0":H.value=$(H.value,"1001"),H.value=j(H.value,"110");break;case"1":H.value=$(H.value,"100"),H.value=j(H.value,"11");break;case"10":H.value=$(H.value,"100"),H.value=j(H.value,"10");break;case"11":H.value=$(H.value,"111")}}),{deep:!0}),o((()=>s.state.receive),(e=>{if(e&&null!==A){switch(console.log("watch",A.message),A.message.action){case 0:I.messages.push(A.message.message),A.message.name===s.state.name?I.isSelf.push(!0):I.isSelf.push(!1),console.log(I);break;case 1:if(A.message.name!==s.state.name&&A.message.name!==q){console.log("opponent chess move");try{let e=JSON.parse(A.message.message),t=31-e.index,s=e.end;e.action===U.MOVE_CHESS?(console.log(e.action,t,s),l("choose",t),l("moveChess",t,s)):e.action===U.ATTACK_CHESS&&(l("choose",t),l("attackTheChess",t,s))}catch(t){console.log(t)}}break;case 2:A.message.name!==s.state.name&&l("goBack")}A.message={},s.commit("updateReceive",!1)}})),i((()=>{for(const e in P){let t=P[e];O[t]=!1}ee(H.value)?(w.value=G,O.status=K(H.value,"1")?"1":"0"):A=null})),t({sendStep:function(e){let t=JSON.parse(JSON.stringify(e)),{start:s,end:a}=t,l=[8-s[0],9-s[1]],n=[8-a[0],9-a[1]];if(t.start=l,t.end=n,ee(H.value)){let e={action:B.CHESS,message:JSON.stringify(t)};A.sendMsg(e)}},isDoubleGame:ee,sendAction:function(e){let t={action:e,message:""};A.sendMsg(t)},requestMachine:Y}),(e,t)=>{const s=S,a=_,l=k,n=b;return r(),c(a,{class:"content"},{default:d((()=>[f(a,{class:"edit"},{default:d((()=>[f(s,{src:ye,onClick:t[0]||(t[0]=e=>M(h(P).MENU))}),f(a,{class:"panel"},{default:d((()=>[f(a,{onClick:t[1]||(t[1]=e=>M(h(P).START))},{default:d((()=>[v("新局")])),_:1}),f(a,{onClick:t[2]||(t[2]=e=>M(h(P).CHAT))},{default:d((()=>[v("聊天")])),_:1}),f(a,{onClick:Q},{default:d((()=>[v("悔棋")])),_:1})])),_:1})])),_:1}),f(a,{class:m({mask:!0,hidden:!O.menu})},{default:d((()=>[f(a,{class:"model"},{default:d((()=>[f(a,{class:"confirm",onClick:X},{default:d((()=>[v("退出")])),_:1})])),_:1})])),_:1},8,["class"]),f(a,{class:m({mask:!0,hidden:!O.start})},{default:d((()=>[f(a,{class:"model"},{default:d((()=>[(r(!0),p(x,null,g(h(w),((e,t)=>(r(),c(a,{key:t},{default:d((()=>[y("span",null,T(e.text),1),y("span",{class:"block",onClick:e=>function(e){if(ee(H.value))O.status=z(O.status,"1");else{let t=0===e?"10":"1";O.status=z(O.status,t)}}(t)},T(e.span),9,["onClick"])])),_:2},1024)))),128)),f(a,{class:"confirm",onClick:N},{default:d((()=>[v("确定")])),_:1})])),_:1})])),_:1},8,["class"]),f(a,{class:m({mask:!0,hidden:!O.chat})},{default:d((()=>[f(a,{class:"model chat"},{default:d((()=>[f(l,{"scroll-y":"true",class:"scroll-Y"},{default:d((()=>[f(a,null,{default:d((()=>[(r(!0),p(x,null,g(I.messages,((e,t)=>(r(),c(a,{class:m({message:!0,self:I.isSelf[t]}),key:t},{default:d((()=>[v(T(e),1)])),_:2},1032,["class"])))),128))])),_:1})])),_:1}),f(a,{class:"send"},{default:d((()=>[f(n,{type:"text",value:I.editMsg,"onUpdate:value":t[3]||(t[3]=e=>I.editMsg=e)},null,8,["value"]),y("span",{class:"button",onClick:F},"发送")])),_:1})])),_:1})])),_:1},8,["class"]),f(a,{class:m({tip:!0,hidden:""===E.value})},{default:d((()=>[v(T(E.value),1)])),_:1},8,["class"])])),_:1})}}}),[["__scopeId","data-v-52cd1972"]]),Se=l({__name:"audio",setup(e,{expose:t}){const s=w(),a=w();return w(),i((()=>{s.src="/static/audio/king.mp3",s.startTime=.3,a.src="/static/audio/move.mp3"})),t({king:function(){s.play()},move:function(){a.play(),setTimeout((()=>{a.stop()}),300)}}),(e,t)=>{const s=_;return r(),c(s)}}}),_e=F(l({__name:"index",setup(e){const t=n(null),l=n(null),h=n(null),v=n(null),y=n([]),T=u(new ae),C=n(a((()=>s.state.mode))),k=n(new le(0,2));function b(e){if(k.value.reset(1,0,0),k.value.setProcess(Q.START,Date.now()),ie(),1===e)return I.RED_BOTTOM=9,I.BLACK_BOTTOM=0,void w();I.RED_BOTTOM=0,I.BLACK_BOTTOM=9,w();for(let t=0;t<y.value.length;t++)y.value[t].status=z(y.value[t].status,"1")}function w(){y.value.length=0;for(let e=0;e<Z.length;e++){let t=Z[e];y.value.push(new ee(t.x,t.y,t.name,t.camp))}}function A(){console.log("mode",C.value),D(C.value,"00",1)?(console.log("两人机"),b(1)):(l.value.isDoubleGame(C.value)||D(C.value,"11",1)||console.log("玩家和人机"),K(C.value,"1")?b(1):b(0)),k.value.close=!1}function M(e){if(k.value.close)return;let t=T.getPos(e),s=function(e){for(let t=0;t<y.value.length;t++){let s=y.value[t];if(s.live&&(s.x===e[0]&&s.y===e[1])){if(F(t,k.value.curCamp))return U.CHOOSE_CHESS;if(F(k.value.curIndex,k.value.curCamp)&&ue(k.value.curIndex))return U.ATTACK_CHESS}}if(F(k.value.curIndex,k.value.curCamp))return U.MOVE_CHESS;return U.NOT_ACTION}(t),a=V(t);console.log(t,s,a);try{switch(s){case U.CHOOSE_CHESS:!function(e){if(!D(C.value,e.toString())){if(l.value.isDoubleGame(C.value))throw new Error("不能选择对方阵营棋子");if(!l.value.isDoubleGame(C.value)&&!K(C.value,"10"))throw new Error("不能选择人机阵营棋子")}}(k.value.curCamp),oe(a);break;case U.MOVE_CHESS:L(k.value.curIndex,t);break;case U.ATTACK_CHESS:P(k.value.curIndex,t)}}catch(n){console.log(n)}}function N(e,t){if(ne()){let a={id:k.value.curStep-1,action:J.GO,room:s.state.room,start:te(e),end:te(t)};if(e.length<2||t.length<2)return void l.value.requestMachine(a);D(k.value.curCamp.toString(),"1")&&9==I.BLACK_BOTTOM&&(a.start=te([8-e[0],9-e[1]]),a.end=te([8-t[0],9-t[1]])),l.value.requestMachine(a)}}function L(e,t){W(e,t),q(),ie(),ce()}function P(e,t){!function(e,t){let s=V(t);y.value[s].status=j(y.value[s].status,"10"),y.value[e].attack();try{W(e,t);let a=k.value.record.length;k.value.record[a-1].eat=s}catch(a){throw y.value[s].status=$(y.value[s].status,"10"),new Error(a)}finally{y.value[e].move()}}(e,t),q(),ie(),ce()}async function G(){if(l.value.isDoubleGame(C.value)){if(D(C.value,k.value.curCamp.toString()))return void s.commit("updateTip",Y.NOT_BACK);l.value.sendAction(B.BACK),R()}else if(D(C.value,"00",1))s.commit("updateTip",Y.NOT_BACK);else if(D(C.value,"10",1)){if(k.value.curStep,J.BACK,s.state.room,k.value.process===Q.BACK)return void s.commit("updateTip",Y.NOT_BACK);ne()?Date.now()-k.value.processTime.move>300?R():s.commit("updateTip",Y.NOT_BACK):(k.value.setProcess(Q.BACK,Date.now()),R())}else R()}function R(){k.value.setProcess(Q.BACK,Date.now());let e=k.value.pop();e.eat&&(y.value[e.eat].status=$(y.value[e.eat].status,"10")),k.value.curIndex=e.index,y.value[k.value.curIndex].status=$(y.value[k.value.curIndex].status,"10100"),W(k.value.curIndex,e.start),y.value[k.value.curIndex].status=j(y.value[k.value.curIndex].status,"10100"),ie(),k.value.curCamp=1^k.value.curCamp,k.value.setProcess(Q.END,Date.now())}function W(e,t){k.value.setProcess(Q.MOVE,Date.now());let a=[y.value[e].x,y.value[e].y];y.value[e].changePos(y.value,t),K(y.value[e].status,"10000")||(!function(e,t){let a=y.value[e],n=K(a.status,"1000")?U.ATTACK_CHESS:U.MOVE_CHESS,u={index:a.id,start:t,end:[a.x,a.y],action:n,camp:a.camp,room:s.state.room};k.value.push(u);let o=C.value[C.value.length-1];s.state.tip!==Y.KILLED_KING&&(D(C.value,"00",1)||D(a.status,o)&&l.value.sendStep(u))}(e,a),h.value.move())}function V(e){for(let t=0;t<y.value.length;t++){let s=y.value[t];if(s.x===e[0]&&s.y===e[1]&&s.live)return t}return-1}function q(){k.value.curCamp=0===k.value.curCamp?1:0,y.value=y.value.map(((e,t)=>(!F(t,k.value.curCamp)&&e.isChoose()&&e.notChoose(),e))),k.value.setProcess(Q.END,Date.now())}function F(e,t){let s=y.value[e];return D(s.status,t.toString())}function ne(){return D(C.value,k.value.curCamp.toString())?D(C.value,"0",2):D(C.value,"0",1)}function ue(e){return y.value[e].isChoose()}function oe(e){k.value.setProcess(Q.END,Date.now());let t=y.value[k.value.curIndex],s=y.value[e];s.choose(),e!==k.value.curIndex&&t.notChoose(),y.value[k.value.curIndex]=t,y.value[e]=s,k.value.curIndex=e}function ie(){setTimeout((()=>{T.landing.hidden=!0,T.landing.box=k.value.curCamp?T.landing.redBox:T.landing.blueBox}),200)}function re(e){let t=JSON.parse(e);if(t.id!==k.value.curStep)return;t.start=[t.start.x,t.start.y],t.end=[t.end.x,t.end.y],k.value.setProcess(Q.START,Date.now()),D(C.value,"00")&&(t.start=[8-t.start[0],9-t.start[1]],t.end=[8-t.end[0],9-t.end[1]]);let s=V(t.start),a=V(t.end),l=U.ATTACK_CHESS;-1===a&&(l=U.MOVE_CHESS);try{console.log("machineStep ",t,l),l===U.MOVE_CHESS?(oe(s),L(s,t.end)):l===U.ATTACK_CHESS&&(oe(s),P(s,t.end))}catch(n){console.log(n)}k.value.setProcess(Q.END,Date.now())}function ce(){me(y.value,k.value.curCamp)&&(console.log("绝杀"),k.value.close=!0,s.commit("updateTip",Y.CHECKMATE))}return i((()=>{!function(){let e=750/t.value.$el.offsetWidth;s.commit("updateRatio",e);let a=v.value.$el;I.LT_POS=[(a.offsetLeft+5)*e,(a.offsetTop+10)*e],I.WIDTH=(a.offsetWidth-10)*e/8,I.HEIGHT=(a.offsetHeight-20)*e/9,H.WIDTH=I.WIDTH,H.HEIGHT=I.HEIGHT}(),A()})),o((()=>s.state.tip),(e=>{e===Y.KILLED_KING?setTimeout((()=>{R()}),600):e===Y.KILL_KING&&h.value.king(),setTimeout((()=>{s.commit("updateTip","")}),800)})),o((()=>k.value.process==Q.END&&ne()),(async e=>{if(!(Date.now()-k.value.processTime.back<1e3&&(await X(1e3),Date.now()-k.value.processTime.back<1e3))&&e)if(k.value.setProcess(Q.BACK,Date.now()),D(C.value,"00",1))Date.now()-k.value.processTime.move<300&&await X(200),N([],[]);else if(k.value.record.length>=1){let e=k.value.record[k.value.record.length-1];N(e.start,e.end)}})),(e,s)=>{const a=S,n=_;return r(),c(n,{ref_key:"refContent",ref:t,class:"content"},{default:d((()=>[f(Ce,{ref_key:"refEdit",ref:l,onStart:A,onTryBack:G,onGoBack:R,onChoose:oe,onMoveChess:L,onAttackTheChess:P,onMachineStep:re},null,512),f(Se,{ref_key:"refAudio",ref:h},null,512),f(a,{ref_key:"refBoard",ref:v,src:se,class:"board",onClick:M},null,512),f(n,{class:m(T.landing.class),style:O(T.landing.style)},null,8,["class","style"]),f(a,{class:m({"chess box":!0,hidden:T.landing.hidden}),style:O(T.landing.style),src:"/static/img/"+T.landing.box},null,8,["class","style","src"]),(r(!0),p(x,null,g(y.value,(e=>(r(),c(n,{key:e.id},{default:d((()=>[e.live?(r(),c(n,{key:0,class:"chess",style:O(e.style)},{default:d((()=>[f(a,{src:"/static/img/"+e.path},null,8,["src"]),f(a,{class:m({box:!0,hidden:e.hiddenBox}),src:"/static/img/"+T.landing.box},null,8,["class","src"])])),_:2},1032,["style"])):E("v-if",!0)])),_:2},1024)))),128))])),_:1},512)}}}),[["__scopeId","data-v-29650f56"]]);export{_e as default};