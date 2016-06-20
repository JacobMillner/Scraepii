/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/
/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(t,e,i){"$:nomunge";function n(i){a===!0&&(a=i||1);for(var l=o.length-1;l>=0;l--){var d=t(o[l]);if(d[0]==e||d.is(":visible")){var p=d.width(),f=d.height(),g=d.data(c);!g||p===g.w&&f===g.h||(d.trigger(h,[g.w=p,g.h=f]),a=i||!0)}else g=d.data(c),g.w=0,g.h=0}null!==s&&(a&&(null==i||1e3>i-a)?s=e.requestAnimationFrame(n):(s=setTimeout(n,r[u]),a=!1))}var s,o=[],r=t.resize=t.extend(t.resize,{}),a=!1,l="setTimeout",h="resize",c=h+"-special-event",u="pendingDelay",d="activeDelay",p="throttleWindow";r[u]=200,r[d]=20,r[p]=!0,t.event.special[h]={setup:function(){if(!r[p]&&this[l])return!1;var e=t(this);o.push(this),e.data(c,{w:e.width(),h:e.height()}),1===o.length&&(s=i,n())},teardown:function(){if(!r[p]&&this[l])return!1;for(var e=t(this),i=o.length-1;i>=0;i--)if(o[i]==this){o.splice(i,1);break}e.removeData(c),o.length||(a?cancelAnimationFrame(s):clearTimeout(s),s=null)},add:function(e){function n(e,n,o){var r=t(this),a=r.data(c)||{};a.w=n!==i?n:r.width(),a.h=o!==i?o:r.height(),s.apply(this,arguments)}if(!r[p]&&this[l])return!1;var s;return t.isFunction(e)?(s=e,n):(s=e.handler,void(e.handler=n))}},e.requestAnimationFrame||(e.requestAnimationFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){return e.setTimeout(function(){t((new Date).getTime())},r[d])}}()),e.cancelAnimationFrame||(e.cancelAnimationFrame=function(){return e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}())}(jQuery,this),function(t){function e(t){function e(){var e=t.getPlaceholder();0!=e.width()&&0!=e.height()&&(t.resize(),t.setupGrid(),t.draw())}function i(t){t.getPlaceholder().resize(e)}function n(t){t.getPlaceholder().unbind("resize",e)}t.hooks.bindEvents.push(i),t.hooks.shutdown.push(n)}var i={};t.plot.plugins.push({init:e,options:i,name:"resize",version:"1.0"})}(jQuery);