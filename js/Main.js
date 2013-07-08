var canvas;
var stage;
var containerBalls;
var containerLines;
var shapeLines;
var graphicsLines;

function Main()
{
	// canvas
	canvas = document.getElementById('canvas');
	stage = new createjs.Stage( canvas );

	// enabled interaction
	stage.mouseEventsEnabled = true;
	
	// container
	containerBall = new createjs.Container();
	containerLines = new createjs.Container();
	
	//lines
	shapeLines = new createjs.Shape();
	
	graphicsLines = new createjs.Graphics();
	
	
	
	console.log( "Main" );
	
	//background black
	var g = new createjs.Graphics();
	g.beginFill( "#000000");
	g.drawRect(0,0, canvas.width, canvas.height);
	
	var s = new createjs.Shape(g);
	s.x = 0;
	s.y = 0;
	stage.addChild(s);
	
	//add elements
	containerLines.addChild(shapeLines);
	stage.addChild(containerLines);
	stage.addChild(containerBall);
	
	stage.update();
	
	debug( "teste " + s.x + " " + s.y );
	
	stage.addEventListener( 'click', onClickStage );
}

function onClickStage( e )
{
	var ball = createBall(8);
	ball.x = stage.mouseX;
	ball.y = stage.mouseY;
	
	containerBall.addChild(ball);
	
	//debug( "stage-click", stage.mouseX, stage.mouseY );
	debug( "stage-click => x "+ ball.x + " y => " + ball.y )
	var len = containerBall.getNumChildren()-1;
	for (var i = 0; i < len; i++)
	{
		//debug("filhos: ", i);
		var l = containerBall.getNumChildren();
		for (var j = i+1; j < l ; j++)
		{
			var dObj1 = containerBall.getChildAt(i);
			var dObj2 = containerBall.getChildAt(j);
			graphicsLines.beginStroke("#ffffff");
			graphicsLines.moveTo(dObj1.x, dObj1.y);
			graphicsLines.lineTo(dObj2.x, dObj2.y);
			graphicsLines.endStroke();
			//debug("container I: ", dObj1, " container J: ", dObj2);
		}
	}
	
	//containerLines.removeChild(shapeLines);
	//shapeLines = new createjs.Shape(graphicsLines);
	shapeLines.graphics = graphicsLines;
	// containerLines.addChild(shapeLines);

	stage.update();
}

function createBall( raio )
{
	var g = new createjs.Graphics();
	g.beginFill('red');
	g.drawCircle(0, 0, raio);
	
	var s = new createjs.Shape(g);
	return s;
}

function debug( s )
{
	console.log( s );
}

