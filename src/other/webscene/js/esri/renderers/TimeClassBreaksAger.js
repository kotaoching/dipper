// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/array dojo/_base/lang dojo/date ../core/lang ../symbols/support/jsonUtils ../Color ./SymbolAger".split(" "),function(k,l,m,n,p,q,r,s){var b=k(s,{declaredClass:"esri.renderer.TimeClassBreaksAger",constructor:function(c,a){this.infos=c;this.timeUnits=a||"day";c.sort(function(a,c){return a.minAge<c.minAge?-1:a.minAge>c.minAge?1:0})},getAgedSymbol:function(c,a){var e=a.getLayer(),b=a.attributes,f=p.isDefined;c=q.fromJSON(c.toJSON());var g=e._map.timeExtent.endTime;if(!g)return c;
var h=n.difference(new Date(b[e._startTimeField]),g,this.timeUnits);l.some(this.infos,function(a){if(h>=a.minAge&&h<=a.maxAge){var e=a.color,b=a.size;a=a.alpha;e&&c.setColor(e);f(b)&&this._setSymbolSize(c,b);f(a)&&c.color&&(c.color.a=a);return!0}},this);return c},toJson:function(){try{throw Error("toJson is deprecated, use toJSON instead");}catch(c){console.warn(c.stack)}return this.toJSON()},toJSON:function(){var c={agerClassBreakInfos:[]},a,b,d;c.timeUnits=this._getRestUnits(this.timeUnits);for(a=
0;a<this.infos.length;a+=1)b=this.infos[a],d={},d.oldestAge=Infinity===b.maxAge?null:b.maxAge,d.size=b.size,b.color&&(d.color=r.toJSON(b.color)),b.alpha&&(d.alpha=Math.round(255*b.alpha)),c.agerClassBreakInfos[a]=d;return c},_getRestUnits:function(c){var a="esriTimeUnitsDays";switch(c){case b.UNIT_SECONDS:a="esriTimeUnitsSeconds";break;case b.UNIT_MILLISECONDS:a="esriTimeUnitsMilliseconds";break;case b.UNIT_HOURS:a="esriTimeUnitsHours";break;case b.UNIT_MINUTES:a="esriTimeUnitsMinutes";break;case b.UNIT_MONTHS:a=
"esriTimeUnitsMonths";break;case b.UNIT_WEEKS:a="esriTimeUnitsWeeks";break;case b.UNIT_YEARS:a="esriTimeUnitsYears"}return a}});m.mixin(b,{UNIT_DAYS:"day",UNIT_HOURS:"hour",UNIT_MILLISECONDS:"millisecond",UNIT_MINUTES:"minute",UNIT_MONTHS:"month",UNIT_SECONDS:"second",UNIT_WEEKS:"week",UNIT_YEARS:"year"});return b});