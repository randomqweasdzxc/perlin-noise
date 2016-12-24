var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr; //fps
var particles = [];
function setup() {
  createCanvas(200, 200);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr =  createP(''); //fps
  particles[0] = new Particle();
}

function draw() {
  background(255);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(r);
      xoff += inc;
      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
    zoff += 0.01;
  }
  fr.html(floor(frameRate())); //fps
  particles[0].show();
  paritcles[0].update();
}
/*
//      fill(r);
//      rect(x * scl, y * scl, scl, scl);

//Particle
function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
    this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
    this.applyForce = function(force) {
    this.acc.add(force);
  }
    this.show = function() {
    stroke(0);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
    this.updatePrev();
  }
// COULDN'T MAKE IT PASS THE MINUTE 10 :(

*/

