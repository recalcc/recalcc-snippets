/*
<canvas id="canvas" width=400 height=400></canvas>
<hr>Email <a href="mailto:drew@umd.edu"><i>Drew Baden</i></a> for further info.  (<i>25-Jul-2011</i>)
*/


//
// debug module, pops up new limited function window just for debugging.
// DBG.write(string) to use
//
var DBG = {
	enabled : true,
	write : function(txt){
console.log(txt);
	}
}


c = null;
x1 = 0;
x2 = 0;
w = 400;
h = 400;
nticksX = 5;
doErrors = false;
saveme = false;
DBG.enabled = false;

function clearIt() {

c.clearRect(x1,x2,w,h);
}
// makeIt("10","1,2,3,4,5,6,7,8,9,10,11,21,32,42,42,21,21,21,21,21,21,5,5,5");
function makeIt(nbins,data) {
	//
	// get the data
	//
	xdata = data.split(",").map(parseFloat);

	binf = ss.min(xdata);
	binl = ss.max(xdata); // +max-macs
	//dataString = document.theForm.data.value;
	ytick = 10;
	doErrors = true;
	saveme = false;
nb=0;
	ibl = [];
	for (var i=0; i<data.length; i++) {
		if (data.charAt(i) == "," ) {
		  ibl[nb] = i;
		  nb++;
		}
	}


	// make sure they are all numbers and not strings.  isNaN returns true if a string

	if ( isNaN(nbins) || isNaN(binf) || isNaN(binl) ) {
console.log(nbins);
console.log(binf);
console.log(binl);

		alert("One of the inputs is not a number!   Please check and retry.");
		return;
	}
	nbins = parseInt(nbins);
	binf = parseFloat(binf);
	binl = parseFloat(binl);
	DBG.write("nbins "+nbins+"  binf "+binf+" binl "+binl);
	//
	// get the canvas and context so we can draw stuff
	//
	canvas=document.getElementById("canvas");
	if(!canvas){
	    var canvas=document.createElement("canvas");
         canvas.setAttribute("id", "canvas");
         canvas.setAttribute("width", "800");
         canvas.setAttribute("height", "400");
         canvas.style.display='none';
         //canvas.style.width='800px';
         //canvas.style.height='400px';
         document.body.appendChild(canvas);
	    if(!canvas.getContext) return;
	    
	    }
	c=canvas.getContext("2d");
	c.clearRect(x1,x2,w,h);



	nb=xdata.length;DBG.write("number of datapoints is " + nb);
	ist = 0;
	for (var i=0; i<nb; i++) {
		DBG.write("xdata["+i+"]="+xdata[i]);
		ist = ibl[i] + 1;
	}
	//
	// now fill the Histogram.  we need to put bin0=underflow,1-nbin bins, and last being overflow
	//
	binContent = [];
	nbinsZ = nbins + 2;
	DBG.write("nbinsZ is "+nbinsZ);
	for (var i=0; i<nbinsZ; i++) binContent[i] = 0;
	deltaBin = (binl - binf)/nbins;
	DBG.write("histogram has " + nbins + " bins starting at " + binf + 
		" ending at " + binl + " with bin size " + deltaBin);
	DBG.write("binContent zerod, now has length "+binContent.length);
	under = 0;
	over = 0;
	ave = 0;
	ave2 = 0;
	for (var i=0; i<nb; i++) {
		ave += xdata[i];
		ave2 += xdata[i]*xdata[i];
		if (xdata[i] < binf) under++;
		else if (xdata[i] >= binl) over++;
		else {
			var ndata = xdata[i] - binf;
			thisbin = Math.floor(ndata/deltaBin,0);
			DBG.write("xdata["+i+"]="+xdata[i]+" and is at bin "+thisbin);
			binContent[thisbin+1]++;
		}
	}
	ave = ave/nb;
	ave2 = ave2/nb;
	sd = Math.sqrt( ave2 - ave*ave );
	ave = Math.round(100*ave)/100;
	sd = Math.round(100*sd)/100;
	binContent[0] = under;
	binContent[nbins+1] = over;
	DBG.write("nbins is now " + nbins + " and underflow = " + under + " and overflow = " + over);
	DBG.write("binContent has size " + binContent.length + " but bins is still at " + nbins);
	var nbinsD = nbins + 2;
	DBG.write("nbins is now "+nbins+" and nbinsD is "+nbinsD);
	nbinMax = -1;
	nbinMin = 10000;
	for (var j=0; j<nbinsD; j++) {
		if ( binContent[j] > nbinMax ) nbinMax = binContent[j];
		if ( binContent[j] < nbinMin ) nbinMin = binContent[j]; 
		DBG.write("bin[" + j + "]=" + binContent[j])
	}
	DBG.write("min bins is " + nbinMin + " and max bins is " + nbinMax);
	//
	// draw it.  remember, x=0 and y=0 start at upper right hand corner!
	//
	c.beginPath();
	c.strokeStyle = "blue";
	//c.clearRect(x1,x2,w,h);
	//c.strokeRect(x1,x2,w,h);
	//
	// draw axes.  leave 1/10 of the height and width on each side.  remember where 0,0 is!
	
	var ydiff = Math.floor(h/10);
	var ydiff2 = Math.floor(ydiff/2);
	var xdiff = Math.floor(w/10);
	var xdiff2 = Math.floor(xdiff/2);

	/* c.moveTo(xdiff,ydiff);
	c.lineTo(h-ydiff,xdiff);
	c.stroke();
	c.lineTo(h-ydiff,w-xdiff);
	c.stroke();
	*/
	// now draw the histogram bins as rectangles.  the coordinates are a bit wierd
	// because x,y for the rectangle is the upper left hand side.   
	// The width of the rectangle is (w-2*xdiff)/nbins
	// The height of the rectangle is determined by the maximum y value, nbinMax.
	// So each increment in bin number is given by dy=(h-2*ydiff)/nbinMax, so the height
	// would be given by binContent[i]*dy.
	//
	c.strokeStyle = "#ffffff";
	c.fillStyle = 'rgba(0,0,0,0.33)';
	var dx = (w-2*xdiff)/nbins;
	var dy = (h-2*ydiff)/nbinMax;
	var x = xdiff;
	var y = h-ydiff;
	for (var i=1; i<=nbins; i++) {
		//y = h-ydiff - binContent[nbins-i]*dy; 
		y=0;
		console.log();
		c.strokeRect(y,x,binContent[nbins-i+1]*dy,dx);
		c.fillRect(y,x,binContent[nbins-i+1]*dy,dx);
		console.log(y,x,binContent[nbins-i+1]*dy,dx);
		console.log("***********")
		if (false) {
			dbin = dy*Math.sqrt(binContent[i])/2;
			c.moveTo(x+.5*dx,y-dbin);
			c.lineTo(x+.5*dx,y+dbin);
			c.stroke();
		}
		x += dx;
	}

	// label them

	DBG.write("Low edge first bin "+binf);     // low edge first bin
	DBG.write("High edge last bin "+binl);  // high edge last bin
	/*c.fillText("0",xdiff2,h-ydiff);      // zero, but could be changed to nbinMin
	if (ytick.length == 0) {
		//
		// no tick specification, so just put up the maximum number of events in any bin
		//
		c.fillText("Max="+nbinMax,xdiff2,ydiff);    // max bin
	}
	else {
		//
		// put up ticks every ytick
		//
		ytick = parseInt(ytick);
		var nyticks = 1 + Math.floor((nbinMax+ytick)/ytick);
		for (var i=1; i<nyticks+1; i++) {
			y = h - ydiff - i*ytick*dy;
			c.moveTo(xdiff-3,y);
			c.lineTo(xdiff+3,y);
			c.stroke();
			var yntick = i*ytick;
			c.fillText(yntick,xdiff2,y);
		}
		var topl = h - ydiff - (nyticks-1)*ytick*dy;
		c.moveTo(xdiff,ydiff);
		c.lineTo(xdiff,topl);
		c.stroke();
	}*/
	// output the histogram ala "line printer" mode like in the old days
	/*
	var histOut = "Bin size " + deltaBin + "\n";
	histOut = histOut + "Underflow:" + under + "\n";
	for (var j=1; j<=nbins; j++) {
		var xbin = binf + Math.round(100*(j-1)*deltaBin)/100;
		histOut = histOut + xbin + ":";
		for (var i=0; i<binContent[j]; i++) histOut = histOut + "=";
		histOut = histOut + "> " + binContent[j] + "\n";
	}
	var histOut = histOut + "Overflow:" + over + "\nAve:" + ave + "\nSD: " + sd;
	console.log( histOut);
	*/
	// now draw the ticks and labels along the x axis
	/*
	var tlen = ydiff/10;  // length of the tick line
	var dxlabel = (binl - binf)/(nticksX);
	var dxTick = (w-2*xdiff)/(nticksX);
	var labely = h - ydiff2;
	var xbinf = 1.*binf;
	for (var i=0; i<=dxTick; i++) {
		var xlabel = Math.round(100* (xbinf+i*dxlabel) )/100;
		var labelx = xdiff + i*dxTick;
		c.fillText(xlabel,labelx,labely);
		c.beginPath();
		c.moveTo(xdiff+i*dxTick,h-ydiff);
		c.lineTo(xdiff+i*dxTick,h-ydiff+tlen);
		c.stroke();
		c.closePath();
	}
	*/
	//  type out the statistics
//	dystat = ydiff2;
	dystat = 10;
	xstat = w - 2*xdiff;
	c.fillText("Ave: "+ave,xstat,dystat);
	c.fillText("Sd: "+sd,xstat,2*dystat);
	//c.fillText("Underflow: "+under,xstat,3*dystat);
	//c.fillText("Overflow: "+over,xstat,4*dystat);
	//c.fillText("Max: "+nbinMax,xstat,5*dystat);
	//
	// add titles if it is there
	//
	
	xTitle = "";
	if (xTitle.length > 0) c.fillText(xTitle,(w-xTitle.length)/2,h-ydiff2/2);
	mTitle = "";
	if (mTitle.length > 0) c.fillText(mTitle,xdiff,ydiff2/2);
	
	xstep=(w*2)/nb;
	
	yrange=binl-binf;
	pixel=(h-(ydiff*2))/yrange;
	// TS plot
	  c.beginPath();
      //c.moveTo(0,ydiff);
      var baseline=dx*nbins+ydiff;
      // line 1
      //c.lineTo(0, baseline); // origine
      c.moveTo(0,ydiff);
      c.moveTo(0,ydiff+pixel*xdata[0]-binf);
      for (ea in xdata) {
          excessy=xdata[ea]-binf;
          c.lineTo(xstep*ea,baseline-(pixel*excessy));
          }
          
      //c.lineTo(100, 350);
      c.lineWidth = 3;
      c.strokeStyle = 'blue';
	
	//c.closePath();
    c.stroke();
	
	
	
	/*
	//
	// save as a file?
	//
	if (saveme) {
		Canvas2Image.saveAsJPEG(canvas);
		alert("On a MAC the images is saved in your downloads area as 'document'.  I have no idea what happens on a PC.  Nor do I care!  :)");
        
	}*/
return canvas.toDataURL();	
}


