(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{"5Mlw":function(t,e){nv.models.OTRSmultiBarChart=function(t){"use strict";var e,n,a=nv.models.multiBar(),r=nv.models.axis(),i=nv.models.axis(),s=nv.models.legend(),o=nv.models.legend(),c={top:30,right:20,bottom:50,left:60},l=null,u=null,d=nv.utils.defaultColor(),f=!0,p={},h=!0,v=!0,g=!0,m=!1,x=!0,b=!1,k=0,_=!0,w=function(t,e,n,a,r){return"<h3>"+t+"</h3><p>"+n+" - "+e+"</p>"},A=nv.utils.state(),y=null,S=t.translate("No Data Available."),D=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState","renderEnd"),L=function(){return f?220:0},E=250;A.stacked=!1,a.stacked(!1),r.orient("bottom").tickPadding(7).showMaxMin(!1).tickFormat(function(t){return t}),i.orient(m?"right":"left").tickFormat(d3.format(",.1f")),o.updateState(!1);var B=nv.utils.renderWatch(D),C=!1,T=function(t,e){var n=t.pos[0]+(e.offsetLeft||0),s=t.pos[1]+(e.offsetTop||0),o=r.tickFormat()(a.x()(t.point,t.pointIndex)),c=i.tickFormat()(a.y()(t.point,t.pointIndex)),l=w(t.series.key,o,c,t,M);l.match(/__LABEL_START__\d+__LABEL_END__/)&&(l=l.replace(/__LABEL_START__\d+__LABEL_END__/,"")),nv.tooltip.show([n,s],l,t.value<0?"n":"s",null,e)},F=function(t){return function(){return{active:t.map(function(t){return!t.disabled}),stacked:C}}},R=function(t){return function(e){void 0!==e.stacked&&(C=e.stacked),void 0!==e.active&&t.forEach(function(t,n){t.disabled=!e.active[n]})}};function M(w){return B.reset(),B.models(a),v&&B.models(r),g&&B.models(i),w.each(function(w){var B=d3.select(this),N=this;nv.utils.initSVG(B);var W,I=(l||parseInt(B.style("width"))||960)-c.left-c.right,G=(u||parseInt(B.style("height"))||400)-c.top-c.bottom;if("100%"===B.style("width")&&(I=212),M.update=function(){0===E?B.call(M):B.transition().duration(E).call(M)},M.container=this,A.setter(R(w),M.update).getter(F(w)).update(),A.disabled=w.map(function(t){return!!t.disabled}),!y)for(W in y={},A)A[W]instanceof Array?y[W]=A[W].slice(0):y[W]=A[W];if(!(w&&w.length&&w.filter(function(t){return t.values.length}).length)){var O=B.selectAll(".nv-noData").data([S]);return O.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),O.attr("x",c.left+I/2).attr("y",c.top+G/2).text(function(t){return t}),M}B.selectAll(".nv-noData").remove(),e=a.xScale(),n=a.yScale();var H=B.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([w]),X=H.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarWithLegend").append("g"),Y=H.select("g");if(X.append("g").attr("class","nv-x nv-axis"),X.append("g").attr("class","nv-y nv-axis"),X.append("g").attr("class","nv-barsWrap"),X.append("g").attr("class","nv-legendWrap"),X.append("g").attr("class","nv-controlsWrap"),h&&(s.width(I-L()),a.barColor()&&w.forEach(function(t,e){t.color=d3.rgb("#ccc").darker(1.5*e).toString()}),Y.select(".nv-legendWrap").datum(w).call(s),c.top!=s.height()&&(c.top=s.height(),G=(u||parseInt(B.style("height"))||400)-c.top-c.bottom),Y.select(".nv-legendWrap").attr("transform","translate("+L()+","+-c.top+")")),f){var z=[{key:p.grouped||t.translate("Grouped"),disabled:a.stacked()},{key:p.stacked||t.translate("Stacked"),disabled:!a.stacked()}];o.width(L()).color(["#444","#444","#444"]),Y.select(".nv-controlsWrap").datum(z).attr("transform","translate(0,"+-c.top+")").call(o)}if(H.attr("transform","translate("+c.left+","+c.top+")"),m&&Y.select(".nv-y.nv-axis").attr("transform","translate("+I+",0)"),a.disabled(w.map(function(t){return t.disabled})).width(I).height(G).color(w.map(function(t,e){return t.color||d(t,e)}).filter(function(t,e){return!w[e].disabled})),Y.select(".nv-barsWrap").datum(w.filter(function(t){return!t.disabled})).call(a),v){r.scale(e).ticks(nv.utils.calcTicksX(I/100,w)).tickSize(-G,0),Y.select(".nv-x.nv-axis").attr("transform","translate(0,"+n.range()[0]+")"),Y.select(".nv-x.nv-axis").call(r);var J=Y.select(".nv-x.nv-axis > g").selectAll("g");if(J.selectAll("line, text").style("opacity",1),b){var $=function(t,e){return"translate("+t+","+e+")"};J.selectAll("text").attr("transform",function(t,e,n){return $(0,n%2==0?5:17)});var j=d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;Y.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform",function(t,e){return $(0,0===e||j%2!=0?17:5)})}x&&J.filter(function(t,e){return e%Math.ceil(w[0].values.length/(I/100))!=0}).selectAll("text, line").style("opacity",0),k&&J.selectAll(".tick text").attr("transform","rotate("+k+" 0,0)").style("text-anchor",k>0?"start":"end"),Y.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity",1)}g&&(i.scale(n).ticks(nv.utils.calcTicksY(G/36,w)).tickSize(-I,0),Y.select(".nv-y.nv-axis").call(i)),s.dispatch.on("stateChange",function(t){for(var e in t)A[e]=t[e];D.stateChange(A),M.update()}),o.dispatch.on("legendClick",function(e,n){if(e.disabled){switch(z=z.map(function(t){return t.disabled=!0,t}),e.disabled=!1,e.key){case t.translate("Grouped"):a.stacked(!1);break;case t.translate("Stacked"):a.stacked(!0)}A.stacked=a.stacked(),D.stateChange(A),M.update()}}),D.on("tooltipShow",function(t){_&&T(t,N.parentNode)}),D.on("changeState",function(t){void 0!==t.disabled&&(w.forEach(function(e,n){e.disabled=t.disabled[n]}),A.disabled=t.disabled),void 0!==t.stacked&&(a.stacked(t.stacked),A.stacked=t.stacked,C=t.stacked),M.update()}),B.selectAll(".tick").each(function(){var t=this.textContent,e="";t.match(/__LABEL_START__\d+__LABEL_END__/)&&(e=t.replace(/__LABEL_START__\d+__LABEL_END__/,""),this.querySelector("text").textContent=e)})}),B.renderEnd("multibarchart immediate"),M}return a.dispatch.on("elementMouseover.tooltip",function(t){t.pos=[t.pos[0]+c.left,t.pos[1]+c.top],D.tooltipShow(t)}),a.dispatch.on("elementMouseout.tooltip",function(t){D.tooltipHide(t)}),D.on("tooltipHide",function(){_&&nv.tooltip.cleanup()}),M.dispatch=D,M.multibar=a,M.legend=s,M.xAxis=r,M.yAxis=i,M.state=A,M.options=nv.utils.optionsFunc.bind(M),M._options=Object.create({},{width:{get:function(){return l},set:function(t){l=t}},height:{get:function(){return u},set:function(t){u=t}},showLegend:{get:function(){return h},set:function(t){h=t}},showControls:{get:function(){return f},set:function(t){f=t}},controlLabels:{get:function(){return p},set:function(t){p=t}},showXAxis:{get:function(){return v},set:function(t){v=t}},showYAxis:{get:function(){return g},set:function(t){g=t}},tooltips:{get:function(){return _},set:function(t){_=t}},tooltipContent:{get:function(){return w},set:function(t){w=t}},defaultState:{get:function(){return y},set:function(t){y=t}},noData:{get:function(){return S},set:function(t){S=t}},reduceXTicks:{get:function(){return x},set:function(t){x=t}},rotateLabels:{get:function(){return k},set:function(t){k=t}},staggerLabels:{get:function(){return b},set:function(t){b=t}},margin:{get:function(){return c},set:function(t){c.top=void 0!==t.top?t.top:c.top,c.right=void 0!==t.right?t.right:c.right,c.bottom=void 0!==t.bottom?t.bottom:c.bottom,c.left=void 0!==t.left?t.left:c.left}},duration:{get:function(){return E},set:function(t){E=t,a.duration(E),r.duration(E),i.duration(E),B.reset(E)}},color:{get:function(){return d},set:function(t){d=nv.utils.getColor(t),s.color(d)}},rightAlignYAxis:{get:function(){return m},set:function(t){m=t,i.orient(m?"right":"left")}}}),nv.utils.inheritOptions(M,a),nv.utils.initOptions(M),M}},n3vJ:function(t,e,n){"use strict";n.r(e);var a=n("NthX"),r=n.n(a),i=(n("W1QL"),n("K/PF"),n("t91x"),n("e2Kn"),n("MYxt"),n("oMRA"),n("6d4m"),n("wcNg"),n("fFdx")),s=n.n(i),o=n("Tla7"),c=n("18g7"),l=n.n(c),u=n("UEq5");n("5Mlw");var d={name:"BarChart",extends:o.default,methods:{prepareData:function(){var t=s()(r.a.mark(function t(){var e,n,a,i,s,o,c,l,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=0,null===this.resultDataRaw){t.next=33;break}this.resultDataRaw.shift(),this.headings=this.resultDataRaw.shift(),n=this.resultDataRaw.length,a=0;case 6:if(!(a<n)){t.next=33;break}if(i=this.resultDataRaw[a],s=0,"Sum"!==i[0]){t.next=11;break}return t.abrupt("continue",30);case 11:o={key:i[0],color:this.colors[e%this.colors.length],disabled:!(!this.preferencesData||!this.preferencesData.Filter||this.preferencesData.Filter.includes(i[0])),values:[]},c=0;case 13:if(!(c<this.headings.length)){t.next=28;break}if(l=this.headings[c],s++,0!==c){t.next=18;break}return t.abrupt("continue",25);case 18:if(void 0!==l&&"Sum"!==l){t.next=20;break}return t.abrupt("continue",25);case 20:if(u=parseFloat(i[c]),!Number.isNaN(u)){t.next=23;break}return t.abrupt("continue",25);case 23:u%1&&(this.valueFormat=",1f"),o.values.push({x:"__LABEL_START__".concat(s,"__LABEL_END__").concat(l," "),y:u});case 25:c++,t.next=13;break;case 28:this.resultData.push(o),e++;case 30:a++,t.next=6;break;case 33:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),drawChart:function(){var t=s()(r.a.mark(function t(){var e=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u.addGraph(function(){var t=u.models.OTRSmultiBarChart(e.$locale);try{t.staggerLabels(!0),t.margin({top:20,right:20,bottom:50,left:50}),t.duration(e.options.Duration||0),t.showLegend(!e.options.HideLegend),t.tooltips(function(t,e,n){return"<h3>".concat(t,"</h3><p>").concat(e,":").concat(n,"</p>")}),t.dispatch.on("stateChange",function(t){e.preferencesData={Bar:{}},void 0!==t.stacked&&(e.preferencesData.Bar.State={},e.preferencesData.Bar.State.Style=t.stacked?"stacked":""),void 0!==t.disabled&&(e.preferencesData.Bar.Filter=e.getControlSelection(e.resultData)),e.$emit("graph-preferences-updated",e.preferencesData)}),e.preferencesData&&e.preferencesData.State&&t.stacked("stacked"===e.preferencesData.State.Style),t.yAxis.axisLabel("Values").tickFormat(l.a.format(e.valueFormat)),l.a.select("div#".concat(e.chartId," svg.StatisticChart__Graphic")).datum(e.resultData).transition().duration(e.initDuration).call(t),u.utils.windowResize(t.update)}catch(t){e.$log.error(t)}return t});case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}},f=n("psIG"),p=Object(f.a)(d,void 0,void 0,!1,null,null,null);e.default=p.exports}}]);