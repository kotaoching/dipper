// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("../../../../core/screenUtils ../../../../symbols/SimpleLineSymbol ../../../../symbols/SimpleMarkerSymbol ../../../../symbols/PictureMarkerSymbol ../../../../symbols/SimpleFillSymbol ../../../../symbols/TextSymbol ../../../../symbols/Symbol3D ../../../../symbols/Symbol ../../../../symbols/LineSymbol3D ../../../../symbols/PointSymbol3D ../../../../symbols/PolygonSymbol3D ../../../../symbols/LabelSymbol3D ../../../../renderers/support/jsonUtils".split(" "),function(d,p,f,m,q,r,n,s,t,u,v,w,x){function g(a){return a.toRgb().map(function(a){return a})}
function h(a){return Math.round(100*(1-a.a))}var l=function(a,y){var b;if(a instanceof p)b=t.fromJSON({symbolLayers:[{type:"Line",enable:!0,size:d.px2pt(a.width)||1,material:{color:a.color?g(a.color):[255,255,255],transparency:a.color?h(a.color):100}}]});else if(a instanceof m||a instanceof f){b=a.color?g(a.color):[255,255,255];var k=null==a.color?100:h(a.color),e,c;a instanceof m?(a.color&&0===a.color.r+a.color.g+a.color.b&&(b=[255,255,255]),e=a.source.imageData&&a.source.contentType?{dataURI:"data:"+
a.source.contentType+";base64,"+a.source.imageData}:"data:"===a.url.substring(0,5)?{dataURI:a.url}:{href:a.url},c=a.width):(e=a.style,c={},c[f.STYLE_CIRCLE]="circle",c[f.STYLE_CROSS]="cross",c[f.STYLE_DIAMOND]="kite",c[f.STYLE_SQUARE]="square",c[f.STYLE_X]="x",e in c?e=c[e]:(console.log(e+' cannot be mapped to Icon symbol. Fallback to "circle"'),e="circle"),e={primitive:e},c=a.size);b={type:"Icon",enable:!0,size:d.px2pt(c),screenOffset:[a.xoffset,a.yoffset],resource:e,material:{color:b,transparency:k}};
a.outline&&(a.outline.color&&0<a.outline.width)&&(b.outline={size:d.px2pt(a.outline.width),color:g(a.outline.color),transparency:h(a.outline.color)});b=u.fromJSON({symbolLayers:[b]})}else if(a instanceof q)b={symbolLayers:[{type:"Fill",enable:!0,material:{color:a.color?g(a.color):[255,255,255],transparency:a.color?h(a.color):100}}]},b=v.fromJSON(b),a.outline&&(k=l(a.outline,!1).symbolLayers[0],b.addLayer(k));else if(a instanceof r){switch(a.verticalAlignment){case "top":b="top";break;case "middle":b=
"center";break;case "bottom":b="bottom";break;default:b="center"}switch(a.horizontalAlignment){case "left":b+="Left";break;case "center":b+="Center";break;case "right":b+="Right";break;default:b+="Center"}b=w.fromJSON({symbolLayers:[{type:"Text",enable:!0,size:d.px2pt(a.font.size),font:{family:a.font.family,weight:a.font.weight,style:a.font.style},material:{color:g(a.color)},placement:b,screenOffset:[d.px2pt(a.xoffset),d.px2pt(a.yoffset)],text:a.text}]})}else a instanceof n?b=a:console.warn("SymbolConverter: don't know how to convert symbol of type '%s'",
a.type||a.declaredClass);y&&b&&(b.id=a.id);return b};return{toWeb3DSymbol:l,toWeb3DRenderer:function(a){function d(a){return a instanceof s&&!(a instanceof n)?l(a,!1):a}var b=x.fromJSON(a.toJSON());b.defaultSymbol=d(b.defaultSymbol);b.symbol=d(b.symbol);Array.isArray(b.infos)&&b.infos.forEach(function(a){a.symbol=d(a.symbol)});"undefined"!==typeof a.isMaxInclusive&&b.setMaxInclusive(a.isMaxInclusive);return b}}});