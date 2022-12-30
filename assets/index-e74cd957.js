import{initializeApp as Je}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";import{getFirestore as Ge,onSnapshot as Xe,doc as pe,updateDoc as be,increment as we}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const et={apiKey:"AIzaSyCfd3SatHBUIE1IOkMIchKQiuY-PKnaFic",authDomain:"my-testing-c3f4e.firebaseapp.com",projectId:"my-testing-c3f4e",storageBucket:"my-testing-c3f4e.appspot.com",messagingSenderId:"1019389789219",appId:"1:1019389789219:web:4e1321bbcf2ed0950ddd96",measurementId:"G-D73BT7CZ86"},tt=Je(et),xe=Ge(tt),nt=[{name:"Profile",btn_id:"profileBtn",counter_id:"profileCounter",heart_id:"profileImg",picture_id:"profilePicture",collection:"profile",liked:!1},{name:"About me",btn_id:"aboutBtn",counter_id:"aboutCounter",heart_id:"aboutImg",picture_id:"cat1",collection:"about",liked:!1},{name:"Skills",btn_id:"skillsBtn",counter_id:"skillsCounter",heart_id:"skillsImg",picture_id:"cat2",collection:"skills",liked:!1}],rt=e=>{const t=localStorage.getItem(e.collection,e.liked),n=JSON.parse(t);e.liked=n,console.log("loaded state",n),n?document.getElementById(e.heart_id).src="./img/heart-red.svg":document.getElementById(e.heart_id).src="./img/heart.svg"};nt.forEach(e=>{let t=document.getElementById(e.btn_id),n=document.getElementById(e.heart_id),i=document.getElementById(e.counter_id);document.getElementById(e.btn_id).addEventListener("click",()=>{u()}),document.getElementById(e.picture_id).addEventListener("dblclick",()=>{console.log("doubled!"),u()}),i.innerHTML="wait...",Xe(pe(xe,"likes-counter","likes"),s=>{i.innerHTML=`${s.data()[e.collection]} likes`,rt(e)});const u=async()=>{t.disabled=!0,i.innerHTML="wait...";const s=pe(xe,"likes-counter","likes");e.liked?await be(s,{[e.collection]:we(-1)}).then(()=>{console.log(`posted dislike in: ${e.collection}`),n.src="./img/heart.svg",e.liked=!1,t.disabled=!1}):await be(s,{[e.collection]:we(1)}).then(()=>{console.log(`posted like in: ${e.collection}`),n.src="./img/heart-red.svg",e.liked=!0,t.disabled=!1}),localStorage.setItem(e.collection,e.liked),console.log(`saved: ${e.collection} /// like: ${e.liked}`)}});var Pe={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ee={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},it=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],H={CSS:{},springs:{}};function S(e,t,n){return Math.min(Math.max(e,t),n)}function q(e,t){return e.indexOf(t)>-1}function J(e,t){return e.apply(null,t)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return q(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return f.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!Pe.hasOwnProperty(e)&&!ee.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function De(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function Be(e,t){var n=De(e),i=S(f.und(n[0])?1:n[0],.1,100),r=S(f.und(n[1])?100:n[1],.1,100),a=S(f.und(n[2])?10:n[2],.1,100),u=S(f.und(n[3])?0:n[3],.1,100),s=Math.sqrt(r/i),o=a/(2*Math.sqrt(r*i)),d=o<1?s*Math.sqrt(1-o*o):0,c=1,l=o<1?(o*s+-u)/d:-u+s;function m(y){var v=t?t*y/1e3:y;return o<1?v=Math.exp(-v*o*s)*(c*Math.cos(d*v)+l*Math.sin(d*v)):v=(c+l*v)*Math.exp(-v*s),y===0||y===1?y:1-v}function b(){var y=H.springs[e];if(y)return y;for(var v=1/6,w=0,I=0;;)if(w+=v,m(w)===1){if(I++,I>=16)break}else I=0;var h=w*v*1e3;return H.springs[e]=h,h}return t?m:b}function ot(e){return e===void 0&&(e=10),function(t){return Math.ceil(S(t,1e-6,1)*e)*(1/e)}}var at=function(){var e=11,t=1/(e-1);function n(c,l){return 1-3*l+3*c}function i(c,l){return 3*l-6*c}function r(c){return 3*c}function a(c,l,m){return((n(l,m)*c+i(l,m))*c+r(l))*c}function u(c,l,m){return 3*n(l,m)*c*c+2*i(l,m)*c+r(l)}function s(c,l,m,b,y){var v,w,I=0;do w=l+(m-l)/2,v=a(w,b,y)-c,v>0?m=w:l=w;while(Math.abs(v)>1e-7&&++I<10);return w}function o(c,l,m,b){for(var y=0;y<4;++y){var v=u(l,m,b);if(v===0)return l;var w=a(l,m,b)-c;l-=w/v}return l}function d(c,l,m,b){if(!(0<=c&&c<=1&&0<=m&&m<=1))return;var y=new Float32Array(e);if(c!==l||m!==b)for(var v=0;v<e;++v)y[v]=a(v*t,c,m);function w(I){for(var h=0,g=1,k=e-1;g!==k&&y[g]<=I;++g)h+=t;--g;var B=(I-y[g])/(y[g+1]-y[g]),x=h+B*t,L=u(x,c,m);return L>=.001?o(I,x,c,m):L===0?x:s(I,h,h+t,c,m)}return function(I){return c===l&&m===b||I===0||I===1?I:a(w(I),l,b)}}return d}(),Le=function(){var e={linear:function(){return function(i){return i}}},t={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,a=4;i<((r=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var a=S(i,1,10),u=S(r,.1,2);return function(s){return s===0||s===1?s:-a*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/a))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(i,r){t[i]=function(){return function(a){return Math.pow(a,r+2)}}}),Object.keys(t).forEach(function(i){var r=t[i];e["easeIn"+i]=r,e["easeOut"+i]=function(a,u){return function(s){return 1-r(a,u)(1-s)}},e["easeInOut"+i]=function(a,u){return function(s){return s<.5?r(a,u)(s*2)/2:1-r(a,u)(s*-2+2)/2}},e["easeOutIn"+i]=function(a,u){return function(s){return s<.5?(1-r(a,u)(1-s*2))/2:(r(a,u)(s*2-1)+1)/2}}}),e}();function te(e,t){if(f.fnc(e))return e;var n=e.split("(")[0],i=Le[n],r=De(e);switch(n){case"spring":return Be(e,t);case"cubicBezier":return J(at,r);case"steps":return J(ot,r);default:return J(i,r)}}function Ce(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function W(e,t){for(var n=e.length,i=arguments.length>=2?arguments[1]:void 0,r=[],a=0;a<n;a++)if(a in e){var u=e[a];t.call(i,u,a,e)&&r.push(u)}return r}function N(e){return e.reduce(function(t,n){return t.concat(f.arr(n)?N(n):n)},[])}function Ie(e){return f.arr(e)?e:(f.str(e)&&(e=Ce(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ne(e,t){return e.some(function(n){return n===t})}function re(e){var t={};for(var n in e)t[n]=e[n];return t}function G(e,t){var n=re(e);for(var i in e)n[i]=t.hasOwnProperty(i)?t[i]:e[i];return n}function Y(e,t){var n=re(e);for(var i in t)n[i]=f.und(e[i])?t[i]:e[i];return n}function ut(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function st(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(s,o,d,c){return o+o+d+d+c+c}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(i[1],16),a=parseInt(i[2],16),u=parseInt(i[3],16);return"rgba("+r+","+a+","+u+",1)"}function ct(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,i=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100,a=t[4]||1;function u(m,b,y){return y<0&&(y+=1),y>1&&(y-=1),y<1/6?m+(b-m)*6*y:y<1/2?b:y<2/3?m+(b-m)*(2/3-y)*6:m}var s,o,d;if(i==0)s=o=d=r;else{var c=r<.5?r*(1+i):r+i-r*i,l=2*r-c;s=u(l,c,n+1/3),o=u(l,c,n),d=u(l,c,n-1/3)}return"rgba("+s*255+","+o*255+","+d*255+","+a+")"}function lt(e){if(f.rgb(e))return ut(e);if(f.hex(e))return st(e);if(f.hsl(e))return ct(e)}function D(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function ft(e){if(q(e,"translate")||e==="perspective")return"px";if(q(e,"rotate")||q(e,"skew"))return"deg"}function X(e,t){return f.fnc(e)?e(t.target,t.id,t.total):e}function P(e,t){return e.getAttribute(t)}function ie(e,t,n){var i=D(t);if(ne([n,"deg","rad","turn"],i))return t;var r=H.CSS[t+n];if(!f.und(r))return r;var a=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=a+n;var o=a/u.offsetWidth;s.removeChild(u);var d=o*parseFloat(t);return H.CSS[t+n]=d,d}function Oe(e,t,n){if(t in e.style){var i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=e.style[t]||getComputedStyle(e).getPropertyValue(i)||"0";return n?ie(e,r,n):r}}function oe(e,t){if(f.dom(e)&&!f.inp(e)&&(!f.nil(P(e,t))||f.svg(e)&&e[t]))return"attribute";if(f.dom(e)&&ne(it,t))return"transform";if(f.dom(e)&&t!=="transform"&&Oe(e,t))return"css";if(e[t]!=null)return"object"}function Ae(e){if(f.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=n.exec(t);)i.set(r[1],r[2]);return i}}function dt(e,t,n,i){var r=q(t,"scale")?1:0+ft(t),a=Ae(e).get(t)||r;return n&&(n.transforms.list.set(t,a),n.transforms.last=t),i?ie(e,a,i):a}function ae(e,t,n,i){switch(oe(e,t)){case"transform":return dt(e,t,i,n);case"css":return Oe(e,t,n);case"attribute":return P(e,t);default:return e[t]||0}}function ue(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var i=D(e)||0,r=parseFloat(t),a=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return r+a+i;case"-":return r-a+i;case"*":return r*a+i}}function _e(e,t){if(f.col(e))return lt(e);if(/\s/g.test(e))return e;var n=D(e),i=n?e.substr(0,e.length-n.length):e;return t?i+t:i}function se(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function vt(e){return Math.PI*2*P(e,"r")}function gt(e){return P(e,"width")*2+P(e,"height")*2}function ht(e){return se({x:P(e,"x1"),y:P(e,"y1")},{x:P(e,"x2"),y:P(e,"y2")})}function Fe(e){for(var t=e.points,n=0,i,r=0;r<t.numberOfItems;r++){var a=t.getItem(r);r>0&&(n+=se(i,a)),i=a}return n}function mt(e){var t=e.points;return Fe(e)+se(t.getItem(t.numberOfItems-1),t.getItem(0))}function Ve(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return vt(e);case"rect":return gt(e);case"line":return ht(e);case"polyline":return Fe(e);case"polygon":return mt(e)}}function yt(e){var t=Ve(e);return e.setAttribute("stroke-dasharray",t),t}function pt(e){for(var t=e.parentNode;f.svg(t)&&f.svg(t.parentNode);)t=t.parentNode;return t}function je(e,t){var n=t||{},i=n.el||pt(e),r=i.getBoundingClientRect(),a=P(i,"viewBox"),u=r.width,s=r.height,o=n.viewBox||(a?a.split(" "):[0,0,u,s]);return{el:i,viewBox:o,x:o[0]/1,y:o[1]/1,w:u,h:s,vW:o[2],vH:o[3]}}function bt(e,t){var n=f.str(e)?Ce(e)[0]:e,i=t||100;return function(r){return{property:r,el:n,svg:je(n),totalLength:Ve(n)*(i/100)}}}function wt(e,t,n){function i(c){c===void 0&&(c=0);var l=t+c>=1?t+c:0;return e.el.getPointAtLength(l)}var r=je(e.el,e.svg),a=i(),u=i(-1),s=i(1),o=n?1:r.w/r.vW,d=n?1:r.h/r.vH;switch(e.property){case"x":return(a.x-r.x)*o;case"y":return(a.y-r.y)*d;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function Me(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=_e(f.pth(e)?e.totalLength:e,t)+"";return{original:i,numbers:i.match(n)?i.match(n).map(Number):[0],strings:f.str(e)||t?i.split(n):[]}}function ce(e){var t=e?N(f.arr(e)?e.map(Ie):Ie(e)):[];return W(t,function(n,i,r){return r.indexOf(n)===i})}function qe(e){var t=ce(e);return t.map(function(n,i){return{target:n,id:i,total:t.length,transforms:{list:Ae(n)}}})}function xt(e,t){var n=re(t);if(/^spring/.test(n.easing)&&(n.duration=Be(n.easing)),f.arr(e)){var i=e.length,r=i===2&&!f.obj(e[0]);r?e={value:e}:f.fnc(t.duration)||(n.duration=t.duration/i)}var a=f.arr(e)?e:[e];return a.map(function(u,s){var o=f.obj(u)&&!f.pth(u)?u:{value:u};return f.und(o.delay)&&(o.delay=s?0:t.delay),f.und(o.endDelay)&&(o.endDelay=s===a.length-1?t.endDelay:0),o}).map(function(u){return Y(u,n)})}function It(e){for(var t=W(N(e.map(function(a){return Object.keys(a)})),function(a){return f.key(a)}).reduce(function(a,u){return a.indexOf(u)<0&&a.push(u),a},[]),n={},i=function(a){var u=t[a];n[u]=e.map(function(s){var o={};for(var d in s)f.key(d)?d==u&&(o.value=s[d]):o[d]=s[d];return o})},r=0;r<t.length;r++)i(r);return n}function Mt(e,t){var n=[],i=t.keyframes;i&&(t=Y(It(i),t));for(var r in t)f.key(r)&&n.push({name:r,tweens:xt(t[r],e)});return n}function kt(e,t){var n={};for(var i in e){var r=X(e[i],t);f.arr(r)&&(r=r.map(function(a){return X(a,t)}),r.length===1&&(r=r[0])),n[i]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function Tt(e,t){var n;return e.tweens.map(function(i){var r=kt(i,t),a=r.value,u=f.arr(a)?a[1]:a,s=D(u),o=ae(t.target,e.name,s,t),d=n?n.to.original:o,c=f.arr(a)?a[0]:d,l=D(c)||D(o),m=s||l;return f.und(u)&&(u=d),r.from=Me(c,m),r.to=Me(ue(u,c),m),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=te(r.easing,r.duration),r.isPath=f.pth(a),r.isPathTargetInsideSVG=r.isPath&&f.svg(t.target),r.isColor=f.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var ze={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,i,r){if(i.list.set(t,n),t===i.last||r){var a="";i.list.forEach(function(u,s){a+=s+"("+u+") "}),e.style.transform=a}}};function He(e,t){var n=qe(e);n.forEach(function(i){for(var r in t){var a=X(t[r],i),u=i.target,s=D(a),o=ae(u,r,s,i),d=s||D(o),c=ue(_e(a,d),o),l=oe(u,r);ze[l](u,r,c,i.transforms,!0)}})}function Et(e,t){var n=oe(e.target,t.name);if(n){var i=Tt(t,e),r=i[i.length-1];return{type:n,property:t.name,animatable:e,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function St(e,t){return W(N(e.map(function(n){return t.map(function(i){return Et(n,i)})})),function(n){return!f.und(n)})}function Re(e,t){var n=e.length,i=function(a){return a.timelineOffset?a.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,e.map(function(a){return i(a)+a.duration})):t.duration,r.delay=n?Math.min.apply(Math,e.map(function(a){return i(a)+a.delay})):t.delay,r.endDelay=n?r.duration-Math.max.apply(Math,e.map(function(a){return i(a)+a.duration-a.endDelay})):t.endDelay,r}var ke=0;function Pt(e){var t=G(Pe,e),n=G(ee,e),i=Mt(n,e),r=qe(e.targets),a=St(r,i),u=Re(a,n),s=ke;return ke++,Y(t,{id:s,children:[],animatables:r,animations:a,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var E=[],Ue=function(){var e;function t(){!e&&(!Te()||!p.suspendWhenDocumentHidden)&&E.length>0&&(e=requestAnimationFrame(n))}function n(r){for(var a=E.length,u=0;u<a;){var s=E[u];s.paused?(E.splice(u,1),a--):(s.tick(r),u++)}e=u>0?requestAnimationFrame(n):void 0}function i(){p.suspendWhenDocumentHidden&&(Te()?e=cancelAnimationFrame(e):(E.forEach(function(r){return r._onDocumentVisibility()}),Ue()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),t}();function Te(){return!!document&&document.hidden}function p(e){e===void 0&&(e={});var t=0,n=0,i=0,r,a=0,u=null;function s(h){var g=window.Promise&&new Promise(function(k){return u=k});return h.finished=g,g}var o=Pt(e);s(o);function d(){var h=o.direction;h!=="alternate"&&(o.direction=h!=="normal"?"normal":"reverse"),o.reversed=!o.reversed,r.forEach(function(g){return g.reversed=o.reversed})}function c(h){return o.reversed?o.duration-h:h}function l(){t=0,n=c(o.currentTime)*(1/p.speed)}function m(h,g){g&&g.seek(h-g.timelineOffset)}function b(h){if(o.reversePlayback)for(var k=a;k--;)m(h,r[k]);else for(var g=0;g<a;g++)m(h,r[g])}function y(h){for(var g=0,k=o.animations,B=k.length;g<B;){var x=k[g],L=x.animatable,_=x.tweens,C=_.length-1,M=_[C];C&&(M=W(_,function(Ze){return h<Ze.end})[0]||M);for(var O=S(h-M.start-M.delay,0,M.duration)/M.duration,z=isNaN(O)?1:M.easing(O),T=M.to.strings,K=M.round,Q=[],Qe=M.to.numbers.length,A=void 0,F=0;F<Qe;F++){var V=void 0,ge=M.to.numbers[F],he=M.from.numbers[F]||0;M.isPath?V=wt(M.value,z*ge,M.isPathTargetInsideSVG):V=he+z*(ge-he),K&&(M.isColor&&F>2||(V=Math.round(V*K)/K)),Q.push(V)}var me=T.length;if(!me)A=Q[0];else{A=T[0];for(var j=0;j<me;j++){T[j];var ye=T[j+1],Z=Q[j];isNaN(Z)||(ye?A+=Z+ye:A+=Z+" ")}}ze[x.type](L.target,x.property,A,L.transforms),x.currentValue=A,g++}}function v(h){o[h]&&!o.passThrough&&o[h](o)}function w(){o.remaining&&o.remaining!==!0&&o.remaining--}function I(h){var g=o.duration,k=o.delay,B=g-o.endDelay,x=c(h);o.progress=S(x/g*100,0,100),o.reversePlayback=x<o.currentTime,r&&b(x),!o.began&&o.currentTime>0&&(o.began=!0,v("begin")),!o.loopBegan&&o.currentTime>0&&(o.loopBegan=!0,v("loopBegin")),x<=k&&o.currentTime!==0&&y(0),(x>=B&&o.currentTime!==g||!g)&&y(g),x>k&&x<B?(o.changeBegan||(o.changeBegan=!0,o.changeCompleted=!1,v("changeBegin")),v("change"),y(x)):o.changeBegan&&(o.changeCompleted=!0,o.changeBegan=!1,v("changeComplete")),o.currentTime=S(x,0,g),o.began&&v("update"),h>=g&&(n=0,w(),o.remaining?(t=i,v("loopComplete"),o.loopBegan=!1,o.direction==="alternate"&&d()):(o.paused=!0,o.completed||(o.completed=!0,v("loopComplete"),v("complete"),!o.passThrough&&"Promise"in window&&(u(),s(o)))))}return o.reset=function(){var h=o.direction;o.passThrough=!1,o.currentTime=0,o.progress=0,o.paused=!0,o.began=!1,o.loopBegan=!1,o.changeBegan=!1,o.completed=!1,o.changeCompleted=!1,o.reversePlayback=!1,o.reversed=h==="reverse",o.remaining=o.loop,r=o.children,a=r.length;for(var g=a;g--;)o.children[g].reset();(o.reversed&&o.loop!==!0||h==="alternate"&&o.loop===1)&&o.remaining++,y(o.reversed?o.duration:0)},o._onDocumentVisibility=l,o.set=function(h,g){return He(h,g),o},o.tick=function(h){i=h,t||(t=i),I((i+(n-t))*p.speed)},o.seek=function(h){I(c(h))},o.pause=function(){o.paused=!0,l()},o.play=function(){o.paused&&(o.completed&&o.reset(),o.paused=!1,E.push(o),l(),Ue())},o.reverse=function(){d(),o.completed=!o.reversed,l()},o.restart=function(){o.reset(),o.play()},o.remove=function(h){var g=ce(h);$e(g,o)},o.reset(),o.autoplay&&o.play(),o}function Ee(e,t){for(var n=t.length;n--;)ne(e,t[n].animatable.target)&&t.splice(n,1)}function $e(e,t){var n=t.animations,i=t.children;Ee(e,n);for(var r=i.length;r--;){var a=i[r],u=a.animations;Ee(e,u),!u.length&&!a.children.length&&i.splice(r,1)}!n.length&&!i.length&&t.pause()}function Dt(e){for(var t=ce(e),n=E.length;n--;){var i=E[n];$e(t,i)}}function Bt(e,t){t===void 0&&(t={});var n=t.direction||"normal",i=t.easing?te(t.easing):null,r=t.grid,a=t.axis,u=t.from||0,s=u==="first",o=u==="center",d=u==="last",c=f.arr(e),l=parseFloat(c?e[0]:e),m=c?parseFloat(e[1]):0,b=D(c?e[1]:e)||0,y=t.start||0+(c?l:0),v=[],w=0;return function(I,h,g){if(s&&(u=0),o&&(u=(g-1)/2),d&&(u=g-1),!v.length){for(var k=0;k<g;k++){if(!r)v.push(Math.abs(u-k));else{var B=o?(r[0]-1)/2:u%r[0],x=o?(r[1]-1)/2:Math.floor(u/r[0]),L=k%r[0],_=Math.floor(k/r[0]),C=B-L,M=x-_,O=Math.sqrt(C*C+M*M);a==="x"&&(O=-C),a==="y"&&(O=-M),v.push(O)}w=Math.max.apply(Math,v)}i&&(v=v.map(function(T){return i(T/w)*w})),n==="reverse"&&(v=v.map(function(T){return a?T<0?T*-1:-T:Math.abs(w-T)}))}var z=c?(m-l)/w:l;return y+z*(Math.round(v[h]*100)/100)+b}}function Lt(e){e===void 0&&(e={});var t=p(e);return t.duration=0,t.add=function(n,i){var r=E.indexOf(t),a=t.children;r>-1&&E.splice(r,1);function u(m){m.passThrough=!0}for(var s=0;s<a.length;s++)u(a[s]);var o=Y(n,G(ee,e));o.targets=o.targets||e.targets;var d=t.duration;o.autoplay=!1,o.direction=t.direction,o.timelineOffset=f.und(i)?d:ue(i,d),u(t),t.seek(o.timelineOffset);var c=p(o);u(c),a.push(c);var l=Re(a,e);return t.delay=l.delay,t.endDelay=l.endDelay,t.duration=l.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}p.version="3.2.1";p.speed=1;p.suspendWhenDocumentHidden=!0;p.running=E;p.remove=Dt;p.get=ae;p.set=He;p.convertPx=ie;p.path=bt;p.setDashoffset=yt;p.stagger=Bt;p.timeline=Lt;p.easing=te;p.penner=Le;p.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const R=document.querySelector(".scrollUpButton");document.querySelector("#aboutMe-btn");let U,Ct=window.matchMedia("(max-width: 500px)").matches;Ct?U=20:U=300;window.onscroll=function(){document.body.scrollTop>U||document.documentElement.scrollTop>U?R.style.display="inherit":R.style.display="none"};const Ot=400;R.addEventListener("click",()=>{p({targets:R,translateY:[{value:-30,easing:"easeOutElastic(1, .6)"},{value:0,easing:"linear",duration:400,delay:100}]}),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},Ot)});const At=document.querySelector("#aboutMe"),_t=document.querySelector(".skillsSection"),le=document.querySelector("#aboutLeft"),fe=document.querySelector(".aboutMeContainer"),de=document.querySelector(".skillsContainer"),ve=document.querySelector("#skillsRight");le.style.transform="translatex(-100px) translatey(100px)";le.style.opacity="0";fe.style.transform="translatex(100px) translatey(-100px)";fe.style.opacity="0";de.style.transform="translatex(-100px) translatey(100px)";de.style.opacity="0";ve.style.transform="translatex(100px) translatey(-100px)";ve.style.opacity="0";const We=(e,t)=>{console.log("animate!"),p({targets:[e,t],opacity:1,translateX:0,translateY:0,easing:"easeInOutQuad",duration:300})};var Ft=new IntersectionObserver(function(e){e[0].isIntersecting===!0&&We(le,fe)},{threshold:[.7]});Ft.observe(At);var Vt=new IntersectionObserver(function(e){e[0].isIntersecting===!0&&We(de,ve)},{threshold:[.7]});Vt.observe(_t);/*! *****************************************************************************
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
***************************************************************************** */function jt(e,t,n,i){function r(a){return a instanceof n?a:new n(function(u){u(a)})}return new(n||(n=Promise))(function(a,u){function s(c){try{d(i.next(c))}catch(l){u(l)}}function o(c){try{d(i.throw(c))}catch(l){u(l)}}function d(c){c.done?a(c.value):r(c.value).then(s,o)}d((i=i.apply(e,t||[])).next())})}const Ne=300;function qt(e,t={}){return jt(this,void 0,void 0,function*(){if(!(e instanceof Element)&&!(e instanceof Window))throw new Error(`element passed to scrollTo() must be either the window or a DOM element, you passed ${e}!`);t=Ke(t);const n=(a,u,s,o,d=Ne,c,l)=>{window.requestAnimationFrame(()=>{const m=Date.now(),b=Math.min(1,(m-o)/d);if(a===u)return l?l():null;Ut(e,c(b)*(u-a)+a),b<1?n(a,u,s,o,d,c,l):l&&l()})},i=Rt(e),r=Ht(e);return new Promise(a=>{n(i,typeof t.top=="number"?t.top:i,r,Date.now(),t.duration,$t(t.easing),a)})})}function Ye(e,t,n){zt(e),t&&!(t instanceof Element)&&(n=t,t=void 0);const{duration:i,easing:r}=Ke(n);t=t||$.getDocument().body;let a=0,u=e?e.offsetTop:0;const s=$.getDocument();return(t===s.body||t===s.documentElement)&&(a=window.pageYOffset,u=e.getBoundingClientRect().top+a),qt(t,{top:u,left:0,duration:i,easing:r})}function zt(e){if(e===void 0){const t="The element passed to scrollIntoView() was undefined.";throw new Error(t)}if(!(e instanceof HTMLElement))throw new Error(`The element passed to scrollIntoView() must be a valid element. You passed ${e}.`)}function Ht(e){const t={window:{y:"scrollY",x:"scrollX"},element:{y:"scrollTop",x:"scrollLeft"}},n="y";return e instanceof Window?t.window[n]:t.element[n]}function Ke(e={}){return e.behavior==="smooth"&&(e.easing="ease-in-out",e.duration=Ne),e.behavior==="auto"&&(e.duration=0,e.easing="linear"),e}function Rt(e){const t=$.getDocument();return e===t.body||e===t.documentElement||e instanceof Window?t.body.scrollTop||t.documentElement.scrollTop:e.scrollTop}function Ut(e,t){const n=$.getDocument();e===n.body||e===n.documentElement||e instanceof Window?(n.body.scrollTop=t,n.documentElement.scrollTop=t):e.scrollTop=t}const $={getDocument(){return document}},Se={linear(e){return e},"ease-in"(e){return e*e},"ease-out"(e){return e*(2-e)},"ease-in-out"(e){return e<.5?2*e*e:-1+(4-2*e)*e}},$t=e=>{const n=Se[e||"linear"];if(!n){const i=Object.keys(Se).join(",");throw new Error(`Scroll error: scroller does not support an easing option of "${e}". Supported options are ${i}`)}return n},Wt=document.getElementById("aboutMe-btn"),Nt=document.getElementById("aboutMe");Wt.addEventListener("click",()=>{Ye(Nt,document.body,{duration:1e3,easing:"ease-in"})});const Yt=document.getElementById("skills-btn"),Kt=document.getElementById("skills");Yt.addEventListener("click",()=>{Ye(Kt,document.body,{duration:1e3,easing:"ease-in",top:"2000px"})});
