function setup(){
    createCanvas(600,600);
    rectMode(CENTER);
}

function draw(){
    background(0);
    rect(width/2,height/2,(mouseX-(width/2))*2,(mouseY-(height/2))*2);
}
