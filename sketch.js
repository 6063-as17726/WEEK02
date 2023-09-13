function setup() {
    createCanvas(600, 600); 
    background (153,124,167);

}

function draw() {
fill ("green");
  ellipse(100, 100, 100, 100);
  fill("orange");
  ellipse(200, 200, 200, 200);
  fill("blue");
  stroke(255, 0, 50);
  strokeweight(5);
  rect(50, 50, 10, 10);
}
