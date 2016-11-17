// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/libs/hammer/hammer","../../core/declare","dojo/aspect"],function(f,l,g){var m={pan:!0,tap:{threshold:5,posThreshold:20},click:{event:"click",action:"tap",threshold:5,posThreshold:20,firesWith:["tap"]},pinch:{threshold:0.01,firesWith:["pan","rotate"]},rotate:{threshold:5,firesWith:["pan","pinch"]},hold:{time:350},swipe:{firesWith:["pan"]},"double-tap":{event:"double-tap",action:"tap",taps:2,threshold:30,posThreshold:30,firesWith:["tap"]}},h=/\s*,\s*/g;return l(null,{gestures:null,
manager:null,constructor:function(a){var b=function(a){a.preventDefault()};a.addEventListener("selectstart",b,!1);a.addEventListener("dragstart",b,!1);this.manager=new f.Manager(a);this.gestures={};g.after(this.manager,"add",this._emitAdd.bind(this.manager),!0)},on:function(a,b){var d=this.manager,c=m[a];if(h.test(a)){var e=this;a.split(h).forEach(function(a){e.on(a,b)});return{remove:function(){d.off(a.replace(h," "),b)}}}"input"!=a&&(!d.get(a)&&c)&&this.addGesture({action:c.action||a,event:c.event||
a,rules:!0===c?void 0:c});return this.gestures&&this.gestures[a]||"input"==a?("input"==a&&(a="hammer.input"),d.on(a,b),{remove:function(){d.off(a,b)}}):!1},addGesture:function(a){if(!a)return!1;var b=a.action,d=a.event,c=a.rules,e=c&&c.firesWith,k=c&&c.exclusiveTo,b="hold"==b?"Press":b&&b.slice(0,1).toUpperCase()+b.slice(1);if(f[b]&&"function"==typeof f[b])return c&&d?c.event=d:d&&(c={event:d}),b=new f[b](c),this.gestures[d||a.action]=b,this.manager&&this.manager.add(b),g.around(b,"recognizeWith",
this._checkGestureLinks.bind(b)),g.around(b,"requireFailure",this._checkGestureLinks.bind(b)),e&&(Array.isArray(e)||(e=[e]),b.recognizeWith(e)),k&&b.requireFailure(k),!0;console.warn("no such action to base the new gesture on");return!1},removeGesture:function(a){return this.manager&&this.manager.remove(a)},configureGesture:function(a,b){return this.manager&&this.manager.set(a,b)},_checkGestureLinks:function(a){var b=this.manager;a=a.bind(this);return function(b){return function(c){if(b&&b.get(c)||
Array.isArray(c))a(c);else{var e=function(f){c==f.gesture.options.event&&(a(c),b.off("add",e))};b.on("add",e)}}}(b)},_emitAdd:function(a){this.emit("add",{gesture:a})}})});