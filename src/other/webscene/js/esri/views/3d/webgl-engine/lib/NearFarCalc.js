// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.0beta2/esri/copyright.txt for details.
//>>built
define(["./Util","./gl-matrix"],function(N,s){function O(){for(var w=0,m=0,p=0,t=0,g=0,z=0,a=0,d=0,h=0,r=0,e=0,q=0,u=0,J=0,F=0,b=0,n=0,B=0,A=0,E=0,K,D,s=new P,f=Array(6),L=0;6>L;++L)f[L]=H.create();var C=Q.create();this.init=function(v,c,k){v.computeFrustumPlanes(f);v=v.viewMatrix;w=f[0][0];m=f[0][1];p=f[0][2];t=f[0][3];g=f[1][0];z=f[1][1];a=f[1][2];d=f[1][3];h=f[2][0];r=f[2][1];e=f[2][2];q=f[2][3];u=f[3][0];J=f[3][1];F=f[3][2];b=f[3][3];n=v[2];B=v[6];A=v[10];E=v[14];K=c;D=k;s.init(k)};this.includeNearBoundingInfoRec=
function(v,c){var k=v.getBSRadius(),l=v.getCenter();I.multiplyVec3(c,l,C);var l=c[2]*c[2]+c[6]*c[6]+c[10]*c[10],l=Math.sqrt(Math.max(Math.max(c[0]*c[0]+c[4]*c[4]+c[8]*c[8],c[1]*c[1]+c[5]*c[5]+c[9]*c[9]),l)),f=C[0],x=C[1],y=C[2],k=k*l;if(!(w*f+m*x+p*y+t>k)&&(!(g*f+z*x+a*y+d>k)&&!(h*f+r*x+e*y+q>k)&&!(u*f+J*x+F*y+b>k))&&(l=n*f+B*x+A*y+E,f=l+k,!(2>-(l-k))&&!(-f>=D.bestNear)))if(-f>D.bestNear2)D.bestNear=-f;else{if(100<k&&(k=v.getChildren(),void 0!==k)){for(l=0;8>l;++l)void 0!==k[l]&&this.includeNearBoundingInfoRec(k[l],
c);return}s.intersectFrustumAABB(K,c,v.getBBMin(),v.getBBMax())}};this.includeFarBoundingInfoRec=function(f,c){var k=f.getBSRadius(),l=f.getCenter();I.multiplyVec3(c,l,C);var l=c[2]*c[2]+c[6]*c[6]+c[10]*c[10],l=Math.sqrt(Math.max(Math.max(c[0]*c[0]+c[4]*c[4]+c[8]*c[8],c[1]*c[1]+c[5]*c[5]+c[9]*c[9]),l)),G=C[0],x=C[1],y=C[2],k=k*l;if(!(w*G+m*x+p*y+t>k)&&(!(g*G+z*x+a*y+d>k)&&!(h*G+r*x+e*y+q>k)&&!(u*G+J*x+F*y+b>k))&&(l=n*G+B*x+A*y+E-k,!(-l<=D.bestFar)))if(-l<D.bestFar2)D.bestFar=-l;else{if(100<k&&(k=
f.getChildren(),void 0!==k)){for(l=0;8>l;++l)void 0!==k[l]&&this.includeFarBoundingInfoRec(k[l],c);return}s.intersectFrustumAABB(K,c,f.getBBMin(),f.getBBMax())}}}function P(){for(var w=[[0,1,3],[2,3,1],[1,5,2],[6,2,5],[5,4,6],[7,6,4],[4,0,7],[3,7,0],[3,2,7],[6,7,2],[4,5,0],[1,0,5]],m,p=Array(8),t=0;8>t;++t)p[t]=H.create();var g=I.create();this.init=function(a){m=a};this.intersectFrustumAABB=function(a,d,h,r){I.multiply(a,d,g);for(a=0;8>a;++a){d=p[a];var e=0===a||3===a||4===a||7===a?h[0]:r[0],q=0===
a||1===a||4===a||5===a?h[1]:r[1],u=4>a?h[2]:r[2];d[0]=g[0]*e+g[4]*q+g[8]*u+g[12];d[1]=g[1]*e+g[5]*q+g[9]*u+g[13];d[2]=g[2]*e+g[6]*q+g[10]*u+g[14];d[3]=g[3]*e+g[7]*q+g[11]*u+g[15]}for(a=0;12>a;++a){d=z(p[w[a][0]],p[w[a][1]],p[w[a][2]]);e=!0;for(h=0;h<d.length;++h)if(r=d[h][3],2<=r){e=!1;break}if(!e)for(h=0;h<d.length;++h)r=d[h][3],r<m.bestNear&&(m.bestNear=r),r>m.bestFar&&(m.bestFar=r)}};var z=function(a,d,h){var g=function(a,b){if(0===b)return a[0]>=-a[3];if(1===b)return a[1]>=-a[3];if(2===b)return a[0]<=
a[3];if(3===b)return a[1]<=a[3];N.assert(!1)},e=function(a,b,d){var e=0;0===d?e=(-a[3]-a[0])/(b[0]-a[0]+b[3]-a[3]):1===d?e=(-a[3]-a[1])/(b[1]-a[1]+b[3]-a[3]):2===d?e=(a[3]-a[0])/(b[0]-a[0]-b[3]+a[3]):3===d&&(e=(a[3]-a[1])/(b[1]-a[1]-b[3]+a[3]));return H.lerp(a,b,e,H.create())};a=[a,d,h];for(d=0;4>d;++d){h=a;a=[];for(var q=0;q<h.length;++q){var m=h[q],p=h[(q+1)%h.length];g(p,d)?(g(m,d)||a.push(e(m,p,d)),a.push(p)):g(m,d)&&a.push(e(m,p,d))}}return a}}var Q=s.vec3,H=s.vec4d,I=s.mat4,M=s.mat4d;return function(){var w=
[],m=[],p=[],t=[],g=[],z=new O,a=M.create();this.calculateSceneNearFar=function(d,h,r){M.multiply(d.projectionMatrix,d.viewMatrix,a);var e=d.viewMatrix,q=e[2],u=e[6],s=e[10],F=e[14],e=0,b,n;for(b in h)if(n=h[b],!(null!=n.displayedIndexRange&&0===n.displayedIndexRange.length)&&n.castShadow&&r.get(n.idx)){var B=n.bsRadius,A=n.center,E=q*A[0]+u*A[1]+s*A[2]+F,A=E-B,B=E+B;w[e]=n;m[e]=-B;p[e]=-A;++e}n=Number.MAX_VALUE;q=-Number.MAX_VALUE;if(0===e)return[n,q];for(b=0;b<e;++b)m[b]>q&&(q=m[b]),2<m[b]&&p[b]<
n&&(n=p[b]);u=Math.max(0.5*n,2);s=2*q;for(b=r=h=0;b<e;++b)m[b]<n&&(m[b]>=u?n=m[b]:t[h++]=b),p[b]>q&&(p[b]<=s?q=p[b]:g[r++]=b);if(0===h&&0===r)return[n,q];t.length=h;g.length=r;t.sort(function(a,b){return m[a]<m[b]?-1:m[a]>m[b]?1:0});g.sort(function(a,b){return p[a]<p[b]?1:p[a]>p[b]?-1:0});e={bestNear:n,bestFar:q,bestNear2:u,bestFar2:s};z.init(d,a,e);for(b=0;b<h;++b)m[t[b]]<e.bestNear&&(n=w[t[b]],d=n.boundingInfo,z.includeNearBoundingInfoRec(d,n.transformation));for(b=0;b<r;++b)p[g[b]]>e.bestFar&&
(n=w[g[b]],d=n.boundingInfo,z.includeFarBoundingInfoRec(d,n.transformation));return[e.bestNear,e.bestFar]}}});