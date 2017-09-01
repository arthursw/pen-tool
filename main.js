var canvas = document.getElementById('canvas');
paper.setup(canvas);

let MaxDistance = 1

let path = null;

let penTimeoutID = 0

let tool = new paper.Tool();

newPath = function(continuePath=false) {
	let lastPoint = null
	if(path != null) {
		path.simplify(10)
		if(path.lastSegment != null) {
			lastPoint = path.lastSegment.point
		}
		path.fullySelected = true
	}
	path = new paper.Path();
	path.strokeColor = 'black';
	path.strokeWidth = 5;
	path.strokeCap = 'round';
	
	if(continuePath && lastPoint != null) {
		path.add(lastPoint)
	}
}

tool.onMouseDown = function(event) {
	newPath()
}

tool.onMouseDrag = function(event) {
	path.add(event.point);

	if(penTimeoutID != null) {
		clearTimeout(penTimeoutID)
	}
	penTimeoutID = setTimeout(()=> { 
		penTimeoutID = null
		newPath(true)
	}, 80)
}

tool.onMouseUp = function(event) {
}

window.onresize = function (event) {
	paper.view.viewSize.width = window.innerWidth;
	paper.view.viewSize.height = window.innerHeight;
}