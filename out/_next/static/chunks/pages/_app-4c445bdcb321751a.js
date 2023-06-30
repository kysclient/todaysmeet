(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{74444:function(a,b,c){"use strict";c.d(b,{BH:function(){return x},L:function(){return l},LL:function(){return I},P0:function(){return u},Pz:function(){return w},Sg:function(){return y},UG:function(){return B},ZR:function(){return H},aH:function(){return v},"b$":function(){return D},eu:function(){return G},hl:function(){return F},"k$":function(){return W},m9:function(){return X},ne:function(){return S},pd:function(){return R},q4:function(){return t},ru:function(){return C},tV:function(){return m},uI:function(){return A},vZ:function(){return N},w1:function(){return E},xO:function(){return P},xb:function(){return M},"z$":function(){return z},zd:function(){return Q}});var d=c(83454);/**
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
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ let e={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},f=function(a){return Error("Firebase Database ("+e.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)},g=function(a){let b=[],c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:e<2048?(b[c++]=e>>6|192,b[c++]=63&e|128):(64512&e)==55296&&d+1<a.length&&(64512&a.charCodeAt(d+1))==56320?(e=65536+((1023&e)<<10)+(1023&a.charCodeAt(++d)),b[c++]=e>>18|240,b[c++]=e>>12&63|128,b[c++]=e>>6&63|128,b[c++]=63&e|128):(b[c++]=e>>12|224,b[c++]=e>>6&63|128,b[c++]=63&e|128)}return b},h=function(a){let b=[],c=0,d=0;for(;c<a.length;){let e=a[c++];if(e<128)b[d++]=String.fromCharCode(e);else if(e>191&&e<224){let f=a[c++];b[d++]=String.fromCharCode((31&e)<<6|63&f)}else if(e>239&&e<365){let g=a[c++],h=a[c++],i=a[c++],j=((7&e)<<18|(63&g)<<12|(63&h)<<6|63&i)-65536;b[d++]=String.fromCharCode(55296+(j>>10)),b[d++]=String.fromCharCode(56320+(1023&j))}else{let k=a[c++],l=a[c++];b[d++]=String.fromCharCode((15&e)<<12|(63&k)<<6|63&l)}}return b.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(a,b){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();let c=b?this.byteToCharMapWebSafe_:this.byteToCharMap_,d=[];for(let e=0;e<a.length;e+=3){let f=a[e],g=e+1<a.length,h=g?a[e+1]:0,i=e+2<a.length,j=i?a[e+2]:0,k=f>>2,l=(3&f)<<4|h>>4,m=(15&h)<<2|j>>6,n=63&j;i||(n=64,g||(m=64)),d.push(c[k],c[l],c[m],c[n])}return d.join("")},encodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?btoa(a):this.encodeByteArray(g(a),b)},decodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?atob(a):h(this.decodeStringToByteArray(a,b))},decodeStringToByteArray(a,b){this.init_();let c=b?this.charToByteMapWebSafe_:this.charToByteMap_,d=[];for(let e=0;e<a.length;){let f=c[a.charAt(e++)],g=e<a.length,h=g?c[a.charAt(e)]:0;++e;let i=e<a.length,k=i?c[a.charAt(e)]:64;++e;let l=e<a.length,m=l?c[a.charAt(e)]:64;if(++e,null==f||null==h||null==k||null==m)throw new j;let n=f<<2|h>>4;if(d.push(n),64!==k){let o=h<<4&240|k>>2;if(d.push(o),64!==m){let p=k<<6&192|m;d.push(p)}}}return d},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class j extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let k=function(a){let b=g(a);return i.encodeByteArray(b,!0)},l=function(a){return k(a).replace(/\./g,"")},m=function(a){try{return i.decodeString(a,!0)}catch(b){console.error("base64Decode failed: ",b)}return null};function n(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:let c=b;return new Date(c.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(let d in b)b.hasOwnProperty(d)&&o(d)&&(a[d]=n(a[d],b[d]));return a}function o(a){return"__proto__"!==a}/**
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
 */ let p=()=>/**
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
 */ /**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */ (function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==c.g)return c.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,q=()=>{if(void 0===d|| void 0===d.env)return;let a=d.env.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},r=()=>{if("undefined"==typeof document)return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(b){return}let c=a&&m(a[1]);return c&&JSON.parse(c)},s=()=>{try{return p()||q()||r()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},t=a=>{var b,c;return null===(c=null===(b=s())|| void 0===b?void 0:b.emulatorHosts)|| void 0===c?void 0:c[a]},u=a=>{let b=t(a);if(!b)return;let c=b.lastIndexOf(":");if(c<=0||c+1===b.length)throw Error(`Invalid host ${b} with no separate hostname and port!`);let d=parseInt(b.substring(c+1),10);return"["===b[0]?[b.substring(1,c-1),d]:[b.substring(0,c),d]},v=()=>{var a;return null===(a=s())|| void 0===a?void 0:a.config},w=a=>{var b;return null===(b=s())|| void 0===b?void 0:b[`_${a}`]};/**
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
 */ class x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}wrapCallback(a){return(b,c)=>{b?this.reject(b):this.resolve(c),"function"==typeof a&&(this.promise.catch(()=>{}),1===a.length?a(b):a(b,c))}}}/**
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
 */ function y(a,b){if(a.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let c=b||"demo-project",d=a.iat||0,e=a.sub||a.user_id;if(!e)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let f=Object.assign({iss:`https://securetoken.google.com/${c}`,aud:c,iat:d,exp:d+3600,auth_time:d,sub:e,user_id:e,firebase:{sign_in_provider:"custom",identities:{}}},a);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(f)),""].join(".")}/**
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
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function z(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function A(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function B(){var a;let b=null===(a=s())|| void 0===a?void 0:a.forceEnvironment;if("node"===b)return!0;if("browser"===b)return!1;try{return"[object process]"===Object.prototype.toString.call(c.g.process)}catch(d){return!1}}function C(){let a="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof a&& void 0!==a.id}function D(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function E(){let a=z();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function F(){try{return"object"==typeof indexedDB}catch(a){return!1}}function G(){return new Promise((a,b)=>{try{let c=!0,d="validate-browser-context-for-indexeddb-analytics-module",e=self.indexedDB.open(d);e.onsuccess=()=>{e.result.close(),c||self.indexedDB.deleteDatabase(d),a(!0)},e.onupgradeneeded=()=>{c=!1},e.onerror=()=>{var a;b((null===(a=e.error)|| void 0===a?void 0:a.message)||"")}}catch(f){b(f)}})}class H extends Error{constructor(a,b,c){super(b),this.code=a,this.customData=c,this.name="FirebaseError",Object.setPrototypeOf(this,H.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(a,b,c){this.service=a,this.serviceName=b,this.errors=c}create(a,...b){let c=b[0]||{},d=`${this.service}/${a}`,e=this.errors[a],f=e?J(e,c):"Error",g=`${this.serviceName}: ${f} (${d}).`,h=new H(d,g,c);return h}}function J(a,b){return a.replace(K,(a,c)=>{let d=b[c];return null!=d?String(d):`<${c}?>`})}let K=/\{\$([^}]+)}/g;/**
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
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function L(a){return JSON.parse(a)}function M(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}function N(a,b){if(a===b)return!0;let c=Object.keys(a),d=Object.keys(b);for(let e of c){if(!d.includes(e))return!1;let f=a[e],g=b[e];if(O(f)&&O(g)){if(!N(f,g))return!1}else if(f!==g)return!1}for(let h of d)if(!c.includes(h))return!1;return!0}function O(a){return null!==a&&"object"==typeof a}/**
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
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function P(a){let b=[];for(let[c,d]of Object.entries(a))Array.isArray(d)?d.forEach(a=>{b.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):b.push(encodeURIComponent(c)+"="+encodeURIComponent(d));return b.length?"&"+b.join("&"):""}function Q(a){let b={},c=a.replace(/^\?/,"").split("&");return c.forEach(a=>{if(a){let[c,d]=a.split("=");b[decodeURIComponent(c)]=decodeURIComponent(d)}}),b}function R(a){let b=a.indexOf("?");if(!b)return"";let c=a.indexOf("#",b);return a.substring(b,c>0?c:void 0)}function S(a,b){let c=new T(a,b);return c.subscribe.bind(c)}class T{constructor(a,b){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=b,this.task.then(()=>{a(this)}).catch(a=>{this.error(a)})}next(a){this.forEachObserver(b=>{b.next(a)})}error(a){this.forEachObserver(b=>{b.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,b,c){let d;if(void 0===a&& void 0===b&& void 0===c)throw Error("Missing Observer.");void 0===(d=U(a,["next","error","complete"])?a:{next:a,error:b,complete:c}).next&&(d.next=V),void 0===d.error&&(d.error=V),void 0===d.complete&&(d.complete=V);let e=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch(a){}}),this.observers.push(d),e}unsubscribeOne(a){void 0!==this.observers&& void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&& void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let b=0;b<this.observers.length;b++)this.sendOne(b,a)}sendOne(a,b){this.task.then(()=>{if(void 0!==this.observers&& void 0!==this.observers[a])try{b(this.observers[a])}catch(c){"undefined"!=typeof console&&console.error&&console.error(c)}})}close(a){!this.finalized&&(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(a,b){if("object"!=typeof a||null===a)return!1;for(let c of b)if(c in a&&"function"==typeof a[c])return!0;return!1}function V(){}/**
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
 */ /**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */ let W=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{let b=16*Math.random()|0;return("x"===a?b:3&b|8).toString(16)})};/**
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
 */ function X(a){return a&&a._delegate?a._delegate:a}},83454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(77663)},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(64036)}])},82108:function(a,b,c){"use strict";c.d(b,{HD:function(){return o},aC:function(){return p}});var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(67294),i=c(19451),j=c(36100),k=c(12982),l=c(87570),m=c(85195),n=(0,h.createContext)(null);function o(a){var b,c=a.children,e=(0,h.useState)(null),o=e[0],p=e[1],q=(0,h.useState)(null),r=q[0],s=q[1],t=(0,h.useState)(null),u=t[0],v=t[1],w=(0,h.useState)(!0),x=w[0],y=w[1];(0,h.useEffect)(function(){var a,b=(a=(0,d.Z)(f().mark(function a(b){var c,d,e,g,h,i,k,n,o,q,r,s,t;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.uid,d=b.displayName,e=b.photoURL,a.next=3,(0,j.QT)((0,j.JU)(l.W$,c));case 3:if((g=a.sent).exists()){a.next=33;break}h=!1,i="";case 7:if(h){a.next=17;break}return k=null==d?void 0:d.replace(/\s/g,"").toLowerCase(),n=(0,m.X)(1,1e4),i="".concat(k).concat(n),a.next=13,(0,j.QT)((0,j.JU)(l.W$,i));case 13:(o=a.sent).exists()||(h=!0),a.next=7;break;case 17:return q={id:c,bio:null,name:d,theme:null,accent:null,website:null,location:null,photoURL:e,username:i,verified:!1,following:[],followers:[],createdAt:(0,j.Bt)(),updatedAt:null,totalTweets:0,totalPhotos:0,pinnedTweet:null,coverPhotoURL:null},r={likes:[],tweets:[],updatedAt:null},a.prev=19,a.next=22,Promise.all([(0,j.pl)((0,j.JU)(l.W$,c),q),(0,j.pl)((0,j.JU)((0,l.bR)(c),"stats"),r)]);case 22:return a.next=24,(0,j.QT)((0,j.JU)(l.W$,c));case 24:p(s=a.sent.data()),a.next=31;break;case 28:a.prev=28,a.t0=a.catch(19),v(a.t0);case 31:a.next=34;break;case 33:p(t=g.data());case 34:y(!1);case 35:case"end":return a.stop()}},a,null,[[19,28]])})),function(b){return a.apply(this,arguments)}),c=function(a){y(!0),a?b(a):(p(null),y(!1))};(0,i.Aj)(k.I,c)},[]),(0,h.useEffect)(function(){if(o){var a=o.id,b=(0,j.cf)((0,j.JU)(l.W$,a),function(a){p(a.data())}),c=(0,j.cf)((0,l.we)(a),function(a){s(a.docs.map(function(a){return a.data()}))});return function(){b(),c()}}},[null==o?void 0:o.id]);var z,A=(b=(0,d.Z)(f().mark(function a(){var b,c;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,b=new i.hJ,a.next=4,(0,i.rh)(k.I,b);case 4:c=a.sent,console.log("authResponse : ",c),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),v(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])})),function(){return b.apply(this,arguments)}),B=(z=(0,d.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,i.w7)(k.I);case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),v(a.t0);case 8:case"end":return a.stop()}},a,null,[[0,5]])})),function(){return z.apply(this,arguments)}),C=!!o&&"kimyushin7002"===o.username,D=(0,h.useMemo)(m.w,[null==o?void 0:o.id]);return(0,g.jsx)(n.Provider,{value:{user:o,error:u,loading:x,isAdmin:C,randomSeed:D,userBookmarks:r,signOut:B,signInWithGoogle:A},children:c})}function p(){var a=(0,h.useContext)(n);if(!a)throw Error("useAuth must be used within an AuthContextProvider");return a}},75655:function(a,b,c){"use strict";c.d(b,{Fg:function(){return l},ze:function(){return k}});var d=c(85893),e=c(67294),f=c(47359),g=c(82108),h=(0,e.createContext)(null);function i(){var a=localStorage.getItem("theme"),b=window.matchMedia("(prefers-color-scheme: dark)").matches;return null!=a?a:b?"dark":"light"}function j(){var a=localStorage.getItem("accent");return null!=a?a:"blue"}function k(a){var b=a.children,c=(0,e.useState)(i),k=c[0],l=c[1],m=(0,e.useState)(j),n=m[0],o=m[1],p=(0,g.aC)().user,q=null!=p?p:{},r=q.id,s=q.theme,t=q.accent;(0,e.useEffect)(function(){p&&s&&l(s)},[r,s]),(0,e.useEffect)(function(){p&&t&&o(t)},[r,t]),(0,e.useEffect)(function(){var a=function(a){var b=document.documentElement;if("dark"===("dim"===a?"dark":a)?b.classList.add("dark"):b.classList.remove("dark"),b.style.setProperty("--main-background","var(--".concat(a,"-background)")),b.style.setProperty("--main-search-background","var(--".concat(a,"-search-background)")),b.style.setProperty("--main-sidebar-background","var(--".concat(a,"-sidebar-background)")),p)return localStorage.setItem("theme",a),setTimeout(function(){(0,f.Zs)(p.id,{theme:a})},500)}(k);return function(){return clearTimeout(a)}},[r,k]),(0,e.useEffect)(function(){var a=function(a){if(document.documentElement.style.setProperty("--main-accent","var(--accent-".concat(a,")")),p)return localStorage.setItem("accent",a),setTimeout(function(){(0,f.Zs)(p.id,{accent:a})},500)}(n);return function(){return clearTimeout(a)}},[r,n]);var u=function(a){return l(a.target.value)},v=function(a){return o(a.target.value)};return(0,d.jsx)(h.Provider,{value:{theme:k,accent:n,changeTheme:u,changeAccent:v},children:b})}function l(){var a=(0,e.useContext)(h);if(!a)throw Error("useTheme must be used within an ThemeContextProvider");return a}},12982:function(a,b,c){"use strict";c.d(b,{I:function(){return i},db:function(){return j},t:function(){return k}});var d=c(47456);/**
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
 */ (0,d.KN)("firebase","9.22.2","app");var e=c(19451),f=c(36100),g=c(86650),h={apiKey:"AIzaSyBcZ7t0Ypsh-Lgp8zT0lor062N_FbpsXYo",authDomain:"bungsin-6e5d8.firebaseapp.com",projectId:"bungsin-6e5d8",storageBucket:"gs://bungsin-6e5d8.appspot.com",messagingSenderId:"1008574918904",appId:"bungsin-6e5d8",measurementId:"YOUR_FIREBASE_MEASUREMENT_ID"};(0,d.ZF)(function(){if(Object.values(h).some(function(a){return!a}))throw Error("Firebase config is not set or incomplete");return h}());var i=(0,e.v0)(),j=(0,f.ad)(),k=(0,g.cF)()},87570:function(a,b,c){"use strict";c.d(b,{Sz:function(){return k},VV:function(){return j},we:function(){return l},bR:function(){return m},"W$":function(){return i}});var d=c(36100),e=c(26042),f={toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.data(b);return(0,e.Z)({},c)}},g={toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.data(b);return(0,e.Z)({},c)}},h=c(12982),i=(0,d.hJ)(h.db,"users").withConverter({toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.data(b);return(0,e.Z)({},c)}}),j=(0,d.hJ)(h.db,"tweets").withConverter({toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.id,d=a.data(b);return(0,e.Z)({id:c},d)}}),k=(0,d.hJ)(h.db,"trends").withConverter({toFirestore:function(a){return(0,e.Z)({},a)},fromFirestore:function(a,b){var c=a.data(b);return(0,e.Z)({},c)}});function l(a){return(0,d.hJ)(h.db,"users/".concat(a,"/bookmarks")).withConverter(f)}function m(a){return(0,d.hJ)(h.db,"users/".concat(a,"/stats")).withConverter(g)}},47359:function(a,b,c){"use strict";c.d(b,{"$1":function(){return G},Al:function(){return q},BB:function(){return o},EJ:function(){return m},Mq:function(){return E},R1:function(){return L},X_:function(){return w},Zs:function(){return s},"_A":function(){return A},"_S":function(){return u},aE:function(){return K},as:function(){return O},eg:function(){return C},gL:function(){return y},iq:function(){return I},mN:function(){return M}});var d=c(47568),e=c(26042),f=c(69396),g=c(34051),h=c.n(g),i=c(36100),j=c(86650),k=c(12982),l=c(87570);function m(a){return n.apply(this,arguments)}function n(){return(n=(0,d.Z)(h().mark(function a(b){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.PL)((0,i.IO)(l.W$,(0,i.ar)("username","==",b),(0,i.b9)(1)));case 2:return c=a.sent.empty,a.abrupt("return",c);case 4:case"end":return a.stop()}},a)}))).apply(this,arguments)}function o(a){return p.apply(this,arguments)}function p(){return(p=(0,d.Z)(h().mark(function a(b){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.Yp)(b);case 2:return c=a.sent,a.abrupt("return",c.data().count);case 4:case"end":return a.stop()}},a)}))).apply(this,arguments)}function q(a,b){return r.apply(this,arguments)}function r(){return(r=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,b),a.next=3,(0,i.r7)(d,(0,f.Z)((0,e.Z)({},c),{updatedAt:(0,i.Bt)()}));case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function s(a,b){return t.apply(this,arguments)}function t(){return(t=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,b),a.next=3,(0,i.r7)(d,(0,e.Z)({},c));case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function u(a,b){return v.apply(this,arguments)}function v(){return(v=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,b),a.next=3,(0,i.r7)(d,(0,f.Z)((0,e.Z)({},c&&{username:c}),{updatedAt:(0,i.Bt)()}));case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function w(a,b,c){return x.apply(this,arguments)}function x(){return(x=(0,d.Z)(h().mark(function a(b,c,d){var e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=(0,i.JU)(l.W$,c),a.next=3,(0,i.r7)(e,{updatedAt:(0,i.Bt)(),pinnedTweet:"pin"===b?d:null});case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function y(a,b,c){return z.apply(this,arguments)}function z(){return(z=(0,d.Z)(h().mark(function a(b,c,d){var e,f,g;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=(0,i.qs)(k.db),f=(0,i.JU)(l.W$,c),g=(0,i.JU)(l.W$,d),"follow"===b?(e.update(f,{following:(0,i.vr)(d),updatedAt:(0,i.Bt)()}),e.update(g,{followers:(0,i.vr)(c),updatedAt:(0,i.Bt)()})):(e.update(f,{following:(0,i.Ab)(d),updatedAt:(0,i.Bt)()}),e.update(g,{followers:(0,i.Ab)(c),updatedAt:(0,i.Bt)()})),a.next=6,e.commit();case 6:case"end":return a.stop()}},a)}))).apply(this,arguments)}function A(a){return B.apply(this,arguments)}function B(){return(B=(0,d.Z)(h().mark(function a(b){var c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=(0,i.JU)(l.VV,b),a.next=3,(0,i.oe)(c);case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function C(a,b){return D.apply(this,arguments)}function D(){return(D=(0,d.Z)(h().mark(function a(b,c){var e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c.length){a.next=2;break}return a.abrupt("return",null);case 2:return a.next=4,Promise.all(c.map(function(){var a=(0,d.Z)(h().mark(function a(c){var d,e,f,g;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=c.id,f=c.name,g=(0,j.iH)(k.t,"images/".concat(b,"/").concat(f)),a.prev=3,a.next=6,(0,j.Jt)(g);case 6:d=a.sent,a.next=16;break;case 9:return a.prev=9,a.t0=a.catch(3),a.next=13,(0,j.B0)(g,c);case 13:return a.next=15,(0,j.Jt)(g);case 15:d=a.sent;case 16:return a.abrupt("return",{id:e,src:d,alt:f});case 17:case"end":return a.stop()}},a,null,[[3,9]])}));return function(b){return a.apply(this,arguments)}}()));case 4:return e=a.sent,a.abrupt("return",e);case 6:case"end":return a.stop()}},a)}))).apply(this,arguments)}function E(a,b){return F.apply(this,arguments)}function F(){return(F=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.VV,c),a.prev=1,a.next=4,(0,i.r7)(d,{userReplies:(0,i.nP)("increment"===b?1:-1),updatedAt:(0,i.Bt)()});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}},a,null,[[1,6]])}))).apply(this,arguments)}function G(a,b){return H.apply(this,arguments)}function H(){return(H=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,c),a.next=3,(0,i.r7)(d,{totalTweets:(0,i.nP)("increment"===b?1:-1),updatedAt:(0,i.Bt)()});case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function I(a,b){return J.apply(this,arguments)}function J(){return(J=(0,d.Z)(h().mark(function a(b,c){var d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(0,i.JU)(l.W$,c),a.next=3,(0,i.r7)(d,{totalPhotos:(0,i.nP)("increment"===b?1:-1),updatedAt:(0,i.Bt)()});case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function K(a,b,c){return(0,d.Z)(h().mark(function d(){var e,f,g;return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return e=(0,i.qs)(k.db),f=(0,i.JU)(l.VV,c),g=(0,i.JU)((0,l.bR)(b),"stats"),"retweet"===a?(e.update(f,{userRetweets:(0,i.vr)(b),updatedAt:(0,i.Bt)()}),e.update(g,{tweets:(0,i.vr)(c),updatedAt:(0,i.Bt)()})):(e.update(f,{userRetweets:(0,i.Ab)(b),updatedAt:(0,i.Bt)()}),e.update(g,{tweets:(0,i.Ab)(c),updatedAt:(0,i.Bt)()})),d.next=6,e.commit();case 6:case"end":return d.stop()}},d)}))}function L(a,b,c){return(0,d.Z)(h().mark(function d(){var e,f,g;return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return e=(0,i.qs)(k.db),f=(0,i.JU)((0,l.bR)(b),"stats"),g=(0,i.JU)(l.VV,c),"like"===a?(e.update(g,{userLikes:(0,i.vr)(b),updatedAt:(0,i.Bt)()}),e.update(f,{likes:(0,i.vr)(c),updatedAt:(0,i.Bt)()})):(e.update(g,{userLikes:(0,i.Ab)(b),updatedAt:(0,i.Bt)()}),e.update(f,{likes:(0,i.Ab)(c),updatedAt:(0,i.Bt)()})),d.next=6,e.commit();case 6:case"end":return d.stop()}},d)}))}function M(a,b,c){return N.apply(this,arguments)}function N(){return(N=(0,d.Z)(h().mark(function a(b,c,d){var e,f;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e=(0,i.JU)((0,l.we)(c),d),"bookmark"!==b){a.next=7;break}return f={id:d,createdAt:(0,i.Bt)()},a.next=5,(0,i.pl)(e,f);case 5:a.next=9;break;case 7:return a.next=9,(0,i.oe)(e);case 9:case"end":return a.stop()}},a)}))).apply(this,arguments)}function O(a){return P.apply(this,arguments)}function P(){return(P=(0,d.Z)(h().mark(function a(b){var c,d,e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=(0,l.we)(b),a.next=3,(0,i.PL)(c);case 3:return d=a.sent,e=(0,i.qs)(k.db),d.forEach(function(a){var b=a.ref;return e.delete(b)}),a.next=8,e.commit();case 8:case"end":return a.stop()}},a)}))).apply(this,arguments)}},85195:function(a,b,c){"use strict";c.d(b,{X:function(){return f},w:function(){return e}});var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";function e(){return Array.from({length:20}).reduce(function(a){return a+d[~~(Math.random()*d.length)]},"")}function f(a,b){return Math.floor(Math.random()*(b-a+1))+a}},64036:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return k}});var d=c(26042),e=c(85893);c(1720);var f=c(82108),g=c(75655),h=c(9008),i=c.n(h);function j(){return(0,e.jsxs)(i(),{children:[(0,e.jsx)("title",{children:"Twitter"}),(0,e.jsx)("meta",{name:"og:title",content:"Twitter"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,e.jsx)("link",{rel:"manifest",href:"/site.webmanifest"},"site-manifest"),(0,e.jsx)("meta",{name:"twitter:site",content:"@ccrsxx"}),(0,e.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}function k(a){var b,c=a.Component,h=a.pageProps,i=null!==(b=c.getLayout)&& void 0!==b?b:function(a){return a};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j,{}),(0,e.jsx)(f.HD,{children:(0,e.jsx)(g.ze,{children:i((0,e.jsx)(c,(0,d.Z)({},h)))})})]})}},1720:function(){},77663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},9008:function(a,b,c){a.exports=c(5443)},47456:function(a,b,c){"use strict";c.d(b,{Jn:function(){return K},qX:function(){return H},Xd:function(){return G},Mq:function(){return M},ZF:function(){return L},KN:function(){return N}});var d,e=c(8463),f=c(53333),g=c(74444);let h=(a,b)=>b.some(b=>a instanceof b),i,j,k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return l.get(a);if("objectStoreNames"===b)return a.objectStoreNames||m.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return q(a[b])},set(a,b,c){return a[b]=c,!0},has(a,b){return a instanceof IDBTransaction&&("done"===b||"store"===b)||b in a}};function q(a){if(a instanceof IDBRequest)return function(a){let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("success",e),a.removeEventListener("error",f)},e=()=>{b(q(a.result)),d()},f=()=>{c(a.error),d()};a.addEventListener("success",e),a.addEventListener("error",f)});return b.then(b=>{b instanceof IDBCursor&&k.set(b,a)}).catch(()=>{}),o.set(b,a),b}(a);if(n.has(a))return n.get(a);let b=function(a){if("function"==typeof a){var b;return(b=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(b)?function(...a){return b.apply(r(this),a),q(k.get(this))}:function(...a){return q(b.apply(r(this),a))}:function(a,...c){let d=b.call(r(this),a,...c);return m.set(d,a.sort?a.sort():[a]),q(d)}}return(a instanceof IDBTransaction&&function(a){if(l.has(a))return;let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("complete",e),a.removeEventListener("error",f),a.removeEventListener("abort",f)},e=()=>{b(),d()},f=()=>{c(a.error||new DOMException("AbortError","AbortError")),d()};a.addEventListener("complete",e),a.addEventListener("error",f),a.addEventListener("abort",f)});l.set(a,b)}(a),h(a,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(a,p):a}(a);return b!==a&&(n.set(a,b),o.set(b,a)),b}let r=a=>o.get(a),s=["get","getKey","getAll","getAllKeys","count"],t=["put","add","delete","clear"],u=new Map;function v(a,b){if(!(a instanceof IDBDatabase&&!(b in a)&&"string"==typeof b))return;if(u.get(b))return u.get(b);let c=b.replace(/FromIndex$/,""),d=b!==c,e=t.includes(c);if(!(c in(d?IDBIndex:IDBObjectStore).prototype)||!(e||s.includes(c)))return;let f=async function(a,...b){let f=this.transaction(a,e?"readwrite":"readonly"),g=f.store;return d&&(g=g.index(b.shift())),(await Promise.all([g[c](...b),e&&f.done,]))[0]};return u.set(b,f),f}!function(a){p=a(p)}(a=>({...a,get:(b,c,d)=>v(b,c)||a.get(b,c,d),has:(b,c)=>!!v(b,c)||a.has(b,c)}));/**
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
 */ class w{constructor(a){this.container=a}getPlatformInfoString(){let a=this.container.getProviders();return a.map(a=>{if(!x(a))return null;{let b=a.getImmediate();return`${b.library}/${b.version}`}}).filter(a=>a).join(" ")}}function x(a){let b=a.getComponent();return(null==b?void 0:b.type)==="VERSION"}let y="@firebase/app",z="0.9.12",A=new f.Yd("@firebase/app"),B="[DEFAULT]",C={[y]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,E=new Map;function F(a,b){try{a.container.addComponent(b)}catch(c){A.debug(`Component ${b.name} failed to register with FirebaseApp ${a.name}`,c)}}function G(a){let b=a.name;if(E.has(b))return A.debug(`There were multiple attempts to register component ${b}.`),!1;for(let c of(E.set(b,a),D.values()))F(c,a);return!0}function H(a,b){let c=a.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),a.container.getProvider(b)}let I=new g.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */ class J{constructor(a,b,c){this._isDeleted=!1,this._options=Object.assign({},a),this._config=Object.assign({},b),this._name=b.name,this._automaticDataCollectionEnabled=b.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new e.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}/**
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
 */ /**
 * The current SDK version.
 *
 * @public
 */ let K="9.22.2";function L(a,b={}){let c=a;if("object"!=typeof b){let d=b;b={name:d}}let f=Object.assign({name:B,automaticDataCollectionEnabled:!1},b),h=f.name;if("string"!=typeof h||!h)throw I.create("bad-app-name",{appName:String(h)});if(c||(c=(0,g.aH)()),!c)throw I.create("no-options");let i=D.get(h);if(i){if((0,g.vZ)(c,i.options)&&(0,g.vZ)(f,i.config))return i;throw I.create("duplicate-app",{appName:h})}let j=new e.H0(h);for(let k of E.values())j.addComponent(k);let l=new J(c,f,j);return D.set(h,l),l}function M(a=B){let b=D.get(a);if(!b&&a===B&&(0,g.aH)())return L();if(!b)throw I.create("no-app",{appName:a});return b}function N(a,b,c){var d;let f=null!==(d=C[a])&& void 0!==d?d:a;c&&(f+=`-${c}`);let g=f.match(/\s|\//),h=b.match(/\s|\//);if(g||h){let i=[`Unable to register library "${f}" with version "${b}":`];g&&i.push(`library name "${f}" contains illegal characters (whitespace or "/")`),g&&h&&i.push("and"),h&&i.push(`version name "${b}" contains illegal characters (whitespace or "/")`),A.warn(i.join(" "));return}G(new e.wA(`${f}-version`,()=>({library:f,version:b}),"VERSION"))}let O="firebase-heartbeat-store",P=null;function Q(){return P||(P=(function(a,b,{blocked:c,upgrade:d,blocking:e,terminated:f}={}){let g=indexedDB.open(a,1),h=q(g);return d&&g.addEventListener("upgradeneeded",a=>{d(q(g.result),a.oldVersion,a.newVersion,q(g.transaction),a)}),c&&g.addEventListener("blocked",a=>c(a.oldVersion,a.newVersion,a)),h.then(a=>{f&&a.addEventListener("close",()=>f()),e&&a.addEventListener("versionchange",a=>e(a.oldVersion,a.newVersion,a))}).catch(()=>{}),h})("firebase-heartbeat-database",1,{upgrade:(a,b)=>{0===b&&a.createObjectStore(O)}}).catch(a=>{throw I.create("idb-open",{originalErrorMessage:a.message})})),P}async function R(a){try{let b=await Q(),c=await b.transaction(O).objectStore(O).get(T(a));return c}catch(d){if(d instanceof g.ZR)A.warn(d.message);else{let e=I.create("idb-get",{originalErrorMessage:null==d?void 0:d.message});A.warn(e.message)}}}async function S(a,b){try{let c=await Q(),d=c.transaction(O,"readwrite"),e=d.objectStore(O);await e.put(b,T(a)),await d.done}catch(f){if(f instanceof g.ZR)A.warn(f.message);else{let h=I.create("idb-set",{originalErrorMessage:null==f?void 0:f.message});A.warn(h.message)}}}function T(a){return`${a.name}!${a.options.appId}`}class U{constructor(a){this.container=a,this._heartbeatsCache=null;let b=this.container.getProvider("app").getImmediate();this._storage=new X(b),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){let a=this.container.getProvider("platform-logger").getImmediate(),b=a.getPlatformInfoString(),c=V();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(a=>a.date===c))?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:b}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let b=new Date(a.date).valueOf(),c=Date.now();return c-b<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let a=V(),{heartbeatsToSend:b,unsentEntries:c}=W(this._heartbeatsCache.heartbeats),d=(0,g.L)(JSON.stringify({version:2,heartbeats:b}));return this._heartbeatsCache.lastSentHeartbeatDate=a,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function V(){let a=new Date;return a.toISOString().substring(0,10)}function W(a,b=1024){let c=[],d=a.slice();for(let e of a){let f=c.find(a=>a.agent===e.agent);if(f){if(f.dates.push(e.date),Y(c)>b){f.dates.pop();break}}else if(c.push({agent:e.agent,dates:[e.date]}),Y(c)>b){c.pop();break}d=d.slice(1)}return{heartbeatsToSend:c,unsentEntries:d}}class X{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,g.hl)()&&(0,g.eu)().then(()=>!0).catch(()=>!1)}async read(){let a=await this._canUseIndexedDBPromise;if(!a)return{heartbeats:[]};{let b=await R(this.app);return b||{heartbeats:[]}}}async overwrite(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:a.heartbeats})}}async add(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:[...d.heartbeats,...a.heartbeats]})}}}function Y(a){return(0,g.L)(JSON.stringify({version:2,heartbeats:a})).length}G(new e.wA("platform-logger",a=>new w(a),"PRIVATE")),G(new e.wA("heartbeat",a=>new U(a),"PRIVATE")),N(y,z,""),N(y,z,"esm2017"),N("fire-js","")},8463:function(a,b,c){"use strict";c.d(b,{H0:function(){return j},wA:function(){return e}});var d=c(74444);class e{constructor(a,b,c){this.name=a,this.instanceFactory=b,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
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
 */ let f="[DEFAULT]";/**
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
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class g{constructor(a,b){this.name=a,this.container=b,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){let b=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(b)){let c=new d.BH;if(this.instancesDeferred.set(b,c),this.isInitialized(b)||this.shouldAutoInitialize())try{let e=this.getOrInitializeService({instanceIdentifier:b});e&&c.resolve(e)}catch(f){}}return this.instancesDeferred.get(b).promise}getImmediate(a){var b;let c=this.normalizeInstanceIdentifier(null==a?void 0:a.identifier),d=null!==(b=null==a?void 0:a.optional)&& void 0!==b&&b;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(e){if(d)return null;throw e}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,this.shouldAutoInitialize()){if(i(a))try{this.getOrInitializeService({instanceIdentifier:f})}catch(b){}for(let[c,d]of this.instancesDeferred.entries()){let e=this.normalizeInstanceIdentifier(c);try{let g=this.getOrInitializeService({instanceIdentifier:e});d.resolve(g)}catch(h){}}}}clearInstance(a=f){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){let a=Array.from(this.instances.values());await Promise.all([...a.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...a.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return null!=this.component}isInitialized(a=f){return this.instances.has(a)}getOptions(a=f){return this.instancesOptions.get(a)||{}}initialize(a={}){let{options:b={}}=a,c=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let d=this.getOrInitializeService({instanceIdentifier:c,options:b});for(let[e,f]of this.instancesDeferred.entries()){let g=this.normalizeInstanceIdentifier(e);c===g&&f.resolve(d)}return d}onInit(a,b){var c;let d=this.normalizeInstanceIdentifier(b),e=null!==(c=this.onInitCallbacks.get(d))&& void 0!==c?c:new Set;e.add(a),this.onInitCallbacks.set(d,e);let f=this.instances.get(d);return f&&a(f,d),()=>{e.delete(a)}}invokeOnInitCallbacks(a,b){let c=this.onInitCallbacks.get(b);if(c)for(let d of c)try{d(a,b)}catch(e){}}getOrInitializeService({instanceIdentifier:a,options:b={}}){let c=this.instances.get(a);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:h(a),options:b}),this.instances.set(a,c),this.instancesOptions.set(a,b),this.invokeOnInitCallbacks(c,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,c)}catch(d){}return c||null}normalizeInstanceIdentifier(a=f){return this.component?this.component.multipleInstances?a:f:a}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function h(a){return a===f?void 0:a}function i(a){return"EAGER"===a.instantiationMode}/**
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
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class j{constructor(a){this.name=a,this.providers=new Map}addComponent(a){let b=this.getProvider(a.name);if(b.isComponentSet())throw Error(`Component ${a.name} has already been registered with ${this.name}`);b.setComponent(a)}addOrOverwriteComponent(a){let b=this.getProvider(a.name);b.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);let b=new g(a,this);return this.providers.set(a,b),b}getProviders(){return Array.from(this.providers.values())}}},53333:function(a,b,c){"use strict";var d,e;c.d(b,{Yd:function(){return j},in:function(){return d}});(e=d||(d={}))[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let f={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},g=d.INFO,h={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},i=(a,b,...c)=>{if(b<a.logLevel)return;let d=new Date().toISOString(),e=h[b];if(e)console[e](`[${d}]  ${a.name}:`,...c);else throw Error(`Attempted to log a message with an invalid logType (value: ${b})`)};class j{constructor(a){this.name=a,this._logLevel=g,this._logHandler=i,this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in d))throw TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel="string"==typeof a?f[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!=typeof a)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...a),this._logHandler(this,d.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...a),this._logHandler(this,d.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,d.INFO,...a),this._logHandler(this,d.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,d.WARN,...a),this._logHandler(this,d.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...a),this._logHandler(this,d.ERROR,...a)}}},47568:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}}c.d(b,{Z:function(){return e}})},14924:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.d(b,{Z:function(){return d}})},26042:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(14924);function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){(0,d.Z)(a,b,c[b])})}return a}},69396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})},19451:function(a,b,c){"use strict";c.d(b,{hJ:function(){return a_},v0:function(){return cy},Aj:function(){return bf},rh:function(){return bS},w7:function(){return bg}});var d,e=c(74444),f=c(47456),g=function(a,b){return(g=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},h=function(){return(h=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function i(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}function j(a){return this instanceof j?(this.v=a,this):new j(a)}var k=c(53333),l=c(8463);function m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let n=m,o=new e.LL("auth","Firebase",m()),p=new k.Yd("@firebase/auth");function q(a,...b){p.logLevel<=k.in.ERROR&&p.error(`Auth (${f.Jn}): ${a}`,...b)}/**
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
 */ function r(a,...b){throw v(a,...b)}function s(a,...b){return v(a,...b)}function t(a,b,c){let d=Object.assign(Object.assign({},n()),{[b]:c}),f=new e.LL("auth","Firebase",d);return f.create(b,{appName:a.name})}function u(a,b,c){let d=c;if(!(b instanceof d))throw d.name!==b.constructor.name&&r(a,"argument-error"),t(a,"argument-error",`Type of ${b.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(a,...b){if("string"!=typeof a){let c=b[0],d=[...b.slice(1)];return d[0]&&(d[0].appName=a.name),a._errorFactory.create(c,...d)}return o.create(a,...b)}function w(a,b,...c){if(!a)throw v(b,...c)}function x(a){let b="INTERNAL ASSERTION FAILED: "+a;throw q(b),Error(b)}function y(a,b){a||x(b)}/**
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
 */ function z(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.href)||""}function A(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.protocol)||null}/**
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
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class B{constructor(a,b){this.shortDelay=a,this.longDelay=b,y(b>a,"Short delay should be less than long delay!"),this.isMobile=(0,e.uI)()||(0,e.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===A()||"https:"===A()||(0,e.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */ function C(a,b){y(a.emulator,"Emulator should always be set here");let{url:c}=a.emulator;return b?`${c}${b.startsWith("/")?b.slice(1):b}`:c}/**
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
 */ class D{static initialize(a,b,c){this.fetchImpl=a,b&&(this.headersImpl=b),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ let E={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},F=new B(3e4,6e4);function G(a,b){return a.tenantId&&!b.tenantId?Object.assign(Object.assign({},b),{tenantId:a.tenantId}):b}async function H(a,b,c,d,f={}){return I(a,f,async()=>{let f={},g={};d&&("GET"===b?g=d:f={body:JSON.stringify(d)});let h=(0,e.xO)(Object.assign({key:a.config.apiKey},g)).slice(1),i=await a._getAdditionalHeaders();return i["Content-Type"]="application/json",a.languageCode&&(i["X-Firebase-Locale"]=a.languageCode),D.fetch()(K(a,a.config.apiHost,c,h),Object.assign({method:b,headers:i,referrerPolicy:"no-referrer"},f))})}async function I(a,b,c){a._canInitEmulator=!1;let d=Object.assign(Object.assign({},E),b);try{let f=new L(a),g=await Promise.race([c(),f.promise]);f.clearNetworkTimeout();let h=await g.json();if("needConfirmation"in h)throw M(a,"account-exists-with-different-credential",h);if(g.ok&&!("errorMessage"in h))return h;{let i=g.ok?h.errorMessage:h.error.message,[j,k]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===j)throw M(a,"credential-already-in-use",h);if("EMAIL_EXISTS"===j)throw M(a,"email-already-in-use",h);if("USER_DISABLED"===j)throw M(a,"user-disabled",h);let l=d[j]||j.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw t(a,l,k);r(a,l)}}catch(m){if(m instanceof e.ZR)throw m;r(a,"network-request-failed",{message:String(m)})}}async function J(a,b,c,d,e={}){let f=await H(a,b,c,d,e);return"mfaPendingCredential"in f&&r(a,"multi-factor-auth-required",{_serverResponse:f}),f}function K(a,b,c,d){let e=`${b}${c}?${d}`;return a.config.emulator?C(a.config,e):`${a.config.apiScheme}://${e}`}class L{constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((a,b)=>{this.timer=setTimeout(()=>b(s(this.auth,"network-request-failed")),F.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(a,b,c){let d={appName:a.name};c.email&&(d.email=c.email),c.phoneNumber&&(d.phoneNumber=c.phoneNumber);let e=s(a,b,d);return e.customData._tokenResponse=c,e}/**
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
 */ async function N(a,b){return H(a,"POST","/v1/accounts:delete",b)}async function O(a,b){return H(a,"POST","/v1/accounts:lookup",b)}/**
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
 */ function P(a){if(a)try{let b=new Date(Number(a));if(!isNaN(b.getTime()))return b.toUTCString()}catch(c){}}async function Q(a,b=!1){let c=(0,e.m9)(a),d=await c.getIdToken(b),f=S(d);w(f&&f.exp&&f.auth_time&&f.iat,c.auth,"internal-error");let g="object"==typeof f.firebase?f.firebase:void 0,h=null==g?void 0:g.sign_in_provider;return{claims:f,token:d,authTime:P(R(f.auth_time)),issuedAtTime:P(R(f.iat)),expirationTime:P(R(f.exp)),signInProvider:h||null,signInSecondFactor:(null==g?void 0:g.sign_in_second_factor)||null}}function R(a){return 1e3*Number(a)}function S(a){let[b,c,d]=a.split(".");if(void 0===b|| void 0===c|| void 0===d)return q("JWT malformed, contained fewer than 3 sections"),null;try{let f=(0,e.tV)(c);if(!f)return q("Failed to decode base64 JWT payload"),null;return JSON.parse(f)}catch(g){return q("Caught error parsing JWT payload as JSON",null==g?void 0:g.toString()),null}}/**
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
 */ async function T(a,b,c=!1){if(c)return b;try{return await b}catch(d){throw d instanceof e.ZR&&U(d)&&a.auth.currentUser===a&&await a.auth.signOut(),d}}function U({code:a}){return"auth/user-disabled"===a||"auth/user-token-expired"===a}/**
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
 */ class V{constructor(a,b){this.createdAt=a,this.lastLoginAt=b,this._initializeTime()}_initializeTime(){this.lastSignInTime=P(this.lastLoginAt),this.creationTime=P(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */ async function W(a){var b;let c=a.auth,d=await a.getIdToken(),e=await T(a,O(c,{idToken:d}));w(null==e?void 0:e.users.length,c,"internal-error");let f=e.users[0];a._notifyReloadListener(f);let g=(null===(b=f.providerUserInfo)|| void 0===b?void 0:b.length)?Z(f.providerUserInfo):[],h=Y(a.providerData,g),i=a.isAnonymous,j=!(a.email&&f.passwordHash)&&!(null==h?void 0:h.length),k={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:h,metadata:new V(f.createdAt,f.lastLoginAt),isAnonymous:!!i&&j};Object.assign(a,k)}async function X(a){let b=(0,e.m9)(a);await W(b),await b.auth._persistUserIfCurrent(b),b.auth._notifyListenersIfCurrent(b)}function Y(a,b){let c=a.filter(a=>!b.some(b=>b.providerId===a.providerId));return[...c,...b]}function Z(a){return a.map(a=>{var{providerId:b}=a,c=i(a,["providerId"]);return{providerId:b,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
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
 */ async function $(a,b){let c=await I(a,{},async()=>{let c=(0,e.xO)({grant_type:"refresh_token",refresh_token:b}).slice(1),{tokenApiHost:d,apiKey:f}=a.config,g=K(a,d,"/v1/token",`key=${f}`),h=await a._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(g,{method:"POST",headers:h,body:c})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}/**
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
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class _{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){w(a.idToken,"internal-error"),w(void 0!==a.idToken,"internal-error"),w(void 0!==a.refreshToken,"internal-error");let b="expiresIn"in a&& void 0!==a.expiresIn?Number(a.expiresIn):function(a){let b=S(a);return w(b,"internal-error"),w(void 0!==b.exp,"internal-error"),w(void 0!==b.iat,"internal-error"),Number(b.exp)-Number(b.iat)}(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,b)}async getToken(a,b=!1){return(w(!this.accessToken||this.refreshToken,a,"user-token-expired"),b||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(a,b){let{accessToken:c,refreshToken:d,expiresIn:e}=await $(a,b);this.updateTokensAndExpiration(c,d,Number(e))}updateTokensAndExpiration(a,b,c){this.refreshToken=b||null,this.accessToken=a||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(a,b){let{refreshToken:c,accessToken:d,expirationTime:e}=b,f=new _;return c&&(w("string"==typeof c,"internal-error",{appName:a}),f.refreshToken=c),d&&(w("string"==typeof d,"internal-error",{appName:a}),f.accessToken=d),e&&(w("number"==typeof e,"internal-error",{appName:a}),f.expirationTime=e),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new _,this.toJSON())}_performRefresh(){return x("not implemented")}}/**
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
 */ function aa(a,b){w("string"==typeof a|| void 0===a,"internal-error",{appName:b})}class ab{constructor(a){var{uid:b,auth:c,stsTokenManager:d}=a,e=i(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new /**
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
 */ class{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(a){var b;if(a){let c=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),c}{this.errorBackoff=3e4;let d=null!==(b=this.user.stsTokenManager.expirationTime)&& void 0!==b?b:0,e=d-Date.now()-3e5;return Math.max(0,e)}}schedule(a=!1){if(!this.isRunning)return;let b=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},b)}async iteration(){try{await this.user.getIdToken(!0)}catch(a){(null==a?void 0:a.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=b,this.auth=c,this.stsTokenManager=d,this.accessToken=d.accessToken,this.displayName=e.displayName||null,this.email=e.email||null,this.emailVerified=e.emailVerified||!1,this.phoneNumber=e.phoneNumber||null,this.photoURL=e.photoURL||null,this.isAnonymous=e.isAnonymous||!1,this.tenantId=e.tenantId||null,this.providerData=e.providerData?[...e.providerData]:[],this.metadata=new V(e.createdAt||void 0,e.lastLoginAt||void 0)}async getIdToken(a){let b=await T(this,this.stsTokenManager.getToken(this.auth,a));return w(b,this.auth,"internal-error"),this.accessToken!==b&&(this.accessToken=b,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),b}getIdTokenResult(a){return Q(this,a)}reload(){return X(this)}_assign(a){this!==a&&(w(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(a=>Object.assign({},a)),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){let b=new ab(Object.assign(Object.assign({},this),{auth:a,stsTokenManager:this.stsTokenManager._clone()}));return b.metadata._copy(this.metadata),b}_onReload(a){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,b=!1){let c=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),c=!0),b&&await W(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){let a=await this.getIdToken();return await T(this,N(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>Object.assign({},a)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,b){var c,d,e,f,g,h,i,j;let k=null!==(c=b.displayName)&& void 0!==c?c:void 0,l=null!==(d=b.email)&& void 0!==d?d:void 0,m=null!==(e=b.phoneNumber)&& void 0!==e?e:void 0,n=null!==(f=b.photoURL)&& void 0!==f?f:void 0,o=null!==(g=b.tenantId)&& void 0!==g?g:void 0,p=null!==(h=b._redirectEventId)&& void 0!==h?h:void 0,q=null!==(i=b.createdAt)&& void 0!==i?i:void 0,r=null!==(j=b.lastLoginAt)&& void 0!==j?j:void 0,{uid:s,emailVerified:t,isAnonymous:u,providerData:v,stsTokenManager:x}=b;w(s&&x,a,"internal-error");let y=_.fromJSON(this.name,x);w("string"==typeof s,a,"internal-error"),aa(k,a.name),aa(l,a.name),w("boolean"==typeof t,a,"internal-error"),w("boolean"==typeof u,a,"internal-error"),aa(m,a.name),aa(n,a.name),aa(o,a.name),aa(p,a.name),aa(q,a.name),aa(r,a.name);let z=new ab({uid:s,auth:a,email:l,emailVerified:t,displayName:k,isAnonymous:u,photoURL:n,phoneNumber:m,tenantId:o,stsTokenManager:y,createdAt:q,lastLoginAt:r});return v&&Array.isArray(v)&&(z.providerData=v.map(a=>Object.assign({},a))),p&&(z._redirectEventId=p),z}static async _fromIdTokenResponse(a,b,c=!1){let d=new _;d.updateFromServerResponse(b);let e=new ab({uid:b.localId,auth:a,stsTokenManager:d,isAnonymous:c});return await W(e),e}}/**
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
 */ let ac=new Map;function ad(a){y(a instanceof Function,"Expected a class definition");let b=ac.get(a);return b?(y(b instanceof a,"Instance stored in cache mismatched with class"),b):(b=new a,ac.set(a,b),b)}/**
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
 */ class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,b){this.storage[a]=b}async _get(a){let b=this.storage[a];return void 0===b?null:b}async _remove(a){delete this.storage[a]}_addListener(a,b){}_removeListener(a,b){}}ae.type="NONE";let af=ae;/**
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
 */ function ag(a,b,c){return`firebase:${a}:${b}:${c}`}class ah{constructor(a,b,c){this.persistence=a,this.auth=b,this.userKey=c;let{config:d,name:e}=this.auth;this.fullUserKey=ag(this.userKey,d.apiKey,e),this.fullPersistenceKey=ag("persistence",d.apiKey,e),this.boundEventHandler=b._onStorageEvent.bind(b),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){let a=await this.persistence._get(this.fullUserKey);return a?ab._fromJSON(this.auth,a):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;let b=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,b)return this.setCurrentUser(b)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,b,c="authUser"){if(!b.length)return new ah(ad(af),a,c);let d=(await Promise.all(b.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a),e=d[0]||ad(af),f=ag(c,a.config.apiKey,a.name),g=null;for(let h of b)try{let i=await h._get(f);if(i){let j=ab._fromJSON(a,i);h!==e&&(g=j),e=h;break}}catch(k){}let l=d.filter(a=>a._shouldAllowMigration);return e._shouldAllowMigration&&l.length&&(e=l[0],g&&await e._set(f,g.toJSON()),await Promise.all(b.map(async a=>{if(a!==e)try{await a._remove(f)}catch(b){}}))),new ah(e,a,c)}}/**
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
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function ai(a){let b=a.toLowerCase();if(b.includes("opera/")||b.includes("opr/")||b.includes("opios/"))return"Opera";if(am(b))return"IEMobile";if(b.includes("msie")||b.includes("trident/"))return"IE";{if(b.includes("edge/"))return"Edge";if(aj(b))return"Firefox";if(b.includes("silk/"))return"Silk";if(ao(b))return"Blackberry";if(ap(b))return"Webos";if(ak(b))return"Safari";if((b.includes("chrome/")||al(b))&&!b.includes("edge/"))return"Chrome";if(an(b))return"Android";let c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,d=a.match(c);if((null==d?void 0:d.length)===2)return d[1]}return"Other"}function aj(a=(0,e.z$)()){return/firefox\//i.test(a)}function ak(a=(0,e.z$)()){let b=a.toLowerCase();return b.includes("safari/")&&!b.includes("chrome/")&&!b.includes("crios/")&&!b.includes("android")}function al(a=(0,e.z$)()){return/crios\//i.test(a)}function am(a=(0,e.z$)()){return/iemobile/i.test(a)}function an(a=(0,e.z$)()){return/android/i.test(a)}function ao(a=(0,e.z$)()){return/blackberry/i.test(a)}function ap(a=(0,e.z$)()){return/webos/i.test(a)}function aq(a=(0,e.z$)()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function ar(a=(0,e.z$)()){return aq(a)||an(a)||ap(a)||ao(a)||/windows phone/i.test(a)||am(a)}/**
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
 */ /*
 * Determine the SDK version string
 */ function as(a,b=[]){let c;switch(a){case"Browser":c=ai((0,e.z$)());break;case"Worker":c=`${ai((0,e.z$)())}-${a}`;break;default:c=a}let d=b.length?b.join(","):"FirebaseCore-web";return`${c}/JsCore/${f.Jn}/${d}`}async function at(a,b){return H(a,"GET","/v2/recaptchaConfig",G(a,b))}function au(a){return void 0!==a&& void 0!==a.enterprise}class av{constructor(a){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===a.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=a.recaptchaKey.split("/")[3],this.emailPasswordEnabled=a.recaptchaEnforcementState.some(a=>"EMAIL_PASSWORD_PROVIDER"===a.provider&&"OFF"!==a.enforcementState)}}function aw(a){return new Promise((b,c)=>{var d,e;let f=document.createElement("script");f.setAttribute("src",a),f.onload=b,f.onerror=a=>{let b=s("internal-error");b.customData=a,c(b)},f.type="text/javascript",f.charset="UTF-8",(null!==(e=null===(d=document.getElementsByTagName("head"))|| void 0===d?void 0:d[0])&& void 0!==e?e:document).appendChild(f)})}function ax(a){return`__${a}${Math.floor(1e6*Math.random())}`}class ay{constructor(a){this.type="recaptcha-enterprise",this.auth=aB(a)}async verify(a="verify",b=!1){async function c(a){if(!b){if(null==a.tenantId&&null!=a._agentRecaptchaConfig)return a._agentRecaptchaConfig.siteKey;if(null!=a.tenantId&& void 0!==a._tenantRecaptchaConfigs[a.tenantId])return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(b,c)=>{at(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(void 0===d.recaptchaKey)c(Error("recaptcha Enterprise site key undefined"));else{let e=new av(d);return null==a.tenantId?a._agentRecaptchaConfig=e:a._tenantRecaptchaConfigs[a.tenantId]=e,b(e.siteKey)}}).catch(a=>{c(a)})})}function d(b,c,d){let e=window.grecaptcha;au(e)?e.enterprise.ready(()=>{e.enterprise.execute(b,{action:a}).then(a=>{c(a)}).catch(()=>{c("NO_RECAPTCHA")})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,e)=>{c(this.auth).then(c=>{if(!b&&au(window.grecaptcha))d(c,a,e);else{if("undefined"==typeof window){e(Error("RecaptchaVerifier is only supported in browser"));return}aw("https://www.google.com/recaptcha/enterprise.js?render="+c).then(()=>{d(c,a,e)}).catch(a=>{e(a)})}}).catch(a=>{e(a)})})}}async function az(a,b,c,d=!1){let e=new ay(a),f;try{f=await e.verify(c)}catch(g){f=await e.verify(c,!0)}let h=Object.assign({},b);return d?Object.assign(h,{captchaResp:f}):Object.assign(h,{captchaResponse:f}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}/**
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
 */ class aA{constructor(a,b,c,d){this.app=a,this.heartbeatServiceProvider=b,this.appCheckServiceProvider=c,this.config=d,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new aC(this),this.idTokenSubscription=new aC(this),this.beforeStateQueue=new /**
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
 */ class{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,b){let c=b=>new Promise((c,d)=>{try{let e=a(b);c(e)}catch(f){d(f)}});c.onAbort=b,this.queue.push(c);let d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(a){if(this.auth.currentUser===a)return;let b=[];try{for(let c of this.queue)await c(a),c.onAbort&&b.push(c.onAbort)}catch(d){for(let e of(b.reverse(),b))try{e()}catch(f){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==d?void 0:d.message})}}}(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=d.sdkClientVersion}_initializeWithPersistence(a,b){return b&&(this._popupRedirectResolver=ad(b)),this._initializationPromise=this.queue(async()=>{var c,d;if(!this._deleted&&(this.persistenceManager=await ah.create(this,a),!this._deleted)){if(null===(c=this._popupRedirectResolver)|| void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(b),this.lastNotifiedUid=(null===(d=this.currentUser)|| void 0===d?void 0:d.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let a=await this.assertedPersistence.getCurrentUser();if(this.currentUser||a){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUser(a){var b;let c=await this.assertedPersistence.getCurrentUser(),d=c,e=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let f=null===(b=this.redirectUser)|| void 0===b?void 0:b._redirectEventId,g=null==d?void 0:d._redirectEventId,h=await this.tryRedirectSignIn(a);(!f||f===g)&&(null==h?void 0:h.user)&&(d=h.user,e=!0)}if(!d)return this.directlySetCurrentUser(null);if(!d._redirectEventId){if(e)try{await this.beforeStateQueue.runMiddleware(d)}catch(i){d=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return d?this.reloadAndSetCurrentUserOrClear(d):this.directlySetCurrentUser(null)}return(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===d._redirectEventId)?this.directlySetCurrentUser(d):this.reloadAndSetCurrentUserOrClear(d)}async tryRedirectSignIn(a){let b=null;try{b=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch(c){await this._setRedirectUser(null)}return b}async reloadAndSetCurrentUserOrClear(a){try{await W(a)}catch(b){if((null==b?void 0:b.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let a=navigator;return a.languages&&a.languages[0]||a.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(a){let b=a?(0,e.m9)(a):null;return b&&w(b.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(b&&b._clone(this))}async _updateCurrentUser(a,b=!1){if(!this._deleted)return a&&w(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),b||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(a){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ad(a))})}async initializeRecaptchaConfig(){let a=await at(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),b=new av(a);if(null==this.tenantId?this._agentRecaptchaConfig=b:this._tenantRecaptchaConfigs[this.tenantId]=b,b.emailPasswordEnabled){let c=new ay(this);c.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(a){this._errorFactory=new e.LL("auth","Firebase",a())}onAuthStateChanged(a,b,c){return this.registerStateListener(this.authStateSubscription,a,b,c)}beforeAuthStateChanged(a,b){return this.beforeStateQueue.pushCallback(a,b)}onIdTokenChanged(a,b,c){return this.registerStateListener(this.idTokenSubscription,a,b,c)}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(a=this._currentUser)|| void 0===a?void 0:a.toJSON()}}async _setRedirectUser(a,b){let c=await this.getOrInitRedirectPersistenceManager(b);return null===a?c.removeCurrentUser():c.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){let b=a&&ad(a)||this._popupRedirectResolver;w(b,this,"argument-error"),this.redirectPersistenceManager=await ah.create(this,[ad(b._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){var b,c;return(this._isInitialized&&await this.queue(async()=>{}),(null===(b=this._currentUser)|| void 0===b?void 0:b._redirectEventId)===a)?this._currentUser:(null===(c=this.redirectUser)|| void 0===c?void 0:c._redirectEventId)===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var a,b;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let c=null!==(b=null===(a=this.currentUser)|| void 0===a?void 0:a.uid)&& void 0!==b?b:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,b,c,d){if(this._deleted)return()=>{};let e="function"==typeof b?b:b.next.bind(b),f=this._isInitialized?Promise.resolve():this._initializationPromise;return(w(f,this,"internal-error"),f.then(()=>e(this.currentUser)),"function"==typeof b)?a.addObserver(b,c,d):a.addObserver(b)}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!(!a||this.frameworks.includes(a))&&(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;let b={"X-Client-Version":this.clientVersion};this.app.options.appId&&(b["X-Firebase-gmpid"]=this.app.options.appId);let c=await (null===(a=this.heartbeatServiceProvider.getImmediate({optional:!0}))|| void 0===a?void 0:a.getHeartbeatsHeader());c&&(b["X-Firebase-Client"]=c);let d=await this._getAppCheckToken();return d&&(b["X-Firebase-AppCheck"]=d),b}async _getAppCheckToken(){var a;let b=await (null===(a=this.appCheckServiceProvider.getImmediate({optional:!0}))|| void 0===a?void 0:a.getToken());return(null==b?void 0:b.error)&&function(a,...b){p.logLevel<=k.in.WARN&&p.warn(`Auth (${f.Jn}): ${a}`,...b)}(`Error while retrieving App Check token: ${b.error}`),null==b?void 0:b.token}}function aB(a){return(0,e.m9)(a)}class aC{constructor(a){this.auth=a,this.observer=null,this.addObserver=(0,e.ne)(a=>this.observer=a)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aD(a){let b=a.indexOf(":");return b<0?"":a.substr(0,b+1)}function aE(a){if(!a)return null;let b=Number(a);return isNaN(b)?null:b}/**
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
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class aF{constructor(a,b){this.providerId=a,this.signInMethod=b}toJSON(){return x("not implemented")}_getIdTokenResponse(a){return x("not implemented")}_linkToIdToken(a,b){return x("not implemented")}_getReauthenticationResolver(a){return x("not implemented")}}/**
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
 */ async function aG(a,b){return H(a,"POST","/v1/accounts:resetPassword",G(a,b))}async function aH(a,b){return H(a,"POST","/v1/accounts:update",b)}/**
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
 */ async function aI(a,b){return J(a,"POST","/v1/accounts:signInWithPassword",G(a,b))}async function aJ(a,b){return H(a,"POST","/v1/accounts:sendOobCode",G(a,b))}/**
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
 */ async function aK(a,b){return J(a,"POST","/v1/accounts:signInWithEmailLink",G(a,b))}async function aL(a,b){return J(a,"POST","/v1/accounts:signInWithEmailLink",G(a,b))}/**
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
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class aM extends aF{constructor(a,b,c,d=null){super("password",c),this._email=a,this._password=b,this._tenantId=d}static _fromEmailAndPassword(a,b){return new aM(a,b,"password")}static _fromEmailAndCode(a,b,c=null){return new aM(a,b,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a;if((null==b?void 0:b.email)&&(null==b?void 0:b.password)){if("password"===b.signInMethod)return this._fromEmailAndPassword(b.email,b.password);if("emailLink"===b.signInMethod)return this._fromEmailAndCode(b.email,b.password,b.tenantId)}return null}async _getIdTokenResponse(a){var b;switch(this.signInMethod){case"password":let c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(b=a._getRecaptchaConfig())|| void 0===b||!b.emailPasswordEnabled)return aI(a,c).catch(async b=>{if("auth/missing-recaptcha-token"!==b.code)return Promise.reject(b);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let d=await az(a,c,"signInWithPassword");return aI(a,d)}});{let d=await az(a,c,"signInWithPassword");return aI(a,d)}case"emailLink":return aK(a,{email:this._email,oobCode:this._password});default:r(a,"internal-error")}}async _linkToIdToken(a,b){switch(this.signInMethod){case"password":return aH(a,{idToken:b,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aL(a,{idToken:b,email:this._email,oobCode:this._password});default:r(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}/**
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
 */ async function aN(a,b){return J(a,"POST","/v1/accounts:signInWithIdp",G(a,b))}class aO extends aF{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){let b=new aO(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(b.idToken=a.idToken),a.accessToken&&(b.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(b.nonce=a.nonce),a.pendingToken&&(b.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(b.accessToken=a.oauthToken,b.secret=a.oauthTokenSecret):r("argument-error"),b}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d}=b,e=i(b,["providerId","signInMethod"]);if(!c||!d)return null;let f=new aO(c,d);return f.idToken=e.idToken||void 0,f.accessToken=e.accessToken||void 0,f.secret=e.secret,f.nonce=e.nonce,f.pendingToken=e.pendingToken||null,f}_getIdTokenResponse(a){let b=this.buildRequest();return aN(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aN(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aN(a,b)}buildRequest(){let a={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{let b={};this.idToken&&(b.id_token=this.idToken),this.accessToken&&(b.access_token=this.accessToken),this.secret&&(b.oauth_token_secret=this.secret),b.providerId=this.providerId,this.nonce&&!this.pendingToken&&(b.nonce=this.nonce),a.postBody=(0,e.xO)(b)}return a}}/**
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
 */ async function aP(a,b){return H(a,"POST","/v1/accounts:sendVerificationCode",G(a,b))}async function aQ(a,b){return J(a,"POST","/v1/accounts:signInWithPhoneNumber",G(a,b))}async function aR(a,b){let c=await J(a,"POST","/v1/accounts:signInWithPhoneNumber",G(a,b));if(c.temporaryProof)throw M(a,"account-exists-with-different-credential",c);return c}let aS={USER_NOT_FOUND:"user-not-found"};async function aT(a,b){let c=Object.assign(Object.assign({},b),{operation:"REAUTH"});return J(a,"POST","/v1/accounts:signInWithPhoneNumber",G(a,c),aS)}/**
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
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class aU extends aF{constructor(a){super("phone","phone"),this.params=a}static _fromVerification(a,b){return new aU({verificationId:a,verificationCode:b})}static _fromTokenResponse(a,b){return new aU({phoneNumber:a,temporaryProof:b})}_getIdTokenResponse(a){return aQ(a,this._makeVerificationRequest())}_linkToIdToken(a,b){return aR(a,Object.assign({idToken:b},this._makeVerificationRequest()))}_getReauthenticationResolver(a){return aT(a,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:a,phoneNumber:b,verificationId:c,verificationCode:d}=this.params;return a&&b?{temporaryProof:a,phoneNumber:b}:{sessionInfo:c,code:d}}toJSON(){let a={providerId:this.providerId};return this.params.phoneNumber&&(a.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(a.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(a.verificationCode=this.params.verificationCode),this.params.verificationId&&(a.verificationId=this.params.verificationId),a}static fromJSON(a){"string"==typeof a&&(a=JSON.parse(a));let{verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}=a;return c||b||d||e?new aU({verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}):null}}class aV{constructor(a){var b,c,d,f,g,h;let i=(0,e.zd)((0,e.pd)(a)),j=null!==(b=i.apiKey)&& void 0!==b?b:null,k=null!==(c=i.oobCode)&& void 0!==c?c:null,l=/**
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
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(d=i.mode)&& void 0!==d?d:null);w(j&&k&&l,"argument-error"),this.apiKey=j,this.operation=l,this.code=k,this.continueUrl=null!==(f=i.continueUrl)&& void 0!==f?f:null,this.languageCode=null!==(g=i.languageCode)&& void 0!==g?g:null,this.tenantId=null!==(h=i.tenantId)&& void 0!==h?h:null}static parseLink(a){let b=function(a){let b=(0,e.zd)((0,e.pd)(a)).link,c=b?(0,e.zd)((0,e.pd)(b)).deep_link_id:null,d=(0,e.zd)((0,e.pd)(a)).deep_link_id,f=d?(0,e.zd)((0,e.pd)(d)).link:null;return f||d||c||b||a}(a);try{return new aV(b)}catch(c){return null}}}/**
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
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class aW{constructor(){this.providerId=aW.PROVIDER_ID}static credential(a,b){return aM._fromEmailAndPassword(a,b)}static credentialWithLink(a,b){let c=aV.parseLink(b);return w(c,"argument-error"),aM._fromEmailAndCode(a,c.code,c.tenantId)}}aW.PROVIDER_ID="password",aW.EMAIL_PASSWORD_SIGN_IN_METHOD="password",aW.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class aX{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}/**
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
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class aY extends aX{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class aZ extends null{static credentialFromJSON(a){let b="string"==typeof a?JSON.parse(a):a;return w("providerId"in b&&"signInMethod"in b,"argument-error"),aO._fromParams(b)}credential(a){return this._credential(Object.assign(Object.assign({},a),{nonce:a.rawNonce}))}_credential(a){return w(a.idToken||a.accessToken,"argument-error"),aO._fromParams(Object.assign(Object.assign({},a),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(a){return aZ.oauthCredentialFromTaggedObject(a)}static credentialFromError(a){return aZ.oauthCredentialFromTaggedObject(a.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c,oauthTokenSecret:d,pendingToken:e,nonce:f,providerId:g}=a;if(!c&&!d&&!b&&!e||!g)return null;try{return new aZ(g)._credential({idToken:b,accessToken:c,nonce:f,pendingToken:e})}catch(h){return null}}}/**
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
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class a$ extends aY{constructor(){super("facebook.com")}static credential(a){return aO._fromParams({providerId:a$.PROVIDER_ID,signInMethod:a$.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return a$.credentialFromTaggedObject(a)}static credentialFromError(a){return a$.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return a$.credential(a.oauthAccessToken)}catch(b){return null}}}a$.FACEBOOK_SIGN_IN_METHOD="facebook.com",a$.PROVIDER_ID="facebook.com";/**
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
 */ /**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class a_ extends aY{constructor(){super("google.com"),this.addScope("profile")}static credential(a,b){return aO._fromParams({providerId:a_.PROVIDER_ID,signInMethod:a_.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:b})}static credentialFromResult(a){return a_.credentialFromTaggedObject(a)}static credentialFromError(a){return a_.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c}=a;if(!b&&!c)return null;try{return a_.credential(b,c)}catch(d){return null}}}a_.GOOGLE_SIGN_IN_METHOD="google.com",a_.PROVIDER_ID="google.com";/**
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
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class a0 extends aY{constructor(){super("github.com")}static credential(a){return aO._fromParams({providerId:a0.PROVIDER_ID,signInMethod:a0.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return a0.credentialFromTaggedObject(a)}static credentialFromError(a){return a0.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return a0.credential(a.oauthAccessToken)}catch(b){return null}}}a0.GITHUB_SIGN_IN_METHOD="github.com",a0.PROVIDER_ID="github.com";class a1 extends null{constructor(a,b){super(a,a),this.pendingToken=b}_getIdTokenResponse(a){let b=this.buildRequest();return aN(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aN(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aN(a,b)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d,pendingToken:e}=b;return c&&d&&e&&c===d?new a1(c,e):null}static _create(a,b){return new a1(a,b)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class a2 extends null{constructor(a){w(a.startsWith("saml."),"argument-error"),super(a)}static credentialFromResult(a){return a2.samlCredentialFromTaggedObject(a)}static credentialFromError(a){return a2.samlCredentialFromTaggedObject(a.customData||{})}static credentialFromJSON(a){let b=a1.fromJSON(a);return w(b,"argument-error"),b}static samlCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{pendingToken:b,providerId:c}=a;if(!b||!c)return null;try{return a1._create(c,b)}catch(d){return null}}}/**
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
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class a3 extends aY{constructor(){super("twitter.com")}static credential(a,b){return aO._fromParams({providerId:a3.PROVIDER_ID,signInMethod:a3.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:b})}static credentialFromResult(a){return a3.credentialFromTaggedObject(a)}static credentialFromError(a){return a3.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthAccessToken:b,oauthTokenSecret:c}=a;if(!b||!c)return null;try{return a3.credential(b,c)}catch(d){return null}}}a3.TWITTER_SIGN_IN_METHOD="twitter.com",a3.PROVIDER_ID="twitter.com";/**
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
 */ class a4{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,b,c,d=!1){let e=await ab._fromIdTokenResponse(a,c,d),f=a5(c),g=new a4({user:e,providerId:f,_tokenResponse:c,operationType:b});return g}static async _forOperation(a,b,c){await a._updateTokensIfNecessary(c,!0);let d=a5(c);return new a4({user:a,providerId:d,_tokenResponse:c,operationType:b})}}function a5(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
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
 */ class a6 extends e.ZR{constructor(a,b,c,d){var e;super(b.code,b.message),this.operationType=c,this.user=d,Object.setPrototypeOf(this,a6.prototype),this.customData={appName:a.name,tenantId:null!==(e=a.tenantId)&& void 0!==e?e:void 0,_serverResponse:b.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(a,b,c,d){return new a6(a,b,c,d)}}function a7(a,b,c,d){let e="reauthenticate"===b?c._getReauthenticationResolver(a):c._getIdTokenResponse(a);return e.catch(c=>{if("auth/multi-factor-auth-required"===c.code)throw a6._fromErrorAndOperation(a,c,b,d);throw c})}async function a8(a,b,c=!1){let d=await T(a,b._linkToIdToken(a.auth,await a.getIdToken()),c);return a4._forOperation(a,"link",d)}async function a9(a,b,c){var d;await W(b);let e=(d=b.providerData,new Set(d.map(({providerId:a})=>a).filter(a=>!!a)));w(e.has(c)===a,b.auth,!1===a?"provider-already-linked":"no-such-provider")}/**
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
 */ async function ba(a,b,c=!1){let{auth:d}=a,e="reauthenticate";try{let f=await T(a,a7(d,e,b,a),c);w(f.idToken,d,"internal-error");let g=S(f.idToken);w(g,d,"internal-error");let{sub:h}=g;return w(a.uid===h,d,"user-mismatch"),a4._forOperation(a,e,f)}catch(i){throw(null==i?void 0:i.code)==="auth/user-not-found"&&r(d,"user-mismatch"),i}}/**
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
 */ async function bb(a,b,c=!1){let d="signIn",e=await a7(a,d,b),f=await a4._fromIdTokenResponse(a,d,e);return c||await a._updateCurrentUser(f.user),f}/**
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
 */ class bc{constructor(a,b){this.factorId=a,this.uid=b.mfaEnrollmentId,this.enrollmentTime=new Date(b.enrolledAt).toUTCString(),this.displayName=b.displayName}static _fromServerResponse(a,b){return"phoneInfo"in b?bd._fromServerResponse(a,b):"totpInfo"in b?be._fromServerResponse(a,b):r(a,"internal-error")}}class bd extends null{constructor(a){super("phone",a),this.phoneNumber=a.phoneInfo}static _fromServerResponse(a,b){return new bd(b)}}class be extends null{constructor(a){super("totp",a)}static _fromServerResponse(a,b){return new be(b)}}function bf(a,b,c,d){return(0,e.m9)(a).onAuthStateChanged(b,c,d)}function bg(a){return(0,e.m9)(a).signOut()}class bh{constructor(a,b,c){this.type=a,this.credential=b,this.auth=c}static _fromIdtoken(a,b){return new bh("enroll",a,b)}static _fromMfaPendingCredential(a){return new bh("signin",a)}toJSON(){let a="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[a]:this.credential}}}static fromJSON(a){var b,c;if(null==a?void 0:a.multiFactorSession){if(null===(b=a.multiFactorSession)|| void 0===b?void 0:b.pendingCredential)return bh._fromMfaPendingCredential(a.multiFactorSession.pendingCredential);if(null===(c=a.multiFactorSession)|| void 0===c?void 0:c.idToken)return bh._fromIdtoken(a.multiFactorSession.idToken)}return null}}/**
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
 */ class bi{constructor(a,b,c){this.session=a,this.hints=b,this.signInResolver=c}static _fromError(a,b){let c=aB(a),d=b.customData._serverResponse,e=(d.mfaInfo||[]).map(a=>bc._fromServerResponse(c,a));w(d.mfaPendingCredential,c,"internal-error");let f=bh._fromMfaPendingCredential(d.mfaPendingCredential);return new bi(f,e,async a=>{let e=await a._process(c,f);delete d.mfaInfo,delete d.mfaPendingCredential;let g=Object.assign(Object.assign({},d),{idToken:e.idToken,refreshToken:e.refreshToken});switch(b.operationType){case"signIn":let h=await a4._fromIdTokenResponse(c,b.operationType,g);return await c._updateCurrentUser(h.user),h;case"reauthenticate":return w(b.user,c,"internal-error"),a4._forOperation(b.user,b.operationType,g);default:r(c,"internal-error")}})}async resolveSignIn(a){return this.signInResolver(a)}}class bj{constructor(a){this.user=a,this.enrolledFactors=[],a._onReload(b=>{b.mfaInfo&&(this.enrolledFactors=b.mfaInfo.map(b=>bc._fromServerResponse(a.auth,b)))})}static _fromUser(a){return new bj(a)}async getSession(){return bh._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(a,b){let c=await this.getSession(),d=await T(this.user,a._process(this.user.auth,c,b));return await this.user._updateTokensIfNecessary(d),this.user.reload()}async unenroll(a){let b="string"==typeof a?a:a.uid,c=await this.user.getIdToken();try{var d,e;let f=await T(this.user,(d=this.user.auth,e={idToken:c,mfaEnrollmentId:b},H(d,"POST","/v2/accounts/mfaEnrollment:withdraw",G(d,e))));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==b),await this.user._updateTokensIfNecessary(f),await this.user.reload()}catch(g){throw g}}}new WeakMap;let bk="__sak";/**
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
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class bl{constructor(a,b){this.storageRetriever=a,this.type=b}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(bk,"1"),this.storage.removeItem(bk),Promise.resolve(!0)}catch(a){return Promise.resolve(!1)}}_set(a,b){return this.storage.setItem(a,JSON.stringify(b)),Promise.resolve()}_get(a){let b=this.storage.getItem(a);return Promise.resolve(b?JSON.parse(b):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}class bm extends bl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,b)=>this.onStorageEvent(a,b),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
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
 */ function(){let a=(0,e.z$)();return ak(a)||aq(a)}()&&function(){try{return!!(window&&window!==window.top)}catch(a){return!1}}(),this.fallbackToPolling=ar(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(let b of Object.keys(this.listeners)){let c=this.storage.getItem(b),d=this.localCache[b];c!==d&&a(b,d,c)}}onStorageEvent(a,b=!1){if(!a.key){this.forAllChangedKeys((a,b,c)=>{this.notifyListeners(a,c)});return}let c=a.key;if(b?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let d=this.storage.getItem(c);if(a.newValue!==d)null!==a.newValue?this.storage.setItem(c,a.newValue):this.storage.removeItem(c);else if(this.localCache[c]===a.newValue&&!b)return}let f=()=>{let a=this.storage.getItem(c);(b||this.localCache[c]!==a)&&this.notifyListeners(c,a)},g=this.storage.getItem(c);(0,e.w1)()&&10===document.documentMode&&g!==a.newValue&&a.newValue!==a.oldValue?setTimeout(f,10):f()}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b?JSON.parse(b):b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,b,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:b,newValue:c}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,b){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(a,b){await super._set(a,b),this.localCache[a]=JSON.stringify(b)}async _get(a){let b=await super._get(a);return this.localCache[a]=JSON.stringify(b),b}async _remove(a){await super._remove(a),delete this.localCache[a]}}bm.type="LOCAL";let bn=bm;/**
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
 */ class bo extends bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,b){}_removeListener(a,b){}}bo.type="SESSION";let bp=bo;/**
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
 */ /**
 * Interface class for receiving messages.
 *
 */ class bq{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){let b=this.receivers.find(b=>b.isListeningto(a));if(b)return b;let c=new bq(a);return this.receivers.push(c),c}isListeningto(a){return this.eventTarget===a}async handleEvent(a){var b;let c=a,{eventId:d,eventType:e,data:f}=c.data,g=this.handlersMap[e];if(!(null==g?void 0:g.size))return;c.ports[0].postMessage({status:"ack",eventId:d,eventType:e});let h=Array.from(g).map(async a=>a(c.origin,f)),i=await Promise.all((b=h).map(async a=>{try{let b=await a;return{fulfilled:!0,value:b}}catch(c){return{fulfilled:!1,reason:c}}}));c.ports[0].postMessage({status:"done",eventId:d,eventType:e,response:i})}_subscribe(a,b){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(b)}_unsubscribe(a,b){this.handlersMap[a]&&b&&this.handlersMap[a].delete(b),b&&0!==this.handlersMap[a].size||delete this.handlersMap[a],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */ function br(a="",b=10){let c="";for(let d=0;d<b;d++)c+=Math.floor(10*Math.random());return a+c}bq.receivers=[];/**
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
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class bs{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,b,c=50){let d="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!d)throw Error("connection_unavailable");let e,f;return new Promise((g,h)=>{let i=br("",20);d.port1.start();let j=setTimeout(()=>{h(Error("unsupported_event"))},c);f={messageChannel:d,onMessage(a){let b=a;if(b.data.eventId===i)switch(b.data.status){case"ack":clearTimeout(j),e=setTimeout(()=>{h(Error("timeout"))},3e3);break;case"done":clearTimeout(e),g(b.data.response);break;default:clearTimeout(j),clearTimeout(e),h(Error("invalid_response"))}}},this.handlers.add(f),d.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:a,eventId:i,data:b},[d.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */ /**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */ function bt(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */ function bu(){return void 0!==bt().WorkerGlobalScope&&"function"==typeof bt().importScripts}async function bv(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let a=await navigator.serviceWorker.ready;return a.active}catch(b){return null}}/**
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
 */ let bw="firebaseLocalStorageDb",bx="firebaseLocalStorage",by="fbase_key";class bz{constructor(a){this.request=a}toPromise(){return new Promise((a,b)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{b(this.request.error)})})}}function bA(a,b){return a.transaction([bx],b?"readwrite":"readonly").objectStore(bx)}function bB(){let a=indexedDB.open(bw,1);return new Promise((b,c)=>{a.addEventListener("error",()=>{c(a.error)}),a.addEventListener("upgradeneeded",()=>{let b=a.result;try{b.createObjectStore(bx,{keyPath:by})}catch(d){c(d)}}),a.addEventListener("success",async()=>{let c=a.result;c.objectStoreNames.contains(bx)?b(c):(c.close(),await function(){let a=indexedDB.deleteDatabase(bw);return new bz(a).toPromise()}(),b(await bB()))})})}async function bC(a,b,c){let d=bA(a,!0).put({[by]:b,value:c});return new bz(d).toPromise()}async function bD(a,b){let c=bA(a,!1).get(b),d=await new bz(c).toPromise();return void 0===d?null:d.value}function bE(a,b){let c=bA(a,!0).delete(b);return new bz(c).toPromise()}class bF{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await bB()),this.db}async _withRetries(a){let b=0;for(;;)try{let c=await this._openDb();return await a(c)}catch(d){if(b++ >3)throw d;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bq._getInstance(bu()?self:null),this.receiver._subscribe("keyChanged",async(a,b)=>{let c=await this._poll();return{keyProcessed:c.includes(b.key)}}),this.receiver._subscribe("ping",async(a,b)=>["keyChanged"])}async initializeSender(){var a,b;if(this.activeServiceWorker=await bv(),!this.activeServiceWorker)return;this.sender=new bs(this.activeServiceWorker);let c=await this.sender._send("ping",{},800);c&&(null===(a=c[0])|| void 0===a?void 0:a.fulfilled)&&(null===(b=c[0])|| void 0===b?void 0:b.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){var b;if(this.sender&&this.activeServiceWorker&&((null===(b=null==navigator?void 0:navigator.serviceWorker)|| void 0===b?void 0:b.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;let a=await bB();return await bC(a,bk,"1"),await bE(a,bk),!0}catch(b){}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,b){return this._withPendingWrite(async()=>(await this._withRetries(c=>bC(c,a,b)),this.localCache[a]=b,this.notifyServiceWorker(a)))}async _get(a){let b=await this._withRetries(b=>bD(b,a));return this.localCache[a]=b,b}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(b=>bE(b,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){let a=await this._withRetries(a=>{let b=bA(a,!1).getAll();return new bz(b).toPromise()});if(!a||0!==this.pendingWrites)return[];let b=[],c=new Set;for(let{fbase_key:d,value:e}of a)c.add(d),JSON.stringify(this.localCache[d])!==JSON.stringify(e)&&(this.notifyListeners(d,e),b.push(d));for(let f of Object.keys(this.localCache))this.localCache[f]&&!c.has(f)&&(this.notifyListeners(f,null),b.push(f));return b}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,b){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bF.type="LOCAL";let bG=bF;class bH{constructor(a,b,c){this.params=c,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let d="string"==typeof a?document.getElementById(a):a;w(d,"argument-error",{appName:b}),this.container=d,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bI(50);let{callback:a,"expired-callback":b}=this.params;if(a)try{a(this.responseToken)}catch(c){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,b)try{b()}catch(a){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}function bI(a){let b=[],c="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let d=0;d<a;d++)b.push(c.charAt(Math.floor(Math.random()*c.length)));return b.join("")}ax("rcb"),new B(3e4,6e4);async function bJ(a,b,c){var d,e,f,g,h;let i=await c.verify();try{w("string"==typeof i,a,"argument-error"),w("recaptcha"===c.type,a,"argument-error");let j;if(j="string"==typeof b?{phoneNumber:b}:b,"session"in j){let k=j.session;if("phoneNumber"in j){w("enroll"===k.type,a,"internal-error");let l=await (e=a,f={idToken:k.credential,phoneEnrollmentInfo:{phoneNumber:j.phoneNumber,recaptchaToken:i}},H(e,"POST","/v2/accounts/mfaEnrollment:start",G(e,f)));return l.phoneSessionInfo.sessionInfo}{w("signin"===k.type,a,"internal-error");let m=(null===(d=j.multiFactorHint)|| void 0===d?void 0:d.uid)||j.multiFactorUid;w(m,a,"missing-multi-factor-info");let n=await (g=a,h={mfaPendingCredential:k.credential,mfaEnrollmentId:m,phoneSignInInfo:{recaptchaToken:i}},H(g,"POST","/v2/accounts/mfaSignIn:start",G(g,h)));return n.phoneResponseInfo.sessionInfo}}{let{sessionInfo:o}=await aP(a,{phoneNumber:j.phoneNumber,recaptchaToken:i});return o}}finally{c._reset()}}/**
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
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class bK{constructor(a){this.providerId=bK.PROVIDER_ID,this.auth=aB(a)}verifyPhoneNumber(a,b){return bJ(this.auth,a,(0,e.m9)(b))}static credential(a,b){return aU._fromVerification(a,b)}static credentialFromResult(a){return bK.credentialFromTaggedObject(a)}static credentialFromError(a){return bK.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{phoneNumber:b,temporaryProof:c}=a;return b&&c?aU._fromTokenResponse(b,c):null}}/**
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
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function bL(a,b){return b?ad(b):(w(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}bK.PROVIDER_ID="phone",bK.PHONE_SIGN_IN_METHOD="phone";/**
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
 */ class bM extends aF{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return aN(a,this._buildIdpRequest())}_linkToIdToken(a,b){return aN(a,this._buildIdpRequest(b))}_getReauthenticationResolver(a){return aN(a,this._buildIdpRequest())}_buildIdpRequest(a){let b={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(b.idToken=a),b}}function bN(a){return bb(a.auth,new bM(a),a.bypassAuthState)}function bO(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),ba(c,new bM(a),a.bypassAuthState)}async function bP(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),a8(c,new bM(a),a.bypassAuthState)}/**
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
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class bQ{constructor(a,b,c,d,e=!1){this.auth=a,this.resolver=c,this.user=d,this.bypassAuthState=e,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(b)?b:[b]}execute(){return new Promise(async(a,b)=>{this.pendingPromise={resolve:a,reject:b};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(a){let{urlResponse:b,sessionId:c,postBody:d,tenantId:e,error:f,type:g}=a;if(f){this.reject(f);return}let h={auth:this.auth,requestUri:b,sessionId:c,tenantId:e||void 0,postBody:d||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(h))}catch(i){this.reject(i)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return bN;case"linkViaPopup":case"linkViaRedirect":return bP;case"reauthViaPopup":case"reauthViaRedirect":return bO;default:r(this.auth,"internal-error")}}resolve(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */ let bR=new B(2e3,1e4);async function bS(a,b,c){let d=aB(a);u(a,b,aX);let e=bL(d,c),f=new bT(d,"signInViaPopup",b,e);return f.executeNotNull()}class bT extends bQ{constructor(a,b,c,d,e){super(a,b,d,e),this.provider=c,this.authWindow=null,this.pollId=null,bT.currentPopupAction&&bT.currentPopupAction.cancel(),bT.currentPopupAction=this}async executeNotNull(){let a=await this.execute();return w(a,this.auth,"internal-error"),a}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");let a=br();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(s(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var a;return(null===(a=this.authWindow)|| void 0===a?void 0:a.associatedEvent)||null}cancel(){this.reject(s(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bT.currentPopupAction=null}pollUserCancellation(){let a=()=>{var b,c;if(null===(c=null===(b=this.authWindow)|| void 0===b?void 0:b.window)|| void 0===c?void 0:c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(s(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(a,bR.get())};a()}}bT.currentPopupAction=null;let bU=new Map;class bV extends bQ{constructor(a,b,c=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],b,void 0,c),this.eventId=null}async execute(){let a=bU.get(this.auth._key());if(!a){try{let b=await bW(this.resolver,this.auth),c=b?await super.execute():null;a=()=>Promise.resolve(c)}catch(d){a=()=>Promise.reject(d)}bU.set(this.auth._key(),a)}return this.bypassAuthState||bU.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if("signInViaRedirect"===a.type)return super.onAuthEvent(a);if("unknown"===a.type){this.resolve(null);return}if(a.eventId){let b=await this.auth._redirectUserForId(a.eventId);if(b)return this.user=b,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bW(a,b){let c=bZ(b),d=bY(a);if(!await d._isAvailable())return!1;let e=await d._get(c)==="true";return await d._remove(c),e}async function bX(a,b){return bY(a)._set(bZ(b),"true")}function bY(a){return ad(a._redirectPersistence)}function bZ(a){return ag("pendingRedirect",a.config.apiKey,a.name)}async function b$(a,b,c=!1){let d=aB(a),e=bL(d,b),f=new bV(d,e,c),g=await f.execute();return g&&!c&&(delete g.user._redirectEventId,await d._persistUserIfCurrent(g.user),await d._setRedirectUser(null,b)),g}async function b_(a){let b=br(`${a.uid}:::`);return a._redirectEventId=b,await a.auth._setRedirectUser(a),await a.auth._persistUserIfCurrent(a),b}class b0{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let b=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(a,c)&&(b=!0,this.sendToConsumer(a,c),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!b3(a)||(this.hasHandledPotentialRedirect=!0,b||(this.queuedRedirectEvent=a,b=!0)),b}sendToConsumer(a,b){var c;if(a.error&&!b2(a)){let d=(null===(c=a.error.code)|| void 0===c?void 0:c.split("auth/")[1])||"internal-error";b.onError(s(this.auth,d))}else b.onAuthEvent(a)}isEventForConsumer(a,b){let c=null===b.eventId|| !!a.eventId&&a.eventId===b.eventId;return b.filter.includes(a.type)&&c}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(b1(a))}saveEventToCache(a){this.cachedEventUids.add(b1(a)),this.lastProcessedEventTime=Date.now()}}function b1(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(a=>a).join("-")}function b2({type:a,error:b}){return"unknown"===a&&(null==b?void 0:b.code)==="auth/no-auth-event"}function b3(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b2(a);default:return!1}}/**
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
 */ async function b4(a,b={}){return H(a,"GET","/v1/projects",b)}/**
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
 */ let b5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b6=/^https?/;async function b7(a){if(a.config.emulator)return;let{authorizedDomains:b}=await b4(a);for(let c of b)try{if(b8(c))return}catch(d){}r(a,"unauthorized-domain")}function b8(a){let b=z(),{protocol:c,hostname:d}=new URL(b);if(a.startsWith("chrome-extension://")){let e=new URL(a);return""===e.hostname&&""===d?"chrome-extension:"===c&&a.replace("chrome-extension://","")===b.replace("chrome-extension://",""):"chrome-extension:"===c&&e.hostname===d}if(!b6.test(c))return!1;if(b5.test(a))return d===a;let f=a.replace(/\./g,"\\."),g=RegExp("^(.+\\."+f+"|"+f+")$","i");return g.test(d)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */ let b9=new B(3e4,6e4);function ca(){let a=bt().___jsl;if(null==a?void 0:a.H){for(let b of Object.keys(a.H))if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=[...a.H[b].L],a.CP)for(let c=0;c<a.CP.length;c++)a.CP[c]=null}}let cb=null,cc=new B(5e3,15e3),cd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ce=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function cf(a){var b,c;let d=await (b=a,cb=cb||(c=b,new Promise((a,b)=>{var d,e,f;function g(){ca(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{ca(),b(s(c,"network-request-failed"))},timeout:b9.get()})}if(null===(e=null===(d=bt().gapi)|| void 0===d?void 0:d.iframes)|| void 0===e?void 0:e.Iframe)a(gapi.iframes.getContext());else if(null===(f=bt().gapi)|| void 0===f?void 0:f.load)g();else{let h=ax("iframefcb");return bt()[h]=()=>{gapi.load?g():b(s(c,"network-request-failed"))},aw(`https://apis.google.com/js/api.js?onload=${h}`).catch(a=>b(a))}}).catch(a=>{throw cb=null,a}))),g=bt().gapi;return w(g,a,"internal-error"),d.open({where:document.body,url:function(a){let b=a.config;w(b.authDomain,a,"auth-domain-config-required");let c=b.emulator?C(b,"emulator/auth/iframe"):`https://${a.config.authDomain}/__/auth/iframe`,d={apiKey:b.apiKey,appName:a.name,v:f.Jn},g=ce.get(a.config.apiHost);g&&(d.eid=g);let h=a._getFrameworks();return h.length&&(d.fw=h.join(",")),`${c}?${(0,e.xO)(d).slice(1)}`}(a),messageHandlersFilter:g.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cd,dontclear:!0},b=>new Promise(async(c,d)=>{await b.restyle({setHideOnLeave:!1});let e=s(a,"network-request-failed"),f=bt().setTimeout(()=>{d(e)},cc.get());function g(){bt().clearTimeout(f),c(b)}b.ping(g).then(g,()=>{d(e)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */ let cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ch{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(a){}}}let ci=encodeURIComponent("fac");async function cj(a,b,c,d,g,h){w(a.config.authDomain,a,"auth-domain-config-required"),w(a.config.apiKey,a,"invalid-api-key");let i={apiKey:a.config.apiKey,appName:a.name,authType:c,redirectUrl:d,v:f.Jn,eventId:g};if(b instanceof aX)for(let[j,k]of(b.setDefaultLanguage(a.languageCode),i.providerId=b.providerId||"",(0,e.xb)(b.getCustomParameters())||(i.customParameters=JSON.stringify(b.getCustomParameters())),Object.entries(h||{})))i[j]=k;if(b instanceof aY){let l=b.getScopes().filter(a=>""!==a);l.length>0&&(i.scopes=l.join(","))}a.tenantId&&(i.tid=a.tenantId);let m=i;for(let n of Object.keys(m))void 0===m[n]&&delete m[n];let o=await a._getAppCheckToken(),p=o?`#${ci}=${encodeURIComponent(o)}`:"";return`${ck(a)}?${(0,e.xO)(m).slice(1)}${p}`}function ck({config:a}){return a.emulator?C(a,"emulator/auth/handler"):`https://${a.authDomain}/__/auth/handler`}/**
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
 */ /**
 * The special web storage event
 *
 */ let cl="webStorageSupport",cm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bp,this._completeRedirectFn=b$,this._overrideRedirectResult=function(a,b){bU.set(a._key(),b)}}async _openPopup(a,b,c,d){var f;y(null===(f=this.eventManagers[a._key()])|| void 0===f?void 0:f.manager,"_initialize() not called before _openPopup()");let g=await cj(a,b,c,z(),d);return function(a,b,c,d=500,f=600){let g=Math.max((window.screen.availHeight-f)/2,0).toString(),h=Math.max((window.screen.availWidth-d)/2,0).toString(),i="",j=Object.assign(Object.assign({},cg),{width:d.toString(),height:f.toString(),top:g,left:h}),k=(0,e.z$)().toLowerCase();c&&(i=al(k)?"_blank":c),aj(k)&&(b=b||"http://localhost",j.scrollbars="yes");let l=Object.entries(j).reduce((a,[b,c])=>`${a}${b}=${c},`,"");if(function(a=(0,e.z$)()){var b;return aq(a)&&!!(null===(b=window.navigator)|| void 0===b?void 0:b.standalone)}(k)&&"_self"!==i)return function a(b,c){let d=document.createElement("a");d.href=b,d.target=c;let e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),d.dispatchEvent(e)}(b||"",i),new ch(null);let m=window.open(b||"",i,l);w(m,a,"popup-blocked");try{m.focus()}catch(n){}return new ch(m)}(a,g,br())}async _openRedirect(a,b,c,d){var e;await this._originValidation(a);let f=await cj(a,b,c,z(),d);return e=f,bt().location.href=e,new Promise(()=>{})}_initialize(a){let b=a._key();if(this.eventManagers[b]){let{manager:c,promise:d}=this.eventManagers[b];return c?Promise.resolve(c):(y(d,"If manager is not set, promise should be"),d)}let e=this.initAndGetManager(a);return this.eventManagers[b]={promise:e},e.catch(()=>{delete this.eventManagers[b]}),e}async initAndGetManager(a){let b=await cf(a),c=new b0(a);return b.register("authEvent",b=>{w(null==b?void 0:b.authEvent,a,"invalid-auth-event");let d=c.onEvent(b.authEvent);return{status:d?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:c},this.iframes[a._key()]=b,c}_isIframeWebStorageSupported(a,b){let c=this.iframes[a._key()];c.send(cl,{type:cl},c=>{var d;let e=null===(d=null==c?void 0:c[0])|| void 0===d?void 0:d[cl];void 0!==e&&b(!!e),r(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){let b=a._key();return this.originValidationPromises[b]||(this.originValidationPromises[b]=b7(a)),this.originValidationPromises[b]}get _shouldInitProactively(){return ar()||ak()||aq()}};class cn{constructor(a){this.factorId=a}_process(a,b,c){switch(b.type){case"enroll":return this._finalizeEnroll(a,b.credential,c);case"signin":return this._finalizeSignIn(a,b.credential);default:return x("unexpected MultiFactorSessionType")}}}class co extends cn{constructor(a){super("phone"),this.credential=a}static _fromCredential(a){return new co(a)}_finalizeEnroll(a,b,c){var d,e;return d=a,H(d,"POST","/v2/accounts/mfaEnrollment:finalize",G(d,e={idToken:b,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(a,b){var c,d;return c=a,H(c,"POST","/v2/accounts/mfaSignIn:finalize",G(c,d={mfaPendingCredential:b,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}(class{constructor(){}static assertion(a){return co._fromCredential(a)}}).FACTOR_ID="phone",(class{static assertionForEnrollment(a,b){return cp._fromSecret(a,b)}static assertionForSignIn(a,b){return cp._fromEnrollmentId(a,b)}static async generateSecret(a){var b,c;let d=a;w(void 0!==d.auth,"internal-error");let e=await (b=d.auth,c={idToken:d.credential,totpEnrollmentInfo:{}},H(b,"POST","/v2/accounts/mfaEnrollment:start",G(b,c)));return cq._fromStartTotpMfaEnrollmentResponse(e,d.auth)}}).FACTOR_ID="totp";class cp extends cn{constructor(a,b,c){super("totp"),this.otp=a,this.enrollmentId=b,this.secret=c}static _fromSecret(a,b){return new cp(b,void 0,a)}static _fromEnrollmentId(a,b){return new cp(b,a)}async _finalizeEnroll(a,b,c){var d,e;return w(void 0!==this.secret,a,"argument-error"),d=a,H(d,"POST","/v2/accounts/mfaEnrollment:finalize",G(d,e={idToken:b,displayName:c,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(a,b){var c,d;w(void 0!==this.enrollmentId&& void 0!==this.otp,a,"argument-error");let e={verificationCode:this.otp};return c=a,H(c,"POST","/v2/accounts/mfaSignIn:finalize",G(c,d={mfaPendingCredential:b,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:e}))}}class cq{constructor(a,b,c,d,e,f,g){this.sessionInfo=f,this.auth=g,this.secretKey=a,this.hashingAlgorithm=b,this.codeLength=c,this.codeIntervalSeconds=d,this.enrollmentCompletionDeadline=e}static _fromStartTotpMfaEnrollmentResponse(a,b){return new cq(a.totpSessionInfo.sharedSecretKey,a.totpSessionInfo.hashingAlgorithm,a.totpSessionInfo.verificationCodeLength,a.totpSessionInfo.periodSec,new Date(a.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),a.totpSessionInfo.sessionInfo,b)}_makeTotpVerificationInfo(a){return{sessionInfo:this.sessionInfo,verificationCode:a}}generateQrCodeUrl(a,b){var c;let d=!1;return(cr(a)||cr(b))&&(d=!0),d&&(cr(a)&&(a=(null===(c=this.auth.currentUser)|| void 0===c?void 0:c.email)||"unknownuser"),cr(b)&&(b=this.auth.name)),`otpauth://totp/${b}:${a}?secret=${this.secretKey}&issuer=${b}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function cr(a){return void 0===a||(null==a?void 0:a.length)===0}var cs="@firebase/auth",ct="0.23.2";/**
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
 */ class cu{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),(null===(a=this.auth.currentUser)|| void 0===a?void 0:a.uid)||null}async getToken(a){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let b=await this.auth.currentUser.getIdToken(a);return{accessToken:b}}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;let b=this.auth.onIdTokenChanged(b=>{a((null==b?void 0:b.stsTokenManager.accessToken)||null)});this.internalListeners.set(a,b),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();let b=this.internalListeners.get(a);b&&(this.internalListeners.delete(a),b(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let cv=(0,e.Pz)("authIdTokenMaxAge")||300,cw=null,cx=a=>async b=>{let c=b&&await b.getIdTokenResult(),d=c&&(new Date().getTime()-Date.parse(c.issuedAtTime))/1e3;if(d&&d>cv)return;let e=null==c?void 0:c.token;cw!==e&&(cw=e,await fetch(a,{method:e?"POST":"DELETE",headers:e?{Authorization:`Bearer ${e}`}:{}}))};function cy(a=(0,f.Mq)()){let b=(0,f.qX)(a,"auth");if(b.isInitialized())return b.getImmediate();let c=/**
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
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function(a,b){let c=(0,f.qX)(a,"auth");if(c.isInitialized()){let d=c.getImmediate(),g=c.getOptions();if((0,e.vZ)(g,null!=b?b:{}))return d;r(d,"already-initialized")}let h=c.initialize({options:b});return h}(a,{popupRedirectResolver:cm,persistence:[bG,bn,bp]}),d=(0,e.Pz)("authTokenSyncURL");if(d){let g=cx(d);!function(a,b,c){return(0,e.m9)(a).beforeAuthStateChanged(b,c)}(c,g,()=>g(c.currentUser)),function(a,b,c,d){(0,e.m9)(a).onIdTokenChanged(b,void 0,void 0)}(c,a=>g(a))}let h=(0,e.q4)("auth");return h&&function(a,b,c){let d=aB(a);w(d._canInitEmulator,d,"emulator-config-failed"),w(/^https?:\/\//.test(b),d,"invalid-emulator-scheme");let e=!!(null==c?void 0:c.disableWarnings),f=aD(b),{host:g,port:h}=function a(b){let c=aD(b),d=/(\/\/)?([^?#/]+)/.exec(b.substr(c.length));if(!d)return{host:"",port:null};let e=d[2].split("@").pop()||"",f=/^(\[[^\]]+\])(:|$)/.exec(e);if(f){let g=f[1];return{host:g,port:aE(e.substr(g.length+1))}}{let[h,i]=e.split(":");return{host:h,port:aE(i)}}}(b),i=null===h?"":`:${h}`;d.config.emulator={url:`${f}//${g}${i}/`},d.settings.appVerificationDisabledForTesting=!0,d.emulatorConfig=Object.freeze({host:g,port:h,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:e})}),e||function a(){function b(){let a=document.createElement("p"),b=a.style;a.innerText="Running in emulator mode. Do not use with production credentials.",b.position="fixed",b.width="100%",b.backgroundColor="#ffffff",b.border=".1em solid #000000",b.color="#b50000",b.bottom="0px",b.left="0px",b.margin="0px",b.zIndex="10000",b.textAlign="center",a.classList.add("firebase-emulator-warning"),document.body.appendChild(a)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",b):b())}()}(c,`http://${h}`),c}d="Browser",(0,f.Xd)(new l.wA("auth",(a,{options:b})=>{let c=a.getProvider("app").getImmediate(),e=a.getProvider("heartbeat"),f=a.getProvider("app-check-internal"),{apiKey:g,authDomain:h}=c.options;w(g&&!g.includes(":"),"invalid-api-key",{appName:c.name});let i={apiKey:g,authDomain:h,clientPlatform:d,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(d)},j=new aA(c,e,f,i);return function(a,b){let c=(null==b?void 0:b.persistence)||[],d=(Array.isArray(c)?c:[c]).map(ad);(null==b?void 0:b.errorMap)&&a._updateErrorMap(b.errorMap),a._initializeWithPersistence(d,null==b?void 0:b.popupRedirectResolver)}(j,b),j},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,b,c)=>{let d=a.getProvider("auth-internal");d.initialize()})),(0,f.Xd)(new l.wA("auth-internal",a=>{var b;let c=aB(a.getProvider("auth").getImmediate());return b=c,new cu(b)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,f.KN)(cs,ct,/**
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
 */ function(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(d)),(0,f.KN)(cs,ct,"esm2017")},36100:function(a,b,c){"use strict";c.d(b,{ET:function(){return mj},Ab:function(){return mu},vr:function(){return mt},hJ:function(){return k7},oe:function(){return mi},JU:function(){return k8},Jm:function(){return lk},Yp:function(){return mn},QT:function(){return md},PL:function(){return mf},ad:function(){return ld},nP:function(){return mv},b9:function(){return l$},cf:function(){return mk},Xo:function(){return lY},IO:function(){return lT},iE:function(){return la},Eo:function(){return k9},Bt:function(){return ms},pl:function(){return mg},r7:function(){return mh},ar:function(){return lV},qs:function(){return mw}});var d,e,f,g,h,i,j,k,l=c(47456),m=c(8463),n=c(53333),o=c(74444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},q={},r=r||{},s=p||self;function t(a){var b=typeof a;return"array"==(b="object"!=b?b:a?Array.isArray(a)?"array":b:"null")||"object"==b&&"number"==typeof a.length}function u(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function v(a,b,c){return a.call.apply(a.bind,arguments)}function w(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function x(a,b,c){return(x=Function.prototype.bind&& -1!=Function.prototype.bind.toString().indexOf("native code")?v:w).apply(null,arguments)}function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function z(a,b){function c(){}c.prototype=b.prototype,a.$=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.ac=function(a,c,d){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return b.prototype[c].apply(a,e)}}function A(){this.s=this.s,this.o=this.o}A.prototype.s=!1,A.prototype.sa=function(){this.s||(this.s=!0,this.N())},A.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let B=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,0);for(let c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1};function C(a){let b=a.length;if(0<b){let c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]}function D(a,b){for(let c=1;c<arguments.length;c++){let d=arguments[c];if(t(d)){let e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}function E(a,b){this.type=a,this.g=this.target=b,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var F=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{s.addEventListener("test",()=>{},b),s.removeEventListener("test",()=>{},b)}catch(c){}return a}();function G(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=s.navigator;return a&&(a=a.userAgent)?a:""}function I(a){return -1!=H().indexOf(a)}function J(a){return J[" "](a),a}J[" "]=function(){};var K=I("Opera"),L=I("Trident")||I("MSIE"),M=I("Edge"),N=M||L,O=I("Gecko")&&!(-1!=H().toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),P=-1!=H().toLowerCase().indexOf("webkit")&&!I("Edge");function Q(){var a=s.document;return a?a.documentMode:void 0}a:{var R,S="",T=(R=H(),O?/rv:([^\);]+)(\)|;)/.exec(R):M?/Edge\/([\d\.]+)/.exec(R):L?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(R):P?/WebKit\/(\S+)/.exec(R):K?/(?:Version)[ \/]?(\S+)/.exec(R):void 0);if(T&&(S=T?T[1]:""),L){var U=Q();if(null!=U&&U>parseFloat(S)){f=String(U);break a}}f=S}if(s.document&&L){g=Q()||parseInt(f,10)||void 0}else g=void 0;var V=g;function W(a,b){if(E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=b,b=a.relatedTarget){if(O){a:{try{J(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b,d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType="string"==typeof a.pointerType?a.pointerType:X[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&W.$.h.call(this)}}z(W,E);var X={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),Z=0;function $(a,b,c,d,e){this.listener=a,this.proxy=null,this.src=b,this.type=c,this.capture=!!d,this.la=e,this.key=++Z,this.fa=this.ia=!1}function _(a){a.fa=!0,a.listener=null,a.proxy=null,a.src=null,a.la=null}function aa(a,b,c){for(let d in a)b.call(c,a[d],d,a)}function ab(a){let b={};for(let c in a)b[c]=a[c];return b}let ac="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ad(a,b){let c,d;for(let e=1;e<arguments.length;e++){for(c in d=arguments[e])a[c]=d[c];for(let f=0;f<ac.length;f++)c=ac[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function ae(a){this.src=a,this.g={},this.h=0}function af(a,b){var c=b.type;if(c in a.g){var d,e=a.g[c],f=B(e,b);(d=0<=f)&&Array.prototype.splice.call(e,f,1),d&&(_(b),0==a.g[c].length&&(delete a.g[c],a.h--))}}function ag(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.fa&&f.listener==b&& !!c==f.capture&&f.la==d)return e}return -1}ae.prototype.add=function(a,b,c,d,e){var f=a.toString();(a=this.g[f])||(a=this.g[f]=[],this.h++);var g=ag(a,b,d,e);return -1<g?(b=a[g],c||(b.ia=!1)):((b=new $(b,this.src,f,!!d,e)).ia=c,a.push(b)),b};var ah="closure_lm_"+(1e6*Math.random()|0),ai={};function aj(a,b,c,d,e){if(d&&d.once)return am(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)aj(a,b[f],c,d,e);return null}return c=at(c),a&&a[Y]?a.O(b,c,u(d)?!!d.capture:!!d,e):ak(a,b,c,!1,d,e)}function ak(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=u(e)?!!e.capture:!!e,h=ar(a);if(h||(a[ah]=h=new ae(a)),(c=h.add(b,c,d,g,f)).proxy)return c;if(d=al(),c.proxy=d,d.src=a,d.listener=c,a.addEventListener)F||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ap(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function al(){function a(c){return b.call(a.src,a.listener,c)}let b=aq;return a}function am(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)am(a,b[f],c,d,e);return null}return c=at(c),a&&a[Y]?a.P(b,c,u(d)?!!d.capture:!!d,e):ak(a,b,c,!0,d,e)}function an(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)an(a,b[f],c,d,e);else(d=u(d)?!!d.capture:!!d,c=at(c),a&&a[Y])?(a=a.i,(b=String(b).toString())in a.g&& -1<(c=ag(f=a.g[b],c,d,e))&&(_(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--))):a&&(a=ar(a))&&(b=a.g[b.toString()],a=-1,b&&(a=ag(b,c,d,e)),(c=-1<a?b[a]:null)&&ao(c))}function ao(a){if("number"!=typeof a&&a&&!a.fa){var b=a.src;if(b&&b[Y])af(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ap(c),d):b.addListener&&b.removeListener&&b.removeListener(d),(c=ar(b))?(af(c,a),0==c.h&&(c.src=null,b[ah]=null)):_(a)}}}function ap(a){return a in ai?ai[a]:ai[a]="on"+a}function aq(a,b){if(a.fa)a=!0;else{b=new W(b,this);var c=a.listener,d=a.la||a.src;a.ia&&ao(a),a=c.call(d,b)}return a}function ar(a){return(a=a[ah])instanceof ae?a:null}var as="__closure_events_fn_"+(1e9*Math.random()>>>0);function at(a){return"function"==typeof a?a:(a[as]||(a[as]=function(b){return a.handleEvent(b)}),a[as])}function au(){A.call(this),this.i=new ae(this),this.S=this,this.J=null}function av(a,b){var c,d=a.J;if(d)for(c=[];d;d=d.J)c.push(d);if(a=a.S,d=b.type||b,"string"==typeof b)b=new E(b,a);else if(b instanceof E)b.target=b.target||a;else{var e=b;ad(b=new E(d,a),e)}if(e=!0,c)for(var f=c.length-1;0<=f;f--){var g=b.g=c[f];e=aw(g,d,!0,b)&&e}if(e=aw(g=b.g=a,d,!0,b)&&e,e=aw(g,d,!1,b)&&e,c)for(f=0;f<c.length;f++)e=aw(g=b.g=c[f],d,!1,b)&&e}function aw(a,b,c,d){if(!(b=a.i.g[String(b)]))return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.fa&&g.capture==c){var h=g.listener,i=g.la||g.src;g.ia&&af(a.i,g),e=!1!==h.call(i,d)&&e}}return e&&!d.defaultPrevented}z(au,A),au.prototype[Y]=!0,au.prototype.removeEventListener=function(a,b,c,d){an(this,a,b,c,d)},au.prototype.N=function(){if(au.$.N.call(this),this.i){var a,b=this.i;for(a in b.g){for(var c=b.g[a],d=0;d<c.length;d++)_(c[d]);delete b.g[a],b.h--}}this.J=null},au.prototype.O=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)},au.prototype.P=function(a,b,c,d){return this.i.add(String(a),b,!0,c,d)};var ax=s.JSON.stringify;function ay(){var a=aF;let b=null;return a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null),b}var az=new class{constructor(a,b){this.i=a,this.j=b,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}(()=>new aA,a=>a.reset());class aA{constructor(){this.next=this.g=this.h=null}set(a,b){this.h=a,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}function aB(a){var b=1;a=a.split(":");let c=[];for(;0<b&&a.length;)c.push(a.shift()),b--;return a.length&&c.push(a.join(":")),c}function aC(a){s.setTimeout(()=>{throw a},0)}let aD,aE=!1,aF=new class{constructor(){this.h=this.g=null}add(a,b){let c=az.get();c.set(a,b),this.h?this.h.next=c:this.g=c,this.h=c}},aG=()=>{let a=s.Promise.resolve(void 0);aD=()=>{a.then(aH)}};var aH=()=>{for(var a;a=ay();){try{a.h.call(a.g)}catch(b){aC(b)}var c=az;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}aE=!1};function aI(a,b){au.call(this),this.h=a||1,this.g=b||s,this.j=x(this.qb,this),this.l=Date.now()}function aJ(a){a.ga=!1,a.T&&(a.g.clearTimeout(a.T),a.T=null)}function aK(a,b,c){if("function"==typeof a)c&&(a=x(a,c));else if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:s.setTimeout(a,b||0)}function aL(a){a.g=aK(()=>{a.g=null,a.i&&(a.i=!1,aL(a))},a.j);let b=a.h;a.h=null,a.m.apply(null,b)}z(aI,au),(k=aI.prototype).ga=!1,k.T=null,k.qb=function(){if(this.ga){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-a):(this.T&&(this.g.clearTimeout(this.T),this.T=null),av(this,"tick"),this.ga&&(aJ(this),this.start()))}},k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},k.N=function(){aI.$.N.call(this),aJ(this),delete this.g};class aM extends A{constructor(a,b){super(),this.m=a,this.j=b,this.h=null,this.i=!1,this.g=null}l(a){this.h=arguments,this.g?this.i=!0:aL(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aN(a){A.call(this),this.h=a,this.g={}}z(aN,A);var aO=[];function aP(a,b,c,d){Array.isArray(c)||(c&&(aO[0]=c.toString()),c=aO);for(var e=0;e<c.length;e++){var f=aj(b,c[e],d||a.handleEvent,!1,a.h||a);if(!f)break;a.g[f.key]=f}}function aQ(a){aa(a.g,function(a,b){this.g.hasOwnProperty(b)&&ao(a)},a),a.g={}}function aR(){this.g=!0}function aS(a,b,c,d){a.info(function(){return"XMLHTTP TEXT ("+b+"): "+aT(a,c)+(d?" "+d:"")})}function aT(a,b){if(!a.g)return b;if(!b)return null;try{var c=JSON.parse(b);if(c){for(a=0;a<c.length;a++)if(Array.isArray(c[a])){var d=c[a];if(!(2>d.length)){var e=d[1];if(Array.isArray(e)&&!(1>e.length)){var f=e[0];if("noop"!=f&&"stop"!=f&&"close"!=f)for(var g=1;g<e.length;g++)e[g]=""}}}}return ax(c)}catch(h){return b}}aN.prototype.N=function(){aN.$.N.call(this),aQ(this)},aN.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},aR.prototype.Ea=function(){this.g=!1},aR.prototype.info=function(){};var aU={},aV=null;function aW(){return aV=aV||new au}function aX(a){E.call(this,aU.Ta,a)}function aY(a){let b=aW();av(b,new aX(b))}function aZ(a,b){E.call(this,aU.STAT_EVENT,a),this.stat=b}function a$(a){let b=aW();av(b,new aZ(b,a))}function a_(a,b){E.call(this,aU.Ua,a),this.size=b}function a0(a,b){if("function"!=typeof a)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){a()},b)}aU.Ta="serverreachability",z(aX,E),aU.STAT_EVENT="statevent",z(aZ,E),aU.Ua="timingevent",z(a_,E);var a1={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},a2={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function a3(){}function a4(a){return a.h||(a.h=a.i())}function a5(){}a3.prototype.h=null;var a6={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function a7(){E.call(this,"d")}function a8(){E.call(this,"c")}function a9(){}function ba(a,b,c,d){this.l=a,this.j=b,this.m=c,this.W=d||1,this.U=new aN(this),this.P=bc,a=N?125:void 0,this.V=new aI(a),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new bb}function bb(){this.i=null,this.g="",this.h=!1}z(a7,E),z(a8,E),z(a9,a3),a9.prototype.g=function(){return new XMLHttpRequest},a9.prototype.i=function(){return{}},h=new a9;var bc=45e3,bd={},be={};function bf(a,b,c){a.L=1,a.v=by(bt(b)),a.s=c,a.S=!0,bg(a,null)}function bg(a,b){a.G=Date.now(),bk(a),a.A=bt(a.v);var c=a.A,d=a.W;Array.isArray(d)||(d=[String(d)]),bL(c.i,"t",d),a.C=0,c=a.l.J,a.h=new bb,a.g=cD(a.l,c?b:null,!a.s),0<a.O&&(a.M=new aM(x(a.Pa,a,a.g),a.O)),aP(a.U,a.g,"readystatechange",a.nb),b=a.I?ab(a.I):{},a.s?(a.u||(a.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.g.ha(a.A,a.u,a.s,b)):(a.u="GET",a.g.ha(a.A,a.u,null,b)),aY(),function(a,b,c,d,e,f){a.info(function(){if(a.g){if(f)for(var g="",h=f.split("&"),i=0;i<h.length;i++){var j=h[i].split("=");if(1<j.length){var k=j[0];j=j[1];var l=k.split("_");g=2<=l.length&&"type"==l[1]?g+(k+"=")+j+"&":g+(k+"=redacted&")}}else g=null}else g=f;return"XMLHTTP REQ ("+d+") [attempt "+e+"]: "+b+"\n"+c+"\n"+g})}(a.j,a.u,a.A,a.m,a.W,a.s)}function bh(a){return!!a.g&&"GET"==a.u&&2!=a.L&&a.l.Ha}function bi(a,b,c){let d=!0,e;for(;!a.J&&a.C<c.length;)if((e=bj(a,c))==be){4==b&&(a.o=4,a$(14),d=!1),aS(a.j,a.m,null,"[Incomplete Response]");break}else if(e==bd){a.o=4,a$(15),aS(a.j,a.m,c,"[Invalid Chunk]"),d=!1;break}else aS(a.j,a.m,e,null),bp(a,e);bh(a)&&e!=be&&e!=bd&&(a.h.g="",a.C=0),4!=b||0!=c.length||a.h.h||(a.o=1,a$(16),d=!1),a.i=a.i&&d,d?0<c.length&&!a.ba&&(a.ba=!0,(b=a.l).g==a&&b.ca&&!b.M&&(b.l.info("Great, no buffering proxy detected. Bytes received: "+c.length),cv(b),b.M=!0,a$(11))):(aS(a.j,a.m,c,"[Invalid Chunked Response]"),bo(a),bn(a))}function bj(a,b){var c=a.C,d=b.indexOf("\n",c);return -1==d?be:isNaN(c=Number(b.substring(c,d)))?bd:(d+=1)+c>b.length?be:(b=b.slice(d,d+c),a.C=d+c,b)}function bk(a){a.Y=Date.now()+a.P,bl(a,a.P)}function bl(a,b){if(null!=a.B)throw Error("WatchDog timer not null");a.B=a0(x(a.lb,a),b)}function bm(a){a.B&&(s.clearTimeout(a.B),a.B=null)}function bn(a){0==a.l.H||a.J||cy(a.l,a)}function bo(a){bm(a);var b=a.M;b&&"function"==typeof b.sa&&b.sa(),a.M=null,aJ(a.V),aQ(a.U),a.g&&(b=a.g,a.g=null,b.abort(),b.sa())}function bp(a,b){try{var c=a.l;if(0!=c.H&&(c.g==a||bT(c.i,a))){if(!a.K&&bT(c.i,a)&&3==c.H){try{var d=c.Ja.g.parse(b)}catch(e){d=null}if(Array.isArray(d)&&3==d.length){var f=d;if(0==f[0]){a:if(!c.u){if(c.g){if(c.g.G+3e3<a.G)cx(c),cn(c);else break a}cu(c),a$(18)}}else c.Fa=f[1],0<c.Fa-c.V&&37500>f[2]&&c.G&&0==c.A&&!c.v&&(c.v=a0(x(c.ib,c),6e3));if(1>=bS(c.i)&&c.oa){try{c.oa()}catch(g){}c.oa=void 0}}else cA(c,11)}else if((a.K||c.g==a)&&cx(c),!G(b))for(f=c.Ja.g.parse(b),b=0;b<f.length;b++){let h=f[b];if(c.V=h[0],h=h[1],2==c.H){if("c"==h[0]){c.K=h[1],c.pa=h[2];let i=h[3];null!=i&&(c.ra=i,c.l.info("VER="+c.ra));let j=h[4];null!=j&&(c.Ga=j,c.l.info("SVER="+c.Ga));let k=h[5];null!=k&&"number"==typeof k&&0<k&&(d=1.5*k,c.L=d,c.l.info("backChannelRequestTimeoutMs_="+d)),d=c;let l=a.g;if(l){let m=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var n=d.i;n.g|| -1==m.indexOf("spdy")&& -1==m.indexOf("quic")&& -1==m.indexOf("h2")||(n.j=n.l,n.g=new Set,n.h&&(bU(n,n.h),n.h=null))}if(d.F){let o=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;o&&(d.Da=o,bx(d.I,d.F,o))}}c.H=3,c.h&&c.h.Ba(),c.ca&&(c.S=Date.now()-a.G,c.l.info("Handshake RTT: "+c.S+"ms")),d=c;var p=a;if(d.wa=cC(d,d.J?d.pa:null,d.Y),p.K){bV(d.i,p);var q=p,r=d.L;r&&q.setTimeout(r),q.B&&(bm(q),bk(q)),d.g=p}else ct(d);0<c.j.length&&cp(c)}else"stop"!=h[0]&&"close"!=h[0]||cA(c,7)}else 3==c.H&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?cA(c,7):cm(c):"noop"!=h[0]&&c.h&&c.h.Aa(h),c.A=0)}}aY(4)}catch(s){}}function bq(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(t(a)||"string"==typeof a)Array.prototype.forEach.call(a,b,void 0);else for(var c=function(a){if(a.ta&&"function"==typeof a.ta)return a.ta();if(!a.Z||"function"!=typeof a.Z){if("undefined"!=typeof Map&&a instanceof Map)return Array.from(a.keys());if(!("undefined"!=typeof Set&&a instanceof Set)){if(t(a)||"string"==typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}for(let d in b=[],c=0,a)b[c++]=d;return b}}}(a),d=function(a){if(a.Z&&"function"==typeof a.Z)return a.Z();if("undefined"!=typeof Map&&a instanceof Map||"undefined"!=typeof Set&&a instanceof Set)return Array.from(a.values());if("string"==typeof a)return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}for(d in b=[],c=0,a)b[c++]=a[d];return b}(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}(k=ba.prototype).setTimeout=function(a){this.P=a},k.nb=function(a){a=a.target;let b=this.M;b&&3==cf(a)?b.l():this.Pa(a)},k.Pa=function(a){try{if(a==this.g)a:{let b=cf(this.g);var c=this.g.Ia();let d=this.g.da();if(!(3>b)&&(3!=b||N||this.g&&(this.h.h||this.g.ja()||cg(this.g)))){this.J||4!=b||7==c||(8==c||0>=d?aY(3):aY(2)),bm(this);var e=this.g.da();this.ca=e;b:if(bh(this)){var f=cg(this.g);a="";var g=f.length,h=4==cf(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bo(this),bn(this);var i="";break b}this.h.i=new s.TextDecoder}for(c=0;c<g;c++)this.h.h=!0,a+=this.h.i.decode(f[c],{stream:h&&c==g-1});f.splice(0,g),this.h.g+=a,this.C=0,i=this.h.g}else i=this.g.ja();if(this.i=200==e,function(a,b,c,d,e,f,g){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+e+"]: "+b+"\n"+c+"\n"+f+" "+g})}(this.j,this.u,this.A,this.m,this.W,b,e),this.i){if(this.aa&&!this.K){b:{if(this.g){var j,k=this.g;if((j=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(j)){var l=j;break b}}l=null}if(e=l)aS(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bp(this,e);else{this.i=!1,this.o=3,a$(12),bo(this),bn(this);break a}}this.S?(bi(this,b,i),N&&this.i&&3==b&&(aP(this.U,this.V,"tick",this.mb),this.V.start())):(aS(this.j,this.m,i,null),bp(this,i)),4==b&&bo(this),this.i&&!this.J&&(4==b?cy(this.l,this):(this.i=!1,bk(this)))}else ch(this.g),400==e&&0<i.indexOf("Unknown SID")?(this.o=3,a$(12)):(this.o=0,a$(13)),bo(this),bn(this)}}}catch(m){}finally{}},k.mb=function(){if(this.g){var a=cf(this.g),b=this.g.ja();this.C<b.length&&(bm(this),bi(this,a,b),this.i&&4!=a&&bk(this))}},k.cancel=function(){this.J=!0,bo(this)},k.lb=function(){this.B=null;let a=Date.now();0<=a-this.Y?(function(a,b){a.info(function(){return"TIMEOUT: "+b})}(this.j,this.A),2!=this.L&&(aY(),a$(17)),bo(this),this.o=2,bn(this)):bl(this,this.Y-a)};var br=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bs(a){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,a instanceof bs){this.h=a.h,bu(this,a.j),this.s=a.s,this.g=a.g,bv(this,a.m),this.l=a.l;var b=a.i,c=new bH;c.i=b.i,b.g&&(c.g=new Map(b.g),c.h=b.h),bw(this,c),this.o=a.o}else a&&(b=String(a).match(br))?(this.h=!1,bu(this,b[1]||"",!0),this.s=bz(b[2]||""),this.g=bz(b[3]||"",!0),bv(this,b[4]),this.l=bz(b[5]||"",!0),bw(this,b[6]||"",!0),this.o=bz(b[7]||"")):(this.h=!1,this.i=new bH(null,this.h))}function bt(a){return new bs(a)}function bu(a,b,c){a.j=c?bz(b,!0):b,a.j&&(a.j=a.j.replace(/:$/,""))}function bv(a,b){if(b){if(isNaN(b=Number(b))||0>b)throw Error("Bad port number "+b);a.m=b}else a.m=null}function bw(a,b,c){b instanceof bH?(a.i=b,bN(a.i,a.h)):(c||(b=bA(b,bF)),a.i=new bH(b,a.h))}function bx(a,b,c){a.i.set(b,c)}function by(a){return bx(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bz(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bA(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,bB),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bB(a){return"%"+((a=a.charCodeAt(0))>>4&15).toString(16)+(15&a).toString(16)}bs.prototype.toString=function(){var a=[],b=this.j;b&&a.push(bA(b,bC,!0),":");var c=this.g;return(c||"file"==b)&&(a.push("//"),(b=this.s)&&a.push(bA(b,bC,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(c=this.m)&&a.push(":",String(c))),(c=this.l)&&(this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(bA(c,"/"==c.charAt(0)?bE:bD,!0))),(c=this.i.toString())&&a.push("?",c),(c=this.o)&&a.push("#",bA(c,bG)),a.join("")};var bC=/[#\/\?@]/g,bD=/[#\?:]/g,bE=/[#\?]/g,bF=/[#\?@]/g,bG=/#/g;function bH(a,b){this.h=this.g=null,this.i=a||null,this.j=!!b}function bI(a){a.g||(a.g=new Map,a.h=0,a.i&&function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}}(a.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function bJ(a,b){bI(a),b=bM(a,b),a.g.has(b)&&(a.i=null,a.h-=a.g.get(b).length,a.g.delete(b))}function bK(a,b){return bI(a),b=bM(a,b),a.g.has(b)}function bL(a,b,c){bJ(a,b),0<c.length&&(a.i=null,a.g.set(bM(a,b),C(c)),a.h+=c.length)}function bM(a,b){return b=String(b),a.j&&(b=b.toLowerCase()),b}function bN(a,b){b&&!a.j&&(bI(a),a.i=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(bJ(this,b),bL(this,c,a))},a)),a.j=b}(k=bH.prototype).add=function(a,b){bI(this),this.i=null,a=bM(this,a);var c=this.g.get(a);return c||this.g.set(a,c=[]),c.push(b),this.h+=1,this},k.forEach=function(a,b){bI(this),this.g.forEach(function(c,d){c.forEach(function(c){a.call(b,c,d,this)},this)},this)},k.ta=function(){bI(this);let a=Array.from(this.g.values()),b=Array.from(this.g.keys()),c=[];for(let d=0;d<b.length;d++){let e=a[d];for(let f=0;f<e.length;f++)c.push(b[d])}return c},k.Z=function(a){bI(this);let b=[];if("string"==typeof a)bK(this,a)&&(b=b.concat(this.g.get(bM(this,a))));else{a=Array.from(this.g.values());for(let c=0;c<a.length;c++)b=b.concat(a[c])}return b},k.set=function(a,b){return bI(this),this.i=null,a=bM(this,a),bK(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[b]),this.h+=1,this},k.get=function(a,b){return a&&0<(a=this.Z(a)).length?String(a[0]):b},k.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],b=Array.from(this.g.keys());for(var c=0;c<b.length;c++){var d=b[c];let e=encodeURIComponent(String(d)),f=this.Z(d);for(d=0;d<f.length;d++){var g=e;""!==f[d]&&(g+="="+encodeURIComponent(String(f[d]))),a.push(g)}}return this.i=a.join("&")};var bO=class{constructor(a,b){this.g=a,this.map=b}};function bP(a){this.l=a||bQ,a=s.PerformanceNavigationTiming?0<(a=s.performance.getEntriesByType("navigation")).length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol):!!(s.g&&s.g.Ka&&s.g.Ka()&&s.g.Ka().ec),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bQ=10;function bR(a){return!!a.h|| !!a.g&&a.g.size>=a.j}function bS(a){return a.h?1:a.g?a.g.size:0}function bT(a,b){return a.h?a.h==b:!!a.g&&a.g.has(b)}function bU(a,b){a.g?a.g.add(b):a.h=b}function bV(a,b){a.h&&a.h==b?a.h=null:a.g&&a.g.has(b)&&a.g.delete(b)}function bW(a){if(null!=a.h)return a.i.concat(a.h.F);if(null!=a.g&&0!==a.g.size){let b=a.i;for(let c of a.g.values())b=b.concat(c.F);return b}return C(a.i)}bP.prototype.cancel=function(){if(this.i=bW(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let a of this.g.values())a.cancel();this.g.clear()}};var bX=class{stringify(a){return s.JSON.stringify(a,void 0)}parse(a){return s.JSON.parse(a,void 0)}};function bY(){this.g=new bX}function bZ(a,b,c){let d=c||"";try{bq(a,function(a,c){let e=a;u(a)&&(e=ax(a)),b.push(d+c+"="+encodeURIComponent(e))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e}}function b$(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}}function b_(a){this.l=a.fc||null,this.j=a.ob||!1}function b0(a,b){au.call(this),this.F=a,this.u=b,this.m=void 0,this.readyState=b1,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(b_,a3),b_.prototype.g=function(){return new b0(this.l,this.j)},b_.prototype.i=(e={},function(){return e}),z(b0,au);var b1=0;function b2(a){a.j.read().then(a.Xa.bind(a)).catch(a.ka.bind(a))}function b3(a){a.readyState=4,a.l=null,a.j=null,a.A=null,b4(a)}function b4(a){a.onreadystatechange&&a.onreadystatechange.call(a)}(k=b0.prototype).open=function(a,b){if(this.readyState!=b1)throw this.abort(),Error("Error reopening a connection");this.C=a,this.B=b,this.readyState=1,b4(this)},k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let b={headers:this.v,method:this.C,credentials:this.m,cache:void 0};a&&(b.body=a),(this.F||s).fetch(new Request(this.B,b)).then(this.$a.bind(this),this.ka.bind(this))},k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,b3(this)),this.readyState=b1},k.$a=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,b4(this)),this.g&&(this.readyState=3,b4(this),this.g))){if("arraybuffer"===this.responseType)a.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==s.ReadableStream&&"body"in a){if(this.j=a.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;b2(this)}else a.text().then(this.Za.bind(this),this.ka.bind(this))}},k.Xa=function(a){if(this.g){if(this.u&&a.value)this.response.push(a.value);else if(!this.u){var b=a.value?a.value:new Uint8Array(0);(b=this.A.decode(b,{stream:!a.done}))&&(this.response=this.responseText+=b)}a.done?b3(this):b4(this),3==this.readyState&&b2(this)}},k.Za=function(a){this.g&&(this.response=this.responseText=a,b3(this))},k.Ya=function(a){this.g&&(this.response=a,b3(this))},k.ka=function(){this.g&&b3(this)},k.setRequestHeader=function(a,b){this.v.append(a,b)},k.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},k.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],b=this.h.entries();for(var c=b.next();!c.done;)a.push((c=c.value)[0]+": "+c[1]),c=b.next();return a.join("\r\n")},Object.defineProperty(b0.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(a){this.m=a?"include":"same-origin"}});var b5=s.JSON.parse;function b6(a){au.call(this),this.headers=new Map,this.u=a||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=b7,this.L=this.M=!1}z(b6,au);var b7="",b8=/^https?$/i,b9=["POST","PUT"];function ca(a,b){a.h=!1,a.g&&(a.l=!0,a.g.abort(),a.l=!1),a.j=b,a.m=5,cb(a),cd(a)}function cb(a){a.F||(a.F=!0,av(a,"complete"),av(a,"error"))}function cc(a){if(a.h&& void 0!==r&&(!a.C[1]||4!=cf(a)||2!=a.da())){if(a.v&&4==cf(a))aK(a.La,0,a);else if(av(a,"readystatechange"),4==cf(a)){a.h=!1;try{let b=a.da();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c,d,e=!0;break a;default:e=!1}if(!(c=e)){if(d=0===b){var f=String(a.I).match(br)[1]||null;!f&&s.self&&s.self.location&&(f=s.self.location.protocol.slice(0,-1)),d=!b8.test(f?f.toLowerCase():"")}c=d}if(c)av(a,"complete"),av(a,"success");else{a.m=6;try{var g=2<cf(a)?a.g.statusText:""}catch(h){g=""}a.j=g+" ["+a.da()+"]",cb(a)}}finally{cd(a)}}}}function cd(a,b){if(a.g){ce(a);let c=a.g,d=a.C[0]?()=>{}:null;a.g=null,a.C=null,b||av(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function ce(a){a.g&&a.L&&(a.g.ontimeout=null),a.A&&(s.clearTimeout(a.A),a.A=null)}function cf(a){return a.g?a.g.readyState:0}function cg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.K){case b7:case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(b){return null}}function ch(a){let b={};a=(a.g&&2<=cf(a)&&a.g.getAllResponseHeaders()||"").split("\r\n");for(let c=0;c<a.length;c++){if(G(a[c]))continue;var d=aB(a[c]);let e=d[0];if("string"!=typeof(d=d[1]))continue;d=d.trim();let f=b[e]||[];b[e]=f,f.push(d)}!function(a,b){for(let c in a)b.call(void 0,a[c],c,a)}(b,function(a){return a.join(", ")})}function ci(a){let b="";return aa(a,function(a,c){b+=c,b+=":",b+=a,b+="\r\n"}),b}function cj(a,b,c){a:{for(d in c){var d=!1;break a}d=!0}d||(c=ci(c),"string"==typeof a?null!=c&&encodeURIComponent(String(c)):bx(a,b,c))}function ck(a,b,c){return c&&c.internalChannelParams&&c.internalChannelParams[a]||b}function cl(a){this.Ga=0,this.j=[],this.l=new aR,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ck("failFast",!1,a),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ck("baseRetryDelayMs",5e3,a),this.hb=ck("retryDelaySeedMs",1e4,a),this.eb=ck("forwardChannelMaxRetries",2,a),this.xa=ck("forwardChannelRequestTimeoutMs",2e4,a),this.va=a&&a.xmlHttpFactory||void 0,this.Ha=a&&a.dc||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.i=new bP(a&&a.concurrentRequestLimit),this.Ja=new bY,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=a&&a.bc||!1,a&&a.Ea&&this.l.Ea(),a&&a.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&a&&a.detectBufferingProxy||!1,this.qa=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.qa=a.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function cm(a){if(co(a),3==a.H){var b=a.W++,c=bt(a.I);if(bx(c,"SID",a.K),bx(c,"RID",b),bx(c,"TYPE","terminate"),cr(a,c),(b=new ba(a,a.l,b)).L=2,b.v=by(bt(c)),c=!1,s.navigator&&s.navigator.sendBeacon)try{c=s.navigator.sendBeacon(b.v.toString(),"")}catch(d){}!c&&s.Image&&((new Image).src=b.v,c=!0),c||(b.g=cD(b.l,null),b.g.ha(b.v)),b.G=Date.now(),bk(b)}cB(a)}function cn(a){a.g&&(cv(a),a.g.cancel(),a.g=null)}function co(a){cn(a),a.u&&(s.clearTimeout(a.u),a.u=null),cx(a),a.i.cancel(),a.m&&("number"==typeof a.m&&s.clearTimeout(a.m),a.m=null)}function cp(a){if(!bR(a.i)&&!a.m){a.m=!0;var b=a.Na;aD||aG(),aE||(aD(),aE=!0),aF.add(b,a),a.C=0}}function cq(a,b){var c;c=b?b.m:a.W++;let d=bt(a.I);bx(d,"SID",a.K),bx(d,"RID",c),bx(d,"AID",a.V),cr(a,d),a.o&&a.s&&cj(d,a.o,a.s),c=new ba(a,a.l,c,a.C+1),null===a.o&&(c.I=a.s),b&&(a.j=b.F.concat(a.j)),b=cs(a,c,1e3),c.setTimeout(Math.round(.5*a.xa)+Math.round(.5*a.xa*Math.random())),bU(a.i,c),bf(c,d,b)}function cr(a,b){a.na&&aa(a.na,function(a,c){bx(b,c,a)}),a.h&&bq({},function(a,c){bx(b,c,a)})}function cs(a,b,c){c=Math.min(a.j.length,c);var d=a.h?x(a.h.Va,a.h,a):null;a:{var e=a.j;let f=-1;for(;;){let g=["count="+c];-1==f?0<c?(f=e[0].g,g.push("ofs="+f)):f=0:g.push("ofs="+f);let h=!0;for(let i=0;i<c;i++){let j=e[i].g,k=e[i].map;if(0>(j-=f))f=Math.max(0,e[i].g-100),h=!1;else try{bZ(k,g,"req"+j+"_")}catch(l){d&&d(k)}}if(h){d=g.join("&");break a}}}return a=a.j.splice(0,c),b.F=a,d}function ct(a){if(!a.g&&!a.u){a.ba=1;var b=a.Ma;aD||aG(),aE||(aD(),aE=!0),aF.add(b,a),a.A=0}}function cu(a){return!a.g&&!a.u&&!(3<=a.A)&&(a.ba++,a.u=a0(x(a.Ma,a),cz(a,a.A)),a.A++,!0)}function cv(a){null!=a.B&&(s.clearTimeout(a.B),a.B=null)}function cw(a){a.g=new ba(a,a.l,"rpc",a.ba),null===a.o&&(a.g.I=a.s),a.g.O=0;var b=bt(a.wa);bx(b,"RID","rpc"),bx(b,"SID",a.K),bx(b,"AID",a.V),bx(b,"CI",a.G?"0":"1"),!a.G&&a.qa&&bx(b,"TO",a.qa),bx(b,"TYPE","xmlhttp"),cr(a,b),a.o&&a.s&&cj(b,a.o,a.s),a.L&&a.g.setTimeout(a.L);var c=a.g;a=a.pa,c.L=1,c.v=by(bt(b)),c.s=null,c.S=!0,bg(c,a)}function cx(a){null!=a.v&&(s.clearTimeout(a.v),a.v=null)}function cy(a,b){var c=null;if(a.g==b){cx(a),cv(a),a.g=null;var d=2}else{if(!bT(a.i,b))return;c=b.F,bV(a.i,b),d=1}if(0!=a.H){if(b.i){if(1==d){c=b.s?b.s.length:0,b=Date.now()-b.G;var e,f,g=a.C;d=aW(),av(d,new a_(d,c)),cp(a)}else ct(a)}else if(3==(g=b.o)||0==g&&0<b.ca||!(1==d&&(e=a,f=b,!(bS(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=f.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=a0(x(e.Na,e,f),cz(e,e.C)),e.C++,!0)))||2==d&&cu(a)))switch(c&&0<c.length&&((b=a.i).i=b.i.concat(c)),g){case 1:cA(a,5);break;case 4:cA(a,10);break;case 3:cA(a,6);break;default:cA(a,2)}}}function cz(a,b){let c=a.ab+Math.floor(Math.random()*a.hb);return a.isActive()||(c*=2),c*b}function cA(a,b){if(a.l.info("Error code "+b),2==b){var c=null;a.h&&(c=null);var d=x(a.pb,a);c||(c=new bs("//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||bu(c,"https"),by(c)),function(a,b){let c=new aR;if(s.Image){let d=new Image;d.onload=y(b$,c,d,"TestLoadImage: loaded",!0,b),d.onerror=y(b$,c,d,"TestLoadImage: error",!1,b),d.onabort=y(b$,c,d,"TestLoadImage: abort",!1,b),d.ontimeout=y(b$,c,d,"TestLoadImage: timeout",!1,b),s.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else b(!1)}(c.toString(),d)}else a$(2);a.H=0,a.h&&a.h.za(b),cB(a),co(a)}function cB(a){if(a.H=0,a.ma=[],a.h){let b=bW(a.i);(0!=b.length||0!=a.j.length)&&(D(a.ma,b),D(a.ma,a.j),a.i.i.length=0,C(a.j),a.j.length=0),a.h.ya()}}function cC(a,b,c){var d=c instanceof bs?bt(c):new bs(c);if(""!=d.g)b&&(d.g=b+"."+d.g),bv(d,d.m);else{var e=s.location;d=e.protocol,b=b?b+"."+e.hostname:e.hostname,e=+e.port;var f=new bs(null);d&&bu(f,d),b&&(f.g=b),e&&bv(f,e),c&&(f.l=c),d=f}return c=a.F,b=a.Da,c&&b&&bx(d,c,b),bx(d,"VER",a.ra),cr(a,d),d}function cD(a,b,c){if(b&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return(b=new b6(c&&a.Ha&&!a.va?new b_({ob:!0}):a.va)).Oa(a.J),b}function cE(){}function cF(){if(L&&!(10<=Number(V)))throw Error("Environmental error: no available transport.")}function cG(a,b){au.call(this),this.g=new cl(b),this.l=a,this.h=b&&b.messageUrlParams||null,a=b&&b.messageHeaders||null,b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.s=a,a=b&&b.initMessageHeaders||null,b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType}),b&&b.Ca&&(a?a["X-WebChannel-Client-Profile"]=b.Ca:a={"X-WebChannel-Client-Profile":b.Ca}),this.g.U=a,(a=b&&b.cc)&&!G(a)&&(this.g.o=a),this.A=b&&b.supportsCrossDomainXhr||!1,this.v=b&&b.sendRawJson||!1,(b=b&&b.httpSessionIdParam)&&!G(b)&&(this.g.F=b,null!==(a=this.h)&&b in a&&b in(a=this.h)&&delete a[b]),this.j=new cJ(this)}function cH(a){a7.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;if(b){a:{for(let c in b){a=c;break a}a=void 0}(this.i=a)&&(a=this.i,b=null!==b&&a in b?b[a]:void 0),this.data=b}else this.data=a}function cI(){a8.call(this),this.status=1}function cJ(a){this.g=a}function cK(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function cL(a,b,c){c||(c=0);var d=Array(16);if("string"==typeof b)for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.g[0],c=a.g[1],e=a.g[2];var f=a.g[3],g=b+(f^c&(e^f))+d[0]+3614090360&4294967295;g=f+(e^(b=c+(g<<7&4294967295|g>>>25))&(c^e))+d[1]+3905402710&4294967295,f=b+(g<<12&4294967295|g>>>20),g=e+(c^f&(b^c))+d[2]+606105819&4294967295,e=f+(g<<17&4294967295|g>>>15),g=c+(b^e&(f^b))+d[3]+3250441966&4294967295,c=e+(g<<22&4294967295|g>>>10),g=b+(f^c&(e^f))+d[4]+4118548399&4294967295,b=c+(g<<7&4294967295|g>>>25),g=f+(e^b&(c^e))+d[5]+1200080426&4294967295,f=b+(g<<12&4294967295|g>>>20),g=e+(c^f&(b^c))+d[6]+2821735955&4294967295,e=f+(g<<17&4294967295|g>>>15),g=c+(b^e&(f^b))+d[7]+4249261313&4294967295,c=e+(g<<22&4294967295|g>>>10),g=b+(f^c&(e^f))+d[8]+1770035416&4294967295,b=c+(g<<7&4294967295|g>>>25),g=f+(e^b&(c^e))+d[9]+2336552879&4294967295,f=b+(g<<12&4294967295|g>>>20),g=e+(c^f&(b^c))+d[10]+4294925233&4294967295,e=f+(g<<17&4294967295|g>>>15),g=c+(b^e&(f^b))+d[11]+2304563134&4294967295,c=e+(g<<22&4294967295|g>>>10),g=b+(f^c&(e^f))+d[12]+1804603682&4294967295,b=c+(g<<7&4294967295|g>>>25),g=f+(e^b&(c^e))+d[13]+4254626195&4294967295,f=b+(g<<12&4294967295|g>>>20),g=e+(c^f&(b^c))+d[14]+2792965006&4294967295,e=f+(g<<17&4294967295|g>>>15),g=c+(b^e&(f^b))+d[15]+1236535329&4294967295,c=e+(g<<22&4294967295|g>>>10),g=b+(e^f&(c^e))+d[1]+4129170786&4294967295,b=c+(g<<5&4294967295|g>>>27),g=f+(c^e&(b^c))+d[6]+3225465664&4294967295,f=b+(g<<9&4294967295|g>>>23),g=e+(b^c&(f^b))+d[11]+643717713&4294967295,e=f+(g<<14&4294967295|g>>>18),g=c+(f^b&(e^f))+d[0]+3921069994&4294967295,c=e+(g<<20&4294967295|g>>>12),g=b+(e^f&(c^e))+d[5]+3593408605&4294967295,b=c+(g<<5&4294967295|g>>>27),g=f+(c^e&(b^c))+d[10]+38016083&4294967295,f=b+(g<<9&4294967295|g>>>23),g=e+(b^c&(f^b))+d[15]+3634488961&4294967295,e=f+(g<<14&4294967295|g>>>18),g=c+(f^b&(e^f))+d[4]+3889429448&4294967295,c=e+(g<<20&4294967295|g>>>12),g=b+(e^f&(c^e))+d[9]+568446438&4294967295,b=c+(g<<5&4294967295|g>>>27),g=f+(c^e&(b^c))+d[14]+3275163606&4294967295,f=b+(g<<9&4294967295|g>>>23),g=e+(b^c&(f^b))+d[3]+4107603335&4294967295,e=f+(g<<14&4294967295|g>>>18),g=c+(f^b&(e^f))+d[8]+1163531501&4294967295,c=e+(g<<20&4294967295|g>>>12),g=b+(e^f&(c^e))+d[13]+2850285829&4294967295,b=c+(g<<5&4294967295|g>>>27),g=f+(c^e&(b^c))+d[2]+4243563512&4294967295,f=b+(g<<9&4294967295|g>>>23),g=e+(b^c&(f^b))+d[7]+1735328473&4294967295,e=f+(g<<14&4294967295|g>>>18),g=c+(f^b&(e^f))+d[12]+2368359562&4294967295,c=e+(g<<20&4294967295|g>>>12),g=b+(c^e^f)+d[5]+4294588738&4294967295,b=c+(g<<4&4294967295|g>>>28),g=f+(b^c^e)+d[8]+2272392833&4294967295,f=b+(g<<11&4294967295|g>>>21),g=e+(f^b^c)+d[11]+1839030562&4294967295,e=f+(g<<16&4294967295|g>>>16),g=c+(e^f^b)+d[14]+4259657740&4294967295,c=e+(g<<23&4294967295|g>>>9),g=b+(c^e^f)+d[1]+2763975236&4294967295,b=c+(g<<4&4294967295|g>>>28),g=f+(b^c^e)+d[4]+1272893353&4294967295,f=b+(g<<11&4294967295|g>>>21),g=e+(f^b^c)+d[7]+4139469664&4294967295,e=f+(g<<16&4294967295|g>>>16),g=c+(e^f^b)+d[10]+3200236656&4294967295,c=e+(g<<23&4294967295|g>>>9),g=b+(c^e^f)+d[13]+681279174&4294967295,b=c+(g<<4&4294967295|g>>>28),g=f+(b^c^e)+d[0]+3936430074&4294967295,f=b+(g<<11&4294967295|g>>>21),g=e+(f^b^c)+d[3]+3572445317&4294967295,e=f+(g<<16&4294967295|g>>>16),g=c+(e^f^b)+d[6]+76029189&4294967295,c=e+(g<<23&4294967295|g>>>9),g=b+(c^e^f)+d[9]+3654602809&4294967295,b=c+(g<<4&4294967295|g>>>28),g=f+(b^c^e)+d[12]+3873151461&4294967295,f=b+(g<<11&4294967295|g>>>21),g=e+(f^b^c)+d[15]+530742520&4294967295,e=f+(g<<16&4294967295|g>>>16),g=c+(e^f^b)+d[2]+3299628645&4294967295,c=e+(g<<23&4294967295|g>>>9),g=b+(e^(c| ~f))+d[0]+4096336452&4294967295,b=c+(g<<6&4294967295|g>>>26),g=f+(c^(b| ~e))+d[7]+1126891415&4294967295,f=b+(g<<10&4294967295|g>>>22),g=e+(b^(f| ~c))+d[14]+2878612391&4294967295,e=f+(g<<15&4294967295|g>>>17),g=c+(f^(e| ~b))+d[5]+4237533241&4294967295,c=e+(g<<21&4294967295|g>>>11),g=b+(e^(c| ~f))+d[12]+1700485571&4294967295,b=c+(g<<6&4294967295|g>>>26),g=f+(c^(b| ~e))+d[3]+2399980690&4294967295,f=b+(g<<10&4294967295|g>>>22),g=e+(b^(f| ~c))+d[10]+4293915773&4294967295,e=f+(g<<15&4294967295|g>>>17),g=c+(f^(e| ~b))+d[1]+2240044497&4294967295,c=e+(g<<21&4294967295|g>>>11),g=b+(e^(c| ~f))+d[8]+1873313359&4294967295,b=c+(g<<6&4294967295|g>>>26),g=f+(c^(b| ~e))+d[15]+4264355552&4294967295,f=b+(g<<10&4294967295|g>>>22),g=e+(b^(f| ~c))+d[6]+2734768916&4294967295,e=f+(g<<15&4294967295|g>>>17),g=c+(f^(e| ~b))+d[13]+1309151649&4294967295,c=e+(g<<21&4294967295|g>>>11),g=b+(e^(c| ~f))+d[4]+4149444226&4294967295,b=c+(g<<6&4294967295|g>>>26),g=f+(c^(b| ~e))+d[11]+3174756917&4294967295,f=b+(g<<10&4294967295|g>>>22),g=e+(b^(f| ~c))+d[2]+718787259&4294967295,e=f+(g<<15&4294967295|g>>>17),g=c+(f^(e| ~b))+d[9]+3951481745&4294967295,a.g[0]=a.g[0]+b&4294967295,a.g[1]=a.g[1]+(e+(g<<21&4294967295|g>>>11))&4294967295,a.g[2]=a.g[2]+e&4294967295,a.g[3]=a.g[3]+f&4294967295}function cM(a,b){this.h=b;for(var c=[],d=!0,e=a.length-1;0<=e;e--){var f=0|a[e];d&&f==b||(c[e]=f,d=!1)}this.g=c}(k=b6.prototype).Oa=function(a){this.M=a},k.ha=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+a);b=b?b.toUpperCase():"GET",this.I=a,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():h.g(),this.C=this.u?a4(this.u):a4(h),this.g.onreadystatechange=x(this.La,this);try{this.G=!0,this.g.open(b,String(a),!0),this.G=!1}catch(e){ca(this,e);return}if(a=c||"",c=new Map(this.headers),d){if(Object.getPrototypeOf(d)===Object.prototype)for(var f in d)c.set(f,d[f]);else if("function"==typeof d.keys&&"function"==typeof d.get)for(let g of d.keys())c.set(g,d.get(g));else throw Error("Unknown input type for opt_headers: "+String(d))}for(let[i,j]of(d=Array.from(c.keys()).find(a=>"content-type"==a.toLowerCase()),f=s.FormData&&a instanceof s.FormData,!(0<=B(b9,b))||d||f||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),c))this.g.setRequestHeader(i,j);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var k;ce(this),0<this.B&&((this.L=(k=this.g,L&&"number"==typeof k.timeout&& void 0!==k.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=x(this.ua,this)):this.A=aK(this.ua,this.B,this)),this.v=!0,this.g.send(a),this.v=!1}catch(l){ca(this,l)}},k.ua=function(){void 0!==r&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,av(this,"timeout"),this.abort(8))},k.abort=function(a){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=a||7,av(this,"complete"),av(this,"abort"),cd(this))},k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cd(this,!0)),b6.$.N.call(this)},k.La=function(){this.s||(this.G||this.v||this.l?cc(this):this.kb())},k.kb=function(){cc(this)},k.isActive=function(){return!!this.g},k.da=function(){try{return 2<cf(this)?this.g.status:-1}catch(a){return -1}},k.ja=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},k.Wa=function(a){if(this.g){var b=this.g.responseText;return a&&0==b.indexOf(a)&&(b=b.substring(a.length)),b5(b)}},k.Ia=function(){return this.m},k.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(k=cl.prototype).ra=8,k.H=1,k.Na=function(a){if(this.m){if(this.m=null,1==this.H){if(!a){this.W=Math.floor(1e5*Math.random()),a=this.W++;let b=new ba(this,this.l,a),c=this.s;if(this.U&&(c?ad(c=ab(c),this.U):c=this.U),null!==this.o||this.O||(b.I=c,c=null),this.P)a:{for(var d=0,e=0;e<this.j.length;e++){b:{var f=this.j[e];if("__data__"in f.map&&"string"==typeof(f=f.map.__data__)){f=f.length;break b}f=void 0}if(void 0===f)break;if(4096<(d+=f)){d=e;break a}if(4096===d||e===this.j.length-1){d=e+1;break a}}d=1e3}else d=1e3;d=cs(this,b,d),e=bt(this.I),bx(e,"RID",a),bx(e,"CVER",22),this.F&&bx(e,"X-HTTP-Session-Id",this.F),cr(this,e),c&&(this.O?d="headers="+encodeURIComponent(String(ci(c)))+"&"+d:this.o&&cj(e,this.o,c)),bU(this.i,b),this.bb&&bx(e,"TYPE","init"),this.P?(bx(e,"$req",d),bx(e,"SID","null"),b.aa=!0,bf(b,e,null)):bf(b,e,d),this.H=2}}else 3==this.H&&(a?cq(this,a):0==this.j.length||bR(this.i)||cq(this))}},k.Ma=function(){if(this.u=null,cw(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var a=2*this.S;this.l.info("BP detection timer enabled: "+a),this.B=a0(x(this.jb,this),a)}},k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,a$(10),cn(this),cw(this))},k.ib=function(){null!=this.v&&(this.v=null,cn(this),cu(this),a$(19))},k.pb=function(a){a?(this.l.info("Successfully pinged google.com"),a$(2)):(this.l.info("Failed to ping google.com"),a$(1))},k.isActive=function(){return!!this.h&&this.h.isActive(this)},(k=cE.prototype).Ba=function(){},k.Aa=function(){},k.za=function(){},k.ya=function(){},k.isActive=function(){return!0},k.Va=function(){},cF.prototype.g=function(a,b){return new cG(a,b)},z(cG,au),cG.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var a=this.g,b=this.l,c=this.h||void 0;a$(0),a.Y=b,a.na=c||{},a.G=a.aa,a.I=cC(a,null,a.Y),cp(a)},cG.prototype.close=function(){cm(this.g)},cG.prototype.u=function(a){var b=this.g;if("string"==typeof a){var c={};c.__data__=a,a=c}else this.v&&((c={}).__data__=ax(a),a=c);b.j.push(new bO(b.fb++,a)),3==b.H&&cp(b)},cG.prototype.N=function(){this.g.h=null,delete this.j,cm(this.g),delete this.g,cG.$.N.call(this)},z(cH,a7),z(cI,a8),z(cJ,cE),cJ.prototype.Ba=function(){av(this.g,"a")},cJ.prototype.Aa=function(a){av(this.g,new cH(a))},cJ.prototype.za=function(a){av(this.g,new cI)},cJ.prototype.ya=function(){av(this.g,"b")},z(cK,function(){this.blockSize=-1}),cK.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},cK.prototype.j=function(a,b){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=this.m,e=this.h,f=0;f<b;){if(0==e)for(;f<=c;)cL(this,a,f),f+=this.blockSize;if("string"==typeof a){for(;f<b;)if(d[e++]=a.charCodeAt(f++),e==this.blockSize){cL(this,d),e=0;break}}else for(;f<b;)if(d[e++]=a[f++],e==this.blockSize){cL(this,d),e=0;break}}this.h=e,this.i+=b},cK.prototype.l=function(){var a=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);a[0]=128;for(var b=1;b<a.length-8;++b)a[b]=0;var c=8*this.i;for(b=a.length-8;b<a.length;++b)a[b]=255&c,c/=256;for(this.j(a),a=Array(16),b=c=0;4>b;++b)for(var d=0;32>d;d+=8)a[c++]=this.g[b]>>>d&255;return a};var cN={};function cO(a){return -128<=a&&128>a?function(a,b){var c=cN;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}(a,function(a){return new cM([0|a],0>a?-1:0)}):new cM([0|a],0>a?-1:0)}function cP(a){if(isNaN(a)||!isFinite(a))return cS;if(0>a)return cX(cP(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=cR;return new cM(b,0)}function cQ(a,b){if(0==a.length)throw Error("number format error: empty string");if(2>(b=b||10)||36<b)throw Error("radix out of range: "+b);if("-"==a.charAt(0))return cX(cQ(a.substring(1),b));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=cP(Math.pow(b,8)),d=cS,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);8>f?(f=cP(Math.pow(b,f)),d=d.R(f).add(cP(g))):d=(d=d.R(c)).add(cP(g))}return d}var cR=4294967296,cS=cO(0),cT=cO(1),cU=cO(16777216);function cV(a){if(0!=a.h)return!1;for(var b=0;b<a.g.length;b++)if(0!=a.g[b])return!1;return!0}function cW(a){return -1==a.h}function cX(a){for(var b=a.g.length,c=[],d=0;d<b;d++)c[d]=~a.g[d];return new cM(c,~a.h).add(cT)}function cY(a,b){return a.add(cX(b))}function cZ(a,b){for(;(65535&a[b])!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535,b++}function c$(a,b){this.g=a,this.h=b}function c_(a,b){if(cV(b))throw Error("division by zero");if(cV(a))return new c$(cS,cS);if(cW(a))return b=c_(cX(a),b),new c$(cX(b.g),cX(b.h));if(cW(b))return b=c_(a,cX(b)),new c$(cX(b.g),b.h);if(30<a.g.length){if(cW(a)||cW(b))throw Error("slowDivide_ only works with positive integers.");for(var c=cT,d=b;0>=d.X(a);)c=c0(c),d=c0(d);var e=c1(c,1),f=c1(d,1);for(d=c1(d,2),c=c1(c,2);!cV(d);){var g=f.add(d);0>=g.X(a)&&(e=e.add(c),f=g),d=c1(d,1),c=c1(c,1)}return b=cY(a,e.R(b)),new c$(e,b)}for(e=cS;0<=a.X(b);){for(c=Math.max(1,Math.floor(a.ea()/b.ea())),d=Math.ceil(Math.log(c)/Math.LN2),d=48>=d?1:Math.pow(2,d-48),f=cP(c),g=f.R(b);cW(g)||0<g.X(a);)c-=d,g=(f=cP(c)).R(b);cV(f)&&(f=cT),e=e.add(f),a=cY(a,g)}return new c$(e,a)}function c0(a){for(var b=a.g.length+1,c=[],d=0;d<b;d++)c[d]=a.D(d)<<1|a.D(d-1)>>>31;return new cM(c,a.h)}function c1(a,b){var c=b>>5;b%=32;for(var d=a.g.length-c,e=[],f=0;f<d;f++)e[f]=0<b?a.D(f+c)>>>b|a.D(f+c+1)<<32-b:a.D(f+c);return new cM(e,a.h)}(k=cM.prototype).ea=function(){if(cW(this))return-cX(this).ea();for(var a=0,b=1,c=0;c<this.g.length;c++){var d=this.D(c);a+=(0<=d?d:cR+d)*b,b*=cR}return a},k.toString=function(a){if(2>(a=a||10)||36<a)throw Error("radix out of range: "+a);if(cV(this))return"0";if(cW(this))return"-"+cX(this).toString(a);for(var b=cP(Math.pow(a,6)),c=this,d="";;){var e=c_(c,b).g,f=((0<(c=cY(c,e.R(b))).g.length?c.g[0]:c.h)>>>0).toString(a);if(cV(c=e))return f+d;for(;6>f.length;)f="0"+f;d=f+d}},k.D=function(a){return 0>a?0:a<this.g.length?this.g[a]:this.h},k.X=function(a){return a=cY(this,a),cW(a)?-1:cV(a)?0:1},k.abs=function(){return cW(this)?cX(this):this},k.add=function(a){for(var b=Math.max(this.g.length,a.g.length),c=[],d=0,e=0;e<=b;e++){var f=d+(65535&this.D(e))+(65535&a.D(e)),g=(f>>>16)+(this.D(e)>>>16)+(a.D(e)>>>16);d=g>>>16,f&=65535,g&=65535,c[e]=g<<16|f}return new cM(c,-2147483648&c[c.length-1]?-1:0)},k.R=function(a){if(cV(this)||cV(a))return cS;if(cW(this))return cW(a)?cX(this).R(cX(a)):cX(cX(this).R(a));if(cW(a))return cX(this.R(cX(a)));if(0>this.X(cU)&&0>a.X(cU))return cP(this.ea()*a.ea());for(var b=this.g.length+a.g.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.g.length;d++)for(var e=0;e<a.g.length;e++){var f=this.D(d)>>>16,g=65535&this.D(d),h=a.D(e)>>>16,i=65535&a.D(e);c[2*d+2*e]+=g*i,cZ(c,2*d+2*e),c[2*d+2*e+1]+=f*i,cZ(c,2*d+2*e+1),c[2*d+2*e+1]+=g*h,cZ(c,2*d+2*e+1),c[2*d+2*e+2]+=f*h,cZ(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new cM(c,0)},k.gb=function(a){return c_(this,a).h},k.and=function(a){for(var b=Math.max(this.g.length,a.g.length),c=[],d=0;d<b;d++)c[d]=this.D(d)&a.D(d);return new cM(c,this.h&a.h)},k.or=function(a){for(var b=Math.max(this.g.length,a.g.length),c=[],d=0;d<b;d++)c[d]=this.D(d)|a.D(d);return new cM(c,this.h|a.h)},k.xor=function(a){for(var b=Math.max(this.g.length,a.g.length),c=[],d=0;d<b;d++)c[d]=this.D(d)^a.D(d);return new cM(c,this.h^a.h)},cF.prototype.createWebChannel=cF.prototype.g,cG.prototype.send=cG.prototype.u,cG.prototype.open=cG.prototype.m,cG.prototype.close=cG.prototype.close,a1.NO_ERROR=0,a1.TIMEOUT=8,a1.HTTP_ERROR=6,a2.COMPLETE="complete",a5.EventType=a6,a6.OPEN="a",a6.CLOSE="b",a6.ERROR="c",a6.MESSAGE="d",au.prototype.listen=au.prototype.O,b6.prototype.listenOnce=b6.prototype.P,b6.prototype.getLastError=b6.prototype.Sa,b6.prototype.getLastErrorCode=b6.prototype.Ia,b6.prototype.getStatus=b6.prototype.da,b6.prototype.getResponseJson=b6.prototype.Wa,b6.prototype.getResponseText=b6.prototype.ja,b6.prototype.send=b6.prototype.ha,b6.prototype.setWithCredentials=b6.prototype.Oa,cK.prototype.digest=cK.prototype.l,cK.prototype.reset=cK.prototype.reset,cK.prototype.update=cK.prototype.j,cM.prototype.add=cM.prototype.add,cM.prototype.multiply=cM.prototype.R,cM.prototype.modulo=cM.prototype.gb,cM.prototype.compare=cM.prototype.X,cM.prototype.toNumber=cM.prototype.ea,cM.prototype.toString=cM.prototype.toString,cM.prototype.getBits=cM.prototype.D,cM.fromNumber=cP,cM.fromString=cQ;var c2=q.createWebChannelTransport=function(){return new cF},c3=q.getStatEventTarget=function(){return aW()},c4=q.ErrorCode=a1,c5=q.EventType=a2,c6=q.Event=aU,c7=q.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},c8=q.FetchXmlHttpFactory=b_,c9=q.WebChannel=a5,da=q.XhrIo=b6,db=q.Md5=cK,dc=q.Integer=cM,dd=c(83454);let de="@firebase/firestore";/**
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
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class df{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}df.UNAUTHENTICATED=new df(null),df.GOOGLE_CREDENTIALS=new df("google-credentials-uid"),df.FIRST_PARTY=new df("first-party-uid"),df.MOCK_USER=new df("mock-user");/**
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
 */ let dg="9.22.2",dh=new n.Yd("@firebase/firestore");function di(){return dh.logLevel}function dj(a,...b){if(dh.logLevel<=n.in.DEBUG){let c=b.map(dm);dh.debug(`Firestore (${dg}): ${a}`,...c)}}function dk(a,...b){if(dh.logLevel<=n.in.ERROR){let c=b.map(dm);dh.error(`Firestore (${dg}): ${a}`,...c)}}function dl(a,...b){if(dh.logLevel<=n.in.WARN){let c=b.map(dm);dh.warn(`Firestore (${dg}): ${a}`,...c)}}function dm(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
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
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function dn(a="Unexpected state"){let b=`FIRESTORE (${dg}) INTERNAL ASSERTION FAILED: `+a;throw dk(b),Error(b)}/**
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
 */ let dp={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dq extends o.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */ class dr{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
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
 */ class ds{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class dt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(df.UNAUTHENTICATED))}shutdown(){}}class du{constructor(a){this.token=a,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(a,b){this.changeListener=b,a.enqueueRetryable(()=>b(this.token.user))}shutdown(){this.changeListener=null}}class dv{constructor(a){this.t=a,this.currentUser=df.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(a,b){let c=this.i,d=a=>this.i!==c?(c=this.i,b(a)):Promise.resolve(),e=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),e.resolve(),e=new dr,a.enqueueRetryable(()=>d(this.currentUser))};let f=()=>{let b=e;a.enqueueRetryable(async()=>{await b.promise,await d(this.currentUser)})},g=a=>{dj("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),f()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(dj("FirebaseAuthCredentialsProvider","Auth not yet detected"),e.resolve(),e=new dr)}},0),f()}getToken(){let a=this.i,b=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(b).then(b=>{var c;return this.i!==a?(dj("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):b?("string"==typeof b.accessToken||dn(),new ds(b.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var a;let b=this.auth&&this.auth.getUid();return null===b||"string"==typeof b||dn(),new df(b)}}class dw{constructor(a,b,c){this.h=a,this.l=b,this.m=c,this.type="FirstParty",this.user=df.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let a=this.p();return a&&this.g.set("Authorization",a),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class dx{constructor(a,b,c){this.h=a,this.l=b,this.m=c}getToken(){return Promise.resolve(new dw(this.h,this.l,this.m))}start(a,b){a.enqueueRetryable(()=>b(df.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dy{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dz{constructor(a){this.I=a,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(a,b){let c=a=>{null!=a.error&&dj("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.T;return this.T=a.token,dj("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{dj("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.I.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.I.getImmediate({optional:!0});a?d(a):dj("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||dn(),this.T=a.token,new dy(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
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
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function dA(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}/**
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
 */ class dB{static A(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=dA(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}function dC(a,b){return a<b?-1:a>b?1:0}function dD(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}function dE(a){return a+"\0"}/**
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
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class dF{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new dq(dp.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new dq(dp.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return dF.fromMillis(Date.now())}static fromDate(a){return dF.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new dF(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?dC(this.nanoseconds,a.nanoseconds):dC(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class dG{constructor(a){this.timestamp=a}static fromTimestamp(a){return new dG(a)}static min(){return new dG(new dF(0,0))}static max(){return new dG(new dF(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class dH{constructor(a,b,c){void 0===b?b=0:b>a.length&&dn(),void 0===c?c=a.length-b:c>a.length-b&&dn(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===dH.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof dH?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class dI extends dH{construct(a,b,c){return new dI(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new dq(dp.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new dI(b)}static emptyPath(){return new dI([])}}let dJ=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dK extends dH{construct(a,b,c){return new dK(a,b,c)}static isValidIdentifier(a){return dJ.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dK.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new dK(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new dq(dp.INVALID_ARGUMENT,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new dq(dp.INVALID_ARGUMENT,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new dq(dp.INVALID_ARGUMENT,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new dq(dp.INVALID_ARGUMENT,"Unterminated ` in path: "+a);return new dK(b)}static emptyPath(){return new dK([])}}/**
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
 */ /**
 * @internal
 */ class dL{constructor(a){this.path=a}static fromPath(a){return new dL(dI.fromString(a))}static fromName(a){return new dL(dI.fromString(a).popFirst(5))}static empty(){return new dL(dI.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===dI.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return dI.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new dL(new dI(a.slice()))}}/**
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
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class dM{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function dN(a){return a.fields.find(a=>2===a.kind)}function dO(a){return a.fields.filter(a=>2!==a.kind)}dM.UNKNOWN_ID=-1;class dP{constructor(a,b){this.fieldPath=a,this.kind=b}}function dQ(a,b){let c=dK.comparator(a.fieldPath,b.fieldPath);return 0!==c?c:dC(a.kind,b.kind)}class dR{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new dR(0,dU.min())}}function dS(a,b){let c=a.toTimestamp().seconds,d=a.toTimestamp().nanoseconds+1,e=dG.fromTimestamp(1e9===d?new dF(c+1,0):new dF(c,d));return new dU(e,dL.empty(),b)}function dT(a){return new dU(a.readTime,a.key,-1)}class dU{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new dU(dG.min(),dL.empty(),-1)}static max(){return new dU(dG.max(),dL.empty(),-1)}}function dV(a,b){let c=a.readTime.compareTo(b.readTime);return 0!==c?c:0!==(c=dL.comparator(a.documentKey,b.documentKey))?c:dC(a.largestBatchId,b.largestBatchId)}/**
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
 */ let dW="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dX{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
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
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function dY(a){if(a.code!==dp.FAILED_PRECONDITION||a.message!==dW)throw a;dj("LocalStore","Unexpectedly lost primary lease")}/**
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
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class dZ{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&dn(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new dZ((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(a){try{let b=a();return b instanceof dZ?b:dZ.resolve(b)}catch(c){return dZ.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):dZ.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):dZ.reject(b)}static resolve(a){return new dZ((b,c)=>{b(a)})}static reject(a){return new dZ((b,c)=>{c(a)})}static waitFor(a){return new dZ((b,c)=>{let d=0,e=0,f=!1;a.forEach(a=>{++d,a.next(()=>{++e,f&&e===d&&b()},a=>c(a))}),f=!0,e===d&&b()})}static or(a){let b=dZ.resolve(!1);for(let c of a)b=b.next(a=>a?dZ.resolve(a):c());return b}static forEach(a,b){let c=[];return a.forEach((a,d)=>{c.push(b.call(this,a,d))}),this.waitFor(c)}static mapArray(a,b){return new dZ((c,d)=>{let e=a.length,f=Array(e),g=0;for(let h=0;h<e;h++){let i=h;b(a[i]).next(a=>{f[i]=a,++g===e&&c(f)},a=>d(a))}})}static doWhile(a,b){return new dZ((c,d)=>{let e=()=>{!0===a()?b().next(()=>{e()},d):c()};e()})}}/**
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
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class d${constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.v=new dr,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{b.error?this.v.reject(new d1(a,b.error)):this.v.resolve()},this.transaction.onerror=b=>{let c=d6(b.target.error);this.v.reject(new d1(a,c))}}static open(a,b,c,d){try{return new d$(b,a.transaction(d,c))}catch(e){throw new d1(b,e)}}get R(){return this.v.promise}abort(a){a&&this.v.reject(a),this.aborted||(dj("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new d3(b)}}class d_{constructor(a,b,c){this.name=a,this.version=b,this.V=c,12.2===d_.S(getUA())&&dk("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return dj("SimpleDb","Removing database:",a),d4(window.indexedDB.deleteDatabase(a)).toPromise()}static D(){if(!isIndexedDBAvailable())return!1;if(d_.C())return!0;let a=getUA(),b=d_.S(a),c=0<b&&b<10,d=d_.N(a),e=0<d&&d<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||c||e)}static C(){var a;return void 0!==dd&&"YES"===(null===(a=dd.env)|| void 0===a?void 0:a.k)}static M(a,b){return a.store(b)}static S(a){let b=a.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=b?b[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static N(a){let b=a.match(/Android ([\d.]+)/i),c=b?b[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async $(a){return this.db||(dj("SimpleDb","Opening database:",this.name),this.db=await new Promise((b,c)=>{let d=indexedDB.open(this.name,this.version);d.onsuccess=a=>{let c=a.target.result;b(c)},d.onblocked=()=>{c(new d1(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},d.onerror=b=>{let d=b.target.error;"VersionError"===d.name?c(new dq(dp.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===d.name?c(new dq(dp.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+d)):c(new d1(a,d))},d.onupgradeneeded=a=>{dj("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let b=a.target.result;this.V.O(b,d.transaction,a.oldVersion,this.version).next(()=>{dj("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=a=>this.F(a)),this.db}B(a){this.F=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(a,b,c,d){let e="readonly"===b,f=0;for(;;){++f;try{this.db=await this.$(a);let g=d$.open(this.db,a,e?"readonly":"readwrite",c),h=d(g).next(a=>(g.P(),a)).catch(a=>(g.abort(a),dZ.reject(a))).toPromise();return h.catch(()=>{}),await g.R,h}catch(i){let j=i,k="FirebaseError"!==j.name&&f<3;if(dj("SimpleDb","Transaction failed with error:",j.message,"Retrying:",k),this.close(),!k)return Promise.reject(j)}}}close(){this.db&&this.db.close(),this.db=void 0}}class d0{constructor(a){this.L=a,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(a){this.L=a}done(){this.q=!0}G(a){this.U=a}delete(){return d4(this.L.delete())}}class d1 extends null{constructor(a,b){super(dp.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function d2(a){return"IndexedDbTransactionError"===a.name}class d3{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(dj("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(dj("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),d4(c)}add(a){return dj("SimpleDb","ADD",this.store.name,a,a),d4(this.store.add(a))}get(a){return d4(this.store.get(a)).next(b=>(void 0===b&&(b=null),dj("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return dj("SimpleDb","DELETE",this.store.name,a),d4(this.store.delete(a))}count(){return dj("SimpleDb","COUNT",this.store.name),d4(this.store.count())}j(a,b){let c=this.options(a,b);if(c.index||"function"!=typeof this.store.getAll){let d=this.cursor(c),e=[];return this.W(d,(a,b)=>{e.push(b)}).next(()=>e)}{let f=this.store.getAll(c.range);return new dZ((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}H(a,b){let c=this.store.getAll(a,null===b?void 0:b);return new dZ((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}J(a,b){dj("SimpleDb","DELETE ALL",this.store.name);let c=this.options(a,b);c.Y=!1;let d=this.cursor(c);return this.W(d,(a,b,c)=>c.delete())}X(a,b){let c;b?c=a:(c={},b=a);let d=this.cursor(c);return this.W(d,b)}Z(a){let b=this.cursor({});return new dZ((c,d)=>{b.onerror=a=>{let b=d6(a.target.error);d(b)},b.onsuccess=b=>{let d=b.target.result;d?a(d.primaryKey,d.value).next(a=>{a?d.continue():c()}):c()}})}W(a,b){let c=[];return new dZ((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=a=>{let e=a.target.result;if(!e)return void d();let f=new d0(e),g=b(e.primaryKey,e.value,f);if(g instanceof dZ){let h=g.catch(a=>(f.done(),dZ.reject(a)));c.push(h)}f.isDone?d():null===f.K?e.continue():e.continue(f.K)}}).next(()=>dZ.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.Y?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function d4(a){return new dZ((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=d6(a.target.error);c(b)}})}let d5=null;function d6(a){let b=d_.S(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new dq("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return d5||(d5=!0,setTimeout(()=>{throw d},0)),d}}return a}class d7{constructor(a,b){this.asyncQueue=a,this.tt=b,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(a){dj("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{dj("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(a){d2(a)?dj("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await dY(a)}await this.et(6e4)})}}class d8{constructor(a,b){this.localStore=a,this.persistence=b}async nt(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.st(b,a))}st(a,b){let c=new Set,d=b,e=!0;return dZ.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(a).next(b=>{if(null!==b&&!c.has(b))return dj("IndexBackiller",`Processing collection: ${b}`),this.it(a,b,d).next(a=>{d-=a,c.add(b)});e=!1})).next(()=>b-d)}it(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.rt(d,c)).next(c=>(dj("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}rt(a,b){let c=a;return b.changes.forEach((a,b)=>{let d=dT(b);dV(d,c)>0&&(c=d)}),new dU(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
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
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class d9{constructor(a,b){this.previousValue=a,b&&(b.sequenceNumberHandler=a=>this.ot(a),this.ut=a=>b.writeSequenceNumber(a))}ot(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.ut&&this.ut(a),a}}function ea(a){return null==a}function eb(a){return 0===a&&1/a== -1/0}function ec(a){return"number"==typeof a&&Number.isInteger(a)&&!eb(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
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
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function ed(a){let b="";for(let c=0;c<a.length;c++)b.length>0&&(b=ef(b)),b=ee(a.get(c),b);return ef(b)}function ee(a,b){let c=b,d=a.length;for(let e=0;e<d;e++){let f=a.charAt(e);switch(f){case"\0":c+="\x01\x10";break;case"\x01":c+="\x01\x11";break;default:c+=f}}return c}function ef(a){return a+"\x01\x01"}function eg(a){var b,c;let d=a.length;if(d>=2||dn(),2===d)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||dn(),dI.emptyPath();let e=d-2,f=[],g="";for(let h=0;h<d;){let i=a.indexOf("\x01",h);switch((i<0||i>e)&&dn(),a.charAt(i+1)){case"\x01":let j=a.substring(h,i),k;0===g.length?k=j:(g+=j,k=g,g=""),f.push(k);break;case"\x10":g+=a.substring(h,i),g+="\0";break;case"\x11":g+=a.substring(h,i+1);break;default:dn()}h=i+2}return new dI(f)}/**
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
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function eh(a,b){return[a,ed(b)]}function ei(a,b,c){return[a,ed(b),c]}d9.ct=-1;let ej={},ek=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],el=[...ek,"documentOverlays"],em=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],en=em,eo=[...en,"indexConfiguration","indexState","indexEntries"];/**
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
 */ class ep extends null{constructor(a,b){super(),this.ht=a,this.currentSequenceNumber=b}}function eq(a,b){var c;let d=c=a;return d_.M(d.ht,b)}/**
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
 */ function er(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function es(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function et(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
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
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class eu{constructor(a,b){this.comparator=a,this.root=b||ew.EMPTY}insert(a,b){return new eu(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,ew.BLACK,null,null))}remove(a){return new eu(this.comparator,this.root.remove(a,this.comparator).copy(null,null,ew.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new ev(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new ev(this.root,a,this.comparator,!1)}getReverseIterator(){return new ev(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new ev(this.root,a,this.comparator,!0)}}class ev{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,b&&d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class ew{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:ew.RED,this.left=null!=d?d:ew.EMPTY,this.right=null!=e?e:ew.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new ew(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return ew.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return ew.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,ew.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,ew.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw dn();let a=this.left.check();if(a!==this.right.check())throw dn();return a+(this.isRed()?0:1)}}ew.EMPTY=null,ew.RED=!0,ew.BLACK=!1,ew.EMPTY=new class{constructor(){this.size=0}get key(){throw dn()}get value(){throw dn()}get color(){throw dn()}get left(){throw dn()}get right(){throw dn()}copy(a,b,c,d,e){return this}insert(a,b,c){return new ew(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class ex{constructor(a){this.comparator=a,this.data=new eu(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(a){return new ey(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof ex)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new ex(this.comparator);return b.data=a,b}}class ey{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ez(a){return a.hasNext()?a.getNext():void 0}/**
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
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class eA{constructor(a){this.fields=a,a.sort(dK.comparator)}static empty(){return new eA([])}unionWith(a){let b=new ex(dK.comparator);for(let c of this.fields)b=b.add(c);for(let d of a)b=b.add(d);return new eA(b.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return dD(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */ /**
 * An error encountered while decoding base64 string.
 */ class eB extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class eC{constructor(a){this.binaryString=a}static fromBase64String(a){let b=function(a){try{return atob(a)}catch(b){throw"undefined"!=typeof DOMException&&b instanceof DOMException?new eB("Invalid base64 string: "+b):b}}(a);return new eC(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new eC(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return dC(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}eC.EMPTY_BYTE_STRING=new eC("");let eD=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eE(a){var b,c;if(!a&&dn(),"string"==typeof a){let d=0,e=eD.exec(a);if(!e&&dn(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:eF(a.seconds),nanos:eF(a.nanos)}}function eF(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function eG(a){return"string"==typeof a?eC.fromBase64String(a):eC.fromUint8Array(a)}/**
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
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function eH(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function eI(a){let b=a.mapValue.fields.__previous_value__;return eH(b)?eI(b):b}function eJ(a){let b=eE(a.mapValue.fields.__local_write_time__.timestampValue);return new dF(b.seconds,b.nanos)}/**
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
 */ class eK{constructor(a,b,c,d,e,f,g,h,i){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=h,this.useFetchStreams=i}}class eL{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new eL("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof eL&&a.projectId===this.projectId&&a.database===this.database}}/**
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
 */ let eM={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},eN={nullValue:"NULL_VALUE"};function eO(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?eH(a)?4:e0(a)?9007199254740991:10:dn()}function eP(a,b){var c,d,e,f;if(a===b)return!0;let g=eO(a);if(g!==eO(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return eJ(a).isEqual(eJ(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=eE(a.timestampValue),d=eE(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,eG(c.bytesValue).isEqual(eG(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,eF(e.geoPointValue.latitude)===eF(f.geoPointValue.latitude)&&eF(e.geoPointValue.longitude)===eF(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return eF(a.integerValue)===eF(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=eF(a.doubleValue),d=eF(b.doubleValue);return c===d?eb(c)===eb(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return dD(a.arrayValue.values||[],b.arrayValue.values||[],eP);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(er(c)!==er(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!eP(c[e],d[e])))return!1;return!0}(a,b);default:return dn()}}function eQ(a,b){return void 0!==(a.values||[]).find(a=>eP(a,b))}function eR(a,b){if(a===b)return 0;let c=eO(a),d=eO(b);if(c!==d)return dC(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return dC(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=eF(a.integerValue||a.doubleValue),d=eF(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return eS(a.timestampValue,b.timestampValue);case 4:return eS(eJ(a),eJ(b));case 5:return dC(a.stringValue,b.stringValue);case 6:return function(a,b){let c=eG(a),d=eG(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=dC(c[e],d[e]);if(0!==f)return f}return dC(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=dC(eF(a.latitude),eF(b.latitude));return 0!==c?c:dC(eF(a.longitude),eF(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=eR(c[e],d[e]);if(f)return f}return dC(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){if(a===eM.mapValue&&b===eM.mapValue)return 0;if(a===eM.mapValue)return 1;if(b===eM.mapValue)return -1;let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=dC(d[g],f[g]);if(0!==h)return h;let i=eR(c[d[g]],e[f[g]]);if(0!==i)return i}return dC(d.length,f.length)}(a.mapValue,b.mapValue);default:throw dn()}}function eS(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return dC(a,b);let c=eE(a),d=eE(b),e=dC(c.seconds,d.seconds);return 0!==e?e:dC(c.nanos,d.nanos)}function eT(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(a){let b=eE(a);return`time(${b.seconds},${b.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?eG(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,dL.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(a){let b="[",c=!0;for(let d of a.values||[])c?c=!1:b+=",",b+=eT(d);return b+"]"}(a.arrayValue):"mapValue"in a?function(a){let b=Object.keys(a.fields||{}).sort(),c="{",d=!0;for(let e of b)d?d=!1:c+=",",c+=`${e}:${eT(a.fields[e])}`;return c+"}"}(a.mapValue):dn()}function eU(a){switch(eO(a)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let b=eI(a);return b?16+eU(b):16;case 5:return 2*a.stringValue.length;case 6:return eG(a.bytesValue).approximateByteSize();case 7:return a.referenceValue.length;case 9:return(a.arrayValue.values||[]).reduce((a,b)=>a+eU(b),0);case 10:var c;let d;return c=a.mapValue,d=0,es(c.fields,(a,b)=>{d+=a.length+eU(b)}),d;default:throw dn()}}function eV(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function eW(a){return!!a&&"integerValue"in a}function eX(a){return!!a&&"arrayValue"in a}function eY(a){return!!a&&"nullValue"in a}function eZ(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function e$(a){return!!a&&"mapValue"in a}function e_(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return es(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=e_(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=e_(a.arrayValue.values[d]);return c}return Object.assign({},a)}function e0(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function e1(a){return"nullValue"in a?eN:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?eV(eL.empty(),dL.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:dn()}function e2(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?eV(eL.empty(),dL.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?eM:dn()}function e3(a,b){let c=eR(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function e4(a,b){let c=eR(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
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
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class e5{constructor(a){this.value=a}static empty(){return new e5({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!e$(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=e_(b)}setAll(a){let b=dK.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=e_(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());e$(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return eP(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];e$(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(es(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new e5(e_(this.value))}}function e6(a){let b=[];return es(a.fields,(a,c)=>{let d=new dK([a]);if(e$(c)){let e=e6(c.mapValue).fields;if(0===e.length)b.push(d);else for(let f of e)b.push(d.child(f))}else b.push(d)}),new eA(b)}/**
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
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class e7{constructor(a,b,c,d,e,f,g){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.createTime=e,this.data=f,this.documentState=g}static newInvalidDocument(a){return new e7(a,0,dG.min(),dG.min(),dG.min(),e5.empty(),0)}static newFoundDocument(a,b,c,d){return new e7(a,1,b,dG.min(),c,d,0)}static newNoDocument(a,b){return new e7(a,2,b,dG.min(),dG.min(),e5.empty(),0)}static newUnknownDocument(a,b){return new e7(a,3,b,dG.min(),dG.min(),e5.empty(),2)}convertToFoundDocument(a,b){return this.createTime.isEqual(dG.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=a),this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=e5.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=e5.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dG.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof e7&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new e7(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
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
 */ /**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ class e8{constructor(a,b){this.position=a,this.inclusive=b}}function e9(a,b,c){let d=0;for(let e=0;e<a.position.length;e++){let f=b[e],g=a.position[e];if(d=f.field.isKeyField()?dL.comparator(dL.fromName(g.referenceValue),c.key):eR(g,c.data.field(f.field)),"desc"===f.dir&&(d*=-1),0!==d)break}return d}function fa(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!eP(a.position[c],b.position[c]))return!1;return!0}/**
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
 */ /**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class fb{constructor(a,b="asc"){this.field=a,this.dir=b}}function fc(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}/**
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
 */ class fd{}class fe extends fd{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.createKeyFieldInFilter(a,b,c):new fo(a,b,c):"array-contains"===b?new fs(a,c):"in"===b?new ft(a,c):"not-in"===b?new fu(a,c):"array-contains-any"===b?new fv(a,c):new fe(a,b,c)}static createKeyFieldInFilter(a,b,c){return"in"===b?new fp(a,c):new fq(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.matchesComparison(eR(b,this.value)):null!==b&&eO(this.value)===eO(b)&&this.matchesComparison(eR(b,this.value))}matchesComparison(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return dn()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ff extends fd{constructor(a,b){super(),this.filters=a,this.op=b,this.lt=null}static create(a,b){return new ff(a,b)}matches(a){return fg(this)?void 0===this.filters.find(b=>!b.matches(a)):void 0!==this.filters.find(b=>b.matches(a))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((a,b)=>a.concat(b.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let a=this.ft(a=>a.isInequality());return null!==a?a.field:null}ft(a){for(let b of this.getFlattenedFilters())if(a(b))return b;return null}}function fg(a){return"and"===a.op}function fh(a){return"or"===a.op}function fi(a){return fj(a)&&fg(a)}function fj(a){for(let b of a.filters)if(b instanceof ff)return!1;return!0}function fk(a){if(a instanceof fe){var b;return a.field.canonicalString()+a.op.toString()+eT(b=a.value)}if(fi(a))return a.filters.map(a=>fk(a)).join(",");{let c=a.filters.map(a=>fk(a)).join(",");return`${a.op}(${c})`}}function fl(a,b){var c,d,e,f;return a instanceof fe?(c=a,(d=b)instanceof fe&&c.op===d.op&&c.field.isEqual(d.field)&&eP(c.value,d.value)):a instanceof ff?(e=a,(f=b)instanceof ff&&e.op===f.op&&e.filters.length===f.filters.length&&e.filters.reduce((a,b,c)=>a&&fl(b,f.filters[c]),!0)):void dn()}function fm(a,b){let c=a.filters.concat(b);return ff.create(c,a.op)}function fn(a){var b,c,d;return a instanceof fe?(b=a,`${b.field.canonicalString()} ${b.op} ${eT(c=b.value)}`):a instanceof ff?(d=a).op.toString()+" {"+d.getFilters().map(fn).join(" ,")+"}":"Filter"}class fo extends fe{constructor(a,b,c){super(a,b,c),this.key=dL.fromName(c.referenceValue)}matches(a){let b=dL.comparator(a.key,this.key);return this.matchesComparison(b)}}class fp extends fe{constructor(a,b){super(a,"in",b),this.keys=fr("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class fq extends fe{constructor(a,b){super(a,"not-in",b),this.keys=fr("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function fr(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>dL.fromName(a.referenceValue))}class fs extends fe{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return eX(b)&&eQ(b.arrayValue,this.value)}}class ft extends fe{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&eQ(this.value.arrayValue,b)}}class fu extends fe{constructor(a,b){super(a,"not-in",b)}matches(a){if(eQ(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!eQ(this.value.arrayValue,b)}}class fv extends fe{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!eX(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>eQ(this.value.arrayValue,a))}}/**
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
 */ // Visible for testing
class fw{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.dt=null}}function fx(a,b=null,c=[],d=[],e=null,f=null,g=null){return new fw(a,b,c,d,e,f,g)}function fy(a){var b;let c=b=a;if(null===c.dt){let d=c.path.canonicalString();null!==c.collectionGroup&&(d+="|cg:"+c.collectionGroup),d+="|f:",d+=c.filters.map(a=>fk(a)).join(","),d+="|ob:",d+=c.orderBy.map(a=>{var b;return(b=a).field.canonicalString()+b.dir}).join(","),ea(c.limit)||(d+="|l:",d+=c.limit),c.startAt&&(d+="|lb:",d+=c.startAt.inclusive?"b:":"a:",d+=c.startAt.position.map(a=>{var b;return eT(b=a)}).join(",")),c.endAt&&(d+="|ub:",d+=c.endAt.inclusive?"a:":"b:",d+=c.endAt.position.map(a=>{var b;return eT(b=a)}).join(",")),c.dt=d}return c.dt}function fz(a,b){if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let c=0;c<a.orderBy.length;c++)if(!fc(a.orderBy[c],b.orderBy[c]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let d=0;d<a.filters.length;d++)if(!fl(a.filters[d],b.filters[d]))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!fa(a.startAt,b.startAt)&&fa(a.endAt,b.endAt)}function fA(a){return dL.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function fB(a,b){return a.filters.filter(a=>a instanceof fe&&a.field.isEqual(b))}function fC(a,b,c){let d=eN,e=!0;for(let f of fB(a,b)){let g=eN,h=!0;switch(f.op){case"<":case"<=":g=e1(f.value);break;case"==":case"in":case">=":g=f.value;break;case">":g=f.value,h=!1;break;case"!=":case"not-in":g=eN}0>e3({value:d,inclusive:e},{value:g,inclusive:h})&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];0>e3({value:d,inclusive:e},{value:j,inclusive:c.inclusive})&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}function fD(a,b,c){let d=eM,e=!0;for(let f of fB(a,b)){let g=eM,h=!0;switch(f.op){case">=":case">":g=e2(f.value),h=!1;break;case"==":case"in":case"<=":g=f.value;break;case"<":g=f.value,h=!1;break;case"!=":case"not-in":g=eM}e4({value:d,inclusive:e},{value:g,inclusive:h})>0&&(d=g,e=h)}if(null!==c){for(let i=0;i<a.orderBy.length;++i)if(a.orderBy[i].field.isEqual(b)){let j=c.position[i];e4({value:d,inclusive:e},{value:j,inclusive:c.inclusive})>0&&(d=j,e=c.inclusive);break}}return{value:d,inclusive:e}}/** Returns the number of segments of a perfect index for this target. */ /**
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
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class fE{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this.wt=null,this._t=null,this.startAt,this.endAt}}function fF(a,b,c,d,e,f,g,h){return new fE(a,b,c,d,e,f,g,h)}function fG(a){return new fE(a)}function fH(a){return 0===a.filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())}function fI(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function fJ(a){for(let b of a.filters){let c=b.getFirstInequalityField();if(null!==c)return c}return null}function fK(a){return null!==a.collectionGroup}function fL(a){var b;let c=b=a;if(null===c.wt){c.wt=[];let d=fJ(c),e=fI(c);if(null!==d&&null===e)d.isKeyField()||c.wt.push(new fb(d)),c.wt.push(new fb(dK.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c.wt.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c.wt.push(new fb(dK.keyField(),h))}}}return c.wt}function fM(a){var b;let c=b=a;if(!c._t){if("F"===c.limitType)c._t=fx(c.path,c.collectionGroup,fL(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of fL(c)){let f="desc"===e.dir?"asc":"desc";d.push(new fb(e.field,f))}let g=c.endAt?new e8(c.endAt.position,c.endAt.inclusive):null,h=c.startAt?new e8(c.startAt.position,c.startAt.inclusive):null;c._t=fx(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c._t}function fN(a,b){b.getFirstInequalityField(),fJ(a);let c=a.filters.concat([b]);return new fE(a.path,a.collectionGroup,a.explicitOrderBy.slice(),c,a.limit,a.limitType,a.startAt,a.endAt)}function fO(a,b,c){return new fE(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function fP(a,b){return fz(fM(a),fM(b))&&a.limitType===b.limitType}function fQ(a){return`${fy(fM(a))}|lt:${a.limitType}`}function fR(a){var b;let c;return`Query(target=${c=(b=fM(a)).path.canonicalString(),null!==b.collectionGroup&&(c+=" collectionGroup="+b.collectionGroup),b.filters.length>0&&(c+=`, filters: [${b.filters.map(a=>fn(a)).join(", ")}]`),ea(b.limit)||(c+=", limit: "+b.limit),b.orderBy.length>0&&(c+=`, orderBy: [${b.orderBy.map(a=>{var b;return b=a,`${b.field.canonicalString()} (${b.dir})`}).join(", ")}]`),b.startAt&&(c+=", startAt: ",c+=b.startAt.inclusive?"b:":"a:",c+=b.startAt.position.map(a=>{var b;return eT(b=a)}).join(",")),b.endAt&&(c+=", endAt: ",c+=b.endAt.inclusive?"a:":"b:",c+=b.endAt.position.map(a=>{var b;return eT(b=a)}).join(",")),`Target(${c})`}; limitType=${a.limitType})`}function fS(a,b){var c,d;return b.isFoundDocument()&&function(a,b){let c=b.key.path;return null!==a.collectionGroup?b.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):dL.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(a,b)&&function(a,b){for(let c of fL(a))if(!c.field.isKeyField()&&null===b.data.field(c.field))return!1;return!0}(a,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(a,b)&&(c=a,d=b,(!c.startAt||!!function(a,b,c){let d=e9(a,b,c);return a.inclusive?d<=0:d<0}(c.startAt,fL(c),d))&&(!c.endAt||!!function(a,b,c){let d=e9(a,b,c);return a.inclusive?d>=0:d>0}(c.endAt,fL(c),d)))}function fT(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function fU(a){return(b,c)=>{let d=!1;for(let e of fL(a)){let f=fV(e,b,c);if(0!==f)return f;d=d||e.field.isKeyField()}return 0}}function fV(a,b,c){let d=a.field.isKeyField()?dL.comparator(b.key,c.key):function(a,b,c){let d=b.data.field(a),e=c.data.field(a);return null!==d&&null!==e?eR(d,e):dn()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return dn()}}/**
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
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class fW{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0!==c){for(let[d,e]of c)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,b){let c=this.mapKeyFn(a),d=this.inner[c];if(void 0===d)return this.inner[c]=[[a,b]],void this.innerSize++;for(let e=0;e<d.length;e++)if(this.equalsFn(d[e][0],a))return void(d[e]=[a,b]);d.push([a,b]),this.innerSize++}delete(a){let b=this.mapKeyFn(a),c=this.inner[b];if(void 0===c)return!1;for(let d=0;d<c.length;d++)if(this.equalsFn(c[d][0],a))return 1===c.length?delete this.inner[b]:c.splice(d,1),this.innerSize--,!0;return!1}forEach(a){es(this.inner,(b,c)=>{for(let[d,e]of c)a(d,e)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}/**
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
 */ let fX=new eu(dL.comparator),fY=new eu(dL.comparator);function fZ(...a){let b=fY;for(let c of a)b=b.insert(c.key,c);return b}function f$(a){let b=fY;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function f_(){return f1()}function f0(){return f1()}function f1(){return new fW(a=>a.toString(),(a,b)=>a.isEqual(b))}let f2=new eu(dL.comparator),f3=new ex(dL.comparator);function f4(...a){let b=f3;for(let c of a)b=b.add(c);return b}let f5=new ex(dC);/**
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
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function f6(a,b){if(a.useProto3Json){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eb(b)?"-0":b}}function f7(a){return{integerValue:""+a}}function f8(a,b){return ec(b)?f7(b):f6(a,b)}/**
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
 */ /** Used to represent a field transform on a mutation. */ class f9{constructor(){this._=void 0}}function ga(a,b,c){return a instanceof gd?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&eH(b)&&(b=eI(b)),b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof ge?gf(a,b):a instanceof gg?gh(a,b):function(a,b){let c=gc(a,b),d=gj(c)+gj(a.gt);return eW(c)&&eW(a.gt)?f7(d):f6(a.serializer,d)}(a,b)}function gb(a,b,c){return a instanceof ge?gf(a,b):a instanceof gg?gh(a,b):c}function gc(a,b){var c,d;return a instanceof gi?eW(c=b)||(d=c)&&"doubleValue"in d?b:{integerValue:0}:null}class gd extends f9{}class ge extends f9{constructor(a){super(),this.elements=a}}function gf(a,b){let c=gk(b);for(let d of a.elements)c.some(a=>eP(a,d))||c.push(d);return{arrayValue:{values:c}}}class gg extends f9{constructor(a){super(),this.elements=a}}function gh(a,b){let c=gk(b);for(let d of a.elements)c=c.filter(a=>!eP(a,d));return{arrayValue:{values:c}}}class gi extends f9{constructor(a,b){super(),this.serializer=a,this.gt=b}}function gj(a){return eF(a.integerValue||a.doubleValue)}function gk(a){return eX(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
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
 */ /** A field path and the TransformOperation to perform upon it. */ class gl{constructor(a,b){this.field=a,this.transform=b}}class gm{constructor(a,b){this.version=a,this.transformResults=b}}class gn{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new gn}static exists(a){return new gn(void 0,a)}static updateTime(a){return new gn(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function go(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class gp{}function gq(a,b){if(!a.hasLocalMutations||b&&0===b.fields.length)return null;if(null===b)return a.isNoDocument()?new gA(a.key,gn.none()):new gv(a.key,a.data,gn.none());{let c=a.data,d=e5.empty(),e=new ex(dK.comparator);for(let f of b.fields)if(!e.has(f)){let g=c.field(f);null===g&&f.length>1&&(f=f.popLast(),g=c.field(f)),null===g?d.delete(f):d.set(f,g),e=e.add(f)}return new gw(a.key,d,new eA(e.toArray()),gn.none())}}function gr(a,b,c){a instanceof gv?function(a,b,c){let d=a.value.clone(),e=gy(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof gw?function(a,b,c){if(!go(a.precondition,b))return void b.convertToUnknownDocument(c.version);let d=gy(a.fieldTransforms,b,c.transformResults),e=b.data;e.setAll(gx(a)),e.setAll(d),b.convertToFoundDocument(c.version,e).setHasCommittedMutations()}(a,b,c):function(a,b,c){b.convertToNoDocument(c.version).setHasCommittedMutations()}(0,b,c)}function gs(a,b,c,d){var e,f,g;return a instanceof gv?function(a,b,c,d){if(!go(a.precondition,b))return c;let e=a.value.clone(),f=gz(a.fieldTransforms,d,b);return e.setAll(f),b.convertToFoundDocument(b.version,e).setHasLocalMutations(),null}(a,b,c,d):a instanceof gw?function(a,b,c,d){if(!go(a.precondition,b))return c;let e=gz(a.fieldTransforms,d,b),f=b.data;return(f.setAll(gx(a)),f.setAll(e),b.convertToFoundDocument(b.version,f).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,b,c,d):(e=a,f=b,g=c,go(e.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g)}function gt(a,b){let c=null;for(let d of a.fieldTransforms){let e=b.data.field(d.field),f=gc(d.transform,e||null);null!=f&&(null===c&&(c=e5.empty()),c.set(d.field,f))}return c||null}function gu(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&dD(c,d,(a,b)=>{var c,d,e,f;return c=a,d=b,c.field.isEqual(d.field)&&(e=c.transform,f=d.transform,e instanceof ge&&f instanceof ge||e instanceof gg&&f instanceof gg?dD(e.elements,f.elements,eP):e instanceof gi&&f instanceof gi?eP(e.gt,f.gt):e instanceof gd&&f instanceof gd)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class gv extends gp{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class gw extends gp{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function gx(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function gy(a,b,c){var d;let e=new Map;(d=a.length===c.length)||dn();for(let f=0;f<c.length;f++){let g=a[f],h=g.transform,i=b.data.field(g.field);e.set(g.field,gb(h,i,c[f]))}return e}function gz(a,b,c){let d=new Map;for(let e of a){let f=e.transform,g=c.data.field(e.field);d.set(e.field,ga(f,g,b))}return d}class gA extends gp{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gB extends gp{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class gC{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(a,b){let c=b.mutationResults;for(let d=0;d<this.mutations.length;d++){let e=this.mutations[d];e.key.isEqual(a.key)&&gr(e,a,c[d])}}applyToLocalView(a,b){for(let c of this.baseMutations)c.key.isEqual(a.key)&&(b=gs(c,a,b,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(a.key)&&(b=gs(d,a,b,this.localWriteTime));return b}applyToLocalDocumentSet(a,b){let c=f0();return this.mutations.forEach(d=>{let e=a.get(d.key),f=e.overlayedDocument,g=this.applyToLocalView(f,e.mutatedFields);g=b.has(d.key)?null:g;let h=gq(f,g);null!==h&&c.set(d.key,h),f.isValidDocument()||f.convertToNoDocument(dG.min())}),c}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),f4())}isEqual(a){return this.batchId===a.batchId&&dD(this.mutations,a.mutations,(a,b)=>gu(a,b))&&dD(this.baseMutations,a.baseMutations,(a,b)=>gu(a,b))}}class gD{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(a,b,c){var d;(d=a.mutations.length===c.length)||dn();let e=f2,f=a.mutations;for(let g=0;g<f.length;g++)e=e.insert(f[g].key,c[g].version);return new gD(a,b,c,e)}}/**
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
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class gE{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */ /**
 * Concrete implementation of the Aggregate type.
 */ class gF{constructor(a,b,c){this.alias=a,this.yt=b,this.fieldPath=c}}/**
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
 */ class gG{constructor(a,b){this.count=a,this.unchangedNames=b}}function gH(a){switch(a){default:return dn();case dp.CANCELLED:case dp.UNKNOWN:case dp.DEADLINE_EXCEEDED:case dp.RESOURCE_EXHAUSTED:case dp.INTERNAL:case dp.UNAVAILABLE:case dp.UNAUTHENTICATED:return!1;case dp.INVALID_ARGUMENT:case dp.NOT_FOUND:case dp.ALREADY_EXISTS:case dp.PERMISSION_DENIED:case dp.FAILED_PRECONDITION:case dp.ABORTED:case dp.OUT_OF_RANGE:case dp.UNIMPLEMENTED:case dp.DATA_LOSS:return!0}}function gI(a){if(void 0===a)return dk("GRPC error has no .code"),dp.UNKNOWN;switch(a){case i.OK:return dp.OK;case i.CANCELLED:return dp.CANCELLED;case i.UNKNOWN:return dp.UNKNOWN;case i.DEADLINE_EXCEEDED:return dp.DEADLINE_EXCEEDED;case i.RESOURCE_EXHAUSTED:return dp.RESOURCE_EXHAUSTED;case i.INTERNAL:return dp.INTERNAL;case i.UNAVAILABLE:return dp.UNAVAILABLE;case i.UNAUTHENTICATED:return dp.UNAUTHENTICATED;case i.INVALID_ARGUMENT:return dp.INVALID_ARGUMENT;case i.NOT_FOUND:return dp.NOT_FOUND;case i.ALREADY_EXISTS:return dp.ALREADY_EXISTS;case i.PERMISSION_DENIED:return dp.PERMISSION_DENIED;case i.FAILED_PRECONDITION:return dp.FAILED_PRECONDITION;case i.ABORTED:return dp.ABORTED;case i.OUT_OF_RANGE:return dp.OUT_OF_RANGE;case i.UNIMPLEMENTED:return dp.UNIMPLEMENTED;case i.DATA_LOSS:return dp.DATA_LOSS;default:return dn()}}(j=i||(i={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */ /**
 * Manages "testing hooks", hooks into the internals of the SDK to verify
 * internal state and events during integration tests. Do not use this class
 * except for testing purposes.
 *
 * There are two ways to retrieve the global singleton instance of this class:
 * 1. The `instance` property, which returns null if the global singleton
 *      instance has not been created. Use this property if the caller should
 *      "do nothing" if there are no testing hooks registered, such as when
 *      delivering an event to notify registered callbacks.
 * 2. The `getOrCreateInstance()` method, which creates the global singleton
 *      instance if it has not been created. Use this method if the instance is
 *      needed to, for example, register a callback.
 *
 * @internal
 */ class gJ{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return gK}static getOrCreateInstance(){return null===gK&&(gK=new gJ),gK}onExistenceFilterMismatch(a){let b=Symbol();return this.onExistenceFilterMismatchCallbacks.set(b,a),()=>this.onExistenceFilterMismatchCallbacks.delete(b)}notifyOnExistenceFilterMismatch(a){this.onExistenceFilterMismatchCallbacks.forEach(b=>b(a))}}let gK=null,gL=new dc([4294967295,4294967295],0);function gM(a){let b=(new TextEncoder).encode(a),c=new db;return c.update(b),new Uint8Array(c.digest())}function gN(a){let b=new DataView(a.buffer),c=b.getUint32(0,!0),d=b.getUint32(4,!0),e=b.getUint32(8,!0),f=b.getUint32(12,!0);return[new dc([c,d],0),new dc([e,f],0)]}class gO{constructor(a,b,c){if(this.bitmap=a,this.padding=b,this.hashCount=c,b<0||b>=8)throw new gP(`Invalid padding: ${b}`);if(c<0||a.length>0&&0===this.hashCount)throw new gP(`Invalid hash count: ${c}`);if(0===a.length&&0!==b)throw new gP(`Invalid padding when bitmap length is 0: ${b}`);this.It=8*a.length-b,this.Tt=dc.fromNumber(this.It)}Et(a,b,c){let d=a.add(b.multiply(dc.fromNumber(c)));return 1===d.compare(gL)&&(d=new dc([d.getBits(0),d.getBits(1)],0)),d.modulo(this.Tt).toNumber()}At(a){return 0!=(this.bitmap[Math.floor(a/8)]&1<<a%8)}vt(a){if(0===this.It)return!1;let b=gM(a),[c,d]=gN(b);for(let e=0;e<this.hashCount;e++){let f=this.Et(c,d,e);if(!this.At(f))return!1}return!0}static create(a,b,c){let d=new Uint8Array(Math.ceil(a/8)),e=new gO(d,a%8==0?0:8-a%8,b);return c.forEach(a=>e.insert(a)),e}insert(a){if(0===this.It)return;let b=gM(a),[c,d]=gN(b);for(let e=0;e<this.hashCount;e++){let f=this.Et(c,d,e);this.Rt(f)}}Rt(a){let b=Math.floor(a/8);this.bitmap[b]|=1<<a%8}}class gP extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class gQ{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,b,c){let d=new Map;return d.set(a,gR.createSynthesizedTargetChangeForCurrentChange(a,b,c)),new gQ(dG.min(),d,new eu(dC),fX,f4())}}class gR{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(a,b,c){return new gR(c,b,f4(),f4(),f4())}}/**
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
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class gS{constructor(a,b,c,d){this.Pt=a,this.removedTargetIds=b,this.key=c,this.bt=d}}class gT{constructor(a,b){this.targetId=a,this.Vt=b}}class gU{constructor(a,b,c=eC.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class gV{constructor(){this.St=0,this.Dt=gY(),this.Ct=eC.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(a){a.approximateByteSize()>0&&(this.Nt=!0,this.Ct=a)}Ot(){let a=f4(),b=f4(),c=f4();return this.Dt.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:dn()}}),new gR(this.Ct,this.xt,a,b,c)}Ft(){this.Nt=!1,this.Dt=gY()}Bt(a,b){this.Nt=!0,this.Dt=this.Dt.insert(a,b)}Lt(a){this.Nt=!0,this.Dt=this.Dt.remove(a)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class gW{constructor(a){this.Gt=a,this.Qt=new Map,this.jt=fX,this.zt=gX(),this.Wt=new eu(dC)}Ht(a){for(let b of a.Pt)a.bt&&a.bt.isFoundDocument()?this.Jt(b,a.bt):this.Yt(b,a.key,a.bt);for(let c of a.removedTargetIds)this.Yt(c,a.key,a.bt)}Xt(a){this.forEachTarget(a,b=>{let c=this.Zt(b);switch(a.state){case 0:this.te(b)&&c.$t(a.resumeToken);break;case 1:c.Ut(),c.kt||c.Ft(),c.$t(a.resumeToken);break;case 2:c.Ut(),c.kt||this.removeTarget(b);break;case 3:this.te(b)&&(c.Kt(),c.$t(a.resumeToken));break;case 4:this.te(b)&&(this.ee(b),c.$t(a.resumeToken));break;default:dn()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Qt.forEach((a,c)=>{this.te(c)&&b(c)})}ne(a){var b,c;let d=a.targetId,e=a.Vt.count,f=this.se(d);if(f){let g=f.target;if(fA(g)){if(0===e){let h=new dL(g.path);this.Yt(d,h,e7.newNoDocument(h,dG.min()))}else(c=1===e)||dn()}else{let i=this.ie(d);if(i!==e){let j=this.re(a,i);if(0!==j){this.ee(d);let k=2===j?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(d,k)}null===(b=gJ.instance)|| void 0===b||b.notifyOnExistenceFilterMismatch(function(a,b,c){var d,e,f,g,h,i;let j={localCacheCount:b,existenceFilterCount:c.count},k=c.unchangedNames;return k&&(j.bloomFilter={applied:0===a,hashCount:null!==(d=null==k?void 0:k.hashCount)&& void 0!==d?d:0,bitmapLength:null!==(g=null===(f=null===(e=null==k?void 0:k.bits)|| void 0===e?void 0:e.bitmap)|| void 0===f?void 0:f.length)&& void 0!==g?g:0,padding:null!==(i=null===(h=null==k?void 0:k.bits)|| void 0===h?void 0:h.padding)&& void 0!==i?i:0}),j}(j,i,a.Vt))}}}}re(a,b){let{unchangedNames:c,count:d}=a.Vt;if(!c||!c.bits)return 1;let{bits:{bitmap:e="",padding:f=0},hashCount:g=0}=c,h,i;try{h=eG(e).toUint8Array()}catch(j){if(j instanceof eB)return dl("Decoding the base64 bloom filter in existence filter failed ("+j.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw j}try{i=new gO(h,f,g)}catch(k){return dl(k instanceof gP?"BloomFilter error: ":"Applying bloom filter failed: ",k),1}return 0===i.It?1:d!==b-this.oe(a.targetId,i)?2:0}oe(a,b){let c=this.Gt.getRemoteKeysForTarget(a),d=0;return c.forEach(c=>{let e=this.Gt.ue(),f=`projects/${e.projectId}/databases/${e.database}/documents/${c.path.canonicalString()}`;b.vt(f)||(this.Yt(a,c,null),d++)}),d}ce(a){let b=new Map;this.Qt.forEach((c,d)=>{let e=this.se(d);if(e){if(c.current&&fA(e.target)){let f=new dL(e.target.path);null!==this.jt.get(f)||this.ae(d,f)||this.Yt(d,f,e7.newNoDocument(f,a))}c.Mt&&(b.set(d,c.Ot()),c.Ft())}});let c=f4();this.zt.forEach((a,b)=>{let d=!0;b.forEachWhile(a=>{let b=this.se(a);return!b||"TargetPurposeLimboResolution"===b.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.jt.forEach((b,c)=>c.setReadTime(a));let d=new gQ(a,b,this.Wt,this.jt,c);return this.jt=fX,this.zt=gX(),this.Wt=new eu(dC),d}Jt(a,b){if(!this.te(a))return;let c=this.ae(a,b.key)?2:0;this.Zt(a).Bt(b.key,c),this.jt=this.jt.insert(b.key,b),this.zt=this.zt.insert(b.key,this.he(b.key).add(a))}Yt(a,b,c){if(!this.te(a))return;let d=this.Zt(a);this.ae(a,b)?d.Bt(b,1):d.Lt(b),this.zt=this.zt.insert(b,this.he(b).delete(a)),c&&(this.jt=this.jt.insert(b,c))}removeTarget(a){this.Qt.delete(a)}ie(a){let b=this.Zt(a).Ot();return this.Gt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}qt(a){this.Zt(a).qt()}Zt(a){let b=this.Qt.get(a);return b||(b=new gV,this.Qt.set(a,b)),b}he(a){let b=this.zt.get(a);return b||(b=new ex(dC),this.zt=this.zt.insert(a,b)),b}te(a){let b=null!==this.se(a);return b||dj("WatchChangeAggregator","Detected inactive target",a),b}se(a){let b=this.Qt.get(a);return b&&b.kt?null:this.Gt.le(a)}ee(a){this.Qt.set(a,new gV),this.Gt.getRemoteKeysForTarget(a).forEach(b=>{this.Yt(a,b,null)})}ae(a,b){return this.Gt.getRemoteKeysForTarget(a).has(b)}}function gX(){return new eu(dL.comparator)}function gY(){return new eu(dL.comparator)}let gZ={asc:"ASCENDING",desc:"DESCENDING"},g$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},g_={and:"AND",or:"OR"};class g0{constructor(a,b){this.databaseId=a,this.useProto3Json=b}}function g1(a,b){return a.useProto3Json||ea(b)?b:{value:b}}function g2(a,b){return a.useProto3Json?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function g3(a,b){return a.useProto3Json?b.toBase64():b.toUint8Array()}function g4(a){var b;return!a&&dn(),dG.fromTimestamp(function(a){let b=eE(a);return new dF(b.seconds,b.nanos)}(a))}function g5(a,b){var c;return(c=a,new dI(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function g6(a){var b;let c=dI.fromString(a);return hp(c)||dn(),c}function g7(a,b){return g5(a.databaseId,b.path)}function g8(a,b){let c=g6(b);if(c.get(1)!==a.databaseId.projectId)throw new dq(dp.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+a.databaseId.projectId);if(c.get(3)!==a.databaseId.database)throw new dq(dp.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+a.databaseId.database);return new dL(hc(c))}function g9(a,b){return g5(a.databaseId,b)}function ha(a){let b=g6(a);return 4===b.length?dI.emptyPath():hc(b)}function hb(a){return new dI(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function hc(a){var b;return a.length>4&&"documents"===a.get(4)||dn(),a.popFirst(5)}function hd(a,b,c){return{name:g7(a,b),fields:c.value.mapValue.fields}}function he(a,b,c){let d=g8(a,b.name),e=g4(b.updateTime),f=b.createTime?g4(b.createTime):dG.min(),g=new e5({mapValue:{fields:b.fields}}),h=e7.newFoundDocument(d,e,f,g);return c&&h.setHasCommittedMutations(),c?h.setHasCommittedMutations():h}function hf(a,b){var c,d,e,f;let g;if(b instanceof gv)g={update:hd(a,b.key,b.value)};else if(b instanceof gA)g={delete:g7(a,b.key)};else if(b instanceof gw)g={update:hd(a,b.key,b.data),updateMask:ho(b.fieldMask)};else{if(!(b instanceof gB))return dn();g={verify:g7(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof gd)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ge)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gg)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof gi)return{fieldPath:b.field.canonicalString(),increment:c.gt};throw dn()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,g2(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:dn())),g}function hg(a,b){var c;let d=b.currentDocument?void 0!==(c=b.currentDocument).updateTime?gn.updateTime(g4(c.updateTime)):void 0!==c.exists?gn.exists(c.exists):gn.none():gn.none(),e=b.updateTransforms?b.updateTransforms.map(b=>(function(a,b){let c=null;if("setToServerValue"in b){var d;"REQUEST_TIME"===b.setToServerValue||dn(),c=new gd}else if("appendMissingElements"in b){let e=b.appendMissingElements.values||[];c=new ge(e)}else if("removeAllFromArray"in b){let f=b.removeAllFromArray.values||[];c=new gg(f)}else"increment"in b?c=new gi(a,b.increment):dn();let g=dK.fromServerFormat(b.fieldPath);return new gl(g,c)})(a,b)):[];if(b.update){b.update.name;let f=g8(a,b.update.name),g=new e5({mapValue:{fields:b.update.fields}});if(b.updateMask){let h=function(a){let b=a.fieldPaths||[];return new eA(b.map(a=>dK.fromServerFormat(a)))}(b.updateMask);return new gw(f,g,h,d,e)}return new gv(f,g,d,e)}if(b.delete){let i=g8(a,b.delete);return new gA(i,d)}if(b.verify){let j=g8(a,b.verify);return new gB(j,d)}return dn()}function hh(a,b){return{documents:[g9(a,b.path)]}}function hi(a,b){var c,d;let e={structuredQuery:{}},f=b.path;null!==b.collectionGroup?(e.parent=g9(a,f),e.structuredQuery.from=[{collectionId:b.collectionGroup,allDescendants:!0}]):(e.parent=g9(a,f.popLast()),e.structuredQuery.from=[{collectionId:f.lastSegment()}]);let g=function(a){if(0!==a.length)return hn(ff.create(a,"and"))}(b.filters);g&&(e.structuredQuery.where=g);let h=function(a){if(0!==a.length)return a.map(a=>{var b,c;return{field:hl((b=a).field),direction:(c=b.dir,gZ[c])}})}(b.orderBy);h&&(e.structuredQuery.orderBy=h);let i=g1(a,b.limit);return null!==i&&(e.structuredQuery.limit=i),b.startAt&&(e.structuredQuery.startAt={before:(c=b.startAt).inclusive,values:c.position}),b.endAt&&(e.structuredQuery.endAt={before:!(d=b.endAt).inclusive,values:d.position}),e}function hj(a){var b,c;let d=ha(a.parent),e=a.structuredQuery,f=e.from?e.from.length:0,g=null;if(f>0){(b=1===f)||dn();let h=e.from[0];h.allDescendants?g=h.collectionId:d=d.child(h.collectionId)}let i=[];e.where&&(i=function(a){let b=hk(a);return b instanceof ff&&fi(b)?b.getFilters():[b]}(e.where));let j=[];e.orderBy&&(j=e.orderBy.map(a=>{var b;return b=a,new fb(hm(b.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}));let k=null,l;e.limit&&(k=ea(l="object"==typeof(c=e.limit)?c.value:c)?null:l);let m=null;e.startAt&&(m=function(a){let b=!!a.before,c=a.values||[];return new e8(c,b)}(e.startAt));let n=null;return e.endAt&&(n=function(a){let b=!a.before,c=a.values||[];return new e8(c,b)}(e.endAt)),fF(d,g,j,i,k,"F",m,n)}function hk(a){var b,c;return void 0!==a.unaryFilter?function(a){switch(a.unaryFilter.op){case"IS_NAN":let b=hm(a.unaryFilter.field);return fe.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=hm(a.unaryFilter.field);return fe.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=hm(a.unaryFilter.field);return fe.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=hm(a.unaryFilter.field);return fe.create(e,"!=",{nullValue:"NULL_VALUE"});default:return dn()}}(a):void 0!==a.fieldFilter?(b=a,fe.create(hm(b.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return dn()}}(b.fieldFilter.op),b.fieldFilter.value)):void 0!==a.compositeFilter?(c=a,ff.create(c.compositeFilter.filters.map(a=>hk(a)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return dn()}}(c.compositeFilter.op))):dn()}function hl(a){return{fieldPath:a.canonicalString()}}function hm(a){return dK.fromServerFormat(a.fieldPath)}function hn(a){return a instanceof fe?function(a){var b;if("=="===a.op){if(eZ(a.value))return{unaryFilter:{field:hl(a.field),op:"IS_NAN"}};if(eY(a.value))return{unaryFilter:{field:hl(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(eZ(a.value))return{unaryFilter:{field:hl(a.field),op:"IS_NOT_NAN"}};if(eY(a.value))return{unaryFilter:{field:hl(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hl(a.field),op:g$[b=a.op],value:a.value}}}(a):a instanceof ff?function(a){var b;let c=a.getFilters().map(a=>hn(a));return 1===c.length?c[0]:{compositeFilter:{op:g_[b=a.op],filters:c}}}(a):dn()}function ho(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function hp(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
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
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class hq{constructor(a,b,c,d,e=dG.min(),f=dG.min(),g=eC.EMPTY_BYTE_STRING,h=null){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=h}withSequenceNumber(a){return new hq(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(a,b){return new hq(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a,null)}withExpectedCount(a){return new hq(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,a)}withLastLimboFreeSnapshotVersion(a){return new hq(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken,this.expectedCount)}}/**
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
 */ /** Serializer for values stored in the LocalStore. */ class hr{constructor(a){this.fe=a}}function hs(a,b){let c=b.key,d={prefixPath:c.getCollectionPath().popLast().toArray(),collectionGroup:c.collectionGroup,documentId:c.path.lastSegment(),readTime:ht(b.readTime),hasCommittedMutations:b.hasCommittedMutations};if(b.isFoundDocument()){var e,f;d.document=(e=a.fe,{name:g7(e,(f=b).key),fields:f.data.value.mapValue.fields,updateTime:g2(e,f.version.toTimestamp()),createTime:g2(e,f.createTime.toTimestamp())})}else if(b.isNoDocument())d.noDocument={path:c.path.toArray(),readTime:hu(b.version)};else{if(!b.isUnknownDocument())return dn();d.unknownDocument={path:c.path.toArray(),version:hu(b.version)}}return d}function ht(a){let b=a.toTimestamp();return[b.seconds,b.nanoseconds]}function hu(a){let b=a.toTimestamp();return{seconds:b.seconds,nanoseconds:b.nanoseconds}}function hv(a){let b=new dF(a.seconds,a.nanoseconds);return dG.fromTimestamp(b)}function hw(a,b){let c=(b.baseMutations||[]).map(b=>hg(a.fe,b));for(let d=0;d<b.mutations.length-1;++d){let e=b.mutations[d];if(d+1<b.mutations.length&& void 0!==b.mutations[d+1].transform){let f=b.mutations[d+1];e.updateTransforms=f.transform.fieldTransforms,b.mutations.splice(d+1,1),++d}}let g=b.mutations.map(b=>hg(a.fe,b)),h=dF.fromMillis(b.localWriteTimeMs);return new gC(b.batchId,h,c,g)}function hx(a){var b,c,d;let e=hv(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?hv(a.lastLimboFreeSnapshotVersion):dG.min(),g;return void 0!==a.query.documents?(1===(b=a.query).documents.length||dn(),g=fM(fG(ha(b.documents[0])))):g=fM(hj(d=a.query)),new hq(g,a.targetId,"TargetPurposeListen",a.lastListenSequenceNumber,e,f,eC.fromBase64String(a.resumeToken))}function hy(a,b){let c=hu(b.snapshotVersion),d=hu(b.lastLimboFreeSnapshotVersion),e;e=fA(b.target)?hh(a.fe,b.target):hi(a.fe,b.target);let f=b.resumeToken.toBase64();return{targetId:b.targetId,canonicalId:fy(b.target),readTime:c,resumeToken:f,lastListenSequenceNumber:b.sequenceNumber,lastLimboFreeSnapshotVersion:d,query:e}}function hz(a){let b=hj({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?fO(b,b.limit,"L"):b}function hA(a,b){return new gE(b.largestBatchId,hg(a.fe,b.overlayMutation))}function hB(a,b){let c=b.path.lastSegment();return[a,ed(b.path.popLast()),c]}function hC(a,b,c,d){return{indexId:a,uid:b.uid||"",sequenceNumber:c,readTime:hu(d.readTime),documentKey:ed(d.documentKey.path),largestBatchId:d.largestBatchId}}function hD(a){return eq(a,"bundles")}function hE(a){return eq(a,"namedQueries")}/**
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
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class hF{constructor(a,b){this.serializer=a,this.userId=b}static de(a,b){let c=b.uid||"";return new hF(a,c)}getOverlay(a,b){return hG(a).get(hB(this.userId,b)).next(a=>a?hA(this.serializer,a):null)}getOverlays(a,b){let c=f_();return dZ.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){let d=[];return c.forEach((c,e)=>{let f=new gE(b,e);d.push(this.we(a,f))}),dZ.waitFor(d)}removeOverlaysForBatchId(a,b,c){let d=new Set;b.forEach(a=>d.add(ed(a.getCollectionPath())));let e=[];return d.forEach(b=>{let d=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,c+1],!1,!0);e.push(hG(a).J("collectionPathOverlayIndex",d))}),dZ.waitFor(e)}getOverlaysForCollection(a,b,c){let d=f_(),e=ed(b),f=IDBKeyRange.bound([this.userId,e,c],[this.userId,e,Number.POSITIVE_INFINITY],!0);return hG(a).j("collectionPathOverlayIndex",f).next(a=>{for(let b of a){let c=hA(this.serializer,b);d.set(c.getKey(),c)}return d})}getOverlaysForCollectionGroup(a,b,c,d){let e=f_(),f,g=IDBKeyRange.bound([this.userId,b,c],[this.userId,b,Number.POSITIVE_INFINITY],!0);return hG(a).X({index:"collectionGroupOverlayIndex",range:g},(a,b,c)=>{let g=hA(this.serializer,b);e.size()<d||g.largestBatchId===f?(e.set(g.getKey(),g),f=g.largestBatchId):c.done()}).next(()=>e)}we(a,b){return hG(a).put(function(a,b,c){let[d,e,f]=hB(b,c.mutation.key);return{userId:b,collectionPath:e,documentId:f,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:hf(a.fe,c.mutation)}}(this.serializer,this.userId,b))}}function hG(a){return eq(a,"documentOverlays")}/**
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
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class hH{constructor(){}_e(a,b){this.me(a,b),b.ge()}me(a,b){if("nullValue"in a)this.ye(b,5);else if("booleanValue"in a)this.ye(b,10),b.pe(a.booleanValue?1:0);else if("integerValue"in a)this.ye(b,15),b.pe(eF(a.integerValue));else if("doubleValue"in a){let c=eF(a.doubleValue);isNaN(c)?this.ye(b,13):(this.ye(b,15),eb(c)?b.pe(0):b.pe(c))}else if("timestampValue"in a){let d=a.timestampValue;this.ye(b,20),"string"==typeof d?b.Ie(d):(b.Ie(`${d.seconds||""}`),b.pe(d.nanos||0))}else if("stringValue"in a)this.Te(a.stringValue,b),this.Ee(b);else if("bytesValue"in a)this.ye(b,30),b.Ae(eG(a.bytesValue)),this.Ee(b);else if("referenceValue"in a)this.ve(a.referenceValue,b);else if("geoPointValue"in a){let e=a.geoPointValue;this.ye(b,45),b.pe(e.latitude||0),b.pe(e.longitude||0)}else"mapValue"in a?e0(a)?this.ye(b,Number.MAX_SAFE_INTEGER):(this.Re(a.mapValue,b),this.Ee(b)):"arrayValue"in a?(this.Pe(a.arrayValue,b),this.Ee(b)):dn()}Te(a,b){this.ye(b,25),this.be(a,b)}be(a,b){b.Ie(a)}Re(a,b){let c=a.fields||{};for(let d of(this.ye(b,55),Object.keys(c)))this.Te(d,b),this.me(c[d],b)}Pe(a,b){let c=a.values||[];for(let d of(this.ye(b,50),c))this.me(d,b)}ve(a,b){this.ye(b,37),dL.fromName(a).path.forEach(a=>{this.ye(b,60),this.be(a,b)})}ye(a,b){a.pe(b)}Ee(a){a.pe(2)}}function hI(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function hJ(a){let b=64-function(a){let b=0;for(let c=0;c<8;++c){let d=hI(255&a[c]);if(b+=d,8!==d)break}return b}(a);return Math.ceil(b/8)}hH.Ve=new hH;class hK{constructor(){this.je=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.De(c.value),c=b.next();this.Ce()}xe(a){let b=a[Symbol.iterator](),c=b.next();for(;!c.done;)this.Ne(c.value),c=b.next();this.ke()}Me(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.De(c);else if(c<2048)this.De(960|c>>>6),this.De(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.De(480|c>>>12),this.De(128|63&c>>>6),this.De(128|63&c);else{let d=b.codePointAt(0);this.De(240|d>>>18),this.De(128|63&d>>>12),this.De(128|63&d>>>6),this.De(128|63&d)}}this.Ce()}$e(a){for(let b of a){let c=b.charCodeAt(0);if(c<128)this.Ne(c);else if(c<2048)this.Ne(960|c>>>6),this.Ne(128|63&c);else if(b<"\ud800"||"\udbff"<b)this.Ne(480|c>>>12),this.Ne(128|63&c>>>6),this.Ne(128|63&c);else{let d=b.codePointAt(0);this.Ne(240|d>>>18),this.Ne(128|63&d>>>12),this.Ne(128|63&d>>>6),this.Ne(128|63&d)}}this.ke()}Oe(a){let b=this.Fe(a),c=hJ(b);this.Be(1+c),this.buffer[this.position++]=255&c;for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=255&b[d]}Le(a){let b=this.Fe(a),c=hJ(b);this.Be(1+c),this.buffer[this.position++]=~(255&c);for(let d=b.length-c;d<b.length;++d)this.buffer[this.position++]=~(255&b[d])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(a){this.Be(a.length),this.buffer.set(a,this.position),this.position+=a.length}Qe(){return this.buffer.slice(0,this.position)}Fe(a){let b=function(a){let b=new DataView(new ArrayBuffer(8));return b.setFloat64(0,a,!1),new Uint8Array(b.buffer)}(a),c=0!=(128&b[0]);b[0]^=c?255:128;for(let d=1;d<b.length;++d)b[d]^=c?255:0;return b}De(a){let b=255&a;0===b?(this.Ue(0),this.Ue(255)):255===b?(this.Ue(255),this.Ue(0)):this.Ue(b)}Ne(a){let b=255&a;0===b?(this.Ge(0),this.Ge(255)):255===b?(this.Ge(255),this.Ge(0)):this.Ge(a)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(a){this.Be(1),this.buffer[this.position++]=a}Ge(a){this.Be(1),this.buffer[this.position++]=~a}Be(a){let b=a+this.position;if(b<=this.buffer.length)return;let c=2*this.buffer.length;c<b&&(c=b);let d=new Uint8Array(c);d.set(this.buffer),this.buffer=d}},this.ze=new class{constructor(a){this.je=a}Ae(a){this.je.Se(a)}Ie(a){this.je.Me(a)}pe(a){this.je.Oe(a)}ge(){this.je.qe()}}(this.je),this.We=new class{constructor(a){this.je=a}Ae(a){this.je.xe(a)}Ie(a){this.je.$e(a)}pe(a){this.je.Le(a)}ge(){this.je.Ke()}}(this.je)}seed(a){this.je.seed(a)}He(a){return 0===a?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class hL{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Je(){let a=this.directionalValue.length,b=0===a||255===this.directionalValue[a-1]?a+1:a,c=new Uint8Array(b);return c.set(this.directionalValue,0),b!==a?c.set([0],this.directionalValue.length):++c[c.length-1],new hL(this.indexId,this.documentKey,this.arrayValue,c)}}function hM(a,b){let c=a.indexId-b.indexId;return 0!==c?c:0!==(c=hN(a.arrayValue,b.arrayValue))?c:0!==(c=hN(a.directionalValue,b.directionalValue))?c:dL.comparator(a.documentKey,b.documentKey)}function hN(a,b){for(let c=0;c<a.length&&c<b.length;++c){let d=a[c]-b[c];if(0!==d)return d}return a.length-b.length}/**
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
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class hO{constructor(a){for(let b of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ye=a.orderBy,this.Xe=[],a.filters)){let c=b;c.isInequality()?this.Ze=c:this.Xe.push(c)}}tn(a){var b;(b=a.collectionGroup===this.collectionId)||dn();let c=dN(a);if(void 0!==c&&!this.en(c))return!1;let d=dO(a),e=new Set,f=0,g=0;for(;f<d.length&&this.en(d[f]);++f)e=e.add(d[f].fieldPath.canonicalString());if(f===d.length)return!0;if(void 0!==this.Ze){if(!e.has(this.Ze.field.canonicalString())){let h=d[f];if(!this.nn(this.Ze,h)||!this.sn(this.Ye[g++],h))return!1}++f}for(;f<d.length;++f){let i=d[f];if(g>=this.Ye.length||!this.sn(this.Ye[g++],i))return!1}return!0}en(a){for(let b of this.Xe)if(this.nn(b,a))return!0;return!1}nn(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}sn(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}/**
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
 */ /**
 * Provides utility functions that help with boolean logic transformations needed for handling
 * complex filters used in queries.
 */ /**
 * The `in` filter is only a syntactic sugar over a disjunction of equalities. For instance: `a in
 * [1,2,3]` is in fact `a==1 || a==2 || a==3`. This method expands any `in` filter in the given
 * input into a disjunction of equality filters and returns the expanded filter.
 */ function hP(a){var b,c,d;if(a instanceof fe||a instanceof ff||dn(),a instanceof fe){if(a instanceof ft){let e=(null===(c=null===(b=a.value.arrayValue)|| void 0===b?void 0:b.values)|| void 0===c?void 0:c.map(b=>fe.create(a.field,"==",b)))||[];return ff.create(e,"or")}return a}let f=a.filters.map(a=>hP(a));return ff.create(f,a.op)}function hQ(a){return a instanceof fe}function hR(a){return a instanceof ff&&fi(a)}function hS(a){return hQ(a)||hR(a)||function(a){if(a instanceof ff&&fh(a)){for(let b of a.getFilters())if(!hQ(b)&&!hR(b))return!1;return!0}return!1}(a)}function hT(a){var b,c,d,e;if(a instanceof fe||a instanceof ff||dn(),a instanceof fe)return a;if(1===a.filters.length)return hT(a.filters[0]);let f=a.filters.map(a=>hT(a)),g=ff.create(f,a.op);return g=hW(g),hS(g)?g:(g instanceof ff||dn(),fg(g)||dn(),g.filters.length>1||dn(),g.filters.reduce((a,b)=>hU(a,b)))}function hU(a,b){var c,d,e,f;let g;return a instanceof fe||a instanceof ff||dn(),b instanceof fe||b instanceof ff||dn(),g=a instanceof fe?b instanceof fe?(e=a,f=b,ff.create([e,f],"and")):hV(a,b):b instanceof fe?hV(b,a):function(a,b){var c;if(a.filters.length>0&&b.filters.length>0||dn(),fg(a)&&fg(b))return fm(a,b.getFilters());let d=fh(a)?a:b,e=fh(a)?b:a,f=d.filters.map(a=>hU(a,e));return ff.create(f,"or")}(a,b),hW(g)}function hV(a,b){if(fg(b))return fm(b,a.getFilters());{let c=b.filters.map(b=>hU(a,b));return ff.create(c,"or")}}function hW(a){var b;if(a instanceof fe||a instanceof ff||dn(),a instanceof fe)return a;let c=a.getFilters();if(1===c.length)return hW(c[0]);if(fj(a))return a;let d=c.map(a=>hW(a)),e=[];return d.forEach(b=>{b instanceof fe?e.push(b):b instanceof ff&&(b.op===a.op?e.push(...b.filters):e.push(b))}),1===e.length?e[0]:ff.create(e,a.op)}class hX{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new ex(dI.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b];return d&&d.has(c)}getEntries(a){return(this.index[a]||new ex(dI.comparator)).toArray()}}/**
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
 */ let hY=new Uint8Array(0);class hZ{constructor(a,b){this.user=a,this.databaseId=b,this.on=new hX,this.un=new fW(a=>fy(a),(a,b)=>fz(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(a,b){if(!this.on.has(b)){let c=b.lastSegment(),d=b.popLast();a.addOnCommittedListener(()=>{this.on.add(b)});let e={collectionId:c,parent:ed(d)};return h$(a).put(e)}return dZ.resolve()}getCollectionParents(a,b){let c=[],d=IDBKeyRange.bound([b,""],[dE(b),""],!1,!0);return h$(a).j(d).next(a=>{for(let d of a){if(d.collectionId!==b)break;c.push(eg(d.parent))}return c})}addFieldIndex(a,b){var c;let d=h0(a),e={indexId:(c=b).indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete e.indexId;let f=d.add(e);if(b.indexState){let g=h1(a);return f.next(a=>{g.put(hC(a,this.user,b.indexState.sequenceNumber,b.indexState.offset))})}return f.next()}deleteFieldIndex(a,b){let c=h0(a),d=h1(a),e=h_(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=h_(a),d=!0,e=new Map;return dZ.forEach(this.cn(b),b=>this.an(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=f4(),f=[];return dZ.forEach(e,(d,e)=>{var g;dj("IndexedDbIndexManager",`Using index ${(g=d,`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${fy(b)}`);let h=function(a,b){let c=dN(b);if(void 0===c)return null;for(let d of fB(a,c.fieldPath))switch(d.op){case"array-contains-any":return d.value.arrayValue.values||[];case"array-contains":return[d.value]}return null}(e,d),i=function(a,b){let c=new Map;for(let d of dO(b))for(let e of fB(a,d.fieldPath))switch(e.op){case"==":case"in":c.set(d.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return c.set(d.fieldPath.canonicalString(),e.value),Array.from(c.values())}return null}(e,d),j=function(a,b){let c=[],d=!0;for(let e of dO(b)){let f=0===e.kind?fC(a,e.fieldPath,a.startAt):fD(a,e.fieldPath,a.startAt);c.push(f.value),d&&(d=f.inclusive)}return new e8(c,d)}(e,d),k=function(a,b){let c=[],d=!0;for(let e of dO(b)){let f=0===e.kind?fD(a,e.fieldPath,a.endAt):fC(a,e.fieldPath,a.endAt);c.push(f.value),d&&(d=f.inclusive)}return new e8(c,d)}(e,d),l=this.hn(d,e,j),m=this.hn(d,e,k),n=this.ln(d,e,i),o=this.fn(d.indexId,h,l,j.inclusive,m,k.inclusive,n);return dZ.forEach(o,d=>c.H(d,b.limit).next(b=>{b.forEach(b=>{let c=dL.fromSegments(b.documentKey);a.has(c)||(a=a.add(c),f.push(c))})}))}).next(()=>f)}return dZ.resolve(null)})}cn(a){let b=this.un.get(a);return b||(b=0===a.filters.length?[a]:(function(a){var b;if(0===a.getFilters().length)return[];let c=hT(hP(a));return hS(c)||dn(),hQ(c)||hR(c)?[c]:c.getFilters()})(ff.create(a.filters,"and")).map(b=>fx(a.path,a.collectionGroup,a.orderBy,b.getFilters(),a.limit,a.startAt,a.endAt)),this.un.set(a,b)),b}fn(a,b,c,d,e,f,g){let h=(null!=b?b.length:1)*Math.max(c.length,e.length),i=h/(null!=b?b.length:1),j=[];for(let k=0;k<h;++k){let l=b?this.dn(b[k/i]):hY,m=this.wn(a,l,c[k%i],d),n=this._n(a,l,e[k%i],f),o=g.map(b=>this.wn(a,l,b,!0));j.push(...this.createRange(m,n,o))}return j}wn(a,b,c,d){let e=new hL(a,dL.empty(),b,c);return d?e:e.Je()}_n(a,b,c,d){let e=new hL(a,dL.empty(),b,c);return d?e.Je():e}an(a,b){let c=new hO(b),d=null!=b.collectionGroup?b.collectionGroup:b.path.lastSegment();return this.getFieldIndexes(a,d).next(a=>{let b=null;for(let d of a)c.tn(d)&&(!b||d.fields.length>b.fields.length)&&(b=d);return b})}getIndexType(a,b){let c=2,d=this.cn(b);return dZ.forEach(d,b=>this.an(a,b).next(a=>{a?0!==c&&a.fields.length<function(a){let b=new ex(dK.comparator),c=!1;for(let d of a.filters)for(let e of d.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?c=!0:b=b.add(e.field));for(let f of a.orderBy)f.field.isKeyField()||(b=b.add(f.field));return b.size+(c?1:0)}(b)&&(c=1):c=0})).next(()=>{var a;return null!==(a=b).limit&&d.length>1&&2===c?1:c})}mn(a,b){let c=new hK;for(let d of dO(a)){let e=b.data.field(d.fieldPath);if(null==e)return null;let f=c.He(d.kind);hH.Ve._e(e,f)}return c.Qe()}dn(a){let b=new hK;return hH.Ve._e(a,b.He(0)),b.Qe()}gn(a,b){let c=new hK;return hH.Ve._e(eV(this.databaseId,b),c.He(function(a){let b=dO(a);return 0===b.length?0:b[b.length-1].kind}(a))),c.Qe()}ln(a,b,c){if(null===c)return[];let d=[];d.push(new hK);let e=0;for(let f of dO(a)){let g=c[e++];for(let h of d)if(this.yn(b,f.fieldPath)&&eX(g))d=this.pn(d,f,g);else{let i=h.He(f.kind);hH.Ve._e(g,i)}}return this.In(d)}hn(a,b,c){return this.ln(a,b,c.position)}In(a){let b=[];for(let c=0;c<a.length;++c)b[c]=a[c].Qe();return b}pn(a,b,c){let d=[...a],e=[];for(let f of c.arrayValue.values||[])for(let g of d){let h=new hK;h.seed(g.Qe()),hH.Ve._e(f,h.He(b.kind)),e.push(h)}return e}yn(a,b){return!!a.filters.find(a=>a instanceof fe&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(a,b){let c=h0(a),d=h1(a);return(b?c.j("collectionGroupIndex",IDBKeyRange.bound(b,b)):c.j()).next(a=>{let b=[];return dZ.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(a,b){let c=b?new dR(b.sequenceNumber,new dU(hv(b.readTime),new dL(eg(b.documentKey)),b.largestBatchId)):dR.empty(),d=a.fields.map(([a,b])=>new dP(dK.fromServerFormat(a),b));return new dM(a.indexId,a.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:dC(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=h0(a),e=h1(a);return this.Tn(a).next(a=>d.j("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>dZ.forEach(b,b=>e.put(hC(b.indexId,this.user,a,c)))))}updateIndexEntries(a,b){let c=new Map;return dZ.forEach(b,(b,d)=>{let e=c.get(b.collectionGroup);return(e?dZ.resolve(e):this.getFieldIndexes(a,b.collectionGroup)).next(e=>(c.set(b.collectionGroup,e),dZ.forEach(e,c=>this.En(a,b,c).next(b=>{let e=this.An(d,c);return b.isEqual(e)?dZ.resolve():this.vn(a,d,c,b,e)}))))})}Rn(a,b,c,d){return h_(a).put({indexId:d.indexId,uid:this.uid,arrayValue:d.arrayValue,directionalValue:d.directionalValue,orderedDocumentKey:this.gn(c,b.key),documentKey:b.key.path.toArray()})}Pn(a,b,c,d){return h_(a).delete([d.indexId,this.uid,d.arrayValue,d.directionalValue,this.gn(c,b.key),b.key.path.toArray()])}En(a,b,c){let d=h_(a),e=new ex(hM);return d.X({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.gn(c,b)])},(a,d)=>{e=e.add(new hL(c.indexId,b,d.arrayValue,d.directionalValue))}).next(()=>e)}An(a,b){let c=new ex(hM),d=this.mn(b,a);if(null==d)return c;let e=dN(b);if(null!=e){let f=a.data.field(e.fieldPath);if(eX(f))for(let g of f.arrayValue.values||[])c=c.add(new hL(b.indexId,a.key,this.dn(g),d))}else c=c.add(new hL(b.indexId,a.key,hY,d));return c}vn(a,b,c,d,e){dj("IndexedDbIndexManager","Updating index entries for document '%s'",b.key);let f=[];return function(a,b,c,d,e){let f=a.getIterator(),g=b.getIterator(),h=ez(f),i=ez(g);for(;h||i;){let j=!1,k=!1;if(h&&i){let l=c(h,i);l<0?k=!0:l>0&&(j=!0)}else null!=h?k=!0:j=!0;j?(d(i),i=ez(g)):k?(e(h),h=ez(f)):(h=ez(f),i=ez(g))}}(d,e,hM,d=>{f.push(this.Rn(a,b,c,d))},d=>{f.push(this.Pn(a,b,c,d))}),dZ.waitFor(f)}Tn(a){let b=1;return h1(a).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(a,c,d)=>{d.done(),b=c.sequenceNumber+1}).next(()=>b)}createRange(a,b,c){c=c.sort((a,b)=>hM(a,b)).filter((a,b,c)=>!b||0!==hM(a,c[b-1]));let d=[];for(let e of(d.push(a),c)){let f=hM(e,a),g=hM(e,b);if(0===f)d[0]=a.Je();else if(f>0&&g<0)d.push(e),d.push(e.Je());else if(g>0)break}d.push(b);let h=[];for(let i=0;i<d.length;i+=2){if(this.bn(d[i],d[i+1]))return[];let j=[d[i].indexId,this.uid,d[i].arrayValue,d[i].directionalValue,hY,[]],k=[d[i+1].indexId,this.uid,d[i+1].arrayValue,d[i+1].directionalValue,hY,[]];h.push(IDBKeyRange.bound(j,k))}return h}bn(a,b){return hM(a,b)>0}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(h2)}getMinOffset(a,b){return dZ.mapArray(this.cn(b),b=>this.an(a,b).next(a=>a||dn())).next(h2)}}function h$(a){return eq(a,"collectionParents")}function h_(a){return eq(a,"indexEntries")}function h0(a){return eq(a,"indexConfiguration")}function h1(a){return eq(a,"indexState")}function h2(a){var b;(b=0!==a.length)||dn();let c=a[0].indexState.offset,d=c.largestBatchId;for(let e=1;e<a.length;e++){let f=a[e].indexState.offset;0>dV(f,c)&&(c=f),d<f.largestBatchId&&(d=f.largestBatchId)}return new dU(c.readTime,c.documentKey,d)}/**
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
 */ let h3={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class h4{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new h4(a,h4.DEFAULT_COLLECTION_PERCENTILE,h4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function h5(a,b,c){let d=a.store("mutations"),e=a.store("documentMutations"),f=[],g=IDBKeyRange.only(c.batchId),h=0,i=d.X({range:g},(a,b,c)=>(h++,c.delete()));f.push(i.next(()=>{var a;(a=1===h)||dn()}));let j=[];for(let k of c.mutations){let l=ei(b,k.key.path,c.batchId);f.push(e.delete(l)),j.push(k.key)}return dZ.waitFor(f).next(()=>j)}function h6(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw dn();b=a.noDocument}return JSON.stringify(b).length}/**
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
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ h4.DEFAULT_COLLECTION_PERCENTILE=10,h4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,h4.DEFAULT=new h4(41943040,h4.DEFAULT_COLLECTION_PERCENTILE,h4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),h4.DISABLED=new h4(-1,0,0);class h7{constructor(a,b,c,d){this.userId=a,this.serializer=b,this.indexManager=c,this.referenceDelegate=d,this.Vn={}}static de(a,b,c,d){var e;(e=""!==a.uid)||dn();let f=a.isAuthenticated()?a.uid:"";return new h7(f,b,c,d)}checkEmpty(a){let b=!0,c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return h9(a).X({index:"userMutationsIndex",range:c},(a,c,d)=>{b=!1,d.done()}).next(()=>b)}addMutationBatch(a,b,c,d){let e=ia(a),f=h9(a);return f.add({}).next(g=>{var h;(h="number"==typeof g)||dn();let i=new gC(g,b,c,d),j=function(a,b,c){let d=c.baseMutations.map(b=>hf(a.fe,b)),e=c.mutations.map(b=>hf(a.fe,b));return{userId:b,batchId:c.batchId,localWriteTimeMs:c.localWriteTime.toMillis(),baseMutations:d,mutations:e}}(this.serializer,this.userId,i),k=[],l=new ex((a,b)=>dC(a.canonicalString(),b.canonicalString()));for(let m of d){let n=ei(this.userId,m.key.path,g);l=l.add(m.key.path.popLast()),k.push(f.put(j)),k.push(e.put(n,ej))}return l.forEach(b=>{k.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.Vn[g]=i.keys()}),dZ.waitFor(k).next(()=>i)})}lookupMutationBatch(a,b){return h9(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||dn(),hw(this.serializer,a)):null})}Sn(a,b){return this.Vn[b]?dZ.resolve(this.Vn[b]):this.lookupMutationBatch(a,b).next(a=>{if(a){let c=a.keys();return this.Vn[b]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return h9(a).X({index:"userMutationsIndex",range:d},(a,b,d)=>{var f;b.userId===this.userId&&(b.batchId>=c||dn(),e=hw(this.serializer,b)),d.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return h9(a).X({index:"userMutationsIndex",range:b,reverse:!0},(a,b,d)=>{c=b.batchId,d.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return h9(a).j("userMutationsIndex",b).next(a=>a.map(a=>hw(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=eh(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return ia(a).X({range:d},(c,d,f)=>{let[g,h,i]=c,j=eg(h);if(g===this.userId&&b.path.isEqual(j))return h9(a).get(i).next(a=>{var b;if(!a)throw dn();a.userId===this.userId||dn(),e.push(hw(this.serializer,a))});f.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new ex(dC),d=[];return b.forEach(b=>{let e=eh(this.userId,b.path),f=IDBKeyRange.lowerBound(e),g=ia(a).X({range:f},(a,d,e)=>{let[f,g,h]=a,i=eg(g);f===this.userId&&b.path.isEqual(i)?c=c.add(h):e.done()});d.push(g)}),dZ.waitFor(d).next(()=>this.Dn(a,c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=eh(this.userId,c),f=IDBKeyRange.lowerBound(e),g=new ex(dC);return ia(a).X({range:f},(a,b,e)=>{let[f,h,i]=a,j=eg(h);f===this.userId&&c.isPrefixOf(j)?j.length===d&&(g=g.add(i)):e.done()}).next(()=>this.Dn(a,g))}Dn(a,b){let c=[],d=[];return b.forEach(b=>{d.push(h9(a).get(b).next(a=>{var b;if(null===a)throw dn();a.userId===this.userId||dn(),c.push(hw(this.serializer,a))}))}),dZ.waitFor(d).next(()=>c)}removeMutationBatch(a,b){return h5(a.ht,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.Cn(b.batchId)}),dZ.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}Cn(a){delete this.Vn[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return dZ.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return ia(a).X({range:c},(a,b,c)=>{if(a[0]===this.userId){let e=eg(a[1]);d.push(e)}else c.done()}).next(()=>{var a;(a=0===d.length)||dn()})})}containsKey(a,b){return h8(a,this.userId,b)}xn(a){return ib(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function h8(a,b,c){let d=eh(b,c.path),e=d[1],f=IDBKeyRange.lowerBound(d),g=!1;return ia(a).X({range:f,Y:!0},(a,c,d)=>{let[f,h,i]=a;f===b&&h===e&&(g=!0),d.done()}).next(()=>g)}function h9(a){return eq(a,"mutations")}function ia(a){return eq(a,"documentMutations")}function ib(a){return eq(a,"mutationQueues")}/**
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
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class ic{constructor(a){this.Nn=a}next(){return this.Nn+=2,this.Nn}static kn(){return new ic(0)}static Mn(){return new ic(-1)}}function id(a){return eq(a,"targets")}function ie(a){return eq(a,"targetGlobal")}function ig(a){return eq(a,"targetDocuments")}/**
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
 */ function ih([a,b],[c,d]){let e=dC(a,c);return 0===e?dC(b,d):e}class ii{constructor(a){this.Ln=a,this.buffer=new ex(ih),this.qn=0}Un(){return++this.qn}Kn(a){let b=[a,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(b);else{let c=this.buffer.last();0>ih(b,c)&&(this.buffer=this.buffer.delete(c).add(b))}}get maxValue(){return this.buffer.last()[0]}}class ij{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(a){dj("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){d2(a)?dj("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await dY(a)}await this.Qn(3e5)})}}class ik{constructor(a,b){this.jn=a,this.params=b}calculateTargetCount(a,b){return this.jn.zn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(a,b){if(0===b)return dZ.resolve(d9.ct);let c=new ii(b);return this.jn.forEachTarget(a,a=>c.Kn(a.sequenceNumber)).next(()=>this.jn.Wn(a,a=>c.Kn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.jn.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.jn.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(dj("LruGarbageCollector","Garbage collection skipped; disabled"),dZ.resolve(h3)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(dj("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),h3):this.Hn(a,b))}getCacheSize(a){return this.jn.getCacheSize(a)}Hn(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(dj("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),di()<=LogLevel.DEBUG&&dj("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),dZ.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}function il(a,b){return new ik(a,b)}function im(a,b){var c,d;return ig(a).put((c=b,d=a.currentSequenceNumber,{targetId:0,path:ed(c.path),sequenceNumber:d}))}/**
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
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class io{constructor(){this.changes=new fW(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,e7.newInvalidDocument(a).setReadTime(b))}getEntry(a,b){this.assertNotApplied();let c=this.changes.get(b);return void 0!==c?dZ.resolve(c):this.getFromCache(a,b)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
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
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class ip{constructor(a){this.serializer=a}setIndexManager(a){this.indexManager=a}addEntry(a,b,c){return it(a).put(c)}removeEntry(a,b,c){return it(a).delete(function(a,b){let c=a.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],ht(b),c[c.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.Zn(a,c)))}getEntry(a,b){let c=e7.newInvalidDocument(b);return it(a).X({index:"documentKeyIndex",range:IDBKeyRange.only(iu(b))},(a,d)=>{c=this.ts(b,d)}).next(()=>c)}es(a,b){let c={size:0,document:e7.newInvalidDocument(b)};return it(a).X({index:"documentKeyIndex",range:IDBKeyRange.only(iu(b))},(a,d)=>{c={document:this.ts(b,d),size:h6(d)}}).next(()=>c)}getEntries(a,b){let c=fX;return this.ns(a,b,(a,b)=>{let d=this.ts(a,b);c=c.insert(a,d)}).next(()=>c)}ss(a,b){let c=fX,d=new eu(dL.comparator);return this.ns(a,b,(a,b)=>{let e=this.ts(a,b);c=c.insert(a,e),d=d.insert(a,h6(b))}).next(()=>({documents:c,rs:d}))}ns(a,b,c){if(b.isEmpty())return dZ.resolve();let d=new ex(iw);b.forEach(a=>d=d.add(a));let e=IDBKeyRange.bound(iu(d.first()),iu(d.last())),f=d.getIterator(),g=f.getNext();return it(a).X({index:"documentKeyIndex",range:e},(a,b,d)=>{let e=dL.fromSegments([...b.prefixPath,b.collectionGroup,b.documentId]);for(;g&&0>iw(g,e);)c(g,null),g=f.getNext();g&&g.isEqual(e)&&(c(g,b),g=f.hasNext()?f.getNext():null),g?d.G(iu(g)):d.done()}).next(()=>{for(;g;)c(g,null),g=f.hasNext()?f.getNext():null})}getDocumentsMatchingQuery(a,b,c,d){let e=b.path,f=[e.popLast().toArray(),e.lastSegment(),ht(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],g=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return it(a).j(IDBKeyRange.bound(f,g,!0)).next(a=>{let c=fX;for(let e of a){let f=this.ts(dL.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);f.isFoundDocument()&&(fS(b,f)||d.has(f.key))&&(c=c.insert(f.key,f))}return c})}getAllFromCollectionGroup(a,b,c,d){let e=fX,f=iv(b,c),g=iv(b,dU.max());return it(a).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(f,g,!0)},(a,b,c)=>{let f=this.ts(dL.fromSegments(b.prefixPath.concat(b.collectionGroup,b.documentId)),b);(e=e.insert(f.key,f)).size===d&&c.done()}).next(()=>e)}newChangeBuffer(a){return new ir(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return is(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&dn(),a})}Zn(a,b){return is(a).put("remoteDocumentGlobalKey",b)}ts(a,b){if(b){let c=function(a,b){let c;if(b.document)c=he(a.fe,b.document,!!b.hasCommittedMutations);else if(b.noDocument){let d=dL.fromSegments(b.noDocument.path),e=hv(b.noDocument.readTime);c=e7.newNoDocument(d,e),b.hasCommittedMutations&&c.setHasCommittedMutations()}else{if(!b.unknownDocument)return dn();{let f=dL.fromSegments(b.unknownDocument.path),g=hv(b.unknownDocument.version);c=e7.newUnknownDocument(f,g)}}return b.readTime&&c.setReadTime(function(a){let b=new dF(a[0],a[1]);return dG.fromTimestamp(b)}(b.readTime)),c}(this.serializer,b);if(!(c.isNoDocument()&&c.version.isEqual(dG.min())))return c}return e7.newInvalidDocument(a)}}function iq(a){return new ip(a)}class ir extends null{constructor(a,b){super(),this.os=a,this.trackRemovals=b,this.us=new fW(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(a){let b=[],c=0,d=new ex((a,b)=>dC(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.us.get(e);if(b.push(this.os.removeEntry(a,e,g.readTime)),f.isValidDocument()){let h=hs(this.os.serializer,f);d=d.add(e.path.popLast());let i=h6(h);c+=i-g.size,b.push(this.os.addEntry(a,e,h))}else if(c-=g.size,this.trackRemovals){let j=hs(this.os.serializer,f.convertToNoDocument(dG.min()));b.push(this.os.addEntry(a,e,j))}}),d.forEach(c=>{b.push(this.os.indexManager.addToCollectionParentIndex(a,c))}),b.push(this.os.updateMetadata(a,c)),dZ.waitFor(b)}getFromCache(a,b){return this.os.es(a,b).next(a=>(this.us.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.os.ss(a,b).next(({documents:a,rs:b})=>(b.forEach((b,c)=>{this.us.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function is(a){return eq(a,"remoteDocumentGlobal")}function it(a){return eq(a,"remoteDocumentsV14")}function iu(a){let b=a.path.toArray();return[b.slice(0,b.length-2),b[b.length-2],b[b.length-1]]}function iv(a,b){let c=b.documentKey.path.toArray();return[a,ht(b.readTime),c.slice(0,c.length-2),c.length>0?c[c.length-1]:""]}function iw(a,b){let c=a.path.toArray(),d=b.path.toArray(),e=0;for(let f=0;f<c.length-2&&f<d.length-2;++f)if(e=dC(c[f],d[f]))return e;return(e=dC(c.length,d.length))||(e=dC(c[c.length-2],d[d.length-2]))||dC(c[c.length-1],d[d.length-1])}/**
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
 */ /**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 */ /**
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
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class ix{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
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
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class iy{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.remoteDocumentCache.getEntry(a,b))).next(a=>(null!==c&&gs(c.mutation,a,eA.empty(),dF.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,f4()).next(()=>b))}getLocalViewOfDocuments(a,b,c=f4()){let d=f_();return this.populateOverlays(a,d,b).next(()=>this.computeViews(a,b,d,c).next(a=>{let b=fZ();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=f_();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,f4()))}populateOverlays(a,b,c){let d=[];return c.forEach(a=>{b.has(a)||d.push(a)}),this.documentOverlayCache.getOverlays(a,d).next(a=>{a.forEach((a,c)=>{b.set(a,c)})})}computeViews(a,b,c,d){let e=fX,f=f1(),g=f1();return b.forEach((a,b)=>{let g=c.get(b.key);d.has(b.key)&&(void 0===g||g.mutation instanceof gw)?e=e.insert(b.key,b):void 0!==g?(f.set(b.key,g.mutation.getFieldMask()),gs(g.mutation,b,g.mutation.getFieldMask(),dF.now())):f.set(b.key,eA.empty())}),this.recalculateAndSaveOverlays(a,e).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((a,b)=>{var c;return g.set(a,new ix(b,null!==(c=f.get(a))&& void 0!==c?c:null))}),g))}recalculateAndSaveOverlays(a,b){let c=f1(),d=new eu((a,b)=>a-b),e=f4();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let f=b.get(a);if(null===f)return;let g=c.get(a)||eA.empty();g=e.applyToLocalView(f,g),c.set(a,g);let h=(d.get(e.batchId)||f4()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=f0();j.forEach(a=>{if(!e.has(a)){let d=gq(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return dZ.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(a,b,c){var d;return(d=b,dL.isDocumentKey(d.path)&&null===d.collectionGroup&&0===d.filters.length)?this.getDocumentsMatchingDocumentQuery(a,b.path):fK(b)?this.getDocumentsMatchingCollectionGroupQuery(a,b,c):this.getDocumentsMatchingCollectionQuery(a,b,c)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):dZ.resolve(f_()),g=-1,h=e;return f.next(b=>dZ.forEach(b,(b,c)=>(g<c.largestBatchId&&(g=c.largestBatchId),e.get(b)?dZ.resolve():this.remoteDocumentCache.getEntry(a,b).next(a=>{h=h.insert(b,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,f4())).next(a=>({batchId:g,changes:f$(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new dL(b)).next(a=>{let b=fZ();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,c){let d=b.collectionGroup,e=fZ();return this.indexManager.getCollectionParents(a,d).next(f=>dZ.forEach(f,f=>{var g,h;let i=(g=b,h=f.child(d),new fE(h,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,c).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId).next(e=>(d=e,this.remoteDocumentCache.getDocumentsMatchingQuery(a,b,c,d))).next(a=>{d.forEach((b,c)=>{let d=c.getKey();null===a.get(d)&&(a=a.insert(d,e7.newInvalidDocument(d)))});let c=fZ();return a.forEach((a,e)=>{let f=d.get(a);void 0!==f&&gs(f.mutation,e,eA.empty(),dF.now()),fS(b,e)&&(c=c.insert(a,e))}),c})}}/**
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
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class iz{constructor(){this.overlays=new eu(dL.comparator),this.ls=new Map}getOverlay(a,b){return dZ.resolve(this.overlays.get(b))}getOverlays(a,b){let c=f_();return dZ.forEach(b,b=>this.getOverlay(a,b).next(a=>{null!==a&&c.set(b,a)})).next(()=>c)}saveOverlays(a,b,c){return c.forEach((c,d)=>{this.we(a,b,d)}),dZ.resolve()}removeOverlaysForBatchId(a,b,c){let d=this.ls.get(c);return void 0!==d&&(d.forEach(a=>this.overlays=this.overlays.remove(a)),this.ls.delete(c)),dZ.resolve()}getOverlaysForCollection(a,b,c){let d=f_(),e=b.length+1,f=new dL(b.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){let h=g.getNext().value,i=h.getKey();if(!b.isPrefixOf(i.path))break;i.path.length===e&&h.largestBatchId>c&&d.set(h.getKey(),h)}return dZ.resolve(d)}getOverlaysForCollectionGroup(a,b,c,d){let e=new eu((a,b)=>a-b),f=this.overlays.getIterator();for(;f.hasNext();){let g=f.getNext().value;if(g.getKey().getCollectionGroup()===b&&g.largestBatchId>c){let h=e.get(g.largestBatchId);null===h&&(h=f_(),e=e.insert(g.largestBatchId,h)),h.set(g.getKey(),g)}}let i=f_(),j=e.getIterator();for(;j.hasNext()&&(j.getNext().value.forEach((a,b)=>i.set(a,b)),!(i.size()>=d)););return dZ.resolve(i)}we(a,b,c){let d=this.overlays.get(c.key);if(null!==d){let e=this.ls.get(d.largestBatchId).delete(c.key);this.ls.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new gE(b,c));let f=this.ls.get(b);void 0===f&&(f=f4(),this.ls.set(b,f)),this.ls.set(b,f.add(c.key))}}/**
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
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class iA{constructor(){this.fs=new ex(iB.ds),this.ws=new ex(iB._s)}isEmpty(){return this.fs.isEmpty()}addReference(a,b){let c=new iB(a,b);this.fs=this.fs.add(c),this.ws=this.ws.add(c)}gs(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.ys(new iB(a,b))}ps(a,b){a.forEach(a=>this.removeReference(a,b))}Is(a){let b=new dL(new dI([])),c=new iB(b,a),d=new iB(b,a+1),e=[];return this.ws.forEachInRange([c,d],a=>{this.ys(a),e.push(a.key)}),e}Ts(){this.fs.forEach(a=>this.ys(a))}ys(a){this.fs=this.fs.delete(a),this.ws=this.ws.delete(a)}Es(a){let b=new dL(new dI([])),c=new iB(b,a),d=new iB(b,a+1),e=f4();return this.ws.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let b=new iB(a,0),c=this.fs.firstAfterOrEqual(b);return null!==c&&a.isEqual(c.key)}}class iB{constructor(a,b){this.key=a,this.As=b}static ds(a,b){return dL.comparator(a.key,b.key)||dC(a.As,b.As)}static _s(a,b){return dC(a.As,b.As)||dL.comparator(a.key,b.key)}}/**
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
 */ class iC{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.vs=1,this.Rs=new ex(iB.ds)}checkEmpty(a){return dZ.resolve(0===this.mutationQueue.length)}addMutationBatch(a,b,c,d){let e=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let f=new gC(e,b,c,d);for(let g of(this.mutationQueue.push(f),d))this.Rs=this.Rs.add(new iB(g.key,e)),this.indexManager.addToCollectionParentIndex(a,g.key.path.popLast());return dZ.resolve(f)}lookupMutationBatch(a,b){return dZ.resolve(this.Ps(b))}getNextMutationBatchAfterBatchId(a,b){let c=this.bs(b+1),d=c<0?0:c;return dZ.resolve(this.mutationQueue.length>d?this.mutationQueue[d]:null)}getHighestUnacknowledgedBatchId(){return dZ.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(a){return dZ.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(a,b){let c=new iB(b,0),d=new iB(b,Number.POSITIVE_INFINITY),e=[];return this.Rs.forEachInRange([c,d],a=>{let b=this.Ps(a.As);e.push(b)}),dZ.resolve(e)}getAllMutationBatchesAffectingDocumentKeys(a,b){let c=new ex(dC);return b.forEach(a=>{let b=new iB(a,0),d=new iB(a,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([b,d],a=>{c=c.add(a.As)})}),dZ.resolve(this.Vs(c))}getAllMutationBatchesAffectingQuery(a,b){let c=b.path,d=c.length+1,e=c;dL.isDocumentKey(e)||(e=e.child(""));let f=new iB(new dL(e),0),g=new ex(dC);return this.Rs.forEachWhile(a=>{let b=a.key.path;return!!c.isPrefixOf(b)&&(b.length===d&&(g=g.add(a.As)),!0)},f),dZ.resolve(this.Vs(g))}Vs(a){let b=[];return a.forEach(a=>{let c=this.Ps(a);null!==c&&b.push(c)}),b}removeMutationBatch(a,b){var c;0===this.Ss(b.batchId,"removed")||dn(),this.mutationQueue.shift();let d=this.Rs;return dZ.forEach(b.mutations,c=>{let e=new iB(c.key,b.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(a,c.key)}).next(()=>{this.Rs=d})}Cn(a){}containsKey(a,b){let c=new iB(b,0),d=this.Rs.firstAfterOrEqual(c);return dZ.resolve(b.isEqual(d&&d.key))}performConsistencyCheck(a){return this.mutationQueue.length,dZ.resolve()}Ss(a,b){return this.bs(a)}bs(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}Ps(a){let b=this.bs(a);return b<0||b>=this.mutationQueue.length?null:this.mutationQueue[b]}}/**
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
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class iD{constructor(a){this.Ds=a,this.docs=new eu(dL.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(a,b){let c=b.key,d=this.docs.get(c),e=d?d.size:0,f=this.Ds(b);return this.docs=this.docs.insert(c,{document:b.mutableCopy(),size:f}),this.size+=f-e,this.indexManager.addToCollectionParentIndex(a,c.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(a,b){let c=this.docs.get(b);return dZ.resolve(c?c.document.mutableCopy():e7.newInvalidDocument(b))}getEntries(a,b){let c=fX;return b.forEach(a=>{let b=this.docs.get(a);c=c.insert(a,b?b.document.mutableCopy():e7.newInvalidDocument(a))}),dZ.resolve(c)}getDocumentsMatchingQuery(a,b,c,d){let e=fX,f=b.path,g=new dL(f.child("")),h=this.docs.getIteratorFrom(g);for(;h.hasNext();){let{key:i,value:{document:j}}=h.getNext();if(!f.isPrefixOf(i.path))break;i.path.length>f.length+1||0>=dV(dT(j),c)||(d.has(j.key)||fS(b,j))&&(e=e.insert(j.key,j.mutableCopy()))}return dZ.resolve(e)}getAllFromCollectionGroup(a,b,c,d){dn()}Cs(a,b){return dZ.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new iE(this)}getSize(a){return dZ.resolve(this.size)}}class iE extends io{constructor(a){super(),this.os=a}applyChanges(a){let b=[];return this.changes.forEach((c,d)=>{d.isValidDocument()?b.push(this.os.addEntry(a,d)):this.os.removeEntry(c)}),dZ.waitFor(b)}getFromCache(a,b){return this.os.getEntry(a,b)}getAllFromCache(a,b){return this.os.getEntries(a,b)}}/**
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
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class iF{constructor(a,b){this.$s={},this.overlays={},this.Os=new d9(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=a(this),this.Bs=new /**
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
 */ class{constructor(a){this.persistence=a,this.xs=new fW(a=>fy(a),fz),this.lastRemoteSnapshotVersion=dG.min(),this.highestTargetId=0,this.Ns=0,this.ks=new iA,this.targetCount=0,this.Ms=ic.kn()}forEachTarget(a,b){return this.xs.forEach((a,c)=>b(c)),dZ.resolve()}getLastRemoteSnapshotVersion(a){return dZ.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return dZ.resolve(this.Ns)}allocateTargetId(a){return this.highestTargetId=this.Ms.next(),dZ.resolve(this.highestTargetId)}setTargetsMetadata(a,b,c){return c&&(this.lastRemoteSnapshotVersion=c),b>this.Ns&&(this.Ns=b),dZ.resolve()}Fn(a){this.xs.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.Ms=new ic(b),this.highestTargetId=b),a.sequenceNumber>this.Ns&&(this.Ns=a.sequenceNumber)}addTargetData(a,b){return this.Fn(b),this.targetCount+=1,dZ.resolve()}updateTargetData(a,b){return this.Fn(b),dZ.resolve()}removeTargetData(a,b){return this.xs.delete(b.target),this.ks.Is(b.targetId),this.targetCount-=1,dZ.resolve()}removeTargets(a,b,c){let d=0,e=[];return this.xs.forEach((f,g)=>{g.sequenceNumber<=b&&null===c.get(g.targetId)&&(this.xs.delete(f),e.push(this.removeMatchingKeysForTargetId(a,g.targetId)),d++)}),dZ.waitFor(e).next(()=>d)}getTargetCount(a){return dZ.resolve(this.targetCount)}getTargetData(a,b){let c=this.xs.get(b)||null;return dZ.resolve(c)}addMatchingKeys(a,b,c){return this.ks.gs(b,c),dZ.resolve()}removeMatchingKeys(a,b,c){this.ks.ps(b,c);let d=this.persistence.referenceDelegate,e=[];return d&&b.forEach(b=>{e.push(d.markPotentiallyOrphaned(a,b))}),dZ.waitFor(e)}removeMatchingKeysForTargetId(a,b){return this.ks.Is(b),dZ.resolve()}getMatchingKeysForTargetId(a,b){let c=this.ks.Es(b);return dZ.resolve(c)}containsKey(a,b){return dZ.resolve(this.ks.containsKey(b))}}(this),this.indexManager=new /**
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
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.rn=new hX}addToCollectionParentIndex(a,b){return this.rn.add(b),dZ.resolve()}getCollectionParents(a,b){return dZ.resolve(this.rn.getEntries(b))}addFieldIndex(a,b){return dZ.resolve()}deleteFieldIndex(a,b){return dZ.resolve()}getDocumentsMatchingTarget(a,b){return dZ.resolve(null)}getIndexType(a,b){return dZ.resolve(0)}getFieldIndexes(a,b){return dZ.resolve([])}getNextCollectionGroupToUpdate(a){return dZ.resolve(null)}getMinOffset(a,b){return dZ.resolve(dU.min())}getMinOffsetFromCollectionGroup(a,b){return dZ.resolve(dU.min())}updateCollectionGroup(a,b,c){return dZ.resolve()}updateIndexEntries(a,b){return dZ.resolve()}},this.remoteDocumentCache=function(a){return new iD(a)}(a=>this.referenceDelegate.Ls(a)),this.serializer=new hr(b),this.qs=new /**
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
 */ class{constructor(a){this.serializer=a,this.cs=new Map,this.hs=new Map}getBundleMetadata(a,b){return dZ.resolve(this.cs.get(b))}saveBundleMetadata(a,b){var c;return this.cs.set(b.id,{id:(c=b).id,version:c.version,createTime:g4(c.createTime)}),dZ.resolve()}getNamedQuery(a,b){return dZ.resolve(this.hs.get(b))}saveNamedQuery(a,b){var c;return this.hs.set(b.name,{name:(c=b).name,query:hz(c.bundledQuery),readTime:g4(c.readTime)}),dZ.resolve()}}(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(a){let b=this.overlays[a.toKey()];return b||(b=new iz,this.overlays[a.toKey()]=b),b}getMutationQueue(a,b){let c=this.$s[a.toKey()];return c||(c=new iC(b,this.referenceDelegate),this.$s[a.toKey()]=c),c}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(a,b,c){dj("MemoryPersistence","Starting transaction:",a);let d=new iG(this.Os.next());return this.referenceDelegate.Us(),c(d).next(a=>this.referenceDelegate.Ks(d).next(()=>a)).toPromise().then(a=>(d.raiseOnCommittedEvent(),a))}Gs(a,b){return dZ.or(Object.values(this.$s).map(c=>()=>c.containsKey(a,b)))}}class iG extends dX{constructor(a){super(),this.currentSequenceNumber=a}}class iH{constructor(a){this.persistence=a,this.Qs=new iA,this.js=null}static zs(a){return new iH(a)}get Ws(){if(this.js)return this.js;throw dn()}addReference(a,b,c){return this.Qs.addReference(c,b),this.Ws.delete(c.toString()),dZ.resolve()}removeReference(a,b,c){return this.Qs.removeReference(c,b),this.Ws.add(c.toString()),dZ.resolve()}markPotentiallyOrphaned(a,b){return this.Ws.add(b.toString()),dZ.resolve()}removeTarget(a,b){this.Qs.Is(b.targetId).forEach(a=>this.Ws.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(a,b.targetId).next(a=>{a.forEach(a=>this.Ws.add(a.toString()))}).next(()=>c.removeTargetData(a,b))}Us(){this.js=new Set}Ks(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dZ.forEach(this.Ws,c=>{let d=dL.fromPath(c);return this.Hs(a,d).next(a=>{a||b.removeEntry(d,dG.min())})}).next(()=>(this.js=null,b.apply(a)))}updateLimboDocument(a,b){return this.Hs(a,b).next(a=>{a?this.Ws.delete(b.toString()):this.Ws.add(b.toString())})}Ls(a){return 0}Hs(a,b){return dZ.or([()=>dZ.resolve(this.Qs.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Gs(a,b)])}}class iI{constructor(a,b){this.persistence=a,this.Js=new fW(a=>ed(a.path),(a,b)=>a.isEqual(b)),this.garbageCollector=il(this,b)}static zs(a,b){return new iI(a,b)}Us(){}Ks(a){return dZ.resolve()}forEachTarget(a,b){return this.persistence.getTargetCache().forEachTarget(a,b)}zn(a){let b=this.Jn(a);return this.persistence.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}Jn(a){let b=0;return this.Wn(a,a=>{b++}).next(()=>b)}Wn(a,b){return dZ.forEach(this.Js,(c,d)=>this.Xn(a,c,d).next(a=>a?dZ.resolve():b(d)))}removeTargets(a,b,c){return this.persistence.getTargetCache().removeTargets(a,b,c)}removeOrphanedDocuments(a,b){let c=0,d=this.persistence.getRemoteDocumentCache(),e=d.newChangeBuffer();return d.Cs(a,d=>this.Xn(a,d,b).next(a=>{a||(c++,e.removeEntry(d,dG.min()))})).next(()=>e.apply(a)).next(()=>c)}markPotentiallyOrphaned(a,b){return this.Js.set(b,a.currentSequenceNumber),dZ.resolve()}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(a,c)}addReference(a,b,c){return this.Js.set(c,a.currentSequenceNumber),dZ.resolve()}removeReference(a,b,c){return this.Js.set(c,a.currentSequenceNumber),dZ.resolve()}updateLimboDocument(a,b){return this.Js.set(b,a.currentSequenceNumber),dZ.resolve()}Ls(a){let b=a.key.toString().length;return a.isFoundDocument()&&(b+=eU(a.data.value)),b}Xn(a,b,c){return dZ.or([()=>this.persistence.Gs(a,b),()=>this.persistence.getTargetCache().containsKey(a,b),()=>{let a=this.Js.get(b);return dZ.resolve(void 0!==a&&a>c)}])}getCacheSize(a){return this.persistence.getRemoteDocumentCache().getSize(a)}}function iJ(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let iK="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iL{constructor(a,b,c,d,e,f,g,h,i,j,k=15){if(this.allowTabSynchronization=a,this.persistenceKey=b,this.clientId=c,this.ii=e,this.window=f,this.document=g,this.ri=i,this.oi=j,this.ui=k,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=a=>Promise.resolve(),!iL.D())throw new dq(dp.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
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
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(a,b){this.db=a,this.garbageCollector=il(this,b)}zn(a){let b=this.Jn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}Jn(a){let b=0;return this.Wn(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Wn(a,b){return this.Yn(a,(a,c)=>b(c))}addReference(a,b,c){return im(a,c)}removeReference(a,b,c){return im(a,c)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return im(a,b)}Xn(a,b){var c,d;let e;return c=a,d=b,e=!1,ib(c).Z(a=>h8(c,a,d).next(a=>(a&&(e=!0),dZ.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Yn(a,(f,g)=>{if(g<=b){let h=this.Xn(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,dG.min()),ig(a).delete([0,ed(f.path)])))});d.push(h)}}).next(()=>dZ.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return im(a,b)}Yn(a,b){let c=ig(a),d,e=d9.ct;return c.X({index:"documentTargetsIndex"},([a,c],{path:f,sequenceNumber:g})=>{0===a?(e!==d9.ct&&b(new dL(eg(d)),e),e=g,d=f):e=d9.ct}).next(()=>{e!==d9.ct&&b(new dL(eg(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,d),this.di=b+"main",this.serializer=new hr(h),this.wi=new d_(this.di,this.ui,new /**
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
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.serializer=a}O(a,b,c,d){var e,f;let g=new d$("createOrUpgrade",b);c<1&&d>=1&&(function(a){a.createObjectStore("owner")}(a),(e=a).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),iJ(a),function(a){a.createObjectStore("remoteDocuments")}(a));let h=dZ.resolve();return c<3&&d>=3&&(0!==c&&((f=a).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),iJ(a)),h=h.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:dG.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(g))),c<4&&d>=4&&(0!==c&&(h=h.next(()=>{var b,c;return b=a,(c=g).store("mutations").j().next(a=>{b.deleteObjectStore("mutations"),b.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let d=c.store("mutations"),e=a.map(a=>d.put(a));return dZ.waitFor(e)})})),h=h.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(a)})),c<5&&d>=5&&(h=h.next(()=>this.Ys(g))),c<6&&d>=6&&(h=h.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(a),this.Xs(g)))),c<7&&d>=7&&(h=h.next(()=>this.Zs(g))),c<8&&d>=8&&(h=h.next(()=>this.ti(a,g))),c<9&&d>=9&&(h=h.next(()=>{var b;(b=a).objectStoreNames.contains("remoteDocumentChanges")&&b.deleteObjectStore("remoteDocumentChanges")})),c<10&&d>=10&&(h=h.next(()=>this.ei(g))),c<11&&d>=11&&(h=h.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(a),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(a)})),c<12&&d>=12&&(h=h.next(()=>{!function(a){let b=a.createObjectStore("documentOverlays",{keyPath:null});b.createIndex("collectionPathOverlayIndex",null,{unique:!1}),b.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(a)})),c<13&&d>=13&&(h=h.next(()=>(function(a){let b=a.createObjectStore("remoteDocumentsV14",{keyPath:null});b.createIndex("documentKeyIndex",null),b.createIndex("collectionGroupIndex",null)})(a)).next(()=>this.ni(a,g)).next(()=>a.deleteObjectStore("remoteDocuments"))),c<14&&d>=14&&(h=h.next(()=>this.si(a,g))),c<15&&d>=15&&(h=h.next(()=>{var b;(b=a).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),b.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),b.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),h}Xs(a){let b=0;return a.store("remoteDocuments").X((a,c)=>{b+=h6(c)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}Ys(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.j().next(b=>dZ.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.j("userMutationsIndex",d).next(c=>dZ.forEach(c,c=>{var d;(d=c.userId===b.userId)||dn();let e=hw(this.serializer,c);return h5(a,b.userId,e).next(()=>{})}))}))}Zs(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.X((c,e)=>{var f;let g=new dI(c),h=[0,ed(f=g)];d.push(b.get(h).next(c=>{var d;return c?dZ.resolve():(d=g,b.put({targetId:0,path:ed(d),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>dZ.waitFor(d))})}ti(a,b){a.createObjectStore("collectionParents",{keyPath:null});let c=b.store("collectionParents"),d=new hX,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:ed(e)})}};return b.store("remoteDocuments").X({Y:!0},(a,b)=>{let c=new dI(a);return e(c.popLast())}).next(()=>b.store("documentMutations").X({Y:!0},([a,b,c],d)=>{let f=eg(b);return e(f.popLast())}))}ei(a){let b=a.store("targets");return b.X((a,c)=>{let d=hx(c),e=hy(this.serializer,d);return b.put(e)})}ni(a,b){let c=b.store("remoteDocuments"),d=[];return c.X((a,c)=>{var e;let f=b.store("remoteDocumentsV14"),g=((e=c).document?new dL(dI.fromString(e.document.name).popFirst(5)):e.noDocument?dL.fromSegments(e.noDocument.path):e.unknownDocument?dL.fromSegments(e.unknownDocument.path):dn()).path.toArray(),h={prefixPath:g.slice(0,g.length-2),collectionGroup:g[g.length-2],documentId:g[g.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};d.push(f.put(h))}).next(()=>dZ.waitFor(d))}si(a,b){let c=b.store("mutations"),d=iq(this.serializer),e=new iF(iH.zs,this.serializer.fe);return c.j().next(a=>{let c=new Map;return a.forEach(a=>{var b;let d=null!==(b=c.get(a.userId))&& void 0!==b?b:f4();hw(this.serializer,a).keys().forEach(a=>d=d.add(a)),c.set(a.userId,d)}),dZ.forEach(c,(a,c)=>{let f=new df(c),g=hF.de(this.serializer,f),h=e.getIndexManager(f),i=h7.de(f,this.serializer,h,e.referenceDelegate);return new iy(d,i,g,h).recalculateAndSaveOverlaysForDocumentKeys(new ep(b,d9.ct),a).next()})})}}(this.serializer)),this.Bs=new /**
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
 */ class{constructor(a,b){this.referenceDelegate=a,this.serializer=b}allocateTargetId(a){return this.$n(a).next(b=>{let c=new ic(b.highestTargetId);return b.highestTargetId=c.next(),this.On(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.$n(a).next(a=>dG.fromTimestamp(new dF(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.$n(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.$n(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.On(a,d)))}addTargetData(a,b){return this.Fn(a,b).next(()=>this.$n(a).next(c=>(c.targetCount+=1,this.Bn(b,c),this.On(a,c))))}updateTargetData(a,b){return this.Fn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>id(a).delete(b.targetId)).next(()=>this.$n(a)).next(b=>{var c;return b.targetCount>0||dn(),b.targetCount-=1,this.On(a,b)})}removeTargets(a,b,c){let d=0,e=[];return id(a).X((f,g)=>{let h=hx(g);h.sequenceNumber<=b&&null===c.get(h.targetId)&&(d++,e.push(this.removeTargetData(a,h)))}).next(()=>dZ.waitFor(e)).next(()=>d)}forEachTarget(a,b){return id(a).X((a,c)=>{let d=hx(c);b(d)})}$n(a){return ie(a).get("targetGlobalKey").next(a=>{var b;return null!==a||dn(),a})}On(a,b){return ie(a).put("targetGlobalKey",b)}Fn(a,b){return id(a).put(hy(this.serializer,b))}Bn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.$n(a).next(a=>a.targetCount)}getTargetData(a,b){let c=fy(b),d=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]),e=null;return id(a).X({range:d,index:"queryTargetsIndex"},(a,c,d)=>{let f=hx(c);fz(b,f.target)&&(e=f,d.done())}).next(()=>e)}addMatchingKeys(a,b,c){let d=[],e=ig(a);return b.forEach(b=>{let f=ed(b.path);d.push(e.put({targetId:c,path:f})),d.push(this.referenceDelegate.addReference(a,c,b))}),dZ.waitFor(d)}removeMatchingKeys(a,b,c){let d=ig(a);return dZ.forEach(b,b=>{let e=ed(b.path);return dZ.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(a,b){let c=ig(a),d=IDBKeyRange.bound([b],[b+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(a,b){let c=IDBKeyRange.bound([b],[b+1],!1,!0),d=ig(a),e=f4();return d.X({range:c,Y:!0},(a,b,c)=>{let d=eg(a[1]),f=new dL(d);e=e.add(f)}).next(()=>e)}containsKey(a,b){let c=ed(b.path),d=IDBKeyRange.bound([c],[dE(c)],!1,!0),e=0;return ig(a).X({index:"documentTargetsIndex",Y:!0,range:d},([a,b],c,d)=>{0!==a&&(e++,d.done())}).next(()=>e>0)}le(a,b){return id(a).get(b).next(a=>a?hx(a):null)}}(this.referenceDelegate,this.serializer),this.remoteDocumentCache=iq(this.serializer),this.qs=new /**
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
 */ class{getBundleMetadata(a,b){return hD(a).get(b).next(a=>{var b;if(a)return{id:(b=a).bundleId,createTime:hv(b.createTime),version:b.version}})}saveBundleMetadata(a,b){var c;return hD(a).put({bundleId:(c=b).id,createTime:hu(g4(c.createTime)),version:c.version})}getNamedQuery(a,b){return hE(a).get(b).next(a=>{var b;if(a)return{name:(b=a).name,query:hz(b.bundledQuery),readTime:hv(b.readTime)}})}saveNamedQuery(a,b){var c;return hE(a).put({name:(c=b).name,readTime:hu(g4(c.readTime)),bundledQuery:c.bundledQuery})}},this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===j&&dk("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new dq(dp.FAILED_PRECONDITION,iK);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Bs.getHighestSequenceNumber(a))}).then(a=>{this.Os=new d9(a,this.ri)}).then(()=>{this.Fs=!0}).catch(a=>(this.wi&&this.wi.close(),Promise.reject(a)))}Ii(a){return this.fi=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.wi.B(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>iN(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(a).next(a=>{a||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(a)).next(b=>this.isPrimary&&!b?this.Ai(a).next(()=>!1):!!b&&this.vi(a).next(()=>!0))).catch(a=>{if(d2(a))return dj("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return dj("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.ii.enqueueRetryable(()=>this.fi(a)),this.isPrimary=a})}Ti(a){return iM(a).get("owner").next(a=>dZ.resolve(this.Ri(a)))}Pi(a){return iN(a).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=eq(a,"clientMetadata");return b.j().next(a=>{let c=this.Si(a,18e5),d=a.filter(a=>-1===c.indexOf(a));return dZ.forEach(d,a=>b.delete(a.clientId)).next(()=>d)})}).catch(()=>[]);if(this._i)for(let b of a)this._i.removeItem(this.Di(b.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(a){return!!a&&a.ownerId===this.clientId}Ei(a){return this.oi?dZ.resolve(!0):iM(a).get("owner").next(b=>{if(null!==b&&this.Vi(b.leaseTimestampMs,5e3)&&!this.Ci(b.ownerId)){if(this.Ri(b)&&this.networkEnabled)return!0;if(!this.Ri(b)){if(!b.allowTabSynchronization)throw new dq(dp.FAILED_PRECONDITION,iK);return!1}}return!(!this.networkEnabled||!this.inForeground)||iN(a).j().next(a=>void 0===this.Si(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&dj("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new ep(a,d9.ct);return this.Ai(b).next(()=>this.Pi(b))}),this.wi.close(),this.Mi()}Si(a,b){return a.filter(a=>this.Vi(a.updateTimeMs,b)&&!this.Ci(a.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",a=>iN(a).j().next(a=>this.Si(a,18e5).map(a=>a.clientId)))}get started(){return this.Fs}getMutationQueue(a,b){return h7.de(a,this.serializer,b,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new hZ(a,this.serializer.fe.databaseId)}getDocumentOverlayCache(a){return hF.de(this.serializer,a)}getBundleCache(){return this.qs}runTransaction(a,b,c){var d;dj("IndexedDbPersistence","Starting transaction:",a);let e=15===(d=this.ui)?eo:14===d?en:13===d?em:12===d?el:11===d?ek:void dn(),f;return this.wi.runTransaction(a,"readonly"===b?"readonly":"readwrite",e,d=>(f=new ep(d,this.Os?this.Os.next():d9.ct),"readwrite-primary"===b?this.Ti(f).next(a=>!!a||this.Ei(f)).next(b=>{if(!b)throw dk(`Failed to obtain primary lease for action '${a}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new dq(dp.FAILED_PRECONDITION,dW);return c(f)}).next(a=>this.vi(f).next(()=>a)):this.Oi(f).next(()=>c(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}Oi(a){return iM(a).get("owner").next(a=>{if(null!==a&&this.Vi(a.leaseTimestampMs,5e3)&&!this.Ci(a.ownerId)&&!this.Ri(a)&&!(this.oi||this.allowTabSynchronization&&a.allowTabSynchronization))throw new dq(dp.FAILED_PRECONDITION,iK)})}vi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iM(a).put("owner",b)}static D(){return d_.D()}Ai(a){let b=iM(a);return b.get("owner").next(a=>this.Ri(a)?(dj("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):dZ.resolve())}Vi(a,b){let c=Date.now();return!(a<c-b)&&(!(a>c)||(dk(`Detected an update time that is in the future: ${a} > ${c}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.ci=()=>{this.xi();let a=/(?:Version|Mobile)\/1[456]/;isSafari()&&(navigator.appVersion.match(a)||navigator.userAgent.match(a))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(a){var b;try{let c=null!==(null===(b=this._i)|| void 0===b?void 0:b.getItem(this.Di(a)));return dj("IndexedDbPersistence",`Client '${a}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return dk("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(a){dk("Failed to set zombie client id.",a)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(a){}}Di(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function iM(a){return eq(a,"owner")}function iN(a){return eq(a,"clientMetadata")}function iO(a,b){let c=a.projectId;return a.isDefaultDatabase||(c+="."+a.database),"firestore/"+b+"/"+c+"/"}/**
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
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class iP{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Fi=c,this.Bi=d}static Li(a,b){let c=f4(),d=f4();for(let e of b.docChanges)switch(e.type){case 0:c=c.add(e.doc.key);break;case 1:d=d.add(e.doc.key)}return new iP(a,b.fromCache,c,d)}}/**
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
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class iQ{constructor(){this.qi=!1}initialize(a,b){this.Ui=a,this.indexManager=b,this.qi=!0}getDocumentsMatchingQuery(a,b,c,d){return this.Ki(a,b).next(e=>e||this.Gi(a,b,d,c)).next(c=>c||this.Qi(a,b))}Ki(a,b){if(fH(b))return dZ.resolve(null);let c=fM(b);return this.indexManager.getIndexType(a,c).next(d=>0===d?null:(null!==b.limit&&1===d&&(b=fO(b,null,"F"),c=fM(b)),this.indexManager.getDocumentsMatchingTarget(a,c).next(d=>{let e=f4(...d);return this.Ui.getDocuments(a,e).next(d=>this.indexManager.getMinOffset(a,c).next(c=>{let f=this.ji(b,d);return this.zi(b,f,e,c.readTime)?this.Ki(a,fO(b,null,"F")):this.Wi(a,f,b,c)}))})))}Gi(a,b,c,d){return fH(b)||d.isEqual(dG.min())?this.Qi(a,b):this.Ui.getDocuments(a,c).next(e=>{let f=this.ji(b,e);return this.zi(b,f,c,d)?this.Qi(a,b):(di()<=n.in.DEBUG&&dj("QueryEngine","Re-using previous result from %s to execute query: %s",d.toString(),fR(b)),this.Wi(a,f,b,dS(d,-1)))})}ji(a,b){let c=new ex(fU(a));return b.forEach((b,d)=>{fS(a,d)&&(c=c.add(d))}),c}zi(a,b,c,d){if(null===a.limit)return!1;if(c.size!==b.size)return!0;let e="F"===a.limitType?b.last():b.first();return!!e&&(e.hasPendingWrites||e.version.compareTo(d)>0)}Qi(a,b){return di()<=n.in.DEBUG&&dj("QueryEngine","Using full collection scan to execute query:",fR(b)),this.Ui.getDocumentsMatchingQuery(a,b,dU.min())}Wi(a,b,c,d){return this.Ui.getDocumentsMatchingQuery(a,c,d).next(a=>(b.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
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
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class iR{constructor(a,b,c,d){this.persistence=a,this.Hi=b,this.serializer=d,this.Ji=new eu(dC),this.Yi=new fW(a=>fy(a),fz),this.Xi=new Map,this.Zi=a.getRemoteDocumentCache(),this.Bs=a.getTargetCache(),this.qs=a.getBundleCache(),this.tr(c)}tr(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new iy(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.Ji))}}function iS(a,b,c,d){return new iR(a,b,c,d)}async function iT(a,b){var c;let d=c=a;return await d.persistence.runTransaction("Handle user change","readonly",a=>{let c;return d.mutationQueue.getAllMutationBatches(a).next(e=>(c=e,d.tr(b),d.mutationQueue.getAllMutationBatches(a))).next(b=>{let e=[],f=[],g=f4();for(let h of c)for(let i of(e.push(h.batchId),h.mutations))g=g.add(i.key);for(let j of b)for(let k of(f.push(j.batchId),j.mutations))g=g.add(k.key);return d.localDocuments.getDocuments(a,g).next(a=>({er:a,removedBatchIds:e,addedBatchIds:f}))})})}function iU(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Bs.getLastRemoteSnapshotVersion(a))}function iV(a,b,c){let d=f4(),e=f4();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(a=>{let d=fX;return c.forEach((c,f)=>{let g=a.get(c);f.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(c)),f.isNoDocument()&&f.version.isEqual(dG.min())?(b.removeEntry(c,f.readTime),d=d.insert(c,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||0===f.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(f),d=d.insert(c,f)):dj("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",f.version)}),{nr:d,sr:e}})}function iW(a,b){var c;let d=c=a;return d.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===b&&(b=-1),d.mutationQueue.getNextMutationBatchAfterBatchId(a,b)))}function iX(a,b){var c;let d=c=a;return d.persistence.runTransaction("Allocate target","readwrite",a=>{let c;return d.Bs.getTargetData(a,b).next(e=>e?(c=e,dZ.resolve(c)):d.Bs.allocateTargetId(a).next(e=>(c=new hq(b,e,"TargetPurposeListen",a.currentSequenceNumber),d.Bs.addTargetData(a,c).next(()=>c))))}).then(a=>{let c=d.Ji.get(a.targetId);return(null===c||a.snapshotVersion.compareTo(c.snapshotVersion)>0)&&(d.Ji=d.Ji.insert(a.targetId,a),d.Yi.set(b,a.targetId)),a})}async function iY(a,b,c){var d;let e=d=a,f=e.Ji.get(b);try{c||await e.persistence.runTransaction("Release target",c?"readwrite":"readwrite-primary",a=>e.persistence.referenceDelegate.removeTarget(a,f))}catch(g){if(!d2(g))throw g;dj("LocalStore",`Failed to update sequence numbers for target ${b}: ${g}`)}e.Ji=e.Ji.remove(b),e.Yi.delete(f.target)}function iZ(a,b,c){var d;let e=d=a,f=dG.min(),g=f4();return e.persistence.runTransaction("Execute query","readonly",a=>(function(a,b,c){var d;let e=d=a,f=e.Yi.get(c);return void 0!==f?dZ.resolve(e.Ji.get(f)):e.Bs.getTargetData(b,c)})(e,a,fM(b)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,e.Bs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>e.Hi.getDocumentsMatchingQuery(a,b,c?f:dG.min(),c?g:f4())).next(a=>(i0(e,fT(b),a),{documents:a,ir:g})))}function i$(a,b){var c,d;let e=c=a,f=d=e.Bs,g=e.Ji.get(b);return g?Promise.resolve(g.target):e.persistence.runTransaction("Get target data","readonly",a=>f.le(a,b).next(a=>a?a.target:null))}function i_(a,b){var c;let d=c=a,e=d.Xi.get(b)||dG.min();return d.persistence.runTransaction("Get new document changes","readonly",a=>d.Zi.getAllFromCollectionGroup(a,b,dS(e,-1),Number.MAX_SAFE_INTEGER)).then(a=>(i0(d,b,a),a))}function i0(a,b,c){let d=a.Xi.get(b)||dG.min();c.forEach((a,b)=>{b.readTime.compareTo(d)>0&&(d=b.readTime)}),a.Xi.set(b,d)}async function i1(a,b,c,d){var e,f;let g=e=a,h=f4(),i=fX;for(let j of c){let k=b.rr(j.metadata.name);j.document&&(h=h.add(k));let l=b.ur(j);l.setReadTime(b.cr(j.metadata.readTime)),i=i.insert(k,l)}let m=g.Zi.newChangeBuffer({trackRemovals:!0}),n=await iX(g,(f=d,fM(fG(dI.fromString(`__bundle__/docs/${f}`)))));return g.persistence.runTransaction("Apply bundle documents","readwrite",a=>iV(a,m,i).next(b=>(m.apply(a),b)).next(b=>g.Bs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>g.Bs.addMatchingKeys(a,h,n.targetId)).next(()=>g.localDocuments.getLocalViewOfDocuments(a,b.nr,b.sr)).next(()=>b.nr)))}async function i2(a,b,c=f4()){var d;let e=await iX(a,fM(hz(b.bundledQuery))),f=d=a;return f.persistence.runTransaction("Save named query","readwrite",a=>{let d=g4(b.readTime);if(e.snapshotVersion.compareTo(d)>=0)return f.qs.saveNamedQuery(a,b);let g=e.withResumeToken(eC.EMPTY_BYTE_STRING,d);return f.Ji=f.Ji.insert(g.targetId,g),f.Bs.updateTargetData(a,g).next(()=>f.Bs.removeMatchingKeysForTargetId(a,e.targetId)).next(()=>f.Bs.addMatchingKeys(a,c,e.targetId)).next(()=>f.qs.saveNamedQuery(a,b))})}function i3(a,b){return`firestore_clients_${a}_${b}`}function i4(a,b,c){let d=`firestore_mutations_${a}_${c}`;return b.isAuthenticated()&&(d+=`_${b.uid}`),d}function i5(a,b){return`firestore_targets_${a}_${b}`}class i6{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static ar(a,b,c){let d=JSON.parse(c),e,f="object"==typeof d&& -1!==["pending","acknowledged","rejected"].indexOf(d.state)&&(void 0===d.error||"object"==typeof d.error);return f&&d.error&&(f="string"==typeof d.error.message&&"string"==typeof d.error.code)&&(e=new dq(d.error.code,d.error.message)),f?new i6(a,b,d.state,e):(dk("SharedClientState",`Failed to parse mutation state for ID '${b}': ${c}`),null)}hr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class i7{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static ar(a,b){let c=JSON.parse(b),d,e="object"==typeof c&& -1!==["not-current","current","rejected"].indexOf(c.state)&&(void 0===c.error||"object"==typeof c.error);return e&&c.error&&(e="string"==typeof c.error.message&&"string"==typeof c.error.code)&&(d=new dq(c.error.code,c.error.message)),e?new i7(a,c.state,d):(dk("SharedClientState",`Failed to parse target state for ID '${a}': ${b}`),null)}hr(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class i8{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static ar(a,b){let c=JSON.parse(b),d="object"==typeof c&&c.activeTargetIds instanceof Array,e=f5;for(let f=0;d&&f<c.activeTargetIds.length;++f)d=ec(c.activeTargetIds[f]),e=e.add(c.activeTargetIds[f]);return d?new i8(a,e):(dk("SharedClientState",`Failed to parse client data for instance '${a}': ${b}`),null)}}class i9{constructor(a,b){this.clientId=a,this.onlineState=b}static ar(a){let b=JSON.parse(a);return"object"==typeof b&& -1!==["Unknown","Online","Offline"].indexOf(b.onlineState)&&"string"==typeof b.clientId?new i9(b.clientId,b.onlineState):(dk("SharedClientState",`Failed to parse online state: ${a}`),null)}}class ja{constructor(){this.activeTargetIds=f5}lr(a){this.activeTargetIds=this.activeTargetIds.add(a)}dr(a){this.activeTargetIds=this.activeTargetIds.delete(a)}hr(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class jb{constructor(a,b,c,d,e){var f,g,h;this.window=a,this.ii=b,this.persistenceKey=c,this.wr=d,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new eu(dC),this.started=!1,this.yr=[];let i=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=e,this.pr=i3(this.persistenceKey,this.wr),this.Ir=`firestore_sequence_number_${f=this.persistenceKey}`,this.gr=this.gr.insert(this.wr,new ja),this.Tr=RegExp(`^firestore_clients_${i}_([^_]*)$`),this.Er=RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.Ar=RegExp(`^firestore_targets_${i}_(\\d+)$`),this.vr=`firestore_online_state_${g=this.persistenceKey}`,this.Rr=`firestore_bundle_loaded_v2_${h=this.persistenceKey}`,this.window.addEventListener("storage",this._r)}static D(a){return!(!a||!a.localStorage)}async start(){let a=await this.syncEngine.$i();for(let b of a){if(b===this.wr)continue;let c=this.getItem(i3(this.persistenceKey,b));if(c){let d=i8.ar(b,c);d&&(this.gr=this.gr.insert(d.clientId,d))}}this.Pr();let e=this.storage.getItem(this.vr);if(e){let f=this.br(e);f&&this.Vr(f)}for(let g of this.yr)this.mr(g);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.Ir,JSON.stringify(a))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(a){let b=!1;return this.gr.forEach((c,d)=>{d.activeTargetIds.has(a)&&(b=!0)}),b}addPendingMutation(a){this.Dr(a,"pending")}updateMutationState(a,b,c){this.Dr(a,b,c),this.Cr(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(i5(this.persistenceKey,a));if(c){let d=i7.ar(a,c);d&&(b=d.state)}}return this.Nr.lr(a),this.Pr(),b}removeLocalQueryTarget(a){this.Nr.dr(a),this.Pr()}isLocalQueryTarget(a){return this.Nr.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(i5(this.persistenceKey,a))}updateQueryState(a,b,c){this.kr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.Cr(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.Mr(a)}notifyBundleLoaded(a){this.$r(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return dj("SharedClientState","READ",a,b),b}setItem(a,b){dj("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){dj("SharedClientState","REMOVE",a),this.storage.removeItem(a)}mr(a){let b=a;if(b.storageArea===this.storage){if(dj("SharedClientState","EVENT",b.key,b.newValue),b.key===this.pr)return void dk("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(null!==b.key){if(this.Tr.test(b.key)){if(null==b.newValue){let a=this.Or(b.key);return this.Fr(a,null)}{let c=this.Br(b.key,b.newValue);if(c)return this.Fr(c.clientId,c)}}else if(this.Er.test(b.key)){if(null!==b.newValue){let d=this.Lr(b.key,b.newValue);if(d)return this.qr(d)}}else if(this.Ar.test(b.key)){if(null!==b.newValue){let e=this.Ur(b.key,b.newValue);if(e)return this.Kr(e)}}else if(b.key===this.vr){if(null!==b.newValue){let f=this.br(b.newValue);if(f)return this.Vr(f)}}else if(b.key===this.Ir){let g=function(a){let b=d9.ct;if(null!=a)try{var c;let d=JSON.parse(a);"number"==typeof d||dn(),b=d}catch(e){dk("SharedClientState","Failed to read sequence number from WebStorage",e)}return b}(b.newValue);g!==d9.ct&&this.sequenceNumberHandler(g)}else if(b.key===this.Rr){let h=this.Gr(b.newValue);await Promise.all(h.map(a=>this.syncEngine.Qr(a)))}}}else this.yr.push(b)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(a,b,c){let d=new i6(this.currentUser,a,b,c),e=i4(this.persistenceKey,this.currentUser,a);this.setItem(e,d.hr())}Cr(a){let b=i4(this.persistenceKey,this.currentUser,a);this.removeItem(b)}Mr(a){let b={clientId:this.wr,onlineState:a};this.storage.setItem(this.vr,JSON.stringify(b))}kr(a,b,c){let d=i5(this.persistenceKey,a),e=new i7(a,b,c);this.setItem(d,e.hr())}$r(a){let b=JSON.stringify(Array.from(a));this.setItem(this.Rr,b)}Or(a){let b=this.Tr.exec(a);return b?b[1]:null}Br(a,b){let c=this.Or(a);return i8.ar(c,b)}Lr(a,b){let c=this.Er.exec(a),d=Number(c[1]),e=void 0!==c[2]?c[2]:null;return i6.ar(new df(e),d,b)}Ur(a,b){let c=this.Ar.exec(a),d=Number(c[1]);return i7.ar(d,b)}br(a){return i9.ar(a)}Gr(a){return JSON.parse(a)}async qr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.jr(a.batchId,a.state,a.error);dj("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}Kr(a){return this.syncEngine.zr(a.targetId,a.state,a.error)}Fr(a,b){let c=b?this.gr.insert(a,b):this.gr.remove(a),d=this.Sr(this.gr),e=this.Sr(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Wr(f,g).then(()=>{this.gr=c})}Vr(a){this.gr.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}Sr(a){let b=f5;return a.forEach((a,c)=>{b=b.unionWith(c.activeTargetIds)}),b}}class jc{constructor(){this.Hr=new ja,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Hr.lr(a),this.Jr[a]||"not-current"}updateQueryState(a,b,c){this.Jr[a]=b}removeLocalQueryTarget(a){this.Hr.dr(a)}isLocalQueryTarget(a){return this.Hr.activeTargetIds.has(a)}clearQueryState(a){delete this.Jr[a]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(a){return this.Hr.activeTargetIds.has(a)}start(){return this.Hr=new ja,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
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
 */ class jd{Yr(a){}shutdown(){}}/**
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
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class je{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(a){this.so.push(a)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let a of(dj("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))a(0)}no(){for(let a of(dj("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))a(1)}static D(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */ /**
 * The value returned from the most recent invocation of
 * `generateUniqueDebugId()`, or null if it has never been invoked.
 */ let jf=null;function jg(){return null===jf?jf=268435456+Math.round(2147483648*Math.random()):jf++,"0x"+jf.toString(16)}/**
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
 */ let jh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
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
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class ji{constructor(a){this.ro=a.ro,this.oo=a.oo}uo(a){this.co=a}ao(a){this.ho=a}onMessage(a){this.lo=a}close(){this.oo()}send(a){this.ro(a)}fo(){this.co()}wo(a){this.ho(a)}_o(a){this.lo(a)}}/**
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
 */ let jj="WebChannelConnection";class jk extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.mo=b+"://"+a.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(a,b,c,d,e){let f=jg(),g=this.To(a,b);dj("RestConnection",`Sending RPC '${a}' ${f}:`,g,c);let h={};return this.Eo(h,d,e),this.Ao(a,g,h,c).then(b=>(dj("RestConnection",`Received RPC '${a}' ${f}: `,b),b),b=>{throw dl("RestConnection",`RPC '${a}' ${f} failed with error: `,b,"url: ",g,"request:",c),b})}vo(a,b,c,d,e,f){return this.Io(a,b,c,d,e)}Eo(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+dg,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}To(a,b){let c=jh[a];return`${this.mo}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams,this.longPollingOptions=a.longPollingOptions}Ao(a,b,c,d){let e=jg();return new Promise((f,g)=>{let h=new da;h.setWithCredentials(!0),h.listenOnce(c5.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case c4.NO_ERROR:let b=h.getResponseJson();dj(jj,`XHR for RPC '${a}' ${e} received:`,JSON.stringify(b)),f(b);break;case c4.TIMEOUT:dj(jj,`RPC '${a}' ${e} timed out`),g(new dq(dp.DEADLINE_EXCEEDED,"Request time out"));break;case c4.HTTP_ERROR:let c=h.getStatus();if(dj(jj,`RPC '${a}' ${e} failed with status:`,c,"response text:",h.getResponseText()),c>0){let d=h.getResponseJson();Array.isArray(d)&&(d=d[0]);let i=null==d?void 0:d.error;if(i&&i.status&&i.message){let j=function(a){let b=a.toLowerCase().replace(/_/g,"-");return Object.values(dp).indexOf(b)>=0?b:dp.UNKNOWN}(i.status);g(new dq(j,i.message))}else g(new dq(dp.UNKNOWN,"Server responded with status "+h.getStatus()))}else g(new dq(dp.UNAVAILABLE,"Connection failed."));break;default:dn()}}finally{dj(jj,`RPC '${a}' ${e} completed.`)}});let i=JSON.stringify(d);dj(jj,`RPC '${a}' ${e} sending request:`,d),h.send(b,"POST",i,c,15)})}Ro(a,b,c){let d=jg(),e=[this.mo,"/","google.firestore.v1.Firestore","/",a,"/channel"],f=c2(),g=c3(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},j=this.longPollingOptions.timeoutSeconds;void 0!==j&&(h.longPollingTimeout=Math.round(1e3*j)),this.useFetchStreams&&(h.xmlHttpFactory=new c8({})),this.Eo(h.initMessageHeaders,b,c),h.encodeInitMessageHeaders=!0;let k=e.join("");dj(jj,`Creating RPC '${a}' stream ${d}: ${k}`,h);let l=f.createWebChannel(k,h),m=!1,n=!1,o=new ji({ro:b=>{n?dj(jj,`Not sending because RPC '${a}' stream ${d} is closed:`,b):(m||(dj(jj,`Opening RPC '${a}' stream ${d} transport.`),l.open(),m=!0),dj(jj,`RPC '${a}' stream ${d} sending:`,b),l.send(b))},oo:()=>l.close()}),p=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return p(l,c9.EventType.OPEN,()=>{n||dj(jj,`RPC '${a}' stream ${d} transport opened.`)}),p(l,c9.EventType.CLOSE,()=>{n||(n=!0,dj(jj,`RPC '${a}' stream ${d} transport closed`),o.wo())}),p(l,c9.EventType.ERROR,b=>{n||(n=!0,dl(jj,`RPC '${a}' stream ${d} transport errored:`,b),o.wo(new dq(dp.UNAVAILABLE,"The operation could not be completed")))}),p(l,c9.EventType.MESSAGE,b=>{var c,e;if(!n){let f=b.data[0];(e=!!f)||dn();let g=f,h=g.error||(null===(c=g[0])|| void 0===c?void 0:c.error);if(h){dj(jj,`RPC '${a}' stream ${d} received error:`,h);let j=h.status,k=function(a){let b=i[a];if(void 0!==b)return gI(b)}(j),m=h.message;void 0===k&&(k=dp.INTERNAL,m="Unknown error status: "+j+" with message "+h.message),n=!0,o.wo(new dq(k,m)),l.close()}else dj(jj,`RPC '${a}' stream ${d} received:`,f),o._o(f)}}),p(g,c6.STAT_EVENT,b=>{b.stat===c7.PROXY?dj(jj,`RPC '${a}' stream ${d} detected buffering proxy`):b.stat===c7.NOPROXY&&dj(jj,`RPC '${a}' stream ${d} detected no buffering proxy`)}),setTimeout(()=>{o.fo()},0),o}}/**
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
 */ /** Initializes the WebChannelConnection for the browser. */ /**
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
 */ /** The Platform's 'window' implementation or null if not available. */ function jl(){return"undefined"!=typeof window?window:null}function jm(){return"undefined"!=typeof document?document:null}/**
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
 */ function jn(a){return new g0(a,!0)}/**
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
 */ /**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ class jo{constructor(a,b,c=1e3,d=1.5,e=6e4){this.ii=a,this.timerId=b,this.Po=c,this.bo=d,this.Vo=e,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(a){this.cancel();let b=Math.floor(this.So+this.ko()),c=Math.max(0,Date.now()-this.Co),d=Math.max(0,b-c);d>0&&dj("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.So} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,d,()=>(this.Co=Date.now(),a())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class jp{constructor(a,b,c,d,e,f,g,h){this.ii=a,this.$o=c,this.Oo=d,this.connection=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new jo(a,b)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(a){this.Ho(),this.stream.send(a)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(a,b){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==a?this.qo.reset():b&&b.code===dp.RESOURCE_EXHAUSTED?(dk(b.toString()),dk("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):b&&b.code===dp.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=a,await this.listener.ao(b)}Yo(){}auth(){this.state=1;let a=this.Xo(this.Fo),b=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.Fo===b&&this.Zo(a,c)},b=>{a(()=>{let a=new dq(dp.UNKNOWN,"Fetching auth token failed: "+b.message);return this.tu(a)})})}Zo(a,b){let c=this.Xo(this.Fo);this.stream=this.eu(a,b),this.stream.uo(()=>{c(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(a=>{c(()=>this.tu(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(a){return dj("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Xo(a){return b=>{this.ii.enqueueAndForget(()=>this.Fo===a?b():(dj("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jq extends jp{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.serializer=e}eu(a,b){return this.connection.Ro("Listen",a,b)}onMessage(a){this.qo.reset();let b=function(a,b){let c;if("targetChange"in b){var d,e,f,g,h;b.targetChange;let i="NO_CHANGE"===(d=b.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===d?1:"REMOVE"===d?2:"CURRENT"===d?3:"RESET"===d?4:dn(),j=b.targetChange.targetIds||[],k=(e=a,f=b.targetChange.resumeToken,e.useProto3Json?(void 0===f||"string"==typeof f||dn(),eC.fromBase64String(f||"")):(void 0===f||f instanceof Uint8Array||dn(),eC.fromUint8Array(f||new Uint8Array))),l=b.targetChange.cause,m=l&&function(a){let b=void 0===a.code?dp.UNKNOWN:gI(a.code);return new dq(b,a.message||"")}(l);c=new gU(i,j,k,m||null)}else if("documentChange"in b){b.documentChange;let n=b.documentChange;n.document,n.document.name,n.document.updateTime;let o=g8(a,n.document.name),p=g4(n.document.updateTime),q=n.document.createTime?g4(n.document.createTime):dG.min(),r=new e5({mapValue:{fields:n.document.fields}}),s=e7.newFoundDocument(o,p,q,r),t=n.targetIds||[],u=n.removedTargetIds||[];c=new gS(t,u,s.key,s)}else if("documentDelete"in b){b.documentDelete;let v=b.documentDelete;v.document;let w=g8(a,v.document),x=v.readTime?g4(v.readTime):dG.min(),y=e7.newNoDocument(w,x),z=v.removedTargetIds||[];c=new gS([],z,y.key,y)}else if("documentRemove"in b){b.documentRemove;let A=b.documentRemove;A.document;let B=g8(a,A.document),C=A.removedTargetIds||[];c=new gS([],C,B,null)}else{if(!("filter"in b))return dn();{b.filter;let D=b.filter;D.targetId;let{count:E=0,unchangedNames:F}=D,G=new gG(E,F),H=D.targetId;c=new gT(H,G)}}return c}(this.serializer,a),c=function(a){if(!("targetChange"in a))return dG.min();let b=a.targetChange;return b.targetIds&&b.targetIds.length?dG.min():b.readTime?g4(b.readTime):dG.min()}(a);return this.listener.nu(b,c)}su(a){let b={};b.database=hb(this.serializer),b.addTarget=function(a,b){let c,d=b.target;if((c=fA(d)?{documents:hh(a,d)}:{query:hi(a,d)}).targetId=b.targetId,b.resumeToken.approximateByteSize()>0){c.resumeToken=g3(a,b.resumeToken);let e=g1(a,b.expectedCount);null!==e&&(c.expectedCount=e)}else if(b.snapshotVersion.compareTo(dG.min())>0){c.readTime=g2(a,b.snapshotVersion.toTimestamp());let f=g1(a,b.expectedCount);null!==f&&(c.expectedCount=f)}return c}(this.serializer,a);let c=function(a,b){let c=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return dn()}}(b.purpose);return null==c?null:{"goog-listen-tags":c}}(this.serializer,a);c&&(b.labels=c),this.Wo(b)}iu(a){let b={};b.database=hb(this.serializer),b.removeTarget=a,this.Wo(b)}}class jr extends jp{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.serializer=e,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(a,b){return this.connection.Ro("Write",a,b)}onMessage(a){var b,c,d,e,f;if(!a.streamToken&&dn(),this.lastStreamToken=a.streamToken,this.ru){this.qo.reset();let g=(c=a.writeResults,d=a.commitTime,c&&c.length>0?(void 0!==d||dn(),c.map(a=>{var b,c;let e;return b=a,c=d,(e=b.updateTime?g4(b.updateTime):g4(c)).isEqual(dG.min())&&(e=g4(c)),new gm(e,b.transformResults||[])})):[]),h=g4(a.commitTime);return this.listener.cu(h,g)}return a.writeResults&&0!==a.writeResults.length&&dn(),this.ru=!0,this.listener.au()}hu(){let a={};a.database=hb(this.serializer),this.Wo(a)}uu(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>hf(this.serializer,a))};this.Wo(b)}}/**
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
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class js extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.connection=c,this.serializer=d,this.lu=!1}fu(){if(this.lu)throw new dq(dp.FAILED_PRECONDITION,"The client has already been terminated.")}Io(a,b,c){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.connection.Io(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dp.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new dq(dp.UNKNOWN,a.toString())})}vo(a,b,c,d){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.connection.vo(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dp.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new dq(dp.UNKNOWN,a.toString())})}terminate(){this.lu=!0}}async function jt(a,b,c){var d,e,f;let g=e=a,{request:h,du:i}=function(a,b,c){let d=hi(a,b),e={},f=[],g=0;return c.forEach(a=>{let b="aggregate_"+g++;e[b]=a.alias,"count"===a.yt?f.push({alias:b,count:{}}):"avg"===a.yt?f.push({alias:b,avg:{field:hl(a.fieldPath)}}):"sum"===a.yt&&f.push({alias:b,sum:{field:hl(a.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:f,structuredQuery:d.structuredQuery},parent:d.parent},du:e}}(g.serializer,fM(b),c),j=h.parent;g.connection.po||delete h.parent;let k=(await g.vo("RunAggregationQuery",j,h,1)).filter(a=>!!a.result);(f=1===k.length)||dn();let l=null===(d=k[0].result)|| void 0===d?void 0:d.aggregateFields;return Object.keys(l).reduce((a,b)=>(a[i[b]]=l[b],a),{})}/**
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
 */ class ju{constructor(a,b,c,d,e){this.localStore=a,this.datastore=b,this.asyncQueue=c,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=e,this.Pu.Yr(a=>{c.enqueueAndForget(async()=>{jD(this)&&(dj("RemoteStore","Restarting streams for network reachability change."),await async function(a){var b;let c=b=a;c.vu.add(4),await jw(c),c.bu.set("Unknown"),c.vu.delete(4),await jv(c)}(this))})}),this.bu=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(a){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.yu("Offline")))}set(a){this.Tu(),this.wu=0,"Online"===a&&(this.mu=!1),this.yu(a)}yu(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}pu(a){let b=`Could not reach Cloud Firestore backend. ${a}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(dk(b),this.mu=!1):dj("OnlineStateTracker",b)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}(c,d)}}async function jv(a){if(jD(a))for(let b of a.Ru)await b(!0)}async function jw(a){for(let b of a.Ru)await b(!1)}function jx(a,b){var c;let d=c=a;d.Au.has(b.targetId)||(d.Au.set(b.targetId,b),jC(d)?jB(d):jV(d).Ko()&&jz(d,b))}function jy(a,b){var c;let d=c=a,e=jV(d);d.Au.delete(b),e.Ko()&&jA(d,b),0===d.Au.size&&(e.Ko()?e.jo():jD(d)&&d.bu.set("Unknown"))}function jz(a,b){if(a.Vu.qt(b.targetId),b.resumeToken.approximateByteSize()>0||b.snapshotVersion.compareTo(dG.min())>0){let c=a.remoteSyncer.getRemoteKeysForTarget(b.targetId).size;b=b.withExpectedCount(c)}jV(a).su(b)}function jA(a,b){a.Vu.qt(b),jV(a).iu(b)}function jB(a){a.Vu=new gW({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),le:b=>a.Au.get(b)||null,ue:()=>a.datastore.serializer.databaseId}),jV(a).start(),a.bu.gu()}function jC(a){return jD(a)&&!jV(a).Uo()&&a.Au.size>0}function jD(a){var b;return 0===(b=a).vu.size}function jE(a){a.Vu=void 0}async function jF(a){a.Au.forEach((b,c)=>{jz(a,b)})}async function jG(a,b){jE(a),jC(a)?(a.bu.Iu(b),jB(a)):a.bu.set("Unknown")}async function jH(a,b,c){if(a.bu.set("Online"),b instanceof gU&&2===b.state&&b.cause)try{await async function(a,b){let c=b.cause;for(let d of b.targetIds)a.Au.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Au.delete(d),a.Vu.removeTarget(d))}(a,b)}catch(d){dj("RemoteStore","Failed to remove targets %s: %s ",b.targetIds.join(","),d),await jI(a,d)}else if(b instanceof gS?a.Vu.Ht(b):b instanceof gT?a.Vu.ne(b):a.Vu.Xt(b),!c.isEqual(dG.min()))try{let e=await iU(a.localStore);c.compareTo(e)>=0&&await function(a,b){let c=a.Vu.ce(b);return c.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){let e=a.Au.get(d);e&&a.Au.set(d,e.withResumeToken(c.resumeToken,b))}}),c.targetMismatches.forEach((b,c)=>{let d=a.Au.get(b);if(!d)return;a.Au.set(b,d.withResumeToken(eC.EMPTY_BYTE_STRING,d.snapshotVersion)),jA(a,b);let e=new hq(d.target,b,c,d.sequenceNumber);jz(a,e)}),a.remoteSyncer.applyRemoteEvent(c)}(a,c)}catch(f){dj("RemoteStore","Failed to raise snapshot:",f),await jI(a,f)}}async function jI(a,b,c){if(!d2(b))throw b;a.vu.add(1),await jw(a),a.bu.set("Offline"),c||(c=()=>iU(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{dj("RemoteStore","Retrying IndexedDB access"),await c(),a.vu.delete(1),await jv(a)})}function jJ(a,b){return b().catch(c=>jI(a,c,b))}async function jK(a){var b;let c=b=a,d=jW(c),e=c.Eu.length>0?c.Eu[c.Eu.length-1].batchId:-1;for(;jL(c);)try{let f=await iW(c.localStore,e);if(null===f){0===c.Eu.length&&d.jo();break}e=f.batchId,jM(c,f)}catch(g){await jI(c,g)}jN(c)&&jO(c)}function jL(a){return jD(a)&&a.Eu.length<10}function jM(a,b){a.Eu.push(b);let c=jW(a);c.Ko()&&c.ou&&c.uu(b.mutations)}function jN(a){return jD(a)&&!jW(a).Uo()&&a.Eu.length>0}function jO(a){jW(a).start()}async function jP(a){jW(a).hu()}async function jQ(a){let b=jW(a);for(let c of a.Eu)b.uu(c.mutations)}async function jR(a,b,c){let d=a.Eu.shift(),e=gD.from(d,b,c);await jJ(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await jK(a)}async function jS(a,b){b&&jW(a).ou&&await async function(a,b){var c;if(gH(c=b.code)&&c!==dp.ABORTED){let d=a.Eu.shift();jW(a).Qo(),await jJ(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,b)),await jK(a)}}(a,b),jN(a)&&jO(a)}async function jT(a,b){var c;let d=c=a;d.asyncQueue.verifyOperationInProgress(),dj("RemoteStore","RemoteStore received new credentials");let e=jD(d);d.vu.add(3),await jw(d),e&&d.bu.set("Unknown"),await d.remoteSyncer.handleCredentialChange(b),d.vu.delete(3),await jv(d)}async function jU(a,b){var c;let d=c=a;b?(d.vu.delete(2),await jv(d)):b||(d.vu.add(2),await jw(d),d.bu.set("Unknown"))}function jV(a){return a.Su||(a.Su=function(a,b,c){var d;let e=d=a;return e.fu(),new jq(b,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,c)}(a.datastore,a.asyncQueue,{uo:jF.bind(null,a),ao:jG.bind(null,a),nu:jH.bind(null,a)}),a.Ru.push(async b=>{b?(a.Su.Qo(),jC(a)?jB(a):a.bu.set("Unknown")):(await a.Su.stop(),jE(a))})),a.Su}function jW(a){return a.Du||(a.Du=function(a,b,c){var d;let e=d=a;return e.fu(),new jr(b,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,c)}(a.datastore,a.asyncQueue,{uo:jP.bind(null,a),ao:jS.bind(null,a),au:jQ.bind(null,a),cu:jR.bind(null,a)}),a.Ru.push(async b=>{b?(a.Du.Qo(),await jK(a)):(await a.Du.stop(),a.Eu.length>0&&(dj("RemoteStore",`Stopping write stream with ${a.Eu.length} pending writes`),a.Eu=[]))})),a.Du}/**
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
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class jX{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new jX(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new dq(dp.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jY(a,b){if(dk("AsyncQueue",`${b}: ${a}`),d2(a))return new dq(dp.UNAVAILABLE,`${b}: ${a}`);throw a}/**
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
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class jZ{constructor(a){this.comparator=a?(b,c)=>a(b,c)||dL.comparator(b.key,c.key):(a,b)=>dL.comparator(a.key,b.key),this.keyedMap=fZ(),this.sortedSet=new eu(this.comparator)}static emptySet(a){return new jZ(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(a){let b=this.keyedMap.get(a);return b?this.sortedSet.indexOf(b):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof jZ)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(a,b){let c=new jZ;return c.comparator=this.comparator,c.keyedMap=a,c.sortedSet=b,c}}/**
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
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class j${constructor(){this.Cu=new eu(dL.comparator)}track(a){let b=a.doc.key,c=this.Cu.get(b);c?0!==a.type&&3===c.type?this.Cu=this.Cu.insert(b,a):3===a.type&&1!==c.type?this.Cu=this.Cu.insert(b,{type:c.type,doc:a.doc}):2===a.type&&2===c.type?this.Cu=this.Cu.insert(b,{type:2,doc:a.doc}):2===a.type&&0===c.type?this.Cu=this.Cu.insert(b,{type:0,doc:a.doc}):1===a.type&&0===c.type?this.Cu=this.Cu.remove(b):1===a.type&&2===c.type?this.Cu=this.Cu.insert(b,{type:1,doc:c.doc}):0===a.type&&1===c.type?this.Cu=this.Cu.insert(b,{type:2,doc:a.doc}):dn():this.Cu=this.Cu.insert(b,a)}xu(){let a=[];return this.Cu.inorderTraversal((b,c)=>{a.push(c)}),a}}class j_{constructor(a,b,c,d,e,f,g,h,i){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h,this.hasCachedResults=i}static fromInitialDocuments(a,b,c,d,e){let f=[];return b.forEach(a=>{f.push({type:0,doc:a})}),new j_(a,b,jZ.emptySet(b),f,c,d,!0,!1,e)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.hasCachedResults===a.hasCachedResults&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&fP(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let b=this.docChanges,c=a.docChanges;if(b.length!==c.length)return!1;for(let d=0;d<b.length;d++)if(b[d].type!==c[d].type||!b[d].doc.isEqual(c[d].doc))return!1;return!0}}/**
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
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class j0{constructor(){this.Nu=void 0,this.listeners=[]}}class j1{constructor(){this.queries=new fW(a=>fQ(a),fP),this.onlineState="Unknown",this.ku=new Set}}async function j2(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g||(f=!0,g=new j0),f)try{g.Nu=await d.onListen(e)}catch(h){let i=jY(h,`Initialization of query '${fR(b.query)}' failed`);return void b.onError(i)}d.queries.set(e,g),g.listeners.push(b),b.Mu(d.onlineState),g.Nu&&b.$u(g.Nu)&&j6(d)}async function j3(a,b){var c;let d=c=a,e=b.query,f=!1,g=d.queries.get(e);if(g){let h=g.listeners.indexOf(b);h>=0&&(g.listeners.splice(h,1),f=0===g.listeners.length)}if(f)return d.queries.delete(e),d.onUnlisten(e)}function j4(a,b){var c;let d=c=a,e=!1;for(let f of b){let g=f.query,h=d.queries.get(g);if(h){for(let i of h.listeners)i.$u(f)&&(e=!0);h.Nu=f}}e&&j6(d)}function j5(a,b,c){var d;let e=d=a,f=e.queries.get(b);if(f)for(let g of f.listeners)g.onError(c);e.queries.delete(b)}function j6(a){a.ku.forEach(a=>{a.next()})}class j7{constructor(a,b,c){this.query=a,this.Ou=b,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=c||{}}$u(a){if(!this.options.includeMetadataChanges){let b=[];for(let c of a.docChanges)3!==c.type&&b.push(c);a=new j_(a.query,a.docs,a.oldDocs,b,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0,a.hasCachedResults)}let d=!1;return this.Fu?this.Lu(a)&&(this.Ou.next(a),d=!0):this.qu(a,this.onlineState)&&(this.Uu(a),d=!0),this.Bu=a,d}onError(a){this.Ou.error(a)}Mu(a){this.onlineState=a;let b=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,a)&&(this.Uu(this.Bu),b=!0),b}qu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Ku||!c)&&(!a.docs.isEmpty()||a.hasCachedResults||"Offline"===b)}Lu(a){if(a.docChanges.length>0)return!0;let b=this.Bu&&this.Bu.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}Uu(a){a=j_.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache,a.hasCachedResults),this.Fu=!0,this.Ou.next(a)}}/**
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
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class j8{constructor(a,b){this.Gu=a,this.byteLength=b}Qu(){return"metadata"in this.Gu}}/**
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
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class j9{constructor(a){this.serializer=a}rr(a){return g8(this.serializer,a)}ur(a){return a.metadata.exists?he(this.serializer,a.document,!1):e7.newNoDocument(this.rr(a.metadata.name),this.cr(a.metadata.readTime))}cr(a){return g4(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
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
 */ class ka{constructor(a){this.key=a}}class kb{constructor(a){this.key=a}}class kc{constructor(a,b){this.query=a,this.Yu=b,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=f4(),this.mutatedKeys=f4(),this.tc=fU(a),this.ec=new jZ(this.tc)}get nc(){return this.Yu}sc(a,b){let c=b?b.ic:new j$,d=b?b.ec:this.ec,e=b?b.mutatedKeys:this.mutatedKeys,f=d,g=!1,h="F"===this.query.limitType&&d.size===this.query.limit?d.last():null,i="L"===this.query.limitType&&d.size===this.query.limit?d.first():null;if(a.inorderTraversal((a,b)=>{let j=d.get(a),k=fS(this.query,b)?b:null,l=!!j&&this.mutatedKeys.has(j.key),m=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),n=!1;j&&k?j.data.isEqual(k.data)?l!==m&&(c.track({type:3,doc:k}),n=!0):this.rc(j,k)||(c.track({type:2,doc:k}),n=!0,(h&&this.tc(k,h)>0||i&&0>this.tc(k,i))&&(g=!0)):!j&&k?(c.track({type:0,doc:k}),n=!0):j&&!k&&(c.track({type:1,doc:j}),n=!0,(h||i)&&(g=!0)),n&&(k?(f=f.add(k),e=m?e.add(a):e.delete(a)):(f=f.delete(a),e=e.delete(a)))}),null!==this.query.limit)for(;f.size>this.query.limit;){let j="F"===this.query.limitType?f.last():f.first();f=f.delete(j.key),e=e.delete(j.key),c.track({type:1,doc:j})}return{ec:f,ic:c,zi:g,mutatedKeys:e}}rc(a,b){return a.hasLocalMutations&&b.hasCommittedMutations&&!b.hasLocalMutations}applyChanges(a,b,c){let d=this.ec;this.ec=a.ec,this.mutatedKeys=a.mutatedKeys;let e=a.ic.xu();e.sort((a,b)=>(function(a,b){let c=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dn()}};return c(a)-c(b)})(a.type,b.type)||this.tc(a.doc,b.doc)),this.oc(c);let f=b?this.uc():[],g=0===this.Zu.size&&this.current?1:0,h=g!==this.Xu;return(this.Xu=g,0!==e.length||h)?{snapshot:new j_(this.query,a.ec,d,e,a.mutatedKeys,0===g,h,!1,!!c&&c.resumeToken.approximateByteSize()>0),cc:f}:{cc:f}}Mu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({ec:this.ec,ic:new j$,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(a){return!this.Yu.has(a)&&!!this.ec.has(a)&&!this.ec.get(a).hasLocalMutations}oc(a){a&&(a.addedDocuments.forEach(a=>this.Yu=this.Yu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Yu=this.Yu.delete(a)),this.current=a.current)}uc(){if(!this.current)return[];let a=this.Zu;this.Zu=f4(),this.ec.forEach(a=>{this.ac(a.key)&&(this.Zu=this.Zu.add(a.key))});let b=[];return a.forEach(a=>{this.Zu.has(a)||b.push(new kb(a))}),this.Zu.forEach(c=>{a.has(c)||b.push(new ka(c))}),b}hc(a){this.Yu=a.ir,this.Zu=f4();let b=this.sc(a.documents);return this.applyChanges(b,!0)}lc(){return j_.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class kd{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class ke{constructor(a){this.key=a,this.fc=!1}}class kf{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.dc={},this.wc=new fW(a=>fQ(a),fP),this._c=new Map,this.mc=new Set,this.gc=new eu(dL.comparator),this.yc=new Map,this.Ic=new iA,this.Tc={},this.Ec=new Map,this.Ac=ic.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function kg(a,b){let c=kI(a),d,e,f=c.wc.get(b);if(f)d=f.targetId,c.sharedClientState.addLocalQueryTarget(d),e=f.view.lc();else{let g=await iX(c.localStore,fM(b)),h=c.sharedClientState.addLocalQueryTarget(g.targetId);d=g.targetId,e=await kh(c,b,d,"current"===h,g.resumeToken),c.isPrimaryClient&&jx(c.remoteStore,g)}return e}async function kh(a,b,c,d,e){a.Rc=(b,c,d)=>(async function(a,b,c,d){let e=b.view.sc(c);e.zi&&(e=await iZ(a.localStore,b.query,!1).then(({documents:a})=>b.view.sc(a,e)));let f=d&&d.targetChanges.get(b.targetId),g=b.view.applyChanges(e,a.isPrimaryClient,f);return kt(a,b.targetId,g.cc),g.snapshot})(a,b,c,d);let f=await iZ(a.localStore,b,!0),g=new kc(b,f.ir),h=g.sc(f.documents),i=gR.createSynthesizedTargetChangeForCurrentChange(c,d&&"Offline"!==a.onlineState,e),j=g.applyChanges(h,a.isPrimaryClient,i);kt(a,c,j.cc);let k=new kd(b,c,g);return a.wc.set(b,k),a._c.has(c)?a._c.get(c).push(b):a._c.set(c,[b]),j.snapshot}async function ki(a,b){var c;let d=c=a,e=d.wc.get(b),f=d._c.get(e.targetId);if(f.length>1)return d._c.set(e.targetId,f.filter(a=>!fP(a,b))),void d.wc.delete(b);d.isPrimaryClient?(d.sharedClientState.removeLocalQueryTarget(e.targetId),d.sharedClientState.isActiveQueryTarget(e.targetId)||await iY(d.localStore,e.targetId,!1).then(()=>{d.sharedClientState.clearQueryState(e.targetId),jy(d.remoteStore,e.targetId),kr(d,e.targetId)}).catch(dY)):(kr(d,e.targetId),await iY(d.localStore,e.targetId,!0))}async function kj(a,b,c){let d=kJ(a);try{var e,f,g;let h=await function(a,b){var c;let d=c=a,e=dF.now(),f=b.reduce((a,b)=>a.add(b.key),f4()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=fX,i=f4();return d.Zi.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(c=>{g=c;let f=[];for(let h of b){let i=gt(h,g.get(h.key).overlayedDocument);null!=i&&f.push(new gw(h.key,i,e6(i.value.mapValue),gn.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,f,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:f$(g)}))}(d.localStore,b),i;d.sharedClientState.addPendingMutation(h.batchId),e=d,f=h.batchId,g=c,(i=e.Tc[e.currentUser.toKey()])||(i=new eu(dC)),i=i.insert(f,g),e.Tc[e.currentUser.toKey()]=i,await kw(d,h.changes),await jK(d.remoteStore)}catch(j){let k=jY(j,"Failed to persist write");c.reject(k)}}async function kk(a,b){var c;let d=c=a;try{let e=await function(a,b){var c;let d=c=a,e=b.snapshotVersion,f=d.Ji;return d.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{let c=d.Zi.newChangeBuffer({trackRemovals:!0});f=d.Ji;let g=[];b.targetChanges.forEach((c,h)=>{var i,j,k;let l=f.get(h);if(!l)return;g.push(d.Bs.removeMatchingKeys(a,c.removedDocuments,h).next(()=>d.Bs.addMatchingKeys(a,c.addedDocuments,h)));let m=l.withSequenceNumber(a.currentSequenceNumber);null!==b.targetMismatches.get(h)?m=m.withResumeToken(eC.EMPTY_BYTE_STRING,dG.min()).withLastLimboFreeSnapshotVersion(dG.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,e)),f=f.insert(h,m),i=l,j=m,k=c,(0===i.resumeToken.approximateByteSize()||j.snapshotVersion.toMicroseconds()-i.snapshotVersion.toMicroseconds()>=3e8||k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0)&&g.push(d.Bs.updateTargetData(a,m))});let h=fX,i=f4();if(b.documentUpdates.forEach(c=>{b.resolvedLimboDocuments.has(c)&&g.push(d.persistence.referenceDelegate.updateLimboDocument(a,c))}),g.push(iV(a,c,b.documentUpdates).next(a=>{h=a.nr,i=a.sr})),!e.isEqual(dG.min())){let j=d.Bs.getLastRemoteSnapshotVersion(a).next(b=>d.Bs.setTargetsMetadata(a,a.currentSequenceNumber,e));g.push(j)}return dZ.waitFor(g).next(()=>c.apply(a)).next(()=>d.localDocuments.getLocalViewOfDocuments(a,h,i)).next(()=>h)}).then(a=>(d.Ji=f,a))}(d.localStore,b);b.targetChanges.forEach((a,b)=>{var c,e,f;let g=d.yc.get(b);g&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||dn(),a.addedDocuments.size>0?g.fc=!0:a.modifiedDocuments.size>0?(e=g.fc)||dn():a.removedDocuments.size>0&&(g.fc||dn(),g.fc=!1))}),await kw(d,e,b)}catch(f){await dY(f)}}function kl(a,b,c){var d;let e=d=a;if(e.isPrimaryClient&&0===c|| !e.isPrimaryClient&&1===c){let f=[];e.wc.forEach((a,c)=>{let d=c.view.Mu(b);d.snapshot&&f.push(d.snapshot)}),function(a,b){var c;let d=c=a;d.onlineState=b;let e=!1;d.queries.forEach((a,c)=>{for(let d of c.listeners)d.Mu(b)&&(e=!0)}),e&&j6(d)}(e.eventManager,b),f.length&&e.dc.nu(f),e.onlineState=b,e.isPrimaryClient&&e.sharedClientState.setOnlineState(b)}}async function km(a,b,c){var d;let e=d=a;e.sharedClientState.updateQueryState(b,"rejected",c);let f=e.yc.get(b),g=f&&f.key;if(g){let h=new eu(dL.comparator);h=h.insert(g,e7.newNoDocument(g,dG.min()));let i=f4().add(g),j=new gQ(dG.min(),new Map,new eu(dC),h,i);await kk(e,j),e.gc=e.gc.remove(g),e.yc.delete(b),kv(e)}else await iY(e.localStore,b,!1).then(()=>kr(e,b,c)).catch(dY)}async function kn(a,b){var c;let d=c=a,e=b.batch.batchId;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let c=b.batch.keys(),e=d.Zi.newChangeBuffer({trackRemovals:!0});return(function(a,b,c,d){let e=c.batch,f=e.keys(),g=dZ.resolve();return f.forEach(a=>{g=g.next(()=>d.getEntry(b,a)).next(b=>{var f;let g=c.docVersions.get(a);null!==g||dn(),0>b.version.compareTo(g)&&(e.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(b,e))})(d,a,b,e).next(()=>e.apply(a)).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b.batch.batchId)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(a){let b=f4();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(b=b.add(a.batch.mutations[c].key));return b}(b))).next(()=>d.localDocuments.getDocuments(a,c))})}(d.localStore,b);kq(d,e,null),kp(d,e),d.sharedClientState.updateMutationState(e,"acknowledged"),await kw(d,f)}catch(g){await dY(g)}}async function ko(a,b,c){var d;let e=d=a;try{let f=await function(a,b){var c;let d=c=a;return d.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let c;return d.mutationQueue.lookupMutationBatch(a,b).next(b=>{var e;return null!==b||dn(),c=b.keys(),d.mutationQueue.removeMutationBatch(a,b)}).next(()=>d.mutationQueue.performConsistencyCheck(a)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(a,c,b)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,c)).next(()=>d.localDocuments.getDocuments(a,c))})}(e.localStore,b);kq(e,b,c),kp(e,b),e.sharedClientState.updateMutationState(b,"rejected",c),await kw(e,f)}catch(g){await dY(g)}}function kp(a,b){(a.Ec.get(b)||[]).forEach(a=>{a.resolve()}),a.Ec.delete(b)}function kq(a,b,c){var d;let e=d=a,f=e.Tc[e.currentUser.toKey()];if(f){let g=f.get(b);g&&(c?g.reject(c):g.resolve(),f=f.remove(b)),e.Tc[e.currentUser.toKey()]=f}}function kr(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a._c.get(b)))a.wc.delete(d),c&&a.dc.Pc(d,c);a._c.delete(b),a.isPrimaryClient&&a.Ic.Is(b).forEach(b=>{a.Ic.containsKey(b)||ks(a,b)})}function ks(a,b){a.mc.delete(b.path.canonicalString());let c=a.gc.get(b);null!==c&&(jy(a.remoteStore,c),a.gc=a.gc.remove(b),a.yc.delete(c),kv(a))}function kt(a,b,c){for(let d of c)d instanceof ka?(a.Ic.addReference(d.key,b),ku(a,d)):d instanceof kb?(dj("SyncEngine","Document no longer in limbo: "+d.key),a.Ic.removeReference(d.key,b),a.Ic.containsKey(d.key)||ks(a,d.key)):dn()}function ku(a,b){let c=b.key,d=c.path.canonicalString();a.gc.get(c)||a.mc.has(d)||(dj("SyncEngine","New document in limbo: "+c),a.mc.add(d),kv(a))}function kv(a){for(;a.mc.size>0&&a.gc.size<a.maxConcurrentLimboResolutions;){let b=a.mc.values().next().value;a.mc.delete(b);let c=new dL(dI.fromString(b)),d=a.Ac.next();a.yc.set(d,new ke(c)),a.gc=a.gc.insert(c,d),jx(a.remoteStore,new hq(fM(fG(c.path)),d,"TargetPurposeLimboResolution",d9.ct))}}async function kw(a,b,c){var d;let e=d=a,f=[],g=[],h=[];e.wc.isEmpty()||(e.wc.forEach((a,d)=>{h.push(e.Rc(d,b,c).then(a=>{if((a||c)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,(null==a?void 0:a.fromCache)?"not-current":"current"),a){f.push(a);let b=iP.Li(d.targetId,a);g.push(b)}}))}),await Promise.all(h),e.dc.nu(f),await async function(a,b){var c;let d=c=a;try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>dZ.forEach(b,b=>dZ.forEach(b.Fi,c=>d.persistence.referenceDelegate.addReference(a,b.targetId,c)).next(()=>dZ.forEach(b.Bi,c=>d.persistence.referenceDelegate.removeReference(a,b.targetId,c)))))}catch(e){if(!d2(e))throw e;dj("LocalStore","Failed to update sequence numbers: "+e)}for(let f of b){let g=f.targetId;if(!f.fromCache){let h=d.Ji.get(g),i=h.snapshotVersion,j=h.withLastLimboFreeSnapshotVersion(i);d.Ji=d.Ji.insert(g,j)}}}(e.localStore,g))}async function kx(a,b){var c,d,e;let f=c=a;if(!f.currentUser.isEqual(b)){dj("SyncEngine","User change. New user:",b.toKey());let g=await iT(f.localStore,b);f.currentUser=b,e="'waitForPendingWrites' promise is rejected due to a user change.",(d=f).Ec.forEach(a=>{a.forEach(a=>{a.reject(new dq(dp.CANCELLED,e))})}),d.Ec.clear(),f.sharedClientState.handleUserChange(b,g.removedBatchIds,g.addedBatchIds),await kw(f,g.er)}}function ky(a,b){var c;let d=c=a,e=d.yc.get(b);if(e&&e.fc)return f4().add(e.key);{let f=f4(),g=d._c.get(b);if(!g)return f;for(let h of g){let i=d.wc.get(h);f=f.unionWith(i.view.nc)}return f}}async function kz(a,b){var c;let d=c=a,e=await iZ(d.localStore,b.query,!0),f=b.view.hc(e);return d.isPrimaryClient&&kt(d,b.targetId,f.cc),f}async function kA(a,b){var c;let d=c=a;return i_(d.localStore,b).then(a=>kw(d,a))}async function kB(a,b,c,d){var e;let f=e=a,g=await function(a,b){var c,d;let e=c=a,f=d=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",a=>f.Sn(a,b).next(b=>b?e.localDocuments.getDocuments(a,b):dZ.resolve(null)))}(f.localStore,b);null!==g?("pending"===c?await jK(f.remoteStore):"acknowledged"===c||"rejected"===c?(kq(f,b,d||null),kp(f,b),function(a,b){var c,d;(d=(c=a).mutationQueue).Cn(b)}(f.localStore,b)):dn(),await kw(f,g)):dj("SyncEngine","Cannot apply mutation batch with id: "+b)}async function kC(a,b){var c;let d=c=a;if(kI(d),kJ(d),!0===b&& !0!==d.vc){let e=d.sharedClientState.getAllActiveQueryTargets(),f=await kD(d,e.toArray());for(let g of(d.vc=!0,await jU(d.remoteStore,!0),f))jx(d.remoteStore,g)}else if(!1===b&& !1!==d.vc){let h=[],i=Promise.resolve();d._c.forEach((a,b)=>{d.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(kr(d,b),iY(d.localStore,b,!0))),jy(d.remoteStore,b)}),await i,await kD(d,h),function(a){var b;let c=b=a;c.yc.forEach((a,b)=>{jy(c.remoteStore,b)}),c.Ic.Ts(),c.yc=new Map,c.gc=new eu(dL.comparator)}(d),d.vc=!1,await jU(d.remoteStore,!1)}}async function kD(a,b,c){var d;let e=d=a,f=[],g=[];for(let h of b){let i,j=e._c.get(h);if(j&&0!==j.length)for(let k of(i=await iX(e.localStore,fM(j[0])),j)){let l=e.wc.get(k),m=await kz(e,l);m.snapshot&&g.push(m.snapshot)}else{let n=await i$(e.localStore,h);i=await iX(e.localStore,n),await kh(e,kE(n),h,!1,i.resumeToken)}f.push(i)}return e.dc.nu(g),f}function kE(a){return fF(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function kF(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).$i()}async function kG(a,b,c,d){var e;let f=e=a;if(f.vc)return void dj("SyncEngine","Ignoring unexpected query state notification.");let g=f._c.get(b);if(g&&g.length>0)switch(c){case"current":case"not-current":{let h=await i_(f.localStore,fT(g[0])),i=gQ.createSynthesizedRemoteEventForCurrentChange(b,"current"===c,eC.EMPTY_BYTE_STRING);await kw(f,h,i);break}case"rejected":await iY(f.localStore,b,!0),kr(f,b,d);break;default:dn()}}async function kH(a,b,c){let d=kI(a);if(d.vc){for(let e of b){if(d._c.has(e)){dj("SyncEngine","Adding an already active target "+e);continue}let f=await i$(d.localStore,e),g=await iX(d.localStore,f);await kh(d,kE(f),g.targetId,!1,g.resumeToken),jx(d.remoteStore,g)}for(let h of c)d._c.has(h)&&await iY(d.localStore,h,!1).then(()=>{jy(d.remoteStore,h),kr(d,h)}).catch(dY)}}function kI(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applyRemoteEvent=kk.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=ky.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=km.bind(null,c),c.dc.nu=j4.bind(null,c.eventManager),c.dc.Pc=j5.bind(null,c.eventManager),c}function kJ(a){var b;let c=b=a;return c.remoteStore.remoteSyncer.applySuccessfulWrite=kn.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=ko.bind(null,c),c}class kK{constructor(){this.synchronizeTabs=!1}async initialize(a){this.serializer=jn(a.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(a),this.persistence=this.createPersistence(a),await this.persistence.start(),this.localStore=this.createLocalStore(a),this.gcScheduler=this.createGarbageCollectionScheduler(a,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(a,this.localStore)}createGarbageCollectionScheduler(a,b){return null}createIndexBackfillerScheduler(a,b){return null}createLocalStore(a){return iS(this.persistence,new iQ,a.initialUser,this.serializer)}createPersistence(a){return new iF(iH.zs,this.serializer)}createSharedClientState(a){return new jc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kL extends null{constructor(a,b,c){super(),this.Vc=a,this.cacheSizeBytes=b,this.forceOwnership=c,this.synchronizeTabs=!1}async initialize(a){await super.initialize(a),await this.Vc.initialize(this,a),await kJ(this.Vc.syncEngine),await jK(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(a){return iS(this.persistence,new iQ,a.initialUser,this.serializer)}createGarbageCollectionScheduler(a,b){let c=this.persistence.referenceDelegate.garbageCollector;return new ij(c,a.asyncQueue,b)}createIndexBackfillerScheduler(a,b){let c=new d8(b,this.persistence);return new d7(a.asyncQueue,c)}createPersistence(a){let b=iO(a.databaseInfo.databaseId,a.databaseInfo.persistenceKey),c=void 0!==this.cacheSizeBytes?h4.withCacheSize(this.cacheSizeBytes):h4.DEFAULT;return new iL(this.synchronizeTabs,b,a.clientId,c,a.asyncQueue,jl(),jm(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(a){return new jc}}class kM extends null{constructor(a,b){super(a,b,!1),this.Vc=a,this.cacheSizeBytes=b,this.synchronizeTabs=!0}async initialize(a){await super.initialize(a);let b=this.Vc.syncEngine;this.sharedClientState instanceof jb&&(this.sharedClientState.syncEngine={jr:kB.bind(null,b),zr:kG.bind(null,b),Wr:kH.bind(null,b),$i:kF.bind(null,b),Qr:kA.bind(null,b)},await this.sharedClientState.start()),await this.persistence.Ii(async a=>{await kC(this.Vc.syncEngine,a),this.gcScheduler&&(a&&!this.gcScheduler.started?this.gcScheduler.start():a||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(a&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():a||this.indexBackfillerScheduler.stop())})}createSharedClientState(a){let b=jl();if(!jb.D(b))throw new dq(dp.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let c=iO(a.databaseInfo.databaseId,a.databaseInfo.persistenceKey);return new jb(b,a.asyncQueue,c,a.clientId,a.initialUser)}}class kN{async initialize(a,b){this.localStore||(this.localStore=a.localStore,this.sharedClientState=a.sharedClientState,this.datastore=this.createDatastore(b),this.remoteStore=this.createRemoteStore(b),this.eventManager=this.createEventManager(b),this.syncEngine=this.createSyncEngine(b,!a.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>kl(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=kx.bind(null,this.syncEngine),await jU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new j1}createDatastore(a){var b,c,d,e,f;let g=jn(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new jk(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new js(c,d,e,f)}createRemoteStore(a){var b,c,d,e,f;return b=this.localStore,c=this.datastore,d=a.asyncQueue,e=a=>kl(this.syncEngine,a,0),f=je.D()?new je:new jd,new ju(b,c,d,e,f)}createSyncEngine(a,b){return function(a,b,c,d,e,f,g){let h=new kf(a,b,c,d,e,f);return g&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(a){var b;let c=b=a;dj("RemoteStore","RemoteStore shutting down."),c.vu.add(5),await jw(c),c.Pu.shutdown(),c.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
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
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class kO{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Sc(this.observer.next,a)}error(a){this.observer.error?this.Sc(this.observer.error,a):dk("Uncaught Error in snapshot listener:",a.toString())}Dc(){this.muted=!0}Sc(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
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
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class kP{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new dq(dp.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let b=await async function(a,b){var c;let d=c=a,e=hb(d.serializer)+"/documents",f={documents:b.map(a=>g7(d.serializer,a))},g=await d.vo("BatchGetDocuments",e,f,b.length),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.serializer,"found"in(c=a)?function(a,b){var c;b.found||dn(),b.found.name,b.found.updateTime;let d=g8(a,b.found.name),e=g4(b.found.updateTime),f=b.found.createTime?g4(b.found.createTime):dG.min(),g=new e5({mapValue:{fields:b.found.fields}});return e7.newFoundDocument(d,e,f,g)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||dn(),!b.readTime&&dn();let e=g8(a,b.missing),f=g4(b.readTime);return e7.newNoDocument(e,f)}(b,c):dn());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||dn(),i.push(c)}),i}(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new gA(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=dL.fromPath(b);this.mutations.push(new gB(c,this.precondition(c)))}),await async function(a,b){var c;let d=c=a,e=hb(d.serializer)+"/documents",f={writes:b.map(a=>hf(d.serializer,a))};await d.Io("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw dn();b=dG.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new dq(dp.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?b.isEqual(dG.min())?gn.exists(!1):gn.updateTime(b):gn.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(dG.min()))throw new dq(dp.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gn.updateTime(b)}return gn.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
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
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the //
 * pieces of the client SDK architecture. It is responsible for creating the //
 * async queue that is shared by all of the other components in the system. //
 */ class kQ{constructor(a,b,c,d){this.authCredentials=a,this.appCheckCredentials=b,this.asyncQueue=c,this.databaseInfo=d,this.user=df.UNAUTHENTICATED,this.clientId=dB.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async a=>{dj("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(c,a=>(dj("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new dq(dp.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=jY(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function kR(a,b){a.asyncQueue.verifyOperationInProgress(),dj("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await iT(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a._offlineComponents=b}async function kS(a,b){a.asyncQueue.verifyOperationInProgress();let c=await kU(a);dj("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>jT(b.remoteStore,a)),a.setAppCheckTokenChangeListener((a,c)=>jT(b.remoteStore,c)),a._onlineComponents=b}function kT(a){return"FirebaseError"===a.name?a.code===dp.FAILED_PRECONDITION||a.code===dp.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&a instanceof DOMException)||22===a.code||20===a.code||11===a.code}async function kU(a){if(!a._offlineComponents){if(a._uninitializedComponentsProvider){dj("FirestoreClient","Using user provided OfflineComponentProvider");try{await kR(a,a._uninitializedComponentsProvider._offline)}catch(b){let c=b;if(!kT(c))throw c;dl("Error using user provided cache. Falling back to memory cache: "+c),await kR(a,new kK)}}else dj("FirestoreClient","Using default OfflineComponentProvider"),await kR(a,new kK)}return a._offlineComponents}async function kV(a){return a._onlineComponents||(a._uninitializedComponentsProvider?(dj("FirestoreClient","Using user provided OnlineComponentProvider"),await kS(a,a._uninitializedComponentsProvider._online)):(dj("FirestoreClient","Using default OnlineComponentProvider"),await kS(a,new kN))),a._onlineComponents}async function kW(a){let b=await kV(a),c=b.eventManager;return c.onListen=kg.bind(null,b.syncEngine),c.onUnlisten=ki.bind(null,b.syncEngine),c}/**
 * @license
 * Copyright 2023 Google LLC
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
 */ /**
 * Compares two `ExperimentalLongPollingOptions` objects for equality.
 */ /**
 * Creates and returns a new `ExperimentalLongPollingOptions` with the same
 * option values as the given instance.
 */ function kX(a){let b={};return void 0!==a.timeoutSeconds&&(b.timeoutSeconds=a.timeoutSeconds),b}/**
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
 */ let kY=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
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
 */ function kZ(a,b,c){if(!c)throw new dq(dp.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function k$(a){if(!dL.isDocumentKey(a))throw new dq(dp.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function k_(a){if(dL.isDocumentKey(a))throw new dq(dp.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function k0(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":dn()}function k1(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new dq(dp.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=k0(a);throw new dq(dp.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
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
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class k2{constructor(a){var b,c;if(void 0===a.host){if(void 0!==a.ssl)throw new dq(dp.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,this.cache=a.localCache,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new dq(dp.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}(function(a,b,c,d){if(!0===b&& !0===d)throw new dq(dp.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)})("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===a.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kX(null!==(c=a.experimentalLongPollingOptions)&& void 0!==c?c:{}),function(a){if(void 0!==a.timeoutSeconds){if(isNaN(a.timeoutSeconds))throw new dq(dp.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new dq(dp.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new dq(dp.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!a.useFetchStreams}isEqual(a){var b,c;return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&(b=this.experimentalLongPollingOptions,c=a.experimentalLongPollingOptions,b.timeoutSeconds===c.timeoutSeconds)&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}class k3{constructor(a,b,c,d){this._authCredentials=a,this._appCheckCredentials=b,this._databaseId=c,this._app=d,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k2({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new dq(dp.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new dq(dp.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new k2(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new dt;switch(a.type){case"firstParty":return new dx(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new dq(dp.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=kY.get(a);b&&(dj("ComponentProvider","Removing Datastore"),kY.delete(a),b.terminate())}(this),Promise.resolve()}}/**
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
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class k4{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new k6(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new k4(this.firestore,a,this._key)}}class k5{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new k5(this.firestore,a,this._query)}}class k6 extends k5{constructor(a,b,c){super(a,b,fG(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new k4(this.firestore,null,new dL(a))}withConverter(a){return new k6(this.firestore,a,this._path)}}function k7(a,b,...c){if(a=(0,o.m9)(a),kZ("collection","path",b),a instanceof k3){let d=dI.fromString(b,...c);return k_(d),new k6(a,null,d)}{if(!(a instanceof k4||a instanceof k6))throw new dq(dp.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dI.fromString(b,...c));return k_(e),new k6(a.firestore,null,e)}}function k8(a,b,...c){if(a=(0,o.m9)(a),1===arguments.length&&(b=dB.A()),kZ("doc","path",b),a instanceof k3){let d=dI.fromString(b,...c);return k$(d),new k4(a,null,new dL(d))}{if(!(a instanceof k4||a instanceof k6))throw new dq(dp.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dI.fromString(b,...c));return k$(e),new k4(a.firestore,a instanceof k6?a.converter:null,new dL(e))}}function k9(a,b){return a=(0,o.m9)(a),b=(0,o.m9)(b),(a instanceof k4||a instanceof k6)&&(b instanceof k4||b instanceof k6)&&a.firestore===b.firestore&&a.path===b.path&&a.converter===b.converter}function la(a,b){return a=(0,o.m9)(a),b=(0,o.m9)(b),a instanceof k5&&b instanceof k5&&a.firestore===b.firestore&&fP(a._query,b._query)&&a.converter===b.converter}function lb(a){return function(a,b){if("object"!=typeof a||null===a)return!1;let c=a;for(let d of b)if(d in c&&"function"==typeof c[d])return!0;return!1}(a,["next","error","complete"])}class lc extends k3{constructor(a,b,c,d){super(a,b,c,d),this.type="firestore",this._queue=new /**
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
 */ class{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new jo(this,"async_queue_retry"),this.Xc=()=>{let a=jm();a&&dj("AsyncQueue","Visibility state changed to "+a.visibilityState),this.qo.Mo()};let a=jm();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.Zc(),this.ta(a)}enterRestrictedMode(a){if(!this.jc){this.jc=!0,this.Jc=a||!1;let b=jm();b&&"function"==typeof b.removeEventListener&&b.removeEventListener("visibilitychange",this.Xc)}}enqueue(a){if(this.Zc(),this.jc)return new Promise(()=>{});let b=new dr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Qc.push(a),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(a){if(!d2(a))throw a;dj("AsyncQueue","Operation failed with retryable error: "+a)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(a){let b=this.Gc.then(()=>(this.Hc=!0,a().catch(a=>{var b;this.Wc=a,this.Hc=!1;let c,d=(c=(b=a).message||"",b.stack&&(c=b.stack.includes(b.message)?b.stack:b.message+"\n"+b.stack),c);throw dk("INTERNAL UNHANDLED ERROR: ",d),a}).then(a=>(this.Hc=!1,a))));return this.Gc=b,b}enqueueAfterDelay(a,b,c){this.Zc(),this.Yc.indexOf(a)> -1&&(b=0);let d=jX.createAndSchedule(this,a,b,c,a=>this.na(a));return this.zc.push(d),d}Zc(){this.Wc&&dn()}verifyOperationInProgress(){}async sa(){let a;do await (a=this.Gc);while(a!==this.Gc)}ia(a){for(let b of this.zc)if(b.timerId===a)return!0;return!1}ra(a){return this.sa().then(()=>{for(let b of(this.zc.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.zc))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.sa()})}oa(a){this.Yc.push(a)}na(a){let b=this.zc.indexOf(a);this.zc.splice(b,1)}},this._persistenceKey=(null==d?void 0:d.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lf(this),this._firestoreClient.terminate()}}function ld(a,b){let c="object"==typeof a?a:(0,l.Mq)(),d=(0,l.qX)(c,"firestore").getImmediate({identifier:"string"==typeof a?a:b||"(default)"});if(!d._initialized){let e=(0,o.P0)("firestore");e&&function(a,b,c,d={}){var e;let f=(a=k1(a,k3))._getSettings(),g=`${b}:${c}`;if("firestore.googleapis.com"!==f.host&&f.host!==g&&dl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),a._setSettings(Object.assign(Object.assign({},f),{host:g,ssl:!1})),d.mockUserToken){let h,i;if("string"==typeof d.mockUserToken)h=d.mockUserToken,i=df.MOCK_USER;else{h=(0,o.Sg)(d.mockUserToken,null===(e=a._app)|| void 0===e?void 0:e.options.projectId);let j=d.mockUserToken.sub||d.mockUserToken.user_id;if(!j)throw new dq(dp.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new df(j)}a._authCredentials=new du(new ds(h,i))}}(d,...e)}return d}function le(a){return a._firestoreClient||lf(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function lf(a){var b,c,d,e,f,g,h;let i=a._freezeSettings(),j=(e=a._databaseId,f=(null===(b=a._app)|| void 0===b?void 0:b.options.appId)||"",g=a._persistenceKey,h=i,new eK(e,f,g,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,kX(h.experimentalLongPollingOptions),h.useFetchStreams));a._firestoreClient=new kQ(a._authCredentials,a._appCheckCredentials,a._queue,j),(null===(c=i.cache)|| void 0===c?void 0:c._offlineComponentProvider)&&(null===(d=i.cache)|| void 0===d?void 0:d._onlineComponentProvider)&&(a._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */ /**
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
 */ /**
 * Represents an aggregation that can be performed by Firestore.
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
class lg{constructor(a="count",b){this._aggregateType=a,this._internalFieldPath=b,this.type="AggregateField"}}class lh{constructor(a,b,c){this._userDataWriter=b,this._data=c,this.type="AggregateQuerySnapshot",this.query=a}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */ /**
 * An immutable object representing an array of bytes.
 */ class li{constructor(a){this._byteString=a}static fromBase64String(a){try{return new li(eC.fromBase64String(a))}catch(b){throw new dq(dp.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new li(eC.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
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
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class lj{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new dq(dp.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dK(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}function lk(){return new lj("__name__")}/**
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
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class ll{constructor(a){this._methodName=a}}/**
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
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class lm{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new dq(dp.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new dq(dp.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return dC(this._lat,a._lat)||dC(this._long,a._long)}}/**
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
 */ let ln=/^__.*__$/;class lo{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new gw(a,this.data,this.fieldMask,b,this.fieldTransforms):new gv(a,this.data,b,this.fieldTransforms)}}class lp{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new gw(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function lq(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dn()}}class lr{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.serializer=c,this.ignoreUndefinedProperties=d,void 0===e&&this.ua(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(a){return new lr(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.aa({path:c,la:!1});return d.fa(a),d}da(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.aa({path:c,la:!1});return d.ua(),d}wa(a){return this.aa({path:void 0,la:!0})}_a(a){return lL(a,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}ua(){if(this.path)for(let a=0;a<this.path.length;a++)this.fa(this.path.get(a))}fa(a){if(0===a.length)throw this._a("Document fields must not be empty");if(lq(this.ca)&&ln.test(a))throw this._a('Document fields cannot begin and end with "__"')}}class ls{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.serializer=c||jn(a)}ya(a,b,c,d=!1){return new lr({ca:a,methodName:b,ga:c,path:dK.emptyPath(),la:!1,ma:d},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lt(a){let b=a._freezeSettings(),c=jn(a._databaseId);return new ls(a._databaseId,!!b.ignoreUndefinedProperties,c)}function lu(a,b,c,d,e,f={}){let g=a.ya(f.merge||f.mergeFields?2:0,b,c,e);lH("Data must be an object, but it was:",g,d);let h=lF(d,g),i,j;if(f.merge)i=new eA(g.fieldMask),j=g.fieldTransforms;else if(f.mergeFields){let k=[];for(let l of f.mergeFields){let m=lI(b,l,c);if(!g.contains(m))throw new dq(dp.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lM(k,m)||k.push(m)}i=new eA(k),j=g.fieldTransforms.filter(a=>i.covers(a.field))}else i=null,j=g.fieldTransforms;return new lo(new e5(h),i,j)}class lv extends ll{_toFieldTransform(a){if(2!==a.ca)throw 1===a.ca?a._a(`${this._methodName}() can only appear at the top level of your update data`):a._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof lv}}function lw(a,b,c){return new lr({ca:3,ga:b.settings.ga,methodName:a._methodName,la:c},b.databaseId,b.serializer,b.ignoreUndefinedProperties)}class lx extends ll{_toFieldTransform(a){return new gl(a.path,new gd)}isEqual(a){return a instanceof lx}}class ly extends ll{constructor(a,b){super(a),this.pa=b}_toFieldTransform(a){let b=lw(this,a,!0),c=this.pa.map(a=>lE(a,b)),d=new ge(c);return new gl(a.path,d)}isEqual(a){return this===a}}class lz extends ll{constructor(a,b){super(a),this.pa=b}_toFieldTransform(a){let b=lw(this,a,!0),c=this.pa.map(a=>lE(a,b)),d=new gg(c);return new gl(a.path,d)}isEqual(a){return this===a}}class lA extends ll{constructor(a,b){super(a),this.Ia=b}_toFieldTransform(a){let b=new gi(a.serializer,f8(a.serializer,this.Ia));return new gl(a.path,b)}isEqual(a){return this===a}}function lB(a,b,c,d){let e=a.ya(1,b,c);lH("Data must be an object, but it was:",e,d);let f=[],g=e5.empty();es(d,(a,d)=>{let h=lK(b,a,c);d=(0,o.m9)(d);let i=e.da(h);if(d instanceof lv)f.push(h);else{let j=lE(d,i);null!=j&&(f.push(h),g.set(h,j))}});let h=new eA(f);return new lp(g,h,e.fieldTransforms)}function lC(a,b,c,d,e,f){let g=a.ya(1,b,c),h=[lI(b,d,c)],i=[e];if(f.length%2!=0)throw new dq(dp.INVALID_ARGUMENT,`Function ${b}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let j=0;j<f.length;j+=2)h.push(lI(b,f[j])),i.push(f[j+1]);let k=[],l=e5.empty();for(let m=h.length-1;m>=0;--m)if(!lM(k,h[m])){let n=h[m],p=i[m];p=(0,o.m9)(p);let q=g.da(n);if(p instanceof lv)k.push(n);else{let r=lE(p,q);null!=r&&(k.push(n),l.set(n,r))}}let s=new eA(k);return new lp(l,s,g.fieldTransforms)}function lD(a,b,c,d=!1){return lE(c,a.ya(d?4:3,b))}function lE(a,b){if(lG(a=(0,o.m9)(a)))return lH("Unsupported field value:",b,a),lF(a,b);if(a instanceof ll)return function(a,b){if(!lq(b.ca))throw b._a(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b._a(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.la&&4!==b.ca)throw b._a("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=lE(e,b.wa(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,o.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return f8(b.serializer,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=dF.fromDate(a);return{timestampValue:g2(b.serializer,c)}}if(a instanceof dF){let d=new dF(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:g2(b.serializer,d)}}if(a instanceof lm)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof li)return{bytesValue:g3(b.serializer,a._byteString)};if(a instanceof k4){let e=b.databaseId,f=a.firestore._databaseId;if(!f.isEqual(e))throw b._a(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:g5(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b._a(`Unsupported field value: ${k0(a)}`)}(a,b)}function lF(a,b){let c={};return et(a)?b.path&&b.path.length>0&&b.fieldMask.push(b.path):es(a,(a,d)=>{let e=lE(d,b.ha(a));null!=e&&(c[a]=e)}),{mapValue:{fields:c}}}function lG(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof dF||a instanceof lm||a instanceof li||a instanceof k4||a instanceof ll)}function lH(a,b,c){var d;if(!lG(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=k0(c);throw"an object"===e?b._a(a+" a custom object"):b._a(a+" "+e)}}function lI(a,b,c){if((b=(0,o.m9)(b))instanceof lj)return b._internalPath;if("string"==typeof b)return lK(a,b);throw lL("Field path arguments must be of type string or ",a,!1,void 0,c)}let lJ=RegExp("[~\\*/\\[\\]]");function lK(a,b,c){if(b.search(lJ)>=0)throw lL(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new lj(...b.split("."))._internalPath}catch(d){throw lL(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function lL(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new dq(dp.INVALID_ARGUMENT,h+a+i)}function lM(a,b){return a.some(a=>a.isEqual(b))}/**
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
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class lN{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new k4(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new lO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(lP("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class lO extends lN{data(){return super.data()}}function lP(a,b){return"string"==typeof b?lK(a,b):b instanceof lj?b._internalPath:b._delegate._internalPath}/**
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
 */ function lQ(a){if("L"===a.limitType&&0===a.explicitOrderBy.length)throw new dq(dp.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lR{}class lS extends lR{}function lT(a,b,...c){let d=[];for(let e of(b instanceof lR&&d.push(b),function(a){let b=a.filter(a=>a instanceof lW).length,c=a.filter(a=>a instanceof lU).length;if(b>1||b>0&&c>0)throw new dq(dp.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(d=d.concat(c)),d))a=e._apply(a);return a}class lU extends lS{constructor(a,b,c){super(),this._field=a,this._op=b,this._value=c,this.type="where"}static _create(a,b,c){return new lU(a,b,c)}_apply(a){let b=this._parse(a);return l4(a._query,b),new k5(a.firestore,a.converter,fN(a._query,b))}_parse(a){let b=lt(a.firestore),c=function(a,b,c,d,e,f,g){let h;if(e.isKeyField()){if("array-contains"===f||"array-contains-any"===f)throw new dq(dp.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if("in"===f||"not-in"===f){l3(g,f);let i=[];for(let j of g)i.push(l2(d,a,j));h={arrayValue:{values:i}}}else h=l2(d,a,g)}else"in"!==f&&"not-in"!==f&&"array-contains-any"!==f||l3(g,f),h=lD(c,b,g,"in"===f||"not-in"===f);return fe.create(e,f,h)}(a._query,"where",b,a.firestore._databaseId,this._field,this._op,this._value);return c}}function lV(a,b,c){let d=lP("where",a);return lU._create(d,b,c)}class lW extends lR{constructor(a,b){super(),this.type=a,this._queryConstraints=b}static _create(a,b){return new lW(a,b)}_parse(a){let b=this._queryConstraints.map(b=>b._parse(a)).filter(a=>a.getFilters().length>0);return 1===b.length?b[0]:ff.create(b,this._getOperator())}_apply(a){let b=this._parse(a);return 0===b.getFilters().length?a:(function(a,b){let c=a,d=b.getFlattenedFilters();for(let e of d)l4(c,e),c=fN(c,e)}(a._query,b),new k5(a.firestore,a.converter,fN(a._query,b)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lX extends lS{constructor(a,b){super(),this._field=a,this._direction=b,this.type="orderBy"}static _create(a,b){return new lX(a,b)}_apply(a){let b=function(a,b,c){if(null!==a.startAt)throw new dq(dp.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==a.endAt)throw new dq(dp.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let d=new fb(b,c);return function(a,b){if(null===fI(a)){let c=fJ(a);null!==c&&l5(a,c,b.field)}}(a,d),d}(a._query,this._field,this._direction);return new k5(a.firestore,a.converter,function(a,b){let c=a.explicitOrderBy.concat([b]);return new fE(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(a._query,b))}}function lY(a,b="asc"){let c=lP("orderBy",a);return lX._create(c,b)}class lZ extends lS{constructor(a,b,c){super(),this.type=a,this._limit=b,this._limitType=c}static _create(a,b,c){return new lZ(a,b,c)}_apply(a){return new k5(a.firestore,a.converter,fO(a._query,this._limit,this._limitType))}}function l$(a){return function a(b,c){if(c<=0)throw new dq(dp.INVALID_ARGUMENT,`Function ${b}() requires a positive number, but it was: ${c}.`)}("limit",a),lZ._create("limit",a,"F")}class l_ extends null{constructor(a,b,c){super(),this.type=a,this._docOrFields=b,this._inclusive=c}static _create(a,b,c){return new l_(a,b,c)}_apply(a){var b,c;let d=l1(a,this.type,this._docOrFields,this._inclusive);return new k5(a.firestore,a.converter,(b=a._query,c=d,new fE(b.path,b.collectionGroup,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,c,b.endAt)))}}class l0 extends null{constructor(a,b,c){super(),this.type=a,this._docOrFields=b,this._inclusive=c}static _create(a,b,c){return new l0(a,b,c)}_apply(a){var b,c;let d=l1(a,this.type,this._docOrFields,this._inclusive);return new k5(a.firestore,a.converter,(b=a._query,c=d,new fE(b.path,b.collectionGroup,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,c)))}}function l1(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof lN)return function(a,b,c,d,e){if(!d)throw new dq(dp.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of fL(a))if(g.field.isKeyField())f.push(eV(b,d.key));else{let h=d.data.field(g.field);if(eH(h))throw new dq(dp.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new dq(dp.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new e8(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=lt(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new dq(dp.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new dq(dp.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!fK(a)&& -1!==j.indexOf("/"))throw new dq(dp.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(dI.fromString(j));if(!dL.isDocumentKey(k))throw new dq(dp.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new dL(k);h.push(eV(b,l))}else{let m=lD(c,d,j);h.push(m)}}return new e8(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function l2(a,b,c){if("string"==typeof(c=(0,o.m9)(c))){if(""===c)throw new dq(dp.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fK(b)&& -1!==c.indexOf("/"))throw new dq(dp.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(dI.fromString(c));if(!dL.isDocumentKey(d))throw new dq(dp.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return eV(a,new dL(d))}if(c instanceof k4)return eV(a,c._key);throw new dq(dp.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${k0(c)}.`)}function l3(a,b){if(!Array.isArray(a)||0===a.length)throw new dq(dp.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`)}function l4(a,b){if(b.isInequality()){let c=fJ(a),d=b.field;if(null!==c&&!c.isEqual(d))throw new dq(dp.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${d.toString()}'`);let e=fI(a);null!==e&&l5(a,d,e)}let f=function(a,b){for(let c of a)for(let d of c.getFlattenedFilters())if(b.indexOf(d.op)>=0)return d.op;return null}(a.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(null!==f)throw f===b.op?new dq(dp.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new dq(dp.INVALID_ARGUMENT,`Invalid query. You cannot use '${b.op.toString()}' filters with '${f.toString()}' filters.`)}function l5(a,b,c){if(!c.isEqual(b))throw new dq(dp.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}class l6{convertValue(a,b="none"){switch(eO(a)){case 0:return null;case 1:return a.booleanValue;case 2:return eF(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(eG(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw dn()}}convertObject(a,b){return this.convertObjectMap(a.fields,b)}convertObjectMap(a,b="none"){let c={};return es(a,(a,d)=>{c[a]=this.convertValue(d,b)}),c}convertGeoPoint(a){return new lm(eF(a.latitude),eF(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=eI(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(eJ(a));default:return null}}convertTimestamp(a){let b=eE(a);return new dF(b.seconds,b.nanos)}convertDocumentKey(a,b){var c;let d=dI.fromString(a);(c=hp(d))||dn();let e=new eL(d.get(1),d.get(3)),f=new dL(d.popFirst(5));return e.isEqual(b)||dk(`Document ${f} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),f}}/**
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
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function l7(a,b,c){return a?c&&(c.merge||c.mergeFields)?a.toFirestore(b,c):a.toFirestore(b):b}/**
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
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class l8{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class l9 extends lN{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(a,b={}){if(this._document){let c=this._document.data.field(lP("DocumentSnapshot.get",a));if(null!==c)return this._userDataWriter.convertValue(c,b.serverTimestamps)}}}class ma extends l9{data(a={}){return super.data(a)}}class mb{constructor(a,b,c,d){this._firestore=a,this._userDataWriter=b,this._snapshot=d,this.metadata=new l8(d.hasPendingWrites,d.fromCache),this.query=c}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new ma(this._firestore,this._userDataWriter,c.key,c,new l8(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(a={}){let b=!!a.includeMetadataChanges;if(b&&this._snapshot.excludesMetadataChanges)throw new dq(dp.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===b||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>{let d=new ma(a._firestore,a._userDataWriter,b.doc.key,b.doc,new l8(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter);return b.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let c=new ma(a._firestore,a._userDataWriter,b.doc.key,b.doc,new l8(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),e=-1,f=-1;return 0!==b.type&&(e=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(f=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:mc(b.type),doc:c,oldIndex:e,newIndex:f}})}}(this,b),this._cachedChangesIncludeMetadataChanges=b),this._cachedChanges}}function mc(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dn()}}/**
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
 */ /**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function md(a){a=k1(a,k4);let b=k1(a.firestore,lc);return(function a(b,c,d={}){let e=new dr;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new kO({next:f=>{b.enqueueAndForget(()=>j3(a,g));let h=f.docs.has(c);!h&&f.fromCache?e.reject(new dq(dp.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&d&&"server"===d.source?e.reject(new dq(dp.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):e.resolve(f)},error:a=>e.reject(a)}),g=new j7(fG(c.path),f,{includeMetadataChanges:!0,Ku:!0});return j2(a,g)})(await kW(b),b.asyncQueue,c,d,e)),e.promise})(le(b),a._key).then(c=>mm(b,a,c))}class me extends l6{constructor(a){super(),this.firestore=a}convertBytes(a){return new li(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new k4(this.firestore,null,b)}}function mf(a){a=k1(a,k5);let b=k1(a.firestore,lc),c=le(b),d=new me(b);return lQ(a._query),(function a(b,c,d={}){let e=new dr;return b.asyncQueue.enqueueAndForget(async()=>(function(a,b,c,d,e){let f=new kO({next:c=>{b.enqueueAndForget(()=>j3(a,g)),c.fromCache&&"server"===d.source?e.reject(new dq(dp.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):e.resolve(c)},error:a=>e.reject(a)}),g=new j7(c,f,{includeMetadataChanges:!0,Ku:!0});return j2(a,g)})(await kW(b),b.asyncQueue,c,d,e)),e.promise})(c,a._query).then(c=>new mb(b,d,a,c))}function mg(a,b,c){a=k1(a,k4);let d=k1(a.firestore,lc),e=l7(a.converter,b,c);return ml(d,[lu(lt(d),"setDoc",a._key,e,null!==a.converter,c).toMutation(a._key,gn.none())])}function mh(a,b,c,...d){a=k1(a,k4);let e=k1(a.firestore,lc),f=lt(e),g;return g="string"==typeof(b=(0,o.m9)(b))||b instanceof lj?lC(f,"updateDoc",a._key,b,c,d):lB(f,"updateDoc",a._key,b),ml(e,[g.toMutation(a._key,gn.exists(!0))])}function mi(a){return ml(k1(a.firestore,lc),[new gA(a._key,gn.none())])}function mj(a,b){let c=k1(a.firestore,lc),d=k8(a),e=l7(a.converter,b);return ml(c,[lu(lt(a.firestore),"addDoc",d._key,e,null!==a.converter,{}).toMutation(d._key,gn.exists(!1))]).then(()=>d)}function mk(a,...b){var c,d,e;a=(0,o.m9)(a);let f={includeMetadataChanges:!1},g=0;"object"!=typeof b[g]||lb(b[g])||(f=b[g],g++);let h={includeMetadataChanges:f.includeMetadataChanges};if(lb(b[g])){let i=b[g];b[g]=null===(c=i.next)|| void 0===c?void 0:c.bind(i),b[g+1]=null===(d=i.error)|| void 0===d?void 0:d.bind(i),b[g+2]=null===(e=i.complete)|| void 0===e?void 0:e.bind(i)}let j,k,l;if(a instanceof k4)k=k1(a.firestore,lc),l=fG(a._key.path),j={next:c=>{b[g]&&b[g](mm(k,a,c))},error:b[g+1],complete:b[g+2]};else{let m=k1(a,k5);k=k1(m.firestore,lc),l=m._query;let n=new me(k);j={next:a=>{b[g]&&b[g](new mb(k,n,m,a))},error:b[g+1],complete:b[g+2]},lQ(a._query)}return function(a,b,c,d){let e=new kO(d),f=new j7(b,e,c);return a.asyncQueue.enqueueAndForget(async()=>j2(await kW(a),f)),()=>{e.Dc(),a.asyncQueue.enqueueAndForget(async()=>j3(await kW(a),f))}}(le(k),l,h,j)}function ml(a,b){return function(a,b){let c=new dr;return a.asyncQueue.enqueueAndForget(async()=>{var d;return kj(await (d=a,kV(d).then(a=>a.syncEngine)),b,c)}),c.promise}(le(a),b)}function mm(a,b,c){let d=c.docs.get(b._key),e=new me(a);return new l9(a,e,b._key,d,new l8(c.hasPendingWrites,c.fromCache),b.converter)}/**
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
 */ /**
 * Calculates the number of documents in the result set of the given query,
 * without actually downloading the documents.
 *
 * Using this function to count the documents is efficient because only the
 * final count, not the documents' data, is downloaded. This function can even
 * count the documents if the result set would be prohibitively large to
 * download entirely (e.g. thousands of documents).
 *
 * The result received from the server is presented, unaltered, without
 * considering any local state. That is, documents in the local cache are not
 * taken into consideration, neither are local modifications not yet
 * synchronized with the server. Previously-downloaded results, if any, are not
 * used: every request using this source necessarily involves a round trip to
 * the server.
 *
 * @param query - The query whose result set size to calculate.
 * @returns A Promise that will be resolved with the count; the count can be
 * retrieved from `snapshot.data().count`, where `snapshot` is the
 * `AggregateQuerySnapshot` to which the returned Promise resolves.
 */ function mn(a){return mo(a,{count:new lg("count")})}function mo(a,b){let c=k1(a.firestore,lc),d=le(c),e=function(a,b){let c=[];for(let d in a)Object.prototype.hasOwnProperty.call(a,d)&&c.push(b(a[d],d,a));return c}(b,(a,b)=>new gF(b,a._aggregateType,a._internalFieldPath));return(function(a,b,c){let d=new dr;return a.asyncQueue.enqueueAndForget(async()=>{try{var e;let f=await (e=a,kV(e).then(a=>a.datastore));d.resolve(jt(f,b,c))}catch(g){d.reject(g)}}),d.promise})(d,a._query,e).then(b=>(function(a,b,c){let d=new me(a);return new lh(b,d,c)})(c,a,b))}class mp{constructor(a){this.forceOwnership=a,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(a){this._onlineComponentProvider=new kN,this._offlineComponentProvider=new kL(this._onlineComponentProvider,null==a?void 0:a.cacheSizeBytes,this.forceOwnership)}}/**
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
 */ /**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ class mq{constructor(a,b){this._firestore=a,this._commitHandler=b,this._mutations=[],this._committed=!1,this._dataReader=lt(a)}set(a,b,c){this._verifyNotCommitted();let d=mr(a,this._firestore),e=l7(d.converter,b,c),f=lu(this._dataReader,"WriteBatch.set",d._key,e,null!==d.converter,c);return this._mutations.push(f.toMutation(d._key,gn.none())),this}update(a,b,c,...d){this._verifyNotCommitted();let e=mr(a,this._firestore),f;return f="string"==typeof(b=(0,o.m9)(b))||b instanceof lj?lC(this._dataReader,"WriteBatch.update",e._key,b,c,d):lB(this._dataReader,"WriteBatch.update",e._key,b),this._mutations.push(f.toMutation(e._key,gn.exists(!0))),this}delete(a){this._verifyNotCommitted();let b=mr(a,this._firestore);return this._mutations=this._mutations.concat(new gA(b._key,gn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new dq(dp.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mr(a,b){if((a=(0,o.m9)(a)).firestore!==b)throw new dq(dp.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}function ms(){return new lx("serverTimestamp")}function mt(...a){return new ly("arrayUnion",a)}function mu(...a){return new lz("arrayRemove",a)}function mv(a){return new lA("increment",a)}/**
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
 */ /**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single {@link WriteBatch}
 * is 500.
 *
 * Unlike transactions, write batches are persisted offline and therefore are
 * preferable when you don't need to condition your writes on read data.
 *
 * @returns A {@link WriteBatch} that can be used to atomically execute multiple
 * writes.
 */ function mw(a){return le(a=k1(a,lc)),new mq(a,b=>ml(a,b))}!function(a,b=!0){var c;dg=l.Jn,(0,l.Xd)(new m.wA("firestore",(a,{instanceIdentifier:c,options:d})=>{let e=a.getProvider("app").getImmediate(),f=new lc(new dv(a.getProvider("auth-internal")),new dz(a.getProvider("app-check-internal")),function(a,b){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new dq(dp.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eL(a.options.projectId,b)}(e,c),e);return d=Object.assign({useFetchStreams:b},d),f._setSettings(d),f},"PUBLIC").setMultipleInstances(!0)),(0,l.KN)(de,"3.12.2",void 0),(0,l.KN)(de,"3.12.2","esm2017")}()},86650:function(a,b,c){"use strict";c.d(b,{Jt:function(){return aB},cF:function(){return aD},iH:function(){return aC},B0:function(){return aA}});var d,e,f,g,h=c(47456),i=c(74444),j=c(8463);/**
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
 */ /**
 * @fileoverview Constants used in the Firebase Storage library.
 */ /**
 * Domain name for firebase storage.
 */ let k="firebasestorage.googleapis.com",l="storageBucket";/**
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
 */ /**
 * An error returned by the Firebase Storage SDK.
 * @public
 */ class m extends i.ZR{constructor(a,b,c=0){super(n(a),`Firebase Storage: ${b} (${n(a)})`),this.status_=c,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(a){this.status_=a}_codeEquals(a){return n(a)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(a){this.customData.serverResponse=a,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function n(a){return"storage/"+a}function o(){return new m(f.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function p(){return new m(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q(){return new m(f.CANCELED,"User canceled the upload/download.")}function r(){return new m(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function s(a){return new m(f.INVALID_ARGUMENT,a)}function t(){return new m(f.APP_DELETED,"The Firebase app was deleted.")}function u(a,b){return new m(f.INVALID_FORMAT,"String does not match format '"+a+"': "+b)}function v(a){throw new m(f.INTERNAL_ERROR,"Internal error: "+a)}(d=f||(f={})).UNKNOWN="unknown",d.OBJECT_NOT_FOUND="object-not-found",d.BUCKET_NOT_FOUND="bucket-not-found",d.PROJECT_NOT_FOUND="project-not-found",d.QUOTA_EXCEEDED="quota-exceeded",d.UNAUTHENTICATED="unauthenticated",d.UNAUTHORIZED="unauthorized",d.UNAUTHORIZED_APP="unauthorized-app",d.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",d.INVALID_CHECKSUM="invalid-checksum",d.CANCELED="canceled",d.INVALID_EVENT_NAME="invalid-event-name",d.INVALID_URL="invalid-url",d.INVALID_DEFAULT_BUCKET="invalid-default-bucket",d.NO_DEFAULT_BUCKET="no-default-bucket",d.CANNOT_SLICE_BLOB="cannot-slice-blob",d.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",d.NO_DOWNLOAD_URL="no-download-url",d.INVALID_ARGUMENT="invalid-argument",d.INVALID_ARGUMENT_COUNT="invalid-argument-count",d.APP_DELETED="app-deleted",d.INVALID_ROOT_OPERATION="invalid-root-operation",d.INVALID_FORMAT="invalid-format",d.INTERNAL_ERROR="internal-error",d.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
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
 */ /**
 * Firebase Storage location data.
 *
 * @internal
 */ class w{constructor(a,b){this.bucket=a,this.path_=b}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let a=encodeURIComponent;return"/b/"+a(this.bucket)+"/o/"+a(this.path)}bucketOnlyServerUrl(){let a=encodeURIComponent;return"/b/"+a(this.bucket)+"/o"}static makeFromBucketSpec(a,b){var c;let d;try{d=w.makeFromUrl(a,b)}catch(e){return new w(a,"")}if(""===d.path)return d;throw c=a,new m(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+c+"'.")}static makeFromUrl(a,b){let c=null,d="([A-Za-z0-9.\\-_]+)",e=RegExp("^gs://"+d+"(/(.*))?$","i");function g(a){a.path_=decodeURIComponent(a.path)}let h=b.replace(/[.]/g,"\\."),i=RegExp(`^https?://${h}/v[A-Za-z0-9_]+/b/${d}/o(/([^?#]*).*)?$`,"i"),j=RegExp(`^https?://${b===k?"(?:storage.googleapis.com|storage.cloud.google.com)":b}/${d}/([^?#]*)`,"i"),l=[{regex:e,indices:{bucket:1,path:3},postModify:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path_=a.path_.slice(0,-1))}},{regex:i,indices:{bucket:1,path:3},postModify:g},{regex:j,indices:{bucket:1,path:2},postModify:g}];for(let n=0;n<l.length;n++){let o=l[n],p=o.regex.exec(a);if(p){let q=p[o.indices.bucket],r=p[o.indices.path];r||(r=""),c=new w(q,r),o.postModify(c);break}}if(null==c){var s;throw s=a,new m(f.INVALID_URL,"Invalid URL '"+s+"'.")}return c}}class x{constructor(a){this.promise_=Promise.reject(a)}getPromise(){return this.promise_}cancel(a=!1){}}function y(a){return"string"==typeof a||a instanceof String}function z(a){return A()&&a instanceof Blob}function A(){return"undefined"!=typeof Blob&&!(0,i.UG)()}function B(a,b,c,d){if(d<b)throw s(`Invalid value for '${a}'. Expected ${b} or greater.`);if(d>c)throw s(`Invalid value for '${a}'. Expected ${c} or less.`)}/**
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
 */ function C(a,b,c){let d=b;return null==c&&(d=`https://${b}`),`${c}://${d}/v0${a}`}function D(a){let b=encodeURIComponent,c="?";for(let d in a)if(a.hasOwnProperty(d)){let e=b(d)+"="+b(a[d]);c=c+e+"&"}return c.slice(0,-1)}/**
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
 */ /**
 * Checks the status code to see if the action should be retried.
 *
 * @param status Current HTTP status code returned by server.
 * @param additionalRetryCodes additional retry codes to check against
 */ function E(a,b){let c=-1!==[408,429].indexOf(a),d=-1!==b.indexOf(a);return a>=500&&a<600||c||d}(e=g||(g={}))[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT";/**
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
 */ /**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */ class F{constructor(a,b,c,d,e,f,g,h,i,j,k,l=!0){this.url_=a,this.method_=b,this.headers_=c,this.body_=d,this.successCodes_=e,this.additionalRetryCodes_=f,this.callback_=g,this.errorCallback_=h,this.timeout_=i,this.progressCallback_=j,this.connectionFactory_=k,this.retry=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((a,b)=>{this.resolve_=a,this.reject_=b,this.start_()})}start_(){let a=(a,b)=>{if(b){a(!1,new G(!1,null,!0));return}let c=this.connectionFactory_();this.pendingConnection_=c;let d=a=>{let b=a.loaded,c=a.lengthComputable?a.total:-1;null!==this.progressCallback_&&this.progressCallback_(b,c)};null!==this.progressCallback_&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&c.removeUploadProgressListener(d),this.pendingConnection_=null;let b=c.getErrorCode()===g.NO_ERROR,e=c.getStatus();if(!b||E(e,this.additionalRetryCodes_)&&this.retry){let f=c.getErrorCode()===g.ABORT;a(!1,new G(!1,null,f));return}let h=-1!==this.successCodes_.indexOf(e);a(!0,new G(h,c))})},b=(a,b)=>{let c=this.resolve_,d=this.reject_,e=b.connection;if(b.wasSuccessCode)try{var f;let g=this.callback_(e,e.getResponse());(f=g,void 0!==f)?c(g):c()}catch(h){d(h)}else if(null!==e){let i=o();i.serverResponse=e.getErrorText(),d(this.errorCallback_?this.errorCallback_(e,i):i)}else if(b.canceled){let j=this.appDelete_?t():q();d(j)}else{let k=p();d(k)}};this.canceled_?b(!1,new G(!1,null,!0)):this.backoffId_=/**
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
 */ /**
 * Accepts a callback for an action to perform (`doRequest`),
 * and then a callback for when the backoff has completed (`backoffCompleteCb`).
 * The callback sent to start requires an argument to call (`onRequestComplete`).
 * When `start` calls `doRequest`, it passes a callback for when the request has
 * completed, `onRequestComplete`. Based on this, the backoff continues, with
 * another call to `doRequest` and the above loop continues until the timeout
 * is hit, or a successful response occurs.
 * @description
 * @param doRequest Callback to perform request
 * @param backoffCompleteCb Callback to call when backoff has been completed
 */ function(a,b,c){let d=1,e=null,f=null,g=!1,h=0;function i(){return 2===h}let j=!1;function k(...a){j||(j=!0,b.apply(null,a))}function l(b){e=setTimeout(()=>{e=null,a(n,i())},b)}function m(){f&&clearTimeout(f)}function n(a,...b){if(j){m();return}if(a){m(),k.call(null,a,...b);return}let c=i()||g;if(c){m(),k.call(null,a,...b);return}d<64&&(d*=2);let e;1===h?(h=2,e=0):e=(d+Math.random())*1e3,l(e)}let o=!1;function p(a){if(!o)o=!0,m(),!j&&(null!==e?(a||(h=2),clearTimeout(e),l(0)):a||(h=1))}return l(0),f=setTimeout(()=>{g=!0,p(!0)},c),p}(a,b,this.timeout_)}getPromise(){return this.promise_}cancel(a){if(this.canceled_=!0,this.appDelete_=a||!1,null!==this.backoffId_){var b;(b=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class G{constructor(a,b,c){this.wasSuccessCode=a,this.connection=b,this.canceled=!!c}}function H(...a){let b="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==b){let c=new b;for(let d=0;d<a.length;d++)c.append(a[d]);return c.getBlob()}if(A())return new Blob(a);throw new m(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
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
 */ /**
 * An enumeration of the possible string formats for upload.
 * @public
 */ let I={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class J{constructor(a,b){this.data=a,this.contentType=b||null}}function K(a){let b=[];for(let c=0;c<a.length;c++){let d=a.charCodeAt(c);if(d<=127)b.push(d);else if(d<=2047)b.push(192|d>>6,128|63&d);else if((64512&d)==55296){let e=c<a.length-1&&(64512&a.charCodeAt(c+1))==56320;if(e){let f=d,g=a.charCodeAt(++c);d=65536|(1023&f)<<10|1023&g,b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|63&d)}else b.push(239,191,189)}else(64512&d)==56320?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|63&d)}return new Uint8Array(b)}function L(a,b){switch(a){case I.BASE64:{let c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d){let e=c?"-":"_";throw u(a,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case I.BASE64URL:{let g=-1!==b.indexOf("+"),h=-1!==b.indexOf("/");if(g||h){let i=g?"+":"/";throw u(a,"Invalid character '"+i+"' found: is it base64 encoded?")}b=b.replace(/-/g,"+").replace(/_/g,"/")}}let j;try{j=/**
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
 */ /** Converts a Base64 encoded string to a binary string. */ function(a){if("undefined"==typeof atob){var b;throw b="base-64",new m(f.UNSUPPORTED_ENVIRONMENT,`${b} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}return atob(a)}(b)}catch(k){if(k.message.includes("polyfill"))throw k;throw u(a,"Invalid character found")}let l=new Uint8Array(j.length);for(let n=0;n<j.length;n++)l[n]=j.charCodeAt(n);return l}class M{constructor(a){this.base64=!1,this.contentType=null;let b=a.match(/^data:([^,]+)?,/);if(null===b)throw u(I.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let c=b[1]||null;null!=c&&(this.base64=function(a,b){let c=a.length>=b.length;return!!c&&a.substring(a.length-b.length)===b}(c,";base64"),this.contentType=this.base64?c.substring(0,c.length-7):c),this.rest=a.substring(a.indexOf(",")+1)}}function N(a){let b=new M(a);return b.base64?L(I.BASE64,b.rest):function(a){let b;try{b=decodeURIComponent(a)}catch(c){throw u(I.DATA_URL,"Malformed data URL.")}return K(b)}(b.rest)}function O(a){let b=new M(a);return b.contentType}/**
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
 */ /**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */ class P{constructor(a,b){let c=0,d="";z(a)?(this.data_=a,c=a.size,d=a.type):a instanceof ArrayBuffer?(b?this.data_=new Uint8Array(a):(this.data_=new Uint8Array(a.byteLength),this.data_.set(new Uint8Array(a))),c=this.data_.length):a instanceof Uint8Array&&(b?this.data_=a:(this.data_=new Uint8Array(a.length),this.data_.set(a)),c=a.length),this.size_=c,this.type_=d}size(){return this.size_}type(){return this.type_}slice(a,b){if(z(this.data_)){var c,d,e;let f=this.data_,g=(c=f,d=a,e=b,c.webkitSlice?c.webkitSlice(d,e):c.mozSlice?c.mozSlice(d,e):c.slice?c.slice(d,e):null);return null===g?null:new P(g)}{let h=new Uint8Array(this.data_.buffer,a,b-a);return new P(h,!0)}}static getBlob(...a){if(A()){let b=a.map(a=>a instanceof P?a.data_:a);return new P(H.apply(null,b))}{let c=a.map(a=>y(a)?function a(b,c){switch(b){case I.RAW:return new J(K(c));case I.BASE64:case I.BASE64URL:return new J(L(b,c));case I.DATA_URL:return new J(N(c),O(c))}throw o()}(I.RAW,a).data:a.data_),d=0;c.forEach(a=>{d+=a.byteLength});let e=new Uint8Array(d),f=0;return c.forEach(a=>{for(let b=0;b<a.length;b++)e[f++]=a[b]}),new P(e,!0)}}uploadData(){return this.data_}}/**
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
 */ /**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */ function Q(a){var b;let c;try{c=JSON.parse(a)}catch(d){return null}return"object"!=typeof(b=c)||Array.isArray(b)?null:c}function R(a){let b=a.lastIndexOf("/",a.length-2);return -1===b?a:a.slice(b+1)}/**
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
 */ function S(a,b){return b}class T{constructor(a,b,c,d){this.server=a,this.local=b||a,this.writable=!!c,this.xform=d||S}}let U=null;function V(){if(U)return U;let a=[];a.push(new T("bucket")),a.push(new T("generation")),a.push(new T("metageneration")),a.push(new T("name","fullPath",!0));let b=new T("name");b.xform=function(a,b){var c;return!y(c=b)||c.length<2?c:R(c)},a.push(b);let c=new T("size");return c.xform=function(a,b){return void 0!==b?Number(b):b},a.push(c),a.push(new T("timeCreated")),a.push(new T("updated")),a.push(new T("md5Hash",null,!0)),a.push(new T("cacheControl",null,!0)),a.push(new T("contentDisposition",null,!0)),a.push(new T("contentEncoding",null,!0)),a.push(new T("contentLanguage",null,!0)),a.push(new T("contentType",null,!0)),a.push(new T("metadata","customMetadata",!0)),U=a}function W(a,b,c){let d=Q(b);return null===d?null:function(a,b,c){var d,e;let f={};f.type="file";let g=c.length;for(let h=0;h<g;h++){let i=c[h];f[i.local]=i.xform(f,b[i.server])}return d=f,e=a,Object.defineProperty(d,"ref",{get:function(){let a=d.bucket,b=d.fullPath,c=new w(a,b);return e._makeStorageReference(c)}}),f}(a,d,c)}function X(a,b){let c={},d=b.length;for(let e=0;e<d;e++){let f=b[e];f.writable&&(c[f.server]=a[f.local])}return JSON.stringify(c)}/**
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
 */ let Y="prefixes",Z="items";class ${constructor(a,b,c,d){this.url=a,this.method=b,this.handler=c,this.timeout=d,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */ /**
 * Throws the UNKNOWN StorageError if cndn is false.
 */ function _(a){if(!a)throw o()}function aa(a,b){return function(c,d){let e=W(a,d,b);return _(null!==e),e}}function ab(a){return function(b,c){var d,e;let g;return(g=401===b.getStatus()?b.getErrorText().includes("Firebase App Check token is invalid")?new m(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new m(f.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===b.getStatus()?(d=a.bucket,new m(f.QUOTA_EXCEEDED,"Quota for bucket '"+d+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===b.getStatus()?(e=a.path,new m(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")):c).status=b.getStatus(),g.serverResponse=c.serverResponse,g}}function ac(a){let b=ab(a);return function(c,d){let e=b(c,d);if(404===c.getStatus()){var g;e=(g=a.path,new m(f.OBJECT_NOT_FOUND,"Object '"+g+"' does not exist."))}return e.serverResponse=d.serverResponse,e}}function ad(a,b,c){let d=Object.assign({},c);if(d.fullPath=a.path,d.size=b.size(),!d.contentType){var e,f;d.contentType=(e=null,f=b,e&&e.contentType||f&&f.type()||"application/octet-stream")}return d}function ae(a,b,c,d,e){let f=b.bucketOnlyServerUrl(),g={"X-Goog-Upload-Protocol":"multipart"},h=function(){let a="";for(let b=0;b<2;b++)a+=Math.random().toString().slice(2);return a}();g["Content-Type"]="multipart/related; boundary="+h;let i=ad(b,d,e),j=X(i,c),k="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+j+"\r\n--"+h+"\r\nContent-Type: "+i.contentType+"\r\n\r\n",l=P.getBlob(k,d,"\r\n--"+h+"--");if(null===l)throw r();let m={name:i.fullPath},n=C(f,a.host,a._protocol),o=a.maxUploadRetryTime,p=new $(n,"POST",aa(a,c),o);return p.urlParams=m,p.headers=g,p.body=l.uploadData(),p.errorHandler=ab(b),p}class af{constructor(a,b,c,d){this.current=a,this.total=b,this.finalized=!!c,this.metadata=d||null}}function ag(a,b){let c=null;try{c=a.getResponseHeader("X-Goog-Upload-Status")}catch(d){_(!1)}return _(!!c&& -1!==(b||["active"]).indexOf(c)),c}let ah={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ai(a){switch(a){case"running":case"pausing":case"canceling":return ah.RUNNING;case"paused":return ah.PAUSED;case"success":return ah.SUCCESS;case"canceled":return ah.CANCELED;default:return ah.ERROR}}/**
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
 */ class aj{constructor(a,b,c){var d;let e="function"==typeof(d=a)||null!=b||null!=c;if(e)this.next=a,this.error=null!=b?b:void 0,this.complete=null!=c?c:void 0;else{let f=a;this.next=f.next,this.error=f.error,this.complete=f.complete}}}/**
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
 */ /**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function ak(a){return(...b)=>{Promise.resolve().then(()=>a(...b))}}class al{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=g.NO_ERROR,this.sendPromise_=new Promise(a=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=g.ABORT,a()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=g.NETWORK_ERROR,a()}),this.xhr_.addEventListener("load",()=>{a()})})}send(a,b,c,d){if(this.sent_)throw v("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(b,a,!0),void 0!==d)for(let e in d)d.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,d[e].toString());return void 0!==c?this.xhr_.send(c):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw v("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw v("cannot .getStatus() before sending");try{return this.xhr_.status}catch(a){return -1}}getResponse(){if(!this.sent_)throw v("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw v("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(a){return this.xhr_.getResponseHeader(a)}addUploadProgressListener(a){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",a)}removeUploadProgressListener(a){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",a)}}class am extends al{initXhr(){this.xhr_.responseType="text"}}function an(){return new am}class ao extends null{initXhr(){this.xhr_.responseType="arraybuffer"}}class ap extends null{initXhr(){this.xhr_.responseType="blob"}}/**
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
 */ /**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */ class aq{constructor(a,b,c=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=a,this._blob=b,this._metadata=c,this._mappings=V(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=a=>{if(this._request=void 0,this._chunkMultiplier=1,a._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let b=this.isExponentialBackoffExpired();if(E(a.status,[])){if(b)a=p();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=a,this._transition("error")}},this._metadataErrorHandler=a=>{this._request=void 0,a._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=a,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((a,b)=>{this._resolve=a,this._reject=b,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let a=this._transferred;return b=>this._updateProgress(a+b)}_shouldDoResumable(a){return a.size()>262144}_start(){"running"===this._state&& void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(a){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([b,c])=>{switch(this._state){case"running":a(b,c);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((a,b)=>{let c=function(a,b,c,d,e){let f=b.bucketOnlyServerUrl(),g=ad(b,d,e),h={name:g.fullPath},i=C(f,a.host,a._protocol),j={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${d.size()}`,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"},k=X(g,c),l=a.maxUploadRetryTime,m=new $(i,"POST",function(a){ag(a);let b;try{b=a.getResponseHeader("X-Goog-Upload-URL")}catch(c){_(!1)}return _(y(b)),b},l);return m.urlParams=h,m.headers=j,m.body=k,m.errorHandler=ab(b),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),d=this._ref.storage._makeRequest(c,an,a,b);this._request=d,d.getPromise().then(a=>{this._request=void 0,this._uploadUrl=a,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let a=this._uploadUrl;this._resolveToken((b,c)=>{let d=function(a,b,c,d){let e=a.maxUploadRetryTime,f=new $(c,"POST",function(a){let b=ag(a,["active","final"]),c=null;try{c=a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){_(!1)}c||_(!1);let f=Number(c);return _(!isNaN(f)),new af(f,d.size(),"final"===b)},e);return f.headers={"X-Goog-Upload-Command":"query"},f.errorHandler=ab(b),f}(this._ref.storage,this._ref._location,a,this._blob),e=this._ref.storage._makeRequest(d,an,b,c);this._request=e,e.getPromise().then(a=>{this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let a=262144*this._chunkMultiplier,b=new af(this._transferred,this._blob.size()),c=this._uploadUrl;this._resolveToken((d,e)=>{let g;try{g=function(a,b,c,d,e,g,h,i){let j=new af(0,0);if(h?(j.current=h.current,j.total=h.total):(j.current=0,j.total=d.size()),d.size()!==j.total)throw new m(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let k=j.total-j.current,l=k;e>0&&(l=Math.min(l,e));let n=j.current,o=n+l,p="";p=0===l?"finalize":k===l?"upload, finalize":"upload";let q={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${j.current}`},s=d.slice(n,o);if(null===s)throw r();let t=b.maxUploadRetryTime,u=new $(c,"POST",function(a,c){let e=ag(a,["active","final"]),f=j.current+l,h=d.size(),i;return i="final"===e?aa(b,g)(a,c):null,new af(f,h,"final"===e,i)},t);return u.headers=q,u.body=s.uploadData(),u.progressCallback=i||null,u.errorHandler=ab(a),u}(this._ref._location,this._ref.storage,c,this._blob,a,this._mappings,b,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}let i=this._ref.storage._makeRequest(g,an,d,e,!1);this._request=i,i.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let a=262144*this._chunkMultiplier;2*a<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((a,b)=>{let c=function a(b,c,d){let e=c.fullServerUrl(),f=C(e,b.host,b._protocol),g=b.maxOperationRetryTime,h=new $(f,"GET",aa(b,d),g);return h.errorHandler=ac(c),h}(this._ref.storage,this._ref._location,this._mappings),d=this._ref.storage._makeRequest(c,an,a,b);this._request=d,d.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((a,b)=>{let c=ae(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),d=this._ref.storage._makeRequest(c,an,a,b);this._request=d,d.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(a){let b=this._transferred;this._transferred=a,this._transferred!==b&&this._notifyObservers()}_transition(a){if(this._state!==a)switch(a){case"canceling":case"pausing":this._state=a,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let b="paused"===this._state;this._state=a,b&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=a,this._notifyObservers();break;case"canceled":this._error=q(),this._state=a,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let a=ai(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:a,metadata:this._metadata,task:this,ref:this._ref}}on(a,b,c,d){let e=new aj(b||void 0,c||void 0,d||void 0);return this._addObserver(e),()=>{this._removeObserver(e)}}then(a,b){return this._promise.then(a,b)}catch(a){return this.then(null,a)}_addObserver(a){this._observers.push(a),this._notifyObserver(a)}_removeObserver(a){let b=this._observers.indexOf(a);-1!==b&&this._observers.splice(b,1)}_notifyObservers(){this._finishPromise();let a=this._observers.slice();a.forEach(a=>{this._notifyObserver(a)})}_finishPromise(){if(void 0!==this._resolve){let a=!0;switch(ai(this._state)){case ah.SUCCESS:ak(this._resolve.bind(null,this.snapshot))();break;case ah.CANCELED:case ah.ERROR:let b=this._reject;ak(b.bind(null,this._error))();break;default:a=!1}a&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(a){let b=ai(this._state);switch(b){case ah.RUNNING:case ah.PAUSED:a.next&&ak(a.next.bind(a,this.snapshot))();break;case ah.SUCCESS:a.complete&&ak(a.complete.bind(a))();break;case ah.CANCELED:case ah.ERROR:default:a.error&&ak(a.error.bind(a,this._error))()}}resume(){let a="paused"===this._state||"pausing"===this._state;return a&&this._transition("running"),a}pause(){let a="running"===this._state;return a&&this._transition("pausing"),a}cancel(){let a="running"===this._state||"pausing"===this._state;return a&&this._transition("canceling"),a}}/**
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
 */ /**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */ class ar{constructor(a,b){this._service=a,b instanceof w?this._location=b:this._location=w.makeFromUrl(b,a.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(a,b){return new ar(a,b)}get root(){let a=new w(this._location.bucket,"");return this._newRef(this._service,a)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return R(this._location.path)}get storage(){return this._service}get parent(){let a=/**
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
 */ /**
 * @fileoverview Contains helper methods for manipulating paths.
 */ /**
 * @return Null if the path is already at the root.
 */ function(a){if(0===a.length)return null;let b=a.lastIndexOf("/");if(-1===b)return"";let c=a.slice(0,b);return c}(this._location.path);if(null===a)return null;let b=new w(this._location.bucket,a);return new ar(this._service,b)}_throwIfRoot(a){if(""===this._location.path){var b;throw b=a,new m(f.INVALID_ROOT_OPERATION,"The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}}async function as(a,b,c){let d=await at(a,{pageToken:c});b.prefixes.push(...d.prefixes),b.items.push(...d.items),null!=d.nextPageToken&&await as(a,b,d.nextPageToken)}function at(a,b){null!=b&&"number"==typeof b.maxResults&&B("options.maxResults",1,1e3,b.maxResults);let c=b||{},d=function(a,b,c,d,e){var f,g;let h={};b.isRoot?h.prefix="":h.prefix=b.path+"/",c&&c.length>0&&(h.delimiter=c),d&&(h.pageToken=d),e&&(h.maxResults=e);let i=b.bucketOnlyServerUrl(),j=C(i,a.host,a._protocol),k=a.maxOperationRetryTime,l=new $(j,"GET",(f=a,g=b.bucket,function(a,b){let c=function(a,b,c){let d=Q(c);return null===d?null:function(a,b,c){let d={prefixes:[],items:[],nextPageToken:c.nextPageToken};if(c[Y])for(let e of c[Y]){let f=e.replace(/\/$/,""),g=a._makeStorageReference(new w(b,f));d.prefixes.push(g)}if(c[Z])for(let h of c[Z]){let i=a._makeStorageReference(new w(b,h.name));d.items.push(i)}return d}(a,b,d)}(f,g,b);return _(null!==c),c}),k);return l.urlParams=h,l.errorHandler=ab(b),l}(a.storage,a._location,"/",c.pageToken,c.maxResults);return a.storage.makeRequestWithTokens(d,an)}function au(a,b){if(a instanceof aw){let c=a;if(null==c._bucket)throw new m(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+l+"' property when initializing the app?");let d=new ar(c,c._bucket);return null!=b?au(d,b):d}return void 0!==b?function a(b,c){let d=function(a,b){let c=b.split("/").filter(a=>a.length>0).join("/");return 0===a.length?c:a+"/"+c}(b._location.path,c),e=new w(b._location.bucket,d);return new ar(b.storage,e)}(a,b):a}function av(a,b){let c=null==b?void 0:b[l];return null==c?null:w.makeFromBucketSpec(c,a)}class aw{constructor(a,b,c,d,e){this.app=a,this._authProvider=b,this._appCheckProvider=c,this._url=d,this._firebaseVersion=e,this._bucket=null,this._host=k,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=d?this._bucket=w.makeFromBucketSpec(d,this._host):this._bucket=av(this._host,this.app.options)}get host(){return this._host}set host(a){this._host=a,null!=this._url?this._bucket=w.makeFromBucketSpec(this._url,a):this._bucket=av(a,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(a){B("time",0,Number.POSITIVE_INFINITY,a),this._maxUploadRetryTime=a}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(a){B("time",0,Number.POSITIVE_INFINITY,a),this._maxOperationRetryTime=a}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let a=this._authProvider.getImmediate({optional:!0});if(a){let b=await a.getToken();if(null!==b)return b.accessToken}return null}async _getAppCheckToken(){let a=this._appCheckProvider.getImmediate({optional:!0});if(a){let b=await a.getToken();return b.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(a=>a.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(a){return new ar(this,a)}_makeRequest(a,b,c,d,e=!0){if(this._deleted)return new x(t());{let f=function(a,b,c,d,e,f,g=!0){var h,i,j,k,l,m,n,o;let p=D(a.urlParams),q=a.url+p,r=Object.assign({},a.headers);return h=r,(i=b)&&(h["X-Firebase-GMPID"]=i),j=r,null!==(k=c)&&k.length>0&&(j.Authorization="Firebase "+k),l=r,m=f,l["X-Firebase-Storage-Version"]="webjs/"+(null!=m?m:"AppManager"),n=r,null!==(o=d)&&(n["X-Firebase-AppCheck"]=o),new F(q,a.method,r,a.body,a.successCodes,a.additionalRetryCodes,a.handler,a.errorHandler,a.timeout,a.progressCallback,e,g)}(a,this._appId,c,d,b,this._firebaseVersion,e);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(a,b){let[c,d]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(a,b,c,d).getPromise()}}let ax="@firebase/storage",ay="0.11.2",az="storage";function aA(a,b,c){var d,e,f;return d=a=(0,i.m9)(a),e=b,f=c,d._throwIfRoot("uploadBytesResumable"),new aq(d,new P(e),f)}function aB(a){return function(a){a._throwIfRoot("getDownloadURL");let b=function(a,b,c){var d,e;let f=b.fullServerUrl(),g=C(f,a.host,a._protocol),h=a.maxOperationRetryTime,i=new $(g,"GET",(d=a,e=c,function(a,b){let c=W(d,b,e);return _(null!==c),function(a,b,c,d){let e=Q(b);if(null===e||!y(e.downloadTokens))return null;let f=e.downloadTokens;if(0===f.length)return null;let g=encodeURIComponent,h=f.split(","),i=h.map(b=>{let e=a.bucket,f=a.fullPath,h="/b/"+g(e)+"/o/"+g(f),i=C(h,c,d),j=D({alt:"media",token:b});return i+j});return i[0]}(c,b,d.host,d._protocol)}),h);return i.errorHandler=ac(b),i}(a.storage,a._location,V());return a.storage.makeRequestWithTokens(b,an).then(a=>{if(null===a)throw new m(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return a})}(a=(0,i.m9)(a))}function aC(a,b){return function(a,b){var c,d,e;if(!(b&&(c=b,/^[A-Za-z]+:\/\//.test(c))))return au(a,b);if(a instanceof aw)return d=a,e=b,new ar(d,e);throw s("To use ref(service, url), the first argument must be a Storage instance.")}(a=(0,i.m9)(a),b)}function aD(a=(0,h.Mq)(),b){a=(0,i.m9)(a);let c=(0,h.qX)(a,az),d=c.getImmediate({identifier:b}),e=(0,i.P0)("storage");return e&&aE(d,...e),d}function aE(a,b,c,d={}){!function(a,b,c,d={}){a.host=`${b}:${c}`,a._protocol="http";let{mockUserToken:e}=d;e&&(a._overrideAuthToken="string"==typeof e?e:(0,i.Sg)(e,a.app.options.projectId))}(a,b,c,d)}(0,h.Xd)(new j.wA(az,function a(b,{instanceIdentifier:c}){let d=b.getProvider("app").getImmediate(),e=b.getProvider("auth-internal"),f=b.getProvider("app-check-internal");return new aw(d,e,f,c,h.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(ax,ay,""),(0,h.KN)(ax,ay,"esm2017")}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(90387)}),_N_E=a.O()}])