// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/Deferred","../../request"],function(f,k,l){return{invokeMethod:function(b,c,a,f,m,n){function p(a){var c;try{c=f(a)}catch(d){g(d);return}e&&e.resolve(c);b[m](c)}function g(a){e&&e.reject(a);b[n](a)}var d=null,e=null,e=new k(function(){d&&(d.cancel(),d=null)});try{var h=a?a():{};h.f="json";b.token&&(h.token=b.token);d=l({url:b.url+c,content:h,handleAs:"json"});d.then(p,g)}catch(q){g(q)}return e.promise},jsonToRest:function(b){var c={},a;for(a in b)f.isString(b[a])?c[a]=
b[a]:c[a]=JSON.stringify(b[a]);return c},throwEmptyResponse:function(){throw Error("Geoenrichment service returned empty response");}}});