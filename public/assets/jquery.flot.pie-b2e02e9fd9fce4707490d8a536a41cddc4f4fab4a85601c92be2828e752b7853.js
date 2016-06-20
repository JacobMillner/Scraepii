/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/
!function(t){function e(e){function s(e){_||(_=!0,v=e.getCanvas(),y=t(v).parent(),b=e.getOptions(),e.setData(o(e.getData())))}function o(e){for(var i=0,n=0,s=0,o=b.series.pie.combine.color,r=[],a=0;a<e.length;++a){var l=e[a].data;t.isArray(l)&&1==l.length&&(l=l[0]),t.isArray(l)?!isNaN(parseFloat(l[1]))&&isFinite(l[1])?l[1]=+l[1]:l[1]=0:l=!isNaN(parseFloat(l))&&isFinite(l)?[1,+l]:[1,0],e[a].data=[l]}for(var a=0;a<e.length;++a)i+=e[a].data[0][1];for(var a=0;a<e.length;++a){var l=e[a].data[0][1];l/i<=b.series.pie.combine.threshold&&(n+=l,s++,o||(o=e[a].color))}for(var a=0;a<e.length;++a){var l=e[a].data[0][1];(2>s||l/i>b.series.pie.combine.threshold)&&r.push(t.extend(e[a],{data:[[1,l]],color:e[a].color,label:e[a].label,angle:l*Math.PI*2/i,percent:l/(i/100)}))}return s>1&&r.push({data:[[1,n]],color:o,label:b.series.pie.combine.label,angle:n*Math.PI*2/i,percent:n/(i/100)}),r}function r(e,s){function o(){C.clearRect(0,0,h,c),y.children().filter(".pieLabel, .pieLabelBackground").remove()}function r(){var t=b.series.pie.shadow.left,e=b.series.pie.shadow.top,i=10,n=b.series.pie.shadow.alpha,s=b.series.pie.radius>1?b.series.pie.radius:x*b.series.pie.radius;if(!(s>=h/2-t||s*b.series.pie.tilt>=c/2-e||i>=s)){C.save(),C.translate(t,e),C.globalAlpha=n,C.fillStyle="#000",C.translate(w,k),C.scale(1,b.series.pie.tilt);for(var o=1;i>=o;o++)C.beginPath(),C.arc(0,0,s,0,2*Math.PI,!1),C.fill(),s-=o;C.restore()}}function l(){function e(t,e,i){0>=t||isNaN(t)||(i?C.fillStyle=e:(C.strokeStyle=e,C.lineJoin="round"),C.beginPath(),Math.abs(t-2*Math.PI)>1e-9&&C.moveTo(0,0),C.arc(0,0,s,o,o+t/2,!1),C.arc(0,0,s,o+t/2,o+t,!1),C.closePath(),o+=t,i?C.fill():C.stroke())}function i(){function e(e,i,n){if(0==e.data[0][1])return!0;var o,r=b.legend.labelFormatter,a=b.series.pie.label.formatter;o=r?r(e.label,e):e.label,a&&(o=a(o,e));var l=(i+e.angle+i)/2,u=w+Math.round(Math.cos(l)*s),d=k+Math.round(Math.sin(l)*s)*b.series.pie.tilt,p="<span class='pieLabel' id='pieLabel"+n+"' style='position:absolute;top:"+d+"px;left:"+u+"px;'>"+o+"</span>";y.append(p);var f=y.children("#pieLabel"+n),g=d-f.height()/2,m=u-f.width()/2;if(f.css("top",g),f.css("left",m),0-g>0||0-m>0||c-(g+f.height())<0||h-(m+f.width())<0)return!1;if(0!=b.series.pie.label.background.opacity){var v=b.series.pie.label.background.color;null==v&&(v=e.color);var x="top:"+g+"px;left:"+m+"px;";t("<div class='pieLabelBackground' style='position:absolute;width:"+f.width()+"px;height:"+f.height()+"px;"+x+"background-color:"+v+";'></div>").css("opacity",b.series.pie.label.background.opacity).insertBefore(f)}return!0}for(var i=n,s=b.series.pie.label.radius>1?b.series.pie.label.radius:x*b.series.pie.label.radius,o=0;o<d.length;++o){if(d[o].percent>=100*b.series.pie.label.threshold&&!e(d[o],i,o))return!1;i+=d[o].angle}return!0}var n=Math.PI*b.series.pie.startAngle,s=b.series.pie.radius>1?b.series.pie.radius:x*b.series.pie.radius;C.save(),C.translate(w,k),C.scale(1,b.series.pie.tilt),C.save();for(var o=n,r=0;r<d.length;++r)d[r].startAngle=o,e(d[r].angle,d[r].color,!0);if(C.restore(),b.series.pie.stroke.width>0){C.save(),C.lineWidth=b.series.pie.stroke.width,o=n;for(var r=0;r<d.length;++r)e(d[r].angle,b.series.pie.stroke.color,!1);C.restore()}return a(C),C.restore(),b.series.pie.label.show?i():!0}if(y){var h=e.getPlaceholder().width(),c=e.getPlaceholder().height(),u=y.children().filter(".legend").children().width()||0;C=s,_=!1,x=Math.min(h,c/b.series.pie.tilt)/2,k=c/2+b.series.pie.offset.top,w=h/2,"auto"==b.series.pie.offset.left?(b.legend.position.match("w")?w+=u/2:w-=u/2,x>w?w=x:w>h-x&&(w=h-x)):w+=b.series.pie.offset.left;var d=e.getData(),p=0;do p>0&&(x*=n),p+=1,o(),b.series.pie.tilt<=.8&&r();while(!l()&&i>p);p>=i&&(o(),y.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")),e.setSeries&&e.insertLegend&&(e.setSeries(d),e.insertLegend())}}function a(t){if(b.series.pie.innerRadius>0){t.save();var e=b.series.pie.innerRadius>1?b.series.pie.innerRadius:x*b.series.pie.innerRadius;t.globalCompositeOperation="destination-out",t.beginPath(),t.fillStyle=b.series.pie.stroke.color,t.arc(0,0,e,0,2*Math.PI,!1),t.fill(),t.closePath(),t.restore(),t.save(),t.beginPath(),t.strokeStyle=b.series.pie.stroke.color,t.arc(0,0,e,0,2*Math.PI,!1),t.stroke(),t.closePath(),t.restore()}}function l(t,e){for(var i=!1,n=-1,s=t.length,o=s-1;++n<s;o=n)(t[n][1]<=e[1]&&e[1]<t[o][1]||t[o][1]<=e[1]&&e[1]<t[n][1])&&e[0]<(t[o][0]-t[n][0])*(e[1]-t[n][1])/(t[o][1]-t[n][1])+t[n][0]&&(i=!i);return i}function h(t,i){for(var n,s,o=e.getData(),r=e.getOptions(),a=r.series.pie.radius>1?r.series.pie.radius:x*r.series.pie.radius,h=0;h<o.length;++h){var c=o[h];if(c.pie.show){if(C.save(),C.beginPath(),C.moveTo(0,0),C.arc(0,0,a,c.startAngle,c.startAngle+c.angle/2,!1),C.arc(0,0,a,c.startAngle+c.angle/2,c.startAngle+c.angle,!1),C.closePath(),n=t-w,s=i-k,C.isPointInPath){if(C.isPointInPath(t-w,i-k))return C.restore(),{datapoint:[c.percent,c.data],dataIndex:0,series:c,seriesIndex:h}}else{var u=a*Math.cos(c.startAngle),d=a*Math.sin(c.startAngle),p=a*Math.cos(c.startAngle+c.angle/4),f=a*Math.sin(c.startAngle+c.angle/4),g=a*Math.cos(c.startAngle+c.angle/2),m=a*Math.sin(c.startAngle+c.angle/2),v=a*Math.cos(c.startAngle+c.angle/1.5),y=a*Math.sin(c.startAngle+c.angle/1.5),b=a*Math.cos(c.startAngle+c.angle),_=a*Math.sin(c.startAngle+c.angle),T=[[0,0],[u,d],[p,f],[g,m],[v,y],[b,_]],S=[n,s];if(l(T,S))return C.restore(),{datapoint:[c.percent,c.data],dataIndex:0,series:c,seriesIndex:h}}C.restore()}}return null}function c(t){d("plothover",t)}function u(t){d("plotclick",t)}function d(t,i){var n=e.offset(),s=parseInt(i.pageX-n.left),o=parseInt(i.pageY-n.top),r=h(s,o);if(b.grid.autoHighlight)for(var a=0;a<T.length;++a){var l=T[a];l.auto!=t||r&&l.series==r.series||f(l.series)}r&&p(r.series,t);var c={pageX:i.pageX,pageY:i.pageY};y.trigger(t,[c,r])}function p(t,i){var n=g(t);-1==n?(T.push({series:t,auto:i}),e.triggerRedrawOverlay()):i||(T[n].auto=!1)}function f(t){null==t&&(T=[],e.triggerRedrawOverlay());var i=g(t);-1!=i&&(T.splice(i,1),e.triggerRedrawOverlay())}function g(t){for(var e=0;e<T.length;++e){var i=T[e];if(i.series==t)return e}return-1}function m(t,e){function i(t){t.angle<=0||isNaN(t.angle)||(e.fillStyle="rgba(255, 255, 255, "+n.series.pie.highlight.opacity+")",e.beginPath(),Math.abs(t.angle-2*Math.PI)>1e-9&&e.moveTo(0,0),e.arc(0,0,s,t.startAngle,t.startAngle+t.angle/2,!1),e.arc(0,0,s,t.startAngle+t.angle/2,t.startAngle+t.angle,!1),e.closePath(),e.fill())}var n=t.getOptions(),s=n.series.pie.radius>1?n.series.pie.radius:x*n.series.pie.radius;e.save(),e.translate(w,k),e.scale(1,n.series.pie.tilt);for(var o=0;o<T.length;++o)i(T[o].series);a(e),e.restore()}var v=null,y=null,b=null,x=null,w=null,k=null,_=!1,C=null,T=[];e.hooks.processOptions.push(function(t,e){e.series.pie.show&&(e.grid.show=!1,"auto"==e.series.pie.label.show&&(e.legend.show?e.series.pie.label.show=!1:e.series.pie.label.show=!0),"auto"==e.series.pie.radius&&(e.series.pie.label.show?e.series.pie.radius=.75:e.series.pie.radius=1),e.series.pie.tilt>1?e.series.pie.tilt=1:e.series.pie.tilt<0&&(e.series.pie.tilt=0))}),e.hooks.bindEvents.push(function(t,e){var i=t.getOptions();i.series.pie.show&&(i.grid.hoverable&&e.unbind("mousemove").mousemove(c),i.grid.clickable&&e.unbind("click").click(u))}),e.hooks.processDatapoints.push(function(t,e,i,n){var o=t.getOptions();o.series.pie.show&&s(t,e,i,n)}),e.hooks.drawOverlay.push(function(t,e){var i=t.getOptions();i.series.pie.show&&m(t,e)}),e.hooks.draw.push(function(t,e){var i=t.getOptions();i.series.pie.show&&r(t,e)})}var i=10,n=.95,s={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,shadow:{left:5,top:15,alpha:.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(t,e){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+e.color+";'>"+t+"<br/>"+Math.round(e.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};t.plot.plugins.push({init:e,options:s,name:"pie",version:"1.1"})}(jQuery);