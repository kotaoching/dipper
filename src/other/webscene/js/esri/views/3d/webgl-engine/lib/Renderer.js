// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define("./IntervalUtilities ./ModelDirtyTypes ./Float32ArrayList ./InstanceBufferData ./VertexBufferLayout ../materials/internal/SimpleGLMaterial ../materials/internal/TexOnlyGLMaterial ./GLFBO ./GLVBO ./GLSLProgram ./LinearDepthTextureHelper ./NormalTextureHelper ./bitset ./Util ./gl-matrix".split(" "),function(Qb,$b,Rb,ac,Hb,rb,bb,bc,sb,cb,cc,dc,ec,l,W){function tb(m){this.camera=null;this.slot=0;this.pass="";this.getMaterial=this.filterFaceRange=this.filterContent=this.visibleContent=this.ssaoHelper=
this.shadowMap=this.lightingData=null;this.set(m)}var v=l.assert,db=l.subtractObjects,ub=l.array2object,vb=l.objectEmpty,za=l.getFirstObjectValue,wb=l.setMatrixTranslation3,fc=W.vec2d,m=W.mat4d,Aa=W.vec3d,Q=W.vec4d,gc=l.VertexAttrConstants;tb.prototype.set=function(m){if(m)for(var e in m)this[e]=m[e]};var Sb=function(v,e,q,l,a,w,hc,F){this.name=v;this.from=e;this.to=q;this.displayedIndexRange=l;this.transformation=a;this.instanceParameters=w;this.idx=hc;this.dataId=F;null!=a&&(this.transformationNormal=
m.create(),m.set(a,this.transformationNormal),m.inverse(this.transformationNormal,this.transformationNormal),m.transpose(this.transformationNormal,this.transformationNormal))},ic=function(m,e,q,v){var a=Q.create(m),w=Q.create(e),l=Q.create(q),F=Aa.create(v);this.setUniforms=function(e){e.uniform4fv("lightAmbient",a);e.uniform4fv("lightDiffuse",w);e.uniform4fv("lightSpecular",l);e.uniform3fv("lightDirection",F)};this.set=function(e){e.ambient&&Q.set(e.ambient,a);e.diffuse&&Q.set(e.diffuse,w);e.specular&&
Q.set(e.specular,l);e.direction&&Aa.set(e.direction,F)};this.get=function(){return{ambient:a,diffuse:w,specular:l,direction:F}};this.getLightDirection=function(){return F};this.getLightAmbient=function(){return a};this.getLightDiffuse=function(){return w};this.getLightSpecular=function(){return l}};return function(l,e,q,Q,a,w){function W(){var b=K.clone();b.and(ea);return b}function F(b){return b.material.getDrawMode(a)===a.LINES?jc:kc}function Ba(b){return b.material}var X=new ic([1,1,1,1],[1,1,
1,1],[1,1,1,1],[0,1,0]),s={},t={},D=[],z=[[],[],[],[],[],[],[]],eb=0,B=!1,ea,fa,K,oa=0,ga=0,Y=0,pa,qa,Z,Ca=1;this.ssaoEnabled=!1;var Na=new tb({lightingData:X});a.enable(a.DEPTH_TEST);a.enable(a.CULL_FACE);a.disable(a.BLEND);a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA);var xb=a.getContextAttributes().alpha?a.RGBA:a.RGB,fb={angleInstancedArrays:a.getExtension("ANGLE_instanced_arrays")},$=!0,k={view:null,proj:null,viewInvTransp:null,nearFar:null,lightingData:null,viewport:null,framebufferTex:null,
shadowMap:null,origin:void 0,pixelRatio:null,instanceParameters:void 0,depthFBO:null,extensions:fb},E=new cc(a),L=new dc(a);this.dispose=function(){var b,c,d;for(b in s)for(c in Ib(b),d=s[b],d.origin2data)d.origin2data[c].vbo.dispose();s=null;for(b in t)for(c in Ib(b),d=t[b],d.origin2data)d.origin2data[c].vbo.dispose();t=null;Da.dispose();M.dispose();ha&&a.deleteTexture(ha);ha=null;a.deleteTexture(ia);ia=null;E.getEnableState()&&E.disable();L.getEnableState()&&L.disable()};this.setLightingData=function(b){X.set(b);
$=!0};this.getLightingData=function(){return X.get()};this.setPixelRatio=function(b){Ca=b;$=!0};this.getPixelRatio=function(){return Ca};this.addExternalRenderer=function(b,c){Array.isArray(b)||(b=[b]);b.forEach(function(b){v(b<z.length,"invalid slot for external renderer");z[b].push(c)});c.setContext(a);c.setTextureRep&&c.setTextureRep(Q);return $=!0};this.removeExternalRenderer=function(b,c){Array.isArray(b)||(b=[b]);var d=0;b.forEach(function(b){v(b<z.length,"invalid slot for external renderer");
b=z[b];for(var a=0;a<b.length;a++)if(b[a]===c){b[a]=b[b.length-1];b.pop();$=!0;d++;break}});return d===b.length};this.getExternalRenderers=function(){return z};this.resetNeedsRender=function(){$=!1;for(var b=0;b<z.length;b++)for(var c=z[b],d=0;d<c.length;d++)c[d].resetNeedsRender&&c[d].resetNeedsRender()};this.needsRender=function(){if($)return!0;for(var b=0;b<z.length;b++)for(var c=z[b],d=0;d<c.length;d++)if(!c[d].needsRender||c[d].needsRender())return!0;return!1};var R,N=0,Ea=0,Oa=0,Pa=0,ra=0,aa=
0;this.getCombinedStats=function(){var b={trianglesRendered:N,drawCallsInstanced:Ea,drawCallsAngleInstanced:Oa,drawCallsMerged:Pa,drawCallsFragmented:ra,instancesDrawnAngle:aa},c=0,d=0,a=0,yb,g,h,e;for(yb in t)for(h in g=t[yb],g.origin2data)e=g.origin2data[h],c+=e.buffer.getArray().length,d+=e.buffer.getSize(),a+=e.optimalCount;for(yb in s)for(h in g=s[yb],g.origin2data)e=g.origin2data[h],c+=e.buffer.getArray().length,d+=e.buffer.getSize(),a+=e.optimalCount;b.VBOallocatedSize=4*c/1024;b.VBOusedSize=
4*d/1024;b.VBOoptimalSize=4*a/1024;return b};this.setContent=function(b){for(var c={},a=0,f=b.length;a<f;++a)c[b[a].uniqueName]=b[a];b=void 0===R?b:db(c,R);a=void 0===R?[]:db(R,c);R=c;this.modify(b,a)};this.setSelectionObject=function(b,c){b?(ea=gb(ub([b])),fa=void 0,null!=c&&1==c.length&&(fa=[[3*c[0][0],3*c[0][1]]]),K&&(Z=W())):fa=Z=ea=void 0;$=!0};this.setHighlightObjects=function(b,c){"object"!==typeof c&&(c={});var a=0<Y&&(Date.now()-qa)/1E3<Y;oa="number"===typeof c.fadeInTime?c.fadeInTime:0.2;
ga="number"===typeof c.fadeOutTime?c.fadeOutTime:0.5;pa="number"===typeof c.holdTime?c.holdTime:1;Y=0<=pa?pa+oa+ga:0;!b||0===b.length?(a||(qa=Date.now()),oa=0,Y=ga):(qa=Date.now(),K=gb(ub(b)),ea&&(Z=W()));$=!0};var kc=new rb(l,[0.1,0.2,0.9,0.4],a.EQUAL),jc=new rb(l,[0.1,0.2,0.9,0.4],a.EQUAL,a.LINES),ia=a.createTexture();a.bindTexture(a.TEXTURE_2D,ia);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,4,4,0,a.RGBA,a.UNSIGNED_BYTE,null);if(xb===a.RGBA){e=new Uint8Array(64);for(var Fa=0;64>Fa;Fa++)e[Fa]=255;var ha=a.createTexture();a.bindTexture(a.TEXTURE_2D,ha);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,4,4,0,a.RGBA,a.UNSIGNED_BYTE,e);var Ga=new bb(l,ha,[1,1,1,1],!0,a.ALWAYS)}e=function(b,c,d,f,e){B=!0;aa=Ea=Pa=N=
ra=Oa=0;Qa(b.projectionMatrix);for(var g=0;3>g;g++)ja("material",g,b,d,f),O(g,b,c,void 0,void 0,Ba,d);ja("material",3,b,d,f);O(3,b,c,void 0,void 0,Ba,d);g=b.viewport;a.bindTexture(a.TEXTURE_2D,ia);a.copyTexImage2D(a.TEXTURE_2D,0,xb,g[0],g[1],g[2],g[3],0);Na.set({framebufferTex:ia});ja("material",4,b,d,f);a.clear(a.DEPTH_BUFFER_BIT);O(4,b,c,void 0,void 0,Ba,d);if(ea){f=ea;g=fa;B=!0;for(var h=0;6>h;++h)O(h,b,c,f,g,F,d);B=!1}if(K)if(f=(Date.now()-qa)/1E3,0<=pa&&f>=Y)Z=K=void 0;else{hb[3]=f<oa?f*(0.7/
oa):0<=pa&&f>Y-ga?0.7*(1-(f-(Y-ga))/ga):0.7;Da.setSize(b.width,b.height);Da.bind();a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT);a.viewport(0,0,b.width,b.height);for(f=0;6>f;++f)O(f,b,c,K,void 0,Ba,d);if(Z){f=Z;B=!0;for(g=0;6>g;++g)O(g,b,c,f,void 0,F,d);B=!1}b=b.viewport;a.viewport(b[0],b[1],b[2],b[3]);a.bindFramebuffer(a.FRAMEBUFFER,e);Ra.bind(a,ba);Ra.bindView(a,ba);M.bind();M.setPointers(Ra.getProgram());a.drawArrays(a.TRIANGLE_STRIP,0,M.getNum());Ra.release(a,ba)}a.bindBuffer(a.ARRAY_BUFFER,
null);cb.unuse(a);Ga&&!e&&(a.blendFuncSeparate(a.ZERO,a.ONE,a.ONE,a.ZERO),Ga.bind(a,ba),Ga.bindView(a,ba),M.bind(),M.setPointers(Ga.getProgram()),a.drawArrays(a.TRIANGLE_STRIP,0,M.getNum()),Ga.release(a),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA));eb++;B=!1};Fa=function(b,c,d,f,e){B=!0;aa=Ea=Pa=N=ra=Oa=0;Qa(b.projectionMatrix);k.view=b.viewMatrix;k.proj=b.projectionMatrix;k.viewInvTransp=b.viewInverseTransposeMatrix;S[0]=b.near;S[1]=b.far;k.nearFar=S;k.lightingData=X;k.viewport=b.fullViewport;
k.framebufferTex=ia;k.shadowMap=d;k.pixelRatio=Ca;k.instanceParameters=void 0;k.depthFBO=E.getDepthFBO();k.normalFBO=L.getNormalFBO();f=D.length;var g=!0;for(e=0;e<f;e++){var h=D[e][1];if(h.instanced&&(b=h.instanced,(d=b.material)&&(!d.isVisible||d.isVisible())))Sa(b,d,k,Infinity,c,null,null,!1),g=!0;if(h.merged&&(b=h.merged,(d=b.material)&&(!d.isVisible||d.isVisible())))g&&(g=d.getProgram(),g.use(),g.uniformMatrix4fv("model",ca),g.hasUniform("modelNormal")&&g.uniformMatrix4fv("modelNormal",ca),g=
!1),ib(b,d,k,Infinity)}a.bindBuffer(a.ARRAY_BUFFER,null);cb.unuse(a);eb++;B=!1};this.render=w?Fa:e;this.renderAuxiliaryBuffers=function(b,c,a,f,e,g){a=this.ssaoEnabled;for(var h=0;h<z.length&&!a;h++)for(var k=z[h],Jb=0;Jb<k.length&&!a;Jb++)a=a||!!k[Jb].needsDepthMap;E.setEnableState(a);a&&(E.setupFBOs(b),E.prepareDepthPass(),this.renderSimple(b,c,"materialDepth"),E.finish(g));L.setEnableState(this.ssaoEnabled);this.ssaoEnabled&&(L.setupFBOs(b),L.prepareNormalPass(),this.renderSimple(b,c,"materialNormal"),
L.finish(g));this.ssaoEnabled&&f.computeSSAO(b,g,e,E.getDepthFBO(),L.getNormalFBO());f.bindAll(l)};var ja=function(b,c,a,f,e){var g=z[c];Na.set({slot:c,camera:a,shadowMap:f,ssaoHelper:e,pass:b,depth:E.getDepthFBO(),normals:L.getNormalFBO()});for(b=0;b<g.length;b++)g[b].render(Na)};this.renderSimple=function(b,c,a,f,e){B=!0;Qa(b.projectionMatrix);e=function(b){return b[a]};for(var g=0;6>g;++g)ja(a,g,b,f),O(g,b,c,void 0,void 0,e,f);B=!1};var S=fc.create(),O=function(b,c,a,f,e,g,h){k.view=c.viewMatrix;
k.proj=c.projectionMatrix;k.viewInvTransp=c.viewInverseTransposeMatrix;S[0]=c.near;S[1]=c.far;k.nearFar=S;k.lightingData=X;k.viewport=c.fullViewport;k.framebufferTex=ia;k.shadowMap=h;k.pixelRatio=Ca;k.instanceParameters=void 0;k.depthFBO=E.getDepthFBO();for(var m in t)c=t[m],(h=g(c))&&(h.beginSlot(b)&&(!h.isVisible||h.isVisible()))&&Sa(c,h,k,b,a,f,e,!1);if(f)for(m in s)c=s[m],(h=g(c))&&(h.beginSlot(b)&&(!h.isVisible||h.isVisible()))&&Sa(c,h,k,b,null,f,e,!0);else{a=l.getProgramsUsingUniform("model");
f=l.getProgramsUsingUniform("modelNormal");for(e=0;e<a.length;e++)c=a[e],c.use(),c.uniformMatrix4fv("model",ca),-1<f.indexOf(c)&&c.uniformMatrix4fv("modelNormal",ca);for(m in s)c=s[m],(h=g(c))&&(h.beginSlot(b)&&(!h.isVisible||h.isVisible()))&&ib(c,h,k,b)}},Sa=function(b,c,d,f,e,g,h,m){f=!1;var k=c.getDrawMode(a),n=fb.angleInstancedArrays,l;for(l in b.origin2data){var s=b.origin2data[l];d.origin=s.origin;var t=!1;if(c.instanced)for(var v in s.perGeometryDataInfo){var q=s.perGeometryDataInfo[v];f||
(c.bind(a,d),f=!0);t||(s.vbo.bind(),s.vbo.setPointers(c.getProgram()),c.bindView(a,d),t=!0);q.instanceBuffer.bind();q.instanceBuffer.setPointers(c.getProgram());var C=q.to-q.from,w=q.refCount;k===a.TRIANGLES&&(N+=w*C/3);n.drawArraysInstancedANGLE(k,q.from,C,w);Oa++;aa+=w}else{var q=s.instances,z;for(z in q){var C=q[z],w=C.idx,B=C.displayedIndexRange;h&&(B=h);if(!(B&&0===B.length)&&!(e&&!e.get(w)||g&&!g.get(w)))f||(c.bind(a,d),f=!0),t||(s.vbo.bind(),s.vbo.setPointers(c.getProgram()),c.bindView(a,d),
t=!0),m||c.bindInstance(a,C),Ea++,k===a.TRIANGLES&&(N+=(C.to-C.from)/3),B?jb(B,C.from,k):a.drawArrays(k,C.from,C.to-C.from)}}}f&&c.release(a,d)},jb=function(b,c,d){for(var f=0;f<b.length;f++){var e=b[f];a.drawArrays(d,e[0]+c,e[1]-e[0]+1)}ra+=b.length-1},ib=function(b,c,d,f){f=!1;for(var e in b.origin2data){var g=b.origin2data[e];d.origin=g.origin;if(!(g.displayedIndexRange&&0===g.displayedIndexRange.length)){f||(c.bind(a,d),f=!0);g.vbo.bind();g.vbo.setPointers(c.getProgram());c.bindView(a,d);Pa++;
var h=c.getDrawMode(a);h===a.TRIANGLES&&(N+=g.vbo.getNum()/3);g.displayedIndexRange?jb(g.displayedIndexRange,0,h):a.drawArrays(h,0,g.vbo.getNum())}}f&&c.release(a,d)},Qa=function(b){for(var a=l.getProgramsUsingUniform("proj"),d=0;d<a.length;d++)a[d].uniformMatrix4fv("proj",b);if(X){a=l.getProgramsUsingUniform("lightDirection");for(d=0;d<a.length;d++)X.setUniforms(a[d])}};this.print=function(){console.log("number of materials (merged/instanced): "+Object.keys(s).length+"/"+Object.keys(t).length);var b=
0,a,d,f;for(a in s)for(f in d=s[a],d.origin2data)b+=Object.keys(d.origin2data[f].instances).length;var e=0;for(a in t)for(f in d=t[a],d.origin2data)e+=Object.keys(d.origin2data[f].instances).length;console.log("number of instances (merged/instanced):"+b+"/"+e)};this.isEmpty=function(){for(var b in t){var a=t[b],d;for(d in a.origin2data)if(!vb(a.origin2data[d].instances))return!1}for(b in s)for(d in a=s[b],a.origin2data)if(!vb(a.origin2data[d].instances))return!1;return!0};this.modify=function(b,c,
d,f){B&&console.warn("Renderer.modify called while rendering");var e=[],g=[];Tb(b,e,g);var h=[],k=[];Tb(c,h,k);var l={};if(d)for(var n=$b.UpdateTypes,Kb=0;Kb<d.length;Kb++){var z=d[Kb],D=z.renderGeometry,E=Lb(D),F=z.updateType;if(F&n.FACERANGE){var C=D,L=E,R=l,N=C.material.getId(),Q=C.origin.id,W=(L?t:s)[N].origin2data[Q],X=W.instances[C.uniqueName];X&&(X.displayedIndexRange=C.displayedIndexRange,L||(R[N+"_"+Q]=W))}if(F&n.VERTEXATTRS||!E&&F&n.TRANSFORMATION){var sa=D,Y=E,M=sa.material,ia=M.getId(),
O=(Y?t:s)[ia].origin2data[sa.origin.id],K=O.instances[sa.uniqueName],ea=void 0,ga=void 0;if(!Y){var Z=sa.origin.vec3;wb(ta,-Z[0],-Z[1],-Z[2]);m.multiply(ta,sa.transformation,Ta);m.inverse(Ta,Ua);m.transpose(Ua);ea=Ta;ga=Ua}var S=M.getVertexBufferLayout().getStride();v(K.from+M.getOutputAmount(za(sa.data.faces.indices).length)/S===K.to,"material VBO layout has changed");M.fillInterleaved(sa.data,ea,ga,sa.instanceParameters,O.buffer.getArray(),K.from*S);O.vbo.updateSubData(O.buffer.getArray(),K.from*
S,K.to*S)}else if(E&&F&n.TRANSFORMATION){var Ha=D,ca=Ha.origin.vec3,oa=(E?t:s)[Ha.material.getId()].origin2data[Ha.origin.id],Ia=oa.instances[Ha.uniqueName];wb(ta,-ca[0],-ca[1],-ca[2]);m.multiply(ta,Ha.transformation,Ia.transformation);m.inverse(Ia.transformation,Ia.transformationNormal);m.transpose(Ia.transformationNormal,Ia.transformationNormal);var pa=oa.perGeometryDataInfo[Ha.data.id],Va=pa.instanceBufferData;if(Va){var ha=Va.getSlot(Ha.idx);Va.fill(ha,0,Ia.transformation);Va.fill(ha,16,Ia.transformationNormal);
var ra=Va.getOffset(ha);pa.instanceBuffer.updateSubData(Va.getArray(),ra,ra+32)}}else if(F&n.COLORATTRS){var Ja=D,aa=Ja.material,Fa=aa.getId(),Ga=Ja.origin.id,ba=(Lb(Ja)?t:s)[Fa].origin2data[Ga],kb=ba.instances[Ja.uniqueName],Ba={};Ba[gc.COLOR]=!0;var fa=aa.getVertexBufferLayout().getStride();v(kb.from+aa.getOutputAmount(za(Ja.data.faces.indices).length)/fa===kb.to,"material VBO layout has changed");aa.fillInterleaved(Ja.data,void 0,void 0,Ja.instanceParameters,ba.buffer.getArray(),kb.from*fa,Ba);
ba.vbo.updateSubData(ba.buffer.getArray(),kb.from*fa,kb.to*fa)}}var qa=[],Ca=Ub(e,h,!1),Ka;for(Ka in Ca){var Da=Ca[Ka],Wa;for(Wa in Da){var da=Da[Wa],ua=da.optimalCount,va=da.material,Ea=va.getVertexBufferLayout(),ka=Ea.getStride(),la=s[Ka];if(void 0===la){v(0<ua);var Oa=va.getRenderPriority(),la={material:q.aquire(va),materialDepthShadowMap:q.aquireDepthShadowMap(va),materialNormal:q.aquireNormal(va),materialDepth:q.aquireDepth(va),origin2data:{}};s[Ka]=la;w&&Vb(la,Oa,"merged")}var r=la.origin2data[Wa];
void 0===r&&(v(0<ua),r={instances:{},vbo:new sb(void 0,Ea,a),buffer:new Rb(ua),optimalCount:0,origin:da.origin},la.origin2data[Wa]=r);var H,Xa,Ya,Za;if(0<ua){var T=r.buffer.getSize(),Pa=r.buffer.getArray(),ja=ua<da.sparseCount/2,ja=ja|r.buffer.resize(ja?ua:da.sparseCount),lb=da.toRemove;if(ja){var T=0,Ra=r.buffer.getArray(),Aa=!1,G,zb;H=0;for(Xa=lb.length;H<Xa;++H)G=r.instances[lb[H].uniqueName],r.optimalCount-=(G.to-G.from)*ka,delete r.instances[lb[H].uniqueName];var Ab={};for(zb in r.instances)G=
r.instances[zb],v(void 0===Ab[G.from]),Ab[G.from]=G;for(zb in Ab)G=Ab[zb],Ya=G.from*ka,Za=G.to*ka,Ra.set(Pa.subarray(Ya,Za),T),G.from=T/ka,T+=Za-Ya,G.to=T/ka,G.displayedIndexRange&&(Aa=!0);v(T==r.optimalCount)}else{H=0;for(Xa=lb.length;H<Xa;++H){var Bb=lb[H].uniqueName;v(void 0!==r.instances[Bb]);Ya=r.instances[Bb].from*ka;Za=r.instances[Bb].to*ka;r.buffer.erase(Ya,Za);delete r.instances[Bb];r.optimalCount-=Za-Ya}}wb(ta,-da.origin[0],-da.origin[1],-da.origin[2]);var Na=da.toAdd;H=0;for(Xa=Na.length;H<
Xa;++H){var ma=Na[H],Qa=ma.data;m.multiply(ta,ma.transformation,Ta);m.inverse(Ta,Ua);m.transpose(Ua);var Sa=T;va.fillInterleaved(Qa,Ta,Ua,ma.instanceParameters,r.buffer.getArray(),T);var Mb=va.getOutputAmount(za(Qa.faces.indices).length),rb=Sa+Mb;v(void 0===r.instances[ma.uniqueName]);G=new Sb(ma.name,Sa/ka,rb/ka,ma.displayedIndexRange,void 0,void 0,ma.idx);ma.displayedIndexRange&&(Aa=!0);r.instances[ma.uniqueName]=G;r.optimalCount+=Mb;T+=Mb}v(r.optimalCount===ua);r.vbo.setData(r.buffer.getArray(),
r.buffer.getSize());if(Aa||r.displayedIndexRange)l[Ka+"_"+Wa]=r}else v(0===ua),r.vbo.dispose(),delete la.origin2data[Wa],0===Object.keys(la.origin2data).length&&(qa.push(Ka),delete s[Ka],w&&Wb(la,"merged"))}}var bb=Ub(g,k,!0),I,La;for(La in bb){var cb=bb[La],$a;for($a in cb){var x=cb[$a];if(0===x.optimalCount)I=t[La],I.origin2data[$a].vbo.dispose(),delete I.origin2data[$a],0===Object.keys(I.origin2data).length&&(qa.push(La),delete t[La],w&&Wb(I,"instanced"));else{var na=x.material;I=t[La];if(void 0===
I){var tb=na.getRenderPriority();I={material:q.aquire(na),materialDepthShadowMap:q.aquireDepthShadowMap(na),materialNormal:q.aquireNormal(na),materialDepth:q.aquireDepth(na),origin2data:{}};t[La]=I;w&&Vb(I,tb,"instanced")}var db=na.getVertexBufferLayout(),mb=I.material.instanced?na.getInstanceBufferLayout():null,ub=mb&&mb.hasAttribute("instanceColor"),U=db.getStride(),p=I.origin2data[$a];void 0===p&&(p={instances:{},vbo:new sb(void 0,db,a),buffer:new Rb(x.optimalCount),optimalCount:0,perGeometryDataInfo:{},
origin:x.origin},I.origin2data[$a]=p);var V=p.buffer.getSize(),vb=p.buffer.getArray(),Cb=x.optimalCount<x.sparseCount/2,Cb=Cb|p.buffer.resize(Cb?x.optimalCount:x.sparseCount),P,ab,wa,xa,y,J,Db,A,u;for(y in x.perGeometryDelta)if((u=p.perGeometryDataInfo[y])&&u.instanceBufferData){var eb=x.perGeometryDelta[y].removeCount;0<eb&&u.instanceBufferData.prepareFree(eb)}var Eb=x.toRemove;if(Cb){P=0;for(ab=Eb.length;P<ab;++P)A=Eb[P],delete p.instances[A.uniqueName],y=A.data.id,J=u=p.perGeometryDataInfo[y],
0===--J.refCount&&void 0===x.dataId2refCount[y]?(p.optimalCount-=(J.to-J.from)*U,delete p.perGeometryDataInfo[y]):u.instanceBufferData&&u.instanceBufferData.free(A.idx);var V=0,xb=p.buffer.getArray(),Fb={},fb;for(fb in p.perGeometryDataInfo)J=p.perGeometryDataInfo[fb],v(void 0===Fb[J.from]),Fb[J.from]=J;for(Db in Fb)J=Fb[Db],wa=J.from*U,xa=J.to*U,xb.set(vb.subarray(wa,xa),V),J.from=V/U,V+=xa-wa,J.to=V/U;for(Db in p.instances){var ya=p.instances[Db];ya.from=p.perGeometryDataInfo[ya.dataId].from;ya.to=
p.perGeometryDataInfo[ya.dataId].to}}else{P=0;for(ab=Eb.length;P<ab;++P)A=Eb[P],delete p.instances[A.uniqueName],y=A.data.id,u=p.perGeometryDataInfo[y],0===--u.refCount&&void 0===x.dataId2refCount[y]?(wa=u.from*U,xa=u.to*U,p.buffer.erase(wa,xa),p.optimalCount-=xa-wa,delete p.perGeometryDataInfo[y]):u.instanceBufferData&&u.instanceBufferData.free(A.idx)}wb(ta,-x.origin[0],-x.origin[1],-x.origin[2]);for(y in x.perGeometryDelta)if((u=p.perGeometryDataInfo[y])&&u.instanceBufferData){var gb=x.perGeometryDelta[y].addCount;
0<gb&&u.instanceBufferData.prepareAllocate(gb)}var hb=x.toAdd;P=0;for(ab=hb.length;P<ab;++P){A=hb[P];var Nb=A.data;y=Nb.id;u=p.perGeometryDataInfo[y];if(void 0===u){na.fillInterleaved(Nb,void 0,void 0,void 0,p.buffer.getArray(),V);var ib=na.getOutputAmount(za(Nb.faces.indices).length);wa=V/U;V+=ib;xa=V/U;p.optimalCount+=ib;u={refCount:1,from:wa,to:xa,instanceBuffer:null,instanceBufferData:null};mb&&(u.instanceBuffer=new sb(void 0,mb,a),u.instanceBufferData=new ac(mb.getStride(),x.perGeometryDelta[y].addCount));
p.perGeometryDataInfo[y]=u}else++u.refCount;v(u.from*U<=p.buffer.getSize()&&u.to*U<=p.buffer.getSize());var jb=m.create();m.multiply(ta,A.transformation,jb);var ya=new Sb(A.name,u.from,u.to,A.displayedIndexRange,jb,A.instanceParameters,A.idx,y),nb=u.instanceBufferData;if(nb){var Ob=nb.allocate(A.idx);nb.fill(Ob,0,ya.transformation);nb.fill(Ob,16,ya.transformationNormal);ub&&nb.fill(Ob,32,A.instanceParameters.color)}p.instances[A.uniqueName]=ya}v(p.optimalCount===x.optimalCount);p.vbo.setData(p.buffer.getArray(),
p.buffer.getSize());for(y in p.perGeometryDataInfo){var Pb=p.perGeometryDataInfo[y];if(Pb.instanceBuffer){var pb=x.perGeometryDelta[y];if(0<pb.addCount+pb.removeCount){var qb=Pb.instanceBufferData.compact();Pb.instanceBuffer.setData(qb,qb.length)}}}}}}for(var Gb in l){var Ma=l[Gb];Ma.displayedIndexRange=[];var Xb=Ma.instances,Yb=!0,Zb;for(Zb in Xb){var ob=Xb[Zb];ob.displayedIndexRange?(Ma.displayedIndexRange.push.apply(Ma.displayedIndexRange,Qb.offsetIntervals(ob.displayedIndexRange,ob.from)),Yb=
!1):Ma.displayedIndexRange.push([ob.from,ob.to-1])}Ma.displayedIndexRange=Yb?null:Qb.mergeIntervals(Ma.displayedIndexRange)}Ib(qa);for(var Hb in f)q.updateMaterialParameters(Hb);$=!0};var pb=1535;this.setThreshold=function(b){pb=b;this.dispose();b=Array(Object.keys(R).length);var a=0,d;for(d in R)b[a++]=R[d];R=void 0;this.setContent(b)};var Lb=function(b){var a=!1,d=za(b.data.faces.indices).length,a=a|!1===b.material.canBeMerged,a=a|b.material.instanced,a=a|b.material.isBackdrop;return b.singleUse?
a:a|=d>pb},Tb=function(a,c,d){for(var f=0;f<a.length;++f)1>za(a[f].data.faces.indices).length||(Lb(a[f])?d.push(a[f]):c.push(a[f]))},ta=m.identity(),Ta=m.create(),Ua=m.create(),Ub=function(a,c,d){var f={};qb(a,!0,d,f);qb(c,!1,d,f);return f},qb=function(a,c,d,f){for(var e=0,g=a.length;e<g;++e){var h=a[e],k=h.origin,m=h.material,n=m.getId(),l=d?t[n]:s[n];void 0!==l&&(l=l.origin2data[k.id]);var q=f[n];void 0===q&&(q={},f[n]=q);n=q[k.id];if(void 0===n){n={optimalCount:void 0===l?0:l.optimalCount,sparseCount:void 0===
l?0:l.buffer.getSize(),material:m,toAdd:[],toRemove:[],perGeometryDelta:null,origin:k.vec3};if(d){var v={};if(void 0!==l)for(var w in l.perGeometryDataInfo)v[w]=l.perGeometryDataInfo[w].refCount;n.dataId2refCount=v;n.perGeometryDelta={}}q[k.id]=n}k=m.getOutputAmount(za(h.data.faces.indices).length);d?(m=h.data.id,l=n.perGeometryDelta[m],l||(l={addCount:0,removeCount:0},n.perGeometryDelta[m]=l),c?(l.addCount++,void 0===n.dataId2refCount[m]&&(n.dataId2refCount[m]=0),1===++n.dataId2refCount[m]&&(n.optimalCount+=
k,n.sparseCount+=k),n.toAdd.push(h)):(l.removeCount++,0===--n.dataId2refCount[m]&&(delete n.dataId2refCount[m],n.optimalCount-=k),n.toRemove.push(h))):c?(n.optimalCount+=k,n.sparseCount+=k,n.toAdd.push(h)):(n.optimalCount-=k,n.toRemove.push(h))}},Vb=function(a,c,d){for(var f,e=a.material.getMaterialId(),g=D.length,h=0;h<g&&D[h][0]>=c;){f=D[h][1];if(f.id===e){v(!f[d],"matData for type already exists");f[d]=a;return}h++}f={id:e,instanced:null,merged:null};f[d]=a;D.splice(h,0,[c,f])},Wb=function(a,c){for(var d=
a.material.getMaterialId(),f=0;D[f][1].id!==d;)f++;d=D[f][1];d[c]=null;!d.instanced&&!d.merged&&D.splice(f,1)},Gb=function(a,c){for(var d=c.length,f=0,e;f<d&&c[f][1].id!==a;)f++;if(f<d){var g=c[f][1],g=(g.merged||g.instanced).material.getRenderPriority();e=c[f][0];if(g!==c[f][0]){c[f][0]=g;for(var h=g>e?-1:1,f=f+h;-1<f&&f<d&&h*c[f][0]>h*g;)e=c[f],c[f]=c[f-h],c[f-h]=e,f+=h}}};this.updateRenderOrder=Gb;this.modifyRenderOrder=function(a){if(w){for(var c in a)Gb(c,D);$=!0}};var Ib=function(a){if(Array.isArray(a))for(var c=
0;c<a.length;c++)q.release(a[c]),q.releaseDepth(a[c]),q.releaseNormal(a[c]);else q.release(a),q.releaseDepth(a),q.releaseNormal(a)},gb=function(a){for(var c=new ec,d=0;2>d;++d){var e=0===d?s:t,k;for(k in e){var g=e[k].origin2data,h;for(h in g){var l=g[h].instances,m;for(m in l){var n=l[m];void 0!==a[n.name]&&c.set(n.idx)}}}}return c},Da=new bc(a.RGB,a.UNSIGNED_BYTE,!0,a.NEAREST,a),hb=[1,1,1,0.5],Ra=new bb(l,Da.getTexture(),hb,!0,a.ALWAYS),ca=m.identity();e=Aa.create();var ba={proj:ca,view:ca,nearFar:[-1,
1],origin:e};e=new Float32Array(20);e[0]=-1;e[1]=-1;e[2]=0;e[3]=0;e[4]=0;e[5]=1;e[6]=-1;e[7]=0;e[8]=1;e[9]=0;e[10]=-1;e[11]=1;e[12]=0;e[13]=0;e[14]=1;e[15]=1;e[16]=1;e[17]=0;e[18]=1;e[19]=1;var M=new sb(e,Hb.Defaults.PosTex,a)}});