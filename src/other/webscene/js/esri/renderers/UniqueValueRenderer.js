// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/array dojo/_base/lang ../core/lang ../symbols/support/jsonUtils ./Renderer".split(" "),function(k,g,f,l,h,m){return k(m,{declaredClass:"esri.renderer.UniqueValueRenderer",constructor:function(b,a,c,e,d){this.values=[];this._symbols={};this.infos=[];b&&!b.declaredClass?(a=b,this.defaultSymbol=(b=a.defaultSymbol)&&(b.declaredClass?b:h.fromJSON(b)),this.attributeField=a.field1,this.attributeField2=a.field2,this.attributeField3=a.field3,this.fieldDelimiter=a.fieldDelimiter,
this.defaultLabel=a.defaultLabel,g.forEach(a.uniqueValueInfos,this._addValueInfo,this)):(this.defaultSymbol=b,this.attributeField=a,this.attributeField2=c,this.attributeField3=e,this.fieldDelimiter=d);this._multiple=!!this.attributeField2},attributeField:null,attributeField2:null,attributeField3:null,defaultLabel:null,defaultSymbol:null,fieldDelimiter:null,infos:null,addValue:function(b,a){var c=f.isObject(b)?b:{value:b,symbol:a};this._addValueInfo(c)},removeValue:function(b){var a=g.indexOf(this.values,
b);-1!==a&&(this.values.splice(a,1),delete this._symbols[b],this.infos.splice(a,1))},getUniqueValueInfo:function(b){var a=this.attributeField,c=b.attributes,e,d;this._multiple?(b=this.attributeField2,e=this.attributeField3,d=[],a&&d.push(c[a]),b&&d.push(c[b]),e&&d.push(c[e]),a=d.join(this.fieldDelimiter||"")):a=f.isFunction(a)?a(b):c[a];return this._symbols[a]},getSymbol:function(b){return(b=this.getUniqueValueInfo(b))&&b.symbol||this.defaultSymbol},_addValueInfo:function(b){var a=b.value;this.values.push(a);
this.infos.push(b);var c=b.symbol;c&&!c.declaredClass&&(b.symbol=h.fromJSON(c));this._symbols[a]=b},collectRequiredFields:function(b){this.inherited(arguments);[this.attributeField,this.attributeField2,this.attributeField3].forEach(function(a){a&&(b[a]=!0)})},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(b){console.warn(b.stack)}return this.toJSON()},toJSON:function(){var b=l.fixJson,a=f.mixin(this.inherited(arguments),{type:"uniqueValue",field1:this.attributeField,
field2:this.attributeField2,field3:this.attributeField3,fieldDelimiter:this.fieldDelimiter,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJSON(),defaultLabel:this.defaultLabel,uniqueValueInfos:g.map(this.infos||[],function(a){a=f.mixin({},a);a.symbol=a.symbol&&a.symbol.toJSON();a.value+="";return b(a)})});return b(a)}})});