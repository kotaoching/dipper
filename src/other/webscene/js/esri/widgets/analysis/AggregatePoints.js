// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/analysis/templates/AggregatePoints.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"aggregateIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.aggregatePoints}\x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.aggregateDefine}\x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"pointLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseAreaLabel}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"polygonLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_layersSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"2"\x3e\r\n             \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_keepPolygonsCheck" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\r\n               ${i18n.keepPolygonLabel}\r\n             \x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"KeepBoundaryNoPoints"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.addStatsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"SummaryFields"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"  data-dojo-attach-point\x3d"_groupByLabel"\x3e${i18n.groupByLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"GroupByField"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit.form.Select"  data-dojo-attach-point\x3d"_groupBySelect" data-dojo-attach-event\x3d"onChange:_handleGroupBySelectChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"2"\x3e\r\n             \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_minmajorityLabel"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_minmajorityCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.addMinMajorityLable}\r\n             \x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MinorityMajority"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"2"\x3e\r\n             \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_percentPointsLabel"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_percentPointsCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.addPercentageLabel}\r\n             \x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"PercentPoints"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n           \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputLayer"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e         \r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/widgets/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n  \x3c/div\x3e\r\n'}});
define("require ../../core/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/has dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox dijit/Dialog dijit/InlineEditBox ../../kernel ../../core/lang ./AnalysisBase ./utils ./CreditEstimator ./_AnalysisOptions dojo/i18n!../../nls/jsapi dojo/text!./templates/AggregatePoints.html".split(" "),
function(t,u,e,d,m,F,h,k,q,g,v,p,w,x,y,z,A,r,G,H,I,s,J,K,L,M,N,O,P,n,B,f,Q,C,D,E){return u([w,x,y,z,A,C,B],{declaredClass:"esri.widgets.analysis.AggregatePoints",templateString:E,basePath:t.toUrl("."),widgetsInTemplate:!0,pointLayer:null,polygonLayers:null,summaryFields:null,outputLayerName:null,keepBoundariesWithNoPoints:!0,polygonLayer:null,groupByField:null,minorityMajority:!1,percentPoints:!1,i18n:null,toolName:"AggregatePoints",helpFileName:"AggregatePoints",resultParameter:"AggregatedLayer",
_afterAnalysisStr:"",_beforeAnalysisStr:"",constructor:function(a){this._pbConnects=[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);d.forEach(this._pbConnects,m.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,D.aggregatePointsTool);this._beforeAnalysisStr=this.i18n.aggregateDefine.substring(0,this.i18n.aggregateDefine.indexOf("\x3cb\x3e${layername}\x3c/b\x3e"));this._afterAnalysisStr=
this.i18n.aggregateDefine.substring(this.i18n.aggregateDefine.indexOf("\x3cb\x3e${layername}\x3c/b\x3e")+19)},postCreate:function(){this.inherited(arguments);p.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);
var a={},b={},c,l;c=this.polygonLayers[this._layersSelect.get("value")];a.PolygonLayer=JSON.stringify(f.constructAnalysisInputLyrObj(c));a.PointLayer=JSON.stringify(f.constructAnalysisInputLyrObj(this.pointLayer));a.SummaryFields=JSON.stringify(this.get("summaryFields"));this.returnFeatureCollection||(a.OutputName=JSON.stringify({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked");"0"!==this._groupBySelect.get("value")&&
(a.GroupByField=this._groupBySelect.get("value"),this.resultParameter=["aggregatedLayer","groupSummary"],a.minorityMajority=this.get("minorityMajority"),a.percentPoints=this.get("percentPoints"));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=JSON.stringify({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(l={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(l.extent=this.map.extent._normalize(!0)),a.context=
JSON.stringify(l));b.jobParams=a;b.itemParams={description:h.substitute(this.i18n.itemDescription,{pointlayername:this.pointLayer.name,polygonlayername:c.name}),tags:h.substitute(this.i18n.itemTags,{pointlayername:this.pointLayer.name,polygonlayername:c.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_handleLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),
this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"polygon"'),this._isAnalysisSelect=!1,this._browsedlg.show()):(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{pointlayername:this.pointLayer.name,polygonlayername:this.polygonLayers[a].name}),this._outputLayerInput.set("value",this.outputLayerName))},_handleBrowseItemsSelect:function(a){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.pointLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?
this._analysisSelect:this._layersSelect,browseDialog:this._browsedlg}).always(e.hitch(this,this._updateAnalysisLayerUI,!0))},_handleAttrSelectChange:function(a){var b;"0"!==a&&(a=this.get("statisticSelect"),"0"!==a.get("value")&&!a.get("isnewRowAdded")&&(b=a.get("removeTd"),k.set(b,"display","block"),b=a.get("referenceWidget"),e.hitch(b,b._createStatsRow()),a.set("isnewRowAdded",!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),"0"!==a.get("value")&&
"0"!==c&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),k.set(c,"display","block"),c=this.get("referenceWidget"),e.hitch(c,c._createStatsRow()),this.set("isnewRowAdded",!0)))},_handleShowCreditsClick:function(a){a.preventDefault();a={};var b;this._form.validate()&&(b=this.polygonLayers[this._layersSelect.get("value")],a.PolygonLayer=JSON.stringify(f.constructAnalysisInputLyrObj(b)),a.PointLayer=JSON.stringify(f.constructAnalysisInputLyrObj(this.pointLayer)),a.SummaryFields=JSON.stringify(this.get("summaryFields")),
this.returnFeatureCollection||(a.OutputName=JSON.stringify({serviceProperties:{name:this._outputLayerInput.get("value")}})),a.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(a.GroupByField=this._groupBySelect.get("value")),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.Context=JSON.stringify({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(a){this._usageForm.set("content",
a);this._usageDialog.show()})))},_save:function(){},_buildUI:function(){var a=!0;f.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&(!this.get("pointLayer")&&this.get("pointLayers")&&this.set("pointLayer",this.pointLayers[0]),f.populateAnalysisLayers(this,"pointLayer","pointLayers"));this.pointLayer&&q.set(this._aggregateToolDescription,"innerHTML",h.substitute(this.i18n.aggregateDefine,{layername:this.pointLayer.name}));this.polygonLayers&&d.forEach(this.polygonLayers,
function(a,c){"esriGeometryPolygon"===a.geometryType&&this._layersSelect.addOption({value:c,label:a.name})},this);f.addReadyToUseLayerOption(this,[this._analysisSelect,this._layersSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._keepPolygonsCheck.set("checked",this.keepBoundariesWithNoPoints);this.polygonLayer&&this._layersSelect.set("value",this.polygonLayer);d.forEach(this.summaryFields,function(a){a=a.split(" ");this._currentAttrSelect.set("value",
a[0]);e.hitch(this._currentAttrSelect,this._handleAttrSelectChange,a[0])();this._currentStatsSelect.set("value",a[1]);e.hitch(this._currentStatsSelect,this._handleStatsValueUpdat,"value","",a[1])()},this);k.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=a;f.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,
username:this.portalUser?this.portalUser.username:""})}));k.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.set("groupBySelect",this.groupByField);k.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.minorityMajority&&this._minmajorityCheck.set("checked",this.minorityMajority);this.percentPoints&&this._percentPointsCheck.set("checked",this.percentPoints);k.set(this._closeBtn,"display",this.get("showCloseIcon")?"block":"none");
this._updateAnalysisLayerUI(a);this._loadConnections()},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!1))},_createStatsRow:function(){var a,b,c,l,d;a=g.create("tr",null,this._afterStatsRow,"before");c=g.create("td",{style:{width:"45%",maxWidth:"100px"}},a);b=g.create("td",{style:{width:"55%",maxWidth:"104px"}},a);c=new s({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",
style:{tableLayout:"fixed",overflowX:"hidden"}},g.create("select",null,c));this.set("attributes",{selectWidget:c,pointLayer:this.pointLayer});b=new s({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},g.create("select",null,b));this.set("statistics",{selectWidget:b});c.set("statisticSelect",b);m.connect(c,"onChange",this._handleAttrSelectChange);d=g.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},a);l=g.create("a",{title:this.i18n.removeAttrStats,
"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+this.basePath+"/images/close.gif' border\x3d'0''/\x3e"},d);m.connect(l,"onclick",e.hitch(this,this._removeStatsRow,a));this._statsRows.push(a);b.set("attributeSelect",c);b.set("removeTd",d);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=c;return!0},_removeStatsRow:function(a){d.forEach(r.findWidgets(a),function(a){a.destroyRecursive()});
g.destroy(a)},_removeStatsRows:function(){d.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[]},_handleGroupBySelectChange:function(a){a="0"===a;p.toggle(this._minmajorityLabel,"esriAnalysisTextDisabled",a);p.toggle(this._percentPointsLabel,"esriAnalysisTextDisabled",a);this._percentPointsCheck.set("disabled",a);this._minmajorityCheck.set("disabled",a)},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),
this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"'),this._isAnalysisSelect=!0,this._browsedlg.show()):(this.pointLayer=this.pointLayers[a],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){if(this.pointLayer){q.set(this._aggregateToolDescription,"innerHTML",h.substitute(this.i18n.aggregateDefine,{layername:this.pointLayer.name}));var b=this.polygonLayers[this._layersSelect.get("value")];a&&b&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,
{pointlayername:this.pointLayer.name,polygonlayername:b.name}),this._outputLayerInput.set("value",this.outputLayerName));this._removeStatsRows();this._createStatsRow();this.set("groupBySelect",this.groupByField)}},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setPointLayerAttr:function(a){if(n.isDefined(a)&&("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType))this.pointLayer=a},_setPolygonLayersAttr:function(a){this.polygonLayers=
a},_setLayersAttr:function(a){this.polygonLayers=[];d.forEach(a,function(a){"esriGeometryPolygon"===a.geometryType?this.polygonLayers.push(a):"esriGeometryPoint"===a.geometryType&&(this.pointLayer=a)},this)},_setAttributesAttr:function(a){if(a.pointLayer){var b,c;b=a.pointLayer;c=a.selectWidget;a=b.fields;c.addOption({value:"0",label:this.i18n.attribute});d.forEach(a,function(a){-1!==d.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&
a.name!==b.objectIdField&&c.addOption({value:a.name,label:n.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.statistic});a.addOption({value:"SUM",label:this.i18n.sum});a.addOption({value:"MIN",label:this.i18n.minimum});a.addOption({value:"MAX",label:this.i18n.maximum});a.addOption({value:"MEAN",label:this.i18n.average});a.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setSummaryFieldsAttr:function(a){this.summaryFields=
a},_getSummaryFieldsAttr:function(){var a="",b=[],c,d;v(".statsSelect",this.domNode).forEach(function(e){c=r.byNode(e);d=c.get("attributeSelect");"0"!==d.get("value")&&"0"!==c.get("value")&&(a+=d.get("value")+" "+c.get("value")+";",b.push(d.get("value")+" "+c.get("value")))});return b},_setGroupBySelectAttr:function(a){if(this.pointLayer){var b=this.pointLayer.fields;this._groupBySelect.removeOption(this._groupBySelect.getOptions());this._groupBySelect.addOption({value:"0",label:this.i18n.attribute});
d.forEach(b,function(a){-1!==d.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeString","esriFieldTypeDate"],a.type)&&a.name!==this.pointLayer.objectIdField&&this._groupBySelect.addOption({value:a.name,label:n.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this);a&&this._groupBySelect.set("value",a);this._handleGroupBySelectChange(this._groupBySelect.get("value"))}},_setMinorityMajorityAttr:function(a){this.minorityMajority=a},_getMinorityMajorityAttr:function(a){this._minmajorityCheck&&
(this.minorityMajority=this._minmajorityCheck.get("checked"));return this.minorityMajority},_setPercentPointsAttr:function(a){this.percentPoints=a},_getPercentPointsAttr:function(a){this._percentPointsCheck&&(this.percentPoints=this._percentPointsCheck.get("checked"));return this.percentPoints},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setFolderIdAttr:function(a){this.folderId=a},_getFolderIdAttr:function(){this._webMapFolderSelect&&this.folderStore&&(this.folderId=
this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");return this.folderId},_setFolderNameAttr:function(a){this.folderName=a},_getFolderNameAttr:function(){this._webMapFolderSelect&&(this.folderStore&&this._webMapFolderSelect.item)&&(this.folderName=this.folderStore.getValue(this._webMapFolderSelect.item,"name"));return this.folderName},validateServiceName:function(a){return f.validateServiceName(a,{textInput:this._outputLayerInput})},_setPointLayersAttr:function(a){n.isDefined(a)&&
(this.pointLayers=a=d.filter(a,function(a,c){return"esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType}))},_connect:function(a,b,c){this._pbConnects.push(m.connect(a,b,c))}})});