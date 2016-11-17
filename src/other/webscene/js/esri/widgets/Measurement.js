// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/templates/Measurement.html":"\x3cdiv class\x3d\"esriMeasurement\"\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' class\x3d'esriMeasurementButtonContainer'\x3e\r\n    \x3cdiv dojoType\x3d'dijit.form.ToggleButton' baseClass\x3d'esriButton' dojoAttachPoint\x3d'_areaButton' iconClass\x3d'areaIcon' showLabel\x3d'false' dojoAttachEvent\x3d'onClick:_areaButtonToggle'\x3e\x3c/div\x3e\r\n    \x3cdiv dojoType\x3d'dijit.form.ToggleButton' baseClass\x3d'esriButton' dojoAttachPoint\x3d'_distanceButton' iconClass\x3d'distanceIcon' showLabel\x3d'false' dojoAttachEvent\x3d'onClick:_distanceButtonToggle'\x3e\x3c/div\x3e\r\n    \x3cdiv dojoType\x3d'dijit.form.ToggleButton' baseClass\x3d'esriButton' dojoAttachPoint\x3d'_locationButton' iconClass\x3d'locationIcon' showLabel\x3d'false' dojoAttachEvent\x3d'onClick:_locationButtonToggle'\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d\"esriMeasurementSeparator\"\x3e|\x3c/div\x3e\r\n    \x3cbutton dojoType\x3d'dijit.form.DropDownButton' baseClass\x3d'esriToggleButton' dojoAttachPoint\x3d'_unitDropDown' label\x3d'unit' value\x3d'unit' style\x3d'visibility:hidden;'\x3e\x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultLabel' class\x3d'resultLabel esriMeasurementResultLabel'\x3e\x3c/div\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultValueContainer' align\x3d'leading' class\x3d\"esriMeasurementResultValue\"\x3e\r\n    \x3cdiv dojoAttachPoint\x3d'greenPinDiv'\x3e\x3c/div\x3e\r\n    \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultValue' class\x3d'result'\x3e\x26nbsp;\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultTable' align\x3d'leading' class\x3d\"resultTable esriMeasurementTableContainer\" style\x3d\"display:none;\"\x3e\r\n    \x3ctable class\x3d\"esriMeasurementResultTable\"\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableHeader\" colspan\x3d\"2\"\x3e${_NLS_Lon}\x3c/td\x3e\x3ctd class\x3d\"esriMeasurementTableHeader\"\x3e${_NLS_Lat}\x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d\"esriMeasurementTableRow\"\x3e\r\n        \x3ctd dojoAttachPoint\x3d\"mouseCell\"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"mouseLongitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"mouseLatitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d\"esriMeasurementTableRow\"\x3e\r\n        \x3ctd dojoAttachPoint\x3d\"pinCell\"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"markerLongitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"markerLatitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e"}});
define("require ../core/declare dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/sniff dojo/number dojo/dom-style dojo/dom-construct dojox/gfx dijit/_Widget dijit/registry dijit/Menu dijit/MenuItem ../symbols/PictureMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ../symbols/support/jsonUtils ../geometry/support/geodesicUtils ../geometry/support/webMercatorUtils ../geometry/Point ../geometry/Polyline ../geometry/Polygon ../Graphic ../tasks/support/AreasAndLengthsParameters ../tasks/support/LengthsParameters ../tasks/GeometryService ../config ../core/domUtils ../core/lang ../geometry/support/units ../geometry/support/WKIDUnitConversion ../geometry/SpatialReference dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./Widget dojo/text!./templates/Measurement.html dojo/i18n!../nls/jsapi dijit/form/ToggleButton dijit/form/DropDownButton dijit/layout/ContentPane".split(" "),
function(C,F,e,l,w,x,y,n,t,G,H,d,z,A,I,s,J,K,u,p,D,k,v,f,L,E,M,N,q,O,r,P,B,Q,R,S,T,m){return F([S,H,Q,R],{declaredClass:"esri.widgets.Measurement",widgetsInTemplate:!0,templateString:T,_map:null,_geometryService:null,_interpolatedMap:null,_mouseImgURL:null,_defaultPinURL:null,_measureGraphics:[],_measureGraphic:null,_locationGraphic:null,_tempGraphic:null,_polylineGraphics:null,_polygonGraphic:null,_pointSymbol:null,_useDefaultPointSymbol:!0,_defaultLineSymbol:null,_lineSymbol:null,_areaLineSymbol:null,
_defaultFillSymbol:null,_fillSymbol:null,_borderlessFillSymbol:null,_inputPoints:[],_unitDictionary:[],numberPattern:"#,###,###,##0.0",result:null,_defaultDistanceUnit:null,_defaultAreaUnit:null,_defaultLocationUnit:null,currentDistanceUnit:null,currentAreaUnit:null,currentLocationUnit:null,_unitStrings:{},_locationUnitStrings:[],_locationUnitStringsLong:[],_distanceUnitStrings:[],_distanceUnitStringsLong:[],_areaUnitStrings:[],_areaUnitStringsLong:[],_calculatingMsg:null,_gsErrorMsg:null,_NLS_Lat:null,
_NLS_Lon:null,_mouseMoveMapHandler:null,_mouseClickMapHandler:null,_doubleClickMapHandler:null,_mouseDragMapHandler:null,_clickMapHandler:null,_mapExtentChangeHandler:null,_geometryAreaHandler:null,_snappingCallback:null,_calcTimer:null,_buttonDijits:{},previousTool:null,activeTool:null,markerLongitude:null,markerLatitude:null,mouseLongitude:null,mouseLatitude:null,constructor:function(a,b){a=a||{};if(a.map){this._map=a.map;if(this._map.loaded)this._map.cs=this._checkCS(this._map.spatialReference),
this._interpolatedMap=!("Web Mercator"===this._map.cs||"PCS"===this._map.cs);else var c=this._map.on("load",function(){c.remove();c=null;this._map.cs=this._checkCS(this._map.spatialReference);this._interpolatedMap=!("Web Mercator"===this._map.cs||"PCS"===this._map.cs)}.bind(this));this._geometryService=N.geometryService;this._mouseImgURL=C.toUrl("./images/cursor16x24.png");this._defaultPinURL=C.toUrl("./images/esriGreenPin16x26.png");this._defaultLineSymbol=new s(s.STYLE_SOLID,new w([0,128,255]),
3);this._defaultFillSymbol=new J(s.STYLE_SOLID,new s(s.STYLE_SOLID,new w([0,128,255]),3),new w([0,0,0,0.5]));a.pointSymbol?(this._pointSymbol=a.pointSymbol,this._useDefaultPointSymbol=!1):(this._pointSymbol=new I(this._defaultPinURL,16,26),this._pointSymbol.setOffset(0,12));var g=a.fillSymbol||this._defaultFillSymbol;this._fillSymbol=g;this._areaLineSymbol=g.outline||this._defaultLineSymbol;this._borderlessFillSymbol=K.fromJSON(g.toJSON());this._borderlessFillSymbol.setOutline(null);this._lineSymbol=
a.lineSymbol?a.lineSymbol:this._defaultLineSymbol;this._defaultDistanceUnit=a.defaultLengthUnit?a.defaultLengthUnit:r.MILES;this._defaultAreaUnit=a.defaultAreaUnit?a.defaultAreaUnit:r.ACRES;this._defaultLocationUnit=a.defaultLocationUnit?a.defaultLocationUnit:r.DECIMAL_DEGREES;this._snappingCallback=e.hitch(this,this._snappingCallback);a.geometry&&(this._userGeometry=a.geometry);this._calcTimer=null;this.advancedLocationUnits=a.advancedLocationUnits||!1;this._NLS_Lon=m.widgets.measurement.NLS_longitude;
this._NLS_Lat=m.widgets.measurement.NLS_latitude;this._gsErrorMsg=m.widgets.measurement.NLS_geometry_service_error;this._calculatingMsg=m.widgets.measurement.NLS_calculating}else console.log("dijit.MeasureTool: unable to find the 'map' property in parameters")},startup:function(){this._setupDictionaries();t.create("img",{src:this._mouseImgURL,alt:"",style:"vertical-align:middle"},this.mouseCell);this._useDefaultPointSymbol?(t.create("img",{src:this._defaultPinURL,alt:"",style:"vertical-align:middle"},
this.pinCell),t.create("img",{src:this._defaultPinURL,alt:"",style:"vertical-align:middle"},this.greenPinDiv)):(this._drawPointGraphics(this.pinCell),this._drawPointGraphics(this.greenPinDiv));n.set(this.greenPinDiv,"visibility","hidden");if(this._userGeometry)if(this._map.loaded)this._measureCustomGeometry();else var a=this._map.on("load",function(){a.remove();a=null;this._measureCustomGeometry()}.bind(this))},_setupAreaTool:function(){this._map.navigationManager.setImmediateClick(!0);this._inputPoints=
[];this._createAreaUnitList();this._tempGraphic=new f;this._tempGraphic.setSymbol(this._areaLineSymbol);this._tempGraphic.setGeometry(new k(this._map.spatialReference));this._map.graphics.add(this._tempGraphic);"PCS"===this._map.cs&&(this._geometryAreaHandler=this._geometryService.on("areas-and-lengths-complete",this._outputArea.bind(this)));this._mouseClickMapHandler=this._map.on("click",this._measureAreaMouseClickHandler.bind(this));this._doubleClickMapHandler=this._map.on("dbl-click",this._measureAreaDblClickHandler.bind(this))},
_setupDistanceTool:function(){this._map.navigationManager.setImmediateClick(!0);"PCS"===this._map.cs&&(this._projectMapExtent(this._map.extent),this._mapExtentChangeHandler=this._map.on("extent-change",this._projectMapExtent.bind(this)));this._inputPoints=[];this._createDistanceUnitList();this._mouseClickMapHandler=this._map.on("click",this._measureDistanceMouseClickHandler.bind(this));this._doubleClickMapHandler=this._map.on("dbl-click",this._measureDistanceDblClickHandler.bind(this))},_setupLocationTool:function(){this._map.navigationManager.setImmediateClick(!0);
this._measureGraphics=[];this._map.graphics.remove(this._locationGraphic);this._createLocationUnitList();"PCS"===this._map.cs&&(this._projectMapExtent(this._map.extent),this._mapExtentChangeHandler=this._map.on("extent-change",e.hitch(this,this._projectMapExtent)));this._clickMapHandler=this._map.on("click",this._locationClickHandler.bind(this));this._mouseMoveMapHandler=this._map.on("mouse-move",this._locationMoveHandler.bind(this));this._mouseDragMapHandler=this._map.on("mouse-drag",e.hitch(this,
function(){d.byNode(this.resultValue.domNode).set("disabled",!0)}))},setTool:function(a,b){this.previousTool=this.activeTool||null;this._polylineGraphics=[];this._resetToolState();this._polygonGraphic&&(this._map.graphics.remove(this._polygonGraphic),this._polygonGraphic=null);var c=d.byNode(this._buttonDijits[a].domNode).checked;n.set(this._unitDropDown.domNode,"visibility","visible");n.set(this.greenPinDiv,"visibility","hidden");d.byNode(this._buttonDijits.area.domNode).set("checked",!1);d.byNode(this._buttonDijits.distance.domNode).set("checked",
!1);d.byNode(this._buttonDijits.location.domNode).set("checked",!1);if(!0===b||!1===b)c=b;d.byNode(this._buttonDijits[a].domNode).set("checked",c);this._toggleStaticLocationTable(!1,!0);c?(this.activeTool=a,(this._dblClickZoom=this._map.isDoubleClickZoom)&&this._map.disableDoubleClickZoom(),"area"===a?this._setupAreaTool():"distance"===a?this._setupDistanceTool():"location"===a&&(this._setupLocationTool(),n.set(this.greenPinDiv,"visibility","visible")),this._map.snappingManager&&(this._map.snappingManager._startSelectionLayerQuery(),
this._map.snappingManager._setUpSnapping())):(this.activeTool=null,n.set(this._unitDropDown.domNode,"visibility","hidden"));this.activeTool!==this.previousTool&&this.emitToolChange(this.activeTool,this.getUnit(),this.previousTool)},_areaButtonToggle:function(){this.clearResult();this.setTool("area")},_distanceButtonToggle:function(){this.clearResult();this.setTool("distance")},_locationButtonToggle:function(){this.clearResult();this.setTool("location")},_resetToolState:function(){var a=this._map;
a.navigationManager.setImmediateClick(!1);this._dblClickZoom&&a.enableDoubleClickZoom();this._inputPoints=[];this._mouseClickMapHandler.remove();this._mouseMoveMapHandler.remove();this._doubleClickMapHandler.remove();this._mouseDragMapHandler.remove();this._clickMapHandler.remove();this._mapExtentChangeHandler.remove();this._geometryAreaHandler.remove();this._mouseClickMapHandler=this._mouseMoveMapHandler=this._doubleClickMapHandler=this._mouseDragMapHandler=this._clickMapHandler=this._mapExtentChangeHandler=
this._geometryAreaHandler=null;a.snappingManager&&a.snappingManager._snappingGraphic&&a.graphics.remove(a.snappingManager._snappingGraphic);this._map.snappingManager&&(this._map.snappingManager._stopSelectionLayerQuery(),this._map.snappingManager._killOffSnapping());this._unitDropDown._opened&&this._unitDropDown.closeDropDown()},clearResult:function(){var a=this._map;this.result=0;d.byNode(this.resultValue.domNode).set("content","\x26nbsp");var b;for(b=0;b<this._measureGraphics.length;b++)a.graphics.remove(this._measureGraphics[b]);
this._measureGraphic=null;this._measureGraphics=[];a.graphics.remove(this._tempGraphic);this._mouseMoveMapHandler.remove();this._mouseMoveMapHandler=null},show:function(){q.show(this.domNode)},hide:function(){q.hide(this.domNode)},showTool:function(a){this._buttonDijits[a].domNode.style.display="inline"},hideTool:function(a){this._buttonDijits[a].domNode.style.display="none"},getTool:function(){if(this.activeTool)return{toolName:this.activeTool,unitName:this.getUnit()}},getUnit:function(){if("unit"!==
this._unitDropDown.label)return this._unitDropDown.label},destroy:function(){this._resetToolState();this.clearResult();this.inherited(arguments);this._map=this._geometryService=this._measureGraphics=this._measureGraphic=this._tempGraphic=null},emitToolChange:function(a,b,c){this.emit("tool-change",{toolName:a,unitName:b,previousToolName:c})},emitUnitChange:function(a,b){this.emit("unit-change",{unitName:a,toolName:b})},emitMeasureStart:function(a,b){this.emit("measure-start",{toolName:a,unitName:b})},
emitMeasure:function(a,b,c,g){this.emit("measure",{toolName:a,geometry:b,values:c,unitName:g})},emitMeasureEnd:function(a,b,c,g){this.emit("measure-end",{toolName:a,geometry:b,values:c,unitName:g})},measure:function(a){a&&(this._userGeometry=a,this._measureCustomGeometry())},_measureCustomGeometry:function(){this.clearResult();switch(this._userGeometry.type){case "point":this._measureCustomPoint();break;case "polyline":this._measureCustomDistance();break;case "polygon":this._measureCustomArea()}},
_measureCustomPoint:function(){this.setTool("location",!0);"Web Mercator"===this._map.cs&&this._userGeometry.spatialReference!==this._map.spatialReference&&(this._userGeometry=p.geographicToWebMercator(this._userGeometry));this._measureGraphic=new f;this._measureGraphic.setSymbol(this._pointSymbol);this._measureGraphic.setGeometry(this._userGeometry);this._measureGraphics.push(this._measureGraphic);this._map.graphics.add(this._measureGraphic);this._measurePoint(this._userGeometry)},_measureCustomDistance:function(){1<
this._userGeometry.paths[0].length&&(this.setTool("distance",!0),this._inputPoints=[],l.forEach(this._userGeometry.paths[0],e.hitch(this,function(a,b){this._inputPoints.push(a);var c=new f(new D(a[0],a[1],this._userGeometry.spatialReference),this._pointSymbol);this._measureGraphics.push(c);this._map.graphics.add(c);0!==b&&(this.result+=this._geodesicDistance(a,this._userGeometry.paths[0][b-1]))})),this._measureGraphic=new f,this._measureGraphic.setSymbol(this._lineSymbol),this._measureGraphics.push(this._measureGraphic),
this._userGeometry=this._densifyGeometry(this._userGeometry),this._measureGraphic.setGeometry(this._userGeometry),this._map.graphics.add(this._measureGraphic),this._showDistance(this.result),this._inputPoints=[],this.emitMeasureEnd(this.activeTool,this._userGeometry,this.result,this.getUnit()))},_measureCustomArea:function(){this.setTool("area",!0);this._inputPoints=[];var a=this._densifyGeometry(this._userGeometry);this._measureGraphic=new f;this._measureGraphic.setGeometry(a);this._measureGraphic.setSymbol(this._fillSymbol);
this._measureGraphics.push(this._measureGraphic);this._map.graphics.add(this._measureGraphic);this._getArea(a);this._inputPoints=[]},_densifyGeometry:function(a){"Web Mercator"===this._map.cs&&(a=p.webMercatorToGeographic(a));a="PCS"===this._map.cs?a:u.geodesicDensify(a,5E5);"Web Mercator"===this._map.cs&&(a=p.geographicToWebMercator(a));return a},_measureAreaMouseClickHandler:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);b=b||a.mapPoint;this._inputPoints.push(b);
this._currentStartPt=b;if(1===this._inputPoints.length){this._tempGraphic.setGeometry(new k(this._map.spatialReference));for(a=0;a<this._measureGraphics.length;a++)this._map.graphics.remove(this._measureGraphics[a]);this._measureGraphics=[];this.result=0;this._outputResult(this.result,m.widgets.measurement.NLS_area_acres);this._mouseMoveMapHandler=this._map.on("mouse-move",this._measureAreaMouseMoveHandler.bind(this));this.emitMeasureStart(this.activeTool,this.getUnit())}this._measureGraphic=new f;
this._measureGraphic.setSymbol(this._areaLineSymbol);this._measureGraphics.push(this._measureGraphic);if(1<this._inputPoints.length){var c=new k(this._map.spatialReference);c.addPath([this._inputPoints[this._inputPoints.length-2],b]);a=new k(this._map.spatialReference);a.addPath([this._inputPoints[0],b]);b=this._densifyGeometry(c);a=this._densifyGeometry(a);this._tempGraphic.setGeometry(a);this._measureGraphic.setGeometry(b);this._polylineGraphics.push(this._measureGraphic);this._map.graphics.add(this._measureGraphic);
if(2<this._inputPoints.length){b=new v(this._map.spatialReference);c=[];for(a=0;a<this._inputPoints.length;a++)c.push([this._inputPoints[a].x,this._inputPoints[a].y]);c.push([this._inputPoints[0].x,this._inputPoints[0].y]);b.addRing(c);this._polygonGraphic?(this._map.graphics.remove(this._polygonGraphic),this._polylineGraphics.push(this._tempGraphic),this._polygonGraphic=this._generatePolygonFromPaths(),this._map.graphics.add(this._polygonGraphic),this._measureGraphic=this._polygonGraphic,this._polylineGraphics.pop()):
(this._polygonGraphic=this._generatePolygonFromPaths(),this._map.graphics.add(this._polygonGraphic));this._getArea(b)}}else this._polygonGraphic&&(this._map.graphics.remove(this._polygonGraphic),this._polygonGraphic=null)},_measureAreaMouseMoveHandler:function(a){var b;if(0<this._inputPoints.length){var c=new k(this._map.spatialReference),g;this._map.snappingManager&&(g=this._map.snappingManager._snappingPoint);b=g||a.mapPoint;c.addPath([this._currentStartPt,b]);a=this._densifyGeometry(c);this._tempGraphic.setGeometry(a)}1<
this._inputPoints.length&&(a=new k(this._map.spatialReference),a.addPath([b,this._inputPoints[0]]),b=this._densifyGeometry(a),this._tempGraphic.setGeometry(this._tempGraphic.geometry.addPath(b.paths[0])))},_measureAreaDblClickHandler:function(a){this._mouseMoveMapHandler.remove();this._mouseMoveMapHandler=null;"touch"===this._map.navigationManager.eventModel&&x("ios")&&this._measureAreaMouseClickHandler(a);a=new v(this._map.spatialReference);var b=[],c;for(c=0;c<this._inputPoints.length;c++)b.push([this._inputPoints[c].x,
this._inputPoints[c].y]);b.push([this._inputPoints[0].x,this._inputPoints[0].y]);a.addRing(b);this._inputPoints=[];this.measureGeometry=this._densifyGeometry(a);this._polygonGraphic&&(this._map.graphics.remove(this._polygonGraphic),this._polylineGraphics.push(this._tempGraphic),this._polygonGraphic=this._generatePolygonFromPaths(),this._map.graphics.add(this._polygonGraphic));this._getArea(a);this._polylineGraphics=[]},_generatePolygonFromPaths:function(){var a=[];l.forEach(this._polylineGraphics,
e.hitch(this,function(b){l.forEach(b.geometry.paths,e.hitch(this,function(b){l.forEach(b,e.hitch(this,function(b){a.push(b)}))}))}));a.push(a[0]);var b=new v(this._map.spatialReference);b.addRing(a);var b=this._densifyGeometry(b),c=new f;c.setGeometry(b);c.setSymbol(this._borderlessFillSymbol);this._measureGraphic=c;this._measureGraphics.push(c);return c},_getArea:function(a){var b=[],c=new L;c.areaUnit=M.UNIT_ACRES;c.calculationType="geodesic";v.prototype.isSelfIntersecting(a)?this._geometryService.simplify([a],
e.hitch(this,function(a){l.forEach(a,e.hitch(this,function(d){"PCS"===this._map.cs?(c.polygons=a,this._geometryService.areasAndLengths(c)):("Web Mercator"===this._map.cs&&(d=p.webMercatorToGeographic(d)),b.push(d))}));var d=u.geodesicAreas(b,r.ACRES);this._showArea(d[0])})):("Web Mercator"===this._map.cs&&(a=p.webMercatorToGeographic(a)),b.push(a),"PCS"===this._map.cs?(c.polygons=b,this._geometryService.areasAndLengths(c)):(a=u.geodesicAreas(b,r.ACRES),this._showArea(Math.abs(a[0]))))},_outputArea:function(a){this._showArea(Math.abs(a.areas[0]))},
_showArea:function(a){a&&(this.result=a,a=d.byNode(this._unitDropDown.domNode).label,a=this._outputResult(this.result,a),this._mouseMoveMapHandler?this.emitMeasure(this.activeTool,this._measureGraphic.geometry,a,this.getUnit()):this.emitMeasureEnd(this.activeTool,this._measureGraphic.geometry,a,this.getUnit()))},_measureDistanceDblClickHandler:function(a){this._mouseMoveMapHandler.remove();this._mouseMoveMapHandler=null;"touch"===this._map.navigationManager.eventModel&&x("ios")&&this._measureDistanceMouseClickHandler(a);
var b=new k(this._map.spatialReference);b.addPath(this._inputPoints);b=this._densifyGeometry(b);this._measureGraphic.geometry=b;"PCS"===this._map.cs?(a=new E,a.polylines=[b],a.lengthUnit=9093,a.calculationType="geodesic",this._geometryService.lengths(a,e.hitch(this,function(a){this.result=a.lengths[0];this._showDistance(this.result);this._inputPoints=[];this.emitMeasureEnd(this.activeTool,b,this._outputResult(this.result,this.getUnit()),this.getUnit())}))):(this._inputPoints=[],this.emitMeasureEnd(this.activeTool,
b,this._outputResult(this.result,this.getUnit()),this.getUnit()))},_measureDistanceMouseClickHandler:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);var c=b||a.mapPoint;this._inputPoints.push(c);this._currentStartPt=c;if(1===this._inputPoints.length){for(a=0;a<this._measureGraphics.length;a++)this._map.graphics.remove(this._measureGraphics[a]);this._map.graphics.remove(this._tempGraphic);this._measureGraphics=[];this.result=0;this._outputResult(this.result,
m.widgets.measurement.NLS_length_miles);this._tempGraphic=new f;this._tempGraphic.setSymbol(this._lineSymbol);this._map.graphics.add(this._tempGraphic);this._mouseMoveMapHandler=this._map.on("mouse-move",this._measureDistanceMouseMoveHandler.bind(this));this.emitMeasureStart(this.activeTool,this.getUnit())}this._tempGraphic.setGeometry(new k(this._map.spatialReference));a=new f;a.setSymbol(this._pointSymbol);a.setGeometry(c);this._measureGraphics.push(a);this._map.graphics.add(a);1<this._inputPoints.length&&
(this._measureGraphic=new f,this._measureGraphic.setSymbol(this._lineSymbol),this._measureGraphics.push(this._measureGraphic),a=new k(this._map.spatialReference),a.addPath([this._inputPoints[this._inputPoints.length-2],c]),a=this._densifyGeometry(a),this._measureGraphic.setGeometry(a),this._map.graphics.add(this._measureGraphic),"PCS"===this._map.cs?(b=new E,b.polylines=[a],b.lengthUnit=9093,b.calculationType="geodesic",this._geometryService.lengths(b,e.hitch(this,function(a){this.result+=a.lengths[0];
this._showDistance(this.result);this.emitMeasure(this.activeTool,c,this._outputResult(this.result,this.getUnit()),this.getUnit())}))):(this.result+=this._geodesicDistance(this._inputPoints[this._inputPoints.length-2],c),this._showDistance(this.result),this.emitMeasure(this.activeTool,c,this._outputResult(this.result,this.getUnit()),this.getUnit())))},_measureDistanceMouseMoveHandler:function(a){if(0<this._inputPoints.length){var b=new k(this._map.spatialReference),c;this._map.snappingManager&&(c=
this._map.snappingManager._snappingPoint);a=c||a.mapPoint;b.addPath([this._currentStartPt,a]);b=this._densifyGeometry(b);this._tempGraphic.setGeometry(b);b=this._geodesicDistance(this._currentStartPt,a);this._showDistance(b+this.result)}},_geodesicDistance:function(a,b){var c=new k(this._map.spatialReference);"PCS"===this._map.cs&&(a=this._getGCSLocation(a),b=this._getGCSLocation(b));c.addPath([a,b]);"Web Mercator"===this._map.cs&&(c=p.webMercatorToGeographic(c));return u.geodesicLengths([c],r.MILES)[0]},
_showDistance:function(a){a&&this._outputResult(a,d.byNode(this._unitDropDown.domNode).label)},_locationClickHandler:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);a=b||a.mapPoint;this._locationButtonToggle();this._locationGraphic=new f;this._locationGraphic.setGeometry(a);this._locationGraphic.setSymbol(this._pointSymbol);this._map.graphics.add(this._locationGraphic);this._measureGraphics.push(this._locationGraphic);this._calculateLocation(a,!0)},_locationMoveHandler:function(a){var b;
this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);this._calculateLocation(b||a.mapPoint,!1)},_calculateLocation:function(a,b){var c,g="esriDegreeMinuteSeconds"===this.currentLocationUnit||"esriDecimalDegrees"===this.currentLocationUnit?!1:!0;g&&this._mouseMoveMapHandler&&(this._mouseMoveMapHandler.remove(),this._mouseMoveMapHandler=null);c=this._getGCSLocation(a);this._updateLocationUI(c,b,g)},_updateLocationUI:function(a,b,c){var g,d,h;g=a.x;d=a.y;if(this._interpolatedMap&&
(this._outOfBoundsCheck=[!1,1],this._map.spatialReference.isWrappable()?a=a.normalize():180<a.x?(a.x=180,this._outOfBoundsCheck=[!0,1]):-180>a.x&&(a.x=-180,this._outOfBoundsCheck=[!0,-1]),a.y=this._roundY(a.y),b)){this._updateMarkerLocation(a.x,a.y);g=new B({wkid:4326});this._geometryService.project([a],g,e.hitch(this,function(a){h=a[0];this._outOfBoundsCheck[0]&&(h.x=180*this._outOfBoundsCheck[1]);this._advancedLocationDisplayHandler(h,h.x,h.y,c,b)}));return}b&&this._updateMarkerLocation(g,d);this._advancedLocationDisplayHandler(a,
g,d,c,b)},_advancedLocationDisplayHandler:function(a,b,c,g,d){g?(d={coordinates:[[b,c]],sr:{wkid:4326},conversionType:this._unitStrings[this.currentLocationUnit]},this._updateGeocoordinateStringLocation(d,a.geometry)):(b=this._calculateXY(b,c),d?(this._updateStaticLocation(b[0],b[1]),this.emitMeasureEnd(this.activeTool,a,[b[0],b[1]],this.getUnit())):this._updateMouseLocation(b[0],b[1]))},_updateMarkerLocation:function(a,b){this.markerLocationX=a;this.markerLocationY=b},_updateMouseLocation:function(a,
b){this.mouseLongitude.innerHTML=a;this.mouseLatitude.innerHTML=b},_updateStaticLocation:function(a,b){this._updateMouseLocation(a,b);this.markerLongitude.innerHTML=a;this.markerLatitude.innerHTML=b},_updateGeocoordinateStringLocation:function(a,b){this.resultValue.domNode.innerHTML="\x26nbsp";this._geometryService.toGeoCoordinateString(a,e.hitch(this,function(a){clearTimeout(this._calcTimer);a?(this.resultValue.domNode.innerHTML=a,this.emitMeasureEnd(this.activeTool,b,a,this.getUnit())):(this.resultValue.domNode.innerHTML=
this._gsErrorMsg,this.emitMeasureEnd(this.activeTool,null,null,this.getUnit()))}));clearTimeout(this._calcTimer);this._calcTimer=setTimeout(e.hitch(this,function(){this.resultValue.domNode.innerHTML=this._calculatingMsg},1E3))},_calculateXY:function(a,b){var c,d,e=m.widgets.measurement;if(this.getUnit()===e.NLS_decimal_degrees)c=a.toFixed(6),d=b.toFixed(6),d=this._roundY(d),this._map.spatialReference.isWrappable()||(c=this._roundX(c));else if(this.getUnit()===e.NLS_deg_min_sec){var h=e=!1;0>a&&(e=
!0,a=Math.abs(a));0>b&&(h=!0,b=Math.abs(b));b=this._roundY(b);this._map.spatialReference.isWrappable()||(a=this._roundX(a));c=Math.floor(a)+"\u00b0"+Math.floor(60*(a-Math.floor(a)))+"'"+Math.floor(60*(60*(a-Math.floor(a))-Math.floor(60*(a-Math.floor(a)))))+'"';d=Math.floor(b)+"\u00b0"+Math.floor(60*(b-Math.floor(b)))+"'"+Math.floor(60*(60*(b-Math.floor(b))-Math.floor(60*(b-Math.floor(b)))))+'"';e&&(c="-"+c);h&&(d="-"+d)}return[c,d]},_roundY:function(a){90<a?a=90:-90>a&&(a=-90);return a},_roundX:function(a){180<
a?a=180:-180>a&&(a=-180);return a},_getGCSLocation:function(a){if("Web Mercator"===this._map.cs)a=p.webMercatorToGeographic(a);else if("PCS"===this._map.cs){if(this._map._newExtent){var b=Math.abs((this._map._newExtent.xmax-this._map._newExtent.xmin)/(this._map.extent.xmax-this._map.extent.xmin)),c=Math.abs((this._map._newExtent.ymax-this._map._newExtent.ymin)/(this._map.extent.ymax-this._map.extent.ymin));a=new D((a.x-this._map.extent.xmin)*b+this._map._newExtent.xmin,(a.y-this._map.extent.ymin)*
c+this._map._newExtent.ymin,this._map.spatialReference)}}else a=a.normalize();return a},_projectMapExtent:function(a){a=new f(a);var b=new B({wkid:4326});this._geometryService.project([a.geometry],b,e.hitch(this,function(a){if(!this._mouseMoveMapHandler&&"location"===this.activeTool){if("esriDegreeMinuteSeconds"===this.currentLocationUnit||"esriDecimalDegrees"===this.currentLocationUnit)this._mouseMoveMapHandler=this._map.on("mouse-move",e.hitch(this,this._locationMoveHandler));this._mouseDragMapHandler=
this._map.on("mouse-drag",e.hitch(this,function(){d.byNode(this.resultValue.domNode).set("disabled",!0)}))}this._map._newExtent=a[0]}))},_showCoordinates:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);a=this._getGCSLocation(b||a.mapPoint);this.map.spatialReference.isWrappable()||(180<a.x?a.x=180:-180>a.x&&(a.x=-180));this.mouseLocationX=a.x;this.mouseLocationY=a.y;this._outputLocationResult(this.mouseLocationX,this.mouseLocationY,d.byNode(this.unit.domNode).label)},
_updateStaticState:function(a){this.markerLocationX=this.mouseLocationX=a.x;this.markerLocationY=this.mouseLocationY=a.y;var b=this._calculateValueToDisplay(this.markerLocationX,this.markerLocationY,this.units[this.currentLocationUnit]);this.markerLongitude.innerHTML=this.mouseLongitude.innerHTML=b[0];this.markerLatitude.innerHTML=this.mouseLatitude.innerHTML=b[1];this.emitMeasureEnd(this.activeTool,a,b,this.getUnit())},_showStaticCoordinates:function(a){this._outOfBoundsCheck=[!1,1];this._toggleStaticLocationTable(!0,
!1);var b,c;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);a=b||a.mapPoint;this._interpolatedMap?(this.map.spatialReference.isWrappable()?a=a.normalize():180<a.x?(a.x=180,this._outOfBoundsCheck=[!0,1]):-180>a.x&&(a.x=-180,this._outOfBoundsCheck=[!0,-1]),b=new B({wkid:4326}),this._geometryService.project([a],b,e.hitch(this,function(a){c=a[0];this._outOfBoundsCheck[0]&&(c.x=180*this._outOfBoundsCheck[1]);this._updateStaticState(c)}))):(c=this._getGCSLocation(a),this.map.spatialReference.isWrappable()||
(180<c.x?(c.x=180,this._outOfBoundsCheck=[!0,1]):-180>c.x&&(c.x=-180,this._outOfBoundsCheck=[!0,-1])),this._updateStaticState(c))},_checkCS:function(a){if(a.wkid)return 3857===a.wkid||102100===a.wkid||102113===a.wkid?"Web Mercator":O.isDefined(P[a.wkid])?"PCS":"GCS";if(a.wkt)return-1!==a.wkt.indexOf("WGS_1984_Web_Mercator")?"Web Mercator":0===a.wkt.indexOf("PROJCS")?"PCS":"GCS"},_switchUnit:function(a){"distance"===this.activeTool?this.currentDistanceUnit=a:"area"===this.activeTool?this.currentAreaUnit=
a:"location"===this.activeTool&&(this.currentLocationUnit=a);d.byNode(this._unitDropDown.domNode).set("label",this._unitStrings[a]);if(null!==this.result){var b=this._outputResult(this.result,this._unitStrings[a]);this.emitUnitChange(this._unitStrings[a],this.activeTool);null!==this._measureGraphic&&this.emitMeasureEnd(this.activeTool,this._measureGraphic.geometry,b,this.getUnit())}},_outputResult:function(a,b){var c=a*this._unitDictionary[b];0===c?d.byNode(this.resultValue.domNode).set("content",
"\x26nbsp"):1E6<c?d.byNode(this.resultValue.domNode).set("content",y.format(c.toPrecision(9),{pattern:this.numberPattern})+" "+b):10>c?d.byNode(this.resultValue.domNode).set("content",y.format(c.toFixed(2),{pattern:this.numberPattern+"0"})+" "+b):d.byNode(this.resultValue.domNode).set("content",y.format(c.toFixed(2),{pattern:this.numberPattern})+" "+b);return c},_switchLocationUnit:function(a){var b,c;d.byNode(this._unitDropDown.domNode).set("label",this._unitStrings[a]);this.currentLocationUnit=
a;this._mouseMoveMapHandler.remove();this._mouseMoveMapHandler=null;this.emitUnitChange(this._unitStrings[a],this.activeTool);"esriDegreeMinuteSeconds"===a||"esriDecimalDegrees"===a?(this._mouseMoveMapHandler=this._map.on("mouse-move",this._locationMoveHandler.bind(this)),this._toggleStaticLocationTable(!0,!1),this._locationGraphic&&this._calculateLocation(this._locationGraphic.geometry,!0)):(this._toggleStaticLocationTable(!1,!1),null===this.resultValue||null===this.markerLocationX&&null===this.markerLocationY||
(b=this.markerLocationX,c=this.markerLocationY,a={coordinates:[[b,c]],sr:{wkid:4326},conversionType:this._unitStrings[a]},this._locationGraphic&&this._updateGeocoordinateStringLocation(a,this._locationGraphic.geometry)))},_toggleStaticLocationTable:function(a,b){b&&(this.resultValue.innerHTML="\x26nbsp",this.markerLongitude.innerHTML="---",this.markerLatitude.innerHTML="---",this.mouseLongitude.innerHTML="---",this.mouseLatitude.innerHTML="---");a?(q.show(this.resultTable.domNode),q.hide(this.resultValueContainer.domNode)):
(q.hide(this.resultTable.domNode),q.show(this.resultValueContainer.domNode),this._mouseMoveMapHandler.remove())},_outputLocationResult:function(a,b,c){a=this._calculateValueToDisplay(a,b,c);this.mouseLongitude.innerHTML=a[0];this.mouseLatitude.innerHTML=a[1]},_createDistanceUnitList:function(){var a,b=new z({style:"display: none;"});l.forEach(this._distanceUnitStrings,e.hitch(this,function(a,d){var f=new A({label:a,onClick:e.hitch(this,function(){this._switchUnit(this._distanceUnitStringsLong[d])})});
f.set("class","unitDropDown");b.addChild(f)}));d.byNode(this._unitDropDown.domNode).set("dropDown",b);this.currentDistanceUnit?(a=this._unitStrings[this.currentDistanceUnit],d.byNode(this._unitDropDown.domNode).set("label",a)):(a=this._unitStrings[this._defaultDistanceUnit],d.byNode(this._unitDropDown.domNode).set("label",a),this.currentDistanceUnit=this._defaultDistanceUnit)},_createAreaUnitList:function(){var a,b=new z({style:"display: none;"});l.forEach(this._areaUnitStrings,e.hitch(this,function(a,
d){var f=new A({label:a,onClick:e.hitch(this,function(){this._switchUnit(this._areaUnitStringsLong[d])})});f.set("class","unitDropDown");b.addChild(f)}));d.byNode(this._unitDropDown.domNode).set("dropDown",b);this.currentAreaUnit?(a=this._unitStrings[this.currentAreaUnit],d.byNode(this._unitDropDown.domNode).set("label",a)):(a=this._unitStrings[this._defaultAreaUnit],d.byNode(this._unitDropDown.domNode).set("label",a),this.currentAreaUnit=this._defaultAreaUnit)},_createLocationUnitList:function(){var a;
a=this._locationUnitStrings;var b=new z({style:"display: none;"});if(null===this._geometryService||!1===this.advancedLocationUnits)a=a.slice(0,2);l.forEach(a,e.hitch(this,function(a,d){var f=new A({label:a,onClick:e.hitch(this,function(){this._switchLocationUnit(this._locationUnitStringsLong[d])})});f.set("class","unitDropDown");b.addChild(f)}));d.byNode(this._unitDropDown.domNode).set("dropDown",b);this.currentLocationUnit||(this.currentLocationUnit=this._defaultLocationUnit);a=this._unitStrings[this.currentLocationUnit];
d.byNode(this._unitDropDown.domNode).set("label",a);("esriDegreeMinuteSeconds"===this.currentLocationUnit||"esriDecimalDegrees"===this.currentLocationUnit)&&this._toggleStaticLocationTable(!0,!1)},_setupDictionaries:function(){var a=m.widgets.measurement;this._unitDictionary[a.NLS_length_miles]=1;this._unitDictionary[a.NLS_length_kilometers]=1.609344;this._unitDictionary[a.NLS_length_feet]=5280;this._unitDictionary[a.NLS_length_meters]=1609.34;this._unitDictionary[a.NLS_length_yards]=1760;this._unitDictionary[a.NLS_length_nautical_miles]=
0.869;this._unitDictionary[a.NLS_area_acres]=1;this._unitDictionary[a.NLS_area_sq_kilometers]=0.004047;this._unitDictionary[a.NLS_area_sq_miles]=0.0015625;this._unitDictionary[a.NLS_area_sq_feet]=43560;this._unitDictionary[a.NLS_area_sq_meters]=4046.87;this._unitDictionary[a.NLS_area_hectares]=0.4047;this._unitDictionary[a.NLS_area_sq_yards]=4840;this._unitDictionary[a.NLS_area_sq_nautical_miles]=0.001179874545293396;this._unitStrings={esriMiles:a.NLS_length_miles,esriKilometers:a.NLS_length_kilometers,
esriFeet:a.NLS_length_feet,esriMeters:a.NLS_length_meters,esriYards:a.NLS_length_yards,esriNauticalMiles:a.NLS_length_nautical_miles,esriAcres:a.NLS_area_acres,esriSquareKilometers:a.NLS_area_sq_kilometers,esriSquareMiles:a.NLS_area_sq_miles,esriSquareFeet:a.NLS_area_sq_feet,esriSquareMeters:a.NLS_area_sq_meters,esriHectares:a.NLS_area_hectares,esriSquareYards:a.NLS_area_sq_yards,esriSquareNauticalMiles:a.NLS_area_sq_nautical_miles,esriDecimalDegrees:a.NLS_decimal_degrees,esriDegreeMinuteSeconds:a.NLS_deg_min_sec,
esriMGRS:a.NLS_MGRS,esriUSNG:a.NLS_USNG,esriUTM:a.NLS_UTM,esriDDM:a.NLS_DDM,esriDD:a.NLS_DD,esriGARS:a.NLS_GARS,esriGeoRef:a.NLS_GeoRef};this._locationUnitStrings=[a.NLS_decimal_degrees,a.NLS_deg_min_sec,a.NLS_MGRS,a.NLS_USNG,a.NLS_UTM,a.NLS_GeoRef,a.NLS_GARS];this._locationUnitStringsLong="esriDecimalDegrees esriDegreeMinuteSeconds esriMGRS esriUSNG esriUTM esriGeoRef esriGARS".split(" ");this._distanceUnitStrings=[a.NLS_length_miles,a.NLS_length_kilometers,a.NLS_length_feet,a.NLS_length_meters,
a.NLS_length_yards,a.NLS_length_nautical_miles];this._distanceUnitStringsLong="esriMiles esriKilometers esriFeet esriMeters esriYards esriNauticalMiles".split(" ");this._areaUnitStrings=[a.NLS_area_acres,a.NLS_area_sq_miles,a.NLS_area_sq_kilometers,a.NLS_area_hectares,a.NLS_area_sq_yards,a.NLS_area_sq_feet,a.NLS_area_sq_meters];this._areaUnitStringsLong="esriAcres esriSquareMiles esriSquareKilometers esriHectares esriSquareYards esriSquareFeet esriSquareMeters".split(" ");this._buttonDijits={area:this._areaButton,
distance:this._distanceButton,location:this._locationButton};d.byNode(this._distanceButton.domNode).setLabel(a.NLS_distance);d.byNode(this._areaButton.domNode).setLabel(a.NLS_area);d.byNode(this._locationButton.domNode).setLabel(a.NLS_location);d.byNode(this.resultLabel.domNode).setContent(a.NLS_resultLabel)},_drawPointGraphics:function(a){var b,c,d;c=this._pointSymbol;a=t.create("div",{"class":"esriLocationResultSymbol"},a);a=G.createSurface(a,10,10);9>x("ie")&&(b=a.getEventSource(),n.set(b,"position",
"relative"),n.set(b.parentNode,"position","relative"));c=c.getShapeDescriptors();try{d=a.createShape(c.defaultShape).setFill(c.fill).setStroke(c.stroke)}catch(f){a.clear();a.destroy();return}var h=d.getBoundingBox();c=h.width;b=h.height;var k=-(h.x+c/2),h=-(h.y+b/2);a=a.getDimensions();a={dx:k+a.width/2,dy:h+a.height/2};if(10<c||10<b)c=5/(c/10>b/10?c:b),e.mixin(a,{xx:c,yy:c});d.applyTransform(a)}})});