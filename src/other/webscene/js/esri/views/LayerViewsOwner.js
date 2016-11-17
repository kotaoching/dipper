// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","dojo/_base/array","../core/Collection"],function(k,g,f,l){var e=function(a){return a.hasOwnProperty("layer")?a.view:a},h=function(a){return a.hasOwnProperty("layer")?a.layer?a.layer.layers:null:a.map?a.map.layers:null};return k(null,{classMetadata:{properties:{layerViews:{}}},constructor:function(){this._lvoHandles=[];this._lyrHdl=null;this._recreateHdler=g.hitch(this,this._recreateHdler);this._lyrColHandler=g.hitch(this,this._lyrColHandler);this.layerViews=
new l},destroy:function(){this.destroyLayerViews();this._lvoHandles=null;this._lyrHdl&&(this._lyrHdl.remove(),this._lyrHdl=null)},destroyLayerViews:function(){f.forEach(this._lvoHandles,function(a){a.remove()});var a=e(this);this.layerViews.drain(function(b){a.factory.dispose(b)},this)},initialize:function(){var a=this._lvoHandles;this.hasOwnProperty("layer")?(a.push(this.watch("view",this._recreateHdler)),a.push(this.watch("layer",this._recreateHdler))):a.push(this.watch("ready",this._recreateHdler));
this._recreateHdler()},_recreateHdler:function(a){a=e(this);var b=h(this);this._lyrHdl&&(this._lyrHdl.remove(),this._lyrHdl=null);this.layerViews.map(function(a){return a.layer}).drain(this._lyrRemoved,this);a&&(b&&a.ready)&&(b.forEach(this._lyrAdded,this),this._lyrHdl=b.on("change",this._lyrColHandler))},_lyrAdded:function(a){var b=e(this);b.factory.create(a).then(g.hitch(this,function(c){var d=h(this);b===e(this)&&(d&&-1<d.indexOf(a))&&(d=this._getLyrViewIdxCandidate(a),c.parent=this,this.layerViews.addItem(c,
d),this.emit("layer-view-add",{layer:a,layerView:c,index:d}))}))},_lyrRemoved:function(a){var b=e(this),c=this.layerViews.findIndex(function(b){return b.layer===a}),d=this.layerViews.getItemAt(c);this.layerViews.removeItemAt(c);-1<c&&(b.factory.dispose(d),this.emit("layer-view-remove",{layer:a,layerView:d,index:c}))},_lyrMoved:function(a,b){var c=this.layerViews.find(function(b){return b.layer===a});this.layerViews.moveItem(c,b);this.emit("layer-view-reorder",{layer:a,layerView:c,index:b})},_getLyrViewIdxCandidate:function(a){var b=
this.layerViews,c=h(this),d=c.indexOf(a),d=b.findIndex(function(a){return c.indexOf(a.layer)>d});return-1<d?d:b.length},_lyrColHandler:function(a){f.forEach(a.added,function(a){this._lyrAdded(a)},this);f.forEach(a.removed,function(a){this._lyrRemoved(a)},this);f.forEach(a.moved,function(b){this._lyrMoved(b,a.target.indexOf(b))},this)}})});