// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./Texture","./ModelContentType"],function(s,q){var c,r=function(t){this._textTextures={};var m=s.__idGen.gen(t),b=null;this.getId=function(){return m};this.dispose=function(){};this.deferredLoading=function(){return!1};this.getWidth=function(){return 512};this.getHeight=function(){return 512};this.renderGl=function(b,a){this._createTextTexture(b,a);a._isTracingEnabled&&(b._debugTracingType="TextTextureAtlas")};this._createTextTexture=function(b,a){void 0===c&&(c=document.createElement("canvas"),
c.setAttribute("id","canvas2d"),c.setAttribute("width",512),c.setAttribute("height",512),c.setAttribute("style","display:none"));var d=c.getContext("2d");d.save();d.clearRect(0,0,512,512);a.bindTexture(a.TEXTURE_2D,b);for(var f in this._textTextures){var h=this._textTextures[f];h.textTexture.renderText(1,h.placement.width,h.placement.height,d,h.placement.atlasOffX,h.placement.atlasOffY)}a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,c);f=a.LINEAR;a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,
a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,f);a.bindTexture(a.TEXTURE_2D,null);d.restore()};this.setUnloadFunc=function(c){b=c};this.unload=function(){null!=b&&(b(m),b=void 0)}};return function(c,m){var b=[],l=0,a=0,d=0;this.dispose=function(){for(var a=0;a<b.length;a++)m.remove(q.TEXTURE,b[a].getId());b=[]};this.addTextTexture=function(f){for(var h=JSON.stringify(f.getParams())+
"_"+f.getString(),e=0;e<b.length;e++){var k=b[e]._textTextures[h];if(null!=k)return k.placement}var g=null;0===b.length&&(g=new r(c),b.push(g));var e=f.getTextWidth(),k=f.getTextHeight(),n,p;d=Math.max(d,k);512>l+e&&512>a+d||(512>a+d+k?(l=0,a+=d):(g=new r(c),b.push(g),a=l=0),d=k);n=l;p=a;l+=e;null!=g&&m.add(q.TEXTURE,g);g=b[b.length-1];e={uvMinMax:[n/512,1-(p+k)/512,(n+e)/512,1-p/512],atlasOffX:n,atlasOffY:p,width:e,height:k,texture:g};g._textTextures[h]={placement:e,textTexture:f};return e}}});