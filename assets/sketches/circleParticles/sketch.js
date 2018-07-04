var particles = [];

function setup() {
    x = 500;
    y = 500;

    canvas = createCanvas(x, y);
    canvas.parent("sketch-holder");

    var amount = (x+y)/2

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
	resizeCanvas(x, y);
	// console.log(windowWidth);
	// console.log(windowHeight);
}
