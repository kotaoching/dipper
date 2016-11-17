// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../core/declare dojo/_base/lang dojo/io-query ../../core/JSONSupport ../../core/urlUtils ../support/TileInfo ../support/TileMap".split(" "),function(e,f,g,h,k,l,m){return e(h,{declaredClass:"esri.layers.mixins.ArcGISCachedService",classMetadata:{computed:{supportsBlankTile:["version"]},reader:{add:["tileMap"],exclude:["minScale","maxScale"]}},resampling:!0,resamplingTolerance:3,supportsBlankTile:!1,_supportsBlankTileGetter:function(){return 10.2<=this.version},tileInfo:null,_tileInfoReader:function(a,
b){var d=b.minScale?b.minScale:Infinity,c=b.maxScale?b.maxScale:-Infinity;return a?(a.lods=a.lods.filter(function(a){return a.scale<=d&&a.scale>=c}),l.fromJSON(a)):null},tileMap:null,_tileMapReader:function(a,b){return b.capabilities&&-1<b.capabilities.indexOf("Tilemap")?new m({layer:this}):null},refreshTimestamp:null,refresh:function(){this.refreshTimestamp=Date.now();this.inherited(arguments)},getTileUrl:function(a,b,d){var c=f.mixin({},this.parsedUrl.query,{token:this.token,blankTile:!this.tileMap&&
this.resampling&&this.supportsBlankTile?!1:null,_ts:this.refreshTimestamp});a=this.parsedUrl.path+"/tile/"+a+"/"+b+"/"+d;c=g.objectToQuery(c);return k.addProxy(a+(c?"?"+c:""))}})});