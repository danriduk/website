var particles = [];

function setup() {
  canvas = createCanvas(windowHeight, windowWidth);
  canvas.parent("sketch-holder");

  var amount = (windowHeight+windowWidth)/2

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
	resizeCanvas(windowHeight, windowWidth);
	// console.log(windowWidth);
	// console.log(windowHeight);
}
