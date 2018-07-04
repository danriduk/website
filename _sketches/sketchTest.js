// sketch.js

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');
  canvas.parent('sketchTest-holder');

  canvas.position(windowWidth/2, windowHeight/2)
  background(50, 50, 50);
}
