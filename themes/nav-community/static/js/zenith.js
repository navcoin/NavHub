/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map

/** 
  * Zenith Slider jQuery Plugin
  * Author: Aleksej Vukomanovic
  * Website: http://themeflection.com
  * Version: 1.0
  * Version from: 11.07.2015
  * Licence: MIT 
  */
!(function( $ ){
    "use strict";

    $.fn.zenith = function(options){ 
         //setting defaults
         var settings = $.extend({
              layout      : 'default',
              direction   : 'horizontal',
              animation   : 'Slide',
              background  : '',
              activeIndex : 0,
              circleColor : 'cornsilkblue',
              iconColor   : '#fffff0',
              activeColor : 'crimson',
              autoplay    : true,
              autoplayStop : false,
              autoplayPause: true,
              autoplaySpeed: 3000,
              slideSpeed  : 500,
              bullets     : true,
              bulletsColor: '#f7f7f7',
              bulletsAC   : 'cornflowerblue',
              arrows      : true,
              prevSlide   : function(){},
              nextSlide   : function(){},
              firstSlide  : function(){},
              lastSlide   : function(){}, 
              animationEnd: function(){},
              markup      : ['.tf_container', '.tf_slide'],
              width       : '65%',
              height      : '320px',
              margin      : '60px',
              fullWidth   : false,
              style       : 'shadow',
              customStyle : [],
              customNavs  : ['#bullet-navs', 'li'],
              navPosition : 'bottom',
              thumbsBG	  : true,
              thumbsSize  : {
              		xsmall: 45,
              		small: 65, 
              		medium: 92,
              		large : 108,
              		xlarge: 128
              },
              fixedThumbs : true

         },options);

        //Set globals 
        var zis = this; 
        var parent = this;
        var lastHit = 0;
        var animation = [];
        var first = 0;
        var last = '';
        var wait = 0;
        var layout = settings.layout;
        var direction = settings.direction;

        // if any layout, exept slider, selected add animated class to children
        if( this.find('.hgi').length > 0 ){
            this.find('.hgi').addClass('animated');
        } 
        // if  slider layout selected add animated class to children
        if(  settings.layout === 'slider' ) {
          this.find(settings.markup[0] + ' ' + settings.markup[1]).addClass('animated'); 
        }

        if( layout === 'default' || layout === 'hand' || layout === 'screen' || layout === 'slider' && direction === 'horizontal' )
        {
	        if( settings.animation === 'Slide' ){
	        	animation['in_dir1'] = 'slideInLeft';
	            animation['in_dir2'] = 'slideInRight';
	            animation['out_dir1'] = 'slideOutLeft';
	            animation['out_dir2'] = 'slideOutRight';
	        } else if( settings.animation === 'Bounce' ){
	        	animation['in_dir1'] = 'bounceInLeft';
	            animation['in_dir2'] = 'bounceInRight';
	            animation['out_dir1'] = 'bounceOutLeft';
	            animation['out_dir2'] = 'bounceOutRight';
	        } else if( settings.animation === 'Fade' ){
	        	animation['in_dir1'] = 'fadeInLeft';
	            animation['in_dir2'] = 'fadeInRight';
	            animation['out_dir1'] = 'fadeOutLeft';
	            animation['out_dir2'] = 'fadeOutRight';
	        } else if( settings.animation === 'RotateDown' ){
	        	animation['in_dir1'] = 'rotateInDownLeft';
	            animation['in_dir2'] = 'rotateInDownRight';
	            animation['out_dir1'] = 'rotateOutDownRight';
	            animation['out_dir2'] = 'rotateOutDownLeft';
	        } else if( settings.animation === 'RotateUp' ){
	        	animation['in_dir1'] = 'rotateInUpLeft';
	            animation['in_dir2'] = 'rotateInUpRight';
	            animation['out_dir1'] = 'rotateOutUpRight';
	            animation['out_dir2'] = 'rotateOutUpLeft';
	        } else if( settings.animation === 'Zoom' ){
	        	animation['in_dir1'] = 'zoomInLeft';
	            animation['in_dir2'] = 'zoomInRight';
	            animation['out_dir1'] = 'zoomOutLeft';
	            animation['out_dir2'] = 'zoomOutRight';
	        } else if( settings.animation === 'Flip' ){
	        	animation['in_dir1'] = 'flipInY';
	            animation['in_dir2'] = 'flipInY';
	            animation['out_dir1'] = 'flipOutY';
	            animation['out_dir2'] = 'flipOutY';
	        }
	    } 
	    else if( layout === 'screen' || layout === 'slider' && direction === 'vertical' )
	    {
	    	if( settings.animation === 'Slide' ){
	        	animation['in_dir1'] = 'slideInUp';
	            animation['in_dir2'] = 'slideInDown';
	            animation['out_dir1'] = 'slideOutDown';
	            animation['out_dir2'] = 'slideOutUp';
	        } else if( settings.animation === 'Bounce' ){
	        	animation['in_dir1'] = 'bounceInUp';
	            animation['in_dir2'] = 'bounceInDown';
	            animation['out_dir1'] = 'bounceOutUp';
	            animation['out_dir2'] = 'bounceOutDown';
	        } else if( settings.animation === 'Fade' ){
	        	animation['in_dir1'] = 'fadeInUp';
	            animation['in_dir2'] = 'fadeInDown';
	            animation['out_dir1'] = 'fadeOutUp';
	            animation['out_dir2'] = 'fadeOutDown';
	        } else if( settings.animation === 'RotateDown' ){
	        	animation['in_dir1'] = 'rotateInDownLeft';
	            animation['in_dir2'] = 'rotateInDownRight';
	            animation['out_dir1'] = 'rotateOutDownLeft';
	            animation['out_dir2'] = 'rotateOutDownRight';
	        } else if( settings.animation === 'RotateUp' ){
	        	animation['in_dir1'] = 'rotateInUpLeft';
	            animation['in_dir2'] = 'rotateInUpRight';
	            animation['out_dir1'] = 'rotateOutUpLeft';
	            animation['out_dir2'] = 'rotateOutUpRight';
	        } else if( settings.animation === 'Zoom' ){
	        	animation['in_dir1'] = 'zoomInUp';
	            animation['in_dir2'] = 'zoomInDown';
	            animation['out_dir1'] = 'zoomOutUp';
	            animation['out_dir2'] = 'zoomOutDown';
	        } else if( settings.animation === 'Flip' ){
	            animation['in_dir1'] = 'flipInX';
	            animation['in_dir2'] = 'flipInX';
	            animation['out_dir1'] = 'flipOutX';
	            animation['out_dir2'] = 'flipOutX';
	        }
	    }

      // Function from David Walsh: http://davidwalsh.name/css-animation-callback
      function whichAnimationEvent(){
        var t,
            el = document.createElement("fakeelement");

        var animations = {
          "animation"      : "animationend",
          "OAnimation"     : "oAnimationEnd",
          "MozAnimation"   : "animationend",
          "WebkitAnimation": "webkitAnimationEnd"
        }

        for (t in animations){
          if (el.style[t] !== undefined){
            return animations[t];
          }
        }
      }
      var animationEvent = whichAnimationEvent();

      // MAIN FUNCTIONS
      var screenSlide = {
        next: function(){
            if( settings.layout != 'slider' ){
              var holder = '#mac-book';
              var item = '.hgi';
              var left = parent.find('#mac-book #left');
              var right = parent.find('#mac-book #right');     
            } else {
              var holder = settings.markup[0];
              var item = settings.markup[1];
              var left = parent.find('#left');
              var right = parent.find('#right');
            }
            var bts = settings.customNavs[0] + ' ' + settings.customNavs[1];
            var active = item + '.active';
            var container = holder + ' ' + item;
            var currAct = parent.find(holder + ' ' + active).data('index');
            var current = parent.find(holder + ' ' + item + '[data-index="'+ currAct +'"]');
            var bulletA = parent.find(bts + '.active');
            var next = parent.find(holder + ' ' + item + '[data-index="'+ parseInt( currAct - 1 ) +'"]'); 
            if( parseInt( currAct - 1 ) < 0 ){
                next = parent.find(item + '[data-index="'+ last +'"]');
            }  
            if( wait === 0 ){ 
              wait = 1;
              bulletA.removeClass('active');
              bullet.eq( parseInt( currAct - 1 ) ).addClass('active');           
              current.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass( animation['out_dir2']);
              next.addClass('active ' + animation['in_dir1']);
              parent.find(next).one(animationEvent, function(event) {
                current.removeClass(animation['out_dir2']); 
                if( parent.find(active).length > 1 ){  
                    next.siblings().removeClass('active' + ' ' + animation['in_dir1'] + ' ' + animation['in_dir2'] + ' ' + animation['out_dir1'] + ' ' + animation['out_dir2']);
                    wait = 0;
                } 
            
                //custom callback - when slide transition animation ends
                settings.animationEnd.call();
              });
              //custom callback - on first slide reached
              if(  parseInt( currAct - 1 ) === 0 ){
                 settings.firstSlide.call();
              }
              //custom callback - on next slide transition
              settings.nextSlide.call();
            }
          },
          prev: function(){ 
             if( settings.layout != 'slider' ){
                var holder = '#mac-book';
                var item = '.hgi';     
              } else {
                var holder = settings.markup[0];
                var item = settings.markup[1];
              }
              var bts = settings.customNavs[0] + ' ' + settings.customNavs[1];
              var active = item + '.active';
              var container = holder + ' ' + item;
              var currAct = parent.find(holder + ' ' + active).data('index'); 
              var current = parent.find(holder + ' ' + item + '[data-index="'+ currAct +'"]');
              var bulletA = parent.find(bts + '.active'); 
              var prev = parent.find(holder + ' ' + item + '[data-index="'+ parseInt( currAct + 1 ) +'"]');
              bulletA.removeClass('active'); 
              if( parseInt( currAct + 1 ) > parseInt( last ) ){
                  prev = parent.find(item + '[data-index="0"]'); 
                  bullet.eq(0).addClass('active');
                } else if( parseInt( currAct + 1 ) <= parseInt( last ) ){
                  bullet.eq( parseInt( currAct + 1 ) ).addClass('active'); 
              }
              current.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass( animation['out_dir1']);
              prev.addClass('active ' + animation['in_dir2']);              
              parent.find(prev).one(animationEvent, function(event) {
                 current.removeClass(animation['out_dir1']);
                 if( parent.find(active).length > 1 ){ 
                      prev.siblings().removeClass('active' + ' ' + animation['in_dir1'] + ' ' + animation['in_dir2'] + ' ' + animation['out_dir1'] + ' ' + animation['out_dir2']);
                 } 
                 //custom callback - when slide transition animation ends
                 settings.animationEnd.call();
               });
              //custom callback - on last slide reached
              if(  parseInt( currAct + 1 ) === parseInt( last ) ){
                 settings.lastSlide.call();
              }
              //custom callback
              settings.prevSlide.call();
          },
          bullets: function(el){ 
              var parent = zis; 
              var bulItem =  settings.customNavs[0] + ' ' + settings.customNavs[1];
              var bulEl = settings.customNavs[1]; 
              var bullet = parent.find(bulItem);
              if( settings.layout != 'slider' ){ 
                var active = '.hgi.active';
                var index = el.closest('li').data('index'); 
                var slideIdx = parent.find('#mac-book .hgi.active').data('index');
                var currSlide = parent.find('#mac-book .hgi[data-index="'+ slideIdx +'"]');
                var nextSlide = parent.find('#mac-book .hgi[data-index="'+ parseInt( index ) +'"]');
              } else {
                var active = settings.markup[1] + '.active';
                var container = settings.markup[0] + ' ' + settings.markup[1];
                var index = el.data('index');
                var slideIdx = parent.find(container + '.active').index(); 
                var currSlide = parent.find(container + '[data-index="'+slideIdx+'"]');
                var nextSlide  = parent.find(container).eq(parseInt( index ));
              }
              var current = parent.find(bulEl+ '.active');
              if( !el.hasClass('active') && wait === 0 ){
                  wait = 1;
                  current.removeClass('active');
                  parent.find(bulItem + '[data-index="'+ index +'"]').addClass('active'); 
                  if( parseInt( index ) > parseInt( current.data('index') ) ){
                      currSlide.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir1']);
                      nextSlide.addClass('active ' + animation['in_dir2']);              
                      parent.find(nextSlide).one(animationEvent, function(event) {
                        currSlide.removeClass(animation['out_dir1']);
                        if( parent.find(active).length > 1 ){ 
                            nextSlide.siblings().removeClass('active' + ' ' + animation['in_dir1'] + ' ' + animation['in_dir2'] + ' ' + animation['out_dir1'] + ' ' + animation['out_dir2']);
                            wait = 0;
                        } 
                      });
                  } else{
                      currSlide.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir2']);
                      nextSlide.addClass('active ' + animation['in_dir1']);              
                      parent.find(currSlide).one(animationEvent, function(event) {
                        currSlide.removeClass(animation['out_dir2']);
                        if( parent.find(active).length > 1 ){ 
                            nextSlide.siblings().removeClass('active' + ' ' + animation['in_dir1'] + ' ' + animation['in_dir2'] + ' ' + animation['out_dir1'] + ' ' + animation['out_dir2']);
                            wait = 0;
                        } 
                      });
                  }//else      
              }//if
          },
          init: function() {
            var ID = '#' + parent.attr('id');
            var item = ( settings.layout === 'slider' ) ? ( settings.markup[0] + ' ' + settings.markup[1] ) : '#mac-book .hgi';
            var actI = settings.activeIndex;
            var startUp = ( settings.layout === 'slider' ) ? parent.find( settings.markup[0] + ' ' + settings.markup[1] ).eq(actI) : parent.find('#mac-book .hgi[data-index="'+ actI +'"]')
            if( settings.layout != 'slider' ){
              var left = parent.find('#mac-book #left');
              var right = parent.find('#mac-book #right'); 
              var firstBul = '#bullet-navs ul li[data-index="'+ actI +'"]';
            } else {
              var left = parent.find('#left');
              var right = parent.find('#right'); 
              var firstBul = settings.customNavs[0] + ' ' + settings.customNavs[1] + '[data-index="'+ actI +'"]';
            }
            var idx = 0;
            if( settings.layout === 'screen' ){ 
              var blt = '<li data-index=""><span class="blt"></span></li>';
              parent.find('#bullet-navs').append('<ul></ul>');
              parent.find(item).each(function(){
                  $(this).attr('data-index', idx);
                  parent.find('#bullet-navs ul').append(blt);
                  parent.find('#bullet-navs ul li').last().attr('data-index', idx);
                  idx++;
              });
            } else { 
            	if( settings.customNavs[0] === '#bullet-navs' ) { 
            		var blt = '<li data-index=""><span class="blt"></span></li>';
              		parent.find('#bullet-navs').append('<ul></ul>');
              		parent.find(item).each(function(){
	                    $(this).attr('data-index', idx);
	                    parent.find('#bullet-navs ul').append(blt);
	                    parent.find('#bullet-navs ul li').last().attr('data-index', idx);
	                    idx++;
	                });
                } else {
	                parent.find(settings.customNavs[0] + ' ' + settings.customNavs[1]).each(function(){
	                  $(this).attr('data-index', idx); 
	                  idx++;
	                });
            	}
            	 idx = 0;
	             parent.find(item).each(function(){
	                $(this).attr('data-index', idx);
	                idx++;
	             });
            }
            first = 0;
            last = parent.find(item).last().data('index'); 
            var bullet = parent.find('#bullet-navs li');
            // printing dynamic style
            var style = '<style data-title="'+ ID +'" type="text/css">';
            style += ID + ' #bullet-navs ul li span{background: '+ settings.bulletsColor +'}';
            style += ID + ' #bullet-navs ul li.active span{background: '+ settings.bulletsAC +'}';
            style += ID + ' ' + settings.markup[0] + '{height: '+ settings.height +'}';
            style += ID + ' ' + settings.markup[0] + '{width: '+ settings.width +'}';
            style += ID + ' ' + settings.markup[1] + '{height: 100%}';
            style += ID + '{margin-top: '+ settings.margin +'; margin-bottom: '+ settings.margin +'}';
            style += ID + ' ' + item + '.animated{-webkit-animation-duration: '+ settings.slideSpeed +'ms; animation-duration: '+ settings.slideSpeed +'ms;}';
            if( settings.customNavs[0] === '#bullet-navs' ){
            	style += ID + ' ' + settings.customNavs[0] + '{height: auto; position: absolute;bottom: 0px; padding: 0 0.5%; padding-top: 2px; width: 90%;}';
            } else {
            	style += ID + ' ' + settings.customNavs[0] + '{height: auto; position: absolute;bottom: 0px; padding: 0 0.5%; padding-top: 2px; width: 100%;}';
            }
            if( settings.customStyle ){
            	$.each( settings.customStyle, function(i,val){
            		style += val;
            	});
            }
            style += '</style>';   
            parent.closest('html').find('head').append(style); 
            if( settings.bullets === false ){
               parent.find('#bullet-navs').remove();
            }
            if( settings.arrows === false ){
               parent.find('#left, #right').remove();
            }
            //setting active index
            startUp.addClass('active ' + animation['in_dir1']);
            parent.find(firstBul).addClass('active');
            var active = parent.find('#mac-book .hgi.active').data('index'); 

            //check for direction and set arrows and bullets accordingly
            if( settings.direction === 'vertical' ){
               zis.addClass('vertical'); 
            }
            //arrows click detection 
            //right arrow
            if( settings.direction === 'horizontal' ){
              right.click(function(){ 
                  screenSlide.prev();
              });//right.click()
              //left arrow
              left.click(function(){
                  screenSlide.next();
              });//left.click()
            } else {
              right.click(function(){ 
                  screenSlide.prev();
              });//right.click()
              //left arrow
              left.click(function(){ 
                 screenSlide.next();
              });//left.click()
            }//if()
          },
          thumbs: function() {
          	var width = $(window).outerWidth();
          	var ID = parent.attr('id');
          	var xsmall = 480;
          	var small = 960;
          	var medium = 1200;
          	var large = 1600;
          	var elements = settings.customNavs[0] + ' ' + settings.customNavs[1];
          	if( settings.customNavs[0] === '#bullet-navs' ){
          		elements = 'none';
          	}
          	var xs = settings.thumbsSize.xsmall;
          	var sm = settings.thumbsSize.small;
          	var md = settings.thumbsSize.medium;
          	var lg = settings.thumbsSize.large;
          	var xl = settings.thumbsSize.xlarge;
          	var padding = '';
          	//if mobile
          	if( width <= xsmall ){
          		parent.find(elements).css({width: xs, height: xs});
          		padding = xs;
          	} else if( width > xsmall && width <= small ){ //if smartphone with large screen
          		parent.find(elements).css({width: sm, height: sm});
          		padding = sm;
          	} else if( width > small && width <= medium ){ //if large tablet or PC, or laptop
          		parent.find(elements).css({width: md, height: md});
          		padding = md;
          	} else if( width > medium && width <= large ){ //if large screen PC or Laptop
          		parent.find(elements).css({width: lg, height: lg});
          		padding = lg;
          	} else if( width > large ){ //if very large screen over 1600px
          		parent.find(elements).css({width: xl, height: xl});
          		padding = xl;
          	}
          	padding = padding + 10;
          	var style = ''; 
          	if( settings.fixedThumbs === true ){ 
          		if( settings.navPosition === 'bottom' ) {
	          		var pdg = '#' + ID + ' ' + settings.markup[1];
	          		var hgt = $('#' + ID + ' ' + settings.markup[0]).outerHeight();
	          		$(pdg).css('height', hgt - padding + 7 );
          		} else if( settings.navPosition === 'top' ) {
          			var pdg = '#' + ID + ' ' + settings.markup[1];
	          		var hgt = $('#' + ID + ' ' + settings.markup[0]).outerHeight();
	          		$(pdg).css({ height: hgt - padding, marginTop: padding - 7 });
          		} else if( settings.navPosition === 'left' ) {
          			var pdg = '#' + ID + ' ' + settings.markup[1];
	          		var hgt = $('#' + ID + ' ' + settings.markup[0]).outerWidth();
	          		$(pdg).css({ width: hgt - padding, marginLeft: padding });
          		} else if( settings.navPosition === 'right' ) { 
          			var pdg = '#' + ID + ' ' + settings.markup[1];
	          		var hgt = $('#' + ID + ' ' + settings.markup[0]).outerWidth(); 
	          		$(pdg).css({ width: hgt - padding, marginRight: padding });
          		}
          	} else {
          		var chg = '#' + ID + ' ' + settings.markup[0] + ' ' + settings.customNavs[0];
          		if( settings.navPosition === 'bottom' ) {
	          		$(chg).css('margin-bottom', -padding +'px');
	          		$('#' + ID + ' ' +settings.markup[0]).hover(function(){$(chg).animate({marginBottom: 0 },350)}, function(){$(chg).animate({ marginBottom: -padding +'px' },350) }) 
          		} else if( settings.navPosition === 'top' ) {
          			$(chg).css('margin-top', -padding +'px');
	          		$('#' + ID + ' ' +settings.markup[0]).hover(function(){$(chg).animate({marginTop: 0 },350)}, function(){$(chg).animate({ marginTop: -padding +'px' },350) }) 
          		} else if( settings.navPosition === 'left' ) {
          			$(chg).css('margin-left', -padding +'px');
	          		$('#' + ID + ' ' +settings.markup[0]).hover(function(){$(chg).animate({marginLeft: 0 },350)}, function(){$(chg).animate({ marginLeft: -padding +'px' },350) }) 
          		} else if( settings.navPosition === 'right' ) {
          			$(chg).css('margin-right', -padding +'px');
	          		$('#' + ID + ' ' + settings.markup[0]).hover(function(){$(chg).animate({marginRight: 0 },350)}, function(){$(chg).animate({ marginRight: -padding +'px' },350) }) 
          		}
          	}
          }//thumbs;
        }//screenSlide;

        // AUTOPLAY
        var autoplay = {
        //FIrst layout autoplay
        first: function() {
            var currActive = zis.find('.hgi.active').data('index');
            var next = zis.find('.phone-holder').find('.hgi[data-index="'+ parseInt( currActive + 1 ) +'"]');
            var last = zis.find('.phone-holder').find('.hgi').last().data('index');
            var prevIndex = zis.find('.hgi.active').data('index');
            var prev = zis.find('.phone-holder').find('.hgi[data-index="'+ prevIndex +'"]');
            zis.find('.highlight.active').removeClass('active');
            if( parseInt( currActive + 1 ) <= parseInt( last ) ){
                $('#'+ ID +':not(.hand)').find('.highlight[data-index="'+ parseInt( currActive + 1 ) +'"]').addClass('active');
            } else{
                next = zis.find('.phone-holder').find('.hgi[data-index="0"]');
                zis.find('.highlight[data-index="0"]').addClass('active');
            }//else
            if( 0 === wait )
            {
            	wait = 1;
	            zis.find('.hgi.active').removeClass('active ' + animation['in_dir1'] + ' ' + animation['in_dir2']);
	            if( next.hasClass('hgh-linner') ){
	                prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir2']);
		            next.addClass('active ' + animation['in_dir1']);
	                parent.find(prev).one(animationEvent, function(event) {
		                   prev.removeClass(animation['out_dir2']);
		                   if( zis.find('.phone-holder .hgi.active').length > 1 ){ 
		                        prev.removeClass('active');
		                   } 
		                   wait = 0;
		                   //custom callback
	                       settings.prevSlide.call();
		            });
	            } else {
	                  prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir1']);
		              next.addClass('active ' + animation['in_dir2']);
		              parent.find(prev).one(animationEvent, function(event) {
			              prev.removeClass(animation['out_dir1']);
			              if( zis.find('.phone-holder .hgi.active').length > 1 ){ 
			                      prev.removeClass('active');
			              } 
		              	  wait = 0;
		              	  //custom callback
	                      settings.nextSlide.call();
		             });  
	            }//else
	        }//if(wait === 0)
        },
        //Second layout autoplay
        second: function() {
            var currActive = zis.find('.hgi.active').data('index');
            var next = zis.find('.phone-hand').find('.hgi[data-index="'+ parseInt( currActive + 1 ) +'"]');
            var back = zis.find('.phone-hand').find('.hgi[data-index="'+ parseInt( currActive - 1 ) +'"]');
            var last = zis.find('.phone-hand').find('.hgi').last().data('index');
            var prevIndex = zis.find('.phone-hand .hgi.active').data('index');
            var prev = zis.find('.phone-hand').find('.hgi[data-index="'+ prevIndex +'"]');
            zis.find('.highlight.active').removeClass('active');
            if( lastHit === 0 && wait === 0 ){
               wait = 1;
               if( parseInt( currActive + 1 ) <= parseInt( last ) ){
                    zis.find('.highlight[data-index="'+ parseInt( currActive + 1 ) +'"]').addClass('active');
                    prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir2']);
	                next.addClass('active ' + animation['in_dir1']);
	                parent.find(prev).one(animationEvent, function(event) {
	                     prev.removeClass(animation['out_dir2']);
	                     if( zis.find('.phone-hand .hgi.active').length > 1 ){ 
	                        prev.removeClass('active');
	                     } 
	                     wait = 0;
	                     //custom callback
	                     settings.prevSlide.call();
	                });
               } else {
                  lastHit = 1;
                  wait = 0;
               }
            }//if 
            if( lastHit === 1 && wait === 0 ){ 
            	wait = 1;
                if( parseInt( currActive - 1 ) >= 0 ){
                    zis.find('.highlight[data-index="'+ parseInt( currActive - 1 ) +'"]').addClass('active');
                    prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir1']);
	                back.addClass('active ' + animation['in_dir2']);
	                parent.find(prev).one(animationEvent, function(event) {
	                    prev.removeClass(animation['out_dir1']);
	                    if( zis.find('.phone-hand .hgi.active').length > 1 ){ 
	                       prev.removeClass('active');
	                     } 
	                     wait = 0;
	                     //custom callback
	                     settings.nextSlide.call();
	                });
                } else {
                  lastHit = 0;
                  wait = 0;
                }  
            }//if 
        },
        //Third layout autoplay        
        third: function() {
            if( settings.layout != 'slider' ){
              var holder = '#mac-screen';
              var item = '.hgi';     
            } else {
              var holder = settings.markup[0];
              var item = settings.markup[1];
            }
            var bts = settings.customNavs[0] + ' ' + settings.customNavs[1];
            var active = item + '.active';
            var currActive = parent.find(holder + ' ' + active).data('index');
            var next = parent.find(holder).find(item + '[data-index="'+ parseInt( currActive + 1 ) +'"]');
            var back = parent.find(holder).find(item + '[data-index="'+ parseInt( currActive - 1 ) +'"]');
            var last = parent.find(holder).find(item).last().data('index');
            var prevIndex = parent.find(holder + ' ' + active).data('index');
            var prev = parent.find(holder).find(item + '[data-index="'+ prevIndex +'"]');
            var currB = parent.find(bts + '.active');
            var bullet = parent.find(bts);
	        currB.removeClass('active');
	        if( lastHit === 0 && wait === 0 ){
	           wait = 1;	
	           if( parseInt( currActive + 1 ) <= parseInt( last ) ){
	                    parent.find(bts+ '[data-index="'+ parseInt( currActive + 1 ) +'"]').addClass('active');
	                    prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir1']);
	                    next.addClass('active ' + animation['in_dir2']);
	                    parent.find(next).one(animationEvent, function(event) {
	                        prev.removeClass(animation['out_dir1']);
	                        if( parent.find(holder + ' ' + active).length > 1 ){ 
	                           prev.removeClass('active');
				   			   wait =0;
	                        } 
	                    });
	                    //custom callback
	                    settings.nextSlide.call();
	           } else {
	                  lastHit = 1;
	                  wait = 0;	
	           }
	        } 
	        if( lastHit === 1 && wait === 0 ){ 
	        	wait = 1;
	            if( parseInt( currActive - 1 ) >= 0 ){
	                    parent.find(bts+ '[data-index="'+ parseInt( currActive - 1 ) +'"]').addClass('active');
	                    prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir2']);
	                    back.addClass('active ' + animation['in_dir1']);
	                    parent.find(prev).one(animationEvent, function(event) {
	                       prev.removeClass(animation['out_dir2']);
	                       if( parent.find(holder + ' ' + active).length > 1 ){ 
	                          prev.removeClass('active');
				  			  wait = 0;	
	                        } 
	                    });
	                    //custom callback
	                    settings.prevSlide.call();
	            } else {
	                  lastHit = 0;
	                  wait = 0;	
	                  parent.find(bts+ '[data-index="'+ parseInt( currActive ) +'"]').addClass('active');
	            }  
	         }//if()
        }//third()

       }//autoplay();
       /*=================================
                FIRST LAYOUT
       =================================*/
       if( settings.layout === 'default' ){
           
           var ID = this.attr('id');
           var style = '<style type="text/css" data-title="'+ ID +'">';
           style += '#'+ ID +' .highlight-title .fa{background: '+ settings.circleColor +'; color: '+ settings.iconColor +'}';
           style += '#'+ ID +' .highlight.active h3:after{background: '+ settings.activeColor +'}';
           style += '#'+ ID +' .highlight.active .fa{background: '+ settings.activeColor +'}';
           style += '#'+ ID +'{background: '+ settings.background +'}';
           style += '#'+ ID + ' ' + '.hgi.animated{-webkit-animation-duration: '+ settings.slideSpeed +'ms!important; animation-duration: '+ settings.slideSpeed +'ms!important;}';
           style += '</style>';
           //print styles
           this.closest('html').find('head').append(style);

           // setting the default active screen
           parent.find('.hgi').addClass('animated');
           parent.find('.hgi[data-index="'+ settings.activeIndex +'"]').addClass('active ' + animation['in_dir1']);
           parent.find('.highlight[data-index="'+ settings.activeIndex +'"]').addClass('active');

           var hIndex = '';
           parent.find('.highlight').mouseenter(function(){
             if( !$(this).hasClass('active') && wait === 0  ){
             	  wait = 1;
             	  var parent = zis;
                  parent.find('.highlight.active').removeClass('active')
                  $(this).addClass('active');
                  hIndex = $(this).closest('.highlight').data('index');
                  var hgi = parent.find('.phone-holder').find('.hgi[data-index="'+ hIndex +'"]');
                  var prevIndex = parent.find('.phone-holder .hgi.active').data('index');
                  var prev = parent.find('.phone-holder').find('.hgi[data-index="'+ prevIndex +'"]');
                  parent.find('.hgi.active').removeClass(animation['in_dir1'] + ' ' + animation['in_dir2'] + ' active');    
                  if( hgi.hasClass('hgh-linner') ){
                         prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir2']);
                         hgi.addClass('active ' + animation['in_dir1']);
                         parent.find(prev).one(animationEvent, function(event) {
                            prev.removeClass(animation['out_dir2']);
                            if( $('.hgi.active').length > 1 ){ 
                               prev.removeClass('active');
                            } 
                            wait = 0;
                         });
                  } else {
                         prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir1']);
                         hgi.addClass('active ' + animation['in_dir2']);
                         parent.find(prev).one(animationEvent, function(event) {
                            prev.removeClass(animation['out_dir1']);
                            if( $('.hgi.active').length > 1 ){ 
                               prev.removeClass('active');
                            } 
                            wait = 0;
                         });
                  }//else
             }// if !hasClass()
           });//mouseenter()

           // aligning the rows and phone
           parent.find('.row').each(function(){
              var height = $(this).outerHeight();
              var padding = ( height - 550 ) / 2;
              $(this).css('padding', padding + 'px 0px');
           });

           // First layout autoplay
           //if autoplay enabled
           if( settings.autoplay === true ){ 
             var play = setInterval(autoplay.first, parseInt( settings.autoplaySpeed) ); 
           }//if (autoplay === true)

           //pause autoplay on hover
           if( settings.autoplay === true ){
               zis.find('.highlight').hover(function(){ clearInterval(play) }, function(){ play = setInterval(autoplay.first, parseInt( settings.autoplaySpeed ) ); } );
           } 

           //stop autoplay on hover
           if( settings.autoplayStop === true ){ 
                 zis.find('.highlight').mouseenter(function(){
                      clearInterval(play);
                 });
           }

      }//if(layout === default);
      else if( settings.layout === 'hand' ){

          /*================================
                  SECOND LAYOUT
          =================================*/
           var ID = this.attr('id');
           var style = '<style type="text/css" data-title="'+ ID +'">';
           style += '#'+ ID +' .highlight-title .fa{background: '+ settings.circleColor +'; color: '+ settings.iconColor +'}';
           style += '#'+ ID +' .highlight.active h3:after{background: '+ settings.activeColor +'}';
           style += '#'+ ID +' .highlight.active .fa{background: '+ settings.activeColor +'}';
           style += '#'+ ID +'{background: '+ settings.background +'}';
           style += '#'+ ID + ' ' + '.hgi.animated{-webkit-animation-duration: '+ settings.slideSpeed +'ms; animation-duration: '+ settings.slideSpeed +'ms;}';
           style += '</style>';
           //print styles
           this.closest('html').find('head').append(style);
           var Parent = this;
           //setting the default active screen
           Parent.find('.hgi').addClass('animated');
           Parent.find('.hgi[data-index="'+ settings.activeIndex +'"]').addClass('active ' + animation['in_dir1']);
           Parent.find('.highlight[data-index="'+ settings.activeIndex +'"]').addClass('active');

           Parent.on('mouseenter', '.highlight',function(){
              if( !$(this).hasClass('active') && wait === 0 ){
              	 wait = 1;
                 zis.find('.highlight.active').removeClass('active')
                 $(this).addClass('active')
                 var Index = $(this).data('index');        
                 var parent = zis;
                 var current = parent.find('.phone-hand').find('.hgi[data-index="'+ Index +'"]');
                 var prevIndex = parent.find('.phone-hand .hgi.active').data('index');
                 var prev = parent.find('.phone-hand').find('.hgi[data-index="'+ prevIndex +'"]');
                 if( parseInt(Index) > parseInt(prevIndex) ){
                       prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir2']);
                       current.addClass('active ' + animation['in_dir1']);
                       parent.find(prev).one(animationEvent, function(event) {
                          prev.removeClass(animation['out_dir1'] + ' ' + animation['out_dir2']);
                          if( $('.zenith_slider.hand .hgi.active').length > 1 ){ 
                             prev.removeClass('active');
                          } 
                          wait = 0;
                       });
                 } else {
                       prev.removeClass(animation['in_dir1'] + ' ' + animation['in_dir2']).addClass('active ' + animation['out_dir1']);
                       current.addClass('active ' + animation['in_dir2']);
                       parent.find(prev).one(animationEvent, function(event) {
                          prev.removeClass(animation['out_dir1'] + ' ' + animation['out_dir2']);
                          if( zis.find('.hgi.active').length > 1 ){ 
                             prev.removeClass('active');
                          } 
                          wait = 0;
                       });
                }//else
              }//if
           });//mouseenter()

           // Second layout autoplay
           //if autoplay enabled
           if( settings.autoplay === true ){ 
             var play = setInterval(autoplay.second, parseInt( settings.autoplaySpeed) ); 
           }//if (autoplay === true)

           //pause autoplay on hover
           if( settings.autoplay === true ){
               zis.find('.highlight').hover(function(){ clearInterval(play) }, function(){ play = setInterval(autoplay.second, parseInt( settings.autoplaySpeed ) ); } );
           } 

           //stop autoplay on hover
           if( settings.autoplayStop === true ){ 
                 parent.find('.highlight').mouseenter(function(){
                      clearInterval(play);
                 });
           }

      } else if( settings.layout === 'screen' ) {

           /*================================
                    THIRD LAYOUT
          =================================*/      
          screenSlide.init();

          var bullet = parent.find('#bullet-navs li')
         
          //bullets-nav on click - change slides
          bullet.click(function(){
            var current = $(this)
              screenSlide.bullets(current);
          });//bullet.click()
          
           // Third layout autoplay
           //if autoplay enabled
           if( settings.autoplay === true ){ 
             var play = setInterval(autoplay.third, parseInt( settings.autoplaySpeed) ); 
           }//if (autoplay === true)

           //pause autoplay on hover
           if( settings.autoplayPause === true && settings.autoplay === true ){
               zis.find('#mac-screen').hover(function(){ clearInterval(play) }, function(){ play = setInterval(autoplay.third, parseInt( settings.autoplaySpeed ) ); } );
           }//if 

           //stop autoplay on hover
           if( settings.autoplayStop === true ){ 
                 zis.find('#mac-screen').mouseenter(function(){
                      clearInterval(play);
                 });
           }//if

           //Screen gestures, with the help of hammer.js 
           var Screen = document.getElementById('mac-screen');
           var touch = new Hammer(Screen);
           touch.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
           //if pan-ed to the left
            touch.on("swipeleft", function(ev) {
              if( settings.direction === 'horizontal' ){
                screenSlide.prev();
              }
            });
            //if pan-ed to the right
            touch.on("swiperight", function(ev) {
              if( settings.direction === 'horizontal' ) {
                  screenSlide.next();
              } 
            });
            //if pan-ed to the top
            touch.on("swipeup", function(ev) {
              if( settings.direction === 'vertical' ){
                screenSlide.prev();
              }
            });
            //if pan-ed to the bottom
            touch.on("swipedown", function(ev) {
              if( settings.direction === 'vertical' ){
                screenSlide.next();
              }
            });
            //if pressed inside the screen pause autoplay, if enabled
            touch.on("press", function(ev) {
                clearInterval(play)
            });
            // continue with autoplay after releases
            touch.on("pressup", function(ev) {
                play = setInterval(autoplay.third, parseInt( settings.speed ) )
            });
           
      } else if( settings.layout === 'slider' ) {

          /*================================
                   SLIDER LAYOUT
          =================================*/   
   
          //make preparation / initialize the slider   
          screenSlide.init();
          //check for screen size and determine the thumbs size
          if( settings.customNavs[0] === '#tf_thumbs' ) {
          	  screenSlide.thumbs();
          }
                   
          var ID = '#' + parent.attr('id');
		  var style = '';
          //check if slider if set to full width
          if( settings.fullWidth === true ){
          	parent.find(settings.markup[0]).css({ width: '100%', margin: 0, height: $(window).outerHeight() });
          	parent.css('margin', 0)
          }
          //check for navigation position
          if( settings.navPosition === 'top' && settings.fixedThumbs === false ){ 	 
          	 style += ID + ' ' + settings.customNavs[0] + '{top: 3px; }';      	
          } else if( settings.navPosition === 'top' && settings.fixedThumbs === true ){
          	 style += ID + ' ' + settings.customNavs[0] + '{top: 0px; bottom: auto!important}';
          } else if( settings.navPosition === 'left' && settings.direction === 'vertical' ){
          	  if( settings.customNavs[0] === '#tf_thumbs' ){
          	  	 style += ID + ' ' + settings.customNavs[0] + '{left: 0px;}';
          	  }	else {
          	 	 style += ID + ' ' + settings.customNavs[0] + '{left: 3px;}';
          	  }
          } else if( settings.navPosition === 'right' && settings.direction === 'vertical' ){
          	 if( settings.customNavs[0] === '#tf_thumbs' ){
          	  	 style += ID + ' ' + settings.customNavs[0] + '{right: 0px;}';
          	  }	else {
          	 	 style += ID + ' ' + settings.customNavs[0] + '{right: 3px;}';
          	  }
          }
          //prepend additional style so user custom style can still override any other rule
          parent.closest('html').find('head style[data-title="'+ ID +'"]').prepend(style);

          var bulEl = settings.customNavs[1]; 
          var bullet = parent.find(settings.customNavs[0] + ' ' + settings.customNavs[1]);

          parent.find(settings.markup[0]).addClass(settings.style);

          if( settings.thumbsBG === false ){
              parent.find('#tf_thumbs').addClass('no-bg');
           } 

          //bullets-nav on click - change slides
          bullet.click(function(){
              var current = $(this);
              screenSlide.bullets(current);
          });//bullet.click()

          //on screen resize
          $(window).resize(function(){
          	 if( settings.customNavs[0] === '#tf_thumbs' ) {
          	 	screenSlide.thumbs();
          	 }
          });
          
           // Third layout autoplay
           //if autoplay enabled 
           if( settings.autoplay === true ){
             var play = setInterval(autoplay.third, parseInt( settings.autoplaySpeed) ); 
           }//if (autoplay === true)

           //pause autoplay on hover
           if( settings.autoplayPause === true && settings.autoplay === true ){
               parent.find(settings.markup[0]).hover(function(){ clearInterval(play) }, function(){ play = setInterval(autoplay.third, parseInt( settings.autoplaySpeed ) ); } );
           }//if 

           //stop autoplay on hover
           if( settings.autoplayStop === true && settings.autoplay === true ){ 
                 parent.find(settings.markup[0]).mouseenter(function(){
                      clearInterval(play);
                 });
           }//if
           //Screen gestures, with the hel of hammer.js 
           var ID = parent.attr('id');
           var Screen = document.getElementById(ID);
           var touch = new Hammer(Screen);
           touch.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
           //if pan-ed to the left
            touch.on("swipeleft", function(ev) {
              if( settings.direction === 'horizontal' ){
                screenSlide.prev();
              }
            });
            //if pan-ed to the right
            touch.on("swiperight", function(ev) {
              if( settings.direction === 'horizontal' ){
                screenSlide.next();
              }
            });
            //if pan-ed to the top
            touch.on("swipeup", function(ev) {
              if( settings.direction === 'vertical' ){
                screenSlide.prev();
              }
            });
            //if pan-ed to the bottom
            touch.on("swipedown", function(ev) {
              if( settings.direction === 'vertical' ){
                screenSlide.next();
              }
            });
            //if pressed inside the screen pause autoplay, if enabled
            touch.on("press", function(ev) {
                clearInterval(play)
            });
            // continue with autoplay after releases
            touch.on("pressup", function(ev) {
                play = setInterval( autoplay.third, parseInt( settings.autoplaySpeed ) )
            });
           
      }//else
    }; //highlights();
})(jQuery);
