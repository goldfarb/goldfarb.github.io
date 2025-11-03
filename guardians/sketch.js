function setup() {
      var canvas = createCanvas(windowWidth, windowWidth / 6);
      canvas.parent('pie');
      w = windowWidth;
}

function draw() {
    r = w / 8;
  centerLeft = 3 * w / 8;
  centerRight = 5 * w / 8;
  push();
  strokeWeight(0);
  push();
    fill(100,100,100);
    ellipse(centerLeft,2 * r / 3,r,r);
  pop();
  fill(97, 47, 156);
  arc(centerLeft,2 * r / 3,r,r, -HALF_PI + PI * (180/158.4), -HALF_PI, PIE);
  pop();



  push();
  strokeWeight(0);
  push();
    fill(100,100,100);
    ellipse(centerRight,2 * r / 3,r,r);
  pop();
  fill(97, 47, 156);
  arc(centerRight,2 * r / 3,2*r/3,2*r/3, -HALF_PI + PI * (180/158.4), -HALF_PI, PIE);
  pop();

  }

