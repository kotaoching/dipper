// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/Accessor","../core/ArrayPool","../core/HandleRegistry","dojo/_base/lang","dojo/dom-class"],function(f,h,p,e,l){var m=f.createSubclass({classMetadata:{properties:{width:{},orientation:{}}}}),d={width:{getValue:function(a){var c=a.viewSize[0];a=a.maxWidths;var b=this.values;return c<=a.xsmall?b.xsmall:c<=a.small?b.small:c<=a.medium?b.medium:c<=a.large?b.large:b.xlarge},values:{xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge"},valueToClassName:{xsmall:"esri-view-width-xsmall esri-view-width-smaller-than-small esri-view-width-smaller-than-medium esri-view-width-smaller-than-large esri-view-width-smaller-than-xlarge",
small:"esri-view-width-small esri-view-width-larger-than-xsmall esri-view-width-smaller-than-medium esri-view-width-smaller-than-large esri-view-width-smaller-than-xlarge",medium:"esri-view-width-medium esri-view-width-larger-than-xsmall esri-view-width-larger-than-small esri-view-width-smaller-than-large esri-view-width-smaller-than-xlarge",large:"esri-view-width-large esri-view-width-larger-than-xsmall esri-view-width-larger-than-small esri-view-width-larger-than-medium esri-view-width-smaller-than-xlarge",
xlarge:"esri-view-width-xlarge esri-view-width-larger-than-xsmall esri-view-width-larger-than-small esri-view-width-larger-than-medium esri-view-width-larger-than-large"}},orientation:{getValue:function(a){a=a.viewSize;var c=this.values;return a[1]>=a[0]?c.portrait:c.landscape},values:{portrait:"portrait",landscape:"landscape"},valueToClassName:{portrait:"esri-view-orientation-portrait",landscape:"esri-view-orientation-landscape"}}},n={xsmall:544,small:768,medium:992,large:1200},m=f.createSubclass({classMetadata:{properties:{active:{type:m,
readOnly:!0}}},constructor:function(){this._handles=new p},getDefaults:function(){return e.mixin(this.inherited(arguments),{maxWidths:n,active:{}})},initialize:function(){this._handles.add(this.watch("view.size",this._updateClassNames))},destroy:function(){this._removeActiveClassNames();this._handles.destroy();this.view=this._handles=null},active:null,enabled:!0,_maxWidthsSetter:function(a,c){if(a===c)return a;var b;b=(b=a)&&b.xsmall<b.small&&b.small<b.medium&&b.medium<b.large;var d;b||(d=JSON.stringify(n,
null,2),console.warn("provided max widths are not valid, using defaults:"+d));a=b?a:n;return e.mixin({},a)},view:null,_updateClassNames:function(){if(this.get("view.container")&&this.enabled){var a=this.active,c=h.get(),b=h.get(),f=!1,g,e,k;for(g in d)e=a[g],k=d[g].getValue({viewSize:this.get("view.size"),maxWidths:this.maxWidths}),e!==k&&(f=!0,a[g]=k,b.push(d[g].valueToClassName[e]),c.push(d[g].valueToClassName[k]));f&&this._applyClassNameChanges(c,b);h.put(c);h.put(b)}},_applyClassNameChanges:function(a,
c){var b=this.get("view.container");l.remove(b,c);l.add(b,a)},_removeActiveClassNames:function(){var a=this.get("view.container"),c;a&&(c=this.active,c.keys().forEach(function(b){l.remove(a,d[b].valueToClassName[c[b]])}))}});return f.createSubclass({classMetadata:{properties:{cssTraits:{type:m}}},getDefaults:function(){return e.mixin(this.inherited(arguments),{cssTraits:{}})},destroy:function(){this.cssTraits=null},cssTraits:null,_cssTraitsSetter:function(a,c){if(a===c)return a;c&&c.destroy();a&&
(a.view=this);return a}})});