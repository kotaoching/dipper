//>>built
define("./kernel ../has require module ../json ./lang ./array".split(" "),function(e,v,h,I,w,m,x){var r=function(a){return a.replace(/\./g,"/")},J=/\/\/>>built/,s=[],K=[],t=function(a,c,b){s.push(b);x.forEach(a.split(","),function(a){a=q(a,c.module);K.push(a);y(a)});z()},z=function(){var a,c;for(c in A)if(a=A[c],void 0===a.noReqPluginCheck&&(a.noReqPluginCheck=/loadInit\!/.test(c)||/require\!/.test(c)?1:0),!a.executed&&!a.noReqPluginCheck&&a.injected==L)return;M(function(){var a=s;s=[];x.forEach(a,
function(a){a(1)})})},N=function(a,c,b){var f=/\(|\)/g,g=1;for(f.lastIndex=c;(c=f.exec(a))&&!(g=")"==c[0]?g-1:g+1,0==g););if(0!=g)throw"unmatched paren around character "+f.lastIndex+" in: "+a;return[e.trim(a.substring(b,f.lastIndex))+";\n",f.lastIndex]},O=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,k=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,u=/(^|\s)(require|define)\s*\(/m,C=function(a,c){var b,f,g,B=[],d=[];b=[];for(c=c||a.replace(O,function(a){k.lastIndex=
u.lastIndex=0;return k.test(a)||u.test(a)?"":a});b=k.exec(c);)f=k.lastIndex,g=f-b[0].length,f=N(c,f,g),"loadInit"==b[2]?B.push(f[0]):d.push(f[0]),k.lastIndex=f[1];b=B.concat(d);return b.length||!u.test(c)?[a.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 \x26\x26 dojo.loadInit("),b.join(""),b]:0},d=h.initSyncLoader(t,z,function(a,c){var b,f,g=[],d=[];if(J.test(c)||!(b=C(c)))return 0;f=a.mid+"-*loadInit";for(var e in q("dojo",a).result.scopeMap)g.push(e),d.push('"'+e+'"');return"// xdomain rewrite of "+
a.mid+"\ndefine('"+f+"',{\n\tnames:"+w.stringify(g)+",\n\tdef:function("+g.join(",")+"){"+b[1]+"}});\n\ndefine("+w.stringify(g.concat(["dojo/loadInit!"+f]))+", function("+g.join(",")+"){\n"+b[0]+"});"}),P=d.sync,L=d.requested,Q=d.arrived,D=d.nonmodule,R=d.executing,E=d.executed,l=d.syncExecStack,A=d.modules,F=d.execQ,q=d.getModule,y=d.injectModule,G=d.setArrived,S=d.signal,T=d.finishExec,U=d.execModule,H=d.getLegacyMode,M=d.guardCheckComplete,t=d.dojoRequirePlugin;e.provide=function(a){var c=l[0],
b=m.mixin(q(r(a),h.module),{executed:R,result:m.getObject(a,!0)});G(b);c&&(c.provides||(c.provides=[])).push(function(){b.result=m.getObject(a);delete b.provides;b.executed!==E&&T(b)});return b.result};v.add("config-publishRequireResult",1,0,0);e.require=function(a,c){var b=function(a,c){var b=q(r(a),h.module);if(l.length&&l[0].finish)l[0].finish.push(a);else{if(b.executed)return b.result;c&&(b.result=D);var e=H();y(b);e=H();b.executed!==E&&b.injected===Q&&d.guardCheckComplete(function(){U(b)});if(b.executed)return b.result;
e==P?b.cjs?F.unshift(b):l.length&&(l[0].finish=[a]):F.push(b)}}(a,c);v("config-publishRequireResult")&&(!m.exists(a)&&void 0!==b)&&m.setObject(a,b);return b};e.loadInit=function(a){a()};e.registerModulePath=function(a,c){var b={};b[a.replace(/\./g,"/")]=c;h({paths:b})};e.platformRequire=function(a){a=(a.common||[]).concat(a[e._name]||a["default"]||[]);for(var c;a.length;)m.isArray(c=a.shift())?e.require.apply(e,c):e.require(c)};e.requireIf=e.requireAfterIf=function(a,c,b){a&&e.require(c,b)};e.requireLocalization=
function(a,c,b){h(["../i18n"],function(e){e.getLocalization(a,c,b)})};return{extractLegacyApiApplications:C,require:t,loadInit:function(a,c,b){c([a],function(a){c(a.names,function(){for(var d="",m=[],n=0;n<arguments.length;n++)d+="var "+a.names[n]+"\x3d arguments["+n+"]; ",m.push(arguments[n]);eval(d);var l=c.module,h=[],k,d={provide:function(a){a=r(a);a=q(a,l);a!==l&&G(a)},require:function(a,b){a=r(a);b&&(q(a,l).result=D);h.push(a)},requireLocalization:function(a,b,c){k||(k=["dojo/i18n"]);c=(c||
e.locale).toLowerCase();a=r(a)+"/nls/"+(/root/i.test(c)?"":c+"/")+r(b);q(a,l).isXd&&k.push("dojo/i18n!"+a)},loadInit:function(a){a()}},n={},p;try{for(p in d)n[p]=e[p],e[p]=d[p];a.def.apply(null,m)}catch(s){S("error",[{src:I.id,id:"failedDojoLoadInit"},s])}finally{for(p in d)e[p]=n[p]}k&&(h=h.concat(k));h.length?t(h.join(","),c,b):b()})})}}});