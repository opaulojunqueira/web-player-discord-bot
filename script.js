var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,e){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,e):$jscomp.polyfillUnisolated(a,b,c,e))};$jscomp.polyfillUnisolated=function(a,b,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var g=a[e];if(!(g in c))return;c=c[g]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,e){var g=a.split(".");a=1===g.length;e=g[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var h=0;h<g.length-1;h++){var p=g[h];if(!(p in e))return;e=e[p]}g=g[g.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[g]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,g,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===$jscomp.propertyToPolyfillSymbol[g]&&($jscomp.propertyToPolyfillSymbol[g]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(g):
$jscomp.POLYFILL_PREFIX+g),$jscomp.defineProperty(e,$jscomp.propertyToPolyfillSymbol[g],{configurable:!0,writable:!0,value:b})))};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(c){}return!1};$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;
$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.generator={};
$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};
$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};
$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype["return"]=function(a){this.abruptCompletion_={"return":a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};
$jscomp.generator.Context.prototype.yieldAll=function(a,b){var c=$jscomp.makeIterator(a),e=c.next();$jscomp.generator.ensureIteratorResultIsObject_(e);if(e.done)this.yieldResult=e.value,this.nextAddress=b;else return this.yieldAllIterator_=c,this.yield(e.value,b)};$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,c){c?this.finallyContexts_[c]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){var c=this.finallyContexts_.splice(b||0)[0];if(c=this.abruptCompletion_=this.abruptCompletion_||c){if(c.isException)return this.jumpToErrorHandler_();void 0!=c.jumpTo&&this.finallyAddress_<c.jumpTo?(this.nextAddress=c.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(c){return{value:c,done:!0}},a,this.context_["return"]);this.context_["return"](a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,c){try{var e=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(e);if(!e.done)return this.context_.stop_(),e;var g=e.value}catch(h){return this.context_.yieldAllIterator_=null,this.context_.throw_(h),this.nextStep_()}this.context_.yieldAllIterator_=null;c.call(this.context_,g);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a["return"],done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this["throw"]=function(b){return a.throw_(b)};this["return"]=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){var c=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&a.prototype&&$jscomp.setPrototypeOf(c,a.prototype);return c};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(e){return a.next(e)}function c(e){return a["throw"](e)}return new Promise(function(e,g){function h(p){p.done?e(p.value):Promise.resolve(p.value).then(b,c).then(h,g)}h(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
shortcut={all_shortcuts:{},add:function(a,b,c){var e={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var g in e)"undefined"==typeof c[g]&&(c[g]=e[g]);else c=e;e=c.target;"string"==typeof c.target&&(e=document.getElementById(c.target));a=a.toLowerCase();g=function(h){h=h||window.event;if(c.disable_in_input){var p;h.target?p=h.target:h.srcElement&&(p=h.srcElement);3==p.nodeType&&(p=p.parentNode);if("INPUT"==p.tagName||"TEXTAREA"==p.tagName)return}h.keyCode?code=
h.keyCode:h.which&&(code=h.which);p=String.fromCharCode(code).toLowerCase();188==code&&(p=",");190==code&&(p=".");var m=a.split("+"),t=0,C={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},G={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,
pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},D=!1,E=!1,x=!1,u=!1,r=!1,v=!1,F=!1,w=!1;h.ctrlKey&&(u=!0);h.shiftKey&&(E=!0);h.altKey&&(v=!0);h.metaKey&&(w=!0);for(var d=0;k=m[d],d<m.length;d++)"ctrl"==k||"control"==k?(t++,x=!0):"shift"==k?(t++,D=!0):"alt"==k?(t++,r=!0):"meta"==k?(t++,F=!0):1<k.length?G[k]==code&&t++:c.keycode?c.keycode==code&&t++:p==k?t++:C[p]&&h.shiftKey&&
(p=C[p],p==k&&t++);if(t==m.length&&u==x&&E==D&&v==r&&w==F&&(b(h),!c.propagate))return h.cancelBubble=!0,h.returnValue=!1,h.stopPropagation&&(h.stopPropagation(),h.preventDefault()),!1};this.all_shortcuts[a]={callback:g,target:e,event:c.type};e.addEventListener?e.addEventListener(c.type,g,!1):e.attachEvent?e.attachEvent("on"+c.type,g):e["on"+c.type]=g},remove:function(a){a=a.toLowerCase();var b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){a=b.event;var c=b.target;b=b.callback;c.detachEvent?
c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}};shortcut.add("Ctrl+F",function(){top.location.href="#"});shortcut.add("Ctrl+Shift+Del",function(){top.location.href="#"});shortcut.add("Ctrl+W",function(){top.location.href="#"});shortcut.add("Ctrl+U",function(){top.location.href="#"});shortcut.add("F12",function(){top.location.href="#"});shortcut.add("F11",function(){top.location.href="#"});shortcut.add("F3",function(){top.location.href="#"});
shortcut.add("F4",function(){top.location.href="#"});shortcut.add("F1",function(){top.location.href="#"});
(function(a,b){var c=a.document;var e=function(){var g={},h=!1,p=[],m,t,C,G,D,E,x,u,r,v;var F=function(){var d,f=!1,l=c.createElement("fakeelement"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(d in n)if(l.style[d]!==b){var q=n[d];f=!0;break}return{type:q,supported:f}};var w=function(d){return c.getElementById(d)};g={labels:{ok:"OK",cancel:"Cancel"},delay:5E3,buttonReverse:!1,buttonFocus:"ok",transition:b,addListeners:function(d){var f=
"undefined"!==typeof t,l="undefined"!==typeof m,n="undefined"!==typeof v,q="",z=this;var A=function(B){"undefined"!==typeof B.preventDefault&&B.preventDefault();I(B);"undefined"!==typeof v&&(q=v.value);"function"===typeof d&&("undefined"!==typeof v?d(!0,q):d(!0));return!1};var H=function(B){"undefined"!==typeof B.preventDefault&&B.preventDefault();I(B);"function"===typeof d&&d(!1);return!1};var I=function(B){z.hide();z.unbind(c.body,"keyup",J);z.unbind(C,"focus",y);f&&z.unbind(t,"click",A);l&&z.unbind(m,
"click",H)};var J=function(B){var K=B.keyCode;(32===K&&!n||n&&13===K)&&A(B);27===K&&l&&H(B)};var y=function(B){n?v.focus():!l||z.buttonReverse?t.focus():m.focus()};this.bind(C,"focus",y);this.bind(G,"focus",y);f&&this.bind(t,"click",A);l&&this.bind(m,"click",H);this.bind(c.body,"keyup",J);this.transition.supported||this.setFocus()},bind:function(d,f,l){"function"===typeof d.addEventListener?d.addEventListener(f,l,!1):d.attachEvent&&d.attachEvent("on"+f,l)},handleErrors:function(){if("undefined"!==
typeof a.onerror){var d=this;a.onerror=function(f,l,n){d.error("["+f+" on line "+n+" of "+l+"]",0)};return!0}return!1},appendButtons:function(d,f){return this.buttonReverse?f+d:d+f},build:function(d){var f=d.type,l=d.message,n=d.cssClass||"";d='<div class="alertify-dialog"><a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>';"none"===g.buttonFocus&&(d+='<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>');"prompt"===f&&(d+='<div id="alertify-form">');
d=d+'<article class="alertify-inner">'+'<p class="alertify-message">{{message}}</p>'.replace("{{message}}",l);"prompt"===f&&(d+='<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>');d+='<nav class="alertify-buttons">{{buttons}}</nav></article>';"prompt"===f&&(d+="</div>");d+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a></div>';switch(f){case "confirm":d=d.replace("{{buttons}}",this.appendButtons('<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>',
'<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>'));d=d.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case "prompt":d=d.replace("{{buttons}}",this.appendButtons('<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>','<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>'));d=d.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);
break;case "alert":d=d.replace("{{buttons}}",'<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>'),d=d.replace("{{ok}}",this.labels.ok)}u.className="alertify alertify-"+f+" "+n;x.className="alertify-cover";return d},close:function(d,f){var l=f&&!isNaN(f)?+f:this.delay,n=this;this.bind(d,"click",function(){z(d)});var q=function(A){A.stopPropagation();n.unbind(this,n.transition.type,q);r.removeChild(this);r.hasChildNodes()||(r.className+=" alertify-logs-hidden")};var z=
function(A){"undefined"!==typeof A&&A.parentNode===r&&(n.transition.supported?(n.bind(A,n.transition.type,q),A.className+=" alertify-log-hide"):(r.removeChild(A),r.hasChildNodes()||(r.className+=" alertify-logs-hidden")))};0!==f&&setTimeout(function(){z(d)},l)},dialog:function(d,f,l,n,q){E=c.activeElement;var z=function(){r&&null!==r.scrollTop&&x&&null!==x.scrollTop||z()};if("string"!==typeof d)throw Error("message must be a string");if("string"!==typeof f)throw Error("type must be a string");if("undefined"!==
typeof l&&"function"!==typeof l)throw Error("fn must be a function");this.init();z();p.push({type:f,message:d,callback:l,placeholder:n,cssClass:q});h||this.setup();return this},extend:function(d){if("string"!==typeof d)throw Error("extend method must have exactly one paramter");return function(f,l){this.log(f,d,l);return this}},hide:function(){var d=this;p.splice(0,1);if(0<p.length)this.setup(!0);else{h=!1;var f=function(l){l.stopPropagation();d.unbind(u,d.transition.type,f)};this.transition.supported?
(this.bind(u,this.transition.type,f),u.className="alertify alertify-hide alertify-hidden"):u.className="alertify alertify-hide alertify-hidden alertify-isHidden";x.className="alertify-cover alertify-cover-hidden";E.focus()}},init:function(){c.createElement("nav");c.createElement("article");c.createElement("section");null==w("alertify-cover")&&(x=c.createElement("div"),x.setAttribute("id","alertify-cover"),x.className="alertify-cover alertify-cover-hidden",c.body.appendChild(x));null==w("alertify")&&
(h=!1,p=[],u=c.createElement("section"),u.setAttribute("id","alertify"),u.className="alertify alertify-hidden",c.body.appendChild(u));null==w("alertify-logs")&&(r=c.createElement("section"),r.setAttribute("id","alertify-logs"),r.className="alertify-logs alertify-logs-hidden",c.body.appendChild(r));c.body.setAttribute("tabindex","0");this.transition=F()},log:function(d,f,l){var n=function(){r&&null!==r.scrollTop||n()};this.init();n();r.className="alertify-logs";this.notify(d,f,l);return this},notify:function(d,
f,l){var n=c.createElement("article");n.className="alertify-log"+("string"===typeof f&&""!==f?" alertify-log-"+f:"");n.innerHTML=d;r.appendChild(n);setTimeout(function(){n.className+=" alertify-log-show"},50);this.close(n,l)},set:function(d){var f;if("object"!==typeof d&&d instanceof Array)throw Error("args must be an object");for(f in d)d.hasOwnProperty(f)&&(this[f]=d[f])},setFocus:function(){v?(v.focus(),v.select()):D.focus()},setup:function(d){var f=p[0],l=this;h=!0;var n=function(q){q.stopPropagation();
l.setFocus();l.unbind(u,l.transition.type,n)};this.transition.supported&&!d&&this.bind(u,this.transition.type,n);u.innerHTML=this.build(f);C=w("alertify-resetFocus");G=w("alertify-resetFocusBack");t=w("alertify-ok")||b;m=w("alertify-cancel")||b;D="cancel"===g.buttonFocus?m:"none"===g.buttonFocus?w("alertify-noneFocus"):t;v=w("alertify-text")||b;w("alertify-form");"string"===typeof f.placeholder&&""!==f.placeholder&&(v.value=f.placeholder);d&&this.setFocus();this.addListeners(f.callback)},unbind:function(d,
f,l){"function"===typeof d.removeEventListener?d.removeEventListener(f,l,!1):d.detachEvent&&d.detachEvent("on"+f,l)}};return{alert:function(d,f,l){g.dialog(d,"alert",f,"",l);return this},confirm:function(d,f,l){g.dialog(d,"confirm",f,"",l);return this},extend:g.extend,init:g.init,log:function(d,f,l){g.log(d,f,l);return this},prompt:function(d,f,l,n){g.dialog(d,"prompt",f,l,n);return this},success:function(d,f){g.log(d,"success",f);return this},error:function(d,f){g.log(d,"error",f);return this},set:function(d){g.set(d)},
labels:g.labels,debug:g.handleErrors}};"function"===typeof define?define([],function(){return new e}):"undefined"===typeof a.alertify&&(a.alertify=new e)})(this);var i=0;function move(){if(0==i){i=1;var a=document.getElementById("myBar"),b=1,c=setInterval(function(){100<=b?(clearInterval(c),i=0):(b++,a.style.width=b+"%")},10)}}
function _removeItens(){(function(){var a;return $jscomp.asyncExecutePromiseGeneratorProgram(function(b){a=document.getElementsByClassName("elemento");a.innerHTML="";console.log(a);b.jumpToEnd()})})()}function _authorDev(){window.open("https://github.com/pauloodev","_blank")}function _loadPage(){document.getElementById("card-wrapper").style.cssText="background-color: transparent;"}function _home(){document.location.reload(!0)}
function _addBot(){window.open("https://discord.com/oauth2/authorize?client_id=731148307329712189&scope=bot&permissions=37055552","_blank")}
function _login(){(function(){var a,b,c,e,g,h,p,m,t,C,G,D,E,x,u,r,v,F,w,d,f,l,n;return $jscomp.asyncExecutePromiseGeneratorProgram(function(q){switch(q.nextAddress){case 1:return a=document.getElementById("_token").value,q.yield(console.log("Login:"+a),2);case 2:if(!a){alertify.set({delay:1850});alertify.error("Insira o TOKEN para logar.");q.jumpTo(3);break}b="http://SERVER/commands/"+a+"/info";c="http://SERVER/commands/"+a+"/musica";e="http://SERVER/commands/"+a+"/pausada";return q.yield(fetch(b),
4);case 4:return g=q.yieldResult,q.yield(fetch(c),5);case 5:return h=q.yieldResult,q.yield(fetch(e),6);case 6:return p=q.yieldResult,q.yield(g.json(),7);case 7:return q.yield(h.json(),8);case 8:return m=q.yieldResult,q.yield(p.json(),9);case 9:t=q.yieldResult,C=document.getElementsByTagName("player_imagem")[0],G=document.getElementsByTagName("musica")[0],D=document.getElementsByTagName("tempo_musica")[0],E=document.getElementsByTagName("playpause")[0],x=document.getElementsByTagName("skip")[0],u=
document.getElementsByTagName("voltar_menu")[0],r=document.getElementsByTagName("volume_up")[0],v=document.getElementsByTagName("volume_down")[0],F=document.getElementsByTagName("proximamusica")[0],w=document.getElementsByTagName("player_progress")[0],C.innerHTML='<img src="'+m.thumbnail+'" id="player_imagem"/>',G.innerHTML=""+m.musica,D.innerHTML=m.tempoatual+" | "+m.duracao,v.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496810519625788/btn_vol-.png" id="volume_down"/>',
r.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496809332113408/btn_vol.png" id="volume_up"/>',x.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496808057307146/btn_skip.png" id="skip_img"/>',u.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838497079391158322/btn_close.png" id="home" onclick="_home()"/>',w.innerHTML='<myProgress class="elemento"></myProgress><myBar class="elemento"></myBar>',E.innerHTML=
!0===t.atocar?'<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496806005375017/btn_pause.png" id="play_img"/>':'<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496806983434240/btn_play.png" id="play_img"/>',!1===m.proximamusica?(m.proximamusica_nome="",m.proximamusica_img="",m.proximamusica_duracao="",F.innerHTML="",console.log("A!")):!0===m.proximamusica&&(F.innerHTML='<img src="'+m.proxima.thumbnail+'" id="proximamusica_imagem"/><p id="proximamusica_nome">'+
m.proxima.titulo+'</p><p id="proximamusica_duracao">'+m.proxima.duracao+'</p><h3 id="proximamusica"><b><i>Pr&oacute;xima Musica:</i></b></h3>'),d=document.getElementsByClassName("login"),d.innerHTML="",document.getElementsByClassName("login")[0].innerHTML="",f=document.getElementsByTagName("author")[0],f.innerHTML="",l=document.getElementsByTagName("backup_token")[0],l.innerHTML='<input type="text" name="tokenID" id="_token" placeholder=" SEU TOKEN" size="16" value="'+a+'" class="login" style=\'display: none;\'>',
n=document.getElementById("card-wrapper"),n.style.cssText="background: rgba(0, 0, 0, 0.8);";case 3:setInterval(updatePlayer,1E3),q.jumpToEnd()}})})()}
function updatePlayer(){(function(){var a,b,c,e,g,h,p,m,t,C,G,D,E,x,u,r,v,F,w,d,f,l,n,q,z,A,H,I,J;return $jscomp.asyncExecutePromiseGeneratorProgram(function(y){switch(y.nextAddress){case 1:return y.setCatchFinallyBlocks(2),a=document.getElementById("_token").value,b="http://SERVER/commands/"+a+"/musica",c="http://SERVER/commands/"+a+"/pausada",y.yield(fetch(b),4);case 4:return e=y.yieldResult,y.yield(fetch(c),5);case 5:return g=y.yieldResult,y.yield(e.json(),6);case 6:return h=y.yieldResult,y.yield(g.json(),
7);case 7:p=y.yieldResult;m=document.getElementsByTagName("player_imagem")[0];t=document.getElementsByTagName("musica")[0];C=document.getElementsByTagName("tempo_musica")[0];G=document.getElementsByTagName("playpause")[0];D=document.getElementsByTagName("skip")[0];E=document.getElementsByTagName("volume_up")[0];x=document.getElementsByTagName("volume_down")[0];u=document.getElementsByTagName("proximamusica")[0];m.innerHTML='<img src="'+h.thumbnail+'" id="player_imagem"/>';t.innerHTML=""+h.musica;
C.innerHTML=h.tempoatual+" | "+h.duracao;x.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496810519625788/btn_vol-.png" id="volume_down"/>';E.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496809332113408/btn_vol.png" id="volume_up"/>';D.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496808057307146/btn_skip.png" id="skip_img"/>';G.innerHTML=!0===p.atocar?'<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496806005375017/btn_pause.png" id="play_img"/>':
'<img src="https://cdn.discordapp.com/attachments/742187521852833923/838496806983434240/btn_play.png" id="play_img"/>';!1===h.proximamusica?u.innerHTML="":!0===h.proximamusica&&(u.innerHTML='<img src="'+h.proxima.thumbnail+'" id="proximamusica_imagem"/><p id="proximamusica_nome">'+h.proxima.titulo+'</p><p id="proximamusica_duracao">'+h.proxima.duracao+'</p><h3 id="proximamusica"><b><i>Pr&oacute;xima Musica:</i></b></h3>');r=h.tempoatualms/h.tempomusicams*100;v=document.getElementsByTagName("myBar")[0];
v.style.cssText="width:"+r+"%;";y.leaveTryBlock(0);break;case 2:y.enterCatchBlock(),F=document.getElementsByTagName("player_imagem")[0],w=document.getElementsByTagName("musica")[0],d=document.getElementsByTagName("tempo_musica")[0],f=document.getElementsByTagName("playpause")[0],l=document.getElementsByTagName("skip")[0],n=document.getElementsByTagName("volume_borda")[0],q=document.getElementsByTagName("volume_up")[0],z=document.getElementsByTagName("volume_down")[0],A=document.getElementsByTagName("voltar_menu")[0],
H=document.getElementsByTagName("proximamusica")[0],I=document.getElementsByTagName("player_progress")[0],F.innerHTML="",w.innerHTML="",d.innerHTML="",z.innerHTML="",q.innerHTML="",n.innerHTML="",l.innerHTML="",f.innerHTML="",A.innerHTML='<img src="https://cdn.discordapp.com/attachments/742187521852833923/838497079391158322/btn_close.png" id="home" onclick="_home()" style="margin-top: -50px;"/>',H.innerHTML="",I.innerHTML="",J=document.getElementById("card-wrapper"),J.style.cssText="background: rgba(0, 0, 0, 0.8);",
y.jumpToEnd()}})})()}function _myProgress(){(function(){var a,b,c,e,g;return $jscomp.asyncExecutePromiseGeneratorProgram(function(h){if(1==h.nextAddress)return a="http://SERVER/commands/"+cap+"/musica",h.yield(fetch(a),2);if(3!=h.nextAddress)return b=h.yieldResult,h.yield(b.json(),3);c=h.yieldResult;e=c.tempoatualms/c.tempomusicams*100;console.log(e);g=document.getElementById("myBar");g.style.cssText="width: "+e+";";h.jumpToEnd()})})()}
function _pause(){(function(){var a,b,c,e,g,h,p;return $jscomp.asyncExecutePromiseGeneratorProgram(function(m){switch(m.nextAddress){case 1:return a=document.getElementById("_token").value,m.yield(console.log(a),2);case 2:return b="http://SERVER/commands/"+a+"/pausar",c="http://SERVER/commands/"+a+"/pausada",m.yield(fetch(b),3);case 3:return e=m.yieldResult,m.yield(fetch(c),4);case 4:return g=m.yieldResult,m.yield(g.json(),5);case 5:return h=m.yieldResult,m.yield(e.text(),6);case 6:p=m.yieldResult,
console.log(p),!0===h.atocar?(alertify.set({delay:1650}),alertify.success("Player continuou a tocar.")):(alertify.set({delay:1650}),alertify.error("Player parou de tocar.")),m.jumpToEnd()}})})()}
function _skip(){(function(){var a,b,c,e;return $jscomp.asyncExecutePromiseGeneratorProgram(function(g){switch(g.nextAddress){case 1:return a=document.getElementById("_token").value,g.yield(console.log(a),2);case 2:return b="http://SERVER/commands/"+a+"/skipar",g.yield(fetch(b),3);case 3:return c=g.yieldResult,g.yield(c.text(),4);case 4:e=g.yieldResult,console.log(e),alertify.set({delay:1650}),alertify.error("Musica skipada."),g.jumpToEnd()}})})()}
function _volumeUp(){(function(){var a,b,c;return $jscomp.asyncExecutePromiseGeneratorProgram(function(e){if(1==e.nextAddress)return a=document.getElementById("_token").value,e.yield(console.log(a),2);b=parseInt(document.getElementById("volume").value,10);100===b?b=100:(b=isNaN(b)?50:b,b++,document.getElementById("volume").value=b);c="http://SERVER/commands/"+a+"/volume"+b;fetch(c);alertify.set({delay:1650});alertify.success("Volume alterado para "+b+"%.");e.jumpToEnd()})})()}
function _volumeDown(){(function(){var a,b,c;return $jscomp.asyncExecutePromiseGeneratorProgram(function(e){if(1==e.nextAddress)return a=document.getElementById("_token").value,e.yield(console.log(a),2);b=parseInt(document.getElementById("volume").value,10);0===b?b=0:(b=isNaN(b)?50:b,--b,document.getElementById("volume").value=b);c="http://SERVER/commands/"+a+"/volume"+b;fetch(c);alertify.set({delay:1650});alertify.success("Volume alterado para "+b+"%.");e.jumpToEnd()})})()}
function _tocandoAgora(){(function(){var a,b,c;return $jscomp.asyncExecutePromiseGeneratorProgram(function(e){if(1==e.nextAddress){if(!cap)return alert("Insira um TOKEN"),e.jumpTo(0);a="http://SERVER/commands/"+cap+"/musica";return e.yield(fetch(a),3)}if(4!=e.nextAddress)return b=e.yieldResult,e.yield(b.text(),4);c=e.yieldResult;document.getElementsByTagName("musica");console.log(c);e.jumpToEnd()})})()};