// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","dojo/_base/array","../Color"],function(v,n,e,m){var q=Math.PI;return v(null,{declaredClass:"esri.renderer.Renderer",constructor:function(a){this._ipDataCache={};if(a&&!a.declaredClass){this.rotationInfo=a.rotationInfo;if(!this.rotationInfo){var b=a.rotationType,c=a.rotationExpression;if(b||c)this.rotationInfo={type:b,expression:c}}this.setRotationInfo(this.rotationInfo);this.setSizeInfo(a.sizeInfo);this.setColorInfo(this._readColorInfo(a.colorInfo));this.setOpacityInfo(this._readOpacityInfo(a.transparencyInfo));
this.setVisualVariables(this._readVariables(a.visualVariables));this.setAuthoringInfo(a.authoringInfo)}this.getSymbol=n.hitch(this,this.getSymbol)},getSymbol:function(a){},_readColorInfo:function(a){a&&(e.forEach(a.colors,function(b,c){n.isArray(b)?a.colors[c]=m.fromJSON(b):a.colors[c]=new m(b)}),e.forEach(a.stops,function(b,c){b.color&&n.isArray(b.color)?a.stops[c].color=m.fromJSON(b.color):b.color&&(a.stops[c].color=new m(b.color))}));return a},_readOpacityInfo:function(a){var b;a&&(b=n.mixin({},
a),b.transparencyValues&&(b.opacityValues=e.map(b.transparencyValues,function(a){return 1-a/100}),delete b.transparencyValues),b.stops&&(b.stops=e.map(b.stops,function(a){a=n.mixin({},a);a.opacity=1-a.transparency/100;delete a.transparency;return a})));return b},_readVariables:function(a){a&&(a=e.map(a,function(a){"colorInfo"===a.type?a=this._readColorInfo(a):"transparencyInfo"===a.type&&(a=this._readOpacityInfo(a),a.type="opacityInfo");return a},this));return a},setAuthoringInfo:function(a){this.authoringInfo=
a},setRotationInfo:function(a){if((a=this.rotationInfo="string"===typeof a?{field:a}:a)&&a.expression&&!a.field){var b=a.expression.match(this.rotationRE);b&&b[1]&&(a.field=b[1])}return this},rotationRE:/^\[([^\]]+)\]$/i,getRotationAngle:function(a){var b=this.rotationInfo,c="arithmetic"===b.type,b=b.field,d=a.attributes,g=0;b&&(n.isFunction(b)?g=b.apply(this,arguments):d&&(g=d[b]||0),g=(g+(c?-90:0))*(c?-1:1));return g},setVisualVariables:function(a){var b=this._ipDataCache;e.forEach(this.visualVariables,
function(a,d){b.hasOwnProperty(d)&&(b[d]=null)},this);this.visualVariables=a;e.forEach(a,function(a,d){"colorInfo"===a.type?b[d]=this._processColorInfo(a):"opacityInfo"===a.type?b[d]=this._processOpacityInfo(a):"sizeInfo"===a.type&&this._fixSizeInfo(a)},this);return this},getVisualVariableValues:function(a){var b=this.visualVariables,c;b&&(c=e.map(b,function(b){var c;switch(b.type){case "sizeInfo":c=this.getSize(a,{sizeInfo:b});break;case "colorInfo":c=this.getColor(a,{colorInfo:b});break;case "opacityInfo":c=
this.getOpacity(a,{opacityInfo:b})}return{variable:b,value:c}},this));return c},hasVisualVariables:function(){return!(!this.getVisualVariablesForType("sizeInfo")&&!this.getVisualVariablesForType("colorInfo")&&!this.getVisualVariablesForType("opacityInfo"))},getVisualVariablesForType:function(a){var b=this.visualVariables,c;this[a]?c=[this[a]]:b&&(c=e.filter(b,function(b){return b.type===a}))&&0===c.length&&(c=void 0);return c},setSizeInfo:function(a){this.sizeInfo=this.proportionalSymbolInfo=a;return this},
setProportionalSymbolInfo:function(a){this.setSizeInfo(a);return this},getSize:function(a,b){var c=a.attributes,d=b&&b.sizeInfo||this.sizeInfo,g=d&&d.field,f=0,e="number"===typeof a,h=e?a:null;if(g){var k=d.minSize,l=d.maxSize,m=d.minDataValue,s=d.maxDataValue,t=d.valueUnit||"unknown",p=d.valueRepresentation,f=d.scaleBy,u=d.normalizationField,r=c?parseFloat(c[u]):void 0,d=b&&b.shape;"number"!==typeof h&&(n.isFunction(g)?h=g.apply(this,arguments):c&&(h=c[g]));if(null==h||u&&!e&&(isNaN(r)||0===r))return null;
!isNaN(r)&&!e&&(h/=r);if(null!=k&&null!=l&&null!=m&&null!=s)h<=m?f=k:h>=s?f=l:(h=(h-m)/(s-m),"area"===f&&d?(k=(p="circle"===d)?q*Math.pow(k/2,2):k*k,l=p?q*Math.pow(l/2,2):l*l,l=k+h*(l-k),f=p?2*Math.sqrt(l/q):Math.sqrt(l)):f=k+h*(l-k));else if("unknown"===t)null!=k&&null!=m?(k&&m?(h/=m,f="circle"===d?2*Math.sqrt(h*Math.pow(k/2,2)):"square"===d||"diamond"===d||"image"===d?Math.sqrt(h*Math.pow(k,2)):h*k):f=h+(k||m),f=f<k?k:f,null!=l&&f>l&&(f=l)):f=h;else{c=(b&&b.resolution?b.resolution:1)*this._meterIn[t];
if("area"===p)f=Math.sqrt(h/q)/c,f*=2;else if(f=h/c,"radius"===p||"distance"===p)f*=2;null!=k&&f<k&&(f=k);null!=l&&f>l&&(f=l)}}else d&&(f=d.minSize);return f=isNaN(f)?0:f},_fixSizeInfo:function(a){if(!a.field&&Array.isArray(a.stops))a.minSize=this._computeSizeFromStops(a.stops);else{var b=a.minSize,c=a.maxSize;b&&Array.isArray(b.stops)&&(a.minSize=this._computeSizeFromStops(b.stops));c&&Array.isArray(c.stops)&&(a.maxSize=this._computeSizeFromStops(c.stops))}},_computeSizeFromStops:function(a){if(0<
a.length){var b=Infinity,c=-Infinity;a.forEach(function(a){b=Math.min(a.size,b);c=Math.max(a.size,c)});return 0.5*(b+c)}},setColorInfo:function(a){this.colorInfo=a;this._ipDataCache.colorInfo=this._processColorInfo(a);return this},_processColorInfo:function(a){a&&(e.forEach(a.colors,function(b,c){b instanceof m||(a.colors[c]=new m(b))}),e.forEach(a.stops,function(b,c){b.color&&!(b.color instanceof m)&&(a.stops[c].color=new m(b.color))}));return this._interpolateData(a)},getColor:function(a,b){var c,
d=b&&b.colorInfo;d&&"colorInfo"===d.type?(c=e.indexOf(this.visualVariables,d),d=this.visualVariables[c]):(c="colorInfo",d=this.colorInfo);return this._getColorComponent(a,d,this._ipDataCache[c])},setOpacityInfo:function(a){this.opacityInfo=a;this._ipDataCache.opacityInfo=this._processOpacityInfo(a);return this},_processOpacityInfo:function(a){return this._interpolateData(a)},getOpacity:function(a,b){var c,d=b&&b.opacityInfo;d&&"opacityInfo"===d.type?(c=e.indexOf(this.visualVariables,d),d=this.visualVariables[c]):
(c="opacityInfo",d=this.opacityInfo);return this._getColorComponent(a,d,this._ipDataCache[c],!0)},_getColorComponent:function(a,b,c,d){var g=a.attributes,f=b&&b.field,e="number"===typeof a?a:null,h;if(f){var k=b.normalizationField,l=g?parseFloat(g[k]):void 0;"number"!==typeof e&&(n.isFunction(f)?e=f.apply(this,arguments):g&&(e=g[f]));null!=e&&(k&&(!isNaN(l)&&0!==l)&&(e/=l),h=d?this._getOpacity(e,b,c):this._getColor(e,b,c))}else b&&(g=b.stops,d?(h=g&&g[0]&&g[0].opacity,null==h&&(h=b.opacityValues&&
b.opacityValues[0])):h=g&&g[0]&&g[0].color||b.colors&&b.colors[0]);return h},_interpolateData:function(a){var b;if(a&&a.field)if(a.colors||a.opacityValues){var c=(a.colors||a.opacityValues).length,d=a.minDataValue,g=(a.maxDataValue-d)/(c-1);b=[];for(a=0;a<c;a++)b[a]=d+a*g}else a.stops&&(b=e.map(a.stops,function(a){return a.value}));return b},_getOpacity:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.opacityInfo;a&&(c=a[0],d=a[1],c===d?d=this._getOpacValue(b,c):(c=this._getOpacValue(b,c),
b=this._getOpacValue(b,d),d=c+(b-c)*a[2]));return d},_getOpacValue:function(a,b){return a.opacityValues?a.opacityValues[b]:a.stops[b].opacity},_getColor:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.colorInfo;a&&(d=a[0],c=a[1],d=d===c?this._getColorObj(b,d):m.blendColors(this._getColorObj(b,d),this._getColorObj(b,c),a[2]));return d},_getColorObj:function(a,b){return a.colors?a.colors[b]:a.stops[b].color},_lookupData:function(a,b){var c;if(b){var d=0,g=b.length-1;e.some(b,function(b,c){if(a<
b)return g=c,!0;d=c;return!1});c=[d,g,(a-b[d])/(b[g]-b[d])]}return c},getRequiredFields:function(){var a=Object.create(null);this.collectRequiredFields(a);return Object.keys(a)},collectRequiredFields:function(a){var b=[this.colorInfo,this.sizeInfo,this.opacityInfo,this.rotationInfo];this.visualVariables&&(b=b.concat(this.visualVariables));b.forEach(function(b){b&&(a[b.field]=!0)})},_meterIn:{inches:39.3701,feet:3.28084,yards:1.09361,miles:6.21371E-4,"nautical-miles":5.39957E-4,millimeters:1E3,centimeters:100,
decimeters:10,meters:1,kilometers:0.0010,"decimal-degrees":180/20015077},_writeSizeInfo:function(a){if(a){a=n.mixin({},a);var b=a.legendOptions;if(b&&(a.legendOptions=n.mixin({},b),b=b.customValues))a.legendOptions.customValues=b.slice(0)}return a},_writeColorInfo:function(a){a&&(a=n.mixin({},a),a.colors&&(a.colors=e.map(a.colors,function(a){return m.toJSON(a)})),a.stops&&(a.stops=e.map(a.stops,function(a){a=n.mixin({},a);a.color&&(a.color=m.toJSON(a.color));return a})));return a},_writeOpacityInfo:function(a){var b;
a&&(b=n.mixin({},a),b.opacityValues&&(b.transparencyValues=e.map(b.opacityValues,function(a){return 100*(1-a)}),delete b.opacityValues),b.stops&&(b.stops=e.map(b.stops,function(a){a=n.mixin({},a);a.transparency=100*(1-a.opacity);delete a.opacity;return a})));return b},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){var a=this.visualVariables,b=this.rotationInfo,c=b&&b.field,d=n.clone(this.authoringInfo),
c=b&&(b.expression||c&&(n.isFunction(c)?c:"["+c+"]"));a&&(a=e.map(a,function(a){"sizeInfo"===a.type?a=this._writeSizeInfo(a):"colorInfo"===a.type?a=this._writeColorInfo(a):"opacityInfo"===a.type&&(a=this._writeOpacityInfo(a),a.type="transparencyInfo");return a},this));d&&e.forEach(d.visualVariables,function(a){"opacityInfo"===a.type&&(a.type="transparencyInfo")});return{rotationType:c&&(b.type||"geographic"),rotationExpression:c,colorInfo:this._writeColorInfo(this.colorInfo),transparencyInfo:this._writeOpacityInfo(this.opacityInfo),
sizeInfo:this._writeSizeInfo(this.sizeInfo),visualVariables:a,authoringInfo:d}}})});