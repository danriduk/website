var particles = [];

function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent("p5-sketch-holder");
  
  var amount = (500+500)/2

	for (var i = 0; i < amount; i++) {
		particles[i] = new Particle();
	}

  // console.log(amount);
}

function draw() {
  background(55);

	for (var i = particles.length-1; i >=0; i--) {
		particles[i].show();
		particles[i].update();
	}
}

function windowResized() {
	resizeCanvas(500, 500);
	// console.log(windowWidth);
	// console.log(windowHeight);
}
