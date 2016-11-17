// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/Material.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n#ifdef INSTANCED\r\n    attribute mat4 model;\r\n    attribute mat4 modelNormal;\r\n#else\r\n\tuniform mat4 model;\r\n\tuniform mat4 modelNormal;\r\n#endif\r\n#ifdef INSTANCEDCOLOR\r\n    attribute vec4 instanceColor;\r\n#endif\r\n\tattribute vec3 $position;\r\n\tattribute vec3 $normal;\r\n\tvarying vec3 vpos;\r\n\tvarying vec3 vnormal;\r\n\r\n#ifdef VERTEXCOLORS\r\n    attribute vec4 $color;\r\n#endif\r\n\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n    varying vec4 vcolor;\r\n#endif\r\n\r\n\r\n\tvoid main(void) {\r\n\t\tvpos \x3d (model * vec4($position, 1.0)).xyz;\r\n\t\tvnormal \x3d normalize((modelNormal * vec4($normal, 1.0)).xyz);\r\n\t\tgl_Position \x3d proj * view * vec4(vpos, 1.0);\r\n\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n        vcolor \x3d vec4(1,1,1,1);\r\n#endif\r\n#ifdef VERTEXCOLORS\r\n        vcolor *\x3d $color * 0.003921568627451; // \x3d 1/255\r\n#endif\r\n#ifdef INSTANCEDCOLOR\r\n        vcolor *\x3d instanceColor;\r\n#endif\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongSrc"\x3e\x3c![CDATA[\r\n\tuniform vec3 camPos;\r\n\tuniform vec4 lightAmbient;\r\n\tuniform vec4 lightDiffuse;\r\n\tuniform vec4 lightSpecular;\r\n\tuniform vec3 lightDirection;\r\n\tuniform vec3 ambient;\r\n\tuniform vec3 diffuse;\r\n\tuniform vec3 specular;\r\n\tuniform float shininess;\r\n\tuniform float opacity;\r\n\tuniform sampler2D depthTex;\r\n\tuniform int shadowMapNum;\r\n\tuniform vec4 shadowMapDistance;\r\n\tuniform mat4 shadowMapMatrix[4];\r\n\tuniform float depthHalfPixelSz;\r\n\tuniform sampler2D ssaoTex;\r\n\tuniform vec4 viewportPixelSz;\r\n\tvarying vec3 vpos;\r\n\tvarying vec3 vnormal;\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n    varying vec4 vcolor;\r\n#endif\r\n\r\n\t$evalShadow\r\n\tvoid main() {\r\n\t\tvec3 a \x3d ambient * lightAmbient.rgb * lightAmbient.w;\r\n\r\n\t\tvec3 viewDir \x3d normalize(vpos - camPos);\r\n\r\n#ifndef DOUBLESIDED\r\n\t\tvec3 normal \x3d vnormal;\r\n#else\r\n\t\tvec3 normal \x3d dot(vnormal, viewDir)\x3e0.0?-vnormal:vnormal;\r\n#endif\r\n\r\n    normal \x3d normalize(normal);\r\n    \r\n\t\tfloat shadow \x3d evalShadow(vpos, 1.0 / gl_FragCoord.w, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);\r\n\t\tvec3 d \x3d (1.0 - shadow) * diffuse * lightDiffuse.rgb * lightDiffuse.w * clamp(dot(normal, lightDirection), .0, 1.0);\r\n\r\n\t\tfloat opacity_ \x3d opacity;\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n        a *\x3d vcolor.rgb;\r\n        d *\x3d vcolor.rgb;\r\n        opacity_ *\x3d vcolor.a;\r\n#endif\r\n\r\n\t\tvec3 reflDir \x3d normalize(reflect(viewDir, normal));\r\n\t\tfloat specDot \x3d max(dot(reflDir, lightDirection), .001);\r\n\t\tvec3 s \x3d (1.0 - shadow) * specular * lightSpecular.rgb * lightSpecular.w * pow(specDot, shininess);\r\n\r\n\t\tfloat ssao \x3d texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\r\n\t\tssao \x3d viewportPixelSz.z \x3c 0.0 ? 1.0 : ssao;\r\n\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhong"\x3e\x3c![CDATA[\r\n\t$vsPhongSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhong"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\t$fsPhongSrc\r\n\t\tgl_FragColor \x3d vec4(ssao * (a + d) + s, opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsPhongSrc\r\n#ifndef FLIPV\r\n\t\tvtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n    \r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\t$fsPhongSrc\r\n\t\tvec4 texColor \x3d texture2D(tex, vtc);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tgl_FragColor \x3d vec4(ssao * texColor.rgb * (a + d) + s, texColor.a * opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongAtlasTextured"\x3e\x3c![CDATA[\r\n\tattribute vec4 $uv0;\r\n\tattribute vec4 $region;\r\n\tvarying vec2 vtc;\r\n\tvarying vec4 regionV;\r\n\t$vsPhongSrc\r\n#ifndef FLIPV\r\n        vtc \x3d $uv0.xy;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t    regionV \x3d $region/65535.0;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongAtlasTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\tvarying vec4 regionV;\r\n\r\n\t$fsPhongSrc\r\n\t\tvec2 uv \x3d vtc;\r\n\t\tuv \x3d fract(uv);\r\n\t\t//[umin, vmin, umax, vmax]\r\n\r\n\t\tuv \x3d uv.xy*(regionV.zw-regionV.xy)+regionV.xy;\r\n\t\tvec4 texColor \x3d texture2D(tex, uv);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tgl_FragColor \x3d vec4(ssao * texColor.rgb * (a + d) + s, texColor.a * opacity_);\r\n\t\t//gl_FragColor \x3d regionV;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongTexturedRefl"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tuniform sampler2D reflTex;\r\n\tuniform float reflectivity;\r\n\tvarying vec2 vtc;\r\n\r\n\t$normal2envTC\r\n\r\n\t$fsPhongSrc\r\n\t\tvec4 texColor \x3d texture2D(tex, vtc);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tvec4 reflColor \x3d texture2D(reflTex, normal2envTC(reflDir));\r\n\t\tgl_FragColor \x3d vec4(ssao * mix(texColor.rgb * (a + d), reflColor.rgb * lightAmbient.rgb*lightSpecular.w, reflectivity) + s, texColor.a * opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepthSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tuniform vec2 nearFar;\r\n\tattribute vec3 $position;\r\n\tvarying float depth;\r\n\r\n\tvoid main(void) {\r\n\t\tvec4 eye \x3d view * model * vec4($position, 1.0);\r\n\t\tgl_Position \x3d proj * eye;\r\n\t\tdepth \x3d (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepth"\x3e\x3c![CDATA[\r\n\t$vsDepthSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepthTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsDepthSrc\r\n#ifndef FLIPV\r\n        vtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormalSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tuniform mat4 viewNormal;\r\n\tuniform mat4 modelNormal;\r\n\tattribute vec3 $position;\r\n\tattribute vec3 $normal;\r\n\tvarying vec3 vnormal;\r\n\r\n\tvoid main(void) {\r\n\t\tgl_Position \x3d proj * view * model * vec4($position, 1.0);\r\n\t\tvnormal \x3d normalize((viewNormal * modelNormal * vec4($normal, 1.0)).xyz);\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormal"\x3e\x3c![CDATA[\r\n\t$vsNormalSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormalTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsNormalSrc\r\n#ifndef FLIPV\r\n\t\tvtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepthSrc"\x3e\x3c![CDATA[\r\n\tvarying float depth;\r\n\r\n\tvoid main() {\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepth"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\t$calcFragDepth\r\n\t$float2rgba\r\n\t$fsDepthSrc\r\n#ifndef BIAS_SHADOWMAP\r\n\t\tgl_FragColor \x3d float2rgba(depth);\r\n#else\r\n\t\tgl_FragColor \x3d float2rgba(calcFragDepth(depth));\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepthTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\t$calcFragDepth\r\n\t$float2rgba\r\n\r\n\t$fsDepthSrc\r\n\t\tif (texture2D(tex, vtc).a \x3c .33) discard;\r\n#ifndef BIAS_SHADOWMAP\r\n\t\tgl_FragColor \x3d float2rgba(depth);\r\n#else\r\n\t\tgl_FragColor \x3d float2rgba(calcFragDepth(depth));\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsNormal"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tvarying vec3 vnormal;\r\n\tvoid main() {\r\n\t\tvec3 normal \x3d normalize(vnormal);\r\n\t\tif (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\r\n\r\n#ifndef ALPHA_ZERO\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 1.0);\r\n#else\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 0.0);\r\n#endif\r\n\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsNormalTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tvarying vec3 vnormal;\r\n\tvarying vec2 vtc;\r\n\tuniform sampler2D tex;\r\n\tvoid main() {\r\n\t\tif (texture2D(tex, vtc).a \x3c .33) discard;\r\n\t\tvec3 normal \x3d normalize(vnormal);\r\n\t\tif (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\r\n#ifndef ALPHA_ZERO\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 1.0);\r\n#else\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 0.0);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e'}});
define("dojo/_base/lang dojo/text!./Material.xml ./internal/MaterialUtil ../lib/GLSLProgram ../lib/GLSLShader ../lib/ShaderVariations ../lib/Util ../lib/gl-matrix".split(" "),function(s,A,h,r,l,B,n,C){var x=n.assert,t=C.vec3,y,q=t.create();n=function(a,f){h.basicMaterialConstructor(this,f);a=a||{};a.ambient=a.ambient||[0.2,0.2,0.2];a.diffuse=a.diffuse||[0.8,0.8,0.8];a.specular=a.specular||[0,0,0];a.shininess=a.shininess||10;a.opacity=void 0!==a.opacity?a.opacity:1;a.blendModeOneOne=a.blendModeOneOne||
!1;a.inverseWindingOrder=a.inverseWindingOrder||!1;a.vertexColors=a.vertexColors||!1;a.flipV=a.flipV||!1;a.doubleSided=a.doubleSided||!1;a.cullFace=a.cullFace||void 0;a.instanced=a.instanced||!1;this.instanced=!!a.instanced;a.textureId||(a.reflTextureId=void 0);var e;e=a.textureId?a.atlasRegions?"PosNormTexRegion":"PosNormTex":"PosNorm";a.vertexColors&&(e+="Col");var b=h.Layouts[e],d=a.instanced?h.Layouts.ModelCol:null;a.instanced&&(d=-1<a.instanced.indexOf("color")?h.Layouts.ModelCol:h.Layouts.Model);
this.dispose=function(){};this.getParams=function(){return a};this.getParameterValues=function(){var b={ambient:a.ambient,diffuse:a.diffuse,specular:a.specular,shininess:a.shininess,opacity:a.opacity,transparent:a.transparent,polygonOffset:a.polygonOffset,reflectivity:a.reflectivity,atlasRegions:a.atlasRegions,flipV:a.flipV,doubleSided:a.doubleSided,cullFace:a.cullFace};a.textureId&&(b.textureId=a.textureId,b.initTexture=a.initTexture);return b};this.setParameterValues=function(b){for(var d in b)"textureId"===
d&&x(a.textureId,"Can only change texture of material that already has a texture"),a[d]=b[d];this.notifyDirty("matChanged")};this.getOutputAmount=function(a){return a*b.getStride()};this.getVertexBufferLayout=function(){return b};this.getInstanceBufferLayout=function(){return d};this.fillInterleaved=function(a,d,p,g,e,c,f){h.fillInterleaved(a,d,p,g,b,e,c,f)};this.intersect=h.intersectTriangleGeometry;this.getGLMaterials=function(){return[E,F,G,z]};this.getAllTextureIds=function(){var b=[];a.textureId&&
b.push(a.textureId);a.reflTextureId&&b.push(a.reflTextureId);return b}};n.paramsFromOldConstructor=function(a,f,e,b,d,k,m,p,g,h,c,D,v){return{textureId:a,transparent:f,ambient:e,diffuse:b,specular:d,shininess:k,opacity:m,polygonOffset:p,initTexture:g,reflTextureId:h,reflectivity:c,flipV:D,doubleSided:v,cullFace:void 0}};var u=function(a,f){var e=f.cullFace?"none"!==f.cullFace:f.transparent?!1:!0;a.web3DDefaultState.cullEnabled!==e&&(e?(a.enable(a.CULL_FACE),"front"===f.cullFace&&a.cullFace(a.FRONT)):
a.disable(a.CULL_FACE))},w=function(a,f){var e=f.cullFace?"none"!==f.cullFace:f.transparent?!1:!0;a.web3DDefaultState.cullEnabled!==e&&(e?(a.disable(a.CULL_FACE),"front"===f.cullFace&&a.cullFace(a.BACK)):a.enable(a.CULL_FACE))},E=function(a,f,e){h.basicGLMaterialConstructor(this,a);var b=s.clone(a.getParams()),d=b.transparent?2:1;h.singleTextureGLMaterialConstructor(this,e,b);var k=h.aquireIfNotUndefined(b.reflTextureId,b.reflInitTexture,e);x(!(b.atlasRegions&&b.reflTextureId),"Atlas texture with reflection is not yet supported");
var m=!b.textureId?"none":b.atlasRegions?"AtlasTextured":"Textured";this.instanced=y&&b.instanced;var p=!!this.instanced&&-1<this.instanced.indexOf("color"),g=f.shaderVariators.Material.getProgram([m,!!b.reflTextureId,b.vertexColors,b.flipV,b.doubleSided,!!this.instanced,p]),l=this.dispose;this.dispose=function(){l();h.releaseIfNotUndefined(b.reflTextureId,e)};this.beginSlot=function(a){return d===a};this.getProgram=function(){return g};this.updateParameters=function(){var c=a.getParams();b.ambient=
c.ambient;b.diffuse=c.diffuse;b.specular=c.specular;b.shininess=c.shininess;b.opacity=c.opacity;b.polygonOffset=c.polygonOffset;b.reflectivity=c.reflectivity;b.flipV=c.flipV;b.doubleSided=c.doubleSided;b.cullFace=c.cullFace;b.transparent!=c.transparent&&(d=c.transparent?2:1,b.transparent=c.transparent);b.initTexture=c.initTexture;this.updateTexture(c.textureId);c.atlasRegions&&(b.atlasRegions=c.atlasRegions);b.blendModeOneOne=c.blendModeOneOne;b.inverseWindingOrder=c.inverseWindingOrder};this.bind=
function(c,d){g.use();g.uniform3fv("ambient",b.ambient);g.uniform3fv("diffuse",b.diffuse);g.uniform3fv("specular",b.specular);g.uniform1f("shininess",b.shininess);g.uniform1f("opacity",b.opacity);this.bindTexture(c,g);void 0!==k&&(g.uniform1i("reflTex",1),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,k),c.activeTexture(c.TEXTURE0),g.uniform1f("reflectivity",b.reflectivity));a.getVertexBufferLayout().enableVertexAttribArrays(c,g,!1);this.instanced&&a.getInstanceBufferLayout().enableVertexAttribArrays(c,
g,d.extensions.angleInstancedArrays);b.inverseWindingOrder&&c.frontFace(c.CW);b.transparent&&(c.enable(c.BLEND),b.blendModeOneOne&&(c.blendFunc(c.ONE,c.ONE),c.depthMask(!1)));b.polygonOffset&&(c.enable(c.POLYGON_OFFSET_FILL),c.polygonOffset(2,2));u(c,b)};this.release=function(c,d){b.polygonOffset&&c.disable(c.POLYGON_OFFSET_FILL);w(c,b);b.transparent&&(c.disable(c.BLEND),b.blendModeOneOne&&(c.blendFunc(c.web3DDefaultState.blendFuncSrc,c.web3DDefaultState.blendFuncDst),c.depthMask(!0)));b.inverseWindingOrder&&
c.frontFace(c.CCW);a.getVertexBufferLayout().disableVertexAttribArrays(c,g,!1);this.instanced&&a.getInstanceBufferLayout().disableVertexAttribArrays(c,g,d.extensions.angleInstancedArrays)};this.bindView=function(a,b){var d=b.origin;h.bindView(d,b.view,g);h.bindCamPos(d,b.viewInvTransp,g);b.shadowMap.bindView(g,d)};this.bindInstance=function(a,d){g.uniformMatrix4fv("model",d.transformation);g.uniformMatrix4fv("modelNormal",d.transformationNormal);if(p&&d.instanceParameters){var e=d.instanceParameters.color;
e&&(t.multiply(b.ambient,e,q),g.uniform3fv("ambient",q),t.multiply(b.diffuse,e,q),g.uniform3fv("diffuse",q),g.uniform1f("opacity",b.opacity*e[3]))}};this.getDrawMode=function(a){return a.TRIANGLES}},z=function(a,f,e,b){h.basicGLMaterialConstructor(this,a);var d=s.clone(a.getParams()),k=null!=b?f.get(a.getVertexBufferLayout().hasAttribute("uv0")?"depthTexturedShadowMap":"depthShadowMap"):f.get(a.getVertexBufferLayout().hasAttribute("uv0")?"depthTextured":"depth"),m=d.transparent?2:1;h.singleTextureGLMaterialConstructor(this,
e,d);this.beginSlot=function(a){return m===a};this.getProgram=function(){return k};this.updateParameters=function(){var b=a.getParams();d.initTexture=b.initTexture;this.updateTexture(b.textureId)};this.bind=function(b,e){k.use();k.uniform2fv("nearFar",e.nearFar);d.inverseWindingOrder&&b.frontFace(b.CW);this.bindTexture(b,k);a.getVertexBufferLayout().enableVertexAttribArrays(b,k);u(b,d)};this.release=function(b){w(b,d);d.inverseWindingOrder&&b.frontFace(b.CCW);a.getVertexBufferLayout().disableVertexAttribArrays(b,
k)};this.bindView=function(a,b){h.bindView(b.origin,b.view,k)};this.bindInstance=function(b,a){k.uniformMatrix4fv("model",a.transformation)};this.getDrawMode=function(a){return a.TRIANGLES}},F=function(a,f,e){z.call(this,a,f,e,!0)},G=function(a,f,e){h.basicGLMaterialConstructor(this,a);var b=s.clone(a.getParams()),d=f.get(a.getVertexBufferLayout().hasAttribute("uv0")?"normalTextured":"normal"),k=b.transparent?2:1;h.singleTextureGLMaterialConstructor(this,e,b);this.beginSlot=function(a){return k===
a};this.getProgram=function(){return d};this.updateParameters=function(){var d=a.getParams();b.initTexture=d.initTexture;this.updateTexture(d.textureId)};this.bind=function(e,f){d.use();this.bindTexture(e,d);d.uniformMatrix4fv("viewNormal",f.viewInvTransp);a.getVertexBufferLayout().enableVertexAttribArrays(e,d);u(e,b);b.inverseWindingOrder&&e.frontFace(e.CW)};this.release=function(e){w(e,b);b.inverseWindingOrder&&e.frontFace(e.CCW);a.getVertexBufferLayout().disableVertexAttribArrays(e,d)};this.bindView=
function(a,b){h.bindView(b.origin,b.view,d)};this.bindInstance=function(a,b){d.uniformMatrix4fv("model",b.transformation);d.uniformMatrix4fv("modelNormal",b.transformationNormal)};this.getDrawMode=function(a){return a.TRIANGLES}};n.loadShaders=function(a,f,e,b){a._parse(A);b.getExtension("OES_standard_derivatives");y=b.getExtension("ANGLE_instanced_arrays");var d=new B("phong",["vsPhong","fsPhong"],null,e,f,a,b);d.addNaryShaderSnippetSuffix([{value:"none",programNameSuffix:"",shaderSnippetSuffix:""},
{value:"Textured"},{value:"AtlasTextured"}]);d.addBinaryShaderSnippetSuffix("Refl","Refl",[!1,!0]);d.addDefine("Color","VERTEXCOLORS");d.addDefine("FlipV","FLIPV");d.addDefine("DoubleSided","DOUBLESIDED");d.addDefine("Instanced","INSTANCED");d.addDefine("InstColor","INSTANCEDCOLOR");e.shaderVariators.Material=d;var d=new l(b.VERTEX_SHADER,a.vsDepth,b),h=new l(b.VERTEX_SHADER,a.vsDepthTextured,b),m=new l(b.VERTEX_SHADER,a.vsNormal,b),p=new l(b.VERTEX_SHADER,a.vsNormalTextured,b),g=new l(b.FRAGMENT_SHADER,
a.fsDepth,b,["BIAS_SHADOWMAP 1"]),n=new l(b.FRAGMENT_SHADER,a.fsDepthTextured,b,["BIAS_SHADOWMAP 1"]),c=new l(b.FRAGMENT_SHADER,a.fsDepth,b),q=new l(b.FRAGMENT_SHADER,a.fsDepthTextured,b),v=new l(b.FRAGMENT_SHADER,a.fsNormal,b),s=new l(b.FRAGMENT_SHADER,a.fsNormalTextured,b);a=new r([d,g],b);var t=new r([h,n],b),u=new r([d,c],b),h=new r([h,q],b),m=new r([m,v],b);b=new r([p,s],b);e.add("depthShadowMap",a);e.add("depthTexturedShadowMap",t);e.add("depth",u);e.add("depthTextured",h);e.add("normal",m);
e.add("normalTextured",b);f.add("fsDepth",c);f.add("fsDepthTextured",q);f.add("fsDepthShadowMap",g);f.add("fsDepthTexturedShadowMap",n);f.add("vsDepth",d);f.add("fsNormal",v)};return n});