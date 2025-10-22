(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},ds=[],mn=()=>{},om=()=>!1,$a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hu=t=>t.startsWith("onUpdate:"),vt=Object.assign,fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},WE=Object.prototype.hasOwnProperty,ke=(t,e)=>WE.call(t,e),ue=Array.isArray,ps=t=>Qi(t)==="[object Map]",qa=t=>Qi(t)==="[object Set]",wf=t=>Qi(t)==="[object Date]",pe=t=>typeof t=="function",Ze=t=>typeof t=="string",In=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",am=t=>(Le(t)||pe(t))&&pe(t.then)&&pe(t.catch),cm=Object.prototype.toString,Qi=t=>cm.call(t),KE=t=>Qi(t).slice(8,-1),lm=t=>Qi(t)==="[object Object]",du=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gi=uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ha=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},GE=/-\w/g,Zt=Ha(t=>t.replace(GE,e=>e.slice(1).toUpperCase())),QE=/\B([A-Z])/g,Qr=Ha(t=>t.replace(QE,"-$1").toLowerCase()),za=Ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),zc=Ha(t=>t?`on${za(t)}`:""),lr=(t,e)=>!Object.is(t,e),qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},um=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ca=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Tf;const Wa=()=>Tf||(Tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pu(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?ZE(r):pu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||Le(t))return t}const JE=/;(?![^(]*\))/g,XE=/:([^]+)/,YE=/\/\*[^]*?\*\//g;function ZE(t){const e={};return t.replace(YE,"").split(JE).forEach(n=>{if(n){const r=n.split(XE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mu(t){let e="";if(Ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=mu(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ew="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tw=uu(ew);function hm(t){return!!t||t===""}function nw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ka(t[r],e[r]);return n}function Ka(t,e){if(t===e)return!0;let n=wf(t),r=wf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=In(t),r=In(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?nw(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ka(t[o],e[o]))return!1}}return String(t)===String(e)}function rw(t,e){return t.findIndex(n=>Ka(n,e))}const fm=t=>!!(t&&t.__v_isRef===!0),jt=t=>Ze(t)?t:t==null?"":ue(t)||Le(t)&&(t.toString===cm||!pe(t.toString))?fm(t)?jt(t.value):JSON.stringify(t,dm,2):String(t),dm=(t,e)=>fm(e)?dm(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wc(r,i)+" =>"]=s,n),{})}:qa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wc(n))}:In(e)?Wc(e):Le(e)&&!ue(e)&&!lm(e)?String(e):e,Wc=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class sw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){this._on>0&&--this._on===0&&(Ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iw(){return Ct}let xe;const Kc=new WeakSet;class pm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Kc.has(this)&&(Kc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vf(this),_m(this);const e=xe,n=rn;xe=this,rn=!0;try{return this.fn()}finally{ym(this),xe=e,rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yu(e);this.deps=this.depsTail=void 0,vf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Kc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let mm=0,_i,yi;function gm(t,e=!1){if(t.flags|=8,e){t.next=yi,yi=t;return}t.next=_i,_i=t}function gu(){mm++}function _u(){if(--mm>0)return;if(yi){let e=yi;for(yi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;_i;){let e=_i;for(_i=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function _m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ym(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),yu(r),ow(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function El(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Em(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Em(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi)||(t.globalVersion=Oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!El(t))))return;t.flags|=2;const e=t.dep,n=xe,r=rn;xe=t,rn=!0;try{_m(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,rn=r,ym(t),t.flags&=-3}}function yu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)yu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ow(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rn=!0;const wm=[];function Fn(){wm.push(rn),rn=!1}function Un(){const t=wm.pop();rn=t===void 0?!0:t}function vf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Oi=0;class aw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!rn||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new aw(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,Tm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){gu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_u()}}}function Tm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Tm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wl=new WeakMap,Ur=Symbol(""),Tl=Symbol(""),Ni=Symbol("");function _t(t,e,n){if(rn&&xe){let r=wl.get(t);r||wl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Eu),s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=wl.get(t);if(!o){Oi++;return}const c=l=>{l&&l.trigger()};if(gu(),e==="clear")o.forEach(c);else{const l=ue(t),u=l&&du(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ni||!In(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ni)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Ur)),ps(t)&&c(o.get(Tl)));break;case"delete":l||(c(o.get(Ur)),ps(t)&&c(o.get(Tl)));break;case"set":ps(t)&&c(o.get(Ur));break}}_u()}function is(t){const e=Ce(t);return e===t?e:(_t(e,"iterate",Ni),Xt(t)?e:e.map(at))}function Ga(t){return _t(t=Ce(t),"iterate",Ni),t}const cw={__proto__:null,[Symbol.iterator](){return Gc(this,Symbol.iterator,at)},concat(...t){return is(this).concat(...t.map(e=>ue(e)?is(e):e))},entries(){return Gc(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return Pn(this,"every",t,e,void 0,arguments)},filter(t,e){return Pn(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return Pn(this,"find",t,e,at,arguments)},findIndex(t,e){return Pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pn(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return Pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qc(this,"includes",t)},indexOf(...t){return Qc(this,"indexOf",t)},join(t){return is(this).join(t)},lastIndexOf(...t){return Qc(this,"lastIndexOf",t)},map(t,e){return Pn(this,"map",t,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...t){return ii(this,"push",t)},reduce(t,...e){return If(this,"reduce",t,e)},reduceRight(t,...e){return If(this,"reduceRight",t,e)},shift(){return ii(this,"shift")},some(t,e){return Pn(this,"some",t,e,void 0,arguments)},splice(...t){return ii(this,"splice",t)},toReversed(){return is(this).toReversed()},toSorted(t){return is(this).toSorted(t)},toSpliced(...t){return is(this).toSpliced(...t)},unshift(...t){return ii(this,"unshift",t)},values(){return Gc(this,"values",at)}};function Gc(t,e,n){const r=Ga(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const lw=Array.prototype;function Pn(t,e,n,r,s,i){const o=Ga(t),c=o!==t&&!Xt(t),l=o[e];if(l!==lw[e]){const p=l.apply(t,i);return c?at(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,at(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function If(t,e,n,r){const s=Ga(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,at(c),l,t)}),s[e](i,...r)}function Qc(t,e,n){const r=Ce(t);_t(r,"iterate",Ni);const s=r[e](...n);return(s===-1||s===!1)&&vu(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function ii(t,e,n=[]){Fn(),gu();const r=Ce(t)[e].apply(t,n);return _u(),Un(),r}const uw=uu("__proto__,__v_isRef,__isVue"),vm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function hw(t){In(t)||(t=String(t));const e=Ce(this);return _t(e,"has",t),e.hasOwnProperty(t)}class Im{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Tw:Sm:i?Rm:bm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=cw[n]))return l;if(n==="hasOwnProperty")return hw}const c=Reflect.get(e,n,Tt(e)?e:r);return(In(n)?vm.has(n):uw(n))||(s||_t(e,"get",n),i)?c:Tt(c)?o&&du(n)?c:c.value:Le(c)?s?Cm(c):Qa(c):c}}class Am extends Im{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=mr(i);if(!Xt(r)&&!mr(r)&&(i=Ce(i),r=Ce(r)),!ue(e)&&Tt(i)&&!Tt(r))return l||(i.value=r),!0}const o=ue(e)&&du(n)?Number(n)<e.length:ke(e,n),c=Reflect.set(e,n,r,Tt(e)?e:s);return e===Ce(s)&&(o?lr(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),c}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!In(n)||!vm.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",ue(e)?"length":Ur),Reflect.ownKeys(e)}}class fw extends Im{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dw=new Am,pw=new fw,mw=new Am(!0);const vl=t=>t,Do=t=>Reflect.getPrototypeOf(t);function gw(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=ps(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?vl:e?la:at;return!e&&_t(i,"iterate",l?Tl:Ur),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Vo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _w(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);t||(lr(s,c)&&_t(o,"get",s),_t(o,"get",c));const{has:l}=Do(o),u=e?vl:t?la:at;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&_t(Ce(s),"iterate",Ur),s.size},has(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);return t||(lr(s,c)&&_t(o,"has",s),_t(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ce(c),u=e?vl:t?la:at;return!t&&_t(l,"iterate",Ur),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return vt(n,t?{add:Vo("add"),set:Vo("set"),delete:Vo("delete"),clear:Vo("clear")}:{add(s){!e&&!Xt(s)&&!mr(s)&&(s=Ce(s));const i=Ce(this);return Do(i).has.call(i,s)||(i.add(s),Nn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!mr(i)&&(i=Ce(i));const o=Ce(this),{has:c,get:l}=Do(o);let u=c.call(o,s);u||(s=Ce(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?lr(i,f)&&Nn(o,"set",s,i):Nn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:c}=Do(i);let l=o.call(i,s);l||(s=Ce(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Nn(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Nn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gw(s,t,e)}),n}function wu(t,e){const n=_w(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const yw={get:wu(!1,!1)},Ew={get:wu(!1,!0)},ww={get:wu(!0,!1)};const bm=new WeakMap,Rm=new WeakMap,Sm=new WeakMap,Tw=new WeakMap;function vw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iw(t){return t.__v_skip||!Object.isExtensible(t)?0:vw(KE(t))}function Qa(t){return mr(t)?t:Tu(t,!1,dw,yw,bm)}function Pm(t){return Tu(t,!1,mw,Ew,Rm)}function Cm(t){return Tu(t,!0,pw,ww,Sm)}function Tu(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Iw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ms(t){return mr(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function vu(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Aw(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&um(t,"__v_skip",!0),t}const at=t=>Le(t)?Qa(t):t,la=t=>Le(t)?Cm(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function Bt(t){return km(t,!1)}function bw(t){return km(t,!0)}function km(t,e){return Tt(t)?t:new Rw(t,e)}class Rw{constructor(e,n){this.dep=new Eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||mr(e);e=r?e:Ce(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function gs(t){return Tt(t)?t.value:t}const Sw={get:(t,e,n)=>e==="__v_raw"?t:gs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Om(t){return ms(t)?t:new Proxy(t,Sw)}class Pw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return gm(this,!0),!0}get value(){const e=this.dep.track();return Em(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cw(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Pw(r,s,n)}const xo={},ua=new WeakMap;let Vr;function kw(t,e=!1,n=Vr){if(n){let r=ua.get(n);r||ua.set(n,r=[]),r.push(t)}}function Ow(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:Xt(H)||s===!1||s===0?Dn(H,1):Dn(H);let f,p,m,_,w=!1,P=!1;if(Tt(t)?(p=()=>t.value,w=Xt(t)):ms(t)?(p=()=>u(t),w=!0):ue(t)?(P=!0,w=t.some(H=>ms(H)||Xt(H)),p=()=>t.map(H=>{if(Tt(H))return H.value;if(ms(H))return u(H);if(pe(H))return l?l(H,2):H()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Fn();try{m()}finally{Un()}}const H=Vr;Vr=f;try{return l?l(t,3,[_]):t(_)}finally{Vr=H}}:p=mn,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>Dn(H(),oe)}const S=iw(),U=()=>{f.stop(),S&&S.active&&fu(S.effects,f)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),U()}}let B=P?new Array(t.length).fill(xo):xo;const $=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const oe=f.run();if(s||w||(P?oe.some((me,A)=>lr(me,B[A])):lr(oe,B))){m&&m();const me=Vr;Vr=f;try{const A=[oe,B===xo?void 0:P&&B[0]===xo?[]:B,_];B=oe,l?l(e,3,A):e(...A)}finally{Vr=me}}}else f.run()};return c&&c($),f=new pm(p),f.scheduler=o?()=>o($,!1):$,_=H=>kw(H,!1,f),m=f.onStop=()=>{const H=ua.get(f);if(H){if(l)l(H,4);else for(const oe of H)oe();ua.delete(f)}},e?r?$(!0):B=f.run():o?o($.bind(null,!0),!0):f.run(),U.pause=f.pause.bind(f),U.resume=f.resume.bind(f),U.stop=U,U}function Dn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))Dn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Dn(t[r],e,n);else if(qa(t)||ps(t))t.forEach(r=>{Dn(r,e,n)});else if(lm(t)){for(const r in t)Dn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Dn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Ja(s,e,n)}}function An(t,e,n,r){if(pe(t)){const s=Ji(t,e,n,r);return s&&am(s)&&s.catch(i=>{Ja(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(An(t[i],e,n,r));return s}}function Ja(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Fn(),Ji(i,null,10,[t,l,u]),Un();return}}Nw(t,n,s,r,o)}function Nw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let fn=-1;const _s=[];let tr=null,os=0;const Nm=Promise.resolve();let ha=null;function Iu(t){const e=ha||Nm;return t?e.then(this?t.bind(this):t):e}function Dw(t){let e=fn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=Di(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Au(t){if(!(t.flags&1)){const e=Di(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=Di(n)?St.push(t):St.splice(Dw(e),0,t),t.flags|=1,Dm()}}function Dm(){ha||(ha=Nm.then(xm))}function Vw(t){ue(t)?_s.push(...t):tr&&t.id===-1?tr.splice(os+1,0,t):t.flags&1||(_s.push(t),t.flags|=1),Dm()}function Af(t,e,n=fn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vm(t){if(_s.length){const e=[...new Set(_s)].sort((n,r)=>Di(n)-Di(r));if(_s.length=0,tr){tr.push(...e);return}for(tr=e,os=0;os<tr.length;os++){const n=tr[os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,os=0}}const Di=t=>t.id==null?t.flags&2?-1:1/0:t.id;function xm(t){try{for(fn=0;fn<St.length;fn++){const e=St[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<St.length;fn++){const e=St[fn];e&&(e.flags&=-2)}fn=-1,St.length=0,Vm(),ha=null,(St.length||_s.length)&&xm()}}let $t=null,Mm=null;function fa(t){const e=$t;return $t=t,Mm=t&&t.type.__scopeId||null,e}function kn(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ga(-1);const i=fa(e);let o;try{o=t(...s)}finally{fa(i),r._d&&ga(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Jt(t,e){if($t===null)return t;const n=ec($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Dn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Fn(),An(l,n,8,[t.el,c,t,e]),Un())}}const xw=Symbol("_vte"),Mw=t=>t.__isTeleport,Lw=Symbol("_leaveCb");function bu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,bu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Lm(t,e){return pe(t)?vt({name:t.name},e,{setup:t}):t}function Fm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const da=new WeakMap;function Ei(t,e,n,r,s=!1){if(ue(t)){t.forEach((w,P)=>Ei(w,e&&(ue(e)?e[P]:e),n,r,s));return}if(wi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ec(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ve?c.refs={}:c.refs,p=c.setupState,m=Ce(p),_=p===Ve?om:w=>ke(m,w);if(u!=null&&u!==l){if(bf(e),Ze(u))f[u]=null,_(u)&&(p[u]=null);else if(Tt(u)){u.value=null;const w=e;w.k&&(f[w.k]=null)}}if(pe(l))Ji(l,c,12,[o,f]);else{const w=Ze(l),P=Tt(l);if(w||P){const S=()=>{if(t.f){const U=w?_(l)?p[l]:f[l]:l.value;if(s)ue(U)&&fu(U,i);else if(ue(U))U.includes(i)||U.push(i);else if(w)f[l]=[i],_(l)&&(p[l]=f[l]);else{const B=[i];l.value=B,t.k&&(f[t.k]=B)}}else w?(f[l]=o,_(l)&&(p[l]=o)):P&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const U=()=>{S(),da.delete(t)};U.id=-1,da.set(t,U),Ft(U,n)}else bf(t),S()}}}function bf(t){const e=da.get(t);e&&(e.flags|=8,da.delete(t))}Wa().requestIdleCallback;Wa().cancelIdleCallback;const wi=t=>!!t.type.__asyncLoader,Um=t=>t.type.__isKeepAlive;function Fw(t,e){Bm(t,"a",e)}function Uw(t,e){Bm(t,"da",e)}function Bm(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Um(s.parent.vnode)&&Bw(r,e,n,s),s=s.parent}}function Bw(t,e,n,r){const s=Xa(e,t,r,!0);jm(()=>{fu(r[e],s)},n)}function Xa(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Fn();const c=Xi(n),l=An(e,n,t,o);return c(),Un(),l});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=Et)=>{(!xi||t==="sp")&&Xa(t,(...r)=>e(...r),n)},jw=Wn("bm"),$w=Wn("m"),qw=Wn("bu"),Hw=Wn("u"),zw=Wn("bum"),jm=Wn("um"),Ww=Wn("sp"),Kw=Wn("rtg"),Gw=Wn("rtc");function Qw(t,e=Et){Xa("ec",t,e)}const Jw="components";function pa(t,e){return Yw(Jw,t,!0,e)||t}const Xw=Symbol.for("v-ndc");function Yw(t,e,n=!0,r=!1){const s=$t||Et;if(s){const i=s.type;{const c=$T(i,!1);if(c&&(c===e||c===Zt(e)||c===za(Zt(e))))return i}const o=Rf(s[t]||i[t],e)||Rf(s.appContext[t],e);return!o&&r?i:o}}function Rf(t,e){return t&&(t[e]||t[Zt(e)]||t[za(Zt(e))])}function Zw(t,e,n,r){let s;const i=n,o=ue(t);if(o||Ze(t)){const c=o&&ms(t);let l=!1,u=!1;c&&(l=!Xt(t),u=mr(t),t=Ga(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?la(at(t[f])):at(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Il=t=>t?ag(t)?ec(t):Il(t.parent):null,Ti=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qm(t),$forceUpdate:t=>t.f||(t.f=()=>{Au(t.update)}),$nextTick:t=>t.n||(t.n=Iu.bind(t.proxy)),$watch:t=>wT.bind(t)}),Jc=(t,e)=>t!==Ve&&!t.__isScriptSetup&&ke(t,e),eT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jc(r,e))return o[e]=1,r[e];if(s!==Ve&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ve&&ke(n,e))return o[e]=4,n[e];Al&&(o[e]=0)}}const f=Ti[e];let p,m;if(f)return e==="$attrs"&&_t(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&ke(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jc(s,e)?(s[e]=n,!0):r!==Ve&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ve&&c[0]!=="$"&&ke(t,c)||Jc(e,c)||(l=i[0])&&ke(l,c)||ke(r,c)||ke(Ti,c)||ke(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sf(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Al=!0;function tT(t){const e=qm(t),n=t.proxy,r=t.ctx;Al=!1,e.beforeCreate&&Pf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:w,activated:P,deactivated:S,beforeDestroy:U,beforeUnmount:B,destroyed:$,unmounted:H,render:oe,renderTracked:me,renderTriggered:A,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:R,components:C,directives:T,filters:qe}=e;if(u&&nT(u,r,null),o)for(const ye in o){const he=o[ye];pe(he)&&(r[ye]=he.bind(n))}if(s){const ye=s.call(n,n);Le(ye)&&(t.data=Qa(ye))}if(Al=!0,i)for(const ye in i){const he=i[ye],ht=pe(he)?he.bind(n,n):pe(he.get)?he.get.bind(n,n):mn,Vt=!pe(he)&&pe(he.set)?he.set.bind(n):mn,We=tn({get:ht,set:Vt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>We.value,set:Se=>We.value=Se})}if(c)for(const ye in c)$m(c[ye],r,n,ye);if(l){const ye=pe(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(he=>{Ho(he,ye[he])})}f&&Pf(f,t,"c");function Re(ye,he){ue(he)?he.forEach(ht=>ye(ht.bind(n))):he&&ye(he.bind(n))}if(Re(jw,p),Re($w,m),Re(qw,_),Re(Hw,w),Re(Fw,P),Re(Uw,S),Re(Qw,y),Re(Gw,me),Re(Kw,A),Re(zw,B),Re(jm,H),Re(Ww,v),ue(b))if(b.length){const ye=t.exposed||(t.exposed={});b.forEach(he=>{Object.defineProperty(ye,he,{get:()=>n[he],set:ht=>n[he]=ht,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===mn&&(t.render=oe),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),T&&(t.directives=T),v&&Fm(t)}function nT(t,e,n=mn){ue(t)&&(t=bl(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=gn(s.from||r,s.default,!0):i=gn(s.from||r):i=gn(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Pf(t,e,n){An(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $m(t,e,n,r){let s=r.includes(".")?ng(n,r):()=>n[r];if(Ze(t)){const i=e[t];pe(i)&&zo(s,i)}else if(pe(t))zo(s,t.bind(n));else if(Le(t))if(ue(t))t.forEach(i=>$m(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&zo(s,i,t)}}function qm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ma(l,u,o,!0)),ma(l,e,o)),Le(e)&&i.set(e,l),l}function ma(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ma(t,i,n,!0),s&&s.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=rT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const rT={data:Cf,props:kf,emits:kf,methods:li,computed:li,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:li,directives:li,watch:iT,provide:Cf,inject:sT};function Cf(t,e){return e?t?function(){return vt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function sT(t,e){return li(bl(t),bl(e))}function bl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function li(t,e){return t?vt(Object.create(null),t,e):e}function kf(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:vt(Object.create(null),Sf(t),Sf(e??{})):e}function iT(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Hm(){return{app:null,config:{isNativeTag:om,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oT=0;function aT(t,e){return function(r,s=null){pe(r)||(r=vt({},r)),s!=null&&!Le(s)&&(s=null);const i=Hm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:oT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:HT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Ke(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,ec(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(An(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ys;ys=u;try{return f()}finally{ys=p}}};return u}}let ys=null;function Ho(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function gn(t,e,n=!1){const r=LT();if(r||ys){let s=ys?ys._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const zm={},Wm=()=>Object.create(zm),Km=t=>Object.getPrototypeOf(t)===zm;function cT(t,e,n,r=!1){const s={},i=Wm();t.propsDefaults=Object.create(null),Gm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Pm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ce(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ya(t.emitsOptions,m))continue;const _=e[m];if(l)if(ke(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const w=Zt(m);s[w]=Rl(l,c,w,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Gm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!ke(e,p)&&((f=Qr(p))===p||!ke(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Rl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Nn(t.attrs,"set","")}function Gm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(gi(l))continue;const u=e[l];let f;s&&ke(s,f=Zt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ya(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ce(n),u=c||Ve;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Rl(s,l,p,u[p],t,!ke(u,p))}}return o}function Rl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ke(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Xi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qr(n))&&(r=!0))}return r}const uT=new WeakMap;function Qm(t,e,n=!1){const r=n?uT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,_]=Qm(p,e,!0);vt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Le(t)&&r.set(t,ds),ds;if(ue(i))for(let f=0;f<i.length;f++){const p=Zt(i[f]);Of(p)&&(o[p]=Ve)}else if(i)for(const f in i){const p=Zt(f);if(Of(p)){const m=i[f],_=o[p]=ue(m)||pe(m)?{type:m}:vt({},m),w=_.type;let P=!1,S=!0;if(ue(w))for(let U=0;U<w.length;++U){const B=w[U],$=pe(B)&&B.name;if($==="Boolean"){P=!0;break}else $==="String"&&(S=!1)}else P=pe(w)&&w.name==="Boolean";_[0]=P,_[1]=S,(P||ke(_,"default"))&&c.push(p)}}const u=[o,c];return Le(t)&&r.set(t,u),u}function Of(t){return t[0]!=="$"&&!gi(t)}const Ru=t=>t==="_"||t==="_ctx"||t==="$stable",Su=t=>ue(t)?t.map(pn):[pn(t)],hT=(t,e,n)=>{if(e._n)return e;const r=kn((...s)=>Su(e(...s)),n);return r._c=!1,r},Jm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ru(s))continue;const i=t[s];if(pe(i))e[s]=hT(s,i,r);else if(i!=null){const o=Su(i);e[s]=()=>o}}},Xm=(t,e)=>{const n=Su(e);t.slots.default=()=>n},Ym=(t,e,n)=>{for(const r in e)(n||!Ru(r))&&(t[r]=e[r])},fT=(t,e,n)=>{const r=t.slots=Wm();if(t.vnode.shapeFlag&32){const s=e._;s?(Ym(r,e,n),n&&um(r,"_",s,!0)):Jm(e,r)}else e&&Xm(t,e)},dT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ym(s,e,n):(i=!e.$stable,Jm(e,s)),o=e}else e&&(Xm(t,e),o={default:1});if(i)for(const c in s)!Ru(c)&&o[c]==null&&delete s[c]},Ft=PT;function pT(t){return mT(t)}function mT(t,e){const n=Wa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=mn,insertStaticContent:w}=t,P=(E,I,k,M=null,j=null,L=null,Q=void 0,W=null,z=!!I.dynamicChildren)=>{if(E===I)return;E&&!oi(E,I)&&(M=x(E),Se(E,j,L,!0),E=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Y}=I;switch(q){case Za:S(E,I,k,M);break;case gr:U(E,I,k,M);break;case Yc:E==null&&B(I,k,M,Q);break;case Kt:C(E,I,k,M,j,L,Q,W,z);break;default:Y&1?oe(E,I,k,M,j,L,Q,W,z):Y&6?T(E,I,k,M,j,L,Q,W,z):(Y&64||Y&128)&&q.process(E,I,k,M,j,L,Q,W,z,te)}se!=null&&j?Ei(se,E&&E.ref,L,I||E,!I):se==null&&E&&E.ref!=null&&Ei(E.ref,null,L,E,!0)},S=(E,I,k,M)=>{if(E==null)r(I.el=c(I.children),k,M);else{const j=I.el=E.el;I.children!==E.children&&u(j,I.children)}},U=(E,I,k,M)=>{E==null?r(I.el=l(I.children||""),k,M):I.el=E.el},B=(E,I,k,M)=>{[E.el,E.anchor]=w(E.children,I,k,M,E.el,E.anchor)},$=({el:E,anchor:I},k,M)=>{let j;for(;E&&E!==I;)j=m(E),r(E,k,M),E=j;r(I,k,M)},H=({el:E,anchor:I})=>{let k;for(;E&&E!==I;)k=m(E),s(E),E=k;s(I)},oe=(E,I,k,M,j,L,Q,W,z)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),E==null?me(I,k,M,j,L,Q,W,z):v(E,I,j,L,Q,W,z)},me=(E,I,k,M,j,L,Q,W)=>{let z,q;const{props:se,shapeFlag:Y,transition:ne,dirs:le}=E;if(z=E.el=o(E.type,L,se&&se.is,se),Y&8?f(z,E.children):Y&16&&y(E.children,z,null,M,j,Xc(E,L),Q,W),le&&Nr(E,null,M,"created"),A(z,E,E.scopeId,Q,M),se){for(const ge in se)ge!=="value"&&!gi(ge)&&i(z,ge,null,se[ge],L,M);"value"in se&&i(z,"value",null,se.value,L),(q=se.onVnodeBeforeMount)&&un(q,M,E)}le&&Nr(E,null,M,"beforeMount");const ie=gT(j,ne);ie&&ne.beforeEnter(z),r(z,I,k),((q=se&&se.onVnodeMounted)||ie||le)&&Ft(()=>{q&&un(q,M,E),ie&&ne.enter(z),le&&Nr(E,null,M,"mounted")},j)},A=(E,I,k,M,j)=>{if(k&&_(E,k),M)for(let L=0;L<M.length;L++)_(E,M[L]);if(j){let L=j.subTree;if(I===L||sg(L.type)&&(L.ssContent===I||L.ssFallback===I)){const Q=j.vnode;A(E,Q,Q.scopeId,Q.slotScopeIds,j.parent)}}},y=(E,I,k,M,j,L,Q,W,z=0)=>{for(let q=z;q<E.length;q++){const se=E[q]=W?nr(E[q]):pn(E[q]);P(null,se,I,k,M,j,L,Q,W)}},v=(E,I,k,M,j,L,Q)=>{const W=I.el=E.el;let{patchFlag:z,dynamicChildren:q,dirs:se}=I;z|=E.patchFlag&16;const Y=E.props||Ve,ne=I.props||Ve;let le;if(k&&Dr(k,!1),(le=ne.onVnodeBeforeUpdate)&&un(le,k,I,E),se&&Nr(I,E,k,"beforeUpdate"),k&&Dr(k,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&f(W,""),q?b(E.dynamicChildren,q,W,k,M,Xc(I,j),L):Q||he(E,I,W,null,k,M,Xc(I,j),L,!1),z>0){if(z&16)R(W,Y,ne,k,j);else if(z&2&&Y.class!==ne.class&&i(W,"class",null,ne.class,j),z&4&&i(W,"style",Y.style,ne.style,j),z&8){const ie=I.dynamicProps;for(let ge=0;ge<ie.length;ge++){const ve=ie[ge],nt=Y[ve],rt=ne[ve];(rt!==nt||ve==="value")&&i(W,ve,nt,rt,j,k)}}z&1&&E.children!==I.children&&f(W,I.children)}else!Q&&q==null&&R(W,Y,ne,k,j);((le=ne.onVnodeUpdated)||se)&&Ft(()=>{le&&un(le,k,I,E),se&&Nr(I,E,k,"updated")},M)},b=(E,I,k,M,j,L,Q)=>{for(let W=0;W<I.length;W++){const z=E[W],q=I[W],se=z.el&&(z.type===Kt||!oi(z,q)||z.shapeFlag&198)?p(z.el):k;P(z,q,se,null,M,j,L,Q,!0)}},R=(E,I,k,M,j)=>{if(I!==k){if(I!==Ve)for(const L in I)!gi(L)&&!(L in k)&&i(E,L,I[L],null,j,M);for(const L in k){if(gi(L))continue;const Q=k[L],W=I[L];Q!==W&&L!=="value"&&i(E,L,W,Q,j,M)}"value"in k&&i(E,"value",I.value,k.value,j)}},C=(E,I,k,M,j,L,Q,W,z)=>{const q=I.el=E?E.el:c(""),se=I.anchor=E?E.anchor:c("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:le}=I;le&&(W=W?W.concat(le):le),E==null?(r(q,k,M),r(se,k,M),y(I.children||[],k,se,j,L,Q,W,z)):Y>0&&Y&64&&ne&&E.dynamicChildren?(b(E.dynamicChildren,ne,k,j,L,Q,W),(I.key!=null||j&&I===j.subTree)&&Zm(E,I,!0)):he(E,I,k,se,j,L,Q,W,z)},T=(E,I,k,M,j,L,Q,W,z)=>{I.slotScopeIds=W,E==null?I.shapeFlag&512?j.ctx.activate(I,k,M,Q,z):qe(I,k,M,j,L,Q,z):At(E,I,z)},qe=(E,I,k,M,j,L,Q)=>{const W=E.component=MT(E,M,j);if(Um(E)&&(W.ctx.renderer=te),FT(W,!1,Q),W.asyncDep){if(j&&j.registerDep(W,Re,Q),!E.el){const z=W.subTree=Ke(gr);U(null,z,I,k),E.placeholder=z.el}}else Re(W,E,I,k,j,L,Q)},At=(E,I,k)=>{const M=I.component=E.component;if(RT(E,I,k))if(M.asyncDep&&!M.asyncResolved){ye(M,I,k);return}else M.next=I,M.update();else I.el=E.el,M.vnode=I},Re=(E,I,k,M,j,L,Q)=>{const W=()=>{if(E.isMounted){let{next:Y,bu:ne,u:le,parent:ie,vnode:ge}=E;{const ft=eg(E);if(ft){Y&&(Y.el=ge.el,ye(E,Y,Q)),ft.asyncDep.then(()=>{E.isUnmounted||W()});return}}let ve=Y,nt;Dr(E,!1),Y?(Y.el=ge.el,ye(E,Y,Q)):Y=ge,ne&&qo(ne),(nt=Y.props&&Y.props.onVnodeBeforeUpdate)&&un(nt,ie,Y,ge),Dr(E,!0);const rt=Df(E),zt=E.subTree;E.subTree=rt,P(zt,rt,p(zt.el),x(zt),E,j,L),Y.el=rt.el,ve===null&&ST(E,rt.el),le&&Ft(le,j),(nt=Y.props&&Y.props.onVnodeUpdated)&&Ft(()=>un(nt,ie,Y,ge),j)}else{let Y;const{el:ne,props:le}=I,{bm:ie,m:ge,parent:ve,root:nt,type:rt}=E,zt=wi(I);Dr(E,!1),ie&&qo(ie),!zt&&(Y=le&&le.onVnodeBeforeMount)&&un(Y,ve,I),Dr(E,!0);{nt.ce&&nt.ce._def.shadowRoot!==!1&&nt.ce._injectChildStyle(rt);const ft=E.subTree=Df(E);P(null,ft,k,M,E,j,L),I.el=ft.el}if(ge&&Ft(ge,j),!zt&&(Y=le&&le.onVnodeMounted)){const ft=I;Ft(()=>un(Y,ve,ft),j)}(I.shapeFlag&256||ve&&wi(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&Ft(E.a,j),E.isMounted=!0,I=k=M=null}};E.scope.on();const z=E.effect=new pm(W);E.scope.off();const q=E.update=z.run.bind(z),se=E.job=z.runIfDirty.bind(z);se.i=E,se.id=E.uid,z.scheduler=()=>Au(se),Dr(E,!0),q()},ye=(E,I,k)=>{I.component=E;const M=E.vnode.props;E.vnode=I,E.next=null,lT(E,I.props,M,k),dT(E,I.children,k),Fn(),Af(E),Un()},he=(E,I,k,M,j,L,Q,W,z=!1)=>{const q=E&&E.children,se=E?E.shapeFlag:0,Y=I.children,{patchFlag:ne,shapeFlag:le}=I;if(ne>0){if(ne&128){Vt(q,Y,k,M,j,L,Q,W,z);return}else if(ne&256){ht(q,Y,k,M,j,L,Q,W,z);return}}le&8?(se&16&&Pt(q,j,L),Y!==q&&f(k,Y)):se&16?le&16?Vt(q,Y,k,M,j,L,Q,W,z):Pt(q,j,L,!0):(se&8&&f(k,""),le&16&&y(Y,k,M,j,L,Q,W,z))},ht=(E,I,k,M,j,L,Q,W,z)=>{E=E||ds,I=I||ds;const q=E.length,se=I.length,Y=Math.min(q,se);let ne;for(ne=0;ne<Y;ne++){const le=I[ne]=z?nr(I[ne]):pn(I[ne]);P(E[ne],le,k,null,j,L,Q,W,z)}q>se?Pt(E,j,L,!0,!1,Y):y(I,k,M,j,L,Q,W,z,Y)},Vt=(E,I,k,M,j,L,Q,W,z)=>{let q=0;const se=I.length;let Y=E.length-1,ne=se-1;for(;q<=Y&&q<=ne;){const le=E[q],ie=I[q]=z?nr(I[q]):pn(I[q]);if(oi(le,ie))P(le,ie,k,null,j,L,Q,W,z);else break;q++}for(;q<=Y&&q<=ne;){const le=E[Y],ie=I[ne]=z?nr(I[ne]):pn(I[ne]);if(oi(le,ie))P(le,ie,k,null,j,L,Q,W,z);else break;Y--,ne--}if(q>Y){if(q<=ne){const le=ne+1,ie=le<se?I[le].el:M;for(;q<=ne;)P(null,I[q]=z?nr(I[q]):pn(I[q]),k,ie,j,L,Q,W,z),q++}}else if(q>ne)for(;q<=Y;)Se(E[q],j,L,!0),q++;else{const le=q,ie=q,ge=new Map;for(q=ie;q<=ne;q++){const st=I[q]=z?nr(I[q]):pn(I[q]);st.key!=null&&ge.set(st.key,q)}let ve,nt=0;const rt=ne-ie+1;let zt=!1,ft=0;const Qn=new Array(rt);for(q=0;q<rt;q++)Qn[q]=0;for(q=le;q<=Y;q++){const st=E[q];if(nt>=rt){Se(st,j,L,!0);continue}let Wt;if(st.key!=null)Wt=ge.get(st.key);else for(ve=ie;ve<=ne;ve++)if(Qn[ve-ie]===0&&oi(st,I[ve])){Wt=ve;break}Wt===void 0?Se(st,j,L,!0):(Qn[Wt-ie]=q+1,Wt>=ft?ft=Wt:zt=!0,P(st,I[Wt],k,null,j,L,Q,W,z),nt++)}const Ws=zt?_T(Qn):ds;for(ve=Ws.length-1,q=rt-1;q>=0;q--){const st=ie+q,Wt=I[st],_o=I[st+1],es=st+1<se?_o.el||_o.placeholder:M;Qn[q]===0?P(null,Wt,k,es,j,L,Q,W,z):zt&&(ve<0||q!==Ws[ve]?We(Wt,k,es,2):ve--)}}},We=(E,I,k,M,j=null)=>{const{el:L,type:Q,transition:W,children:z,shapeFlag:q}=E;if(q&6){We(E.component.subTree,I,k,M);return}if(q&128){E.suspense.move(I,k,M);return}if(q&64){Q.move(E,I,k,te);return}if(Q===Kt){r(L,I,k);for(let Y=0;Y<z.length;Y++)We(z[Y],I,k,M);r(E.anchor,I,k);return}if(Q===Yc){$(E,I,k);return}if(M!==2&&q&1&&W)if(M===0)W.beforeEnter(L),r(L,I,k),Ft(()=>W.enter(L),j);else{const{leave:Y,delayLeave:ne,afterLeave:le}=W,ie=()=>{E.ctx.isUnmounted?s(L):r(L,I,k)},ge=()=>{L._isLeaving&&L[Lw](!0),Y(L,()=>{ie(),le&&le()})};ne?ne(L,ie,ge):ge()}else r(L,I,k)},Se=(E,I,k,M=!1,j=!1)=>{const{type:L,props:Q,ref:W,children:z,dynamicChildren:q,shapeFlag:se,patchFlag:Y,dirs:ne,cacheIndex:le}=E;if(Y===-2&&(j=!1),W!=null&&(Fn(),Ei(W,null,k,E,!0),Un()),le!=null&&(I.renderCache[le]=void 0),se&256){I.ctx.deactivate(E);return}const ie=se&1&&ne,ge=!wi(E);let ve;if(ge&&(ve=Q&&Q.onVnodeBeforeUnmount)&&un(ve,I,E),se&6)Mt(E.component,k,M);else{if(se&128){E.suspense.unmount(k,M);return}ie&&Nr(E,null,I,"beforeUnmount"),se&64?E.type.remove(E,I,k,te,M):q&&!q.hasOnce&&(L!==Kt||Y>0&&Y&64)?Pt(q,I,k,!1,!0):(L===Kt&&Y&384||!j&&se&16)&&Pt(z,I,k),M&&Ne(E)}(ge&&(ve=Q&&Q.onVnodeUnmounted)||ie)&&Ft(()=>{ve&&un(ve,I,E),ie&&Nr(E,null,I,"unmounted")},k)},Ne=E=>{const{type:I,el:k,anchor:M,transition:j}=E;if(I===Kt){xt(k,M);return}if(I===Yc){H(E);return}const L=()=>{s(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:Q,delayLeave:W}=j,z=()=>Q(k,L);W?W(E.el,L,z):z()}else L()},xt=(E,I)=>{let k;for(;E!==I;)k=m(E),s(E),E=k;s(I)},Mt=(E,I,k)=>{const{bum:M,scope:j,job:L,subTree:Q,um:W,m:z,a:q}=E;Nf(z),Nf(q),M&&qo(M),j.stop(),L&&(L.flags|=8,Se(Q,E,I,k)),W&&Ft(W,I),Ft(()=>{E.isUnmounted=!0},I)},Pt=(E,I,k,M=!1,j=!1,L=0)=>{for(let Q=L;Q<E.length;Q++)Se(E[Q],I,k,M,j)},x=E=>{if(E.shapeFlag&6)return x(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),k=I&&I[xw];return k?m(k):I};let Z=!1;const J=(E,I,k)=>{E==null?I._vnode&&Se(I._vnode,null,null,!0):P(I._vnode||null,E,I,null,null,null,k),I._vnode=E,Z||(Z=!0,Af(),Vm(),Z=!1)},te={p:P,um:Se,m:We,r:Ne,mt:qe,mc:y,pc:he,pbc:b,n:x,o:t};return{render:J,hydrate:void 0,createApp:aT(J)}}function Xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Zm(o,c)),c.type===Za&&c.patchFlag!==-1&&(c.el=o.el),c.type===gr&&!c.el&&(c.el=o.el)}}function _T(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function eg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:eg(e)}function Nf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yT=Symbol.for("v-scx"),ET=()=>gn(yT);function zo(t,e,n){return tg(t,e,n)}function tg(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,c=vt({},n),l=e&&r||!e&&i!=="post";let u;if(xi){if(i==="sync"){const _=ET();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=mn,_.resume=mn,_.pause=mn,_}}const f=Et;c.call=(_,w,P)=>An(_,f,w,P);let p=!1;i==="post"?c.scheduler=_=>{Ft(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,w)=>{w?_():Au(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Ow(t,e,c);return xi&&(u?u.push(m):l&&m()),m}function wT(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?ng(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Xi(this),c=tg(s,i.bind(r),n);return o(),c}function ng(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const TT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${Qr(e)}Modifiers`];function vT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&TT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ze(f)?f.trim():f)),o.number&&(s=n.map(ca)));let c,l=r[c=zc(e)]||r[c=zc(Zt(e))];!l&&i&&(l=r[c=zc(Qr(e))]),l&&An(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,An(u,t,6,s)}}const IT=new WeakMap;function rg(t,e,n=!1){const r=n?IT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=rg(u,e,!0);f&&(c=!0,vt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):vt(o,i),Le(t)&&r.set(t,o),o)}function Ya(t,e){return!t||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Qr(e))||ke(t,e))}function Df(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:w,inheritAttrs:P}=t,S=fa(t);let U,B;try{if(n.shapeFlag&4){const H=s||r,oe=H;U=pn(u.call(oe,H,f,p,_,m,w)),B=c}else{const H=e;U=pn(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),B=e.props?c:AT(c)}}catch(H){vi.length=0,Ja(H,t,1),U=Ke(gr)}let $=U;if(B&&P!==!1){const H=Object.keys(B),{shapeFlag:oe}=$;H.length&&oe&7&&(i&&H.some(hu)&&(B=bT(B,i)),$=bs($,B,!1,!0))}return n.dirs&&($=bs($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&bu($,n.transition),U=$,fa(S),U}const AT=t=>{let e;for(const n in t)(n==="class"||n==="style"||$a(n))&&((e||(e={}))[n]=t[n]);return e},bT=(t,e)=>{const n={};for(const r in t)(!hu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function RT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Vf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ya(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Vf(r,o,u):!0:!!o;return!1}function Vf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ya(n,i))return!0}return!1}function ST({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const sg=t=>t.__isSuspense;function PT(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Vw(t)}const Kt=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),gr=Symbol.for("v-cmt"),Yc=Symbol.for("v-stc"),vi=[];let qt=null;function Be(t=!1){vi.push(qt=t?null:[])}function CT(){vi.pop(),qt=vi[vi.length-1]||null}let Vi=1;function ga(t,e=!1){Vi+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function ig(t){return t.dynamicChildren=Vi>0?qt||ds:null,CT(),Vi>0&&qt&&qt.push(t),t}function $e(t,e,n,r,s,i){return ig(G(t,e,n,r,s,i,!0))}function kT(t,e,n,r,s){return ig(Ke(t,e,n,r,s,!0))}function _a(t){return t?t.__v_isVNode===!0:!1}function oi(t,e){return t.type===e.type&&t.key===e.key}const og=({key:t})=>t??null,Wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Tt(t)||pe(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,r=0,s=null,i=t===Kt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&og(e),ref:e&&Wo(e),scopeId:Mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return c?(Pu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),Vi>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const Ke=OT;function OT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xw)&&(t=gr),_a(t)){const c=bs(t,e,!0);return n&&Pu(c,n),Vi>0&&!i&&qt&&(c.shapeFlag&6?qt[qt.indexOf(t)]=c:qt.push(c)),c.patchFlag=-2,c}if(qT(t)&&(t=t.__vccOpts),e){e=NT(e);let{class:c,style:l}=e;c&&!Ze(c)&&(e.class=mu(c)),Le(l)&&(vu(l)&&!ue(l)&&(l=vt({},l)),e.style=pu(l))}const o=Ze(t)?1:sg(t)?128:Mw(t)?64:Le(t)?4:pe(t)?2:0;return G(t,e,n,r,s,o,i,!0)}function NT(t){return t?vu(t)||Km(t)?vt({},t):t:null}function bs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?DT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&og(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Wo(e)):[i,Wo(e)]:Wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bs(t.ssContent),ssFallback:t.ssFallback&&bs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&bu(f,l.clone(f)),f}function Ut(t=" ",e=0){return Ke(Za,null,t,e)}function Bn(t="",e=!1){return e?(Be(),kT(gr,null,t)):Ke(gr,null,t)}function pn(t){return t==null||typeof t=="boolean"?Ke(gr):ue(t)?Ke(Kt,null,t.slice()):_a(t)?nr(t):Ke(Za,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bs(t)}function Pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Km(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[Ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function DT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mu([e.class,r.class]));else if(s==="style")e.style=pu([e.style,r.style]);else if($a(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){An(t,e,7,[n,r])}const VT=Hm();let xT=0;function MT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VT,i={uid:xT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qm(r,s),emitsOptions:rg(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vT.bind(null,i),t.ce&&t.ce(i),i}let Et=null;const LT=()=>Et||$t;let ya,Sl;{const t=Wa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ya=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),Sl=e("__VUE_SSR_SETTERS__",n=>xi=n)}const Xi=t=>{const e=Et;return ya(t),t.scope.on(),()=>{t.scope.off(),ya(e)}},xf=()=>{Et&&Et.scope.off(),ya(null)};function ag(t){return t.vnode.shapeFlag&4}let xi=!1;function FT(t,e=!1,n=!1){e&&Sl(e);const{props:r,children:s}=t.vnode,i=ag(t);cT(t,r,i,e),fT(t,s,n||e);const o=i?UT(t,e):void 0;return e&&Sl(!1),o}function UT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eT);const{setup:r}=n;if(r){Fn();const s=t.setupContext=r.length>1?jT(t):null,i=Xi(t),o=Ji(r,t,0,[t.props,s]),c=am(o);if(Un(),i(),(c||t.sp)&&!wi(t)&&Fm(t),c){if(o.then(xf,xf),e)return o.then(l=>{Mf(t,l)}).catch(l=>{Ja(l,t,0)});t.asyncDep=o}else Mf(t,o)}else cg(t)}function Mf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Om(e)),cg(t)}function cg(t,e,n){const r=t.type;t.render||(t.render=r.render||mn);{const s=Xi(t);Fn();try{tT(t)}finally{Un(),s()}}}const BT={get(t,e){return _t(t,"get",""),t[e]}};function jT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,BT),slots:t.slots,emit:t.emit,expose:e}}function ec(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Om(Aw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}})):t.proxy}function $T(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function qT(t){return pe(t)&&"__vccOpts"in t}const tn=(t,e)=>Cw(t,e,xi);function lg(t,e,n){const r=(i,o,c)=>{ga(-1);try{return Ke(i,o,c)}finally{ga(1)}},s=arguments.length;return s===2?Le(e)&&!ue(e)?_a(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_a(n)&&(n=[n]),r(t,e,n))}const HT="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pl;const Lf=typeof window<"u"&&window.trustedTypes;if(Lf)try{Pl=Lf.createPolicy("vue",{createHTML:t=>t})}catch{}const ug=Pl?t=>Pl.createHTML(t):t=>t,zT="http://www.w3.org/2000/svg",WT="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Ff=On&&On.createElement("template"),KT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?On.createElementNS(zT,t):e==="mathml"?On.createElementNS(WT,t):n?On.createElement(t,{is:n}):On.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ff.innerHTML=ug(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Ff.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},GT=Symbol("_vtc");function QT(t,e,n){const r=t[GT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Uf=Symbol("_vod"),JT=Symbol("_vsh"),XT=Symbol(""),YT=/(?:^|;)\s*display\s*:/;function ZT(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ko(r,c,"")}else for(const o in e)n[o]==null&&Ko(r,o,"");for(const o in n)o==="display"&&(i=!0),Ko(r,o,n[o])}else if(s){if(e!==n){const o=r[XT];o&&(n+=";"+o),r.cssText=n,i=YT.test(n)}}else e&&t.removeAttribute("style");Uf in t&&(t[Uf]=i?r.display:"",t[JT]&&(r.display="none"))}const Bf=/\s*!important$/;function Ko(t,e,n){if(ue(n))n.forEach(r=>Ko(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ev(t,e);Bf.test(n)?t.setProperty(Qr(r),n.replace(Bf,""),"important"):t[r]=n}}const jf=["Webkit","Moz","ms"],Zc={};function ev(t,e){const n=Zc[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Zc[e]=r;r=za(r);for(let s=0;s<jf.length;s++){const i=jf[s]+r;if(i in t)return Zc[e]=i}return e}const $f="http://www.w3.org/1999/xlink";function qf(t,e,n,r,s,i=tw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($f,e.slice(6,e.length)):t.setAttributeNS($f,e,n):n==null||i&&!hm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":In(n)?String(n):n)}function Hf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ug(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hm(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Mr(t,e,n,r){t.addEventListener(e,n,r)}function tv(t,e,n,r){t.removeEventListener(e,n,r)}const zf=Symbol("_vei");function nv(t,e,n,r,s=null){const i=t[zf]||(t[zf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=rv(e);if(r){const u=i[e]=ov(r,s);Mr(t,c,u,l)}else o&&(tv(t,c,o,l),i[e]=void 0)}}const Wf=/(?:Once|Passive|Capture)$/;function rv(t){let e;if(Wf.test(t)){e={};let r;for(;r=t.match(Wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qr(t.slice(2)),e]}let el=0;const sv=Promise.resolve(),iv=()=>el||(sv.then(()=>el=0),el=Date.now());function ov(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;An(av(r,n.value),e,5,[r])};return n.value=t,n.attached=iv(),n}function av(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?QT(t,r,o):e==="style"?ZT(t,n,r):$a(e)?hu(e)||nv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(t,e,r,o))?(Hf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?Hf(t,Zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qf(t,e,r,o))};function lv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Ze(n)?!1:e in t}const Ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>qo(e,n):e};function uv(t){t.target.composing=!0}function Gf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Es=Symbol("_assign"),jn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Es]=Ea(s);const i=r||s.props&&s.props.type==="number";Mr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ca(c)),t[Es](c)}),n&&Mr(t,"change",()=>{t.value=t.value.trim()}),e||(Mr(t,"compositionstart",uv),Mr(t,"compositionend",Gf),Mr(t,"change",Gf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Es]=Ea(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ca(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Cl={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=qa(e);Mr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ca(wa(o)):wa(o));t[Es](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Iu(()=>{t._assigning=!1})}),t[Es]=Ea(r)},mounted(t,{value:e}){Qf(t,e)},beforeUpdate(t,e,n){t[Es]=Ea(n)},updated(t,{value:e}){t._assigning||Qf(t,e)}};function Qf(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!qa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=wa(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=rw(e,c)>-1}else o.selected=e.has(c);else if(Ka(wa(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wa(t){return"_value"in t?t._value:t.value}const hv=["ctrl","shift","alt","meta"],fv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hv.some(n=>t[`${n}Key`]&&!e.includes(n))},dv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=fv[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},pv=vt({patchProp:cv},KT);let Jf;function mv(){return Jf||(Jf=pT(pv))}const gv=((...t)=>{const e=mv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yv(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_v(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function _v(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yv(t){return Ze(t)?document.querySelector(t):t}const Kn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ev={},wv={class:"nav-header"},Tv={class:"nav-container"},vv={class:"nav-links"};function Iv(t,e){const n=pa("router-link");return Be(),$e("header",wv,[G("div",Tv,[Ke(n,{to:"/",class:"logo"},{default:kn(()=>[...e[0]||(e[0]=[Ut("MyApp",-1)])]),_:1}),G("nav",vv,[Ke(n,{to:"/register",class:"nav-item","active-class":"active"},{default:kn(()=>[...e[1]||(e[1]=[Ut("Register",-1)])]),_:1}),Ke(n,{to:"/signin",class:"nav-item","active-class":"active"},{default:kn(()=>[...e[2]||(e[2]=[Ut("Sign In",-1)])]),_:1}),Ke(n,{to:"/addbook",class:"nav-item","active-class":"active"},{default:kn(()=>[...e[3]||(e[3]=[Ut("Add Book",-1)])]),_:1}),Ke(n,{to:"/GetBookCount",class:"nav-item","active-class":"active"},{default:kn(()=>[...e[4]||(e[4]=[Ut("Get Book Count",-1)])]),_:1}),Ke(n,{to:"/WeatherCheck",class:"nav-item","active-class":"active"},{default:kn(()=>[...e[5]||(e[5]=[Ut("Weather Check",-1)])]),_:1}),Ke(n,{to:"/CountBookAPI",class:"nav-item","active-class":"active"},{default:kn(()=>[...e[6]||(e[6]=[Ut("Count Book API",-1)])]),_:1}),Ke(n,{to:"/GetAllBookAPI",class:"nav-item","active-class":"active"},{default:kn(()=>[...e[7]||(e[7]=[Ut("Get All Book API",-1)])]),_:1})])])])}const Av=Kn(Ev,[["render",Iv],["__scopeId","data-v-ad59d166"]]),bv={name:"App",components:{BHeader:Av},computed:{showHeader(){return!["CountBookAPI","GetAllBookAPI"].includes(this.$route.name)}}},Rv={id:"app",class:"main-container"},Sv={key:0},Pv={class:"main-box"};function Cv(t,e,n,r,s,i){const o=pa("BHeader"),c=pa("router-view");return Be(),$e("div",Rv,[i.showHeader?(Be(),$e("header",Sv,[Ke(o)])):Bn("",!0),G("main",Pv,[Ke(c)])])}const kv=Kn(bv,[["render",Cv]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof document<"u";function hg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ov(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hg(t.default)}const Pe=Object.assign;function tl(t,e){const n={};for(const r in e){const s=e[r];n[r]=sn(s)?s.map(t):t(s)}return n}const Ii=()=>{},sn=Array.isArray,fg=/#/g,Nv=/&/g,Dv=/\//g,Vv=/=/g,xv=/\?/g,dg=/\+/g,Mv=/%5B/g,Lv=/%5D/g,pg=/%5E/g,Fv=/%60/g,mg=/%7B/g,Uv=/%7C/g,gg=/%7D/g,Bv=/%20/g;function Cu(t){return encodeURI(""+t).replace(Uv,"|").replace(Mv,"[").replace(Lv,"]")}function jv(t){return Cu(t).replace(mg,"{").replace(gg,"}").replace(pg,"^")}function kl(t){return Cu(t).replace(dg,"%2B").replace(Bv,"+").replace(fg,"%23").replace(Nv,"%26").replace(Fv,"`").replace(mg,"{").replace(gg,"}").replace(pg,"^")}function $v(t){return kl(t).replace(Vv,"%3D")}function qv(t){return Cu(t).replace(fg,"%23").replace(xv,"%3F")}function Hv(t){return t==null?"":qv(t).replace(Dv,"%2F")}function Mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zv=/\/$/,Wv=t=>t.replace(zv,"");function nl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Jv(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Mi(o)}}function Kv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rs(e.matched[r],n.matched[s])&&_g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qv(t[n],e[n]))return!1;return!0}function Qv(t,e){return sn(t)?Yf(t,e):sn(e)?Yf(e,t):t===e}function Yf(t,e){return sn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Jv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Li;(function(t){t.pop="pop",t.push="push"})(Li||(Li={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function Xv(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wv(t)}const Yv=/^[^#]+#/;function Zv(t,e){return t.replace(Yv,"#")+e}function eI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tc=()=>({left:window.scrollX,top:window.scrollY});function tI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=eI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zf(t,e){return(history.state?history.state.position-e:-1)+t}const Ol=new Map;function nI(t,e){Ol.set(t,e)}function rI(t){const e=Ol.get(t);return Ol.delete(t),e}let sI=()=>location.protocol+"//"+location.host;function yg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Xf(l,"")}return Xf(n,t)+r+s}function iI(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=yg(t,location),w=n.value,P=e.value;let S=0;if(m){if(n.value=_,e.value=m,o&&o===w){o=null;return}S=P?m.position-P.position:0}else r(_);s.forEach(U=>{U(n.value,w,{delta:S,type:Li.pop,direction:S?S>0?Ai.forward:Ai.back:Ai.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const w=s.indexOf(m);w>-1&&s.splice(w,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:tc()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function ed(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?tc():null}}function oI(t){const{history:e,location:n}=window,r={value:yg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:sI()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Pe({},e.state,ed(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Pe({},s.value,e.state,{forward:l,scroll:tc()});i(f.current,f,!0);const p=Pe({},ed(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function aI(t){t=Xv(t);const e=oI(t),n=iI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:Zv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function cI(t){return typeof t=="string"||t&&typeof t=="object"}function Eg(t){return typeof t=="string"||typeof t=="symbol"}const wg=Symbol("");var td;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(td||(td={}));function Ss(t,e){return Pe(new Error,{type:t,[wg]:!0},e)}function Cn(t,e){return t instanceof Error&&wg in t&&(e==null||!!(t.type&e))}const nd="[^/]+?",lI={sensitive:!1,strict:!1,start:!0,end:!0},uI=/[.+*?^${}()[\]/\\]/g;function hI(t,e){const n=Pe({},lI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(uI,"\\$&"),_+=40;else if(m.type===1){const{value:w,repeatable:P,optional:S,regexp:U}=m;i.push({name:w,repeatable:P,optional:S});const B=U||nd;if(B!==nd){_+=10;try{new RegExp(`(${B})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${w}" (${B}): `+H.message)}}let $=P?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||($=S&&u.length<2?`(?:/${$})`:"/"+$),S&&($+="?"),s+=$,_+=20,S&&(_+=-8),P&&(_+=-20),B===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",w=i[m-1];p[w.name]=_&&w.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:w,repeatable:P,optional:S}=_,U=w in u?u[w]:"";if(sn(U)&&!P)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const B=sn(U)?U.join("/"):U;if(!B)if(S)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${w}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function fI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Tg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=fI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(rd(r))return 1;if(rd(s))return-1}return s.length-r.length}function rd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dI={type:0,value:""},pI=/[a-zA-Z0-9_]/;function mI(t){if(!t)return[[]];if(t==="/")return[[dI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:pI.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function gI(t,e,n){const r=hI(mI(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function _I(t,e){const n=[],r=new Map;e=ad({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const w=!_,P=id(p);P.aliasOf=_&&_.record;const S=ad(e,p),U=[P];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of H)U.push(id(Pe({},P,{components:_?_.record.components:P.components,path:oe,aliasOf:_?_.record:P})))}let B,$;for(const H of U){const{path:oe}=H;if(m&&oe[0]!=="/"){const me=m.record.path,A=me[me.length-1]==="/"?"":"/";H.path=m.record.path+(oe&&A+oe)}if(B=gI(H,m,S),_?_.alias.push(B):($=$||B,$!==B&&$.alias.push(B),w&&p.name&&!od(B)&&o(p.name)),vg(B)&&l(B),P.children){const me=P.children;for(let A=0;A<me.length;A++)i(me[A],B,_&&_.children[A])}_=_||B}return $?()=>{o($)}:Ii}function o(p){if(Eg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=wI(p,n);n.splice(m,0,p),p.record.name&&!od(p)&&r.set(p.record.name,p)}function u(p,m){let _,w={},P,S;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ss(1,{location:p});S=_.record.name,w=Pe(sd(m.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&sd(p.params,_.keys.map($=>$.name))),P=_.stringify(w)}else if(p.path!=null)P=p.path,_=n.find($=>$.re.test(P)),_&&(w=_.parse(P),S=_.record.name);else{if(_=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!_)throw Ss(1,{location:p,currentLocation:m});S=_.record.name,w=Pe({},m.params,p.params),P=_.stringify(w)}const U=[];let B=_;for(;B;)U.unshift(B.record),B=B.parent;return{name:S,path:P,params:w,matched:U,meta:EI(U)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function sd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function id(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:yI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function od(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function EI(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function ad(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Tg(t,e[i])<0?r=i:n=i+1}const s=TI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function TI(t){let e=t;for(;e=e.parent;)if(vg(e)&&Tg(t,e)===0)return e}function vg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function vI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dg," "),o=i.indexOf("="),c=Mi(o<0?i:i.slice(0,o)),l=o<0?null:Mi(i.slice(o+1));if(c in e){let u=e[c];sn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function cd(t){let e="";for(let n in t){const r=t[n];if(n=$v(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(r)?r.map(i=>i&&kl(i)):[r&&kl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function II(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=sn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const AI=Symbol(""),ld=Symbol(""),nc=Symbol(""),Ig=Symbol(""),Nl=Symbol("");function ai(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ss(4,{from:n,to:e})):m instanceof Error?l(m):cI(m)?l(Ss(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function rl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(hg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(rr(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Ov(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&rr(_,n,r,o,c,s)()}))}}return i}function ud(t){const e=gn(nc),n=gn(Ig),r=tn(()=>{const l=gs(t.to);return e.resolve(l)}),s=tn(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Rs.bind(null,f));if(m>-1)return m;const _=hd(l[u-2]);return u>1&&hd(f)===_&&p[p.length-1].path!==_?p.findIndex(Rs.bind(null,l[u-2])):m}),i=tn(()=>s.value>-1&&CI(n.params,r.value.params)),o=tn(()=>s.value>-1&&s.value===n.matched.length-1&&_g(n.params,r.value.params));function c(l={}){if(PI(l)){const u=e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:tn(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function bI(t){return t.length===1?t[0]:t}const RI=Lm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ud,setup(t,{slots:e}){const n=Qa(ud(t)),{options:r}=gn(nc),s=tn(()=>({[fd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&bI(e.default(n));return t.custom?i:lg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),SI=RI;function PI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function CI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!sn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function hd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fd=(t,e,n)=>t??e??n,kI=Lm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=gn(Nl),s=tn(()=>t.route||r.value),i=gn(ld,0),o=tn(()=>{let u=gs(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=tn(()=>s.value.matched[o.value]);Ho(ld,tn(()=>o.value+1)),Ho(AI,c),Ho(Nl,s);const l=Bt();return zo(()=>[l.value,c.value,t.name],([u,f,p],[m,_,w])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Rs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return dd(n.default,{Component:m,route:u});const _=p.props[f],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,S=lg(m,Pe({},w,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return dd(n.default,{Component:S,route:u})||S}}});function dd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const OI=kI;function NI(t){const e=_I(t.routes,t),n=t.parseQuery||vI,r=t.stringifyQuery||cd,s=t.history,i=ai(),o=ai(),c=ai(),l=bw(Zn);let u=Zn;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=tl.bind(null,x=>""+x),p=tl.bind(null,Hv),m=tl.bind(null,Mi);function _(x,Z){let J,te;return Eg(x)?(J=e.getRecordMatcher(x),te=Z):te=x,e.addRoute(te,J)}function w(x){const Z=e.getRecordMatcher(x);Z&&e.removeRoute(Z)}function P(){return e.getRoutes().map(x=>x.record)}function S(x){return!!e.getRecordMatcher(x)}function U(x,Z){if(Z=Pe({},Z||l.value),typeof x=="string"){const k=nl(n,x,Z.path),M=e.resolve({path:k.path},Z),j=s.createHref(k.fullPath);return Pe(k,M,{params:m(M.params),hash:Mi(k.hash),redirectedFrom:void 0,href:j})}let J;if(x.path!=null)J=Pe({},x,{path:nl(n,x.path,Z.path).path});else{const k=Pe({},x.params);for(const M in k)k[M]==null&&delete k[M];J=Pe({},x,{params:p(k)}),Z.params=p(Z.params)}const te=e.resolve(J,Z),Ae=x.hash||"";te.params=f(m(te.params));const E=Kv(r,Pe({},x,{hash:jv(Ae),path:te.path})),I=s.createHref(E);return Pe({fullPath:E,hash:Ae,query:r===cd?II(x.query):x.query||{}},te,{redirectedFrom:void 0,href:I})}function B(x){return typeof x=="string"?nl(n,x,l.value.path):Pe({},x)}function $(x,Z){if(u!==x)return Ss(8,{from:Z,to:x})}function H(x){return A(x)}function oe(x){return H(Pe(B(x),{replace:!0}))}function me(x){const Z=x.matched[x.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let te=typeof J=="function"?J(x):J;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=B(te):{path:te},te.params={}),Pe({query:x.query,hash:x.hash,params:te.path!=null?{}:x.params},te)}}function A(x,Z){const J=u=U(x),te=l.value,Ae=x.state,E=x.force,I=x.replace===!0,k=me(J);if(k)return A(Pe(B(k),{state:typeof k=="object"?Pe({},Ae,k.state):Ae,force:E,replace:I}),Z||J);const M=J;M.redirectedFrom=Z;let j;return!E&&Gv(r,te,J)&&(j=Ss(16,{to:M,from:te}),We(te,te,!0,!1)),(j?Promise.resolve(j):b(M,te)).catch(L=>Cn(L)?Cn(L,2)?L:Vt(L):he(L,M,te)).then(L=>{if(L){if(Cn(L,2))return A(Pe({replace:I},B(L.to),{state:typeof L.to=="object"?Pe({},Ae,L.to.state):Ae,force:E}),Z||M)}else L=C(M,te,!0,I,Ae);return R(M,te,L),L})}function y(x,Z){const J=$(x,Z);return J?Promise.reject(J):Promise.resolve()}function v(x){const Z=xt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(x):x()}function b(x,Z){let J;const[te,Ae,E]=DI(x,Z);J=rl(te.reverse(),"beforeRouteLeave",x,Z);for(const k of te)k.leaveGuards.forEach(M=>{J.push(rr(M,x,Z))});const I=y.bind(null,x,Z);return J.push(I),Pt(J).then(()=>{J=[];for(const k of i.list())J.push(rr(k,x,Z));return J.push(I),Pt(J)}).then(()=>{J=rl(Ae,"beforeRouteUpdate",x,Z);for(const k of Ae)k.updateGuards.forEach(M=>{J.push(rr(M,x,Z))});return J.push(I),Pt(J)}).then(()=>{J=[];for(const k of E)if(k.beforeEnter)if(sn(k.beforeEnter))for(const M of k.beforeEnter)J.push(rr(M,x,Z));else J.push(rr(k.beforeEnter,x,Z));return J.push(I),Pt(J)}).then(()=>(x.matched.forEach(k=>k.enterCallbacks={}),J=rl(E,"beforeRouteEnter",x,Z,v),J.push(I),Pt(J))).then(()=>{J=[];for(const k of o.list())J.push(rr(k,x,Z));return J.push(I),Pt(J)}).catch(k=>Cn(k,8)?k:Promise.reject(k))}function R(x,Z,J){c.list().forEach(te=>v(()=>te(x,Z,J)))}function C(x,Z,J,te,Ae){const E=$(x,Z);if(E)return E;const I=Z===Zn,k=as?history.state:{};J&&(te||I?s.replace(x.fullPath,Pe({scroll:I&&k&&k.scroll},Ae)):s.push(x.fullPath,Ae)),l.value=x,We(x,Z,J,I),Vt()}let T;function qe(){T||(T=s.listen((x,Z,J)=>{if(!Mt.listening)return;const te=U(x),Ae=me(te);if(Ae){A(Pe(Ae,{replace:!0,force:!0}),te).catch(Ii);return}u=te;const E=l.value;as&&nI(Zf(E.fullPath,J.delta),tc()),b(te,E).catch(I=>Cn(I,12)?I:Cn(I,2)?(A(Pe(B(I.to),{force:!0}),te).then(k=>{Cn(k,20)&&!J.delta&&J.type===Li.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(J.delta&&s.go(-J.delta,!1),he(I,te,E))).then(I=>{I=I||C(te,E,!1),I&&(J.delta&&!Cn(I,8)?s.go(-J.delta,!1):J.type===Li.pop&&Cn(I,20)&&s.go(-1,!1)),R(te,E,I)}).catch(Ii)}))}let At=ai(),Re=ai(),ye;function he(x,Z,J){Vt(x);const te=Re.list();return te.length?te.forEach(Ae=>Ae(x,Z,J)):console.error(x),Promise.reject(x)}function ht(){return ye&&l.value!==Zn?Promise.resolve():new Promise((x,Z)=>{At.add([x,Z])})}function Vt(x){return ye||(ye=!x,qe(),At.list().forEach(([Z,J])=>x?J(x):Z()),At.reset()),x}function We(x,Z,J,te){const{scrollBehavior:Ae}=t;if(!as||!Ae)return Promise.resolve();const E=!J&&rI(Zf(x.fullPath,0))||(te||!J)&&history.state&&history.state.scroll||null;return Iu().then(()=>Ae(x,Z,E)).then(I=>I&&tI(I)).catch(I=>he(I,x,Z))}const Se=x=>s.go(x);let Ne;const xt=new Set,Mt={currentRoute:l,listening:!0,addRoute:_,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:P,resolve:U,options:t,push:H,replace:oe,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Re.add,isReady:ht,install(x){const Z=this;x.component("RouterLink",SI),x.component("RouterView",OI),x.config.globalProperties.$router=Z,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),as&&!Ne&&l.value===Zn&&(Ne=!0,H(s.location).catch(Ae=>{}));const J={};for(const Ae in Zn)Object.defineProperty(J,Ae,{get:()=>l.value[Ae],enumerable:!0});x.provide(nc,Z),x.provide(Ig,Pm(J)),x.provide(Nl,l);const te=x.unmount;xt.add(x),x.unmount=function(){xt.delete(x),xt.size<1&&(u=Zn,T&&T(),T=null,l.value=Zn,Ne=!1,ye=!1),te()}}};function Pt(x){return x.reduce((Z,J)=>Z.then(()=>v(J)),Promise.resolve())}return Mt}function DI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Rs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Rs(u,l))||s.push(l))}return[n,r,s]}function Yi(){return gn(nc)}const VI=()=>{};var pd={};/**
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
 */const Ag=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new MI;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LI=function(t){const e=Ag(t);return bg.encodeByteArray(e,!0)},Ta=function(t){return LI(t).replace(/\./g,"")},Rg=function(t){try{return bg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UI=()=>FI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof pd>"u")return;const t=pd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rg(t[1]);return e&&JSON.parse(e)},rc=()=>{try{return VI()||UI()||BI()||jI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sg=t=>rc()?.emulatorHosts?.[t],$I=t=>{const e=Sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pg=()=>rc()?.config,Cg=t=>rc()?.[`_${t}`];/**
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
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}const bi={};function zI(){const t={prod:[],emulator:[]};for(const e of Object.keys(bi))bi[e]?t.emulator.push(e):t.prod.push(e);return t}function WI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let md=!1;function Og(t,e){if(typeof window>"u"||typeof document>"u"||!Ms(window.location.host)||bi[t]===e||bi[t]||md)return;bi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=zI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{md=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=WI(r),_=n("text"),w=document.getElementById(_)||document.createElement("span"),P=n("learnmore"),S=document.getElementById(P)||document.createElement("a"),U=n("preprendIcon"),B=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const $=m.element;c($),f(S,P);const H=u();l(B,U),$.append(B,w,S,H),document.body.appendChild($)}i?(w.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function GI(){const t=rc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZI(){return!GI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eA(){try{return typeof indexedDB=="object"}catch{return!1}}function tA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const nA="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nA,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,c,r)}}function rA(t,e){return t.replace(sA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sA=/\{\$([^}]+)}/g;function iA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gd(i)&&gd(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gd(t){return t!==null&&typeof t=="object"}/**
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
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ui(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oA(t,e){const n=new aA(t,e);return n.subscribe.bind(n)}class aA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sl),s.error===void 0&&(s.error=sl),s.complete===void 0&&(s.complete=sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sl(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class lA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hA(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uA(t){return t===xr?void 0:t}function hA(t){return t.instantiationMode==="EAGER"}/**
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
 */class fA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const dA={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},pA=Ee.INFO,mA={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},gA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=pA,this._logHandler=gA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const _A=(t,e)=>e.some(n=>t instanceof n);let _d,yd;function yA(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EA(){return yd||(yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ng=new WeakMap,Dl=new WeakMap,Dg=new WeakMap,il=new WeakMap,Ou=new WeakMap;function wA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ng.set(n,t)}).catch(()=>{}),Ou.set(e,t),e}function TA(t){if(Dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dl.set(t,e)}let Vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vA(t){Vl=t(Vl)}function IA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ol(this),e,...n);return Dg.set(r,e.sort?e.sort():[e]),ur(r)}:EA().includes(t)?function(...e){return t.apply(ol(this),e),ur(Ng.get(this))}:function(...e){return ur(t.apply(ol(this),e))}}function AA(t){return typeof t=="function"?IA(t):(t instanceof IDBTransaction&&TA(t),_A(t,yA())?new Proxy(t,Vl):t)}function ur(t){if(t instanceof IDBRequest)return wA(t);if(il.has(t))return il.get(t);const e=AA(t);return e!==t&&(il.set(t,e),Ou.set(e,t)),e}const ol=t=>Ou.get(t);function bA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const RA=["get","getKey","getAll","getAllKeys","count"],SA=["put","add","delete","clear"],al=new Map;function Ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(al.get(e))return al.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return al.set(e,i),i}vA(t=>({...t,get:(e,n,r)=>Ed(e,n)||t.get(e,n,r),has:(e,n)=>!!Ed(e,n)||t.has(e,n)}));/**
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
 */class PA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(t){return t.getComponent()?.type==="VERSION"}const xl="@firebase/app",wd="0.14.2";/**
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
 */const $n=new ku("@firebase/app"),kA="@firebase/app-compat",OA="@firebase/analytics-compat",NA="@firebase/analytics",DA="@firebase/app-check-compat",VA="@firebase/app-check",xA="@firebase/auth",MA="@firebase/auth-compat",LA="@firebase/database",FA="@firebase/data-connect",UA="@firebase/database-compat",BA="@firebase/functions",jA="@firebase/functions-compat",$A="@firebase/installations",qA="@firebase/installations-compat",HA="@firebase/messaging",zA="@firebase/messaging-compat",WA="@firebase/performance",KA="@firebase/performance-compat",GA="@firebase/remote-config",QA="@firebase/remote-config-compat",JA="@firebase/storage",XA="@firebase/storage-compat",YA="@firebase/firestore",ZA="@firebase/ai",eb="@firebase/firestore-compat",tb="firebase",nb="12.2.0";/**
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
 */const Ml="[DEFAULT]",rb={[xl]:"fire-core",[kA]:"fire-core-compat",[NA]:"fire-analytics",[OA]:"fire-analytics-compat",[VA]:"fire-app-check",[DA]:"fire-app-check-compat",[xA]:"fire-auth",[MA]:"fire-auth-compat",[LA]:"fire-rtdb",[FA]:"fire-data-connect",[UA]:"fire-rtdb-compat",[BA]:"fire-fn",[jA]:"fire-fn-compat",[$A]:"fire-iid",[qA]:"fire-iid-compat",[HA]:"fire-fcm",[zA]:"fire-fcm-compat",[WA]:"fire-perf",[KA]:"fire-perf-compat",[GA]:"fire-rc",[QA]:"fire-rc-compat",[JA]:"fire-gcs",[XA]:"fire-gcs-compat",[YA]:"fire-fst",[eb]:"fire-fst-compat",[ZA]:"fire-vertex","fire-js":"fire-js",[tb]:"fire-js-all"};/**
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
 */const va=new Map,sb=new Map,Ll=new Map;function Td(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Ll.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of va.values())Td(n,t);for(const n of sb.values())Td(n,t);return!0}function Nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Zi("app","Firebase",ib);/**
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
 */class ob{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=nb;function Du(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ml,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=Pg()),!n)throw hr.create("no-options");const i=va.get(s);if(i){if($r(n,i.options)&&$r(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new fA(s);for(const l of Ll.values())o.addComponent(l);const c=new ob(n,r,o);return va.set(s,c),c}function Vg(t=Ml){const e=va.get(t);if(!e&&t===Ml&&Pg())return Du();if(!e)throw hr.create("no-app",{appName:t});return e}function fr(t,e,n){let r=rb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(o.join(" "));return}Ps(new qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ab="firebase-heartbeat-database",cb=1,Fi="firebase-heartbeat-store";let cl=null;function xg(){return cl||(cl=bA(ab,cb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),cl}async function lb(t){try{const n=(await xg()).transaction(Fi),r=await n.objectStore(Fi).get(Mg(t));return await n.done,r}catch(e){if(e instanceof Gn)$n.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e?.message});$n.warn(n.message)}}}async function vd(t,e){try{const r=(await xg()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,Mg(t)),await r.done}catch(n){if(n instanceof Gn)$n.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n?.message});$n.warn(r.message)}}}function Mg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ub=1024,hb=30;class fb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Id();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>hb){const s=mb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){$n.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Id(),{heartbeatsToSend:n,unsentEntries:r}=db(this._heartbeatsCache.heartbeats),s=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return $n.warn(e),""}}}function Id(){return new Date().toISOString().substring(0,10)}function db(t,e=ub){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ad(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ad(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eA()?tA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ad(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}function mb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function gb(t){Ps(new qr("platform-logger",e=>new PA(e),"PRIVATE")),Ps(new qr("heartbeat",e=>new fb(e),"PRIVATE")),fr(xl,wd,t),fr(xl,wd,"esm2020"),fr("fire-js","")}gb("");function Lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _b=Lg,Fg=new Zi("auth","Firebase",Lg());/**
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
 */const Ia=new ku("@firebase/auth");function yb(t,...e){Ia.logLevel<=Ee.WARN&&Ia.warn(`Auth (${Ls}): ${t}`,...e)}function Go(t,...e){Ia.logLevel<=Ee.ERROR&&Ia.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function on(t,...e){throw Vu(t,...e)}function _n(t,...e){return Vu(t,...e)}function Ug(t,e,n){const r={..._b(),[e]:n};return new Zi("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return Ug(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fg.create(t,...e)}function ae(t,e,...n){if(!t)throw Vu(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function qn(t,e){t||Vn(e)}/**
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
 */function Fl(){return typeof self<"u"&&self.location?.href||""}function Eb(){return bd()==="http:"||bd()==="https:"}function bd(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function wb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eb()||JI()||"connection"in navigator)?navigator.onLine:!0}function Tb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||XI()}get(){return wb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xu(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ib=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ab=new to(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,s={}){return jg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=eo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return QI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ms(t.emulatorConfig.host)&&(u.credentials="include"),Bg.fetch()(await $g(t,t.config.apiHost,n,c),u)})}async function jg(t,e,n){t._canInitEmulator=!1;const r={...vb,...e};try{const s=new Rb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Mo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ug(t,f,u);on(t,f)}}catch(s){if(s instanceof Gn)throw s;on(t,"network-request-failed",{message:String(s)})}}async function no(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function $g(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xu(t.config,s):`${t.config.apiScheme}://${s}`;return Ib.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function bb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),Ab.get())})}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}function Rd(t){return t!==void 0&&t.enterprise!==void 0}class Sb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pb(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
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
 */async function Cb(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function Aa(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kb(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=Mu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ri(ll(s.auth_time)),issuedAtTime:Ri(ll(s.iat)),expirationTime:Ri(ll(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ll(t){return Number(t)*1e3}function Mu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rg(n);return s?JSON.parse(s):(Go("Failed to decode base64 JWT payload"),null)}catch(s){return Go("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Sd(t){const e=Mu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&Ob(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ba(t){const e=t.auth,n=await t.getIdToken(),r=await Ui(t,Aa(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?qg(s.providerUserInfo):[],o=Vb(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ul(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Db(t){const e=lt(t);await ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function xb(t,e){const n=await jg(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await $g(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ms(t.emulatorConfig.host)&&(l.credentials="include"),Bg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mb(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Ir(t,e))}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Sd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ws;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function er(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ul(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kb(this,e)}reload(){return Db(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await Ui(this,Cb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:w,stsTokenManager:P}=n;ae(p&&P,e,"internal-error");const S=ws.fromJSON(this.name,P);ae(typeof p=="string",e,"internal-error"),er(r,e.name),er(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),er(i,e.name),er(o,e.name),er(c,e.name),er(l,e.name),er(u,e.name),er(f,e.name);const U=new nn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:S,createdAt:u,lastLoginAt:f});return w&&Array.isArray(w)&&(U.providerData=w.map(B=>({...B}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new ws;s.updateFromServerResponse(n);const i=new nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ba(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ws;c.updateFromIdToken(r);const l=new nn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const Pd=new Map;function xn(t){qn(t instanceof Function,"Expected a class definition");let e=Pd.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pd.set(t,e),e)}/**
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
 */class Hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hg.type="NONE";const Cd=Hg;/**
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
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Aa(this.auth,{idToken:e}).catch(()=>{});return n?nn._fromGetAccountInfoResponse(this.auth,n,e):null}return nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(xn(Cd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xn(Cd);const o=Qo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Aa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await nn._fromGetAccountInfoResponse(e,m,f)}else p=nn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ts(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ts(i,e,r))}}/**
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
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jg(e))return"Blackberry";if(Xg(e))return"Webos";if(Wg(e))return"Safari";if((e.includes("chrome/")||Kg(e))&&!e.includes("edge/"))return"Chrome";if(Qg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function zg(t=It()){return/firefox\//i.test(t)}function Wg(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kg(t=It()){return/crios\//i.test(t)}function Gg(t=It()){return/iemobile/i.test(t)}function Qg(t=It()){return/android/i.test(t)}function Jg(t=It()){return/blackberry/i.test(t)}function Xg(t=It()){return/webos/i.test(t)}function Lu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lb(t=It()){return Lu(t)&&!!window.navigator?.standalone}function Fb(){return YI()&&document.documentMode===10}function Yg(t=It()){return Lu(t)||Qg(t)||Xg(t)||Jg(t)||/windows phone/i.test(t)||Gg(t)}/**
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
 */function Zg(t,e=[]){let n;switch(t){case"Browser":n=kd(It());break;case"Worker":n=`${kd(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class Ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Bb(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
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
 */const jb=6;class $b{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??jb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new Ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Aa(this,{idToken:e}),r=await nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Gt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ba(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Mn(this));const n=e?lt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bb(this),n=new $b(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&yb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Jr(t){return lt(t)}class Od{constructor(e){this.auth=e,this.observer=null,this.addObserver=oA(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hb(t){sc=t}function e_(t){return sc.loadJS(t)}function zb(){return sc.recaptchaEnterpriseScript}function Wb(){return sc.gapiScript}function Kb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Gb{constructor(){this.enterprise=new Qb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Qb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Jb="recaptcha-enterprise",t_="NO_RECAPTCHA";class Xb{constructor(e){this.type=Jb,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Pb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Sb(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Rd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(t_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Rd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=zb();l.length!==0&&(l+=c),e_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Nd(t,e,n,r=!1,s=!1){const i=new Xb(t);let o;if(s)o=t_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Bl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Nd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Nd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Yb(t,e){const n=Nu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function Zb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(xn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function eR(t,e,n){const r=Jr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=n_(e),{host:o,port:c}=tR(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae($r(u,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ms(o)?(kg(`${i}//${o}${l}`),Og("Auth",!0)):nR()}function n_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tR(t){const e=n_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dd(o)}}}function Dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function rR(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sR(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
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
 */async function iR(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function oR(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
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
 */class Bi extends Fu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bl(e,n,"signInWithPassword",sR);case"emailLink":return iR(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bl(e,r,"signUpPassword",rR);case"emailLink":return oR(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vs(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
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
 */const aR="http://localhost";class Hr extends Fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Hr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:aR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
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
 */function cR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lR(t){const e=ui(hi(t)).link,n=e?ui(hi(e)).deep_link_id:null,r=ui(hi(t)).deep_link_id;return(r?ui(hi(r)).link:null)||r||n||e||t}class Uu{constructor(e){const n=ui(hi(e)),r=n.apiKey??null,s=n.oobCode??null,i=cR(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=lR(e);try{return new Uu(n)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uu.parseLink(n);return ae(r,"argument-error"),Bi._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class r_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ro extends r_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends ro{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class or extends ro{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends ro{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function uR(t,e){return no(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
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
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nn._fromIdTokenResponse(e,r,s),o=Vd(r);return new zr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vd(r);return new zr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ra extends Gn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ra(e,n,r,s)}}function s_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,i,e,r):i})}async function hR(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
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
 */async function fR(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(Mn(r));const s="reauthenticate";try{const i=await Ui(t,s_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Mu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),zr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
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
 */async function i_(t,e,n=!1){if(Gt(t.app))return Promise.reject(Mn(t));const r="signIn",s=await s_(t,r,e),i=await zr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function dR(t,e){return i_(Jr(t),e)}/**
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
 */async function o_(t){const e=Jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pR(t,e,n){if(Gt(t.app))return Promise.reject(Mn(t));const r=Jr(t),o=await Bl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&o_(t),l}),c=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function mR(t,e,n){return Gt(t.app)?Promise.reject(Mn(t)):dR(lt(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&o_(t),r})}function gR(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function _R(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function a_(t){return lt(t).signOut()}const Sa="__sak";/**
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
 */class c_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yR=1e3,ER=10;class l_ extends c_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Fb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ER):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l_.type="LOCAL";const wR=l_;/**
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
 */class u_ extends c_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u_.type="SESSION";const h_=u_;/**
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
 */function TR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await TR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function Bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Bu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function IR(t){yn().location.href=t}/**
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
 */function f_(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function AR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bR(){return navigator?.serviceWorker?.controller||null}function RR(){return f_()?self:null}/**
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
 */const d_="firebaseLocalStorageDb",SR=1,Pa="firebaseLocalStorage",p_="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function PR(){const t=indexedDB.deleteDatabase(d_);return new so(t).toPromise()}function jl(){const t=indexedDB.open(d_,SR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pa,{keyPath:p_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pa)?e(r):(r.close(),await PR(),e(await jl()))})})}async function xd(t,e,n){const r=oc(t,!0).put({[p_]:e,value:n});return new so(r).toPromise()}async function CR(t,e){const n=oc(t,!1).get(e),r=await new so(n).toPromise();return r===void 0?null:r.value}function Md(t,e){const n=oc(t,!0).delete(e);return new so(n).toPromise()}const kR=800,OR=3;class m_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(RR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await AR(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jl();return await xd(e,Sa,"1"),await Md(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oc(s,!1).getAll();return new so(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m_.type="LOCAL";const NR=m_;new to(3e4,6e4);/**
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
 */function DR(t,e){return e?xn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ju extends Fu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VR(t){return i_(t.auth,new ju(t),t.bypassAuthState)}function xR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),fR(n,new ju(t),t.bypassAuthState)}async function MR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),hR(n,new ju(t),t.bypassAuthState)}/**
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
 */class g_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return MR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:on(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LR=new to(2e3,1e4);class fs extends g_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LR.get())};e()}}fs.currentPopupAction=null;/**
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
 */const FR="pendingRedirect",Jo=new Map;class UR extends g_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await BR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BR(t,e){const n=qR(e),r=$R(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jR(t,e){Jo.set(t._key(),e)}function $R(t){return xn(t._redirectPersistence)}function qR(t){return Qo(FR,t.config.apiKey,t.name)}async function HR(t,e,n=!1){if(Gt(t.app))return Promise.reject(Mn(t));const r=Jr(t),s=DR(r,e),o=await new UR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zR=600*1e3;class WR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!__(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(_n(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ld(e))}saveEventToCache(e){this.cachedEventUids.add(Ld(e)),this.lastProcessedEventTime=Date.now()}}function Ld(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function __({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function KR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return __(t);default:return!1}}/**
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
 */async function GR(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const QR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JR=/^https?/;async function XR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GR(t);for(const n of e)try{if(YR(n))return}catch{}on(t,"unauthorized-domain")}function YR(t){const e=Fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JR.test(n))return!1;if(QR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ZR=new to(3e4,6e4);function Fd(){const t=yn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eS(t){return new Promise((e,n)=>{function r(){Fd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(_n(t,"network-request-failed"))},timeout:ZR.get()})}if(yn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(yn().gapi?.load)r();else{const s=Kb("iframefcb");return yn()[s]=()=>{gapi.load?r():n(_n(t,"network-request-failed"))},e_(`${Wb()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function tS(t){return Xo=Xo||eS(t),Xo}/**
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
 */const nS=new to(5e3,15e3),rS="__/auth/iframe",sS="emulator/auth/iframe",iS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aS(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,sS):`https://${t.config.authDomain}/${rS}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=oS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${eo(r).slice(1)}`}async function cS(t){const e=await tS(t),n=yn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:aS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),c=yn().setTimeout(()=>{i(o)},nS.get());function l(){yn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const lS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uS=500,hS=600,fS="_blank",dS="http://localhost";class Ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pS(t,e,n,r=uS,s=hS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...lS,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=Kg(u)?fS:n),zg(u)&&(e=e||dS,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,w])=>`${m}${_}=${w},`,"");if(Lb(u)&&c!=="_self")return mS(e||"",c),new Ud(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Ud(p)}function mS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gS="__/auth/handler",_S="emulator/auth/handler",yS=encodeURIComponent("fac");async function Bd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof r_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ro){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${yS}=${encodeURIComponent(l)}`:"";return`${ES(t)}?${eo(c).slice(1)}${u}`}function ES({config:t}){return t.emulator?xu(t,_S):`https://${t.authDomain}/${gS}`}/**
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
 */const ul="webStorageSupport";class wS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h_,this._completeRedirectFn=HR,this._overrideRedirectResult=jR}async _openPopup(e,n,r,s){qn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Bd(e,n,r,Fl(),s);return pS(e,i,Bu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bd(e,n,r,Fl(),s);return IR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cS(e),r=new WR(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ul,{type:ul},s=>{const i=s?.[0]?.[ul];i!==void 0&&n(!!i),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yg()||Wg()||Lu()}}const TS=wS;var jd="@firebase/auth",$d="1.11.0";/**
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
 */class vS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AS(t){Ps(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zg(t)},u=new qb(r,s,i,l);return Zb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new qr("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new vS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(jd,$d,IS(t)),fr(jd,$d,"esm2020")}/**
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
 */const bS=300,RS=Cg("authIdTokenMaxAge")||bS;let qd=null;const SS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RS)return;const s=n?.token;qd!==s&&(qd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function io(t=Vg()){const e=Nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yb(t,{popupRedirectResolver:TS,persistence:[NR,wR,h_]}),r=Cg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=SS(i.toString());_R(n,o,()=>o(n.currentUser)),gR(n,c=>o(c))}}const s=Sg("auth");return s&&eR(n,`http://${s}`),n}function PS(){return document.getElementsByTagName("head")?.[0]??document}Hb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",PS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AS("Browser");var Hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,y_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function v(){}v.prototype=y.prototype,A.D=y.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(b,R,C){for(var T=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)T[qe-2]=arguments[qe];return y.prototype[R].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,v){v||(v=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)b[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=A.g[0],v=A.g[1],R=A.g[2];var C=A.g[3],T=y+(C^v&(R^C))+b[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=C+(R^y&(v^R))+b[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(v^C&(y^v))+b[2]+606105819&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(y^R&(C^y))+b[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(C^v&(R^C))+b[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=C+(R^y&(v^R))+b[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(v^C&(y^v))+b[6]+2821735955&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(y^R&(C^y))+b[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(C^v&(R^C))+b[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=C+(R^y&(v^R))+b[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(v^C&(y^v))+b[10]+4294925233&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(y^R&(C^y))+b[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(C^v&(R^C))+b[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=C+(R^y&(v^R))+b[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(v^C&(y^v))+b[14]+2792965006&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(y^R&(C^y))+b[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=y+(R^C&(v^R))+b[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(y^v))+b[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(C^y))+b[11]+643717713&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^y&(R^C))+b[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(v^R))+b[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(y^v))+b[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(C^y))+b[15]+3634488961&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^y&(R^C))+b[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(v^R))+b[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(y^v))+b[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(C^y))+b[3]+4107603335&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^y&(R^C))+b[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(v^R))+b[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(y^v))+b[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^v&(C^y))+b[7]+1735328473&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^y&(R^C))+b[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=y+(v^R^C)+b[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=C+(y^v^R)+b[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^v)+b[11]+1839030562&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^y)+b[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^C)+b[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=C+(y^v^R)+b[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^v)+b[7]+4139469664&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^y)+b[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^C)+b[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=C+(y^v^R)+b[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^v)+b[3]+3572445317&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^y)+b[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(v^R^C)+b[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=C+(y^v^R)+b[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^v)+b[15]+530742520&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^y)+b[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=y+(R^(v|~C))+b[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=C+(v^(y|~R))+b[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~v))+b[14]+2878612391&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~y))+b[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~C))+b[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=C+(v^(y|~R))+b[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~v))+b[10]+4293915773&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~y))+b[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~C))+b[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=C+(v^(y|~R))+b[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~v))+b[6]+2734768916&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~y))+b[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=y+(R^(v|~C))+b[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=C+(v^(y|~R))+b[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~v))+b[2]+718787259&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var v=y-this.blockSize,b=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=v;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<y;)if(b[R++]=A.charCodeAt(C++),R==this.blockSize){s(this,b),R=0;break}}else for(;C<y;)if(b[R++]=A[C++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var v=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=v&255,v/=256;for(this.u(A),A=Array(16),y=v=0;4>y;++y)for(var b=0;32>b;b+=8)A[v++]=this.g[y]>>>b&255;return A};function i(A,y){var v=c;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=y(A)}function o(A,y){this.h=y;for(var v=[],b=!0,R=A.length-1;0<=R;R--){var C=A[R]|0;b&&C==y||(v[R]=C,b=!1)}this.g=v}var c={};function l(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return S(u(-A));for(var y=[],v=1,b=0;A>=v;b++)y[b]=A/v|0,v*=4294967296;return new o(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return S(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),b=p,R=0;R<A.length;R+=8){var C=Math.min(8,A.length-R),T=parseInt(A.substring(R,R+C),y);8>C?(C=u(Math.pow(y,C)),b=b.j(C).add(u(T))):(b=b.j(v),b=b.add(u(T)))}return b}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-S(this).m();for(var A=0,y=1,v=0;v<this.g.length;v++){var b=this.i(v);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(w(this))return"0";if(P(this))return"-"+S(this).toString(A);for(var y=u(Math.pow(A,6)),v=this,b="";;){var R=H(v,y).g;v=U(v,R.j(y));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=R,w(v))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function w(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=U(this,A),P(A)?-1:w(A)?0:1};function S(A){for(var y=A.g.length,v=[],b=0;b<y;b++)v[b]=~A.g[b];return new o(v,~A.h).add(m)}t.abs=function(){return P(this)?S(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0,R=0;R<=y;R++){var C=b+(this.i(R)&65535)+(A.i(R)&65535),T=(C>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=T>>>16,C&=65535,T&=65535,v[R]=T<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function U(A,y){return A.add(S(y))}t.j=function(A){if(w(this)||w(A))return p;if(P(this))return P(A)?S(this).j(S(A)):S(S(this).j(A));if(P(A))return S(this.j(S(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,v=[],b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var C=this.i(b)>>>16,T=this.i(b)&65535,qe=A.i(R)>>>16,At=A.i(R)&65535;v[2*b+2*R]+=T*At,B(v,2*b+2*R),v[2*b+2*R+1]+=C*At,B(v,2*b+2*R+1),v[2*b+2*R+1]+=T*qe,B(v,2*b+2*R+1),v[2*b+2*R+2]+=C*qe,B(v,2*b+2*R+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new o(v,0)};function B(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function $(A,y){this.g=A,this.h=y}function H(A,y){if(w(y))throw Error("division by zero");if(w(A))return new $(p,p);if(P(A))return y=H(S(A),y),new $(S(y.g),S(y.h));if(P(y))return y=H(A,S(y)),new $(S(y.g),y.h);if(30<A.g.length){if(P(A)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=y;0>=b.l(A);)v=oe(v),b=oe(b);var R=me(v,1),C=me(b,1);for(b=me(b,2),v=me(v,2);!w(b);){var T=C.add(b);0>=T.l(A)&&(R=R.add(v),C=T),b=me(b,1),v=me(v,1)}return y=U(A,R.j(y)),new $(R,y)}for(R=p;0<=A.l(y);){for(v=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=u(v),T=C.j(y);P(T)||0<T.l(A);)v-=b,C=u(v),T=C.j(y);w(C)&&(C=m),R=R.add(C),A=U(A,T)}return new $(R,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)&A.i(b);return new o(v,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)|A.i(b);return new o(v,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)^A.i(b);return new o(v,this.h^A.h)};function oe(A){for(var y=A.g.length+1,v=[],b=0;b<y;b++)v[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(v,A.h)}function me(A,y){var v=y>>5;y%=32;for(var b=A.g.length-v,R=[],C=0;C<b;C++)R[C]=0<y?A.i(C+v)>>>y|A.i(C+v+1)<<32-y:A.i(C+v);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,y_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,dr=o}).apply(typeof Hd<"u"?Hd:typeof self<"u"?self:typeof window<"u"?window:{});var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E_,fi,w_,Yo,$l,T_,v_,I_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lo=="object"&&Lo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in d))break e;d=d[O]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,O={next:function(){if(!g&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function w(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,O,D){for(var K=Array(arguments.length-2),De=2;De<arguments.length;De++)K[De-2]=arguments[De];return h.prototype[O].apply(g,K)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const O=a.length||0,D=g.length||0;a.length=O+D;for(let K=0;K<D;K++)a[O+K]=g[K]}else a.push(g)}}class U{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function B(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var oe=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function me(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function A(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let d,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(d in g)a[d]=g[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function C(a){c.setTimeout(()=>{throw a},0)}function T(){var a=ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class qe{constructor(){this.h=this.g=null}add(h,d){const g=At.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var At=new U(()=>new Re,a=>a.reset());class Re{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,he=!1,ht=new qe,Vt=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(We)}};var We=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){C(d)}var h=At;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}he=!1};function Se(){this.s=this.s,this.C=this.C}Se.prototype.s=!1,Se.prototype.ma=function(){this.s||(this.s=!0,this.N())},Se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var xt=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a})();function Mt(a,h){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(oe){e:{try{H(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Mt.aa.h.call(this)}}w(Mt,Ne);var Pt={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(a,h,d,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=O,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,h,d,g,O){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var K=I(a,h,g,O);return-1<K?(h=a[K],d||(h.fa=!1)):(h=new J(h,this.src,D,!!g,O),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],O=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=O)&&Array.prototype.splice.call(g,O,1),D&&(te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,h,d,g){for(var O=0;O<a.length;++O){var D=a[O];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return O}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function j(a,h,d,g,O){if(Array.isArray(h)){for(var D=0;D<h.length;D++)j(a,h[D],d,g,O);return null}return d=le(d),a&&a[x]?a.K(h,d,u(g)?!!g.capture:!1,O):L(a,h,d,!1,g,O)}function L(a,h,d,g,O,D){if(!h)throw Error("Invalid event type");var K=u(O)?!!O.capture:!!O,De=Y(a);if(De||(a[k]=De=new Ae(a)),d=De.add(h,d,g,K,D),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)xt||(O=K),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(q(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=se;return a}function W(a,h,d,g,O){if(Array.isArray(h))for(var D=0;D<h.length;D++)W(a,h[D],d,g,O);else g=u(g)?!!g.capture:!!g,d=le(d),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=I(D,d,g,O),-1<d&&(te(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,d,g,O)),(d=-1<a?h[a]:null)&&z(d))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(q(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Y(h))?(E(d,a),d.h==0&&(d.src=null,h[k]=null)):te(a)}}}function q(a){return a in M?M[a]:M[a]="on"+a}function se(a,h){if(a.da)a=!0;else{h=new Mt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&z(a),a=d.call(g,h)}return a}function Y(a){return a=a[k],a instanceof Ae?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ie(){Se.call(this),this.i=new Ae(this),this.M=this,this.F=null}w(ie,Se),ie.prototype[x]=!0,ie.prototype.removeEventListener=function(a,h,d,g){W(this,a,h,d,g)};function ge(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ne(h,a);else if(h instanceof Ne)h.target=h.target||a;else{var O=h;h=new Ne(g,a),b(h,O)}if(O=!0,d)for(var D=d.length-1;0<=D;D--){var K=h.g=d[D];O=ve(K,g,!0,h)&&O}if(K=h.g=a,O=ve(K,g,!0,h)&&O,O=ve(K,g,!1,h)&&O,d)for(D=0;D<d.length;D++)K=h.g=d[D],O=ve(K,g,!1,h)&&O}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)te(d[g]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ie.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ve(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,D=0;D<h.length;++D){var K=h[D];if(K&&!K.da&&K.capture==d){var De=K.listener,it=K.ha||K.src;K.fa&&E(a.i,K),O=De.call(it,g)!==!1&&O}}return O&&!g.defaultPrevented}function nt(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function rt(a){a.g=nt(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class zt extends Se{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){Se.call(this),this.h=a,this.g={}}w(ft,Se);var Qn=[];function Ws(a){me(a.g,function(h,d){this.g.hasOwnProperty(d)&&z(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Ws(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=c.JSON.stringify,Wt=c.JSON.parse,_o=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function es(){}es.prototype.h=null;function Ph(a){return a.h||(a.h=a.i())}function Ch(){}var Ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oc(){Ne.call(this,"d")}w(Oc,Ne);function Nc(){Ne.call(this,"c")}w(Nc,Ne);var Pr={},kh=null;function yo(){return kh=kh||new ie}Pr.La="serverreachability";function Oh(a){Ne.call(this,Pr.La,a)}w(Oh,Ne);function Gs(a){const h=yo();ge(h,new Oh(h))}Pr.STAT_EVENT="statevent";function Nh(a,h){Ne.call(this,Pr.STAT_EVENT,a),this.stat=h}w(Nh,Ne);function bt(a){const h=yo();ge(h,new Nh(h,a))}Pr.Ma="timingevent";function Dh(a,h){Ne.call(this,Pr.Ma,a),this.size=h}w(Dh,Ne);function Qs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Js(){this.g=!0}Js.prototype.xa=function(){this.g=!1};function IE(a,h,d,g,O,D){a.info(function(){if(a.g)if(D)for(var K="",De=D.split("&"),it=0;it<De.length;it++){var be=De[it].split("=");if(1<be.length){var dt=be[0];be=be[1];var pt=dt.split("_");K=2<=pt.length&&pt[1]=="type"?K+(dt+"="+be+"&"):K+(dt+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+d+`
`+K})}function AE(a,h,d,g,O,D,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+d+`
`+D+" "+K})}function ts(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+RE(a,d)+(g?" "+g:"")})}function bE(a,h){a.info(function(){return"TIMEOUT: "+h})}Js.prototype.info=function(){};function RE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var D=O[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<O.length;K++)O[K]=""}}}}return st(d)}catch{return h}}var Eo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function wo(){}w(wo,es),wo.prototype.g=function(){return new XMLHttpRequest},wo.prototype.i=function(){return{}},Dc=new wo;function Jn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xh}function xh(){this.i=null,this.g="",this.h=!1}var Mh={},Vc={};function xc(a,h,d){a.L=1,a.v=Ao(Rn(h)),a.m=d,a.P=!0,Lh(a,null)}function Lh(a,h){a.F=Date.now(),To(a),a.A=Rn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Xh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new xh,a.g=gf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new zt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Qn[0]=O.toString()),O=Qn);for(var D=0;D<O.length;D++){var K=j(d,O[D],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Gs(),IE(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Sn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const pt=Sn(this.g);var h=this.g.Ba();const ss=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||pt!=4||h==7||(h==8||0>=ss?Gs(3):Gs(2)),Mc(this);var d=this.g.Z();this.X=d;t:if(Fh(this)){var g=sf(this.g);a="";var O=g.length,D=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Xs(this);var K="";break t}this.h.i=new c.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==O-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,AE(this.i,this.u,this.A,this.l,this.R,pt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var De,it=this.g;if((De=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(De)){var be=De;break t}}be=null}if(d=be)ts(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lc(this,d);else{this.o=!1,this.s=3,bt(12),Cr(this),Xs(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<K.length;)if(en=SE(this,K),en==Vc){pt==4&&(this.s=4,bt(14),d=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Mh){this.s=4,bt(15),ts(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else ts(this.i,this.l,en,null),Lc(this,en);if(Fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||K.length!=0||this.h.h||(this.s=1,bt(16),d=!1),this.o=this.o&&d,!d)ts(this.i,this.l,K,"[Invalid Chunked Response]"),Cr(this),Xs(this);else if(0<K.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),qc(dt),dt.M=!0,bt(11))}}else ts(this.i,this.l,K,null),Lc(this,K);pt==4&&Cr(this),this.o&&!this.J&&(pt==4?ff(this.j,this):(this.o=!1,To(this)))}else HE(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Cr(this),Xs(this)}}}catch{}finally{}};function Fh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function SE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Vc:(d=Number(h.substring(d,g)),isNaN(d)?Mh:(g+=1,g+d>h.length?Vc:(h=h.slice(g,g+d),a.C=g+d,h)))}Jn.prototype.cancel=function(){this.J=!0,Cr(this)};function To(a){a.S=Date.now()+a.I,Uh(a,a.I)}function Uh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qs(m(a.ba,a),h)}function Mc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bE(this.i,this.A),this.L!=2&&(Gs(),bt(17)),Cr(this),this.s=2,Xs(this)):Uh(this,this.S-a)};function Xs(a){a.j.G==0||a.J||ff(a.j,a)}function Cr(a){Mc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ws(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Lc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Fc(d.h,a))){if(!a.K&&Fc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ko(d),Po(d);else break e;$c(d),bt(18)}}else d.za=O[1],0<d.za-d.T&&37500>O[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qs(m(d.Za,d),6e3));if(1>=$h(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Or(d,11)}else if((a.K||d.g==a)&&ko(d),!B(h))for(O=d.Da.g.parse(h),h=0;h<O.length;h++){let be=O[h];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const dt=be[3];dt!=null&&(d.la=dt,d.j.info("VER="+d.la));const pt=be[4];pt!=null&&(d.Aa=pt,d.j.info("SVER="+d.Aa));const ss=be[5];ss!=null&&typeof ss=="number"&&0<ss&&(g=1.5*ss,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const en=a.g;if(en){const No=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(No){var D=g.h;D.g||No.indexOf("spdy")==-1&&No.indexOf("quic")==-1&&No.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Uc(D,D.h),D.h=null))}if(g.D){const Hc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Hc&&(g.ya=Hc,Fe(g.I,g.D,Hc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var K=a;if(g.qa=mf(g,g.J?g.ia:null,g.W),K.K){qh(g.h,K);var De=K,it=g.L;it&&(De.I=it),De.B&&(Mc(De),To(De)),g.g=K}else uf(g);0<d.i.length&&Co(d)}else be[0]!="stop"&&be[0]!="close"||Or(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Or(d,7):jc(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}Gs(4)}catch{}}var PE=class{constructor(a,h){this.g=a,this.map=h}};function Bh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $h(a){return a.h?1:a.g?a.g.size:0}function Fc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Uc(a,h){a.g?a.g.add(h):a.h=h}function qh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bh.prototype.cancel=function(){if(this.i=Hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function CE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function kE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function zh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=kE(a),g=CE(a),O=g.length,D=0;D<O;D++)h.call(void 0,g[D],d&&d[D],a)}var Wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),O=null;if(0<=g){var D=a[d].substring(0,g);O=a[d].substring(g+1)}else D=a[d];h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,vo(this,a.j),this.o=a.o,this.g=a.g,Io(this,a.s),this.l=a.l;var h=a.i,d=new ei;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Kh(this,d),this.m=a.m}else a&&(h=String(a).match(Wh))?(this.h=!1,vo(this,h[1]||"",!0),this.o=Ys(h[2]||""),this.g=Ys(h[3]||"",!0),Io(this,h[4]),this.l=Ys(h[5]||"",!0),Kh(this,h[6]||"",!0),this.m=Ys(h[7]||"")):(this.h=!1,this.i=new ei(null,this.h))}kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Zs(h,Gh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Zs(h,Gh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zs(d,d.charAt(0)=="/"?VE:DE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zs(d,ME)),a.join("")};function Rn(a){return new kr(a)}function vo(a,h,d){a.j=d?Ys(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Io(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Kh(a,h,d){h instanceof ei?(a.i=h,LE(a.i,a.h)):(d||(h=Zs(h,xE)),a.i=new ei(h,a.h))}function Fe(a,h,d){a.i.set(h,d)}function Ao(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ys(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,NE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gh=/[#\/\?@]/g,DE=/[#\?:]/g,VE=/[#\?]/g,xE=/[#\?@]/g,ME=/#/g;function ei(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&OE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ei.prototype,t.add=function(a,h){Xn(this),this.i=null,a=ns(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Qh(a,h){Xn(a),h=ns(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Jh(a,h){return Xn(a),h=ns(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(d,g){d.forEach(function(O){a.call(h,O,g,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const O=a[g];for(let D=0;D<O.length;D++)d.push(h[g])}return d},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")Jh(this,a)&&(h=h.concat(this.g.get(ns(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=ns(this,a),Jh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Xh(a,h,d){Qh(a,h),0<d.length&&(a.i=null,a.g.set(ns(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const D=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var O=D;K[g]!==""&&(O+="="+encodeURIComponent(String(K[g]))),a.push(O)}}return this.i=a.join("&")};function ns(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function LE(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(d,g){var O=g.toLowerCase();g!=O&&(Qh(this,g),Xh(this,O,d))},a)),a.j=h}function FE(a,h){const d=new Js;if(c.Image){const g=new Image;g.onload=_(Yn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Yn,d,"TestLoadImage: error",!1,h,g),g.onabort=_(Yn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Yn,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function UE(a,h){const d=new Js,g=new AbortController,O=setTimeout(()=>{g.abort(),Yn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(O),D.ok?Yn(d,"TestPingServer: ok",!0,h):Yn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Yn(d,"TestPingServer: error",!1,h)})}function Yn(a,h,d,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(d)}catch{}}function BE(){this.g=new _o}function jE(a,h,d){const g=d||"";try{zh(a,function(O,D){let K=O;u(O)&&(K=st(O)),h.push(g+D+"="+encodeURIComponent(K))})}catch(O){throw h.push(g+"type="+encodeURIComponent("_badmap")),O}}function bo(a){this.l=a.Ub||null,this.j=a.eb||!1}w(bo,es),bo.prototype.g=function(){return new Ro(this.l,this.j)},bo.prototype.i=(function(a){return function(){return a}})({});function Ro(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Ro,ie),t=Ro.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ti(this):ni(this),this.readyState==3&&Yh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ti(this))},t.Qa=function(a){this.g&&(this.response=a,ti(this))},t.ga=function(){this.g&&ti(this)};function ti(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ni(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zh(a){let h="";return me(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Bc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Zh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Fe(a,h,d))}function ze(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(ze,ie);var $E=/^https?$/i,qE=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?Ph(this.o):Ph(Dc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){ef(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)d.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),O=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(qE,h,void 0))||g||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of d)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rf(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){ef(this,D)}};function ef(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,tf(a),So(a)}function tf(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),So(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),So(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?nf(this):this.bb())},t.bb=function(){nf(this)};function nf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)nt(a.Ea,0,a);else if(ge(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=K===0){var O=String(a.D).match(Wh)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),g=!$E.test(O?O.toLowerCase():"")}d=g}if(d)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var D=2<Sn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",tf(a)}}finally{So(a)}}}}function So(a,h){if(a.g){rf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ge(a,"ready");try{d.onreadystatechange=g}catch{}}}function rf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Wt(h)}};function sf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HE(a){const h={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var d=R(a[g]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[O]||[];h[O]=D,D.push(d)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function of(a){this.Aa=0,this.i=[],this.j=new Js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ri("baseRetryDelayMs",5e3,a),this.cb=ri("retryDelaySeedMs",1e4,a),this.Wa=ri("forwardChannelMaxRetries",2,a),this.wa=ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bh(a&&a.concurrentRequestLimit),this.Da=new BE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=of.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){bt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=mf(this,null,this.W),Co(this)};function jc(a){if(af(a),a.G==3){var h=a.U++,d=Rn(a.I);if(Fe(d,"SID",a.K),Fe(d,"RID",h),Fe(d,"TYPE","terminate"),si(a,d),h=new Jn(a,a.j,h),h.L=2,h.v=Ao(Rn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=gf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),To(h)}pf(a)}function Po(a){a.g&&(qc(a),a.g.cancel(),a.g=null)}function af(a){Po(a),a.u&&(c.clearTimeout(a.u),a.u=null),ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Co(a){if(!jh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ye||Vt(),he||(ye(),he=!0),ht.add(h,a),a.B=0}}function zE(a,h){return $h(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qs(m(a.Ga,a,h),df(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(O.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=lf(this,O,h),d=Rn(this.I),Fe(d,"RID",a),Fe(d,"CVER",22),this.D&&Fe(d,"X-HTTP-Session-Id",this.D),si(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(Zh(D)))+"&"+h:this.m&&Bc(d,this.m,D)),Uc(this.h,O),this.Ua&&Fe(d,"TYPE","init"),this.P?(Fe(d,"$req",h),Fe(d,"SID","null"),O.T=!0,xc(O,d,null)):xc(O,d,h),this.G=2}}else this.G==3&&(a?cf(this,a):this.i.length==0||jh(this.h)||cf(this))};function cf(a,h){var d;h?d=h.l:d=a.U++;const g=Rn(a.I);Fe(g,"SID",a.K),Fe(g,"RID",d),Fe(g,"AID",a.T),si(a,g),a.m&&a.o&&Bc(g,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=lf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Uc(a.h,d),xc(d,g,h)}function si(a,h){a.H&&me(a.H,function(d,g){Fe(h,g,d)}),a.l&&zh({},function(d,g){Fe(h,g,d)})}function lf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let D=-1;for(;;){const K=["count="+d];D==-1?0<d?(D=O[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let De=!0;for(let it=0;it<d;it++){let be=O[it].g;const dt=O[it].map;if(be-=D,0>be)D=Math.max(0,O[it].g-100),De=!1;else try{jE(dt,K,"req"+be+"_")}catch{g&&g(dt)}}if(De){g=K.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function uf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ye||Vt(),he||(ye(),he=!0),ht.add(h,a),a.v=0}}function $c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qs(m(a.Fa,a),df(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,hf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Po(this),hf(this))};function qc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function hf(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Rn(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),si(a,h),a.m&&a.o&&Bc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ao(Rn(h)),d.m=null,d.P=!0,Lh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Po(this),$c(this),bt(19))};function ko(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ff(a,h){var d=null;if(a.g==h){ko(a),qc(a),a.g=null;var g=2}else if(Fc(a.h,h))d=h.D,qh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;g=yo(),ge(g,new Dh(g,d)),Co(a)}else uf(a);else if(O=h.s,O==3||O==0&&0<h.X||!(g==1&&zE(a,h)||g==2&&$c(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),O){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function df(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const O=!g;g=new kr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vo(g,"https"),Ao(g),O?FE(g.toString(),d):UE(g.toString(),d)}else bt(2);a.G=0,a.l&&a.l.sa(h),pf(a),af(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function pf(a){if(a.G=0,a.ka=[],a.l){const h=Hh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function mf(a,h,d){var g=d instanceof kr?Rn(d):new kr(d);if(g.g!="")h&&(g.g=h+"."+g.g),Io(g,g.s);else{var O=c.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var D=new kr(null);g&&vo(D,g),h&&(D.g=h),O&&Io(D,O),d&&(D.l=d),g=D}return d=a.D,h=a.ya,d&&h&&Fe(g,d,h),Fe(g,"VER",a.la),si(a,g),g}function gf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ze(new bo({eb:d})):new ze(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _f(){}t=_f.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Oo(){}Oo.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){ie.call(this),this.g=new of(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!B(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!B(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new rs(this)}w(Lt,ie),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){jc(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=st(a),a=d);h.i.push(new PE(h.Ya++,a)),h.G==3&&Co(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,Lt.aa.N.call(this)};function yf(a){Oc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}w(yf,Oc);function Ef(){Nc.call(this),this.status=1}w(Ef,Nc);function rs(a){this.g=a}w(rs,_f),rs.prototype.ua=function(){ge(this.g,"a")},rs.prototype.ta=function(a){ge(this.g,new yf(a))},rs.prototype.sa=function(a){ge(this.g,new Ef)},rs.prototype.ra=function(){ge(this.g,"b")},Oo.prototype.createWebChannel=Oo.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,I_=function(){return new Oo},v_=function(){return yo()},T_=Pr,$l={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Eo.NO_ERROR=0,Eo.TIMEOUT=8,Eo.HTTP_ERROR=6,Yo=Eo,Vh.COMPLETE="complete",w_=Vh,Ch.EventType=Ks,Ks.OPEN="a",Ks.CLOSE="b",Ks.ERROR="c",Ks.MESSAGE="d",ie.prototype.listen=ie.prototype.K,fi=Ch,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,E_=ze}).apply(typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{});const zd="@firebase/firestore",Wd="4.9.1";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Us="12.2.0";/**
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
 */const Wr=new ku("@firebase/firestore");function cs(){return Wr.logLevel}function ee(t,...e){if(Wr.logLevel<=Ee.DEBUG){const n=e.map($u);Wr.debug(`Firestore (${Us}): ${t}`,...n)}}function Hn(t,...e){if(Wr.logLevel<=Ee.ERROR){const n=e.map($u);Wr.error(`Firestore (${Us}): ${t}`,...n)}}function Cs(t,...e){if(Wr.logLevel<=Ee.WARN){const n=e.map($u);Wr.warn(`Firestore (${Us}): ${t}`,...n)}}function $u(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,A_(t,r,n)}function A_(t,e,n){let r=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Hn(r),new Error(r)}function Oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||A_(e,s,r)}function de(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ln{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class b_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(gt.UNAUTHENTICATED)))}shutdown(){}}class kS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class OS{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ln,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ln)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string",31837,{l:r}),new b_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new gt(e)}}class NS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class DS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new NS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Kd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=xS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ql(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return hl(s)===hl(i)?we(s,i):hl(s)?1:-1}return we(t.length,e.length)}const MS=55296,LS=57343;function hl(t){const e=t.charCodeAt(0);return e>=MS&&e<=LS}function ks(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Gd="__name__";class dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=dn.isNumericId(e),s=dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?dn.extractNumericId(e).compare(dn.extractNumericId(n)):ql(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Me extends dn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Me(n)}static emptyPath(){return new Me([])}}const FS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends dn{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return FS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gd}static keyField(){return new ct([Gd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Me.fromString(e))}static fromName(e){return new re(Me.fromString(e).popFirst(5))}static empty(){return new re(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Me(e.slice()))}}/**
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
 */function R_(t,e,n){if(!n)throw new X(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function US(t,e,n,r){if(e===!0&&r===!0)throw new X(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qd(t){if(!re.isDocumentKey(t))throw new X(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jd(t){if(re.isDocumentKey(t))throw new X(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function S_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ac(t);throw new X(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function BS(t,e){if(e<=0)throw new X(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function oo(t,e){if(!S_(t))throw new X(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const Xd=-62135596800,Yd=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yd);return new Ue(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xd)throw new X(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yd}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oo(e,Ue._jsonSchema))return new Ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ue._jsonSchemaVersion="firestore/timestamp/1.0",Ue._jsonSchema={type:Ye("string",Ue._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
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
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Ue(0,0))}static max(){return new fe(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ji=-1;function jS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new _r(s,re.empty(),e)}function $S(t){return new _r(t.readTime,t.key,ji)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(fe.min(),re.empty(),ji)}static max(){return new _r(fe.max(),re.empty(),ji)}}function qS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const HS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Bs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==HS)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function WS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function js(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cc.ce=-1;/**
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
 */const Hu=-1;function lc(t){return t==null}function Ca(t){return t===0&&1/t==-1/0}function KS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const P_="";function GS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zd(e)),e=QS(t.get(n),e);return Zd(e)}function QS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case P_:n+="";break;default:n+=i}}return n}function Zd(t){return t+P_+""}/**
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
 */function ep(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tp(this.data.getIterator())}getIteratorFrom(e){return new tp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class tp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new et(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class k_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new k_("Invalid base64 string: "+i):i}})(e);return new ut(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const JS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=JS.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */const O_="server_timestamp",N_="__type__",D_="__previous_value__",V_="__local_write_time__";function zu(t){return(t?.mapValue?.fields||{})[N_]?.stringValue===O_}function uc(t){const e=t.mapValue.fields[D_];return zu(e)?uc(e):e}function $i(t){const e=yr(t.mapValue.fields[V_].timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class XS{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ka="(default)";class qi{constructor(e,n){this.projectId=e,this.database=n||ka}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database===ka}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const x_="__type__",YS="__max__",Uo={mapValue:{}},M_="__vector__",Oa="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zu(t)?4:eP(t)?9007199254740991:ZS(t)?10:11:ce(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $i(t).isEqual($i(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),c=yr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),c=Ge(i.doubleValue);return o===c?Ca(o)===Ca(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ep(o)!==ep(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!bn(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Hi(t,e){return(t.values||[]).find((n=>bn(n,e)))!==void 0}function Os(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return np(t.timestampValue,e.timestampValue);case 4:return np($i(t),$i(e));case 5:return ql(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Er(i),l=Er(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=we(c[u],l[u]);if(f!==0)return f}return we(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=we(Ge(i.latitude),Ge(o.latitude));return c!==0?c:we(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return rp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Oa]?.arrayValue,f=l[Oa]?.arrayValue,p=we(u?.values?.length||0,f?.values?.length||0);return p!==0?p:rp(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Uo.mapValue&&o===Uo.mapValue)return 0;if(i===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=ql(l[p],f[p]);if(m!==0)return m;const _=Os(c[l[p]],u[f[p]]);if(_!==0)return _}return we(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=yr(t),r=yr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function rp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Os(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Ns(t){return Hl(t)}function Hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Er(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Hl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Hl(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function Zo(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uc(t);return e?16+Zo(e):16;case 5:return 2*t.stringValue.length;case 6:return Er(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Zo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return br(r.fields,((i,o)=>{s+=i.length+Zo(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function sp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zl(t){return!!t&&"integerValue"in t}function Wu(t){return!!t&&"arrayValue"in t}function ip(t){return!!t&&"nullValue"in t}function op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function ZS(t){return(t?.mapValue?.fields||{})[x_]?.stringValue===M_}function Si(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Si(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Si(t.arrayValue.values[n]);return e}return{...t}}function eP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===YS}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Si(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ot(Si(this.value))}}function L_(t){const e=[];return br(t.fields,((n,r)=>{const s=new ct([n]);if(ea(r)){const i=L_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Ht(e)}/**
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
 */class yt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new yt(e,0,fe.min(),fe.min(),fe.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,fe.min(),fe.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,fe.min(),fe.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function ap(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Os(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function tP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class F_{}class Xe extends F_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rP(e,n,r):n==="array-contains"?new oP(e,r):n==="in"?new aP(e,r):n==="not-in"?new cP(e,r):n==="array-contains-any"?new lP(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sP(e,r):new iP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Os(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends F_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new cn(e,n)}matches(e){return U_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function U_(t){return t.op==="and"}function B_(t){return nP(t)&&U_(t)}function nP(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Wl(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ns(t.value);if(B_(t))return t.filters.map((e=>Wl(e))).join(",");{const e=t.filters.map((n=>Wl(n))).join(",");return`${t.op}(${e})`}}function j_(t,e){return t instanceof Xe?(function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)})(t,e):t instanceof cn?(function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&j_(o,s.filters[c])),!0):!1})(t,e):void ce(19439)}function $_(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ns(n.value)}`})(t):t instanceof cn?(function(n){return n.op.toString()+" {"+n.getFilters().map($_).join(" ,")+"}"})(t):"Filter"}class rP extends Xe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class sP extends Xe{constructor(e,n){super(e,"in",n),this.keys=q_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class iP extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=q_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function q_(t,e){return(e.arrayValue?.values||[]).map((n=>re.fromName(n.referenceValue)))}class oP extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wu(n)&&Hi(n.arrayValue,this.value)}}class aP extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class cP extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hi(this.value.arrayValue,n)}}class lP extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Hi(this.value.arrayValue,r)))}}/**
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
 */class uP{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function lp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new uP(t,e,n,r,s,i,o)}function Ku(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Wl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ns(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ns(r))).join(",")),e.Te=n}return e.Te}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!j_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cp(t.startAt,e.startAt)&&cp(t.endAt,e.endAt)}function Kl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $s{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function hP(t,e,n,r,s,i,o,c){return new $s(t,e,n,r,s,i,o,c)}function Qu(t){return new $s(t)}function up(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function H_(t){return t.collectionGroup!==null}function Pi(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(ct.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new zi(i,r))})),n.has(ct.keyField().canonicalString())||e.Ie.push(new zi(ct.keyField(),r))}return e.Ie}function En(t){const e=de(t);return e.Ee||(e.Ee=fP(e,Pi(t))),e.Ee}function fP(t,e){if(t.limitType==="F")return lp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)}));const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return lp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gl(t,e){const n=t.filters.concat([e]);return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Da(t,e,n){return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return Gu(En(t),En(e))&&t.limitType===e.limitType}function z_(t){return`${Ku(En(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>$_(s))).join(", ")}]`),lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ns(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ns(s))).join(",")),`Target(${r})`})(En(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Pi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=ap(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Pi(r),s)||r.endAt&&!(function(o,c,l){const u=ap(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Pi(r),s))})(t,e)}function dP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W_(t){return(e,n)=>{let r=!1;for(const s of Pi(t)){const i=pP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pP(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Os(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
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
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return C_(this.inner)}size(){return this.innerSize}}/**
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
 */const mP=new He(re.comparator);function zn(){return mP}const K_=new He(re.comparator);function di(...t){let e=K_;for(const n of t)e=e.insert(n.key,n);return e}function G_(t){let e=K_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Lr(){return Ci()}function Q_(){return Ci()}function Ci(){return new Xr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const gP=new He(re.comparator),_P=new et(re.comparator);function Te(...t){let e=_P;for(const n of t)e=e.add(n);return e}const yP=new et(we);function EP(){return yP}/**
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
 */function Ju(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ca(e)?"-0":e}}function J_(t){return{integerValue:""+t}}function wP(t,e){return KS(e)?J_(e):Ju(t,e)}/**
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
 */class dc{constructor(){this._=void 0}}function TP(t,e,n){return t instanceof Va?(function(s,i){const o={fields:{[N_]:{stringValue:O_},[V_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zu(i)&&(i=uc(i)),i&&(o.fields[D_]=i),{mapValue:o}})(n,e):t instanceof Wi?Y_(t,e):t instanceof Ki?Z_(t,e):(function(s,i){const o=X_(s,i),c=hp(o)+hp(s.Ae);return zl(o)&&zl(s.Ae)?J_(c):Ju(s.serializer,c)})(t,e)}function vP(t,e,n){return t instanceof Wi?Y_(t,e):t instanceof Ki?Z_(t,e):n}function X_(t,e){return t instanceof xa?(function(r){return zl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Va extends dc{}class Wi extends dc{constructor(e){super(),this.elements=e}}function Y_(t,e){const n=ey(e);for(const r of t.elements)n.some((s=>bn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ki extends dc{constructor(e){super(),this.elements=e}}function Z_(t,e){let n=ey(e);for(const r of t.elements)n=n.filter((s=>!bn(s,r)));return{arrayValue:{values:n}}}class xa extends dc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hp(t){return Ge(t.integerValue||t.doubleValue)}function ey(t){return Wu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function IP(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Wi&&s instanceof Wi||r instanceof Ki&&s instanceof Ki?ks(r.elements,s.elements,bn):r instanceof xa&&s instanceof xa?bn(r.Ae,s.Ae):r instanceof Va&&s instanceof Va})(t.transform,e.transform)}class AP{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function ty(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xu(t.key,Yt.none()):new ao(t.key,t.data,Yt.none());{const n=t.data,r=Ot.empty();let s=new et(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new Ht(s.toArray()),Yt.none())}}function bP(t,e,n){t instanceof ao?(function(s,i,o){const c=s.value.clone(),l=dp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Rr?(function(s,i,o){if(!ta(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=dp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ny(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function ki(t,e,n,r){return t instanceof ao?(function(i,o,c,l){if(!ta(i.precondition,o))return c;const u=i.value.clone(),f=pp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Rr?(function(i,o,c,l){if(!ta(i.precondition,o))return c;const u=pp(i.fieldTransforms,l,o),f=o.data;return f.setAll(ny(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function RP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=X_(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function fp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ks(r,s,((i,o)=>IP(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends pc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends pc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ny(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function dp(t,e,n){const r=new Map;Oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,vP(o,c,n[s]))}return r}function pp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,TP(i,o,e))}return r}class Xu extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SP extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ty(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Te())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,((n,r)=>fp(n,r)))&&ks(this.baseMutations,e.baseMutations,((n,r)=>fp(n,r)))}}class Yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return gP})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yu(e,n,r,s)}}/**
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
 */class CP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Je,Ie;function OP(t){switch(t){case V.OK:return ce(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function ry(t){if(t===void 0)return Hn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Je.OK:return V.OK;case Je.CANCELLED:return V.CANCELLED;case Je.UNKNOWN:return V.UNKNOWN;case Je.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Je.INTERNAL:return V.INTERNAL;case Je.UNAVAILABLE:return V.UNAVAILABLE;case Je.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Je.NOT_FOUND:return V.NOT_FOUND;case Je.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Je.ABORTED:return V.ABORTED;case Je.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Je.DATA_LOSS:return V.DATA_LOSS;default:return ce(39323,{code:t})}}(Ie=Je||(Je={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NP(){return new TextEncoder}/**
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
 */const DP=new dr([4294967295,4294967295],0);function mp(t){const e=NP().encode(t),n=new y_;return n.update(e),new Uint8Array(n.digest())}function gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class Zu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pi(`Invalid padding: ${n}`);if(r<0)throw new pi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(DP)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=mp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=mp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(fe.min(),s,new He(we),zn(),Te())}}class co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,Te(),Te(),Te())}}/**
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
 */class na{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class sy{constructor(e,n){this.targetId=e,this.Ce=n}}class iy{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _p{constructor(){this.ve=0,this.Fe=yp(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new co(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=yp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class VP{constructor(e){this.Ge=e,this.ze=new Map,this.je=zn(),this.Je=Bo(),this.He=Bo(),this.Ye=new He(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Kl(i))if(r===0){const o=new re(i.path);this.et(n,o,yt.newNoDocument(o,fe.min()))}else Oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Er(r).toUint8Array()}catch(l){if(l instanceof k_)return Cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zu(o,s,i)}catch(l){return Cs(l instanceof pi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Kl(c.target)){const l=new re(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,yt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Te();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new mc(e,n,this.Ye,this.je,r);return this.je=zn(),this.Je=Bo(),this.He=Bo(),this.Ye=new He(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _p,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _p),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Bo(){return new He(re.comparator)}function yp(){return new He(re.comparator)}const xP={asc:"ASCENDING",desc:"DESCENDING"},MP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LP={and:"AND",or:"OR"};class FP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ql(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function Ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UP(t,e){return Ma(t,e.toTimestamp())}function wn(t){return Oe(!!t,49232),fe.fromTimestamp((function(n){const r=yr(n);return new Ue(r.seconds,r.nanos)})(t))}function eh(t,e){return Jl(t,e).canonicalString()}function Jl(t,e){const n=(function(s){return new Me(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function ay(t){const e=Me.fromString(t);return Oe(fy(e),10190,{key:e.toString()}),e}function Xl(t,e){return eh(t.databaseId,e.path)}function fl(t,e){const n=ay(e);if(n.get(1)!==t.databaseId.projectId)throw new X(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(ly(n))}function cy(t,e){return eh(t.databaseId,e)}function BP(t){const e=ay(t);return e.length===4?Me.emptyPath():ly(e)}function Yl(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ly(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ep(t,e,n){return{name:Xl(t,e),fields:n.value.mapValue.fields}}function jP(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Oe(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?V.UNKNOWN:ry(u.code);return new X(f,u.message||"")})(o);n=new iy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fl(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):fe.min(),c=new Ot({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new na(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fl(t,r.document),i=r.readTime?wn(r.readTime):fe.min(),o=yt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new na([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fl(t,r.document),i=r.removedTargetIds||[];n=new na([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new kP(s,i),c=r.targetId;n=new sy(c,o)}}return n}function $P(t,e){let n;if(e instanceof ao)n={update:Ep(t,e.key,e.value)};else if(e instanceof Xu)n={delete:Xl(t,e.key)};else if(e instanceof Rr)n={update:Ep(t,e.key,e.data),updateMask:XP(e.fieldMask)};else{if(!(e instanceof SP))return ce(16599,{Vt:e.type});n={verify:Xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof xa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:UP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function qP(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(fe.min())&&(o=wn(i)),new AP(o,s.transformResults||[])})(n,e)))):[]}function HP(t,e){return{documents:[cy(t,e.path)]}}function zP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cy(t,s);const i=(function(u){if(u.length!==0)return hy(cn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:us(m.field),direction:GP(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ql(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function WP(t){let e=BP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=uy(p);return m instanceof cn&&B_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(w){return new zi(hs(w.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(w.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,lc(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new Na(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new Na(_,m)})(n.endAt)),hP(e,s,o,i,c,"F",l,u)}function KP(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hs(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(hs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return cn.create(n.compositeFilter.filters.map((r=>uy(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function GP(t){return xP[t]}function QP(t){return MP[t]}function JP(t){return LP[t]}function us(t){return{fieldPath:t.canonicalString()}}function hs(t){return ct.fromServerFormat(t.fieldPath)}function hy(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(op(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if(ip(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(op(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if(ip(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:QP(n.op),value:n.value}}})(t):t instanceof cn?(function(n){const r=n.getFilters().map((s=>hy(s)));return r.length===1?r[0]:{compositeFilter:{op:JP(n.op),filters:r}}})(t):ce(54877,{filter:t})}function XP(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function fy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),c=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YP{constructor(e){this.yt=e}}function ZP(t){const e=WP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Da(e,e.limit,"L"):e}/**
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
 */class eC{constructor(){this.Cn=new tC}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(_r.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class tC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(Me.comparator)).toArray()}}/**
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
 */const wp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dy=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(dy,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
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
 */class Ds{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ds(0)}static cr(){return new Ds(-1)}}/**
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
 */const Tp="LruGarbageCollector",nC=1048576;function vp([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class rC{constructor(e){this.Ir=e,this.buffer=new et(vp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Tp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){js(n)?ee(Tp,"Ignoring IndexedDB error during garbage collection: ",n):await Bs(n)}await this.Vr(3e5)}))}}class iC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(cc.ce);const r=new rC(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(wp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),cs()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function oC(t,e){return new iC(t,e)}/**
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
 */class aC{constructor(){this.changes=new Xr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ki(r.mutation,s,Ht.empty(),Ue.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Te()){const s=Lr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=di();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Te())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=zn();const o=Ci(),c=(function(){return Ci()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Rr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ki(f.mutation,u,f.mutation.getFieldMask(),Ue.now())):o.set(u.key,Ht.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new cC(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Ci();let s=new He(((o,c)=>o-c)),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Ht.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Q_();f.forEach((m=>{if(!i.has(m)){const _=ty(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):H_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Lr());let c=ji,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Te()))).next((f=>({batchId:c,changes:G_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=di();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new $s(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,yt.newInvalidDocument(f)))}));let c=di();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&ki(f.mutation,u,Ht.empty(),Ue.now()),fc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class uC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:ZP(s.bundledQuery),readTime:wn(s.readTime)}})(n)),F.resolve()}}/**
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
 */class hC{constructor(){this.overlays=new He(re.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Lr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Lr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Lr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CP(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class th{constructor(){this.Qr=new et(tt.$r),this.Ur=new et(tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new tt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new re(new Me([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new re(new Me([])),r=new tt(n,e),s=new tt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new tt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return re.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||re.comparator(e.key,n.key)}}/**
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
 */class dC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(tt.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Hu:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(we);return n.forEach((s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new tt(new re(i),0);let c=new et(we);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),F.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,(s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new tt(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pC{constructor(e){this.ri=e,this.docs=(function(){return new He(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=zn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qS($S(f),r)<=0||(s.has(f.key)||fc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new mC(this)}getSize(e){return F.resolve(this.size)}}class mC extends aC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class gC{constructor(e){this.persistence=e,this.si=new Xr((n=>Ku(n)),Gu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.oi=0,this._i=new th,this.targetCount=0,this.ai=Ds.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
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
 */class py{constructor(e,n){this.ui={},this.overlays={},this.ci=new cc(0),this.li=!1,this.li=!0,this.hi=new fC,this.referenceDelegate=e(this),this.Pi=new gC(this),this.indexManager=new eC,this.remoteDocumentCache=(function(s){return new pC(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new YP(n),this.Ii=new uC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new dC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new _C(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class _C extends zS{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Ri=new th,this.Vi=null}static mi(e){return new nh(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(r=>{const s=re.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,fe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class La{constructor(e,n){this.persistence=e,this.pi=new Xr((r=>GS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=oC(this,n)}static mi(e,n){return new La(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,fe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zo(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rh(e,n.fromCache,r,s)}}/**
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
 */class yC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ZI()?8:WS(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new yC;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(cs()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(cs()<=Ee.DEBUG&&ee("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(cs()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):F.resolve())}ys(e,n){if(up(n))return F.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Da(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Da(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return up(n)||s.isEqual(fe.min())?F.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(cs()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.vs(e,o,n,jS(s,ji)).next((c=>c)))}))}Ds(e,n){let r=new et(W_(e));return n.forEach(((s,i)=>{fc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return cs()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ls(n)),this.ps.getDocumentsMatchingQuery(e,n,_r.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const sh="LocalStore",wC=3e8;class TC{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(we),this.xs=new Xr((i=>Ku(i)),Gu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function vC(t,e,n,r){return new TC(t,e,n,r)}async function my(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function IC(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach((w=>{_=_.next((()=>f.getEntry(l,w))).next((P=>{const S=u.docVersions.get(w);Oe(S!==null,48541),P.version.compareTo(S)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function gy(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function AC(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(P,S,U){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=wC?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=zn(),u=Te();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(bC(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(fe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function bC(t,e,n){let r=Te(),s=Te();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=zn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(sh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function RC(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Hu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function SC(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Zl(t,e,n){const r=de(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!js(o))throw o;ee(sh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ip(t,e,n){const r=de(t);let s=fe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=de(l),m=p.xs.get(f);return m!==void 0?F.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,En(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Te()))).next((c=>(PC(r,dP(e),c),{documents:c,Qs:i})))))}function PC(t,e,n){let r=t.Os.get(e)||fe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Ap{constructor(){this.activeTargetIds=EP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CC{constructor(){this.Mo=new Ap,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ap,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kC{Oo(e){}shutdown(){}}/**
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
 */const bp="ConnectivityMonitor";class Rp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(bp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(bp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jo=null;function eu(){return jo===null?jo=(function(){return 268435456+Math.round(2147483648*Math.random())})():jo++,"0x"+jo.toString(16)}/**
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
 */const dl="RestConnection",OC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ka?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=eu(),c=this.zo(e,n.toUriEncodedString());ee(dl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Ms(u);return this.Jo(e,c,l,r,f).then((p=>(ee(dl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Cs(dl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Us})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=OC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class DC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const mt="WebChannelConnection";class VC extends NC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=eu();return new Promise(((c,l)=>{const u=new E_;u.setWithCredentials(!0),u.listenOnce(w_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Yo.NO_ERROR:const p=u.getResponseJson();ee(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Yo.TIMEOUT:ee(mt,`RPC '${e}' ${o} timed out`),l(new X(V.DEADLINE_EXCEEDED,"Request time out"));break;case Yo.HTTP_ERROR:const m=u.getStatus();if(ee(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const w=_?.error;if(w&&w.status&&w.message){const P=(function(U){const B=U.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN})(w.status);l(new X(P,w.message))}else l(new X(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(V.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ee(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=eu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=I_(),c=v_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const w=new DC({Yo:S=>{_?ee(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(ee(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(mt,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Zo:()=>p.close()}),P=(S,U,B)=>{S.listen(U,($=>{try{B($)}catch(H){setTimeout((()=>{throw H}),0)}}))};return P(p,fi.EventType.OPEN,(()=>{_||(ee(mt,`RPC '${e}' stream ${s} transport opened.`),w.o_())})),P(p,fi.EventType.CLOSE,(()=>{_||(_=!0,ee(mt,`RPC '${e}' stream ${s} transport closed`),w.a_(),this.E_(p))})),P(p,fi.EventType.ERROR,(S=>{_||(_=!0,Cs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),w.a_(new X(V.UNAVAILABLE,"The operation could not be completed")))})),P(p,fi.EventType.MESSAGE,(S=>{if(!_){const U=S.data[0];Oe(!!U,16349);const B=U,$=B?.error||B[0]?.error;if($){ee(mt,`RPC '${e}' stream ${s} received error:`,$);const H=$.status;let oe=(function(y){const v=Je[y];if(v!==void 0)return ry(v)})(H),me=$.message;oe===void 0&&(oe=V.INTERNAL,me="Unknown error status: "+H+" with message "+$.message),_=!0,w.a_(new X(oe,me)),p.close()}else ee(mt,`RPC '${e}' stream ${s} received:`,U),w.u_(U)}})),P(c,T_.STAT_EVENT,(S=>{S.stat===$l.PROXY?ee(mt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===$l.NOPROXY&&ee(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{w.__()}),0),w}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function pl(){return typeof document<"u"?document:null}/**
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
 */function gc(t){return new FP(t,!0)}/**
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
 */class _y{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Sp="PersistentStream";class yy{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _y(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(Sp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ee(Sp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xC extends yy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=jP(this.serializer,e),r=(function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?wn(o.readTime):fe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Yl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Kl(l)?{documents:HP(i,l)}:{query:zP(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=oy(i,o.resumeToken);const u=Ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){c.readTime=Ma(i,o.snapshotVersion.toTimestamp());const u=Ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=KP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Yl(this.serializer),n.removeTarget=e,this.q_(n)}}class MC extends yy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=qP(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Yl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>$P(this.serializer,r)))};this.q_(n)}}/**
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
 */class LC{}class FC extends LC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Jl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(V.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Jl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class UC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Hn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Kr="RemoteStore";class BC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Yr(this)&&(ee(Kr,"Restarting streams for network reachability change."),await(async function(l){const u=de(l);u.Ea.add(4),await lo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await _c(u)})(this))}))})),this.Ra=new UC(r,s)}}async function _c(t){if(Yr(t))for(const e of t.da)await e(!0)}async function lo(t){for(const e of t.da)await e(!1)}function Ey(t,e){const n=de(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ch(n)?ah(n):qs(n).O_()&&oh(n,e))}function ih(t,e){const n=de(t),r=qs(n);n.Ia.delete(e),r.O_()&&wy(n,e),n.Ia.size===0&&(r.O_()?r.L_():Yr(n)&&n.Ra.set("Unknown"))}function oh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qs(t).Y_(e)}function wy(t,e){t.Va.Ue(e),qs(t).Z_(e)}function ah(t){t.Va=new VP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),qs(t).start(),t.Ra.ua()}function ch(t){return Yr(t)&&!qs(t).x_()&&t.Ia.size>0}function Yr(t){return de(t).Ea.size===0}function Ty(t){t.Va=void 0}async function jC(t){t.Ra.set("Online")}async function $C(t){t.Ia.forEach(((e,n)=>{oh(t,e)}))}async function qC(t,e){Ty(t),ch(t)?(t.Ra.ha(e),ah(t)):t.Ra.set("Unknown")}async function HC(t,e,n){if(t.Ra.set("Online"),e instanceof iy&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){ee(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fa(t,r)}else if(e instanceof na?t.Va.Ze(e):e instanceof sy?t.Va.st(e):t.Va.tt(e),!n.isEqual(fe.min()))try{const r=await gy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),wy(i,l);const p=new cr(f.target,l,u,f.sequenceNumber);oh(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){ee(Kr,"Failed to raise snapshot:",r),await Fa(t,r)}}async function Fa(t,e,n){if(!js(e))throw e;t.Ea.add(1),await lo(t),t.Ra.set("Offline"),n||(n=()=>gy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ee(Kr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await _c(t)}))}function vy(t,e){return e().catch((n=>Fa(t,n,e)))}async function yc(t){const e=de(t),n=Tr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hu;for(;zC(e);)try{const s=await RC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,WC(e,s)}catch(s){await Fa(e,s)}Iy(e)&&Ay(e)}function zC(t){return Yr(t)&&t.Ta.length<10}function WC(t,e){t.Ta.push(e);const n=Tr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Iy(t){return Yr(t)&&!Tr(t).x_()&&t.Ta.length>0}function Ay(t){Tr(t).start()}async function KC(t){Tr(t).ra()}async function GC(t){const e=Tr(t);for(const n of t.Ta)e.ea(n.mutations)}async function QC(t,e,n){const r=t.Ta.shift(),s=Yu.from(r,e,n);await vy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await yc(t)}async function JC(t,e){e&&Tr(t).X_&&await(async function(r,s){if((function(o){return OP(o)&&o!==V.ABORTED})(s.code)){const i=r.Ta.shift();Tr(r).B_(),await vy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await yc(r)}})(t,e),Iy(t)&&Ay(t)}async function Pp(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee(Kr,"RemoteStore received new credentials");const r=Yr(n);n.Ea.add(3),await lo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await _c(n)}async function XC(t,e){const n=de(t);e?(n.Ea.delete(2),await _c(n)):e||(n.Ea.add(2),await lo(n),n.Ra.set("Unknown"))}function qs(t){return t.ma||(t.ma=(function(n,r,s){const i=de(n);return i.sa(),new xC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:jC.bind(null,t),t_:$C.bind(null,t),r_:qC.bind(null,t),H_:HC.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),ch(t)?ah(t):t.Ra.set("Unknown")):(await t.ma.stop(),Ty(t))}))),t.ma}function Tr(t){return t.fa||(t.fa=(function(n,r,s){const i=de(n);return i.sa(),new MC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:KC.bind(null,t),r_:JC.bind(null,t),ta:GC.bind(null,t),na:QC.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await yc(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(Kr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class lh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new lh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uh(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),js(t))return new X(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=di(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Cp{constructor(){this.ga=new He(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Vs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Vs(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class YC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class ZC{constructor(){this.queries=kp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=kp(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new X(V.ABORTED,"Firestore shutting down"))}}function kp(){return new Xr((t=>z_(t)),hc)}async function by(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new YC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=uh(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&hh(n)}async function Ry(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function e0(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&hh(n)}function t0(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function hh(t){t.Ca.forEach((e=>{e.next()}))}var tu,Op;(Op=tu||(tu={})).Ma="default",Op.Cache="cache";class Sy{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==tu.Cache}}/**
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
 */class Py{constructor(e){this.key=e}}class Cy{constructor(e){this.key=e}}class n0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=W_(e),this.tu=new Is(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Cp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=fc(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;m&&_?m.data.isEqual(_.data)?w!==P&&(r.track({type:3,doc:_}),S=!0):this.su(m,_)||(r.track({type:2,doc:_}),S=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),S=!0):m&&!_&&(r.track({type:1,doc:m}),S=!0,(l||u)&&(c=!0)),S&&(_?(o=o.add(_),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,w){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:S})}};return P(_)-P(w)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Vs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Cy(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Py(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Vs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const fh="SyncEngine";class r0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class s0{constructor(e){this.key=e,this.hu=!1}}class i0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xr((c=>z_(c)),hc),this.Iu=new Map,this.Eu=new Set,this.du=new He(re.comparator),this.Au=new Map,this.Ru=new th,this.Vu={},this.mu=new Map,this.fu=Ds.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function o0(t,e,n=!0){const r=xy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ky(r,e,n,!0),s}async function a0(t,e){const n=xy(t);await ky(n,e,!0,!1)}async function ky(t,e,n,r){const s=await SC(t.localStore,En(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await c0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ey(t.remoteStore,s),c}async function c0(t,e,n,r,s){t.pu=(p,m,_)=>(async function(P,S,U,B){let $=S.view.ru(U);$.Cs&&($=await Ip(P.localStore,S.query,!1).then((({documents:A})=>S.view.ru(A,$))));const H=B&&B.targetChanges.get(S.targetId),oe=B&&B.targetMismatches.get(S.targetId)!=null,me=S.view.applyChanges($,P.isPrimaryClient,H,oe);return Dp(P,S.targetId,me.au),me.snapshot})(t,p,m,_);const i=await Ip(t.localStore,e,!0),o=new n0(e,i.Qs),c=o.ru(i.documents),l=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Dp(t,n,u.au);const f=new r0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function l0(t,e,n){const r=de(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!hc(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Zl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ih(r.remoteStore,s.targetId),nu(r,s.targetId)})).catch(Bs)):(nu(r,s.targetId),await Zl(r.localStore,s.targetId,!0))}async function u0(t,e){const n=de(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ih(n.remoteStore,r.targetId))}async function h0(t,e,n){const r=y0(t);try{const s=await(function(o,c){const l=de(o),u=Ue.now(),f=c.reduce(((_,w)=>_.add(w.key)),Te());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let w=zn(),P=Te();return l.Ns.getEntries(_,f).next((S=>{w=S,w.forEach(((U,B)=>{B.isValidDocument()||(P=P.add(U))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,w))).next((S=>{p=S;const U=[];for(const B of c){const $=RP(B,p.get(B.key).overlayedDocument);$!=null&&U.push(new Rr(B.key,$,L_($.value.mapValue),Yt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,U,c)})).next((S=>{m=S;const U=S.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(_,S.batchId,U)}))})).then((()=>({batchId:m.batchId,changes:G_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(we)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await uo(r,s.changes),await yc(r.remoteStore)}catch(s){const i=uh(s,"Failed to persist write");n.reject(i)}}async function Oy(t,e){const n=de(t);try{const r=await AC(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Oe(o.hu,14607):s.removedDocuments.size>0&&(Oe(o.hu,42227),o.hu=!1))})),await uo(n,r,e)}catch(r){await Bs(r)}}function Np(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&hh(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f0(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(re.comparator);o=o.insert(i,yt.newNoDocument(i,fe.min()));const c=Te().add(i),l=new mc(fe.min(),new Map,new He(we),o,c);await Oy(r,l),r.du=r.du.remove(i),r.Au.delete(e),dh(r)}else await Zl(r.localStore,e,!1).then((()=>nu(r,e,n))).catch(Bs)}async function d0(t,e){const n=de(t),r=e.batch.batchId;try{const s=await IC(n.localStore,e);Dy(n,r,null),Ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,s)}catch(s){await Bs(s)}}async function p0(t,e,n){const r=de(t);try{const s=await(function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Oe(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Dy(r,e,n),Ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,s)}catch(s){await Bs(s)}}function Ny(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Dy(t,e,n){const r=de(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Vy(t,r)}))}function Vy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ih(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),dh(t))}function Dp(t,e,n){for(const r of n)r instanceof Py?(t.Ru.addReference(r.key,e),m0(t,r)):r instanceof Cy?(ee(fh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Vy(t,r.key)):ce(19791,{wu:r})}function m0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(fh,"New document in limbo: "+n),t.Eu.add(r),dh(t))}function dh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(Me.fromString(e)),r=t.fu.next();t.Au.set(r,new s0(n)),t.du=t.du.insert(n,r),Ey(t.remoteStore,new cr(En(Qu(n.path)),r,"TargetPurposeLimboResolution",cc.ce))}}async function uo(t,e,n){const r=de(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=rh.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>F.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!js(p))throw p;ee(sh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),w=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(w);f.Ms=f.Ms.insert(m,P)}}})(r.localStore,i))}async function g0(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee(fh,"User change. New user:",e.toKey());const r=await my(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new X(V.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.Ls)}}function _0(t,e){const n=de(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function xy(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f0.bind(null,e),e.Pu.H_=e0.bind(null,e.eventManager),e.Pu.yu=t0.bind(null,e.eventManager),e}function y0(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=d0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=p0.bind(null,e),e}class Ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return vC(this.persistence,new EC,e.initialUser,this.serializer)}Cu(e){return new py(nh.mi,this.serializer)}Du(e){return new CC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ua.provider={build:()=>new Ua};class E0 extends Ua{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Oe(this.persistence.referenceDelegate instanceof La,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new py((r=>La.mi(r,n)),this.serializer)}}class ru{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Np(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=g0.bind(null,this.syncEngine),await XC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ZC})()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),r=(function(i){return new VC(i)})(e.databaseInfo);return(function(i,o,c,l){return new FC(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new BC(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Np(this.syncEngine,n,0)),(function(){return Rp.v()?new Rp:new kC})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new i0(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=de(n);ee(Kr,"RemoteStore shutting down."),r.Ea.add(5),await lo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ru.provider={build:()=>new ru};/**
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
 */class My{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const vr="FirestoreClient";class w0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=qu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ee(vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ee(vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ml(t,e){t.asyncQueue.verifyOperationInProgress(),ee(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await my(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Vp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await T0(t);ee(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Pp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Pp(e.remoteStore,s))),t._onlineComponents=e}async function T0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(vr,"Using user provided OfflineComponentProvider");try{await ml(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Cs("Error using user provided cache. Falling back to memory cache: "+n),await ml(t,new Ua)}}else ee(vr,"Using default OfflineComponentProvider"),await ml(t,new E0(void 0));return t._offlineComponents}async function Ly(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(vr,"Using user provided OnlineComponentProvider"),await Vp(t,t._uninitializedComponentsProvider._online)):(ee(vr,"Using default OnlineComponentProvider"),await Vp(t,new ru))),t._onlineComponents}function v0(t){return Ly(t).then((e=>e.syncEngine))}async function Fy(t){const e=await Ly(t),n=e.eventManager;return n.onListen=o0.bind(null,e.syncEngine),n.onUnlisten=l0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=a0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=u0.bind(null,e.syncEngine),n}function I0(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new My({next:m=>{f.Nu(),o.enqueueAndForget((()=>Ry(i,p)));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new X(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new X(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Sy(Qu(c.path),f,{includeMetadataChanges:!0,qa:!0});return by(i,p)})(await Fy(t),t.asyncQueue,e,n,r))),r.promise}function A0(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new My({next:m=>{f.Nu(),o.enqueueAndForget((()=>Ry(i,p))),m.fromCache&&l.source==="server"?u.reject(new X(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Sy(c,f,{includeMetadataChanges:!0,qa:!0});return by(i,p)})(await Fy(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const xp=new Map;/**
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
 */const By="firestore.googleapis.com",Mp=!0;class Lp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=By,this.ssl=Mp}else this.host=e.host,this.ssl=e.ssl??Mp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nC)throw new X(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}US("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uy(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new CS;switch(r.type){case"firstParty":return new DS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=xp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),xp.delete(n),r.terminate())})(this),Promise.resolve()}}function b0(t,e,n,r={}){t=an(t,Ec);const s=Ms(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(kg(`https://${c}`),Og("Firestore",!0)),i.host!==By&&i.host!==c&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!$r(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=gt.MOCK_USER;else{u=HI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new X(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new gt(p)}t._authCredentials=new kS(new b_(u,f))}}/**
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
 */class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oo(n,Qe._jsonSchema))return new Qe(e,r||null,new re(Me.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Ye("string",Qe._jsonSchemaVersion),referencePath:Ye("string")};class pr extends Sr{constructor(e,n,r){super(e,n,Qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new re(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function jy(t,e,...n){if(t=lt(t),R_("collection","path",e),t instanceof Ec){const r=Me.fromString(e,...n);return Jd(r),new pr(t,null,r)}{if(!(t instanceof Qe||t instanceof pr))throw new X(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Jd(r),new pr(t.firestore,null,r)}}function Gi(t,e,...n){if(t=lt(t),arguments.length===1&&(e=qu.newId()),R_("doc","path",e),t instanceof Ec){const r=Me.fromString(e,...n);return Qd(r),new Qe(t,null,new re(r))}{if(!(t instanceof Qe||t instanceof pr))throw new X(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Qd(r),new Qe(t.firestore,t instanceof pr?t.converter:null,new re(r))}}/**
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
 */const Fp="AsyncQueue";class Up{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _y(this,"async_queue_retry"),this._c=()=>{const r=pl();r&&ee(Fp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=pl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Ln;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!js(e))throw e;ee(Fp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Hn("INTERNAL UNHANDLED ERROR: ",Bp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=lh.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:Bp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Bp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Zr extends Ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Up,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Up(e),this._firestoreClient=void 0,await e}}}function ph(t,e){const n=typeof t=="object"?t:Vg(),r=typeof t=="string"?t:ka,s=Nu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$I("firestore");i&&b0(s,...i)}return s}function mh(t){if(t._terminated)throw new X(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||R0(t),t._firestoreClient}function R0(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new XS(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Uy(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new w0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(ut.fromBase64String(e))}catch(n){throw new X(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oo(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:Ye("string",Qt._jsonSchemaVersion),bytes:Ye("string")};/**
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
 */class wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gh{constructor(e){this._methodName=e}}/**
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
 */class Tn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tn._jsonSchemaVersion}}static fromJSON(e){if(oo(e,Tn._jsonSchema))return new Tn(e.latitude,e.longitude)}}Tn._jsonSchemaVersion="firestore/geoPoint/1.0",Tn._jsonSchema={type:Ye("string",Tn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oo(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new vn(e.vectorValues);throw new X(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:Ye("string",vn._jsonSchemaVersion),vectorValues:Ye("object")};/**
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
 */const S0=/^__.*__$/;class P0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}class $y{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new _h({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ba(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(qy(this.Ac)&&S0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class C0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}Cc(e,n,r,s=!1){return new _h({Ac:e,methodName:n,Dc:r,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tc(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new C0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hy(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);yh("Data must be an object, but it was:",o,r);const c=zy(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=su(e,p,n);if(!o.contains(m))throw new X(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ky(f,m)||f.push(m)}l=new Ht(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new P0(new Ot(c),l,u)}class vc extends gh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function k0(t,e,n,r){const s=t.Cc(1,e,n);yh("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();br(r,((l,u)=>{const f=Eh(e,l,n);u=lt(u);const p=s.yc(f);if(u instanceof vc)i.push(f);else{const m=ho(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Ht(i);return new $y(o,c,s.fieldTransforms)}function O0(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[su(e,r,n)],l=[s];if(i.length%2!=0)throw new X(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(su(e,i[m])),l.push(i[m+1]);const u=[],f=Ot.empty();for(let m=c.length-1;m>=0;--m)if(!Ky(u,c[m])){const _=c[m];let w=l[m];w=lt(w);const P=o.yc(_);if(w instanceof vc)u.push(_);else{const S=ho(w,P);S!=null&&(u.push(_),f.set(_,S))}}const p=new Ht(u);return new $y(f,p,o.fieldTransforms)}function N0(t,e,n,r=!1){return ho(n,t.Cc(r?4:3,e))}function ho(t,e){if(Wy(t=lt(t)))return yh("Unsupported field value:",e,t),zy(t,e);if(t instanceof gh)return(function(r,s){if(!qy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=ho(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Ma(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ma(s.serializer,i)}}if(r instanceof Tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:oy(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:eh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vn)return(function(o,c){return{mapValue:{fields:{[x_]:{stringValue:M_},[Oa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ju(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ac(r)}`)})(t,e)}function zy(t,e){const n={};return C_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,((r,s)=>{const i=ho(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Wy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Tn||t instanceof Qt||t instanceof Qe||t instanceof gh||t instanceof vn)}function yh(t,e,n){if(!Wy(n)||!S_(n)){const r=ac(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function su(t,e,n){if((e=lt(e))instanceof wc)return e._internalPath;if(typeof e=="string")return Eh(t,e);throw Ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const D0=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(D0)>=0)throw Ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wc(...e.split("."))._internalPath}catch{throw Ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ba(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(V.INVALID_ARGUMENT,c+t+l)}function Ky(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Gy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ic("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class V0 extends Gy{data(){return super.data()}}function Ic(t,e){return typeof e=="string"?Eh(t,e):e instanceof wc?e._internalPath:e._delegate._internalPath}/**
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
 */function x0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wh{}class Th extends wh{}function M0(t,e,...n){let r=[];e instanceof wh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof vh)).length,c=i.filter((l=>l instanceof Ac)).length;if(o>1||o>0&&c>0)throw new X(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ac extends Th{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ac(e,n,r)}_apply(e){const n=this._parse(e);return Qy(e._query,n),new Sr(e.firestore,e.converter,Gl(e._query,n))}_parse(e){const n=Tc(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$p(p,f);const w=[];for(const P of p)w.push(jp(l,i,P));m={arrayValue:{values:w}}}else m=jp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$p(p,f),m=N0(c,o,p,f==="in"||f==="not-in");return Xe.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function L0(t,e,n){const r=e,s=Ic("where",t);return Ac._create(s,r,n)}class vh extends wh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Qy(o,l),o=Gl(o,l)})(e._query,n),new Sr(e.firestore,e.converter,Gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ih extends Th{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ih(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new X(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zi(i,o)})(e._query,this._field,this._direction);return new Sr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new $s(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function F0(t,e="asc"){const n=e,r=Ic("orderBy",t);return Ih._create(r,n)}class Ah extends Th{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ah(e,n,r)}_apply(e){return new Sr(e.firestore,e.converter,Da(e._query,this._limit,this._limitType))}}function U0(t){return BS("limit",t),Ah._create("limit",t,"F")}function jp(t,e,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new X(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!H_(e)&&n.indexOf("/")!==-1)throw new X(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!re.isDocumentKey(r))throw new X(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sp(t,new re(r))}if(n instanceof Qe)return sp(t,n._key);throw new X(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(n)}.`)}function $p(t,e){if(!Array.isArray(t)||t.length===0)throw new X(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class B0{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Oa].arrayValue?.values?.map((r=>Ge(r.doubleValue)));return new vn(n)}convertGeoPoint(e){return new Tn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($i(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Oe(fy(r),9688,{name:e});const s=new qi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Jy(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends Gy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ic("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Br._jsonSchemaVersion="firestore/documentSnapshot/1.0",Br._jsonSchema={type:Ye("string",Br._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class ra extends Br{data(e={}){return super.data(e)}}class As{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new ra(this._firestore,this._userDataWriter,r.key,r,new mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new ra(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new ra(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:j0(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=As._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function j0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
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
 */function $0(t){t=an(t,Qe);const e=an(t.firestore,Zr);return I0(mh(e),t._key).then((n=>G0(e,t,n)))}As._jsonSchemaVersion="firestore/querySnapshot/1.0",As._jsonSchema={type:Ye("string",As._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Xy extends B0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function q0(t){t=an(t,Sr);const e=an(t.firestore,Zr),n=mh(e),r=new Xy(e);return x0(t._query),A0(n,t._query).then((s=>new As(e,r,t,s)))}function H0(t,e,n){t=an(t,Qe);const r=an(t.firestore,Zr),s=Jy(t.converter,e);return bc(r,[Hy(Tc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Yt.none())])}function z0(t,e,n,...r){t=an(t,Qe);const s=an(t.firestore,Zr),i=Tc(s);let o;return o=typeof(e=lt(e))=="string"||e instanceof wc?O0(i,"updateDoc",t._key,e,n,r):k0(i,"updateDoc",t._key,e),bc(s,[o.toMutation(t._key,Yt.exists(!0))])}function W0(t){return bc(an(t.firestore,Zr),[new Xu(t._key,Yt.none())])}function K0(t,e){const n=an(t.firestore,Zr),r=Gi(t),s=Jy(t.converter,e);return bc(n,[Hy(Tc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then((()=>r))}function bc(t,e){return(function(r,s){const i=new Ln;return r.asyncQueue.enqueueAndForget((async()=>h0(await v0(r),s,i))),i.promise})(mh(t),e)}function G0(t,e,n){const r=n.docs.get(e._key),s=new Xy(t);return new Br(t,s,e._key,r,new mi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Us=s})(Ls),Ps(new qr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Zr(new OS(r.getProvider("auth-internal")),new VS(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),fr(zd,Wd,e),fr(zd,Wd,"esm2020")})();const Q0={__name:"FirebaseRegisterView",setup(t){const e=Bt(""),n=Bt(""),r=Bt("user"),s=Yi(),i=io(),o=ph(),c=()=>{pR(i,e.value,n.value).then(async l=>{console.log("Firebase Register Successful!"),await H0(Gi(o,"users",l.user.uid),{email:e.value,role:r.value}),s.push("/signin")}).catch(l=>{console.log("Register Error:",l.code)})};return(l,u)=>(Be(),$e(Kt,null,[u[4]||(u[4]=G("h1",null,"Create an Account",-1)),G("p",null,[Jt(G("input",{type:"text",placeholder:"Email","onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f)},null,512),[[jn,e.value]])]),G("p",null,[Jt(G("input",{type:"password",placeholder:"Password","onUpdate:modelValue":u[1]||(u[1]=f=>n.value=f)},null,512),[[jn,n.value]])]),G("p",null,[Jt(G("select",{"onUpdate:modelValue":u[2]||(u[2]=f=>r.value=f)},[...u[3]||(u[3]=[G("option",{value:"user"},"User",-1),G("option",{value:"admin"},"Admin",-1)])],512),[[Cl,r.value]])]),G("p",null,[G("button",{onClick:c},"Save to Firebase")])],64))}},J0={__name:"FirebaseSigninView",setup(t){const e=Bt(""),n=Bt(""),r=Yi(),s=io(),i=ph(),o=async()=>{try{const c=await mR(s,e.value,n.value);console.log("Firebase Sign-in Successful!");const l=c.user,u=Gi(i,"users",l.uid),f=await $0(u);if(f.exists()){const p=f.data();console.log("User role:",p.role),p.role==="admin"?r.push("/admin"):r.push("/user")}else console.log("⚠️ No user data found in Firestore"),r.push("/")}catch(c){console.log("Login Error:",c.code)}};return(c,l)=>(Be(),$e(Kt,null,[l[2]||(l[2]=G("h1",null,"Sign in",-1)),G("p",null,[Jt(G("input",{type:"text",placeholder:"Email","onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u)},null,512),[[jn,e.value]])]),G("p",null,[Jt(G("input",{type:"password",placeholder:"Password","onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u)},null,512),[[jn,n.value]])]),G("p",null,[G("button",{onClick:o},"Sign in via Firebase")])],64))}},X0={class:"home-container"},Y0={__name:"HomePage",setup(t){return Yi(),io(),(e,n)=>(Be(),$e("div",X0,[...n[0]||(n[0]=[G("div",{class:"home-card"},[G("h1",null,"🎉 Welcome to Home Page 🎉")],-1)])]))}},Z0=Kn(Y0,[["__scopeId","data-v-4db27888"]]),e1={style:{"text-align":"center",padding:"50px"}},t1={__name:"AdminPage",setup(t){const e=Yi(),n=io(),r=async()=>{try{await a_(n),console.log("User signed out"),e.push("/signin")}catch(s){console.error("Logout Error:",s.code)}};return(s,i)=>(Be(),$e("div",e1,[i[0]||(i[0]=G("h1",null,"Admin Dashboard",-1)),i[1]||(i[1]=G("p",null,"Welcome, Admin!",-1)),G("button",{onClick:r,style:{"margin-top":"20px",padding:"10px 20px",border:"none","border-radius":"6px",background:"#f44336",color:"white",cursor:"pointer"}}," Logout ")]))}},n1={style:{"text-align":"center",padding:"50px"}},r1={__name:"UserPage",setup(t){const e=Yi(),n=io(),r=async()=>{try{await a_(n),console.log("User signed out"),e.push("/signin")}catch(s){console.error("Logout Error:",s.code)}};return(s,i)=>(Be(),$e("div",n1,[i[0]||(i[0]=G("h1",null," User Home",-1)),i[1]||(i[1]=G("p",null,"Welcome, user! This is your homepage.",-1)),G("button",{onClick:r,style:{"margin-top":"20px",padding:"10px 20px",border:"none","border-radius":"6px",background:"#f44336",color:"white",cursor:"pointer"}}," Logout ")]))}};var s1="firebase",i1="12.2.1";/**
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
 */fr(s1,i1,"app");const o1={apiKey:"AIzaSyB14yE2nxS8RKv4T3leoPUgu7UMgkVZ6bo",authDomain:"week7-haojun-94b40.firebaseapp.com",projectId:"week7-haojun-94b40",storageBucket:"week7-haojun-94b40.appspot.com",messagingSenderId:"809641826305",appId:"1:809641826305:web:15cccf6cc0d23bf311c800"},a1=Du(o1),sa=ph(a1),c1={name:"BookList",setup(){const t=Bt([]),e=Bt(0),n=Bt("isbn"),r=Bt("asc"),s=Bt(0),i=async()=>{try{let l=jy(sa,"books");const u=[];e.value>0&&u.push(L0("isbn",">",e.value)),n.value&&u.push(F0(n.value,r.value)),s.value>0&&u.push(U0(s.value)),l=M0(l,...u);const f=await q0(l);t.value=f.docs.map(p=>({id:p.id,...p.data()}))}catch(l){console.error("Error fetching books:",l)}};return{books:t,isbnFilter:e,orderField:n,orderDirection:r,limitNumber:s,fetchBooks:i,updateBook:async(l,u)=>{try{const f=prompt("Enter new book name:",u);if(!f)return;const p=Gi(sa,"books",l);await z0(p,{name:f}),alert("Book updated!"),i()}catch(f){console.error("Error updating book:",f)}},deleteBook:async l=>{try{const u=Gi(sa,"books",l);await W0(u),alert("Book deleted!"),i()}catch(u){console.error("Error deleting book:",u)}}}}},l1={class:"book-list"},u1={class:"filters"},h1=["onClick"],f1=["onClick"],d1={key:0};function p1(t,e,n,r,s,i){return Be(),$e("div",l1,[e[10]||(e[10]=G("h1",null,"Books Management",-1)),G("div",u1,[G("label",null,[e[5]||(e[5]=Ut(" Filter ISBN greater than: ",-1)),Jt(G("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=o=>r.isbnFilter=o),placeholder:"e.g. 1000"},null,512),[[jn,r.isbnFilter,void 0,{number:!0}]])]),G("label",null,[e[8]||(e[8]=Ut(" Order by: ",-1)),Jt(G("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.orderField=o)},[...e[6]||(e[6]=[G("option",{value:"isbn"},"ISBN",-1),G("option",{value:"name"},"Name",-1)])],512),[[Cl,r.orderField]]),Jt(G("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.orderDirection=o)},[...e[7]||(e[7]=[G("option",{value:"asc"},"Ascending",-1),G("option",{value:"desc"},"Descending",-1)])],512),[[Cl,r.orderDirection]])]),G("label",null,[e[9]||(e[9]=Ut(" Limit: ",-1)),Jt(G("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=o=>r.limitNumber=o),placeholder:"e.g. 5"},null,512),[[jn,r.limitNumber,void 0,{number:!0}]])]),G("button",{onClick:e[4]||(e[4]=(...o)=>r.fetchBooks&&r.fetchBooks(...o))},"Apply Filter")]),G("ul",null,[(Be(!0),$e(Kt,null,Zw(r.books,o=>(Be(),$e("li",{key:o.id},[G("strong",null,jt(o.name),1),Ut(" - ISBN: "+jt(o.isbn)+" ",1),G("button",{onClick:c=>r.updateBook(o.id,o.name)},"Update",8,h1),G("button",{onClick:c=>r.deleteBook(o.id)},"Delete",8,f1)]))),128))]),r.books.length===0?(Be(),$e("p",d1,"No books found.")):Bn("",!0)])}const m1=Kn(c1,[["render",p1],["__scopeId","data-v-c8f3c09e"]]),g1={name:"AddBookView",components:{BookList:m1},setup(){const t=Bt(""),e=Bt("");return{isbn:t,name:e,addBook:async()=>{try{const r=Number(t.value);if(isNaN(r)){alert("ISBN must be a valid number");return}await K0(jy(sa,"books"),{isbn:r,name:e.value}),t.value="",e.value="",alert("Book added successfully!")}catch(r){console.error("Error adding book: ",r)}}}}};function _1(t,e,n,r,s,i){const o=pa("BookList");return Be(),$e("div",null,[e[6]||(e[6]=G("h1",null,"Add Book",-1)),G("form",{onSubmit:e[2]||(e[2]=dv((...c)=>r.addBook&&r.addBook(...c),["prevent"]))},[G("div",null,[e[3]||(e[3]=G("label",{for:"isbn"},"ISBN:",-1)),Jt(G("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>r.isbn=c),id:"isbn",required:""},null,512),[[jn,r.isbn]])]),G("div",null,[e[4]||(e[4]=G("label",{for:"name"},"Name:",-1)),Jt(G("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=c=>r.name=c),id:"name",required:""},null,512),[[jn,r.name]])]),e[5]||(e[5]=G("button",{type:"submit"},"Add Book",-1))],32),Ke(o)])}const y1=Kn(g1,[["render",_1]]);function Yy(t,e){return function(){return t.apply(e,arguments)}}const{toString:E1}=Object.prototype,{getPrototypeOf:bh}=Object,{iterator:Rc,toStringTag:Zy}=Symbol,Sc=(t=>e=>{const n=E1.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=t=>(t=t.toLowerCase(),e=>Sc(e)===t),Pc=t=>e=>typeof e===t,{isArray:Hs}=Array,xs=Pc("undefined");function fo(t){return t!==null&&!xs(t)&&t.constructor!==null&&!xs(t.constructor)&&Nt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const eE=ln("ArrayBuffer");function w1(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&eE(t.buffer),e}const T1=Pc("string"),Nt=Pc("function"),tE=Pc("number"),po=t=>t!==null&&typeof t=="object",v1=t=>t===!0||t===!1,ia=t=>{if(Sc(t)!=="object")return!1;const e=bh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Zy in t)&&!(Rc in t)},I1=t=>{if(!po(t)||fo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},A1=ln("Date"),b1=ln("File"),R1=ln("Blob"),S1=ln("FileList"),P1=t=>po(t)&&Nt(t.pipe),C1=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Nt(t.append)&&((e=Sc(t))==="formdata"||e==="object"&&Nt(t.toString)&&t.toString()==="[object FormData]"))},k1=ln("URLSearchParams"),[O1,N1,D1,V1]=["ReadableStream","Request","Response","Headers"].map(ln),x1=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Hs(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(fo(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,t[c],c,t)}}function nE(t,e){if(fo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,rE=t=>!xs(t)&&t!==Fr;function iu(){const{caseless:t,skipUndefined:e}=rE(this)&&this||{},n={},r=(s,i)=>{const o=t&&nE(n,i)||i;ia(n[o])&&ia(s)?n[o]=iu(n[o],s):ia(s)?n[o]=iu({},s):Hs(s)?n[o]=s.slice():(!e||!xs(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&mo(arguments[s],r);return n}const M1=(t,e,n,{allOwnKeys:r}={})=>(mo(e,(s,i)=>{n&&Nt(s)?t[i]=Yy(s,n):t[i]=s},{allOwnKeys:r}),t),L1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),F1=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},U1=(t,e,n,r)=>{let s,i,o;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!c[o]&&(e[o]=t[o],c[o]=!0);t=n!==!1&&bh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},B1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},j1=t=>{if(!t)return null;if(Hs(t))return t;let e=t.length;if(!tE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&bh(Uint8Array)),q1=(t,e)=>{const r=(t&&t[Rc]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},H1=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},z1=ln("HTMLFormElement"),W1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),qp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),K1=ln("RegExp"),sE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};mo(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},G1=t=>{sE(t,(e,n)=>{if(Nt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Nt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Q1=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Hs(t)?r(t):r(String(t).split(e)),n},J1=()=>{},X1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Y1(t){return!!(t&&Nt(t.append)&&t[Zy]==="FormData"&&t[Rc])}const Z1=t=>{const e=new Array(10),n=(r,s)=>{if(po(r)){if(e.indexOf(r)>=0)return;if(fo(r))return r;if(!("toJSON"in r)){e[s]=r;const i=Hs(r)?[]:{};return mo(r,(o,c)=>{const l=n(o,s+1);!xs(l)&&(i[c]=l)}),e[s]=void 0,i}}return r};return n(t,0)},ek=ln("AsyncFunction"),tk=t=>t&&(po(t)||Nt(t))&&Nt(t.then)&&Nt(t.catch),iE=((t,e)=>t?setImmediate:e?((n,r)=>(Fr.addEventListener("message",({source:s,data:i})=>{s===Fr&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Fr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Nt(Fr.postMessage)),nk=typeof queueMicrotask<"u"?queueMicrotask.bind(Fr):typeof process<"u"&&process.nextTick||iE,rk=t=>t!=null&&Nt(t[Rc]),N={isArray:Hs,isArrayBuffer:eE,isBuffer:fo,isFormData:C1,isArrayBufferView:w1,isString:T1,isNumber:tE,isBoolean:v1,isObject:po,isPlainObject:ia,isEmptyObject:I1,isReadableStream:O1,isRequest:N1,isResponse:D1,isHeaders:V1,isUndefined:xs,isDate:A1,isFile:b1,isBlob:R1,isRegExp:K1,isFunction:Nt,isStream:P1,isURLSearchParams:k1,isTypedArray:$1,isFileList:S1,forEach:mo,merge:iu,extend:M1,trim:x1,stripBOM:L1,inherits:F1,toFlatObject:U1,kindOf:Sc,kindOfTest:ln,endsWith:B1,toArray:j1,forEachEntry:q1,matchAll:H1,isHTMLForm:z1,hasOwnProperty:qp,hasOwnProp:qp,reduceDescriptors:sE,freezeMethods:G1,toObjectSet:Q1,toCamelCase:W1,noop:J1,toFiniteNumber:X1,findKey:nE,global:Fr,isContextDefined:rE,isSpecCompliantForm:Y1,toJSONObject:Z1,isAsyncFn:ek,isThenable:tk,setImmediate:iE,asap:nk,isIterable:rk};function _e(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}N.inherits(_e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const oE=_e.prototype,aE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{aE[t]={value:t}});Object.defineProperties(_e,aE);Object.defineProperty(oE,"isAxiosError",{value:!0});_e.from=(t,e,n,r,s,i)=>{const o=Object.create(oE);N.toFlatObject(t,o,function(f){return f!==Error.prototype},u=>u!=="isAxiosError");const c=t&&t.message?t.message:"Error",l=e==null&&t?t.code:e;return _e.call(o,c,l,n,r,s),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",i&&Object.assign(o,i),o};const sk=null;function ou(t){return N.isPlainObject(t)||N.isArray(t)}function cE(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function Hp(t,e,n){return t?t.concat(e).map(function(s,i){return s=cE(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function ik(t){return N.isArray(t)&&!t.some(ou)}const ok=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function Cc(t,e,n){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,S){return!N.isUndefined(S[P])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(e);if(!N.isFunction(s))throw new TypeError("visitor must be a function");function u(w){if(w===null)return"";if(N.isDate(w))return w.toISOString();if(N.isBoolean(w))return w.toString();if(!l&&N.isBlob(w))throw new _e("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(w)||N.isTypedArray(w)?l&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function f(w,P,S){let U=w;if(w&&!S&&typeof w=="object"){if(N.endsWith(P,"{}"))P=r?P:P.slice(0,-2),w=JSON.stringify(w);else if(N.isArray(w)&&ik(w)||(N.isFileList(w)||N.endsWith(P,"[]"))&&(U=N.toArray(w)))return P=cE(P),U.forEach(function($,H){!(N.isUndefined($)||$===null)&&e.append(o===!0?Hp([P],H,i):o===null?P:P+"[]",u($))}),!1}return ou(w)?!0:(e.append(Hp(S,P,i),u(w)),!1)}const p=[],m=Object.assign(ok,{defaultVisitor:f,convertValue:u,isVisitable:ou});function _(w,P){if(!N.isUndefined(w)){if(p.indexOf(w)!==-1)throw Error("Circular reference detected in "+P.join("."));p.push(w),N.forEach(w,function(U,B){(!(N.isUndefined(U)||U===null)&&s.call(e,U,N.isString(B)?B.trim():B,P,m))===!0&&_(U,P?P.concat(B):[B])}),p.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return _(t),e}function zp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Rh(t,e){this._pairs=[],t&&Cc(t,this,e)}const lE=Rh.prototype;lE.append=function(e,n){this._pairs.push([e,n])};lE.toString=function(e){const n=e?function(r){return e.call(this,r,zp)}:zp;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ak(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function uE(t,e,n){if(!e)return t;const r=n&&n.encode||ak;N.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=N.isURLSearchParams(e)?e.toString():new Rh(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Wp{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(r){r!==null&&e(r)})}}const hE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ck=typeof URLSearchParams<"u"?URLSearchParams:Rh,lk=typeof FormData<"u"?FormData:null,uk=typeof Blob<"u"?Blob:null,hk={isBrowser:!0,classes:{URLSearchParams:ck,FormData:lk,Blob:uk},protocols:["http","https","file","blob","url","data"]},Sh=typeof window<"u"&&typeof document<"u",au=typeof navigator=="object"&&navigator||void 0,fk=Sh&&(!au||["ReactNative","NativeScript","NS"].indexOf(au.product)<0),dk=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pk=Sh&&window.location.href||"http://localhost",mk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sh,hasStandardBrowserEnv:fk,hasStandardBrowserWebWorkerEnv:dk,navigator:au,origin:pk},Symbol.toStringTag,{value:"Module"})),wt={...mk,...hk};function gk(t,e){return Cc(t,new wt.classes.URLSearchParams,{visitor:function(n,r,s,i){return wt.isNode&&N.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function _k(t){return N.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function yk(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function fE(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=n.length;return o=!o&&N.isArray(s)?s.length:o,l?(N.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!N.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&N.isArray(s[o])&&(s[o]=yk(s[o])),!c)}if(N.isFormData(t)&&N.isFunction(t.entries)){const n={};return N.forEachEntry(t,(r,s)=>{e(_k(r),s,n,0)}),n}return null}function Ek(t,e,n){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const go={transitional:hE,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=N.isObject(e);if(i&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return s?JSON.stringify(fE(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gk(e,this.formSerializer).toString();if((c=N.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Cc(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Ek(e)):e}],transformResponse:[function(e){const n=this.transitional||go.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(c){if(o)throw c.name==="SyntaxError"?_e.from(c,_e.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wt.classes.FormData,Blob:wt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],t=>{go.headers[t]={}});const wk=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Tk=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&wk[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Kp=Symbol("internals");function ci(t){return t&&String(t).trim().toLowerCase()}function oa(t){return t===!1||t==null?t:N.isArray(t)?t.map(oa):String(t)}function vk(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Ik=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function gl(t,e,n,r,s){if(N.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!N.isString(e)){if(N.isString(r))return e.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(e)}}function Ak(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function bk(t,e){const n=N.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Dt=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(c,l,u){const f=ci(l);if(!f)throw new Error("header name must be a non-empty string");const p=N.findKey(s,f);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||l]=oa(c))}const o=(c,l)=>N.forEach(c,(u,f)=>i(u,f,l));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(N.isString(e)&&(e=e.trim())&&!Ik(e))o(Tk(e),n);else if(N.isObject(e)&&N.isIterable(e)){let c={},l,u;for(const f of e){if(!N.isArray(f))throw TypeError("Object iterator must return a key-value pair");c[u=f[0]]=(l=c[u])?N.isArray(l)?[...l,f[1]]:[l,f[1]]:f[1]}o(c,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=ci(e),e){const r=N.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return vk(s);if(N.isFunction(n))return n.call(this,s,r);if(N.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ci(e),e){const r=N.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||gl(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=ci(o),o){const c=N.findKey(r,o);c&&(!n||gl(r,r[c],c,n))&&(delete r[c],s=!0)}}return N.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||gl(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return N.forEach(this,(s,i)=>{const o=N.findKey(r,i);if(o){n[o]=oa(s),delete n[i];return}const c=e?Ak(i):String(i).trim();c!==i&&delete n[i],n[c]=oa(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return N.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&N.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Kp]=this[Kp]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=ci(o);r[c]||(bk(s,o),r[c]=!0)}return N.isArray(e)?e.forEach(i):i(e),this}};Dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Dt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});N.freezeMethods(Dt);function _l(t,e){const n=this||go,r=e||n,s=Dt.from(r.headers);let i=r.data;return N.forEach(t,function(c){i=c.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function dE(t){return!!(t&&t.__CANCEL__)}function zs(t,e,n){_e.call(this,t??"canceled",_e.ERR_CANCELED,e,n),this.name="CanceledError"}N.inherits(zs,_e,{__CANCEL__:!0});function pE(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new _e("Request failed with status code "+n.status,[_e.ERR_BAD_REQUEST,_e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Rk(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Sk(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),f=r[i];o||(o=u),n[s]=l,r[s]=u;let p=i,m=0;for(;p!==s;)m+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const _=f&&u-f;return _?Math.round(m*1e3/_):void 0}}function Pk(t,e){let n=0,r=1e3/e,s,i;const o=(u,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),t(...u)};return[(...u)=>{const f=Date.now(),p=f-n;p>=r?o(u,f):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const ja=(t,e,n=3)=>{let r=0;const s=Sk(50,250);return Pk(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,l=o-r,u=s(l),f=o<=c;r=o;const p={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:u||void 0,estimated:u&&c&&f?(c-o)/u:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};t(p)},n)},Gp=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Qp=t=>(...e)=>N.asap(()=>t(...e)),Ck=wt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,wt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(wt.origin),wt.navigator&&/(msie|trident)/i.test(wt.navigator.userAgent)):()=>!0,kk=wt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];N.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),N.isString(r)&&o.push("path="+r),N.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ok(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Nk(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function mE(t,e,n){let r=!Ok(e);return t&&(r||n==!1)?Nk(t,e):e}const Jp=t=>t instanceof Dt?{...t}:t;function Gr(t,e){e=e||{};const n={};function r(u,f,p,m){return N.isPlainObject(u)&&N.isPlainObject(f)?N.merge.call({caseless:m},u,f):N.isPlainObject(f)?N.merge({},f):N.isArray(f)?f.slice():f}function s(u,f,p,m){if(N.isUndefined(f)){if(!N.isUndefined(u))return r(void 0,u,p,m)}else return r(u,f,p,m)}function i(u,f){if(!N.isUndefined(f))return r(void 0,f)}function o(u,f){if(N.isUndefined(f)){if(!N.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function c(u,f,p){if(p in e)return r(u,f);if(p in t)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,f,p)=>s(Jp(u),Jp(f),p,!0)};return N.forEach(Object.keys({...t,...e}),function(f){const p=l[f]||s,m=p(t[f],e[f],f);N.isUndefined(m)&&p!==c||(n[f]=m)}),n}const gE=t=>{const e=Gr({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=e;if(e.headers=o=Dt.from(o),e.url=uE(mE(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),N.isFormData(n)){if(wt.hasStandardBrowserEnv||wt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(N.isFunction(n.getHeaders)){const l=n.getHeaders(),u=["content-type","content-length"];Object.entries(l).forEach(([f,p])=>{u.includes(f.toLowerCase())&&o.set(f,p)})}}if(wt.hasStandardBrowserEnv&&(r&&N.isFunction(r)&&(r=r(e)),r||r!==!1&&Ck(e.url))){const l=s&&i&&kk.read(i);l&&o.set(s,l)}return e},Dk=typeof XMLHttpRequest<"u",Vk=Dk&&function(t){return new Promise(function(n,r){const s=gE(t);let i=s.data;const o=Dt.from(s.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:u}=s,f,p,m,_,w;function P(){_&&_(),w&&w(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function U(){if(!S)return;const $=Dt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),oe={data:!c||c==="text"||c==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:$,config:t,request:S};pE(function(A){n(A),P()},function(A){r(A),P()},oe),S=null}"onloadend"in S?S.onloadend=U:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(U)},S.onabort=function(){S&&(r(new _e("Request aborted",_e.ECONNABORTED,t,S)),S=null)},S.onerror=function(H){const oe=H&&H.message?H.message:"Network Error",me=new _e(oe,_e.ERR_NETWORK,t,S);me.event=H||null,r(me),S=null},S.ontimeout=function(){let H=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const oe=s.transitional||hE;s.timeoutErrorMessage&&(H=s.timeoutErrorMessage),r(new _e(H,oe.clarifyTimeoutError?_e.ETIMEDOUT:_e.ECONNABORTED,t,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&N.forEach(o.toJSON(),function(H,oe){S.setRequestHeader(oe,H)}),N.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),c&&c!=="json"&&(S.responseType=s.responseType),u&&([m,w]=ja(u,!0),S.addEventListener("progress",m)),l&&S.upload&&([p,_]=ja(l),S.upload.addEventListener("progress",p),S.upload.addEventListener("loadend",_)),(s.cancelToken||s.signal)&&(f=$=>{S&&(r(!$||$.type?new zs(null,t,S):$),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const B=Rk(s.url);if(B&&wt.protocols.indexOf(B)===-1){r(new _e("Unsupported protocol "+B+":",_e.ERR_BAD_REQUEST,t));return}S.send(i||null)})},xk=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,c();const f=u instanceof Error?u:this.reason;r.abort(f instanceof _e?f:new zs(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,i(new _e(`timeout ${e} of ms exceeded`,_e.ETIMEDOUT))},e);const c=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>N.asap(c),l}},Mk=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},Lk=async function*(t,e){for await(const n of Fk(t))yield*Mk(n,e)},Fk=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Xp=(t,e,n,r)=>{const s=Lk(t,e);let i=0,o,c=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:f}=await s.next();if(u){c(),l.close();return}let p=f.byteLength;if(n){let m=i+=p;n(m)}l.enqueue(new Uint8Array(f))}catch(u){throw c(u),u}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},Yp=64*1024,{isFunction:$o}=N,Uk=(({Request:t,Response:e})=>({Request:t,Response:e}))(N.global),{ReadableStream:Zp,TextEncoder:em}=N.global,tm=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Bk=t=>{t=N.merge.call({skipUndefined:!0},Uk,t);const{fetch:e,Request:n,Response:r}=t,s=e?$o(e):typeof fetch=="function",i=$o(n),o=$o(r);if(!s)return!1;const c=s&&$o(Zp),l=s&&(typeof em=="function"?(w=>P=>w.encode(P))(new em):async w=>new Uint8Array(await new n(w).arrayBuffer())),u=i&&c&&tm(()=>{let w=!1;const P=new n(wt.origin,{body:new Zp,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!P}),f=o&&c&&tm(()=>N.isReadableStream(new r("").body)),p={stream:f&&(w=>w.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!p[w]&&(p[w]=(P,S)=>{let U=P&&P[w];if(U)return U.call(P);throw new _e(`Response type '${w}' is not supported`,_e.ERR_NOT_SUPPORT,S)})});const m=async w=>{if(w==null)return 0;if(N.isBlob(w))return w.size;if(N.isSpecCompliantForm(w))return(await new n(wt.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(N.isArrayBufferView(w)||N.isArrayBuffer(w))return w.byteLength;if(N.isURLSearchParams(w)&&(w=w+""),N.isString(w))return(await l(w)).byteLength},_=async(w,P)=>{const S=N.toFiniteNumber(w.getContentLength());return S??m(P)};return async w=>{let{url:P,method:S,data:U,signal:B,cancelToken:$,timeout:H,onDownloadProgress:oe,onUploadProgress:me,responseType:A,headers:y,withCredentials:v="same-origin",fetchOptions:b}=gE(w),R=e||fetch;A=A?(A+"").toLowerCase():"text";let C=xk([B,$&&$.toAbortSignal()],H),T=null;const qe=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let At;try{if(me&&u&&S!=="get"&&S!=="head"&&(At=await _(y,U))!==0){let We=new n(P,{method:"POST",body:U,duplex:"half"}),Se;if(N.isFormData(U)&&(Se=We.headers.get("content-type"))&&y.setContentType(Se),We.body){const[Ne,xt]=Gp(At,ja(Qp(me)));U=Xp(We.body,Yp,Ne,xt)}}N.isString(v)||(v=v?"include":"omit");const Re=i&&"credentials"in n.prototype,ye={...b,signal:C,method:S.toUpperCase(),headers:y.normalize().toJSON(),body:U,duplex:"half",credentials:Re?v:void 0};T=i&&new n(P,ye);let he=await(i?R(T,b):R(P,ye));const ht=f&&(A==="stream"||A==="response");if(f&&(oe||ht&&qe)){const We={};["status","statusText","headers"].forEach(Mt=>{We[Mt]=he[Mt]});const Se=N.toFiniteNumber(he.headers.get("content-length")),[Ne,xt]=oe&&Gp(Se,ja(Qp(oe),!0))||[];he=new r(Xp(he.body,Yp,Ne,()=>{xt&&xt(),qe&&qe()}),We)}A=A||"text";let Vt=await p[N.findKey(p,A)||"text"](he,w);return!ht&&qe&&qe(),await new Promise((We,Se)=>{pE(We,Se,{data:Vt,headers:Dt.from(he.headers),status:he.status,statusText:he.statusText,config:w,request:T})})}catch(Re){throw qe&&qe(),Re&&Re.name==="TypeError"&&/Load failed|fetch/i.test(Re.message)?Object.assign(new _e("Network Error",_e.ERR_NETWORK,w,T),{cause:Re.cause||Re}):_e.from(Re,Re&&Re.code,w,T)}}},jk=new Map,_E=t=>{let e=t?t.env:{};const{fetch:n,Request:r,Response:s}=e,i=[r,s,n];let o=i.length,c=o,l,u,f=jk;for(;c--;)l=i[c],u=f.get(l),u===void 0&&f.set(l,u=c?new Map:Bk(e)),f=u;return u};_E();const cu={http:sk,xhr:Vk,fetch:{get:_E}};N.forEach(cu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const nm=t=>`- ${t}`,$k=t=>N.isFunction(t)||t===null||t===!1,yE={getAdapter:(t,e)=>{t=N.isArray(t)?t:[t];const{length:n}=t;let r,s;const i={};for(let o=0;o<n;o++){r=t[o];let c;if(s=r,!$k(r)&&(s=cu[(c=String(r)).toLowerCase()],s===void 0))throw new _e(`Unknown adapter '${c}'`);if(s&&(N.isFunction(s)||(s=s.get(e))))break;i[c||"#"+o]=s}if(!s){const o=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let c=n?o.length>1?`since :
`+o.map(nm).join(`
`):" "+nm(o[0]):"as no adapter specified";throw new _e("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:cu};function yl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new zs(null,t)}function rm(t){return yl(t),t.headers=Dt.from(t.headers),t.data=_l.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),yE.getAdapter(t.adapter||go.adapter,t)(t).then(function(r){return yl(t),r.data=_l.call(t,t.transformResponse,r),r.headers=Dt.from(r.headers),r},function(r){return dE(r)||(yl(t),r&&r.response&&(r.response.data=_l.call(t,t.transformResponse,r.response),r.response.headers=Dt.from(r.response.headers))),Promise.reject(r)})}const EE="1.12.2",kc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{kc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const sm={};kc.transitional=function(e,n,r){function s(i,o){return"[Axios v"+EE+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new _e(s(o," has been removed"+(n?" in "+n:"")),_e.ERR_DEPRECATED);return n&&!sm[o]&&(sm[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,c):!0}};kc.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function qk(t,e,n){if(typeof t!="object")throw new _e("options must be an object",_e.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const c=t[i],l=c===void 0||o(c,i,t);if(l!==!0)throw new _e("option "+i+" must be "+l,_e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _e("Unknown option "+i,_e.ERR_BAD_OPTION)}}const aa={assertOptions:qk,validators:kc},hn=aa.validators;let jr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Wp,response:new Wp}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Gr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&aa.assertOptions(r,{silentJSONParsing:hn.transitional(hn.boolean),forcedJSONParsing:hn.transitional(hn.boolean),clarifyTimeoutError:hn.transitional(hn.boolean)},!1),s!=null&&(N.isFunction(s)?n.paramsSerializer={serialize:s}:aa.assertOptions(s,{encode:hn.function,serialize:hn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),aa.assertOptions(n,{baseUrl:hn.spelling("baseURL"),withXsrfToken:hn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&N.merge(i.common,i[n.method]);i&&N.forEach(["delete","get","head","post","put","patch","common"],w=>{delete i[w]}),n.headers=Dt.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(P){typeof P.runWhen=="function"&&P.runWhen(n)===!1||(l=l&&P.synchronous,c.unshift(P.fulfilled,P.rejected))});const u=[];this.interceptors.response.forEach(function(P){u.push(P.fulfilled,P.rejected)});let f,p=0,m;if(!l){const w=[rm.bind(this),void 0];for(w.unshift(...c),w.push(...u),m=w.length,f=Promise.resolve(n);p<m;)f=f.then(w[p++],w[p++]);return f}m=c.length;let _=n;for(;p<m;){const w=c[p++],P=c[p++];try{_=w(_)}catch(S){P.call(this,S);break}}try{f=rm.call(this,_)}catch(w){return Promise.reject(w)}for(p=0,m=u.length;p<m;)f=f.then(u[p++],u[p++]);return f}getUri(e){e=Gr(this.defaults,e);const n=mE(e.baseURL,e.url,e.allowAbsoluteUrls);return uE(n,e.params,e.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(e){jr.prototype[e]=function(n,r){return this.request(Gr(r||{},{method:e,url:n,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,c){return this.request(Gr(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}jr.prototype[e]=n(),jr.prototype[e+"Form"]=n(!0)});let Hk=class wE{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new zs(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new wE(function(s){e=s}),cancel:e}}};function zk(t){return function(n){return t.apply(null,n)}}function Wk(t){return N.isObject(t)&&t.isAxiosError===!0}const lu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lu).forEach(([t,e])=>{lu[e]=t});function TE(t){const e=new jr(t),n=Yy(jr.prototype.request,e);return N.extend(n,jr.prototype,e,{allOwnKeys:!0}),N.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return TE(Gr(t,s))},n}const je=TE(go);je.Axios=jr;je.CanceledError=zs;je.CancelToken=Hk;je.isCancel=dE;je.VERSION=EE;je.toFormData=Cc;je.AxiosError=_e;je.Cancel=je.CanceledError;je.all=function(e){return Promise.all(e)};je.spread=zk;je.isAxiosError=Wk;je.mergeConfig=Gr;je.AxiosHeaders=Dt;je.formToJSON=t=>fE(N.isHTMLForm(t)?new FormData(t):t);je.getAdapter=yE.getAdapter;je.HttpStatusCode=lu;je.default=je;const{Axios:bO,AxiosError:RO,CanceledError:SO,isCancel:PO,CancelToken:CO,VERSION:kO,all:OO,Cancel:NO,isAxiosError:DO,spread:VO,toFormData:xO,AxiosHeaders:MO,HttpStatusCode:LO,formToJSON:FO,getAdapter:UO,mergeConfig:BO}=je,Kk={name:"GetBookCountView",data(){return{count:null,error:null}},methods:{async getBookCount(){try{const t=await je.get("https://countbooks-5nsrwo4sta-uc.a.run.app");this.count=t.data.count,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error="Error fetching book count.",this.count=null}}}},Gk={id:"app",class:"book-counter-container"},Qk={key:0,class:"result-text"},Jk={key:1,class:"error-text"};function Xk(t,e,n,r,s,i){return Be(),$e("div",Gk,[e[1]||(e[1]=G("h1",null,"Book Counter",-1)),G("button",{class:"count-btn",onClick:e[0]||(e[0]=(...o)=>i.getBookCount&&i.getBookCount(...o))},"Get Book Count"),s.count!==null?(Be(),$e("p",Qk," Total number of books: "+jt(s.count),1)):Bn("",!0),s.error?(Be(),$e("p",Jk,jt(s.error),1)):Bn("",!0)])}const Yk=Kn(Kk,[["render",Xk],["__scopeId","data-v-7463f584"]]),im="0362e5aa99a9845d76d716452b47cec7",Zk={name:"WeatherView",data(){return{city:"",weatherData:null}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp-273):null},iconUrl(){return this.weatherData?`http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:null}},methods:{async searchByCity(){if(!this.city){alert("Please enter a city name!");return}const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${im}`;try{const e=await je.get(t);this.weatherData=e.data}catch(e){console.error("Error fetching weather data:",e),alert("City not found or API error.")}},async fetchCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(async t=>{const{latitude:e,longitude:n}=t.coords,r=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=${im}`,s=await je.get(r);this.weatherData=s.data})}},mounted(){this.fetchCurrentLocationWeather()}},eO={class:"container"},tO={class:"header"},nO={class:"search-bar"},rO={key:0},sO=["src"];function iO(t,e,n,r,s,i){return Be(),$e("div",eO,[G("div",tO,[e[2]||(e[2]=G("h1",null,"WEATHER APP",-1)),G("div",nO,[Jt(G("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.city=o),placeholder:"Enter city name",class:"search-input"},null,512),[[jn,s.city]]),G("button",{onClick:e[1]||(e[1]=(...o)=>i.searchByCity&&i.searchByCity(...o)),class:"search-button"}," Search ")])]),G("main",null,[s.weatherData?(Be(),$e("div",rO,[G("h2",null,jt(s.weatherData.name)+", "+jt(s.weatherData.sys.country),1),G("div",null,[G("img",{src:i.iconUrl,alt:"Weather Icon"},null,8,sO),G("p",null,jt(i.temperature)+" °C",1)]),G("span",null,jt(s.weatherData.weather[0].description),1)])):Bn("",!0)])])}const oO=Kn(Zk,[["render",iO],["__scopeId","data-v-133c20b1"]]),aO={name:"CountBookAPI",data(){return{jsondata:null,error:null}},methods:{async getBookCountAPI(){try{const t=await je.get("https://countbooks-5nsrwo4sta-uc.a.run.app");this.jsondata=t.data,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error="Error fetching book count.",this.jsondata=null}}},mounted(){this.getBookCountAPI()}},cO={id:"app",class:"book-api-container"},lO={key:0},uO={key:1,class:"error-text"};function hO(t,e,n,r,s,i){return Be(),$e("div",cO,[e[1]||(e[1]=G("h1",null,"Book Count API",-1)),s.jsondata?(Be(),$e("div",lO,[e[0]||(e[0]=G("h3",null,"JSON Response:",-1)),G("pre",null,jt(s.jsondata),1)])):Bn("",!0),s.error?(Be(),$e("p",uO,jt(s.error),1)):Bn("",!0)])}const fO=Kn(aO,[["render",hO],["__scopeId","data-v-836942ce"]]),dO={name:"GetAllBookAPI",data(){return{jsondata:null,error:null}},methods:{async getAllBookAPI(){try{const t=await je.get("https://us-central1-week9-haojun.cloudfunctions.net/getAllBooks");this.jsondata=t.data,this.error=null}catch(t){console.error("Error fetching book list:",t),this.error="Error fetching book list.",this.jsondata=null}}},mounted(){this.getAllBookAPI()}},pO={id:"app",class:"book-api-container"},mO={key:0},gO={key:1,class:"error-text"};function _O(t,e,n,r,s,i){return Be(),$e("div",pO,[e[1]||(e[1]=G("h1",null,"Get All Book API",-1)),s.jsondata?(Be(),$e("div",mO,[e[0]||(e[0]=G("h3",null,"JSON Response:",-1)),G("pre",null,jt(s.jsondata),1)])):Bn("",!0),s.error?(Be(),$e("p",gO,jt(s.error),1)):Bn("",!0)])}const yO=Kn(dO,[["render",_O],["__scopeId","data-v-810b006d"]]),EO=[{path:"/",name:"Home",component:Z0},{path:"/register",name:"Register",component:Q0},{path:"/signin",name:"Signin",component:J0},{path:"/admin",name:"Admin",component:t1},{path:"/user",name:"User",component:r1},{path:"/addbook",name:"AddBook",component:y1},{path:"/getbookcount",name:"GetBookCount",component:Yk},{path:"/WeatherCheck",name:"WeatherCheck",component:oO},{path:"/CountBookAPI",name:"CountBookAPI",component:fO},{path:"/GetAllBookAPI",name:"GetAllBookAPI",component:yO}],wO=NI({history:aI("/"),routes:EO}),TO={apiKey:"AIzaSyB14yE2nxS8RKv4T3leoPUgu7UMgkVZ6bo",authDomain:"week7-haojun-94b40.firebaseapp.com",projectId:"week7-haojun-94b40",storageBucket:"week7-haojun-94b40.appspot.com",messagingSenderId:"809641826305",appId:"1:809641826305:web:15cccf6cc0d23bf311c800"};Du(TO);const vE=gv(kv);vE.use(wO);vE.mount("#app");
