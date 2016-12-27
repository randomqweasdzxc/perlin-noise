float t = 0;
void setup() {
  size(600, 400);
  frameRate(30);
  background(0);
}
void draw() {
  fill(255);
  //float x = random(width);
  t += 0.01;
  float x = noise(t);
  float y = noise(t);
  x = map(x,0,1,0,width/2);
  y = map(y,0,1,0,height/2);
  ellipse(x, y, 40, 40);
}