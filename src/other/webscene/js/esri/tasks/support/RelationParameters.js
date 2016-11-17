// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","dojo/_base/array","../../core/Accessor","../../geometry/support/jsonUtils"],function(b,g,e,h,f){b=b(h,{declaredClass:"esri.tasks.RelationParameters",geometries1:null,geometries2:null,relation:null,relationParam:null,toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(a){console.warn(a.stack)}return this.toJSON()},toJSON:function(){var a=e.map(this.geometries1,function(a){return a.toJSON()}),b=e.map(this.geometries2,function(a){return a.toJSON()}),
c={},d=this.geometries1;d&&0<d.length&&(c.geometries1=JSON.stringify({geometryType:f.getJsonType(d[0]),geometries:a}),a=this.geometries1[0].spatialReference,c.sr=a.wkid?a.wkid:JSON.stringify(a.toJSON()));if((a=this.geometries2)&&0<a.length)c.geometries2=JSON.stringify({geometryType:f.getJsonType(a[0]),geometries:b});this.relation&&(c.relation=this.relation);this.relationParam&&(c.relationParam=JSON.stringify(this.relationParam));return c}});g.mixin(b,{SPATIAL_REL_CROSS:"esriGeometryRelationCross",
SPATIAL_REL_DISJOINT:"esriGeometryRelationDisjoint",SPATIAL_REL_IN:"esriGeometryRelationIn",SPATIAL_REL_INTERIORINTERSECTION:"esriGeometryRelationInteriorIntersection",SPATIAL_REL_INTERSECTION:"esriGeometryRelationIntersection",SPATIAL_REL_COINCIDENCE:"esriGeometryRelationLineCoincidence",SPATIAL_REL_LINETOUCH:"esriGeometryRelationLineTouch",SPATIAL_REL_OVERLAP:"esriGeometryRelationOverlap",SPATIAL_REL_POINTTOUCH:"esriGeometryRelationPointTouch",SPATIAL_REL_TOUCH:"esriGeometryRelationTouch",SPATIAL_REL_WITHIN:"esriGeometryRelationWithin",
SPATIAL_REL_RELATION:"esriGeometryRelationRelation"});return b});