let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;

var tileSize = 50;
var xoff = 80;
var yoff = 100;

var winArea;
var winCounter = -1;

let xpos = 300;
let ypos = 300;
let speed = 10;

//stage i.e player alive, dead, completed level etc
var stage = 0;

//arrays
var tiles = [];
var solids = [];

function setup() {
    var canvas = createCanvas(2000, 2000);

    /* rectMode(CENTER);
    textAlign(CENTER); */


    for (var i = 0; i < 26; i++) {
        tiles[i] = [];
        for (var j = 0; j < 13; j++) {
            tiles[i][j] = new Tile(i, j);
        }
    }
    
    setLevel1Walls();
    setLevel1Goal();
    setLevel1SafeArea();
    setEdges();
    // setMazeWalls();
    setSolids();


}



function draw() {
    //background(200)
    //rect(50, 50, 1000, 1000);

    //fill(100,200,95)
    //circle(xpos, ypos, 35);

    /*  if (stage == 0) {
         game();
         
     } */
    //background(180, 181, 254);
    drawTiles();
    // drawTiles();


    // update moving character
    /* if (movingRight) {
        xpos += speed;
    }
    if (movingLeft) {
        xpos -= speed;
    }
    if (movingUp) {
        ypos -= speed;
    }
    if (movingDown) {
        ypos += speed;
    } */

}

/* function game() {
    background(150, 230, 240);

    //window frame
    //noFill();
    fill(179, 180, 182)
    stroke(0);
    strokeWeight(5);
    rect(width / 3.5, height / 4.5, width / 3, height / 4)


} */

function drawTiles() {
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < tiles[0].length; j++) {
            tiles[i][j].show();
        }
    }
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < tiles[0].length; j++) {
            tiles[i][j].showEdges();
        }
    }
}

function keyPressed() {
    if (key == 'w') {
        movingUp = true;

    }
    else if (key == 'a') {
        movingLeft = true;
    }
    else if (key == 's') {
        movingDown = true;
    }
    else if (key == 'd') {
        movingRight = true;
    }
    else if (keyCode == UP_ARROW) {
        movingUp = true;
    }
    else if (keyCode == LEFT_ARROW) {
        movingLeft = true;
    }
    else if (keyCode == DOWN_ARROW) {
        movingDown = true;
    }
    else if (keyCode == RIGHT_ARROW) {
        movingRight = true;
    }
}

function keyReleased() {
    if (key == 'w') {
        movingUp = false;
    }
    else if (key == 'a') {
        movingLeft = false;
    }
    else if (key == 's') {
        movingDown = false;
    }
    else if (key == 'd') {
        movingRight = false;
    }
    else if (keyCode == UP_ARROW) {
        movingUp = false;
    }
    else if (keyCode == LEFT_ARROW) {
        movingLeft = false;
    }
    else if (keyCode == DOWN_ARROW) {
        movingDown = false;
    }
    else if (keyCode == RIGHT_ARROW) {
        movingRight = false;
    }

}

