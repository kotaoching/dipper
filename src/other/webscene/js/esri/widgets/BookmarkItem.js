// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","dojo/has","../kernel"],function(c,d,e,f){return c(null,{declaredClass:"esri.widgets.BookmarkItem",constructor:function(a){this.name=a.name;this.extent=a.extent},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){var a={},b=this.extent.toJSON();a.extent={spatialReference:b.spatialReference,xmax:b.xmax,xmin:b.xmin,ymax:b.ymax,ymin:b.ymin};a.name=this.name;return a}})});