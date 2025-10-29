function setup(){
    createCanvas(500,500);
    rectMode(CENTER);
}

function draw(){
    background(0);
    fill(93,21,140);
    square(mouseX,mouseY,100);
    square(mouseX-100,mouseY-100,100);
    square(mouseX+100,mouseY+100,100);
}