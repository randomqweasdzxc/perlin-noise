  var inc = 0.01;
  var start = 0;
  function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(51);
    stroke(255);
    noFill();
    beginShape();
    var xoff2 = start;
    for(var x = 0; x < width; x++) {
//      var y = random(height);
//      var y = noise(0) * height;
      var y = map(noise(xoff2), 0, 1, 0, height);
      vertex(x, y);
      xoff2 += inc;
    }
    endShape();
    start += inc;
//    noLoop();
  }
/*
  var x = random(width);
  var xoff1 = 0;
  var xoff2 = 10000;
    var x = map(noise(xoff1), 0, 1, 0, width);
    var y = map(noise(xoff2), 0, 1, 0, height);
    xoff1 += 0.02;
    xoff2 += 0.02;
    ellipse(x, y, 30, 30);
*/