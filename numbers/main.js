"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

var start = document.querySelector('#start');

const backToHomePage = document.querySelector('#return');

backToHomePage.addEventListener('click', (e)=>{
    window.location.replace("../index.html");
})

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Seup the numbers to be displayed.
    Scene.sprite = numbers;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the parrot image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	Scene.mainLoop();
	}
};

// start the scene when button is clicked
start.addEventListener( 'click', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "aqua";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 2 frames a second at time increments of 500 ms
    window.setTimeout(Scene.mainLoop, 500);
};

Scene.update = function () {	
	// Set the location of the next frame. 
  	Scene.sprite.offset=Scene.canvas.width/2;
};

Scene.draw = function () {
	if(Scene.sprite.frame<10){
		Scene.canvasContext.drawImage(
		Scene.sprite.img,
		Scene.sprite.frames[Scene.sprite.frame].frame.x,
		Scene.sprite.frames[Scene.sprite.frame].frame.y,
		Scene.sprite.frames[Scene.sprite.frame].frame.w,
		Scene.sprite.frames[Scene.sprite.frame].frame.h,
		Scene.sprite.offset-Scene.sprite.frames[Scene.sprite.frame].frame.w/2,
		Scene.sprite.offset-Scene.sprite.frames[Scene.sprite.frame].frame.h/2,
		Scene.sprite.frames[Scene.sprite.frame].frame.w,
		Scene.sprite.frames[Scene.sprite.frame].frame.h);
	
		// Advance to the next frame.
		Scene.sprite.frame++;
	}
	// Stopping when the number 10 is reached, using a 1 and a 0 image from the sprite sheet
	else if(Scene.sprite.frame==Scene.sprite.frames.length){
		Scene.canvasContext.drawImage(
			Scene.sprite.img,
			Scene.sprite.frames[1].frame.x,
			Scene.sprite.frames[1].frame.y,
			Scene.sprite.frames[1].frame.w,
			Scene.sprite.frames[1].frame.h,
			Scene.sprite.offset-Scene.sprite.frames[1].frame.w,
			Scene.sprite.offset-Scene.sprite.frames[1].frame.h/2,
			Scene.sprite.frames[1].frame.w,
			Scene.sprite.frames[1].frame.h
		);

		Scene.canvasContext.drawImage(
			Scene.sprite.img,
			Scene.sprite.frames[0].frame.x,
			Scene.sprite.frames[0].frame.y,
			Scene.sprite.frames[0].frame.w,
			Scene.sprite.frames[0].frame.h,
			Scene.sprite.offset,
			Scene.sprite.offset-Scene.sprite.frames[0].frame.h/2,
			Scene.sprite.frames[0].frame.w,
			Scene.sprite.frames[0].frame.h
		);
    }
};

