/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
!function(t){t.color={},t.color.make=function(e,i,n,s){var o={};return o.r=e||0,o.g=i||0,o.b=n||0,o.a=null!=s?s:1,o.add=function(t,e){for(var i=0;i<t.length;++i)o[t.charAt(i)]+=e;return o.normalize()},o.scale=function(t,e){for(var i=0;i<t.length;++i)o[t.charAt(i)]*=e;return o.normalize()},o.toString=function(){return o.a>=1?"rgb("+[o.r,o.g,o.b].join(",")+")":"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"},o.normalize=function(){function t(t,e,i){return t>e?t:e>i?i:e}return o.r=t(0,parseInt(o.r),255),o.g=t(0,parseInt(o.g),255),o.b=t(0,parseInt(o.b),255),o.a=t(0,o.a,1),o},o.clone=function(){return t.color.make(o.r,o.b,o.g,o.a)},o.normalize()},t.color.extract=function(e,i){var n;do{if(n=e.css(i).toLowerCase(),""!=n&&"transparent"!=n)break;e=e.parent()}while(e.length&&!t.nodeName(e.get(0),"body"));return"rgba(0, 0, 0, 0)"==n&&(n="transparent"),t.color.parse(n)},t.color.parse=function(i){var n,s=t.color.make;if(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i))return s(parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10));if(n=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))return s(parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10),parseFloat(n[4]));if(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i))return s(2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3]));if(n=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))return s(2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3]),parseFloat(n[4]));if(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i))return s(parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16));if(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i))return s(parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16));var o=t.trim(i).toLowerCase();return"transparent"==o?s(255,255,255,0):(n=e[o]||[0,0,0],s(n[0],n[1],n[2]))};var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery),function(t){function e(e,i){var n=i.children("."+e)[0];if(null==n&&(n=document.createElement("canvas"),n.className=e,t(n).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(i),!n.getContext)){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");n=window.G_vmlCanvasManager.initElement(n)}this.element=n;var s=this.context=n.getContext("2d"),o=window.devicePixelRatio||1,r=s.webkitBackingStorePixelRatio||s.mozBackingStorePixelRatio||s.msBackingStorePixelRatio||s.oBackingStorePixelRatio||s.backingStorePixelRatio||1;this.pixelRatio=o/r,this.resize(i.width(),i.height()),this.textContainer=null,this.text={},this._textCache={}}function i(i,s,o,r){function a(t,e){e=[mt].concat(e);for(var i=0;i<t.length;++i)t[i].apply(this,e)}function l(){for(var i={Canvas:e},n=0;n<r.length;++n){var s=r[n];s.init(mt,i),s.options&&t.extend(!0,st,s.options)}}function h(e){t.extend(!0,st,e),e&&e.colors&&(st.colors=e.colors),null==st.xaxis.color&&(st.xaxis.color=t.color.parse(st.grid.color).scale("a",.22).toString()),null==st.yaxis.color&&(st.yaxis.color=t.color.parse(st.grid.color).scale("a",.22).toString()),null==st.xaxis.tickColor&&(st.xaxis.tickColor=st.grid.tickColor||st.xaxis.color),null==st.yaxis.tickColor&&(st.yaxis.tickColor=st.grid.tickColor||st.yaxis.color),null==st.grid.borderColor&&(st.grid.borderColor=st.grid.color),null==st.grid.tickColor&&(st.grid.tickColor=t.color.parse(st.grid.color).scale("a",.22).toString());var n,s,o,r=i.css("font-size"),l=r?+r.replace("px",""):13,h={style:i.css("font-style"),size:Math.round(.8*l),variant:i.css("font-variant"),weight:i.css("font-weight"),family:i.css("font-family")};for(o=st.xaxes.length||1,n=0;o>n;++n)s=st.xaxes[n],s&&!s.tickColor&&(s.tickColor=s.color),s=t.extend(!0,{},st.xaxis,s),st.xaxes[n]=s,s.font&&(s.font=t.extend({},h,s.font),s.font.color||(s.font.color=s.color),s.font.lineHeight||(s.font.lineHeight=Math.round(1.15*s.font.size)));for(o=st.yaxes.length||1,n=0;o>n;++n)s=st.yaxes[n],s&&!s.tickColor&&(s.tickColor=s.color),s=t.extend(!0,{},st.yaxis,s),st.yaxes[n]=s,s.font&&(s.font=t.extend({},h,s.font),s.font.color||(s.font.color=s.color),s.font.lineHeight||(s.font.lineHeight=Math.round(1.15*s.font.size)));for(st.xaxis.noTicks&&null==st.xaxis.ticks&&(st.xaxis.ticks=st.xaxis.noTicks),st.yaxis.noTicks&&null==st.yaxis.ticks&&(st.yaxis.ticks=st.yaxis.noTicks),st.x2axis&&(st.xaxes[1]=t.extend(!0,{},st.xaxis,st.x2axis),st.xaxes[1].position="top",null==st.x2axis.min&&(st.xaxes[1].min=null),null==st.x2axis.max&&(st.xaxes[1].max=null)),st.y2axis&&(st.yaxes[1]=t.extend(!0,{},st.yaxis,st.y2axis),st.yaxes[1].position="right",null==st.y2axis.min&&(st.yaxes[1].min=null),null==st.y2axis.max&&(st.yaxes[1].max=null)),st.grid.coloredAreas&&(st.grid.markings=st.grid.coloredAreas),st.grid.coloredAreasColor&&(st.grid.markingsColor=st.grid.coloredAreasColor),st.lines&&t.extend(!0,st.series.lines,st.lines),st.points&&t.extend(!0,st.series.points,st.points),st.bars&&t.extend(!0,st.series.bars,st.bars),null!=st.shadowSize&&(st.series.shadowSize=st.shadowSize),null!=st.highlightColor&&(st.series.highlightColor=st.highlightColor),n=0;n<st.xaxes.length;++n)m(ct,n+1).options=st.xaxes[n];for(n=0;n<st.yaxes.length;++n)m(ut,n+1).options=st.yaxes[n];for(var c in gt)st.hooks[c]&&st.hooks[c].length&&(gt[c]=gt[c].concat(st.hooks[c]));a(gt.processOptions,[st])}function c(t){nt=u(t),v(),y()}function u(e){for(var i=[],n=0;n<e.length;++n){var s=t.extend(!0,{},st.series);null!=e[n].data?(s.data=e[n].data,delete e[n].data,t.extend(!0,s,e[n]),e[n].data=s.data):s.data=e[n],i.push(s)}return i}function d(t,e){var i=t[e+"axis"];return"object"==typeof i&&(i=i.n),"number"!=typeof i&&(i=1),i}function p(){return t.grep(ct.concat(ut),function(t){return t})}function f(t){var e,i,n={};for(e=0;e<ct.length;++e)i=ct[e],i&&i.used&&(n["x"+i.n]=i.c2p(t.left));for(e=0;e<ut.length;++e)i=ut[e],i&&i.used&&(n["y"+i.n]=i.c2p(t.top));return void 0!==n.x1&&(n.x=n.x1),void 0!==n.y1&&(n.y=n.y1),n}function g(t){var e,i,n,s={};for(e=0;e<ct.length;++e)if(i=ct[e],i&&i.used&&(n="x"+i.n,null==t[n]&&1==i.n&&(n="x"),null!=t[n])){s.left=i.p2c(t[n]);break}for(e=0;e<ut.length;++e)if(i=ut[e],i&&i.used&&(n="y"+i.n,null==t[n]&&1==i.n&&(n="y"),null!=t[n])){s.top=i.p2c(t[n]);break}return s}function m(e,i){return e[i-1]||(e[i-1]={n:i,direction:e==ct?"x":"y",options:t.extend(!0,{},e==ct?st.xaxis:st.yaxis)}),e[i-1]}function v(){var e,i=nt.length,n=-1;for(e=0;e<nt.length;++e){var s=nt[e].color;null!=s&&(i--,"number"==typeof s&&s>n&&(n=s))}n>=i&&(i=n+1);var o,r=[],a=st.colors,l=a.length,h=0;for(e=0;i>e;e++)o=t.color.parse(a[e%l]||"#666"),e%l==0&&e&&(h=h>=0?.5>h?-h-.2:0:-h),r[e]=o.scale("rgb",1+h);var c,u=0;for(e=0;e<nt.length;++e){if(c=nt[e],null==c.color?(c.color=r[u].toString(),++u):"number"==typeof c.color&&(c.color=r[c.color].toString()),null==c.lines.show){var p,f=!0;for(p in c)if(c[p]&&c[p].show){f=!1;break}f&&(c.lines.show=!0)}null==c.lines.zero&&(c.lines.zero=!!c.lines.fill),c.xaxis=m(ct,d(c,"x")),c.yaxis=m(ut,d(c,"y"))}}function y(){function e(t,e,i){e<t.datamin&&e!=-y&&(t.datamin=e),i>t.datamax&&i!=y&&(t.datamax=i)}var i,n,s,o,r,l,h,c,u,d,f,g,m=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY,y=Number.MAX_VALUE;for(t.each(p(),function(t,e){e.datamin=m,e.datamax=v,e.used=!1}),i=0;i<nt.length;++i)r=nt[i],r.datapoints={points:[]},a(gt.processRawData,[r,r.data,r.datapoints]);for(i=0;i<nt.length;++i){if(r=nt[i],f=r.data,g=r.datapoints.format,!g){if(g=[],g.push({x:!0,number:!0,required:!0}),g.push({y:!0,number:!0,required:!0}),r.bars.show||r.lines.show&&r.lines.fill){var b=!!(r.bars.show&&r.bars.zero||r.lines.show&&r.lines.zero);g.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:b}),r.bars.horizontal&&(delete g[g.length-1].y,g[g.length-1].x=!0)}r.datapoints.format=g}if(null==r.datapoints.pointsize){r.datapoints.pointsize=g.length,h=r.datapoints.pointsize,l=r.datapoints.points;var x=r.lines.show&&r.lines.steps;for(r.xaxis.used=r.yaxis.used=!0,n=s=0;n<f.length;++n,s+=h){d=f[n];var w=null==d;if(!w)for(o=0;h>o;++o)c=d[o],u=g[o],u&&(u.number&&null!=c&&(c=+c,isNaN(c)?c=null:c==1/0?c=y:c==-(1/0)&&(c=-y)),null==c&&(u.required&&(w=!0),null!=u.defaultValue&&(c=u.defaultValue))),l[s+o]=c;if(w)for(o=0;h>o;++o)c=l[s+o],null!=c&&(u=g[o],u.autoscale!==!1&&(u.x&&e(r.xaxis,c,c),u.y&&e(r.yaxis,c,c))),l[s+o]=null;else if(x&&s>0&&null!=l[s-h]&&l[s-h]!=l[s]&&l[s-h+1]!=l[s+1]){for(o=0;h>o;++o)l[s+h+o]=l[s+o];l[s+1]=l[s-h+1],s+=h}}}}for(i=0;i<nt.length;++i)r=nt[i],a(gt.processDatapoints,[r,r.datapoints]);for(i=0;i<nt.length;++i){r=nt[i],l=r.datapoints.points,h=r.datapoints.pointsize,g=r.datapoints.format;var k=m,_=m,C=v,T=v;for(n=0;n<l.length;n+=h)if(null!=l[n])for(o=0;h>o;++o)c=l[n+o],u=g[o],u&&u.autoscale!==!1&&c!=y&&c!=-y&&(u.x&&(k>c&&(k=c),c>C&&(C=c)),u.y&&(_>c&&(_=c),c>T&&(T=c)));if(r.bars.show){var S;switch(r.bars.align){case"left":S=0;break;case"right":S=-r.bars.barWidth;break;default:S=-r.bars.barWidth/2}r.bars.horizontal?(_+=S,T+=S+r.bars.barWidth):(k+=S,C+=S+r.bars.barWidth)}e(r.xaxis,k,C),e(r.yaxis,_,T)}t.each(p(),function(t,e){e.datamin==m&&(e.datamin=null),e.datamax==v&&(e.datamax=null)})}function b(){i.css("padding",0).children().filter(function(){return!t(this).hasClass("flot-overlay")&&!t(this).hasClass("flot-base")}).remove(),"static"==i.css("position")&&i.css("position","relative"),ot=new e("flot-base",i),rt=new e("flot-overlay",i),lt=ot.context,ht=rt.context,at=t(rt.element).unbind();var n=i.data("plot");n&&(n.shutdown(),rt.clear()),i.data("plot",mt)}function x(){st.grid.hoverable&&(at.mousemove(Y),at.bind("mouseleave",X)),st.grid.clickable&&at.click(U),a(gt.bindEvents,[at])}function w(){yt&&clearTimeout(yt),at.unbind("mousemove",Y),at.unbind("mouseleave",X),at.unbind("click",U),a(gt.shutdown,[at])}function k(t){function e(t){return t}var i,n,s=t.options.transform||e,o=t.options.inverseTransform;"x"==t.direction?(i=t.scale=pt/Math.abs(s(t.max)-s(t.min)),n=Math.min(s(t.max),s(t.min))):(i=t.scale=ft/Math.abs(s(t.max)-s(t.min)),i=-i,n=Math.max(s(t.max),s(t.min))),s==e?t.p2c=function(t){return(t-n)*i}:t.p2c=function(t){return(s(t)-n)*i},o?t.c2p=function(t){return o(n+t/i)}:t.c2p=function(t){return n+t/i}}function _(t){for(var e=t.options,i=t.ticks||[],n=e.labelWidth||0,s=e.labelHeight||0,o=n||("x"==t.direction?Math.floor(ot.width/(i.length||1)):null),r=t.direction+"Axis "+t.direction+t.n+"Axis",a="flot-"+t.direction+"-axis flot-"+t.direction+t.n+"-axis "+r,l=e.font||"flot-tick-label tickLabel",h=0;h<i.length;++h){var c=i[h];if(c.label){var u=ot.getTextInfo(a,c.label,l,null,o);n=Math.max(n,u.width),s=Math.max(s,u.height)}}t.labelWidth=e.labelWidth||n,t.labelHeight=e.labelHeight||s}function C(e){var i=e.labelWidth,n=e.labelHeight,s=e.options.position,o="x"===e.direction,r=e.options.tickLength,a=st.grid.axisMargin,l=st.grid.labelMargin,h=!0,c=!0,u=!0,d=!1;t.each(o?ct:ut,function(t,i){i&&(i.show||i.reserveSpace)&&(i===e?d=!0:i.options.position===s&&(d?c=!1:h=!1),d||(u=!1))}),c&&(a=0),null==r&&(r=u?"full":5),isNaN(+r)||(l+=+r),o?(n+=l,"bottom"==s?(dt.bottom+=n+a,e.box={top:ot.height-dt.bottom,height:n}):(e.box={top:dt.top+a,height:n},dt.top+=n+a)):(i+=l,"left"==s?(e.box={left:dt.left+a,width:i},dt.left+=i+a):(dt.right+=i+a,e.box={left:ot.width-dt.right,width:i})),e.position=s,e.tickLength=r,e.box.padding=l,e.innermost=h}function T(t){"x"==t.direction?(t.box.left=dt.left-t.labelWidth/2,t.box.width=ot.width-dt.left-dt.right+t.labelWidth):(t.box.top=dt.top-t.labelHeight/2,t.box.height=ot.height-dt.bottom-dt.top+t.labelHeight)}function S(){var e,i=st.grid.minBorderMargin;if(null==i)for(i=0,e=0;e<nt.length;++e)i=Math.max(i,2*(nt[e].points.radius+nt[e].points.lineWidth/2));var n={left:i,right:i,top:i,bottom:i};t.each(p(),function(t,e){e.reserveSpace&&e.ticks&&e.ticks.length&&("x"===e.direction?(n.left=Math.max(n.left,e.labelWidth/2),n.right=Math.max(n.right,e.labelWidth/2)):(n.bottom=Math.max(n.bottom,e.labelHeight/2),n.top=Math.max(n.top,e.labelHeight/2)))}),dt.left=Math.ceil(Math.max(n.left,dt.left)),dt.right=Math.ceil(Math.max(n.right,dt.right)),dt.top=Math.ceil(Math.max(n.top,dt.top)),dt.bottom=Math.ceil(Math.max(n.bottom,dt.bottom))}function D(){var e,i=p(),n=st.grid.show;for(var s in dt){var o=st.grid.margin||0;dt[s]="number"==typeof o?o:o[s]||0}a(gt.processOffset,[dt]);for(var s in dt)"object"==typeof st.grid.borderWidth?dt[s]+=n?st.grid.borderWidth[s]:0:dt[s]+=n?st.grid.borderWidth:0;if(t.each(i,function(t,e){var i=e.options;e.show=null==i.show?e.used:i.show,e.reserveSpace=null==i.reserveSpace?e.show:i.reserveSpace,A(e)}),n){var r=t.grep(i,function(t){return t.show||t.reserveSpace});for(t.each(r,function(t,e){I(e),M(e),E(e,e.ticks),_(e)}),e=r.length-1;e>=0;--e)C(r[e]);S(),t.each(r,function(t,e){T(e)})}pt=ot.width-dt.left-dt.right,ft=ot.height-dt.bottom-dt.top,t.each(i,function(t,e){k(e)}),n&&H(),B()}function A(t){var e=t.options,i=+(null!=e.min?e.min:t.datamin),n=+(null!=e.max?e.max:t.datamax),s=n-i;if(0==s){var o=0==n?1:.01;null==e.min&&(i-=o),null!=e.max&&null==e.min||(n+=o)}else{var r=e.autoscaleMargin;null!=r&&(null==e.min&&(i-=s*r,0>i&&null!=t.datamin&&t.datamin>=0&&(i=0)),null==e.max&&(n+=s*r,n>0&&null!=t.datamax&&t.datamax<=0&&(n=0)))}t.min=i,t.max=n}function I(e){var i,s=e.options;i="number"==typeof s.ticks&&s.ticks>0?s.ticks:.3*Math.sqrt("x"==e.direction?ot.width:ot.height);var o=(e.max-e.min)/i,r=-Math.floor(Math.log(o)/Math.LN10),a=s.tickDecimals;null!=a&&r>a&&(r=a);var l,h=Math.pow(10,-r),c=o/h;if(1.5>c?l=1:3>c?(l=2,c>2.25&&(null==a||a>=r+1)&&(l=2.5,++r)):l=7.5>c?5:10,l*=h,null!=s.minTickSize&&l<s.minTickSize&&(l=s.minTickSize),e.delta=o,e.tickDecimals=Math.max(0,null!=a?a:r),e.tickSize=s.tickSize||l,"time"==s.mode&&!e.tickGenerator)throw new Error("Time mode requires the flot.time plugin.");if(e.tickGenerator||(e.tickGenerator=function(t){var e,i=[],s=n(t.min,t.tickSize),o=0,r=Number.NaN;do e=r,r=s+o*t.tickSize,i.push(r),++o;while(r<t.max&&r!=e);return i},e.tickFormatter=function(t,e){var i=e.tickDecimals?Math.pow(10,e.tickDecimals):1,n=""+Math.round(t*i)/i;if(null!=e.tickDecimals){var s=n.indexOf("."),o=-1==s?0:n.length-s-1;if(o<e.tickDecimals)return(o?n:n+".")+(""+i).substr(1,e.tickDecimals-o)}return n}),t.isFunction(s.tickFormatter)&&(e.tickFormatter=function(t,e){return""+s.tickFormatter(t,e)}),null!=s.alignTicksWithAxis){var u=("x"==e.direction?ct:ut)[s.alignTicksWithAxis-1];if(u&&u.used&&u!=e){var d=e.tickGenerator(e);if(d.length>0&&(null==s.min&&(e.min=Math.min(e.min,d[0])),null==s.max&&d.length>1&&(e.max=Math.max(e.max,d[d.length-1]))),e.tickGenerator=function(t){var e,i,n=[];for(i=0;i<u.ticks.length;++i)e=(u.ticks[i].v-u.min)/(u.max-u.min),e=t.min+e*(t.max-t.min),n.push(e);return n},!e.mode&&null==s.tickDecimals){var p=Math.max(0,-Math.floor(Math.log(e.delta)/Math.LN10)+1),f=e.tickGenerator(e);f.length>1&&/\..*0$/.test((f[1]-f[0]).toFixed(p))||(e.tickDecimals=p)}}}}function M(e){var i=e.options.ticks,n=[];null==i||"number"==typeof i&&i>0?n=e.tickGenerator(e):i&&(n=t.isFunction(i)?i(e):i);var s,o;for(e.ticks=[],s=0;s<n.length;++s){var r=null,a=n[s];"object"==typeof a?(o=+a[0],a.length>1&&(r=a[1])):o=+a,null==r&&(r=e.tickFormatter(o,e)),isNaN(o)||e.ticks.push({v:o,label:r})}}function E(t,e){t.options.autoscaleMargin&&e.length>0&&(null==t.options.min&&(t.min=Math.min(t.min,e[0].v)),null==t.options.max&&e.length>1&&(t.max=Math.max(t.max,e[e.length-1].v)))}function P(){ot.clear(),a(gt.drawBackground,[lt]);var t=st.grid;t.show&&t.backgroundColor&&L(),t.show&&!t.aboveData&&O();for(var e=0;e<nt.length;++e)a(gt.drawSeries,[lt,nt[e]]),R(nt[e]);a(gt.draw,[lt]),t.show&&t.aboveData&&O(),ot.render(),V()}function N(t,e){for(var i,n,s,o,r=p(),a=0;a<r.length;++a)if(i=r[a],i.direction==e&&(o=e+i.n+"axis",t[o]||1!=i.n||(o=e+"axis"),t[o])){n=t[o].from,s=t[o].to;break}if(t[o]||(i="x"==e?ct[0]:ut[0],n=t[e+"1"],s=t[e+"2"]),null!=n&&null!=s&&n>s){var l=n;n=s,s=l}return{from:n,to:s,axis:i}}function L(){lt.save(),lt.translate(dt.left,dt.top),lt.fillStyle=it(st.grid.backgroundColor,ft,0,"rgba(255, 255, 255, 0)"),lt.fillRect(0,0,pt,ft),lt.restore()}function O(){var e,i,n,s;lt.save(),lt.translate(dt.left,dt.top);var o=st.grid.markings;if(o)for(t.isFunction(o)&&(i=mt.getAxes(),i.xmin=i.xaxis.min,i.xmax=i.xaxis.max,i.ymin=i.yaxis.min,i.ymax=i.yaxis.max,o=o(i)),e=0;e<o.length;++e){var r=o[e],a=N(r,"x"),l=N(r,"y");if(null==a.from&&(a.from=a.axis.min),null==a.to&&(a.to=a.axis.max),null==l.from&&(l.from=l.axis.min),null==l.to&&(l.to=l.axis.max),!(a.to<a.axis.min||a.from>a.axis.max||l.to<l.axis.min||l.from>l.axis.max)){a.from=Math.max(a.from,a.axis.min),a.to=Math.min(a.to,a.axis.max),l.from=Math.max(l.from,l.axis.min),l.to=Math.min(l.to,l.axis.max);var h=a.from===a.to,c=l.from===l.to;if(!h||!c)if(a.from=Math.floor(a.axis.p2c(a.from)),a.to=Math.floor(a.axis.p2c(a.to)),l.from=Math.floor(l.axis.p2c(l.from)),l.to=Math.floor(l.axis.p2c(l.to)),h||c){var u=r.lineWidth||st.grid.markingsLineWidth,d=u%2?.5:0;lt.beginPath(),lt.strokeStyle=r.color||st.grid.markingsColor,lt.lineWidth=u,h?(lt.moveTo(a.to+d,l.from),lt.lineTo(a.to+d,l.to)):(lt.moveTo(a.from,l.to+d),lt.lineTo(a.to,l.to+d)),lt.stroke()}else lt.fillStyle=r.color||st.grid.markingsColor,lt.fillRect(a.from,l.to,a.to-a.from,l.from-l.to)}}i=p(),n=st.grid.borderWidth;for(var f=0;f<i.length;++f){var g,m,v,y,b=i[f],x=b.box,w=b.tickLength;if(b.show&&0!=b.ticks.length){for(lt.lineWidth=1,"x"==b.direction?(g=0,m="full"==w?"top"==b.position?0:ft:x.top-dt.top+("top"==b.position?x.height:0)):(m=0,g="full"==w?"left"==b.position?0:pt:x.left-dt.left+("left"==b.position?x.width:0)),b.innermost||(lt.strokeStyle=b.options.color,lt.beginPath(),v=y=0,"x"==b.direction?v=pt+1:y=ft+1,1==lt.lineWidth&&("x"==b.direction?m=Math.floor(m)+.5:g=Math.floor(g)+.5),lt.moveTo(g,m),lt.lineTo(g+v,m+y),lt.stroke()),lt.strokeStyle=b.options.tickColor,lt.beginPath(),e=0;e<b.ticks.length;++e){var k=b.ticks[e].v;v=y=0,isNaN(k)||k<b.min||k>b.max||"full"==w&&("object"==typeof n&&n[b.position]>0||n>0)&&(k==b.min||k==b.max)||("x"==b.direction?(g=b.p2c(k),y="full"==w?-ft:w,"top"==b.position&&(y=-y)):(m=b.p2c(k),v="full"==w?-pt:w,"left"==b.position&&(v=-v)),1==lt.lineWidth&&("x"==b.direction?g=Math.floor(g)+.5:m=Math.floor(m)+.5),lt.moveTo(g,m),lt.lineTo(g+v,m+y))}lt.stroke()}}n&&(s=st.grid.borderColor,"object"==typeof n||"object"==typeof s?("object"!=typeof n&&(n={top:n,right:n,bottom:n,left:n}),"object"!=typeof s&&(s={top:s,right:s,bottom:s,left:s}),n.top>0&&(lt.strokeStyle=s.top,lt.lineWidth=n.top,lt.beginPath(),lt.moveTo(0-n.left,0-n.top/2),lt.lineTo(pt,0-n.top/2),lt.stroke()),n.right>0&&(lt.strokeStyle=s.right,lt.lineWidth=n.right,lt.beginPath(),lt.moveTo(pt+n.right/2,0-n.top),lt.lineTo(pt+n.right/2,ft),lt.stroke()),n.bottom>0&&(lt.strokeStyle=s.bottom,lt.lineWidth=n.bottom,lt.beginPath(),lt.moveTo(pt+n.right,ft+n.bottom/2),lt.lineTo(0,ft+n.bottom/2),lt.stroke()),n.left>0&&(lt.strokeStyle=s.left,lt.lineWidth=n.left,lt.beginPath(),lt.moveTo(0-n.left/2,ft+n.bottom),lt.lineTo(0-n.left/2,0),lt.stroke())):(lt.lineWidth=n,lt.strokeStyle=st.grid.borderColor,lt.strokeRect(-n/2,-n/2,pt+n,ft+n))),lt.restore()}function H(){t.each(p(),function(t,e){var i,n,s,o,r,a=e.box,l=e.direction+"Axis "+e.direction+e.n+"Axis",h="flot-"+e.direction+"-axis flot-"+e.direction+e.n+"-axis "+l,c=e.options.font||"flot-tick-label tickLabel";if(ot.removeText(h),e.show&&0!=e.ticks.length)for(var u=0;u<e.ticks.length;++u)i=e.ticks[u],!i.label||i.v<e.min||i.v>e.max||("x"==e.direction?(o="center",n=dt.left+e.p2c(i.v),"bottom"==e.position?s=a.top+a.padding:(s=a.top+a.height-a.padding,r="bottom")):(r="middle",s=dt.top+e.p2c(i.v),"left"==e.position?(n=a.left+a.width-a.padding,o="right"):n=a.left+a.padding),ot.addText(h,n,s,i.label,c,null,null,o,r))})}function R(t){t.lines.show&&z(t),t.bars.show&&j(t),t.points.show&&W(t)}function z(t){function e(t,e,i,n,s){var o=t.points,r=t.pointsize,a=null,l=null;lt.beginPath();for(var h=r;h<o.length;h+=r){var c=o[h-r],u=o[h-r+1],d=o[h],p=o[h+1];if(null!=c&&null!=d){if(p>=u&&u<s.min){if(p<s.min)continue;c=(s.min-u)/(p-u)*(d-c)+c,u=s.min}else if(u>=p&&p<s.min){if(u<s.min)continue;d=(s.min-u)/(p-u)*(d-c)+c,p=s.min}if(u>=p&&u>s.max){if(p>s.max)continue;c=(s.max-u)/(p-u)*(d-c)+c,u=s.max}else if(p>=u&&p>s.max){if(u>s.max)continue;d=(s.max-u)/(p-u)*(d-c)+c,p=s.max}if(d>=c&&c<n.min){if(d<n.min)continue;u=(n.min-c)/(d-c)*(p-u)+u,c=n.min}else if(c>=d&&d<n.min){if(c<n.min)continue;p=(n.min-c)/(d-c)*(p-u)+u,d=n.min}if(c>=d&&c>n.max){if(d>n.max)continue;u=(n.max-c)/(d-c)*(p-u)+u,c=n.max}else if(d>=c&&d>n.max){if(c>n.max)continue;p=(n.max-c)/(d-c)*(p-u)+u,d=n.max}c==a&&u==l||lt.moveTo(n.p2c(c)+e,s.p2c(u)+i),a=d,l=p,lt.lineTo(n.p2c(d)+e,s.p2c(p)+i)}}lt.stroke()}function i(t,e,i){for(var n=t.points,s=t.pointsize,o=Math.min(Math.max(0,i.min),i.max),r=0,a=!1,l=1,h=0,c=0;;){if(s>0&&r>n.length+s)break;r+=s;var u=n[r-s],d=n[r-s+l],p=n[r],f=n[r+l];if(a){if(s>0&&null!=u&&null==p){c=r,s=-s,l=2;continue}if(0>s&&r==h+s){lt.fill(),a=!1,s=-s,l=1,r=h=c+s;continue}}if(null!=u&&null!=p){if(p>=u&&u<e.min){if(p<e.min)continue;d=(e.min-u)/(p-u)*(f-d)+d,u=e.min}else if(u>=p&&p<e.min){if(u<e.min)continue;f=(e.min-u)/(p-u)*(f-d)+d,p=e.min}if(u>=p&&u>e.max){if(p>e.max)continue;d=(e.max-u)/(p-u)*(f-d)+d,u=e.max}else if(p>=u&&p>e.max){if(u>e.max)continue;f=(e.max-u)/(p-u)*(f-d)+d,p=e.max}if(a||(lt.beginPath(),lt.moveTo(e.p2c(u),i.p2c(o)),a=!0),d>=i.max&&f>=i.max)lt.lineTo(e.p2c(u),i.p2c(i.max)),lt.lineTo(e.p2c(p),i.p2c(i.max));else if(d<=i.min&&f<=i.min)lt.lineTo(e.p2c(u),i.p2c(i.min)),lt.lineTo(e.p2c(p),i.p2c(i.min));else{var g=u,m=p;f>=d&&d<i.min&&f>=i.min?(u=(i.min-d)/(f-d)*(p-u)+u,d=i.min):d>=f&&f<i.min&&d>=i.min&&(p=(i.min-d)/(f-d)*(p-u)+u,f=i.min),d>=f&&d>i.max&&f<=i.max?(u=(i.max-d)/(f-d)*(p-u)+u,d=i.max):f>=d&&f>i.max&&d<=i.max&&(p=(i.max-d)/(f-d)*(p-u)+u,f=i.max),u!=g&&lt.lineTo(e.p2c(g),i.p2c(d)),lt.lineTo(e.p2c(u),i.p2c(d)),lt.lineTo(e.p2c(p),i.p2c(f)),p!=m&&(lt.lineTo(e.p2c(p),i.p2c(f)),lt.lineTo(e.p2c(m),i.p2c(f)))}}}}lt.save(),lt.translate(dt.left,dt.top),lt.lineJoin="round";var n=t.lines.lineWidth,s=t.shadowSize;if(n>0&&s>0){lt.lineWidth=s,lt.strokeStyle="rgba(0,0,0,0.1)";var o=Math.PI/18;e(t.datapoints,Math.sin(o)*(n/2+s/2),Math.cos(o)*(n/2+s/2),t.xaxis,t.yaxis),lt.lineWidth=s/2,e(t.datapoints,Math.sin(o)*(n/2+s/4),Math.cos(o)*(n/2+s/4),t.xaxis,t.yaxis)}lt.lineWidth=n,lt.strokeStyle=t.color;var r=$(t.lines,t.color,0,ft);r&&(lt.fillStyle=r,i(t.datapoints,t.xaxis,t.yaxis)),n>0&&e(t.datapoints,0,0,t.xaxis,t.yaxis),lt.restore()}function W(t){function e(t,e,i,n,s,o,r,a){for(var l=t.points,h=t.pointsize,c=0;c<l.length;c+=h){var u=l[c],d=l[c+1];null==u||u<o.min||u>o.max||d<r.min||d>r.max||(lt.beginPath(),u=o.p2c(u),d=r.p2c(d)+n,"circle"==a?lt.arc(u,d,e,0,s?Math.PI:2*Math.PI,!1):a(lt,u,d,e,s),lt.closePath(),i&&(lt.fillStyle=i,lt.fill()),lt.stroke())}}lt.save(),lt.translate(dt.left,dt.top);var i=t.points.lineWidth,n=t.shadowSize,s=t.points.radius,o=t.points.symbol;if(0==i&&(i=1e-4),i>0&&n>0){var r=n/2;lt.lineWidth=r,lt.strokeStyle="rgba(0,0,0,0.1)",e(t.datapoints,s,null,r+r/2,!0,t.xaxis,t.yaxis,o),lt.strokeStyle="rgba(0,0,0,0.2)",e(t.datapoints,s,null,r/2,!0,t.xaxis,t.yaxis,o)}lt.lineWidth=i,lt.strokeStyle=t.color,e(t.datapoints,s,$(t.points,t.color),0,!1,t.xaxis,t.yaxis,o),lt.restore()}function F(t,e,i,n,s,o,r,a,l,h,c){var u,d,p,f,g,m,v,y,b;h?(y=m=v=!0,g=!1,u=i,d=t,f=e+n,p=e+s,u>d&&(b=d,d=u,u=b,g=!0,m=!1)):(g=m=v=!0,y=!1,u=t+n,d=t+s,p=i,f=e,p>f&&(b=f,f=p,p=b,y=!0,v=!1)),d<r.min||u>r.max||f<a.min||p>a.max||(u<r.min&&(u=r.min,g=!1),d>r.max&&(d=r.max,m=!1),p<a.min&&(p=a.min,y=!1),f>a.max&&(f=a.max,v=!1),u=r.p2c(u),p=a.p2c(p),d=r.p2c(d),f=a.p2c(f),o&&(l.fillStyle=o(p,f),l.fillRect(u,f,d-u,p-f)),c>0&&(g||m||v||y)&&(l.beginPath(),l.moveTo(u,p),g?l.lineTo(u,f):l.moveTo(u,f),v?l.lineTo(d,f):l.moveTo(d,f),m?l.lineTo(d,p):l.moveTo(d,p),y?l.lineTo(u,p):l.moveTo(u,p),l.stroke()))}function j(t){function e(e,i,n,s,o,r){for(var a=e.points,l=e.pointsize,h=0;h<a.length;h+=l)null!=a[h]&&F(a[h],a[h+1],a[h+2],i,n,s,o,r,lt,t.bars.horizontal,t.bars.lineWidth)}lt.save(),lt.translate(dt.left,dt.top),lt.lineWidth=t.bars.lineWidth,lt.strokeStyle=t.color;var i;switch(t.bars.align){case"left":i=0;break;case"right":i=-t.bars.barWidth;break;default:i=-t.bars.barWidth/2}var n=t.bars.fill?function(e,i){return $(t.bars,t.color,e,i)}:null;e(t.datapoints,i,i+t.bars.barWidth,n,t.xaxis,t.yaxis),lt.restore()}function $(e,i,n,s){var o=e.fill;if(!o)return null;if(e.fillColor)return it(e.fillColor,n,s,i);var r=t.color.parse(i);return r.a="number"==typeof o?o:.4,r.normalize(),r.toString()}function B(){if(null!=st.legend.container?t(st.legend.container).html(""):i.find(".legend").remove(),st.legend.show){for(var e,n,s=[],o=[],r=!1,a=st.legend.labelFormatter,l=0;l<nt.length;++l)e=nt[l],e.label&&(n=a?a(e.label,e):e.label,n&&o.push({label:n,color:e.color}));if(st.legend.sorted)if(t.isFunction(st.legend.sorted))o.sort(st.legend.sorted);else if("reverse"==st.legend.sorted)o.reverse();else{var h="descending"!=st.legend.sorted;o.sort(function(t,e){return t.label==e.label?0:t.label<e.label!=h?1:-1})}for(var l=0;l<o.length;++l){var c=o[l];l%st.legend.noColumns==0&&(r&&s.push("</tr>"),s.push("<tr>"),r=!0),s.push('<td class="legendColorBox"><div style="border:1px solid '+st.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+c.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+c.label+"</td>")}if(r&&s.push("</tr>"),0!=s.length){var u='<table style="font-size:smaller;color:'+st.grid.color+'">'+s.join("")+"</table>";if(null!=st.legend.container)t(st.legend.container).html(u);else{var d="",p=st.legend.position,f=st.legend.margin;null==f[0]&&(f=[f,f]),"n"==p.charAt(0)?d+="top:"+(f[1]+dt.top)+"px;":"s"==p.charAt(0)&&(d+="bottom:"+(f[1]+dt.bottom)+"px;"),"e"==p.charAt(1)?d+="right:"+(f[0]+dt.right)+"px;":"w"==p.charAt(1)&&(d+="left:"+(f[0]+dt.left)+"px;");var g=t('<div class="legend">'+u.replace('style="','style="position:absolute;'+d+";")+"</div>").appendTo(i);if(0!=st.legend.backgroundOpacity){var m=st.legend.backgroundColor;null==m&&(m=st.grid.backgroundColor,m=m&&"string"==typeof m?t.color.parse(m):t.color.extract(g,"background-color"),m.a=1,m=m.toString());var v=g.children();t('<div style="position:absolute;width:'+v.width()+"px;height:"+v.height()+"px;"+d+"background-color:"+m+';"> </div>').prependTo(g).css("opacity",st.legend.backgroundOpacity)}}}}}function q(t,e,i){var n,s,o,r=st.grid.mouseActiveRadius,a=r*r+1,l=null;for(n=nt.length-1;n>=0;--n)if(i(nt[n])){var h=nt[n],c=h.xaxis,u=h.yaxis,d=h.datapoints.points,p=c.c2p(t),f=u.c2p(e),g=r/c.scale,m=r/u.scale;if(o=h.datapoints.pointsize,c.options.inverseTransform&&(g=Number.MAX_VALUE),u.options.inverseTransform&&(m=Number.MAX_VALUE),h.lines.show||h.points.show)for(s=0;s<d.length;s+=o){var v=d[s],y=d[s+1];if(null!=v&&!(v-p>g||-g>v-p||y-f>m||-m>y-f)){var b=Math.abs(c.p2c(v)-t),x=Math.abs(u.p2c(y)-e),w=b*b+x*x;a>w&&(a=w,l=[n,s/o])}}if(h.bars.show&&!l){var k,_;switch(h.bars.align){case"left":k=0;break;case"right":k=-h.bars.barWidth;break;default:k=-h.bars.barWidth/2}for(_=k+h.bars.barWidth,s=0;s<d.length;s+=o){var v=d[s],y=d[s+1],C=d[s+2];null!=v&&(nt[n].bars.horizontal?p<=Math.max(C,v)&&p>=Math.min(C,v)&&f>=y+k&&y+_>=f:p>=v+k&&v+_>=p&&f>=Math.min(C,y)&&f<=Math.max(C,y))&&(l=[n,s/o])}}}return l?(n=l[0],s=l[1],o=nt[n].datapoints.pointsize,{datapoint:nt[n].datapoints.points.slice(s*o,(s+1)*o),dataIndex:s,series:nt[n],seriesIndex:n}):null}function Y(t){st.grid.hoverable&&G("plothover",t,function(t){return 0!=t.hoverable})}function X(t){st.grid.hoverable&&G("plothover",t,function(){return!1})}function U(t){G("plotclick",t,function(t){return 0!=t.clickable})}function G(t,e,n){var s=at.offset(),o=e.pageX-s.left-dt.left,r=e.pageY-s.top-dt.top,a=f({left:o,top:r});a.pageX=e.pageX,a.pageY=e.pageY;var l=q(o,r,n);if(l&&(l.pageX=parseInt(l.series.xaxis.p2c(l.datapoint[0])+s.left+dt.left,10),l.pageY=parseInt(l.series.yaxis.p2c(l.datapoint[1])+s.top+dt.top,10)),st.grid.autoHighlight){for(var h=0;h<vt.length;++h){var c=vt[h];c.auto!=t||l&&c.series==l.series&&c.point[0]==l.datapoint[0]&&c.point[1]==l.datapoint[1]||Z(c.series,c.point)}l&&Q(l.series,l.datapoint,t)}i.trigger(t,[a,l])}function V(){var t=st.interaction.redrawOverlayInterval;return-1==t?void K():void(yt||(yt=setTimeout(K,t)))}function K(){yt=null,ht.save(),rt.clear(),ht.translate(dt.left,dt.top);var t,e;for(t=0;t<vt.length;++t)e=vt[t],e.series.bars.show?et(e.series,e.point):tt(e.series,e.point);ht.restore(),a(gt.drawOverlay,[ht])}function Q(t,e,i){if("number"==typeof t&&(t=nt[t]),"number"==typeof e){var n=t.datapoints.pointsize;e=t.datapoints.points.slice(n*e,n*(e+1))}var s=J(t,e);-1==s?(vt.push({series:t,point:e,auto:i}),V()):i||(vt[s].auto=!1)}function Z(t,e){if(null==t&&null==e)return vt=[],void V();if("number"==typeof t&&(t=nt[t]),"number"==typeof e){var i=t.datapoints.pointsize;e=t.datapoints.points.slice(i*e,i*(e+1))}var n=J(t,e);-1!=n&&(vt.splice(n,1),V())}function J(t,e){for(var i=0;i<vt.length;++i){var n=vt[i];if(n.series==t&&n.point[0]==e[0]&&n.point[1]==e[1])return i}return-1}function tt(e,i){var n=i[0],s=i[1],o=e.xaxis,r=e.yaxis,a="string"==typeof e.highlightColor?e.highlightColor:t.color.parse(e.color).scale("a",.5).toString();if(!(n<o.min||n>o.max||s<r.min||s>r.max)){var l=e.points.radius+e.points.lineWidth/2;ht.lineWidth=l,ht.strokeStyle=a;var h=1.5*l;n=o.p2c(n),s=r.p2c(s),ht.beginPath(),"circle"==e.points.symbol?ht.arc(n,s,h,0,2*Math.PI,!1):e.points.symbol(ht,n,s,h,!1),ht.closePath(),ht.stroke()}}function et(e,i){var n,s="string"==typeof e.highlightColor?e.highlightColor:t.color.parse(e.color).scale("a",.5).toString(),o=s;switch(e.bars.align){case"left":n=0;break;case"right":n=-e.bars.barWidth;break;default:n=-e.bars.barWidth/2}ht.lineWidth=e.bars.lineWidth,ht.strokeStyle=s,F(i[0],i[1],i[2]||0,n,n+e.bars.barWidth,function(){return o},e.xaxis,e.yaxis,ht,e.bars.horizontal,e.bars.lineWidth)}function it(e,i,n,s){if("string"==typeof e)return e;for(var o=lt.createLinearGradient(0,n,0,i),r=0,a=e.colors.length;a>r;++r){var l=e.colors[r];if("string"!=typeof l){var h=t.color.parse(s);null!=l.brightness&&(h=h.scale("rgb",l.brightness)),null!=l.opacity&&(h.a*=l.opacity),l=h.toString()}o.addColorStop(r/(a-1),l)}return o}var nt=[],st={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},ot=null,rt=null,at=null,lt=null,ht=null,ct=[],ut=[],dt={left:0,right:0,top:0,bottom:0},pt=0,ft=0,gt={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},mt=this;mt.setData=c,mt.setupGrid=D,mt.draw=P,mt.getPlaceholder=function(){return i;
},mt.getCanvas=function(){return ot.element},mt.getPlotOffset=function(){return dt},mt.width=function(){return pt},mt.height=function(){return ft},mt.offset=function(){var t=at.offset();return t.left+=dt.left,t.top+=dt.top,t},mt.getData=function(){return nt},mt.getAxes=function(){var e={};return t.each(ct.concat(ut),function(t,i){i&&(e[i.direction+(1!=i.n?i.n:"")+"axis"]=i)}),e},mt.getXAxes=function(){return ct},mt.getYAxes=function(){return ut},mt.c2p=f,mt.p2c=g,mt.getOptions=function(){return st},mt.highlight=Q,mt.unhighlight=Z,mt.triggerRedrawOverlay=V,mt.pointOffset=function(t){return{left:parseInt(ct[d(t,"x")-1].p2c(+t.x)+dt.left,10),top:parseInt(ut[d(t,"y")-1].p2c(+t.y)+dt.top,10)}},mt.shutdown=w,mt.destroy=function(){w(),i.removeData("plot").empty(),nt=[],st=null,ot=null,rt=null,at=null,lt=null,ht=null,ct=[],ut=[],gt=null,vt=[],mt=null},mt.resize=function(){var t=i.width(),e=i.height();ot.resize(t,e),rt.resize(t,e)},mt.hooks=gt,l(mt),h(o),b(),c(s),D(),P(),x();var vt=[],yt=null}function n(t,e){return e*Math.floor(t/e)}var s=Object.prototype.hasOwnProperty;t.fn.detach||(t.fn.detach=function(){return this.each(function(){this.parentNode&&this.parentNode.removeChild(this)})}),e.prototype.resize=function(t,e){if(0>=t||0>=e)throw new Error("Invalid dimensions for plot, width = "+t+", height = "+e);var i=this.element,n=this.context,s=this.pixelRatio;this.width!=t&&(i.width=t*s,i.style.width=t+"px",this.width=t),this.height!=e&&(i.height=e*s,i.style.height=e+"px",this.height=e),n.restore(),n.save(),n.scale(s,s)},e.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},e.prototype.render=function(){var t=this._textCache;for(var e in t)if(s.call(t,e)){var i=this.getTextLayer(e),n=t[e];i.hide();for(var o in n)if(s.call(n,o)){var r=n[o];for(var a in r)if(s.call(r,a)){for(var l,h=r[a].positions,c=0;l=h[c];c++)l.active?l.rendered||(i.append(l.element),l.rendered=!0):(h.splice(c--,1),l.rendered&&l.element.detach());0==h.length&&delete r[a]}}i.show()}},e.prototype.getTextLayer=function(e){var i=this.text[e];return null==i&&(null==this.textContainer&&(this.textContainer=t("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)),i=this.text[e]=t("<div></div>").addClass(e).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)),i},e.prototype.getTextInfo=function(e,i,n,s,o){var r,a,l,h;if(i=""+i,r="object"==typeof n?n.style+" "+n.variant+" "+n.weight+" "+n.size+"px/"+n.lineHeight+"px "+n.family:n,a=this._textCache[e],null==a&&(a=this._textCache[e]={}),l=a[r],null==l&&(l=a[r]={}),h=l[i],null==h){var c=t("<div></div>").html(i).css({position:"absolute","max-width":o,top:-9999}).appendTo(this.getTextLayer(e));"object"==typeof n?c.css({font:r,color:n.color}):"string"==typeof n&&c.addClass(n),h=l[i]={width:c.outerWidth(!0),height:c.outerHeight(!0),element:c,positions:[]},c.detach()}return h},e.prototype.addText=function(t,e,i,n,s,o,r,a,l){var h=this.getTextInfo(t,n,s,o,r),c=h.positions;"center"==a?e-=h.width/2:"right"==a&&(e-=h.width),"middle"==l?i-=h.height/2:"bottom"==l&&(i-=h.height);for(var u,d=0;u=c[d];d++)if(u.x==e&&u.y==i)return void(u.active=!0);u={active:!0,rendered:!1,element:c.length?h.element.clone():h.element,x:e,y:i},c.push(u),u.element.css({top:Math.round(i),left:Math.round(e),"text-align":a})},e.prototype.removeText=function(t,e,i,n,o,r){if(null==n){var a=this._textCache[t];if(null!=a)for(var l in a)if(s.call(a,l)){var h=a[l];for(var c in h)if(s.call(h,c))for(var u,d=h[c].positions,p=0;u=d[p];p++)u.active=!1}}else for(var u,d=this.getTextInfo(t,n,o,r).positions,p=0;u=d[p];p++)u.x==e&&u.y==i&&(u.active=!1)},t.plot=function(e,n,s){var o=new i(t(e),n,s,t.plot.plugins);return o},t.plot.version="0.8.3",t.plot.plugins=[],t.fn.plot=function(e,i){return this.each(function(){t.plot(this,e,i)})}}(jQuery);