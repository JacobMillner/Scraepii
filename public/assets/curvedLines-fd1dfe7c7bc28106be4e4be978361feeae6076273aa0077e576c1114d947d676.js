/* The MIT License

 Copyright (c) 2011 by Michael Zinsmaier and nergal.dev
 Copyright (c) 2012 by Thomas Ritou

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
!function(t){function e(t){function e(t,e){e.series.curvedLines.active&&t.hooks.processDatapoints.unshift(i)}function i(t,e,i){var s=i.points.length/i.pointsize,o=.5;if(1==e.curvedLines.apply&&void 0===e.originSeries&&s>1+o)if(e.lines.fill){var r=n(i,e.curvedLines,1),a=n(i,e.curvedLines,2);i.pointsize=3,i.points=[];for(var l=0,h=0,c=0,u=2;c<r.length||l<a.length;)r[c]==a[l]?(i.points[h]=r[c],i.points[h+1]=r[c+1],i.points[h+2]=a[l+1],l+=u,c+=u):r[c]<a[l]?(i.points[h]=r[c],i.points[h+1]=r[c+1],i.points[h+2]=h>0?i.points[h-1]:null,c+=u):(i.points[h]=a[l],i.points[h+1]=h>1?i.points[h-2]:null,i.points[h+2]=a[l+1],l+=u),h+=3}else e.lines.lineWidth>0&&(i.points=n(i,e.curvedLines,1),i.pointsize=2)}function n(t,e,i){var n=t.points,s=t.pointsize,o=e.curvePointFactor*(n.length/s),r=new Array,a=new Array,l=-1,h=-1,c=0;if(e.fit){var u;if("undefined"==typeof e.fitPointDist){var d=n[0],p=n[n.length-s];u=(p-d)/5e4}else u=e.fitPointDist;for(var f=0;f<n.length;f+=s){var g,m;l=f,h=f+i,g=n[l]-u,m=n[l]+u;for(var v=2;g==n[l]||m==n[l];)g=n[l]-u*v,m=n[l]+u*v,v++;r[c]=g,a[c]=n[h],c++,r[c]=n[l],a[c]=n[h],c++,r[c]=m,a[c]=n[h],c++}}else for(var f=0;f<n.length;f+=s)l=f,h=f+i,r[c]=n[l],a[c]=n[h],c++;var y=r.length,b=new Array,x=new Array;b[0]=0,b[y-1]=0,x[0]=0;for(var f=1;y-1>f;++f){var w=r[f+1]-r[f-1];if(0==w)return[];var k=(r[f]-r[f-1])/w,_=k*b[f-1]+2;b[f]=(k-1)/_,x[f]=(a[f+1]-a[f])/(r[f+1]-r[f])-(a[f]-a[f-1])/(r[f]-r[f-1]),x[f]=(6*x[f]/(r[f+1]-r[f-1])-k*x[f-1])/_}for(var c=y-2;c>=0;--c)b[c]=b[c]*b[c+1]+x[c];var C=(r[y-1]-r[0])/(o-1),T=new Array,S=new Array,D=new Array;for(T[0]=r[0],S[0]=a[0],D.push(T[0]),D.push(S[0]),c=1;o>c;++c){T[c]=T[0]+c*C;for(var A=y-1,M=0;A-M>1;){var I=Math.round((A+M)/2);r[I]>T[c]?A=I:M=I}var P=r[A]-r[M];if(0==P)return[];var E=(r[A]-T[c])/P,N=(T[c]-r[M])/P;S[c]=E*a[M]+N*a[A]+((E*E*E-E)*b[M]+(N*N*N-N)*b[A])*(P*P)/6,D.push(T[c]),D.push(S[c])}return D}t.hooks.processOptions.push(e)}var i={series:{curvedLines:{active:!1,apply:!1,fit:!1,curvePointFactor:20,fitPointDist:void 0}}};t.plot.plugins.push({init:e,options:i,name:"curvedLines",version:"0.5"})}(jQuery);