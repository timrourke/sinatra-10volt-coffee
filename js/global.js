//Grafici.
"use strict";function Grafici(i){this.config=i,this.targetTables=[],this.graphs=[],this.init=function(i){this.targetTables=document.querySelectorAll("."+i.tableClass),this.buildGraphs(this.targetTables)},this.buildGraphs=function(i){for(var t=0;t<i.length;t++){for(var s=i[t].getElementsByTagName("tr"),e=s[0],r={id:t,title:function(){return i[t].getElementsByTagName("caption").length?i[t].getElementsByTagName("caption")[0].textContent:(console.error("Table has no caption, falling back to generic name: "),console.dir(i[t]),"unnamed table")}(),xAxisLabel:e.cells[0].textContent,yAxisLabel:e.cells[1].textContent,xAxis:[],yAxis:[],graphType:this.getGraphType(i[t])},a=1;a<s.length;a++)r.xAxis.push(s[a].cells[0].textContent);for(var n=1;n<s.length;n++)r.yAxis.push(s[n].cells[1].textContent);r.numRows=r.xAxis.length,r.numColumns=r.yAxis.length,r.max=this.getMaxOfArray(r.yAxis),r.min=this.getMinOfArray(r.yAxis),this.graphs.push(r)}this.drawGraphs(this.graphs)},this.getGraphType=function(i){var t=i.getAttribute("class"),s={};return-1!=t.indexOf("grafici-bar-graph")&&(s.barGraph=!0),-1!=t.indexOf("grafici-line-graph")&&(s.lineGraph=!0),s=={}&&(s.lineGraph=!0),s},this.drawGraphs=function(i){for(var t in i){var s=i[t],e=((s.numRows+1)/s.numRows+1)/2;e=(e-1)/2+1;var r=Math.floor(this.config.graphSize.height-this.config.graphSize.height*e),a=Math.floor(this.config.graphSize.height*e*e);this.targetTables[t].style.cssText="opacity:0;position:absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);";var n="",h="",g="",o="",c="";n='<figure class="grafici-graph" id="'+this.config.outputID+"-"+s.id+'">',o='<svg class="grafici-graph__svg" viewBox = "0 '+r+" "+this.config.graphSize.width+" "+a+'" version = "1.1">';var p='<svg class="grafici-graph__xAxis" viewBox = "0 0 '+this.config.graphSize.width+" "+this.config.graphSize.xAxisHeight+'" version = "1.1">';if(this.config.gridLines){for(var l=r;l<a/this.config.gridLines.size;l++)h+=this.drawLine(0,l*this.config.gridLines.size,this.config.graphSize.width,l*this.config.gridLines.size,this.config.gridLines.stroke,this.config.gridLines.strokeWidth);for(var f=0;f<this.config.graphSize.width/this.config.gridLines.size;f++)h+=this.drawLine(f*this.config.gridLines.size,r,f*this.config.gridLines.size,a,this.config.gridLines.stroke,this.config.gridLines.strokeWidth)}s.graphType.hasOwnProperty("lineGraph")&&(c="M"+s.numRows/(s.numColumns+1)*this.config.graphSize.width+" "+(this.config.graphSize.height+(s.yAxis[s.numRows-1]-s.min)/(s.max-s.min)*-this.config.graphSize.height)+" L"+s.numRows/(s.numColumns+1)*this.config.graphSize.width+" "+a+" L "+1/(s.numColumns+1)*this.config.graphSize.width+" "+a);for(var d=0;d<s.numRows;d++){var x=(d+1)/(s.numColumns+1)*this.config.graphSize.width,u=this.config.graphSize.height+(s.yAxis[d]-s.min)/(s.max-s.min)*-this.config.graphSize.height,m=(d+2)/(s.numColumns+1)*this.config.graphSize.width||!1,y=parseInt(this.config.graphSize.height)+(s.yAxis[d+1]-s.min)/(s.max-s.min)*-this.config.graphSize.height;s.graphType.hasOwnProperty("lineGraph")&&(d+1<s.numRows&&(h+=this.drawLine(x,u,m,y,this.config.graphLines.stroke,this.config.graphLines.strokeWidth)),s.graphType.hasOwnProperty("lineGraph")&&(c+=" L "+x+" "+u),h+=this.drawCircle(x,u,this.config.graphPoints.radius)),s.graphType.hasOwnProperty("barGraph")&&(h+=this.drawLine(x,a,x,u,this.config.barGraphLines.stroke,this.config.barGraphLines.strokeWidth)),h+=this.drawText(x,u,3,1,"start","black",4,s.yAxis[d],"grafici-data-label"),p+=this.drawText(x,this.config.graphSize.xAxisHeight,0,this.config.graphSize.xAxisHeight/-2,"middle","black",3,s.xAxis[d],"grafici-x-label")}if(s.graphType.hasOwnProperty("lineGraph")){c+=" Z";var g='<path class="grafici-data-path" d="'+c+'" fill="'+this.config.pathFill+'"/>'}else var g="";for(var w=0;w<a/(this.config.gridLines.size*this.config.graphSize.yAxisLabelFrequency);w++){var z=3*w*this.config.graphSize.yAxisLabelFrequency,v=(s.max-s.min)/((-a-r)/z)+s.min+(s.max-s.min-r)+r;v=Math.round(100*v)/100,h+=this.drawText(0,z,.5,1,"start","black",3,v,"grafici-y-label")}p+="</svg>",n+=o+g+h+"</svg>"+p+"<figcaption>"+s.title+"</figcaption></figure>",this.targetTables[t].insertAdjacentHTML("afterend",n),document.getElementById(this.config.outputID+"-"+s.id).querySelector(".grafici-graph__svg").style.cssText="border:"+this.config.graphBorder.width+" solid "+this.config.graphBorder.color+";"}},this.drawLine=function(i,t,s,e,r,a){var n='<line class="grafici-data-line" x1="'+i+'" y1="'+t+'" x2="'+s+'" y2="'+e+'" stroke="'+r+'" stroke-width = "'+a+'"/>';return n},this.drawText=function(i,t,s,e,r,a,n,h,g){var o='<text class="grafici-data-text '+g+'" x="'+i+'" y="'+t+'" dx="'+s+'" dy="'+e+'" text-anchor="'+r+'" fill="'+a+'" font-size="'+n+'">';return o+=h.toString()+"</text>"},this.drawCircle=function(i,t,s){var e='<circle class="grafici-data-point" cx="'+i+'" cy="'+t+'" r="'+s+'" fill="'+this.config.graphPoints.color+'" stroke="'+this.config.graphPoints.stroke+'" stroke-width="'+this.config.graphPoints.strokeWidth+'" />';return e},this.getMaxOfArray=function(i){return Math.max.apply(null,i)},this.getMinOfArray=function(i){return Math.min.apply(null,i)},this.init(this.config)}

// global js
/**
 * @param {function} a The function to execute when the DOM is ready
 *
 * Source: https://gist.github.com/dciccale/4087856
 */

var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}

DOMReady(function () {
  //Test support for -webkit-background-clip:text;
	if(document.body.style.webkitBackgroundClip !== undefined){
		document.documentElement.className += ' backgroundclip';
	}

	var graficiConfig = {
    tableClass: "grafici-example",
    outputID: "grafici-output",
    graphSize: {
        width: 200,
        height: 100,
        xAxisHeight: 10,
        yAxisWidth: 10,
        yAxisLabelFrequency: 3
    },
    graphBorder: {
        color: "#444",
        width: "0.075em"
    },
    gridLines: {
        size: 1,
        stroke: "rgb(20,100,200)",
        strokeWidth: 0
    },
    graphPoints: {
        color: "white",
        stroke: "transparent",
        strokeWidth: 8,
        radius: 1
    },
    graphLines: {
        stroke: "white",
        strokeWidth: 0.5
    },
    barGraphLines: {
        stroke: "rgb(10,130,180)",
        strokeWidth: 8
    },
    pathFill: "rgba(102,152,250,0.5)"
	};

	var grafici = new Grafici(graficiConfig);	
});

/*
 *	Typekit font loader
 *
 */

(function(d) {
  var config = {
    kitId: 'zef4gsh',
    scriptTimeout: 3000
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
