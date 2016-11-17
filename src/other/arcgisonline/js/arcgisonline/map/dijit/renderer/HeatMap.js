// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:arcgisonline/map/dijit/renderer/templates/HeatMap.html":'\x3cdiv data-dojo-type\x3d"dijit.layout.BorderContainer" region\x3d"top" style\x3d"height:100%; padding:5px;"\x3e\r\n  \x3cdiv id\x3d"rendererHeatMapTop" data-dojo-type\x3d"dijit.layout.ContentPane" class\x3d"panel panel_left" region\x3d"top" style\x3d"padding:2px;"\x3e\r\n    \x3cdiv id\x3d"rendererHeatMapHeader"\x3e\r\n      \x3cdiv class\x3d"esriFloatTrailing" style\x3d"display:inline;"\x3e\r\n        \x3ca href\x3d"JavaScript:void(0);" data-dojo-attach-point\x3d"_closeBtn" data-dojo-attach-event\x3d"onClick:_onCancel" title\x3d"${i18n.close}" class\x3d"panel panel_close panel_collapse"\x3e\x3c/a\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv id\x3d"rendererHeatMapTitle" class\x3d"esriFloatLeading panel_title"\x3e\r\n        ${i18n.rendererPanelTitle}\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapLayer" class\x3d"esriFloatLeading panel_title" style\x3d"clear:both;"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; height:1px;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" data-dojo-attach-point\x3d"_rendererHeatMapTop" region\x3d"center" style\x3d"padding:10px 0;overflow-y:auto;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapField" class\x3d"esriFloatLeading strong"\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--\r\n      \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapAttribute" class\x3d"esriFloatTrailing"\x3e\r\n        \x3cbutton data-dojo-type\x3d"dijit.form.Button" type\x3d"button" data-dojo-attach-point\x3d"_rendererHeatMapChangeButton" class\x3d"calcite tiny" data-dojo-attach-event\x3d"onClick:_onChangeField"\x3e\x3cspan\x3e${i18n.change}\x3c/span\x3e\x3c/button\x3e\r\n      \x3c/div\x3e\r\n      --\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv id\x3d"renderer-heatmap-content" data-dojo-type\x3d"dijit.layout.ContentPane" region\x3d"center" style\x3d"overflow-y:auto;padding:2px;"\x3e\r\n    \x3ctable style\x3d"width:100%;margin-bottom:10px;"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd height\x3d"200"\x3e\r\n            \x3cdiv id\x3d"rendererHeatMapSliderDiv"\x3e\r\n              \x3cdiv id\x3d"rendererHeatMapSlider"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd nowrap class\x3d"toolsColumnTD" style\x3d"text-align:center; vertical-align:top; padding-top:20px;"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapSymbolsTitle" data-dojo-attach-event\x3d"onClick:_onClickSymbols" class\x3d"rightIcons"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapSymbols" class\x3d"symbolIcon"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv style\x3d"padding-top: 5px;"\x3e\r\n                \x3cspan class\x3d"toolsLabel"\x3e${i18n.symbols}\x3c/span\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapInfluence" class\x3d"esriFloatLeading" style\x3d"clear:both;margin-top:20px;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapInfluenceTitle" class\x3d"esriFloatLeading sectionTitle" \x3e\r\n        ${i18n.areaOfInfluence}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriFloatLeading" style\x3d"clear:both; padding: 10px;"\x3e\r\n        \x3cdiv id\x3d"rendererHeatMapInfluenceSlider"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"height:20px;"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapTransparency" class\x3d"esriFloatLeading"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapTransparencyTitle" class\x3d"esriFloatLeading sectionTitle" \x3e\r\n        ${i18n.transparency}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriFloatLeading" style\x3d"clear:both; padding: 16px 10px 30px 10px;"\x3e\r\n        \x3cdiv id\x3d"rendererHeatMapTransparencySlider"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapScale" style\x3d"clear:both;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapScaleTitle"  class\x3d"esriFloatLeading sectionTitle"\x3e\r\n        ${i18n.visibleRange}\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_rendererHeatMapScaleSuggest" data-dojo-attach-event\x3d"onClick:_onClickScaleSuggest" class\x3d"esriFloatTrailing suggestLabel"\x3e\r\n        \x26nbsp;${i18n.suggest}\x26nbsp;\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriFloatLeading" style\x3d"clear:both;padding: 10px;"\x3e\r\n        \x3cdiv id\x3d"rendererHeatMapScaleSlider"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" region\x3d"bottom"\x3e\r\n\t\t\x3cdiv id\x3d"rendererHeatMapContentClose" data-dojo-type\x3d"dijit.layout.ContentPane" region\x3d"center" \x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit.form.Button" type\x3d"button" class\x3d"calcite blue" data-dojo-attach-point\x3d"_doneChangingButton" data-dojo-attach-event\x3d"onClick:_onDone"\x3e\x3cspan\x3e${i18n.ok}\x3c/span\x3e\x3c/button\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit.form.Button" type\x3d"button" class\x3d"calcite transparent" data-dojo-attach-point\x3d"_doneChangingButton" data-dojo-attach-event\x3d"onClick:_onCancel"\x3e\x3cspan\x3e${i18n.cancel}\x3c/span\x3e\x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"rendererHeatMapFooterDiv" data-dojo-type\x3d"dijit.layout.ContentPane" region\x3d"bottom" style\x3d"height:40px; padding: 0;"\x3e\r\n      \x3cdiv class\x3d"footer" id\x3d"rendererHeatMapFooter" data-dojo-type\x3d"arcgisonline.sharing.dijit.SiteFooterMap" style\x3d"white-space:normal;"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("arcgisonline/map/dijit/renderer/HeatMap","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/html dojo/string dojo/dom dojo/has dojo/topic dojo/query dojo/aspect dojo/Deferred dojo/dom-class dojo/dom-style dojo/dom-construct dojox/html/entities dijit/TooltipDialog dijit/Tooltip esri/lang esri/styles/basic esri/styles/heatmap esri/symbols/jsonUtils esri/renderers/jsonUtils esri/dijit/HorizontalSlider esri/renderers/smartMapping arcgisonline/map/dijit/renderer/_SymbolsMixin arcgisonline/map/dijit/renderer/_HeatMapMixin arcgisonline/map/dijit/renderer/_RendererMixin dojo/i18n!arcgisonline/nls/arcgisonline dijit/_Widget dijit/_Templated dojo/text!arcgisonline/map/dijit/renderer/templates/HeatMap.html".split(" "),
function(e,b,f,m,c,B,d,q,C,n,D,r,E,h,F,p,G,g,H,I,s,J,K,t,u,v,w,x,l,y,z,A){e=e([y,z],{declaredClass:"arcgisonline.map.dijit.renderer.HeatMap",basePath:require.toUrl("arcgisonline/map/dijit/renderer"),baseClass:"esriAGORendererHeatMap",widgetsInTemplate:!0,templateString:A,_rConnects:[],tooltips:[],i18n:null,disableAllEvents:!0,container:null,subLayerId:null,mapLayer:null,layer:null,renderer:null,origGalleryRenderer:null,constructor:function(a,k){b.mixin(this,v);b.mixin(this,w);b.mixin(this,x);a&&(a.containerNode&&
(this.container=a.containerNode),this.params=a.params,b.mixin(this,a.params),this._rConnects=[])},destroy:function(){this.hideSymbolStyler();this.hideLegendPopup();this.heatMapSlider&&this.heatMapSlider.destroy();this.influenceSlider&&this.influenceSlider.destroy();this.scaleSlider&&this.scaleSlider.destroy();this.transparencySlider&&this.transparencySlider.destroy();f.forEach(this.tooltips,function(a){a.destroy()});f.forEach(this._rConnects,m.disconnect);delete this._rConnects;this.inherited(arguments)},
postMixInProperties:function(){this.inherited(arguments);this.i18n=b.clone(l.common);b.mixin(this.i18n,l.rendererCommon);b.mixin(this.i18n,l.rendererHeatMapPanel)},postCreate:function(){this.container.addChild(dijit.byId("rendererHeatMapPanel"));this.loadConnections()},loadConnections:function(){this._rConnects.push(m.connect(dijit.byId("leftContentPanel"),"resize",this,"adjustHeight"))},_onClose:function(a){a.preventDefault();delete this.mapLayer._scaleChanged;this.hideSymbolStyler();this.hideLegendPopup();
this.dismissRendererChanges();arcgisonline.map.leftPanel.openLeftTOCPanel()},_onDone:function(a){a.preventDefault();this.hideLegendPopup();this.hideSymbolStyler();leftPanel.switchToRendererStack(this.renderer)},_onCancel:function(a){a.preventDefault();delete this.mapLayer._scaleChanged;this.hideSymbolStyler();this.hideLegendPopup();this.dismissRendererChanges(this.origGalleryRenderer);leftPanel.switchToRendererStack()},_onChangeField:function(){leftPanel.switchToRendererStack()},startup:function(){this.inherited(arguments);
this._init()},_init:function(){this.origGalleryRenderer=this.buildCurrentRendererInfo();this._rendererHeatMapLayer.innerHTML=p.encode(this.mapLayer.title.replace(/\_/g," "));-1!==this.subLayerId&&this.mapLayer.title!==this.layer.name&&(this._rendererHeatMapLayer.innerHTML+=" - "+p.encode(this.layer.name.replace(/\_/g," ")));this._rendererHeatMapField.innerHTML=this.attributeItem?this.attributeItem.alias:this.i18n.heatMap;this.influenceSlider=new t({labels:[this.i18n.smaller,this.i18n.larger],minimum:1,
maximum:25,value:this.renderer.blurRadius||10,intermediateChanges:!1,onChange:b.hitch(this,"onInfluenceSliderChange")},"rendererHeatMapInfluenceSlider");this.influenceSlider.startup();this.transparencySlider=this.createTransparencySlider("rendererHeatMapTransparencySlider");this.createScaleSlider("rendererHeatMapScaleSlider").then(dojo.hitch(this,function(a){this.scaleSlider=a}));this.updateUIWithRenderer();setTimeout(b.hitch(this,function(){this.disableAllEvents=!1}),1E3);this.createTooltips();this.showLegendPopup()},
updateUIWithRenderer:function(){this.influenceSlider.set("value",this.renderer.blurRadius||10);esriGeowConfig.isRightToLeft?setTimeout(b.hitch(this,function(){this.createHeatMapSlider({}).then(b.hitch(this,function(){this.adjustHeight()}))}),500):this.createHeatMapSlider({}).then(b.hitch(this,function(){this.adjustHeight()}))},createTooltips:function(){var a=function(a){return"\x3cdiv class\x3d'rendererTooltip'\x3e"+a+"\x3c/div\x3e"};this.tooltips.push(new g({connectId:this._rendererHeatMapInfluenceTitle,
label:a(this.i18n.areaOfInfluenceTooltip)}));this.tooltips.push(new g({connectId:this._rendererHeatMapWeightedText,label:a(this.i18n.weightedByTooltip)}));this.tooltips.push(new g({connectId:this._rendererHeatMapTransparencyTitle,label:a(this.i18n.transparencyTooltip)}));this.tooltips.push(new g({connectId:this._rendererHeatMapScaleTitle,label:a(this.i18n.visibleRangeTooltip)}));this.tooltips.push(new g({connectId:this._rendererHeatMapScaleSuggest,label:a(this.i18n.suggestTooltip)}));this.tooltips.push(new g({connectId:this._rendererHeatMapSymbolsTitle,
label:a(this.i18n.symbolsTooltip)}))},_onClickSymbols:function(){if(!this.disableAllEvents){var a=s.getSchemes({theme:"default",basemap:this.getBasemapType(),geometryType:this.geometryType}),k=f.map(this.renderer.colorStops,function(a){return a.color}),c=[],d=[];f.forEach(k,function(a){var b=""+a.r+","+a.g+","+a.b;-1===f.indexOf(d,b)&&(c.push(a),d.push(b))});this.showSymbolStyler(null,{externalSizing:!1,schemes:a,selected:{colors:c,scheme:this.scheme},numStops:0},b.hitch(this,"onSymbolsChange"))}},
onSymbolsChange:function(a,k,c){this.scheme={colors:k,colorsForClassBreaks:[]};u.applyHeatmapScheme({renderer:this.renderer,scheme:this.scheme});this.heatMapSlider.set("colorStops",b.clone(this.renderer.colorStops));this.applyHeatMapRenderer(this.renderer)},onInfluenceSliderChange:function(){this.disableAllEvents||this.getParams().then(b.hitch(this,function(a){this.updateRendererWithNewStatistics(a).then(b.hitch(this,function(a){this.renderer=a;this.applyHeatMapRenderer(this.renderer)}))}))},_onClickScaleSuggest:function(){this.suggestScale(this.scaleSlider)},
getParams:function(){var a=new r,b=this.attributeItem?{field:this.attributeItem.name,blurRadius:this.influenceSlider.get("value")}:{blurRadius:this.influenceSlider.get("value")};a.resolve(b);return a},adjustHeight:function(a){if(!("undefined"===typeof leftPanel||"rendererHeatMapStack"!==leftPanel.visibleStack)){a=c.coords(d.byId("leftContentStackContainer")).h;var b=c.coords(d.byId("rendererHeatMapTop")).h,g=c.coords(this._doneChangingButton.domNode).h-5,f=c.coords(d.byId("rendererHeatMapFooter_links")).h+
10;h.set(d.byId("rendererHeatMapFooterDiv"),"height",f+"px");a=a-b-g-f-18;0<a&&h.set(d.byId("renderer-heatmap-content"),"height",a+"px");newWidth=c.coords(d.byId("leftContentStackContainer")).w-16;0<newWidth&&(this.influenceSlider&&h.set(this.influenceSlider.domNode,"width",newWidth-35+"px"),this.transparencySlider&&h.set(this.transparencySlider.domNode,"width",newWidth-35+"px"),this.scaleSlider&&h.set(this.scaleSlider.domNode,"width",newWidth-35+"px"));var e=40;n(".toolsLabel").forEach(function(a){e=
Math.max(e,c.coords(a).w)});n(".toolsColumnTD").style("width",e+10+"px")}}});q("extend-esri")&&b.setObject("arcgisonline.map.dijit.renderer.HeatMap",e);return e});