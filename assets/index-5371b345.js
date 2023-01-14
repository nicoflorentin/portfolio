(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ac=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],u=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,u=o?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,l=i>>2,h=(i&3)<<4|u>>4;let d=(u&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),r.push(n[l],n[h],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Fo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ac(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],u=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||u==null||c==null||h==null)throw Error();const d=i<<2|u>>4;if(r.push(d),c!==64){const g=u<<4&240|c>>2;if(r.push(g),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},kc=function(e){const t=Fo(e);return Bo.encodeByteArray(t,!0)},Tn=function(e){return kc(e).replace(/\./g,"")},_c=function(e){try{return Bo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function xc(){return typeof indexedDB=="object"}function Nc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Oc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=()=>Oc().__FIREBASE_DEFAULTS__,Mc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Lc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_c(e[1]);return t&&JSON.parse(t)},Uo=()=>{try{return Rc()||Mc()||Lc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Pc=e=>{var t,n;return(n=(t=Uo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Vc=e=>{const t=Pc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Fc=()=>{var e;return(e=Uo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),u="";return[Tn(JSON.stringify(n)),Tn(JSON.stringify(o)),u].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="FirebaseError";class fe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$c,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o.prototype.create)}}class $o{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?jc(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new fe(s,u,r)}}function jc(e,t){return e.replace(qc,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const qc=/\{\$([^}]+)}/g;function Ur(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ai(i)&&Ai(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ai(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){return e&&e._delegate?e._delegate:e}class Re{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Bc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zc(t))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vt){return this.instances.has(t)}getOptions(t=Vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vt){return this.component?this.component.multipleInstances?t:Vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kc(e){return e===Vt?void 0:e}function zc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Hc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(L||(L={}));const Wc={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Qc=L.INFO,Yc={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Xc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Yc[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jo{constructor(t){this.name=t,this._logLevel=Qc,this._logHandler=Xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const Jc=(e,t)=>t.some(n=>e instanceof n);let ki,_i;function Zc(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tl(){return _i||(_i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qo=new WeakMap,$r=new WeakMap,Ho=new WeakMap,Cr=new WeakMap,ys=new WeakMap;function el(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(_t(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&qo.set(n,e)}).catch(()=>{}),ys.set(t,e),t}function nl(e){if($r.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});$r.set(e,t)}let jr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $r.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ho.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function rl(e){jr=e(jr)}function sl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Dr(this),t,...n);return Ho.set(r,t.sort?t.sort():[t]),_t(r)}:tl().includes(e)?function(...t){return e.apply(Dr(this),t),_t(qo.get(this))}:function(...t){return _t(e.apply(Dr(this),t))}}function il(e){return typeof e=="function"?sl(e):(e instanceof IDBTransaction&&nl(e),Jc(e,Zc())?new Proxy(e,jr):e)}function _t(e){if(e instanceof IDBRequest)return el(e);if(Cr.has(e))return Cr.get(e);const t=il(e);return t!==e&&(Cr.set(e,t),ys.set(t,e)),t}const Dr=e=>ys.get(e);function ol(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),u=_t(o);return r&&o.addEventListener("upgradeneeded",a=>{r(_t(o.result),a.oldVersion,a.newVersion,_t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),u.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),u}const al=["get","getKey","getAll","getAllKeys","count"],ul=["put","add","delete","clear"],Ar=new Map;function xi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ar.get(t))return Ar.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ul.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||al.includes(n)))return;const i=async function(o,...u){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(u.shift())),(await Promise.all([c[n](...u),s&&a.done]))[0]};return Ar.set(t,i),i}rl(e=>({...e,get:(t,n,r)=>xi(t,n)||e.get(t,n,r),has:(t,n)=>!!xi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ll(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ll(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qr="@firebase/app",Ni="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new jo("@firebase/app"),hl="@firebase/app-compat",dl="@firebase/analytics-compat",fl="@firebase/analytics",gl="@firebase/app-check-compat",pl="@firebase/app-check",ml="@firebase/auth",yl="@firebase/auth-compat",vl="@firebase/database",wl="@firebase/database-compat",El="@firebase/functions",Tl="@firebase/functions-compat",bl="@firebase/installations",Il="@firebase/installations-compat",Sl="@firebase/messaging",Cl="@firebase/messaging-compat",Dl="@firebase/performance",Al="@firebase/performance-compat",kl="@firebase/remote-config",_l="@firebase/remote-config-compat",xl="@firebase/storage",Nl="@firebase/storage-compat",Ol="@firebase/firestore",Rl="@firebase/firestore-compat",Ml="firebase",Ll="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]",Pl={[qr]:"fire-core",[hl]:"fire-core-compat",[fl]:"fire-analytics",[dl]:"fire-analytics-compat",[pl]:"fire-app-check",[gl]:"fire-app-check-compat",[ml]:"fire-auth",[yl]:"fire-auth-compat",[vl]:"fire-rtdb",[wl]:"fire-rtdb-compat",[El]:"fire-fn",[Tl]:"fire-fn-compat",[bl]:"fire-iid",[Il]:"fire-iid-compat",[Sl]:"fire-fcm",[Cl]:"fire-fcm-compat",[Dl]:"fire-perf",[Al]:"fire-perf-compat",[kl]:"fire-rc",[_l]:"fire-rc-compat",[xl]:"fire-gcs",[Nl]:"fire-gcs-compat",[Ol]:"fire-fst",[Rl]:"fire-fst-compat","fire-js":"fire-js",[Ml]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Map,Kr=new Map;function Vl(e,t){try{e.container.addComponent(t)}catch(n){Ht.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function In(e){const t=e.name;if(Kr.has(t))return Ht.debug(`There were multiple attempts to register component ${t}.`),!1;Kr.set(t,e);for(const n of bn.values())Vl(n,e);return!0}function Fl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new $o("app","Firebase",Bl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=Ll;function Ko(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(n||(n=Fc()),!n)throw xt.create("no-options");const i=bn.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const o=new Gc(s);for(const a of Kr.values())o.addComponent(a);const u=new Ul(n,r,o);return bn.set(s,u),u}function jl(e=Hr){const t=bn.get(e);if(!t&&e===Hr)return Ko();if(!t)throw xt.create("no-app",{appName:e});return t}function ne(e,t,n){var r;let s=(r=Pl[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const u=[`Unable to register library "${s}" with version "${t}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ht.warn(u.join(" "));return}In(new Re(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="firebase-heartbeat-database",Hl=1,Me="firebase-heartbeat-store";let kr=null;function zo(){return kr||(kr=ol(ql,Hl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Me)}}}).catch(e=>{throw xt.create("idb-open",{originalErrorMessage:e.message})})),kr}async function Kl(e){var t;try{return(await zo()).transaction(Me).objectStore(Me).get(Go(e))}catch(n){if(n instanceof fe)Ht.warn(n.message);else{const r=xt.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Ht.warn(r.message)}}}async function Oi(e,t){var n;try{const s=(await zo()).transaction(Me,"readwrite");return await s.objectStore(Me).put(t,Go(e)),s.done}catch(r){if(r instanceof fe)Ht.warn(r.message);else{const s=xt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ht.warn(s.message)}}}function Go(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=1024,Gl=30*24*60*60*1e3;class Wl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ri();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Gl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ri(),{heartbeatsToSend:n,unsentEntries:r}=Ql(this._heartbeatsCache.heartbeats),s=Tn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ri(){return new Date().toISOString().substring(0,10)}function Ql(e,t=zl){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mi(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xc()?Nc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Mi(e){return Tn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e){In(new Re("platform-logger",t=>new cl(t),"PRIVATE")),In(new Re("heartbeat",t=>new Wl(t),"PRIVATE")),ne(qr,Ni,e),ne(qr,Ni,"esm2017"),ne("fire-js","")}Xl("");var Jl="firebase",Zl="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(Jl,Zl,"app");var th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,vs=vs||{},A=th||self;function Sn(){}function qn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function eh(e){return Object.prototype.hasOwnProperty.call(e,_r)&&e[_r]||(e[_r]=++nh)}var _r="closure_uid_"+(1e9*Math.random()>>>0),nh=0;function rh(e,t,n){return e.call.apply(e.bind,arguments)}function sh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function st(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=rh:st=sh,st.apply(null,arguments)}function hn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function et(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,s,i){for(var o=Array(arguments.length-2),u=2;u<arguments.length;u++)o[u-2]=arguments[u];return t.prototype[s].apply(r,o)}}function Lt(){this.s=this.s,this.o=this.o}var ih=0;Lt.prototype.s=!1;Lt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ih!=0)&&eh(this)};Lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ws(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Li(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function it(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var oh=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{A.addEventListener("test",Sn,t),A.removeEventListener("test",Sn,t)}catch{}return e}();function Cn(e){return/^[\s\xa0]*$/.test(e)}var Pi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function xr(e,t){return e<t?-1:e>t?1:0}function Hn(){var e=A.navigator;return e&&(e=e.userAgent)?e:""}function mt(e){return Hn().indexOf(e)!=-1}function Es(e){return Es[" "](e),e}Es[" "]=Sn;function ah(e){var t=lh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var uh=mt("Opera"),oe=mt("Trident")||mt("MSIE"),Qo=mt("Edge"),zr=Qo||oe,Yo=mt("Gecko")&&!(Hn().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),ch=Hn().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function Xo(){var e=A.document;return e?e.documentMode:void 0}var Dn;t:{var Nr="",Or=function(){var e=Hn();if(Yo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Qo)return/Edge\/([\d\.]+)/.exec(e);if(oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ch)return/WebKit\/(\S+)/.exec(e);if(uh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Or&&(Nr=Or?Or[1]:""),oe){var Rr=Xo();if(Rr!=null&&Rr>parseFloat(Nr)){Dn=String(Rr);break t}}Dn=Nr}var lh={};function hh(){return ah(function(){let e=0;const t=Pi(String(Dn)).split("."),n=Pi("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;e=xr(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||xr(s[2].length==0,i[2].length==0)||xr(s[2],i[2]),s=s[3],i=i[3]}while(e==0)}return 0<=e})}var Gr;if(A.document&&oe){var Vi=Xo();Gr=Vi||parseInt(Dn,10)||void 0}else Gr=void 0;var dh=Gr;function Le(e,t){if(it.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Yo){t:{try{Es(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:fh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Le.X.h.call(this)}}et(Le,it);var fh={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ye="closure_listenable_"+(1e6*Math.random()|0),gh=0;function ph(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++gh,this.ba=this.ea=!1}function Kn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ts(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Jo(e){const t={};for(const n in e)t[n]=e[n];return t}const Fi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zo(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Fi.length;i++)n=Fi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function zn(e){this.src=e,this.g={},this.h=0}zn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Qr(e,t,r,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new ph(t,this.src,i,!!r,s),t.ea=n,e.push(t)),t};function Wr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Wo(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Kn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Qr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Mr={};function ta(e,t,n,r,s){if(r&&r.once)return na(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ta(e,t[i],n,r,s);return null}return n=Cs(n),e&&e[Ye]?e.N(t,n,Qe(r)?!!r.capture:!!r,s):ea(e,t,n,!1,r,s)}function ea(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Qe(s)?!!s.capture:!!s,u=Ss(e);if(u||(e[bs]=u=new zn(e)),n=u.add(t,n,r,o,i),n.proxy)return n;if(r=mh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oh||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(sa(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mh(){function e(n){return t.call(e.src,e.listener,n)}const t=yh;return e}function na(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)na(e,t[i],n,r,s);return null}return n=Cs(n),e&&e[Ye]?e.O(t,n,Qe(r)?!!r.capture:!!r,s):ea(e,t,n,!0,r,s)}function ra(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ra(e,t[i],n,r,s);else r=Qe(r)?!!r.capture:!!r,n=Cs(n),e&&e[Ye]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Qr(i,n,r,s),-1<n&&(Kn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ss(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Qr(t,n,r,s)),(n=-1<e?t[e]:null)&&Is(n))}function Is(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Ye])Wr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(sa(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ss(t))?(Wr(n,e),n.h==0&&(n.src=null,t[bs]=null)):Kn(e)}}}function sa(e){return e in Mr?Mr[e]:Mr[e]="on"+e}function yh(e,t){if(e.ba)e=!0;else{t=new Le(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Is(e),e=n.call(r,t)}return e}function Ss(e){return e=e[bs],e instanceof zn?e:null}var Lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cs(e){return typeof e=="function"?e:(e[Lr]||(e[Lr]=function(t){return e.handleEvent(t)}),e[Lr])}function Y(){Lt.call(this),this.i=new zn(this),this.P=this,this.I=null}et(Y,Lt);Y.prototype[Ye]=!0;Y.prototype.removeEventListener=function(e,t,n,r){ra(this,e,t,n,r)};function tt(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new it(t,e);else if(t instanceof it)t.target=t.target||e;else{var s=t;t=new it(r,e),Zo(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=dn(o,r,!0,t)&&s}if(o=t.g=e,s=dn(o,r,!0,t)&&s,s=dn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=dn(o,r,!1,t)&&s}Y.prototype.M=function(){if(Y.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Kn(n[r]);delete e.g[t],e.h--}}this.I=null};Y.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Y.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function dn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var u=o.listener,a=o.ha||o.src;o.ea&&Wr(e.i,o),s=u.call(a,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ds=A.JSON.stringify;function vh(){var e=aa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class wh{constructor(){this.h=this.g=null}add(t,n){const r=ia.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ia=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Eh,e=>e.reset());class Eh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Th(e){A.setTimeout(()=>{throw e},0)}function oa(e,t){Yr||bh(),Xr||(Yr(),Xr=!0),aa.add(e,t)}var Yr;function bh(){var e=A.Promise.resolve(void 0);Yr=function(){e.then(Ih)}}var Xr=!1,aa=new wh;function Ih(){for(var e;e=vh();){try{e.h.call(e.g)}catch(n){Th(n)}var t=ia;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Xr=!1}function Gn(e,t){Y.call(this),this.h=e||1,this.g=t||A,this.j=st(this.lb,this),this.l=Date.now()}et(Gn,Y);b=Gn.prototype;b.ca=!1;b.R=null;b.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tt(this,"tick"),this.ca&&(As(this),this.start()))}};b.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function As(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}b.M=function(){Gn.X.M.call(this),As(this),delete this.g};function ks(e,t,n){if(typeof e=="function")n&&(e=st(e,n));else if(e&&typeof e.handleEvent=="function")e=st(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(e,t||0)}function ua(e){e.g=ks(()=>{e.g=null,e.i&&(e.i=!1,ua(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Sh extends Lt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ua(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){Lt.call(this),this.h=e,this.g={}}et(Pe,Lt);var Bi=[];function ca(e,t,n,r){Array.isArray(n)||(n&&(Bi[0]=n.toString()),n=Bi);for(var s=0;s<n.length;s++){var i=ta(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function la(e){Ts(e.g,function(t,n){this.g.hasOwnProperty(n)&&Is(t)},e),e.g={}}Pe.prototype.M=function(){Pe.X.M.call(this),la(this)};Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wn(){this.g=!0}Wn.prototype.Aa=function(){this.g=!1};function Ch(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",u=i.split("&"),a=0;a<u.length;a++){var c=u[a].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Dh(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function te(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+kh(e,n)+(r?" "+r:"")})}function Ah(e,t){e.info(function(){return"TIMEOUT: "+t})}Wn.prototype.info=function(){};function kh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ds(n)}catch{return t}}var Gt={},Ui=null;function Qn(){return Ui=Ui||new Y}Gt.Pa="serverreachability";function ha(e){it.call(this,Gt.Pa,e)}et(ha,it);function Ve(e){const t=Qn();tt(t,new ha(t))}Gt.STAT_EVENT="statevent";function da(e,t){it.call(this,Gt.STAT_EVENT,e),this.stat=t}et(da,it);function ct(e){const t=Qn();tt(t,new da(t,e))}Gt.Qa="timingevent";function fa(e,t){it.call(this,Gt.Qa,e),this.size=t}et(fa,it);function Xe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){e()},t)}var Yn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ga={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _s(){}_s.prototype.h=null;function $i(e){return e.h||(e.h=e.i())}function pa(){}var Je={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function xs(){it.call(this,"d")}et(xs,it);function Ns(){it.call(this,"c")}et(Ns,it);var Jr;function Xn(){}et(Xn,_s);Xn.prototype.g=function(){return new XMLHttpRequest};Xn.prototype.i=function(){return{}};Jr=new Xn;function Ze(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Pe(this),this.O=_h,e=zr?125:void 0,this.T=new Gn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ma}function ma(){this.i=null,this.g="",this.h=!1}var _h=45e3,Zr={},An={};b=Ze.prototype;b.setTimeout=function(e){this.O=e};function ts(e,t,n){e.K=1,e.v=Zn(Ct(t)),e.s=n,e.P=!0,ya(e,null)}function ya(e,t){e.F=Date.now(),tn(e),e.A=Ct(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Ca(n.i,"t",r),e.C=0,n=e.l.H,e.h=new ma,e.g=za(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Sh(st(e.La,e,e.g),e.N)),ca(e.S,e.g,"readystatechange",e.ib),t=e.H?Jo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ve(),Ch(e.j,e.u,e.A,e.m,e.U,e.s)}b.ib=function(e){e=e.target;const t=this.L;t&&Tt(e)==3?t.l():this.La(e)};b.La=function(e){try{if(e==this.g)t:{const l=Tt(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||zr||this.g&&(this.h.h||this.g.fa()||Ki(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?Ve(3):Ve(2)),Jn(this);var n=this.g.aa();this.Y=n;e:if(va(this)){var r=Ki(this.g);e="";var s=r.length,i=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Ae(this);var o="";break e}this.h.i=new A.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Dh(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var u,a=this.g;if((u=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cn(u)){var c=u;break e}}c=null}if(n=c)te(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,es(this,n);else{this.i=!1,this.o=3,ct(12),Ft(this),Ae(this);break t}}this.P?(wa(this,l,o),zr&&this.i&&l==3&&(ca(this.S,this.T,"tick",this.hb),this.T.start())):(te(this.j,this.m,o,null),es(this,o)),l==4&&Ft(this),this.i&&!this.I&&(l==4?ja(this.l,this):(this.i=!1,tn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Ft(this),Ae(this)}}}catch{}finally{}};function va(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function wa(e,t,n){let r=!0,s;for(;!e.I&&e.C<n.length;)if(s=xh(e,n),s==An){t==4&&(e.o=4,ct(14),r=!1),te(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Zr){e.o=4,ct(15),te(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else te(e.j,e.m,s,null),es(e,s);va(e)&&s!=An&&s!=Zr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ct(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fs(t),t.K=!0,ct(11))):(te(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),Ae(e))}b.hb=function(){if(this.g){var e=Tt(this.g),t=this.g.fa();this.C<t.length&&(Jn(this),wa(this,e,t),this.i&&e!=4&&tn(this))}};function xh(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?An:(n=Number(t.substring(n,r)),isNaN(n)?Zr:(r+=1,r+n>t.length?An:(t=t.substr(r,n),e.C=r+n,t)))}b.cancel=function(){this.I=!0,Ft(this)};function tn(e){e.V=Date.now()+e.O,Ea(e,e.O)}function Ea(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Xe(st(e.gb,e),t)}function Jn(e){e.B&&(A.clearTimeout(e.B),e.B=null)}b.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ah(this.j,this.A),this.K!=2&&(Ve(),ct(17)),Ft(this),this.o=2,Ae(this)):Ea(this,this.V-e)};function Ae(e){e.l.G==0||e.I||ja(e.l,e)}function Ft(e){Jn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,As(e.T),la(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function es(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ns(n.h,e))){if(!e.J&&ns(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)xn(n),nr(n);else break t;Vs(n),ct(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xe(st(n.cb,n),6e3));if(1>=ka(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bt(n,11)}else if((e.J||n.g==e)&&xn(n),!Cn(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const l=c[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Os(i,i.h),i.h=null))}if(r.D){const f=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.za=f,B(r.F,r.D,f))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=Ka(r,r.H?r.ka:null,r.V),o.J){_a(r.h,o);var u=o,a=r.J;a&&u.setTimeout(a),u.B&&(Jn(u),tn(u)),r.g=o}else Ua(r);0<n.i.length&&rr(n)}else c[0]!="stop"&&c[0]!="close"||Bt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Bt(n,7):Ps(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Ve(4)}catch{}}function Nh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(qn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Oh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(qn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ta(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(qn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Oh(e),r=Nh(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=t!==void 0?t:e.h,kn(this,e.j),this.s=e.s,this.g=e.g,_n(this,e.m),this.l=e.l,t=e.i;var n=new Fe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ji(this,n),this.o=e.o}else e&&(n=String(e).match(ba))?(this.h=!!t,kn(this,n[1]||"",!0),this.s=Ie(n[2]||""),this.g=Ie(n[3]||"",!0),_n(this,n[4]),this.l=Ie(n[5]||"",!0),ji(this,n[6]||"",!0),this.o=Ie(n[7]||"")):(this.h=!!t,this.i=new Fe(null,this.h))}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Se(t,qi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Se(t,qi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Se(n,n.charAt(0)=="/"?Ph:Lh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Se(n,Fh)),e.join("")};function Ct(e){return new $t(e)}function kn(e,t,n){e.j=n?Ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function _n(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ji(e,t,n){t instanceof Fe?(e.i=t,Bh(e.i,e.h)):(n||(t=Se(t,Vh)),e.i=new Fe(t,e.h))}function B(e,t,n){e.i.set(t,n)}function Zn(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Mh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Mh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var qi=/[#\/\?@]/g,Lh=/[#\?:]/g,Ph=/[#\?]/g,Vh=/[#\?@]/g,Fh=/#/g;function Fe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Pt(e){e.g||(e.g=new Map,e.h=0,e.i&&Rh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}b=Fe.prototype;b.add=function(e,t){Pt(this),this.i=null,e=ge(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ia(e,t){Pt(e),t=ge(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Sa(e,t){return Pt(e),t=ge(e,t),e.g.has(t)}b.forEach=function(e,t){Pt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};b.oa=function(){Pt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};b.W=function(e){Pt(this);let t=[];if(typeof e=="string")Sa(this,e)&&(t=t.concat(this.g.get(ge(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};b.set=function(e,t){return Pt(this),this.i=null,e=ge(this,e),Sa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};b.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Ca(e,t,n){Ia(e,t),0<n.length&&(e.i=null,e.g.set(ge(e,t),ws(n)),e.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ge(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Bh(e,t){t&&!e.j&&(Pt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ia(this,r),Ca(this,s,n))},e)),e.j=t}var Uh=class{constructor(e,t){this.h=e,this.g=t}};function Da(e){this.l=e||$h,A.PerformanceNavigationTiming?(e=A.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(A.g&&A.g.Ga&&A.g.Ga()&&A.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $h=10;function Aa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ka(e){return e.h?1:e.g?e.g.size:0}function ns(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Os(e,t){e.g?e.g.add(t):e.h=t}function _a(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Da.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function xa(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ws(e.i)}function Rs(){}Rs.prototype.stringify=function(e){return A.JSON.stringify(e,void 0)};Rs.prototype.parse=function(e){return A.JSON.parse(e,void 0)};function jh(){this.g=new Rs}function qh(e,t,n){const r=n||"";try{Ta(e,function(s,i){let o=s;Qe(s)&&(o=Ds(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Hh(e,t){const n=new Wn;if(A.Image){const r=new Image;r.onload=hn(fn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=hn(fn,n,r,"TestLoadImage: error",!1,t),r.onabort=hn(fn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=hn(fn,n,r,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function fn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function en(e){this.l=e.ac||null,this.j=e.jb||!1}et(en,_s);en.prototype.g=function(){return new tr(this.l,this.j)};en.prototype.i=function(e){return function(){return e}}({});function tr(e,t){Y.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ms,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(tr,Y);var Ms=0;b=tr.prototype;b.open=function(e,t){if(this.readyState!=Ms)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Be(this)};b.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||A).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=Ms};b.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Na(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Na(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}b.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nn(this):Be(this),this.readyState==3&&Na(this)}};b.Va=function(e){this.g&&(this.response=this.responseText=e,nn(this))};b.Ua=function(e){this.g&&(this.response=e,nn(this))};b.ga=function(){this.g&&nn(this)};function nn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Be(e)}b.setRequestHeader=function(e,t){this.v.append(e,t)};b.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Kh=A.JSON.parse;function q(e){Y.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Oa,this.K=this.L=!1}et(q,Y);var Oa="",zh=/^https?$/i,Gh=["POST","PUT"];b=q.prototype;b.Ka=function(e){this.L=e};b.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jr.g(),this.C=this.u?$i(this.u):$i(Jr),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Hi(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=A.FormData&&e instanceof A.FormData,!(0<=Wo(Gh,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{La(this),0<this.B&&((this.K=Wh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=ks(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Hi(this,i)}};function Wh(e){return oe&&hh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}b.qa=function(){typeof vs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function Hi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ra(e),er(e)}function Ra(e){e.D||(e.D=!0,tt(e,"complete"),tt(e,"error"))}b.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tt(this,"complete"),tt(this,"abort"),er(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),er(this,!0)),q.X.M.call(this)};b.Ha=function(){this.s||(this.F||this.v||this.l?Ma(this):this.fb())};b.fb=function(){Ma(this)};function Ma(e){if(e.h&&typeof vs<"u"&&(!e.C[1]||Tt(e)!=4||e.aa()!=2)){if(e.v&&Tt(e)==4)ks(e.Ha,0,e);else if(tt(e,"readystatechange"),Tt(e)==4){e.h=!1;try{const u=e.aa();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=u===0){var s=String(e.H).match(ba)[1]||null;if(!s&&A.self&&A.self.location){var i=A.self.location.protocol;s=i.substr(0,i.length-1)}r=!zh.test(s?s.toLowerCase():"")}n=r}if(n)tt(e,"complete"),tt(e,"success");else{e.m=6;try{var o=2<Tt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Ra(e)}}finally{er(e)}}}}function er(e,t){if(e.g){La(e);const n=e.g,r=e.C[0]?Sn:null;e.g=null,e.C=null,t||tt(e,"ready");try{n.onreadystatechange=r}catch{}}}function La(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(A.clearTimeout(e.A),e.A=null)}function Tt(e){return e.g?e.g.readyState:0}b.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};b.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Kh(t)}};function Ki(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Oa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ea=function(){return this.m};b.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pa(e){let t="";return Ts(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ls(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Pa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function be(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Va(e){this.Ca=0,this.i=[],this.j=new Wn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=be("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=be("baseRetryDelayMs",5e3,e),this.bb=be("retryDelaySeedMs",1e4,e),this.$a=be("forwardChannelMaxRetries",2,e),this.ta=be("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Da(e&&e.concurrentRequestLimit),this.Fa=new jh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}b=Va.prototype;b.ma=8;b.G=1;function Ps(e){if(Fa(e),e.G==3){var t=e.U++,n=Ct(e.F);B(n,"SID",e.I),B(n,"RID",t),B(n,"TYPE","terminate"),rn(e,n),t=new Ze(e,e.j,t,void 0),t.K=2,t.v=Zn(Ct(n)),n=!1,A.navigator&&A.navigator.sendBeacon&&(n=A.navigator.sendBeacon(t.v.toString(),"")),!n&&A.Image&&(new Image().src=t.v,n=!0),n||(t.g=za(t.l,null),t.g.da(t.v)),t.F=Date.now(),tn(t)}Ha(e)}function nr(e){e.g&&(Fs(e),e.g.cancel(),e.g=null)}function Fa(e){nr(e),e.u&&(A.clearTimeout(e.u),e.u=null),xn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&A.clearTimeout(e.m),e.m=null)}function rr(e){Aa(e.h)||e.m||(e.m=!0,oa(e.Ja,e),e.C=0)}function Qh(e,t){return ka(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Xe(st(e.Ja,e,t),qa(e,e.C)),e.C++,!0)}b.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Ze(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Jo(i),Zo(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ba(this,s,t),n=Ct(this.F),B(n,"RID",e),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),rn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Pa(i)))+"&"+t:this.o&&Ls(n,this.o,i)),Os(this.h,s),this.Ya&&B(n,"TYPE","init"),this.O?(B(n,"$req",t),B(n,"SID","null"),s.Z=!0,ts(s,n,null)):ts(s,n,t),this.G=2}}else this.G==3&&(e?zi(this,e):this.i.length==0||Aa(this.h)||zi(this))};function zi(e,t){var n;t?n=t.m:n=e.U++;const r=Ct(e.F);B(r,"SID",e.I),B(r,"RID",n),B(r,"AID",e.T),rn(e,r),e.o&&e.s&&Ls(r,e.o,e.s),n=new Ze(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Ba(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Os(e.h,n),ts(n,r,t)}function rn(e,t){e.ia&&Ts(e.ia,function(n,r){B(t,r,n)}),e.l&&Ta({},function(n,r){B(t,r,n)})}function Ba(e,t,n){n=Math.min(e.i.length,n);var r=e.l?st(e.l.Ra,e.l,e):null;t:{var s=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let u=!0;for(let a=0;a<n;a++){let c=s[a].h;const l=s[a].g;if(c-=i,0>c)i=Math.max(0,s[a].h-100),u=!1;else try{qh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(u){r=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,r}function Ua(e){e.g||e.u||(e.Z=1,oa(e.Ia,e),e.A=0)}function Vs(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Xe(st(e.Ia,e),qa(e,e.A)),e.A++,!0)}b.Ia=function(){if(this.u=null,$a(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Xe(st(this.eb,this),e)}};b.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),nr(this),$a(this))};function Fs(e){e.B!=null&&(A.clearTimeout(e.B),e.B=null)}function $a(e){e.g=new Ze(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ct(e.sa);B(t,"RID","rpc"),B(t,"SID",e.I),B(t,"CI",e.L?"0":"1"),B(t,"AID",e.T),B(t,"TYPE","xmlhttp"),rn(e,t),e.o&&e.s&&Ls(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Zn(Ct(t)),n.s=null,n.P=!0,ya(n,e)}b.cb=function(){this.v!=null&&(this.v=null,nr(this),Vs(this),ct(19))};function xn(e){e.v!=null&&(A.clearTimeout(e.v),e.v=null)}function ja(e,t){var n=null;if(e.g==t){xn(e),Fs(e),e.g=null;var r=2}else if(ns(e.h,t))n=t.D,_a(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=Qn(),tt(r,new fa(r,n)),rr(e)}else Ua(e);else if(s=t.o,s==3||s==0&&0<e.pa||!(r==1&&Qh(e,t)||r==2&&Vs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Bt(e,5);break;case 4:Bt(e,10);break;case 3:Bt(e,6);break;default:Bt(e,2)}}}function qa(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Bt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=st(e.kb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||kn(n,"https"),Zn(n)),Hh(n.toString(),r)}else ct(2);e.G=0,e.l&&e.l.va(t),Ha(e),Fa(e)}b.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Ha(e){if(e.G=0,e.la=[],e.l){const t=xa(e.h);(t.length!=0||e.i.length!=0)&&(Li(e.la,t),Li(e.la,e.i),e.h.i.length=0,ws(e.i),e.i.length=0),e.l.ua()}}function Ka(e,t,n){var r=n instanceof $t?Ct(n):new $t(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),_n(r,r.m);else{var s=A.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new $t(null,void 0);r&&kn(i,r),t&&(i.g=t),s&&_n(i,s),n&&(i.l=n),r=i}return n=e.D,t=e.za,n&&t&&B(r,n,t),B(r,"VER",e.ma),rn(e,r),r}function za(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new q(new en({jb:!0})):new q(e.ra),t.Ka(e.H),t}function Ga(){}b=Ga.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Ra=function(){};function Nn(){if(oe&&!(10<=Number(dh)))throw Error("Environmental error: no available transport.")}Nn.prototype.g=function(e,t){return new dt(e,t)};function dt(e,t){Y.call(this),this.g=new Va(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Cn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Cn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new pe(this)}et(dt,Y);dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ct(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Ka(e,null,e.V),rr(e)};dt.prototype.close=function(){Ps(this.g)};dt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ds(e),e=n);t.i.push(new Uh(t.ab++,e)),t.G==3&&rr(t)};dt.prototype.M=function(){this.g.l=null,delete this.j,Ps(this.g),delete this.g,dt.X.M.call(this)};function Wa(e){xs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}et(Wa,xs);function Qa(){Ns.call(this),this.status=1}et(Qa,Ns);function pe(e){this.g=e}et(pe,Ga);pe.prototype.xa=function(){tt(this.g,"a")};pe.prototype.wa=function(e){tt(this.g,new Wa(e))};pe.prototype.va=function(e){tt(this.g,new Qa)};pe.prototype.ua=function(){tt(this.g,"b")};Nn.prototype.createWebChannel=Nn.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;Yn.NO_ERROR=0;Yn.TIMEOUT=8;Yn.HTTP_ERROR=6;ga.COMPLETE="complete";pa.EventType=Je;Je.OPEN="a";Je.CLOSE="b";Je.ERROR="c";Je.MESSAGE="d";Y.prototype.listen=Y.prototype.N;q.prototype.listenOnce=q.prototype.O;q.prototype.getLastError=q.prototype.Oa;q.prototype.getLastErrorCode=q.prototype.Ea;q.prototype.getStatus=q.prototype.aa;q.prototype.getResponseJson=q.prototype.Sa;q.prototype.getResponseText=q.prototype.fa;q.prototype.send=q.prototype.da;q.prototype.setWithCredentials=q.prototype.Ka;var Yh=function(){return new Nn},Xh=function(){return Qn()},Pr=Yn,Jh=ga,Zh=Gt,Gi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},td=en,gn=pa,ed=q;const Wi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let me="9.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new jo("@firebase/firestore");function Qi(){return Kt.logLevel}function I(e,...t){if(Kt.logLevel<=L.DEBUG){const n=t.map(Bs);Kt.debug(`Firestore (${me}): ${e}`,...n)}}function Dt(e,...t){if(Kt.logLevel<=L.ERROR){const n=t.map(Bs);Kt.error(`Firestore (${me}): ${e}`,...n)}}function rs(e,...t){if(Kt.logLevel<=L.WARN){const n=t.map(Bs);Kt.warn(`Firestore (${me}): ${e}`,...n)}}function Bs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e="Unexpected state"){const t=`FIRESTORE (${me}) INTERNAL ASSERTION FAILED: `+e;throw Dt(t),new Error(t)}function V(e,t){e||k()}function _(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends fe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class rd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sd{constructor(t){this.t=t,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=i;t.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},u=a=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>u(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?u(a):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(V(typeof r.accessToken=="string"),new Ya(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return V(t===null||typeof t=="string"),new nt(t)}}class id{constructor(t,n,r,s){this.h=t,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class od{constructor(t,n,r,s){this.h=t,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new id(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ad{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ud{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=i=>{i.error!=null&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,I("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(V(typeof n.token=="string"),this.A=n.token,new ad(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=cd(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function P(e,t){return e<t?-1:e>t?1:0}function ae(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return z.fromMillis(Date.now())}static fromDate(t){return z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new z(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new z(0,0))}static max(){return new x(new z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,n,r){n===void 0?n=0:n>t.length&&k(),r===void 0?r=t.length-n:r>t.length-n&&k(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ue.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ue?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class j extends Ue{construct(t,n,r){return new j(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new j(n)}static emptyPath(){return new j([])}}const ld=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Ue{construct(t,n,r){return new rt(t,n,r)}static isValidIdentifier(t){return ld.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(v.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new D(v.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const a=t[s+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new D(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=a,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new D(v.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.path=t}static fromPath(t){return new C(j.fromString(t))}static fromName(t){return new C(j.fromString(t).popFirst(5))}static empty(){return new C(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&j.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return j.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new C(new j(t.slice()))}}function hd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=x.fromTimestamp(r===1e9?new z(n+1,0):new z(n,r));return new Ot(s,C.empty(),t)}function dd(e){return new Ot(e.readTime,e.key,-1)}class Ot{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ot(x.min(),C.empty(),-1)}static max(){return new Ot(x.max(),C.empty(),-1)}}function fd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=C.comparator(e.documentKey,t.documentKey),n!==0?n:P(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e){if(e.code!==v.FAILED_PRECONDITION||e.message!==gd)throw e;I("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):y.reject(n)}static resolve(t){return new y((n,r)=>{n(t)})}static reject(t){return new y((n,r)=>{r(t)})}static waitFor(t){return new y((n,r)=>{let s=0,i=0,o=!1;t.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&n()},a=>r(a))}),o=!0,i===s&&n()})}static or(t){let n=y.resolve(!1);for(const r of t)n=n.next(s=>s?y.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new y((r,s)=>{const i=t.length,o=new Array(i);let u=0;for(let a=0;a<i;a++){const c=a;n(t[c]).next(l=>{o[c]=l,++u,u===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new y((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function on(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Wt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ja(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Us.at=-1;class W{constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new W(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new W(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pn(this.root,t,this.comparator,!0)}}class pn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??J.RED,this.left=s??J.EMPTY,this.right=i??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new J(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return J.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const t=this.left.check();if(t!==this.right.check())throw k();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(e,t,n,r,s){return this}insert(e,t,n){return new J(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.comparator=t,this.data=new W(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof G)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new G(this.comparator);return n.data=t,n}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new wt([])}unionWith(t){let n=new G(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new ot(n)}static fromUint8Array(t){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(t);return new ot(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const md=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(e){if(V(!!e),typeof e=="string"){let t=0;const n=md.exec(e);if(V(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:K(e.seconds),nanos:K(e.nanos)}}function K(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ue(e){return typeof e=="string"?ot.fromBase64String(e):ot.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tu(e){const t=e.mapValue.fields.__previous_value__;return Za(t)?tu(t):t}function $e(e){const t=Rt(e.mapValue.fields.__local_write_time__.timestampValue);return new z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n,r,s,i,o,u,a){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.useFetchStreams=a}}class je{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof je&&t.projectId===this.projectId&&t.database===this.database}}function sr(e){return e==null}function On(e){return e===0&&1/e==-1/0}function vd(e){return typeof e=="number"&&Number.isInteger(e)&&!On(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Za(e)?4:wd(e)?9007199254740991:10:k()}function Et(e,t){if(e===t)return!0;const n=zt(e);if(n!==zt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return $e(e).isEqual($e(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Rt(r.timestampValue),o=Rt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return ue(r.bytesValue).isEqual(ue(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return K(r.geoPointValue.latitude)===K(s.geoPointValue.latitude)&&K(r.geoPointValue.longitude)===K(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return K(r.integerValue)===K(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=K(r.doubleValue),o=K(s.doubleValue);return i===o?On(i)===On(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ae(e.arrayValue.values||[],t.arrayValue.values||[],Et);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Yi(i)!==Yi(o))return!1;for(const u in i)if(i.hasOwnProperty(u)&&(o[u]===void 0||!Et(i[u],o[u])))return!1;return!0}(e,t);default:return k()}}function qe(e,t){return(e.values||[]).find(n=>Et(n,t))!==void 0}function ce(e,t){if(e===t)return 0;const n=zt(e),r=zt(t);if(n!==r)return P(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(s,i){const o=K(s.integerValue||s.doubleValue),u=K(i.integerValue||i.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1}(e,t);case 3:return Ji(e.timestampValue,t.timestampValue);case 4:return Ji($e(e),$e(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(s,i){const o=ue(s),u=ue(i);return o.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,i){const o=s.split("/"),u=i.split("/");for(let a=0;a<o.length&&a<u.length;a++){const c=P(o[a],u[a]);if(c!==0)return c}return P(o.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,i){const o=P(K(s.latitude),K(i.latitude));return o!==0?o:P(K(s.longitude),K(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,i){const o=s.values||[],u=i.values||[];for(let a=0;a<o.length&&a<u.length;++a){const c=ce(o[a],u[a]);if(c)return c}return P(o.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,i){if(s===mn.mapValue&&i===mn.mapValue)return 0;if(s===mn.mapValue)return 1;if(i===mn.mapValue)return-1;const o=s.fields||{},u=Object.keys(o),a=i.fields||{},c=Object.keys(a);u.sort(),c.sort();for(let l=0;l<u.length&&l<c.length;++l){const h=P(u[l],c[l]);if(h!==0)return h;const d=ce(o[u[l]],a[c[l]]);if(d!==0)return d}return P(u.length,c.length)}(e.mapValue,t.mapValue);default:throw k()}}function Ji(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return P(e,t);const n=Rt(e),r=Rt(t),s=P(n.seconds,r.seconds);return s!==0?s:P(n.nanos,r.nanos)}function re(e){return ss(e)}function ss(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const s=Rt(r);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ue(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,C.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=ss(o);return s+"]"}(e.arrayValue):"mapValue"in e?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const u of s)o?o=!1:i+=",",i+=`${u}:${ss(r.fields[u])}`;return i+"}"}(e.mapValue):k();var t,n}function is(e){return!!e&&"integerValue"in e}function $s(e){return!!e&&"arrayValue"in e}function Zi(e){return!!e&&"nullValue"in e}function to(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function yn(e){return!!e&&"mapValue"in e}function ke(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Wt(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ke(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ke(e.arrayValue.values[n]);return t}return Object.assign({},e)}function wd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.value=t}static empty(){return new ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!yn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ke(n)}setAll(t){let n=rt.emptyPath(),r={},s=[];t.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const a=this.getFieldsMap(n);this.applyChanges(a,r,s),r={},s=[],n=u.popLast()}o?r[u.lastSegment()]=ke(o):s.push(u.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());yn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Et(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];yn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Wt(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ht(ke(this.value))}}function eu(e){const t=[];return Wt(e.fields,(n,r)=>{const s=new rt([n]);if(yn(r)){const i=eu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n,r,s,i,o){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Z(t,0,x.min(),x.min(),ht.empty(),0)}static newFoundDocument(t,n,r){return new Z(t,1,n,x.min(),r,0)}static newNoDocument(t,n){return new Z(t,2,n,x.min(),ht.empty(),0)}static newUnknownDocument(t,n){return new Z(t,3,n,x.min(),ht.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n=null,r=[],s=[],i=null,o=null,u=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.ht=null}}function eo(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Ed(e,t,n,r,s,i,o)}function js(e){const t=_(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+re(s.value);var s}).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>re(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>re(r)).join(",")),t.ht=n}return t.ht}function Td(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${re(r.value)}`;var r}).join(", ")}]`),sr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>re(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>re(n)).join(",")),`Target(${t})`}function qs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!_d(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Et(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ro(e.startAt,t.startAt)&&ro(e.endAt,t.endAt)}function os(e){return C.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class lt extends class{}{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,r):new bd(t,n,r):n==="array-contains"?new Cd(t,r):n==="in"?new Dd(t,r):n==="not-in"?new Ad(t,r):n==="array-contains-any"?new kd(t,r):new lt(t,n,r)}static lt(t,n,r){return n==="in"?new Id(t,r):new Sd(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ce(n,this.value)):n!==null&&zt(this.value)===zt(n)&&this.ft(ce(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return k()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bd extends lt{constructor(t,n,r){super(t,n,r),this.key=C.fromName(r.referenceValue)}matches(t){const n=C.comparator(t.key,this.key);return this.ft(n)}}class Id extends lt{constructor(t,n){super(t,"in",n),this.keys=nu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Sd extends lt{constructor(t,n){super(t,"not-in",n),this.keys=nu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function nu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>C.fromName(r.referenceValue))}class Cd extends lt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return $s(n)&&qe(n.arrayValue,this.value)}}class Dd extends lt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&qe(this.value.arrayValue,n)}}class Ad extends lt{constructor(t,n){super(t,"not-in",n)}matches(t){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!qe(this.value.arrayValue,n)}}class kd extends lt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!$s(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qe(this.value.arrayValue,r))}}class Rn{constructor(t,n){this.position=t,this.inclusive=n}}class _e{constructor(t,n="asc"){this.field=t,this.dir=n}}function _d(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function no(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=C.comparator(C.fromName(o.referenceValue),n.key):r=ce(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ro(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Et(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,n=null,r=[],s=[],i=null,o="F",u=null,a=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function xd(e,t,n,r,s,i,o,u){return new ir(e,t,n,r,s,i,o,u)}function Hs(e){return new ir(e)}function so(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Nd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Od(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Rd(e){return e.collectionGroup!==null}function He(e){const t=_(e);if(t._t===null){t._t=[];const n=Od(t),r=Nd(t);if(n!==null&&r===null)n.isKeyField()||t._t.push(new _e(n)),t._t.push(new _e(rt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new _e(rt.keyField(),i))}}}return t._t}function At(e){const t=_(e);if(!t.wt)if(t.limitType==="F")t.wt=eo(t.path,t.collectionGroup,He(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of He(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new _e(i.field,o))}const r=t.endAt?new Rn(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Rn(t.startAt.position,t.startAt.inclusive):null;t.wt=eo(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.wt}function as(e,t,n){return new ir(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function or(e,t){return qs(At(e),At(t))&&e.limitType===t.limitType}function ru(e){return`${js(At(e))}|lt:${e.limitType}`}function us(e){return`Query(target=${Td(At(e))}; limitType=${e.limitType})`}function Ks(e,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):C.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(e,t)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(s,i,o){const u=no(s,i,o);return s.inclusive?u<=0:u<0}(n.startAt,He(n),r)||n.endAt&&!function(s,i,o){const u=no(s,i,o);return s.inclusive?u>=0:u>0}(n.endAt,He(n),r))}(e,t)}function Md(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function su(e){return(t,n)=>{let r=!1;for(const s of He(e)){const i=Ld(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ld(e,t,n){const r=e.field.isKeyField()?C.comparator(t.key,n.key):function(s,i,o){const u=i.data.field(s),a=o.data.field(s);return u!==null&&a!==null?ce(u,a):k()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return k()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:On(t)?"-0":t}}function ou(e){return{integerValue:""+e}}function au(e,t){return vd(t)?ou(t):iu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this._=void 0}}function Pd(e,t,n){return e instanceof Mn?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,t):e instanceof Ke?cu(e,t):e instanceof ze?lu(e,t):function(r,s){const i=uu(r,s),o=io(i)+io(r.yt);return is(i)&&is(r.yt)?ou(o):iu(r.It,o)}(e,t)}function Vd(e,t,n){return e instanceof Ke?cu(e,t):e instanceof ze?lu(e,t):n}function uu(e,t){return e instanceof Ge?is(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class Mn extends ar{}class Ke extends ar{constructor(t){super(),this.elements=t}}function cu(e,t){const n=hu(t);for(const r of e.elements)n.some(s=>Et(s,r))||n.push(r);return{arrayValue:{values:n}}}class ze extends ar{constructor(t){super(),this.elements=t}}function lu(e,t){let n=hu(t);for(const r of e.elements)n=n.filter(s=>!Et(s,r));return{arrayValue:{values:n}}}class Ge extends ar{constructor(t,n){super(),this.It=t,this.yt=n}}function io(e){return K(e.integerValue||e.doubleValue)}function hu(e){return $s(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,n){this.field=t,this.transform=n}}function Bd(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Ke&&r instanceof Ke||n instanceof ze&&r instanceof ze?ae(n.elements,r.elements,Et):n instanceof Ge&&r instanceof Ge?Et(n.yt,r.yt):n instanceof Mn&&r instanceof Mn}(e.transform,t.transform)}class Ud{constructor(t,n){this.version=t,this.transformResults=n}}class bt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ur{}function du(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new gu(e.key,bt.none()):new cr(e.key,e.data,bt.none());{const n=e.data,r=ht.empty();let s=new G(rt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qt(e.key,r,new wt(s.toArray()),bt.none())}}function $d(e,t,n){e instanceof cr?function(r,s,i){const o=r.value.clone(),u=ao(r.fieldTransforms,s,i.transformResults);o.setAll(u),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Qt?function(r,s,i){if(!vn(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=ao(r.fieldTransforms,s,i.transformResults),u=s.data;u.setAll(fu(r)),u.setAll(o),s.convertToFoundDocument(i.version,u).setHasCommittedMutations()}(e,t,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function xe(e,t,n,r){return e instanceof cr?function(s,i,o,u){if(!vn(s.precondition,i))return o;const a=s.value.clone(),c=uo(s.fieldTransforms,u,i);return a.setAll(c),i.convertToFoundDocument(i.version,a).setHasLocalMutations(),null}(e,t,n,r):e instanceof Qt?function(s,i,o,u){if(!vn(s.precondition,i))return o;const a=uo(s.fieldTransforms,u,i),c=i.data;return c.setAll(fu(s)),c.setAll(a),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(s,i,o){return vn(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function jd(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=uu(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function oo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ae(n,r,(s,i)=>Bd(s,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class cr extends ur{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends ur{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ao(e,t,n){const r=new Map;V(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,u=t.data.field(i.field);r.set(i.field,Vd(o,u,n[s]))}return r}function uo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Pd(i,o,t))}return r}class gu extends ur{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qd extends ur{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H,O;function Kd(e){switch(e){default:return k();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function pu(e){if(e===void 0)return Dt("GRPC error has no .code"),v.UNKNOWN;switch(e){case H.OK:return v.OK;case H.CANCELLED:return v.CANCELLED;case H.UNKNOWN:return v.UNKNOWN;case H.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case H.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case H.INTERNAL:return v.INTERNAL;case H.UNAVAILABLE:return v.UNAVAILABLE;case H.UNAUTHENTICATED:return v.UNAUTHENTICATED;case H.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case H.NOT_FOUND:return v.NOT_FOUND;case H.ALREADY_EXISTS:return v.ALREADY_EXISTS;case H.PERMISSION_DENIED:return v.PERMISSION_DENIED;case H.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case H.ABORTED:return v.ABORTED;case H.OUT_OF_RANGE:return v.OUT_OF_RANGE;case H.UNIMPLEMENTED:return v.UNIMPLEMENTED;case H.DATA_LOSS:return v.DATA_LOSS;default:return k()}}(O=H||(H={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Wt(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Ja(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new W(C.comparator);function kt(){return zd}const mu=new W(C.comparator);function Ce(...e){let t=mu;for(const n of e)t=t.insert(n.key,n);return t}function yu(e){let t=mu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ut(){return Ne()}function vu(){return Ne()}function Ne(){return new ye(e=>e.toString(),(e,t)=>e.isEqual(t))}const Gd=new W(C.comparator),Wd=new G(C.comparator);function N(...e){let t=Wd;for(const n of e)t=t.add(n);return t}const Qd=new G(P);function wu(){return Qd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new lr(x.min(),s,wu(),kt(),N())}}class an{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new an(r,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,n,r,s){this.Tt=t,this.removedTargetIds=n,this.key=r,this.Et=s}}class Eu{constructor(t,n){this.targetId=t,this.At=n}}class Tu{constructor(t,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class co{constructor(){this.Rt=0,this.bt=ho(),this.Pt=ot.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=N(),n=N(),r=N();return this.bt.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:k()}}),new an(this.Pt,this.vt,t,n,r)}Nt(){this.Vt=!1,this.bt=ho()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Yd{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=kt(),this.qt=lo(),this.Kt=new G(P)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const r=this.zt(n);switch(t.state){case 0:this.Ht(n)&&r.Ct(t.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(t.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(t.resumeToken));break;default:k()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(t){const n=t.targetId,r=t.At.count,s=this.Xt(n);if(s){const i=s.target;if(os(i))if(r===0){const o=new C(i.path);this.jt(n,o,Z.newNoDocument(o,x.min()))}else V(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((i,o)=>{const u=this.Xt(o);if(u){if(i.current&&os(u.target)){const a=new C(u.target.path);this.Ut.get(a)!==null||this.ee(o,a)||this.jt(o,a,Z.newNoDocument(a,t))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=N();this.qt.forEach((i,o)=>{let u=!0;o.forEachWhile(a=>{const c=this.Xt(a);return!c||c.purpose===2||(u=!1,!1)}),u&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const s=new lr(t,n,this.Kt,this.Ut,r);return this.Ut=kt(),this.qt=lo(),this.Kt=new G(P),s}Qt(t,n){if(!this.Ht(t))return;const r=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,r){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let n=this.Lt.get(t);return n||(n=new co,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new G(P),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||I("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new co),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function lo(){return new W(C.comparator)}function ho(){return new W(C.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Zd{constructor(t,n){this.databaseId=t,this.gt=n}}function Ln(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bu(e,t){return e.gt?t.toBase64():t.toUint8Array()}function tf(e,t){return Ln(e,t.toTimestamp())}function It(e){return V(!!e),x.fromTimestamp(function(t){const n=Rt(t);return new z(n.seconds,n.nanos)}(e))}function zs(e,t){return function(n){return new j(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Iu(e){const t=j.fromString(e);return V(Du(t)),t}function cs(e,t){return zs(e.databaseId,t.path)}function Vr(e,t){const n=Iu(t);if(n.get(1)!==e.databaseId.projectId)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new C(Su(n))}function ls(e,t){return zs(e.databaseId,t)}function ef(e){const t=Iu(e);return t.length===4?j.emptyPath():Su(t)}function hs(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Su(e){return V(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function fo(e,t,n){return{name:cs(e,t),fields:n.value.mapValue.fields}}function nf(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(a){return a==="NO_CHANGE"?0:a==="ADD"?1:a==="REMOVE"?2:a==="CURRENT"?3:a==="RESET"?4:k()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(a,c){return a.gt?(V(c===void 0||typeof c=="string"),ot.fromBase64String(c||"")):(V(c===void 0||c instanceof Uint8Array),ot.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,u=o&&function(a){const c=a.code===void 0?v.UNKNOWN:pu(a.code);return new D(c,a.message||"")}(o);n=new Tu(r,s,i,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vr(e,r.document.name),i=It(r.document.updateTime),o=new ht({mapValue:{fields:r.document.fields}}),u=Z.newFoundDocument(s,i,o),a=r.targetIds||[],c=r.removedTargetIds||[];n=new wn(a,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Vr(e,r.document),i=r.readTime?It(r.readTime):x.min(),o=Z.newNoDocument(s,i),u=r.removedTargetIds||[];n=new wn([],u,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Vr(e,r.document),i=r.removedTargetIds||[];n=new wn([],i,s,null)}else{if(!("filter"in t))return k();{t.filter;const r=t.filter;r.targetId;const s=r.count||0,i=new Hd(s),o=r.targetId;n=new Eu(o,i)}}return n}function rf(e,t){let n;if(t instanceof cr)n={update:fo(e,t.key,t.value)};else if(t instanceof gu)n={delete:cs(e,t.key)};else if(t instanceof Qt)n={update:fo(e,t.key,t.data),updateMask:gf(t.fieldMask)};else{if(!(t instanceof qd))return k();n={verify:cs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Mn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ke)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ze)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ge)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw k()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:tf(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:k()}(e,t.precondition)),n}function sf(e,t){return e&&e.length>0?(V(t!==void 0),e.map(n=>function(r,s){let i=r.updateTime?It(r.updateTime):It(s);return i.isEqual(x.min())&&(i=It(s)),new Ud(i,r.transformResults||[])}(n,t))):[]}function of(e,t){return{documents:[ls(e,t.path)]}}function af(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=ls(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ls(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(h){if(h.op==="=="){if(to(h.value))return{unaryFilter:{field:Zt(h.field),op:"IS_NAN"}};if(Zi(h.value))return{unaryFilter:{field:Zt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(to(h.value))return{unaryFilter:{field:Zt(h.field),op:"IS_NOT_NAN"}};if(Zi(h.value))return{unaryFilter:{field:Zt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(h.field),op:hf(h.op),value:h.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Zt(l.field),direction:lf(l.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.gt||sr(c)?c:{value:c}}(e,t.limit);var u;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(t.endAt)),n}function uf(e){let t=ef(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){V(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=Cu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new _e(ee(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let u=null;n.limit&&(u=function(l){let h;return h=typeof l=="object"?l.value:l,sr(h)?null:h}(n.limit));let a=null;n.startAt&&(a=function(l){const h=!!l.before,d=l.values||[];return new Rn(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,d=l.values||[];return new Rn(d,h)}(n.endAt)),xd(t,s,o,i,u,"F",a,c)}function cf(e,t){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return k()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Cu(e){return e?e.unaryFilter!==void 0?[ff(e)]:e.fieldFilter!==void 0?[df(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Cu(t)).reduce((t,n)=>t.concat(n)):k():[]}function lf(e){return Xd[e]}function hf(e){return Jd[e]}function Zt(e){return{fieldPath:e.canonicalString()}}function ee(e){return rt.fromServerFormat(e.fieldPath)}function df(e){return lt.create(ee(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(e.fieldFilter.op),e.fieldFilter.value)}function ff(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ee(e.unaryFilter.field);return lt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ee(e.unaryFilter.field);return lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ee(e.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ee(e.unaryFilter.field);return lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return k()}}function gf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Du(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&$d(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=xe(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=xe(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=vu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=n.has(s.key)?null:u;const a=du(o,u);a!==null&&r.set(s.key,a),o.isValidDocument()||o.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(n,r)=>oo(n,r))&&ae(this.baseMutations,t.baseMutations,(n,r)=>oo(n,r))}}class Gs{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){V(t.mutations.length===r.length);let s=Gd;const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gs(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n,r,s,i=x.min(),o=x.min(),u=ot.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this.re=t}}function vf(e){const t=uf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?as(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Ye=new Ef}addToCollectionParentIndex(t,n){return this.Ye.add(n),y.resolve()}getCollectionParents(t,n){return y.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return y.resolve()}deleteFieldIndex(t,n){return y.resolve()}getDocumentsMatchingTarget(t,n){return y.resolve(null)}getIndexType(t,n){return y.resolve(0)}getFieldIndexes(t,n){return y.resolve([])}getNextCollectionGroupToUpdate(t){return y.resolve(null)}getMinOffset(t,n){return y.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,n){return y.resolve(Ot.min())}updateCollectionGroup(t,n,r){return y.resolve()}updateIndexEntries(t,n){return y.resolve()}}class Ef{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new G(j.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new G(j.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new le(0)}static vn(){return new le(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.changes=new ye(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.getBaseDocument(t,n,r))).next(s=>(r!==null&&xe(r.mutation,s,wt.empty(),z.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,N()).next(()=>r))}getLocalViewOfDocuments(t,n,r=N()){const s=Ut();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Ce();return i.forEach((u,a)=>{o=o.insert(u,a.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ut();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,N()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,u)=>{n.set(o,u)})})}computeViews(t,n,r,s){let i=kt();const o=Ne(),u=Ne();return n.forEach((a,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof Qt)?i=i.insert(c.key,c):l!==void 0&&(o.set(c.key,l.mutation.getFieldMask()),xe(l.mutation,c,l.mutation.getFieldMask(),z.now()))}),this.recalculateAndSaveOverlays(t,i).next(a=>(a.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return u.set(c,new bf(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),u))}recalculateAndSaveOverlays(t,n){const r=Ne();let s=new W((o,u)=>o-u),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const u of o)u.keys().forEach(a=>{const c=n.get(a);if(c===null)return;let l=r.get(a)||wt.empty();l=u.applyToLocalView(c,l),r.set(a,l);const h=(s.get(u.batchId)||N()).add(a);s=s.insert(u.batchId,h)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const a=u.getNext(),c=a.key,l=a.value,h=vu();l.forEach(d=>{if(!i.has(d)){const g=du(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return C.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Rd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):y.resolve(Ut());let u=-1,a=i;return o.next(c=>y.forEach(c,(l,h)=>(u<h.largestBatchId&&(u=h.largestBatchId),i.get(l)?y.resolve():this.getBaseDocument(t,l,h).next(d=>{a=a.insert(l,d)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,a,c,N())).next(l=>({batchId:u,changes:yu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new C(n)).next(r=>{let s=Ce();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=Ce();return this.indexManager.getCollectionParents(t,s).next(o=>y.forEach(o,u=>{const a=function(c,l){return new ir(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,r).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(t,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId))).next(i=>{i.forEach((u,a)=>{const c=a.getKey();s.get(c)===null&&(s=s.insert(c,Z.newInvalidDocument(c)))});let o=Ce();return s.forEach((u,a)=>{const c=i.get(u);c!==void 0&&xe(c.mutation,a,wt.empty(),z.now()),Ks(n,a)&&(o=o.insert(u,a))}),o})}getBaseDocument(t,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):y.resolve(Z.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:It(r.createTime)}),y.resolve()}getNamedQuery(t,n){return y.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(r){return{name:r.name,query:vf(r.bundledQuery),readTime:It(r.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.overlays=new W(C.comparator),this.es=new Map}getOverlay(t,n){return y.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ut();return y.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ue(t,n,i)}),y.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),y.resolve()}getOverlaysForCollection(t,n,r){const s=Ut(),i=n.length+1,o=new C(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const a=u.getNext().value,c=a.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&a.largestBatchId>r&&s.set(a.getKey(),a)}return y.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new W((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=Ut(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const u=Ut(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((c,l)=>u.set(c,l)),!(u.size()>=s)););return y.resolve(u)}ue(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mf(n,r));let i=this.es.get(n);i===void 0&&(i=N(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.ns=new G(Q.ss),this.rs=new G(Q.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const r=new Q(t,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.cs(new Q(t,n))}hs(t,n){t.forEach(r=>this.removeReference(r,n))}ls(t){const n=new C(new j([])),r=new Q(n,t),s=new Q(n,t+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new C(new j([])),r=new Q(n,t),s=new Q(n,t+1);let i=N();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Q(t,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Q{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return C.comparator(t.key,n.key)||P(t._s,n._s)}static os(t,n){return P(t._s,n._s)||C.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new G(Q.ss)}checkEmpty(t){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pf(i,n,r,s);this.mutationQueue.push(o);for(const u of s)this.gs=this.gs.add(new Q(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return y.resolve(o)}lookupMutationBatch(t,n){return y.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Q(n,0),s=new Q(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const u=this.ys(o._s);i.push(u)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new G(P);return n.forEach(s=>{const i=new Q(s,0),o=new Q(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],u=>{r=r.add(u._s)})}),y.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;C.isDocumentKey(i)||(i=i.child(""));const o=new Q(new C(i),0);let u=new G(P);return this.gs.forEachWhile(a=>{const c=a.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(u=u.add(a._s)),!0)},o),y.resolve(this.Is(u))}Is(t){const n=[];return t.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){V(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return y.forEach(n.mutations,s=>{const i=new Q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.gs=r})}An(t){}containsKey(t,n){const r=new Q(n,0),s=this.gs.firstAfterOrEqual(r);return y.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,y.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.Es=t,this.docs=new W(C.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(t,n){let r=kt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Z.newInvalidDocument(s))}),y.resolve(r)}getAllFromCollection(t,n,r){let s=kt();const i=new C(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:u,value:{document:a}}=o.getNext();if(!n.isPrefixOf(u.path))break;u.path.length>n.length+1||fd(dd(a),r)<=0||(s=s.insert(a.key,a.mutableCopy()))}return y.resolve(s)}getAllFromCollectionGroup(t,n,r,s){k()}As(t,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new kf(this)}getSize(t){return y.resolve(this.size)}}class kf extends Tf{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(r)}),y.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.persistence=t,this.Rs=new ye(n=>js(n),qs),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ws,this.targetCount=0,this.vs=le.Pn()}forEachTarget(t,n){return this.Rs.forEach((r,s)=>n(s)),y.resolve()}getLastRemoteSnapshotVersion(t){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return y.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),y.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new le(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,y.resolve()}updateTargetData(t,n){return this.Dn(n),y.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Rs.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(t){return y.resolve(this.targetCount)}getTargetData(t,n){const r=this.Rs.get(n)||null;return y.resolve(r)}addMatchingKeys(t,n,r){return this.Ps.us(n,r),y.resolve()}removeMatchingKeys(t,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),y.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ps.ds(n);return y.resolve(r)}containsKey(t,n){return y.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Us(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new _f(this),this.indexManager=new wf,this.remoteDocumentCache=function(r){return new Af(r)}(r=>this.referenceDelegate.xs(r)),this.It=new yf(n),this.Ns=new Sf(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Cf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Vs[t.toKey()];return r||(r=new Df(n,this.referenceDelegate),this.Vs[t.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,r){I("MemoryPersistence","Starting transaction:",t);const s=new Nf(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(t,n){return y.or(Object.values(this.Vs).map(r=>()=>r.containsKey(t,n)))}}class Nf extends pd{constructor(t){super(),this.currentSequenceNumber=t}}class Qs{constructor(t){this.persistence=t,this.Fs=new Ws,this.$s=null}static Bs(t){return new Qs(t)}get Ls(){if(this.$s)return this.$s;throw k()}addReference(t,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),y.resolve()}removeReference(t,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),y.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),y.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Ls,r=>{const s=C.fromPath(r);return this.Us(t,s).next(i=>{i||n.removeEntry(s,x.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return y.or([()=>y.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Si=r,this.Di=s}static Ci(t,n){let r=N(),s=N();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ys(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,r,s){return this.ki(t,n).next(i=>i||this.Oi(t,n,s,r)).next(i=>i||this.Mi(t,n))}ki(t,n){if(so(n))return y.resolve(null);let r=At(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=as(n,null,"F"),r=At(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=N(...i);return this.Ni.getDocuments(t,o).next(u=>this.indexManager.getMinOffset(t,r).next(a=>{const c=this.Fi(n,u);return this.$i(n,c,o,a.readTime)?this.ki(t,as(n,null,"F")):this.Bi(t,c,n,a)}))})))}Oi(t,n,r,s){return so(n)||s.isEqual(x.min())?this.Mi(t,n):this.Ni.getDocuments(t,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(t,n):(Qi()<=L.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),us(n)),this.Bi(t,o,n,hd(s,-1)))})}Fi(t,n){let r=new G(su(t));return n.forEach((s,i)=>{Ks(t,i)&&(r=r.add(i))}),r}$i(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(t,n){return Qi()<=L.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",us(n)),this.Ni.getDocumentsMatchingQuery(t,n,Ot.min())}Bi(t,n,r,s){return this.Ni.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,n,r,s){this.persistence=t,this.Li=n,this.It=s,this.Ui=new W(P),this.qi=new ye(i=>js(i),qs),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(r)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new If(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function Mf(e,t,n,r){return new Rf(e,t,n,r)}async function Au(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],u=[];let a=N();for(const c of s){o.push(c.batchId);for(const l of c.mutations)a=a.add(l.key)}for(const c of i){u.push(c.batchId);for(const l of c.mutations)a=a.add(l.key)}return n.localDocuments.getDocuments(r,a).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:u}))})})}function Lf(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,u,a,c){const l=a.batch,h=l.keys();let d=y.resolve();return h.forEach(g=>{d=d.next(()=>c.getEntry(u,g)).next(p=>{const f=a.docVersions.get(g);V(f!==null),p.version.compareTo(f)<0&&(l.applyToRemoteDocument(p,a),p.isValidDocument()&&(p.setReadTime(a.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(u,l))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let u=N();for(let a=0;a<o.mutationResults.length;++a)o.mutationResults[a].transformResults.length>0&&(u=u.add(o.batch.mutations[a].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function ku(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Pf(e,t){const n=_(e),r=t.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const u=[];t.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;u.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?g=g.withResumeToken(ot.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(h,g),function(p,f,m){return p.resumeToken.approximateByteSize()===0||f.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,g,l)&&u.push(n.Cs.updateTargetData(i,g))});let a=kt(),c=N();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),u.push(Vf(i,o,t.documentUpdates).next(l=>{a=l.Wi,c=l.zi})),!r.isEqual(x.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(l)}return y.waitFor(u).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,a,c)).next(()=>a)}).then(i=>(n.Ui=s,i))}function Vf(e,t,n){let r=N(),s=N();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=kt();return n.forEach((u,a)=>{const c=i.get(u);a.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(u)),a.isNoDocument()&&a.version.isEqual(x.min())?(t.removeEntry(u,a.readTime),o=o.insert(u,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(a),o=o.insert(u,a)):I("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",a.version)}),{Wi:o,zi:s}})}function Ff(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Bf(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,t).next(i=>i?(s=i,y.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new qt(t,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(t,r.targetId)),r})}async function ds(e,t,n){const r=_(e),s=r.Ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!on(o))throw o;I("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ui=r.Ui.remove(t),r.qi.delete(s.target)}function go(e,t,n){const r=_(e);let s=x.min(),i=N();return r.persistence.runTransaction("Execute query","readonly",o=>function(u,a,c){const l=_(u),h=l.qi.get(c);return h!==void 0?y.resolve(l.Ui.get(h)):l.Cs.getTargetData(a,c)}(r,o,At(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,u.targetId).next(a=>{i=a})}).next(()=>r.Li.getDocumentsMatchingQuery(o,t,n?s:x.min(),n?i:N())).next(u=>(Uf(r,Md(t),u),{documents:u,Hi:i})))}function Uf(e,t,n){let r=e.Ki.get(t)||x.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Ki.set(t,r)}class po{constructor(){this.activeTargetIds=wu()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $f{constructor(){this.Lr=new po,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,r){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new po,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,r,s,i){const o=this.ho(t,n);I("RestConnection","Sending: ",o,r);const u={};return this.lo(u,s,i),this.fo(t,o,u,r).then(a=>(I("RestConnection","Received: ",a),a),a=>{throw rs("RestConnection",`${t} failed with error: `,a,"url: ",o,"request:",r),a})}_o(t,n,r,s,i,o){return this.ao(t,n,r,s,i)}lo(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+me,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}ho(t,n){const r=qf[t];return`${this.oo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,r,s){return new Promise((i,o)=>{const u=new ed;u.setWithCredentials(!0),u.listenOnce(Jh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pr.NO_ERROR:const c=u.getResponseJson();I("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Pr.TIMEOUT:I("Connection",'RPC "'+t+'" timed out'),o(new D(v.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const l=u.getStatus();if(I("Connection",'RPC "'+t+'" failed with status:',l,"response text:",u.getResponseText()),l>0){const h=u.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(p)>=0?p:v.UNKNOWN}(h.status);o(new D(d,h.message))}else o(new D(v.UNKNOWN,"Server responded with status "+u.getStatus()))}else o(new D(v.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{I("Connection",'RPC "'+t+'" completed.')}});const a=JSON.stringify(s);u.send(n,"POST",a,r,15)})}wo(t,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Yh(),o=Xh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new td({})),this.lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const a=s.join("");I("Connection","Creating WebChannel: "+a,u);const c=i.createWebChannel(a,u);let l=!1,h=!1;const d=new Hf({Hr:p=>{h?I("Connection","Not sending because WebChannel is closed:",p):(l||(I("Connection","Opening WebChannel transport."),c.open(),l=!0),I("Connection","WebChannel sending:",p),c.send(p))},Jr:()=>c.close()}),g=(p,f,m)=>{p.listen(f,E=>{try{m(E)}catch(w){setTimeout(()=>{throw w},0)}})};return g(c,gn.EventType.OPEN,()=>{h||I("Connection","WebChannel transport opened.")}),g(c,gn.EventType.CLOSE,()=>{h||(h=!0,I("Connection","WebChannel transport closed"),d.io())}),g(c,gn.EventType.ERROR,p=>{h||(h=!0,rs("Connection","WebChannel transport errored:",p),d.io(new D(v.UNAVAILABLE,"The operation could not be completed")))}),g(c,gn.EventType.MESSAGE,p=>{var f;if(!h){const m=p.data[0];V(!!m);const E=m,w=E.error||((f=E[0])===null||f===void 0?void 0:f.error);if(w){I("Connection","WebChannel received error:",w);const T=w.status;let M=function(R){const X=H[R];if(X!==void 0)return pu(X)}(T),F=w.message;M===void 0&&(M=v.INTERNAL,F="Unknown error status: "+T+" with message "+w.message),h=!0,d.io(new D(M,F)),c.close()}else I("Connection","WebChannel received:",m),d.ro(m)}}),g(o,Zh.STAT_EVENT,p=>{p.stat===Gi.PROXY?I("Connection","Detected buffering proxy"):p.stat===Gi.NOPROXY&&I("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e){return new Zd(e,!0)}class _u{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&I("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,n,r,s,i,o,u,a){this.Hs=t,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new _u(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{t(()=>{const s=new D(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(t,n){const r=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return I("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zf extends xu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=nf(this.It,t),r=function(s){if(!("targetChange"in s))return x.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?x.min():i.readTime?It(i.readTime):x.min()}(t);return this.listener.Wo(n,r)}zo(t){const n={};n.database=hs(this.It),n.addTarget=function(s,i){let o;const u=i.target;return o=os(u)?{documents:of(s,u)}:{query:af(s,u)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=bu(s,i.resumeToken):i.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Ln(s,i.snapshotVersion.toTimestamp())),o}(this.It,t);const r=cf(this.It,t);r&&(n.labels=r),this.Bo(n)}Ho(t){const n={};n.database=hs(this.It),n.removeTarget=t,this.Bo(n)}}class Gf extends xu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(V(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=sf(t.writeResults,t.commitTime),r=It(t.commitTime);return this.listener.Zo(r,n)}return V(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=hs(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>rf(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(v.UNKNOWN,s.toString())})}_o(t,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(v.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Qf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dt(n),this.ou=!1):I("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Yt(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(u){const a=_(u);a._u.add(4),await un(a),a.gu.set("Unknown"),a._u.delete(4),await dr(a)}(this))})}),this.gu=new Qf(r,s)}}async function dr(e){if(Yt(e))for(const t of e.wu)await t(!0)}async function un(e){for(const t of e.wu)await t(!1)}function Nu(e,t){const n=_(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Zs(n)?Js(n):ve(n).ko()&&Xs(n,t))}function Ou(e,t){const n=_(e),r=ve(n);n.du.delete(t),r.ko()&&Ru(n,t),n.du.size===0&&(r.ko()?r.Fo():Yt(n)&&n.gu.set("Unknown"))}function Xs(e,t){e.yu.Mt(t.targetId),ve(e).zo(t)}function Ru(e,t){e.yu.Mt(t),ve(e).Ho(t)}function Js(e){e.yu=new Yd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),ve(e).start(),e.gu.uu()}function Zs(e){return Yt(e)&&!ve(e).No()&&e.du.size>0}function Yt(e){return _(e)._u.size===0}function Mu(e){e.yu=void 0}async function Xf(e){e.du.forEach((t,n)=>{Xs(e,t)})}async function Jf(e,t){Mu(e),Zs(e)?(e.gu.hu(t),Js(e)):e.gu.set("Unknown")}async function Zf(e,t,n){if(e.gu.set("Online"),t instanceof Tu&&t.state===2&&t.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(e,t)}catch(r){I("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Pn(e,r)}else if(t instanceof wn?e.yu.Gt(t):t instanceof Eu?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(x.min()))try{const r=await ku(e.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((u,a)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.du.get(a);c&&s.du.set(a,c.withResumeToken(u.resumeToken,i))}}),o.targetMismatches.forEach(u=>{const a=s.du.get(u);if(!a)return;s.du.set(u,a.withResumeToken(ot.EMPTY_BYTE_STRING,a.snapshotVersion)),Ru(s,u);const c=new qt(a.target,u,1,a.sequenceNumber);Xs(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){I("RemoteStore","Failed to raise snapshot:",r),await Pn(e,r)}}async function Pn(e,t,n){if(!on(t))throw t;e._u.add(1),await un(e),e.gu.set("Offline"),n||(n=()=>ku(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await dr(e)})}function Lu(e,t){return t().catch(n=>Pn(e,n,t))}async function fr(e){const t=_(e),n=Mt(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;tg(t);)try{const s=await Ff(t.localStore,r);if(s===null){t.fu.length===0&&n.Fo();break}r=s.batchId,eg(t,s)}catch(s){await Pn(t,s)}Pu(t)&&Vu(t)}function tg(e){return Yt(e)&&e.fu.length<10}function eg(e,t){e.fu.push(t);const n=Mt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Pu(e){return Yt(e)&&!Mt(e).No()&&e.fu.length>0}function Vu(e){Mt(e).start()}async function ng(e){Mt(e).eu()}async function rg(e){const t=Mt(e);for(const n of e.fu)t.Xo(n.mutations)}async function sg(e,t,n){const r=e.fu.shift(),s=Gs.from(r,t,n);await Lu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await fr(e)}async function ig(e,t){t&&Mt(e).Yo&&await async function(n,r){if(s=r.code,Kd(s)&&s!==v.ABORTED){const i=n.fu.shift();Mt(n).Mo(),await Lu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await fr(n)}var s}(e,t),Pu(e)&&Vu(e)}async function yo(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const r=Yt(n);n._u.add(3),await un(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await dr(n)}async function og(e,t){const n=_(e);t?(n._u.delete(2),await dr(n)):t||(n._u.add(2),await un(n),n.gu.set("Unknown"))}function ve(e){return e.pu||(e.pu=function(t,n,r){const s=_(t);return s.su(),new zf(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(e.datastore,e.asyncQueue,{Yr:Xf.bind(null,e),Zr:Jf.bind(null,e),Wo:Zf.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Zs(e)?Js(e):e.gu.set("Unknown")):(await e.pu.stop(),Mu(e))})),e.pu}function Mt(e){return e.Iu||(e.Iu=function(t,n,r){const s=_(t);return s.su(),new Gf(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(e.datastore,e.asyncQueue,{Yr:ng.bind(null,e),Zr:ig.bind(null,e),tu:rg.bind(null,e),Zo:sg.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await fr(e)):(await e.Iu.stop(),e.fu.length>0&&(I("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,u=new ti(t,n,o,s,i);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(v.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ei(e,t){if(Dt("AsyncQueue",`${t}: ${e}`),on(e))return new D(v.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.comparator=t?(n,r)=>t(n,r)||C.comparator(n.key,r.key):(n,r)=>C.comparator(n.key,r.key),this.keyedMap=Ce(),this.sortedSet=new W(this.comparator)}static emptySet(t){return new se(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof se)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.Tu=new W(C.comparator)}track(t){const n=t.doc.key,r=this.Tu.get(n);r?t.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Tu=this.Tu.remove(n):t.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):k():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,r)=>{t.push(r)}),t}}class he{constructor(t,n,r,s,i,o,u,a,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new he(t,n,se.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.Au=void 0,this.listeners=[]}}class ug{constructor(){this.queries=new ye(t=>ru(t),or),this.onlineState="Unknown",this.Ru=new Set}}async function cg(e,t){const n=_(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ag),s)try{i.Au=await n.onListen(r)}catch(o){const u=ei(o,`Initialization of query '${us(t.query)}' failed`);return void t.onError(u)}n.queries.set(r,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&ni(n)}async function lg(e,t){const n=_(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function hg(e,t){const n=_(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const u of o.listeners)u.Pu(s)&&(r=!0);o.Au=s}}r&&ni(n)}function dg(e,t,n){const r=_(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function ni(e){e.Ru.forEach(t=>{t.next()})}class fg{constructor(t,n,r){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new he(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=he.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t){this.key=t}}class Bu{constructor(t){this.key=t}}class gg{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=N(),this.mutatedKeys=N(),this.Gu=su(t),this.Qu=new se(this.Gu)}get ju(){return this.Uu}Wu(t,n){const r=n?n.zu:new vo,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,u=!1;const a=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const d=s.get(l),g=Ks(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),f=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let m=!1;d&&g?d.data.isEqual(g.data)?p!==f&&(r.track({type:3,doc:g}),m=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),m=!0,(a&&this.Gu(g,a)>0||c&&this.Gu(g,c)<0)&&(u=!0)):!d&&g?(r.track({type:0,doc:g}),m=!0):d&&!g&&(r.track({type:1,doc:d}),m=!0,(a||c)&&(u=!0)),m&&(g?(o=o.add(g),i=f?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:u,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((c,l)=>function(h,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return g(h)-g(d)}(c.type,l.type)||this.Gu(c.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],u=this.Ku.size===0&&this.current?1:0,a=u!==this.qu;return this.qu=u,i.length!==0||a?{snapshot:new he(this.query,t.Qu,s,i,t.mutatedKeys,u===0,a,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new vo,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=N(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return t.forEach(r=>{this.Ku.has(r)||n.push(new Bu(r))}),this.Ku.forEach(r=>{t.has(r)||n.push(new Fu(r))}),n}tc(t){this.Uu=t.Hi,this.Ku=N();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return he.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class pg{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class mg{constructor(t){this.key=t,this.nc=!1}}class yg{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ye(u=>ru(u),or),this.rc=new Map,this.oc=new Set,this.uc=new W(C.comparator),this.cc=new Map,this.ac=new Ws,this.hc={},this.lc=new Map,this.fc=le.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function vg(e,t){const n=kg(e);let r,s;const i=n.ic.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await Bf(n.localStore,At(t));n.isPrimaryClient&&Nu(n.remoteStore,o);const u=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await wg(n,t,r,u==="current",o.resumeToken)}return s}async function wg(e,t,n,r,s){e._c=(h,d,g)=>async function(p,f,m,E){let w=f.view.Wu(m);w.$i&&(w=await go(p.localStore,f.query,!1).then(({documents:F})=>f.view.Wu(F,w)));const T=E&&E.targetChanges.get(f.targetId),M=f.view.applyChanges(w,p.isPrimaryClient,T);return Eo(p,f.targetId,M.Xu),M.snapshot}(e,h,d,g);const i=await go(e.localStore,t,!0),o=new gg(t,i.Hi),u=o.Wu(i.documents),a=an.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(u,e.isPrimaryClient,a);Eo(e,n,c.Xu);const l=new pg(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function Eg(e,t){const n=_(e),r=n.ic.get(t),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!or(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ds(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ou(n.remoteStore,r.targetId),fs(n,r.targetId)}).catch(sn)):(fs(n,r.targetId),await ds(n.localStore,r.targetId,!0))}async function Tg(e,t,n){const r=_g(e);try{const s=await function(i,o){const u=_(i),a=z.now(),c=o.reduce((d,g)=>d.add(g.key),N());let l,h;return u.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=kt(),p=N();return u.Gi.getEntries(d,c).next(f=>{g=f,g.forEach((m,E)=>{E.isValidDocument()||(p=p.add(m))})}).next(()=>u.localDocuments.getOverlayedDocuments(d,g)).next(f=>{l=f;const m=[];for(const E of o){const w=jd(E,l.get(E.key).overlayedDocument);w!=null&&m.push(new Qt(E.key,w,eu(w.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(d,a,m,o)}).next(f=>{h=f;const m=f.applyToLocalDocumentSet(l,p);return u.documentOverlayCache.saveOverlays(d,f.batchId,m)})}).then(()=>({batchId:h.batchId,changes:yu(l)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,u){let a=i.hc[i.currentUser.toKey()];a||(a=new W(P)),a=a.insert(o,u),i.hc[i.currentUser.toKey()]=a}(r,s.batchId,n),await cn(r,s.changes),await fr(r.remoteStore)}catch(s){const i=ei(s,"Failed to persist write");n.reject(i)}}async function Uu(e,t){const n=_(e);try{const r=await Pf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(V(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?V(o.nc):s.removedDocuments.size>0&&(V(o.nc),o.nc=!1))}),await cn(n,r,t)}catch(r){await sn(r)}}function wo(e,t,n){const r=_(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const u=o.view.bu(t);u.snapshot&&s.push(u.snapshot)}),function(i,o){const u=_(i);u.onlineState=o;let a=!1;u.queries.forEach((c,l)=>{for(const h of l.listeners)h.bu(o)&&(a=!0)}),a&&ni(u)}(r.eventManager,t),s.length&&r.sc.Wo(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bg(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.cc.get(t),i=s&&s.key;if(i){let o=new W(C.comparator);o=o.insert(i,Z.newNoDocument(i,x.min()));const u=N().add(i),a=new lr(x.min(),new Map,new G(P),o,u);await Uu(r,a),r.uc=r.uc.remove(i),r.cc.delete(t),ri(r)}else await ds(r.localStore,t,!1).then(()=>fs(r,t,n)).catch(sn)}async function Ig(e,t){const n=_(e),r=t.batch.batchId;try{const s=await Lf(n.localStore,t);ju(n,r,null),$u(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cn(n,s)}catch(s){await sn(s)}}async function Sg(e,t,n){const r=_(e);try{const s=await function(i,o){const u=_(i);return u.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return u.mutationQueue.lookupMutationBatch(a,o).next(l=>(V(l!==null),c=l.keys(),u.mutationQueue.removeMutationBatch(a,l))).next(()=>u.mutationQueue.performConsistencyCheck(a)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(a,c,o)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,c)).next(()=>u.localDocuments.getDocuments(a,c))})}(r.localStore,t);ju(r,t,n),$u(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await cn(r,s)}catch(s){await sn(s)}}function $u(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function ju(e,t,n){const r=_(e);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.hc[r.currentUser.toKey()]=s}}function fs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(r=>{e.ac.containsKey(r)||qu(e,r)})}function qu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Ou(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),ri(e))}function Eo(e,t,n){for(const r of n)r instanceof Fu?(e.ac.addReference(r.key,t),Cg(e,r)):r instanceof Bu?(I("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||qu(e,r.key)):k()}function Cg(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(I("SyncEngine","New document in limbo: "+n),e.oc.add(r),ri(e))}function ri(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new C(j.fromString(t)),r=e.fc.next();e.cc.set(r,new mg(n)),e.uc=e.uc.insert(n,r),Nu(e.remoteStore,new qt(At(Hs(n.path)),r,2,Us.at))}}async function cn(e,t,n){const r=_(e),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((u,a)=>{o.push(r._c(a,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const l=Ys.Ci(a.targetId,c);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(u,a){const c=_(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(a,h=>y.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!on(l))throw l;I("LocalStore","Failed to update sequence numbers: "+l)}for(const l of a){const h=l.targetId;if(!l.fromCache){const d=c.Ui.get(h),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);c.Ui=c.Ui.insert(h,p)}}}(r.localStore,i))}async function Dg(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){I("SyncEngine","User change. New user:",t.toKey());const r=await Au(n.localStore,t);n.currentUser=t,function(s,i){s.lc.forEach(o=>{o.forEach(u=>{u.reject(new D(v.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cn(n,r.ji)}}function Ag(e,t){const n=_(e),r=n.cc.get(t);if(r&&r.nc)return N().add(r.key);{let s=N();const i=n.rc.get(t);if(!i)return s;for(const o of i){const u=n.ic.get(o);s=s.unionWith(u.view.ju)}return s}}function kg(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Uu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ag.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bg.bind(null,t),t.sc.Wo=hg.bind(null,t.eventManager),t.sc.wc=dg.bind(null,t.eventManager),t}function _g(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ig.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Sg.bind(null,t),t}class xg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=hr(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Mf(this.persistence,new Of,t.initialUser,this.It)}yc(t){return new xf(Qs.Bs,this.It)}gc(t){return new $f}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ng{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dg.bind(null,this.syncEngine),await og(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ug}createDatastore(t){const n=hr(t.databaseInfo.databaseId),r=(s=t.databaseInfo,new Kf(s));var s;return function(i,o,u,a){return new Wf(i,o,u,a)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,s=t.asyncQueue,i=u=>wo(this.syncEngine,u,0),o=mo.C()?new mo:new jf,new Yf(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(t,n){return function(r,s,i,o,u,a,c){const l=new yg(r,s,i,o,u,a);return c&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=_(t);I("RemoteStore","RemoteStore shutting down."),n._u.add(5),await un(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(e,t,n){if(!n)throw new D(v.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Rg(e,t,n,r){if(t===!0&&r===!0)throw new D(v.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function To(e){if(!C.isDocumentKey(e))throw new D(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function si(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":k()}function ie(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new D(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=si(e);throw new D(v.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;class Io{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Rg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Io({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new D(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Io(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nd;switch(n.type){case"gapi":const r=n.client;return new od(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=bo.get(t);n&&(I("ComponentProvider","Removing Datastore"),bo.delete(t),n.terminate())}(this),Promise.resolve()}}function Mg(e,t,n,r={}){var s;const i=(e=ie(e,ii))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&rs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,u;if(typeof r.mockUserToken=="string")o=r.mockUserToken,u=nt.MOCK_USER;else{o=Uc(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const a=r.mockUserToken.sub||r.mockUserToken.user_id;if(!a)throw new D(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(a)}e._authCredentials=new rd(new Ya(o,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new We(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}}class gr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new gr(this.firestore,t,this._query)}}class We extends gr{constructor(t,n,r){super(t,n,Hs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new C(t))}withConverter(t){return new We(this.firestore,t,this._path)}}function So(e,t,...n){if(e=Nt(e),arguments.length===1&&(t=Xa.R()),Og("doc","path",t),e instanceof ii){const r=j.fromString(t,...n);return To(r),new ft(e,null,new C(r))}{if(!(e instanceof ft||e instanceof We))throw new D(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return To(r),new ft(e.firestore,e instanceof We?e.converter:null,new C(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=Xa.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{I("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(I("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ei(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Vg(e,t){e.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Au(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Fg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Bg(e);I("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>yo(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>yo(t.remoteStore,i)),e.onlineComponents=t}async function Bg(e){return e.offlineComponents||(I("FirestoreClient","Using default OfflineComponentProvider"),await Vg(e,new xg)),e.offlineComponents}async function Hu(e){return e.onlineComponents||(I("FirestoreClient","Using default OnlineComponentProvider"),await Fg(e,new Ng)),e.onlineComponents}function Ug(e){return Hu(e).then(t=>t.syncEngine)}async function Co(e){const t=await Hu(e),n=t.eventManager;return n.onListen=vg.bind(null,t.syncEngine),n.onUnlisten=Eg.bind(null,t.syncEngine),n}class $g{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new _u(this,"async_queue_retry"),this.Wc=()=>{const n=Fr();n&&I("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Fr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=Fr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new jt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!on(t))throw t;I("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const s=ti.createAndSchedule(this,t,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&k()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}function Do(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Vn extends ii{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new $g,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zu(this),this._firestoreClient.terminate()}}function jg(e,t){const n=typeof e=="object"?e:jl(),r=typeof e=="string"?e:t||"(default)",s=Fl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vc("firestore");i&&Mg(s,...i)}return s}function Ku(e){return e._firestoreClient||zu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function zu(e){var t;const n=e._freezeSettings(),r=function(s,i,o,u){return new yd(s,i,o,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Pg(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this._byteString=t}static fromBase64String(t){try{return new de(ot.fromBase64String(t))}catch(n){throw new D(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new de(ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new D(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new D(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new D(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=/^__.*__$/;class Gu{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Qt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Wu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class ai{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new ai(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ia({path:r,oa:!1});return s.ua(t),s}ca(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ia({path:r,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Fn(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(Wu(this.sa)&&qg.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Hg{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=r||hr(t)}da(t,n,r,s=!1){return new ai({sa:t,methodName:n,fa:r,path:rt.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Kg(e){const t=e._freezeSettings(),n=hr(e._databaseId);return new Hg(e._databaseId,!!t.ignoreUndefinedProperties,n)}class yr extends mr{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof yr}}class zg extends mr{constructor(t,n){super(t),this.wa=n}_toFieldTransform(t){const n=new Ge(t.It,au(t.It,this.wa));return new Fd(t.path,n)}isEqual(t){return this===t}}function Gg(e,t,n,r){const s=e.da(1,t,n);Yu("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();Wt(r,(a,c)=>{const l=ui(t,a,n);c=Nt(c);const h=s.ca(l);if(c instanceof yr)i.push(l);else{const d=vr(c,h);d!=null&&(i.push(l),o.set(l,d))}});const u=new wt(i);return new Gu(o,u,s.fieldTransforms)}function Wg(e,t,n,r,s,i){const o=e.da(1,t,n),u=[Ao(t,r,n)],a=[s];if(i.length%2!=0)throw new D(v.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)u.push(Ao(t,i[d])),a.push(i[d+1]);const c=[],l=ht.empty();for(let d=u.length-1;d>=0;--d)if(!Xg(c,u[d])){const g=u[d];let p=a[d];p=Nt(p);const f=o.ca(g);if(p instanceof yr)c.push(g);else{const m=vr(p,f);m!=null&&(c.push(g),l.set(g,m))}}const h=new wt(c);return new Gu(l,h,o.fieldTransforms)}function vr(e,t){if(Qu(e=Nt(e)))return Yu("Unsupported field value:",t,e),Qg(e,t);if(e instanceof mr)return function(n,r){if(!Wu(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let u=vr(o,r.aa(i));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),i++}return{arrayValue:{values:s}}}(e,t)}return function(n,r){if((n=Nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return au(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=z.fromDate(n);return{timestampValue:Ln(r.It,s)}}if(n instanceof z){const s=new z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ln(r.It,s)}}if(n instanceof oi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof de)return{bytesValue:bu(r.It,n._byteString)};if(n instanceof ft){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zs(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${si(n)}`)}(e,t)}function Qg(e,t){const n={};return Ja(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Wt(e,(r,s)=>{const i=vr(s,t.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof z||e instanceof oi||e instanceof de||e instanceof ft||e instanceof mr)}function Yu(e,t,n){if(!Qu(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=si(n);throw r==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Ao(e,t,n){if((t=Nt(t))instanceof pr)return t._internalPath;if(typeof t=="string")return ui(e,t);throw Fn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Yg=new RegExp("[~\\*/\\[\\]]");function ui(e,t,n){if(t.search(Yg)>=0)throw Fn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pr(...t.split("."))._internalPath}catch{throw Fn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Fn(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${t}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let a="";return(i||o)&&(a+=" (found",i&&(a+=` in field ${r}`),o&&(a+=` in document ${s}`),a+=")"),new D(v.INVALID_ARGUMENT,u+e+a)}function Xg(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ju("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jg extends Xu{data(){return super.data()}}function Ju(e,t){return typeof t=="string"?ui(e,t):t instanceof pr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new D(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{convertValue(t,n="none"){switch(zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw k()}}convertObject(t,n){const r={};return Wt(t.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new oi(K(t.latitude),K(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=tu(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($e(t));default:return null}}convertTimestamp(t){const n=Rt(t);return new z(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=j.fromString(t);V(Du(r));const s=new je(r.get(1),r.get(3)),i=new C(r.popFirst(5));return s.isEqual(n)||Dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zu extends Xu{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new En(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ju("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class En extends Zu{data(t={}){return super.data(t)}}class ep{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new De(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new En(this._firestore,this._userDataWriter,r.key,r,new De(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const u=new En(r._firestore,r._userDataWriter,o.doc.key,o.doc,new De(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const u=new En(r._firestore,r._userDataWriter,o.doc.key,o.doc,new De(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let a=-1,c=-1;return o.type!==0&&(a=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:np(o.type),doc:u,oldIndex:a,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function np(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}class tc extends tp{constructor(t){super(),this.firestore=t}convertBytes(t){return new de(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function ko(e,t,n,...r){e=ie(e,ft);const s=ie(e.firestore,Vn),i=Kg(s);let o;return o=typeof(t=Nt(t))=="string"||t instanceof pr?Wg(i,"updateDoc",e._key,t,n,r):Gg(i,"updateDoc",e._key,t),sp(s,[o.toMutation(e._key,bt.exists(!0))])}function rp(e,...t){var n,r,s;e=Nt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Do(t[o])||(i=t[o],o++);const u={includeMetadataChanges:i.includeMetadataChanges};if(Do(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let a,c,l;if(e instanceof ft)c=ie(e.firestore,Vn),l=Hs(e._key.path),a={next:h=>{t[o]&&t[o](ip(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=ie(e,gr);c=ie(h.firestore,Vn),l=h._query;const d=new tc(c);a={next:g=>{t[o]&&t[o](new ep(c,d,h,g))},error:t[o+1],complete:t[o+2]},Zg(e._query)}return function(h,d,g,p){const f=new Lg(p),m=new fg(d,f,g);return h.asyncQueue.enqueueAndForget(async()=>cg(await Co(h),m)),()=>{f.bc(),h.asyncQueue.enqueueAndForget(async()=>lg(await Co(h),m))}}(Ku(c),l,u,a)}function sp(e,t){return function(n,r){const s=new jt;return n.asyncQueue.enqueueAndForget(async()=>Tg(await Ug(n),r,s)),s.promise}(Ku(e),t)}function ip(e,t,n){const r=n.docs.get(t._key),s=new tc(e);return new Zu(e,s,t._key,r,new De(n.hasPendingWrites,n.fromCache),t.converter)}function _o(e){return new zg("increment",e)}(function(e,t=!0){(function(n){me=n})($l),In(new Re("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Vn(new sd(n.getProvider("auth-internal")),new ud(n.getProvider("app-check-internal")),function(u,a){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(u.options.projectId,a)}(i,r),i);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),ne(Wi,"3.7.2",e),ne(Wi,"3.7.2","esm2017")})();const ec="/portfolio/assets/heart-dc385279.svg",nc="/portfolio/assets/heart-red-2e6389a1.svg",op={apiKey:"AIzaSyCfd3SatHBUIE1IOkMIchKQiuY-PKnaFic",authDomain:"my-testing-c3f4e.firebaseapp.com",projectId:"my-testing-c3f4e",storageBucket:"my-testing-c3f4e.appspot.com",messagingSenderId:"1019389789219",appId:"1:1019389789219:web:4e1321bbcf2ed0950ddd96",measurementId:"G-D73BT7CZ86"},ap=Ko(op),xo=jg(ap),up=[{name:"Profile",btn_id:"profileBtn",counter_id:"profileCounter",heart_id:"profileImg",picture_id:"profilePicture",collection:"profile",liked:!1},{name:"About me",btn_id:"aboutBtn",counter_id:"aboutCounter",heart_id:"aboutImg",picture_id:"cat1",collection:"about",liked:!1},{name:"Skills",btn_id:"skillsBtn",counter_id:"skillsCounter",heart_id:"skillsImg",picture_id:"cat2",collection:"skills",liked:!1}],cp=e=>{const t=localStorage.getItem(e.collection,e.liked),n=JSON.parse(t);e.liked=n,console.log("loaded state",n),n?document.getElementById(e.heart_id).src=nc:document.getElementById(e.heart_id).src=ec};up.forEach(e=>{let t=document.getElementById(e.btn_id),n=document.getElementById(e.heart_id),r=document.getElementById(e.counter_id);document.getElementById(e.btn_id).addEventListener("click",()=>{o()}),document.getElementById(e.picture_id).addEventListener("dblclick",()=>{console.log("doubled!"),o()}),r.innerHTML="wait...",rp(So(xo,"likes-counter","likes"),u=>{r.innerHTML=`${u.data()[e.collection]} likes`,cp(e)});const o=async()=>{t.disabled=!0,r.innerHTML="wait...";const u=So(xo,"likes-counter","likes");e.liked?await ko(u,{[e.collection]:_o(-1)}).then(()=>{n.src=ec,console.log(`posted dislike in: ${e.collection}`),e.liked=!1,t.disabled=!1}):await ko(u,{[e.collection]:_o(1)}).then(()=>{n.src=nc,console.log(`posted like in: ${e.collection}`),e.liked=!0,t.disabled=!1}),localStorage.setItem(e.collection,e.liked),console.log(`saved: ${e.collection} /// like: ${e.liked}`)}});function lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function No(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gs={},hp={get exports(){return gs},set exports(e){gs=e}};(function(e,t){parcelRequire=function(n,r,s,i){var o,u=typeof parcelRequire=="function"&&parcelRequire,a=typeof No=="function"&&No;function c(d,g){if(!r[d]){if(!n[d]){var p=typeof parcelRequire=="function"&&parcelRequire;if(!g&&p)return p(d,!0);if(u)return u(d,!0);if(a&&typeof d=="string")return a(d);var f=new Error("Cannot find module '"+d+"'");throw f.code="MODULE_NOT_FOUND",f}E.resolve=function(w){return n[d][1][w]||w},E.cache={};var m=r[d]=new c.Module(d);n[d][0].call(m.exports,E,m,m.exports,this)}return r[d].exports;function E(w){return c(E.resolve(w))}}c.isParcelRequire=!0,c.Module=function(d){this.id=d,this.bundle=c,this.exports={}},c.modules=n,c.cache=r,c.parent=u,c.register=function(d,g){n[d]=[function(p,f){f.exports=g},{}]};for(var l=0;l<s.length;l++)try{c(s[l])}catch(d){o||(o=d)}if(s.length){var h=c(s[s.length-1]);e.exports=h}if(parcelRequire=c,o)throw o;return c}({epB2:[function(n,r,s){var i;function o(f,m){var E=Object.keys(f);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(f);m&&(w=w.filter(function(T){return Object.getOwnPropertyDescriptor(f,T).enumerable})),E.push.apply(E,w)}return E}function u(f){for(var m=1;m<arguments.length;m++){var E=arguments[m]!=null?arguments[m]:{};m%2?o(Object(E),!0).forEach(function(w){a(f,w,E[w])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(E)):o(Object(E)).forEach(function(w){Object.defineProperty(f,w,Object.getOwnPropertyDescriptor(E,w))})}return f}function a(f,m,E){return m in f?Object.defineProperty(f,m,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[m]=E,f}Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var c=function(f,m){Object.keys(m).forEach(function(E){f.style[E]=m[E]})},l=function(f,m){Object.keys(m).forEach(function(E){f.setAttribute(E,m[E])})},h=function(f,m){return f.getAttribute(m)},d={defaultOptions:Symbol("defaultOptions"),render:Symbol("render"),show:Symbol("show"),hide:Symbol("hide"),removeDOM:Symbol("removeDOM")},g=(a(i={},d.defaultOptions,{container:"body",class:"siiimpleToast",position:"top|center",margin:15,delay:0,duration:3e3,style:{}}),a(i,"setOptions",function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return u({},g,a({},d.defaultOptions,u({},this[d.defaultOptions],{},f)))}),a(i,d.render,function(f,m){var E=this,w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},T=u({},this[d.defaultOptions],{},w),M=T.class,F=T.position,R=T.delay,X=T.duration,at=T.style,ut=document.createElement("div");ut.className=M,ut.innerHTML=m,l(ut,{"data-position":F,"data-state":f}),c(ut,at);var U=0;return setTimeout(function(){E[d.show](ut,T)},U+=R),setTimeout(function(){E[d.hide](ut,T)},U+=X),this}),a(i,d.show,function(f,m){var E,w=m.container,T=m.class,M=m.margin,F=function(at,ut){return h(at,"data-position").indexOf(ut)>-1},R=document.querySelector(w);R.insertBefore(f,R.firstChild),c(f,(a(E={position:w==="body"?"fixed":"absolute"},F(f,"top")?"top":"bottom","-100px"),a(E,F(f,"left")&&"left","15px"),a(E,F(f,"center")&&"left","".concat(R.clientWidth/2-f.clientWidth/2,"px")),a(E,F(f,"right")&&"right","15px"),E)),c(f,{transform:"scale(1)",opacity:1});var X=M;Array.from(document.querySelectorAll(".".concat(T,'[data-position="').concat(h(f,"data-position"),'"]'))).filter(function(at){return at.parentElement===f.parentElement}).forEach(function(at){c(at,a({},F(at,"top")?"top":"bottom","".concat(X,"px"))),X+=at.offsetHeight+M})}),a(i,d.hide,function(f){var m,E=this,w=function(R,X){return h(R,"data-position").indexOf(X)>-1},T=f.getBoundingClientRect(),M=T.left,F=T.width;c(f,(a(m={},w(f,"left")&&"left","".concat(F,"px")),a(m,w(f,"center")&&"left","".concat(M+F,"px")),a(m,w(f,"right")&&"right","-".concat(F,"px")),a(m,"opacity",0),m)),f.addEventListener("transitionend",function R(){E[d.removeDOM](f),f.removeEventListener("transitionend",R)})}),a(i,d.removeDOM,function(f){f.parentElement.removeChild(f)}),a(i,"message",function(f,m){return this[d.render]("default",f,m)}),a(i,"success",function(f,m){return this[d.render]("success",f,m)}),a(i,"alert",function(f,m){return this[d.render]("alert",f,m)}),i),p=g;s.default=p},{}]},{},["epB2"])})(hp);const dp=lp(gs);document.getElementById("projects-btn").addEventListener("click",()=>{dp.message("💻 Projects section is under development but you can check my GitHub clicking in the sidebar 💻",{container:"body",class:"siiimpleToast",position:"bottom|center",margin:15,delay:0,duration:3e3,style:{fontSize:"var(--font-l)",backgroundColor:"darkred",color:"white",textAlign:"center",fontWeight:"bold",borderRadius:0}})});var rc=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};rc.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,r=300-Math.random()*100;this.isDeleting&&(r/=2),!this.isDeleting&&this.txt===t?(r=this.period,this.isDeleting=!0):this.isDeleting&&this.txt===""&&(this.isDeleting=!1,this.loopNum++,r=500),setTimeout(function(){n.tick()},r)};window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-rotate"),r=e[t].getAttribute("data-period");n&&new rc(e[t],JSON.parse(n),r)}var s=document.createElement("style");s.type="text/css",s.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #93C572 }",document.body.appendChild(s)};var sc={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ci={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},fp=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Bn={CSS:{},springs:{}};function yt(e,t,n){return Math.min(Math.max(e,t),n)}function Oe(e,t){return e.indexOf(t)>-1}function Br(e,t){return e.apply(null,t)}var S={arr:function(e){return Array.isArray(e)},obj:function(e){return Oe(Object.prototype.toString.call(e),"Object")},pth:function(e){return S.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||S.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return S.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return S.hex(e)||S.rgb(e)||S.hsl(e)},key:function(e){return!sc.hasOwnProperty(e)&&!ci.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function ic(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function oc(e,t){var n=ic(e),r=yt(S.und(n[0])?1:n[0],.1,100),s=yt(S.und(n[1])?100:n[1],.1,100),i=yt(S.und(n[2])?10:n[2],.1,100),o=yt(S.und(n[3])?0:n[3],.1,100),u=Math.sqrt(s/r),a=i/(2*Math.sqrt(s*r)),c=a<1?u*Math.sqrt(1-a*a):0,l=1,h=a<1?(a*u+-o)/c:-o+u;function d(p){var f=t?t*p/1e3:p;return a<1?f=Math.exp(-f*a*u)*(l*Math.cos(c*f)+h*Math.sin(c*f)):f=(l+h*f)*Math.exp(-f*u),p===0||p===1?p:1-f}function g(){var p=Bn.springs[e];if(p)return p;for(var f=1/6,m=0,E=0;;)if(m+=f,d(m)===1){if(E++,E>=16)break}else E=0;var w=m*f*1e3;return Bn.springs[e]=w,w}return t?d:g}function gp(e){return e===void 0&&(e=10),function(t){return Math.ceil(yt(t,1e-6,1)*e)*(1/e)}}var pp=function(){var e=11,t=1/(e-1);function n(l,h){return 1-3*h+3*l}function r(l,h){return 3*h-6*l}function s(l){return 3*l}function i(l,h,d){return((n(h,d)*l+r(h,d))*l+s(h))*l}function o(l,h,d){return 3*n(h,d)*l*l+2*r(h,d)*l+s(h)}function u(l,h,d,g,p){var f,m,E=0;do m=h+(d-h)/2,f=i(m,g,p)-l,f>0?d=m:h=m;while(Math.abs(f)>1e-7&&++E<10);return m}function a(l,h,d,g){for(var p=0;p<4;++p){var f=o(h,d,g);if(f===0)return h;var m=i(h,d,g)-l;h-=m/f}return h}function c(l,h,d,g){if(!(0<=l&&l<=1&&0<=d&&d<=1))return;var p=new Float32Array(e);if(l!==h||d!==g)for(var f=0;f<e;++f)p[f]=i(f*t,l,d);function m(E){for(var w=0,T=1,M=e-1;T!==M&&p[T]<=E;++T)w+=t;--T;var F=(E-p[T])/(p[T+1]-p[T]),R=w+F*t,X=o(R,l,d);return X>=.001?a(E,R,l,d):X===0?R:u(E,w,w+t,l,d)}return function(E){return l===h&&d===g||E===0||E===1?E:i(m(E),h,g)}}return c}(),ac=function(){var e={linear:function(){return function(r){return r}}},t={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var s,i=4;r<((s=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((s*3-2)/22-r,2)}},Elastic:function(r,s){r===void 0&&(r=1),s===void 0&&(s=.5);var i=yt(r,1,10),o=yt(s,.1,2);return function(u){return u===0||u===1?u:-i*Math.pow(2,10*(u-1))*Math.sin((u-1-o/(Math.PI*2)*Math.asin(1/i))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(r,s){t[r]=function(){return function(i){return Math.pow(i,s+2)}}}),Object.keys(t).forEach(function(r){var s=t[r];e["easeIn"+r]=s,e["easeOut"+r]=function(i,o){return function(u){return 1-s(i,o)(1-u)}},e["easeInOut"+r]=function(i,o){return function(u){return u<.5?s(i,o)(u*2)/2:1-s(i,o)(u*-2+2)/2}},e["easeOutIn"+r]=function(i,o){return function(u){return u<.5?(1-s(i,o)(1-u*2))/2:(s(i,o)(u*2-1)+1)/2}}}),e}();function li(e,t){if(S.fnc(e))return e;var n=e.split("(")[0],r=ac[n],s=ic(e);switch(n){case"spring":return oc(e,t);case"cubicBezier":return Br(pp,s);case"steps":return Br(gp,s);default:return Br(r,s)}}function uc(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function wr(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,s=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&s.push(o)}return s}function Er(e){return e.reduce(function(t,n){return t.concat(S.arr(n)?Er(n):n)},[])}function Oo(e){return S.arr(e)?e:(S.str(e)&&(e=uc(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function hi(e,t){return e.some(function(n){return n===t})}function di(e){var t={};for(var n in e)t[n]=e[n];return t}function ps(e,t){var n=di(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function Tr(e,t){var n=di(e);for(var r in t)n[r]=S.und(e[r])?t[r]:e[r];return n}function mp(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function yp(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(u,a,c,l){return a+a+c+c+l+l}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),s=parseInt(r[1],16),i=parseInt(r[2],16),o=parseInt(r[3],16);return"rgba("+s+","+i+","+o+",1)"}function vp(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,r=parseInt(t[2],10)/100,s=parseInt(t[3],10)/100,i=t[4]||1;function o(d,g,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?d+(g-d)*6*p:p<1/2?g:p<2/3?d+(g-d)*(2/3-p)*6:d}var u,a,c;if(r==0)u=a=c=s;else{var l=s<.5?s*(1+r):s+r-s*r,h=2*s-l;u=o(h,l,n+1/3),a=o(h,l,n),c=o(h,l,n-1/3)}return"rgba("+u*255+","+a*255+","+c*255+","+i+")"}function wp(e){if(S.rgb(e))return mp(e);if(S.hex(e))return yp(e);if(S.hsl(e))return vp(e)}function St(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function Ep(e){if(Oe(e,"translate")||e==="perspective")return"px";if(Oe(e,"rotate")||Oe(e,"skew"))return"deg"}function ms(e,t){return S.fnc(e)?e(t.target,t.id,t.total):e}function vt(e,t){return e.getAttribute(t)}function fi(e,t,n){var r=St(t);if(hi([n,"deg","rad","turn"],r))return t;var s=Bn.CSS[t+n];if(!S.und(s))return s;var i=100,o=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=i+n;var a=i/o.offsetWidth;u.removeChild(o);var c=a*parseFloat(t);return Bn.CSS[t+n]=c,c}function cc(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?fi(e,s,n):s}}function gi(e,t){if(S.dom(e)&&!S.inp(e)&&(!S.nil(vt(e,t))||S.svg(e)&&e[t]))return"attribute";if(S.dom(e)&&hi(fp,t))return"transform";if(S.dom(e)&&t!=="transform"&&cc(e,t))return"css";if(e[t]!=null)return"object"}function lc(e){if(S.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,r=new Map,s;s=n.exec(t);)r.set(s[1],s[2]);return r}}function Tp(e,t,n,r){var s=Oe(t,"scale")?1:0+Ep(t),i=lc(e).get(t)||s;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?fi(e,i,r):i}function pi(e,t,n,r){switch(gi(e,t)){case"transform":return Tp(e,t,r,n);case"css":return cc(e,t,n);case"attribute":return vt(e,t);default:return e[t]||0}}function mi(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=St(e)||0,s=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return s+i+r;case"-":return s-i+r;case"*":return s*i+r}}function hc(e,t){if(S.col(e))return wp(e);if(/\s/g.test(e))return e;var n=St(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function yi(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function bp(e){return Math.PI*2*vt(e,"r")}function Ip(e){return vt(e,"width")*2+vt(e,"height")*2}function Sp(e){return yi({x:vt(e,"x1"),y:vt(e,"y1")},{x:vt(e,"x2"),y:vt(e,"y2")})}function dc(e){for(var t=e.points,n=0,r,s=0;s<t.numberOfItems;s++){var i=t.getItem(s);s>0&&(n+=yi(r,i)),r=i}return n}function Cp(e){var t=e.points;return dc(e)+yi(t.getItem(t.numberOfItems-1),t.getItem(0))}function fc(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return bp(e);case"rect":return Ip(e);case"line":return Sp(e);case"polyline":return dc(e);case"polygon":return Cp(e)}}function Dp(e){var t=fc(e);return e.setAttribute("stroke-dasharray",t),t}function Ap(e){for(var t=e.parentNode;S.svg(t)&&S.svg(t.parentNode);)t=t.parentNode;return t}function gc(e,t){var n=t||{},r=n.el||Ap(e),s=r.getBoundingClientRect(),i=vt(r,"viewBox"),o=s.width,u=s.height,a=n.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:a,x:a[0]/1,y:a[1]/1,w:o,h:u,vW:a[2],vH:a[3]}}function kp(e,t){var n=S.str(e)?uc(e)[0]:e,r=t||100;return function(s){return{property:s,el:n,svg:gc(n),totalLength:fc(n)*(r/100)}}}function _p(e,t,n){function r(l){l===void 0&&(l=0);var h=t+l>=1?t+l:0;return e.el.getPointAtLength(h)}var s=gc(e.el,e.svg),i=r(),o=r(-1),u=r(1),a=n?1:s.w/s.vW,c=n?1:s.h/s.vH;switch(e.property){case"x":return(i.x-s.x)*a;case"y":return(i.y-s.y)*c;case"angle":return Math.atan2(u.y-o.y,u.x-o.x)*180/Math.PI}}function Ro(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=hc(S.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:S.str(e)||t?r.split(n):[]}}function vi(e){var t=e?Er(S.arr(e)?e.map(Oo):Oo(e)):[];return wr(t,function(n,r,s){return s.indexOf(n)===r})}function pc(e){var t=vi(e);return t.map(function(n,r){return{target:n,id:r,total:t.length,transforms:{list:lc(n)}}})}function xp(e,t){var n=di(t);if(/^spring/.test(n.easing)&&(n.duration=oc(n.easing)),S.arr(e)){var r=e.length,s=r===2&&!S.obj(e[0]);s?e={value:e}:S.fnc(t.duration)||(n.duration=t.duration/r)}var i=S.arr(e)?e:[e];return i.map(function(o,u){var a=S.obj(o)&&!S.pth(o)?o:{value:o};return S.und(a.delay)&&(a.delay=u?0:t.delay),S.und(a.endDelay)&&(a.endDelay=u===i.length-1?t.endDelay:0),a}).map(function(o){return Tr(o,n)})}function Np(e){for(var t=wr(Er(e.map(function(i){return Object.keys(i)})),function(i){return S.key(i)}).reduce(function(i,o){return i.indexOf(o)<0&&i.push(o),i},[]),n={},r=function(i){var o=t[i];n[o]=e.map(function(u){var a={};for(var c in u)S.key(c)?c==o&&(a.value=u[c]):a[c]=u[c];return a})},s=0;s<t.length;s++)r(s);return n}function Op(e,t){var n=[],r=t.keyframes;r&&(t=Tr(Np(r),t));for(var s in t)S.key(s)&&n.push({name:s,tweens:xp(t[s],e)});return n}function Rp(e,t){var n={};for(var r in e){var s=ms(e[r],t);S.arr(s)&&(s=s.map(function(i){return ms(i,t)}),s.length===1&&(s=s[0])),n[r]=s}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function Mp(e,t){var n;return e.tweens.map(function(r){var s=Rp(r,t),i=s.value,o=S.arr(i)?i[1]:i,u=St(o),a=pi(t.target,e.name,u,t),c=n?n.to.original:a,l=S.arr(i)?i[0]:c,h=St(l)||St(a),d=u||h;return S.und(o)&&(o=c),s.from=Ro(l,d),s.to=Ro(mi(o,l),d),s.start=n?n.end:0,s.end=s.start+s.delay+s.duration+s.endDelay,s.easing=li(s.easing,s.duration),s.isPath=S.pth(i),s.isPathTargetInsideSVG=s.isPath&&S.svg(t.target),s.isColor=S.col(s.from.original),s.isColor&&(s.round=1),n=s,s})}var mc={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,s){if(r.list.set(t,n),t===r.last||s){var i="";r.list.forEach(function(o,u){i+=u+"("+o+") "}),e.style.transform=i}}};function yc(e,t){var n=pc(e);n.forEach(function(r){for(var s in t){var i=ms(t[s],r),o=r.target,u=St(i),a=pi(o,s,u,r),c=u||St(a),l=mi(hc(i,c),a),h=gi(o,s);mc[h](o,s,l,r.transforms,!0)}})}function Lp(e,t){var n=gi(e.target,t.name);if(n){var r=Mp(t,e),s=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:s.end,delay:r[0].delay,endDelay:s.endDelay}}}function Pp(e,t){return wr(Er(e.map(function(n){return t.map(function(r){return Lp(n,r)})})),function(n){return!S.und(n)})}function vc(e,t){var n=e.length,r=function(i){return i.timelineOffset?i.timelineOffset:0},s={};return s.duration=n?Math.max.apply(Math,e.map(function(i){return r(i)+i.duration})):t.duration,s.delay=n?Math.min.apply(Math,e.map(function(i){return r(i)+i.delay})):t.delay,s.endDelay=n?s.duration-Math.max.apply(Math,e.map(function(i){return r(i)+i.duration-i.endDelay})):t.endDelay,s}var Mo=0;function Vp(e){var t=ps(sc,e),n=ps(ci,e),r=Op(n,e),s=pc(e.targets),i=Pp(s,r),o=vc(i,n),u=Mo;return Mo++,Tr(t,{id:u,children:[],animatables:s,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var pt=[],wc=function(){var e;function t(){!e&&(!Lo()||!$.suspendWhenDocumentHidden)&&pt.length>0&&(e=requestAnimationFrame(n))}function n(s){for(var i=pt.length,o=0;o<i;){var u=pt[o];u.paused?(pt.splice(o,1),i--):(u.tick(s),o++)}e=o>0?requestAnimationFrame(n):void 0}function r(){$.suspendWhenDocumentHidden&&(Lo()?e=cancelAnimationFrame(e):(pt.forEach(function(s){return s._onDocumentVisibility()}),wc()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),t}();function Lo(){return!!document&&document.hidden}function $(e){e===void 0&&(e={});var t=0,n=0,r=0,s,i=0,o=null;function u(w){var T=window.Promise&&new Promise(function(M){return o=M});return w.finished=T,T}var a=Vp(e);u(a);function c(){var w=a.direction;w!=="alternate"&&(a.direction=w!=="normal"?"normal":"reverse"),a.reversed=!a.reversed,s.forEach(function(T){return T.reversed=a.reversed})}function l(w){return a.reversed?a.duration-w:w}function h(){t=0,n=l(a.currentTime)*(1/$.speed)}function d(w,T){T&&T.seek(w-T.timelineOffset)}function g(w){if(a.reversePlayback)for(var M=i;M--;)d(w,s[M]);else for(var T=0;T<i;T++)d(w,s[T])}function p(w){for(var T=0,M=a.animations,F=M.length;T<F;){var R=M[T],X=R.animatable,at=R.tweens,ut=at.length-1,U=at[ut];ut&&(U=wr(at,function(Dc){return w<Dc.end})[0]||U);for(var Xt=yt(w-U.start-U.delay,0,U.duration)/U.duration,ln=isNaN(Xt)?1:U.easing(Xt),gt=U.to.strings,br=U.round,Ir=[],Cc=U.to.numbers.length,Jt=void 0,we=0;we<Cc;we++){var Ee=void 0,Ii=U.to.numbers[we],Si=U.from.numbers[we]||0;U.isPath?Ee=_p(U.value,ln*Ii,U.isPathTargetInsideSVG):Ee=Si+ln*(Ii-Si),br&&(U.isColor&&we>2||(Ee=Math.round(Ee*br)/br)),Ir.push(Ee)}var Ci=gt.length;if(!Ci)Jt=Ir[0];else{Jt=gt[0];for(var Te=0;Te<Ci;Te++){gt[Te];var Di=gt[Te+1],Sr=Ir[Te];isNaN(Sr)||(Di?Jt+=Sr+Di:Jt+=Sr+" ")}}mc[R.type](X.target,R.property,Jt,X.transforms),R.currentValue=Jt,T++}}function f(w){a[w]&&!a.passThrough&&a[w](a)}function m(){a.remaining&&a.remaining!==!0&&a.remaining--}function E(w){var T=a.duration,M=a.delay,F=T-a.endDelay,R=l(w);a.progress=yt(R/T*100,0,100),a.reversePlayback=R<a.currentTime,s&&g(R),!a.began&&a.currentTime>0&&(a.began=!0,f("begin")),!a.loopBegan&&a.currentTime>0&&(a.loopBegan=!0,f("loopBegin")),R<=M&&a.currentTime!==0&&p(0),(R>=F&&a.currentTime!==T||!T)&&p(T),R>M&&R<F?(a.changeBegan||(a.changeBegan=!0,a.changeCompleted=!1,f("changeBegin")),f("change"),p(R)):a.changeBegan&&(a.changeCompleted=!0,a.changeBegan=!1,f("changeComplete")),a.currentTime=yt(R,0,T),a.began&&f("update"),w>=T&&(n=0,m(),a.remaining?(t=r,f("loopComplete"),a.loopBegan=!1,a.direction==="alternate"&&c()):(a.paused=!0,a.completed||(a.completed=!0,f("loopComplete"),f("complete"),!a.passThrough&&"Promise"in window&&(o(),u(a)))))}return a.reset=function(){var w=a.direction;a.passThrough=!1,a.currentTime=0,a.progress=0,a.paused=!0,a.began=!1,a.loopBegan=!1,a.changeBegan=!1,a.completed=!1,a.changeCompleted=!1,a.reversePlayback=!1,a.reversed=w==="reverse",a.remaining=a.loop,s=a.children,i=s.length;for(var T=i;T--;)a.children[T].reset();(a.reversed&&a.loop!==!0||w==="alternate"&&a.loop===1)&&a.remaining++,p(a.reversed?a.duration:0)},a._onDocumentVisibility=h,a.set=function(w,T){return yc(w,T),a},a.tick=function(w){r=w,t||(t=r),E((r+(n-t))*$.speed)},a.seek=function(w){E(l(w))},a.pause=function(){a.paused=!0,h()},a.play=function(){a.paused&&(a.completed&&a.reset(),a.paused=!1,pt.push(a),h(),wc())},a.reverse=function(){c(),a.completed=!a.reversed,h()},a.restart=function(){a.reset(),a.play()},a.remove=function(w){var T=vi(w);Ec(T,a)},a.reset(),a.autoplay&&a.play(),a}function Po(e,t){for(var n=t.length;n--;)hi(e,t[n].animatable.target)&&t.splice(n,1)}function Ec(e,t){var n=t.animations,r=t.children;Po(e,n);for(var s=r.length;s--;){var i=r[s],o=i.animations;Po(e,o),!o.length&&!i.children.length&&r.splice(s,1)}!n.length&&!r.length&&t.pause()}function Fp(e){for(var t=vi(e),n=pt.length;n--;){var r=pt[n];Ec(t,r)}}function Bp(e,t){t===void 0&&(t={});var n=t.direction||"normal",r=t.easing?li(t.easing):null,s=t.grid,i=t.axis,o=t.from||0,u=o==="first",a=o==="center",c=o==="last",l=S.arr(e),h=parseFloat(l?e[0]:e),d=l?parseFloat(e[1]):0,g=St(l?e[1]:e)||0,p=t.start||0+(l?h:0),f=[],m=0;return function(E,w,T){if(u&&(o=0),a&&(o=(T-1)/2),c&&(o=T-1),!f.length){for(var M=0;M<T;M++){if(!s)f.push(Math.abs(o-M));else{var F=a?(s[0]-1)/2:o%s[0],R=a?(s[1]-1)/2:Math.floor(o/s[0]),X=M%s[0],at=Math.floor(M/s[0]),ut=F-X,U=R-at,Xt=Math.sqrt(ut*ut+U*U);i==="x"&&(Xt=-ut),i==="y"&&(Xt=-U),f.push(Xt)}m=Math.max.apply(Math,f)}r&&(f=f.map(function(gt){return r(gt/m)*m})),n==="reverse"&&(f=f.map(function(gt){return i?gt<0?gt*-1:-gt:Math.abs(m-gt)}))}var ln=l?(d-h)/m:h;return p+ln*(Math.round(f[w]*100)/100)+g}}function Up(e){e===void 0&&(e={});var t=$(e);return t.duration=0,t.add=function(n,r){var s=pt.indexOf(t),i=t.children;s>-1&&pt.splice(s,1);function o(d){d.passThrough=!0}for(var u=0;u<i.length;u++)o(i[u]);var a=Tr(n,ps(ci,e));a.targets=a.targets||e.targets;var c=t.duration;a.autoplay=!1,a.direction=t.direction,a.timelineOffset=S.und(r)?c:mi(r,c),o(t),t.seek(a.timelineOffset);var l=$(a);o(l),i.push(l);var h=vc(i,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}$.version="3.2.1";$.speed=1;$.suspendWhenDocumentHidden=!0;$.running=pt;$.remove=Fp;$.get=pi;$.set=yc;$.convertPx=fi;$.path=kp;$.setDashoffset=Dp;$.stagger=Bp;$.timeline=Up;$.easing=li;$.penner=ac;$.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const Un=document.querySelector(".scrollUpButton");document.querySelector("#aboutMe-btn");let $n,$p=window.matchMedia("(max-width: 500px)").matches;$p?$n=20:$n=300;window.onscroll=function(){document.body.scrollTop>$n||document.documentElement.scrollTop>$n?Un.style.display="inherit":Un.style.display="none"};const jp=400;Un.addEventListener("click",()=>{$({targets:Un,translateY:[{value:-30,easing:"easeOutElastic(1, .6)"},{value:0,easing:"linear",duration:400,delay:100}]}),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},jp)});const qp=document.querySelector("#aboutMe"),Hp=document.querySelector(".skillsSection"),wi=document.querySelector("#aboutLeft"),Ei=document.querySelector(".aboutMeContainer"),Ti=document.querySelector(".skillsContainer"),bi=document.querySelector("#skillsRight");wi.style.transform="translatex(-100px) translatey(100px)";wi.style.opacity="0";Ei.style.transform="translatex(100px) translatey(-100px)";Ei.style.opacity="0";Ti.style.transform="translatex(-100px) translatey(100px)";Ti.style.opacity="0";bi.style.transform="translatex(100px) translatey(-100px)";bi.style.opacity="0";const Tc=(e,t)=>{console.log("animate!"),$({targets:[e,t],opacity:1,translateX:0,translateY:0,easing:"easeInOutQuad",duration:300})};var Kp=new IntersectionObserver(function(e){e[0].isIntersecting===!0&&Tc(wi,Ei)},{threshold:[.7]});Kp.observe(qp);var zp=new IntersectionObserver(function(e){e[0].isIntersecting===!0&&Tc(Ti,bi)},{threshold:[.7]});zp.observe(Hp);/*! *****************************************************************************
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
***************************************************************************** */function Gp(e,t,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function u(l){try{c(r.next(l))}catch(h){o(h)}}function a(l){try{c(r.throw(l))}catch(h){o(h)}}function c(l){l.done?i(l.value):s(l.value).then(u,a)}c((r=r.apply(e,t||[])).next())})}const bc=300;function Wp(e,t={}){return Gp(this,void 0,void 0,function*(){if(!(e instanceof Element)&&!(e instanceof Window))throw new Error(`element passed to scrollTo() must be either the window or a DOM element, you passed ${e}!`);t=Sc(t);const n=(i,o,u,a,c=bc,l,h)=>{window.requestAnimationFrame(()=>{const d=Date.now(),g=Math.min(1,(d-a)/c);if(i===o)return h?h():null;Jp(e,l(g)*(o-i)+i),g<1?n(i,o,u,a,c,l,h):h&&h()})},r=Xp(e),s=Yp(e);return new Promise(i=>{n(r,typeof t.top=="number"?t.top:r,s,Date.now(),t.duration,Zp(t.easing),i)})})}function Ic(e,t,n){Qp(e),t&&!(t instanceof Element)&&(n=t,t=void 0);const{duration:r,easing:s}=Sc(n);t=t||jn.getDocument().body;let i=0,o=e?e.offsetTop:0;const u=jn.getDocument();return(t===u.body||t===u.documentElement)&&(i=window.pageYOffset,o=e.getBoundingClientRect().top+i),Wp(t,{top:o,left:0,duration:r,easing:s})}function Qp(e){if(e===void 0){const t="The element passed to scrollIntoView() was undefined.";throw new Error(t)}if(!(e instanceof HTMLElement))throw new Error(`The element passed to scrollIntoView() must be a valid element. You passed ${e}.`)}function Yp(e){const t={window:{y:"scrollY",x:"scrollX"},element:{y:"scrollTop",x:"scrollLeft"}},n="y";return e instanceof Window?t.window[n]:t.element[n]}function Sc(e={}){return e.behavior==="smooth"&&(e.easing="ease-in-out",e.duration=bc),e.behavior==="auto"&&(e.duration=0,e.easing="linear"),e}function Xp(e){const t=jn.getDocument();return e===t.body||e===t.documentElement||e instanceof Window?t.body.scrollTop||t.documentElement.scrollTop:e.scrollTop}function Jp(e,t){const n=jn.getDocument();e===n.body||e===n.documentElement||e instanceof Window?(n.body.scrollTop=t,n.documentElement.scrollTop=t):e.scrollTop=t}const jn={getDocument(){return document}},Vo={linear(e){return e},"ease-in"(e){return e*e},"ease-out"(e){return e*(2-e)},"ease-in-out"(e){return e<.5?2*e*e:-1+(4-2*e)*e}},Zp=e=>{const n=Vo[e||"linear"];if(!n){const r=Object.keys(Vo).join(",");throw new Error(`Scroll error: scroller does not support an easing option of "${e}". Supported options are ${r}`)}return n},tm=document.getElementById("aboutMe-btn"),em=document.getElementById("aboutMe");tm.addEventListener("click",()=>{Ic(em,document.body,{duration:1e3,easing:"ease-in"})});const nm=document.getElementById("skills-btn"),rm=document.getElementById("skills");nm.addEventListener("click",()=>{Ic(rm,document.body,{duration:1e3,easing:"ease-in",top:"2000px"})});
