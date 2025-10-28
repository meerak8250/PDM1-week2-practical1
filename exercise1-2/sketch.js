function setup(){
    createCanvas(400,200);
}

function draw(){
    background(0);
    //main rectangle
    fill(57,43,207);    
    rect(0,0,width/2,height);
    //top right rectangle
    fill(172,62,240);
    rect(200,0,width/2,height/2);
    //vertical rectangle
    fill(36,12,51);
    rect(200,200,width/4,height/2);
    //top small rectangle
    fill(196,26,137);
    rect(300,100,width/4,height/4);
    //bottom small rectangle
    fill(227,5,149);
    rect(300,150,width/4,height/4);
}