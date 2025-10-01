function setup() {
    createCanvas(600, 600);
}

function draw() {
background(255);
noStroke();
//Left-hand side rectangle
fill(22,91,250);
rect(0,0,width/2,height);

//Top right rectangle
fill(138, 135, 201);
rect(width/2,0,width/2,height/2);

//long bottom rectangle
fill(9,6,56);
rect(width/2,height/2,width/4,height/2);

//purple rectangle
fill(168, 41, 207);
rect(width * 0.75,height * 0.75,width/4,height/4);

//pink rectangle
fill(252, 43, 231);
rect(width * 0.75,height * 0.5,width/4,height/4);

}