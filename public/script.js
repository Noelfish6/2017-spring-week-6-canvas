console.log(d3);

var w = d3.select('.plot').node().clientWidth,
	h = d3.select('.plot').node().clientHeight;

//Append a <canvas> element and set its width and height
var canvas1 = d3.select('.plot').append('canvas')
	.attr('width',w)
	.attr('height',h)
	.node();
//Get the 2d drawing context of this <canvas>
var ctx1 = canvas1.getContext('2d');

/*
<canvas> elements can draw two kind of basic shapes: rect and path.
First, rect
*/
//Note how we set the fill and stroke styles
ctx1.fillStyle = 'rgb(255,0,0)';
ctx1.strokeStyle = 'rgb(0,0,255)';
ctx1.lineWidth = 1;

//ctx.fillRect(x,y,width,height)
ctx1.fillRect(0,0,w,h);
ctx1.clearRect(0,0,w/2,h/2);
ctx1.clearRect(w/2,h/2,w/2,h/2);

/*
Next, path
*/
//Path always begins with ctx1.beginPath() command, and ends with ctx1.closePath()
//In between, you can issue any number of path commands
ctx1.beginPath();
ctx1.moveTo(0,0);
ctx1.lineTo(w/2,h/2);
ctx1.lineTo(0,h);
ctx1.lineTo(0,0);
ctx1.closePath();
ctx1.stroke(); //What stroke color is this referring to?

ctx1.fillStyle = 'rgba(0,0,255,.5)';

ctx1.beginPath();
ctx1.moveTo(w/2,h/2);
ctx1.lineTo(w,0);
ctx1.lineTo(w,h);
ctx1.lineTo(w/2,h/2);
ctx1.closePath();
ctx1.fill();

//Circles
ctx1.strokeStyle = 'rgb(0,255,255)';
ctx1.lineWidth = 3;
ctx1.beginPath();
ctx1.arc(w/2,h/2,100,0,Math.PI*2);
ctx1.closePath();
ctx1.stroke();

//BezierCurve
ctx1.beginPath();
ctx1.moveTo(0,0);
ctx1.bezierCurveTo(w/2,0,w/2,h,w,h);
//ctx1.closePath();
ctx1.stroke();


/*Part 2: drawing multiple shapes as part of a single path element
*/
//Append a <canvas> element and set its width and height
var canvas2 = d3.select('#plot-2').append('canvas')
	.attr('width',w)
	.attr('height',h)
	.node();
//Get the 2d drawing context of this <canvas>
var ctx2 = canvas2.getContext('2d');

var data = d3.range(100).map(function(i){
	return {
		x:Math.random()*w,
		y:Math.random()*h,
		r:Math.random()*5+5
	}
});

ctx2.strokeStyle = 'rgba(0,0,0,.5)';
data.forEach(function(d){
	ctx2.beginPath();
	ctx2.arc(d.x,d.y,d.r,0,Math.PI*2);
	ctx2.closePath();
	ctx2.stroke();
});


