import{initializeApp as We}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";import{getFirestore as Ne,onSnapshot as qe,doc as de,updateDoc as ve,increment as ge}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ke={apiKey:"AIzaSyCfd3SatHBUIE1IOkMIchKQiuY-PKnaFic",authDomain:"my-testing-c3f4e.firebaseapp.com",projectId:"my-testing-c3f4e",storageBucket:"my-testing-c3f4e.appspot.com",messagingSenderId:"1019389789219",appId:"1:1019389789219:web:4e1321bbcf2ed0950ddd96",measurementId:"G-D73BT7CZ86"},Ye=We(Ke),he=Ne(Ye),Ze=[{name:"Profile",btn_id:"profileBtn",counter_id:"profileCounter",heart_id:"profileImg",picture_id:"profilePicture",collection:"profile",liked:!1},{name:"About me",btn_id:"aboutBtn",counter_id:"aboutCounter",heart_id:"aboutImg",picture_id:"cat1",collection:"about",liked:!1},{name:"Skills",btn_id:"skillsBtn",counter_id:"skillsCounter",heart_id:"skillsImg",picture_id:"cat2",collection:"skills",liked:!1}],Qe=e=>{const n=localStorage.getItem(e.collection,e.liked),t=JSON.parse(n);e.liked=t,console.log("loaded state",t),t?document.getElementById(e.heart_id).src="./img/heart-red.svg":document.getElementById(e.heart_id).src="./img/heart.svg"};Ze.forEach(e=>{let n=document.getElementById(e.btn_id),t=document.getElementById(e.heart_id),i=document.getElementById(e.counter_id);document.getElementById(e.btn_id).addEventListener("click",()=>{u()}),document.getElementById(e.picture_id).addEventListener("dblclick",()=>{console.log("doubled!"),u()}),i.innerHTML="wait...",qe(de(he,"likes-counter","likes"),s=>{i.innerHTML=`${s.data()[e.collection]} likes`,Qe(e)});const u=async()=>{n.disabled=!0,i.innerHTML="wait...";const s=de(he,"likes-counter","likes");e.liked?await ve(s,{[e.collection]:ge(-1)}).then(()=>{console.log(`posted dislike in: ${e.collection}`),t.src="./img/heart.svg",e.liked=!1,n.disabled=!1}):await ve(s,{[e.collection]:ge(1)}).then(()=>{console.log(`posted like in: ${e.collection}`),t.src="./img/heart-red.svg",e.liked=!0,n.disabled=!1}),localStorage.setItem(e.collection,e.liked),console.log(`saved: ${e.collection} /// like: ${e.liked}`)}});var Te={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},G={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Je=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],$={CSS:{},springs:{}};function P(e,n,t){return Math.min(Math.max(e,n),t)}function z(e,n){return e.indexOf(n)>-1}function Z(e,n){return e.apply(null,n)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return z(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!Te.hasOwnProperty(e)&&!G.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Me(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map(function(t){return parseFloat(t)}):[]}function Ee(e,n){var t=Me(e),i=P(l.und(t[0])?1:t[0],.1,100),r=P(l.und(t[1])?100:t[1],.1,100),a=P(l.und(t[2])?10:t[2],.1,100),u=P(l.und(t[3])?0:t[3],.1,100),s=Math.sqrt(r/i),o=a/(2*Math.sqrt(r*i)),d=o<1?s*Math.sqrt(1-o*o):0,c=1,f=o<1?(o*s+-u)/d:-u+s;function m(p){var v=n?n*p/1e3:p;return o<1?v=Math.exp(-v*o*s)*(c*Math.cos(d*v)+f*Math.sin(d*v)):v=(c+f*v)*Math.exp(-v*s),p===0||p===1?p:1-v}function b(){var p=$.springs[e];if(p)return p;for(var v=1/6,w=0,T=0;;)if(w+=v,m(w)===1){if(T++,T>=16)break}else T=0;var h=w*v*1e3;return $.springs[e]=h,h}return n?m:b}function Ge(e){return e===void 0&&(e=10),function(n){return Math.ceil(P(n,1e-6,1)*e)*(1/e)}}var Xe=function(){var e=11,n=1/(e-1);function t(c,f){return 1-3*f+3*c}function i(c,f){return 3*f-6*c}function r(c){return 3*c}function a(c,f,m){return((t(f,m)*c+i(f,m))*c+r(f))*c}function u(c,f,m){return 3*t(f,m)*c*c+2*i(f,m)*c+r(f)}function s(c,f,m,b,p){var v,w,T=0;do w=f+(m-f)/2,v=a(w,b,p)-c,v>0?m=w:f=w;while(Math.abs(v)>1e-7&&++T<10);return w}function o(c,f,m,b){for(var p=0;p<4;++p){var v=u(f,m,b);if(v===0)return f;var w=a(f,m,b)-c;f-=w/v}return f}function d(c,f,m,b){if(!(0<=c&&c<=1&&0<=m&&m<=1))return;var p=new Float32Array(e);if(c!==f||m!==b)for(var v=0;v<e;++v)p[v]=a(v*n,c,m);function w(T){for(var h=0,g=1,E=e-1;g!==E&&p[g]<=T;++g)h+=n;--g;var L=(T-p[g])/(p[g+1]-p[g]),I=h+L*n,C=u(I,c,m);return C>=.001?o(T,I,c,m):C===0?I:s(T,h,h+n,c,m)}return function(T){return c===f&&m===b||T===0||T===1?T:a(w(T),f,b)}}return d}(),xe=function(){var e={linear:function(){return function(i){return i}}},n={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,a=4;i<((r=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var a=P(i,1,10),u=P(r,.1,2);return function(s){return s===0||s===1?s:-a*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/a))*(Math.PI*2)/u)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,r){n[i]=function(){return function(a){return Math.pow(a,r+2)}}}),Object.keys(n).forEach(function(i){var r=n[i];e["easeIn"+i]=r,e["easeOut"+i]=function(a,u){return function(s){return 1-r(a,u)(1-s)}},e["easeInOut"+i]=function(a,u){return function(s){return s<.5?r(a,u)(s*2)/2:1-r(a,u)(s*-2+2)/2}},e["easeOutIn"+i]=function(a,u){return function(s){return s<.5?(1-r(a,u)(1-s*2))/2:(r(a,u)(s*2-1)+1)/2}}}),e}();function X(e,n){if(l.fnc(e))return e;var t=e.split("(")[0],i=xe[t],r=Me(e);switch(t){case"spring":return Ee(e,n);case"cubicBezier":return Z(Xe,r);case"steps":return Z(Ge,r);default:return Z(i,r)}}function ke(e){try{var n=document.querySelectorAll(e);return n}catch{return}}function U(e,n){for(var t=e.length,i=arguments.length>=2?arguments[1]:void 0,r=[],a=0;a<t;a++)if(a in e){var u=e[a];n.call(i,u,a,e)&&r.push(u)}return r}function W(e){return e.reduce(function(n,t){return n.concat(l.arr(t)?W(t):t)},[])}function me(e){return l.arr(e)?e:(l.str(e)&&(e=ke(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ee(e,n){return e.some(function(t){return t===n})}function ne(e){var n={};for(var t in e)n[t]=e[t];return n}function Q(e,n){var t=ne(e);for(var i in e)t[i]=n.hasOwnProperty(i)?n[i]:e[i];return t}function N(e,n){var t=ne(e);for(var i in n)t[i]=l.und(e[i])?n[i]:e[i];return t}function en(e){var n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return n?"rgba("+n[1]+",1)":e}function nn(e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(n,function(s,o,d,c){return o+o+d+d+c+c}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(i[1],16),a=parseInt(i[2],16),u=parseInt(i[3],16);return"rgba("+r+","+a+","+u+",1)"}function tn(e){var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),t=parseInt(n[1],10)/360,i=parseInt(n[2],10)/100,r=parseInt(n[3],10)/100,a=n[4]||1;function u(m,b,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?m+(b-m)*6*p:p<1/2?b:p<2/3?m+(b-m)*(2/3-p)*6:m}var s,o,d;if(i==0)s=o=d=r;else{var c=r<.5?r*(1+i):r+i-r*i,f=2*r-c;s=u(f,c,t+1/3),o=u(f,c,t),d=u(f,c,t-1/3)}return"rgba("+s*255+","+o*255+","+d*255+","+a+")"}function rn(e){if(l.rgb(e))return en(e);if(l.hex(e))return nn(e);if(l.hsl(e))return tn(e)}function D(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function on(e){if(z(e,"translate")||e==="perspective")return"px";if(z(e,"rotate")||z(e,"skew"))return"deg"}function J(e,n){return l.fnc(e)?e(n.target,n.id,n.total):e}function S(e,n){return e.getAttribute(n)}function te(e,n,t){var i=D(n);if(ee([t,"deg","rad","turn"],i))return n;var r=$.CSS[n+t];if(!l.und(r))return r;var a=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=a+t;var o=a/u.offsetWidth;s.removeChild(u);var d=o*parseFloat(n);return $.CSS[n+t]=d,d}function Pe(e,n,t){if(n in e.style){var i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=e.style[n]||getComputedStyle(e).getPropertyValue(i)||"0";return t?te(e,r,t):r}}function re(e,n){if(l.dom(e)&&!l.inp(e)&&(!l.nil(S(e,n))||l.svg(e)&&e[n]))return"attribute";if(l.dom(e)&&ee(Je,n))return"transform";if(l.dom(e)&&n!=="transform"&&Pe(e,n))return"css";if(e[n]!=null)return"object"}function Se(e){if(l.dom(e)){for(var n=e.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=t.exec(n);)i.set(r[1],r[2]);return i}}function an(e,n,t,i){var r=z(n,"scale")?1:0+on(n),a=Se(e).get(n)||r;return t&&(t.transforms.list.set(n,a),t.transforms.last=n),i?te(e,a,i):a}function ie(e,n,t,i){switch(re(e,n)){case"transform":return an(e,n,i,t);case"css":return Pe(e,n,t);case"attribute":return S(e,n);default:return e[n]||0}}function oe(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var i=D(e)||0,r=parseFloat(n),a=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return r+a+i;case"-":return r-a+i;case"*":return r*a+i}}function De(e,n){if(l.col(e))return rn(e);if(/\s/g.test(e))return e;var t=D(e),i=t?e.substr(0,e.length-t.length):e;return n?i+n:i}function ae(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function un(e){return Math.PI*2*S(e,"r")}function sn(e){return S(e,"width")*2+S(e,"height")*2}function cn(e){return ae({x:S(e,"x1"),y:S(e,"y1")},{x:S(e,"x2"),y:S(e,"y2")})}function Le(e){for(var n=e.points,t=0,i,r=0;r<n.numberOfItems;r++){var a=n.getItem(r);r>0&&(t+=ae(i,a)),i=a}return t}function fn(e){var n=e.points;return Le(e)+ae(n.getItem(n.numberOfItems-1),n.getItem(0))}function Ce(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return un(e);case"rect":return sn(e);case"line":return cn(e);case"polyline":return Le(e);case"polygon":return fn(e)}}function ln(e){var n=Ce(e);return e.setAttribute("stroke-dasharray",n),n}function dn(e){for(var n=e.parentNode;l.svg(n)&&l.svg(n.parentNode);)n=n.parentNode;return n}function Be(e,n){var t=n||{},i=t.el||dn(e),r=i.getBoundingClientRect(),a=S(i,"viewBox"),u=r.width,s=r.height,o=t.viewBox||(a?a.split(" "):[0,0,u,s]);return{el:i,viewBox:o,x:o[0]/1,y:o[1]/1,w:u,h:s,vW:o[2],vH:o[3]}}function vn(e,n){var t=l.str(e)?ke(e)[0]:e,i=n||100;return function(r){return{property:r,el:t,svg:Be(t),totalLength:Ce(t)*(i/100)}}}function gn(e,n,t){function i(c){c===void 0&&(c=0);var f=n+c>=1?n+c:0;return e.el.getPointAtLength(f)}var r=Be(e.el,e.svg),a=i(),u=i(-1),s=i(1),o=t?1:r.w/r.vW,d=t?1:r.h/r.vH;switch(e.property){case"x":return(a.x-r.x)*o;case"y":return(a.y-r.y)*d;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function pe(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=De(l.pth(e)?e.totalLength:e,n)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:l.str(e)||n?i.split(t):[]}}function ue(e){var n=e?W(l.arr(e)?e.map(me):me(e)):[];return U(n,function(t,i,r){return r.indexOf(t)===i})}function Oe(e){var n=ue(e);return n.map(function(t,i){return{target:t,id:i,total:n.length,transforms:{list:Se(t)}}})}function hn(e,n){var t=ne(n);if(/^spring/.test(t.easing)&&(t.duration=Ee(t.easing)),l.arr(e)){var i=e.length,r=i===2&&!l.obj(e[0]);r?e={value:e}:l.fnc(n.duration)||(t.duration=n.duration/i)}var a=l.arr(e)?e:[e];return a.map(function(u,s){var o=l.obj(u)&&!l.pth(u)?u:{value:u};return l.und(o.delay)&&(o.delay=s?0:n.delay),l.und(o.endDelay)&&(o.endDelay=s===a.length-1?n.endDelay:0),o}).map(function(u){return N(u,t)})}function mn(e){for(var n=U(W(e.map(function(a){return Object.keys(a)})),function(a){return l.key(a)}).reduce(function(a,u){return a.indexOf(u)<0&&a.push(u),a},[]),t={},i=function(a){var u=n[a];t[u]=e.map(function(s){var o={};for(var d in s)l.key(d)?d==u&&(o.value=s[d]):o[d]=s[d];return o})},r=0;r<n.length;r++)i(r);return t}function pn(e,n){var t=[],i=n.keyframes;i&&(n=N(mn(i),n));for(var r in n)l.key(r)&&t.push({name:r,tweens:hn(n[r],e)});return t}function yn(e,n){var t={};for(var i in e){var r=J(e[i],n);l.arr(r)&&(r=r.map(function(a){return J(a,n)}),r.length===1&&(r=r[0])),t[i]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function bn(e,n){var t;return e.tweens.map(function(i){var r=yn(i,n),a=r.value,u=l.arr(a)?a[1]:a,s=D(u),o=ie(n.target,e.name,s,n),d=t?t.to.original:o,c=l.arr(a)?a[0]:d,f=D(c)||D(o),m=s||f;return l.und(u)&&(u=d),r.from=pe(c,m),r.to=pe(oe(u,c),m),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=X(r.easing,r.duration),r.isPath=l.pth(a),r.isPathTargetInsideSVG=r.isPath&&l.svg(n.target),r.isColor=l.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var Ae={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,i,r){if(i.list.set(n,t),n===i.last||r){var a="";i.list.forEach(function(u,s){a+=s+"("+u+") "}),e.style.transform=a}}};function Fe(e,n){var t=Oe(e);t.forEach(function(i){for(var r in n){var a=J(n[r],i),u=i.target,s=D(a),o=ie(u,r,s,i),d=s||D(o),c=oe(De(a,d),o),f=re(u,r);Ae[f](u,r,c,i.transforms,!0)}})}function wn(e,n){var t=re(e.target,n.name);if(t){var i=bn(n,e),r=i[i.length-1];return{type:t,property:n.name,animatable:e,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function In(e,n){return U(W(e.map(function(t){return n.map(function(i){return wn(t,i)})})),function(t){return!l.und(t)})}function _e(e,n){var t=e.length,i=function(a){return a.timelineOffset?a.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,e.map(function(a){return i(a)+a.duration})):n.duration,r.delay=t?Math.min.apply(Math,e.map(function(a){return i(a)+a.delay})):n.delay,r.endDelay=t?r.duration-Math.max.apply(Math,e.map(function(a){return i(a)+a.duration-a.endDelay})):n.endDelay,r}var ye=0;function Tn(e){var n=Q(Te,e),t=Q(G,e),i=pn(t,e),r=Oe(e.targets),a=In(r,i),u=_e(a,t),s=ye;return ye++,N(n,{id:s,children:[],animatables:r,animations:a,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var k=[],Ve=function(){var e;function n(){!e&&(!be()||!y.suspendWhenDocumentHidden)&&k.length>0&&(e=requestAnimationFrame(t))}function t(r){for(var a=k.length,u=0;u<a;){var s=k[u];s.paused?(k.splice(u,1),a--):(s.tick(r),u++)}e=u>0?requestAnimationFrame(t):void 0}function i(){y.suspendWhenDocumentHidden&&(be()?e=cancelAnimationFrame(e):(k.forEach(function(r){return r._onDocumentVisibility()}),Ve()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),n}();function be(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var n=0,t=0,i=0,r,a=0,u=null;function s(h){var g=window.Promise&&new Promise(function(E){return u=E});return h.finished=g,g}var o=Tn(e);s(o);function d(){var h=o.direction;h!=="alternate"&&(o.direction=h!=="normal"?"normal":"reverse"),o.reversed=!o.reversed,r.forEach(function(g){return g.reversed=o.reversed})}function c(h){return o.reversed?o.duration-h:h}function f(){n=0,t=c(o.currentTime)*(1/y.speed)}function m(h,g){g&&g.seek(h-g.timelineOffset)}function b(h){if(o.reversePlayback)for(var E=a;E--;)m(h,r[E]);else for(var g=0;g<a;g++)m(h,r[g])}function p(h){for(var g=0,E=o.animations,L=E.length;g<L;){var I=E[g],C=I.animatable,F=I.tweens,B=F.length-1,M=F[B];B&&(M=U(F,function(Ue){return h<Ue.end})[0]||M);for(var O=P(h-M.start-M.delay,0,M.duration)/M.duration,H=isNaN(O)?1:M.easing(O),x=M.to.strings,q=M.round,K=[],Re=M.to.numbers.length,A=void 0,_=0;_<Re;_++){var V=void 0,se=M.to.numbers[_],ce=M.from.numbers[_]||0;M.isPath?V=gn(M.value,H*se,M.isPathTargetInsideSVG):V=ce+H*(se-ce),q&&(M.isColor&&_>2||(V=Math.round(V*q)/q)),K.push(V)}var fe=x.length;if(!fe)A=K[0];else{A=x[0];for(var j=0;j<fe;j++){x[j];var le=x[j+1],Y=K[j];isNaN(Y)||(le?A+=Y+le:A+=Y+" ")}}Ae[I.type](C.target,I.property,A,C.transforms),I.currentValue=A,g++}}function v(h){o[h]&&!o.passThrough&&o[h](o)}function w(){o.remaining&&o.remaining!==!0&&o.remaining--}function T(h){var g=o.duration,E=o.delay,L=g-o.endDelay,I=c(h);o.progress=P(I/g*100,0,100),o.reversePlayback=I<o.currentTime,r&&b(I),!o.began&&o.currentTime>0&&(o.began=!0,v("begin")),!o.loopBegan&&o.currentTime>0&&(o.loopBegan=!0,v("loopBegin")),I<=E&&o.currentTime!==0&&p(0),(I>=L&&o.currentTime!==g||!g)&&p(g),I>E&&I<L?(o.changeBegan||(o.changeBegan=!0,o.changeCompleted=!1,v("changeBegin")),v("change"),p(I)):o.changeBegan&&(o.changeCompleted=!0,o.changeBegan=!1,v("changeComplete")),o.currentTime=P(I,0,g),o.began&&v("update"),h>=g&&(t=0,w(),o.remaining?(n=i,v("loopComplete"),o.loopBegan=!1,o.direction==="alternate"&&d()):(o.paused=!0,o.completed||(o.completed=!0,v("loopComplete"),v("complete"),!o.passThrough&&"Promise"in window&&(u(),s(o)))))}return o.reset=function(){var h=o.direction;o.passThrough=!1,o.currentTime=0,o.progress=0,o.paused=!0,o.began=!1,o.loopBegan=!1,o.changeBegan=!1,o.completed=!1,o.changeCompleted=!1,o.reversePlayback=!1,o.reversed=h==="reverse",o.remaining=o.loop,r=o.children,a=r.length;for(var g=a;g--;)o.children[g].reset();(o.reversed&&o.loop!==!0||h==="alternate"&&o.loop===1)&&o.remaining++,p(o.reversed?o.duration:0)},o._onDocumentVisibility=f,o.set=function(h,g){return Fe(h,g),o},o.tick=function(h){i=h,n||(n=i),T((i+(t-n))*y.speed)},o.seek=function(h){T(c(h))},o.pause=function(){o.paused=!0,f()},o.play=function(){o.paused&&(o.completed&&o.reset(),o.paused=!1,k.push(o),f(),Ve())},o.reverse=function(){d(),o.completed=!o.reversed,f()},o.restart=function(){o.reset(),o.play()},o.remove=function(h){var g=ue(h);je(g,o)},o.reset(),o.autoplay&&o.play(),o}function we(e,n){for(var t=n.length;t--;)ee(e,n[t].animatable.target)&&n.splice(t,1)}function je(e,n){var t=n.animations,i=n.children;we(e,t);for(var r=i.length;r--;){var a=i[r],u=a.animations;we(e,u),!u.length&&!a.children.length&&i.splice(r,1)}!t.length&&!i.length&&n.pause()}function Mn(e){for(var n=ue(e),t=k.length;t--;){var i=k[t];je(n,i)}}function En(e,n){n===void 0&&(n={});var t=n.direction||"normal",i=n.easing?X(n.easing):null,r=n.grid,a=n.axis,u=n.from||0,s=u==="first",o=u==="center",d=u==="last",c=l.arr(e),f=parseFloat(c?e[0]:e),m=c?parseFloat(e[1]):0,b=D(c?e[1]:e)||0,p=n.start||0+(c?f:0),v=[],w=0;return function(T,h,g){if(s&&(u=0),o&&(u=(g-1)/2),d&&(u=g-1),!v.length){for(var E=0;E<g;E++){if(!r)v.push(Math.abs(u-E));else{var L=o?(r[0]-1)/2:u%r[0],I=o?(r[1]-1)/2:Math.floor(u/r[0]),C=E%r[0],F=Math.floor(E/r[0]),B=L-C,M=I-F,O=Math.sqrt(B*B+M*M);a==="x"&&(O=-B),a==="y"&&(O=-M),v.push(O)}w=Math.max.apply(Math,v)}i&&(v=v.map(function(x){return i(x/w)*w})),t==="reverse"&&(v=v.map(function(x){return a?x<0?x*-1:-x:Math.abs(w-x)}))}var H=c?(m-f)/w:f;return p+H*(Math.round(v[h]*100)/100)+b}}function xn(e){e===void 0&&(e={});var n=y(e);return n.duration=0,n.add=function(t,i){var r=k.indexOf(n),a=n.children;r>-1&&k.splice(r,1);function u(m){m.passThrough=!0}for(var s=0;s<a.length;s++)u(a[s]);var o=N(t,Q(G,e));o.targets=o.targets||e.targets;var d=n.duration;o.autoplay=!1,o.direction=n.direction,o.timelineOffset=l.und(i)?d:oe(i,d),u(n),n.seek(o.timelineOffset);var c=y(o);u(c),a.push(c);var f=_e(a,e);return n.delay=f.delay,n.endDelay=f.endDelay,n.duration=f.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=k;y.remove=Mn;y.get=ie;y.set=Fe;y.convertPx=te;y.path=vn;y.setDashoffset=ln;y.stagger=En;y.timeline=xn;y.easing=X;y.penner=xe;y.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function kn(e,n,t,i){function r(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function s(c){try{d(i.next(c))}catch(f){u(f)}}function o(c){try{d(i.throw(c))}catch(f){u(f)}}function d(c){c.done?a(c.value):r(c.value).then(s,o)}d((i=i.apply(e,n||[])).next())})}const ze=300;function He(e,n={}){return kn(this,void 0,void 0,function*(){if(!(e instanceof Element)&&!(e instanceof Window))throw new Error(`element passed to scrollTo() must be either the window or a DOM element, you passed ${e}!`);n=$e(n);const t=(a,u,s,o,d=ze,c,f)=>{window.requestAnimationFrame(()=>{const m=Date.now(),b=Math.min(1,(m-o)/d);if(a===u)return f?f():null;Cn(e,c(b)*(u-a)+a),b<1?t(a,u,s,o,d,c,f):f&&f()})},i=Ln(e),r=Dn(e);return new Promise(a=>{t(i,typeof n.top=="number"?n.top:i,r,Date.now(),n.duration,Bn(n.easing),a)})})}function Pn(e,n,t){Sn(e),n&&!(n instanceof Element)&&(t=n,n=void 0);const{duration:i,easing:r}=$e(t);n=n||R.getDocument().body;let a=0,u=e?e.offsetTop:0;const s=R.getDocument();return(n===s.body||n===s.documentElement)&&(a=window.pageYOffset,u=e.getBoundingClientRect().top+a),He(n,{top:u,left:0,duration:i,easing:r})}function Sn(e){if(e===void 0){const n="The element passed to scrollIntoView() was undefined.";throw new Error(n)}if(!(e instanceof HTMLElement))throw new Error(`The element passed to scrollIntoView() must be a valid element. You passed ${e}.`)}function Dn(e){const n={window:{y:"scrollY",x:"scrollX"},element:{y:"scrollTop",x:"scrollLeft"}},t="y";return e instanceof Window?n.window[t]:n.element[t]}function $e(e={}){return e.behavior==="smooth"&&(e.easing="ease-in-out",e.duration=ze),e.behavior==="auto"&&(e.duration=0,e.easing="linear"),e}function Ln(e){const n=R.getDocument();return e===n.body||e===n.documentElement||e instanceof Window?n.body.scrollTop||n.documentElement.scrollTop:e.scrollTop}function Cn(e,n){const t=R.getDocument();e===t.body||e===t.documentElement||e instanceof Window?(t.body.scrollTop=n,t.documentElement.scrollTop=n):e.scrollTop=n}const R={getDocument(){return document}},Ie={linear(e){return e},"ease-in"(e){return e*e},"ease-out"(e){return e*(2-e)},"ease-in-out"(e){return e<.5?2*e*e:-1+(4-2*e)*e}},Bn=e=>{const t=Ie[e||"linear"];if(!t){const i=Object.keys(Ie).join(",");throw new Error(`Scroll error: scroller does not support an easing option of "${e}". Supported options are ${i}`)}return t};console.log(y);console.log(He,Pn);
