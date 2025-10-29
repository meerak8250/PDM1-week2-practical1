function setup() {
    createCanvas(500, 500);
}

function draw() {
background(255);
fill(89,89,201);
rectMode(CENTER);
square(mouseX,mouseY,100);

//second square
rectMode(CORNER);
square(mouseX+50,mouseY +50,100);

//third square
square(mouseX -50,mouseY-50,-100);



}