

function setup() {
    createCanvas(400, 400);
    
}

function draw() {
    background(100);
    //line(0, 0, 400, 400);
    rectMode(CENTER);
    //noFill();
    fill(0,0,255);
    stroke(0, 255, 0);
    strokeWeight(3)
    rect(200, 200, 150, 150);

    fill(255, 0, 0, 175)
    noStroke()
    ellipse(160, 150, 100, 75)
}