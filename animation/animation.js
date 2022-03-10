"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined,
	background: undefined,
	dialog: undefined
};

const backToHomePage = document.querySelector('#return');

backToHomePage.addEventListener('click', (e)=>{
    window.location.replace("../index.html");
})

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");

	Scene.background = new Image();
	Scene.background.src = "./img/street.jpg"

	Scene.dialog = new Image();
	Scene.dialog.src = "./img/dialog.png"
	
	// Seup the numbers to be displayed.
    Scene.sprite = animation;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the parrot image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=Scene.sprite.frames[Scene.sprite.frame].frame.w+200;
    	Scene.mainLoop();
	}
};

// start the scene when button is clicked
window.addEventListener('DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 2 frames a second at time increments of 500 ms
    window.setTimeout(Scene.mainLoop, 50);
};

Scene.update = function () {	
	// Set the location of the next frame. 
  	//Scene.sprite.offset-=10;
	if (Scene.sprite.offset < -Scene.canvas.width+500)
	  Scene.sprite.offset = Scene.sprite.frames[Scene.sprite.frame].frame.w+200;
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(
		Scene.background, 0,0,700,500
	);

	Scene.canvasContext.drawImage(
	Scene.sprite.img,
	Scene.sprite.frames[Scene.sprite.frame].frame.x,
	Scene.sprite.frames[Scene.sprite.frame].frame.y,
	Scene.sprite.frames[Scene.sprite.frame].frame.w,
	Scene.sprite.frames[Scene.sprite.frame].frame.h,
	Scene.sprite.offset,
	Scene.canvas.width/2-Scene.sprite.frames[Scene.sprite.frame].frame.h/2,
	Scene.sprite.frames[Scene.sprite.frame].frame.w/2,
	Scene.sprite.frames[Scene.sprite.frame].frame.h/2);

	Scene.canvasContext.beginPath();
	Scene.canvasContext.ellipse(
		Scene.sprite.offset-40, 
		Scene.canvas.width/2-Scene.sprite.frames[Scene.sprite.frame].frame.h/2-40,
		90, 30,0,
		0, 2 * Math.PI);
	Scene.canvasContext.fill();
	Scene.canvasContext.font = '16px serif';
    Scene.canvasContext.fillStyle = 'black';
    Scene.canvasContext.fillText('I am running so fast !', Scene.sprite.offset-105, Scene.canvas.width/2-Scene.sprite.frames[Scene.sprite.frame].frame.h/2-40);


	// Advance to the next frame.
	Scene.sprite.frame++;

	console.log(Scene.sprite.offset)

	if (Scene.sprite.frame == Scene.sprite.frames.length)
        Scene.sprite.frame = 0;
};

