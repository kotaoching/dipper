// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../../../core/declare","../../../core/Accessor"],function(p,q){var h=p([q],{normalizeCtorArgs:function(a){if(!a.tileInfo||!a.tileInfo.lods.length)return{valid:!1};var c=a.tileInfo,b=c.lods,d=a.minZoom||-1,e=a.maxZoom||-1,f=a.minScale||0,k=a.maxScale||0;a=null!=a.snapToZoom?a.snapToZoom:!0;var h=-1,l=-1,m=!1,n=!1,g;for(g=0;g<b.length;g++)!m&&(0<f&&f>=b[g].scale)&&(h=b[g].level,m=!0),!n&&(0<k&&k>=b[g].scale)&&(l=0<g?b[g-1].level:-1,n=!0);-1===d&&(d=0===f?b[0].level:h);-1===e&&(e=0===k?b[b.length-
1].level:l);return{valid:!0,tileInfo:c,lods:b,minZoom:d,maxZoom:e,snapToZoom:a}},initialize:function(){var a=this.lods,c=this.minZoom,b=this.maxZoom;this.valid&&(this._lodByZoom={},this._lodByScale={},this.zooms=[],this.scales=[],a=a.map(function(a){return a.clone()}),a=a.filter(function(a){return a.level>=c&&a.level<=b}),a.sort(function(a,b){return b.scale-a.scale}),a.forEach(function(a,b){this._lodByZoom[a.level]=a;this._lodByScale[a.scale]=a;this.zooms[b]=a.level;this.scales[b]=a.scale},this),
this.lods=a,this.minZoom=this.zooms[0],this.maxZoom=this.zooms[this.zooms.length-1],this.minScale=this._lodByZoom[this.minZoom].scale,this.maxScale=this._lodByZoom[this.maxZoom].scale)},snapToZoom:!0,constrain:function(a,c,b){if(!this.valid||a.scale===(c&&c.scale))return a;var d=this.minScale,e=this.maxScale,f=a.targetGeometry;if(a.scale>=e&&a.scale<=d)return this.snapToZoom&&!b.interacting&&(a.scale=this.getClosestScale(a.scale)),a;if(a.scale>d||a.scale<e)b=a.scale>d?d:e,c&&(d=(b-c.scale)/(a.scale-
c.scale),c=c.targetGeometry,f.x=c.x+(f.x-c.x)*d,f.y=c.y+(f.y-c.y)*d),a.scale=b;this.snap&&(a.scale=this.getClosestScale(a.scale));return a},getZoomForScale:function(a){var c=this.lods,b=null,d=null,e=0,f=c.length-1;for(e;e<f;e++){b=c[e];d=c[e+1];if(b.scale<=a)return b.level;if(d.scale===a)return d.level;if(b.scale>a&&d.scale<a)return d.level-(a-d.scale)/(b.scale-d.scale)}},getScaleForZoom:function(a){var c=this.lods,b=null,d=null,e=0,f=c.length-1;for(e;e<f;e++){b=c[e];d=c[e+1];if(b.level<=a)return b.scale;
if(d.level===a)return d.scale;if(b.level>a&&d.level<a)return d.scale-(a-d.level)/(b.level-d.level)}},getClosestScale:function(a){var c=this.scales;this._lodByScale[a]||(a=c.reduce(function(b,d,c,f){return Math.abs(d-a)<=Math.abs(b-a)?d:b},c[0]));return this._lodByScale[a].scale},clone:function(){return new h({lods:this.lods,minZoom:this.minZoom,maxZoom:this.maxZoom})},_getBounds:function(a,c,b){a=this.lods;c=this.minZoom;b=this.maxZoom;if(this.valid)return this._lodByZoom={},this._lodByScale={},this.zooms=
[],this.scales=[],a=a.map(function(a){return a.clone()}),a=a.filter(function(a){return a.level>=c&&a.level<=b}),a.sort(function(a,b){return b.scale-a.scale}),a.forEach(function(a,b){this._lodByZoom[a.level]=a;this._lodByScale[a.scale]=a;this.zooms[b]=a.level;this.scales[b]=a.scale},this),{lods:a,minZoom:this.zooms[0],maxZoom:this.zooms[this.zooms.length-1],minScale:this._lodByZoom[this.minZoom].scale,maxScale:this._lodByZoom[this.maxZoom].scale}}});return h});