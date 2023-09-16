let eyeWidth = 100; 
let facewidth = 300; 
function setup() {
    createCanvas(windowWidth, windowHeight); 
    background (153,124,167);

}

function draw() {
    strokeWeight(3);
    stroke(0); 
fill ("orange");
  ellipse(100, 300,eyeWidth,eyeWidth);
  ellipse(300, 300,eyeWidth,eyeWidth);
  fill ("orange")
  ellipse (200,400,facewidth,facewidth);
  strokeWeight(2);
fill(255);
  arc(150, 350, 50, 80, HALF_PI + QUARTER_PI,QUARTER_PI,CHORD);
  arc(250, 350, 50, 80, HALF_PI + QUARTER_PI,QUARTER_PI,CHORD);
fill(0)
arc(150, 360, 25, 40, HALF_PI + QUARTER_PI,QUARTER_PI,CHORD);
arc(250, 360, 25, 40, HALF_PI + QUARTER_PI,QUARTER_PI,CHORD);
ellipse(200,400,30,30);
line(200,400,200,450);
fill("red");
triangle(150, 450,250,450,200,500);
}
