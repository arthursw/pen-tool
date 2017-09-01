var c = document.getElementById("canvas");
c.setAttribute('width', window.innerWidth);
c.setAttribute('height', window.innerHeight);
var ctx = c.getContext("2d");

let dragging = false;
let mousePosition = new paper.Point()

let onmousedown = function(event) {
	dragging = true;
	mousePosition.x = event.clientX;
	mousePosition.y = event.clientY;
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.strokeWidth = 5;
}

let onmousemove = function(event) {
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 10, 50, 50);
	// ctx.fillStyle = 'rgb(0, 0, 0)';
	if(dragging) {
		
		ctx.moveTo(mousePosition.x, mousePosition.y);
		ctx.lineTo(event.clientX, event.clientY);
		ctx.stroke();

		// ctx.beginPath();
		// ctx.arc(event.clientX,event.clientY,5,0,2*Math.PI);
		// ctx.fill();
		// ctx.stroke();
	}
	mousePosition.x = event.clientX;
	mousePosition.y = event.clientY;
}

let onmouseup = function(event) {
	dragging = false;
}

window.onmousedown = onmousedown
window.onmousemove = onmousemove
window.onmouseup = onmouseup

window.addEventListener("touchstart", onmousedown, false);
window.addEventListener("touchend", onmouseup, false);
window.addEventListener("touchcancel", onmouseup, false);
window.addEventListener("touchmove", onmousemove, false);

// var canvas = document.getElementById('canvas');
// paper.setup(canvas);

// let parameters = {
// 	simplify: 2.5,
// 	straightLines: true,
// 	maxAngle: 5,
// 	select: false
// };

// let path = null;

// let penTimeoutID = 0

// let tool = new paper.Tool();

// newPath = function(continuePath=false) {
// 	let lastPoint = null
// 	if(path != null) {
// 		path.simplify(parameters.simplify)
// 		if(parameters.straightLines && path.segments.length > 1) {
// 			for(let segment of path.segments) {
// 				let curve = segment.curve
// 				if(curve != null && curve.handle1 != null && curve.handle2 != null && Math.abs(Math.abs(curve.handle1.getDirectedAngle(curve.handle2)) - 180) < parameters.maxAngle) {
// 					curve.handle1 = null
// 					curve.handle2 = null
// 				}
// 			}
// 		}
// 		if(path.lastSegment != null) {
// 			lastPoint = path.lastSegment.point
// 		}
// 		if(parameters.select) {
// 			path.fullySelected = true
// 		}
// 	}
// 	path = new paper.Path();

// 	path.strokeColor = 'black';
// 	path.strokeWidth = 5;
// 	path.strokeCap = 'round';
	
// 	if(continuePath && lastPoint != null) {
// 		path.add(lastPoint)
// 	}
// }

// tool.onMouseDown = function(event) {
// 	newPath()
// }

// tool.onMouseDrag = function(event) {
// 	path.add(event.point);

// 	if(penTimeoutID != null) {
// 		clearTimeout(penTimeoutID)
// 	}
// 	penTimeoutID = setTimeout(()=> { 
// 		penTimeoutID = null
// 		newPath(true)
// 	}, 80)
// }

// tool.onMouseUp = function(event) {
// }

// window.onresize = function (event) {
// 	paper.view.viewSize.width = window.innerWidth;
// 	paper.view.viewSize.height = window.innerHeight;
// }

// var gui = new dat.GUI()

// gui.add(parameters, 'simplify', 0, 100).name('Simplify amount')
// gui.add(parameters, 'straightLines').name('Straight lines')
// gui.add(parameters, 'maxAngle', 0, 90).name('Max angle')
// gui.add(parameters, 'select').name('Select')
