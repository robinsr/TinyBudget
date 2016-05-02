/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);;/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||s.toggleClass("open"),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);;/*
 WATable 1.06
 Copyright (c) 2012 Andreas Petersson, http://wootapa-watable.appspot.com/

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(e,t){var n=function(){var n={};var r={};n.options={};var i={url:"",urlData:"",urlPost:false,debug:false,filter:false,columnPicker:false,pageSize:10,pageSizes:[10,20,30,40,50,"All"],actions:"",hidePagerOnEmpty:false,preFill:false,types:{string:{},number:{},bool:{},date:{}}};n.ext={};n.ext.XDate=function(e,t,n,r){function i(){var t=this instanceof i?this:new i,n=arguments,r=n.length,u;typeof n[r-1]=="boolean"&&(u=n[--r],n=T(n,0,r));if(r)if(r==1)if(r=n[0],r instanceof e||typeof r=="number")t[0]=new e(+r);else if(r instanceof i){var n=t,a=new e(+r[0]);if(s(r))a.toString=_;n[0]=a}else{if(typeof r=="string"){t[0]=new e(0);e:{for(var n=r,r=u||!1,a=i.parsers,f=0,l;f<a.length;f++)if(l=a[f](n,r,t)){t=l;break e}t[0]=new e(n)}}}else t[0]=new e(M.apply(e,n)),u||(t[0]=w(t[0]));else t[0]=new e;typeof u=="boolean"&&o(t,u);return t}function s(e){return e[0].toString===_}function o(t,n,r){if(n){if(!s(t))r&&(t[0]=new e(M(t[0].getFullYear(),t[0].getMonth(),t[0].getDate(),t[0].getHours(),t[0].getMinutes(),t[0].getSeconds(),t[0].getMilliseconds()))),t[0].toString=_}else s(t)&&(t[0]=r?w(t[0]):new e(+t[0]));return t}function u(e,t,n,r,i){var s=x(y,e[0],i),e=x(b,e[0],i),i=t==1?n%12:s(1),o=!1;r.length==2&&typeof r[1]=="boolean"&&(o=r[1],r=[n]);e(t,r);o&&s(1)!=i&&(e(1,[s(1)-1]),e(2,[E(s(0),s(1))]))}function a(e,n,r,i){var r=Number(r),s=t.floor(r);e["set"+k[n]](e["get"+k[n]]()+s,i||!1);s!=r&&n<6&&a(e,n+1,(r-s)*A[n],i)}function f(e,n,r){var e=e.clone().setUTCMode(!0,!0),n=i(n).setUTCMode(!0,!0),s=0;if(r==0||r==1){for(var o=6;o>=r;o--)s/=A[o],s+=y(n,!1,o)-y(e,!1,o);r==1&&(s+=(n.getFullYear()-e.getFullYear())*12)}else r==2?(r=e.toDate().setUTCHours(0,0,0,0),s=n.toDate().setUTCHours(0,0,0,0),s=t.round((s-r)/864e5)+(n-s-(e-r))/864e5):s=(n-e)/[36e5,6e4,1e3,1][r-3];return s}function l(n){var r=n(0),i=n(1),n=n(2),i=new e(M(r,i,n)),s=c(r),n=s;i<s?n=c(r-1):(r=c(r+1),i>=r&&(n=r));return t.floor(t.round((i-n)/864e5)/7)+1}function c(t){t=new e(M(t,0,4));t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+6)%7);return t}function h(e,t,n,i){var s=x(y,e,i),o=x(b,e,i),n=c(n===r?s(0):n);i||(n=w(n));e.setTime(+n);o(2,[s(2)+(t-1)*7])}function p(e,t,n,r,s){var o=i.locales,u=o[i.defaultLocale]||{},a=x(y,e,s),n=(typeof n=="string"?o[n]:n)||{};return d(e,t,function(e){if(r)for(var t=(e==7?2:e)-1;t>=0;t--)r.push(a(t));return a(e)},function(e){return n[e]||u[e]},s)}function d(e,t,n,i,s){for(var o,u,a="";o=t.match(O);){a+=t.substr(0,o.index);if(o[1]){u=a;for(var a=e,f=o[1],l=n,c=i,h=s,p=f.length,m=void 0,g="";p>0;)m=v(a,f.substr(0,p),l,c,h),m!==r?(g+=m,f=f.substr(p),p=f.length):p--;a=u+(g+f)}else o[3]?(u=d(e,o[4],n,i,s),parseInt(u.replace(/\D/g,""),10)&&(a+=u)):a+=o[7]||"'";t=t.substr(o.index+o[0].length)}return a+t}function v(e,n,r,s,o){var u=i.formatters[n];if(typeof u=="string")return d(e,u,r,s,o);else if(typeof u=="function")return u(e,o||!1,s);switch(n){case"fff":return C(r(6),3);case"s":return r(5);case"ss":return C(r(5));case"m":return r(4);case"mm":return C(r(4));case"h":return r(3)%12||12;case"hh":return C(r(3)%12||12);case"H":return r(3);case"HH":return C(r(3));case"d":return r(2);case"dd":return C(r(2));case"ddd":return s("dayNamesShort")[r(7)]||"";case"dddd":return s("dayNames")[r(7)]||"";case"M":return r(1)+1;case"MM":return C(r(1)+1);case"MMM":return s("monthNamesShort")[r(1)]||"";case"MMMM":return s("monthNames")[r(1)]||"";case"yy":return(r(0)+"").substring(2);case"yyyy":return r(0);case"t":return m(r,s).substr(0,1).toLowerCase();case"tt":return m(r,s).toLowerCase();case"T":return m(r,s).substr(0,1);case"TT":return m(r,s);case"z":case"zz":case"zzz":return o?n="Z":(s=e.getTimezoneOffset(),e=s<0?"+":"-",r=t.floor(t.abs(s)/60),s=t.abs(s)%60,o=r,n=="zz"?o=C(r):n=="zzz"&&(o=C(r)+":"+C(s)),n=e+o),n;case"w":return l(r);case"ww":return C(l(r));case"S":return n=r(2),n>10&&n<20?"th":["st","nd","rd"][n%10-1]||"th"}}function m(e,t){return e(3)<12?t("amDesignator"):t("pmDesignator")}function g(e){return!isNaN(+e[0])}function y(e,t,n){return e["get"+(t?"UTC":"")+k[n]]()}function b(e,t,n,r){e["set"+(t?"UTC":"")+k[n]].apply(e,r)}function w(t){return new e(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds())}function E(t,n){return 32-(new e(M(t,n,32))).getUTCDate()}function S(e){return function(){return e.apply(r,[this].concat(T(arguments)))}}function x(e){var t=T(arguments,1);return function(){return e.apply(r,t.concat(T(arguments)))}}function T(e,t,i){return n.prototype.slice.call(e,t||0,i===r?e.length:i)}function N(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}function C(e,t){t=t||2;for(e+="";e.length<t;)e="0"+e;return e}var k="FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds,Day,Year".split(","),L=["Years","Months","Days"],A=[12,31,24,60,60,1e3,1],O=/(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,M=e.UTC,_=e.prototype.toUTCString,D=i.prototype;D.length=1;D.splice=n.prototype.splice;D.getUTCMode=S(s);D.setUTCMode=S(o);D.getTimezoneOffset=function(){return s(this)?0:this[0].getTimezoneOffset()};N(k,function(e,t){D["get"+e]=function(){return y(this[0],s(this),t)};t!=8&&(D["getUTC"+e]=function(){return y(this[0],!0,t)});t!=7&&(D["set"+e]=function(e){u(this,t,e,arguments,s(this));return this},t!=8&&(D["setUTC"+e]=function(e){u(this,t,e,arguments,!0);return this},D["add"+(L[t]||e)]=function(e,n){a(this,t,e,n);return this},D["diff"+(L[t]||e)]=function(e){return f(this,e,t)}))});D.getWeek=function(){return l(x(y,this,!1))};D.getUTCWeek=function(){return l(x(y,this,!0))};D.setWeek=function(e,t){h(this,e,t,!1);return this};D.setUTCWeek=function(e,t){h(this,e,t,!0);return this};D.addWeeks=function(e){return this.addDays(Number(e)*7)};D.diffWeeks=function(e){return f(this,e,2)/7};i.parsers=[function(t,n,r){if(t=t.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)){var i=new e(M(t[1],t[3]?t[3]-1:0,t[5]||1,t[7]||0,t[8]||0,t[10]||0,t[12]?Number("0."+t[12])*1e3:0));t[13]?t[14]&&i.setUTCMinutes(i.getUTCMinutes()+(t[15]=="-"?1:-1)*(Number(t[16])*60+(t[18]?Number(t[18]):0))):n||(i=w(i));return r.setTime(+i)}}];i.parse=function(e){return+i(""+e)};D.toString=function(e,t,n){return e===r||!g(this)?this[0].toString():p(this,e,t,n,s(this))};D.toUTCString=D.toGMTString=function(e,t,n){return e===r||!g(this)?this[0].toUTCString():p(this,e,t,n,!0)};D.toISOString=function(){return this.toUTCString("yyyy-MM-dd'T'HH:mm:ss(.fff)zzz")};i.defaultLocale="";i.locales={"":{monthNames:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),monthNamesShort:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),dayNames:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),dayNamesShort:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),amDesignator:"AM",pmDesignator:"PM"}};i.formatters={i:"yyyy-MM-dd'T'HH:mm:ss(.fff)",u:"yyyy-MM-dd'T'HH:mm:ss(.fff)zzz"};N("getTime,valueOf,toDateString,toTimeString,toLocaleString,toLocaleDateString,toLocaleTimeString,toJSON".split(","),function(e){D[e]=function(){return this[0][e]()}});D.setTime=function(e){this[0].setTime(e);return this};D.valid=S(g);D.clone=function(){return new i(this)};D.clearTime=function(){return this.setHours(0,0,0,0)};D.toDate=function(){return new e(+this[0])};i.now=function(){return+(new e)};i.today=function(){return(new i).clearTime()};i.UTC=M;i.getDaysInMonth=E;if(typeof module!=="undefined"&&module.exports)module.exports=i;return i}(Date,Math,Array);var s=null;var o=null;var u=null;var a=null;var f=null;var l=null;var c=null;var h=null;var p=1;var d=null;var v=null;var m=null;var g=false;var y=null;var b={};var w=null;var E=null;var S={};var x=false;n.init=function(){s=n.options.id;if(String(n.options.pageSize).toLowerCase()=="auto"){n.options[option]=-1;d=n.options.pageSize;e(window).on("resize",n.windowResized)}n.options.types.string=(n.options.types||{}).string||{};n.options.types.number=(n.options.types||{}).number||{};n.options.types.bool=(n.options.types||{}).bool||{};n.options.types.date=(n.options.types||{}).date||{};if(n.options.preFill){var t={cols:{dummy:{index:1,friendly:" ",type:"none"}},rows:[]};for(var r=0;r<n.options.pageSize;r++)t.rows.push({dummy:" "});n.setData(t)}n.update()};n.createTable=function(){var r=new n.ext.XDate;if(o==null){u=l=c=null;o=e('<table class="watable table table-striped table-hover table-bordered table-condensed"></table>').appendTo(s)}if(u==null){o.find("thead").remove();a=f=null;u=e("<thead></thead>").prependTo(o)}var i=Object.keys(h.cols).sort(function(e,t){return h.cols[e].index-h.cols[t].index});if(a==null){u.find(".sort i").tooltip("hide");u.find(".sort").remove();a=e('<tr class="sort"></tr>').prependTo(u);if(E&&!h.cols[E].hidden){var y=x?"checked":"";var w=e("<th></th>").appendTo(a);var T=e('<input {0} class="checkToggle" type="checkbox" />'.f(y)).appendTo(w);T.on("change",n.checkToggleChanged)}for(var N=0;N<i.length;N++){var C=i[N];var k=h.cols[C];if(!k.hidden){var w=e("<th></th>").appendTo(a);var L=e('<a class="pull-left" href="#">{0}</a>'.f(k.friendly||C));L.on("click",{column:C},n.columnClicked).appendTo(w);if(k.tooltip)e('<i class="icon-info-sign"></i>').tooltip({title:k.tooltip,html:true,container:"body",placement:"top",delay:{show:500,hide:100}}).appendTo(L);if(C==m){if(g)e('<i class="icon-chevron-down pull-right"></i>').appendTo(w);else e('<i class="icon-chevron-up pull-right"></i>').appendTo(w)}}}}if(f==null&&n.options.filter){u.find(".filter").remove();f=e('<tr class="filter"></tr>').appendTo(u);var w;var T;var A="";var O="";if(E&&!h.cols[E].hidden){O=n.options.types.bool.tooltip||"Toggle between:<br/>indeterminate,<br/>checked,<br/>unchecked";var w=e("<th></th>").appendTo(f);var T=e('<input class="filter indeterminate" checked type="checkbox" />').appendTo(w);e.map(b,function(e,t){if(t=="unique"){if(e.filter)T.prop("checked",true).removeClass("indeterminate");else if(!e.filter)T.prop("checked",false).removeClass("indeterminate");else if(e.filter=="")T.addClass("indeterminate")}});O=O.trim();if(O)T.tooltip({title:O,html:true,container:"body",trigger:"hover",placement:"top",delay:{show:500,hide:100}});T.on("click",{column:"unique"},n.filterChanged)}for(var N=0;N<i.length;N++){var C=i[N];var k=h.cols[C];k.filter=k.filter===false?false:true;if(!k.hidden){w=e("<th></th>").appendTo(f);switch(k.type||"none"){case"number":A=n.options.types.number.placeHolder||"10..20 =50";O=n.options.types.number.tooltip||"Values 10 to 20:<br/>10..20<br/>Values exactly 50:<br/>=50";T=e('<input placeholder="{0}" class="filter" type="text" />'.f(A));T.on("keyup",{column:C},n.filterChanged);break;case"date":A=n.options.types.date.placeHolder||"-7..0";O=n.options.types.date.tooltip||"Today:<br/>0..1<br/>A week today excluded:<br/>-7..0";T=e('<div><input placeholder="{0}" class="filter" type="text" /></div>'.f(A));if(n.options.types.date.datePicker===true||n.options.types.date.datePicker==t){if(e().datepicker){T.addClass("date-wrap");var M=(new n.ext.XDate(false)).setHours(0,0,0,0).toString("yyyy-MM-dd");var _=e('<div style="float:right" class="date" data-date="{0}" data-date-format="{1}" />'.f(M,"yyyy-mm-dd")).appendTo(T);e('<input style="display:none" type="text"  />').appendTo(_);e('<span class="add-on"><i class="icon-chevron-right"></i></span>').on("click",{op:"l"},n.dpOpChanged).appendTo(_);e('<span class="add-on"><i class="icon-chevron-left"></i></span>').on("click",{op:"r"},n.dpOpChanged).appendTo(_);_.datepicker({weekStart:1});_.on("changeDate",{column:C,input:e("input.filter",T)},n.dpClicked)}else if(n.options.debug)console.log("datepicker plugin not found")}T.on("keyup","input.filter",{column:C},n.filterChanged);break;case"bool":O=n.options.types.bool.tooltip||"Toggle between:<br/>indeterminate,<br/>checked,<br/>unchecked";T=e('<input class="filter indeterminate" checked type="checkbox" />');T.on("click",{column:C},n.filterChanged);break;case"string":A=n.options.types.string.placeHolder||"John Doe";O=n.options.types.string.tooltip||"Find John Doe:<br/>John Doe<br/>Find all but John Doe:<br/>!John Doe";T=e('<input placeholder="{0}" class="filter" type="text" />'.f(A));T.on("keyup",{column:C},n.filterChanged);break;case"none":T=e("<div> </div>");break}O=O.trim();if(O)T.tooltip({title:O,html:true,container:"body",trigger:"hover",placement:"top",delay:{show:500,hide:100}});if(T&&k.filter){e.map(b,function(e,t){if(t==C){if(e.col.type=="bool"){if(e.filter)T.prop("checked",true).removeClass("indeterminate");else if(!e.filter)T.prop("checked",false).removeClass("indeterminate");else if(e.filter=="")T.addClass("indeterminate")}else T.val(e.filter)}});T.appendTo(w)}}}}if(l==null){o.find("tbody").remove();l=e("<tbody></tbody>").insertAfter(u);l.on("change",".unique",n.rowChecked);l.on("click","td",n.rowClicked);if(n.options.pageSize==-1)h.toRow=h.rows.length;else{h.toRow=h.fromRow+n.options.pageSize;if(h.toRow>h.rows.length)h.toRow=h.rows.length}var D=0;e.each(h.rows.slice(h.fromRow,h.toRow),function(r,u){var a=e("<tr></tr>").appendTo(l);if(E&&!h.cols[E].hidden){var f=S[u[E]]!=t?"checked":"";var c=u["checkable"]===false?"disabled":"";var p=e("<td></td>").appendTo(a);var d=e('<input class="unique" {0} {1} type="checkbox" />'.f(f,c)).appendTo(p)}for(var v=0;v<i.length;v++){var m=i[v];var g=u[m]||"";if(!h.cols[m])return;if(h.cols[m].unique)a.data("unique",g);if(!h.cols[m].hidden){var p=e("<td></td>").appendTo(a);p.data("column",m);var y=u[m+"Format"]||h.cols[m].format||"{0}";switch(h.cols[m].type){case"string":case"none":p.html(y.f(g));break;case"number":g=Number(g)||0;var b=!isNaN(h.cols[m].decimals);if(b)p.html(y.f(g.toFixed(h.cols[m].decimals)));else{(g||0)%1===0?p.html(y.f(g)):p.html(y.f(g.toFixed(n.options.types.number.decimals||2)))}break;case"date":g=(new n.ext.XDate(g,n.options.types.date.utc===true)).toString(n.options.types.date.format||"yyyy-MM-dd HH:mm:ss");p.html(y.f(g));break;case"bool":e('<input type="checkbox" {0} disabled />'.f(g?"checked":"")).appendTo(p);break}}}D++;if(n.options.pageSize==-1){if(!n.elementInViewport(s)){var w=o.find("tfoot").length;if(!w&&a.prev()){a.prev().remove();D--}if(!w&&a.prev()){a.prev().remove();D--}if(!w&&a.prev()){a.prev().remove();D--}a.remove();D--;h.toRow=h.fromRow+D;return false}}else{if(D>=n.options.pageSize){h.toRow=h.fromRow+D;return false}}});if(p==1){d=D;v=Math.round(Math.ceil(h.rows.length/d))}if(p==v){while(D<d){var P=e("<tr></tr>").appendTo(l);if(E&&!h.cols[E].hidden){var H=e("<td></td>").appendTo(P);var T=e('<input disabled type="checkbox" />').appendTo(H)}e.each(h.cols,function(t,n){if(!n.hidden){e("<td> </td>").appendTo(P)}});D++}}}if(c==null){o.find("tfoot").remove();c=e("<tfoot></tfoot>").insertAfter(l);var B=e("<tr></tr>").appendTo(c);var j=e('<td colspan="999"></td>').appendTo(B);if(h.rows.length>0)e("<p>Rows {0}-{1} of {2}</p>".f(h.fromRow+1,Math.min(h.toRow,h.rows.length),h.rows.length)).appendTo(j);else{e("<p>No results</p>").appendTo(j);v=0}var F=p-2;var I=p+2;if(I>v){var q=I-v;I=v;F-=q}if(F<1)F=1;if(I<5)I=5;var R=e('<div class="btn-toolbar"></div>').appendTo(j);var U=e('<div class="btn-group"></div>').appendTo(R);var z=e('<div class="pagination"></div>').appendTo(U);var W=e("<ul></ul>").appendTo(z);e('<li class="{0}"><a href="#">«</a></li>'.f(p==1?"disabled":"")).on("click",{pageIndex:p-1},n.pageChanged).appendTo(W);for(var N=F;N<=I;N++){var L=null;if(N!=p)L=e('<li class="{1}"><a href="#">{0}</a></li>'.f(N,N>v?"disabled":""));if(N==p)L=e('<li class="active"><a href="#">{0}</a></li>'.f(N));if(L!=null){L.on("click",{pageIndex:N},n.pageChanged);L.appendTo(W)}}e('<li class="{0}"><a href="#">»</a></li>'.f(p==v?"disabled":"")).on("click",{pageIndex:p+1},n.pageChanged).appendTo(W);if(n.options.pageSizes.length){var X=e('<div class="btn-group dropup pagesize"></div>').appendTo(R);var V=e('<button class="btn dropdown-toggle" data-toggle="dropdown" href="#">Rows </button>').appendTo(X);var J=e('<span class="caret"></span>').appendTo(V);var K=e('<ul class="dropdown-menu">').appendTo(X);e.each(n.options.pageSizes,function(t,n){var r=e("<li></li>").appendTo(K);e('<a href="#">{0}</a>'.f(n)).appendTo(r)});X.on("click","a",n.pageSizeChanged)}if(n.options.columnPicker){var X=e('<div class="btn-group dropup columnpicker"></div>').appendTo(R);var V=e('<button class="btn dropdown-toggle" data-toggle="dropdown" href="#">Columns </button>').appendTo(X);var J=e('<span class="caret"></span>').appendTo(V);var K=e('<ul class="dropdown-menu">').appendTo(X);e.each(h.cols,function(t,n){if(n.type!="unique"){var r=e("<li></li>").appendTo(K);e('<input {0} type="checkbox" title="{1}" value="{1}" > {2}</input>'.f(n.hidden?"":"checked",t,n.friendly||t)).appendTo(r)}});X.on("click","input",n.columnPickerClicked)}if(n.options.actions){var X=e('<div class="btn-group dropup actions"></div>').appendTo(R);var V=e('<button class="btn dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-list"></i> </button>').appendTo(X);var J=e('<span class="caret"></span>').appendTo(V);var K=e('<ul class="dropdown-menu">').appendTo(X);if(n.options.actions.filter){var Q=e("<li></li>").appendTo(K);e('<input {0} type="checkbox" > Filter</input>'.f(n.options.filter?"checked":"")).appendTo(Q);Q.on("click","input",function(e){n.options.filter=!n.options.filter;u=null;n.createTable()})}if(n.options.actions.columnPicker){var Q=e("<li></li>").appendTo(K);e('<input {0} type="checkbox" > ColumnPicker</input>'.f(n.options.columnPicker?"checked":"")).appendTo(Q);Q.on("click","input",function(e){n.options.columnPicker=!n.options.columnPicker;c=null;n.createTable()})}if(n.options.actions.custom){e.each(n.options.actions.custom,function(t,n){var r=e("<li></li>").appendTo(K);e(n).appendTo(r)})}}}if(h.rows.length==0&&n.options.hidePagerOnEmpty)e(".btn-toolbar",c).remove();if(n.options.debug)console.log("table created in {0} ms.".f(new n.ext.XDate-r));if(typeof n.options.tableCreated=="function")n.options.tableCreated.call(o.get(0),{table:o.get(0)})};n.update=function(t,r,i){if(!n.options.url){if(n.options.debug)console.log("no url found");return}if(n.options.debug)console.log("requesting data from url:{0} data:{1}".f(n.options.url,JSON.stringify(n.options.urlData)||""));var s=new n.ext.XDate;e.ajax({url:n.options.url,type:n.options.urlPost?"POST":"GET",dataType:"json",contentType:"application/json; charset=utf-8",data:n.options.urlData,async:true,success:function(e){if(n.options.debug)console.log("request finished in {0} ms.".f(new n.ext.XDate-s));if(e.d&&e.d.cols)n.setData(e.d,r,i);else n.setData(e,r,i);if(typeof t=="function")t.call(this)},error:function(e){console.log("request error: ".f(e))}})};n.setData=function(r,i,s){var o=e.extend(true,{},r);o.fromRow=h&&h.fromRow||0;o.toRow=h&&h.toRow||0;if(i||false)o.cols=h.cols;h=o;h.rowsOrg=h.rows;if(p>1){h.toRow=Math.min(h.rows.length,h.toRow);h.fromRow=h.toRow-d;h.fromRow=Math.max(h.fromRow,0);p=Math.ceil(h.fromRow/d)+1;v=Math.ceil(h.rows.length/d)}else{h.fromRow=0;if(n.options.pageSize!=-1)h.toRow=h.fromRow+n.options.pageSize;h.toRow=Math.max(h.toRow,h.rows.length)}E="";e.each(h.cols,function(e,t){if(!m&&t.sortOrder){m=e;g=t.sortOrder!="asc"}if(!t.type)h.cols[e].type="none";if(t.unique){if(!E)E=e;else t.unique=false}if(!t.index)h.cols[e].index=new n.ext.XDate;t.column=e});if(E){h.cols["unique"]={column:"unique",type:"unique",index:-1,hidden:true}}if(s===true||s===t)S={};else{for(var a in S)S[a]=n.getRow(a)}if(E){e.each(h.rows,function(e,n){if(n["Checked"]!=t){n["checked"]=n["Checked"];delete n["Checked"]}if(n["Checkable"]!=t){n["checkable"]=n["Checkable"];delete n["Checkable"]}if(n["checked"]===true)S[n[E]]=n})}u=null;l=null;c=null;n.filter();n.sort();n.createTable()};n.filter=function(){if(!n.options.filter)return;if(Object.keys(b).length==0)return;else h.rows=e.extend(true,{},h.rowsOrg);var t=new n.ext.XDate;e.each(b,function(t,r){if(n.options.debug)console.log("filtering on text:{0} col:{1} type:{2} ".f(r.filter,r.col.column,r.col.type));switch(r.col.type){case"string":h.rows=e.map(h.rows,function(e){var n=String(e[t]);var i=r.filter.toLowerCase();var s=i.charAt(0)=="!";if(s)i=i.substring(1);var o=n.toLowerCase().indexOf(i);if(o==-1&&s)return e;else if(o>=0&&!s){if(!e[t+"Format"]&&!r.col.format){var u=n.substring(0,o);var a=n.substring(o,o+r.filter.length);var f=n.substring(o+r.filter.length,e[t].length);e[t+"Format"]='<span>{0}<span class="filter">{1}</span>{2}</span>'.f(u,a,f)}return e}});break;case"number":case"date":h.rows=e.map(h.rows,function(i){var s=r.filter.replace(/\s+/gi," ").split(" ");s=s.filter(function(e){return e});var o=[">=","<=","..",">","<","="];var u=0;var a=true;e.each(s,function(e,s){for(var f=0;f<o.length;f++){var l=o[f];var c=s.indexOf(l);var h=s.substring(0,c);var p=s.substring(c+l.length);if(c==-1)continue;a=h.length+p.length==0;h=parseFloat(h);p=parseFloat(p);if(isNaN(h))h=Number.NEGATIVE_INFINITY;if(isNaN(p))p=Number.MAX_VALUE;if(r.col.type=="date"){var d=(new n.ext.XDate(n.options.types.date.utc===true)).setHours(0,0,0,0);h=d-h*-1*60*60*24*1e3;p=d-p*-1*60*60*24*1e3}switch(l){case">":if(i[t]>p)u++;break;case">=":if(i[t]>=p)u++;break;case"<":if(i[t]<p)u++;break;case"<=":if(i[t]<=p)u++;break;case"=":if(i[t]==p)u++;break;case"..":if(r.col.type=="date"){if(i[t]>=h&&i[t]<p)u++}else{if(i[t]>=h&&i[t]<=p)u++}break;default:a=true}break}});if(s.length==1&&a||u>0&&a||u==s.length||r.filter=="")return i});break;case"bool":h.rows=e.map(h.rows,function(e){if(r.filter==="")return e;if(Boolean(e[t])&&r.filter||!Boolean(e[t])&&!r.filter)return e});break;case"unique":h.rows=e.map(h.rows,function(e){if(r.filter==="")return e;var t=e[E];var n=S[t]?S[t][E]:"";if(r.filter&&t===n||!r.filter&&n==="")return e});break}if(r.filter==="")delete b[r.col.column]});if(n.options.debug)console.log("filtering finished in {0} ms.".f(new n.ext.XDate-t));p=1;h.fromRow=0;l=null;c=null};n.sort=function(){if(!h.cols[m])m="";if(!m)return;var e=new n.ext.XDate;if(n.options.debug)console.log("sorting on col:{0} order:{1}".f(m,g?"desc":"asc"));var t=h.cols[m].type=="string";h.rows=h.rows.sort(function(e,n){if(t){if(String(e[m]).toLowerCase()==String(n[m]).toLowerCase())return 0;if(String(e[m]).toLowerCase()>String(n[m]).toLowerCase())return g?-1:1;else return g?1:-1}else{if(e[m]==n[m])return 0;if(e[m]>n[m])return g?-1:1;else return g?1:-1}});if(n.options.debug)console.log("sorting finished in {0} ms.".f(new n.ext.XDate-e))};n.elementInViewport=function(e){var t=e.get(0).getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth};n.getRow=function(t){var r=new n.ext.XDate;var i;e.each(h.rowsOrg,function(e,n){if(n[E]==t){i=n;return false}});if(n.options.debug)console.log("row lookup finished in {0} ms.".f(new n.ext.XDate-r));return i};n.filterChanged=function(t){if(w!=null){clearTimeout(w);if(n.options.debug)console.log("filtering cancelled")}var r=this.value;var i=h.cols[t.data.column];var s=200;if(i.type=="bool"||i.type=="unique"){s=0;var o=e(this);var u="indeterminate";if(o.hasClass(u)){t.preventDefault();o.removeClass(u);r=true}else{if(!o.is(":checked")){r=false}else{o.addClass(u);r=""}}}b[i.column]={filter:r,col:i};w=setTimeout(function(){w=null;n.filter();n.sort();n.createTable()},s)};n.pageChanged=function(e){e.preventDefault();if(e.data.pageIndex<1||e.data.pageIndex>v)return;p=e.data.pageIndex;if(n.options.debug)console.log("paging to index:{0}".f(p));h.fromRow=(p-1)*d;h.toRow=h.fromRow+d;if(h.toRow>h.rows.length)h.toRow=h.rows.length;if(typeof n.options.pageChanged=="function"){n.options.pageChanged.call(e.target,{event:e,page:p})}l=null;c=null;n.createTable()};n.pageSizeChanged=function(t){t.preventDefault();var r=e(this).text().toLowerCase();if(n.options.debug)console.log("pagesize changed to:{0}".f(r));e(window).off("resize",n.windowResized);if(r=="all")n.options.pageSize=h.rows.length;else if(r=="auto"){n.options.pageSize=-1;e(window).on("resize",n.windowResized)}else n.options.pageSize=parseInt(r);p=1;h.fromRow=0;h.toRow=h.fromRow+n.options.pageSize;if(h.toRow>h.rows.length)h.toRow=h.rows.length;if(typeof n.options.pageSizeChanged=="function"){n.options.pageSizeChanged.call(t.target,{event:t,pageSize:n.options.pageSize})}l=null;c=null;n.createTable()};n.columnClicked=function(e){e.preventDefault();if(n.options.debug)console.log("col:{0} clicked".f(e.data.column));if(m==e.data.column)g=!g;m=e.data.column;if(typeof n.options.columnClicked=="function"){n.options.columnClicked.call(e.target,{event:e,column:h.cols[m],descending:g})}a=null;l=null;n.sort();n.createTable()};n.columnPickerClicked=function(t){t.stopPropagation();var r=e(this);var i=r.val();if(n.options.debug)console.log("col:{0} {1}".f(i,r.is(":checked")?"checked":"unchecked"));h.cols[i].hidden=!h.cols[i].hidden;h.cols[i].index=new n.ext.XDate;u=null;l=null;n.createTable()};n.checkToggleChanged=function(t){t.preventDefault();var r=e(this);if(r.is(":checked")){var i=new n.ext.XDate;e.each(h.rows,function(e,t){var n=h.rows[e];if(n.checkable===false)return;S[t[E]]=n});if(n.options.debug)console.log("{0} rows checked in {1} ms.".f(h.rows.length,new n.ext.XDate-i));x=true}else{var i=new n.ext.XDate;for(var s in S){var o=S[s];if(o.checkable===false)continue;else delete S[s]}if(n.options.debug)console.log("{0} rows unchecked in {1} ms.".f(h.rows.length,new n.ext.XDate-i));x=false}l=null;n.createTable()};n.rowChecked=function(t){t.preventDefault();var r=e(this);var i=r.closest("tr").data("unique");if(n.options.debug)console.log("row({0}) {1}".f(i,r.is(":checked")?"checked":"unchecked"));if(r.is(":checked"))S[i]=n.getRow(i);else delete S[i]};n.rowClicked=function(t){if(!E){if(n.options.debug)console.log("no unique column specified");return}var r=e(this);var i=h.cols[r.data("column")];var s=r.closest("tr").data("unique");var o=n.getRow(s);var u=r.closest("tr").find(".unique").is(":checked");if(typeof n.options.rowClicked=="function")n.options.rowClicked.call(t.target,{event:t,row:o,column:i,checked:u})};n.dpOpChanged=function(e){if(n.options.debug)console.log("dp oper:{0} clicked".f(e.data.op));e.preventDefault();y=e.data.op};n.dpClicked=function(t){if(n.options.debug)console.log("dp date:{0} clicked".f((new n.ext.XDate(t.date,n.options.types.date.utc===true)).toString("yyyy-MM-dd")));t.preventDefault();var r=(new n.ext.XDate(false)).setHours(0,0,0,0);var i=Math.floor(t.date/(60*60*24*1e3))-Math.floor(r/(60*60*24*1e3));var s=e(t.data.input);var o="..";var u=s.val().indexOf(o);var a=s.val().substring(0,u);var f=s.val().substring(u+o.length);if(y=="l")a=i;if(y=="r")f=i;s.val("{0}{1}{2}".f(a,o,f));e(this).datepicker("hide");s.trigger("keyup")};n.windowResized=function(e){if(n.options.debug)console.log("window resized");p=1;h.fromRow=0;l=null;c=null;n.createTable()};r.init=function(t){if(n.options.debug)console.log("watable initialization...");e.extend(n.options,i,t);n.init();return r};r.update=function(e,t,i){if(n.options.debug)console.log("publ.update called");n.update(e,t,i);return r};r.getData=function(t,r){if(n.options.debug)console.log("publ.getData called");t=t||false;r=r||false;var i=e.extend(true,{},h);delete i.cols["unique"];if(!r){delete i.rows;i.rows=i.rowsOrg}delete i.rowsOrg;delete i.fromRow;delete i.toRow;if(t){delete i.rows;i.rows=e.map(S,function(e,t){return e})}return i};r.setData=function(e,t,i){if(n.options.debug)console.log("publ.setData called");n.setData(e,t,i);return r};r.option=function(e,i){if(n.options.debug)console.log("publ.option called");if(i==t)return n.options[e];n.options[e]=i;u=null;l=null;c=null;n.createTable();return r};return r};e.fn.WATable=function(t){t=t||{};return this.each(function(){t.id=this;e(this).data("WATable",(new n).init(t))})};String.prototype.format=String.prototype.f=function(){var e=this,t=arguments.length;while(t--)e=e.replace(new RegExp("\\{"+t+"\\}","gm"),arguments[t]);return e}})(jQuery);;/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
g)).finalize(a)}}});var k=m.algo={};return m}(Math);
(function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);;// Knockout JavaScript library v2.2.1
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function () {
    function j(w) {
        throw w;
    }
    var m = !0,
        p = null,
        r = !1;

    function u(w) {
        return function () {
            return w
        }
    };
    var x = window,
        y = document,
        ga = navigator,
        F = window.jQuery,
        I = void 0;

    function L(w) {
        function ha(a, d, c, e, f) {
            var g = [];
            a = b.j(function () {
                var a = d(c, f) || [];
                0 < g.length && (b.a.Ya(M(g), a), e && b.r.K(e, p, [c, a, f]));
                g.splice(0, g.length);
                b.a.P(g, a)
            }, p, {
                W: a,
                Ka: function () {
                    return 0 == g.length || !b.a.X(g[0])
                }
            });
            return {
                M: g,
                j: a.pa() ? a : I
            }
        }
        function M(a) {
            for (; a.length && !b.a.X(a[0]);) a.splice(0, 1);
            if (1 < a.length) {
                for (var d = a[0], c = a[a.length - 1], e = [d]; d !== c;) {
                    d = d.nextSibling;
                    if (!d) return;
                    e.push(d)
                }
                Array.prototype.splice.apply(a, [0, a.length].concat(e))
            }
            return a
        }
        function S(a, b, c, e, f) {
            var g = Math.min,
                h = Math.max,
                k = [],
                l, n = a.length,
                q, s = b.length,
                v = s - n || 1,
                G = n + s + 1,
                J, A, z;
            for (l = 0; l <= n; l++) {
                A = J;
                k.push(J = []);
                z = g(s, l + v);
                for (q = h(0, l - 1); q <= z; q++) J[q] = q ? l ? a[l - 1] === b[q - 1] ? A[q - 1] : g(A[q] || G, J[q - 1] || G) + 1 : q + 1 : l + 1
            }
            g = [];
            h = [];
            v = [];
            l = n;
            for (q = s; l || q;) s = k[l][q] - 1, q && s === k[l][q - 1] ? h.push(g[g.length] = {
                    status: c,
                    value: b[--q],
                    index: q
                }) : l && s === k[l - 1][q] ? v.push(g[g.length] = {
                    status: e,
                    value: a[--l],
                    index: l
                }) : (g.push({
                    status: "retained",
                    value: b[--q]
                }), --l);
            if (h.length && v.length) {
                a = 10 * n;
                var t;
                for (b = c = 0;
                (f || b < a) && (t = h[c]); c++) {
                    for (e =
                        0; k = v[e]; e++) if (t.value === k.value) {
                            t.moved = k.index;
                            k.moved = t.index;
                            v.splice(e, 1);
                            b = e = 0;
                            break
                        }
                    b += e
                }
            }
            return g.reverse()
        }
        function T(a, d, c, e, f) {
            f = f || {};
            var g = a && N(a),
                g = g && g.ownerDocument,
                h = f.templateEngine || O;
            b.za.vb(c, h, g);
            c = h.renderTemplate(c, e, f, g);
            ("number" != typeof c.length || 0 < c.length && "number" != typeof c[0].nodeType) && j(Error("Template engine must return an array of DOM nodes"));
            g = r;
            switch (d) {
            case "replaceChildren":
                b.e.N(a, c);
                g = m;
                break;
            case "replaceNode":
                b.a.Ya(a, c);
                g = m;
                break;
            case "ignoreTargetNode":
                break;
            default:
                j(Error("Unknown renderMode: " + d))
            }
            g && (U(c, e), f.afterRender && b.r.K(f.afterRender, p, [c, e.$data]));
            return c
        }
        function N(a) {
            return a.nodeType ? a : 0 < a.length ? a[0] : p
        }
        function U(a, d) {
            if (a.length) {
                var c = a[0],
                    e = a[a.length - 1];
                V(c, e, function (a) {
                    b.Da(d, a)
                });
                V(c, e, function (a) {
                    b.s.ib(a, [d])
                })
            }
        }
        function V(a, d, c) {
            var e;
            for (d = b.e.nextSibling(d); a && (e = a) !== d;) a = b.e.nextSibling(e), (1 === e.nodeType || 8 === e.nodeType) && c(e)
        }
        function W(a, d, c) {
            a = b.g.aa(a);
            for (var e = b.g.Q, f = 0; f < a.length; f++) {
                var g = a[f].key;
                if (e.hasOwnProperty(g)) {
                    var h =
                        e[g];
                    "function" === typeof h ? (g = h(a[f].value)) && j(Error(g)) : h || j(Error("This template engine does not support the '" + g + "' binding within its templates"))
                }
            }
            a = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + b.g.ba(a) + " } })()})";
            return c.createJavaScriptEvaluatorBlock(a) + d
        }
        function X(a, d, c, e) {
            function f(a) {
                return function () {
                    return k[a]
                }
            }
            function g() {
                return k
            }
            var h = 0,
                k, l;
            b.j(function () {
                var n = c && c instanceof b.z ? c : new b.z(b.a.d(c)),
                    q = n.$data;
                e && b.eb(a, n);
                if (k = ("function" == typeof d ?
                    d(n, a) : d) || b.J.instance.getBindings(a, n)) {
                    if (0 === h) {
                        h = 1;
                        for (var s in k) {
                            var v = b.c[s];
                            v && 8 === a.nodeType && !b.e.I[s] && j(Error("The binding '" + s + "' cannot be used with virtual elements"));
                            if (v && "function" == typeof v.init && (v = (0, v.init)(a, f(s), g, q, n)) && v.controlsDescendantBindings) l !== I && j(Error("Multiple bindings (" + l + " and " + s + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")), l = s
                        }
                        h = 2
                    }
                    if (2 === h) for (s in k)(v = b.c[s]) && "function" ==
                                typeof v.update && (0, v.update)(a, f(s), g, q, n)
                }
            }, p, {
                W: a
            });
            return {
                Nb: l === I
            }
        }
        function Y(a, d, c) {
            var e = m,
                f = 1 === d.nodeType;
            f && b.e.Ta(d);
            if (f && c || b.J.instance.nodeHasBindings(d)) e = X(d, p, a, c).Nb;
            e && Z(a, d, !f)
        }
        function Z(a, d, c) {
            for (var e = b.e.firstChild(d); d = e;) e = b.e.nextSibling(d), Y(a, d, c)
        }
        function $(a, b) {
            var c = aa(a, b);
            return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : p
        }
        function aa(a, b) {
            for (var c = a, e = 1, f = []; c = c.nextSibling;) {
                if (H(c) && (e--, 0 === e)) return f;
                f.push(c);
                B(c) && e++
            }
            b || j(Error("Cannot find closing comment tag to match: " +
                a.nodeValue));
            return p
        }
        function H(a) {
            return 8 == a.nodeType && (K ? a.text : a.nodeValue).match(ia)
        }
        function B(a) {
            return 8 == a.nodeType && (K ? a.text : a.nodeValue).match(ja)
        }
        function P(a, b) {
            for (var c = p; a != c;) c = a, a = a.replace(ka, function (a, c) {
                    return b[c]
                });
            return a
        }
        function la() {
            var a = [],
                d = [];
            this.save = function (c, e) {
                var f = b.a.i(a, c);
                0 <= f ? d[f] = e : (a.push(c), d.push(e))
            };
            this.get = function (c) {
                c = b.a.i(a, c);
                return 0 <= c ? d[c] : I
            }
        }
        function ba(a, b, c) {
            function e(e) {
                var g = b(a[e]);
                switch (typeof g) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    f[e] =
                        g;
                    break;
                case "object":
                case "undefined":
                    var h = c.get(g);
                    f[e] = h !== I ? h : ba(g, b, c)
                }
            }
            c = c || new la;
            a = b(a);
            if (!("object" == typeof a && a !== p && a !== I && !(a instanceof Date))) return a;
            var f = a instanceof Array ? [] : {};
            c.save(a, f);
            var g = a;
            if (g instanceof Array) {
                for (var h = 0; h < g.length; h++) e(h);
                "function" == typeof g.toJSON && e("toJSON")
            } else for (h in g) e(h);
            return f
        }
        function ca(a, d) {
            if (a) if (8 == a.nodeType) {
                    var c = b.s.Ua(a.nodeValue);
                    c != p && d.push({
                        sb: a,
                        Fb: c
                    })
                } else if (1 == a.nodeType) for (var c = 0, e = a.childNodes, f = e.length; c < f; c++) ca(e[c],
                        d)
        }
        function Q(a, d, c, e) {
            b.c[a] = {
                init: function (a) {
                    b.a.f.set(a, da, {});
                    return {
                        controlsDescendantBindings: m
                    }
                },
                update: function (a, g, h, k, l) {
                    h = b.a.f.get(a, da);
                    g = b.a.d(g());
                    k = !c !== !g;
                    var n = !h.Za;
                    if (n || d || k !== h.qb) n && (h.Za = b.a.Ia(b.e.childNodes(a), m)), k ? (n || b.e.N(a, b.a.Ia(h.Za)), b.Ea(e ? e(l, g) : l, a)) : b.e.Y(a), h.qb = k
                }
            };
            b.g.Q[a] = r;
            b.e.I[a] = m
        }
        function ea(a, d, c) {
            c && d !== b.k.q(a) && b.k.T(a, d);
            d !== b.k.q(a) && b.r.K(b.a.Ba, p, [a, "change"])
        }
        var b = "undefined" !== typeof w ? w : {};
        b.b = function (a, d) {
            for (var c = a.split("."), e = b, f = 0; f <
                c.length - 1; f++) e = e[c[f]];
            e[c[c.length - 1]] = d
        };
        b.p = function (a, b, c) {
            a[b] = c
        };
        b.version = "2.2.1";
        b.b("version", b.version);
        b.a = new function () {
            function a(a, d) {
                if ("input" !== b.a.u(a) || !a.type || "click" != d.toLowerCase()) return r;
                var c = a.type;
                return "checkbox" == c || "radio" == c
            }
            var d = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
                c = {}, e = {};
            c[/Firefox\/2/i.test(ga.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
            c.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
            for (var f in c) {
                var g = c[f];
                if (g.length) for (var h = 0, k = g.length; h < k; h++) e[g[h]] = f
            }
            var l = {
                propertychange: m
            }, n, c = 3;
            f = y.createElement("div");
            for (g = f.getElementsByTagName("i"); f.innerHTML = "\x3c!--[if gt IE " + ++c + "]><i></i><![endif]--\x3e", g[0];);
            n = 4 < c ? c : I;
            return {
                Na: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                o: function (a, b) {
                    for (var d = 0, c = a.length; d < c; d++) b(a[d])
                },
                i: function (a, b) {
                    if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                    for (var d = 0, c = a.length; d <
                        c; d++) if (a[d] === b) return d;
                    return -1
                },
                lb: function (a, b, d) {
                    for (var c = 0, e = a.length; c < e; c++) if (b.call(d, a[c])) return a[c];
                    return p
                },
                ga: function (a, d) {
                    var c = b.a.i(a, d);
                    0 <= c && a.splice(c, 1)
                },
                Ga: function (a) {
                    a = a || [];
                    for (var d = [], c = 0, e = a.length; c < e; c++) 0 > b.a.i(d, a[c]) && d.push(a[c]);
                    return d
                },
                V: function (a, b) {
                    a = a || [];
                    for (var d = [], c = 0, e = a.length; c < e; c++) d.push(b(a[c]));
                    return d
                },
                fa: function (a, b) {
                    a = a || [];
                    for (var d = [], c = 0, e = a.length; c < e; c++) b(a[c]) && d.push(a[c]);
                    return d
                },
                P: function (a, b) {
                    if (b instanceof Array) a.push.apply(a,
                            b);
                    else for (var d = 0, c = b.length; d < c; d++) a.push(b[d]);
                    return a
                },
                extend: function (a, b) {
                    if (b) for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
                    return a
                },
                ka: function (a) {
                    for (; a.firstChild;) b.removeNode(a.firstChild)
                },
                Hb: function (a) {
                    a = b.a.L(a);
                    for (var d = y.createElement("div"), c = 0, e = a.length; c < e; c++) d.appendChild(b.A(a[c]));
                    return d
                },
                Ia: function (a, d) {
                    for (var c = 0, e = a.length, g = []; c < e; c++) {
                        var f = a[c].cloneNode(m);
                        g.push(d ? b.A(f) : f)
                    }
                    return g
                },
                N: function (a, d) {
                    b.a.ka(a);
                    if (d) for (var c = 0, e = d.length; c < e; c++) a.appendChild(d[c])
                },
                Ya: function (a, d) {
                    var c = a.nodeType ? [a] : a;
                    if (0 < c.length) {
                        for (var e = c[0], g = e.parentNode, f = 0, h = d.length; f < h; f++) g.insertBefore(d[f], e);
                        f = 0;
                        for (h = c.length; f < h; f++) b.removeNode(c[f])
                    }
                },
                bb: function (a, b) {
                    7 > n ? a.setAttribute("selected", b) : a.selected = b
                },
                D: function (a) {
                    return (a || "").replace(d, "")
                },
                Rb: function (a, d) {
                    for (var c = [], e = (a || "").split(d), f = 0, g = e.length; f < g; f++) {
                        var h = b.a.D(e[f]);
                        "" !== h && c.push(h)
                    }
                    return c
                },
                Ob: function (a, b) {
                    a = a || "";
                    return b.length > a.length ? r : a.substring(0, b.length) === b
                },
                tb: function (a, b) {
                    if (b.compareDocumentPosition) return 16 ==
                            (b.compareDocumentPosition(a) & 16);
                    for (; a != p;) {
                        if (a == b) return m;
                        a = a.parentNode
                    }
                    return r
                },
                X: function (a) {
                    return b.a.tb(a, a.ownerDocument)
                },
                u: function (a) {
                    return a && a.tagName && a.tagName.toLowerCase()
                },
                n: function (b, d, c) {
                    var e = n && l[d];
                    if (!e && "undefined" != typeof F) {
                        if (a(b, d)) {
                            var f = c;
                            c = function (a, b) {
                                var d = this.checked;
                                b && (this.checked = b.nb !== m);
                                f.call(this, a);
                                this.checked = d
                            }
                        }
                        F(b).bind(d, c)
                    } else !e && "function" == typeof b.addEventListener ? b.addEventListener(d, c, r) : "undefined" != typeof b.attachEvent ? b.attachEvent("on" +
                        d, function (a) {
                        c.call(b, a)
                    }) : j(Error("Browser doesn't support addEventListener or attachEvent"))
                },
                Ba: function (b, d) {
                    (!b || !b.nodeType) && j(Error("element must be a DOM node when calling triggerEvent"));
                    if ("undefined" != typeof F) {
                        var c = [];
                        a(b, d) && c.push({
                            nb: b.checked
                        });
                        F(b).trigger(d, c)
                    } else "function" == typeof y.createEvent ? "function" == typeof b.dispatchEvent ? (c = y.createEvent(e[d] || "HTMLEvents"), c.initEvent(d, m, m, x, 0, 0, 0, 0, 0, r, r, r, r, 0, b), b.dispatchEvent(c)) : j(Error("The supplied element doesn't support dispatchEvent")) :
                            "undefined" != typeof b.fireEvent ? (a(b, d) && (b.checked = b.checked !== m), b.fireEvent("on" + d)) : j(Error("Browser doesn't support triggering events"))
                },
                d: function (a) {
                    return b.$(a) ? a() : a
                },
                ua: function (a) {
                    return b.$(a) ? a.t() : a
                },
                da: function (a, d, c) {
                    if (d) {
                        var e = /[\w-]+/g,
                            f = a.className.match(e) || [];
                        b.a.o(d.match(e), function (a) {
                            var d = b.a.i(f, a);
                            0 <= d ? c || f.splice(d, 1) : c && f.push(a)
                        });
                        a.className = f.join(" ")
                    }
                },
                cb: function (a, d) {
                    var c = b.a.d(d);
                    if (c === p || c === I) c = "";
                    if (3 === a.nodeType) a.data = c;
                    else {
                        var e = b.e.firstChild(a);
                        !e || 3 != e.nodeType || b.e.nextSibling(e) ? b.e.N(a, [y.createTextNode(c)]) : e.data = c;
                        b.a.wb(a)
                    }
                },
                ab: function (a, b) {
                    a.name = b;
                    if (7 >= n) try {
                            a.mergeAttributes(y.createElement("<input name='" + a.name + "'/>"), r)
                    } catch (d) {}
                },
                wb: function (a) {
                    9 <= n && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                },
                ub: function (a) {
                    if (9 <= n) {
                        var b = a.style.width;
                        a.style.width = 0;
                        a.style.width = b
                    }
                },
                Lb: function (a, d) {
                    a = b.a.d(a);
                    d = b.a.d(d);
                    for (var c = [], e = a; e <= d; e++) c.push(e);
                    return c
                },
                L: function (a) {
                    for (var b = [], d = 0, c = a.length; d <
                        c; d++) b.push(a[d]);
                    return b
                },
                Pb: 6 === n,
                Qb: 7 === n,
                Z: n,
                Oa: function (a, d) {
                    for (var c = b.a.L(a.getElementsByTagName("input")).concat(b.a.L(a.getElementsByTagName("textarea"))), e = "string" == typeof d ? function (a) {
                            return a.name === d
                        } : function (a) {
                            return d.test(a.name)
                        }, f = [], g = c.length - 1; 0 <= g; g--) e(c[g]) && f.push(c[g]);
                    return f
                },
                Ib: function (a) {
                    return "string" == typeof a && (a = b.a.D(a)) ? x.JSON && x.JSON.parse ? x.JSON.parse(a) : (new Function("return " + a))() : p
                },
                xa: function (a, d, c) {
                    ("undefined" == typeof JSON || "undefined" == typeof JSON.stringify) &&
                        j(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
                    return JSON.stringify(b.a.d(a), d, c)
                },
                Jb: function (a, d, c) {
                    c = c || {};
                    var e = c.params || {}, f = c.includeFields || this.Na,
                        g = a;
                    if ("object" == typeof a && "form" === b.a.u(a)) for (var g = a.action, h = f.length - 1; 0 <= h; h--) for (var k = b.a.Oa(a, f[h]), l = k.length - 1; 0 <= l; l--) e[k[l].name] = k[l].value;
                    d = b.a.d(d);
                    var n = y.createElement("form");
                    n.style.display = "none";
                    n.action = g;
                    n.method = "post";
                    for (var w in d) a = y.createElement("input"), a.name = w, a.value = b.a.xa(b.a.d(d[w])), n.appendChild(a);
                    for (w in e) a = y.createElement("input"), a.name = w, a.value = e[w], n.appendChild(a);
                    y.body.appendChild(n);
                    c.submitter ? c.submitter(n) : n.submit();
                    setTimeout(function () {
                        n.parentNode.removeChild(n)
                    }, 0)
                }
            }
        };
        b.b("utils", b.a);
        b.b("utils.arrayForEach", b.a.o);
        b.b("utils.arrayFirst", b.a.lb);
        b.b("utils.arrayFilter", b.a.fa);
        b.b("utils.arrayGetDistinctValues", b.a.Ga);
        b.b("utils.arrayIndexOf",
            b.a.i);
        b.b("utils.arrayMap", b.a.V);
        b.b("utils.arrayPushAll", b.a.P);
        b.b("utils.arrayRemoveItem", b.a.ga);
        b.b("utils.extend", b.a.extend);
        b.b("utils.fieldsIncludedWithJsonPost", b.a.Na);
        b.b("utils.getFormFields", b.a.Oa);
        b.b("utils.peekObservable", b.a.ua);
        b.b("utils.postJson", b.a.Jb);
        b.b("utils.parseJson", b.a.Ib);
        b.b("utils.registerEventHandler", b.a.n);
        b.b("utils.stringifyJson", b.a.xa);
        b.b("utils.range", b.a.Lb);
        b.b("utils.toggleDomNodeCssClass", b.a.da);
        b.b("utils.triggerEvent", b.a.Ba);
        b.b("utils.unwrapObservable",
            b.a.d);
        Function.prototype.bind || (Function.prototype.bind = function (a) {
            var b = this,
                c = Array.prototype.slice.call(arguments);
            a = c.shift();
            return function () {
                return b.apply(a, c.concat(Array.prototype.slice.call(arguments)))
            }
        });
        b.a.f = new function () {
            var a = 0,
                d = "__ko__" + (new Date).getTime(),
                c = {};
            return {
                get: function (a, d) {
                    var c = b.a.f.la(a, r);
                    return c === I ? I : c[d]
                },
                set: function (a, d, c) {
                    c === I && b.a.f.la(a, r) === I || (b.a.f.la(a, m)[d] = c)
                },
                la: function (b, f) {
                    var g = b[d];
                    if (!g || !("null" !== g && c[g])) {
                        if (!f) return I;
                        g = b[d] = "ko" +
                            a++;
                        c[g] = {}
                    }
                    return c[g]
                },
                clear: function (a) {
                    var b = a[d];
                    return b ? (delete c[b], a[d] = p, m) : r
                }
            }
        };
        b.b("utils.domData", b.a.f);
        b.b("utils.domData.clear", b.a.f.clear);
        b.a.F = new function () {
            function a(a, d) {
                var e = b.a.f.get(a, c);
                e === I && d && (e = [], b.a.f.set(a, c, e));
                return e
            }
            function d(c) {
                var e = a(c, r);
                if (e) for (var e = e.slice(0), k = 0; k < e.length; k++) e[k](c);
                b.a.f.clear(c);
                "function" == typeof F && "function" == typeof F.cleanData && F.cleanData([c]);
                if (f[c.nodeType]) for (e = c.firstChild; c = e;) e = c.nextSibling, 8 === c.nodeType && d(c)
            }
            var c = "__ko_domNodeDisposal__" + (new Date).getTime(),
                e = {
                    1: m,
                    8: m,
                    9: m
                }, f = {
                    1: m,
                    9: m
                };
            return {
                Ca: function (b, d) {
                    "function" != typeof d && j(Error("Callback must be a function"));
                    a(b, m).push(d)
                },
                Xa: function (d, e) {
                    var f = a(d, r);
                    f && (b.a.ga(f, e), 0 == f.length && b.a.f.set(d, c, I))
                },
                A: function (a) {
                    if (e[a.nodeType] && (d(a), f[a.nodeType])) {
                        var c = [];
                        b.a.P(c, a.getElementsByTagName("*"));
                        for (var k = 0, l = c.length; k < l; k++) d(c[k])
                    }
                    return a
                },
                removeNode: function (a) {
                    b.A(a);
                    a.parentNode && a.parentNode.removeChild(a)
                }
            }
        };
        b.A = b.a.F.A;
        b.removeNode =
            b.a.F.removeNode;
        b.b("cleanNode", b.A);
        b.b("removeNode", b.removeNode);
        b.b("utils.domNodeDisposal", b.a.F);
        b.b("utils.domNodeDisposal.addDisposeCallback", b.a.F.Ca);
        b.b("utils.domNodeDisposal.removeDisposeCallback", b.a.F.Xa);
        b.a.ta = function (a) {
            var d;
            if ("undefined" != typeof F) if (F.parseHTML) d = F.parseHTML(a);
                else {
                    if ((d = F.clean([a])) && d[0]) {
                        for (a = d[0]; a.parentNode && 11 !== a.parentNode.nodeType;) a = a.parentNode;
                        a.parentNode && a.parentNode.removeChild(a)
                    }
                } else {
                    var c = b.a.D(a).toLowerCase();
                    d = y.createElement("div");
                    c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                    a = "ignored<div>" + c[1] + a + c[2] + "</div>";
                    for ("function" == typeof x.innerShiv ? d.appendChild(x.innerShiv(a)) : d.innerHTML = a; c[0]--;) d = d.lastChild;
                    d = b.a.L(d.lastChild.childNodes)
                }
            return d
        };
        b.a.ca = function (a, d) {
            b.a.ka(a);
            d = b.a.d(d);
            if (d !== p && d !== I) if ("string" != typeof d && (d = d.toString()),
                    "undefined" != typeof F) F(a).html(d);
                else for (var c = b.a.ta(d), e = 0; e < c.length; e++) a.appendChild(c[e])
        };
        b.b("utils.parseHtmlFragment", b.a.ta);
        b.b("utils.setHtml", b.a.ca);
        var R = {};
        b.s = {
            ra: function (a) {
                "function" != typeof a && j(Error("You can only pass a function to ko.memoization.memoize()"));
                var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                R[b] = a;
                return "\x3c!--[ko_memo:" + b + "]--\x3e"
            },
            hb: function (a, b) {
                var c = R[a];
                c === I && j(Error("Couldn't find any memo with ID " +
                    a + ". Perhaps it's already been unmemoized."));
                try {
                    return c.apply(p, b || []), m
                } catch(err) {
                } finally {
                    delete R[a]
                }
            },
            ib: function (a, d) {
                var c = [];
                ca(a, c);
                for (var e = 0, f = c.length; e < f; e++) {
                    var g = c[e].sb,
                        h = [g];
                    d && b.a.P(h, d);
                    b.s.hb(c[e].Fb, h);
                    g.nodeValue = "";
                    g.parentNode && g.parentNode.removeChild(g)
                }
            },
            Ua: function (a) {
                return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : p
            }
        };
        b.b("memoization", b.s);
        b.b("memoization.memoize", b.s.ra);
        b.b("memoization.unmemoize", b.s.hb);
        b.b("memoization.parseMemoText", b.s.Ua);
        b.b("memoization.unmemoizeDomNodeAndDescendants",
            b.s.ib);
        b.Ma = {
            throttle: function (a, d) {
                a.throttleEvaluation = d;
                var c = p;
                return b.j({
                    read: a,
                    write: function (b) {
                        clearTimeout(c);
                        c = setTimeout(function () {
                            a(b)
                        }, d)
                    }
                })
            },
            notify: function (a, d) {
                a.equalityComparer = "always" == d ? u(r) : b.m.fn.equalityComparer;
                return a
            }
        };
        b.b("extenders", b.Ma);
        b.fb = function (a, d, c) {
            this.target = a;
            this.ha = d;
            this.rb = c;
            b.p(this, "dispose", this.B)
        };
        b.fb.prototype.B = function () {
            this.Cb = m;
            this.rb()
        };
        b.S = function () {
            this.w = {};
            b.a.extend(this, b.S.fn);
            b.p(this, "subscribe", this.ya);
            b.p(this, "extend",
                this.extend);
            b.p(this, "getSubscriptionsCount", this.yb)
        };
        b.S.fn = {
            ya: function (a, d, c) {
                c = c || "change";
                var e = new b.fb(this, d ? a.bind(d) : a, function () {
                    b.a.ga(this.w[c], e)
                }.bind(this));
                this.w[c] || (this.w[c] = []);
                this.w[c].push(e);
                return e
            },
            notifySubscribers: function (a, d) {
                d = d || "change";
                this.w[d] && b.r.K(function () {
                    b.a.o(this.w[d].slice(0), function (b) {
                        b && b.Cb !== m && b.ha(a)
                    })
                }, this)
            },
            yb: function () {
                var a = 0,
                    b;
                for (b in this.w) this.w.hasOwnProperty(b) && (a += this.w[b].length);
                return a
            },
            extend: function (a) {
                var d = this;
                if (a) for (var c in a) {
                        var e =
                            b.Ma[c];
                        "function" == typeof e && (d = e(d, a[c]))
                }
                return d
            }
        };
        b.Qa = function (a) {
            return "function" == typeof a.ya && "function" == typeof a.notifySubscribers
        };
        b.b("subscribable", b.S);
        b.b("isSubscribable", b.Qa);
        var C = [];
        b.r = {
            mb: function (a) {
                C.push({
                    ha: a,
                    La: []
                })
            },
            end: function () {
                C.pop()
            },
            Wa: function (a) {
                b.Qa(a) || j(Error("Only subscribable things can act as dependencies"));
                if (0 < C.length) {
                    var d = C[C.length - 1];
                    d && !(0 <= b.a.i(d.La, a)) && (d.La.push(a), d.ha(a))
                }
            },
            K: function (a, b, c) {
                try {
                    return C.push(p), a.apply(b, c || [])
                } catch(err) {
                } finally {
                    C.pop()
                }
            }
        };
        var ma = {
            undefined: m,
            "boolean": m,
            number: m,
            string: m
        };
        b.m = function (a) {
            function d() {
                if (0 < arguments.length) {
                    if (!d.equalityComparer || !d.equalityComparer(c, arguments[0])) d.H(), c = arguments[0], d.G();
                    return this
                }
                b.r.Wa(d);
                return c
            }
            var c = a;
            b.S.call(d);
            d.t = function () {
                return c
            };
            d.G = function () {
                d.notifySubscribers(c)
            };
            d.H = function () {
                d.notifySubscribers(c, "beforeChange")
            };
            b.a.extend(d, b.m.fn);
            b.p(d, "peek", d.t);
            b.p(d, "valueHasMutated", d.G);
            b.p(d, "valueWillMutate", d.H);
            return d
        };
        b.m.fn = {
            equalityComparer: function (a,
                b) {
                return a === p || typeof a in ma ? a === b : r
            }
        };
        var E = b.m.Kb = "__ko_proto__";
        b.m.fn[E] = b.m;
        b.ma = function (a, d) {
            return a === p || a === I || a[E] === I ? r : a[E] === d ? m : b.ma(a[E], d)
        };
        b.$ = function (a) {
            return b.ma(a, b.m)
        };
        b.Ra = function (a) {
            return "function" == typeof a && a[E] === b.m || "function" == typeof a && a[E] === b.j && a.zb ? m : r
        };
        b.b("observable", b.m);
        b.b("isObservable", b.$);
        b.b("isWriteableObservable", b.Ra);
        b.R = function (a) {
            0 == arguments.length && (a = []);
            a !== p && (a !== I && !("length" in a)) && j(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));
            var d = b.m(a);
            b.a.extend(d, b.R.fn);
            return d
        };
        b.R.fn = {
            remove: function (a) {
                for (var b = this.t(), c = [], e = "function" == typeof a ? a : function (b) {
                        return b === a
                    }, f = 0; f < b.length; f++) {
                    var g = b[f];
                    e(g) && (0 === c.length && this.H(), c.push(g), b.splice(f, 1), f--)
                }
                c.length && this.G();
                return c
            },
            removeAll: function (a) {
                if (a === I) {
                    var d = this.t(),
                        c = d.slice(0);
                    this.H();
                    d.splice(0, d.length);
                    this.G();
                    return c
                }
                return !a ? [] : this.remove(function (d) {
                    return 0 <= b.a.i(a, d)
                })
            },
            destroy: function (a) {
                var b = this.t(),
                    c = "function" == typeof a ? a : function (b) {
                        return b ===
                            a
                    };
                this.H();
                for (var e = b.length - 1; 0 <= e; e--) c(b[e]) && (b[e]._destroy = m);
                this.G()
            },
            destroyAll: function (a) {
                return a === I ? this.destroy(u(m)) : !a ? [] : this.destroy(function (d) {
                    return 0 <= b.a.i(a, d)
                })
            },
            indexOf: function (a) {
                var d = this();
                return b.a.i(d, a)
            },
            replace: function (a, b) {
                var c = this.indexOf(a);
                0 <= c && (this.H(), this.t()[c] = b, this.G())
            }
        };
        b.a.o("pop push reverse shift sort splice unshift".split(" "), function (a) {
            b.R.fn[a] = function () {
                var b = this.t();
                this.H();
                b = b[a].apply(b, arguments);
                this.G();
                return b
            }
        });
        b.a.o(["slice"], function (a) {
            b.R.fn[a] = function () {
                var b = this();
                return b[a].apply(b, arguments)
            }
        });
        b.b("observableArray", b.R);
        b.j = function (a, d, c) {
            function e() {
                b.a.o(z, function (a) {
                    a.B()
                });
                z = []
            }
            function f() {
                var a = h.throttleEvaluation;
                a && 0 <= a ? (clearTimeout(t), t = setTimeout(g, a)) : g()
            }
            function g() {
                if (!q) if (n && w()) A();
                    else {
                        q = m;
                        try {
                            var a = b.a.V(z, function (a) {
                                return a.target
                            });
                            b.r.mb(function (c) {
                                var d;
                                0 <= (d = b.a.i(a, c)) ? a[d] = I : z.push(c.ya(f))
                            });
                            for (var c = s.call(d), e = a.length - 1; 0 <= e; e--) a[e] && z.splice(e, 1)[0].B();
                            n = m;
                            h.notifySubscribers(l,
                                "beforeChange");
                            l = c
                        } catch(err) {
                        } finally {
                            b.r.end()
                        }
                        h.notifySubscribers(l);
                        q = r;
                        z.length || A()
                    }
            }
            function h() {
                if (0 < arguments.length) return "function" === typeof v ? v.apply(d, arguments) : j(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")), this;
                n || g();
                b.r.Wa(h);
                return l
            }
            function k() {
                return !n || 0 < z.length
            }
            var l, n = r,
                q = r,
                s = a;
            s && "object" == typeof s ? (c = s, s = c.read) : (c = c || {}, s || (s = c.read));
            "function" != typeof s && j(Error("Pass a function that returns the value of the ko.computed"));
            var v = c.write,
                G = c.disposeWhenNodeIsRemoved || c.W || p,
                w = c.disposeWhen || c.Ka || u(r),
                A = e,
                z = [],
                t = p;
            d || (d = c.owner);
            h.t = function () {
                n || g();
                return l
            };
            h.xb = function () {
                return z.length
            };
            h.zb = "function" === typeof c.write;
            h.B = function () {
                A()
            };
            h.pa = k;
            b.S.call(h);
            b.a.extend(h, b.j.fn);
            b.p(h, "peek", h.t);
            b.p(h, "dispose", h.B);
            b.p(h, "isActive", h.pa);
            b.p(h, "getDependenciesCount", h.xb);
            c.deferEvaluation !== m && g();
            if (G && k()) {
                A = function () {
                    b.a.F.Xa(G, arguments.callee);
                    e()
                };
                b.a.F.Ca(G, A);
                var D = w,
                    w = function () {
                        return !b.a.X(G) || D()
                    }
            }
            return h
        };
        b.Bb = function (a) {
            return b.ma(a, b.j)
        };
        w = b.m.Kb;
        b.j[w] = b.m;
        b.j.fn = {};
        b.j.fn[w] = b.j;
        b.b("dependentObservable", b.j);
        b.b("computed", b.j);
        b.b("isComputed", b.Bb);
        b.gb = function (a) {
            0 == arguments.length && j(Error("When calling ko.toJS, pass the object you want to convert."));
            return ba(a, function (a) {
                for (var c = 0; b.$(a) && 10 > c; c++) a = a();
                return a
            })
        };
        b.toJSON = function (a, d, c) {
            a = b.gb(a);
            return b.a.xa(a, d, c)
        };
        b.b("toJS", b.gb);
        b.b("toJSON", b.toJSON);
        b.k = {
            q: function (a) {
                switch (b.a.u(a)) {
                case "option":
                    return a.__ko__hasDomDataOptionValue__ ===
                        m ? b.a.f.get(a, b.c.options.sa) : 7 >= b.a.Z ? a.getAttributeNode("value").specified ? a.value : a.text : a.value;
                case "select":
                    return 0 <= a.selectedIndex ? b.k.q(a.options[a.selectedIndex]) : I;
                default:
                    return a.value
                }
            },
            T: function (a, d) {
                switch (b.a.u(a)) {
                case "option":
                    switch (typeof d) {
                    case "string":
                        b.a.f.set(a, b.c.options.sa, I);
                        "__ko__hasDomDataOptionValue__" in a && delete a.__ko__hasDomDataOptionValue__;
                        a.value = d;
                        break;
                    default:
                        b.a.f.set(a, b.c.options.sa, d), a.__ko__hasDomDataOptionValue__ = m, a.value = "number" === typeof d ?
                            d : ""
                    }
                    break;
                case "select":
                    for (var c = a.options.length - 1; 0 <= c; c--) if (b.k.q(a.options[c]) == d) {
                            a.selectedIndex = c;
                            break
                        }
                    break;
                default:
                    if (d === p || d === I) d = "";
                    a.value = d
                }
            }
        };
        b.b("selectExtensions", b.k);
        b.b("selectExtensions.readValue", b.k.q);
        b.b("selectExtensions.writeValue", b.k.T);
        var ka = /\@ko_token_(\d+)\@/g,
            na = ["true", "false"],
            oa = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;
        b.g = {
            Q: [],
            aa: function (a) {
                var d = b.a.D(a);
                if (3 > d.length) return [];
                "{" === d.charAt(0) && (d = d.substring(1, d.length - 1));
                a = [];
                for (var c =
                    p, e, f = 0; f < d.length; f++) {
                    var g = d.charAt(f);
                    if (c === p) switch (g) {
                        case '"':
                        case "'":
                        case "/":
                            c = f, e = g
                    } else if (g == e && "\\" !== d.charAt(f - 1)) {
                        g = d.substring(c, f + 1);
                        a.push(g);
                        var h = "@ko_token_" + (a.length - 1) + "@",
                            d = d.substring(0, c) + h + d.substring(f + 1),
                            f = f - (g.length - h.length),
                            c = p
                    }
                }
                e = c = p;
                for (var k = 0, l = p, f = 0; f < d.length; f++) {
                    g = d.charAt(f);
                    if (c === p) switch (g) {
                        case "{":
                            c = f;
                            l = g;
                            e = "}";
                            break;
                        case "(":
                            c = f;
                            l = g;
                            e = ")";
                            break;
                        case "[":
                            c = f, l = g, e = "]"
                    }
                    g === l ? k++ : g === e && (k--, 0 === k && (g = d.substring(c, f + 1), a.push(g), h = "@ko_token_" + (a.length -
                        1) + "@", d = d.substring(0, c) + h + d.substring(f + 1), f -= g.length - h.length, c = p))
                }
                e = [];
                d = d.split(",");
                c = 0;
                for (f = d.length; c < f; c++) k = d[c], l = k.indexOf(":"), 0 < l && l < k.length - 1 ? (g = k.substring(l + 1), e.push({
                        key: P(k.substring(0, l), a),
                        value: P(g, a)
                    })) : e.push({
                        unknown: P(k, a)
                    });
                return e
            },
            ba: function (a) {
                var d = "string" === typeof a ? b.g.aa(a) : a,
                    c = [];
                a = [];
                for (var e, f = 0; e = d[f]; f++) if (0 < c.length && c.push(","), e.key) {
                        var g;
                        a: {
                            g = e.key;
                            var h = b.a.D(g);
                            switch (h.length && h.charAt(0)) {
                            case "'":
                            case '"':
                                break a;
                            default:
                                g = "'" + h + "'"
                            }
                        }
                        e = e.value;
                        c.push(g);
                        c.push(":");
                        c.push(e);
                        e = b.a.D(e);
                        0 <= b.a.i(na, b.a.D(e).toLowerCase()) ? e = r : (h = e.match(oa), e = h === p ? r : h[1] ? "Object(" + h[1] + ")" + h[2] : e);
                        e && (0 < a.length && a.push(", "), a.push(g + " : function(__ko_value) { " + e + " = __ko_value; }"))
                    } else e.unknown && c.push(e.unknown);
                d = c.join("");
                0 < a.length && (d = d + ", '_ko_property_writers' : { " + a.join("") + " } ");
                return d
            },
            Eb: function (a, d) {
                for (var c = 0; c < a.length; c++) if (b.a.D(a[c].key) == d) return m;
                return r
            },
            ea: function (a, d, c, e, f) {
                if (!a || !b.Ra(a)) {
                    if ((a = d()._ko_property_writers) &&
                        a[c]) a[c](e)
                } else(!f || a.t() !== e) && a(e)
            }
        };
        b.b("expressionRewriting", b.g);
        b.b("expressionRewriting.bindingRewriteValidators", b.g.Q);
        b.b("expressionRewriting.parseObjectLiteral", b.g.aa);
        b.b("expressionRewriting.preProcessBindings", b.g.ba);
        b.b("jsonExpressionRewriting", b.g);
        b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", b.g.ba);
        var K = "\x3c!--test--\x3e" === y.createComment("test").text,
            ja = K ? /^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/,
            ia = K ? /^\x3c!--\s*\/ko\s*--\x3e$/ :
                /^\s*\/ko\s*$/,
            pa = {
                ul: m,
                ol: m
            };
        b.e = {
            I: {},
            childNodes: function (a) {
                return B(a) ? aa(a) : a.childNodes
            },
            Y: function (a) {
                if (B(a)) {
                    a = b.e.childNodes(a);
                    for (var d = 0, c = a.length; d < c; d++) b.removeNode(a[d])
                } else b.a.ka(a)
            },
            N: function (a, d) {
                if (B(a)) {
                    b.e.Y(a);
                    for (var c = a.nextSibling, e = 0, f = d.length; e < f; e++) c.parentNode.insertBefore(d[e], c)
                } else b.a.N(a, d)
            },
            Va: function (a, b) {
                B(a) ? a.parentNode.insertBefore(b, a.nextSibling) : a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b)
            },
            Pa: function (a, d, c) {
                c ? B(a) ? a.parentNode.insertBefore(d,
                    c.nextSibling) : c.nextSibling ? a.insertBefore(d, c.nextSibling) : a.appendChild(d) : b.e.Va(a, d)
            },
            firstChild: function (a) {
                return !B(a) ? a.firstChild : !a.nextSibling || H(a.nextSibling) ? p : a.nextSibling
            },
            nextSibling: function (a) {
                B(a) && (a = $(a));
                return a.nextSibling && H(a.nextSibling) ? p : a.nextSibling
            },
            jb: function (a) {
                return (a = B(a)) ? a[1] : p
            },
            Ta: function (a) {
                if (pa[b.a.u(a)]) {
                    var d = a.firstChild;
                    if (d) {
                        do if (1 === d.nodeType) {
                                var c;
                                c = d.firstChild;
                                var e = p;
                                if (c) {
                                    do if (e) e.push(c);
                                        else if (B(c)) {
                                        var f = $(c, m);
                                        f ? c = f : e = [c]
                                    } else H(c) &&
                                            (e = [c]);
                                    while (c = c.nextSibling)
                                }
                                if (c = e) {
                                    e = d.nextSibling;
                                    for (f = 0; f < c.length; f++) e ? a.insertBefore(c[f], e) : a.appendChild(c[f])
                                }
                            } while (d = d.nextSibling)
                    }
                }
            }
        };
        b.b("virtualElements", b.e);
        b.b("virtualElements.allowedBindings", b.e.I);
        b.b("virtualElements.emptyNode", b.e.Y);
        b.b("virtualElements.insertAfter", b.e.Pa);
        b.b("virtualElements.prepend", b.e.Va);
        b.b("virtualElements.setDomNodeChildren", b.e.N);
        b.J = function () {
            this.Ha = {}
        };
        b.a.extend(b.J.prototype, {
            nodeHasBindings: function (a) {
                switch (a.nodeType) {
                case 1:
                    return a.getAttribute("data-bind") !=
                        p;
                case 8:
                    return b.e.jb(a) != p;
                default:
                    return r
                }
            },
            getBindings: function (a, b) {
                var c = this.getBindingsString(a, b);
                return c ? this.parseBindingsString(c, b, a) : p
            },
            getBindingsString: function (a) {
                switch (a.nodeType) {
                case 1:
                    return a.getAttribute("data-bind");
                case 8:
                    return b.e.jb(a);
                default:
                    return p
                }
            },
            parseBindingsString: function (a, d, c) {
                try {
                    var e;
                    if (!(e = this.Ha[a])) {
                        var f = this.Ha,
                            g, h = "with($context){with($data||{}){return{" + b.g.ba(a) + "}}}";
                        g = new Function("$context", "$element", h);
                        e = f[a] = g
                    }
                    return e(d, c)
                } catch (k) {
                    j(Error("Unable to parse bindings.\nMessage: " +
                        k + ";\nBindings value: " + a))
                }
            }
        });
        b.J.instance = new b.J;
        b.b("bindingProvider", b.J);
        b.c = {};
        b.z = function (a, d, c) {
            d ? (b.a.extend(this, d), this.$parentContext = d, this.$parent = d.$data, this.$parents = (d.$parents || []).slice(0), this.$parents.unshift(this.$parent)) : (this.$parents = [], this.$root = a, this.ko = b);
            this.$data = a;
            c && (this[c] = a)
        };
        b.z.prototype.createChildContext = function (a, d) {
            return new b.z(a, this, d)
        };
        b.z.prototype.extend = function (a) {
            var d = b.a.extend(new b.z, this);
            return b.a.extend(d, a)
        };
        b.eb = function (a, d) {
            if (2 ==
                arguments.length) b.a.f.set(a, "__ko_bindingContext__", d);
            else return b.a.f.get(a, "__ko_bindingContext__")
        };
        b.Fa = function (a, d, c) {
            1 === a.nodeType && b.e.Ta(a);
            return X(a, d, c, m)
        };
        b.Ea = function (a, b) {
            (1 === b.nodeType || 8 === b.nodeType) && Z(a, b, m)
        };
        b.Da = function (a, b) {
            b && (1 !== b.nodeType && 8 !== b.nodeType) && j(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));
            b = b || x.document.body;
            Y(a, b, m)
        };
        b.ja = function (a) {
            switch (a.nodeType) {
            case 1:
            case 8:
                var d = b.eb(a);
                if (d) return d;
                if (a.parentNode) return b.ja(a.parentNode)
            }
            return I
        };
        b.pb = function (a) {
            return (a = b.ja(a)) ? a.$data : I
        };
        b.b("bindingHandlers", b.c);
        b.b("applyBindings", b.Da);
        b.b("applyBindingsToDescendants", b.Ea);
        b.b("applyBindingsToNode", b.Fa);
        b.b("contextFor", b.ja);
        b.b("dataFor", b.pb);
        var fa = {
            "class": "className",
            "for": "htmlFor"
        };
        b.c.attr = {
            update: function (a, d) {
                var c = b.a.d(d()) || {}, e;
                for (e in c) if ("string" == typeof e) {
                        var f = b.a.d(c[e]),
                            g = f === r || f === p || f === I;
                        g && a.removeAttribute(e);
                        8 >= b.a.Z && e in fa ? (e = fa[e], g ? a.removeAttribute(e) :
                            a[e] = f) : g || a.setAttribute(e, f.toString());
                        "name" === e && b.a.ab(a, g ? "" : f.toString())
                    }
            }
        };
        b.c.checked = {
            init: function (a, d, c) {
                b.a.n(a, "click", function () {
                    var e;
                    if ("checkbox" == a.type) e = a.checked;
                    else if ("radio" == a.type && a.checked) e = a.value;
                    else return;
                    var f = d(),
                        g = b.a.d(f);
                    "checkbox" == a.type && g instanceof Array ? (e = b.a.i(g, a.value), a.checked && 0 > e ? f.push(a.value) : !a.checked && 0 <= e && f.splice(e, 1)) : b.g.ea(f, c, "checked", e, m)
                });
                "radio" == a.type && !a.name && b.c.uniqueName.init(a, u(m))
            },
            update: function (a, d) {
                var c = b.a.d(d());
                "checkbox" == a.type ? a.checked = c instanceof Array ? 0 <= b.a.i(c, a.value) : c : "radio" == a.type && (a.checked = a.value == c)
            }
        };
        b.c.css = {
            update: function (a, d) {
                var c = b.a.d(d());
                if ("object" == typeof c) for (var e in c) {
                        var f = b.a.d(c[e]);
                        b.a.da(a, e, f)
                } else c = String(c || ""), b.a.da(a, a.__ko__cssValue, r), a.__ko__cssValue = c, b.a.da(a, c, m)
            }
        };
        b.c.enable = {
            update: function (a, d) {
                var c = b.a.d(d());
                c && a.disabled ? a.removeAttribute("disabled") : !c && !a.disabled && (a.disabled = m)
            }
        };
        b.c.disable = {
            update: function (a, d) {
                b.c.enable.update(a, function () {
                    return !b.a.d(d())
                })
            }
        };
        b.c.event = {
            init: function (a, d, c, e) {
                var f = d() || {}, g;
                for (g in f)(function () {
                        var f = g;
                        "string" == typeof f && b.a.n(a, f, function (a) {
                            var g, n = d()[f];
                            if (n) {
                                var q = c();
                                try {
                                    var s = b.a.L(arguments);
                                    s.unshift(e);
                                    g = n.apply(e, s)
                                } catch(err) {
                                } finally {
                                    g !== m && (a.preventDefault ? a.preventDefault() : a.returnValue = r)
                                }
                                q[f + "Bubble"] === r && (a.cancelBubble = m, a.stopPropagation && a.stopPropagation())
                            }
                        })
                    })()
            }
        };
        b.c.foreach = {
            Sa: function (a) {
                return function () {
                    var d = a(),
                        c = b.a.ua(d);
                    if (!c || "number" == typeof c.length) return {
                            foreach: d,
                            templateEngine: b.C.oa
                    };
                    b.a.d(d);
                    return {
                        foreach: c.data,
                        as: c.as,
                        includeDestroyed: c.includeDestroyed,
                        afterAdd: c.afterAdd,
                        beforeRemove: c.beforeRemove,
                        afterRender: c.afterRender,
                        beforeMove: c.beforeMove,
                        afterMove: c.afterMove,
                        templateEngine: b.C.oa
                    }
                }
            },
            init: function (a, d) {
                return b.c.template.init(a, b.c.foreach.Sa(d))
            },
            update: function (a, d, c, e, f) {
                return b.c.template.update(a, b.c.foreach.Sa(d), c, e, f)
            }
        };
        b.g.Q.foreach = r;
        b.e.I.foreach = m;
        b.c.hasfocus = {
            init: function (a, d, c) {
                function e(e) {
                    a.__ko_hasfocusUpdating = m;
                    var f = a.ownerDocument;
                    "activeElement" in
                        f && (e = f.activeElement === a);
                    f = d();
                    b.g.ea(f, c, "hasfocus", e, m);
                    a.__ko_hasfocusUpdating = r
                }
                var f = e.bind(p, m),
                    g = e.bind(p, r);
                b.a.n(a, "focus", f);
                b.a.n(a, "focusin", f);
                b.a.n(a, "blur", g);
                b.a.n(a, "focusout", g)
            },
            update: function (a, d) {
                var c = b.a.d(d());
                a.__ko_hasfocusUpdating || (c ? a.focus() : a.blur(), b.r.K(b.a.Ba, p, [a, c ? "focusin" : "focusout"]))
            }
        };
        b.c.html = {
            init: function () {
                return {
                    controlsDescendantBindings: m
                }
            },
            update: function (a, d) {
                b.a.ca(a, d())
            }
        };
        var da = "__ko_withIfBindingData";
        Q("if");
        Q("ifnot", r, m);
        Q("with", m, r, function (a,
            b) {
            return a.createChildContext(b)
        });
        b.c.options = {
            update: function (a, d, c) {
                "select" !== b.a.u(a) && j(Error("options binding applies only to SELECT elements"));
                for (var e = 0 == a.length, f = b.a.V(b.a.fa(a.childNodes, function (a) {
                        return a.tagName && "option" === b.a.u(a) && a.selected
                    }), function (a) {
                        return b.k.q(a) || a.innerText || a.textContent
                    }), g = a.scrollTop, h = b.a.d(d()); 0 < a.length;) b.A(a.options[0]), a.remove(0);
                if (h) {
                    c = c();
                    var k = c.optionsIncludeDestroyed;
                    "number" != typeof h.length && (h = [h]);
                    if (c.optionsCaption) {
                        var l = y.createElement("option");
                        b.a.ca(l, c.optionsCaption);
                        b.k.T(l, I);
                        a.appendChild(l)
                    }
                    d = 0;
                    for (var n = h.length; d < n; d++) {
                        var q = h[d];
                        if (!q || !q._destroy || k) {
                            var l = y.createElement("option"),
                                s = function (a, b, c) {
                                    var d = typeof b;
                                    return "function" == d ? b(a) : "string" == d ? a[b] : c
                                }, v = s(q, c.optionsValue, q);
                            b.k.T(l, b.a.d(v));
                            q = s(q, c.optionsText, v);
                            b.a.cb(l, q);
                            a.appendChild(l)
                        }
                    }
                    h = a.getElementsByTagName("option");
                    d = k = 0;
                    for (n = h.length; d < n; d++) 0 <= b.a.i(f, b.k.q(h[d])) && (b.a.bb(h[d], m), k++);
                    a.scrollTop = g;
                    e && "value" in c && ea(a, b.a.ua(c.value), m);
                    b.a.ub(a)
                }
            }
        };
        b.c.options.sa = "__ko.optionValueDomData__";
        b.c.selectedOptions = {
            init: function (a, d, c) {
                b.a.n(a, "change", function () {
                    var e = d(),
                        f = [];
                    b.a.o(a.getElementsByTagName("option"), function (a) {
                        a.selected && f.push(b.k.q(a))
                    });
                    b.g.ea(e, c, "value", f)
                })
            },
            update: function (a, d) {
                "select" != b.a.u(a) && j(Error("values binding applies only to SELECT elements"));
                var c = b.a.d(d());
                c && "number" == typeof c.length && b.a.o(a.getElementsByTagName("option"), function (a) {
                    var d = 0 <= b.a.i(c, b.k.q(a));
                    b.a.bb(a, d)
                })
            }
        };
        b.c.style = {
            update: function (a,
                d) {
                var c = b.a.d(d() || {}),
                    e;
                for (e in c) if ("string" == typeof e) {
                        var f = b.a.d(c[e]);
                        a.style[e] = f || ""
                    }
            }
        };
        b.c.submit = {
            init: function (a, d, c, e) {
                "function" != typeof d() && j(Error("The value for a submit binding must be a function"));
                b.a.n(a, "submit", function (b) {
                    var c, h = d();
                    try {
                        c = h.call(e, a)
                    } catch(err) {
                    } finally {
                        c !== m && (b.preventDefault ? b.preventDefault() : b.returnValue = r)
                    }
                })
            }
        };
        b.c.text = {
            update: function (a, d) {
                b.a.cb(a, d())
            }
        };
        b.e.I.text = m;
        b.c.uniqueName = {
            init: function (a, d) {
                if (d()) {
                    var c = "ko_unique_" + ++b.c.uniqueName.ob;
                    b.a.ab(a,
                        c)
                }
            }
        };
        b.c.uniqueName.ob = 0;
        b.c.value = {
            init: function (a, d, c) {
                function e() {
                    h = r;
                    var e = d(),
                        f = b.k.q(a);
                    b.g.ea(e, c, "value", f)
                }
                var f = ["change"],
                    g = c().valueUpdate,
                    h = r;
                g && ("string" == typeof g && (g = [g]), b.a.P(f, g), f = b.a.Ga(f));
                if (b.a.Z && ("input" == a.tagName.toLowerCase() && "text" == a.type && "off" != a.autocomplete && (!a.form || "off" != a.form.autocomplete)) && -1 == b.a.i(f, "propertychange")) b.a.n(a, "propertychange", function () {
                        h = m
                    }), b.a.n(a, "blur", function () {
                        h && e()
                    });
                b.a.o(f, function (c) {
                    var d = e;
                    b.a.Ob(c, "after") && (d = function () {
                        setTimeout(e,
                            0)
                    }, c = c.substring(5));
                    b.a.n(a, c, d)
                })
            },
            update: function (a, d) {
                var c = "select" === b.a.u(a),
                    e = b.a.d(d()),
                    f = b.k.q(a),
                    g = e != f;
                0 === e && (0 !== f && "0" !== f) && (g = m);
                g && (f = function () {
                    b.k.T(a, e)
                }, f(), c && setTimeout(f, 0));
                c && 0 < a.length && ea(a, e, r)
            }
        };
        b.c.visible = {
            update: function (a, d) {
                var c = b.a.d(d()),
                    e = "none" != a.style.display;
                c && !e ? a.style.display = "" : !c && e && (a.style.display = "none")
            }
        };
        b.c.click = {
            init: function (a, d, c, e) {
                return b.c.event.init.call(this, a, function () {
                    var a = {};
                    a.click = d();
                    return a
                }, c, e)
            }
        };
        b.v = function () {};
        b.v.prototype.renderTemplateSource = function () {
            j(Error("Override renderTemplateSource"))
        };
        b.v.prototype.createJavaScriptEvaluatorBlock = function () {
            j(Error("Override createJavaScriptEvaluatorBlock"))
        };
        b.v.prototype.makeTemplateSource = function (a, d) {
            if ("string" == typeof a) {
                d = d || y;
                var c = d.getElementById(a);
                c || j(Error("Cannot find template with ID " + a));
                return new b.l.h(c)
            }
            if (1 == a.nodeType || 8 == a.nodeType) return new b.l.O(a);
            j(Error("Unknown template type: " + a))
        };
        b.v.prototype.renderTemplate = function (a, b, c, e) {
            a = this.makeTemplateSource(a, e);
            return this.renderTemplateSource(a, b, c)
        };
        b.v.prototype.isTemplateRewritten = function (a, b) {
            return this.allowTemplateRewriting === r ? m : this.makeTemplateSource(a, b).data("isRewritten")
        };
        b.v.prototype.rewriteTemplate = function (a, b, c) {
            a = this.makeTemplateSource(a, c);
            b = b(a.text());
            a.text(b);
            a.data("isRewritten", m)
        };
        b.b("templateEngine", b.v);
        var qa = /(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,
            ra = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
        b.za = {
            vb: function (a,
                d, c) {
                d.isTemplateRewritten(a, c) || d.rewriteTemplate(a, function (a) {
                    return b.za.Gb(a, d)
                }, c)
            },
            Gb: function (a, b) {
                return a.replace(qa, function (a, e, f, g, h, k, l) {
                    return W(l, e, b)
                }).replace(ra, function (a, e) {
                    return W(e, "\x3c!-- ko --\x3e", b)
                })
            },
            kb: function (a) {
                return b.s.ra(function (d, c) {
                    d.nextSibling && b.Fa(d.nextSibling, a, c)
                })
            }
        };
        b.b("__tr_ambtns", b.za.kb);
        b.l = {};
        b.l.h = function (a) {
            this.h = a
        };
        b.l.h.prototype.text = function () {
            var a = b.a.u(this.h),
                a = "script" === a ? "text" : "textarea" === a ? "value" : "innerHTML";
            if (0 == arguments.length) return this.h[a];
            var d = arguments[0];
            "innerHTML" === a ? b.a.ca(this.h, d) : this.h[a] = d
        };
        b.l.h.prototype.data = function (a) {
            if (1 === arguments.length) return b.a.f.get(this.h, "templateSourceData_" + a);
            b.a.f.set(this.h, "templateSourceData_" + a, arguments[1])
        };
        b.l.O = function (a) {
            this.h = a
        };
        b.l.O.prototype = new b.l.h;
        b.l.O.prototype.text = function () {
            if (0 == arguments.length) {
                var a = b.a.f.get(this.h, "__ko_anon_template__") || {};
                a.Aa === I && a.ia && (a.Aa = a.ia.innerHTML);
                return a.Aa
            }
            b.a.f.set(this.h, "__ko_anon_template__", {
                Aa: arguments[0]
            })
        };
        b.l.h.prototype.nodes = function () {
            if (0 == arguments.length) return (b.a.f.get(this.h, "__ko_anon_template__") || {}).ia;
            b.a.f.set(this.h, "__ko_anon_template__", {
                ia: arguments[0]
            })
        };
        b.b("templateSources", b.l);
        b.b("templateSources.domElement", b.l.h);
        b.b("templateSources.anonymousTemplate", b.l.O);
        var O;
        b.wa = function (a) {
            a != I && !(a instanceof b.v) && j(Error("templateEngine must inherit from ko.templateEngine"));
            O = a
        };
        b.va = function (a, d, c, e, f) {
            c = c || {};
            (c.templateEngine || O) == I && j(Error("Set a template engine before calling renderTemplate"));
            f = f || "replaceChildren";
            if (e) {
                var g = N(e);
                return b.j(function () {
                    var h = d && d instanceof b.z ? d : new b.z(b.a.d(d)),
                        k = "function" == typeof a ? a(h.$data, h) : a,
                        h = T(e, f, k, h, c);
                    "replaceNode" == f && (e = h, g = N(e))
                }, p, {
                    Ka: function () {
                        return !g || !b.a.X(g)
                    },
                    W: g && "replaceNode" == f ? g.parentNode : g
                })
            }
            return b.s.ra(function (e) {
                b.va(a, d, c, e, "replaceNode")
            })
        };
        b.Mb = function (a, d, c, e, f) {
            function g(a, b) {
                U(b, k);
                c.afterRender && c.afterRender(b, a)
            }
            function h(d, e) {
                k = f.createChildContext(b.a.d(d), c.as);
                k.$index = e;
                var g = "function" == typeof a ?
                    a(d, k) : a;
                return T(p, "ignoreTargetNode", g, k, c)
            }
            var k;
            return b.j(function () {
                var a = b.a.d(d) || [];
                "undefined" == typeof a.length && (a = [a]);
                a = b.a.fa(a, function (a) {
                    return c.includeDestroyed || a === I || a === p || !b.a.d(a._destroy)
                });
                b.r.K(b.a.$a, p, [e, a, h, c, g])
            }, p, {
                W: e
            })
        };
        b.c.template = {
            init: function (a, d) {
                var c = b.a.d(d());
                if ("string" != typeof c && !c.name && (1 == a.nodeType || 8 == a.nodeType)) c = 1 == a.nodeType ? a.childNodes : b.e.childNodes(a), c = b.a.Hb(c), (new b.l.O(a)).nodes(c);
                return {
                    controlsDescendantBindings: m
                }
            },
            update: function (a,
                d, c, e, f) {
                d = b.a.d(d());
                c = {};
                e = m;
                var g, h = p;
                "string" != typeof d && (c = d, d = c.name, "if" in c && (e = b.a.d(c["if"])), e && "ifnot" in c && (e = !b.a.d(c.ifnot)), g = b.a.d(c.data));
                "foreach" in c ? h = b.Mb(d || a, e && c.foreach || [], c, a, f) : e ? (f = "data" in c ? f.createChildContext(g, c.as) : f, h = b.va(d || a, f, c, a)) : b.e.Y(a);
                f = h;
                (g = b.a.f.get(a, "__ko__templateComputedDomDataKey__")) && "function" == typeof g.B && g.B();
                b.a.f.set(a, "__ko__templateComputedDomDataKey__", f && f.pa() ? f : I)
            }
        };
        b.g.Q.template = function (a) {
            a = b.g.aa(a);
            return 1 == a.length && a[0].unknown ||
                b.g.Eb(a, "name") ? p : "This template engine does not support anonymous templates nested within its templates"
        };
        b.e.I.template = m;
        b.b("setTemplateEngine", b.wa);
        b.b("renderTemplate", b.va);
        b.a.Ja = function (a, b, c) {
            a = a || [];
            b = b || [];
            return a.length <= b.length ? S(a, b, "added", "deleted", c) : S(b, a, "deleted", "added", c)
        };
        b.b("utils.compareArrays", b.a.Ja);
        b.a.$a = function (a, d, c, e, f) {
            function g(a, b) {
                t = l[b];
                w !== b && (z[a] = t);
                t.na(w++);
                M(t.M);
                s.push(t);
                A.push(t)
            }
            function h(a, c) {
                if (a) for (var d = 0, e = c.length; d < e; d++) c[d] && b.a.o(c[d].M, function (b) {
                            a(b, d, c[d].U)
                        })
            }
            d = d || [];
            e = e || {};
            var k = b.a.f.get(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === I,
                l = b.a.f.get(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [],
                n = b.a.V(l, function (a) {
                    return a.U
                }),
                q = b.a.Ja(n, d),
                s = [],
                v = 0,
                w = 0,
                B = [],
                A = [];
            d = [];
            for (var z = [], n = [], t, D = 0, C, E; C = q[D]; D++) switch (E = C.moved, C.status) {
                case "deleted":
                    E === I && (t = l[v], t.j && t.j.B(), B.push.apply(B, M(t.M)), e.beforeRemove && (d[D] = t, A.push(t)));
                    v++;
                    break;
                case "retained":
                    g(D, v++);
                    break;
                case "added":
                    E !== I ?
                        g(D, E) : (t = {
                        U: C.value,
                        na: b.m(w++)
                    }, s.push(t), A.push(t), k || (n[D] = t))
            }
            h(e.beforeMove, z);
            b.a.o(B, e.beforeRemove ? b.A : b.removeNode);
            for (var D = 0, k = b.e.firstChild(a), H; t = A[D]; D++) {
                t.M || b.a.extend(t, ha(a, c, t.U, f, t.na));
                for (v = 0; q = t.M[v]; k = q.nextSibling, H = q, v++) q !== k && b.e.Pa(a, q, H);
                !t.Ab && f && (f(t.U, t.M, t.na), t.Ab = m)
            }
            h(e.beforeRemove, d);
            h(e.afterMove, z);
            h(e.afterAdd, n);
            b.a.f.set(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult", s)
        };
        b.b("utils.setDomNodeChildrenFromArrayMapping", b.a.$a);
        b.C = function () {
            this.allowTemplateRewriting =
                r
        };
        b.C.prototype = new b.v;
        b.C.prototype.renderTemplateSource = function (a) {
            var d = !(9 > b.a.Z) && a.nodes ? a.nodes() : p;
            if (d) return b.a.L(d.cloneNode(m).childNodes);
            a = a.text();
            return b.a.ta(a)
        };
        b.C.oa = new b.C;
        b.wa(b.C.oa);
        b.b("nativeTemplateEngine", b.C);
        b.qa = function () {
            var a = this.Db = function () {
                if ("undefined" == typeof F || !F.tmpl) return 0;
                try {
                    if (0 <= F.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                } catch (a) {}
                return 1
            }();
            this.renderTemplateSource = function (b, c, e) {
                e = e || {};
                2 > a && j(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
                var f = b.data("precompiled");
                f || (f = b.text() || "", f = F.template(p, "{{ko_with $item.koBindingContext}}" + f + "{{/ko_with}}"), b.data("precompiled", f));
                b = [c.$data];
                c = F.extend({
                    koBindingContext: c
                }, e.templateOptions);
                c = F.tmpl(f, b, c);
                c.appendTo(y.createElement("div"));
                F.fragments = {};
                return c
            };
            this.createJavaScriptEvaluatorBlock = function (a) {
                return "{{ko_code ((function() { return " + a + " })()) }}"
            };
            this.addTemplate = function (a, b) {
                y.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
            };
            0 < a && (F.tmpl.tag.ko_code = {
                open: "__.push($1 || '');"
            }, F.tmpl.tag.ko_with = {
                open: "with($1) {",
                close: "} "
            })
        };
        b.qa.prototype = new b.v;
        w = new b.qa;
        0 < w.Db && b.wa(w);
        b.b("jqueryTmplTemplateEngine", b.qa)
    }
    "function" === typeof require && "object" === typeof exports && "object" === typeof module ? L(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], L) : L(x.ko = {});
    m;
})();;/// Knockout Mapping plugin v2.3.5
/// (c) 2012 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function(e){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?e(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],e):e(ko,ko.mapping={})})(function(e,f){function x(b,c){var a,d;for(d in c)if(c.hasOwnProperty(d)&&c[d])if(a=f.getType(b[d]),d&&b[d]&&"array"!==a&&"string"!==a)x(b[d],c[d]);else if("array"===f.getType(b[d])&&"array"===f.getType(c[d])){a=b;for(var e=d,k=b[d],m=c[d],s={},g=k.length-1;0<=g;--g)s[k[g]]=k[g];for(g=
m.length-1;0<=g;--g)s[m[g]]=m[g];k=[];m=void 0;for(m in s)k.push(s[m]);a[e]=k}else b[d]=c[d]}function D(b,c){var a={};x(a,b);x(a,c);return a}function y(b,c){for(var a=D({},b),e=K.length-1;0<=e;e--){var f=K[e];a[f]&&(a[""]instanceof Object||(a[""]={}),a[""][f]=a[f],delete a[f])}c&&(a.ignore=h(c.ignore,a.ignore),a.include=h(c.include,a.include),a.copy=h(c.copy,a.copy),a.observe=h(c.observe,a.observe));a.ignore=h(a.ignore,i.ignore);a.include=h(a.include,i.include);a.copy=h(a.copy,i.copy);a.observe=h(a.observe,
i.observe);a.mappedProperties=a.mappedProperties||{};a.copiedProperties=a.copiedProperties||{};return a}function h(b,c){"array"!==f.getType(b)&&(b="undefined"===f.getType(b)?[]:[b]);"array"!==f.getType(c)&&(c="undefined"===f.getType(c)?[]:[c]);return e.utils.arrayGetDistinctValues(b.concat(c))}function E(b,c,a,d,j,k,m){var s="array"===f.getType(e.utils.unwrapObservable(c)),k=k||"";if(f.isMapped(b))var g=e.utils.unwrapObservable(b)[n],a=D(g,a);var i=m||j,h=function(){return a[d]&&a[d].create instanceof
Function},w=function(b){var f=F,g=e.dependentObservable;e.dependentObservable=function(a,b,c){c=c||{};a&&"object"==typeof a&&(c=a);var d=c.deferEvaluation,L=!1;c.deferEvaluation=!0;a=new G(a,b,c);if(!d){var g=a,d=e.dependentObservable;e.dependentObservable=G;a=e.isWriteableObservable(g);e.dependentObservable=d;a=G({read:function(){L||(e.utils.arrayRemoveItem(f,g),L=!0);return g.apply(g,arguments)},write:a&&function(a){return g(a)},deferEvaluation:!0});f.push(a)}return a};e.dependentObservable.fn=
G.fn;e.computed=e.dependentObservable;b=e.utils.unwrapObservable(j)instanceof Array?a[d].create({data:b||c,parent:i,skip:M}):a[d].create({data:b||c,parent:i});e.dependentObservable=g;e.computed=e.dependentObservable;return b},t=function(){return a[d]&&a[d].update instanceof Function},u=function(b,f){var g={data:f||c,parent:i,target:e.utils.unwrapObservable(b)};e.isWriteableObservable(b)&&(g.observable=b);return a[d].update(g)};if(m=H.get(c))return m;d=d||"";if(s){var s=[],r=!1,l=function(a){return a};
a[d]&&a[d].key&&(l=a[d].key,r=!0);e.isObservable(b)||(b=e.observableArray([]),b.mappedRemove=function(a){var c="function"==typeof a?a:function(b){return b===l(a)};return b.remove(function(a){return c(l(a))})},b.mappedRemoveAll=function(a){var c=B(a,l);return b.remove(function(a){return-1!=e.utils.arrayIndexOf(c,l(a))})},b.mappedDestroy=function(a){var c="function"==typeof a?a:function(b){return b===l(a)};return b.destroy(function(a){return c(l(a))})},b.mappedDestroyAll=function(a){var c=B(a,l);return b.destroy(function(a){return-1!=
e.utils.arrayIndexOf(c,l(a))})},b.mappedIndexOf=function(a){var c=B(b(),l),a=l(a);return e.utils.arrayIndexOf(c,a)},b.mappedCreate=function(a){if(-1!==b.mappedIndexOf(a))throw Error("There already is an object with the key that you specified.");var c=h()?w(a):a;t()&&(a=u(c,a),e.isWriteableObservable(c)?c(a):c=a);b.push(c);return c});m=B(e.utils.unwrapObservable(b),l).sort();g=B(c,l);r&&g.sort();var r=e.utils.compareArrays(m,g),m={},I,z=e.utils.unwrapObservable(c),x={},y=!0,g=0;for(I=z.length;g<I;g++){var q=
l(z[g]);if(void 0===q||q instanceof Object){y=!1;break}x[q]=z[g]}var z=[],A=0,g=0;for(I=r.length;g<I;g++){var q=r[g],p,v=k+"["+g+"]";switch(q.status){case "added":var C=y?x[q.value]:J(e.utils.unwrapObservable(c),q.value,l);p=E(void 0,C,a,d,b,v,j);h()||(p=e.utils.unwrapObservable(p));v=N(e.utils.unwrapObservable(c),C,m);p===M?A++:z[v-A]=p;m[v]=!0;break;case "retained":C=y?x[q.value]:J(e.utils.unwrapObservable(c),q.value,l);p=J(b,q.value,l);E(p,C,a,d,b,v,j);v=N(e.utils.unwrapObservable(c),C,m);z[v]=
p;m[v]=!0;break;case "deleted":p=J(b,q.value,l)}s.push({event:q.status,item:p})}b(z);a[d]&&a[d].arrayChanged&&e.utils.arrayForEach(s,function(b){a[d].arrayChanged(b.event,b.item)})}else if(O(c)){b=e.utils.unwrapObservable(b);if(!b){if(h())return r=w(),t()&&(r=u(r)),r;if(t())return u(r);b={}}t()&&(b=u(b));H.save(c,b);if(t())return b;P(c,function(d){var f=k.length?k+"."+d:d;if(-1==e.utils.arrayIndexOf(a.ignore,f))if(-1!=e.utils.arrayIndexOf(a.copy,f))b[d]=c[d];else if("object"!=typeof c[d]&&"array"!=
typeof c[d]&&0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=c[d],a.copiedProperties[f]=!0;else{var g=H.get(c[d]),j=E(b[d],c[d],a,d,b,f,b),g=g||j;if(0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=g(),a.copiedProperties[f]=!0;else{if(e.isWriteableObservable(b[d]))b[d](e.utils.unwrapObservable(g));else g=void 0===b[d]?g:e.utils.unwrapObservable(g),b[d]=g;a.mappedProperties[f]=!0}}})}else switch(f.getType(c)){case "function":t()?e.isWriteableObservable(c)?(c(u(c)),b=c):
b=u(c):b=c;break;default:if(e.isWriteableObservable(b))return p=t()?u(b):e.utils.unwrapObservable(c),b(p),p;h()||t();b=h()?w():e.observable(e.utils.unwrapObservable(c));t()&&b(u(b))}return b}function N(b,c,a){for(var d=0,e=b.length;d<e;d++)if(!0!==a[d]&&b[d]===c)return d;return null}function Q(b,c){var a;c&&(a=c(b));"undefined"===f.getType(a)&&(a=b);return e.utils.unwrapObservable(a)}function J(b,c,a){for(var b=e.utils.unwrapObservable(b),d=0,f=b.length;d<f;d++){var k=b[d];if(Q(k,a)===c)return k}throw Error("When calling ko.update*, the key '"+
c+"' was not found!");}function B(b,c){return e.utils.arrayMap(e.utils.unwrapObservable(b),function(a){return c?Q(a,c):a})}function P(b,c){if("array"===f.getType(b))for(var a=0;a<b.length;a++)c(a);else for(a in b)c(a)}function O(b){var c=f.getType(b);return("object"===c||"array"===c)&&null!==b}function S(){var b=[],c=[];this.save=function(a,d){var f=e.utils.arrayIndexOf(b,a);0<=f?c[f]=d:(b.push(a),c.push(d))};this.get=function(a){a=e.utils.arrayIndexOf(b,a);return 0<=a?c[a]:void 0}}function R(){var b=
{},c=function(a){var c;try{c=a}catch(e){c="$$$"}a=b[c];void 0===a&&(a=new S,b[c]=a);return a};this.save=function(a,b){c(a).save(a,b)};this.get=function(a){return c(a).get(a)}}var n="__ko_mapping__",G=e.dependentObservable,A=0,F,H,K=["create","update","key","arrayChanged"],M={},w={include:["_destroy"],ignore:[],copy:[],observe:[]},i=w;f.isMapped=function(b){return(b=e.utils.unwrapObservable(b))&&b[n]};f.fromJS=function(b){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");
window.setTimeout(function(){A=0},0);A++||(F=[],H=new R);var c,a;2==arguments.length&&(arguments[1][n]?a=arguments[1]:c=arguments[1]);3==arguments.length&&(c=arguments[1],a=arguments[2]);a&&(c=D(c,a[n]));c=y(c);var d=E(a,b,c);a&&(d=a);--A||window.setTimeout(function(){for(;F.length;){var a=F.pop();a&&a()}},0);d[n]=D(d[n],c);return d};f.fromJSON=function(b){var c=e.utils.parseJson(b);arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
};f.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");};f.toJS=function(b,c){i||f.resetDefaultOptions();if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");if("array"!==f.getType(i.ignore))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if("array"!==f.getType(i.include))throw Error("ko.mapping.defaultOptions().include should be an array.");
if("array"!==f.getType(i.copy))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=y(c,b[n]);return f.visitModel(b,function(a){return e.utils.unwrapObservable(a)},c)};f.toJSON=function(b,c){var a=f.toJS(b,c);return e.utils.stringifyJson(a)};f.defaultOptions=function(){if(0<arguments.length)i=arguments[0];else return i};f.resetDefaultOptions=function(){i={include:w.include.slice(0),ignore:w.ignore.slice(0),copy:w.copy.slice(0)}};f.getType=function(b){if(b&&"object"===typeof b){if(b.constructor==
(new Date).constructor)return"date";if("[object Array]"===Object.prototype.toString.call(b))return"array"}return typeof b};f.visitModel=function(b,c,a){a=a||{};a.visitedObjects=a.visitedObjects||new R;var d,j=e.utils.unwrapObservable(b);if(O(j))a=y(a,j[n]),c(b,a.parentName),d="array"===f.getType(j)?[]:{};else return c(b,a.parentName);a.visitedObjects.save(b,d);var k=a.parentName;P(j,function(b){if(!(a.ignore&&-1!=e.utils.arrayIndexOf(a.ignore,b))){var i=j[b],g=a,h=k||"";"array"===f.getType(j)?k&&
(h+="["+b+"]"):(k&&(h+="."),h+=b);g.parentName=h;if(!(-1===e.utils.arrayIndexOf(a.copy,b)&&-1===e.utils.arrayIndexOf(a.include,b)&&j[n]&&j[n].mappedProperties&&!j[n].mappedProperties[b]&&j[n].copiedProperties&&!j[n].copiedProperties[b]&&"array"!==f.getType(j)))switch(f.getType(e.utils.unwrapObservable(i))){case "object":case "array":case "undefined":g=a.visitedObjects.get(i);d[b]="undefined"!==f.getType(g)?g:f.visitModel(i,c,a);break;default:d[b]=c(i,a.parentName)}}});return d}});;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};
;/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));;/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {
	
	// Picker object
	
	var Datepicker = function(element, options){
		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
		this.picker = $(DPGlobal.template)
							.appendTo('body')
							.on({
								click: $.proxy(this.click, this)//,
								//mousedown: $.proxy(this.mousedown, this)
							});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		
		if (this.isInput) {
			this.element.on({
				focus: $.proxy(this.show, this),
				//blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component){
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}
	
		this.minViewMode = options.minViewMode||this.element.data('date-minviewmode')||0;
		if (typeof this.minViewMode === 'string') {
			switch (this.minViewMode) {
				case 'months':
					this.minViewMode = 1;
					break;
				case 'years':
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break;
			}
		}
		this.viewMode = options.viewMode||this.element.data('date-viewmode')||0;
		if (typeof this.viewMode === 'string') {
			switch (this.viewMode) {
				case 'months':
					this.viewMode = 1;
					break;
				case 'years':
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0;
					break;
			}
		}
		this.startViewMode = this.viewMode;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
		this.onRender = options.onRender;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};
	
	Datepicker.prototype = {
		constructor: Datepicker,
		
		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
			}
			var that = this;
			$(document).on('mousedown', function(ev){
				if ($(ev.target).closest('.datepicker').length == 0) {
					that.hide();
				}
			});
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},
		
		hide: function(){
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			//this.set();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},
		
		set: function() {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
                
                //
                //
                //  necessary to update knockout
                //
                // 
                //
                
                tinybudget.viewmodel.input_date(formated);
			}
		},
		
		setValue: function(newDate) {
			if (typeof newDate === 'string') {
				this.date = DPGlobal.parseDate(newDate, this.format);
			} else {
				this.date = new Date(newDate);
			}
			this.set();
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		place: function(){
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},
		
		update: function(newDate){
			this.date = DPGlobal.parseDate(
				typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
				this.format
			);
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},
		
		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},
		
		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
						.text(DPGlobal.dates.months[month]+' '+year);
			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName,
				prevY,
				prevM;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() === this.weekStart) {
					html.push('<tr>');
				}
				clsName = this.onRender(prevMonth);
				prevY = prevMonth.getFullYear();
				prevM = prevMonth.getMonth();
				if ((prevM < month &&  prevY === year) ||  prevY < year) {
					clsName += ' old';
				} else if ((prevM > month && prevY === year) || prevY > year) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() === currentDate) {
					clsName += ' active';
				}
				html.push('<td class="day '+clsName+'">'+prevMonth.getDate() + '</td>');
				if (prevMonth.getDay() === this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();
			
			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear === year) {
				months.eq(this.date.getMonth()).addClass('active');
			}
			
			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i === -1 || i === 10 ? ' old' : '')+(currentYear === year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},
		
		click: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length === 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
									DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
								);
								this.fill();
								this.set();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						if (this.viewMode !== 0) {
							this.date = new Date(this.viewDate);
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						this.showMode(-1);
						this.fill();
						this.set();
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							var day = parseInt(target.text(), 10)||1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day,0,0,0,0);
							this.viewDate = new Date(year, month, Math.min(28, day),0,0,0,0);
							this.fill();
							this.set();
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						break;
				}
			}
		},
		
		mousedown: function(e){
			e.stopPropagation();
			e.preventDefault();
		},
		
		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		}
	};
	
	$.fn.datepicker = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option === 'string') data[option](val);
		});
	};

	$.fn.datepicker.defaults = {
		onRender: function(date) {
			return '';
		}
	};
	$.fn.datepicker.Constructor = Datepicker;
	
	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		dates:{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/\-\s].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
			var parts = date.split(format.separator),
				date = new Date(),
				val;
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			if (parts.length === format.parts.length) {
				var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							day = val;
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							month = val - 1;
							date.setMonth(val - 1);
							break;
						case 'yy':
							year = 2000 + val;
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							year = val;
							date.setFullYear(val);
							break;
					}
				}
				date = new Date(year, month, day, 0 ,0 ,0);
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&lsaquo;</th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next">&rsaquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker dropdown-menu">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
						'</div>';

}( window.jQuery );;/* =========================================================
 * bootstrap-modal.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#modal
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function( $ ){

  "use strict"

 /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
  * ======================================================= */

  var transitionEnd

  $(document).ready(function () {

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
      return support
    })()

    // set CSS transition event type
    if ( $.support.transition ) {
      transitionEnd = "TransitionEnd"
      if ( $.browser.webkit ) {
      	transitionEnd = "webkitTransitionEnd"
      } else if ( $.browser.mozilla ) {
      	transitionEnd = "transitionend"
      } else if ( $.browser.opera ) {
      	transitionEnd = "oTransitionEnd"
      }
    }

  })


 /* MODAL PUBLIC CLASS DEFINITION
  * ============================= */

  var Modal = function ( content, options ) {
    this.settings = $.extend({}, $.fn.modal.defaults, options)
    this.$element = $(content)
      .delegate('.close', 'click.modal', $.proxy(this.hide, this))

    if ( this.settings.show ) {
      this.show()
    }

    return this
  }

  Modal.prototype = {

      toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
        this.isShown = true
        this.$element.trigger('show')

        escape.call(this)
        backdrop.call(this, function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          that.$element
            .appendTo(document.body)
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one(transitionEnd, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })

        return this
      }

    , hide: function (e) {
        e && e.preventDefault()

        if ( !this.isShown ) {
          return this
        }

        var that = this
        this.isShown = false

        escape.call(this)

        this.$element
          .trigger('hide')
          .removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)

        return this
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    // firefox drops transitionEnd events :{o
    var that = this
      , timeout = setTimeout(function () {
          that.$element.unbind(transitionEnd)
          hideModal.call(that)
        }, 500)

    this.$element.one(transitionEnd, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal (that) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop ( callback ) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''
    if ( this.isShown && this.settings.backdrop ) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      if ( this.settings.backdrop != 'static' ) {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if ( doAnimate ) {
        this.$backdrop[0].offsetWidth // force reflow
      }

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one(transitionEnd, callback) :
        callback()

    } else if ( !this.isShown && this.$backdrop ) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one(transitionEnd, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if ( callback ) {
       callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if ( this.isShown && this.settings.keyboard ) {
      $(document).bind('keyup.modal', function ( e ) {
        if ( e.which == 27 ) {
          that.hide()
        }
      })
    } else if ( !this.isShown ) {
      $(document).unbind('keyup.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function ( options ) {
    var modal = this.data('modal')

    if (!modal) {

      if (typeof options == 'string') {
        options = {
          show: /show|toggle/.test(options)
        }
      }

      return this.each(function () {
        $(this).data('modal', new Modal(this, options))
      })
    }

    if ( options === true ) {
      return modal
    }

    if ( typeof options == 'string' ) {
      modal[options]()
    } else if ( modal ) {
      modal.toggle()
    }

    return this
  }

  $.fn.modal.Modal = Modal

  $.fn.modal.defaults = {
    backdrop: false
  , keyboard: false
  , show: false
  }


 /* MODAL DATA- IMPLEMENTATION
  * ========================== */

  $(document).ready(function () {
    $('body').delegate('[data-controls-modal]', 'click', function (e) {
      e.preventDefault()
      var $this = $(this).data('show', true)
      $('#' + $this.attr('data-controls-modal')).modal( $this.data() )
    })
  })

}( window.jQuery || window.ender );;/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);;/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);;/* ============================================================
# bootstrap-tour.js v0.3.0
# http://bootstraptour.com/
# ==============================================================
# Copyright 2012-2013 Ulrich Sossou
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
*/


(function() {
  (function($, window) {
    var Tour, document;

    document = window.document;
    Tour = (function() {
      function Tour(options) {
        this._options = $.extend({
          name: 'tour',
          labels: {
            end: 'End tour',
            next: 'Next &raquo;',
            prev: '&laquo; Prev'
          },
          template: "<div class='popover tour'>            <div class='arrow'></div>            <h3 class='popover-title'></h3>            <div class='popover-content'></div>          </div>",
          container: 'body',
          keyboard: true,
          useLocalStorage: false,
          debug: false,
          backdrop: false,
          redirect: true,
          afterSetState: function(key, value) {},
          afterGetState: function(key, value) {},
          afterRemoveState: function(key) {},
          onStart: function(tour) {},
          onEnd: function(tour) {},
          onShow: function(tour) {},
          onShown: function(tour) {},
          onHide: function(tour) {},
          onHidden: function(tour) {}
        }, options);
        this._steps = [];
        this.setCurrentStep();
        this.backdrop = {
          overlay: null,
          step: null,
          background: null
        };
      }

      Tour.prototype.setState = function(key, value) {
        key = "" + this._options.name + "_" + key;
        if (this._options.useLocalStorage) {
          window.localStorage.setItem(key, value);
        } else {
          $.cookie(key, value, {
            expires: 36500,
            path: '/'
          });
        }
        return this._options.afterSetState(key, value);
      };

      Tour.prototype.removeState = function(key) {
        key = "" + this._options.name + "_" + key;
        if (this._options.useLocalStorage) {
          window.localStorage.removeItem(key);
        } else {
          $.removeCookie(key, {
            path: '/'
          });
        }
        return this._options.afterRemoveState(key);
      };

      Tour.prototype.getState = function(key) {
        var value;

        if (this._options.useLocalStorage) {
          value = window.localStorage.getItem("" + this._options.name + "_" + key);
        } else {
          value = $.cookie("" + this._options.name + "_" + key);
        }
        if (value === void 0 || value === "null") {
          value = null;
        }
        this._options.afterGetState(key, value);
        return value;
      };

      Tour.prototype.addStep = function(step) {
        return this._steps.push(step);
      };

      Tour.prototype.getStep = function(i) {
        if (this._steps[i] != null) {
          return $.extend({
            path: "",
            placement: "right",
            title: "",
            content: "",
            id: "step-" + i,
            next: i === this._steps.length - 1 ? -1 : i + 1,
            prev: i - 1,
            animation: true,
            backdrop: this._options.backdrop,
            redirect: this._options.redirect,
            onShow: this._options.onShow,
            onShown: this._options.onShown,
            onHide: this._options.onHide,
            onHidden: this._options.onHidden,
            template: this._options.template,
            container: this._options.container
          }, this._steps[i]);
        }
      };

      Tour.prototype.start = function(force) {
        var promise,
          _this = this;

        if (force == null) {
          force = false;
        }
        if (this.ended() && !force) {
          return this._debug("Tour ended, start prevented.");
        }
        $(document).off("click.bootstrap-tour", ".popover .next").on("click.bootstrap-tour", ".popover .next", function(e) {
          e.preventDefault();
          return _this.next();
        });
        $(document).off("click.bootstrap-tour", ".popover .prev").on("click.bootstrap-tour", ".popover .prev", function(e) {
          e.preventDefault();
          return _this.prev();
        });
        $(document).off("click.bootstrap-tour", ".popover .end").on("click.bootstrap-tour", ".popover .end", function(e) {
          e.preventDefault();
          return _this.end();
        });
        this._onresize(function() {
          return _this.showStep(_this._current);
        });
        this._setupKeyboardNavigation();
        promise = this._makePromise(this._options.onStart != null ? this._options.onStart(this) : void 0);
        return this._callOnPromiseDone(promise, this.showStep, this._current);
      };

      Tour.prototype.next = function() {
        var promise;

        promise = this.hideStep(this._current);
        return this._callOnPromiseDone(promise, this.showNextStep);
      };

      Tour.prototype.prev = function() {
        var promise;

        promise = this.hideStep(this._current);
        return this._callOnPromiseDone(promise, this.showPrevStep);
      };

      Tour.prototype.end = function() {
        var endHelper, hidePromise,
          _this = this;

        endHelper = function(e) {
          $(document).off("click.bootstrap-tour");
          $(document).off("keyup.bootstrap-tour");
          $(window).off("resize.bootstrap-tour");
          _this.setState("end", "yes");
          _this._hideBackdrop();
          if (_this._options.onEnd != null) {
            return _this._options.onEnd(_this);
          }
        };
        hidePromise = this.hideStep(this._current);
        return this._callOnPromiseDone(hidePromise, endHelper);
      };

      Tour.prototype.ended = function() {
        return !!this.getState("end");
      };

      Tour.prototype.restart = function() {
        this.removeState("current_step");
        this.removeState("end");
        this.setCurrentStep(0);
        return this.start();
      };

      Tour.prototype.hideStep = function(i) {
        var hideStepHelper, promise, step,
          _this = this;

        step = this.getStep(i);
        promise = this._makePromise((step.onHide != null ? step.onHide(this) : void 0));
        hideStepHelper = function(e) {
          var $element;

          $element = $(step.element).popover("hide");
          if (step.reflex) {
            $element.css("cursor", "").off("click.boostrap-tour");
          }
          if (step.backdrop) {
            _this._hideBackdrop();
          }
          if (step.onHidden != null) {
            return step.onHidden(_this);
          }
        };
        this._callOnPromiseDone(promise, hideStepHelper);
        return promise;
      };

      Tour.prototype.showStep = function(i) {
        var promise, showStepHelper, step,
          _this = this;

        step = this.getStep(i);
        if (!step) {
          return;
        }
        promise = this._makePromise((step.onShow != null ? step.onShow(this) : void 0));
        showStepHelper = function(e) {
          var current_path, path;

          _this.setCurrentStep(i);
          path = typeof step.path === "function" ? step.path.call() : step.path;
          current_path = [document.location.pathname, document.location.hash].join('');
          if (_this._isRedirect(path, current_path)) {
            _this._redirect(step, path);
            return;
          }
          if (!((step.element != null) && $(step.element).length !== 0 && $(step.element).is(":visible"))) {
            _this._debug("Skip the step " + (_this._current + 1) + ". The element does not exist or is not visible.");
            _this.showNextStep();
            return;
          }
          if (step.backdrop) {
            _this._showBackdrop(step.element);
          }
          _this._showPopover(step, i);
          if (step.onShown != null) {
            step.onShown(_this);
          }
          return _this._debug("Step " + (_this._current + 1) + " of " + _this._steps.length);
        };
        return this._callOnPromiseDone(promise, showStepHelper);
      };

      Tour.prototype.setCurrentStep = function(value) {
        if (value != null) {
          this._current = value;
          return this.setState("current_step", value);
        } else {
          this._current = this.getState("current_step");
          if (this._current === null) {
            return this._current = 0;
          } else {
            return this._current = parseInt(this._current);
          }
        }
      };

      Tour.prototype.showNextStep = function() {
        var step;

        step = this.getStep(this._current);
        return this.showStep(step.next);
      };

      Tour.prototype.showPrevStep = function() {
        var step;

        step = this.getStep(this._current);
        return this.showStep(step.prev);
      };

      Tour.prototype._debug = function(text) {
        if (this._options.debug) {
          return window.console.log("Bootstrap Tour '" + this._options.name + "' | " + text);
        }
      };

      Tour.prototype._isRedirect = function(path, currentPath) {
        return (path != null) && path !== "" && path.replace(/\?.*$/, "").replace(/\/?$/, "") !== currentPath.replace(/\/?$/, "");
      };

      Tour.prototype._redirect = function(step, path) {
        if (typeof step.redirect === 'function') {
          return step.redirect.call(this, path);
        } else if (step.redirect === true) {
          this._debug("Redirect to " + path);
          return document.location.href = path;
        }
      };

      Tour.prototype._renderNavigation = function(step, options) {
        var content, nav;

        nav = [];
        if (step.prev >= 0) {
          nav.push("<a href='#" + step.prev + "' class='prev'>" + options.labels.prev + "</a>");
        }
        if (step.next >= 0) {
          nav.push("<a href='#" + step.next + "' class='next'>" + options.labels.next + "</a>");
        }
        content = nav.join(" | ");
        return content += "<a href='#' class='pull-right end'>" + options.labels.end + "</a>";
      };

      Tour.prototype._showPopover = function(step, i) {
        var $tip, content, options,
          _this = this;

        content = "" + step.content + "<br /><p>";
        options = $.extend({}, this._options);
        if (step.options) {
          $.extend(options, step.options);
        }
        if (step.reflex) {
          $(step.element).css("cursor", "pointer").on("click.bootstrap-tour", function(e) {
            return _this.next();
          });
        }
        content += this._renderNavigation(step, options);
        $(step.element).popover('destroy').popover({
          placement: step.placement,
          trigger: "manual",
          title: step.title,
          content: content,
          html: true,
          animation: step.animation,
          container: step.container,
          template: step.template
        }).popover("show");
        $tip = $(step.element).data("popover").tip();
        $tip.attr("id", step.id);
        this._reposition($tip, step);
        return this._scrollIntoView($tip);
      };

      Tour.prototype._reposition = function(tip, step) {
        var offsetBottom, offsetRight, original_left, original_offsetHeight, original_offsetWidth, original_top, tipOffset;

        original_offsetWidth = tip[0].offsetWidth;
        original_offsetHeight = tip[0].offsetHeight;
        tipOffset = tip.offset();
        original_left = tipOffset.left;
        original_top = tipOffset.top;
        offsetBottom = $(document).outerHeight() - tipOffset.top - $(tip).outerHeight();
        if (offsetBottom < 0) {
          tipOffset.top = tipOffset.top + offsetBottom;
        }
        offsetRight = $("html").outerWidth() - tipOffset.left - $(tip).outerWidth();
        if (offsetRight < 0) {
          tipOffset.left = tipOffset.left + offsetRight;
        }
        if (tipOffset.top < 0) {
          tipOffset.top = 0;
        }
        if (tipOffset.left < 0) {
          tipOffset.left = 0;
        }
        tip.offset(tipOffset);
        if (step.placement === 'bottom' || step.placement === 'top') {
          if (original_left !== tipOffset.left) {
            return this._replaceArrow(tip, (tipOffset.left - original_left) * 2, original_offsetWidth, 'left');
          }
        } else {
          if (original_top !== tipOffset.top) {
            return this._replaceArrow(tip, (tipOffset.top - original_top) * 2, original_offsetHeight, 'top');
          }
        }
      };

      Tour.prototype._replaceArrow = function(tip, delta, dimension, position) {
        return tip.find(".arrow").css(position, delta ? 50 * (1 - delta / dimension) + "%" : '');
      };

      Tour.prototype._scrollIntoView = function(tip) {
        var tipRect;

        tipRect = tip.get(0).getBoundingClientRect();
        if (!(tipRect.top >= 0 && tipRect.bottom < $(window).height() && tipRect.left >= 0 && tipRect.right < $(window).width())) {
          return tip.get(0).scrollIntoView(true);
        }
      };

      Tour.prototype._onresize = function(cb, timeout) {
        return $(window).on("resize.bootstrap-tour", function() {
          clearTimeout(timeout);
          return timeout = setTimeout(cb, 100);
        });
      };

      Tour.prototype._setupKeyboardNavigation = function() {
        var _this = this;

        if (this._options.keyboard) {
          return $(document).on("keyup.bootstrap-tour", function(e) {
            if (!e.which) {
              return;
            }
            switch (e.which) {
              case 39:
                e.preventDefault();
                if (_this._current < _this._steps.length - 1) {
                  return _this.next();
                } else {
                  return _this.end();
                }
                break;
              case 37:
                e.preventDefault();
                if (_this._current > 0) {
                  return _this.prev();
                }
                break;
              case 27:
                e.preventDefault();
                return _this.end();
            }
          });
        }
      };

      Tour.prototype._makePromise = function(result) {
        if (result && $.isFunction(result.then)) {
          return result;
        } else {
          return null;
        }
      };

      Tour.prototype._callOnPromiseDone = function(promise, cb, arg) {
        var _this = this;

        if (promise) {
          return promise.then(function(e) {
            return cb.call(_this, arg);
          });
        } else {
          return cb.call(this, arg);
        }
      };

      Tour.prototype._showBackdrop = function(el) {
        if (this.backdrop.overlay !== null) {
          return;
        }
        this._showOverlay();
        return this._showOverlayElement(el);
      };

      Tour.prototype._hideBackdrop = function() {
        if (this.backdrop.overlay === null) {
          return;
        }
        this._hideOverlayElement();
        return this._hideOverlay();
      };

      Tour.prototype._showOverlay = function() {
        this.backdrop = $('<div/>');
        this.backdrop.addClass('tour-backdrop');
        this.backdrop.height($(document).innerHeight());
        return $('body').append(this.backdrop);
      };

      Tour.prototype._hideOverlay = function() {
        this.backdrop.remove();
        return this.backdrop.overlay = null;
      };

      Tour.prototype._showOverlayElement = function(el) {
        var background, offset, padding, step;

        step = $(el);
        padding = 5;
        offset = step.offset();
        offset.top = offset.top - padding;
        offset.left = offset.left - padding;
        background = $('<div/>');
        background.width(step.innerWidth() + padding).height(step.innerHeight() + padding).addClass('tour-step-background').offset(offset);
        step.addClass('tour-step-backdrop');
        $('body').append(background);
        this.backdrop.step = step;
        return this.backdrop.background = background;
      };

      Tour.prototype._hideOverlayElement = function() {
        this.backdrop.step.removeClass('tour-step-backdrop');
        this.backdrop.background.remove();
        this.backdrop.step = null;
        return this.backdrop.background = null;
      };

      return Tour;

    })();
    return window.Tour = Tour;
  })(jQuery, window);

}).call(this);;/*
 Highcharts JS v3.0.1 (2013-04-09)

 (c) 2009-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
(function(){function v(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function y(){var a,b=arguments.length,c={},d=function(a,b){var c,h;for(h in b)b.hasOwnProperty(h)&&(c=b[h],typeof a!=="object"&&(a={}),a[h]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&typeof c.nodeType!=="number"?d(a[h]||{},c):b[h]);return a};for(a=0;a<b;a++)c=d(c,arguments[a]);return c}function u(a,b){return parseInt(a,b||10)}function fa(a){return typeof a==="string"}function V(a){return typeof a===
"object"}function Ba(a){return Object.prototype.toString.call(a)==="[object Array]"}function Ca(a){return typeof a==="number"}function ka(a){return I.log(a)/I.LN10}function da(a){return I.pow(10,a)}function ga(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function r(a){return a!==x&&a!==null}function A(a,b,c){var d,e;if(fa(b))r(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(r(b)&&V(b))for(d in b)a.setAttribute(d,b[d]);return e}function ha(a){return Ba(a)?
a:[a]}function o(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],typeof c!=="undefined"&&c!==null)return c}function L(a,b){if(Da&&b&&b.opacity!==x)b.filter="alpha(opacity="+b.opacity*100+")";v(a.style,b)}function U(a,b,c,d,e){a=z.createElement(a);b&&v(a,b);e&&L(a,{padding:0,border:S,margin:0});c&&L(a,c);d&&d.appendChild(a);return a}function ea(a,b){var c=function(){};c.prototype=new a;v(c.prototype,b);return c}function Na(a,b,c,d){var e=N.lang,f=b===-1?((a||0).toString().split(".")[1]||
"").length:isNaN(b=Q(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(u(a=Q(+a||0).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+Q(a-c).toFixed(f).slice(2):"")}function ua(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Ea(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<
i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=N.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e=Na(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:"")):e=Ua(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function ib(a,b,c,d){var e,c=o(c,1);e=a/c;b||(b=[1,2,2.5,5,10],d&&d.allowDecimals===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2)break;a*=c;return a}function yb(a,b){var c=b||[[zb,[1,2,5,
10,20,25,50,100,200,500]],[jb,[1,2,5,10,15,30]],[Va,[1,2,5,10,15,30]],[Oa,[1,2,3,4,6,8,12]],[oa,[1,2]],[Wa,[1,2]],[Pa,[1,2,3,4,6]],[va,null]],d=c[c.length-1],e=E[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=E[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+E[c[g+1][0]])/2)break;e===E[va]&&a<5*e&&(f=[1,2,5]);e===E[va]&&a<5*e&&(f=[1,2,5]);c=ib(a/e,f);return{unitRange:e,count:c,unitName:d[0]}}function Ab(a,b,c,d){var e=[],f={},g=N.global.useUTC,h,i=new Date(b),j=a.unitRange,k=a.count;if(r(b)){j>=E[jb]&&
(i.setMilliseconds(0),i.setSeconds(j>=E[Va]?0:k*T(i.getSeconds()/k)));if(j>=E[Va])i[Bb](j>=E[Oa]?0:k*T(i[kb]()/k));if(j>=E[Oa])i[Cb](j>=E[oa]?0:k*T(i[lb]()/k));if(j>=E[oa])i[mb](j>=E[Pa]?1:k*T(i[Qa]()/k));j>=E[Pa]&&(i[Db](j>=E[va]?0:k*T(i[Xa]()/k)),h=i[Ya]());j>=E[va]&&(h-=h%k,i[Eb](h));if(j===E[Wa])i[mb](i[Qa]()-i[nb]()+o(d,1));b=1;h=i[Ya]();for(var d=i.getTime(),m=i[Xa](),l=i[Qa](),i=g?0:(864E5+i.getTimezoneOffset()*6E4)%864E5;d<c;)e.push(d),j===E[va]?d=Za(h+b*k,0):j===E[Pa]?d=Za(h,m+b*k):!g&&(j===
E[oa]||j===E[Wa])?d=Za(h,m,l+b*k*(j===E[oa]?1:7)):(j<=E[Oa]&&d%E[oa]===i&&(f[d]=oa),d+=j*k),b++;e.push(d)}e.info=v(a,{higherRanks:f,totalRange:j*k});return e}function Fb(){this.symbol=this.color=0}function Gb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Fa(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function pa(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Ga(a,
b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Ra(a){$a||($a=U(wa));a&&$a.appendChild(a);$a.innerHTML=""}function qa(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;else O.console&&console.log(c)}function ia(a){return parseFloat(a.toPrecision(14))}function Ha(a,b){xa=o(a,b.animation)}function Hb(){var a=N.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";Za=a?Date.UTC:function(a,b,c,g,h,i){return(new Date(a,b,o(c,1),o(g,0),o(h,
0),o(i,0))).getTime()};kb=b+"Minutes";lb=b+"Hours";nb=b+"Day";Qa=b+"Date";Xa=b+"Month";Ya=b+"FullYear";Bb=c+"Minutes";Cb=c+"Hours";mb=c+"Date";Db=c+"Month";Eb=c+"FullYear"}function ra(){}function Ia(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function ob(a,b){this.axis=a;if(b)this.options=b,this.id=b.id}function Ib(a,b,c,d,e,f){var g=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.stack=e;this.percent=f==="percent";this.alignOptions=
{align:b.align||(g?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(g?"middle":c?"bottom":"top"),y:o(b.y,g?4:c?14:-6),x:o(b.x,g?c?-6:6:0)};this.textAlign=b.textAlign||(g?c?"right":"left":"center")}function ab(){this.init.apply(this,arguments)}function pb(){this.init.apply(this,arguments)}function qb(a,b){this.init(a,b)}function rb(a,b){this.init(a,b)}function sb(){this.init.apply(this,arguments)}var x,z=document,O=window,I=Math,t=I.round,T=I.floor,ja=I.ceil,q=I.max,K=I.min,Q=I.abs,Y=I.cos,
ca=I.sin,Ja=I.PI,bb=Ja*2/360,ya=navigator.userAgent,Jb=O.opera,Da=/msie/i.test(ya)&&!Jb,cb=z.documentMode===8,db=/AppleWebKit/.test(ya),eb=/Firefox/.test(ya),Kb=/(Mobile|Android|Windows Phone)/.test(ya),sa="http://www.w3.org/2000/svg",Z=!!z.createElementNS&&!!z.createElementNS(sa,"svg").createSVGRect,Rb=eb&&parseInt(ya.split("Firefox/")[1],10)<4,$=!Z&&!Da&&!!z.createElement("canvas").getContext,Sa,fb=z.documentElement.ontouchstart!==x,Lb={},tb=0,$a,N,Ua,xa,ub,E,ta=function(){},za=[],wa="div",S="none",
Mb="rgba(192,192,192,"+(Z?1.0E-4:0.002)+")",zb="millisecond",jb="second",Va="minute",Oa="hour",oa="day",Wa="week",Pa="month",va="year",Nb="stroke-width",Za,kb,lb,nb,Qa,Xa,Ya,Bb,Cb,mb,Db,Eb,aa={};O.Highcharts=O.Highcharts?qa(16,!0):{};Ua=function(a,b,c){if(!r(b)||isNaN(b))return"Invalid date";var a=o(a,"%Y-%m-%d %H:%M:%S"),d=new Date(b),e,f=d[lb](),g=d[nb](),h=d[Qa](),i=d[Xa](),j=d[Ya](),k=N.lang,m=k.weekdays,d=v({a:m[g].substr(0,3),A:m[g],d:ua(h),e:h,b:k.shortMonths[i],B:k.months[i],m:ua(i+1),y:j.toString().substr(2,
2),Y:j,H:ua(f),I:ua(f%12||12),l:f%12||12,M:ua(d[kb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:ua(d.getSeconds()),L:ua(t(b%1E3),3)},Highcharts.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};Fb.prototype={wrapColor:function(a){if(this.color>=a)this.color=0},wrapSymbol:function(a){if(this.symbol>=a)this.symbol=0}};E=function(){for(var a=0,b=arguments,c=b.length,d={};a<c;a++)d[b[a++]]=b[a];return d}(zb,
1,jb,1E3,Va,6E4,Oa,36E5,oa,864E5,Wa,6048E5,Pa,26784E5,va,31556952E3);ub={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-
6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){O.HighchartsAdapter=O.HighchartsAdapter||a&&{init:function(b){var c=a.fx,d=c.step,e,f=a.Tween,g=f&&f.propHooks;a.extend(a.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}});a.each(["cur","_default","width","height",
"opacity"],function(a,b){var e=d,k,m;b==="cur"?e=c.prototype:b==="_default"&&f&&(e=g[b],b="set");(k=e[b])&&(e[b]=function(c){c=a?c:this;m=c.elem;return m.attr?m.attr(c.prop,b==="cur"?x:c.now):k.apply(this,arguments)})});e=function(a){var c=a.elem,d;if(!a.started)d=b.init(c,c.d,c.toD),a.start=d[0],a.end=d[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))};f?g.d={set:e}:d.d=e;this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){for(var c=
0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,d;fa(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==x)c.chart=c.chart||{},c.chart.renderTo=this[0],new Highcharts[a](c,b[1]),d=this;c===x&&(d=za[A(this[0],"data-highcharts-chart")]);return d}},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);
return d},offset:function(b){return a(b).offset()},addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=z.removeEventListener?"removeEventListener":"detachEvent";z[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!Da&&d&&(delete d.layerX,delete d.layerY);v(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&
(h=!0)}}});a(b).trigger(f);b[g]&&(b[c]=b[g],b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===x)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=a(b);if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==x&&b.attr&&(c.opacity+="px");e.animate(c,d)},stop:function(b){a(b).stop()}}})(O.jQuery);var W=O.HighchartsAdapter,M=W||{};W&&W.init.call(W,ub);var gb=M.adapterRun,Sb=M.getScript,la=M.inArray,n=M.each,Ob=M.grep,Tb=M.offset,
Ka=M.map,J=M.addEvent,ba=M.removeEvent,D=M.fireEvent,Pb=M.washMouseEvent,vb=M.animate,Ta=M.stop,M={enabled:!0,align:"center",x:0,y:15,style:{color:"#666",cursor:"default",fontSize:"11px",lineHeight:"14px"}};N={colors:"#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/3.0.1/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/3.0.1/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:5,
defaultSeriesType:"line",ignoreHiddenSeries:!0,spacingTop:10,spacingRight:10,spacingBottom:15,spacingLeft:10,style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",y:15,style:{color:"#274b6d",fontSize:"16px"}},subtitle:{text:"",align:"center",y:30,style:{color:"#4d759e"}},plotOptions:{line:{allowPointSelect:!1,
showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{enabled:!0,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:y(M,{enabled:!1,formatter:function(){return this.y},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,showInLegend:!0,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:!0}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,
align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderWidth:1,borderColor:"#909090",borderRadius:5,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{cursor:"pointer",color:"#274b6d",fontSize:"12px"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolWidth:16,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",
position:"relative",top:"1em"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:Z,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',
pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',shadow:!0,snap:Kb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var X=N.plotOptions,W=X.line;Hb();var ma=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Ka(a.stops,
function(a){return ma(a[1])}):(c=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a))?b=[u(c[1]),u(c[2]),u(c[3]),parseFloat(c[4],10)]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a))?b=[u(c[1],16),u(c[2],16),u(c[3],16),1]:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))&&(b=[u(c[1]),u(c[2]),u(c[3]),1])})(a);return{get:function(c){var f;d?(f=y(a),f.stops=[].concat(f.stops),n(d,function(a,b){f.stops[b]=[f.stops[b][0],
a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)n(d,function(b){b.brighten(a)});else if(Ca(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=u(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this}}};ra.prototype={init:function(a,b){this.element=b==="span"?U(b):z.createElementNS(sa,b);this.renderer=a;this.attrSetters={}},opacity:1,animate:function(a,b,c){b=
o(b,xa,!0);Ta(this);if(b){b=y(b);if(c)b.complete=c;vb(this,a,b)}else this.attr(a),c&&c()},attr:function(a,b){var c,d,e,f,g=this.element,h=g.nodeName.toLowerCase(),i=this.renderer,j,k=this.attrSetters,m=this.shadows,l,p,s=this;fa(a)&&r(b)&&(c=a,a={},a[c]=b);if(fa(a))c=a,h==="circle"?c={x:"cx",y:"cy"}[c]||c:c==="strokeWidth"&&(c="stroke-width"),s=A(g,c)||this[c]||0,c!=="d"&&c!=="visibility"&&(s=parseFloat(s));else{for(c in a)if(j=!1,d=a[c],e=k[c]&&k[c].call(this,d,c),e!==!1){e!==x&&(d=e);if(c==="d")d&&
d.join&&(d=d.join(" ")),/(NaN| {2}|^$)/.test(d)&&(d="M 0 0");else if(c==="x"&&h==="text")for(e=0;e<g.childNodes.length;e++)f=g.childNodes[e],A(f,"x")===A(g,"x")&&A(f,"x",d);else if(this.rotation&&(c==="x"||c==="y"))p=!0;else if(c==="fill")d=i.color(d,g,c);else if(h==="circle"&&(c==="x"||c==="y"))c={x:"cx",y:"cy"}[c]||c;else if(h==="rect"&&c==="r")A(g,{rx:d,ry:d}),j=!0;else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="verticalAlign"||c==="scaleX"||c==="scaleY")j=p=!0;else if(c==="stroke")d=
i.color(d,g,c);else if(c==="dashstyle")if(c="stroke-dasharray",d=d&&d.toLowerCase(),d==="solid")d=S;else{if(d){d=d.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(e=d.length;e--;)d[e]=u(d[e])*a["stroke-width"];d=d.join(",")}}else if(c==="width")d=u(d);else if(c==="align")c="text-anchor",d={left:"start",center:"middle",
right:"end"}[d];else if(c==="title")e=g.getElementsByTagName("title")[0],e||(e=z.createElementNS(sa,"title"),g.appendChild(e)),e.textContent=d;c==="strokeWidth"&&(c="stroke-width");if(c==="stroke-width"||c==="stroke"){this[c]=d;if(this.stroke&&this["stroke-width"])A(g,"stroke",this.stroke),A(g,"stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(c==="stroke-width"&&d===0&&this.hasStroke)g.removeAttribute("stroke"),this.hasStroke=!1;j=!0}this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&
(l||(this.symbolAttr(a),l=!0),j=!0);if(m&&/^(width|height|visibility|x|y|d|transform)$/.test(c))for(e=m.length;e--;)A(m[e],c,c==="height"?q(d-(m[e].cutHeight||0),0):d);if((c==="width"||c==="height")&&h==="rect"&&d<0)d=0;this[c]=d;c==="text"?(d!==this.textStr&&delete this.bBox,this.textStr=d,this.added&&i.buildText(this)):j||A(g,c,d)}p&&this.updateTransform()}return s},addClass:function(a){A(this.element,"class",A(this.element,"class")+" "+a);return this},symbolAttr:function(a){var b=this;n("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),
function(c){b[c]=o(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":S)},crisp:function(a,b,c,d,e){var f,g={},h={},i,a=a||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;i=t(a)%2/2;h.x=T(b||this.x||0)+i;h.y=T(c||this.y||0)+i;h.width=T((d||this.width||0)-2*i);h.height=T((e||this.height||0)-2*i);h.strokeWidth=a;for(f in h)this[f]!==h[f]&&(this[f]=g[f]=h[f]);return g},
css:function(a){var b=this.element,b=a&&a.width&&b.nodeName.toLowerCase()==="text",c,d="",e=function(a,b){return"-"+b.toLowerCase()};if(a&&a.color)a.fill=a.color;this.styles=a=v(this.styles,a);$&&b&&delete a.width;if(Da&&!Z)b&&delete a.width,L(this.element,a);else{for(c in a)d+=c.replace(/([A-Z])/g,e)+":"+a[c]+";";this.attr({style:d})}b&&this.added&&this.renderer.buildText(this);return this},on:function(a,b){if(fb&&a==="click")this.element.ontouchstart=function(a){a.preventDefault();b()};this.element["on"+
a]=b;return this},setRadialReference:function(a){this.element.radialReference=a;return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();this.styles=v(this.styles,a);L(this.element,a);return this},htmlGetBBox:function(){var a=this.element,b=this.bBox;if(!b){if(a.nodeName===
"text")a.style.position="absolute";b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}}return b},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=g&&g!=="left",j=this.shadows;if(c||d)L(b,{marginLeft:c,marginTop:d}),j&&n(j,function(a){L(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&n(b.childNodes,function(c){a.invertChild(c,
b)});if(b.tagName==="SPAN"){var k,m,j=this.rotation,l,p=0,s=1,p=0,wb;l=u(this.textWidth);var B=this.xCorr||0,w=this.yCorr||0,G=[j,g,b.innerHTML,this.textWidth].join(",");k={};if(G!==this.cTT){if(r(j))a.isSVG?(B=Da?"-ms-transform":db?"-webkit-transform":eb?"MozTransform":Jb?"-o-transform":"",k[B]=k.transform="rotate("+j+"deg)"):(p=j*bb,s=Y(p),p=ca(p),k.filter=j?["progid:DXImageTransform.Microsoft.Matrix(M11=",s,", M12=",-p,", M21=",p,", M22=",s,", sizingMethod='auto expand')"].join(""):S),L(b,k);k=
o(this.elemWidth,b.offsetWidth);m=o(this.elemHeight,b.offsetHeight);if(k>l&&/[ \-]/.test(b.textContent||b.innerText))L(b,{width:l+"px",display:"block",whiteSpace:"normal"}),k=l;l=a.fontMetrics(b.style.fontSize).b;B=s<0&&-k;w=p<0&&-m;wb=s*p<0;B+=p*l*(wb?1-h:h);w-=s*l*(j?wb?h:1-h:1);i&&(B-=k*h*(s<0?-1:1),j&&(w-=m*h*(p<0?-1:1)),L(b,{textAlign:g}));this.xCorr=B;this.yCorr=w}L(b,{left:e+B+"px",top:f+w+"px"});if(db)m=b.offsetHeight;this.cTT=G}}else this.alignOnAdd=!0},updateTransform:function(){var a=this.translateX||
0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=[];e&&(a+=this.attr("width"),b+=this.attr("height"));(a||b)&&g.push("translate("+a+","+b+")");e?g.push("rotate(90) scale(-1,1)"):f&&g.push("rotate("+f+" "+(this.x||0)+" "+(this.y||0)+")");(r(c)||r(d))&&g.push("scale("+o(c,1)+" "+o(d,1)+")");g.length&&A(this.element,"transform",g.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;
f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||fa(c))this.alignTo=d=c||"renderer",ga(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=o(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=t(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=t(g);
this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(){var a=this.bBox,b=this.renderer,c,d=this.rotation;c=this.element;var e=this.styles,f=d*bb;if(!a){if(c.namespaceURI===sa||b.forExport){try{a=c.getBBox?v({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight}}catch(g){}if(!a||a.width<0)a={width:0,height:0}}else a=this.htmlGetBBox();if(b.isSVG){b=a.width;c=a.height;if(Da&&e&&e.fontSize==="11px"&&c.toPrecision(3)==="22.7")a.height=c=14;if(d)a.width=
Q(c*ca(f))+Q(b*Y(f)),a.height=Q(c*Y(f))+Q(b*ca(f))}this.bBox=a}return a},show:function(){return this.attr({visibility:"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.hide()}})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=d.childNodes,f=this.element,g=A(f,"zIndex"),h;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);if(g)c.handleZ=
!0,g=u(g);if(c.handleZ)for(c=0;c<e.length;c++)if(a=e[c],b=A(a,"zIndex"),a!==f&&(u(b)>g||!r(g)&&r(b))){d.insertBefore(f,a);h=!0;break}h||d.appendChild(f);this.added=!0;D(this,"add");return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d,e;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;Ta(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(e=0;e<a.stops.length;e++)a.stops[e]=a.stops[e].destroy();
a.stops=null}a.safeRemoveChild(b);c&&n(c,function(b){a.safeRemoveChild(b)});a.alignTo&&ga(a.renderer.alignedObjects,a);for(d in a)delete a[d];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=o(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+o(a.offsetX,1)+", "+o(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;A(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:S});if(c)A(f,
"height",q(A(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this}};var Aa=function(){this.init.apply(this,arguments)};Aa.prototype={Element:ra,init:function(a,b,c,d){var e=location,f;f=this.createElement("svg").attr({xmlns:sa,version:"1.1"});a.appendChild(f.element);this.isSVG=!0;this.box=f.element;this.boxWrapper=f;this.alignedObjects=[];this.url=(eb||db)&&z.getElementsByTagName("base").length?e.href.replace(/#.*?$/,"").replace(/([\('\)])/g,
"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(z.createTextNode("Created with Highcharts 3.0.1"));this.defs=this.createElement("defs").add();this.forExport=d;this.gradients={};this.setSize(b,c,!1);var g;if(eb&&a.getBoundingClientRect)this.subPixelFix=b=function(){L(a,{left:0,top:0});g=a.getBoundingClientRect();L(a,{left:ja(g.left)-g.left+"px",top:ja(g.top)-g.top+"px"})},b(),J(O,"resize",b)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Ga(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&ba(O,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=o(a.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,
"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),f=b.childNodes,g=/style="([^"]+)"/,h=/href="([^"]+)"/,i=A(b,"x"),j=a.styles,k=j&&j.width&&u(j.width),m=j&&j.lineHeight,l=f.length;l--;)b.removeChild(f[l]);k&&!a.added&&this.box.appendChild(b);e[e.length-1]===""&&e.pop();n(e,function(e,f){var l,o=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");l=e.split("|||");n(l,function(e){if(e!==""||l.length===1){var p={},n=z.createElementNS(sa,"tspan"),q;g.test(e)&&(q=
e.match(g)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),A(n,"style",q));h.test(e)&&!d&&(A(n,"onclick",'location.href="'+e.match(h)[1]+'"'),L(n,{cursor:"pointer"}));e=(e.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");n.appendChild(z.createTextNode(e));o?p.dx=0:p.x=i;A(n,p);!o&&f&&(!Z&&d&&L(n,{display:"block"}),A(n,"dy",m||c.fontMetrics(/px$/.test(n.style.fontSize)?n.style.fontSize:j.fontSize).h,db&&n.offsetHeight));b.appendChild(n);o++;if(k)for(var e=e.replace(/([^\^])-/g,
"$1- ").split(" "),r,t=[];e.length||t.length;)delete a.bBox,r=a.getBBox().width,p=r>k,!p||e.length===1?(e=t,t=[],e.length&&(n=z.createElementNS(sa,"tspan"),A(n,{dy:m||16,x:i}),q&&A(n,"style",q),b.appendChild(n),r>k&&(k=r))):(n.removeChild(n.firstChild),t.unshift(e.pop())),e.length&&n.appendChild(z.createTextNode(e.join(" ").replace(/- /g,"-")))}})})},button:function(a,b,c,d,e,f,g){var h=this.label(a,b,c,null,null,null,null,null,"button"),i=0,j,k,m,l,p,a={x1:0,y1:0,x2:0,y2:1},e=y({"stroke-width":1,
stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);m=e.style;delete e.style;f=y(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);l=f.style;delete f.style;g=y(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);p=g.style;delete g.style;J(h.element,"mouseenter",function(){h.attr(f).css(l)});J(h.element,"mouseleave",function(){j=[e,f,g][i];k=[m,l,p][i];h.attr(j).css(k)});h.setState=function(a){(i=
a)?a===2&&h.attr(g).css(p):h.attr(e).css(m)};return h.on("click",function(){d.call(h)}).attr(e).css(v({cursor:"default"},m))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=t(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=t(a[2])+b%2/2);return a},path:function(a){var b={fill:S};Ba(a)?b.d=a:V(a)&&v(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=V(a)?a:{x:a,y:b,r:c};return this.createElement("circle").attr(a)},arc:function(a,b,c,d,e,f){if(V(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,
a=a.x;return this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0})},rect:function(a,b,c,d,e,f){e=V(a)?a.r:e;e=this.createElement("rect").attr({rx:e,ry:e,fill:S});return e.attr(V(a)?a:e.crisp(f,a,b,q(c,0),q(d,0)))},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[o(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return r(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,
b,c,d,e){var f={preserveAspectRatio:S};arguments.length>1&&v(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(t(b),t(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),v(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&v(g,f);else if(i.test(a))k=function(a,b){a.element&&(a.attr({width:b[0],
height:b[1]}),a.alignByTranslate||a.translate(t((d-b[0])/2),t((e-b[1])/2)))},j=a.match(i)[1],a=Lb[j],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),U("img",{onload:function(){k(g,Lb[j]=[this.width,this.height])},src:j}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",
a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=Y(f),j=ca(f),k=Y(g),g=ca(g),e=e.end-f<Ja?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]}},clipRect:function(a,b,c,d){var e="highcharts-"+tb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),
a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;return a},color:function(a,b,c){var d=this,e,f=/^rgba/,g,h,i,j,k,m,l,p=[];a&&a.linearGradient?g="linearGradient":a&&a.radialGradient&&(g="radialGradient");if(g){c=a[g];h=d.gradients;j=a.stops;b=b.radialReference;Ba(c)&&(a[g]=c={x1:c[0],y1:c[1],x2:c[2],y2:c[3],gradientUnits:"userSpaceOnUse"});g==="radialGradient"&&b&&!r(c.gradientUnits)&&(c=y(c,{cx:b[0]-b[2]/2+c.cx*b[2],cy:b[1]-b[2]/2+c.cy*b[2],r:c.r*b[2],gradientUnits:"userSpaceOnUse"}));for(l in c)l!==
"id"&&p.push(l,c[l]);for(l in j)p.push(j[l]);p=p.join(",");h[p]?a=h[p].id:(c.id=a="highcharts-"+tb++,h[p]=i=d.createElement(g).attr(c).add(d.defs),i.stops=[],n(j,function(a){f.test(a[1])?(e=ma(a[1]),k=e.get("rgb"),m=e.get("a")):(k=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":m}).add(i);i.stops.push(a)}));return"url("+d.url+"#"+a+")"}else return f.test(a)?(e=ma(a),A(b,c+"-opacity",e.get("a")),e.get("rgb")):(b.removeAttribute(c+"-opacity"),a)},text:function(a,
b,c,d){var e=N.chart.style,f=$||!Z&&this.forExport;if(d&&!this.forExport)return this.html(a,b,c);b=t(o(b,0));c=t(o(c,0));a=this.createElement("text").attr({x:b,y:c,text:a}).css({fontFamily:e.fontFamily,fontSize:e.fontSize});f&&a.css({position:"absolute"});a.x=b;a.y=c;return a},html:function(a,b,c){var d=N.chart.style,e=this.createElement("span"),f=e.attrSetters,g=e.element,h=e.renderer;f.text=function(a){a!==g.innerHTML&&delete this.bBox;g.innerHTML=a;return!1};f.x=f.y=f.align=function(a,b){b==="align"&&
(b="textAlign");e[b]=a;e.htmlUpdateTransform();return!1};e.attr({text:a,x:t(b),y:t(c)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:d.fontFamily,fontSize:d.fontSize});e.css=e.htmlCss;if(h.isSVG)e.add=function(a){var b,c=h.box.parentNode,d=[];if(a){if(b=a.div,!b){for(;a;)d.push(a),a=a.parentGroup;n(d.reverse(),function(a){var d;b=a.div=a.div||U(wa,{className:A(a.element,"class")},{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;v(a.attrSetters,
{translateX:function(a){d.left=a+"px"},translateY:function(a){d.top=a+"px"},visibility:function(a,b){d[b]=a}})})}}else b=c;b.appendChild(g);e.added=!0;e.alignOnAdd&&e.htmlUpdateTransform();return e};return e},fontMetrics:function(a){var a=u(a||11),a=a<24?a+4:t(a*1.2),b=t(a*0.8);return{h:a,b:b}},label:function(a,b,c,d,e,f,g,h,i){function j(){var a,b;a=o.element.style;w=(La===void 0||xb===void 0||s.styles.textAlign)&&o.getBBox();s.width=(La||w.width||0)+2*q+hb;s.height=(xb||w.height||0)+2*q;A=q+p.fontMetrics(a&&
a.fontSize).b;if(z){if(!B)a=t(-G*q),b=h?-A:0,s.box=B=d?p.symbol(d,a,b,s.width,s.height):p.rect(a,b,s.width,s.height,0,u[Nb]),B.add(s);B.isImg||B.attr(y({width:s.width,height:s.height},u));u=null}}function k(){var a=s.styles,a=a&&a.textAlign,b=hb+q*(1-G),c;c=h?0:A;if(r(La)&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(La-w.width);(b!==o.x||c!==o.y)&&o.attr({x:b,y:c});o.x=b;o.y=c}function m(a,b){B?B.attr(a,b):u[a]=b}function l(){o.add(s);s.attr({text:a,x:b,y:c});B&&r(e)&&s.attr({anchorX:e,
anchorY:f})}var p=this,s=p.g(i),o=p.text("",0,0,g).attr({zIndex:1}),B,w,G=0,q=3,hb=0,La,xb,P,H,C=0,u={},A,g=s.attrSetters,z;J(s,"add",l);g.width=function(a){La=a;return!1};g.height=function(a){xb=a;return!1};g.padding=function(a){r(a)&&a!==q&&(q=a,k());return!1};g.paddingLeft=function(a){r(a)&&a!==hb&&(hb=a,k());return!1};g.align=function(a){G={left:0,center:0.5,right:1}[a];return!1};g.text=function(a,b){o.attr(b,a);j();k();return!1};g[Nb]=function(a,b){z=!0;C=a%2/2;m(b,a);return!1};g.stroke=g.fill=
g.r=function(a,b){b==="fill"&&(z=!0);m(b,a);return!1};g.anchorX=function(a,b){e=a;m(b,a+C-P);return!1};g.anchorY=function(a,b){f=a;m(b,a-H);return!1};g.x=function(a){s.x=a;a-=G*((La||w.width)+q);P=t(a);s.attr("translateX",P);return!1};g.y=function(a){H=s.y=t(a);s.attr("translateY",H);return!1};var E=s.css;return v(s,{css:function(a){if(a){var b={},a=y(a);n("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","),function(c){a[c]!==x&&(b[c]=a[c],delete a[c])});o.css(b)}return E.call(s,a)},
getBBox:function(){return{width:w.width+2*q,height:w.height+2*q,x:w.x-q,y:w.y-q}},shadow:function(a){B&&B.shadow(a);return s},destroy:function(){ba(s,"add",l);ba(s.element,"mouseenter");ba(s.element,"mouseleave");o&&(o=o.destroy());B&&(B=B.destroy());ra.prototype.destroy.call(s);s=p=j=k=m=l=null}})}};Sa=Aa;var F;if(!Z&&!$){Highcharts.VMLElement=F={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===wa;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");
d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=U(c);this.renderer=a;this.attrSetters={}},add:function(a){var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();D(this,"add");return this},updateTransform:ra.prototype.htmlUpdateTransform,attr:function(a,b){var c,
d,e,f=this.element||{},g=f.style,h=f.nodeName,i=this.renderer,j=this.symbolName,k,m=this.shadows,l,p=this.attrSetters,s=this;fa(a)&&r(b)&&(c=a,a={},a[c]=b);if(fa(a))c=a,s=c==="strokeWidth"||c==="stroke-width"?this.strokeweight:this[c];else for(c in a)if(d=a[c],l=!1,e=p[c]&&p[c].call(this,d,c),e!==!1&&d!==null){e!==x&&(d=e);if(j&&/^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c))k||(this.symbolAttr(a),k=!0),l=!0;else if(c==="d"){d=d||[];this.d=d.join(" ");e=d.length;l=[];for(var o;e--;)if(Ca(d[e]))l[e]=
t(d[e]*10)-5;else if(d[e]==="Z")l[e]="x";else if(l[e]=d[e],d.isArc&&(d[e]==="wa"||d[e]==="at"))o=d[e]==="wa"?1:-1,l[e+5]===l[e+7]&&(l[e+7]-=o),l[e+6]===l[e+8]&&(l[e+8]-=o);d=l.join(" ")||"x";f.path=d;if(m)for(e=m.length;e--;)m[e].path=m[e].cutOff?this.cutOffPath(d,m[e].cutOff):d;l=!0}else if(c==="visibility"){if(m)for(e=m.length;e--;)m[e].style[c]=d;h==="DIV"&&(d=d==="hidden"?"-999em":0,cb||(g[c]=d?"visible":"hidden"),c="top");g[c]=d;l=!0}else if(c==="zIndex")d&&(g[c]=d),l=!0;else if(la(c,["x","y",
"width","height"])!==-1)this[c]=d,c==="x"||c==="y"?c={x:"left",y:"top"}[c]:d=q(0,d),this.updateClipping?(this[c]=d,this.updateClipping()):g[c]=d,l=!0;else if(c==="class"&&h==="DIV")f.className=d;else if(c==="stroke")d=i.color(d,f,c),c="strokecolor";else if(c==="stroke-width"||c==="strokeWidth")f.stroked=d?!0:!1,c="strokeweight",this[c]=d,Ca(d)&&(d+="px");else if(c==="dashstyle")(f.getElementsByTagName("stroke")[0]||U(i.prepVML(["<stroke/>"]),null,null,f))[c]=d||"solid",this.dashstyle=d,l=!0;else if(c===
"fill")if(h==="SPAN")g.color=d;else{if(h!=="IMG")f.filled=d!==S?!0:!1,d=i.color(d,f,c,this),c="fillcolor"}else if(c==="opacity")l=!0;else if(h==="shape"&&c==="rotation")this[c]=d,f.style.left=-t(ca(d*bb)+1)+"px",f.style.top=t(Y(d*bb))+"px";else if(c==="translateX"||c==="translateY"||c==="rotation")this[c]=d,this.updateTransform(),l=!0;else if(c==="text")this.bBox=null,f.innerHTML=d,l=!0;l||(cb?f[c]=d:A(f,c,d))}return s},clip:function(a){var b=this,c;a?(c=a.members,ga(c,b),c.push(b),b.destroyClip=
function(){ga(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:cb?"inherit":"rect(auto)"});return b.css(a)},css:ra.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Ra(a)},destroy:function(){this.destroyClip&&this.destroyClip();return ra.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=O.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=u(a[c-2])-10*b;
return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,m,l,p,s;k&&typeof k.value!=="string"&&(k="x");l=k;if(a){p=o(a.width,3);s=(a.opacity||0.15)/p;for(e=1;e<=3;e++){m=p*2+1-2*e;c&&(l=this.cutOffPath(k.value,m+0.5));j=['<shape isShadow="true" strokeweight="',m,'" filled="false" path="',l,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=U(g.prepVML(j),null,{left:u(i.left)+o(a.offsetX,1),top:u(i.top)+o(a.offsetY,1)});if(c)h.cutOff=m+1;j=['<stroke color="',
a.color||"black",'" opacity="',s*e,'"/>'];U(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this}};F=ea(ra,F);var na={Element:F,isIE8:ya.indexOf("MSIE 8.0")>-1,init:function(a,b,c){var d,e;this.alignedObjects=[];d=this.createElement(wa);e=d.element;e.style.position="relative";a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.setSize(b,c,!1);if(!z.namespaces.hcv)z.namespaces.add("hcv","urn:schemas-microsoft-com:vml"),
z.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=V(a);return v(e,{members:[],left:f?a.x:a,top:f?a.y:b,width:f?a.width:c,height:f?a.height:d,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+t(a?e:d)+
"px,"+t(a?f:b)+"px,"+t(a?b:f)+"px,"+t(a?d:e)+"px)"};!a&&cb&&c==="DIV"&&v(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){n(e.members,function(a){a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=S;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,m,l=a.linearGradient||a.radialGradient,p,s,o,B,w,q="",a=a.stops,r,t=[],x=function(){h=['<fill colors="'+t.join(",")+'" opacity="',o,'" o:opacity2="',s,'" type="',i,'" ',q,'focus="100%" method="any" />'];
U(e.prepVML(h),null,null,b)};p=a[0];r=a[a.length-1];p[0]>0&&a.unshift([0,p[1]]);r[0]<1&&a.push([1,r[1]]);n(a,function(a,b){g.test(a[1])?(f=ma(a[1]),k=f.get("rgb"),m=f.get("a")):(k=a[1],m=1);t.push(a[0]*100+"% "+k);b?(o=m,B=k):(s=m,w=k)});if(c==="fill")if(i==="gradient")c=l.x1||l[0]||0,a=l.y1||l[1]||0,p=l.x2||l[2]||0,l=l.y2||l[3]||0,q='angle="'+(90-I.atan((l-a)/(p-c))*180/Ja)+'"',x();else{var j=l.r,v=j*2,P=j*2,H=l.cx,C=l.cy,y=b.radialReference,u,j=function(){y&&(u=d.getBBox(),H+=(y[0]-u.x)/u.width-
0.5,C+=(y[1]-u.y)/u.height-0.5,v*=y[2]/u.width,P*=y[2]/u.height);q='src="'+N.global.VMLRadialGradientURL+'" size="'+v+","+P+'" origin="0.5,0.5" position="'+H+","+C+'" color2="'+w+'" ';x()};d.added?j():J(d,"add",j);j=B}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=ma(a),h=["<",c,' opacity="',f.get("a"),'"/>'],U(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?
(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:Aa.prototype.html,path:function(a){var b={coordsize:"10 10"};Ba(a)?b.d=a:V(a)&&v(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){if(V(a))c=a.r,b=a.y,a=a.x;return this.symbol("circle").attr({x:a-
c,y:b-c,width:2*c,height:2*c})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(wa).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},rect:function(a,b,c,d,e,f){if(V(a))b=a.y,c=a.width,d=a.height,f=a.strokeWidth,a=a.x;var g=this.symbol("rect");g.r=e;return g.attr(g.crisp(f,a,b,q(c,0),q(d,0)))},invertChild:function(a,b){var c=b.style;L(a,{flip:"x",
left:u(c.width)-1,top:u(c.height)-1,rotation:-90})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=Y(f),i=ca(f),j=Y(g),k=ca(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d){return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){var f=a+c,g=b+d,h;!r(e)||!e.r?f=Aa.prototype.symbols.square.apply(0,
arguments):(h=K(e.r,c,d),f=["M",a+h,b,"L",f-h,b,"wa",f-2*h,b,f,b+2*h,f-h,b,f,b+h,"L",f,g-h,"wa",f-2*h,g-2*h,f,g,f,g-h,f-h,g,"L",a+h,g,"wa",a,g-2*h,a+2*h,g,a+h,g,a,g-h,"L",a,b+h,"wa",a,b,a+2*h,b+2*h,a,b+h,a+h,b,"x","e"]);return f}}};Highcharts.VMLRenderer=F=function(){this.init.apply(this,arguments)};F.prototype=y(Aa.prototype,na);Sa=F}var Qb;if($)Highcharts.CanVGRenderer=F=function(){sa="http://www.w3.org/1999/xhtml"},F.prototype.symbols={},Qb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();
b=[]}var b=[];return{push:function(c,d){b.length===0&&Sb(d,a);b.push(c)}}}(),Sa=F;Ia.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=a.series[0]&&a.series[0].names,g=this.pos,h=b.labels,i=a.tickPositions,d=d&&e&&!h.step&&!h.staggerLines&&!h.rotation&&c.plotWidth/i.length||!d&&(c.optionsMarginLeft||c.plotWidth/2),j=g===i[0],k=g===i[i.length-1],f=e?o(e[g],f&&f[g],g):g,e=this.label,i=i.info,m;a.isDatetimeAxis&&i&&(m=b.dateTimeLabelFormats[i.higherRanks[g]||
i.unitName]);this.isFirst=j;this.isLast=k;b=a.labelFormatter.call({axis:a,chart:c,isFirst:j,isLast:k,dateTimeLabelFormat:m,value:a.isLog?ia(da(f)):f});g=d&&{width:q(1,t(d-2*(h.padding||10)))+"px"};g=v(g,h.style);if(r(e))e&&e.attr({text:b}).css(g);else{d={align:h.align};if(Ca(h.rotation))d.rotation=h.rotation;this.label=r(b)&&h.enabled?c.renderer.text(b,0,0,h.useHTML).attr(d).css(g).add(a.labelGroup):null}},getLabelSize:function(){var a=this.label,b=this.axis;return a?(this.labelBBox=a.getBBox())[b.horiz?
"height":"width"]:0},getLabelSides:function(){var a=this.axis.options.labels,b=this.labelBBox.width,a=b*{left:0,center:0.5,right:1}[a.align]-a.x;return[-a,b-a]},handleOverflow:function(a,b){var c=!0,d=this.axis,e=d.chart,f=this.isFirst,g=this.isLast,h=b.x,i=d.reversed,j=d.tickPositions;if(f||g){var k=this.getLabelSides(),m=k[0],k=k[1],e=e.plotLeft,l=e+d.len,j=(d=d.ticks[j[a+(f?1:-1)]])&&d.label.xy&&d.label.xy.x+d.getLabelSides()[f?0:1];f&&!i||g&&i?h+m<e&&(h=e-m,d&&h+k>j&&(c=!1)):h+k>l&&(h=l-k,d&&
h+m<j&&(c=!1));b.x=h}return c},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,i=i.staggerLines,a=a+e.x-(f&&d?f*j*(k?-1:1):0),b=b+e.y-(f&&!d?f*j*(k?1:-1):
0);r(e.y)||(b+=u(c.styles.lineHeight)*0.9-c.getBBox().height/2);i&&(b+=g/(h||1)%i*16);return{x:a,y:b}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,m=this.gridLine,l=h?h+"Grid":"grid",p=h?h+"Tick":"tick",s=e[l+"LineWidth"],n=e[l+"LineColor"],B=e[l+"LineDashStyle"],w=e[p+"Length"],l=e[p+"Width"]||0,q=e[p+"Color"],r=e[p+"Position"],
p=this.mark,t=k.step,v=!0,u=d.tickmarkOffset,P=this.getPosition(g,j,u,b),H=P.x,P=P.y,C=g&&H===d.pos||!g&&P===d.pos+d.len?-1:1,y=d.staggerLines;this.isActive=!0;if(s){j=d.getPlotLinePath(j+u,s*C,b,!0);if(m===x){m={stroke:n,"stroke-width":s};if(B)m.dashstyle=B;if(!h)m.zIndex=1;if(b)m.opacity=0;this.gridLine=m=s?f.path(j).attr(m).add(d.gridGroup):null}if(!b&&m&&j)m[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(l&&w)r==="inside"&&(w=-w),d.opposite&&(w=-w),b=this.getMarkPath(H,P,w,l*C,g,f),p?p.animate({d:b,
opacity:c}):this.mark=f.path(b).attr({stroke:q,"stroke-width":l,opacity:c}).add(d.axisGroup);if(i&&!isNaN(H))i.xy=P=this.getLabelPosition(H,P,i,g,k,u,a,t),this.isFirst&&!o(e.showFirstLabel,1)||this.isLast&&!o(e.showLastLabel,1)?v=!1:!y&&g&&k.overflow==="justify"&&!this.handleOverflow(a,P)&&(v=!1),t&&a%t&&(v=!1),v&&!isNaN(P.y)?(P.opacity=c,i[this.isNew?"attr":"animate"](P),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Ga(this,this.axis)}};ob.prototype={render:function(){var a=this,b=a.axis,
c=b.horiz,d=(b.pointRange||0)/2,e=a.options,f=e.label,g=a.label,h=e.width,i=e.to,j=e.from,k=r(j)&&r(i),m=e.value,l=e.dashStyle,p=a.svgElem,s=[],n,B=e.color,w=e.zIndex,G=e.events,t=b.chart.renderer;b.isLog&&(j=ka(j),i=ka(i),m=ka(m));if(h){if(s=b.getPlotLinePath(m,h),d={stroke:B,"stroke-width":h},l)d.dashstyle=l}else if(k){if(j=q(j,b.min-d),i=K(i,b.max+d),s=b.getPlotBandPath(j,i,e),d={fill:B},e.borderWidth)d.stroke=e.borderColor,d["stroke-width"]=e.borderWidth}else return;if(r(w))d.zIndex=w;if(p)s?
p.animate({d:s},null,p.onGetPath):(p.hide(),p.onGetPath=function(){p.show()});else if(s&&s.length&&(a.svgElem=p=t.path(s).attr(d).add(),G))for(n in e=function(b){p.on(b,function(c){G[b].apply(a,[c])})},G)e(n);if(f&&r(f.text)&&s&&s.length&&b.width>0&&b.height>0){f=y({align:c&&k&&"center",x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&!k&&90},f);if(!g)a.label=g=t.text(f.text,0,0).attr({align:f.textAlign||f.align,rotation:f.rotation,zIndex:w}).css(f.style).add();b=[s[1],s[4],
o(s[6],s[1])];s=[s[2],s[5],o(s[7],s[2])];c=Fa(b);k=Fa(s);g.align(f,!1,{x:c,y:k,width:pa(b)-c,height:pa(s)-k});g.show()}else g&&g.hide();return a},destroy:function(){ga(this.axis.plotLinesAndBands,this);Ga(this,this.axis)}};Ib.prototype={destroy:function(){Ga(this,this.axis)},setTotal:function(a){this.cum=this.total=a},render:function(a){var b=this.options,c=b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,0,0,b.useHTML).css(b.style).attr({align:this.textAlign,
rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=this.isNegative,g=c.translate(this.percent?100:this.total,0,0,0,1),c=c.translate(0),c=Q(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e.attr({visibility:this.options.crop===!1||d.isInsidePlot(f.x,f.y)?Z?"inherit":"visible":"hidden"})}};ab.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",
second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:M,lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#4d759e",
fontWeight:"bold"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return this.total},style:M.style}},defaultLeftAxisOptions:{labels:{align:"right",x:-8,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{align:"left",x:8,y:null},title:{rotation:90}},
defaultBottomAxisOptions:{labels:{align:"center",x:0,y:14},title:{rotation:0}},defaultTopAxisOptions:{labels:{align:"center",x:0,y:-5},title:{rotation:0}},init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.xOrY=(this.isXAxis=c)?"x":"y";this.opposite=b.opposite;this.side=this.horiz?this.opposite?0:2:this.opposite?1:3;this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.staggerLines=this.horiz&&d.labels.staggerLines;this.userOptions=
b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=r(d.linkedTo);this.tickmarkOffset=this.categories&&d.tickmarkPlacement==="between"?0.5:0;this.ticks={};this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;
this.stacks={};this._stacksTouched=0;this.min=this.max=null;var f,d=this.options.events;la(this,a.axes)===-1&&(a.axes.push(this),a[c?"xAxis":"yAxis"].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===x)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)J(this,f,d[f]);if(this.isLog)this.val2lin=ka,this.lin2val=da},setOptions:function(a){this.options=y(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,
this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],y(N[this.isXAxis?"xAxis":"yAxis"],a))},update:function(a,b){var c=this.chart,a=c.options[this.xOrY+"Axis"][this.options.index]=y(this.userOptions,a);this.destroy();this._addedPlotLB=!1;this.init(c,a);c.isDirtyBox=!0;o(b,!0)&&c.redraw()},remove:function(a){var b=this.chart,c=this.xOrY+"Axis";n(this.series,function(a){a.remove(!1)});ga(b.axes,this);ga(b[c],this);b.options[c].splice(this.options.index,
1);this.destroy();b.isDirtyBox=!0;o(a,!0)&&b.redraw()},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=N.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ea(h,this);else if(c)g=b;else if(d)g=Ua(d,b);else if(f&&a>=1E3)for(;f--&&g===x;)c=Math.pow(1E3,f+1),a>=c&&e[f]!==null&&(g=Na(b/c,-1)+e[f]);g===x&&(g=b>=1E3?Na(b,0):Na(b,-1));return g},getSeriesExtremes:function(){var a=this,b=a.chart,c=a.stacks,
d=[],e=[],f=a._stacksTouched+=1,g,h;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=null;n(a.series,function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var j=g.options,k,m,l,p,s,n,B,w,G,t=j.threshold,v,u=[],y=0;a.hasVisibleSeries=!0;if(a.isLog&&t<=0)t=j.threshold=null;if(a.isXAxis){if(j=g.xData,j.length)a.dataMin=K(o(a.dataMin,j[0]),Fa(j)),a.dataMax=q(o(a.dataMax,j[0]),pa(j))}else{var P,H,C,A=g.cropped,z=g.xAxis.getExtremes(),E=!!g.modifyValue;k=j.stacking;a.usePercentage=k==="percent";if(k)s=
j.stack,p=g.type+o(s,""),n="-"+p,g.stackKey=p,m=d[p]||[],d[p]=m,l=e[n]||[],e[n]=l;if(a.usePercentage)a.dataMin=0,a.dataMax=99;j=g.processedXData;B=g.processedYData;v=B.length;for(h=0;h<v;h++){w=j[h];G=B[h];if(k)H=(P=G<t)?l:m,C=P?n:p,r(H[w])?(H[w]=ia(H[w]+G),G=[G,H[w]]):H[w]=G,c[C]||(c[C]={}),c[C][w]||(c[C][w]=new Ib(a,a.options.stackLabels,P,w,s,k)),c[C][w].setTotal(H[w]),c[C][w].touched=f;if(G!==null&&G!==x&&(!a.isLog||G.length||G>0))if(E&&(G=g.modifyValue(G)),g.getExtremesFromAll||A||(j[h+1]||w)>=
z.min&&(j[h-1]||w)<=z.max)if(w=G.length)for(;w--;)G[w]!==null&&(u[y++]=G[w]);else u[y++]=G}if(!a.usePercentage&&u.length)g.dataMin=k=Fa(u),g.dataMax=g=pa(u),a.dataMin=K(o(a.dataMin,k),k),a.dataMax=q(o(a.dataMax,g),g);if(r(t))if(a.dataMin>=t)a.dataMin=t,a.ignoreMinPadding=!0;else if(a.dataMax<t)a.dataMax=t,a.ignoreMaxPadding=!0}}});for(g in c)for(h in c[g])c[g][h].touched<f&&(c[g][h].destroy(),delete c[g][h])},translate:function(a,b,c,d,e,f){var g=this.len,h=1,i=0,j=d?this.oldTransA:this.transA,d=
d?this.oldMin:this.min,k=this.minPixelPadding,e=(this.options.ordinal||this.isLog&&e)&&this.lin2val;if(!j)j=this.transA;c&&(h*=-1,i=g);this.reversed&&(h*=-1,i-=h*g);b?(a=a*h+i,a-=k,a=a/j+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),a=h*(a-d)*j+i+h*k+(f?j*this.pointRange/2:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d){var e=
this.chart,f=this.left,g=this.top,h,i,j,a=this.translate(a,null,null,c),k=c&&e.oldChartHeight||e.chartHeight,m=c&&e.oldChartWidth||e.chartWidth,l;h=this.transB;c=i=t(a+h);h=j=t(k-a-h);if(isNaN(a))l=!0;else if(this.horiz){if(h=g,j=k-this.bottom,c<f||c>f+this.width)l=!0}else if(c=f,i=m-this.right,h<g||h>g+this.height)l=!0;return l&&!d?null:e.renderer.crispLine(["M",c,h,"L",i,j],b||0)},getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);d&&c?d.push(c[4],c[5],c[1],c[2]):
d=null;return d},getLinearTickPositions:function(a,b,c){for(var d,b=ia(T(b/a)*a),c=ia(ja(c/a)*a),e=[];b<=c;){e.push(b);b=ia(b+a);if(b===d)break;d=b}return e},getLogTickPositions:function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=t(a),g=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=T(b),h,i,j,k,m,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!m;f++){i=e.length;for(h=0;h<i&&!m;h++)j=ka(da(f)*e[h]),j>b&&(!d||k<=c)&&g.push(k),
k>c&&(m=!0),k=j}else if(b=da(b),c=da(c),a=e[d?"minorTickInterval":"tickInterval"],a=o(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=ib(a,null,I.pow(10,T(I.log(a)/I.LN10))),g=Ka(this.getLinearTickPositions(a,b,c),ka),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e;if(this.isLog){e=b.length;for(a=1;a<e;a++)d=
d.concat(this.getLogTickPositions(c,b[a-1],b[a],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(Ab(yb(c),this.min,this.max,a.startOfWeek)),d[0]<this.min&&d.shift();else for(b=this.min+(b[0]-this.min)%c;b<=this.max;b+=c)d.push(b);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===x&&!this.isLog)r(a.min)||r(a.max)?this.minRange=null:(n(this.series,function(a){i=
a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===x||h<f)f=h}),this.minRange=K(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=this.minRange;d=(k-c+b)/2;d=[b-d,o(a.min,b-d)];if(e)d[2]=this.dataMin;b=pa(d);c=[b+k,o(a.max,b+k)];if(e)c[2]=this.dataMax;c=Fa(c);c-b<k&&(d[0]=c-k,d[1]=o(a.min,c-k),b=pa(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this.max-this.min,c=0,d,e=0,f=0,g=this.linkedParent,h=this.transA;if(this.isXAxis)g?(e=g.minPointOffset,f=g.pointRangePadding):
n(this.series,function(a){var g=a.pointRange,h=a.options.pointPlacement,m=a.closestPointRange;g>b&&(g=0);c=q(c,g);e=q(e,h?0:g/2);f=q(f,h==="on"?0:g);!a.noSharedTooltip&&r(m)&&(d=r(d)?K(d,m):m)}),g=this.ordinalSlope?this.ordinalSlope/d:1,this.minPointOffset=e*=g,this.pointRangePadding=f*=g,this.pointRange=K(c,b),this.closestPointRange=d;if(a)this.oldTransA=h;this.translationSlope=this.transA=h=this.len/(b+f||1);this.transB=this.horiz?this.left:this.bottom;this.minPixelPadding=h*e},setTickPositions:function(a){var b=
this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=b.options.tickPositioner,j=d.maxPadding,k=d.minPadding,m=d.tickInterval,l=d.minTickInterval,p=d.tickPixelInterval,s=b.categories;h?(b.linkedParent=c[g?"xAxis":"yAxis"][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=o(c.min,c.dataMin),b.max=o(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&qa(11,1)):(b.min=o(b.userMin,d.min,b.dataMin),b.max=o(b.userMax,d.max,b.dataMax));if(e)!a&&K(b.min,o(b.dataMin,b.min))<=
0&&qa(10,1),b.min=ia(ka(b.min)),b.max=ia(ka(b.max));if(b.range&&(b.userMin=b.min=q(b.min,b.max-b.range),b.userMax=b.max,a))b.range=null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!s&&!b.usePercentage&&!h&&r(b.min)&&r(b.max)&&(c=b.max-b.min)){if(!r(d.min)&&!r(b.userMin)&&k&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*k;if(!r(d.max)&&!r(b.userMax)&&j&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*j}b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:h&&!m&&p===b.linkedParent.options.tickPixelInterval?
b.linkedParent.tickInterval:o(m,s?1:(b.max-b.min)*p/(b.len||1));g&&!a&&n(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(!m&&b.tickInterval<l)b.tickInterval=l;if(!f&&!e&&(a=I.pow(10,T(I.log(b.tickInterval)/I.LN10)),!m))b.tickInterval=ib(b.tickInterval,null,a,d);b.minorTickInterval=d.minorTickInterval==="auto"&&
b.tickInterval?b.tickInterval/5:d.minorTickInterval;b.tickPositions=i=d.tickPositions?[].concat(d.tickPositions):i&&i.apply(b,[b.min,b.max]);if(!i)i=f?(b.getNonLinearTimeTicks||Ab)(yb(b.tickInterval,d.units),b.min,b.max,d.startOfWeek,b.ordinalPositions,b.closestPointRange,!0):e?b.getLogTickPositions(b.tickInterval,b.min,b.max):b.getLinearTickPositions(b.tickInterval,b.min,b.max),b.tickPositions=i;if(!h)e=i[0],f=i[i.length-1],h=b.minPointOffset||0,d.startOnTick?b.min=e:b.min-h>e&&i.shift(),d.endOnTick?
b.max=f:b.max+h<f&&i.pop(),i.length===1&&(b.min-=0.001,b.max+=0.001)},setMaxTicks:function(){var a=this.chart,b=a.maxTicks||{},c=this.tickPositions,d=this._maxTicksKey=[this.xOrY,this.pos,this.len].join("-");if(!this.isLinked&&!this.isDatetimeAxis&&c&&c.length>(b[d]||0)&&this.options.alignTicks!==!1)b[d]=c.length;a.maxTicks=b},adjustTickAmount:function(){var a=this._maxTicksKey,b=this.tickPositions,c=this.chart.maxTicks;if(c&&c[a]&&!this.isDatetimeAxis&&!this.categories&&!this.isLinked&&this.options.alignTicks!==
!1){var d=this.tickAmount,e=b.length;this.tickAmount=a=c[a];if(e<a){for(;b.length<a;)b.push(ia(b[b.length-1]+this.tickInterval));this.transA*=(e-1)/(a-1);this.max=b[b.length-1]}if(r(d)&&a!==d)this.isDirty=!0}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;n(this.series,function(a){if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||this.userMin!==
this.oldUserMin||this.userMax!==this.oldUserMax)if(this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickPositions(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total;this.setMaxTicks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=o(c,!0),e=v(e,{min:a,max:b});D(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.isDirtyExtremes=!0;
c&&g.redraw(d)})},zoom:function(a,b){this.allowZoomOutside||(a<=this.dataMin&&(a=x),b>=this.dataMax&&(b=x));this.displayBtn=a!==x||b!==x;this.setExtremes(a,b,!1,x,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=b.offsetRight||0,e=this.horiz,f,g;this.left=g=o(b.left,a.plotLeft+c);this.top=f=o(b.top,a.plotTop);this.width=c=o(b.width,a.plotWidth-c+d);this.height=b=o(b.height,a.plotHeight);this.bottom=a.chartHeight-b-f;this.right=a.chartWidth-c-g;
this.len=q(e?c:b,0);this.pos=e?g:f},getExtremes:function(){var a=this.isLog;return{min:a?ia(da(this.min)):this.min,max:a?ia(da(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?da(this.min):this.min,b=b?da(this.max):this.max;c>a||a===null?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},addPlotBand:function(a){this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){this.addPlotBandOrLine(a,
"plotLines")},addPlotBandOrLine:function(a,b){var c=(new ob(this,a)).render(),d=this.userOptions;b&&(d[b]=d[b]||[],d[b].push(a));this.plotLinesAndBands.push(c);return c},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k=0,m,l=0,p=d.title,s=d.labels,t=0,B=b.axisOffset,w=b.clipOffset,G=[-1,1,1,-1][h],v;a.hasData=b=a.hasVisibleSeries||r(a.min)&&r(a.max)&&!!e;a.showAxis=j=b||o(d.showEmpty,!0);if(!a.axisGroup)a.gridGroup=
c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:s.zIndex||7}).add();if(b||a.isLinked)n(e,function(b){f[b]?f[b].addLabel():f[b]=new Ia(a,b)}),n(e,function(a){if(h===0||h===2||{1:"left",3:"right"}[h]===s.align)t=q(f[a].getLabelSize(),t)}),a.staggerLines&&(t+=(a.staggerLines-1)*16);else for(v in f)f[v].destroy(),delete f[v];if(p&&p.text&&p.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(p.text,0,0,
p.useHTML).attr({zIndex:7,rotation:p.rotation||0,align:p.textAlign||{low:"left",middle:"center",high:"right"}[p.align]}).css(p.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(j)k=a.axisTitle.getBBox()[g?"height":"width"],l=o(p.margin,g?5:10),m=p.offset;a.axisTitle[j?"show":"hide"]()}a.offset=G*o(d.offset,B[h]);a.axisTitleMargin=o(m,t+l+(h!==2&&t&&G*d.labels[g?"y":"x"]));B[h]=q(B[h],a.axisTitleMargin+k+G*a.offset);w[i]=q(w[i],d.lineWidth)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=
this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d;this.lineTop=d=b.chartHeight-this.bottom-(c?this.height:0)+d;c||(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=u(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:
-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?i:0);return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.isLinked,g=a.tickPositions,h=a.axisTitle,i=a.stacks,j=a.ticks,k=a.minorTicks,m=a.alternateBands,l=d.stackLabels,p=d.alternateGridColor,s=a.tickmarkOffset,o=d.lineWidth,B,w=b.hasRendered&&r(a.oldMin)&&!isNaN(a.oldMin);B=a.hasData;var q=a.showAxis,t,v;n([j,k,m],function(a){for(var b in a)a[b].isActive=
!1});if(B||f)if(a.minorTickInterval&&!a.categories&&n(a.getMinorTickPositions(),function(b){k[b]||(k[b]=new Ia(a,b,"minor"));w&&k[b].isNew&&k[b].render(null,!0);k[b].render(null,!1,1)}),g.length&&(n(g.slice(1).concat([g[0]]),function(b,c){c=c===g.length-1?0:c+1;if(!f||b>=a.min&&b<=a.max)j[b]||(j[b]=new Ia(a,b)),w&&j[b].isNew&&j[b].render(c,!0),j[b].render(c,!1,1)}),s&&a.min===0&&(j[-1]||(j[-1]=new Ia(a,-1,null,!0)),j[-1].render(-1))),p&&n(g,function(b,c){if(c%2===0&&b<a.max)m[b]||(m[b]=new ob(a)),
t=b+s,v=g[c+1]!==x?g[c+1]+s:a.max,m[b].options={from:e?da(t):t,to:e?da(v):v,color:p},m[b].render(),m[b].isActive=!0}),!a._addedPlotLB)n((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0;n([j,k,m],function(a){var c,d,e=[],f=xa?xa.duration||500:0,g=function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])};for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);a===m||!b.hasRendered||!f?g():f&&setTimeout(g,
f)});if(o)B=a.getLinePath(o),a.axisLine?a.axisLine.animate({d:B}):a.axisLine=c.path(B).attr({stroke:d.lineColor,"stroke-width":o,zIndex:7}).add(a.axisGroup),a.axisLine[q?"show":"hide"]();if(h&&q)h[h.isNew?"attr":"animate"](a.getTitlePosition()),h.isNew=!1;if(l&&l.enabled){var u,y,d=a.stackTotalGroup;if(!d)a.stackTotalGroup=d=c.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();d.translate(b.plotLeft,b.plotTop);for(u in i)for(y in c=i[u],c)c[y].render(d)}a.isDirty=!1},removePlotBandOrLine:function(a){for(var b=
this.plotLinesAndBands,c=b.length;c--;)b[c].id===a&&b[c].destroy()},setTitle:function(a,b){this.update({title:a},b)},redraw:function(){var a=this.chart.pointer;a.reset&&a.reset(!0);this.render();n(this.plotLinesAndBands,function(a){a.render()});n(this.series,function(a){a.isDirty=!0})},setCategories:function(a,b){this.update({categories:a},b)},destroy:function(){var a=this,b=a.stacks,c;ba(a);for(c in b)Ga(b[c]),b[c]=null;n([a.ticks,a.minorTicks,a.alternateBands,a.plotLinesAndBands],function(a){Ga(a)});
n("stackTotalGroup,axisLine,axisGroup,gridGroup,labelGroup,axisTitle".split(","),function(b){a[b]&&(a[b]=a[b].destroy())})}};pb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=u(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape,null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).hide().add();$||this.label.shadow(b.shadow);
this.shared=b.shared},destroy:function(){n(this.crosshairs,function(a){a&&a.destroy()});if(this.label)this.label=this.label.destroy()},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden;v(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:g?(2*f.anchorX+c)/3:c,anchorY:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g&&(Q(a-f.x)>1||Q(b-f.y)>1))clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(){var a=this,b;if(!this.isHidden)b=
this.chart.hoverPoints,this.hideTimer=setTimeout(function(){a.label.fadeOut();a.isHidden=!0},o(this.options.hideDelay,500)),b&&n(b,function(a){a.setState()}),this.chart.hoverPoints=null},hideCrosshairs:function(){n(this.crosshairs,function(a){a&&a.hide()})},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=0,h=0,i,a=ha(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===x&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(n(a,function(a){i=a.series.yAxis;g+=
a.plotX;h+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&i?i.top-f:0)}),g/=a.length,h/=a.length,c=[e?d.plotWidth-h:g,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-g:h]);return Ka(c,t)},getPosition:function(a,b,c){var d=this.chart,e=d.plotLeft,f=d.plotTop,g=d.plotWidth,h=d.plotHeight,i=o(this.options.distance,12),j=c.plotX,c=c.plotY,d=j+e+(d.inverted?i:-a-i),k=c-b+f+15,m;d<7&&(d=e+q(j,0)+i);d+a>e+g&&(d-=d+a-(e+g),k=c-b+f-i,m=!0);k<f+5&&(k=f+5,m&&c>=k&&c<=k+b&&(k=c+f+i));k+b>f+h&&(k=
q(f,f+h-b-i));return{x:d,y:k}},defaultFormatter:function(a){var b=this.points||ha(this),c=b[0].series,d;d=[c.tooltipHeaderFormatter(b[0])];n(b,function(a){c=a.series;d.push(c.tooltipFormatter&&c.tooltipFormatter(a)||a.point.tooltipFormatter(c.tooltipOptions.pointFormat))});d.push(a.options.footerFormat||"");return d.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h,i={},j,k=[];j=e.formatter||this.defaultFormatter;var i=c.hoverPoints,m,l=e.crosshairs;h=this.shared;
clearTimeout(this.hideTimer);this.followPointer=ha(a)[0].series.tooltipOptions.followPointer;g=this.getAnchor(a,b);f=g[0];g=g[1];h&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&n(i,function(a){a.setState()}),n(a,function(a){a.setState("hover");k.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=k,a=a[0]):i=a.getLabelConfig();j=j.call(i,this);i=a.series;h=h||!i.isCartesian||i.tooltipOutsidePlot||c.isInsidePlot(f,g);j===!1||!h?this.hide():(this.isHidden&&(Ta(d),d.attr("opacity",
1).show()),d.attr({text:j}),m=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:m}),this.updatePosition({plotX:f,plotY:g}),this.isHidden=!1);if(l){l=ha(l);for(d=l.length;d--;)if(e=a.series[d?"yAxis":"xAxis"],l[d]&&e)if(h=d?o(a.stackY,a.y):a.x,e.isLog&&(h=ka(h)),e=e.getPlotLinePath(h,1),this.crosshairs[d])this.crosshairs[d].attr({d:e,visibility:"visible"});else{h={"stroke-width":l[d].width||1,stroke:l[d].color||"#C0C0C0",zIndex:l[d].zIndex||2};if(l[d].dashStyle)h.dashstyle=l[d].dashStyle;this.crosshairs[d]=
c.renderer.path(e).attr(h).add()}}D(c,"tooltipRefresh",{text:j,x:f+c.plotLeft,y:g+c.plotTop,borderColor:m})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(t(c.x),t(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)}};qb.prototype={init:function(a,b){var c=$?"":b.chart.zoomType,d=a.inverted,e;this.options=b;this.chart=a;this.zoomX=e=/x/.test(c);this.zoomY=c=/y/.test(c);this.zoomHor=e&&!d||c&&d;this.zoomVert=c&&
!d||e&&d;this.pinchDown=[];this.lastValidTouch={};if(b.tooltip.enabled)a.tooltip=new pb(a,b.tooltip);this.setDOMEvents()},normalize:function(a){var b,c,d,a=a||O.event;if(!a.target)a.target=a.srcElement;a=Pb(a);d=a.touches?a.touches.item(0):a;this.chartPosition=b=Tb(this.chart.container);d.pageX===x?(c=a.x,b=a.y):(c=d.pageX-b.left,b=d.pageY-b.top);return v(a,{chartX:t(c),chartY:t(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};n(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,
value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getIndex:function(a){var b=this.chart;return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e,f=b.hoverPoint,g=b.hoverSeries,h,i,j=b.chartWidth,k=this.getIndex(a);if(d&&this.options.tooltip.shared&&(!g||!g.noSharedTooltip)){e=[];h=c.length;for(i=0;i<h;i++)if(c[i].visible&&c[i].options.enableMouseTracking!==!1&&!c[i].noSharedTooltip&&c[i].tooltipPoints.length&&
(b=c[i].tooltipPoints[k],b.series))b._dist=Q(k-b.clientX),j=K(j,b._dist),e.push(b);for(h=e.length;h--;)e[h]._dist>j&&e.splice(h,1);if(e.length&&e[0].clientX!==this.hoverX)d.refresh(e,a),this.hoverX=e[0].clientX}if(g&&g.tracker){if((b=g.tooltipPoints[k])&&b!==f)b.onMouseOver(a)}else d&&d.followPointer&&!d.isHidden&&(a=d.getAnchor([{}],a),d.updatePosition({plotX:a[0],plotY:a[1]}))},reset:function(a){var b=this.chart,c=b.hoverSeries,d=b.hoverPoint,e=b.tooltip,b=e&&e.shared?b.hoverPoints:d;(a=a&&e&&b)&&
ha(b)[0].plotX===x&&(a=!1);if(a)e.refresh(b);else{if(d)d.onMouseOut();if(c)c.onMouseOut();e&&(e.hide(),e.hideCrosshairs());this.hoverX=null}},scaleGroups:function(a,b){var c=this.chart;n(c.series,function(d){d.xAxis.zoomEnabled&&(d.group.attr(a),d.markerGroup&&(d.markerGroup.attr(a),d.markerGroup.clip(b?c.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(a))});c.clipRect.attr(b||c.clipBox)},pinchTranslateDirection:function(a,b,c,d,e,f,g){var h=this.chart,i=a?"x":"y",j=a?"X":"Y",k="chart"+
j,m=a?"width":"height",l=h["plot"+(a?"Left":"Top")],p,s,o=1,n=h.inverted,w=h.bounds[a?"h":"v"],q=b.length===1,t=b[0][k],r=c[0][k],v=!q&&b[1][k],u=!q&&c[1][k],x,c=function(){!q&&Q(t-v)>20&&(o=Q(r-u)/Q(t-v));s=(l-r)/o+t;p=h["plot"+(a?"Width":"Height")]/o};c();b=s;b<w.min?(b=w.min,x=!0):b+p>w.max&&(b=w.max-p,x=!0);x?(r-=0.8*(r-g[i][0]),q||(u-=0.8*(u-g[i][1])),c()):g[i]=[r,u];n||(f[i]=s-l,f[m]=p);f=n?1/o:o;e[m]=p;e[i]=b;d[n?a?"scaleY":"scaleX":"scale"+j]=o;d["translate"+j]=f*l+(r-f*t)},pinch:function(a){var b=
this,c=b.chart,d=b.pinchDown,e=c.tooltip.options.followTouchMove,f=a.touches,g=f.length,h=b.lastValidTouch,i=b.zoomHor||b.pinchHor,j=b.zoomVert||b.pinchVert,k=i||j,m=b.selectionMarker,l={},p={};a.type==="touchstart"&&e&&(b.inClass(a.target,"highcharts-tracker")?(!c.runTrackerClick||g>1)&&a.preventDefault():(!c.runChartClick||g>1)&&a.preventDefault());Ka(f,function(a){return b.normalize(a)});if(a.type==="touchstart")n(f,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),h.x=[d[0].chartX,d[1]&&
d[1].chartX],h.y=[d[0].chartY,d[1]&&d[1].chartY],n(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(a.dataMin),f=a.toPixels(a.dataMax),g=K(e,f),e=q(e,f);b.min=K(a.pos,g-d);b.max=q(a.pos+a.len,e+d)}});else if(d.length){if(!m)b.selectionMarker=m=v({destroy:ta},c.plotBox);i&&b.pinchTranslateDirection(!0,d,f,l,m,p,h);j&&b.pinchTranslateDirection(!1,d,f,l,m,p,h);b.hasPinched=k;b.scaleGroups(l,p);!k&&e&&g===1&&this.runPointActions(b.normalize(a))}},dragStart:function(a){var b=
this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,a=a.chartY,e=this.zoomHor,f=this.zoomVert,g=b.plotLeft,h=b.plotTop,i=b.plotWidth,j=b.plotHeight,k,m=this.mouseDownX,l=this.mouseDownY;d<g?d=g:d>g+i&&(d=g+i);a<h?a=h:a>h+j&&(a=h+j);this.hasDragged=Math.sqrt(Math.pow(m-d,2)+Math.pow(l-a,2));if(this.hasDragged>10){k=b.isInsidePlot(m-g,l-h);if(b.hasCartesianSeries&&(this.zoomX||
this.zoomY)&&k&&!this.selectionMarker)this.selectionMarker=b.renderer.rect(g,h,e?1:i,f?1:j,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();this.selectionMarker&&e&&(e=d-m,this.selectionMarker.attr({width:Q(e),x:(e>0?0:e)+m}));this.selectionMarker&&f&&(e=a-l,this.selectionMarker.attr({height:Q(e),y:(e>0?0:e)+l}));k&&!this.selectionMarker&&c.panning&&b.pan(d)}},drop:function(a){var b=this.chart,c=this.hasPinched;if(this.selectionMarker){var d={xAxis:[],yAxis:[],originalEvent:a.originalEvent||
a},e=this.selectionMarker,f=e.x,g=e.y,h;if(this.hasDragged||c)n(b.axes,function(a){if(a.zoomEnabled){var b=a.horiz,c=a.minPixelPadding,m=a.toValue((b?f:g)+c),b=a.toValue((b?f+e.width:g+e.height)-c);!isNaN(m)&&!isNaN(b)&&(d[a.xOrY+"Axis"].push({axis:a,min:K(m,b),max:q(m,b)}),h=!0)}}),h&&D(b,"selection",d,function(a){b.zoom(v(a,c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups({translateX:b.plotLeft,translateY:b.plotTop,scaleX:1,scaleY:1})}if(b)L(b.container,
{cursor:b._cursor}),b.cancelClick=this.hasDragged,b.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){this.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,d=b.hoverSeries,a=Pb(a);c&&d&&d.isCartesian&&!b.isInsidePlot(a.pageX-c.left-b.plotLeft,a.pageY-c.top-b.plotTop)&&this.reset()},onContainerMouseLeave:function(){this.reset();
this.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart,a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=A(a,"class"))if(c.indexOf(b)!==-1)return!0;else if(c.indexOf("highcharts-container")!==-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;if(b&&!b.options.stickyTracking&&!this.inClass(a.toElement||
a.relatedTarget,"highcharts-tooltip"))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,f=b.inverted,g,h,i,a=this.normalize(a);a.cancelBubble=!0;if(!b.cancelClick)c&&this.inClass(a.target,"highcharts-tracker")?(g=this.chartPosition,h=c.plotX,i=c.plotY,v(c,{pageX:g.left+d+(f?b.plotWidth-i:h),pageY:g.top+e+(f?b.plotHeight-h:i)}),D(c.series,"click",v(a,{point:c})),c.firePointEvent("click",a)):(v(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-
e)&&D(b,"click",a))},onContainerTouchStart:function(a){var b=this.chart;a.touches.length===1?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&(this.runPointActions(a),this.pinch(a))):a.touches.length===2&&this.pinch(a)},onContainerTouchMove:function(a){(a.touches.length===1||a.touches.length===2)&&this.pinch(a)},onDocumentTouchEnd:function(a){this.drop(a)},setDOMEvents:function(){var a=this,b=a.chart.container,c;this._events=c=[[b,"onmousedown","onContainerMouseDown"],
[b,"onmousemove","onContainerMouseMove"],[b,"onclick","onContainerClick"],[b,"mouseleave","onContainerMouseLeave"],[z,"mousemove","onDocumentMouseMove"],[z,"mouseup","onDocumentMouseUp"]];fb&&c.push([b,"ontouchstart","onContainerTouchStart"],[b,"ontouchmove","onContainerTouchMove"],[z,"touchend","onDocumentTouchEnd"]);n(c,function(b){a["_"+b[2]]=function(c){a[b[2]](c)};b[1].indexOf("on")===0?b[0][b[1]]=a["_"+b[2]]:J(b[0],b[1],a["_"+b[2]])})},destroy:function(){var a=this;n(a._events,function(b){b[1].indexOf("on")===
0?b[0][b[1]]=null:ba(b[0],b[1],a["_"+b[2]])});delete a._events;clearInterval(a.tooltipTimeout)}};rb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=o(b.padding,8),f=b.itemMarginTop||0;this.options=b;if(b.enabled)c.baseline=u(d.fontSize)+3+f,c.itemStyle=d,c.itemHiddenStyle=y(d,b.itemHiddenStyle),c.itemMarginTop=f,c.padding=e,c.initialItemX=e,c.initialItemY=e-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.lastLineHeight=0,c.render(),J(c.chart,"endResize",function(){c.positionCheckboxes()})},
colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.color:g,g=a.options&&a.options.marker,i={stroke:h,fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g)for(j in g=a.convertAttribs(g),g)d=g[j],d!==x&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-
e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;n(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&a[b].destroy()});b&&Ra(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,n(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,L(f,{left:b.translateX+e.legendItemWidth+
f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":S}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);c=this.title.getBBox().height;this.contentGroup.attr({translateY:c})}this.titleHeight=c},renderItem:function(a){var w;var b=this,c=b.chart,d=c.renderer,e=b.options,f=e.layout==="horizontal",g=e.symbolWidth,h=e.symbolPadding,
i=b.itemStyle,j=b.itemHiddenStyle,k=b.padding,m=!e.rtl,l=e.width,p=e.itemMarginBottom||0,s=b.itemMarginTop,o=b.initialItemX,n=a.legendItem,t=a.series||a,r=t.options,v=r.showCheckbox,u=e.useHTML;if(!n&&(a.legendGroup=d.g("legend-item").attr({zIndex:1}).add(b.scrollGroup),t.drawLegendSymbol(b,a),a.legendItem=n=d.text(e.labelFormat?Ea(e.labelFormat,a):e.labelFormatter.call(a),m?g+h:-h,b.baseline,u).css(y(a.visible?i:j)).attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup),(u?n:a.legendGroup).on("mouseover",
function(){a.setState("hover");n.css(b.options.itemHoverStyle)}).on("mouseout",function(){n.css(a.visible?i:j);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):D(a,"legendItemClick",b,c)}),b.colorizeItem(a,a.visible),r&&v))a.checkbox=U("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},e.itemCheckboxStyle,c.container),J(a.checkbox,"click",function(b){D(a,"checkboxClick",{checked:b.target.checked},
function(){a.select()})});d=n.getBBox();w=a.legendItemWidth=e.itemWidth||g+h+d.width+k+(v?20:0),e=w;b.itemHeight=g=d.height;if(f&&b.itemX-o+e>(l||c.chartWidth-2*k-o))b.itemX=o,b.itemY+=s+b.lastLineHeight+p,b.lastLineHeight=0;b.maxItemWidth=q(b.maxItemWidth,e);b.lastItemY=s+b.itemY+p;b.lastLineHeight=q(g,b.lastLineHeight);a._legendItemPos=[b.itemX,b.itemY];f?b.itemX+=e:(b.itemY+=s+g+p,b.lastLineHeight=g);b.offsetWidth=l||q(f?b.itemX-o:e,b.offsetWidth)},render:function(){var a=this,b=a.chart,c=b.renderer,
d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,m=j.borderWidth,l=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup),a.clipRect=c.clipRect(0,0,9999,b.chartHeight),a.contentGroup.clip(a.clipRect);a.renderTitle();e=[];n(b.series,function(a){var b=a.options;b.showInLegend&&!r(b.linkedTo)&&(e=e.concat(a.legendItems||(b.legendType===
"point"?a.data:a)))});Gb(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;n(e,function(b){a.renderItem(b)});g=j.width||a.offsetWidth;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);if(m||l){g+=k;h+=k;if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp(null,null,null,g,h)),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,m||0).attr({stroke:j.borderColor,"stroke-width":m||
0,fill:l||S}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;n(e,function(b){a.positionItem(b)});f&&d.align(v({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h=this.clipRect,i=e.navigation,j=o(i.animation,!0),k=i.arrowSize||12,m=this.nav;e.layout==="horizontal"&&
(f/=2);g&&(f=K(f,g));if(a>f&&!e.useHTML){this.clipHeight=c=f-20-this.titleHeight;this.pageCount=ja(a/c);this.currentPage=o(this.currentPage,1);this.fullHeight=a;h.attr({height:c});if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,k,k).on("click",function(){b.scroll(-1,j)}).add(m),this.pager=d.text("",15,10).css(i.style).add(m),this.down=d.symbol("triangle-down",0,0,k,k).on("click",function(){b.scroll(1,j)}).add(m);b.scroll(0);a=f}else if(m)h.attr({height:c.chartHeight}),
m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pageCount,d=this.currentPage+a,e=this.clipHeight,f=this.options.navigation,g=f.activeColor,h=f.inactiveColor,f=this.pager,i=this.padding;d>c&&(d=c);if(d>0)b!==x&&Ha(b,this.chart),this.nav.attr({translateX:i,translateY:e+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:d===1?h:g}).css({cursor:d===1?"default":"pointer"}),f.attr({text:d+"/"+this.pageCount}),this.down.attr({x:18+this.pager.getBBox().width,
fill:d===c?h:g}).css({cursor:d===c?"default":"pointer"}),e=-K(e*(d-1),this.fullHeight-e+i)+1,this.scrollGroup.animate({translateY:e}),f.attr({text:d+"/"+c}),this.currentPage=d,this.positionCheckboxes(e)}};sb.prototype={init:function(a,b){var c,d=a.series;a.series=null;c=y(N,a);c.series=a.series=d;var d=c.chart,e=d.margin,e=V(e)?e:[e,e,e,e];this.optionsMarginTop=o(d.marginTop,e[0]);this.optionsMarginRight=o(d.marginRight,e[1]);this.optionsMarginBottom=o(d.marginBottom,e[2]);this.optionsMarginLeft=
o(d.marginLeft,e[3]);this.runChartClick=(e=d.events)&&!!e.click;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=za.length;za.push(f);d.reflow!==!1&&J(f,"load",function(){f.initReflow()});if(e)for(g in e)J(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=$?!1:o(d.animation,!0);f.pointCount=0;f.counters=new Fb;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=aa[a.type||b.type||
b.defaultSeriesType])||qa(17,!0);b=new b;b.init(this,a);return b},addSeries:function(a,b,c){var d,e=this;a&&(b=o(b,!0),D(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var b=b?"xAxis":"yAxis",e=this.options;new ab(this,y(a,{index:this[b].length}));e[b]=ha(e[b]||{});e[b].push(a);o(c,!0)&&this.redraw(d)},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},adjustTickAmounts:function(){this.options.chart.alignTicks!==
!1&&n(this.axes,function(a){a.adjustTickAmount()});this.maxTicks=null},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h=this.isDirtyBox,i=c.length,j=i,k=this.renderer,m=k.isHidden(),l=[];Ha(a,this);for(m&&this.cloneRenderTo();j--;)if(a=c[j],a.isDirty&&a.options.stacking){g=!0;break}if(g)for(j=i;j--;)if(a=c[j],a.options.stacking)a.isDirty=!0;n(c,function(a){a.isDirty&&a.options.legendType==="point"&&(f=!0)});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=
!1;if(this.hasCartesianSeries){if(!this.isResizing)this.maxTicks=null,n(b,function(a){a.setScale()});this.adjustTickAmounts();this.getMargins();n(b,function(a){if(a.isDirtyExtremes)a.isDirtyExtremes=!1,l.push(function(){D(a,"afterSetExtremes",a.getExtremes())});if(a.isDirty||h||g)a.redraw(),h=!0})}h&&this.drawChartBox();n(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset&&d.reset(!0);k.draw();D(this,"redraw");m&&this.cloneRenderTo(!0);n(l,function(a){a.call()})},
showLoading:function(a){var b=this.options,c=this.loadingDiv,d=b.loading;if(!c)this.loadingDiv=c=U(wa,{className:"highcharts-loading"},v(d.style,{zIndex:10,display:S}),this.container),this.loadingSpan=U("span",null,d.labelStyle,c);this.loadingSpan.innerHTML=a||b.lang.loading;if(!this.loadingShown)L(c,{opacity:0,display:"",left:this.plotLeft+"px",top:this.plotTop+"px",width:this.plotWidth+"px",height:this.plotHeight+"px"}),vb(c,{opacity:d.style.opacity},{duration:d.showDuration||0}),this.loadingShown=
!0},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&vb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){L(b,{display:S})}});this.loadingShown=!1},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=
b.xAxis=ha(b.xAxis||{}),b=b.yAxis=ha(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new ab(a,b)});a.adjustTickAmounts()},getSelectedPoints:function(){var a=[];n(this.series,function(b){a=a.concat(Ob(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return Ob(this.series,function(a){return a.selected})},showResetZoom:function(){var a=this,b=N.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,
f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;D(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?n(this.axes,function(a){b=a.zoom()}):n(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||
c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&V(e))this.resetZoomButton=e.destroy();b&&this.redraw(o(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a){var b=this.xAxis[0],c=this.mouseDownX,d=b.pointRange/2,e=b.getExtremes(),f=b.translate(c-a,!0)+d,c=b.translate(c+this.plotWidth-a,!0)-d;(d=this.hoverPoints)&&n(d,function(a){a.setState()});b.series.length&&f>K(e.dataMin,e.min)&&c<
q(e.dataMax,e.max)&&b.setExtremes(f,c,!0,!1,{trigger:"pan"});this.mouseDownX=a;L(this.container,{cursor:"move"})},setTitle:function(a,b){var f;var c=this,d=c.options,e;e=d.title=y(d.title,a);f=d.subtitle=y(d.subtitle,b),d=f;n([["title",a,e],["subtitle",b,d]],function(a){var b=a[0],d=c[b],e=a[1],a=a[2];d&&e&&(c[b]=d=d.destroy());a&&a.text&&!d&&(c[b]=c.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add().align(a,!1,"spacingBox"))})},
getChartSize:function(){var a=this.options.chart,b=this.renderToClone||this.renderTo;this.containerWidth=gb(b,"width");this.containerHeight=gb(b,"height");this.chartWidth=q(0,a.width||this.containerWidth||600);this.chartHeight=q(0,o(a.height,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Ra(b),delete this.renderToClone):(c&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),
L(b,{position:"absolute",top:"-9999px",display:"block"}),z.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+tb++;if(fa(a))this.renderTo=a=z.getElementById(a);a||qa(13,!0);c=u(A(a,"data-highcharts-chart"));!isNaN(c)&&za[c]&&za[c].destroy();A(a,"data-highcharts-chart",this.index);a.innerHTML="";a.offsetWidth||this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=U(wa,
{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},v({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0},b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=b.forExport?new Aa(a,c,d,!0):new Sa(a,c,d);$&&this.renderer.create(this,a,c,d)},getMargins:function(){var a=this.options.chart,b=a.spacingTop,c=a.spacingRight,d=a.spacingBottom,a=a.spacingLeft,e,f=this.legend,g=this.optionsMarginTop,h=this.optionsMarginLeft,
i=this.optionsMarginRight,j=this.optionsMarginBottom,k=this.options.title,m=this.options.subtitle,l=this.options.legend,p=o(l.margin,10),s=l.x,t=l.y,B=l.align,w=l.verticalAlign;this.resetMargins();e=this.axisOffset;if((this.title||this.subtitle)&&!r(this.optionsMarginTop))if(m=q(this.title&&!k.floating&&!k.verticalAlign&&k.y||0,this.subtitle&&!m.floating&&!m.verticalAlign&&m.y||0))this.plotTop=q(this.plotTop,m+o(k.margin,15)+b);if(f.display&&!l.floating)if(B==="right"){if(!r(i))this.marginRight=q(this.marginRight,
f.legendWidth-s+p+c)}else if(B==="left"){if(!r(h))this.plotLeft=q(this.plotLeft,f.legendWidth+s+p+a)}else if(w==="top"){if(!r(g))this.plotTop=q(this.plotTop,f.legendHeight+t+p+b)}else if(w==="bottom"&&!r(j))this.marginBottom=q(this.marginBottom,f.legendHeight-t+p+d);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);this.hasCartesianSeries&&n(this.axes,function(a){a.getOffset()});r(h)||(this.plotLeft+=e[3]);r(g)||(this.plotTop+=
e[0]);r(j)||(this.marginBottom+=e[2]);r(i)||(this.marginRight+=e[1]);this.setChartSize()},initReflow:function(){function a(a){var g=c.width||gb(d,"width"),h=c.height||gb(d,"height"),a=a?a.target:O;if(!b.hasUserSize&&g&&h&&(a===O||a===z)){if(g!==b.containerWidth||h!==b.containerHeight)clearTimeout(e),b.reflowTimeout=e=setTimeout(function(){if(b.container)b.setSize(g,h,!1),b.hasUserSize=null},100);b.containerWidth=g;b.containerHeight=h}}var b=this,c=b.options.chart,d=b.renderTo,e;J(O,"resize",a);J(b,
"destroy",function(){ba(O,"resize",a)})},setSize:function(a,b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&D(d,"endResize",null,function(){d.isResizing-=1})};Ha(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(r(a))d.chartWidth=e=q(0,t(a)),d.hasUserSize=!!e;if(r(b))d.chartHeight=f=q(0,t(b));L(d.container,{width:e+"px",height:f+"px"});d.setChartSize(!0);d.renderer.setSize(e,f,c);d.maxTicks=null;n(d.axes,function(a){a.isDirty=!0;a.setScale()});n(d.series,function(a){a.isDirty=
!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.getMargins();d.redraw(c);d.oldChartHeight=null;D(d,"resize");xa===!1?g():setTimeout(g,xa&&xa.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=f.spacingTop,h=f.spacingRight,i=f.spacingBottom,j=f.spacingLeft,k=this.clipOffset,m,l,p,o;this.plotLeft=m=t(this.plotLeft);this.plotTop=l=t(this.plotTop);this.plotWidth=p=q(0,t(d-m-this.marginRight));this.plotHeight=o=q(0,t(e-l-this.marginBottom));
this.plotSizeX=b?o:p;this.plotSizeY=b?p:o;this.plotBorderWidth=b=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:j,y:g,width:d-j-h,height:e-g-i};this.plotBox=c.plotBox={x:m,y:l,width:p,height:o};c=ja(q(b,k[3])/2);d=ja(q(b,k[0])/2);this.clipBox={x:c,y:d,width:T(this.plotSizeX-q(b,k[1])/2-c),height:T(this.plotSizeY-q(b,k[2])/2-d)};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this.options.chart,b=a.spacingRight,c=a.spacingBottom,d=a.spacingLeft;
this.plotTop=o(this.optionsMarginTop,a.spacingTop);this.marginRight=o(this.optionsMarginRight,b);this.marginBottom=o(this.optionsMarginBottom,c);this.plotLeft=o(this.optionsMarginLeft,d);this.axisOffset=[0,0,0,0];this.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,m=a.plotBackgroundImage,
l=a.plotBorderWidth||0,p,o=this.plotLeft,n=this.plotTop,t=this.plotWidth,q=this.plotHeight,r=this.plotBox,v=this.clipRect,u=this.clipBox;p=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp(null,null,null,c-p,d-p));else{e={fill:j||S};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(p/2,p/2,c-p,d-p,a.borderRadius,i).attr(e).add().shadow(a.shadow)}if(k)f?f.animate(r):this.plotBackground=b.rect(o,n,t,q,0).attr({fill:k}).add().shadow(a.plotShadow);if(m)h?h.animate(r):this.plotBGImage=
b.image(m,o,n,t,q).add();v?v.animate({width:u.width,height:u.height}):this.clipRect=b.clipRect(u);if(l)g?g.animate(g.crisp(null,o,n,t,q)):this.plotBorder=b.rect(o,n,t,q,0,l).attr({stroke:a.plotBorderColor,"stroke-width":l,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;n(["inverted","angular","polar"],function(g){c=aa[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=aa[d[e].type])&&c.prototype[g]&&
(f=!0);a[g]=f})},render:function(){var a=this,b=a.axes,c=a.renderer,d=a.options,e=d.labels,f=d.credits,g;a.setTitle();a.legend=new rb(a,d.legend);n(b,function(a){a.setScale()});a.getMargins();a.maxTicks=null;n(b,function(a){a.setTickPositions(!0);a.setMaxTicks()});a.adjustTickAmounts();a.getMargins();a.drawChartBox();a.hasCartesianSeries&&n(b,function(a){a.render()});if(!a.seriesGroup)a.seriesGroup=c.g("series-group").attr({zIndex:3}).add();n(a.series,function(a){a.translate();a.setTooltipPoints();
a.render()});e.items&&n(e.items,function(b){var d=v(e.style,b.style),f=u(d.left)+a.plotLeft,g=u(d.top)+a.plotTop+12;delete d.left;delete d.top;c.text(b.html,f,g).attr({zIndex:2}).css(d).add()});if(f.enabled&&!a.credits)g=f.href,a.credits=c.text(f.text,0,0).on("click",function(){if(g)location.href=g}).attr({align:f.position.align,zIndex:8}).css(f.style).add().align(f.position);a.hasRendered=!0},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;D(a,"destroy");za[a.index]=
x;a.renderTo.removeAttribute("data-highcharts-chart");ba(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();n("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",ba(d),f&&Ra(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!Z&&O==O.top&&z.readyState!==
"complete"||$&&!O.canvg?($?Qb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):z.attachEvent("onreadystatechange",function(){z.detachEvent("onreadystatechange",a.firstRender);z.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender())a.getContainer(),D(a,"init"),a.resetMargins(),a.setChartSize(),a.propFromSeries(),a.getAxes(),n(b.series||[],function(b){a.initSeries(b)}),D(a,"beforeRender"),a.pointer=new qb(a,
b),a.render(),a.renderer.draw(),c&&c.apply(a,[a]),n(a.callbacks,function(b){b.apply(a,[a])}),a.cloneRenderTo(!0),D(a,"load")}};sb.prototype.callbacks=[];var Ma=function(){};Ma.prototype={init:function(a,b,c){this.series=a;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=
c.pointValKey,a=Ma.prototype.optionsToObject.call(this,a);v(this,a);this.options=this.options?v(this.options,a):a;if(d)this.y=this[d];if(this.x===x&&c)this.x=b===x?c.autoIncrement():b;return this},optionsToObject:function(a){var b,c=this.series,d=c.pointArrayMap||["y"],e=d.length,f=0,g=0;if(typeof a==="number"||a===null)b={y:a};else if(Ba(a)){b={};if(a.length>e){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];f++}for(;g<e;)b[d[g++]]=a[f++]}else if(typeof a==="object"){b=a;
if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),ga(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)ba(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),
b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},select:function(a,b){var c=this,d=c.series,e=d.chart,a=o(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[la(c,d.data)]=c.options;c.setState(a&&"select");b||n(e.getSelectedPoints(),function(a){if(a.selected&&
a!==c)a.selected=a.options.selected=!1,d.options.data[la(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a){var b=this.series,c=b.chart,d=c.tooltip,e=c.hoverPoint;if(e&&e!==this)e.onMouseOut();this.firePointEvent("mouseOver");d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a);this.setState("hover");c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;if(!b||la(this,b)===-1)this.firePointEvent("mouseOut"),this.setState(),a.hoverPoint=
null},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=o(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";n(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ea(a,{point:this,series:this.series})},update:function(a,b,c){var d=this,e=d.series,f=d.graphic,g,h=e.data,i=e.chart,b=o(b,!0);d.firePointEvent("update",{options:a},function(){d.applyOptions(a);V(a)&&(e.getAttribs(),f&&f.attr(d.pointAttr[e.state]));
g=la(d,h);e.xData[g]=d.x;e.yData[g]=e.toYData?e.toYData(d):d.y;e.zData[g]=d.z;e.options.data[g]=d.options;e.isDirty=!0;e.isDirtyData=!0;b&&i.redraw(c)})},remove:function(a,b){var c=this,d=c.series,e=d.chart,f,g=d.data;Ha(b,e);a=o(a,!0);c.firePointEvent("remove",null,function(){f=la(c,g);g.splice(f,1);d.options.data.splice(f,1);d.xData.splice(f,1);d.yData.splice(f,1);d.zData.splice(f,1);c.destroy();d.isDirty=!0;d.isDirtyData=!0;a&&e.redraw()})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;
(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});D(this,a,b,c)},importEvents:function(){if(!this.hasImportedEvents){var a=y(this.series.options.point,this.options).events,b;this.events=a;for(b in a)J(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a){var b=this.plotX,c=this.plotY,d=this.series,e=d.options.states,f=X[d.type].marker&&d.options.marker,
g=f&&!f.enabled,h=f&&f.states[a],i=h&&h.enabled===!1,j=d.stateMarkerGraphic,k=this.marker||{},m=d.chart,l=this.pointAttr,a=a||"";if(!(a===this.state||this.selected&&a!=="select"||e[a]&&e[a].enabled===!1||a&&(i||g&&!h.enabled))){if(this.graphic)e=f&&this.graphic.symbolName&&l[a].r,this.graphic.attr(y(l[a],e?{x:b-e,y:c-e,width:2*e,height:2*e}:{}));else{if(a&&h)e=h.radius,k=k.symbol||d.symbol,j&&j.currentSymbol!==k&&(j=j.destroy()),j?j.attr({x:b-e,y:c-e}):(d.stateMarkerGraphic=j=m.renderer.symbol(k,
b-e,c-e,2*e,2*e).attr(l[a]).add(d.markerGroup),j.currentSymbol=k);if(j)j[a&&m.isInsidePlot(b,c)?"show":"hide"]()}this.state=a}}};var R=function(){};R.prototype={isCartesian:!0,type:"line",pointClass:Ma,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},colorCounter:0,init:function(a,b){var c,d,e=a.series;this.chart=a;this.options=b=this.setOptions(b);this.bindAxes();v(this,{name:b.name,state:"",pointAttr:{},visible:b.visible!==
!1,selected:b.selected===!0});if($)b.animation=!1;d=b.events;for(c in d)J(this,c,d[c]);if(d&&d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;this.getColor();this.getSymbol();this.setData(b.data,!1);if(this.isCartesian)a.hasCartesianSeries=!0;e.push(this);this._i=e.length-1;Gb(e,function(a,b){return o(a.options.index,a._i)-o(b.options.index,a._i)});n(e,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)});c=b.linkedTo;this.linkedSeries=[];if(fa(c)&&
(c=c===":previous"?e[this.index-1]:a.get(c)))c.linkedSeries.push(this),this.linkedParent=c},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;a.isCartesian&&n(["xAxis","yAxis"],function(e){n(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==x&&b[e]===d.id||b[e]===x&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});a[e]||qa(17,!0)})},autoIncrement:function(){var a=this.options,b=this.xIncrement,b=o(b,a.pointStart,0);this.pointInterval=o(this.pointInterval,a.pointInterval,1);this.xIncrement=
b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else n(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart.options,c=b.plotOptions,d=c[this.type];this.userOptions=a;a=y(d,c.series,a);this.tooltipOptions=y(b.tooltip,a.tooltip);d.marker===null&&delete a.marker;
return a},getColor:function(){var a=this.options,b=this.userOptions,c=this.chart.options.colors,d=this.chart.counters,e;e=a.color||X[this.type].color;if(!e&&!a.colorByPoint)r(b._colorIndex)?a=b._colorIndex:(b._colorIndex=d.color,a=d.color++),e=c[a];this.color=e;d.wrapColor(c.length)},getSymbol:function(){var a=this.userOptions,b=this.options.marker,c=this.chart,d=c.options.symbols,c=c.counters;this.symbol=b.symbol;if(!this.symbol)r(a._symbolIndex)?a=a._symbolIndex:(a._symbolIndex=c.symbol,a=c.symbol++),
this.symbol=d[a];if(/^url/.test(this.symbol))b.radius=0;c.wrapSymbol(d.length)},drawLegendSymbol:function(a){var b=this.options,c=b.marker,d=a.options.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline,g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a-4,"L",d,a-4]).attr(g).add(f)}if(c&&c.enabled)b=c.radius,this.legendSymbol=e.symbol(this.symbol,d/2-b,a-4-b,2*b,2*b).add(f)},addPoint:function(a,b,c,d){var e=this.options,
f=this.data,g=this.graph,h=this.area,i=this.chart,j=this.xData,k=this.yData,m=this.zData,l=this.names,p=g&&g.shift||0,n=e.data;Ha(d,i);if(g&&c)g.shift=p+1;if(h){if(c)h.shift=p+1;h.isArea=!0}b=o(b,!0);d={series:this};this.pointClass.prototype.applyOptions.apply(d,[a]);j.push(d.x);k.push(this.toYData?this.toYData(d):d.y);m.push(d.z);if(l)l[d.x]=d.name;n.push(a);e.legendType==="point"&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),j.shift(),k.shift(),m.shift(),n.shift()));this.getAttribs();
this.isDirtyData=this.isDirty=!0;b&&i.redraw()},setData:function(a,b){var c=this.points,d=this.options,e=this.chart,f=null,g=this.xAxis,h=g&&g.categories&&!g.categories.length?[]:null,i;this.xIncrement=null;this.pointRange=g&&g.categories?1:d.pointRange;this.colorCounter=0;var j=[],k=[],m=[],l=a?a.length:[],p=(i=this.pointArrayMap)&&i.length,n=!!this.toYData;if(l>(d.turboThreshold||1E3)){for(i=0;f===null&&i<l;)f=a[i],i++;if(Ca(f)){f=o(d.pointStart,0);d=o(d.pointInterval,1);for(i=0;i<l;i++)j[i]=f,
k[i]=a[i],f+=d;this.xIncrement=f}else if(Ba(f))if(p)for(i=0;i<l;i++)d=a[i],j[i]=d[0],k[i]=d.slice(1,p+1);else for(i=0;i<l;i++)d=a[i],j[i]=d[0],k[i]=d[1]}else for(i=0;i<l;i++)if(a[i]!==x&&(d={series:this},this.pointClass.prototype.applyOptions.apply(d,[a[i]]),j[i]=d.x,k[i]=n?this.toYData(d):d.y,m[i]=d.z,h&&d.name))h[i]=d.name;this.requireSorting&&j.length>1&&j[1]<j[0]&&qa(15);fa(k[0])&&qa(14,!0);this.data=[];this.options.data=a;this.xData=j;this.yData=k;this.zData=m;this.names=h;for(i=c&&c.length||
0;i--;)c[i]&&c[i].destroy&&c[i].destroy();if(g)g.minRange=g.userMinRange;this.isDirty=this.isDirtyData=e.isDirtyBox=!0;o(b,!0)&&e.redraw(!1)},remove:function(a,b){var c=this,d=c.chart,a=o(a,!0);if(!c.isRemoving)c.isRemoving=!0,D(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;a&&d.redraw(b)});c.isRemoving=!1},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e=0,f=d,g,h,i=this.xAxis,j=this.options,k=j.cropThreshold,m=this.isCartesian;if(m&&!this.isDirty&&!i.isDirty&&
!this.yAxis.isDirty&&!a)return!1;if(m&&this.sorted&&(!k||d>k||this.forceCrop))if(a=i.getExtremes(),i=a.min,k=a.max,b[d-1]<i||b[0]>k)b=[],c=[];else if(b[0]<i||b[d-1]>k){for(a=0;a<d;a++)if(b[a]>=i){e=q(0,a-1);break}for(;a<d;a++)if(b[a]>k){f=a+1;break}b=b.slice(e,f);c=c.slice(e,f);g=!0}for(a=b.length-1;a>0;a--)if(d=b[a]-b[a-1],d>0&&(h===x||d<h))h=d;this.cropped=g;this.cropStart=e;this.processedXData=b;this.processedYData=c;if(j.pointRange===null)this.pointRange=h||1;this.closestPointRange=h},generatePoints:function(){var a=
this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,m=[],l;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(l=0;l<g;l++)i=h+l,j?m[l]=(new f).init(this,[d[l]].concat(ha(e[l]))):(b[i]?k=b[i]:a[i]!==x&&(b[i]=k=(new f).init(this,a[i],d[l])),m[l]=k);if(b&&(g!==(c=b.length)||j))for(l=0;l<c;l++)if(l===h&&!j&&(l+=g),b[l])b[l].destroyElements(),b[l].plotX=x;this.data=b;this.points=m},translate:function(){this.processedXData||
this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i,j=e.series,k=j.length,m=a.pointPlacement==="between",a=a.threshold;k--;)if(j[k].visible){j[k]===this&&(i=!0);break}for(k=0;k<g;k++){var j=f[k],l=j.x,p=j.y,n=j.low,q=e.stacks[(p<a?"-":"")+this.stackKey];if(e.isLog&&p<=0)j.y=p=null;j.plotX=c.translate(l,0,0,0,1,m);if(b&&this.visible&&q&&q[l])n=q[l],q=n.total,n.cum=n=n.cum-p,p=n+p,i&&(n=
o(a,e.min)),e.isLog&&n<=0&&(n=null),b==="percent"&&(n=q?n*100/q:0,p=q?p*100/q:0),j.percentage=q?j.y*100/q:0,j.total=j.stackTotal=q,j.stackY=p;j.yBottom=r(n)?e.translate(n,0,1,0,1):null;h&&(p=this.modifyValue(p,j));j.plotY=typeof p==="number"&&p!==Infinity?t(e.translate(p,0,1,0,1)*10)/10:x;j.clientX=m?c.translate(l,0,0,0,1):j.plotX;j.negative=j.y<(a||0);j.category=d&&d[j.x]!==x?d[j.x]:j.x}this.getSegments()},setTooltipPoints:function(a){var b=[],c,d,e=(c=this.xAxis)?c.tooltipLen||c.len:this.chart.plotSizeX,
f,g,h=[];if(this.options.enableMouseTracking!==!1){if(a)this.tooltipPoints=null;n(this.segments||this.points,function(a){b=b.concat(a)});c&&c.reversed&&(b=b.reverse());a=b.length;for(g=0;g<a;g++){f=b[g];c=b[g-1]?d+1:0;for(d=b[g+1]?q(0,T((f.clientX+(b[g+1]?b[g+1].clientX:e))/2)):e;c>=0&&c<=d;)h[c++]=f}this.tooltipPoints=h}},tooltipHeaderFormatter:function(a){var b=this.tooltipOptions,c=b.xDateFormat,d=this.xAxis,e=d&&d.options.type==="datetime",f=b.headerFormat,g;if(e&&!c)for(g in E)if(E[g]>=d.closestPointRange){c=
b.dateTimeLabelFormats[g];break}e&&c&&Ca(a.key)&&(f=f.replace("{point.key}","{point.key:"+c+"}"));return Ea(f,{point:a,series:this})},onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&D(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;if(d)d.onMouseOut();this&&a.events.mouseOut&&D(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&
c.hide();this.setState();b.hoverSeries=null},animate:function(a){var b=this,c=b.chart,d=c.renderer,e;e=b.options.animation;var f=c.clipBox,g=c.inverted,h;if(e&&!V(e))e=X[b.type].animation;h="_sharedClip"+e.duration+e.easing;if(a)a=c[h],e=c[h+"m"],a||(c[h]=a=d.clipRect(v(f,{width:0})),c[h+"m"]=e=d.clipRect(-99,g?-c.plotLeft:-c.plotTop,99,g?c.chartWidth:c.chartHeight)),b.group.clip(a),b.markerGroup.clip(e),b.sharedClipKey=h;else{if(a=c[h])a.animate({width:c.plotSizeX},e),c[h+"m"].animate({width:c.plotSizeX+
99},e);b.animate=null;b.animationTimeout=setTimeout(function(){b.afterAnimate()},e.duration)}},afterAnimate:function(){var a=this.chart,b=this.sharedClipKey,c=this.group;c&&this.options.clip!==!1&&(c.clip(a.clipRect),this.markerGroup.clip());setTimeout(function(){b&&a[b]&&(a[b]=a[b].destroy(),a[b+"m"]=a[b+"m"].destroy())},100)},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,m=this.options.marker,l,n=this.markerGroup;if(m.enabled||this._hasPointMarkers)for(f=b.length;f--;)if(g=
b[f],d=g.plotX,e=g.plotY,k=g.graphic,i=g.marker||{},a=m.enabled&&i.enabled===x||i.enabled,l=c.isInsidePlot(d,e,c.inverted),a&&e!==x&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""],h=a.r,i=o(i.symbol,this.symbol),j=i.indexOf("url")===0,k)k.attr({visibility:l?Z?"inherit":"visible":"hidden"}).animate(v({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(l&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h).attr(a).add(n)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,
b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=o(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=X[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h={stroke:g,fill:g},i=a.points||[],j=[],k,m=a.pointAttrToOptions,l=b.negativeColor,p;b.marker?(e.radius=e.radius||c.radius+2,e.lineWidth=e.lineWidth||c.lineWidth+1):e.color=e.color||ma(e.color||g).brighten(e.brightness).get();j[""]=a.convertAttribs(c,h);n(["hover",
"select"],function(b){j[b]=a.convertAttribs(d[b],j[""])});a.pointAttr=j;for(g=i.length;g--;){h=i[g];if((c=h.options&&h.options.marker||h.options)&&c.enabled===!1)c.radius=0;if(h.negative&&l)h.color=h.fillColor=l;f=b.colorByPoint||h.color;if(h.options)for(p in m)r(c[m[p]])&&(f=!0);if(f){c=c||{};k=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker)f.color=ma(f.color||h.color).brighten(f.brightness||e.brightness).get();k[""]=a.convertAttribs(v({color:h.color},c),j[""]);k.hover=a.convertAttribs(d.hover,
j.hover,k[""]);k.select=a.convertAttribs(d.select,j.select,k[""]);if(h.negative&&b.marker)k[""].fill=k.hover.fill=k.select.fill=a.convertAttribs({fillColor:l}).fill}else k=j;h.pointAttr=k}},update:function(a,b){var c=this.chart,d=this.type,a=y(this.userOptions,{animation:!1,index:this.index,pointStart:this.xData[0]},a);this.remove(!1);v(this,aa[a.type||d].prototype);this.init(c,a);o(b,!0)&&c.redraw(!1)},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(ya),d,e,f=a.data||[],g,h,i;D(a,
"destroy");ba(a);n(["xAxis","yAxis"],function(b){if(i=a[b])ga(i.series,a),i.isDirty=i.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);n("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","),function(b){a[b]&&(d=c&&b==="group"?"hide":"destroy",a[b][d]())});if(b.hoverSeries===a)b.hoverSeries=null;ga(b.series,a);for(h in a)delete a[h]},drawDataLabels:function(){var a=
this,b=a.options.dataLabels,c=a.points,d,e,f,g;if(b.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(b),g=a.plotGroup("dataLabelsGroup","data-labels",a.visible?"visible":"hidden",b.zIndex||6),e=b,n(c,function(c){var i,j=c.dataLabel,k,m,l=c.connector,n=!0;d=c.options&&c.options.dataLabels;i=e.enabled||d&&d.enabled;if(j&&!i)c.dataLabel=j.destroy();else if(i){i=b.rotation;b=y(e,d);k=c.getLabelConfig();f=b.format?Ea(b.format,k):b.formatter.call(k,b);b.style.color=o(b.color,b.style.color,
a.color,"black");if(j)if(r(f))j.attr({text:f}),n=!1;else{if(c.dataLabel=j=j.destroy(),l)c.connector=l.destroy()}else if(r(f)){j={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:i,padding:b.padding,zIndex:1};for(m in j)j[m]===x&&delete j[m];j=c.dataLabel=a.chart.renderer[i?"text":"label"](f,0,-999,null,null,null,b.useHTML).attr(j).css(b.style).add(g).shadow(b.shadow)}j&&a.alignDataLabel(c,j,b,null,n)}})},alignDataLabel:function(a,b,c,d,e){var f=
this.chart,g=f.inverted,h=o(a.plotX,-999),a=o(a.plotY,-999),i=b.getBBox(),d=v({x:g?f.plotWidth-a:h,y:t(g?f.plotHeight-h:a),width:0,height:0},d);v(c,{width:i.width,height:i.height});c.rotation?(d={align:c.align,x:d.x+c.x+d.width/2,y:d.y+c.y+d.height/2},b[e?"attr":"animate"](d)):b.align(c,null,d);b.attr({visibility:c.crop===!1||f.isInsidePlot(h,a,g)?f.renderer.isSVG?"inherit":"visible":"hidden"})},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;n(a,function(e,f){var g=e.plotX,h=e.plotY,
i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=[];n(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=b},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color]],d=b.lineWidth,
e=b.dashStyle,f=this.getGraphPath(),g=b.negativeColor;g&&c.push(["graphNeg",g]);n(c,function(c,g){var j=c[0],k=a[j];if(k)Ta(k),k.animate({d:f});else if(d&&f.length){k={stroke:c[1],"stroke-width":d,zIndex:1};if(e)k.dashstyle=e;a[j]=a.chart.renderer.path(f).attr(k).add(a.group).shadow(!g&&b.shadow)}})},clipNeg:function(){var a=this.options,b=this.chart,c=b.renderer,d=a.negativeColor,e,f=this.posClip,g=this.negClip;e=b.chartWidth;var h=b.chartHeight,i=q(e,h);if(d&&this.graph)d=ja(this.yAxis.len-this.yAxis.translate(a.threshold||
0)),a={x:0,y:0,width:i,height:d},i={x:0,y:d,width:i,height:i-d},b.inverted&&c.isVML&&(a={x:b.plotWidth-d-b.plotLeft,y:0,width:e,height:h},i={x:d+b.plotLeft-e,y:0,width:b.plotLeft+d,height:e}),this.yAxis.reversed?(b=i,e=a):(b=a,e=i),f?(f.animate(b),g.animate(e)):(this.posClip=f=c.clipRect(b),this.graph.clip(f),this.negClip=g=c.clipRect(e),this.graphNeg.clip(g),this.area&&(this.area.clip(f),this.areaNeg.clip(g)))},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};n(["group",
"markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;J(c,"resize",a);J(b,"destroy",function(){ba(c,"resize",a)});a();b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f,h=this.chart,i=this.xAxis,j=this.yAxis;g&&(this[a]=f=h.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"]({translateX:i?i.left:h.plotLeft,translateY:j?j.top:h.plotTop,scaleX:1,scaleY:1});return f},render:function(){var a=this.chart,b,c=this.options,d=c.animation&&
!!this.animate&&a.renderer.isSVG,e=this.visible?"visible":"hidden",f=c.zIndex,g=this.hasRendered,h=a.seriesGroup;b=this.plotGroup("group","series",e,f,h);this.markerGroup=this.plotGroup("markerGroup","markers",e,f,h);d&&this.animate(!0);this.getAttribs();b.inverted=a.inverted;this.drawGraph&&(this.drawGraph(),this.clipNeg());this.drawDataLabels();this.drawPoints();this.options.enableMouseTracking!==!1&&this.drawTracker();a.inverted&&this.invertGroups();c.clip!==!1&&!this.sharedClipKey&&!g&&b.clip(a.clipRect);
d?this.animate():g||this.afterAnimate();this.isDirty=this.isDirtyData=!1;this.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:o(d&&d.left,a.plotLeft),translateY:o(e&&e.top,a.plotTop)}));this.translate();this.setTooltipPoints(!0);this.render();b&&D(this,"updatedData")},setState:function(a){var b=this.options,c=this.graph,d=this.graphNeg,e=b.states,b=b.lineWidth,
a=a||"";if(this.state!==a)this.state=a,e[a]&&e[a].enabled===!1||(a&&(b=e[a].lineWidth||b+1),c&&!c.dashstyle&&(a={"stroke-width":b},c.attr(a),d&&d.attr(a)))},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===x?!h:a)?"show":"hide";n(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&
n(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});n(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();D(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===x?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;D(this,a?"select":"unselect")},drawTracker:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,
h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,k=k&&{cursor:k},m=a.singlePoints,l,n=function(){if(f.hoverSeries!==a)a.onMouseOver()};if(e&&!c)for(l=e+1;l--;)d[l]==="M"&&d.splice(l+1,0,d[l+1]-i,d[l+2],"L"),(l&&d[l]==="M"||l===e)&&d.splice(l,0,"L",d[l-2]+i,d[l-1]);for(l=0;l<m.length;l++)e=m[l],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);if(j)j.attr({d:d});else if(a.tracker=j=h.path(d).attr({"class":"highcharts-tracker","stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",
stroke:Mb,fill:c?Mb:S,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(k).add(a.markerGroup),fb)j.on("touchstart",n)}};M=ea(R);aa.line=M;X.area=y(W,{threshold:0});M=ea(R,{type:"area",getSegments:function(){var a=[],b=[],c=[],d=this.xAxis,e=this.yAxis,f=e.stacks[this.stackKey],g={},h,i,j=this.points,k,m;if(this.options.stacking&&!this.cropped){for(k=0;k<j.length;k++)g[j[k].x]=j[k];for(m in f)c.push(+m);
c.sort(function(a,b){return a-b});n(c,function(a){g[a]?b.push(g[a]):(h=d.translate(a),i=e.toPixels(f[a].cum,!0),b.push({y:null,plotX:h,clientX:h,plotY:i,yBottom:i,onMouseOver:ta}))});b.length&&a.push(b)}else R.prototype.getSegments.call(this),a=this.segments;this.segments=a},getSegmentPath:function(a){var b=R.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;b.length===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=a.length-1;d>=0;d--)d<a.length-1&&e.step&&c.push(a[d+
1].plotX,a[d].yBottom),c.push(a[d].plotX,a[d].yBottom);else this.closeSegment(c,a);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b){var c=this.yAxis.getThreshold(this.options.threshold);a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];R.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];c.negativeColor&&d.push(["areaNeg",c.negativeColor,c.negativeFillColor]);n(d,function(d){var f=
d[0],g=a[f];g?g.animate({d:b}):a[f]=a.chart.renderer.path(b).attr({fill:o(d[2],ma(d[1]).setOpacity(c.fillOpacity||0.75).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:function(a,b){b.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,a.options.symbolWidth,12,2).attr({zIndex:3}).add(b.legendGroup)}});aa.area=M;X.spline=y(W);F=ea(R,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,m;h=(1.5*d+f.plotX)/2.5;
i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;k=(1.5*e+g)/2.5;m=(k-i)*(j-d)/(j-h)+e-k;i+=m;k+=m;i>a&&i>e?(i=q(a,e),k=2*e-i):i<a&&i<e&&(i=K(a,e),k=2*e-i);k>g&&k>e?(k=q(g,e),i=2*e-k):k<g&&k<e&&(k=K(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});aa.spline=F;X.areaspline=y(X.area);na=M.prototype;F=ea(F,{type:"areaspline",closedStacks:!0,getSegmentPath:na.getSegmentPath,closeSegment:na.closeSegment,
drawGraph:na.drawGraph});aa.areaspline=F;X.column=y(W,{borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:!1,threshold:0});F=ea(R,{type:"column",tooltipOutsidePlot:!0,requireSorting:!1,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",
fill:"color",r:"borderRadius"},trackerGroups:["group","dataLabelsGroup"],init:function(){R.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&n(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.chart,c=a.options,d=this.xAxis,e=d.reversed,f,g={},h,i=0;c.grouping===!1?i=1:n(b.series,function(b){var c=b.options;if(b.type===a.type&&b.visible&&a.options.group===c.group)c.stacking?(f=b.stackKey,g[f]===x&&(g[f]=i++),h=g[f]):c.grouping!==
!1&&(h=i++),b.columnIndex=h});var b=K(Q(d.transA)*(d.ordinalSlope||c.pointRange||d.closestPointRange||1),d.len),d=b*c.groupPadding,j=(b-2*d)/i,k=c.pointWidth,c=r(k)?(j-k)/2:j*c.pointPadding,k=o(k,j-2*c);return a.columnMetrics={width:k,offset:c+(d+((e?i-(a.columnIndex||0):a.columnIndex)||0)*j-b/2)*(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=c.stacking,e=c.borderWidth,f=a.yAxis,g=a.translatedThreshold=f.getThreshold(c.threshold),h=o(c.minPointLength,5),c=a.getColumnMetrics(),
i=c.width,j=ja(q(i,1+2*e)),k=c.offset;R.prototype.translate.apply(a);n(a.points,function(c){var l=K(q(-999,c.plotY),f.len+999),n=o(c.yBottom,g),s=c.plotX+k,t=ja(K(l,n)),l=ja(q(l,n)-t),r=f.stacks[(c.y<0?"-":"")+a.stackKey];d&&a.visible&&r&&r[c.x]&&r[c.x].setOffset(k,j);Q(l)<h&&h&&(l=h,t=Q(t-g)>h?n-h:g-(f.translate(c.y,0,1,0,1)<=g?h:0));c.barX=s;c.pointWidth=i;c.shapeType="rect";c.shapeArgs=c=b.renderer.Element.prototype.crisp.call(0,e,s,t,j,l);e%2&&(c.y-=1,c.height+=1)})},getSymbol:ta,drawLegendSymbol:M.prototype.drawLegendSymbol,
drawGraph:ta,drawPoints:function(){var a=this,b=a.options,c=a.chart.renderer,d;n(a.points,function(e){var f=e.plotY,g=e.graphic;if(f!==x&&!isNaN(f)&&e.y!==null)d=e.shapeArgs,g?(Ta(g),g.animate(y(d))):e.graphic=c[e.shapeType](d).attr(e.pointAttr[e.selected?"select":""]).add(a.group).shadow(b.shadow,null,b.stacking&&!b.borderRadius);else if(g)e.graphic=g.destroy()})},drawTracker:function(){var a=this,b=a.chart.pointer,c=a.options.cursor,d=c&&{cursor:c},e=function(b){var c=b.target,d;for(a.onMouseOver();c&&
!d;)d=c.point,c=c.parentNode;if(d!==x)d.onMouseOver(b)};n(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});a._hasTracking?a._hasTracking=!0:n(a.trackerGroups,function(c){if(a[c]&&(a[c].addClass("highcharts-tracker").on("mouseover",e).on("mouseout",function(a){b.onTrackerMouseOut(a)}).css(d),fb))a[c].on("touchstart",e)})},alignDataLabel:function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=a.dlBox||a.shapeArgs,i=a.below||a.plotY>o(this.translatedThreshold,
f.plotSizeY),j=o(c.inside,!!this.options.stacking);if(h&&(d=y(h),g&&(d={x:f.plotWidth-d.y-d.height,y:f.plotHeight-d.x-d.width,width:d.height,height:d.width}),!j))g?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=o(c.align,!g||j?"center":i?"right":"left");c.verticalAlign=o(c.verticalAlign,g||j?"middle":i?"top":"bottom");R.prototype.alignDataLabel.call(this,a,b,c,d,e)},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(Z)a?(e.scaleY=0.001,a=K(b.pos+
b.len,q(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&n(b.series,function(b){if(b.type===a.type)b.isDirty=!0});R.prototype.remove.apply(a,arguments)}});aa.column=F;X.bar=y(X.column);na=ea(F,{type:"bar",inverted:!0});aa.bar=na;X.scatter=y(W,{lineWidth:0,tooltip:{headerFormat:'<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",followPointer:!0},stickyTracking:!1});na=ea(R,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["markerGroup"],drawTracker:F.prototype.drawTracker,setTooltipPoints:ta});aa.scatter=na;X.pie=y(W,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name}},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,
showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});W={type:"pie",isCartesian:!1,pointClass:ea(Ma,{init:function(){Ma.prototype.init.apply(this,arguments);var a=this,b;if(a.y<0)a.y=null;v(a,{visible:a.visible!==!1,name:o(a.name,"Slice")});b=function(){a.slice()};J(a,"select",b);J(a,"unselect",b);return a},setVisible:function(a){var b=this,c=b.series,d=c.chart,e;b.visible=b.options.visible=a=a===x?!b.visible:a;c.options.data[la(b,
c.data)]=b.options;e=a?"show":"hide";n(["graphic","dataLabel","connector","shadowGroup"],function(a){if(b[a])b[a][e]()});b.legendItem&&d.legend.colorizeItem(b,a);if(!c.isDirty&&c.options.ignoreHiddenPoint)c.isDirty=!0,d.redraw()},slice:function(a,b,c){var d=this.series;Ha(c,d.chart);o(b,!0);this.sliced=this.options.sliced=a=r(a)?a:!this.sliced;d.options.data[la(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)}}),
requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},getColor:ta,animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)n(c,function(a){var c=a.graphic,a=a.shapeArgs;c&&(c.attr({r:b.center[3]/2,start:d,end:d}),c.animate({r:a.r,start:a.start,end:a.end},b.options.animation))}),b.animate=null},setData:function(a,b){R.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();
o(b,!0)&&this.chart.redraw()},getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d,e=b.plotWidth-2*c,f=b.plotHeight-2*c,b=a.center,a=[o(b[0],"50%"),o(b[1],"50%"),a.size||"100%",a.innerSize||0],g=K(e,f),h;return Ka(a,function(a,b){h=/%$/.test(a);d=b<2||b===2&&h;return(h?[e,f,g,g][b]*u(a)/100:a)+(d?c:0)})},translate:function(a){this.generatePoints();var b=0,c=0,d=this.options,e=d.slicedOffset,f=e+d.borderWidth,g,h,i,j=this.startAngleRad=Ja/180*((d.startAngle||0)%360-90),k=
this.points,m=2*Ja,l=d.dataLabels.distance,n=d.ignoreHiddenPoint,o,q=k.length,r;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){i=I.asin((b-a[1])/(a[2]/2+l));return a[0]+(c?-1:1)*Y(i)*(a[2]/2+l)};for(o=0;o<q;o++)r=k[o],b+=n&&!r.visible?0:r.y;for(o=0;o<q;o++){r=k[o];d=b?r.y/b:0;g=t((j+c*m)*1E3)/1E3;if(!n||r.visible)c+=d;h=t((j+c*m)*1E3)/1E3;r.shapeType="arc";r.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:g,end:h};i=(h+g)/2;i>0.75*m&&(i-=2*Ja);r.slicedTranslation={translateX:t(Y(i)*
e),translateY:t(ca(i)*e)};g=Y(i)*a[2]/2;h=ca(i)*a[2]/2;r.tooltipPos=[a[0]+g*0.7,a[1]+h*0.7];r.half=i<m/4?0:1;r.angle=i;f=K(f,l/2);r.labelPos=[a[0]+g+Y(i)*l,a[1]+h+ca(i)*l,a[0]+g+Y(i)*f,a[1]+h+ca(i)*f,a[0]+g,a[1]+h,l<0?"center":r.half?"right":"left",i];r.percentage=d*100;r.total=b}this.setTooltipPoints()},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);n(a.points,function(h){d=h.graphic;g=h.shapeArgs;
f=h.shadowGroup;if(e&&!f)f=h.shadowGroup=b.g("shadow").add(a.shadowGroup);c=h.sliced?h.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);d?d.animate(v(g,c)):h.graphic=d=b.arc(g).setRadialReference(a.center).attr(h.pointAttr[h.selected?"select":""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);h.visible===!1&&h.setVisible(!1)})},drawDataLabels:function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=o(e.connectorPadding,10),g=o(e.connectorWidth,1),h=d.plotWidth,
d=d.plotHeight,i,j,k=o(e.softConnector,!0),m=e.distance,l=a.center,p=l[2]/2,s=l[1],r=m>0,v,w,u,x,y=[[],[]],A,z,E,H,C,D=[0,0,0,0],K=function(a,b){return b.y-a.y},M=function(a,b){a.sort(function(a,c){return a.angle!==void 0&&(c.angle-a.angle)*b})};if(e.enabled||a._hasPointLabels){R.prototype.drawDataLabels.apply(a);n(b,function(a){a.dataLabel&&y[a.half].push(a)});for(H=0;!x&&b[H];)x=b[H]&&b[H].dataLabel&&(b[H].dataLabel.getBBox().height||21),H++;for(H=2;H--;){var b=[],L=[],I=y[H],J=I.length,F;M(I,H-
0.5);if(m>0){for(C=s-p-m;C<=s+p+m;C+=x)b.push(C);w=b.length;if(J>w){c=[].concat(I);c.sort(K);for(C=J;C--;)c[C].rank=C;for(C=J;C--;)I[C].rank>=w&&I.splice(C,1);J=I.length}for(C=0;C<J;C++){c=I[C];u=c.labelPos;c=9999;var O,N;for(N=0;N<w;N++)O=Q(b[N]-u[1]),O<c&&(c=O,F=N);if(F<C&&b[C]!==null)F=C;else for(w<J-C+F&&b[C]!==null&&(F=w-J+C);b[F]===null;)F++;L.push({i:F,y:b[F]});b[F]=null}L.sort(K)}for(C=0;C<J;C++){c=I[C];u=c.labelPos;v=c.dataLabel;E=c.visible===!1?"hidden":"visible";c=u[1];if(m>0){if(w=L.pop(),
F=w.i,z=w.y,c>z&&b[F+1]!==null||c<z&&b[F-1]!==null)z=c}else z=c;A=e.justify?l[0]+(H?-1:1)*(p+m):a.getX(F===0||F===b.length-1?c:z,H);v._attr={visibility:E,align:u[6]};v._pos={x:A+e.x+({left:f,right:-f}[u[6]]||0),y:z+e.y-10};v.connX=A;v.connY=z;if(this.options.size===null)w=v.width,A-w<f?D[3]=q(t(w-A+f),D[3]):A+w>h-f&&(D[1]=q(t(A+w-h+f),D[1])),z-x/2<0?D[0]=q(t(-z+x/2),D[0]):z+x/2>d&&(D[2]=q(t(z+x/2-d),D[2]))}}if(pa(D)===0||this.verifyDataLabelOverflow(D))this.placeDataLabels(),r&&g&&n(this.points,function(b){i=
b.connector;u=b.labelPos;if((v=b.dataLabel)&&v._pos)A=v.connX,z=v.connY,j=k?["M",A+(u[6]==="left"?5:-5),z,"C",A,z,2*u[2]-u[4],2*u[3]-u[5],u[2],u[3],"L",u[4],u[5]]:["M",A+(u[6]==="left"?5:-5),z,"L",u[2],u[3],"L",u[4],u[5]],i?(i.animate({d:j}),i.attr("visibility",E)):b.connector=i=a.chart.renderer.path(j).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:E}).add(a.group);else if(i)b.connector=i.destroy()})}},verifyDataLabelOverflow:function(a){var b=this.center,c=this.options,
d=c.center,e=c=c.minSize||80,f;d[0]!==null?e=q(b[2]-q(a[1],a[3]),c):(e=q(b[2]-a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);d[1]!==null?e=q(K(e,b[2]-q(a[0],a[2])),c):(e=q(K(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);e<b[2]?(b[2]=e,this.translate(b),n(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=null}),this.drawDataLabels()):f=!0;return f},placeDataLabels:function(){n(this.points,function(a){var a=a.dataLabel,b;if(a)(b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999})})},
alignDataLabel:ta,drawTracker:F.prototype.drawTracker,drawLegendSymbol:M.prototype.drawLegendSymbol,getSymbol:ta};W=ea(R,W);aa.pie=W;v(Highcharts,{Axis:ab,Chart:sb,Color:ma,Legend:rb,Pointer:qb,Point:Ma,Tick:Ia,Tooltip:pb,Renderer:Sa,Series:R,SVGElement:ra,SVGRenderer:Aa,arrayMin:Fa,arrayMax:pa,charts:za,dateFormat:Ua,format:Ea,pathAnim:ub,getOptions:function(){return N},hasBidiBug:Rb,isTouchDevice:Kb,numberFormat:Na,seriesTypes:aa,setOptions:function(a){N=y(N,a);Hb();return N},addEvent:J,removeEvent:ba,
createElement:U,discardElement:Ra,css:L,each:n,extend:v,map:Ka,merge:y,pick:o,splat:ha,extendClass:ea,pInt:u,wrap:function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}},svg:Z,canvas:$,vml:!Z&&!$,product:"Highcharts",version:"3.0.1"})})();
;// =============  Custom jQuery shake animation =================

$(function(){
    $.fn.shake = function(){
        this.animate({
            marginLeft: '-6px'
        }, 30, function (el) {
            $(this).animate({
                marginLeft: '6px'
            }, 30, function (el) {
                $(this).animate({
                    marginLeft: '0'
                }, 30)
            });
        });
    }
});


// ===========  Utils module =============
var tinybudgetutils = (function(){
  return {
    validate:function(type,input) {
        var error;
        if (type == 'desc'){

          var pat = /.*\&/
        var m1 = pat.test(input);

            if (input.length == 0){
                error = "too short";
                return error;
            } else if (input.length > 32){
                error = "too long";
                return error;
            } else if (m1){
              error = 'Ampersand';
              return error;
            } else {
                return null
            }

        } else if (type == 'amt'){

            if (input.length == 0){
                error = "too short";
                return error;
            } else if (input.length > 8){
                error = "too long";
                return error;
            } else {
                var re = /^-?\$?[0-9]*\.?([0-9]{2})?$/
                var m2 = re.test(input)
                if (!m2) {
                    error = "invalid amount format";
                    return error;
                } else {
                    var parsed_input = parseFloat(input).toFixed(2);
                    if (isNaN(parsed_input)) {
                        error = "invalid amount format";
                        return error;
                    } else {
                        return null;
                    }
                }
            }

        } else if (type == 'date'){

            var date = input.split("/");

            if (!(date[0] && date[1] && date[2])){
                error = "invalid date format";
                return error;
            } else {

                for (var i = 0; i < date.length; i++) {
                    date[i] = parseInt(date[i]);l
                    if (isNaN(date[i])){
                        error = 'date string not a number';
                        return error;
                    }
                };

                if ( (date[0] == 0) || (date[0] > 12) || (date[1] == 0) || (date[1] > 31) || (date[2] < 2011) || (date[2] > 2015) ) {
                    error = 'date is invalid';
                    return error;
                } else {
                    return null
                }
            }
        }
    },
    currency_tooltip: $("#validate_amount").mouseover(function () {
          $(this).tooltip({
              title: "Ex. '45.99' or '46'"
          }).tooltip('show');
      }),
      datepicker: $("#validate_date").datepicker(),    
      
          // issues all ajax calls to server
      issue : function (command, array, Json, cb) {
          var url = command + "?";
          for (var i = 0; i < array.length; i++) {
              if (i !== 0) {
                  url += "&" + array[i][0] + "=" + array[i][1];
              } else {
                  url += array[i][0] + "=" + array[i][1];
              }
          }
          if (Json == null){
            // request is a get
            $.ajax({
              url: url,
              type: 'GET',
              error: function(dat){
                cb(true);
                return
              },
              complete: function(dat){
                cb(null,dat.status,dat.responseText);
                return
              }
            });
          } else {
            $.ajax({
              url: url,
              type: 'POST',
			  contentType: 'application/json',
              data: JSON.stringify(Json),
              error: function(dat){
                cb(true);
                return
              },
              complete: function(dat){
                cb(null,dat.status,dat.responseText);
                return
              }
            }); 
          }   
      }
  }
})();
;// hi I cahnged this file
// ===============  KNOCKOUT CUSTOM FUNCTIONS ==============


    // compares two states of an array to determine what item was added or removed
ko.observableArray.fn.subscribeArrayChanged = function (addCallback, deleteCallback) {
    
    var previousValue = undefined;
    
        // subscribe to the array change but get the previous version that existed before the change
    this.subscribe(function (_previousValue) {
        previousValue = _previousValue.slice(0);
    }, undefined, 'beforeChange'); 
    
        // another subsciption but get the current version of the array
    this.subscribe(function (latestValue) {

        // knockout utility compareArrays returns an array with the index of each item in the array
        // and the 'status'.
        var editScript = ko.utils.compareArrays(previousValue, latestValue);

        // loop through the array
        for (var i = 0; i < editScript.length; i++) {
            switch (editScript[i].status) {

                // if the item in both arrays is there, ie it was 'retained' then do nothing
                case "retained":
                    break;

                    // if the item was deleted then call the callback to delete the item from the server
                case "deleted":
                    if (deleteCallback)
                        deleteCallback(previousValue[i]);
                    break;

                    // if the item was added then call the callback to add an the item to the server
                case "added":
                    if (addCallback)
                        addCallback(latestValue[i]);
                    break;
            }
        }
        previousValue = undefined;
    });
};
// ============== CUSTOM BINDINGS =================

ko.bindingHandlers.iePlaceholder = {
    init: function(element, valueAccessor){
    	if (is_ie){
	    	$(element).val($(element).attr('placeholder')).addClass('placeholder').blur();
	        $(element).blur(function(){
	            if($(this).val() === ''){
	                $(this).val($(this).attr('placeholder')).addClass('placeholder');
	            }
	        }).focus(function(){
	            if($(this).val() == $(this).attr('placeholder')){
	                $(this).val('').removeClass('placeholder');
	            }
	        })
	    }
    },
    update: function(element, valueAccessor){
    	if (is_ie && $(this).val() === ''){
            $(this).val($(this).attr('placeholder')).addClass('placeholder');
        }
    }
}

// ==============  KNOCKOUT EXTENDERS ==================

ko.extenders.lockDownPayday = function(target, precision) {

    var result = ko.computed({
        read: target,  //always return the original observables value
        write: function(newValue) {
            var current = target();
                
            // prevent payday from changing
            if (current == 'payday') {
                target('payday');
            } else {
                target(newValue);
            }
        }
    });
 
    result(target());
 
    //return the new computed observable
    return result;
};

// ==============  KNOCKOUT OBJECTS ==================

    // object representing an item in a user's collections of items
function mappingRowItem(opt) {
    var self = this;
    self.desc = ko.observable(opt.desc);
    self.amt = ko.observable(opt.amt);
    self.date = ko.observable(opt.date);
    self.cat = ko.observable(opt.cat).extend({ lockDownPayday: null });
    self.year = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'yyyy');
    });
    self.month = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'm');
    });
    self.day = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'd');
    });
    self.formattedDate = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'mmm d, yyyy');
    });
    
    self.isflagged = ko.observable(opt.isflagged);

    self.comment = ko.observable();
    opt.comment ? self.comment(opt.comment): self.comment(''); 
    
    opt.itemid ? self.itemid = opt.itemid : self.itemid = CryptoJS.MD5(Math.random().toString());
    
        // to avoid re-adding items to server when the server loads items
    self.loadedFromServer = opt.loadedFromServer;
}
function rowitem(loadedFromServer, desc, amt, date, cat, itemid, flag, comment) {
    var self = this;
    self.desc = ko.observable(desc);
    self.amt = ko.observable(amt);
    self.date = ko.observable(date);
    self.cat = ko.observable(cat).extend({ lockDownPayday: null });
    self.year = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'yyyy');
    });
    self.month = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'm');
    });
    self.day = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'd');
    });
    self.formattedDate = ko.computed(function () {
        return dateFormat(Date.parse(self.date()), 'mmm d, yyyy');
    });
    
    self.isflagged = ko.observable();
    flag ? self.isflagged(true): self.isflagged(false);

    self.comment = ko.observable();
    comment ? self.comment(comment): self.comment('');
    
    itemid ? self.itemid = itemid : self.itemid = CryptoJS.MD5(Math.random().toString());
    
        // to avoid re-adding items to server when the server loads items
    self.loadedFromServer = loadedFromServer;
}
var mapping = {
    create: function (opt) {
        opt.data.loadedFromServer = true;
        opt.data.isflagged = (opt.data.isflagged == 'true' || opt.data.isflagged === true);
        opt.data.date = opt.data.month +"/"+ opt.data.day +"/"+ opt.data.year;
        return new mappingRowItem(opt.data)
    }
}



    // object representing the total monetary values of each category
function categoryTotal(name, amount) {
    var self = this;
    self.name = name;
    self.amount = amount;
}

    // object representing total items, average cost, average day -- seems redundant
function statCategoryTotal(name, amount, items, avg, day) {
    var self = this;
    self.name = name;
    self.amount = amount;
    self.items = items;
    self.average = avg;
    self.likely_day = day;
}

    // object representing a UI message for various feedback to the user
function UImessage(message,level) {
    var self = this;
    self.message = message;
    self.level = level;
}

    // for displaying month names
var monthName = {
    '1': 'January',
    '2': 'Febuary',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
};

;var server = (function(){
    return {
        fetchMonth: function(month,year,cb){
            tinybudget.viewmodel.loadstatus(1);

            $.ajax({
                method: 'GET',
                url: '/getMonth',
                data: {
                    name: tinybudget.viewmodel.user.name,
                    sess: tinybudget.viewmodel.user.sess,
                    year: year,
                    month: month
                },
                success: function (data) {           
                    var newItems = ko.mapping.fromJS([])
                    ko.mapping.fromJS(data.items, mapping, newItems);
                    ko.utils.arrayPushAll(tinybudget.viewmodel.userItems, newItems());
                    tinybudget.viewmodel.userItems.valueHasMutated();
                    tinybudget.viewmodel.renderChart();
                    tinybudget.viewmodel.loadstatus(2);
                    tinybudget.viewmodel.loadedMonths.push(month+","+year);

                },
                error: function (err) {
                    tinybudget.viewmodel.serverError();
                }
            })
        },
        addItemToServer:function(item){
            if (tinybudget.viewmodel.sorting === false) {
                if (tinybudget.viewmodel.loadstatus() > 1) {
                    if (item.loadedFromServer === false) {
                        tinybudgetutils.issue('addItem', [
                            ['name', tinybudget.viewmodel.user.name],
                            ['sess', tinybudget.viewmodel.user.sess],
                            ['cat', encodeURIComponent(item.cat())],
                            ['day', encodeURIComponent(item.day())],
                            ['month', encodeURIComponent(item.month())],
                            ['year', encodeURIComponent(item.year())],
                            ['amt', encodeURIComponent(item.amt())],
                            ['desc', encodeURIComponent(item.desc())],
                            ['itemid', encodeURIComponent(item.itemid)],
                            ['isflagged', encodeURIComponent(item.isflagged())],
                            ['comment', encodeURIComponent(item.comment())]
                        ], null, function (err, stat, text) {
                            if (stat == 400){
                                tinybudget.viewmodel.expiredSession();
                            } else if (stat == 500 || stat == 502){
                                tinybudget.viewmodel.serverError();
                            } else {
                                return;
                            }
                        });
                    }
                }
            } else {
                //console.log('tinybudget.viewmodel.sorting is ' + tinybudget.viewmodel.sorting);
            }
        },
        removeItemFromServer:function(item){
            if (tinybudget.viewmodel.sorting === false) {
                if (tinybudget.viewmodel.loadstatus() > 1) {
                    tinybudgetutils.issue('deleteItem', [
                        ['name', tinybudget.viewmodel.user.name],
                        ['sess', tinybudget.viewmodel.user.sess],
                        ['day', encodeURIComponent(item.day())],
                        ['month', encodeURIComponent(item.month())],
                        ['year', encodeURIComponent(item.year())],
                        ['itemid', encodeURIComponent(item.itemid)]
                    ], null, function (err, stat, text) {
                        if (stat == 400){
                            tinybudget.viewmodel.expiredSession();
                        } else if (stat == 500 || stat == 502){
                            tinybudget.viewmodel.serverError();
                        } else {
                            return;
                        }
                    });
                }
            } else {
                //console.log('self.sorting is ' + self.sorting);
            }
        },
        addCategoryToServer:function(item){
            if (tinybudget.viewmodel.loadstatus() > 1) {
                tinybudgetutils.issue('addCategory', [
                    ['name', tinybudget.viewmodel.user.name],
                    ['sess', tinybudget.viewmodel.user.sess],
                    ['cat', encodeURIComponent(item)]
                ], null, function (err, stat, text) {
                    if (stat == 400){
                        tinybudget.viewmodel.expiredSession();
                    } else if (stat == 500 || stat == 502){
                        tinybudget.viewmodel.serverError();
                    } else {
                        return;
                    }
                });
            }
        },
        removeCategoryFromServer:function(item){
            if (tinybudget.viewmodel.loadstatus() > 1) {
                tinybudgetutils.issue('deleteCategory', [
                    ['name', tinybudget.viewmodel.user.name],
                    ['sess', tinybudget.viewmodel.user.sess],
                    ['cat', encodeURIComponent(item)]
                ], null, function (err, stat, text) {
                    if (stat == 400){
                        tinybudget.viewmodel.expiredSession();
                    } else if (stat == 500 || stat == 502){
                        tinybudget.viewmodel.serverError();
                    } else {
                        return;
                    }
                });
            }
        }
    }    
    
})();
;var tech_tour = (function(){ 

    return {
        init: function(){  
            //console.log('tech tour called');
            
    		var tour = new Tour({
                name: Math.random() * 1000000,
                onEnd: function(tour){
                    tinybudget.viewmodel.onTour(0);
                }
            });
    
            tour.addStep({
                element: "#input_form",
                title: "MV-VM",
                content: "Using a form, each item is added to the knockout model and through knockout's <em>subscribe</em> feature, the server is updated iach time the model changes. The UI uses knockout data bindings to automatically update each time the model changes",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#tour_csvbutton",
                title: "HTML5 FileReader",
                content: "Alternatively, a user can 'upload' a CSV file of their bank statement. A script parses the CSV file and adds the items to the model. The file is not uploaded but read by the browser using the HTML5 FileReader API",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#tour_breakdown_table",
                title: "Breakdown &amp; Category Highlight",
                content: "This section contains two tables. Through data bindings one of them is always hidden. When a user clicks a pie slice, a knockout computed array is given the value to filter by and returns an array of items in that category, bringing up the Category Highlight table. Clicking again sets the filter value to null, hiding the Category Highlight table",
                placement: 'right',
                backdrop: false,
                onHide: function(){
                    tinybudget.viewmodel.categoryHighlight(tinybudget.viewmodel.userCategories()[0]);
                }   
            });
            tour.addStep({
                element: "#tour_highlight_table",
                title: "Breakdown &amp; Category Highlight",
                content: "Using a 'foreach' binding, the Highlight table loads each items data and toggles some css classes depending on whether the item is flagged or commented",
                placement: 'right',
                backdrop: false,
                onHide: function(){
                    tinybudget.viewmodel.categoryHighlight(null);
                }   
            });
            tour.addStep({
                element: "#highchart",
                title: "Highcharts",
                content: "The data used to construct the pie chart is the same for the Breakdown table. Each time an item is added, or month is changed the data is cleared and the new filtered array is loaded to both the Breakdown table and the pie chart",
                placement: 'left',
                backdrop: false  
            });
            tour.addStep({
                element: "#tour_month_select",
                title: "Knockout Observables",
                content: "Because Knockout keeps such good track of function subscriptions, updating the entire UI for each month was as simple as implimenting buttons that increment or decrement a value that the arrays filter by. The UI is updated automatically",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#tour_all_items",
                title: "All Your Items",
                content: "Sorting the items in this table was a real challenge. Clicking a chevron sorts the entire array of userItems, not just this months filtered items. Special functions are in place to overide automatic server calls when sorting occurs",
                placement: 'top',
                backdrop: true
            });
    
    
            tour.start(true);
        }
    };
})();

var user_tour = (function(){ 

    return {
        init: function(){  
            //console.log('user tour called');
            
            var tour = new Tour({
                name: Math.random() * 1000000,
                backdrop: true,
                onEnd: function(tour){
                    tinybudget.viewmodel.onTour(0);
                }
            });


            tour.addStep({
                element: "#tour_categories",
                title: "Basics",
                content: "Setup your categories here",
                placement: 'bottom'  
            });
            tour.addStep({
                element: "#tour_input_categories",
                title: "Basics",
                content: "Add and remove categories here. Clicking the X removes the category but any category can be readded in the future",
                placement: 'left',
                onShow: function(tour){
                    tinybudget.viewmodel.modalStatus("categories");
                }
            });
            tour.addStep({
                element: "#tour_unused_categories",
                title: "Basics",
                content: "Removing a category doesn't delete items, so Tiny Budget will tell you if there are items with a deleted category",
                placement: 'left',
                backdrop: true, 
                onHide: function(){
                    tinybudget.viewmodel.modalStatus("");
                }
            });
            tour.addStep({
                element: "#input_form",
                title: "Basics",
                content: "Input your spending items here",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#tour_month_select",
                title: "Basics",
                content: "Change which month you are viewing here",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#highchart",
                title: "The Pie",
                content: "Each months categories are shown on the pie for a quick visual reference of your spending",
                placement: 'top',
                backdrop: true    
            });
            tour.addStep({
                element: "#highchart",
                title: "The Pie",
                content: "Clicking on a pie slice brings all the items in the category to the Highlight Table",
                placement: 'top',
                backdrop: true,
                onHide: function(){
                    tinybudget.viewmodel.categoryHighlight(tinybudget.viewmodel.userCategories()[0]);
                }          
            });
            tour.addStep({
                element: "#tour_highlight_table",
                title: "Category Highlight",
                content: "Items for the selected category will show up here. You can delete, flag, or comment them",
                placement: 'top',
                backdrop: true
            });
            tour.addStep({
                element: "#tour_all_items",
                title: "All Your Items",
                content: "All of your items show up here. As with the table above, you can also delete, flag, or comment them.",
                placement: 'top',
                backdrop: true
            });

            tour.start(true);
        }
    };
})();;var chart_objects = (function(){
    return {
	
	     // HighCharts object for pie chart
	    pie_chart : {
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false
	        },
	        title: {
	            text: ''

	        },
	        tooltip: {
	            enabled: false
	        },
	        plotOptions: {
	            pie: {
	                animation: true,
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    color: '#000000',
	                    connectorColor: '#000000',
	                    formatter: function () {
	                        return '<b>' + this.point.name + '</b>: $' + this.point.y;
	                    }
	                }
	            }
	        },
	        series: [{
	                type: 'pie',
	                data: [],
	                point: {
	                    events: {
	                        click: function(event){
	                            if (tinybudget.viewmodel.onTour() === 0){
	                                tinybudget.viewmodel.highlightCategory(this.id);
	                            } else {
	                                //console.log("we're still on tour!")
	                            }
	                        }
	                    }
	                }
	            }
	        ]
	    }
	}
})();;// ==============  KNOCKOUT VIEWMODEL ================

    // the main viewmodel for this app
function AppViewModel() {
    var self = this; 

    self.date;
    self.currentyear = ko.observable();
    self.currentmonth = ko.observable();
    self.loadedMonths = ko.observableArray([]);  // loadstatus: 0: logged out, 1: logged in no data, 2: logged in with data, 3: loading additional data
    self.loadstatus = ko.observable(0);
    self.signuperror = ko.observable(0);
    self.inputFeedback = ko.observable('');
    self.expenseOrPaydayActive = ko.observable("expense");
    self.userItems = ko.mapping.fromJS([])
    self.desc = ko.observable('');
    self.amt = ko.observable('');
    self.input_date = ko.observable('');
    self.cat = ko.observable(""); 
    self.input_error = ko.observable("");
    self.sorting = false;
    self.showUnspent = ko.observable(false);
    self.unusedCategories = ko.observableArray([]);
    self.categoryHighlight = ko.observable();
    self.userCategories = ko.mapping.fromJS([]);   
    self.categoryFeedback = ko.observable();
    self.categoryValidateState = ko.observable();
    self.addCatValue = ko.observable("");
    self.username = ko.observable();
    self.userEmail = ko.observable();
    self.changePassError = ko.observableArray([]);
    self.oldPass = ko.observable("");
    self.newPass = ko.observable("");
    self.changeEmailError = ko.observableArray([]);
    self.csvLoadBarProgress = ko.observable(0);
    self.uname = ko.observable('');
    self.relogin_uname = ko.observable('');
    self.relogin_pass = ko.observable('');
    self.relogin_error = ko.observable('');
    self.upass = ko.observable('');
    self.signup_uname = ko.observable("");
    self.signup_pass = ko.observable("");
    self.signup_email = ko.observable("");
    self.modalStatus = ko.observable("");
    self.onTour = ko.observable(0);// 0 not onTour; 1 User Tour; 2 Tech Tour    
    self.editableItem = ko.observable();
    self.canCSV = ko.observable(false);
    self.statsCategory = ko.observableArray([])

    /**
     * allCategoriesTotal
     * @return {Number}   Total of all items in all categories
     */
    self.allCategoriesTotal = ko.computed(function () {
        return _.chain(self.filteredUserItems())
            .filter(function (item) {
                return item.cat() != 'payday';
            })
            .map(function (item) {
                return parseFloat(item.amt());
            })
            .reduce(function (sum, val) {
                return Math.round((sum + val) * 100) / 100;
            })
            .value();
    });

    /**
     * paydayTotal
     * @return {Number}   Total of all paydays
     */
    self.paydayTotal = ko.computed(function () {
        return _.chain(self.filteredUserItems())
            .filter(function (item) {
                return item.cat() == 'payday';
            })
            .map(function (item) {
                return parseFloat(item.amt());
            })
            .reduce(function (sum, val) {
                return Math.round((sum + val) * 100) / 100;
            })
            .value();
    });

    /**
     * userCategoriesTotals
     * Array of categoryTotal objects
     */
    self.userCategoriesTotals = ko.computed(function () {
        var categoryMap = _.chain(self.filteredUserItems())
            .filter(function (item) {
                return item.cat() != 'payday';
            })
            .groupBy(function (item) {
                return item.cat();
            })
            .mapValues(function (cat) {
                return _.chain(cat).map(function (item) {
                    return parseFloat(item.amt());
                })
                .reduce(function (sum, val) {
                    return Math.round((sum + val) * 100) / 100;
                })
                .value();
            })
            .value();

        var totals = [];

        for (var n in categoryMap) {
            totals.push(new categoryTotal(n, categoryMap[n]))
        }

        return totals;
    });

    /**
     * updatePieChart
     * Creates the series data for the pie chart, based on category totals
     * @param  {Array} value Array of categoryTotal objects
     */
    self.userCategoriesTotals.subscribe(function updatePieChart (categoryTotals) {
        chart_objects.pie_chart.series[0].data = _.chain(categoryTotals)
            .filter(function (item) {
                return item.name != 'payday';
            })
            .map(function (item) {
                item.y = item.amount;
                item.id = item.name;
                return item;
            })
            .value();

        self.renderChart();
    });

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        self.canCSV(true);
    }
    
    self.incrementMonth = function(){
        self.categoryHighlight(null);
        if (self.currentmonth() == 12){
            self.currentmonth(1)
            self.incrementYear();
        } else {
            self.currentmonth(self.currentmonth() + 1)
        }
        var monthCheck = self.currentmonth()+","+self.currentyear();
        var match = ko.utils.arrayFirst(self.loadedMonths(), function(piece){
            return (monthCheck == piece)
        });
        if (!match) {
            //console.log('need data for: '+monthCheck)
            server.fetchMonth(self.currentmonth(),self.currentyear())
        }
    }
    
    self.decrementMonth = function(){
        self.categoryHighlight(null);
        if (self.currentmonth() == 1){
            self.currentmonth(12)
            self.decrementYear();
        } else {
            self.currentmonth(self.currentmonth() - 1)
        }
        var monthCheck = self.currentmonth()+","+self.currentyear();
        var match = ko.utils.arrayFirst(self.loadedMonths(), function(piece){
            return (monthCheck == piece)
        });
        if (!match) {
            //console.log('need data for: '+monthCheck)
            server.fetchMonth(self.currentmonth(),self.currentyear())

        }
    }
    
    self.incrementYear = function(){
        self.currentyear(self.currentyear() + 1)
    }
    
    self.decrementYear = function(){
        self.currentyear(self.currentyear() - 1)
    }
    
    self.friendlyyear = ko.computed(function () {
        return self.currentyear().toString();
    });
    self.friendlymonth = ko.computed(function () {
        return monthName[self.currentmonth().toString()];
    });
    self.user = {};

    self.switchExpensePayday = function(){
        if (self.expenseOrPaydayActive() == "expense"){
            self.expenseOrPaydayActive("payday");
        } else {
            self.expenseOrPaydayActive("expense");
        }
    }


        // adds an item to userItems adter the input form is submitted. obviously needs validation
    self.addItem = function () {
        self.input_error("");
            // validate here please 
            // there should be a description
        if (self.desc().length > 0){
            self.input_error("");
                // 32 character limit
            if (self.desc().length <= 32) {
                var amp = tinybudgetutils.validate('desc',self.desc())
                if (!amp){
                    if (self.amt().length > 0) {
                        if (self.amt().length <= 8) {
                            // remove all non digits
                            var re = /^-?\$?[0-9]*\.?([0-9]{2})?$/
                            var match = re.test(self.amt())
                            //console.log('tested and ' + match)
                            if (match) {
                                    // the input should parse to a decimal, otherwise dont add it
                                var parsed_input = parseFloat(self.amt()).toFixed(2);
                                if (!isNaN(parsed_input)) {
                                    self.input_error("");
                                    // a correct date is MM/DD/YYYY. split at '/' to get 3 member array
                                    //console.log(self.input_date());
                                    var date = self.input_date().split("/");
                                    // check to see if there are 3 members
                                    if ((date[0] && date[1] && date[2])) {
                                        for (var i = 0; i < date.length; i++) {
                                            date[i] = parseInt(date[i], 10);
                                            //console.log('parsing ' + date[i])
                                        };
                                            // check is day, month, and year are acceptable
                                        if ((0 < date[0]) && (date[0] < 13) && (!isNaN(date[0]))) {
                                            if ((0 < date[1]) && (date[1] < 32) && (!isNaN(date[1]))) {
                                                if ((2011 < date[2]) && (date[2] < 2100) && (!isNaN(date[2]))) {
                                                    self.input_error("");
                                                    var cat = self.expenseOrPaydayActive() == 'payday' ? 'payday' : self.cat();
                                                    self.userItems.push(new rowitem(false, self.desc(), parsed_input, self.input_date(), cat));
                                                    self.resetInputs();
                                                    document.forms.input_form.desc.focus();
                                                    self.inputFeedback('Item Added Successfully')
                                                    setTimeout(function () {
                                                        self.inputFeedback('');
                                                    }, 5000);
                                                } else {
                                                    self.validateFail('date')
                                                }
                                            } else {
                                                self.validateFail('date')
                                            }
                                        } else {
                                            self.validateFail('date')
                                        }
                                    } else {
                                        self.validateFail('date')
                                    }
                                } else {
                                    self.validateFail('amt')
                                }
                            } else {
                                self.validateFail('amt')
                            }
                        } else {
                            self.validateFail('amt_long')
                        }
                    } else {
                        self.validateFail('amt')
                    }
                } else {
                    self.validateFail('desc_amp')
                }
            } else {
                self.validateFail('desc_long')
            }
        } else {
            self.validateFail('desc')
        }
        

    }
    
        // displays error messages
    self.validateFail = function(type){
        //console.log('validate fail' ,type);
        switch (type){
            case 'desc':
            case 'desc_long':
            case 'desc_amp':
                self.input_error("desc");
                break;
            case 'amt':
            case 'amt_long':
                self.input_error("amt");
                break;
            case 'date':
                self.input_error("date");
                break;      
        }
        var message = {
            'desc_amp': 'Descriptions cannot have ampersands (&)',
            'desc': 'Your item needs a description',
            'amt': 'Enter valid dollar amount like 12.34. No need for a "$"',
            'desc_long': 'Descriptions limited to 32 characters',
            'amt_long': 'Amounts limited to 8 digits (also, wow that\'s expensive!)',
            'date': 'Date format is MM/DD/YYYY'
        } 
        self.inputFeedback(message[type]);
    }
    self.resetInputs = function(){
        if (is_ie){
            self.desc("Description");
            self.amt("Amount");
            self.input_date("Date");
        } else {
            self.desc("");
            self.amt("");
            self.input_date("");
        }
    }

        // removes item from knockout observable array userItems
    self.removeItem = function (item) {
        self.userItems.remove(item)
    };
    
        // subscribes to changes in userItems array. Uses a custom function to detect whether an item
        // was added or removed from the array and then provides an add and remove callback 
    self.userItems.subscribeArrayChanged(server.addItemToServer, server.removeItemFromServer);
    
        // changes the table row CSS class based on a boolean value associated with the item
    self.flagItem = function(item){
        
            // the user has click to flag this item, we need to find it in the userItems array
        var match = ko.utils.arrayFirst(self.userItems(), function(array_piece){
            return array_piece.itemid === item.itemid
        });
        
            // if there is a match, and there pretty well should be, toggle the value of 'isflagged'
        if (match){
            if (match.isflagged() === true){
                match.isflagged(false)
            }else{
                match.isflagged(true);
            }
                // update the server
            item.loadedFromServer = false;
            server.addItemToServer(item);
        }
    }
    
        // deploys a popover to add comments to an item
    self.commentItem = function(item,event){
        var data;
        
            // generates a unique id for the popover based on the item
        var new_id = item.itemid+item.year()
        
            // if that id is already on the page, that means the popover is up and is being closed
        if (data = document.getElementById(new_id)){  
            
                // search userItems for the item in question
            var match = ko.utils.arrayFirst(self.userItems(), function(array_piece){
            return array_piece.itemid === item.itemid
            });
            
            if (match){
                    
                    // check to see if the comment was actually changed
                if (data.value == match.comment()){
                        
                        // if not, destroy popover, it is initialized each time it is called
                    $(event.target).popover('destroy'); 
                    return
                } else {
                    
                        // if the comment was changed, update the model... 
                    match.comment(data.value);
                    
                        // ...and the server
                    item.loadedFromServer = false;
                    server.addItemToServer(item);
                    
                        // destroy the previously initiallized popover 
                    $(event.target).popover('destroy');   
                }
            }
        } else {
            
                // the popover is not on the page so we generate one adding the unique id and the
                // comment associated with this item
            $(event.target).popover({
                content: '<textarea id="'+new_id+'">'+item.comment()+'</textarea>',
                title: 'Add a comment',
                trigger: 'manual',
                html: true
            })
                // show the popover
            $(event.target).popover('show');
        }
    }



        // =========== EDITABLE ITEM ===================


        // UI click handler - user clicks from list of items
    self.loadItemForEdit = function(item,event){
        if (self.modalStatus() == ''){
            self.editableItem(item.itemid);
            self.modalStatus('edit');
        }
    }

        // UI click handler - user clicks 'save' after editing item
    self.updateItem = function(){
        var itemInArrayToUpdate = ko.utils.arrayFirst(self.userItems(), function(item) {
            return item.itemid == self.editableItem() 
        });

        if (itemInArrayToUpdate) {
            itemInArrayToUpdate.loadedFromServer = false;
            server.addItemToServer(itemInArrayToUpdate);
            self.modalStatus('')
        } else {

        }
    }


        // ==============================================

        // an array that replicates userItems except if filters out all the items that are not
        // in the month that the user is viewing
    self.filteredUserItems = ko.computed(function () {
        return ko.utils.arrayFilter(self.userItems(), function (r) {
            return (self.currentyear() == r.year()) && (self.currentmonth() == r.month())
        });
    });

        // function for sorting all items table
    

    self.sortAllItemsTable = function (property) {
        self.sorting = true;
        self.userItems.sort(function (l, r) {
            var l_parse = l[property].toLowerCase(),
                r_parse = r[property].toLowerCase();
            return l_parse == r_parse ? 0 : (l_parse < r_parse ? -1 : 1);
        });
        setTimeout(function () {
            self.sorting = false;
        }, 100);
    }

    self.sortAllItemsTableDay = function () {
        self.sorting = true;
        (function (next) {
            self.userItems.sort(function (l, r) {
                var l_parse = parseInt(l.day()),
                    r_parse = parseInt(r.day());
                return l_parse == r_parse ? 0 : (l_parse < r_parse ? -1 : 1);
            });
            next();
        })(function () { self.sorting = false });
    }

    self.sortAllItemsTableAmt = function () {
        self.sorting = true;
        (function (next) {
            self.userItems.sort(function (l, r) {
                var l_parse = parseInt(l.amt()),
                    r_parse = parseInt(r.amt());
                return l_parse == r_parse ? 0 : (l_parse < r_parse ? -1 : 1)
            });
            next();
        })(function () { self.sorting = false });
    }

        // computed to find the difference of the above
    self.difference = ko.computed(function(){
        return Math.round((self.paydayTotal()-self.allCategoriesTotal()) * 100) / 100;
    })

    self.friendlyDifference = ko.computed(function(){
        return self.difference().toString().replace("-","")
    })

    self.renderChart = function(){
        //console.log('renderChart triggered')
        //console.log(is_ie);
        if (is_ie === false){
            //console.log('first path');
            $('#highchart').highcharts(chart_objects.pie_chart);
        }
        else {
            //console.log('second path');
            chart_objects.pie_chart.plotOptions.pie.animation = false;
            $('#highchart').highcharts(chart_objects.pie_chart);
            //console.log("animation "+chart_objects.pie_chart.plotOptions.pie.animation)
        }
        
    }

    /**
     * showOrHideUnspent
     * Updates the highcharts object, either adds or removes the 'unspent' 
     * slice (the difference in paydays minus all items)
     * @param  {Boolean} checked
     */
    self.showUnspent.subscribe(function showOrHideUnspent (checked) {
        if (checked && self.difference() > 0) {
            chart_objects.pie_chart.series[0].data.push({
                name: 'Unspent', 
                y: parseFloat(self.difference()),
                id:'unspentSlice'
            })
            return self.renderChart();
        }
        _.remove(chart_objects.pie_chart.series[0].data, {
            id: 'unspentSlice'
        });
        self.renderChart();
    });

        // filter function to find unused categories    
    self.filteredUserItems.subscribe(function (array) {
        self.unusedCategories.removeAll();
        for (var i = 0; i < array.length; i++) {

            var match = ko.utils.arrayFirst(self.userCategories(), function (category) {
                return array[i].cat() == category
            });

            if (!match) {
                var second_match = ko.utils.arrayFirst(self.unusedCategories(), function (unused) {
                    return array[i].cat() == unused
                });
                if (!second_match) {
                    self.unusedCategories.push(array[i].cat())
                }
            }
        };
    });

        // function to check if category exists
    self.checkCategory = function(catToCheck){
        return ko.utils.arrayFirst(self.userCategories(), function(userCategory){
            return catToCheck.toLowerCase() == userCategory.toLowerCase();
        });
        return "uncategorized";
    }


        // holds the array of items that match the name of the category in categoryHighlight
    self.categoryHighlightFilter = ko.computed(function(){
        return ko.utils.arrayFilter(self.userItems(), function (r) {
            return (self.currentyear() == r.year()) && (self.currentmonth() == r.month()) && (self.categoryHighlight() == r.cat());
        });
    })

        // sets and nulls the value of categoryHighlight
    self.highlightCategory = function(id){
        if (id == 'unspentSlice'){
            self.categoryHighlight(null);
        } else {
            if (self.categoryHighlight() == id){
                self.categoryHighlight(null);
            } else {
                self.categoryHighlight(id);
            }
        }
    }
    
        // this exists so the view can prompt the user to add categories
    self.userCategoriesLength = ko.computed(function () {
        return self.userCategories().length;
    })

        // adds a category to the model
    self.addCategory = function (data) {
        if (typeof data !== 'string') {
            if (self.addCatValue().length > 0) {
                if (self.addCatValue().length <= 32) {
                    if (self.addCatValue().toLowerCase() !== 'payday'){
                        self.userCategories.push(self.addCatValue());
                        self.categoryFeedback('');
                        self.addCatValue('');
                        self.categoryValidateState('');
                    } else {
                        self.categoryValidateState('error');
                        self.categoryFeedback('Payday is reserved for income!');
                    }
                } else {
                    self.categoryValidateState('error');
                    self.categoryFeedback('32 character limit');
                }
            } else {
                self.categoryValidateState('error');
                self.categoryFeedback('');
            }
        } else {
            self.userCategories.push(data);
            var match = ko.arrayFirst(self.unusedCategories(),function(cat){
                return (cat == data);
            })
        }
    }

        // remoes a category from the model
    self.removeCategory = function (item) {
        self.userCategories.remove(item)
    }
    
        // subscribes to changes in the categories model. uses same logic as when an item is added
        // or removed from one of the arrays. provides callbacks to update the server.
    self.userCategories.subscribeArrayChanged(
        function(item){server.addCategoryToServer(item)},
        function(item){server.removeCategoryFromServer(item)}
    );
    
        // after click, shows a modal window with a list of categories
    self.editCategories = function () {
        self.modalStatus("categories");
    };

    self.editAccount = function () {
        self.modalStatus("account");
    }

    self.changePass = function(){
        tinybudgetutils.issue('changePass',[
            ['name',self.user.name],
            ['sess', self.user.sess],
            ['oldPass',self.oldPass()],
            ['newPass',self.newPass()]
        ],null,function(err,stat,message){
            self.changePassError.removeAll();
            if (stat == 400){
                self.changePassError.push( new UImessage('Incorrect old password','error'));
                $("changepass_form").shake();
            } else if (stat == 500){
                self.changePassError.push( new UImessage('There was an error','error'));
            } else {
                self.changePassError.push( new UImessage('Password Changed Successfully','success'));
                setTimeout(function(){
                    self.changePassError.removeAll();
                },5000);
            }
        });
    }

    self.changeEmail = function(){
        tinybudgetutils.issue('changeEmail',[
            ['name',self.user.name],
            ['sess', self.user.sess],
            ['email',self.userEmail()]
        ],null,function(err,stat,message){
            self.changeEmailError.removeAll();
            if (stat == 400){
                self.changeEmailError.push( new UImessage('Something went wrong','error'));
                $("changepass_form").shake();
            } else if (stat == 500){
                self.changeEmailError.push( new UImessage('There was an error','error'));
            } else {
                self.changeEmailError.push( new UImessage('Email Changed Successfully','success'));
                setTimeout(function(){
                    self.changeEmailError.removeAll();
                },5000);
            }
        });
    }
    
    self.expiredSession = function(){
        self.modalStatus("sessionLogin");
    }
    self.serverError = function(){
        self.modalStatus("serverError");
    }
    
    self.csvloadBarWidth =  ko.computed (function()    {
        //console.log('running '+self.getInitLoadBarProgress());
        return "width: " + self.csvLoadBarProgress()  + "%";
    });

    // login function, loads user items and categories from server and pushes to obversvable arrays    
    self.login = function (newuser_name, newuser_pass,cb) {
        newuser_name ? self.user.name = newuser_name : self.user.name = self.uname();
        newuser_pass ? self.user.pass = newuser_pass : self.user.pass = self.upass();
        if (self.user.name == '' || self.user.pass == ''){
            self.user.name = $("#uname").val();
            self.user.pass = $("#pass").val();
        }
        tinybudgetutils.issue('login', [
            ['name', self.user.name],
            ['pass', self.user.pass]
        ], null, function (err, stat, data) {
            if (err) {
                //console.log('error logining in')
            } else {
                if (stat == 400 && cb == null) {
                    //console.log('animating')
                    $("#signin_form").shake();
                } else if (stat == 400 && cb != null){
                    cb('error');    
                } else if (stat == 200) {
                    data = JSON.parse(data)
                    $("#uname").val('');
                    $("#pass").val('');
                    self.loadstatus(1);
                    self.uname('');
                    self.upass('');
                    self.user.sess = data.sessionid;
                    self.user.email = data.email
                    self.userEmail(self.user.email);
                    getInit.main();
                    self.username(self.user.name);
                } else {
                    self.modalStatus("serverError");
                }
            }
        });
    }
    self.relogin = function(){
        self.login(self.relogin_uname(),self.relogin_pass(),function(code){
            if (code){
                self.relogin_error('Invalid Username or Password');
            }
        })
    }
        // destroys session and clears form fields and models 
    self.logout = function () {
        self.loadstatus(0);
        tinybudgetutils.issue('logout', [
            ['name', self.user.name]
        ], null, function (err, stat, message) {
            if (err || stat != 200) {
                //console.log(err, stat, message)
            }
        });
        self.userItems.removeAll();
        self.userCategories.removeAll();
        self.loadedMonths.removeAll();
        self.currentyear(self.date.year);
        self.currentmonth(self.date.month);
        self.modalStatus("logout");
        document.forms.signin_form.uname.focus();
        setTimeout(function () {
            self.modalStatus("");
        }, 3000);
    }
    
        // adds user to server, triggers login, displays error messages
    self.newUser = function () {

        if (self.signup_uname() == '' || self.signup_pass() == '' || self.signup_email == '') {
            self.signuperror('You left something blank');
            return;
        }
        tinybudgetutils.issue('newUser', [
            ['name', self.signup_uname()],
            ['pass', self.signup_pass()],
            ['email',self.signup_email()]
        ], null, function (err, stat, message) {
            if (err) {

            } else {
                if (stat == 400) {
                    self.signuperror(message);
                } else if (stat == 500) {
                    self.signuperror('There was an error');
                } else if (stat == 200) {
                    self.login(self.signup_uname(), self.signup_pass());
                     self.signup_uname("");
                    self.signup_pass("");
                    self.signup_email("");
                    return;
                }
            }
        });
    }
    

    self.modalClose = function () {
        self.modalStatus("");
    }
    self.showAbout = function(){
        self.modalStatus("about");
    }
    self.startCSV = function(){
        self.modalStatus("csv");
    }
    self.doneWithCSV = function(){
        self.modalClose();
        self.csvLoadBarProgress(0);
    }

    // ===========   Application Tours   ===========  

    self.endTour = function(){
        self.onTour(0)
    }

    self.startUserTour = function(){

        self.loadstatus.subscribe(function(val){
            if (val == 2 && self.onTour() == 1){
                //console.log(val,' loaded and ready for tour!');
                
                self.modalStatus("tour");
            }
        })

        self.login('demo','demo');
        self.onTour(1);
    }
    self.continueUserTour = function(){
        self.modalStatus("");
        
        if (self.onTour() == 1){
            user_tour.init();
        }
    }

    self.startTechTour = function(){

        self.loadstatus.subscribe(function(val){
            if (val == 2 && self.onTour() == 2){
                //console.log(val,' loaded and ready for tour!');
                
                self.modalStatus("tech");
            }
        })

        self.login('demo','demo');
        self.onTour(2);
    }
    self.continueTechTour = function(){
        self.modalStatus("");
        
        if (self.onTour() == 2){
            tech_tour.init();
        }
    }

    // ================ STATS SECTION ================

    this.costlyCategory = ko.observable();
    this.costlyCategoryPerItem = ko.observable();
    this.mostCategory = ko.observable();
    this.mostCategoryPerItem = ko.observable();
    this.lifeCost = ko.observable();
    this.lifeIncome = ko.observable();
    this.netWorth = ko.observable();
    this.netWorthSign = ko.computed(function(){
        var number = self.netWorth();
        var sign = number?number<0?'-':'':'';
        return sign;
    });

    self.stats = function(){
        self.modalStatus('stats');
        tinybudgetutils.issue('getCategoryTotals', [
            ['name', self.user.name],
            ['sess', self.user.sess],
            ['year', self.currentyear()]
        ], null, function (err, stat, data) {
            if (err) {
            } else {
                self.statsCategory.removeAll();
                $(JSON.parse(data)).each(function(index,item){
                    self.statsCategory.push(new statCategoryTotal(item.cat,item.amt,item.items,item.avg,item.likely_day))
                })
            }
        });
        tinybudgetutils.issue('getIncomePerDay', [
            ['name', self.user.name],
            ['sess', self.user.sess],
            ['year', self.currentyear()],
            ['month', self.currentmonth()]
        ], null, function (err, stat, data) {
            if (err) {
            } else {
                self.statsCategory.removeAll();
                var datai = JSON.parse(data)

                self.lifeCost(parseFloat(datai.calculations.expensePerDay/100).toFixed(2));
                self.lifeIncome(parseFloat(datai.calculations.payPerDay/100).toFixed(2));
                self.netWorth(parseFloat(Math.abs(datai.calculations.netPerDay)/100).toFixed(2));
            }
        });
    }
    


}
var tinybudget = { viewmodel: new AppViewModel() };


;var getInit = (function(){
    return {
                // after logging in, this gets the last 3 month of data from the server, adds the categories and items
        // to their respective arrays. triggers the load status to '2' so the rest of the view will appear and enables 
        // form fiends so the user can input items
        main : function () {
            //console.log('main called');
            tinybudget.viewmodel.modalStatus("");
            tinybudgetutils.issue('getInit', [
                ['name', tinybudget.viewmodel.user.name],
                ['sess', tinybudget.viewmodel.user.sess]
            ], null, function (err, stat, datai) {
                if (err) {
                    //console.log('error get Init')
                } else {
                    datai = JSON.parse(datai);
                    
                        // set the date with info from server
                    tinybudget.viewmodel.date = JSON.parse(JSON.stringify(datai.date));
                    tinybudget.viewmodel.currentyear(tinybudget.viewmodel.date.year);
                    tinybudget.viewmodel.currentmonth(tinybudget.viewmodel.date.month);
                    tinybudget.viewmodel.user.categories = JSON.parse(JSON.stringify(datai.categories));
                    
                    if (tinybudget.viewmodel.user.categories.length == 0) {
                        tinybudget.viewmodel.modalStatus("tour");
                    } else {
                        ko.mapping.fromJS(datai.categories,tinybudget.viewmodel.userCategories)
                    }
                    
                    tinybudget.viewmodel.loadstatus(2);
                    ko.mapping.fromJS(datai.items, mapping, tinybudget.viewmodel.userItems)                    
                    var gitInitMonths = [
                        tinybudget.viewmodel.date.month+","+tinybudget.viewmodel.date.year,
                        tinybudget.viewmodel.date.one_month_back+","+tinybudget.viewmodel.date.one_month_back_yr,
                        tinybudget.viewmodel.date.two_month_back+","+tinybudget.viewmodel.date.two_month_back_yr
                    ];
                       
                    for (i=0; i<gitInitMonths.length;i++){
                        tinybudget.viewmodel.loadedMonths.push(gitInitMonths[i]);
                    }
                }
            });
        }
    }
})();;var CSVFileReader = (function(){
	var replace_string = "POS Withdrawal - ";
	function parseCSV(data){
		var parsed;
		var lines = data.replace(/\"/g,"");
		lines = lines.split("\n");
		var docData = {
			ignoreLine : [],
			headerLine : 0,
			dateIndex : null,
			amountIndex : null,
			debitIndex : null,
			creditIndex : null,
			descIndex : null,
			catIndex: null,
			maxItemsOnALine : null,
			firstLineWithMaxItems : null,
			items : {},
			lineObject : {},
			lines : lines
		}


    // determine the column headers (some CSVs have accoutn data at top of document)
    for (i=0; i<lines.length; i++){
    	var thisLine = lines[i].split(",");
    	if (thisLine.length > docData.maxItemsOnALine){
    		docData.maxItemsOnALine = thisLine.length;
    		docData.firstLineWithMaxItems = i;
    		docData.headerLine = thisLine;
    	}
    }

    // determine what each column header represents
    for (j=0;j<docData.headerLine.length;j++){
    	var cleanString = docData.headerLine[j].toLowerCase().replace("\"","")
    	if (cleanString == "description") {docData.descIndex = j}
    		else if (cleanString == "amount") {docData.amountIndex = j}
    			else if (cleanString == "debit") {docData.debitIndex = j}
    				else if (cleanString == "credit") {docData.creditIndex = j}
    					else if (cleanString == "date") {docData.dateIndex = j}
    						else if (cleanString == "category") {docData.catIndex = j}
    					}

    				for (k=0;k<docData.firstLineWithMaxItems;k++){
    					docData.ignoreLine.push(0);
    				}

    //console.log(docData);

    if (docData.amountIndex == null && (docData.debitIndex != null && docData.creditIndex != null)){
      //console.log('parse using debit/credit');
      return parseDebitCredit(docData);
    } else if (docData.amountIndex != null && (docData.debitIndex == null && docData.creditIndex == null)){
      //console.log('parse using amount');
      return parseAmount(docData);
    } else {
      //console.log('send error');
    }
  }

    // parses CSV files where one column is "amount" and is either negative or positive
    function parseAmount(docData){
    	var parsedItems = [];
    	for (i=docData.firstLineWithMaxItems+1;i<docData.lines.length-1;i++){
      //console.log("on line",i);


      var thisLine = docData.lines[i].split(",");
      var thisItem = {};
      var d = thisLine[docData.dateIndex].split("/");
      thisLine[docData.descIndex] = thisLine[docData.descIndex].replace(replace_string,"");
      thisItem.desc = thisLine[docData.descIndex].substring(0,31);

      if (tinybudget.viewmodel.checkCategory(thisLine[docData.catIndex]) != null){
      	thisItem.cat = tinybudget.viewmodel.checkCategory(thisLine[docData.catIndex]);
      } else {
      	var re = /-/
      	var match = re.test(thisLine[docData.amountIndex]);
      	if (match){
      		thisItem.cat = "uncategorized";
      	} else {
      		thisItem.cat = "payday";
      	}
      }

      thisItem.amt = thisLine[docData.amountIndex].replace("-","");           
      
      thisItem.month = d[0];
      thisItem.day = d[1];
      thisItem.year = d[2];
      thisItem.itemid = (CryptoJS.MD5(Math.random().toString())).toString();

      parsedItems.push(thisItem);
    }
    return parsedItems;
  }
    // parses CSV files where amount is split between "debit" and "credit"
    function parseDebitCredit(docData){
    	var parsedItems = [];
    	for (i=docData.firstLineWithMaxItems+1;i<docData.lines.length-1;i++){
      //console.log("on line",i);


      var thisLine = docData.lines[i].split(",");
      var thisItem = {};
      var d = thisLine[docData.dateIndex].split("/");
      thisLine[docData.descIndex] = thisLine[docData.descIndex].replace(replace_string,"");
      thisItem.desc = thisLine[docData.descIndex].substring(0,31);
      if (thisLine[docData.debitIndex].length > 1){
      	thisItem.amt = thisLine[docData.debitIndex].replace("-","");
      	thisItem.cat = "uncategorized";
      } else if (thisLine[docData.creditIndex].length > 1){
      	thisItem.amt = thisLine[docData.creditIndex].replace("-","");
      	thisItem.cat = "payday";
      }

        // var checkCat = tinybudget.viewmodel.checkCategory();
        // console.log(checkCat);

        // if (docData.descIndex != null && thisItem.cat != "payday" && checkCat != null){
        // 	thisItem.cat = thisLine[docData.catIndex]
        // } else if (checkCat == null){
        // 	console.log("category "+thisLine[docData.catIndex]+" is not an okay category");
        // }

        thisItem.month = d[0];
        thisItem.day = d[1];
        thisItem.year = d[2];
        thisItem.itemid = (CryptoJS.MD5(Math.random().toString())).toString();

        parsedItems.push(thisItem);
      }
      return parsedItems;
    }
    function addToViewModel(parsed){
      // 'sorting' mode disables highcharts from rendering repetitively
      tinybudget.viewmodel.sorting = true;
      var i = 0;
      // look for duplicate items in viewmodel

      function add(){

      	var progress = Math.floor((i/(parsed.length-1))*100);
      	tinybudget.viewmodel.csvLoadBarProgress(progress);

      	//console.log(progress);
      	var gluedDate = parsed[i].month +"/"+ parsed[i].day +"/"+ parsed[i].year;
        // loadedFromServer set to True, prevents auto loading to server
        var row = new rowitem(true,parsed[i].desc,parsed[i].amt,gluedDate,parsed[i].cat,parsed[i].itemid,null,null);
        tinybudget.viewmodel.userItems.push(row);


        if (i >= parsed.length-1){
        	return;
        } else if (parsed.length - i == 2){
          // if there is 1 item left in parsed to add to the viewmodel, enable highcharts to render when triggered
          tinybudget.viewmodel.sorting = false;
          i++;
        	setTimeout(add,100);
        }else {
        	i++;
        	setTimeout(add,100);
        }
      }
      add();
    }
    return {
    	main: function(){
    		if (window.File && window.FileReader && window.FileList && window.Blob) {

    			$("#CSVinput").change(function(evt){
    				var file = evt.target.files;

    				var re = /.*\.csv/
    				var match = re.test(file[0].name);

    				if (file.length > 1){
              //console.log("more than one file selected. Quiting process");
              return;
            } else if (!match) {
              //console.log("Not a csv file. Quiting process");
              return
            } else {
            	var reader = new FileReader();

            	reader.onload = (function(theFile){
            		return function(e) {
            			var parsed = parseCSV(e.target.result);

            			addToViewModel(parsed);
            			tinybudgetutils.issue('addMultipleItems',[
            				['name',tinybudget.viewmodel.user.name],
            				['sess',tinybudget.viewmodel.user.sess]
            				],parsed,function(err,stat,data){
            					if (err || stat == 500){
            						tinybudget.viewmodel.serverError();
            					} else {
                      // all is well?
                    }
                  });
            		}   
            	})(file[0]);

            	reader.readAsText(file[0]);
            }
          });
}
}
}
})();
