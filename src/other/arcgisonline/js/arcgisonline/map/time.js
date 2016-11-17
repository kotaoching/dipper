// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("arcgisonline/map/time",["dijit","dojo","dojox","dojo/require!arcgisonline/map/main"],function(f,c,k){c.provide("arcgisonline.map.time");c.require("arcgisonline.map.main");arcgisonline.map.time={timeSlider:null,fullTimeExtent:null,timeSliderProperties:null,timeSliderDefaultInterval:null,timeSliderDefaultUnits:null,handlers:[],checkOnTimeButton:function(){arcgisonline.map.time.hasVisibleTemporalLayer()?arcgisonline.map.time.timeSlider?arcgisonline.map.time.updateTimeSlider():arcgisonline.map.time.showTimeSlider():
(arcgisonline.map.time.timeSlider&&(arcgisonline.map.time.removeTimeSlider(),c.style(c.byId("timeDiv"),"display","none"),f.byId("main-content").resize()),arcgisonline.map.time.hasTemporalLayer()||(arcgisonline.map.time.timeSliderProperties=null))},hasTemporalLayer:function(){for(var a=!1,b=0;b<arcgisonline.map.main.mapLayers.length;b++){var d=arcgisonline.map.main.mapLayers[b];d&&(d.layer&&d.layer.timeInfo&&d.layer.useMapTime)&&("esri.layers.KMLLayer"==d.layer.declaredClass?(d=d.layer.getLayers(),
c.some(d,function(a){return a.timeInfo&&a.timeInfo.timeExtent?!0:!1})&&(a=!0)):d.layer.timeInfo.timeExtent&&(a=!0))}return a},hasVisibleTemporalLayer:function(){for(var a=0;a<arcgisonline.map.main.mapLayers.length;a++){var b=arcgisonline.map.main.mapLayers[a];if(b&&b.layer&&b.layer.visible&&b.layer.timeInfo&&b.layer.useMapTime)if("esri.layers.KMLLayer"==b.layer.declaredClass){if(b=b.layer.getLayers(),c.some(b,function(a){return a.timeInfo&&a.timeInfo.timeExtent?!0:!1}))return!0}else if(b.layer.timeInfo.timeExtent)return!0}return!1},
getSingleTemporalMapLayer:function(){for(var a=0,b,d=0;d<arcgisonline.map.main.mapLayers.length;d++){var c=arcgisonline.map.main.mapLayers[d];c&&(c.layer&&c.layer.timeInfo&&c.layer.useMapTime)&&c.layer.timeInfo.timeExtent&&(a++,b=c)}return 1===a?b:null},checkTimeSliderProperties:function(a){var b=function(a){var b=Math.round(a.startTime.getTime()),c=Math.round(a.endTime.getTime()),e=!1;arcgisonline.map.time.timeSliderProperties.startTime>c||arcgisonline.map.time.timeSliderProperties.endTime<b?(b=
Math.round(a.startTime.getTime()),c=Math.round(a.endTime.getTime()),arcgisonline.map.time.timeSliderProperties.startTime=b,arcgisonline.map.time.timeSliderProperties.endTime=c,e=!0):(arcgisonline.map.time.timeSliderProperties.startTime<b&&(arcgisonline.map.time.timeSliderProperties.startTime=b,e=!0),arcgisonline.map.time.timeSliderProperties.endTime>c&&(arcgisonline.map.time.timeSliderProperties.endTime=c,e=!0));e&&arcgisonline.map.time.recreateTimeSlider()};arcgisonline.map.time.timeSliderProperties&&
(a&&!arcgisonline.map.time.hasTemporalLayer()?arcgisonline.map.time.timeSliderProperties=null:c.some(arcgisonline.map.main.mapLayers,function(a){if(a&&a.layer&&a.layer.timeInfo&&a.layer.useMapTime&&a.layer.timeInfo.hasLiveData)return!0})?arcgisonline.map.time.getUpdatedFullTimeExtent().then(function(a){b(a)}):(a=arcgisonline.map.time.getFullTimeExtent(),b(a)))},showTimeSlider:function(){arcgisonline.map.time.timeSlider?(c.style(c.byId("timeDiv"),"display","block"),f.byId("main-content").resize()):
arcgisonline.map.time.getUpdatedFullTimeExtent().then(function(a){arcgisonline.map.time.fullTimeExtent=a;arcgisonline.map.time.timeSlider=new esri.dijit.TimeSlider({style:"width: 600px;"},c.byId("timeSliderDiv"));arcgisonline.map.main.map.setTimeSlider(arcgisonline.map.time.timeSlider);esriGeowConfig.isRightToLeft&&(arcgisonline.map.time.timeSlider.nextBtn.domNode.parentNode.align="right",arcgisonline.map.time.timeSlider.previousBtn.domNode.parentNode.align="right",arcgisonline.map.time.timeSlider.playPauseBtn.domNode.parentNode.align=
"left",arcgisonline.map.time.timeSlider._getSliderValue=function(){var a=this._slider.get("value");return[a[1],a[0]]});if(arcgisonline.map.time.timeSliderProperties){var b=arcgisonline.map.time.timeSliderProperties,d=null,d=b.startTime&&b.endTime?new esri.TimeExtent(new Date(b.startTime),new Date(b.endTime)):b.startTime?new esri.TimeExtent(new Date(b.startTime),a.endTime):b.endTime?new esri.TimeExtent(a.startTime,new Date(b.endTime)):new esri.TimeExtent(a.startTime,a.endTime);d.startTime>d.endTime&&
(d=new esri.TimeExtent(a.startTime,a.endTime));arcgisonline.map.time.timeSlider.setThumbCount(b.thumbCount);b.numberOfStops?arcgisonline.map.time.timeSlider.createTimeStopsByCount(d,b.numberOfStops+1):arcgisonline.map.time.timeSlider.createTimeStopsByTimeInterval(d,b.timeStopInterval.interval,b.timeStopInterval.units);arcgisonline.map.time.timeSlider.setThumbMovingRate(b.thumbMovingRate)}else arcgisonline.map.time.timeSlider.setThumbCount(2),arcgisonline.map.time.timeSlider.setThumbMovingRate(2E3),
arcgisonline.map.time.findDefaultInterval(),arcgisonline.map.time.timeSlider.createTimeStopsByTimeInterval(a,arcgisonline.map.time.timeSliderDefaultInterval,arcgisonline.map.time.timeSliderDefaultUnits),arcgisonline.map.time.timeSliderProperties={startTime:Math.round(a.startTime.getTime()),endTime:Math.round(a.endTime.getTime()),thumbCount:2,thumbMovingRate:2E3,timeStopInterval:{interval:arcgisonline.map.time.timeSliderDefaultInterval,units:arcgisonline.map.time.timeSliderDefaultUnits}};25<arcgisonline.map.time.timeSlider.timeStops.length&&
arcgisonline.map.time.timeSlider.setTickCount(0);2==arcgisonline.map.time.timeSlider.thumbCount&&arcgisonline.map.time.timeSlider.setThumbIndexes([0,1]);arcgisonline.map.time.timeSlider.setLoop(!0);arcgisonline.map.time.timeSlider.startup();arcgisonline.map.time.updateTitle();arcgisonline.map.time.handlers[0]=c.connect(arcgisonline.map.time.timeSlider,"onTimeExtentChange",arcgisonline.map.time,"updateTitle");arcgisonline.map.time.handlers[2]=c.connect(f.byId("timeSliderSettingsButton"),"onClick",
arcgisonline.map.time,"displaySettings");c.style(c.byId("timeDiv"),"display","block");f.byId("main-content").resize()})},updateTimeSlider:function(){if(arcgisonline.map.time.fullTimeExtent){var a=arcgisonline.map.time.fullTimeExtent,b=arcgisonline.map.time.getFullTimeExtent();if(0===a.startTime-b.startTime&&0===a.endTime-b.endTime)return}delete arcgisonline.map.time.timeSliderProperties;arcgisonline.map.time.recreateTimeSlider()},recreateTimeSlider:function(){if(arcgisonline.map.time.timeSlider){var a=
arcgisonline.map.time.timeSlider.playing;arcgisonline.map.time.removeTimeSlider();arcgisonline.map.time.showTimeSlider();a&&arcgisonline.map.time.timeSlider.play()}},removeTimeSlider:function(){if(arcgisonline.map.time.timeSlider){c.forEach(arcgisonline.map.time.handlers,function(a){c.disconnect(a)},this);arcgisonline.map.time.handlers=[];var a=arcgisonline.map.time.timeSlider.id,b=c.byId(a).parentNode;arcgisonline.map.time.timeSlider.destroy();arcgisonline.map.time.timeSlider=null;arcgisonline.map.time.fullTimeExtent=
null;c.create("div",{id:a},b)}},hideTimeSlider:function(){c.style(c.byId("timeDiv"),"display","none");f.byId("main-content").resize()},updateTitle:function(a){arcgisonline.map.main.map.infoWindow.hide();var b=null,d=null;a?(b=a.startTime,0<a.endTime.getTime()-a.startTime.getTime()&&(d=a.endTime)):2==arcgisonline.map.time.timeSlider.thumbCount?(b=arcgisonline.map.time.timeSlider.timeStops[0],d=arcgisonline.map.time.timeSlider.timeStops[1]):b=arcgisonline.map.time.timeSlider.timeStops[0];var g=null,
f=a=null,e=!1;d&&b.getFullYear()==d.getFullYear()?(b.getMonth()==d.getMonth()?b.getDate()==d.getDate()?a=b.getHours()==d.getHours()?b.getMinutes()==d.getMinutes()?b.getSeconds()==d.getSeconds()?esri.i18nBundle.viewer.time.millisecondTimePattern:esri.i18nBundle.viewer.time.secondTimePattern:esri.i18nBundle.viewer.time.minuteTimePattern:esri.i18nBundle.viewer.time.minuteTimePattern:(2>d.getDate()-b.getDate()&&(a=esri.i18nBundle.viewer.time.minuteTimePattern),e=!0):e=!0,f="long"):d&&10<d.getFullYear()-
b.getFullYear()?(g=esri.i18nBundle.viewer.time.yearPattern,e=!0):(e=!0,f="long");var h=c.date.locale.format(b,{datePattern:g,formatLength:f,selector:"date"});a&&(b=c.date.locale.format(b,{timePattern:a,selector:"time"}),h=c.i18n.getLocalization("dojo.cldr","gregorian")["dateTimeFormat-medium"].replace(/\{1\}/g,h).replace(/\{0\}/g,b));b="";d&&(e&&(b=c.date.locale.format(d,{datePattern:g,formatLength:f,selector:"date"})),a&&(g=c.date.locale.format(d,{timePattern:a,selector:"time"}),b=e&&a?c.i18n.getLocalization("dojo.cldr",
"gregorian")["dateTimeFormat-medium"].replace(/\{1\}/g,b).replace(/\{0\}/g,g):g));d=d?c.string.substitute(esri.i18nBundle.viewer.time.timeRange,{startTime:h,endTime:b}):""+h;c.byId("timeSliderDesc").innerHTML=d},getFullTimeExtent:function(){var a=null,b=function(b){a?(a.startTime>b.startTime&&(a.startTime=new Date(b.startTime.getTime())),a.endTime<b.endTime&&(a.endTime=new Date(b.endTime.getTime()))):a=new esri.TimeExtent(new Date(b.startTime.getTime()),new Date(b.endTime.getTime()))};c.forEach(arcgisonline.map.main.mapLayers,
function(a){a&&(a.layer&&a.layer.timeInfo&&a.layer.useMapTime)&&("esri.layers.KMLLayer"==a.layer.declaredClass?(a=a.layer.getLayers(),c.forEach(a,function(a){a.timeInfo&&a.timeInfo.timeExtent&&b(a.timeInfo.timeExtent)},this)):a.layer.timeInfo.timeExtent&&b(a.layer.timeInfo.timeExtent))},this);a.startTime=new Date(a.startTime.getFullYear(),a.startTime.getMonth(),a.startTime.getDate(),a.startTime.getHours(),a.startTime.getMinutes(),0,0);a.endTime=new Date(a.endTime.getFullYear(),a.endTime.getMonth(),
a.endTime.getDate(),a.endTime.getHours(),a.endTime.getMinutes()+1,0,0);return a},getUpdatedFullTimeExtent:function(){var a=new c.Deferred,b=[];c.forEach(arcgisonline.map.main.mapLayers,function(a){a&&(a.layer&&a.layer.timeInfo&&a.layer.useMapTime&&a.layer.timeInfo.hasLiveData)&&b.push(arcgisonline.map.time.returnUpdatesCall(a))});b.length?(new c.DeferredList(b)).addCallback(function(b){a.callback(arcgisonline.map.time.getFullTimeExtent())}):a.callback(arcgisonline.map.time.getFullTimeExtent());return a},
returnUpdatesCall:function(a){var b=new c.Deferred;if(a.layer&&a.layer.url&&a.layer.version&&10.1<a.layer.version){var d=a.layer.url+(-1<a.layer.url.indexOf("?")?"\x26f\x3djson\x26returnUpdates\x3dtrue ":"?f\x3djson\x26returnUpdates\x3dtrue ");esri.request({url:d,callbackParamName:"callback",load:function(c,d){if(c.timeExtent&&2==c.timeExtent.length){var e=new esri.TimeExtent;e.startTime=new Date(c.timeExtent[0]);e.endTime=new Date(c.timeExtent[1]);a.layer.timeInfo.timeExtent=e}b.callback()},error:function(a){b.callback()}})}else b.callback();
return b},findDefaultInterval:function(){var a=arcgisonline.map.time.getSingleTemporalMapLayer();if(a&&a.serviceInfo&&a.serviceInfo.timeInfo){var b=a.serviceInfo.timeInfo.defaultTimeInterval||a.serviceInfo.timeInfo.timeInterval,a=a.serviceInfo.timeInfo.defaultTimeIntervalUnits||a.serviceInfo.timeInfo.timeIntervalUnits;if(b&&a){arcgisonline.map.time.timeSliderDefaultInterval=b;arcgisonline.map.time.timeSliderDefaultUnits=a;return}}b=arcgisonline.map.time.fullTimeExtent;b=(b.endTime.getTime()-b.startTime.getTime())/
10;31104E8<b?(b=Math.round(b/31104E8),a="esriTimeUnitsCenturies"):31104E7<b?(b=Math.round(b/31104E7),a="esriTimeUnitsDecades"):31104E6<b?(b=Math.round(b/31104E6),a="esriTimeUnitsYears"):2592E6<b?(b=Math.round(b/2592E6),a="esriTimeUnitsMonths"):6048E5<b?(b=Math.round(b/6048E5),a="esriTimeUnitsWeeks"):864E5<b?(b=Math.round(b/864E5),a="esriTimeUnitsDays"):36E5<b?(b=Math.round(b/36E5),a="esriTimeUnitsHours"):6E4<b?(b=Math.round(b/6E4),a="esriTimeUnitsMinutes"):1E3<b?(b=Math.round(b/1E3),a="esriTimeUnitsSeconds"):
(b=Math.round(b),a="esriTimeUnitsMilliseconds");arcgisonline.map.time.timeSliderDefaultInterval=b;arcgisonline.map.time.timeSliderDefaultUnits=a},displaySettings:function(){var a=arcgisonline.sharing.dijit.dialog.TimeSettingsDlg.prototype.statics.getInstance();a.show(arcgisonline.map.main.mapLayers);a.placeHelpIcon()},toJson:function(){if(arcgisonline.map.time.timeSliderProperties){var a={};arcgisonline.map.time.timeSliderProperties.startTime&&(a.startTime=arcgisonline.map.time.timeSliderProperties.startTime);
arcgisonline.map.time.timeSliderProperties.endTime&&(a.endTime=arcgisonline.map.time.timeSliderProperties.endTime);arcgisonline.map.time.timeSliderProperties.thumbCount&&(a.thumbCount=arcgisonline.map.time.timeSliderProperties.thumbCount);arcgisonline.map.time.timeSliderProperties.thumbMovingRate&&(a.thumbMovingRate=arcgisonline.map.time.timeSliderProperties.thumbMovingRate);if(arcgisonline.map.time.timeSliderProperties.numberOfStops||0===arcgisonline.map.time.timeSliderProperties.numberOfStops)a.numberOfStops=
arcgisonline.map.time.timeSliderProperties.numberOfStops;arcgisonline.map.time.timeSliderProperties.timeStopInterval&&(a.timeStopInterval={},arcgisonline.map.time.timeSliderProperties.timeStopInterval.interval&&(a.timeStopInterval.interval=arcgisonline.map.time.timeSliderProperties.timeStopInterval.interval),arcgisonline.map.time.timeSliderProperties.timeStopInterval.units&&(a.timeStopInterval.units=arcgisonline.map.time.timeSliderProperties.timeStopInterval.units));return a}return null}}});