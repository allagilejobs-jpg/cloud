(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},ni={},qa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $n=Symbol.for("react.element"),ac=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),gc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),Bs=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var $a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Za=Object.assign,Ya={};function on(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||$a}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ja(){}Ja.prototype=on.prototype;function Oo(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||$a}var Wo=Oo.prototype=new Ja;Wo.constructor=Oo;Za(Wo,on.prototype);Wo.isPureReactComponent=!0;var js=Array.isArray,Xa=Object.prototype.hasOwnProperty,Uo={current:null},el={key:!0,ref:!0,__self:!0,__source:!0};function tl(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xa.call(t,r)&&!el.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$n,type:e,key:o,ref:s,props:i,_owner:Uo.current}}function yc(e,t){return{$$typeof:$n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Go(e){return typeof e=="object"&&e!==null&&e.$$typeof===$n}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fs=/\/+/g;function Ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function wr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case $n:case ac:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ai(s,0):r,js(i)?(n="",e!=null&&(n=e.replace(Fs,"$&/")+"/"),wr(i,t,n,"",function(u){return u})):i!=null&&(Go(i)&&(i=yc(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Fs,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",js(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ai(o,a);s+=wr(o,t,n,l,i)}else if(l=vc(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ai(o,a++),s+=wr(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function nr(e,t,n){if(e==null)return e;var r=[],i=0;return wr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Ar={transition:null},Ac={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:Uo};function nl(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Go(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=lc;L.Profiler=cc;L.PureComponent=Oo;L.StrictMode=uc;L.Suspense=mc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;L.act=nl;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Za({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Uo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xa.call(t,l)&&!el.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$n,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};L.createElement=tl;L.createFactory=function(e){var t=tl.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:fc,render:e}};L.isValidElement=Go;L.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:wc}};L.memo=function(e,t){return{$$typeof:gc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};L.unstable_act=nl;L.useCallback=function(e,t){return ae.current.useCallback(e,t)};L.useContext=function(e){return ae.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};L.useEffect=function(e,t){return ae.current.useEffect(e,t)};L.useId=function(){return ae.current.useId()};L.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ae.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};L.useRef=function(e){return ae.current.useRef(e)};L.useState=function(e){return ae.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ae.current.useTransition()};L.version="18.3.1";qa.exports=L;var Ve=qa.exports;const kc=sc(Ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Ve,xc=Symbol.for("react.element"),zc=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Dc=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function rl(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Pc.call(t,r)&&!Ec.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xc,type:e,key:o,ref:s,props:i,_owner:Dc.current}}ni.Fragment=zc;ni.jsx=rl;ni.jsxs=rl;Ka.exports=ni;var g=Ka.exports,Ki={},il={exports:{}},ye={},ol={exports:{}},sl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,E){var I=x.length;x.push(E);e:for(;0<I;){var G=I-1>>>1,$=x[G];if(0<i($,E))x[G]=E,x[I]=$,I=G;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var E=x[0],I=x.pop();if(I!==E){x[0]=I;e:for(var G=0,$=x.length,er=$>>>1;G<er;){var ht=2*(G+1)-1,wi=x[ht],vt=ht+1,tr=x[vt];if(0>i(wi,I))vt<$&&0>i(tr,wi)?(x[G]=tr,x[vt]=I,G=vt):(x[G]=wi,x[ht]=I,G=ht);else if(vt<$&&0>i(tr,I))x[G]=tr,x[vt]=I,G=vt;else break e}}return E}function i(x,E){var I=x.sortIndex-E.sortIndex;return I!==0?I:x.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,v=null,m=3,w=!1,A=!1,f=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(x){for(var E=n(u);E!==null;){if(E.callback===null)r(u);else if(E.startTime<=x)r(u),E.sortIndex=E.expirationTime,t(l,E);else break;E=n(u)}}function y(x){if(f=!1,p(x),!A)if(n(l)!==null)A=!0,yi(C);else{var E=n(u);E!==null&&Si(y,E.startTime-x)}}function C(x,E){A=!1,f&&(f=!1,d(D),D=-1),w=!0;var I=m;try{for(p(E),v=n(l);v!==null&&(!(v.expirationTime>E)||x&&!Pe());){var G=v.callback;if(typeof G=="function"){v.callback=null,m=v.priorityLevel;var $=G(v.expirationTime<=E);E=e.unstable_now(),typeof $=="function"?v.callback=$:v===n(l)&&r(l),p(E)}else r(l);v=n(l)}if(v!==null)var er=!0;else{var ht=n(u);ht!==null&&Si(y,ht.startTime-E),er=!1}return er}finally{v=null,m=I,w=!1}}var z=!1,P=null,D=-1,U=5,M=-1;function Pe(){return!(e.unstable_now()-M<U)}function ln(){if(P!==null){var x=e.unstable_now();M=x;var E=!0;try{E=P(!0,x)}finally{E?un():(z=!1,P=null)}}else z=!1}var un;if(typeof c=="function")un=function(){c(ln)};else if(typeof MessageChannel<"u"){var bs=new MessageChannel,oc=bs.port2;bs.port1.onmessage=ln,un=function(){oc.postMessage(null)}}else un=function(){R(ln,0)};function yi(x){P=x,z||(z=!0,un())}function Si(x,E){D=R(function(){x(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){A||w||(A=!0,yi(C))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var E=3;break;default:E=m}var I=m;m=E;try{return x()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,E){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var I=m;m=x;try{return E()}finally{m=I}},e.unstable_scheduleCallback=function(x,E,I){var G=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?G+I:G):I=G,x){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=I+$,x={id:h++,callback:E,priorityLevel:x,startTime:I,expirationTime:$,sortIndex:-1},I>G?(x.sortIndex=I,t(u,x),n(l)===null&&x===n(u)&&(f?(d(D),D=-1):f=!0,Si(y,I-G))):(x.sortIndex=$,t(l,x),A||w||(A=!0,yi(C))),x},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(x){var E=m;return function(){var I=m;m=E;try{return x.apply(this,arguments)}finally{m=I}}}})(sl);ol.exports=sl;var Ic=ol.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=Ve,ve=Ic;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var al=new Set,Rn={};function Lt(e,t){Yt(e,t),Yt(e+"Capture",t)}function Yt(e,t){for(Rn[e]=t,e=0;e<t.length;e++)al.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=Object.prototype.hasOwnProperty,Mc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_s={},Vs={};function Rc(e){return qi.call(Vs,e)?!0:qi.call(_s,e)?!1:Mc.test(e)?Vs[e]=!0:(_s[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nc(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qo,Ho);ee[t]=new le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qo,Ho);ee[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qo,Ho);ee[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,n,r){var i=ee.hasOwnProperty(t)?ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nc(t,n,i,r)&&(n=null),r||i===null?Rc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $e=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Tt=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),qo=Symbol.for("react.strict_mode"),$i=Symbol.for("react.profiler"),ll=Symbol.for("react.provider"),ul=Symbol.for("react.context"),$o=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),cl=Symbol.for("react.offscreen"),Os=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,ki;function yn(e){if(ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ki=t&&t[1]||""}return`
`+ki+e}var Ci=!1;function xi(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function bc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=xi(e.type,!1),e;case 11:return e=xi(e.type.render,!1),e;case 1:return e=xi(e.type,!0),e;default:return""}}function Ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nt:return"Fragment";case Tt:return"Portal";case $i:return"Profiler";case qo:return"StrictMode";case Zi:return"Suspense";case Yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ul:return(e.displayName||"Context")+".Consumer";case ll:return(e._context.displayName||"Context")+".Provider";case $o:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return t=e.displayName||null,t!==null?t:Ji(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Ji(e(t))}catch{}}return null}function Bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ji(t);case 8:return t===qo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jc(e){var t=dl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=jc(e))}function pl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xi(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ws(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fl(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function eo(e,t){fl(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,n):t.hasOwnProperty("defaultValue")&&to(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Us(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function to(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function no(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Sn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ml(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,hl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){Fc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function vl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function yl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _c=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,t){if(t){if(_c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,Ht=null,Kt=null;function Hs(e){if(e=Jn(e)){if(typeof ao!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ai(t),ao(e.stateNode,e.type,t))}}function Sl(e){Ht?Kt?Kt.push(e):Kt=[e]:Ht=e}function wl(){if(Ht){var e=Ht,t=Kt;if(Kt=Ht=null,Hs(e),t)for(e=0;e<t.length;e++)Hs(t[e])}}function Al(e,t){return e(t)}function kl(){}var zi=!1;function Cl(e,t,n){if(zi)return e(t,n);zi=!0;try{return Al(e,t,n)}finally{zi=!1,(Ht!==null||Kt!==null)&&(kl(),wl())}}function Nn(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var lo=!1;if(Qe)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){lo=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{lo=!1}function Vc(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Cn=!1,Tr=null,Nr=!1,uo=null,Oc={onError:function(e){Cn=!0,Tr=e}};function Wc(e,t,n,r,i,o,s,a,l){Cn=!1,Tr=null,Vc.apply(Oc,arguments)}function Uc(e,t,n,r,i,o,s,a,l){if(Wc.apply(this,arguments),Cn){if(Cn){var u=Tr;Cn=!1,Tr=null}else throw Error(S(198));Nr||(Nr=!0,uo=u)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(Mt(e)!==e)throw Error(S(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ks(i),e;if(o===r)return Ks(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function zl(e){return e=Gc(e),e!==null?Pl(e):null}function Pl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pl(e);if(t!==null)return t;e=e.sibling}return null}var Dl=ve.unstable_scheduleCallback,qs=ve.unstable_cancelCallback,Qc=ve.unstable_shouldYield,Hc=ve.unstable_requestPaint,Q=ve.unstable_now,Kc=ve.unstable_getCurrentPriorityLevel,Jo=ve.unstable_ImmediatePriority,El=ve.unstable_UserBlockingPriority,br=ve.unstable_NormalPriority,qc=ve.unstable_LowPriority,Il=ve.unstable_IdlePriority,ri=null,je=null;function $c(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Jc,Zc=Math.log,Yc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Zc(e)/Yc|0)|0}var sr=64,ar=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=wn(a):(o&=s,o!==0&&(r=wn(o)))}else s=n&~i,s!==0?r=wn(s):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),i=1<<n,r|=e[n],t&=~i;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Me(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Xc(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ll(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Me(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var N=0;function Ml(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rl,es,Tl,Nl,bl,po=!1,lr=[],rt=null,it=null,ot=null,bn=new Map,Bn=new Map,Xe=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $s(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function pn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jn(t),t!==null&&es(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rd(e,t,n,r,i){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,i),!0;case"dragenter":return it=pn(it,e,t,n,r,i),!0;case"mouseover":return ot=pn(ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bn.set(o,pn(bn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Bn.set(o,pn(Bn.get(o)||null,e,t,n,r,i)),!0}return!1}function Bl(e){var t=wt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=xl(n),t!==null){e.blockedOn=t,bl(e.priority,function(){Tl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);so=r,n.target.dispatchEvent(r),so=null}else return t=Jn(n),t!==null&&es(t),e.blockedOn=n,!1;t.shift()}return!0}function Zs(e,t,n){kr(e)&&n.delete(t)}function id(){po=!1,rt!==null&&kr(rt)&&(rt=null),it!==null&&kr(it)&&(it=null),ot!==null&&kr(ot)&&(ot=null),bn.forEach(Zs),Bn.forEach(Zs)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,po||(po=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,id)))}function jn(e){function t(i){return fn(i,e)}if(0<lr.length){fn(lr[0],e);for(var n=1;n<lr.length;n++){var r=lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&fn(rt,e),it!==null&&fn(it,e),ot!==null&&fn(ot,e),bn.forEach(t),Bn.forEach(t),n=0;n<Xe.length;n++)r=Xe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xe.length&&(n=Xe[0],n.blockedOn===null);)Bl(n),n.blockedOn===null&&Xe.shift()}var qt=$e.ReactCurrentBatchConfig,jr=!0;function od(e,t,n,r){var i=N,o=qt.transition;qt.transition=null;try{N=1,ts(e,t,n,r)}finally{N=i,qt.transition=o}}function sd(e,t,n,r){var i=N,o=qt.transition;qt.transition=null;try{N=4,ts(e,t,n,r)}finally{N=i,qt.transition=o}}function ts(e,t,n,r){if(jr){var i=fo(e,t,n,r);if(i===null)Bi(e,t,r,Fr,n),$s(e,r);else if(rd(i,e,t,n,r))r.stopPropagation();else if($s(e,r),t&4&&-1<nd.indexOf(e)){for(;i!==null;){var o=Jn(i);if(o!==null&&Rl(o),o=fo(e,t,n,r),o===null&&Bi(e,t,r,Fr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var Fr=null;function fo(e,t,n,r){if(Fr=null,e=Yo(r),e=wt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function jl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Jo:return 1;case El:return 4;case br:case qc:return 16;case Il:return 536870912;default:return 16}default:return 16}}var tt=null,ns=null,Cr=null;function Fl(){if(Cr)return Cr;var e,t=ns,n=t.length,r,i="value"in tt?tt.value:tt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Cr=i.slice(e,1<r?1-r:void 0)}function xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Ys(){return!1}function Se(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Ys,this.isPropagationStopped=Ys,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Se(sn),Yn=O({},sn,{view:0,detail:0}),ad=Se(Yn),Di,Ei,mn,ii=O({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Di=e.screenX-mn.screenX,Ei=e.screenY-mn.screenY):Ei=Di=0,mn=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),Js=Se(ii),ld=O({},ii,{dataTransfer:0}),ud=Se(ld),cd=O({},Yn,{relatedTarget:0}),Ii=Se(cd),dd=O({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),pd=Se(dd),fd=O({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=Se(fd),gd=O({},sn,{data:0}),Xs=Se(gd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function is(){return Sd}var wd=O({},Yn,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ad=Se(wd),kd=O({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ea=Se(kd),Cd=O({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),xd=Se(Cd),zd=O({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=Se(zd),Dd=O({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=Se(Dd),Id=[9,13,27,32],os=Qe&&"CompositionEvent"in window,xn=null;Qe&&"documentMode"in document&&(xn=document.documentMode);var Ld=Qe&&"TextEvent"in window&&!xn,_l=Qe&&(!os||xn&&8<xn&&11>=xn),ta=" ",na=!1;function Vl(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ol(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function Md(e,t){switch(e){case"compositionend":return Ol(t);case"keypress":return t.which!==32?null:(na=!0,ta);case"textInput":return e=t.data,e===ta&&na?null:e;default:return null}}function Rd(e,t){if(bt)return e==="compositionend"||!os&&Vl(e,t)?(e=Fl(),Cr=ns=tt=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _l&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Td[e.type]:t==="textarea"}function Wl(e,t,n,r){Sl(r),t=_r(t,"onChange"),0<t.length&&(n=new rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,Fn=null;function Nd(e){Xl(e,0)}function oi(e){var t=Ft(e);if(pl(t))return e}function bd(e,t){if(e==="change")return t}var Ul=!1;if(Qe){var Li;if(Qe){var Mi="oninput"in document;if(!Mi){var ia=document.createElement("div");ia.setAttribute("oninput","return;"),Mi=typeof ia.oninput=="function"}Li=Mi}else Li=!1;Ul=Li&&(!document.documentMode||9<document.documentMode)}function oa(){zn&&(zn.detachEvent("onpropertychange",Gl),Fn=zn=null)}function Gl(e){if(e.propertyName==="value"&&oi(Fn)){var t=[];Wl(t,Fn,e,Yo(e)),Cl(Nd,t)}}function Bd(e,t,n){e==="focusin"?(oa(),zn=t,Fn=n,zn.attachEvent("onpropertychange",Gl)):e==="focusout"&&oa()}function jd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(Fn)}function Fd(e,t){if(e==="click")return oi(t)}function _d(e,t){if(e==="input"||e==="change")return oi(t)}function Vd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Te=typeof Object.is=="function"?Object.is:Vd;function _n(e,t){if(Te(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qi.call(t,i)||!Te(e[i],t[i]))return!1}return!0}function sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,t){var n=sa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sa(n)}}function Ql(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ql(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hl(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=Hl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ql(n.ownerDocument.documentElement,n)){if(r!==null&&ss(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=aa(n,o);var s=aa(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wd=Qe&&"documentMode"in document&&11>=document.documentMode,Bt=null,mo=null,Pn=null,go=!1;function la(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||Bt==null||Bt!==Rr(r)||(r=Bt,"selectionStart"in r&&ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&_n(Pn,r)||(Pn=r,r=_r(mo,"onSelect"),0<r.length&&(t=new rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jt={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ri={},Kl={};Qe&&(Kl=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function si(e){if(Ri[e])return Ri[e];if(!jt[e])return e;var t=jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kl)return Ri[e]=t[n];return e}var ql=si("animationend"),$l=si("animationiteration"),Zl=si("animationstart"),Yl=si("transitionend"),Jl=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Jl.set(e,t),Lt(t,[e])}for(var Ti=0;Ti<ua.length;Ti++){var Ni=ua[Ti],Ud=Ni.toLowerCase(),Gd=Ni[0].toUpperCase()+Ni.slice(1);ft(Ud,"on"+Gd)}ft(ql,"onAnimationEnd");ft($l,"onAnimationIteration");ft(Zl,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Yl,"onTransitionEnd");Yt("onMouseEnter",["mouseout","mouseover"]);Yt("onMouseLeave",["mouseout","mouseover"]);Yt("onPointerEnter",["pointerout","pointerover"]);Yt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function ca(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function Xl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ca(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ca(i,a,u),o=l}}}if(Nr)throw e=uo,Nr=!1,uo=null,e}function B(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function bi(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[dr]){e[dr]=!0,al.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||bi(n,!1,e),bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,bi("selectionchange",!1,t))}}function eu(e,t,n,r){switch(jl(t)){case 1:var i=od;break;case 4:i=sd;break;default:i=ts}n=i.bind(null,t,n,e),i=void 0,!lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=wt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Cl(function(){var u=o,h=Yo(n),v=[];e:{var m=Jl.get(e);if(m!==void 0){var w=rs,A=e;switch(e){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":w=Ad;break;case"focusin":A="focus",w=Ii;break;case"focusout":A="blur",w=Ii;break;case"beforeblur":case"afterblur":w=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=xd;break;case ql:case $l:case Zl:w=pd;break;case Yl:w=Pd;break;case"scroll":w=ad;break;case"wheel":w=Ed;break;case"copy":case"cut":case"paste":w=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ea}var f=(t&4)!==0,R=!f&&e==="scroll",d=f?m!==null?m+"Capture":null:m;f=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Nn(c,d),y!=null&&f.push(On(c,y,p)))),R)break;c=c.return}0<f.length&&(m=new w(m,A,null,n,h),v.push({event:m,listeners:f}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==so&&(A=n.relatedTarget||n.fromElement)&&(wt(A)||A[He]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(A=n.relatedTarget||n.toElement,w=u,A=A?wt(A):null,A!==null&&(R=Mt(A),A!==R||A.tag!==5&&A.tag!==6)&&(A=null)):(w=null,A=u),w!==A)){if(f=Js,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(f=ea,y="onPointerLeave",d="onPointerEnter",c="pointer"),R=w==null?m:Ft(w),p=A==null?m:Ft(A),m=new f(y,c+"leave",w,n,h),m.target=R,m.relatedTarget=p,y=null,wt(h)===u&&(f=new f(d,c+"enter",A,n,h),f.target=p,f.relatedTarget=R,y=f),R=y,w&&A)t:{for(f=w,d=A,c=0,p=f;p;p=Rt(p))c++;for(p=0,y=d;y;y=Rt(y))p++;for(;0<c-p;)f=Rt(f),c--;for(;0<p-c;)d=Rt(d),p--;for(;c--;){if(f===d||d!==null&&f===d.alternate)break t;f=Rt(f),d=Rt(d)}f=null}else f=null;w!==null&&da(v,m,w,f,!1),A!==null&&R!==null&&da(v,R,A,f,!0)}}e:{if(m=u?Ft(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var C=bd;else if(ra(m))if(Ul)C=_d;else{C=jd;var z=Bd}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Fd);if(C&&(C=C(e,u))){Wl(v,C,n,h);break e}z&&z(e,m,u),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&to(m,"number",m.value)}switch(z=u?Ft(u):window,e){case"focusin":(ra(z)||z.contentEditable==="true")&&(Bt=z,mo=u,Pn=null);break;case"focusout":Pn=mo=Bt=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,la(v,n,h);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":la(v,n,h)}var P;if(os)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else bt?Vl(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(_l&&n.locale!=="ko"&&(bt||D!=="onCompositionStart"?D==="onCompositionEnd"&&bt&&(P=Fl()):(tt=h,ns="value"in tt?tt.value:tt.textContent,bt=!0)),z=_r(u,D),0<z.length&&(D=new Xs(D,e,null,n,h),v.push({event:D,listeners:z}),P?D.data=P:(P=Ol(n),P!==null&&(D.data=P)))),(P=Ld?Md(e,n):Rd(e,n))&&(u=_r(u,"onBeforeInput"),0<u.length&&(h=new Xs("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:u}),h.data=P))}Xl(v,t)})}function On(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _r(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Nn(e,n),o!=null&&r.unshift(On(e,o,i)),o=Nn(e,t),o!=null&&r.push(On(e,o,i))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function da(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Nn(n,o),l!=null&&s.unshift(On(n,l,a))):i||(l=Nn(n,o),l!=null&&s.push(On(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Hd=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function pa(e){return(typeof e=="string"?e:""+e).replace(Hd,`
`).replace(Kd,"")}function pr(e,t,n){if(t=pa(t),pa(e)!==t&&n)throw Error(S(425))}function Vr(){}var ho=null,vo=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,$d=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Zd)}:So;function Zd(e){setTimeout(function(){throw e})}function ji(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Be="__reactFiber$"+an,Wn="__reactProps$"+an,He="__reactContainer$"+an,wo="__reactEvents$"+an,Yd="__reactListeners$"+an,Jd="__reactHandles$"+an;function wt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[He]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ma(e);e!==null;){if(n=e[Be])return n;e=ma(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Be]||e[He],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ai(e){return e[Wn]||null}var Ao=[],_t=-1;function mt(e){return{current:e}}function j(e){0>_t||(e.current=Ao[_t],Ao[_t]=null,_t--)}function b(e,t){_t++,Ao[_t]=e.current,e.current=t}var pt={},ie=mt(pt),de=mt(!1),zt=pt;function Jt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function Or(){j(de),j(ie)}function ga(e,t,n){if(ie.current!==pt)throw Error(S(168));b(ie,t),b(de,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Bc(e)||"Unknown",i));return O({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,zt=ie.current,b(ie,e),b(de,de.current),!0}function ha(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=tu(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,j(de),j(ie),b(ie,e)):j(de),b(de,n)}var Oe=null,li=!1,Fi=!1;function nu(e){Oe===null?Oe=[e]:Oe.push(e)}function Xd(e){li=!0,nu(e)}function gt(){if(!Fi&&Oe!==null){Fi=!0;var e=0,t=N;try{var n=Oe;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Oe=null,li=!1}catch(i){throw Oe!==null&&(Oe=Oe.slice(e+1)),Dl(Jo,gt),i}finally{N=t,Fi=!1}}return null}var Vt=[],Ot=0,Ur=null,Gr=0,we=[],Ae=0,Pt=null,We=1,Ue="";function yt(e,t){Vt[Ot++]=Gr,Vt[Ot++]=Ur,Ur=e,Gr=t}function ru(e,t,n){we[Ae++]=We,we[Ae++]=Ue,we[Ae++]=Pt,Pt=e;var r=We;e=Ue;var i=32-Me(r)-1;r&=~(1<<i),n+=1;var o=32-Me(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,We=1<<32-Me(t)+i|n<<i|r,Ue=o+e}else We=1<<o|n<<i|r,Ue=e}function as(e){e.return!==null&&(yt(e,1),ru(e,1,0))}function ls(e){for(;e===Ur;)Ur=Vt[--Ot],Vt[Ot]=null,Gr=Vt[--Ot],Vt[Ot]=null;for(;e===Pt;)Pt=we[--Ae],we[Ae]=null,Ue=we[--Ae],we[Ae]=null,We=we[--Ae],we[Ae]=null}var he=null,ge=null,F=!1,Le=null;function iu(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,ge=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:We,overflow:Ue}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,ge=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(F){var t=ge;if(t){var n=t;if(!va(e,t)){if(ko(e))throw Error(S(418));t=st(n.nextSibling);var r=he;t&&va(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,F=!1,he=e)}}else{if(ko(e))throw Error(S(418));e.flags=e.flags&-4097|2,F=!1,he=e}}}function ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function fr(e){if(e!==he)return!1;if(!F)return ya(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=ge)){if(ko(e))throw ou(),Error(S(418));for(;t;)iu(e,t),t=st(t.nextSibling)}if(ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=he?st(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=ge;e;)e=st(e.nextSibling)}function Xt(){ge=he=null,F=!1}function us(e){Le===null?Le=[e]:Le.push(e)}var ep=$e.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function su(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=ct(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=Qi(p,d.mode,y),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,y){var C=p.type;return C===Nt?h(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ye&&Sa(C)===c.type)?(y=i(c,p.props),y.ref=gn(d,c,p),y.return=d,y):(y=Mr(p.type,p.key,p.props,null,d.mode,y),y.ref=gn(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Hi(p,d.mode,y),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function h(d,c,p,y,C){return c===null||c.tag!==7?(c=xt(p,d.mode,y,C),c.return=d,c):(c=i(c,p),c.return=d,c)}function v(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Qi(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case rr:return p=Mr(c.type,c.key,c.props,null,d.mode,p),p.ref=gn(d,null,c),p.return=d,p;case Tt:return c=Hi(c,d.mode,p),c.return=d,c;case Ye:var y=c._init;return v(d,y(c._payload),p)}if(Sn(c)||cn(c))return c=xt(c,d.mode,p,null),c.return=d,c;mr(d,c)}return null}function m(d,c,p,y){var C=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===C?l(d,c,p,y):null;case Tt:return p.key===C?u(d,c,p,y):null;case Ye:return C=p._init,m(d,c,C(p._payload),y)}if(Sn(p)||cn(p))return C!==null?null:h(d,c,p,y,null);mr(d,p)}return null}function w(d,c,p,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rr:return d=d.get(y.key===null?p:y.key)||null,l(c,d,y,C);case Tt:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,C);case Ye:var z=y._init;return w(d,c,p,z(y._payload),C)}if(Sn(y)||cn(y))return d=d.get(p)||null,h(c,d,y,C,null);mr(c,y)}return null}function A(d,c,p,y){for(var C=null,z=null,P=c,D=c=0,U=null;P!==null&&D<p.length;D++){P.index>D?(U=P,P=null):U=P.sibling;var M=m(d,P,p[D],y);if(M===null){P===null&&(P=U);break}e&&P&&M.alternate===null&&t(d,P),c=o(M,c,D),z===null?C=M:z.sibling=M,z=M,P=U}if(D===p.length)return n(d,P),F&&yt(d,D),C;if(P===null){for(;D<p.length;D++)P=v(d,p[D],y),P!==null&&(c=o(P,c,D),z===null?C=P:z.sibling=P,z=P);return F&&yt(d,D),C}for(P=r(d,P);D<p.length;D++)U=w(P,d,D,p[D],y),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?D:U.key),c=o(U,c,D),z===null?C=U:z.sibling=U,z=U);return e&&P.forEach(function(Pe){return t(d,Pe)}),F&&yt(d,D),C}function f(d,c,p,y){var C=cn(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var z=C=null,P=c,D=c=0,U=null,M=p.next();P!==null&&!M.done;D++,M=p.next()){P.index>D?(U=P,P=null):U=P.sibling;var Pe=m(d,P,M.value,y);if(Pe===null){P===null&&(P=U);break}e&&P&&Pe.alternate===null&&t(d,P),c=o(Pe,c,D),z===null?C=Pe:z.sibling=Pe,z=Pe,P=U}if(M.done)return n(d,P),F&&yt(d,D),C;if(P===null){for(;!M.done;D++,M=p.next())M=v(d,M.value,y),M!==null&&(c=o(M,c,D),z===null?C=M:z.sibling=M,z=M);return F&&yt(d,D),C}for(P=r(d,P);!M.done;D++,M=p.next())M=w(P,d,D,M.value,y),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?D:M.key),c=o(M,c,D),z===null?C=M:z.sibling=M,z=M);return e&&P.forEach(function(ln){return t(d,ln)}),F&&yt(d,D),C}function R(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Nt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var C=p.key,z=c;z!==null;){if(z.key===C){if(C=p.type,C===Nt){if(z.tag===7){n(d,z.sibling),c=i(z,p.props.children),c.return=d,d=c;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ye&&Sa(C)===z.type){n(d,z.sibling),c=i(z,p.props),c.ref=gn(d,z,p),c.return=d,d=c;break e}n(d,z);break}else t(d,z);z=z.sibling}p.type===Nt?(c=xt(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=Mr(p.type,p.key,p.props,null,d.mode,y),y.ref=gn(d,c,p),y.return=d,d=y)}return s(d);case Tt:e:{for(z=p.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Hi(p,d.mode,y),c.return=d,d=c}return s(d);case Ye:return z=p._init,R(d,c,z(p._payload),y)}if(Sn(p))return A(d,c,p,y);if(cn(p))return f(d,c,p,y);mr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=Qi(p,d.mode,y),c.return=d,d=c),s(d)):n(d,c)}return R}var en=su(!0),au=su(!1),Qr=mt(null),Hr=null,Wt=null,cs=null;function ds(){cs=Wt=Hr=null}function ps(e){var t=Qr.current;j(Qr),e._currentValue=t}function xo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $t(e,t){Hr=e,cs=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(cs!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Hr===null)throw Error(S(308));Wt=e,Hr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var At=null;function fs(e){At===null?At=[e]:At.push(e)}function lu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ke(e,n)}return i=r.interleaved,i===null?(t.next=t,fs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ke(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}function wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var i=e.updateQueue;Je=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var v=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=e,f=a;switch(m=t,w=n,f.tag){case 1:if(A=f.payload,typeof A=="function"){v=A.call(w,v,m);break e}v=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=f.payload,m=typeof A=="function"?A.call(w,v,m):A,m==null)break e;v=O({},v,m);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=w,l=v):h=h.next=w,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=v),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Et|=s,e.lanes=s,e.memoizedState=v}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Xn={},Fe=mt(Xn),Un=mt(Xn),Gn=mt(Xn);function kt(e){if(e===Xn)throw Error(S(174));return e}function gs(e,t){switch(b(Gn,t),b(Un,e),b(Fe,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ro(t,e)}j(Fe),b(Fe,t)}function tn(){j(Fe),j(Un),j(Gn)}function cu(e){kt(Gn.current);var t=kt(Fe.current),n=ro(t,e.type);t!==n&&(b(Un,e),b(Fe,n))}function hs(e){Un.current===e&&(j(Fe),j(Un))}var _=mt(0);function qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _i=[];function vs(){for(var e=0;e<_i.length;e++)_i[e]._workInProgressVersionPrimary=null;_i.length=0}var Pr=$e.ReactCurrentDispatcher,Vi=$e.ReactCurrentBatchConfig,Dt=0,V=null,K=null,Z=null,$r=!1,Dn=!1,Qn=0,tp=0;function te(){throw Error(S(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Te(e[n],t[n]))return!1;return!0}function Ss(e,t,n,r,i,o){if(Dt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?op:sp,e=n(r,i),Dn){o=0;do{if(Dn=!1,Qn=0,25<=o)throw Error(S(301));o+=1,Z=K=null,t.updateQueue=null,Pr.current=ap,e=n(r,i)}while(Dn)}if(Pr.current=Zr,t=K!==null&&K.next!==null,Dt=0,Z=K=V=null,$r=!1,t)throw Error(S(300));return e}function ws(){var e=Qn!==0;return Qn=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(S(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function Hn(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((Dt&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=v,s=r):l=l.next=v,V.lanes|=h,Et|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Te(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,V.lanes|=o,Et|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wi(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Te(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function du(){}function pu(e,t){var n=V,r=ze(),i=t(),o=!Te(r.memoizedState,i);if(o&&(r.memoizedState=i,ce=!0),r=r.queue,As(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,mu.bind(null,n,r,i,t),void 0,null),Y===null)throw Error(S(349));Dt&30||fu(n,t,i)}return i}function fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mu(e,t,n,r){t.value=n,t.getSnapshot=r,hu(t)&&vu(e)}function gu(e,t,n){return n(function(){hu(t)&&vu(e)})}function hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Te(e,n)}catch{return!0}}function vu(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function ka(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t.queue=e,e=e.dispatch=ip.bind(null,V,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yu(){return ze().memoizedState}function Dr(e,t,n,r){var i=be();V.flags|=e,i.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function ui(e,t,n,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(K!==null){var s=K.memoizedState;if(o=s.destroy,r!==null&&ys(r,s.deps)){i.memoizedState=Kn(t,n,o,r);return}}V.flags|=e,i.memoizedState=Kn(1|t,n,o,r)}function Ca(e,t){return Dr(8390656,8,e,t)}function As(e,t){return ui(2048,8,e,t)}function Su(e,t){return ui(4,2,e,t)}function wu(e,t){return ui(4,4,e,t)}function Au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ku(e,t,n){return n=n!=null?n.concat([e]):null,ui(4,4,Au.bind(null,t,e),n)}function ks(){}function Cu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ys(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zu(e,t,n){return Dt&21?(Te(n,t)||(n=Ll(),V.lanes|=n,Et|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function np(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{N=n,Vi.transition=r}}function Pu(){return ze().memoizedState}function rp(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Du(e))Eu(t,n);else if(n=lu(e,t,n,r),n!==null){var i=se();Re(n,e,r,i),Iu(n,t,r)}}function ip(e,t,n){var r=ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Eu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Te(a,s)){var l=t.interleaved;l===null?(i.next=i,fs(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=lu(e,t,i,r),n!==null&&(i=se(),Re(n,e,r,i),Iu(n,t,r))}}function Du(e){var t=e.alternate;return e===V||t!==null&&t===V}function Eu(e,t){Dn=$r=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}var Zr={readContext:xe,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},op={readContext:xe,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Ca,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:ka,useDebugValue:ks,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=ka(!1),t=e[0];return e=np.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=be();if(F){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),Y===null)throw Error(S(349));Dt&30||fu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ca(gu.bind(null,r,o,e),[e]),r.flags|=2048,Kn(9,mu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=be(),t=Y.identifierPrefix;if(F){var n=Ue,r=We;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sp={readContext:xe,useCallback:Cu,useContext:xe,useEffect:As,useImperativeHandle:ku,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:xu,useReducer:Oi,useRef:yu,useState:function(){return Oi(Hn)},useDebugValue:ks,useDeferredValue:function(e){var t=ze();return zu(t,K.memoizedState,e)},useTransition:function(){var e=Oi(Hn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:Pu,unstable_isNewReconciler:!1},ap={readContext:xe,useCallback:Cu,useContext:xe,useEffect:As,useImperativeHandle:ku,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:xu,useReducer:Wi,useRef:yu,useState:function(){return Wi(Hn)},useDebugValue:ks,useDeferredValue:function(e){var t=ze();return K===null?t.memoizedState=e:zu(t,K.memoizedState,e)},useTransition:function(){var e=Wi(Hn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:Pu,unstable_isNewReconciler:!1};function Ee(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=ut(e),o=Ge(r,i);o.payload=t,n!=null&&(o.callback=n),t=at(e,o,i),t!==null&&(Re(t,e,i,r),zr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=ut(e),o=Ge(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=at(e,o,i),t!==null&&(Re(t,e,i,r),zr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ut(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=at(e,i,r),t!==null&&(Re(t,e,r,n),zr(t,e,r))}};function xa(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!_n(n,r)||!_n(i,o):!0}function Lu(e,t,n){var r=!1,i=pt,o=t.contextType;return typeof o=="object"&&o!==null?o=xe(o):(i=pe(t)?zt:ie.current,r=t.contextTypes,o=(r=r!=null)?Jt(e,i):pt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Po(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ms(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=xe(o):(o=pe(t)?zt:ie.current,i.context=Jt(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),Kr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=bc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ui(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Do(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,jo=r),Do(e,t)},n}function Ru(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Do(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Do(e,t),typeof r!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Pa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=kp.bind(null,e,t,n),t.then(e,e))}function Da(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ea(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var up=$e.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?au(t,null,n,r):en(t,e.child,n,r)}function Ia(e,t,n,r,i){n=n.render;var o=t.ref;return $t(t,i),r=Ss(e,t,n,r,o,i),n=ws(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(F&&n&&as(t),t.flags|=1,oe(e,t,r,i),t.child)}function La(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ls(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tu(e,t,o,r,i)):(e=Mr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:_n,n(s,r)&&e.ref===t.ref)return qe(e,t,i)}return t.flags|=1,e=ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_n(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,qe(e,t,i)}return Eo(e,t,n,r,i)}function Nu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Gt,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Gt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,b(Gt,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,b(Gt,me),me|=r;return oe(e,t,i,n),t.child}function bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eo(e,t,n,r,i){var o=pe(n)?zt:ie.current;return o=Jt(t,o),$t(t,i),n=Ss(e,t,n,r,o,i),r=ws(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(F&&r&&as(t),t.flags|=1,oe(e,t,n,i),t.child)}function Ma(e,t,n,r,i){if(pe(n)){var o=!0;Wr(t)}else o=!1;if($t(t,i),t.stateNode===null)Er(e,t),Lu(t,n,r),Po(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=xe(u):(u=pe(n)?zt:ie.current,u=Jt(t,u));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&za(t,s,r,u),Je=!1;var m=t.memoizedState;s.state=m,Kr(t,r,s,i),l=t.memoizedState,a!==r||m!==l||de.current||Je?(typeof h=="function"&&(zo(t,n,h,r),l=t.memoizedState),(a=Je||xa(t,n,a,r,m,l,u))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,uu(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ee(t.type,a),s.props=u,v=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=xe(l):(l=pe(n)?zt:ie.current,l=Jt(t,l));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==v||m!==l)&&za(t,s,r,l),Je=!1,m=t.memoizedState,s.state=m,Kr(t,r,s,i);var A=t.memoizedState;a!==v||m!==A||de.current||Je?(typeof w=="function"&&(zo(t,n,w,r),A=t.memoizedState),(u=Je||xa(t,n,u,r,m,A,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,A,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,A,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),s.props=r,s.state=A,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Io(e,t,n,r,o,i)}function Io(e,t,n,r,i,o){bu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ha(t,n,!1),qe(e,t,o);r=t.stateNode,up.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=en(t,e.child,null,o),t.child=en(t,null,a,o)):oe(e,t,a,o),t.memoizedState=r.state,i&&ha(t,n,!0),t.child}function Bu(e){var t=e.stateNode;t.pendingContext?ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ga(e,t.context,!1),gs(e,t.containerInfo)}function Ra(e,t,n,r,i){return Xt(),us(i),t.flags|=256,oe(e,t,n,r),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ju(e,t,n){var r=t.pendingProps,i=_.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(_,i&1),e===null)return Co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fi(s,r,0,null),e=xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Mo(n),t.memoizedState=Lo,e):Cs(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cp(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ct(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ct(a,o):(o=xt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Mo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Lo,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cs(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&us(r),en(t,e.child,null,n),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cp(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ui(Error(S(422))),gr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fi({mode:"visible",children:r.children},i,0,null),o=xt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&en(t,e.child,null,s),t.child.memoizedState=Mo(s),t.memoizedState=Lo,o);if(!(t.mode&1))return gr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=Ui(o,r,void 0),gr(e,t,s,r)}if(a=(s&e.childLanes)!==0,ce||a){if(r=Y,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ke(e,i),Re(r,e,i,-1))}return Is(),r=Ui(Error(S(421))),gr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ge=st(i.nextSibling),he=t,F=!0,Le=null,e!==null&&(we[Ae++]=We,we[Ae++]=Ue,we[Ae++]=Pt,We=e.id,Ue=e.overflow,Pt=t),t=Cs(t,r.children),t.flags|=4096,t)}function Ta(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xo(e.return,t,n)}function Gi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=_.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,n,t);else if(e.tag===19)Ta(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(_,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gi(t,!0,n,null,o);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Er(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Et|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dp(e,t,n){switch(t.tag){case 3:Bu(t),Xt();break;case 5:cu(t);break;case 1:pe(t.type)&&Wr(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(Qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(_,_.current&1),t.flags|=128,null):n&t.child.childLanes?ju(e,t,n):(b(_,_.current&1),e=qe(e,t,n),e!==null?e.sibling:null);b(_,_.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(_,_.current),r)break;return null;case 22:case 23:return t.lanes=0,Nu(e,t,n)}return qe(e,t,n)}var _u,Ro,Vu,Ou;_u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ro=function(){};Vu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kt(Fe.current);var o=null;switch(n){case"input":i=Xi(e,i),r=Xi(e,r),o=[];break;case"select":i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),o=[];break;case"textarea":i=no(e,i),r=no(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}io(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ou=function(e,t,n,r){n!==r&&(t.flags|=4)};function hn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pp(e,t,n){var r=t.pendingProps;switch(ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return pe(t.type)&&Or(),ne(t),null;case 3:return r=t.stateNode,tn(),j(de),j(ie),vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Vo(Le),Le=null))),Ro(e,t),ne(t),null;case 5:hs(t);var i=kt(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Vu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ne(t),null}if(e=kt(Fe.current),fr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[Wn]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<An.length;i++)B(An[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ws(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Gs(r,o),B("invalid",r)}io(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),i=["children",""+a]):Rn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":ir(r),Us(r,o,!0);break;case"textarea":ir(r),Qs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Be]=t,e[Wn]=r,_u(e,t,!1,!1),t.stateNode=e;e:{switch(s=oo(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<An.length;i++)B(An[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Ws(e,r),i=Xi(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=O({},r,{value:void 0}),B("invalid",e);break;case"textarea":Gs(e,r),i=no(e,r),B("invalid",e);break;default:i=r}io(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yl(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hl(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tn(e,l):typeof l=="number"&&Tn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",e):l!=null&&Ko(e,o,l,s))}switch(n){case"input":ir(e),Us(e,r,!1);break;case"textarea":ir(e),Qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Ou(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=kt(Gn.current),kt(Fe.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ne(t),null;case 13:if(j(_),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ge!==null&&t.mode&1&&!(t.flags&128))ou(),Xt(),t.flags|=98560,o=!1;else if(o=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Be]=t}else Xt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Le!==null&&(Vo(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_.current&1?q===0&&(q=3):Is())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Ro(e,t),e===null&&Vn(t.stateNode.containerInfo),ne(t),null;case 10:return ps(t.type._context),ne(t),null;case 17:return pe(t.type)&&Or(),ne(t),null;case 19:if(j(_),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)hn(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qr(e),s!==null){for(t.flags|=128,hn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(_,_.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>rn&&(t.flags|=128,r=!0,hn(o,!1),t.lanes=4194304)}else{if(!r)if(e=qr(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!F)return ne(t),null}else 2*Q()-o.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,hn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=_.current,b(_,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function fp(e,t){switch(ls(t),t.tag){case 1:return pe(t.type)&&Or(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),j(de),j(ie),vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hs(t),null;case 13:if(j(_),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Xt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(_),null;case 4:return tn(),null;case 10:return ps(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var hr=!1,re=!1,mp=typeof WeakSet=="function"?WeakSet:Set,k=null;function Ut(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function To(e,t,n){try{n()}catch(r){W(e,t,r)}}var Na=!1;function gp(e,t){if(ho=jr,e=Hl(),ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,v=e,m=null;t:for(;;){for(var w;v!==n||i!==0&&v.nodeType!==3||(a=s+i),v!==o||r!==0&&v.nodeType!==3||(l=s+r),v.nodeType===3&&(s+=v.nodeValue.length),(w=v.firstChild)!==null;)m=v,v=w;for(;;){if(v===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(w=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vo={focusedElem:e,selectionRange:n},jr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var f=A.memoizedProps,R=A.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?f:Ee(t.type,f),R);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){W(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return A=Na,Na=!1,A}function En(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&To(t,n,o)}i=i.next}while(i!==r)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function No(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Wn],delete t[wo],delete t[Yd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}function Bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bo(e,t,n),e=e.sibling;e!==null;)Bo(e,t,n),e=e.sibling}var J=null,Ie=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Gu(e,t,n),n=n.sibling}function Gu(e,t,n){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ri,n)}catch{}switch(n.tag){case 5:re||Ut(n,t);case 6:var r=J,i=Ie;J=null,Ze(e,t,n),J=r,Ie=i,J!==null&&(Ie?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Ie?(e=J,n=n.stateNode,e.nodeType===8?ji(e.parentNode,n):e.nodeType===1&&ji(e,n),jn(e)):ji(J,n.stateNode));break;case 4:r=J,i=Ie,J=n.stateNode.containerInfo,Ie=!0,Ze(e,t,n),J=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&To(n,t,s),i=i.next}while(i!==r)}Ze(e,t,n);break;case 1:if(!re&&(Ut(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ba(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mp),t.forEach(function(r){var i=xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Ie=!1;break e;case 3:J=a.stateNode.containerInfo,Ie=!0;break e;case 4:J=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(J===null)throw Error(S(160));Gu(o,s,i),J=null,Ie=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){W(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qu(t,e),t=t.sibling}function Qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ne(e),r&4){try{En(3,e,e.return),di(3,e)}catch(f){W(e,e.return,f)}try{En(5,e,e.return)}catch(f){W(e,e.return,f)}}break;case 1:De(t,e),Ne(e),r&512&&n!==null&&Ut(n,n.return);break;case 5:if(De(t,e),Ne(e),r&512&&n!==null&&Ut(n,n.return),e.flags&32){var i=e.stateNode;try{Tn(i,"")}catch(f){W(e,e.return,f)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fl(i,o),oo(a,s);var u=oo(a,o);for(s=0;s<l.length;s+=2){var h=l[s],v=l[s+1];h==="style"?yl(i,v):h==="dangerouslySetInnerHTML"?hl(i,v):h==="children"?Tn(i,v):Ko(i,h,v,u)}switch(a){case"input":eo(i,o);break;case"textarea":ml(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Qt(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?Qt(i,!!o.multiple,o.defaultValue,!0):Qt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wn]=o}catch(f){W(e,e.return,f)}}break;case 6:if(De(t,e),Ne(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(f){W(e,e.return,f)}}break;case 3:if(De(t,e),Ne(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(f){W(e,e.return,f)}break;case 4:De(t,e),Ne(e);break;case 13:De(t,e),Ne(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=Q())),r&4&&Ba(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(u=re)||h,De(t,e),re=u):De(t,e),Ne(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(v=k=h;k!==null;){switch(m=k,w=m.child,m.tag){case 0:case 11:case 14:case 15:En(4,m,m.return);break;case 1:Ut(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(f){W(r,n,f)}}break;case 5:Ut(m,m.return);break;case 22:if(m.memoizedState!==null){Fa(v);continue}}w!==null?(w.return=m,k=w):Fa(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{i=v.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,l=v.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vl("display",s))}catch(f){W(e,e.return,f)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(f){W(e,e.return,f)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:De(t,e),Ne(e),r&4&&Ba(e);break;case 21:break;default:De(t,e),Ne(e)}}function Ne(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uu(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tn(i,""),r.flags&=-33);var o=ba(e);Bo(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ba(e);bo(e,a,s);break;default:throw Error(S(161))}}catch(l){W(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hp(e,t,n){k=e,Hu(e)}function Hu(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||hr;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||re;a=hr;var u=re;if(hr=s,(re=l)&&!u)for(k=i;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?_a(i):l!==null?(l.return=s,k=l):_a(i);for(;o!==null;)k=o,Hu(o),o=o.sibling;k=i,hr=a,re=u}ja(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):ja(e)}}function ja(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||di(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ee(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Aa(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&jn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}re||t.flags&512&&No(t)}catch(m){W(t,t.return,m)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Fa(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function _a(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{di(4,t)}catch(l){W(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){W(t,i,l)}}var o=t.return;try{No(t)}catch(l){W(t,o,l)}break;case 5:var s=t.return;try{No(t)}catch(l){W(t,s,l)}}}catch(l){W(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var vp=Math.ceil,Yr=$e.ReactCurrentDispatcher,xs=$e.ReactCurrentOwner,Ce=$e.ReactCurrentBatchConfig,T=0,Y=null,H=null,X=0,me=0,Gt=mt(0),q=0,qn=null,Et=0,pi=0,zs=0,In=null,ue=null,Ps=0,rn=1/0,_e=null,Jr=!1,jo=null,lt=null,vr=!1,nt=null,Xr=0,Ln=0,Fo=null,Ir=-1,Lr=0;function se(){return T&6?Q():Ir!==-1?Ir:Ir=Q()}function ut(e){return e.mode&1?T&2&&X!==0?X&-X:ep.transition!==null?(Lr===0&&(Lr=Ll()),Lr):(e=N,e!==0||(e=window.event,e=e===void 0?16:jl(e.type)),e):1}function Re(e,t,n,r){if(50<Ln)throw Ln=0,Fo=null,Error(S(185));Zn(e,n,r),(!(T&2)||e!==Y)&&(e===Y&&(!(T&2)&&(pi|=n),q===4&&et(e,X)),fe(e,r),n===1&&T===0&&!(t.mode&1)&&(rn=Q()+500,li&&gt()))}function fe(e,t){var n=e.callbackNode;ed(e,t);var r=Br(e,e===Y?X:0);if(r===0)n!==null&&qs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qs(n),t===1)e.tag===0?Xd(Va.bind(null,e)):nu(Va.bind(null,e)),$d(function(){!(T&6)&&gt()}),n=null;else{switch(Ml(r)){case 1:n=Jo;break;case 4:n=El;break;case 16:n=br;break;case 536870912:n=Il;break;default:n=br}n=ec(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(Ir=-1,Lr=0,T&6)throw Error(S(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Br(e,e===Y?X:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ei(e,r);else{t=r;var i=T;T|=2;var o=$u();(Y!==e||X!==t)&&(_e=null,rn=Q()+500,Ct(e,t));do try{wp();break}catch(a){qu(e,a)}while(!0);ds(),Yr.current=o,T=i,H!==null?t=0:(Y=null,X=0,t=q)}if(t!==0){if(t===2&&(i=co(e),i!==0&&(r=i,t=_o(e,i))),t===1)throw n=qn,Ct(e,0),et(e,r),fe(e,Q()),n;if(t===6)et(e,r);else{if(i=e.current.alternate,!(r&30)&&!yp(i)&&(t=ei(e,r),t===2&&(o=co(e),o!==0&&(r=o,t=_o(e,o))),t===1))throw n=qn,Ct(e,0),et(e,r),fe(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:St(e,ue,_e);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Ps+500-Q(),10<t)){if(Br(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=So(St.bind(null,e,ue,_e),t);break}St(e,ue,_e);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Me(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vp(r/1960))-r,10<r){e.timeoutHandle=So(St.bind(null,e,ue,_e),r);break}St(e,ue,_e);break;case 5:St(e,ue,_e);break;default:throw Error(S(329))}}}return fe(e,Q()),e.callbackNode===n?Ku.bind(null,e):null}function _o(e,t){var n=In;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=ei(e,t),e!==2&&(t=ue,ue=n,t!==null&&Vo(t)),e}function Vo(e){ue===null?ue=e:ue.push.apply(ue,e)}function yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Te(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~zs,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Va(e){if(T&6)throw Error(S(327));Zt();var t=Br(e,0);if(!(t&1))return fe(e,Q()),null;var n=ei(e,t);if(e.tag!==0&&n===2){var r=co(e);r!==0&&(t=r,n=_o(e,r))}if(n===1)throw n=qn,Ct(e,0),et(e,t),fe(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,ue,_e),fe(e,Q()),null}function Ds(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(rn=Q()+500,li&&gt())}}function It(e){nt!==null&&nt.tag===0&&!(T&6)&&Zt();var t=T;T|=1;var n=Ce.transition,r=N;try{if(Ce.transition=null,N=1,e)return e()}finally{N=r,Ce.transition=n,T=t,!(T&6)&&gt()}}function Es(){me=Gt.current,j(Gt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Or();break;case 3:tn(),j(de),j(ie),vs();break;case 5:hs(r);break;case 4:tn();break;case 13:j(_);break;case 19:j(_);break;case 10:ps(r.type._context);break;case 22:case 23:Es()}n=n.return}if(Y=e,H=e=ct(e.current,null),X=me=t,q=0,qn=null,zs=pi=Et=0,ue=In=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}At=null}return e}function qu(e,t){do{var n=H;try{if(ds(),Pr.current=Zr,$r){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$r=!1}if(Dt=0,Z=K=V=null,Dn=!1,Qn=0,xs.current=null,n===null||n.return===null){q=1,qn=t,H=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=X,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Da(s);if(w!==null){w.flags&=-257,Ea(w,s,a,o,t),w.mode&1&&Pa(o,u,t),t=w,l=u;var A=t.updateQueue;if(A===null){var f=new Set;f.add(l),t.updateQueue=f}else A.add(l);break e}else{if(!(t&1)){Pa(o,u,t),Is();break e}l=Error(S(426))}}else if(F&&a.mode&1){var R=Da(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ea(R,s,a,o,t),us(nn(l,a));break e}}o=l=nn(l,a),q!==4&&(q=2),In===null?In=[o]:In.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Mu(o,l,t);wa(o,d);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(lt===null||!lt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Ru(o,a,t);wa(o,y);break e}}o=o.return}while(o!==null)}Yu(n)}catch(C){t=C,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function $u(){var e=Yr.current;return Yr.current=Zr,e===null?Zr:e}function Is(){(q===0||q===3||q===2)&&(q=4),Y===null||!(Et&268435455)&&!(pi&268435455)||et(Y,X)}function ei(e,t){var n=T;T|=2;var r=$u();(Y!==e||X!==t)&&(_e=null,Ct(e,t));do try{Sp();break}catch(i){qu(e,i)}while(!0);if(ds(),T=n,Yr.current=r,H!==null)throw Error(S(261));return Y=null,X=0,q}function Sp(){for(;H!==null;)Zu(H)}function wp(){for(;H!==null&&!Qc();)Zu(H)}function Zu(e){var t=Xu(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Yu(e):H=t,xs.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fp(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,H=null;return}}else if(n=pp(n,t,me),n!==null){H=n;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);q===0&&(q=5)}function St(e,t,n){var r=N,i=Ce.transition;try{Ce.transition=null,N=1,Ap(e,t,n,r)}finally{Ce.transition=i,N=r}return null}function Ap(e,t,n,r){do Zt();while(nt!==null);if(T&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(td(e,o),e===Y&&(H=Y=null,X=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,ec(br,function(){return Zt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var s=N;N=1;var a=T;T|=4,xs.current=null,gp(e,n),Qu(n,e),Od(vo),jr=!!ho,vo=ho=null,e.current=n,hp(n),Hc(),T=a,N=s,Ce.transition=o}else e.current=n;if(vr&&(vr=!1,nt=e,Xr=i),o=e.pendingLanes,o===0&&(lt=null),$c(n.stateNode),fe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jr)throw Jr=!1,e=jo,jo=null,e;return Xr&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===Fo?Ln++:(Ln=0,Fo=e):Ln=0,gt(),null}function Zt(){if(nt!==null){var e=Ml(Xr),t=Ce.transition,n=N;try{if(Ce.transition=null,N=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Xr=0,T&6)throw Error(S(331));var i=T;for(T|=4,k=e.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:En(8,h,o)}var v=h.child;if(v!==null)v.return=h,k=v;else for(;k!==null;){h=k;var m=h.sibling,w=h.return;if(Wu(h),h===u){k=null;break}if(m!==null){m.return=w,k=m;break}k=w}}}var A=o.alternate;if(A!==null){var f=A.child;if(f!==null){A.child=null;do{var R=f.sibling;f.sibling=null,f=R}while(f!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:En(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,k=d;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){s=k;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,k=p;else e:for(s=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:di(9,a)}}catch(C){W(a,a.return,C)}if(a===s){k=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,k=y;break e}k=a.return}}if(T=i,gt(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ri,e)}catch{}r=!0}return r}finally{N=n,Ce.transition=t}}return!1}function Oa(e,t,n){t=nn(n,t),t=Mu(e,t,1),e=at(e,t,1),t=se(),e!==null&&(Zn(e,1,t),fe(e,t))}function W(e,t,n){if(e.tag===3)Oa(e,e,n);else for(;t!==null;){if(t.tag===3){Oa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lt===null||!lt.has(r))){e=nn(n,e),e=Ru(t,e,1),t=at(t,e,1),e=se(),t!==null&&(Zn(t,1,e),fe(t,e));break}}t=t.return}}function kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(X&n)===n&&(q===4||q===3&&(X&130023424)===X&&500>Q()-Ps?Ct(e,0):zs|=n),fe(e,t)}function Ju(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=se();e=Ke(e,t),e!==null&&(Zn(e,t,n),fe(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Ju(e,n)}var Xu;Xu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,dp(e,t,n);ce=!!(e.flags&131072)}else ce=!1,F&&t.flags&1048576&&ru(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Er(e,t),e=t.pendingProps;var i=Jt(t,ie.current);$t(t,n),i=Ss(null,t,r,e,i,n);var o=ws();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,Wr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ms(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Po(t,r,e,n),t=Io(null,t,r,!0,o,n)):(t.tag=0,F&&o&&as(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Er(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pp(r),e=Ee(r,e),i){case 0:t=Eo(null,t,r,e,n);break e;case 1:t=Ma(null,t,r,e,n);break e;case 11:t=Ia(null,t,r,e,n);break e;case 14:t=La(null,t,r,Ee(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ee(r,i),Eo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ee(r,i),Ma(e,t,r,i,n);case 3:e:{if(Bu(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,uu(e,t),Kr(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=nn(Error(S(423)),t),t=Ra(e,t,r,n,i);break e}else if(r!==i){i=nn(Error(S(424)),t),t=Ra(e,t,r,n,i);break e}else for(ge=st(t.stateNode.containerInfo.firstChild),he=t,F=!0,Le=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xt(),r===i){t=qe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&Co(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,yo(r,i)?s=null:o!==null&&yo(r,o)&&(t.flags|=32),bu(e,t),oe(e,t,s,n),t.child;case 6:return e===null&&Co(t),null;case 13:return ju(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ee(r,i),Ia(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,b(Qr,r._currentValue),r._currentValue=s,o!==null)if(Te(o.value,s)){if(o.children===i.children&&!de.current){t=qe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ge(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xo(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),xo(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$t(t,n),i=xe(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=Ee(r,t.pendingProps),i=Ee(r.type,i),La(e,t,r,i,n);case 15:return Tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ee(r,i),Er(e,t),t.tag=1,pe(r)?(e=!0,Wr(t)):e=!1,$t(t,n),Lu(t,r,i),Po(t,r,i,n),Io(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return Nu(e,t,n)}throw Error(S(156,t.tag))};function ec(e,t){return Dl(e,t)}function zp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new zp(e,t,n,r)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return Ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$o)return 11;if(e===Zo)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ls(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nt:return xt(n.children,i,o,t);case qo:s=8,i|=8;break;case $i:return e=ke(12,n,t,i|2),e.elementType=$i,e.lanes=o,e;case Zi:return e=ke(13,n,t,i),e.elementType=Zi,e.lanes=o,e;case Yi:return e=ke(19,n,t,i),e.elementType=Yi,e.lanes=o,e;case cl:return fi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ll:s=10;break e;case ul:s=9;break e;case $o:s=11;break e;case Zo:s=14;break e;case Ye:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=ke(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xt(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function fi(e,t,n,r){return e=ke(22,e,r,t),e.elementType=cl,e.lanes=n,e.stateNode={isHidden:!1},e}function Qi(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Hi(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ms(e,t,n,r,i,o,s,a,l){return e=new Dp(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(o),e}function Ep(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return pt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(pe(n))return tu(e,n,t)}return t}function nc(e,t,n,r,i,o,s,a,l){return e=Ms(n,r,!0,e,i,o,s,a,l),e.context=tc(null),n=e.current,r=se(),i=ut(n),o=Ge(r,i),o.callback=t??null,at(n,o,i),e.current.lanes=i,Zn(e,i,r),fe(e,r),e}function mi(e,t,n,r){var i=t.current,o=se(),s=ut(i);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(i,t,s),e!==null&&(Re(e,i,s,o),zr(e,i,s)),s}function ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rs(e,t){Wa(e,t),(e=e.alternate)&&Wa(e,t)}function Ip(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}gi.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));mi(e,t,null,null)};gi.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){mi(null,e,null,null)}),t[He]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xe.length&&t!==0&&t<Xe[n].priority;n++);Xe.splice(n,0,e),n===0&&Bl(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ua(){}function Lp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ti(s);o.call(u)}}var s=nc(t,r,e,0,null,!1,!1,"",Ua);return e._reactRootContainer=s,e[He]=s.current,Vn(e.nodeType===8?e.parentNode:e),It(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ti(l);a.call(u)}}var l=Ms(e,0,!1,null,null,!1,!1,"",Ua);return e._reactRootContainer=l,e[He]=l.current,Vn(e.nodeType===8?e.parentNode:e),It(function(){mi(t,l,n,r)}),l}function vi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ti(s);a.call(l)}}mi(t,s,e,i)}else s=Lp(n,t,e,i,r);return ti(s)}Rl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Xo(t,n|1),fe(t,Q()),!(T&6)&&(rn=Q()+500,gt()))}break;case 13:It(function(){var r=Ke(e,1);if(r!==null){var i=se();Re(r,e,1,i)}}),Rs(e,1)}};es=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=se();Re(t,e,134217728,n)}Rs(e,134217728)}};Tl=function(e){if(e.tag===13){var t=ut(e),n=Ke(e,t);if(n!==null){var r=se();Re(n,e,t,r)}Rs(e,t)}};Nl=function(){return N};bl=function(e,t){var n=N;try{return N=e,t()}finally{N=n}};ao=function(e,t,n){switch(t){case"input":if(eo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(S(90));pl(r),eo(r,i)}}}break;case"textarea":ml(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};Al=Ds;kl=It;var Mp={usingClientEntryPoint:!1,Events:[Jn,Ft,ai,Sl,wl,Ds]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rp={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zl(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ri=yr.inject(Rp),je=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(S(200));return Ep(e,t,null,n)};ye.createRoot=function(e,t){if(!Ns(e))throw Error(S(299));var n=!1,r="",i=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ms(e,1,!1,null,null,n,!1,r,i),e[He]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Ts(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=zl(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return It(e)};ye.hydrate=function(e,t,n){if(!hi(t))throw Error(S(200));return vi(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nc(t,null,e,1,n??null,i,!1,o,s),e[He]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gi(t)};ye.render=function(e,t,n){if(!hi(t))throw Error(S(200));return vi(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!hi(e))throw Error(S(40));return e._reactRootContainer?(It(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[He]=null})}),!0):!1};ye.unstable_batchedUpdates=Ds;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hi(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return vi(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),il.exports=ye;var Tp=il.exports,Ga=Tp;Ki.createRoot=Ga.createRoot,Ki.hydrateRoot=Ga.hydrateRoot;const Sr=[{week:1,phase:"Foundation",title:"Cloud Foundations, Azure Setup & Cost Awareness",cert:"AZ-900",color:"#0078D4",gapBadges:[],objectives:["Understand cloud computing models (IaaS, PaaS, SaaS)","Navigate the Azure Portal and use Cloud Shell","Create and manage resource groups with proper tagging","Set up cost budgets and billing alerts from Day 1","Install and configure Azure CLI locally"],services:["Azure Portal","Azure CLI","Resource Groups","Cost Management","Tags","Subscriptions"],infused:["Resource tagging from Day 1","Budget alerts & cost basics","Cost Management introduction"],topics:["Cloud computing overview (IaaS, PaaS, SaaS)","Cloud deployment models (Public, Private, Hybrid)","Azure global infrastructure (Regions, Availability Zones)","Azure account, subscriptions & resource groups","Azure Portal walkthrough & Azure CLI basics","Resource tagging strategy — tag everything from Day 1","Azure Cost Management — budgets, billing alerts, cost awareness"],labs:[{name:"Lab 1: Create a Free Azure Account",duration:"20 min",difficulty:"Beginner",steps:["Navigate to azure.microsoft.com/free and sign up","Verify identity with phone number and credit card (no charge)","Explore the Azure Portal dashboard — pin key services","Open Azure Cloud Shell (Bash) and run: az account show","Navigate to Cost Management → set a $10 monthly budget with email alerts at 50%, 80%, 100%"],verify:"You can access the Portal and Cloud Shell. Budget alert is active."},{name:"Lab 2: Install Azure CLI & VS Code",duration:"25 min",difficulty:"Beginner",steps:["Download VS Code from code.visualstudio.com","Install Azure CLI from Microsoft docs","Open terminal → run: az login → authenticate via browser","Run: az group list -o table → verify empty list","Install VS Code extensions: Azure Account, Azure Resources, Azure CLI Tools"],verify:"az account show returns your subscription. VS Code extensions installed."},{name:"Lab 3: Create Resource Groups with Proper Tagging",duration:"20 min",difficulty:"Beginner",steps:["In Portal: Create rg-learning-portal in East US","Add tags: Environment=Learning, Owner=YourName, CostCenter=Training, Week=1","In CLI: az group create --name rg-learning-cli --location eastus --tags Environment=Learning Owner=YourName CostCenter=Training","Run: az group list -o table → confirm both exist","View tags: az tag list → understand the tagging structure","Navigate to Cost Management → Cost Analysis → group by Tag:CostCenter","Clean up: az group delete --name rg-learning-cli --yes --no-wait"],verify:"Both resource groups exist with proper tags. Cost Analysis shows tag grouping."}],resources:[{type:"doc",name:"Microsoft Learn: Azure Fundamentals (AZ-900 Path)",url:"https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/"},{type:"doc",name:"Azure Architecture Center",url:"https://learn.microsoft.com/en-us/azure/architecture/"},{type:"doc",name:"Azure Tagging Best Practices",url:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging"},{type:"video",name:"FreeCodeCamp AZ-900 Full Course (YouTube)",url:"https://www.youtube.com/watch?v=NKEFWyqJ5XA"}],project:null,prompts:[{title:"Azure Shared Responsibility Model",prompt:"Explain the Azure shared responsibility model like I'm preparing for AZ-900. Create a detailed table showing what Microsoft manages vs what I manage for: IaaS (VMs), PaaS (App Service, Azure SQL), and SaaS (Microsoft 365). For each layer, list specific security responsibilities. Then give me 5 real-world scenarios and ask me to identify who's responsible."},{title:"Tagging Strategy Design",prompt:`I'm setting up Azure for a 50-person startup called 'TechNova' with 3 departments: Engineering, Marketing, and Finance. Design a complete tagging strategy including:
1. Mandatory tags (Environment, Owner, CostCenter, Project, etc.)
2. Tag naming conventions
3. Azure Policy to enforce required tags
4. How to use tags for cost allocation and showback
5. Example az cli commands to create resources with proper tags
Make it production-ready.`},{title:"AZ-900 Practice Questions",prompt:`Quiz me on 15 AZ-900 practice questions covering: cloud concepts (5 questions), Azure architecture (5 questions), and Azure pricing/support (5 questions). For each question:
1. Give me the question with 4 options
2. Wait for my answer
3. Explain why the correct answer is right AND why the others are wrong
4. Reference the specific Azure service or concept
Make them exam-difficulty level.`},{title:"Azure Regions & Availability",prompt:`Teach me Azure global infrastructure in depth. Cover:
1. Regions vs Availability Zones vs Availability Sets — when to use each
2. Region pairs and their disaster recovery benefits
3. How to choose the right region (latency, compliance, services, cost)
4. Sovereign clouds (Government, China)
5. Create a decision tree for: 'TechNova' needs to deploy a web app serving US and EU customers with 99.99% SLA
Include az cli examples.`}]},{week:2,phase:"Identity & Governance",title:"Entra ID, RBAC & Azure Policy Fundamentals",cert:"AZ-104 / AZ-500",color:"#5C2D91",gapBadges:[],objectives:["Create and manage users and groups in Entra ID","Implement RBAC with built-in and custom roles","Create and assign Azure Policies for governance","Understand Management Groups hierarchy","Set up Service Principals and Managed Identities"],services:["Entra ID","RBAC","Azure Policy","Management Groups","PIM","Managed Identity"],infused:["Azure Policy basics (allowed locations, require tags)","Management Groups hierarchy","Conditional Access introduction"],topics:["Active Directory vs Microsoft Entra ID","Tenants, subscriptions & management groups hierarchy","Users, groups & guest accounts","Role-Based Access Control (RBAC) — built-in vs custom","Privileged Identity Management (PIM)","Managed Identities & Service Principals","Azure Policy basics — built-in policies & assignments","Management Groups for organizational governance","Conditional Access introduction"],labs:[{name:"Lab 1: Create Users & Groups in Entra ID",duration:"20 min",difficulty:"Beginner",steps:["Go to Portal → Microsoft Entra ID → Users → New User","Create user: alice@yourtenant.onmicrosoft.com ('Cloud Admin')","Create user: bob@yourtenant.onmicrosoft.com ('Developer')","Create Security Group: 'Azure-Admins' → add Alice","Create Security Group: 'Developers' → add Bob","Sign in as Alice in private browser → change temp password"],verify:"Both users exist. Alice can sign in and is in Azure-Admins group."},{name:"Lab 2: Configure RBAC",duration:"25 min",difficulty:"Intermediate",steps:["Create resource group: rg-rbac-lab in East US (with proper tags)","Assign 'Reader' role to Bob on rg-rbac-lab","Sign in as Bob → verify read-only access","Change Bob to 'Contributor' → verify create access","Assign 'Reader' to 'Developers' group at subscription level","Clean up all assignments"],verify:"Bob has correct access at each step. Group-based RBAC works."},{name:"Lab 3: Implement Your First Azure Policies",duration:"30 min",difficulty:"Intermediate",steps:["Navigate to Azure Policy → Definitions → browse built-in policies","Assign policy: 'Allowed locations' → restrict to East US and West US","Test: try creating a resource in Europe → verify DENIED","Assign policy: 'Require a tag and its value' → enforce CostCenter tag","Test: create resource without CostCenter tag → verify DENIED","Create resource WITH CostCenter tag → verify ALLOWED","View Policy Compliance dashboard → understand compliance state"],verify:"Resources blocked in wrong regions. Untagged resources denied."},{name:"Lab 4: Create a Service Principal",duration:"20 min",difficulty:"Intermediate",steps:["Run: az ad sp create-for-rbac --name sp-week2-demo --role Contributor --scopes /subscriptions/<sub-id>","Save appId, password, tenant from JSON output","Login as SP: az login --service-principal -u <appId> -p <password> --tenant <tenant>","Verify access: az group list -o table","Delete SP: az ad sp delete --id <appId>"],verify:"Service principal can authenticate and list resources."}],resources:[{type:"doc",name:"Microsoft Learn: Manage identities in Entra ID",url:"https://learn.microsoft.com/en-us/training/modules/manage-users-and-groups-in-aad/"},{type:"doc",name:"RBAC Documentation",url:"https://learn.microsoft.com/en-us/azure/role-based-access-control/overview"},{type:"doc",name:"Azure Policy Overview",url:"https://learn.microsoft.com/en-us/azure/governance/policy/overview"}],project:null,prompts:[{title:"Enterprise IAM Design",prompt:`I'm designing IAM for 'Contoso Corp' — a 200-person company with these departments:
- IT (15 people): need full Azure admin
- Development (50): need to deploy apps, can't touch networking
- Data Team (20): need access to databases and storage only
- Finance (30): read-only cost reports
- Executives (5): dashboards only

Design the complete Entra ID structure:
1. Groups and nested groups
2. RBAC role assignments (built-in roles)
3. Custom role if needed
4. Management Group hierarchy
5. Conditional Access policies (MFA for admins, block risky sign-ins)

Give me the az cli commands to implement this.`},{title:"Entra ID vs Azure RBAC",prompt:`I'm confused about Entra ID roles vs Azure RBAC roles. Explain with a clear comparison table:
1. What each controls (Entra ID objects vs Azure resources)
2. Where they're assigned
3. 10 common roles from each with their purpose
4. Real scenarios: 'User needs to reset passwords' vs 'User needs to create VMs'
5. How they work together

Then quiz me with 5 scenarios where I have to pick the right role type.`},{title:"Azure Policy Deep Dive",prompt:`Teach me Azure Policy like I'm implementing governance for a regulated company. Cover:
1. Policy vs Initiative (policy set) — when to use each
2. Effect types (Deny, Audit, Append, Modify, DeployIfNotExists) with examples
3. Write 5 custom policies:
   - Deny public IP addresses on VMs
   - Require specific tag values (Environment must be dev/staging/prod)
   - Audit storage accounts without HTTPS
   - Deploy diagnostics settings automatically
   - Deny resources outside approved regions
4. How to test policies before enforcement
5. Remediation tasks

Provide the full JSON for each policy.`},{title:"Managed Identity Patterns",prompt:`Explain Azure Managed Identities with real architecture patterns:
1. System-assigned vs User-assigned — decision tree
2. Pattern: VM accessing Key Vault secrets
3. Pattern: App Service connecting to Azure SQL
4. Pattern: Azure Function writing to Storage
5. Pattern: AKS pods accessing Azure resources

For each pattern, show:
- The az cli commands to set it up
- The RBAC role assignments needed
- The application code to use the identity
- Security benefits over service principals with secrets`}]},{week:3,phase:"Networking I",title:"Virtual Networks, Subnets, NSGs & DNS",cert:"AZ-104",color:"#0078D4",gapBadges:["NETWORKING"],objectives:["Design VNets with proper CIDR addressing","Create subnets for multi-tier architectures","Configure NSG rules and understand rule evaluation","Deploy Azure Bastion for secure VM access","Set up Azure DNS zones (public and private)"],services:["VNet","Subnets","NSG","ASG","Azure DNS","Bastion","Public IP"],infused:[],topics:["Virtual Networks (VNets) & address spaces (CIDR notation)","Subnets, public IPs, private IPs","Network Security Groups (NSGs) & rule evaluation","Application Security Groups (ASGs)","Azure DNS (public & private zones)","Azure Bastion for secure VM access"],labs:[{name:"Lab 1: Build a VNet with 3 Subnets",duration:"25 min",difficulty:"Beginner",steps:["Create VNet: vnet-main, 10.0.0.0/16, East US (tag: Environment=Learning)","Add Subnet: snet-web (10.0.1.0/24) — web tier","Add Subnet: snet-app (10.0.2.0/24) — application tier","Add Subnet: snet-db (10.0.3.0/24) — database tier","Verify: az network vnet subnet list --vnet-name vnet-main -g rg-network -o table"],verify:"VNet exists with 3 subnets. CIDR ranges don't overlap."},{name:"Lab 2: Configure NSG Rules",duration:"30 min",difficulty:"Intermediate",steps:["Create nsg-web → associate with snet-web","Add inbound: Allow HTTP (80) from Internet, Priority 100","Add inbound: Allow HTTPS (443) from Internet, Priority 110","Add inbound: Deny ALL other, Priority 4000","Create nsg-db → associate with snet-db","Add rule: Allow SQL (1433) ONLY from 10.0.2.0/24 (app subnet)","Deploy VMs and test connectivity between subnets"],verify:"Web allows 80/443. DB only accepts traffic from app subnet."},{name:"Lab 3: Deploy Azure Bastion",duration:"25 min",difficulty:"Intermediate",steps:["Add AzureBastionSubnet (10.0.4.0/26) to vnet-main","Deploy Bastion and associate with vnet-main","Deploy a VM in snet-web WITHOUT a public IP","Connect via Bastion (Portal → VM → Connect → Bastion)","Verify secure access without exposing public IP"],verify:"VM has no public IP but is accessible via Bastion."}],resources:[{type:"doc",name:"Azure Networking Fundamentals",url:"https://learn.microsoft.com/en-us/training/modules/azure-networking-fundamentals/"},{type:"doc",name:"NSG Documentation",url:"https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"}],project:null,prompts:[{title:"CIDR Subnetting Exercise",prompt:`I need to master Azure subnetting. Give me a complete exercise:

Scenario: 'MegaCorp' has 4 departments needing isolated networks within 10.0.0.0/16:
- Web tier: 200 hosts
- App tier: 100 hosts  
- Database tier: 50 hosts
- Management: 25 hosts
- Plus room for Bastion, Gateway, and future growth

1. Calculate the optimal subnet sizes (show the binary math)
2. Assign CIDR blocks for each
3. Identify the network address, broadcast address, and usable range for each
4. Show az cli commands to create the VNet and all subnets
5. Quiz me with 5 subnetting problems of increasing difficulty`},{title:"NSG Rule Evaluation",prompt:`Teach me NSG rule evaluation in Azure with visual diagrams:
1. Inbound vs Outbound rule processing
2. Priority numbers — lower wins, explain with examples
3. Default rules and why they exist
4. Subnet NSG vs NIC NSG — which wins?
5. Application Security Groups — when and why

Scenario: Design NSG rules for a 3-tier app where:
- Web tier accepts 80/443 from internet, can talk to app tier on 8080
- App tier accepts 8080 from web only, talks to DB on 1433
- DB tier accepts 1433 from app only, no internet
- All tiers need SSH from Bastion subnet only

Write all the rules with priorities and explain the flow.`},{title:"Network Architecture Diagram",prompt:`Create a complete ASCII network diagram for a secure 3-tier Azure architecture including:
- Hub VNet with Bastion, Azure Firewall, VPN Gateway
- Spoke VNet with web/app/db subnets
- NSGs on each subnet with traffic flow arrows
- Route tables showing traffic paths
- Private DNS zones

Then explain each component's purpose and how traffic flows from:
1. Internet user → Web tier → App tier → Database
2. Admin → Bastion → VM in private subnet
3. On-prem user → VPN → Internal app`},{title:"Azure DNS Deep Dive",prompt:`Explain Azure DNS completely:
1. Public DNS zones — hosting your domain in Azure
2. Private DNS zones — internal name resolution
3. DNS record types (A, AAAA, CNAME, MX, TXT, SRV) with examples
4. Auto-registration with VNets
5. Split-horizon DNS pattern

Hands-on: I own 'technova.io'. Walk me through:
- Delegating to Azure DNS
- Creating records for web app, mail, and SPF/DKIM
- Private zone for internal VMs
- All the az cli commands`}]},{week:4,phase:"Networking II",title:"Load Balancing, VPN Gateway & Peering",cert:"AZ-104 / AZ-305",color:"#00A4EF",gapBadges:[],objectives:["Deploy Azure Load Balancer (Layer 4) with health probes","Configure VNet Peering for hub-spoke topology","Understand Application Gateway vs Load Balancer","Set up VPN Gateway for hybrid connectivity","Design multi-region traffic routing"],services:["Load Balancer","Application Gateway","Traffic Manager","Front Door","VNet Peering","VPN Gateway"],infused:[],topics:["Azure Load Balancer (Layer 4) — public & internal","Application Gateway (Layer 7) with WAF","Azure Traffic Manager & Front Door","VNet Peering (regional & global)","VPN Gateway (Site-to-Site, Point-to-Site)","ExpressRoute overview"],labs:[{name:"Lab 1: Deploy a Public Load Balancer",duration:"35 min",difficulty:"Intermediate",steps:["Create 2 VMs (vm-web-1, vm-web-2) in availability set, running nginx","Create Load Balancer: lb-web, SKU: Standard","Configure frontend IP, backend pool (both VMs)","Add health probe: HTTP on port 80, interval 5s","Add LB rule: port 80 → backend port 80","Browse to LB public IP → refresh to see traffic alternate","Stop vm-web-1 → verify failover to vm-web-2"],verify:"Traffic alternates between VMs. Failover works when one VM stops."},{name:"Lab 2: Configure VNet Peering (Hub-Spoke)",duration:"30 min",difficulty:"Intermediate",steps:["Create vnet-spoke1 (10.1.0.0/16) and vnet-spoke2 (10.2.0.0/16)","Deploy a VM in each VNet","Set up peering: spoke1 ↔ vnet-main, spoke2 ↔ vnet-main","From spoke1 VM, ping vnet-main VM → should succeed","From spoke1 VM, ping spoke2 VM → should FAIL (non-transitive)","Document the hub-spoke topology"],verify:"Peered VNets can communicate. Non-peered cannot (without hub routing)."}],resources:[{type:"doc",name:"Azure Load Balancer Docs",url:"https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview"},{type:"doc",name:"VNet Peering",url:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview"}],project:{name:"PROJECT 1: Deploy a 3-Tier Architecture in Azure",description:"Design and deploy a full 3-tier app (web → app → database) with load balancing, NSGs between tiers, and Bastion access.",dummyData:"Contoso Retail — e-commerce with 500 daily users. Web tier serves static assets, App tier runs business logic APIs, DB tier hosts product catalog (50,000 SKUs).",steps:["Design the architecture diagram with Claude","Create VNet with 3 subnets: web, app, db","Deploy 2 web VMs behind a public Load Balancer","Deploy 1 app VM running a Node.js API","Deploy 1 VM with PostgreSQL in the db subnet","Configure NSGs: web allows 80/443, app allows 8080 from web only, db allows 5432 from app only","Deploy Bastion for management access","Test end-to-end and document architecture"]},prompts:[{title:"Load Balancer Comparison",prompt:`Compare ALL Azure load balancing options in a detailed table:
- Azure Load Balancer (Layer 4)
- Application Gateway (Layer 7)
- Traffic Manager (DNS-based)
- Azure Front Door (global Layer 7)

For each, cover:
1. OSI layer and how it routes traffic
2. Health probe options
3. SSL termination capability
4. WAF support
5. Global vs regional
6. Pricing model
7. Best use cases (3 each)

Then give me a decision tree: Given these 5 scenarios, which should I use?
- Internal API load balancing
- Global web app with WAF
- Multi-region failover
- UDP game server
- Microservices with path-based routing`},{title:"Hub-Spoke Network Design",prompt:`Design a hub-spoke network topology for 'Contoso Corp' with:
- 1 hub VNet (shared services: Bastion, Firewall, VPN Gateway)
- 3 spoke VNets (Production, Development, Test)
- On-premises connectivity via VPN

Include:
1. Complete CIDR addressing plan
2. VNet peering configuration (with transit)
3. Route tables for spoke-to-spoke via hub
4. NSG rules for each spoke
5. Azure Firewall rules
6. DNS resolution strategy

Provide all az cli commands and draw an ASCII diagram showing traffic flows.`},{title:"VPN Gateway Setup",prompt:`Walk me through setting up Azure VPN Gateway step by step:

1. Site-to-Site VPN to on-premises:
   - Gateway subnet sizing
   - SKU selection guide
   - Local network gateway config
   - IPsec/IKE parameters
   - All az cli commands

2. Point-to-Site VPN for remote workers:
   - Certificate vs Azure AD authentication
   - Client configuration
   - Split tunneling setup

3. Troubleshooting guide:
   - Common issues and fixes
   - How to read VPN logs
   - Testing connectivity

Scenario: Connect Azure VNet (10.0.0.0/16) to on-prem (192.168.0.0/24) with BGP.`},{title:"ExpressRoute vs VPN",prompt:`Compare ExpressRoute vs VPN Gateway for hybrid connectivity:

1. Architecture differences (with diagrams)
2. Bandwidth and latency comparison
3. Pricing breakdown (realistic monthly costs)
4. Security considerations
5. Redundancy options
6. Setup complexity

Decision framework: A company has:
- 500 employees
- 10TB monthly data transfer to Azure
- Latency-sensitive ERP application
- $5,000/month connectivity budget

Recommend the best option with justification.`}]},{week:5,phase:"Compute",title:"VMs, App Service & Serverless Compute Intro",cert:"AZ-104 / AZ-204",color:"#F25022",gapBadges:["LINUX"],objectives:["Deploy and manage Windows and Linux VMs","Configure VM Scale Sets with autoscaling","Deploy web apps to Azure App Service with slots","Create your first Azure Function (HTTP trigger)","Deploy Static Web Apps with GitHub integration"],services:["VMs","VMSS","App Service","Azure Functions","Static Web Apps","Availability Sets/Zones"],infused:["Azure Functions basics (HTTP trigger)","Static Web Apps introduction","Serverless as a compute model"],topics:["Azure VM sizes, families & pricing tiers","Availability Sets vs Zones vs Scale Sets","VM extensions, custom data & cloud-init","Azure App Service plans & tiers","Deployment slots & zero-downtime swaps","Azure Functions — serverless compute introduction","Azure Static Web Apps — full-stack serverless hosting","Compute decision tree: VM → App Service → Functions → ACI → AKS"],labs:[{name:"Lab 1: Deploy Windows & Linux VMs",duration:"30 min",difficulty:"Beginner",steps:["Create Windows VM: vm-win-01, B2s, Windows Server 2022","RDP in → install IIS via Server Manager","Create Linux VM: vm-linux-01, B1s, Ubuntu 22.04","SSH in → sudo apt update && sudo apt install nginx -y","Verify both serve web pages via public IPs","Resize vm-linux-01 to B2s → observe restart"],verify:"Both VMs serve web pages. Resize completes successfully."},{name:"Lab 2: VM Scale Set with Autoscaling",duration:"35 min",difficulty:"Intermediate",steps:["Create VMSS with cloud-init for nginx, 2 initial instances","Attach Load Balancer","Set autoscale: out at CPU > 70%, in at CPU < 30%","Stress test: stress --cpu 4 --timeout 300","Watch VMSS scale out in Activity Log"],verify:"VMSS scales out under load, scales in when load drops."},{name:"Lab 3: Azure App Service with Deployment Slots",duration:"30 min",difficulty:"Intermediate",steps:["Create App Service Plan (B1, Linux) + Web App (Node.js 18)","Connect to sample GitHub repo for deployment","Enable staging slot → deploy v2 to staging","Browse both slots → verify different versions","Swap staging → production → zero-downtime deployment"],verify:"Production shows new version after swap. No downtime occurred."},{name:"Lab 4: Your First Azure Function",duration:"25 min",difficulty:"Beginner",steps:["Create Function App: func-week5, Node.js, Consumption plan","Create HTTP trigger function: GetGreeting → returns personalized JSON","Test in Portal with query parameters","Test via curl: curl https://func-week5.azurewebsites.net/api/GetGreeting?name=Azure","View Monitor tab → see invocation logs","Note: we'll go deep on Functions triggers and patterns in Week 16"],verify:"Function returns personalized greeting. Logs show invocations."},{name:"Lab 5: Deploy a Static Web App",duration:"25 min",difficulty:"Beginner",steps:["Create a simple React or HTML app (ask Claude to generate it)","Push to a GitHub repository","Create Azure Static Web App → link to GitHub","Verify auto-deployment on push","Create a PR → see preview environment auto-created"],verify:"Site deploys automatically. PR creates preview environment."}],resources:[{type:"doc",name:"VM Documentation",url:"https://learn.microsoft.com/en-us/azure/virtual-machines/"},{type:"doc",name:"App Service Documentation",url:"https://learn.microsoft.com/en-us/azure/app-service/"},{type:"doc",name:"Azure Functions Overview",url:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"},{type:"doc",name:"Static Web Apps",url:"https://learn.microsoft.com/en-us/azure/static-web-apps/"}],project:{name:"PROJECT 2: Host a Portfolio on Azure (3 Ways)",description:"Deploy the same portfolio website three ways: Blob Storage static site, App Service with slots, and Static Web App with GitHub integration.",dummyData:"Portfolio: About Me, 5 projects with screenshots, Skills section, Contact form. Use placeholder images and dummy descriptions.",steps:["Ask Claude to generate a responsive HTML/CSS portfolio","Deploy v1 to Blob Storage as a static website + CDN","Deploy v2 to App Service with staging/production slots","Deploy v3 to Azure Static Web App linked to GitHub","Add a simple Azure Function API endpoint: /api/contact","Compare: cost, deployment speed, features of each approach","Document your recommendation for different use cases"]},prompts:[{title:"VM Size Selection Guide",prompt:`Create a complete Azure VM sizing guide:

1. Explain all VM families with real-world analogies:
   - B-series (burstable)
   - D-series (general purpose)
   - E-series (memory optimized)
   - F-series (compute optimized)
   - N-series (GPU)
   - L-series (storage optimized)

2. Decision matrix for these workloads:
   - WordPress blog (100 visitors/day)
   - .NET API (1000 requests/min)
   - PostgreSQL database (500GB)
   - Machine learning training
   - Video transcoding batch job

3. Cost optimization strategies:
   - Reserved instances vs Spot vs Pay-as-you-go
   - When to use each
   - Savings calculator example

Include az cli commands to deploy each.`},{title:"Compute Decision Tree",prompt:`Help me choose the right Azure compute service. Create a detailed decision tree covering:
- Azure VMs
- VM Scale Sets
- App Service
- Azure Functions
- Container Instances (ACI)
- Azure Kubernetes Service (AKS)
- Azure Container Apps

For each, explain:
1. Best use cases (3 examples)
2. Pricing model
3. Scaling capabilities
4. Management overhead
5. When NOT to use it

Then give me 10 scenarios and quiz me on which compute service to choose.`},{title:"Cloud-Init Script Generator",prompt:`Generate production-ready cloud-init scripts for Azure VMs:

1. Web Server Setup (nginx + certbot + monitoring agent)
2. Docker Host (Docker, Docker Compose, cleanup cron)
3. Development VM (Node.js, Python, Git, VS Code Server)
4. Database Server (PostgreSQL with proper security)

For each script:
- Full YAML cloud-init format
- Explanation of every section
- Security hardening steps
- How to pass it via az cli
- How to troubleshoot if it fails

Also show how to use custom data vs cloud-init and when to use each.`},{title:"App Service vs Functions vs Static Web Apps",prompt:`Deep comparison of Azure's PaaS compute options:

| Feature | App Service | Functions | Static Web Apps |
|---------|-------------|-----------|------------------|

Fill in the table for:
- Pricing tiers and costs
- Scaling (min/max instances)
- Cold start behavior
- Custom domains & SSL
- Authentication options
- CI/CD integration
- Networking (VNet integration)
- Runtime support

Then 5 scenarios:
1. E-commerce storefront
2. Webhook processor
3. Company blog
4. REST API for mobile app
5. Event-driven image processor

Recommend the best option for each with justification.`}]},{week:6,phase:"Data Services I",title:"Storage, Key Vault & SQL Database Fundamentals",cert:"AZ-104 / AZ-204",color:"#7FBA00",gapBadges:["SQL"],objectives:["Create storage accounts with proper redundancy","Manage blob lifecycle policies and access tiers","Store and retrieve secrets from Key Vault","Create and query Azure SQL Database","Implement SAS tokens for secure access"],services:["Storage Account","Blob","Files","Key Vault","Azure SQL","SAS Tokens"],infused:["Azure SQL Database basics (create, connect, query)","Database firewall rules & basic security"],topics:["Storage accounts: Blob, File, Table, Queue","Storage tiers: Hot, Cool, Cold, Archive","Blob lifecycle management policies","Managed vs unmanaged disks","Azure Files & File Sync","Azure Key Vault — secrets, keys, certificates","SAS tokens, encryption, access policies","Azure SQL Database — creating, connecting, querying","SQL firewall rules & basic security"],labs:[{name:"Lab 1: Storage Account & Blob Containers",duration:"25 min",difficulty:"Beginner",steps:["Create storage account: stweek6demo, Standard, LRS (with proper tags)","Create containers: 'documents' (private), 'images' (blob access)","Upload files via Portal and CLI","Generate SAS token with 1-hour expiry","Access blob via SAS URL in browser"],verify:"Private blob accessible via SAS URL. Public blob accessible directly."},{name:"Lab 2: Blob Lifecycle Management",duration:"20 min",difficulty:"Intermediate",steps:["Navigate to Lifecycle Management → Add Rule","Move to Cool after 30 days, Archive after 90, Delete after 365","Review JSON policy structure","Verify via CLI: az storage account management-policy show"],verify:"Lifecycle policy is active and shows in CLI output."},{name:"Lab 3: Azure Key Vault",duration:"30 min",difficulty:"Intermediate",steps:["Create Key Vault: kv-week6-demo","Add secret: DatabasePassword = 'P@ssw0rd!2025-DEMO'","Add access policy: Get + List for your user","Retrieve via CLI: az keyvault secret show","Create VM with managed identity → grant Key Vault access","From VM, retrieve secret using managed identity + REST API"],verify:"Secret retrievable via CLI. VM can access via managed identity."},{name:"Lab 4: Create Your First Azure SQL Database",duration:"35 min",difficulty:"Intermediate",steps:["Create Azure SQL Server: sql-week6.database.windows.net","Create database: db-products, DTU tier: Basic (5 DTUs)","Configure server firewall: add your client IP","Connect from VS Code with SQL Server extension","Create tables: Products (id, name, price, category, stock_qty)","Ask Claude to generate 30 INSERT statements → run them","Run queries: SELECT with WHERE, GROUP BY, ORDER BY","Store the SQL connection string in Key Vault"],verify:"Database has 30 products. Connection string stored in Key Vault."}],resources:[{type:"doc",name:"Azure Storage Docs",url:"https://learn.microsoft.com/en-us/azure/storage/"},{type:"doc",name:"Key Vault Docs",url:"https://learn.microsoft.com/en-us/azure/key-vault/"},{type:"doc",name:"Azure SQL Database Quickstart",url:"https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart"}],project:null,prompts:[{title:"Storage Strategy Design",prompt:`Design a complete Azure Storage strategy for a healthcare company 'MediCare Solutions' with:
- 10TB patient records (HIPAA compliant, 7-year retention)
- 500GB medical images (accessed daily for 30 days, then rarely)
- 50GB daily logs (keep 90 days)
- Shared files for 100 employees

Provide:
1. Storage account design (how many, what types, redundancy)
2. Container/share structure
3. Access tier strategy with lifecycle policies
4. Encryption and access control
5. Cost estimate (monthly)
6. Disaster recovery plan
7. All az cli commands to implement

Ensure HIPAA compliance throughout.`},{title:"Key Vault Patterns",prompt:`Teach me Azure Key Vault patterns for enterprise use:

1. Secret management patterns:
   - Storing database connection strings
   - API keys rotation
   - Certificate management for TLS

2. Access patterns:
   - App Service with managed identity
   - Azure Functions accessing secrets
   - VM using Key Vault for disk encryption
   - CI/CD pipeline accessing secrets

3. Security:
   - RBAC vs access policies
   - Soft delete and purge protection
   - Private endpoints for Key Vault
   - Monitoring and alerting

For each pattern, provide:
- Architecture diagram (ASCII)
- az cli commands
- Code sample to retrieve secrets`},{title:"Generate SQL Test Data",prompt:`Generate realistic test data for an e-commerce database:

1. Schema:
   - Products (id, name, description, price, category_id, stock_qty, created_at)
   - Categories (id, name, parent_id)
   - Customers (id, email, name, created_at)
   - Orders (id, customer_id, total, status, created_at)
   - OrderItems (id, order_id, product_id, quantity, price)

2. Data:
   - 10 categories (with 3 having parent categories)
   - 50 products across categories
   - 30 customers
   - 100 orders with varying statuses
   - 250 order items

3. Provide:
   - CREATE TABLE statements
   - All INSERT statements
   - 10 useful analytical queries (top sellers, revenue by category, etc.)

Make the data realistic with proper names and prices.`},{title:"Secure App to SQL Connection",prompt:`Walk me through the most secure way to connect an Azure App Service to Azure SQL Database:

1. Managed Identity approach:
   - Enable system-assigned identity on App Service
   - Grant SQL access to the identity
   - Connection string without password
   - C#/Node.js code examples

2. Key Vault approach:
   - Store connection string in Key Vault
   - App Service references Key Vault
   - Connection string rotation strategy

3. Private networking:
   - VNet integration for App Service
   - Private endpoint for SQL
   - DNS configuration

4. Additional security:
   - SQL firewall rules
   - TDE encryption
   - Auditing
   - Threat detection

Provide complete az cli commands for the entire setup.`}]},{week:7,phase:"Data Services II",title:"Cosmos DB, PostgreSQL & Database Security",cert:"AZ-204 / AZ-305",color:"#E8A400",gapBadges:["NOSQL"],objectives:["Secure Azure SQL with TDE, auditing, and private endpoints","Deploy PostgreSQL Flexible Server with VNet integration","Create Cosmos DB with proper partitioning strategy","Understand Cosmos DB consistency levels","Choose the right database for different workloads"],services:["Cosmos DB","PostgreSQL Flexible Server","MySQL","Private Endpoints","Database Migration Service"],infused:[],topics:["Azure SQL security deep dive: TDE, auditing, Entra ID auth","Azure Database for PostgreSQL Flexible Server","Azure Database for MySQL Flexible Server","Azure Cosmos DB — multi-model, global distribution","Cosmos DB consistency levels & partitioning","Database Private Endpoints — secure data access","Choosing the right database (decision tree)","Azure Database Migration Service"],labs:[{name:"Lab 1: Secure Azure SQL (from Week 6)",duration:"35 min",difficulty:"Intermediate",steps:["Enable Transparent Data Encryption on db-products → verify on by default","Enable Auditing → send logs to Storage Account","Configure Entra ID authentication for the SQL server","Disable public access → create Private Endpoint in snet-db","Configure Private DNS Zone: privatelink.database.windows.net","From VNet VM: nslookup → verify private IP resolution","From local machine: verify access is DENIED"],verify:"SQL only accessible via private endpoint. Auditing logs appear."},{name:"Lab 2: Deploy PostgreSQL Flexible Server",duration:"35 min",difficulty:"Intermediate",steps:["Create PostgreSQL: pg-week7-demo, Burstable B1ms","Configure VNet integration in snet-db","Connect via psql from a VNet VM","Create inventory_db with products, warehouses, stock_levels tables","Insert dummy data: 5 warehouses, 100 products","Run aggregation queries across tables","Enable point-in-time restore and verify backup settings"],verify:"PostgreSQL accessible from VNet only. Queries return expected data."},{name:"Lab 3: Cosmos DB Deep Dive",duration:"40 min",difficulty:"Intermediate",steps:["Create Cosmos DB: cosmos-week7, API: NoSQL","Create database: ecommerce, container: user_sessions, partition: /userId","Insert 20 JSON session documents (ask Claude for data)","Query with SQL syntax → check RU consumption per query","Change consistency: Strong → Session → observe tradeoffs","Add second region (West US) → test global distribution","Create container with TTL (auto-delete after 24 hours)"],verify:"Cosmos DB queries work. Multi-region replication visible."}],resources:[{type:"doc",name:"Azure SQL Security",url:"https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview"},{type:"doc",name:"Cosmos DB Docs",url:"https://learn.microsoft.com/en-us/azure/cosmos-db/"},{type:"doc",name:"PostgreSQL Flexible Server",url:"https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/"}],project:{name:"PROJECT 3: Multi-Database E-Commerce Backend",description:"Build a complete data layer: Azure SQL for transactions, Cosmos DB for user sessions, Blob Storage for product images — all secured with Private Endpoints and Key Vault.",dummyData:"Northwind Traders: 500 products, 12 categories, 1,000 customers, 5,000 orders, session data (cart, recently viewed). Product images in blob storage.",steps:["Ask Claude to generate full SQL schema (products, customers, orders, order_items)","Ask Claude for Cosmos DB document model for sessions","Deploy Azure SQL + insert all dummy data (use Key Vault for connection string)","Deploy Cosmos DB + insert session documents","Deploy Blob Storage for product images with lifecycle policy","Secure everything with Private Endpoints","Build a Node.js API that reads from all 3 stores using managed identity","Deploy API to App Service","Document the data architecture with a flow diagram"]},prompts:[{title:"Cosmos DB Consistency Levels",prompt:`Explain Cosmos DB's 5 consistency levels using real-world analogies:

1. Strong
2. Bounded Staleness  
3. Session
4. Consistent Prefix
5. Eventual

For each:
- Simple analogy (like a coffee shop or library)
- Technical explanation
- RU cost impact
- Latency impact
- When to use it
- When NOT to use it

Scenario exercise: For each of these apps, recommend the best consistency level and explain why:
- Banking transaction system
- Social media news feed
- Shopping cart
- IoT sensor data
- Gaming leaderboard`},{title:"Database Decision Matrix",prompt:`Create a comprehensive Azure database decision matrix:

| Database | Azure SQL | PostgreSQL | MySQL | Cosmos DB | Table Storage |
|----------|-----------|------------|-------|-----------|---------------|

Compare on:
- Data model
- Query language
- Scaling (vertical vs horizontal)
- Global distribution
- Pricing model
- Max size
- High availability options
- Best for (3 use cases each)
- Avoid when

Then create a decision tree flowchart:
'I need a database for X' → follow the questions → recommendation

Include 5 scenario-based questions to test my understanding.`},{title:"Generate Cosmos DB Documents",prompt:`Generate realistic Cosmos DB documents for an e-commerce user session system:

1. Design the document schema for:
   - User sessions (cart items, recently viewed, preferences)
   - Product catalog (for fast reads)
   - User activity events

2. Generate:
   - 20 user session documents
   - 30 product documents
   - 50 activity event documents

3. Include:
   - Partition key strategy explanation
   - TTL settings for sessions
   - Sample queries with RU estimates
   - Index policy recommendations

Make the data realistic with proper user IDs, timestamps, and product details.`},{title:"Database Migration Planning",prompt:`Help me plan a migration from on-premises SQL Server to Azure:

Current state:
- SQL Server 2019 with 500GB database
- 100 stored procedures
- 50 tables with foreign keys
- Linked servers to 2 other databases
- SSIS packages for ETL
- Reporting Services reports

Create a detailed migration plan:
1. Assessment phase (tools, compatibility check)
2. Target architecture options (SQL MI vs Azure SQL DB vs SQL on VM)
3. Migration method (online vs offline, DMS vs backup/restore)
4. Schema migration steps
5. Data migration with minimal downtime
6. Stored procedure compatibility
7. SSIS → Data Factory migration
8. SSRS alternatives
9. Testing and validation
10. Cutover plan
11. Rollback strategy

Include timeline estimates and risk mitigation.`}]},{week:8,phase:"Containers I",title:"Docker, ACR & Azure Container Instances",cert:"AZ-204",color:"#0078D4",gapBadges:["DOCKER"],objectives:["Write production-ready Dockerfiles","Build and push images to Azure Container Registry","Deploy containers to Azure Container Instances","Configure multi-container groups with sidecars","Understand container networking and volumes"],services:["Docker","ACR","ACI","Container Groups"],infused:[],topics:["Docker fundamentals: images, containers, Dockerfile","Multi-stage Docker builds for production","Azure Container Registry (ACR)","Azure Container Instances (ACI) — serverless containers","Multi-container groups in ACI","Container networking & volumes"],labs:[{name:"Lab 1: Build & Push Docker Image to ACR",duration:"35 min",difficulty:"Intermediate",steps:["Create a Node.js express server returning 'Hello Azure!'","Write Dockerfile: FROM node:18-alpine, COPY, RUN npm install, EXPOSE 3000, CMD","Build: docker build -t myapp:v1 .","Create ACR: az acr create --name acrweek8 --sku Basic","Login, tag, push to ACR","Verify: az acr repository list --name acrweek8"],verify:"Image appears in ACR repository list."},{name:"Lab 2: Deploy to Azure Container Instances",duration:"25 min",difficulty:"Intermediate",steps:["Enable ACR admin user","Deploy ACI: az container create --name aci-myapp --image acrweek8.azurecr.io/myapp:v1 --ports 3000","Browse to the public URL","View logs: az container logs --name aci-myapp","Clean up: az container delete --name aci-myapp --yes"],verify:"App accessible via ACI public IP. Logs show requests."}],resources:[{type:"doc",name:"Docker Getting Started",url:"https://docs.docker.com/get-started/"},{type:"doc",name:"ACR Docs",url:"https://learn.microsoft.com/en-us/azure/container-registry/"}],project:{name:"PROJECT 4: Containerize & Deploy a Task API",description:"Containerize a REST API with Docker, push to ACR, deploy on ACI with Redis sidecar.",dummyData:"Task management API: id, title, description, status (todo/in-progress/done), created_at. Pre-seed with 20 tasks.",steps:["Ask Claude to generate a REST API with in-memory data","Write multi-stage Dockerfile","Build and test locally","Push to ACR and deploy to ACI","Test all CRUD endpoints","Add Redis as multi-container group","Document the architecture"]},prompts:[{title:"Dockerfile Best Practices",prompt:`Teach me Docker best practices for production Azure deployments:

1. Multi-stage builds:
   - Build stage vs runtime stage
   - Reducing image size
   - Example for Node.js, Python, .NET, Go

2. Security:
   - Non-root user
   - Minimal base images (alpine, distroless)
   - Scanning for vulnerabilities
   - Secret handling (don't bake in!)

3. Optimization:
   - Layer caching strategy
   - .dockerignore
   - Health checks
   - Proper signal handling

4. Write optimized Dockerfiles for:
   - Node.js Express API
   - Python FastAPI
   - .NET 8 Web API

Explain every line and why it matters.`},{title:"ACR Tasks & Automation",prompt:`Explain Azure Container Registry advanced features:

1. ACR Tasks:
   - Quick tasks (build on push)
   - Multi-step tasks
   - Scheduled tasks
   - Triggered builds from GitHub

2. Security:
   - Content trust (image signing)
   - Vulnerability scanning
   - Private endpoints
   - Managed identity authentication

3. Geo-replication:
   - When to use Premium SKU
   - Replication setup
   - Pull from nearest region

4. Create a complete CI/CD pipeline:
   - GitHub push triggers ACR build
   - Scan for vulnerabilities
   - Push to ACR
   - Deploy to ACI/AKS

Provide az cli commands and sample acr-task.yaml.`},{title:"ACI vs AKS vs Container Apps",prompt:`Compare Azure container hosting options:

| Feature | ACI | AKS | Container Apps |
|---------|-----|-----|----------------|

Compare on:
- Use case (when to use)
- Pricing model
- Scaling (manual vs auto)
- Networking options
- Startup time
- Management overhead
- Persistent storage
- Sidecar support
- Service mesh

Decision scenarios:
1. Run a batch job for 10 minutes daily
2. Microservices app with 20 services
3. Simple API with auto-scaling
4. Dev/test environment spin-up
5. Event-driven container processing

Recommend the best option for each.`},{title:"Multi-Container ACI Patterns",prompt:`Teach me multi-container patterns in Azure Container Instances:

1. Sidecar pattern:
   - Logging sidecar (Fluentd)
   - Monitoring sidecar (Prometheus exporter)
   - Proxy sidecar (Envoy)

2. Ambassador pattern:
   - API gateway container

3. Adapter pattern:
   - Legacy app with modern API wrapper

For each pattern:
- Architecture diagram
- YAML deployment file
- Networking between containers
- Shared volume configuration
- Real-world use case

Create a complete example: Node.js API + Redis cache + Nginx reverse proxy in one container group.`}]},{week:9,phase:"Containers II",title:"AKS, Kubernetes & API Management",cert:"AZ-204 / AZ-400",color:"#326CE5",gapBadges:["KUBERNETES"],objectives:["Create and manage AKS clusters","Deploy applications with kubectl and YAML manifests","Configure services, ingress, and HPA","Set up Azure API Management as gateway","Implement APIM policies (rate limiting, caching)"],services:["AKS","Kubernetes","kubectl","Helm","APIM","Ingress"],infused:["API Management basics (gateway, policies)","Exposing AKS services via APIM"],topics:["Kubernetes architecture: nodes, pods, services, deployments","AKS cluster creation & configuration","kubectl commands & YAML manifests","Services: ClusterIP, NodePort, LoadBalancer","ConfigMaps, Secrets, Persistent Volumes","Ingress controllers","Azure API Management — gateway in front of your APIs","APIM policies: rate limiting, caching, JWT validation"],labs:[{name:"Lab 1: Create & Access AKS Cluster",duration:"30 min",difficulty:"Intermediate",steps:["az aks create --name aks-week9 --node-count 2 --node-vm-size Standard_B2s --generate-ssh-keys","az aks get-credentials --name aks-week9","kubectl get nodes → verify 2 ready nodes","kubectl create deployment nginx --image=nginx --replicas=3","kubectl expose deployment nginx --type=LoadBalancer --port=80","Browse to external IP","kubectl scale deployment nginx --replicas=5"],verify:"3 nginx pods running. LoadBalancer has external IP serving traffic."},{name:"Lab 2: Deploy Multi-Container App with YAML",duration:"35 min",difficulty:"Intermediate",steps:["Ask Claude for K8s YAML: frontend (nginx), backend (Node API), redis","kubectl apply -f app-manifest.yaml","Verify: kubectl get pods, kubectl get svc","View logs: kubectl logs <pod-name>","Exec into pod: kubectl exec -it <pod> -- /bin/sh","Delete: kubectl delete -f app-manifest.yaml"],verify:"All pods running. Services communicate correctly."},{name:"Lab 3: API Management for Your AKS APIs",duration:"40 min",difficulty:"Intermediate",steps:["Deploy a simple API to AKS (the task API from Week 8)","Create APIM instance: apim-week9 (Developer tier)","Import the AKS API endpoint into APIM","Add policies: rate limiting (10 calls/min), response caching (60s)","Create a product and subscription key","Test via APIM developer portal with subscription key","Compare: direct API access vs APIM-mediated access"],verify:"API accessible via APIM. Rate limiting works."}],resources:[{type:"doc",name:"AKS Documentation",url:"https://learn.microsoft.com/en-us/azure/aks/"},{type:"doc",name:"Kubernetes Basics",url:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},{type:"doc",name:"API Management Docs",url:"https://learn.microsoft.com/en-us/azure/api-management/"}],project:{name:"PROJECT 5: Voting App on AKS with API Management",description:"Deploy a voting app to AKS with autoscaling, expose it through API Management with policies.",dummyData:"Cats vs Dogs voting app. Flask frontend, Redis backend. Pre-seeded: 150 cat, 120 dog votes.",steps:["Build container images and push to ACR","Create 3-node AKS cluster","Write K8s YAML with Deployments and Services","Deploy and verify: kubectl get all","Set up HPA for frontend","Load test and watch pods scale","Expose the voting API through APIM with rate limiting","Add JWT validation policy for authenticated voting"]},prompts:[{title:"Kubernetes YAML Generator",prompt:`Generate production-ready Kubernetes YAML for a voting app:

Components:
- Frontend: nginx serving React app
- Backend API: Node.js Express
- Redis: for vote storage

Requirements:
1. Deployments with:
   - Resource limits and requests
   - Liveness and readiness probes
   - Pod disruption budgets
   - Anti-affinity rules

2. Services:
   - Frontend: LoadBalancer
   - Backend: ClusterIP
   - Redis: ClusterIP

3. ConfigMaps for environment variables
4. Secrets for Redis password
5. HorizontalPodAutoscaler for frontend
6. NetworkPolicy to restrict traffic

Explain every field in the YAML.`},{title:"AKS Networking Deep Dive",prompt:`Explain AKS networking comprehensively:

1. Network plugins:
   - kubenet vs Azure CNI
   - When to use each
   - IP address planning

2. Service types:
   - ClusterIP, NodePort, LoadBalancer
   - Internal vs external load balancers

3. Ingress:
   - NGINX Ingress Controller
   - Application Gateway Ingress Controller (AGIC)
   - Path-based routing
   - TLS termination

4. Network Policies:
   - Calico vs Azure NPM
   - Example policies for 3-tier app

5. DNS:
   - CoreDNS configuration
   - External DNS integration

Design the network architecture for a microservices app with 5 services, some internal-only, some external.`},{title:"APIM Policy Deep Dive",prompt:`Teach me Azure API Management policies in depth:

1. Inbound policies:
   - Rate limiting (by key, by IP)
   - JWT validation
   - Header transformation
   - Request body validation
   - IP filtering

2. Backend policies:
   - Load balancing
   - Circuit breaker
   - Retry logic

3. Outbound policies:
   - Response caching
   - Header manipulation
   - Response transformation

4. Error handling:
   - Custom error responses
   - Logging to Event Hub

For each, provide:
- XML policy snippet
- Explanation
- Real-world use case

Create a complete policy set for a production API with auth, rate limiting, caching, and logging.`},{title:"AKS vs App Service vs Container Apps",prompt:`I'm confused about when to use AKS vs Azure App Service vs Azure Container Apps. Create a detailed comparison:

1. Management overhead (1-10 scale)
2. Scaling capabilities
3. Networking flexibility
4. CI/CD integration
5. Cost at different scales (10, 100, 1000 containers)
6. Team skills required
7. Migration effort from Docker Compose

Scenarios:
- Startup MVP (3 services, 2 developers)
- Enterprise microservices (50 services, 20 developers)
- Batch processing system
- Event-driven serverless
- Legacy app modernization

For each scenario, recommend the best option with detailed justification.`}]},{week:10,phase:"DevOps I",title:"Azure DevOps & CI/CD Pipelines",cert:"AZ-400",color:"#F25022",gapBadges:["GIT","YAML"],objectives:["Set up Azure DevOps organization and projects","Create YAML-based CI/CD pipelines","Configure build triggers and deployment stages","Implement approval gates and environments","Use service connections securely"],services:["Azure DevOps","Pipelines","Repos","Boards","Artifacts","Service Connections"],infused:[],topics:["Azure DevOps organization, projects, repos","Azure Boards — work items, sprints, tracking","Azure Repos — Git workflow","Azure Pipelines — YAML-based CI/CD","Build triggers, stages, jobs, steps","Release pipelines & deployment gates"],labs:[{name:"Lab 1: Set Up Azure DevOps & First Pipeline",duration:"30 min",difficulty:"Beginner",steps:["Create account at dev.azure.com and project: 'AzureLearning'","Initialize Git repo with sample Node.js app","Create azure-pipelines.yml: trigger on main, steps: npm install, test, build","Commit → watch pipeline run automatically","Check logs for each step"],verify:"Pipeline runs on commit. All steps pass."},{name:"Lab 2: CI/CD to Azure App Service",duration:"40 min",difficulty:"Intermediate",steps:["Create App Service: app-devops-demo","Create service connection to your Azure subscription","Add deployment stage with AzureWebApp@1 task","Commit code change → watch auto-build and deploy","Add staging environment with manual approval gate","Test: commit → build → deploy staging → approve → deploy prod"],verify:"Deployment to staging requires approval. Prod deploys after approval."}],resources:[{type:"doc",name:"Azure DevOps Docs",url:"https://learn.microsoft.com/en-us/azure/devops/"},{type:"doc",name:"YAML Pipeline Reference",url:"https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema"}],project:{name:"PROJECT 6: Full CI/CD Pipeline",description:"Full CI/CD pipeline: build, test, scan, deploy a web app to App Service with quality gates.",dummyData:"Movie catalog: 50 movies (title, genre, rating, thumbnail_url, description). React frontend, Express API.",steps:["Scaffold project with Claude (React + Express)","Set up Azure DevOps with Boards, Repos, Pipelines","YAML pipeline: Build → Test → Deploy staging → Approve → Prod","Add branch policies: PR reviews, build validation"]},prompts:[{title:"Azure Pipelines YAML Mastery",prompt:`Teach me Azure Pipelines YAML from basic to advanced:

1. Structure:
   - trigger, pool, stages, jobs, steps
   - Variables and variable groups
   - Parameters for reusable pipelines
   - Templates (step, job, stage templates)

2. Common tasks:
   - Build (npm, dotnet, maven)
   - Test with code coverage
   - Docker build and push
   - Deploy to App Service, AKS, Functions

3. Advanced patterns:
   - Matrix builds (multiple Node versions)
   - Conditional execution
   - Dependencies between stages
   - Manual approvals and gates
   - Environments and deployment strategies (blue-green, canary)

Generate a complete pipeline for a Node.js app deploying to AKS with staging and production environments.`},{title:"Service Connection Security",prompt:`Explain Azure DevOps service connections and security best practices:

1. Connection types:
   - Azure Resource Manager (what scopes?)
   - Docker Registry
   - Kubernetes
   - SSH
   - Generic (for APIs)

2. Authentication options:
   - Service Principal (automatic vs manual)
   - Managed Identity
   - Workload Identity Federation (passwordless!)

3. Security best practices:
   - Principle of least privilege
   - Scoping to resource groups
   - Connection sharing across projects
   - Audit and rotation

4. Troubleshooting:
   - Common errors and fixes
   - Testing connections

Set up a secure service connection for deploying to AKS using Workload Identity Federation.`},{title:"Branching Strategy Design",prompt:`Design a Git branching strategy for a 10-developer team:

Context:
- 2-week sprints
- Production releases every sprint
- Hotfix capability needed
- Feature flags available

Compare:
1. GitFlow
2. GitHub Flow
3. Trunk-based development

For each:
- Branch diagram
- When to use
- Pros and cons

Then recommend the best strategy for this team with:
- Branch naming conventions
- Branch policies (reviewers, builds)
- PR template
- Merge strategy (squash vs merge vs rebase)
- Azure DevOps branch policy configuration`},{title:"Pipeline Templates & Reuse",prompt:`Teach me Azure Pipelines templates for enterprise-scale:

1. Template types:
   - Step templates
   - Job templates
   - Stage templates
   - Variable templates

2. Template repository pattern:
   - Central templates repo
   - Versioning templates
   - Consuming from other projects

3. Create a template library:
   - build-node.yml (any Node.js app)
   - build-dotnet.yml (any .NET app)
   - deploy-appservice.yml (any App Service)
   - deploy-aks.yml (any AKS deployment)
   - security-scan.yml (SAST/DAST)

4. Show how to use them:
   - Simple project using templates
   - Overriding parameters
   - Extending templates

Provide complete YAML for all templates.`}]},{week:11,phase:"DevOps II",title:"IaC: Bicep, Terraform & GitHub Actions",cert:"AZ-400",color:"#FF7139",gapBadges:["TERRAFORM","BICEP"],objectives:["Write Bicep templates for Azure resources","Use Terraform for infrastructure provisioning","Create GitHub Actions workflows for CI/CD","Manage Terraform state in Azure Storage","Compare IaC tools and choose the right one"],services:["ARM Templates","Bicep","Terraform","GitHub Actions","GitOps"],infused:[],topics:["ARM Templates — structure, parameters, variables","Bicep — Azure's native IaC DSL (deep dive)","Terraform basics for Azure","GitHub Actions for CI/CD","Azure Pipelines vs GitHub Actions comparison","GitOps concepts & Flux in AKS"],labs:[{name:"Lab 1: Deploy with Bicep",duration:"35 min",difficulty:"Intermediate",steps:["az bicep install","Create main.bicep: VNet + Subnet + NSG + VM","Preview: az deployment group what-if --template-file main.bicep","Deploy: az deployment group create --template-file main.bicep","Modify to add second VM → re-deploy (incremental)","Decompile ARM to Bicep: az bicep decompile"],verify:"Resources deployed. What-if shows accurate preview."},{name:"Lab 2: Terraform for Azure",duration:"40 min",difficulty:"Intermediate",steps:["Install Terraform CLI","Create main.tf: provider, resource group, VNet, subnet, VM","terraform init → plan → apply","Inspect: terraform state list","Modify VM size → plan (see diff) → apply","terraform destroy"],verify:"Terraform creates and destroys resources cleanly."},{name:"Lab 3: GitHub Actions CI/CD",duration:"35 min",difficulty:"Intermediate",steps:["Create GitHub repo with web app","Create .github/workflows/deploy.yml","Define trigger on push, jobs: build, test, deploy to Azure","Set GitHub secrets: AZURE_CREDENTIALS","Push → watch Action run","Add Terraform step for infrastructure provisioning"],verify:"Push triggers workflow. App deploys to Azure."}],resources:[{type:"doc",name:"Bicep Documentation",url:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/"},{type:"doc",name:"Terraform Azure Provider",url:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs"}],project:{name:"PROJECT 7: Automate Infrastructure with Terraform + Pipelines",description:"Terraform-defined infrastructure deployed via Azure Pipelines on every commit.",dummyData:"Northwind Traders: dev + prod envs with VNet, AKS, SQL, Key Vault, App Gateway.",steps:["Design infrastructure with Claude","Write Terraform modules: networking, compute, database, security","Create tfvars for dev and prod","Pipeline: init → plan → approve → apply","Store state in Azure Blob Storage","Test: PR changes a resource → auto-apply on merge"]},prompts:[{title:"Bicep Module Library",prompt:`Create a production-ready Bicep module library:

1. Module: networking.bicep
   - VNet with configurable subnets
   - NSGs with common rules
   - Bastion host (optional)

2. Module: compute.bicep
   - VM with managed identity
   - VMSS with autoscaling

3. Module: database.bicep
   - Azure SQL with private endpoint
   - Key Vault for connection strings

4. Module: monitoring.bicep
   - Log Analytics workspace
   - Application Insights
   - Alert rules

For each module:
- Parameters with descriptions and defaults
- Outputs for chaining
- Validation and conditions
- Usage example

Then show a main.bicep that uses all modules to deploy a complete environment.`},{title:"Terraform vs Bicep Decision",prompt:`Compare Terraform vs Bicep for Azure infrastructure:

| Aspect | Terraform | Bicep |
|--------|-----------|-------|

Compare on:
- Learning curve
- Multi-cloud support
- State management
- Module ecosystem
- IDE support
- Azure feature coverage (day-0 support)
- Community and documentation
- Enterprise features
- Cost

Decision framework:
1. Azure-only shop, 5 engineers
2. Multi-cloud (Azure + AWS)
3. Existing Terraform codebase
4. New Azure project, quick start needed
5. Strict compliance requirements

Recommend the best IaC tool for each with justification.`},{title:"GitHub Actions for Azure",prompt:`Create a complete GitHub Actions workflow for Azure deployment:

Project: Node.js API deploying to Azure App Service

Workflow requirements:
1. Trigger on push to main and PR
2. Jobs:
   - lint (ESLint)
   - test (Jest with coverage)
   - security-scan (npm audit, Snyk)
   - build (Docker image)
   - deploy-staging (on PR merge)
   - deploy-production (manual approval)

3. Features:
   - Caching node_modules
   - Artifact upload/download
   - Environment secrets
   - Reusable workflows
   - Status checks for PRs
   - Slack notification on failure

Provide complete YAML with explanations for every section.`},{title:"Terraform State Management",prompt:`Teach me Terraform state management for teams:

1. State basics:
   - What's in the state file
   - Why it's critical
   - Local vs remote state

2. Azure backend:
   - Storage account setup
   - Container and blob configuration
   - Access control (SAS vs Managed Identity)
   - State locking

3. State operations:
   - terraform state list/show/mv/rm
   - Importing existing resources
   - State migration

4. Team workflows:
   - Workspaces for environments
   - State file per environment vs workspace
   - CI/CD pipeline with state
   - Handling state conflicts

5. Disaster recovery:
   - State backup
   - Recovering from corrupted state
   - State versioning

Provide az cli commands and Terraform configuration for a secure team setup.`}]},{week:12,phase:"Monitoring & Cost",title:"Monitoring, Observability & Cost Management Deep Dive",cert:"AZ-104 / AZ-305",color:"#FFB900",gapBadges:["KQL"],objectives:["Configure Azure Monitor and Log Analytics","Write KQL queries for logs and metrics","Set up Application Insights for web apps","Create alerts and action groups","Analyze costs and implement FinOps practices"],services:["Azure Monitor","Log Analytics","Application Insights","Alerts","Cost Management","Advisor"],infused:["Cost Management deep dive","Azure Advisor recommendations","FinOps principles"],topics:["Azure Monitor overview & metrics","Log Analytics workspaces & KQL queries","Application Insights for web apps","Azure Alerts & Action Groups","Network Watcher — troubleshoot, packet capture","Cost Management deep dive — analysis, budgets, exports","Azure Advisor — cost, performance, security recommendations","FinOps principles — right-sizing, reserved instances, spot VMs"],labs:[{name:"Lab 1: Log Analytics & VM Monitoring",duration:"35 min",difficulty:"Intermediate",steps:["Create Log Analytics Workspace: law-week12","Deploy VM → enable Azure Monitor Agent","Configure data collection: Syslog + Performance counters","Wait 15 min → run KQL for CPU utilization and error logs","Create alert: CPU > 80% for 5 minutes"],verify:"KQL returns VM metrics. Alert fires when CPU is high."},{name:"Lab 2: Application Insights",duration:"30 min",difficulty:"Intermediate",steps:["Create App Insights → connect to a web app","Generate traffic including /error endpoints","Explore Live Metrics, Performance, Failures panels","Custom KQL: requests | where duration > 2000","Set up availability test from 5 regions"],verify:"App Insights shows requests, errors, and performance data."},{name:"Lab 3: Network Watcher",duration:"25 min",difficulty:"Intermediate",steps:["Enable Network Watcher","Connection Troubleshoot: test VM-to-VM connectivity","IP Flow Verify: check NSG allows port 443","Capture 60 seconds of packets","Review NSG flow logs and visualize topology"],verify:"Network issues diagnosed. Packet capture successful."},{name:"Lab 4: Cost Management & FinOps",duration:"40 min",difficulty:"Intermediate",steps:["Navigate to Cost Management → Cost Analysis","View costs by: resource group, service, location, tag (CostCenter)","Identify your top 3 cost drivers over the past weeks","Create a budget: $100/month with alerts at 50%, 80%, 100%","Go to Azure Advisor → Cost tab → review all recommendations","Identify underutilized VMs and right-sizing opportunities","Export cost data to CSV → analyze trends"],verify:"Budget active. Advisor recommendations reviewed."}],resources:[{type:"doc",name:"Azure Monitor Docs",url:"https://learn.microsoft.com/en-us/azure/azure-monitor/"},{type:"doc",name:"KQL Reference",url:"https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/"},{type:"doc",name:"Cost Management Docs",url:"https://learn.microsoft.com/en-us/azure/cost-management-billing/"}],project:null,prompts:[{title:"KQL Query Library",prompt:`Create a KQL query library for production monitoring:

1. Infrastructure queries:
   - Top 10 VMs by CPU usage (last 24h)
   - Memory utilization trend by VM
   - Disk space warnings (<20% free)
   - Network traffic anomalies

2. Application queries:
   - Slowest requests (P95 latency)
   - Error rate by endpoint
   - Dependency failures (database, APIs)
   - User session analysis

3. Security queries:
   - Failed login attempts
   - Unusual access patterns
   - Resource modifications by user

4. Cost queries:
   - Daily spend trend
   - Spend by resource group
   - Unused resources

For each query:
- Complete KQL syntax
- Explanation of operators
- How to create an alert from it
- Dashboard visualization suggestion`},{title:"Alerting Strategy Design",prompt:`Design a complete alerting strategy for a 3-tier production app:

Components:
- 2 Web App Services
- 1 Azure SQL Database
- 1 Redis Cache
- 1 Storage Account

Create alerts for:
1. Availability (is it up?)
2. Performance (is it fast?)
3. Errors (is it working?)
4. Saturation (is it full?)

For each alert:
- Metric or log query
- Threshold and evaluation period
- Severity level
- Action group (email, SMS, webhook)
- Runbook or auto-remediation

Also design:
- Alert noise reduction strategy
- On-call rotation integration
- Incident management workflow
- Post-incident review process`},{title:"FinOps Cost Optimization",prompt:`Create a FinOps cheat sheet for Azure cost optimization:

1. Quick wins (implement today):
   - Right-size VMs (identify and fix)
   - Delete unused resources
   - Use auto-shutdown for dev/test
   - Storage tier optimization

2. Medium-term (this month):
   - Reserved Instances analysis
   - Spot VMs for batch workloads
   - Hybrid Benefit activation
   - Dev/Test subscription pricing

3. Long-term (this quarter):
   - Architecture optimization
   - Serverless migration candidates
   - Multi-region cost review
   - Tagging and showback

4. Governance:
   - Budget alerts by team
   - Policy to prevent expensive SKUs
   - Regular cost review cadence

For each, provide:
- Potential savings %
- Implementation steps
- az cli commands where applicable`},{title:"Monitoring Dashboard Design",prompt:`Design Azure Monitor dashboards for different audiences:

1. Executive Dashboard:
   - Overall health (green/yellow/red)
   - Cost vs budget
   - SLA compliance %
   - Key business metrics

2. Operations Dashboard:
   - Infrastructure health (VMs, DBs, networks)
   - Active alerts by severity
   - Recent deployments
   - Performance trends

3. Developer Dashboard:
   - Application performance
   - Error rates and details
   - Dependency health
   - Deployment success rate

4. Security Dashboard:
   - Failed authentications
   - Threat detections
   - Compliance score
   - Recent security events

For each dashboard:
- Specific tiles/widgets
- Data sources
- Refresh frequency
- KQL queries for custom visuals

Provide ARM/Bicep to deploy the dashboards.`}]},{week:13,phase:"Security",title:"Zero Trust, Firewall, Private Endpoints & Defender",cert:"AZ-500",color:"#D83B01",gapBadges:["SECURITY"],objectives:["Implement Zero Trust architecture in Azure","Deploy and configure Azure Firewall","Secure PaaS services with Private Endpoints","Create Conditional Access policies","Achieve 80%+ Defender for Cloud Secure Score"],services:["Azure Firewall","Private Endpoints","DDoS Protection","Conditional Access","Defender for Cloud"],infused:[],topics:["Zero Trust Architecture — 6 pillars in Azure","Network security: Azure Firewall, DDoS Protection","Service Endpoints vs Private Endpoints (deep dive)","Conditional Access policies (advanced)","Multi-Factor Authentication (MFA)","Microsoft Defender for Cloud — secure score","Secure DevOps — shifting security left"],labs:[{name:"Lab 1: Azure Firewall with DDoS Protection",duration:"40 min",difficulty:"Advanced",steps:["Create hub VNet with AzureFirewallSubnet","Deploy Azure Firewall → route table forcing spoke traffic through FW","Add app rule: allow *.microsoft.com","Add network rule: allow DNS (UDP 53)","Test: curl microsoft.com (allowed), google.com (denied)","Enable DDoS Protection plan"],verify:"Traffic filtered by firewall rules. DDoS protection active."},{name:"Lab 2: Private Endpoints for PaaS",duration:"35 min",difficulty:"Intermediate",steps:["Create storage account with public access disabled","Create Private Endpoint + Private DNS Zone","From VM: nslookup → verify private IP resolution","Upload from VM (success) vs local machine (denied)","Compare behavior: Private Endpoint vs Service Endpoint"],verify:"Storage only accessible via private endpoint."},{name:"Lab 3: Zero Trust Web App",duration:"45 min",difficulty:"Advanced",steps:["Deploy App Service with Private Endpoint (no public access)","Enable Entra ID authentication","Create Conditional Access: require MFA + compliant device","Database behind Private Endpoint","Key Vault with managed identity only","Verify: every layer requires identity + private networking","Document Zero Trust implementation per pillar"],verify:"Complete Zero Trust implementation verified."},{name:"Lab 4: Defender for Cloud",duration:"30 min",difficulty:"Intermediate",steps:["Enable Defender for Cloud on your subscription","Review current Secure Score and recommendations","Implement top 5 recommendations","Enable Defender for Servers on your VMs","Review vulnerability assessment results"],verify:"Secure Score improved. Recommendations addressed."}],resources:[{type:"doc",name:"Azure Security Docs",url:"https://learn.microsoft.com/en-us/azure/security/"},{type:"doc",name:"Zero Trust Model",url:"https://learn.microsoft.com/en-us/security/zero-trust/"},{type:"doc",name:"Defender for Cloud",url:"https://learn.microsoft.com/en-us/azure/defender-for-cloud/"}],project:{name:"PROJECT 8: Secure Corporate Environment (Zero Trust)",description:"Implement enterprise-grade Zero Trust: Conditional Access, Private Endpoints for all PaaS, Azure Firewall, and Defender for Cloud.",dummyData:"Woodgrove Bank — 200 employees, 3 offices. SOC 2 compliant. US regions only. No public PaaS endpoints. MFA for all admins.",steps:["Design Zero Trust architecture with Claude","Conditional Access: MFA for admin roles","Azure Firewall in hub VNet with spoke routing","Convert all PaaS to Private Endpoints","Enable Defender for Cloud → achieve 80%+ Secure Score","Create Azure Policies for security enforcement","Run vulnerability assessment and remediate","Document security architecture"]},prompts:[{title:"Zero Trust Architecture",prompt:`Explain Azure Zero Trust architecture mapped to the 6 pillars:

1. Identity:
   - Entra ID configuration
   - Conditional Access
   - PIM

2. Devices:
   - Intune/Endpoint Manager
   - Compliance policies

3. Applications:
   - App registration
   - OAuth/OIDC

4. Data:
   - Classification
   - Encryption
   - DLP

5. Infrastructure:
   - Network segmentation
   - Private endpoints

6. Network:
   - Azure Firewall
   - NSGs
   - Microsegmentation

For each pillar:
- Azure services involved
- Configuration recommendations
- Common misconfigurations
- How to validate

Design a Zero Trust implementation for a healthcare company processing PHI.`},{title:"Conditional Access Matrix",prompt:`Create a Conditional Access policy matrix for enterprise security:

| Policy Name | Users | Apps | Conditions | Grant Controls |
|-------------|-------|------|------------|----------------|

Create policies for:
1. Require MFA for admins (always)
2. Require MFA for all users (risky sign-in)
3. Block legacy authentication
4. Require compliant device for sensitive apps
5. Block access from high-risk countries
6. Require app protection for mobile
7. Session controls for guest access
8. Require MFA for Azure management

For each policy:
- Complete configuration
- Named locations needed
- Exclusions and why
- Testing approach
- Monitoring

Provide PowerShell/Graph API to deploy all policies.`},{title:"Private Endpoint Architecture",prompt:`Design a complete Private Endpoint architecture:

Services to secure:
- Azure SQL Database
- Storage Account (blob + files)
- Key Vault
- Azure Container Registry
- Azure Cosmos DB
- App Service

For the architecture:
1. Private DNS zone strategy:
   - Zone names for each service
   - VNet links
   - On-premises DNS forwarding

2. Network design:
   - Dedicated subnet for private endpoints
   - NSG rules (are they needed?)
   - UDR considerations

3. Diagrams:
   - DNS resolution flow
   - Network traffic flow
   - Hybrid connectivity scenario

4. Implementation:
   - az cli commands for each service
   - Terraform module

5. Troubleshooting:
   - Common issues
   - Diagnostic commands`},{title:"Security Policy Generator",prompt:`Generate Azure Policies for security enforcement:

1. Network security:
   - Deny public IP on VMs
   - Require NSG on subnets
   - Deny storage public access

2. Encryption:
   - Require storage encryption
   - Require SQL TDE
   - Require Key Vault soft-delete

3. Identity:
   - Require managed identity on VMs
   - Audit resources without tags

4. Monitoring:
   - Require diagnostic settings
   - Require Azure Defender

5. Compliance:
   - Allowed locations
   - Allowed VM SKUs
   - Require HTTPS on storage

For each policy:
- Complete JSON definition
- Initiative grouping
- Remediation task
- Exemption scenarios

Bundle into a 'Security Baseline' initiative.`}]},{week:14,phase:"Governance & SIEM",title:"Sentinel SIEM, Advanced Policy & Governance at Scale",cert:"AZ-500 / AZ-305",color:"#008575",gapBadges:["SIEM"],objectives:["Deploy Microsoft Sentinel and connect data sources","Create analytics rules and incident playbooks","Write custom Azure Policy definitions","Design Azure Blueprints for repeatable environments","Manage hybrid resources with Azure Arc"],services:["Microsoft Sentinel","Azure Policy","Blueprints","Management Groups","Azure Arc"],infused:["Microsoft Sentinel deep dive","Advanced custom policies","Azure Blueprints"],topics:["Microsoft Sentinel — SIEM & SOAR setup","Sentinel analytics rules, incidents & playbooks","Azure Policy advanced — custom definitions & initiatives","Azure Blueprints for repeatable environments","Management Groups at scale","Azure Arc — hybrid & multi-cloud management","Compliance frameworks in Azure"],labs:[{name:"Lab 1: Microsoft Sentinel SIEM",duration:"45 min",difficulty:"Advanced",steps:["Enable Sentinel on Log Analytics Workspace","Connect data sources: Activity Logs, Entra ID sign-ins","Enable analytics rule: 'Brute force against Portal'","Create custom rule: 5+ failed logins in 10 min","Simulate failed logins → watch incident appear","Create Playbook (Logic App) for alert notification","Explore Sentinel workbooks for visualization"],verify:"Incidents generated from analytics rules. Playbook triggers."},{name:"Lab 2: Advanced Azure Policy",duration:"35 min",difficulty:"Advanced",steps:["Create custom policy: 'Deny public IP on VMs'","Write policy rule JSON (ask Claude to generate)","Create custom policy: 'Require specific tag values'","Bundle policies into a Policy Initiative (set)","Assign initiative at Management Group level","Review compliance dashboard → remediate non-compliant resources"],verify:"Custom policies working. Initiative assigned at scale."},{name:"Lab 3: Azure Blueprints",duration:"30 min",difficulty:"Intermediate",steps:["Create Blueprint: bp-secure-landing-zone","Add artifacts: Resource Group, VNet, NSG, Key Vault, Storage","Add policy assignment: 'Require encryption at rest'","Add RBAC: Contributor to specific group","Publish v1.0 → assign to subscription","Verify all resources created with correct policies and RBAC"],verify:"Blueprint deploys complete environment with policies."},{name:"Lab 4: Azure Arc",duration:"25 min",difficulty:"Intermediate",steps:["Install Arc agent on a local VM or WSL instance","Register as Arc-enabled server","View in Portal → verify properties","Apply Azure Policy to the Arc server","Apply tags and explore management capabilities"],verify:"Arc server visible in Azure Portal with policies applied."}],resources:[{type:"doc",name:"Sentinel Docs",url:"https://learn.microsoft.com/en-us/azure/sentinel/"},{type:"doc",name:"Azure Policy Docs",url:"https://learn.microsoft.com/en-us/azure/governance/policy/"},{type:"doc",name:"Azure Arc Docs",url:"https://learn.microsoft.com/en-us/azure/azure-arc/"}],project:{name:"PROJECT 9: Enterprise Governance & SIEM Framework",description:"Design and implement a complete governance framework with Sentinel SIEM, custom policies, Blueprints, and Arc for a multi-team enterprise.",dummyData:"Fabrikam Inc — 500 people, 4 business units (Eng, Marketing, Sales, Finance). Each has dev/staging/prod. Currently no policies, no SIEM, no tagging enforcement.",steps:["Design Management Group hierarchy with Claude","Create custom policies: deny public IPs, require encryption, allowed VM sizes, require tags","Bundle into Policy Initiative","Create Blueprints for each environment type (dev, staging, prod)","Deploy Sentinel: connect data sources, enable analytics rules","Create 3 Sentinel playbooks for automated incident response","Set up Azure Arc for 2 on-prem servers","Document the complete governance + security framework"]},prompts:[{title:"Sentinel Deployment Guide",prompt:`Design a Microsoft Sentinel deployment for a 500-person company:

1. Data connectors to enable:
   - Azure Activity Logs
   - Entra ID (sign-ins, audit)
   - Microsoft 365
   - Azure Defender alerts
   - Syslog from Linux servers
   - Windows Security Events

2. Analytics rules (20 essential rules):
   - Identity threats (brute force, impossible travel)
   - Data exfiltration
   - Malware indicators
   - Privilege escalation
   - Suspicious Azure operations

3. Playbooks (5 automated responses):
   - Block user on multiple failed logins
   - Notify SOC on high-severity alert
   - Isolate compromised VM
   - Revoke session tokens
   - Create ServiceNow ticket

4. Workbooks for dashboards

5. Cost estimation

Provide KQL for custom rules and Logic App definitions for playbooks.`},{title:"Management Group Hierarchy",prompt:`Design a Management Group hierarchy for a large enterprise:

Company: GlobalTech Industries
- 3 subsidiaries (different countries)
- 4 environments per subsidiary (sandbox, dev, staging, prod)
- Shared services (identity, networking, security)
- Compliance requirements: GDPR (EU), SOX (US)

Create:
1. Complete hierarchy diagram
2. Policy assignments at each level:
   - Root: tagging, allowed regions
   - Subsidiary: country-specific compliance
   - Environment: cost controls, security
3. RBAC assignments strategy
4. Subscription naming convention
5. Budget alerts structure

Provide az cli commands to create the entire hierarchy and assign policies.`},{title:"Custom Policy Generator",prompt:`Generate advanced Azure Policy definitions:

1. Deny VM sizes larger than Standard_D4s_v3:
   - Full policy JSON
   - Parameter for allowed sizes
   - Exclusion for specific resource groups

2. Require specific tag values (Environment must be dev/staging/prod):
   - Validate against allowed values
   - Case-insensitive matching

3. Deploy diagnostic settings automatically:
   - DeployIfNotExists effect
   - Log Analytics workspace parameter
   - Apply to all supported resources

4. Deny storage accounts without private endpoints:
   - Check for existing private endpoints
   - Allow exemptions via tag

5. Audit VMs without backup configured:
   - Check Recovery Services vault
   - Report non-compliant

For each: complete JSON, test scenarios, and exemption strategy.`},{title:"Azure Arc Use Cases",prompt:`Explain Azure Arc and its use cases in depth:

1. Arc-enabled servers:
   - What it does
   - Installation methods
   - Supported OS
   - Features enabled (Policy, Update Mgmt, Defender)
   - Security considerations

2. Arc-enabled Kubernetes:
   - Connecting on-prem/other cloud K8s
   - GitOps with Flux
   - Azure Policy for Kubernetes

3. Arc-enabled data services:
   - SQL Managed Instance anywhere
   - PostgreSQL Hyperscale

4. Real scenarios:
   - Hybrid cloud management
   - Edge computing
   - Multi-cloud governance
   - Regulatory compliance

For a company with:
- 50 on-prem Windows/Linux servers
- 2 Kubernetes clusters (VMware)
- 20 servers in AWS

Design the Arc implementation with all commands.`}]},{week:15,phase:"Architecture",title:"Solutions Architecture, DR & Migration (AZ-305)",cert:"AZ-305",color:"#0078D4",gapBadges:["ARCHITECTURE"],objectives:["Apply the Well-Architected Framework 5 pillars","Design high availability and disaster recovery","Set up Azure Site Recovery for DR","Plan migrations using Azure Migrate","Create architecture diagrams and cost estimates"],services:["Well-Architected Framework","Site Recovery","Azure Migrate","Traffic Manager","Front Door"],infused:[],topics:["Well-Architected Framework (5 pillars)","Design for high availability & disaster recovery","Design for cost optimization","Design identity, governance & monitoring solutions","Design data storage solutions","Design infrastructure solutions","Migration strategies (rehost, refactor, rearchitect)","Azure Migrate & Site Recovery"],labs:[{name:"Lab 1: Design a Complete Architecture",duration:"60 min",difficulty:"Advanced",steps:["Scenario: E-commerce for 100K daily users, global presence","Design with Claude: compute, networking, data, security, DR","Create architecture diagram using draw.io or Mermaid","Calculate costs with Azure Pricing Calculator","Document SLA targets, RPO/RTO, scaling strategy, security controls","Present the design as a CTO pitch"],verify:"Complete architecture document with diagrams and cost estimates."},{name:"Lab 2: Disaster Recovery with Site Recovery",duration:"45 min",difficulty:"Advanced",steps:["Deploy VM in East US with a web application","Set up Azure Site Recovery to replicate to West US","Configure recovery plan with pre/post scripts","Run test failover → verify app works in West US","Clean up test failover resources","Document RPO and RTO achieved"],verify:"Test failover successful. App runs in DR region."}],resources:[{type:"doc",name:"Well-Architected Framework",url:"https://learn.microsoft.com/en-us/azure/well-architected/"},{type:"doc",name:"AZ-305 Learning Path",url:"https://learn.microsoft.com/en-us/training/paths/design-identity-governance-monitor-solutions/"}],project:{name:"PROJECT 10: On-Premises to Azure Migration",description:"Plan and execute a simulated migration using Azure Migrate and Site Recovery.",dummyData:"Legacy Corp: 3 Windows Servers (AD, File, SQL), 2 Linux web servers, 10.10.0.0/16 network. Budget: $5K/month.",steps:["Create migration assessment with Claude","Map each server to Azure equivalents","Design target architecture (hub-spoke)","Set up Azure Migrate project","Simulate: deploy VMs → replicate via ASR","Execute cutover: DNS, verify applications","Optimize: right-size VMs, enable autoscaling","Create migration report with cost comparison"]},prompts:[{title:"Global SaaS Architecture",prompt:`Design a globally distributed SaaS architecture for 1M users across 5 regions:

Requirements:
- 99.99% availability SLA
- <100ms latency for all users
- Multi-tenant with data isolation
- GDPR compliance for EU users
- Cost-optimized

Design:
1. Compute layer (app tier)
   - Regional vs global deployment
   - Container orchestration
   - Auto-scaling strategy

2. Data layer
   - Database per tenant vs shared
   - Global distribution
   - Replication strategy

3. Networking
   - Traffic Manager vs Front Door
   - CDN strategy
   - DDoS protection

4. Identity
   - Multi-tenant Entra ID
   - B2C for customers

5. Monitoring & DR
   - Regional monitoring
   - Failover strategy

Provide architecture diagram and monthly cost estimate.`},{title:"Well-Architected Review",prompt:`Conduct a Well-Architected Framework review for this architecture:

Current state:
- 2 VMs running web app (no load balancer)
- 1 Azure SQL Database (Basic tier)
- Storage account (LRS)
- No backup configured
- Secrets in app config files
- No monitoring

Review against all 5 pillars:
1. Reliability
2. Security
3. Cost Optimization
4. Operational Excellence
5. Performance Efficiency

For each pillar:
- Current score (1-5)
- Findings (what's wrong)
- Recommendations (prioritized)
- Implementation effort
- Expected improvement

Create an action plan with quick wins and long-term improvements.`},{title:"DR Strategy Design",prompt:`Design disaster recovery strategies for different RPO/RTO requirements:

| Tier | RPO | RTO | Example Workload |
|------|-----|-----|------------------|
| Tier 1 | 0 | <15 min | Core banking |
| Tier 2 | 1 hr | <1 hr | E-commerce |
| Tier 3 | 4 hr | <4 hr | Internal apps |
| Tier 4 | 24 hr | <24 hr | Dev/test |

For each tier, design:
1. Azure services to use
2. Replication method
3. Failover process (automated vs manual)
4. Failback procedure
5. Testing frequency
6. Monthly cost estimate

Then create a DR runbook for Tier 2 e-commerce site with:
- Pre-failover checklist
- Failover steps
- Validation tests
- Communication plan
- Failback procedure`},{title:"Migration Assessment",prompt:`Create a migration assessment for this on-premises environment:

Current infrastructure:
- 5 Windows Server 2016 VMs (AD, File, SQL, App, Web)
- 3 Linux VMs (Apache, MySQL, Redis)
- VMware vSphere 6.7
- 10TB total storage
- 192.168.0.0/16 network
- Site-to-site VPN to branch office

Assess and recommend:
1. Discovery phase:
   - Azure Migrate setup
   - Dependency mapping
   - Performance data collection

2. For each server:
   - Azure equivalent (VM, PaaS, or retire)
   - Sizing recommendation
   - Migration method (rehost, refactor, rearchitect)
   - Dependencies and migration order

3. Network design:
   - Azure VNet design
   - Hybrid connectivity
   - DNS migration

4. Timeline:
   - Phases and milestones
   - Risk mitigation

5. Cost comparison:
   - On-prem vs Azure (3-year TCO)
   - Optimization opportunities`}]},{week:16,phase:"Serverless Advanced",title:"Functions Deep Dive, Logic Apps, Event Grid & Service Bus",cert:"AZ-204",color:"#5C2D91",gapBadges:["SERVERLESS","EVENT-DRIVEN"],objectives:["Create Functions with multiple trigger types","Build stateful workflows with Durable Functions","Use Service Bus for reliable messaging","React to events with Event Grid","Automate workflows with Logic Apps"],services:["Azure Functions","Durable Functions","Logic Apps","Event Grid","Service Bus","CDN"],infused:[],topics:["Azure Functions — Timer, Blob, Queue, Event Grid triggers","Durable Functions for stateful workflows","Azure Service Bus — queues & topics (pub/sub)","Azure Event Grid — event-driven architecture","Azure Logic Apps — workflow automation without code","Azure CDN — content delivery & caching","OpenID Connect & MSAL authentication in apps","Static Web Apps with API backends"],labs:[{name:"Lab 1: Azure Functions — All Trigger Types",duration:"40 min",difficulty:"Intermediate",steps:["Revisit func-week5 from Week 5 (or create new)","Add Timer trigger: cleanup job every 5 minutes","Add Blob trigger: fires when file uploaded to 'uploads' container","Add Queue trigger: processes messages from a Storage Queue","Add Event Grid trigger: responds to resource events","Monitor all triggers via Application Insights"],verify:"All trigger types working and visible in App Insights."},{name:"Lab 2: Service Bus & Event Grid",duration:"35 min",difficulty:"Intermediate",steps:["Create Service Bus: queue 'orders', topic 'notifications' with 2 subscriptions","Write sender app: 10 messages to queue","Write receiver app: process messages","Create Event Grid topic → subscribe Azure Function","Send custom event → watch Function fire","Verify dead-letter queue for failed messages"],verify:"Messages flow through queues/topics. Event Grid triggers functions."},{name:"Lab 3: Logic Apps Workflow Automation",duration:"30 min",difficulty:"Intermediate",steps:["Workflow 1: Blob upload → conditional email (if size > 5MB → manager, else → team)","Workflow 2: HTTP trigger → query Azure SQL → return formatted response","Workflow 3: Daily recurrence → call Cost Management API → email cost report","Test all workflows and review run history"],verify:"All workflows trigger correctly. Emails sent."},{name:"Lab 4: Static Web App with Full API Backend",duration:"35 min",difficulty:"Intermediate",steps:["Build on the Static Web App from Week 5","Add API folder with multiple Azure Functions endpoints","Add Entra ID authentication to the Static Web App","Configure environment variables and app settings","Deploy and test the full-stack serverless application"],verify:"Static Web App with working authenticated API."}],resources:[{type:"doc",name:"Azure Functions Docs",url:"https://learn.microsoft.com/en-us/azure/azure-functions/"},{type:"doc",name:"Logic Apps Docs",url:"https://learn.microsoft.com/en-us/azure/logic-apps/"},{type:"doc",name:"Service Bus Docs",url:"https://learn.microsoft.com/en-us/azure/service-bus-messaging/"},{type:"doc",name:"Event Grid Docs",url:"https://learn.microsoft.com/en-us/azure/event-grid/"}],project:{name:"PROJECT 11: Event-Driven Serverless Order System",description:"Full event-driven app: Static Web App frontend, Functions API, Service Bus for async processing, Logic Apps for notifications.",dummyData:"Alpine Coffee Roasters: orders flow through validation → payment → fulfillment → notification. 30 products, 200 customers, 500 historical orders.",steps:["Ask Claude for React frontend (order form + status page)","Build Functions: CreateOrder, ProcessPayment, FulfillOrder, GetStatus","Service Bus queue for async order processing","Event Grid: 'OrderCompleted' → triggers Logic App","Logic App: sends email + updates blob","Deploy as Static Web App","CDN for static assets","Monitor with Application Insights","Document the event-driven architecture"]},prompts:[{title:"Event-Driven Architecture Design",prompt:`Design an event-driven architecture for an order processing system:

Flow:
1. Customer places order (REST API)
2. Order validation
3. Payment processing
4. Inventory check
5. Fulfillment
6. Notification (email + SMS)

Using:
- Azure Functions for compute
- Event Grid for events
- Service Bus for reliable messaging
- Cosmos DB for state
- Logic Apps for notifications

Design:
1. Event schema for each event type
2. Service Bus topology (queues vs topics)
3. Dead-letter handling
4. Retry policies
5. Saga pattern for transactions
6. Monitoring and tracing

Provide architecture diagram and sample code for each function.`},{title:"Durable Functions Patterns",prompt:`Teach me Durable Functions patterns with implementations:

1. Function Chaining:
   - Sequential processing
   - Error handling in chain

2. Fan-out/Fan-in:
   - Parallel processing
   - Aggregating results

3. Async HTTP APIs:
   - Long-running operations
   - Status polling endpoint

4. Monitor Pattern:
   - Polling external service
   - Timeout and retry

5. Human Interaction:
   - Approval workflows
   - Timeout handling

6. Aggregator (Stateful Entities):
   - Counter entity
   - Shopping cart

For each pattern:
- When to use it
- Complete C# or JavaScript code
- Orchestrator + Activity functions
- Testing approach
- Cost considerations`},{title:"Logic App Workflow Library",prompt:`Create a Logic App workflow library for common enterprise scenarios:

1. Approval Workflow:
   - HTTP trigger with approval request
   - Send approval email
   - Wait for response (timeout 24h)
   - Process approved/rejected

2. File Processing:
   - Blob trigger
   - Parse CSV/JSON
   - Transform data
   - Insert to SQL
   - Error handling

3. Integration:
   - Salesforce to Azure SQL sync
   - ServiceNow ticket creation
   - Teams notification

4. Scheduled Reports:
   - Query multiple data sources
   - Generate PDF
   - Email with attachment

For each:
- Complete workflow JSON
- Connector configuration
- Error handling
- Monitoring setup`},{title:"Messaging Comparison",prompt:`Compare Azure messaging services in depth:

| Feature | Storage Queue | Service Bus Queue | Service Bus Topic | Event Grid | Event Hub |
|---------|--------------|-------------------|-------------------|------------|------------|

Compare on:
- Message size limit
- Ordering guarantees
- Delivery guarantees
- Dead-letter support
- Sessions/FIFO
- Throughput
- Pricing model
- Best use case

Decision scenarios:
1. Task queue for background jobs
2. Order processing with strict ordering
3. Pub/sub for multiple subscribers
4. React to Azure resource events
5. High-volume IoT telemetry
6. Log aggregation

Recommend the best service for each with justification.`}]},{week:17,phase:"Capstone",title:"Capstone Project, Cert Prep & Career Readiness",cert:"ALL CERTS",color:"#107C10",gapBadges:[],objectives:["Build a complete enterprise Azure environment","Pass certification practice exams","Create a portfolio on GitHub","Prepare for technical interviews","Document your capstone project"],services:["Everything from Weeks 1-16"],infused:[],topics:["Certification exam strategies & study tips","AZ-900, AZ-104, AZ-204, AZ-305, AZ-400, AZ-500 review","Resume building for Azure roles","Interview preparation — scenario-based questions","Building your Azure portfolio on GitHub","Capstone project combining ALL 17 weeks"],labs:[{name:"Lab 1: Certification Practice Exams",duration:"90 min",difficulty:"Mixed",steps:["Ask Claude for 20 AZ-900 practice questions → take quiz","Ask Claude for 20 AZ-104 questions → take quiz","15 scenario-based AZ-305 questions","15 AZ-500 security scenario questions","Review wrong answers → study specific topics","Time yourself: 2 min per question max","Identify 3 weakest areas → focused study plan"],verify:"Identified weak areas with study plan created."},{name:"Lab 2: Build Your Azure Portfolio",duration:"120 min",difficulty:"Advanced",steps:["Compile all 11 projects on GitHub with READMEs","Add screenshots and architecture diagrams to each","Write a blog post about your favorite project (use Claude)","Update LinkedIn with certifications and project descriptions","Ask Claude to review your resume for Azure roles"],verify:"GitHub portfolio complete. LinkedIn updated."}],resources:[{type:"doc",name:"Microsoft Certification Dashboard",url:"https://learn.microsoft.com/en-us/certifications/"},{type:"doc",name:"Azure Architecture Browse",url:"https://learn.microsoft.com/en-us/azure/architecture/browse/"}],project:{name:"CAPSTONE: Full Enterprise Azure Deployment",description:"Build a complete enterprise-grade Azure environment from scratch using EVERY skill from all 17 weeks. This is your portfolio crown jewel.",dummyData:"GlobalTech Solutions — SaaS project management tool. 500 employees, 10K customers year 1. SOC 2, multi-region, CI/CD, monitoring, DR.",steps:["Design complete architecture with Claude (all layers)","Terraform: hub-spoke network, AKS, SQL, Cosmos DB, Key Vault, Firewall","Entra ID: RBAC, Conditional Access, MFA (Week 2 skills)","Governance: Management Groups, Policies, tags, budgets (Weeks 1-2, 14)","Databases: SQL + Cosmos DB with Private Endpoints (Weeks 6-7)","Containerize app → ACR → AKS with APIM (Weeks 8-9)","Full CI/CD: Azure DevOps pipeline (Weeks 10-11)","Serverless: Functions for background jobs, Logic Apps for notifications (Weeks 5, 16)","Security: Private Endpoints, Firewall, Defender 90%+ Score (Week 13)","Sentinel: analytics rules and incident playbooks (Week 14)","Monitoring: Log Analytics, App Insights, alerts (Week 12)","Cost Management: budgets, Advisor optimization (Weeks 1, 12)","DR: Site Recovery to secondary region (Week 15)","Well-Architected Framework review with Claude","Comprehensive documentation and architecture diagrams","Present as portfolio piece"]},prompts:[{title:"Certification Quiz (50 Questions)",prompt:`Quiz me on 50 mixed questions across all Azure certifications:

- 10 AZ-900 (fundamentals)
- 10 AZ-104 (admin)
- 10 AZ-204 (developer)
- 10 AZ-305 (architect)
- 5 AZ-400 (DevOps)
- 5 AZ-500 (security)

For each question:
1. State the question with 4 options
2. Wait for my answer
3. Tell me if correct/incorrect
4. Explain the right answer
5. Link to relevant documentation

Track my score and identify weak areas at the end.`},{title:"Resume Review",prompt:`Review my resume for Azure Cloud Engineer positions:

[I'll paste my resume]

Analyze:
1. Technical skills section:
   - Are Azure skills prominent?
   - Missing certifications to add?
   - Skills to emphasize/remove?

2. Experience bullets:
   - Are they achievement-focused with metrics?
   - Do they use Azure terminology correctly?
   - Suggestions for stronger wording?

3. Projects section:
   - Are portfolio projects listed?
   - Do they demonstrate hands-on Azure skills?

4. Format and ATS optimization:
   - Keywords for Azure roles
   - Length and formatting

Provide a rewritten version optimized for Azure positions.`},{title:"Interview Preparation",prompt:`Prepare me for Azure Cloud Engineer interviews with 20 scenario-based questions:

Format for each:
1. Interviewer asks the question
2. I provide my answer
3. You critique and provide the ideal answer

Categories:
- Architecture design (5 questions)
- Troubleshooting (5 questions)
- Security scenarios (3 questions)
- Cost optimization (3 questions)
- DevOps and CI/CD (4 questions)

Make them realistic senior-level questions that test both knowledge and problem-solving ability.

Also include:
- 5 behavioral questions specific to cloud roles
- Questions I should ask the interviewer
- Red flags to watch for`},{title:"Capstone Architecture Review",prompt:`Review my capstone project architecture for completeness:

[I'll describe my architecture]

Check against all 17 weeks:

☐ Week 1: Tagging, budgets, cost awareness
☐ Week 2: Entra ID, RBAC, policies
☐ Week 3: VNets, subnets, NSGs, Bastion
☐ Week 4: Load balancing, peering
☐ Week 5: Compute (VMs/App Service/Functions)
☐ Week 6: Storage, Key Vault, SQL
☐ Week 7: Cosmos DB, PostgreSQL, Private Endpoints
☐ Week 8: Docker, ACR, ACI
☐ Week 9: AKS, APIM
☐ Week 10: Azure DevOps CI/CD
☐ Week 11: IaC (Bicep/Terraform)
☐ Week 12: Monitoring, cost management
☐ Week 13: Security, Zero Trust, Defender
☐ Week 14: Sentinel, governance at scale
☐ Week 15: DR, Well-Architected review
☐ Week 16: Serverless, event-driven

For any gaps, suggest how to incorporate them.
Rate the architecture 1-10 and provide improvement suggestions.`}]}],Mn={"AZ-900":"#0078D4","AZ-104":"#5C2D91","AZ-204":"#00A4EF","AZ-305":"#F25022","AZ-400":"#FF7139","AZ-500":"#D83B01","ALL CERTS":"#107C10"};function Np({current:e,total:t}){return g.jsxs("div",{style:{display:"flex",gap:"2px",alignItems:"center"},children:[Array.from({length:t}).map((n,r)=>g.jsx("div",{style:{width:r<e?"16px":"12px",height:"5px",borderRadius:"3px",backgroundColor:r<e?"#10b981":"var(--border-subtle)",transition:"all 0.3s"}},r)),g.jsxs("span",{style:{marginLeft:"6px",fontSize:"11px",color:"var(--text-muted)",fontWeight:600},children:[e,"/",t]})]})}function bp({week:e,isOpen:t,isDone:n,expandedSection:r,onToggleWeek:i,onToggleComplete:o,onToggleSection:s}){const a=e.infused&&e.infused.length>0,l=u=>/^(az |kubectl|terraform|docker|npm|curl |Run:|Deploy:)/.test(u);return g.jsxs("div",{style:{border:`1px solid ${t?e.color+"40":a?"#00857530":"var(--border-subtle)"}`,borderRadius:"10px",overflow:"hidden",background:t?`${e.color}04`:"var(--card-bg)",position:"relative"},children:[a&&g.jsx("div",{style:{position:"absolute",top:"6px",right:"6px",background:"#008575",color:"#fff",fontSize:"8px",fontWeight:700,padding:"1px 6px",borderRadius:"8px",zIndex:1},children:"INFUSED"}),g.jsxs("div",{onClick:()=>i(e.week),style:{padding:"10px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",userSelect:"none"},children:[g.jsx("button",{onClick:u=>o(e.week,u),style:{width:"20px",height:"20px",borderRadius:"50%",border:n?"none":"2px solid #cbd5e1",background:n?"#10b981":"transparent",color:"#fff",fontSize:"11px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n?"✓":""}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",flexWrap:"wrap"},children:[g.jsxs("span",{style:{fontSize:"9px",fontWeight:700,color:e.color},children:["WEEK ",e.week]}),g.jsx("span",{style:{fontSize:"9px",fontWeight:600,color:"var(--text-secondary)",background:"var(--tag-bg)",padding:"1px 5px",borderRadius:"3px"},children:e.phase}),g.jsx("span",{style:{fontSize:"8px",padding:"1px 5px",borderRadius:"8px",background:(Mn[e.cert.split(" / ")[0]]||e.color)+"12",color:Mn[e.cert.split(" / ")[0]]||e.color,fontWeight:600},children:e.cert})]}),g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,marginTop:"1px",color:n?"var(--text-muted)":"var(--text-color)",textDecoration:n?"line-through":"none"},children:e.title})]}),g.jsxs("span",{style:{fontSize:"9px",color:"var(--text-muted)",whiteSpace:"nowrap"},children:[e.labs.length," labs",e.project?" · project":""]}),g.jsx("span",{style:{fontSize:"14px",color:"var(--text-muted)",transform:t?"rotate(180deg)":"none",transition:"transform 0.2s"},children:"▾"})]}),t&&g.jsxs("div",{style:{padding:"0 12px 12px"},children:[e.gapBadges&&e.gapBadges.length>0&&g.jsxs("div",{style:{marginBottom:"10px",display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"},children:[g.jsx("span",{style:{fontSize:"9px",fontWeight:700,color:"#f59e0b"},children:"⚠️ SKILL PREREQS:"}),e.gapBadges.map((u,h)=>g.jsx("span",{style:{fontSize:"9px",padding:"2px 8px",borderRadius:"10px",background:"#f59e0b20",color:"#f59e0b",fontWeight:700,border:"1px solid #f59e0b40"},children:u},h))]}),e.objectives&&e.objectives.length>0&&g.jsxs("div",{style:{marginBottom:"12px",padding:"10px",background:"#10b98108",borderRadius:"8px",border:"1px solid #10b98120"},children:[g.jsx("div",{style:{fontSize:"9px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:"#10b981",marginBottom:"6px"},children:"🎯 Learning Objectives"}),e.objectives.map((u,h)=>g.jsxs("div",{style:{display:"flex",gap:"6px",marginBottom:"3px",fontSize:"11px",lineHeight:1.4},children:[g.jsx("span",{style:{color:"#10b981",flexShrink:0},children:"✓"}),g.jsx("span",{children:u})]},h))]}),a&&g.jsxs("div",{style:{marginBottom:"10px",padding:"8px 10px",borderRadius:"6px",background:"#00857508",border:"1px solid #00857520",fontSize:"11px",lineHeight:1.5},children:[g.jsx("strong",{style:{color:"#008575"},children:"✦ Infused into this week:"})," ",e.infused.join(" • ")]}),e.services&&e.services.length>0&&g.jsxs("div",{style:{marginBottom:"10px"},children:[g.jsx("div",{style:{fontSize:"9px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:e.color,marginBottom:"4px"},children:"☁️ Services"}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.services.map((u,h)=>g.jsx("span",{style:{fontSize:"10px",padding:"2px 8px",borderRadius:"10px",background:e.color+"15",color:e.color,fontWeight:600},children:u},h))})]}),g.jsxs("div",{style:{marginBottom:"12px"},children:[g.jsx("div",{style:{fontSize:"9px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:e.color,marginBottom:"5px"},children:"Topics"}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"3px"},children:e.topics.map((u,h)=>g.jsx("span",{style:{fontSize:"10.5px",padding:"2px 7px",borderRadius:"4px",background:"var(--tag-bg)",border:"1px solid var(--border-subtle)",color:"var(--text-color)"},children:u},h))})]}),g.jsxs("div",{style:{marginBottom:"12px"},children:[g.jsxs("div",{style:{fontSize:"9px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:e.color,marginBottom:"5px"},children:["🧪 Labs (",e.labs.length,")"]}),e.labs.map((u,h)=>{const v=`${e.week}-${h}`,m=r===v;return g.jsxs("div",{style:{background:"var(--card-bg)",border:"1px solid var(--border-subtle)",borderRadius:"6px",marginBottom:"4px",overflow:"hidden"},children:[g.jsxs("div",{onClick:()=>s(v),style:{padding:"8px 10px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11.5px",fontWeight:600},children:[g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{children:u.name}),(u.duration||u.difficulty)&&g.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"3px"},children:[u.duration&&g.jsxs("span",{style:{fontSize:"9px",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"2px"},children:["⏱️ ",u.duration]}),u.difficulty&&g.jsx("span",{style:{fontSize:"9px",padding:"1px 6px",borderRadius:"8px",background:u.difficulty==="Beginner"?"#10b98120":u.difficulty==="Intermediate"?"#f59e0b20":"#ef444420",color:u.difficulty==="Beginner"?"#10b981":u.difficulty==="Intermediate"?"#f59e0b":"#ef4444",fontWeight:600},children:u.difficulty})]})]}),g.jsx("span",{style:{fontSize:"12px",color:"var(--text-muted)",transform:m?"rotate(180deg)":"none",transition:"transform 0.2s"},children:"▾"})]}),m&&g.jsxs("div",{style:{padding:"0 10px 10px"},children:[u.steps.map((w,A)=>g.jsxs("div",{style:{display:"flex",gap:"6px",marginBottom:"4px",fontSize:"11px",lineHeight:1.5,color:"var(--text-color)"},children:[g.jsx("span",{style:{flexShrink:0,width:"16px",height:"16px",borderRadius:"50%",background:e.color+"10",color:e.color,fontSize:"8px",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",marginTop:"2px"},children:A+1}),g.jsx("span",{className:l(w)?"mono":"",style:{fontSize:l(w)?"10.5px":"11px"},children:w})]},A)),u.verify&&g.jsxs("div",{style:{marginTop:"8px",padding:"6px 10px",background:"#10b98110",borderRadius:"5px",border:"1px solid #10b98130"},children:[g.jsx("span",{style:{fontSize:"10px",color:"#10b981",fontWeight:600},children:"✓ Verify:"})," ",g.jsx("span",{style:{fontSize:"10.5px",color:"var(--text-color)"},children:u.verify})]})]})]},h)})]}),e.project&&g.jsxs("div",{style:{marginBottom:"12px",background:`${e.color}05`,border:`1px solid ${e.color}20`,borderRadius:"8px",padding:"10px"},children:[g.jsx("div",{style:{fontSize:"9px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:e.color,marginBottom:"3px"},children:"🚀 Project"}),g.jsx("div",{style:{fontSize:"12.5px",fontWeight:700,marginBottom:"2px"},children:e.project.name}),g.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)",marginBottom:"6px",lineHeight:1.4},children:e.project.description}),g.jsxs("div",{style:{fontSize:"10.5px",marginBottom:"6px",fontStyle:"italic",background:"var(--card-bg)",padding:"5px 8px",borderRadius:"4px",lineHeight:1.5},children:[g.jsx("strong",{style:{color:"#059669",fontStyle:"normal"},children:"Scenario:"})," ",e.project.dummyData]}),e.project.steps.map((u,h)=>g.jsxs("div",{style:{display:"flex",gap:"5px",marginBottom:"2px",fontSize:"10.5px",lineHeight:1.4},children:[g.jsxs("span",{style:{color:e.color,fontWeight:700,flexShrink:0},children:[h+1,"."]}),g.jsx("span",{children:u})]},h))]}),e.prompts&&e.prompts.length>0&&g.jsxs("div",{style:{marginBottom:"8px"},children:[g.jsx("div",{style:{fontSize:"9px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:e.color,marginBottom:"4px"},children:"💬 Ask Claude (click to copy)"}),e.prompts.map((u,h)=>g.jsx("div",{onClick:()=>{var v;return(v=navigator.clipboard)==null?void 0:v.writeText(u.prompt)},title:"Click to copy full prompt",style:{fontSize:"11px",padding:"6px 10px",marginBottom:"3px",borderRadius:"6px",background:"var(--card-bg-alt)",border:"1px solid var(--border-subtle)",cursor:"pointer",lineHeight:1.4,transition:"all 0.15s ease"},onMouseOver:v=>{v.currentTarget.style.borderColor=e.color+"60",v.currentTarget.style.background=e.color+"08"},onMouseOut:v=>{v.currentTarget.style.borderColor="var(--border-subtle)",v.currentTarget.style.background="var(--card-bg-alt)"},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("span",{style:{color:e.color,fontSize:"12px"},children:"📋"}),g.jsx("span",{style:{fontWeight:600},children:u.title})]})},h))]}),e.resources.length>0&&g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"9px",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:e.color,marginBottom:"3px"},children:"📚 Resources"}),e.resources.map((u,h)=>g.jsxs("div",{style:{fontSize:"10.5px",marginBottom:"2px"},children:[g.jsx("span",{style:{color:u.type==="video"?"#DC2626":"#0078D4",marginRight:"3px"},children:u.type==="video"?"▶":"📄"}),g.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",children:u.name})]},h))]})]})]})}const Qa="azure-plan-v3-completed",Ha=["AZ-900","AZ-104","AZ-204","AZ-305","AZ-400","AZ-500"],Bp=[{icon:"☁️",text:"Azure Free Account — $200 credit + free tier",url:"https://azure.microsoft.com/free"},{icon:"📘",text:"Microsoft Learn — Free certification paths",url:"https://learn.microsoft.com/en-us/training/"},{icon:"🧪",text:"Azure Portal",url:"https://portal.azure.com"},{icon:"💻",text:"VS Code + Azure Extensions",url:"https://code.visualstudio.com"},{icon:"🐳",text:"Docker Desktop (Weeks 8-9)",url:"https://docker.com/products/docker-desktop"},{icon:"🔧",text:"Azure CLI",url:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli"},{icon:"📐",text:"Terraform (Week 11)",url:"https://terraform.io"},{icon:"🤖",text:"Claude — Your AI tutor & lab assistant",url:"https://claude.ai"}],jp=[`"Explain [topic] like I'm 5" — conceptual understanding`,'"Generate a hands-on lab for [service]" — practice exercises','"Quiz me on [cert] with 20 questions" — exam prep','"Write Terraform/Bicep for [infra]" — IaC practice','"Review my architecture for [scenario]" — design validation','"Debug this error: [paste error]" — troubleshooting','"Generate INSERT statements for [schema]" — database practice','"Write Azure Policy for [requirement]" — governance practice'];function Fp(){const[e,t]=Ve.useState(null),[n,r]=Ve.useState(null),[i,o]=Ve.useState(()=>{try{const f=localStorage.getItem(Qa);return f?new Set(JSON.parse(f)):new Set}catch{return new Set}}),[s,a]=Ve.useState("plan"),[l,u]=Ve.useState("all");Ve.useEffect(()=>{try{localStorage.setItem(Qa,JSON.stringify([...i]))}catch{}},[i]);const h=f=>t(e===f?null:f),v=f=>r(n===f?null:f),m=(f,R)=>{R.stopPropagation(),o(d=>{const c=new Set(d);return c.has(f)?c.delete(f):c.add(f),c})},w=l==="all"?Sr:l==="infused"?Sr.filter(f=>{var R;return((R=f.infused)==null?void 0:R.length)>0}):Sr.filter(f=>f.cert.includes(l)),A=Math.round(i.size/17*100);return g.jsxs(g.Fragment,{children:[g.jsxs("div",{style:{background:"linear-gradient(135deg, #0078D4 0%, #5C2D91 50%, #D83B01 100%)",borderRadius:"16px",padding:"28px 24px",marginBottom:"20px",color:"#fff",position:"relative",overflow:"hidden"},children:[g.jsx("div",{style:{position:"absolute",top:0,right:0,width:"300px",height:"100%",background:"radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)"}}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"10px",letterSpacing:"2px",textTransform:"uppercase",opacity:.85,marginBottom:"6px",fontWeight:600},children:"17-WEEK INTEGRATED CURRICULUM — PROPERLY SEQUENCED"}),g.jsx("h1",{style:{margin:"0 0 6px",fontSize:"24px",fontWeight:700,lineHeight:1.2},children:"Azure Mastery Learning Plan v3"}),g.jsx("p",{style:{margin:"0 0 14px",fontSize:"12px",opacity:.9,maxWidth:"540px",lineHeight:1.5},children:"Topics infused where they naturally belong — tagging from Day 1, policy with identity, SQL with storage, Functions with compute, cost management throughout."})]}),g.jsxs("div",{style:{background:"rgba(255,255,255,0.15)",borderRadius:"8px",padding:"6px 12px",fontSize:"10px",fontWeight:700,border:"1px solid rgba(255,255,255,0.2)",lineHeight:1.6},children:["✦ REDISTRIBUTED",g.jsx("br",{}),"✦ 11 PROJECTS",g.jsx("br",{}),"✦ 70+ LABS"]})]}),g.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:Ha.map(f=>g.jsx("span",{style:{background:"rgba(255,255,255,0.2)",padding:"2px 10px",borderRadius:"20px",fontSize:"10px",fontWeight:600,border:"1px solid rgba(255,255,255,0.25)"},children:f},f))})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginBottom:"16px"},children:[{l:"Weeks",v:"17",c:"#0078D4"},{l:"Labs",v:"70+",c:"#5C2D91"},{l:"Projects",v:"11",c:"#F25022"},{l:"Certs",v:"6",c:"#00A4EF"}].map(f=>g.jsxs("div",{style:{background:"var(--card-bg)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"10px 6px",textAlign:"center"},children:[g.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:f.c},children:f.v}),g.jsx("div",{style:{fontSize:"10px",fontWeight:600},children:f.l})]},f.l))}),g.jsxs("div",{style:{background:"var(--card-bg)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"12px 16px",marginBottom:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"11px",fontWeight:600,marginBottom:"4px"},children:"Your Progress"}),g.jsx(Np,{current:i.size,total:17})]}),g.jsxs("div",{style:{fontSize:"24px",fontWeight:700,color:A===100?"#10b981":"#0078D4"},children:[A,"%"]})]}),g.jsx("div",{style:{display:"flex",gap:"3px",marginBottom:"10px",background:"var(--tag-bg)",borderRadius:"8px",padding:"3px"},children:[{key:"plan",label:"📅 Plan"},{key:"projects",label:"🚀 Projects"},{key:"resources",label:"📚 Resources"},{key:"infused",label:"✦ Infused"}].map(f=>g.jsx("button",{onClick:()=>{a(f.key),u(f.key==="infused"?"infused":"all")},style:{flex:1,padding:"8px 4px",borderRadius:"6px",fontSize:"11px",fontWeight:600,background:s===f.key?"var(--card-bg)":"transparent",color:s===f.key?"#0078D4":"var(--text-muted)",boxShadow:s===f.key?"0 1px 3px rgba(0,0,0,0.08)":"none"},children:f.label},f.key))}),s==="plan"&&g.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"12px"},children:[{key:"all",label:"All"},{key:"infused",label:"✦ Infused"},...Ha.map(f=>({key:f,label:f}))].map(f=>g.jsx("button",{onClick:()=>u(f.key),style:{padding:"3px 10px",borderRadius:"16px",fontSize:"10px",fontWeight:600,border:"1px solid",background:l===f.key?(Mn[f.key]||"#0078D4")+"12":"transparent",borderColor:l===f.key?(Mn[f.key]||"#0078D4")+"40":"var(--border-subtle)",color:l===f.key?Mn[f.key]||"#0078D4":"var(--text-muted)"},children:f.label},f.key))}),(s==="plan"||s==="infused")&&g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:w.map(f=>g.jsx(bp,{week:f,isOpen:e===f.week,isDone:i.has(f.week),expandedSection:n,onToggleWeek:h,onToggleComplete:m,onToggleSection:v},f.week))}),s==="projects"&&g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Sr.filter(f=>f.project).map(f=>g.jsxs("div",{style:{border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"14px",borderLeft:`3px solid ${f.color}`},children:[g.jsxs("div",{style:{display:"flex",gap:"5px",marginBottom:"3px"},children:[g.jsxs("span",{style:{fontSize:"9px",padding:"1px 6px",borderRadius:"8px",background:f.color+"10",color:f.color,fontWeight:700},children:["WEEK ",f.week]}),g.jsx("span",{style:{fontSize:"9px",padding:"1px 6px",borderRadius:"8px",background:"var(--tag-bg)",color:"var(--text-secondary)",fontWeight:600},children:f.cert})]}),g.jsx("div",{style:{fontSize:"13px",fontWeight:700,marginBottom:"3px"},children:f.project.name}),g.jsx("div",{style:{fontSize:"11.5px",color:"var(--text-muted)",lineHeight:1.5,marginBottom:"6px"},children:f.project.description}),g.jsxs("div",{style:{fontSize:"10.5px",padding:"6px 8px",borderRadius:"5px",background:"var(--card-bg-alt)",border:"1px solid var(--border-subtle)",lineHeight:1.5},children:[g.jsx("strong",{style:{color:"#059669"},children:"Scenario:"})," ",f.project.dummyData]})]},f.week))}),s==="resources"&&g.jsxs("div",{children:[g.jsxs("div",{style:{background:"var(--card-bg)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"14px",marginBottom:"12px"},children:[g.jsx("div",{style:{fontSize:"13px",fontWeight:700,marginBottom:"6px"},children:"🎯 Core Resources for All 17 Weeks"}),g.jsx("div",{style:{fontSize:"11.5px",lineHeight:1.8},children:Bp.map((f,R)=>g.jsxs("div",{children:[g.jsx("span",{style:{marginRight:"3px"},children:f.icon}),g.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",style:{fontWeight:500},children:f.text})]},R))})]}),g.jsxs("div",{style:{background:"#0078D405",border:"1px solid #0078D420",borderRadius:"10px",padding:"14px"},children:[g.jsx("div",{style:{fontSize:"13px",fontWeight:700,marginBottom:"6px"},children:"💡 How to Use Claude as Your Azure Tutor"}),g.jsx("div",{style:{fontSize:"11.5px",lineHeight:1.8},children:jp.map((f,R)=>g.jsxs("div",{children:[g.jsx("span",{style:{color:"#0078D4",marginRight:"3px"},children:"→"})," ",f]},R))})]})]}),g.jsx("div",{style:{textAlign:"center",marginTop:"16px",fontSize:"9px",color:"var(--text-muted)",letterSpacing:"0.5px"},children:"Azure Mastery Plan v3 — 17 Weeks • 11 Projects • 70+ Labs • 6 Certifications • Built with Claude"})]})}Ki.createRoot(document.getElementById("root")).render(g.jsx(kc.StrictMode,{children:g.jsx(Fp,{})}));
