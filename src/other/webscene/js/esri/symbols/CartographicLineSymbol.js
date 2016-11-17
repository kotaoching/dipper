// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./SimpleLineSymbol"],function(b,e,f,g,m){var c={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_INSIDE_FRAME:"inside-frame",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot",CAP_BUTT:"butt",
CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},h={color:[0,0,0,1],style:c.STYLE_SOLID,width:1,cap:c.CAP_BUTT,join:c.JOIN_MITER,miterLimit:10},k={butt:"esriLCSButt",round:"esriLCSRound",square:"esriLCSSquare"},l={miter:"esriLJSMiter",round:"esriLJSRound",bevel:"esriLJSBevel"};b=b(m,{declaredClass:"esri.symbols.CartographicLineSymbol",type:"cartographiclinesymbol",getDefaults:function(){return e.mixin(this.inherited(arguments),h)},normalizeCtorArgs:function(a,
b,c,e,f,g){if(a&&"string"!==typeof a)return a;var d={};a&&(d.style=a);b&&(d.color=b);null!=c&&(d.width=c);e&&(d.cap=e);f&&(d.join=f);null!=g&&(d.miterLimit=g);return d},_capReader:function(a){return f.valueOf(k,a)},_joinReader:function(a){return f.valueOf(l,a)},_miterLimitReader:g.pt2px,toJSON:function(){var a=g.px2pt(this.miterLimit),a=isNaN(a)?void 0:a;return f.fixJson(e.mixin(this.inherited(arguments),{type:"esriCLS",cap:k[this.cap],join:l[this.join],miterLimit:a}))}});e.mixin(b,c);b.defaultProps=
h;return b});