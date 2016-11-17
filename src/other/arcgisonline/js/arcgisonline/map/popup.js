// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/map/popup",["dijit","dojo","dojox","dojo/require!arcgisonline/map/main,arcgisonline/map/dijit/StructuredPopupWidget,esri/tasks/RelationshipQuery,dojo/promise/all,dijit/DropDownMenu,dijit/PopupMenuItem,dijit/MenuItem,dojo/aspect"],function(l,e,u){e.provide("arcgisonline.map.popup");e.require("arcgisonline.map.main");e.require("arcgisonline.map.dijit.StructuredPopupWidget");e.require("esri.tasks.RelationshipQuery");e.require("dojo.promise.all");e.require("dijit.DropDownMenu");e.require("dijit.PopupMenuItem");
e.require("dijit.MenuItem");e.require("dojo.aspect");arcgisonline.map.popup={onSelectionChangeHandler:null,feature:null,infoWindowHideHandler:null,footprintGraphic:null,onInfoWindowShowHandle:null,onClickEditLinkHandle:null,addEditLink:function(a,d){var c=e.query(".actionList",arcgisonline.map.main.map.infoWindow.domNode)[0],b=e.query(".zoomTo",c);b&&b.length&&e.style(b[0],"whiteSpace","nowrap");b=e.byId("popupEditLink");b||(e.create("span",{innerHTML:" "},c),c=e.create("span",{id:"popupEditLink",
"class":"action",style:"white-space: nowrap"},c),9>e.isIE&&e.create("br",null,c),b=e.create("a",{innerHTML:esri.i18nBundle.common.edit,href:"javascript:void(0);"},c));arcgisonline.map.popup.onClickEditLinkHandle&&(e.disconnect(arcgisonline.map.popup.onClickEditLinkHandle),arcgisonline.map.popup.onClickEditLinkHandle=null);arcgisonline.map.popup.onClickEditLinkHandle=e.connect(b,"onclick",function(c){c.preventDefault();arcgisonline.map.leftPanel.openLeftEditPanel(null,{feature:a,mapPoint:d})})},removeEditLink:function(){var a=
e.byId("popupEditLink");a&&e.destroy(a)},addAddToMapLink:function(a,d){var c=a.attributes.type;arcgisonline.map.popup.infoWindowHideHandler&&e.disconnect(arcgisonline.map.popup.infoWindowHideHandler);arcgisonline.map.popup.footprintGraphic&&(arcgisonline.map.main.map.graphics.remove(arcgisonline.map.popup.footprintGraphic),arcgisonline.map.popup.footprintGraphic=null);if(a.attributes.xmin&&a.attributes.ymin&&a.attributes.xmax&&a.attributes.ymax){var b=new esri.geometry.Extent(a.attributes.xmin,a.attributes.ymin,
a.attributes.xmax,a.attributes.ymax,a.getLayer().fullExtent.spatialReference),h=new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_DASH,new e.Color([0,0,0]),1),new e.Color([0,0,0,0.2]));arcgisonline.map.popup.footprintGraphic=new esri.Graphic(b,h);arcgisonline.map.main.map.graphics.add(arcgisonline.map.popup.footprintGraphic);arcgisonline.map.popup.infoWindowHideHandler=e.connect(arcgisonline.map.main.map.infoWindow,
"onHide",e.hitch(this,function(){arcgisonline.map.popup.footprintGraphic&&(arcgisonline.map.main.map.graphics.remove(arcgisonline.map.popup.footprintGraphic),arcgisonline.map.popup.footprintGraphic=null);e.disconnect(arcgisonline.map.popup.infoWindowHideHandler)}))}var b=function(){var c=a.attributes.link;c&&(arcgisonline.map.save_open.addServiceByUrl(c,null),arcgisonline.map.main.map.infoWindow.hide())},h=function(){var c=a.attributes.link;c&&(arcgisonline.map.save_open.switchBaseMapByUrl(c),arcgisonline.map.main.map.infoWindow.hide())},
f=e.query(".actionList",arcgisonline.map.main.map.infoWindow.domNode)[0],g=e.query(".zoomTo",f);g&&g.length&&e.style(g[0],"whiteSpace","nowrap");g=e.byId("addToMap");if(!g&&(e.create("span",{innerHTML:" "},f),g=e.create("span",{id:"addToMap","class":"action",style:"white-space: nowrap"},f),9>e.isIE&&e.create("br",null,g),f=e.create("a",{innerHTML:esri.i18nBundle.arcGISOnlineServices.addToMap,alt:esri.i18nBundle.arcGISOnlineServices.addToMap,title:esri.i18nBundle.arcGISOnlineServices.addToMap,"class":"esriItemLinks",
href:"JavaScript:void(0);",onclick:e.hitch(this,b)},g),"MapServer"==c||"ImageServer"==c))c=e.create("div",{innerHTML:"","class":"dijitReset dijitInline esriArrows",title:esri.i18nBundle.siteHeader.moreOptions,alt:esri.i18nBundle.siteHeader.moreOptions,style:{marginLeft:"5px",cursor:"pointer"}},g),new arcgisonline.sharing.dijit.TextMenu({triggerNode:c,labelNode:f,textMenuItems:[{label:esri.i18nBundle.arcGISOnlineServices.addToMap,onClick:e.hitch(this,b)},{label:esri.i18nBundle.arcGISOnlineServices.useAsBasemap,
onClick:e.hitch(this,h)}]})},removeAddToMapLink:function(){arcgisonline.map.popup.footprintGraphic&&(arcgisonline.map.main.map.graphics.remove(arcgisonline.map.popup.footprintGraphic),arcgisonline.map.popup.footprintGraphic=null);arcgisonline.map.popup.infoWindowHideHandler&&e.disconnect(arcgisonline.map.popup.infoWindowHideHandler);arcgisonline.map.popup.infoWindowZoomToHandler&&e.disconnect(arcgisonline.map.popup.infoWindowZoomToHandler);var a=e.byId("addToMap");a||e.destroy(a)},addDirectionsLink:function(a,
d){if(arcgisonline.map.role.canShowDirections()){arcgisonline.map.popup.removeDirectionsLink();if(!a.getLayer().map){var c=arcgisonline.map.main.map.popupManager.getMapLayer(a);if(c){if(!arcgisonline.map.main.getParameterList(c))return}else return}if((c=arcgisonline.sharing.util.getUser())&&c.accountId){var c=e.query(".actionList",arcgisonline.map.main.map.infoWindow.domNode)[0],b=e.query(".zoomTo",c);b&&b.length&&e.style(b[0],"whiteSpace","nowrap");b=e.byId("popupDirectionsLink");b||(e.create("span",
{innerHTML:" "},c),c=e.create("span",{id:"popupDirectionsLink","class":"action directions",style:"white-space: nowrap"},c),9>e.isIE&&e.create("br",null,c),b=e.create("a",{innerHTML:esri.i18nBundle.viewer.popup.directions,href:"javascript:void(0);"},c),arcgisonline.map.popup.directionsLinkHandler=e.connect(b,"onclick",e.hitch(this,function(a,c,b){b.preventDefault();(b=a.geometry)?"point"!==b.type&&(b=new esri.geometry.Point(c.x,c.y,a.geometry.spatialReference)):b=new esri.geometry.Point(c.x,c.y,c.spatialReference);
c=a.getLayer();var e=c.name;if(!c.map){var d=arcgisonline.map.main.map.popupManager.getMapLayer(a);d&&(d=arcgisonline.map.main.getParameterList(d),"mapNotes"===d.type&&(e=d.title))}var d=arcgisonline.map.main.getDirectionsDisplayField(c),d=a.attributes[d],q="";c.objectIdField&&esri.isDefined(a.attributes[c.objectIdField])&&(q=a.attributes[c.objectIdField]);a=new esri.Graphic(b,null,{layerName:e,objectIdInLayer:q,displayName:d});arcgisonline.map.leftPanel.openLeftDirectionsPanel(null,{feature:a})},
a,d)))}}},removeDirectionsLink:function(){arcgisonline.map.popup.directionsLinkHandler&&(e.disconnect(arcgisonline.map.popup.directionsLinkHandler),arcgisonline.map.popup.directionsLinkHandler=null);var a=e.byId("popupDirectionsLink");a&&e.destroy(a)},setupPopupHandler:function(){!arcgisonline.map.popup.onSelectionChangeHandler&&arcgisonline.map.main.map&&!arcgisonline.map.edit.editActivated&&(arcgisonline.map.main.map.setInfoWindowOnClick(!0),arcgisonline.map.popup.onSelectionChangeHandler=e.connect(arcgisonline.map.main.map.infoWindow,
"onSelectionChange",e.hitch(arcgisonline.map.popup,"onPopupSelectionChange")))},disablePopupHandler:function(){arcgisonline.map.popup.onSelectionChangeHandler&&(arcgisonline.map.main.map.infoWindow.clearFeatures(),arcgisonline.map.main.map.infoWindow.hide(),arcgisonline.map.main.map.setInfoWindowOnClick(!1),e.disconnect(arcgisonline.map.popup.onSelectionChangeHandler),arcgisonline.map.popup.onSelectionChangeHandler=null)},onPopupSelectionChange:function(){arcgisonline.map.geocode.removeAddToLayerLink();
var a=arcgisonline.map.main.map.infoWindow.getSelectedFeature();if(a){var d=function(a){var b=arcgisonline.map.main.map.infoWindow.location,d=a.getLayer(),f,g=!0;(f=arcgisonline.sharing.util.getUser())&&(f.accountId&&esriGeowConfig.self.helperServices.route&&esriGeowConfig.self.helperServices.route.url)&&(d?arcgisonline.map.popup.addDirectionsLink(a,b):arcgisonline.map.popup.removeDirectionsLink());d&&d.isEditable&&d.isEditable()?((f=arcgisonline.sharing.util.getUser())&&arcgisonline.sharing.util.isHostedService(d.url),
f=d.getEditCapabilities({feature:a}),d.mode!==esri.layers.FeatureLayer.MODE_SELECTION&&(f.canUpdate||f.canDelete)?arcgisonline.map.featColl.isFeatureCollectionLayer(d)||d instanceof esri.layers.CSVLayer?arcgisonline.map.role.isAllowed("tool_edit_featCol")&&arcgisonline.map.role.isAllowed("tool_edit")?arcgisonline.map.popup.addEditLink(a,b):arcgisonline.map.mapNotes.isMapNotesFeatColl(d.toJson())&&arcgisonline.map.role.isAllowed("tool_edit_mapNotes")?arcgisonline.map.popup.addEditLink(a,b):arcgisonline.map.popup.removeEditLink():
arcgisonline.map.role.isAllowed("tool_edit")?arcgisonline.map.popup.addEditLink(a,b):arcgisonline.map.popup.removeEditLink():arcgisonline.map.popup.removeEditLink()):arcgisonline.map.popup.removeEditLink();d&&d.__isFootprintLayer&&a.attributes&&a.attributes.link&&("MapServer"==a.attributes.type||"ImageServer"==a.attributes.type||"FeatureServer"==a.attributes.type)?arcgisonline.map.popup.addAddToMapLink(a,b):arcgisonline.map.popup.removeAddToMapLink();d&&d.relationships&&0<d.relationships.length?((f=
a.getInfoTemplate())&&f.info&&(g=!esri.isDefined(f.info.relatedRecordsInfo)||!esri.isDefined(f.info.relatedRecordsInfo.showRelatedRecords)||f.info.relatedRecordsInfo&&f.info.relatedRecordsInfo.showRelatedRecords),f=e.some(d.relationships,function(a){a=d.url.replace(/[0-9]+$/,a.relatedTableId);selMapTable=arcgisonline.map.popup._findRelatedTable(a).selMapTable;return esri.isDefined(selMapTable)},this),arcgisonline.map.popup.removeRelatedRecordsLink(),g&&f&&arcgisonline.map.popup.addRelatedRecordsLink({feature:a,
mapPoint:b,relations:d.relationships})):arcgisonline.map.popup.removeRelatedRecordsLink()};arcgisonline.map.main.map.infoWindow.isShowing?d(a):(arcgisonline.map.popup.onInfoWindowShowHandle&&(e.disconnect(arcgisonline.map.popup.onInfoWindowShowHandle),arcgisonline.map.popup.onInfoWindowShowHandle=null),arcgisonline.map.popup.onInfoWindowShowHandle=e.connect(arcgisonline.map.main.map.infoWindow,"onShow",e.hitch(this,function(a){e.disconnect(arcgisonline.map.popup.onInfoWindowShowHandle);arcgisonline.map.popup.onInfoWindowShowHandle=
null;d(a)},a)))}else arcgisonline.map.popup.removeEditLink(),arcgisonline.map.popup.removeAddToMapLink(),arcgisonline.map.popup.removeDirectionsLink();a=e.query(".esri_matchButton");a.length&&e.addClass(a[0],"calcite orange");a=e.query(".esri_deleteButton");a.length&&e.addClass(a[0],"calcite")},addPopupLayers:function(){e.forEach(arcgisonline.map.main.mapLayers,function(a){if(a&&a.layer&&!a.layer.infoTemplates)if(a.itemLayers&&a.itemLayers.length){var d=function(){arcgisonline.map.main.hasDynamicLayers(a)?
e.forEach(a.itemLayers,function(c){arcgisonline.map.popup.addPopupLayer(a,c.id)}):e.forEach(a.layer.layerInfos,function(c){arcgisonline.map.popup.addPopupLayer(a,c.id)})};a.layer&&a.layer.capabilities?arcgisonline.map.main.getLayersInfo(a,e.hitch(this,d)):d()}else a.popupInfo&&arcgisonline.map.popup._isImageServiceLayer(a.layer)&&arcgisonline.map.popup.addPopupLayer(a)})},addPopupLayer:function(a,d){if(a)if(arcgisonline.map.featColl.isFeatureCollection(a)||a.layer instanceof esri.layers.CSVLayer)if(a.layers)for(var c=
0;c<a.layers.length;c++){if(c===d){var b=a.layers[c].__popupInfo;b&&a.layers[c].setInfoTemplate(new esri.dijit.PopupTemplate(b))}}else(b=a.popupInfo)&&a.layer.setInfoTemplate(new esri.dijit.PopupTemplate(b));else if(a.layer instanceof esri.layers.GeoRSSLayer){var e=a.layer.getFeatureLayers()[d];(b=e.__popupInfo)&&e.setInfoTemplate(new esri.dijit.PopupTemplate(b))}else if(a.layer instanceof esri.layers.StreamLayer)a.popupInfo&&a.layer.setInfoTemplate(new esri.dijit.PopupTemplate(a.popupInfo));else if(!d&&
0!==d&&arcgisonline.map.popup._isImageServiceLayer(a.layer))a.popupInfo&&a.layer.setInfoTemplate(new esri.dijit.PopupTemplate(a.popupInfo));else if(!d&&0!==d&&a.layer instanceof esri.layers.FeatureLayer)a.popupInfo&&a.layer.setInfoTemplate(new esri.dijit.PopupTemplate(a.popupInfo)),arcgisonline.map.main.updateLayerScaleInfo(a,a.layer);else{var f=b=null,g=null,e=d,n=!1;if(a.itemLayers&&a.itemLayers.length)for(c=0;c<a.itemLayers.length;c++)if(a.itemLayers[c].id===d){arcgisonline.map.main.hasDynamicLayers(a)&&
(e=a.itemLayers[c].layerDefinition.source.mapLayerId);b=a.itemLayers[c].popupInfo;f=a.itemLayers[c].layerUrl;g=a.itemLayers[c]._layerInfo;b&&!g&&(n=!0,arcgisonline.map.main.getLayerInfo(a,e).then(function(c){g=c;a.layer.infoTemplates=a.layer.infoTemplates||{};a.layer.infoTemplates[d]={infoTemplate:new esri.dijit.PopupTemplate(b),layerUrl:f,resourceInfo:g}}));break}if(!b&&(c=arcgisonline.map.main.getFlForMSL(a,d))&&c.popupInfo)b=c.popupInfo,f=c.url,g=c.serviceInfo;if(b&&!g&&a.layersInfo&&a.layersInfo.layers)for(c=
0;c<a.layersInfo.layers.length;c++)if(a.layersInfo.layers[c].id==e){g=a.layersInfo.layers[c];g||(n=!0,arcgisonline.map.main.getLayerInfo(a,e).then(function(c){g=c;a.layer.infoTemplates=a.layer.infoTemplates||{};a.layer.infoTemplates[d]={infoTemplate:new esri.dijit.PopupTemplate(b),layerUrl:f,resourceInfo:g}}));break}b&&!n&&(a.layer.infoTemplates=a.layer.infoTemplates||{},a.layer.infoTemplates[d]={infoTemplate:new esri.dijit.PopupTemplate(b),layerUrl:f,resourceInfo:g})}},removePopupLayers:function(a){a&&
(a.layer&&a.layer.infoTemplates)&&e.forEach(a.layer.layerInfos,function(d){a.layer.infoTemplates[d.id]&&(arcgisonline.map.main.map.infoWindow.clearFeatures(),delete a.layer.infoTemplates[d.id])})},removePopup:function(a,d){arcgisonline.map.main.map.infoWindow.hide();if(arcgisonline.map.featColl.isFeatureCollection(a)||a.layer instanceof esri.layers.CSVLayer)if(a.layers||a.tables){var c=a.layers;a.tables&&(c=c.concat(a.tables));for(var b=0;b<c.length;b++)c[b].id===d&&(c[b].setInfoTemplate(null),c[b].__popupInfo&&
delete c[b].__popupInfo)}else a.layer.setInfoTemplate(null),a.popupInfo&&delete a.popupInfo,a.layer.__popupInfo&&delete a.layer.__popupInfo;else if(a.layer instanceof esri.layers.GeoRSSLayer)d=d||0,c=a.layer.getFeatureLayers(),c[d].setInfoTemplate(null),c[d].__popupInfo&&delete c[d].__popupInfo;else if(!d&&0!==d&&(a.layer instanceof esri.layers.FeatureLayer||arcgisonline.map.popup._isImageServiceLayer(a.layer)))a.layer.setInfoTemplate(null),delete a.popupInfo;else if(a&&(a.layer&&a.layer.infoTemplates&&
a.itemLayers&&a.itemLayers.length)&&a.layer.infoTemplates[d]){arcgisonline.map.main.map.infoWindow.clearFeatures();delete a.layer.infoTemplates[d];for(b=0;b<a.itemLayers.length;b++)if(a.itemLayers[b].id===d){delete a.itemLayers[b].popupInfo;delete a.itemLayers[b].layerUrl;delete a.itemLayers[b].layerItemId;delete a.itemLayers[b]._layerInfo;e.json.stringify(a.itemLayers[b])===e.json.stringify({id:d})&&a.itemLayers.splice(b,1);break}}},hasPopup:function(a,d){if(arcgisonline.map.featColl.isFeatureCollection(a)||
a.layer instanceof esri.layers.CSVLayer)if(a.layers||a.tables){var c=a.layers;a.tables&&(c=c.concat(a.tables));for(var b=0;b<c.length;b++)if((c[b].id===d||c[b].id===a.id+"_"+d)&&(c[b].__popupInfo||c[b].infoTemplate))return!0}else{if(a.layer.infoTemplate)return!0}else if(a.layer instanceof esri.layers.GeoRSSLayer){if(esri.isDefined(d)){var c=a.layer.getFeatureLayers(),h=!1;e.forEach(c,function(a,c){c==d&&a.infoTemplate&&(h=!0)});return h}if(a.layer.getFeatureLayers()[0].infoTemplate)return!0}else if(esri.isDefined(d))if(c=
arcgisonline.map.main.getFlForMSL(a,d)){if(c.popupInfo)return!0}else{if(a.itemLayers&&a.itemLayers.length)for(b=0;b<a.itemLayers.length;b++)if(a.itemLayers[b].id===d){if(a.itemLayers[b].popupInfo)return!0;break}}else if((arcgisonline.map.popup._isImageServiceLayer(a.layer)||a.layer instanceof esri.layers.FeatureLayer)&&a.popupInfo)return!0;return!1},getPopupInfo:function(a,d){if(arcgisonline.map.featColl.isFeatureCollection(a)||a.layer instanceof esri.layers.CSVLayer)if(a.layers||a.tables){var c=
a.layers;a.tables&&(c=c.concat(a.tables));for(var b=0;b<c.length;b++)if((b===d||c[b].id===d)&&c[b].infoTemplate)return c[b].__popupInfo}else{if(a.layer.infoTemplate)return a.popupInfo}else if(a.layer instanceof esri.layers.GeoRSSLayer){c=a.layer.getFeatureLayers();for(b=0;b<c.length;b++){var e=c[b];if(e.id===d&&e.infoTemplate)return e.__popupInfo}}else if(!d&&0!==d)if(arcgisonline.map.popup._isImageServiceLayer(a.layer)||a.layer instanceof esri.layers.FeatureLayer){if(a.popupInfo)return a.popupInfo}else if(b=
arcgisonline.map.main.getFlForMSL(a,d)){if(b.popupInfo)return b.popupInfo}else{if(a.itemLayers&&a.itemLayers.length)for(b=0;b<a.itemLayers.length;b++)if(a.itemLayers[b].id===d){if(a.itemLayers[b].popupInfo)return a.itemLayers[b].popupInfo;break}}else if((d||0===d)&&a.itemLayers&&a.itemLayers.length)for(b=0;b<a.itemLayers.length;b++)if(a.itemLayers[b].id===d){if(a.itemLayers[b].popupInfo)return a.itemLayers[b].popupInfo;break}return null},getDefaultPopupInfo:function(a,d,c){d=a.displayField;d=a.name+
(d&&d.length?": {"+d+"}":"");var b=a.fields,h=!1,f=!1,g=!1;arcgisonline.map.popup._isImageServiceLayer(c)&&(b=c.getCustomRasterFields({rasterAttributeTableFieldPrefix:"Raster."}),g=0>e.indexOf(["F32","F64"],c.pixelType),c&&c.capabilities&&(f=(h=c.capabilities&&-1<c.capabilities.toLowerCase().indexOf("catalog")||c.fields&&0<c.fields.length)&&("esriImageServiceDataTypeVector-UV"===c.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===c.serviceDataType)));var n={esriFieldTypeDouble:1,esriFieldTypeSingle:1},
t={esriFieldTypeInteger:1,esriFieldTypeSmallInteger:1},q={esriFieldTypeDate:1},k=",";a.editFieldsInfo&&(a.editFieldsInfo.creatorField&&(k+=a.editFieldsInfo.creatorField+","),a.editFieldsInfo.creationDateField&&(k+=a.editFieldsInfo.creationDateField+","),a.editFieldsInfo.editorField&&(k+=a.editFieldsInfo.editorField+","),a.editFieldsInfo.editDateField&&(k+=a.editFieldsInfo.editDateField+","),k=k.toLowerCase());b=e.map(b,e.hitch(this,function(b,d){var l="esriFieldTypeOID"!==b.type&&"esriFieldTypeGlobalID"!==
b.type&&"esriFieldTypeGeometry"!==b.type,r=null,s=b.editable&&"esriFieldTypeOID"!==b.type&&"esriFieldTypeGlobalID"!==b.type;if(l){var m=b.name.toLowerCase(),p=k+"stretched value,fnode_,tnode_,lpoly_,rpoly_,poly_,subclass,subclass_,rings_ok,rings_nok,";h&&(p+="raster.servicepixelvalue,",f&&(p+="raster.magnitude,raster.direction,"));if(-1<p.indexOf(","+m+",")||-1<m.indexOf("shape")||-1<m.indexOf("perimeter")||-1<m.indexOf("objectid")||-1<m.indexOf("raster.servicepixelvalue.")||m.indexOf("_i")==m.length-
2)l=!1;if(b.type in t)r={places:0,digitSeparator:!0};else if(b.type in n)r={places:g&&(-1<m.indexOf("raster.servicepixelvalue")||-1<m.indexOf("raster.itempixelvalue"))?0:2,digitSeparator:!0};else if(b.type in q&&(10<=a.currentVersion||c&&10<=c.version))r={dateFormat:"longMonthDayYear"}}s=s?-1===k.indexOf(","+b.name.toLowerCase()+","):s;return e.mixin({},{fieldName:b.name,label:b.alias,isEditable:s,tooltip:"",visible:l,format:r,stringFieldOption:"textbox"})}));d={title:d,fieldInfos:b,description:null,
showAttachments:!0,mediaInfos:[]};this._isImageServiceLayer(c)&&(d.layerOptions={},d.layerOptions.showNoDataRecords=!0);return d},updateLayerWithPopupFieldAlias:function(a,d,c){var b=arcgisonline.map.popup.getPopupInfo(a,c);!b||!b.fieldInfos?e.forEach(d.fields,e.hitch(this,function(b,c){var d;a:{if(a.serviceInfo)for(d=0;d<a.serviceInfo.fields.length;d++){var e=a.serviceInfo.fields[d];if(e.name==b.name){d=e.alias;break a}}d=null}b.alias=d||b.alias}),this):e.forEach(d.fields,e.hitch(this,function(a,
c){var d;a:{for(d=0;d<b.fieldInfos.length;d++){var e=b.fieldInfos[d];if(e.fieldName==a.name){d=e.label;break a}}d=null}a.alias=d||a.alias}),this)},_extentFromPoint:function(a){var d=arcgisonline.map.main.map.toScreen(a);a=new esri.geometry.Point(d.x-5,d.y+5);d=new esri.geometry.Point(d.x+5,d.y-5);a=arcgisonline.map.main.map.toMap(a);d=arcgisonline.map.main.map.toMap(d);return new esri.geometry.Extent(a.x,a.y,d.x,d.y,arcgisonline.map.main.map.spatialReference)},_calculateClickTolerance:function(a){var d=
6;e.forEach(a,function(a){(a=a.layer.renderer)&&"esri.renderer.SimpleRenderer"===a.declaredClass?(a=a.symbol,a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset))),a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))):a&&("esri.renderer.UniqueValueRenderer"===a.declaredClass||"esri.renderer.ClassBreaksRenderer"===a.declaredClass)&&e.forEach(a.infos,function(a){a=a.symbol;a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset)));a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))})});return d},toc_enablePopup:function(a,d){if(arcgisonline.map.featColl.isFeatureCollection(a)||
a.layer instanceof esri.layers.CSVLayer)if(a.layers||a.tables){var c=a.layers;a.tables&&(c=c.concat(a.tables));c=c[d];c.__popupInfo=arcgisonline.map.featColl.generateDefaultPopupInfo(c.toJson());c.setInfoTemplate(new esri.dijit.PopupTemplate(c.__popupInfo));a.popupChanged=!0;delete c.__disablePopup}else a.layer&&(a.popupInfo=arcgisonline.map.featColl.generateDefaultPopupInfo(a.layer.toJson()),a.layer.setInfoTemplate(new esri.dijit.PopupTemplate(a.popupInfo)),a.popupChanged=!0,delete a.disablePopup);
else if(a.layer instanceof esri.layers.GeoRSSLayer)c=a.layer.getFeatureLayers(),e.forEach(c,function(b,c){c===d&&(b.__popupInfo=arcgisonline.map.featColl.generateDefaultPopupInfo(b.toJson()),b.setInfoTemplate(new esri.dijit.PopupTemplate(b.__popupInfo)),a.popupChanged=!0,delete b.__disablePopup)},this);else if(a.layer instanceof esri.layers.StreamLayer)a.popupInfo=arcgisonline.map.popup.getDefaultPopupInfo(a.serviceInfo,a.layer.isEditable?a.layer.isEditable():!1,a.layer),a.layer.setInfoTemplate(new esri.dijit.PopupTemplate(a.popupInfo)),
a.popupChanged=!0,delete a.disablePopup;else if(a.layer instanceof esri.layers.FeatureLayer||arcgisonline.map.popup._isImageServiceLayer(a.layer))a.popupInfo=arcgisonline.map.popup.getDefaultPopupInfo(a.serviceInfo,a.layer.isEditable?a.layer.isEditable():!1,a.layer),arcgisonline.map.popup.addPopupLayer(a,null),a.popupChanged=!0,delete a.disablePopup;else if(a.queryServiceUrl){var b=a.layer.layerInfos[d],h=function(c,d){if(a.itemLayers){for(var e=!1,f=0;f<a.itemLayers.length;f++)if(a.itemLayers[f].id===
b.id){a.itemLayers[f].layerUrl=a.queryServiceUrl+"/"+b.id;a.itemLayers[f].layerItemId=a.queryServiceItemId;a.itemLayers[f].popupInfo=c;a.itemLayers[f]._layerInfo=d;e=!0;break}e||a.itemLayers.push({id:b.id,layerUrl:a.queryServiceUrl+"/"+b.id,layerItemId:a.queryServiceItemId,popupInfo:c,_layerInfo:d})}else a.itemLayers=[{id:b.id,layerUrl:a.queryServiceUrl+"/"+b.id,layerItemId:a.queryServiceItemId,popupInfo:c,_layerInfo:d}];arcgisonline.map.popup.addPopupLayer(a,b.id);a.popupChanged=!0},f=function(){arcgisonline.map.main.getLayerInfoForQuery(a,
b.id,null).then(function(a){var b=!1,c=a.capabilities?a.capabilities.toLowerCase():"";if(-1<c.indexOf("create")||-1<c.indexOf("edit")||-1<c.indexOf("delete")||-1<c.indexOf("update"))b=!0;b=arcgisonline.map.popup.getDefaultPopupInfo(a,b);h(b,a)})};a.queryServiceItemId?arcgisonline.sharing.util.request({url:esriGeowConfig.restBaseUrl+"content/items/"+a.queryServiceItemId+"/data"},{disableIdentityLookup:!0}).then(e.hitch(this,function(a){if(a&&a.layers){for(var c=!1,d=0;d<a.layers.length;d++)if(b.id==
a.layers[d].id){a.layers[d].popupInfo&&(c=!0,h(a.layers[d].popupInfo));break}c||f()}else f()}),e.hitch(this,function(a){f()})):f()}else if(a.layer instanceof esri.layers.ArcGISTiledMapServiceLayer&&(!a.layer.capabilities||-1===a.layer.capabilities.toLowerCase().indexOf("query"))){var b=a.layer.layerInfos[d],c=(new l.Dialog).placeAt(document.body),g=new arcgisonline.sharing.dijit.dialog.QueryLayerDlg({dialog:c});c.set({title:esri.i18nBundle.QueryLayerDlg.title,content:g});c.show();g.start(a,b.id)}else b=
arcgisonline.map.main.hasDynamicLayers(a)?a.layer.dynamicLayerInfos[d]:a.layer.layerInfos[d],arcgisonline.map.main.getLayerInfoForQuery(a,b.id).then(function(c){c=arcgisonline.map.popup.getDefaultPopupInfo(c,!1,a.layer);if(a.itemLayers){for(var d=!1,e=0;e<a.itemLayers.length;e++)if(a.itemLayers[e].id===b.id){a.itemLayers[e].popupInfo=c;d=!0;break}d||a.itemLayers.push({id:b.id,popupInfo:c})}else a.itemLayers=[{id:b.id,popupInfo:c}];arcgisonline.map.popup.addPopupLayer(a,b.id);a.popupChanged=!0});arcgisonline.map.main.markMapAsChanged("enablePopup");
e.publish("_onRendererUpdate",[])},toc_removePopup:function(a,d){if(arcgisonline.map.featColl.isFeatureCollection(a)||a.layer instanceof esri.layers.CSVLayer)if(a.layers||a.tables){var c=a.layers;a.tables&&(c=c.concat(a.tables));arcgisonline.map.popup.removePopup(a,c[d].id);a.__disablePopup=!0;a.popupChanged=!0}else a.layer&&(arcgisonline.map.popup.removePopup(a),a.disablePopup=!0,a.popupChanged=!0);else a.layer instanceof esri.layers.GeoRSSLayer?(c=a.layer.getFeatureLayers(),e.forEach(c,function(b,
c){c===d&&(arcgisonline.map.popup.removePopup(a,c),b.__disablePopup=!0,a.popupChanged=!0)},this)):(a.layer instanceof esri.layers.FeatureLayer||arcgisonline.map.popup._isImageServiceLayer(a.layer)?(arcgisonline.map.popup.removePopup(a),a.disablePopup=!0):(c=arcgisonline.map.main.hasDynamicLayers(a)?a.layer.dynamicLayerInfos[d]:a.layer.layerInfos[d],arcgisonline.map.popup.removePopup(a,c.id)),a.popupChanged=!0);arcgisonline.map.main.markMapAsChanged("removePopup");e.publish("_onRendererUpdate",[])},
addRelatedRecordsLink:function(a){if(!a)return!1;var d=a.feature;a=a.relations;var c=e.query(".actionList",arcgisonline.map.main.map.infoWindow.domNode)[0],b=e.byId("popupRelationsLink"),h=e.query(".zoomTo",c),f,g;h&&h.length&&e.style(h[0],"whiteSpace","nowrap");(h=e.query(".directions",c))&&h.length&&e.style(h[0],"whiteSpace","nowrap");b&&(arcgisonline.map.popup.removeRelatedRecordsLink(),b=e.byId("popupRelationsLink"));if(!a||0===a.length)return!1;1===a.length?(b||(e.create("span",{innerHTML:" "},
c),b=e.create("a",{id:"popupRelationsLink","class":"action related",innerHTML:esri.i18nBundle.popupBuilder.showRelatedRecords,href:"javascript:void(0);",style:"white-space: nowrap;"},c)),arcgisonline.map.popup.relationsLinkHandler=e.connect(b,"onclick",e.hitch(this,this._handleRelatedRecordsClick,d,a[0]))):b||(b=new l.DropDownMenu({},e.create("div",{id:"popupRelationsLink"},c)),f=new l.Menu({}),g=d.getLayer(),e.forEach(a,function(a){var b;b=g.url.replace(/[0-9]+$/,a.relatedTableId);b=this._findRelatedTable(b).selMapTable;
a=new l.MenuItem({label:b?b.title?b.title:b.layer.name:a.name,onClick:e.hitch(this,this._handleRelatedRecordsClick,d,a)});f.addChild(a)},this),b.addChild(new l.PopupMenuItem({label:esri.i18nBundle.popupBuilder.showRelatedRecords,popup:f})))},removeRelatedRecordsLink:function(){arcgisonline.map.popup.relationsLinkHandler&&(e.disconnect(arcgisonline.map.popup.relationsLinkHandler),arcgisonline.map.popup.relationsLinkHandler=null);var a=e.byId("popupRelationsLink"),d=l.byId("popupRelationsLink");a&&
(d&&d.destroyRecursive(!1),(a=e.byId("popupRelationsLink"))&&e.destroy(a))},_handleRelatedRecordsClick:function(a,d){var c;this._getRelatedRecords(a,d).then(e.hitch(this,function(b){c=a.getLayer();if(b&&b[a.attributes[c.objectIdField]]){var e={};e.relatedFeatures=b[a.attributes[c.objectIdField]].features;e.relatedlayerUrl=c.url.replace(/[0-9]+$/,d.relatedTableId);e.feature=a;this._showRelatedTable(e)}else this._showNoResultsDlg()}),e.hitch(this,function(a){console.log(a)}))},_getRelatedRecords:function(a,
d){var c;c=a.getLayer();var b;b=new esri.tasks.RelationshipQuery;b.outFields=["*"];b.relationshipId=d.id;b.objectIds=[a.attributes[c.objectIdField]];return c.queryRelatedFeatures(b)},_showRelatedTable:function(a){if(!a||!a.relatedlayerUrl||!a.relatedFeatures)return!1;var d,c=a.relatedFeatures;a=this._findRelatedTable(a.relatedlayerUrl);d=a.selMapTable;a=a.tableId;if(d){var b=e.map(c,function(a){return a.attributes[d.layer.objectIdField]}),h=e.aspect.around(arcgisonline.map.table,"getFeatures",function(a,
d,f){return e.hitch(this,function(a,d,f){f=new e.Deferred;arcgisonline.map.table.saveMode(a,d,"all");arcgisonline.map.table.hideWait();arcgisonline.map.table.buildGrid(a,d,c,!0);arcgisonline.map.table.showAttributeTableUI(a,d);var g=arcgisonline.map.table.getInfo(a,d);arcgisonline.map.table.displayTitle(g.title,a,d);arcgisonline.map.table.addCountToTitle(b.length);f.callback();h.remove();h=null;return f})}),f=e.aspect.around(arcgisonline.map.table,"addCountToTitle",function(a,b){return e.hitch(this,
function(a,b){arcgisonline.map.table.addCountAndSelectionToTitle(a,null,b)})}),g=e.aspect.around(arcgisonline.map.table,"getFeatureCount",function(a,c){return e.hitch(this,function(a,c){var d=arcgisonline.map.table.getInfo(a,c),f=new e.Deferred;d.count=b.length;f.callback(d.count);g.remove();g=null;return f})});arcgisonline.map.table.showAttributeTable(d,a);setTimeout(e.hitch(this,function(){f.remove();f=null;e.disconnect(arcgisonline.map.table.onClickHandler);arcgisonline.map.table.onClickHandler=
null}),1E3)}else this._showNoResultsDlg()},_findRelatedTable:function(a){var d,c;0<arcgisonline.map.main.mapLayers.length&&e.some(arcgisonline.map.main.mapLayers,function(b,e){if(b.layer&&b.layer.url===a)return d=b,!0;if(b.layersInfo&&b.layersInfo.layers&&0<b.layersInfo.layers.length){var f=a.substring(a.lastIndexOf("/")+1),g;b.layer.url&&(g=b.layer.url+"/"+f);if(g===a&&b.layersInfo.layers[f])return d=b,c=parseInt(f,10),!0}});!d&&0<arcgisonline.map.main.mapTables.length&&e.some(arcgisonline.map.main.mapTables,
function(b,c){if(b.layer&&b.layer.url===a)return d=b,!0});return{selMapTable:d,tableId:c}},_showNoResultsDlg:function(){arcgisonline.sharing.dijit.dialog.GeneralDlg.prototype.statics.getInstance().show({title:esri.i18nBundle.myOrganization.noData.searchTitle,message:esri.i18nBundle.searchPage.noResultsFound})},_isImageServiceLayer:function(a){return a instanceof esri.layers.ArcGISImageServiceLayer||a instanceof esri.layers.ArcGISImageServiceVectorLayer}}});