import{initializeApp as Ge}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";import{getFirestore as Xe,onSnapshot as et,doc as ye,updateDoc as be,increment as we}from"https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const tt={apiKey:"AIzaSyCfd3SatHBUIE1IOkMIchKQiuY-PKnaFic",authDomain:"my-testing-c3f4e.firebaseapp.com",projectId:"my-testing-c3f4e",storageBucket:"my-testing-c3f4e.appspot.com",messagingSenderId:"1019389789219",appId:"1:1019389789219:web:4e1321bbcf2ed0950ddd96",measurementId:"G-D73BT7CZ86"},nt=Ge(tt),xe=Xe(nt),rt=[{name:"Profile",btn_id:"profileBtn",counter_id:"profileCounter",heart_id:"profileImg",picture_id:"profilePicture",collection:"profile",liked:!1},{name:"About me",btn_id:"aboutBtn",counter_id:"aboutCounter",heart_id:"aboutImg",picture_id:"cat1",collection:"about",liked:!1},{name:"Skills",btn_id:"skillsBtn",counter_id:"skillsCounter",heart_id:"skillsImg",picture_id:"cat2",collection:"skills",liked:!1}],it=e=>{const t=localStorage.getItem(e.collection,e.liked),n=JSON.parse(t);e.liked=n,console.log("loaded state",n),n?document.getElementById(e.heart_id).src="./img/heart-red.svg":document.getElementById(e.heart_id).src="./img/heart.svg"};rt.forEach(e=>{let t=document.getElementById(e.btn_id),n=document.getElementById(e.heart_id),i=document.getElementById(e.counter_id);document.getElementById(e.btn_id).addEventListener("click",()=>{s()}),document.getElementById(e.picture_id).addEventListener("dblclick",()=>{console.log("doubled!"),s()}),i.innerHTML="wait...",et(ye(xe,"likes-counter","likes"),u=>{i.innerHTML=`${u.data()[e.collection]} likes`,it(e)});const s=async()=>{t.disabled=!0,i.innerHTML="wait...";const u=ye(xe,"likes-counter","likes");e.liked?await be(u,{[e.collection]:we(-1)}).then(()=>{console.log(`posted dislike in: ${e.collection}`),n.src="./img/heart.svg",e.liked=!1,t.disabled=!1}):await be(u,{[e.collection]:we(1)}).then(()=>{console.log(`posted like in: ${e.collection}`),n.src="./img/heart-red.svg",e.liked=!0,t.disabled=!1}),localStorage.setItem(e.collection,e.liked),console.log(`saved: ${e.collection} /// like: ${e.liked}`)}});document.getElementById("projects-btn").addEventListener("click",()=>{siiimpleToast.message("💻 Projects section is under development but you can check my GitHub clicking in the sidebar 💻",{container:"body",class:"siiimpleToast",position:"bottom|center",margin:15,delay:0,duration:3e3,style:{fontSize:"var(--font-l)",backgroundColor:"darkred",color:"white",textAlign:"center",fontWeight:"bold",borderRadius:0}})});var De=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};De.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,i=300-Math.random()*100;this.isDeleting&&(i/=2),!this.isDeleting&&this.txt===t?(i=this.period,this.isDeleting=!0):this.isDeleting&&this.txt===""&&(this.isDeleting=!1,this.loopNum++,i=500),setTimeout(function(){n.tick()},i)};window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-rotate"),i=e[t].getAttribute("data-period");n&&new De(e[t],JSON.parse(n),i)}var r=document.createElement("style");r.type="text/css",r.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #93C572 }",document.body.appendChild(r)};var Pe={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ee={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},ot=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],z={CSS:{},springs:{}};function S(e,t,n){return Math.min(Math.max(e,t),n)}function R(e,t){return e.indexOf(t)>-1}function J(e,t){return e.apply(null,t)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return R(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return f.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!Pe.hasOwnProperty(e)&&!ee.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Be(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function Le(e,t){var n=Be(e),i=S(f.und(n[0])?1:n[0],.1,100),r=S(f.und(n[1])?100:n[1],.1,100),a=S(f.und(n[2])?10:n[2],.1,100),s=S(f.und(n[3])?0:n[3],.1,100),u=Math.sqrt(r/i),o=a/(2*Math.sqrt(r*i)),d=o<1?u*Math.sqrt(1-o*o):0,c=1,l=o<1?(o*u+-s)/d:-s+u;function m(p){var v=t?t*p/1e3:p;return o<1?v=Math.exp(-v*o*u)*(c*Math.cos(d*v)+l*Math.sin(d*v)):v=(c+l*v)*Math.exp(-v*u),p===0||p===1?p:1-v}function b(){var p=z.springs[e];if(p)return p;for(var v=1/6,w=0,k=0;;)if(w+=v,m(w)===1){if(k++,k>=16)break}else k=0;var h=w*v*1e3;return z.springs[e]=h,h}return t?m:b}function at(e){return e===void 0&&(e=10),function(t){return Math.ceil(S(t,1e-6,1)*e)*(1/e)}}var st=function(){var e=11,t=1/(e-1);function n(c,l){return 1-3*l+3*c}function i(c,l){return 3*l-6*c}function r(c){return 3*c}function a(c,l,m){return((n(l,m)*c+i(l,m))*c+r(l))*c}function s(c,l,m){return 3*n(l,m)*c*c+2*i(l,m)*c+r(l)}function u(c,l,m,b,p){var v,w,k=0;do w=l+(m-l)/2,v=a(w,b,p)-c,v>0?m=w:l=w;while(Math.abs(v)>1e-7&&++k<10);return w}function o(c,l,m,b){for(var p=0;p<4;++p){var v=s(l,m,b);if(v===0)return l;var w=a(l,m,b)-c;l-=w/v}return l}function d(c,l,m,b){if(!(0<=c&&c<=1&&0<=m&&m<=1))return;var p=new Float32Array(e);if(c!==l||m!==b)for(var v=0;v<e;++v)p[v]=a(v*t,c,m);function w(k){for(var h=0,g=1,I=e-1;g!==I&&p[g]<=k;++g)h+=t;--g;var B=(k-p[g])/(p[g+1]-p[g]),x=h+B*t,L=s(x,c,m);return L>=.001?o(k,x,c,m):L===0?x:u(k,h,h+t,c,m)}return function(k){return c===l&&m===b||k===0||k===1?k:a(w(k),l,b)}}return d}(),Ce=function(){var e={linear:function(){return function(i){return i}}},t={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,a=4;i<((r=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var a=S(i,1,10),s=S(r,.1,2);return function(u){return u===0||u===1?u:-a*Math.pow(2,10*(u-1))*Math.sin((u-1-s/(Math.PI*2)*Math.asin(1/a))*(Math.PI*2)/s)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(i,r){t[i]=function(){return function(a){return Math.pow(a,r+2)}}}),Object.keys(t).forEach(function(i){var r=t[i];e["easeIn"+i]=r,e["easeOut"+i]=function(a,s){return function(u){return 1-r(a,s)(1-u)}},e["easeInOut"+i]=function(a,s){return function(u){return u<.5?r(a,s)(u*2)/2:1-r(a,s)(u*-2+2)/2}},e["easeOutIn"+i]=function(a,s){return function(u){return u<.5?(1-r(a,s)(1-u*2))/2:(r(a,s)(u*2-1)+1)/2}}}),e}();function te(e,t){if(f.fnc(e))return e;var n=e.split("(")[0],i=Ce[n],r=Be(e);switch(n){case"spring":return Le(e,t);case"cubicBezier":return J(st,r);case"steps":return J(at,r);default:return J(i,r)}}function Oe(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function $(e,t){for(var n=e.length,i=arguments.length>=2?arguments[1]:void 0,r=[],a=0;a<n;a++)if(a in e){var s=e[a];t.call(i,s,a,e)&&r.push(s)}return r}function W(e){return e.reduce(function(t,n){return t.concat(f.arr(n)?W(n):n)},[])}function ke(e){return f.arr(e)?e:(f.str(e)&&(e=Oe(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ne(e,t){return e.some(function(n){return n===t})}function re(e){var t={};for(var n in e)t[n]=e[n];return t}function G(e,t){var n=re(e);for(var i in e)n[i]=t.hasOwnProperty(i)?t[i]:e[i];return n}function Y(e,t){var n=re(e);for(var i in t)n[i]=f.und(e[i])?t[i]:e[i];return n}function ut(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function ct(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(u,o,d,c){return o+o+d+d+c+c}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(i[1],16),a=parseInt(i[2],16),s=parseInt(i[3],16);return"rgba("+r+","+a+","+s+",1)"}function lt(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,i=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100,a=t[4]||1;function s(m,b,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?m+(b-m)*6*p:p<1/2?b:p<2/3?m+(b-m)*(2/3-p)*6:m}var u,o,d;if(i==0)u=o=d=r;else{var c=r<.5?r*(1+i):r+i-r*i,l=2*r-c;u=s(l,c,n+1/3),o=s(l,c,n),d=s(l,c,n-1/3)}return"rgba("+u*255+","+o*255+","+d*255+","+a+")"}function ft(e){if(f.rgb(e))return ut(e);if(f.hex(e))return ct(e);if(f.hsl(e))return lt(e)}function P(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function dt(e){if(R(e,"translate")||e==="perspective")return"px";if(R(e,"rotate")||R(e,"skew"))return"deg"}function X(e,t){return f.fnc(e)?e(t.target,t.id,t.total):e}function D(e,t){return e.getAttribute(t)}function ie(e,t,n){var i=P(t);if(ne([n,"deg","rad","turn"],i))return t;var r=z.CSS[t+n];if(!f.und(r))return r;var a=100,s=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(s),s.style.position="absolute",s.style.width=a+n;var o=a/s.offsetWidth;u.removeChild(s);var d=o*parseFloat(t);return z.CSS[t+n]=d,d}function Ae(e,t,n){if(t in e.style){var i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=e.style[t]||getComputedStyle(e).getPropertyValue(i)||"0";return n?ie(e,r,n):r}}function oe(e,t){if(f.dom(e)&&!f.inp(e)&&(!f.nil(D(e,t))||f.svg(e)&&e[t]))return"attribute";if(f.dom(e)&&ne(ot,t))return"transform";if(f.dom(e)&&t!=="transform"&&Ae(e,t))return"css";if(e[t]!=null)return"object"}function _e(e){if(f.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=n.exec(t);)i.set(r[1],r[2]);return i}}function vt(e,t,n,i){var r=R(t,"scale")?1:0+dt(t),a=_e(e).get(t)||r;return n&&(n.transforms.list.set(t,a),n.transforms.last=t),i?ie(e,a,i):a}function ae(e,t,n,i){switch(oe(e,t)){case"transform":return vt(e,t,i,n);case"css":return Ae(e,t,n);case"attribute":return D(e,t);default:return e[t]||0}}function se(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var i=P(e)||0,r=parseFloat(t),a=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return r+a+i;case"-":return r-a+i;case"*":return r*a+i}}function Fe(e,t){if(f.col(e))return ft(e);if(/\s/g.test(e))return e;var n=P(e),i=n?e.substr(0,e.length-n.length):e;return t?i+t:i}function ue(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function gt(e){return Math.PI*2*D(e,"r")}function ht(e){return D(e,"width")*2+D(e,"height")*2}function mt(e){return ue({x:D(e,"x1"),y:D(e,"y1")},{x:D(e,"x2"),y:D(e,"y2")})}function Ve(e){for(var t=e.points,n=0,i,r=0;r<t.numberOfItems;r++){var a=t.getItem(r);r>0&&(n+=ue(i,a)),i=a}return n}function pt(e){var t=e.points;return Ve(e)+ue(t.getItem(t.numberOfItems-1),t.getItem(0))}function je(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return gt(e);case"rect":return ht(e);case"line":return mt(e);case"polyline":return Ve(e);case"polygon":return pt(e)}}function yt(e){var t=je(e);return e.setAttribute("stroke-dasharray",t),t}function bt(e){for(var t=e.parentNode;f.svg(t)&&f.svg(t.parentNode);)t=t.parentNode;return t}function Re(e,t){var n=t||{},i=n.el||bt(e),r=i.getBoundingClientRect(),a=D(i,"viewBox"),s=r.width,u=r.height,o=n.viewBox||(a?a.split(" "):[0,0,s,u]);return{el:i,viewBox:o,x:o[0]/1,y:o[1]/1,w:s,h:u,vW:o[2],vH:o[3]}}function wt(e,t){var n=f.str(e)?Oe(e)[0]:e,i=t||100;return function(r){return{property:r,el:n,svg:Re(n),totalLength:je(n)*(i/100)}}}function xt(e,t,n){function i(c){c===void 0&&(c=0);var l=t+c>=1?t+c:0;return e.el.getPointAtLength(l)}var r=Re(e.el,e.svg),a=i(),s=i(-1),u=i(1),o=n?1:r.w/r.vW,d=n?1:r.h/r.vH;switch(e.property){case"x":return(a.x-r.x)*o;case"y":return(a.y-r.y)*d;case"angle":return Math.atan2(u.y-s.y,u.x-s.x)*180/Math.PI}}function Te(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Fe(f.pth(e)?e.totalLength:e,t)+"";return{original:i,numbers:i.match(n)?i.match(n).map(Number):[0],strings:f.str(e)||t?i.split(n):[]}}function ce(e){var t=e?W(f.arr(e)?e.map(ke):ke(e)):[];return $(t,function(n,i,r){return r.indexOf(n)===i})}function He(e){var t=ce(e);return t.map(function(n,i){return{target:n,id:i,total:t.length,transforms:{list:_e(n)}}})}function kt(e,t){var n=re(t);if(/^spring/.test(n.easing)&&(n.duration=Le(n.easing)),f.arr(e)){var i=e.length,r=i===2&&!f.obj(e[0]);r?e={value:e}:f.fnc(t.duration)||(n.duration=t.duration/i)}var a=f.arr(e)?e:[e];return a.map(function(s,u){var o=f.obj(s)&&!f.pth(s)?s:{value:s};return f.und(o.delay)&&(o.delay=u?0:t.delay),f.und(o.endDelay)&&(o.endDelay=u===a.length-1?t.endDelay:0),o}).map(function(s){return Y(s,n)})}function Tt(e){for(var t=$(W(e.map(function(a){return Object.keys(a)})),function(a){return f.key(a)}).reduce(function(a,s){return a.indexOf(s)<0&&a.push(s),a},[]),n={},i=function(a){var s=t[a];n[s]=e.map(function(u){var o={};for(var d in u)f.key(d)?d==s&&(o.value=u[d]):o[d]=u[d];return o})},r=0;r<t.length;r++)i(r);return n}function It(e,t){var n=[],i=t.keyframes;i&&(t=Y(Tt(i),t));for(var r in t)f.key(r)&&n.push({name:r,tweens:kt(t[r],e)});return n}function Mt(e,t){var n={};for(var i in e){var r=X(e[i],t);f.arr(r)&&(r=r.map(function(a){return X(a,t)}),r.length===1&&(r=r[0])),n[i]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function Et(e,t){var n;return e.tweens.map(function(i){var r=Mt(i,t),a=r.value,s=f.arr(a)?a[1]:a,u=P(s),o=ae(t.target,e.name,u,t),d=n?n.to.original:o,c=f.arr(a)?a[0]:d,l=P(c)||P(o),m=u||l;return f.und(s)&&(s=d),r.from=Te(c,m),r.to=Te(se(s,c),m),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=te(r.easing,r.duration),r.isPath=f.pth(a),r.isPathTargetInsideSVG=r.isPath&&f.svg(t.target),r.isColor=f.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var ze={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,i,r){if(i.list.set(t,n),t===i.last||r){var a="";i.list.forEach(function(s,u){a+=u+"("+s+") "}),e.style.transform=a}}};function qe(e,t){var n=He(e);n.forEach(function(i){for(var r in t){var a=X(t[r],i),s=i.target,u=P(a),o=ae(s,r,u,i),d=u||P(o),c=se(Fe(a,d),o),l=oe(s,r);ze[l](s,r,c,i.transforms,!0)}})}function St(e,t){var n=oe(e.target,t.name);if(n){var i=Et(t,e),r=i[i.length-1];return{type:n,property:t.name,animatable:e,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function Dt(e,t){return $(W(e.map(function(n){return t.map(function(i){return St(n,i)})})),function(n){return!f.und(n)})}function Ne(e,t){var n=e.length,i=function(a){return a.timelineOffset?a.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,e.map(function(a){return i(a)+a.duration})):t.duration,r.delay=n?Math.min.apply(Math,e.map(function(a){return i(a)+a.delay})):t.delay,r.endDelay=n?r.duration-Math.max.apply(Math,e.map(function(a){return i(a)+a.duration-a.endDelay})):t.endDelay,r}var Ie=0;function Pt(e){var t=G(Pe,e),n=G(ee,e),i=It(n,e),r=He(e.targets),a=Dt(r,i),s=Ne(a,n),u=Ie;return Ie++,Y(t,{id:u,children:[],animatables:r,animations:a,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var E=[],Ue=function(){var e;function t(){!e&&(!Me()||!y.suspendWhenDocumentHidden)&&E.length>0&&(e=requestAnimationFrame(n))}function n(r){for(var a=E.length,s=0;s<a;){var u=E[s];u.paused?(E.splice(s,1),a--):(u.tick(r),s++)}e=s>0?requestAnimationFrame(n):void 0}function i(){y.suspendWhenDocumentHidden&&(Me()?e=cancelAnimationFrame(e):(E.forEach(function(r){return r._onDocumentVisibility()}),Ue()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),t}();function Me(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var t=0,n=0,i=0,r,a=0,s=null;function u(h){var g=window.Promise&&new Promise(function(I){return s=I});return h.finished=g,g}var o=Pt(e);u(o);function d(){var h=o.direction;h!=="alternate"&&(o.direction=h!=="normal"?"normal":"reverse"),o.reversed=!o.reversed,r.forEach(function(g){return g.reversed=o.reversed})}function c(h){return o.reversed?o.duration-h:h}function l(){t=0,n=c(o.currentTime)*(1/y.speed)}function m(h,g){g&&g.seek(h-g.timelineOffset)}function b(h){if(o.reversePlayback)for(var I=a;I--;)m(h,r[I]);else for(var g=0;g<a;g++)m(h,r[g])}function p(h){for(var g=0,I=o.animations,B=I.length;g<B;){var x=I[g],L=x.animatable,_=x.tweens,C=_.length-1,T=_[C];C&&(T=$(_,function(Je){return h<Je.end})[0]||T);for(var O=S(h-T.start-T.delay,0,T.duration)/T.duration,H=isNaN(O)?1:T.easing(O),M=T.to.strings,K=T.round,Q=[],Ze=T.to.numbers.length,A=void 0,F=0;F<Ze;F++){var V=void 0,ge=T.to.numbers[F],he=T.from.numbers[F]||0;T.isPath?V=xt(T.value,H*ge,T.isPathTargetInsideSVG):V=he+H*(ge-he),K&&(T.isColor&&F>2||(V=Math.round(V*K)/K)),Q.push(V)}var me=M.length;if(!me)A=Q[0];else{A=M[0];for(var j=0;j<me;j++){M[j];var pe=M[j+1],Z=Q[j];isNaN(Z)||(pe?A+=Z+pe:A+=Z+" ")}}ze[x.type](L.target,x.property,A,L.transforms),x.currentValue=A,g++}}function v(h){o[h]&&!o.passThrough&&o[h](o)}function w(){o.remaining&&o.remaining!==!0&&o.remaining--}function k(h){var g=o.duration,I=o.delay,B=g-o.endDelay,x=c(h);o.progress=S(x/g*100,0,100),o.reversePlayback=x<o.currentTime,r&&b(x),!o.began&&o.currentTime>0&&(o.began=!0,v("begin")),!o.loopBegan&&o.currentTime>0&&(o.loopBegan=!0,v("loopBegin")),x<=I&&o.currentTime!==0&&p(0),(x>=B&&o.currentTime!==g||!g)&&p(g),x>I&&x<B?(o.changeBegan||(o.changeBegan=!0,o.changeCompleted=!1,v("changeBegin")),v("change"),p(x)):o.changeBegan&&(o.changeCompleted=!0,o.changeBegan=!1,v("changeComplete")),o.currentTime=S(x,0,g),o.began&&v("update"),h>=g&&(n=0,w(),o.remaining?(t=i,v("loopComplete"),o.loopBegan=!1,o.direction==="alternate"&&d()):(o.paused=!0,o.completed||(o.completed=!0,v("loopComplete"),v("complete"),!o.passThrough&&"Promise"in window&&(s(),u(o)))))}return o.reset=function(){var h=o.direction;o.passThrough=!1,o.currentTime=0,o.progress=0,o.paused=!0,o.began=!1,o.loopBegan=!1,o.changeBegan=!1,o.completed=!1,o.changeCompleted=!1,o.reversePlayback=!1,o.reversed=h==="reverse",o.remaining=o.loop,r=o.children,a=r.length;for(var g=a;g--;)o.children[g].reset();(o.reversed&&o.loop!==!0||h==="alternate"&&o.loop===1)&&o.remaining++,p(o.reversed?o.duration:0)},o._onDocumentVisibility=l,o.set=function(h,g){return qe(h,g),o},o.tick=function(h){i=h,t||(t=i),k((i+(n-t))*y.speed)},o.seek=function(h){k(c(h))},o.pause=function(){o.paused=!0,l()},o.play=function(){o.paused&&(o.completed&&o.reset(),o.paused=!1,E.push(o),l(),Ue())},o.reverse=function(){d(),o.completed=!o.reversed,l()},o.restart=function(){o.reset(),o.play()},o.remove=function(h){var g=ce(h);$e(g,o)},o.reset(),o.autoplay&&o.play(),o}function Ee(e,t){for(var n=t.length;n--;)ne(e,t[n].animatable.target)&&t.splice(n,1)}function $e(e,t){var n=t.animations,i=t.children;Ee(e,n);for(var r=i.length;r--;){var a=i[r],s=a.animations;Ee(e,s),!s.length&&!a.children.length&&i.splice(r,1)}!n.length&&!i.length&&t.pause()}function Bt(e){for(var t=ce(e),n=E.length;n--;){var i=E[n];$e(t,i)}}function Lt(e,t){t===void 0&&(t={});var n=t.direction||"normal",i=t.easing?te(t.easing):null,r=t.grid,a=t.axis,s=t.from||0,u=s==="first",o=s==="center",d=s==="last",c=f.arr(e),l=parseFloat(c?e[0]:e),m=c?parseFloat(e[1]):0,b=P(c?e[1]:e)||0,p=t.start||0+(c?l:0),v=[],w=0;return function(k,h,g){if(u&&(s=0),o&&(s=(g-1)/2),d&&(s=g-1),!v.length){for(var I=0;I<g;I++){if(!r)v.push(Math.abs(s-I));else{var B=o?(r[0]-1)/2:s%r[0],x=o?(r[1]-1)/2:Math.floor(s/r[0]),L=I%r[0],_=Math.floor(I/r[0]),C=B-L,T=x-_,O=Math.sqrt(C*C+T*T);a==="x"&&(O=-C),a==="y"&&(O=-T),v.push(O)}w=Math.max.apply(Math,v)}i&&(v=v.map(function(M){return i(M/w)*w})),n==="reverse"&&(v=v.map(function(M){return a?M<0?M*-1:-M:Math.abs(w-M)}))}var H=c?(m-l)/w:l;return p+H*(Math.round(v[h]*100)/100)+b}}function Ct(e){e===void 0&&(e={});var t=y(e);return t.duration=0,t.add=function(n,i){var r=E.indexOf(t),a=t.children;r>-1&&E.splice(r,1);function s(m){m.passThrough=!0}for(var u=0;u<a.length;u++)s(a[u]);var o=Y(n,G(ee,e));o.targets=o.targets||e.targets;var d=t.duration;o.autoplay=!1,o.direction=t.direction,o.timelineOffset=f.und(i)?d:se(i,d),s(t),t.seek(o.timelineOffset);var c=y(o);s(c),a.push(c);var l=Ne(a,e);return t.delay=l.delay,t.endDelay=l.endDelay,t.duration=l.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=E;y.remove=Bt;y.get=ae;y.set=qe;y.convertPx=ie;y.path=wt;y.setDashoffset=yt;y.stagger=Lt;y.timeline=Ct;y.easing=te;y.penner=Ce;y.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const q=document.querySelector(".scrollUpButton");document.querySelector("#aboutMe-btn");let N,Ot=window.matchMedia("(max-width: 500px)").matches;Ot?N=20:N=300;window.onscroll=function(){document.body.scrollTop>N||document.documentElement.scrollTop>N?q.style.display="inherit":q.style.display="none"};const At=400;q.addEventListener("click",()=>{y({targets:q,translateY:[{value:-30,easing:"easeOutElastic(1, .6)"},{value:0,easing:"linear",duration:400,delay:100}]}),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},At)});const _t=document.querySelector("#aboutMe"),Ft=document.querySelector(".skillsSection"),le=document.querySelector("#aboutLeft"),fe=document.querySelector(".aboutMeContainer"),de=document.querySelector(".skillsContainer"),ve=document.querySelector("#skillsRight");le.style.transform="translatex(-100px) translatey(100px)";le.style.opacity="0";fe.style.transform="translatex(100px) translatey(-100px)";fe.style.opacity="0";de.style.transform="translatex(-100px) translatey(100px)";de.style.opacity="0";ve.style.transform="translatex(100px) translatey(-100px)";ve.style.opacity="0";const We=(e,t)=>{console.log("animate!"),y({targets:[e,t],opacity:1,translateX:0,translateY:0,easing:"easeInOutQuad",duration:300})};var Vt=new IntersectionObserver(function(e){e[0].isIntersecting===!0&&We(le,fe)},{threshold:[.7]});Vt.observe(_t);var jt=new IntersectionObserver(function(e){e[0].isIntersecting===!0&&We(de,ve)},{threshold:[.7]});jt.observe(Ft);/*! *****************************************************************************
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
***************************************************************************** */function Rt(e,t,n,i){function r(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function u(c){try{d(i.next(c))}catch(l){s(l)}}function o(c){try{d(i.throw(c))}catch(l){s(l)}}function d(c){c.done?a(c.value):r(c.value).then(u,o)}d((i=i.apply(e,t||[])).next())})}const Ye=300;function Ht(e,t={}){return Rt(this,void 0,void 0,function*(){if(!(e instanceof Element)&&!(e instanceof Window))throw new Error(`element passed to scrollTo() must be either the window or a DOM element, you passed ${e}!`);t=Qe(t);const n=(a,s,u,o,d=Ye,c,l)=>{window.requestAnimationFrame(()=>{const m=Date.now(),b=Math.min(1,(m-o)/d);if(a===s)return l?l():null;Ut(e,c(b)*(s-a)+a),b<1?n(a,s,u,o,d,c,l):l&&l()})},i=Nt(e),r=qt(e);return new Promise(a=>{n(i,typeof t.top=="number"?t.top:i,r,Date.now(),t.duration,$t(t.easing),a)})})}function Ke(e,t,n){zt(e),t&&!(t instanceof Element)&&(n=t,t=void 0);const{duration:i,easing:r}=Qe(n);t=t||U.getDocument().body;let a=0,s=e?e.offsetTop:0;const u=U.getDocument();return(t===u.body||t===u.documentElement)&&(a=window.pageYOffset,s=e.getBoundingClientRect().top+a),Ht(t,{top:s,left:0,duration:i,easing:r})}function zt(e){if(e===void 0){const t="The element passed to scrollIntoView() was undefined.";throw new Error(t)}if(!(e instanceof HTMLElement))throw new Error(`The element passed to scrollIntoView() must be a valid element. You passed ${e}.`)}function qt(e){const t={window:{y:"scrollY",x:"scrollX"},element:{y:"scrollTop",x:"scrollLeft"}},n="y";return e instanceof Window?t.window[n]:t.element[n]}function Qe(e={}){return e.behavior==="smooth"&&(e.easing="ease-in-out",e.duration=Ye),e.behavior==="auto"&&(e.duration=0,e.easing="linear"),e}function Nt(e){const t=U.getDocument();return e===t.body||e===t.documentElement||e instanceof Window?t.body.scrollTop||t.documentElement.scrollTop:e.scrollTop}function Ut(e,t){const n=U.getDocument();e===n.body||e===n.documentElement||e instanceof Window?(n.body.scrollTop=t,n.documentElement.scrollTop=t):e.scrollTop=t}const U={getDocument(){return document}},Se={linear(e){return e},"ease-in"(e){return e*e},"ease-out"(e){return e*(2-e)},"ease-in-out"(e){return e<.5?2*e*e:-1+(4-2*e)*e}},$t=e=>{const n=Se[e||"linear"];if(!n){const i=Object.keys(Se).join(",");throw new Error(`Scroll error: scroller does not support an easing option of "${e}". Supported options are ${i}`)}return n},Wt=document.getElementById("aboutMe-btn"),Yt=document.getElementById("aboutMe");Wt.addEventListener("click",()=>{Ke(Yt,document.body,{duration:1e3,easing:"ease-in"})});const Kt=document.getElementById("skills-btn"),Qt=document.getElementById("skills");Kt.addEventListener("click",()=>{Ke(Qt,document.body,{duration:1e3,easing:"ease-in",top:"2000px"})});
