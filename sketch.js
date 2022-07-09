let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;

var left = false;
var right = false;
var up = false;
var down = false;
var p;

var tileSize = 50;
var xoff = 145;
var yoff = 100;

var humanPlaying = true;

var winArea;
var winCounter = -1;

let xpos = 300;
let ypos = 300;
//let speed = 10;

var p;

//stage i.e player alive, dead, completed level etc
var stage = 0;

//arrays
var tiles = [];
var solids = [];
var dots = [];

function setup() {
    var canvas = createCanvas(2000, 2000);

    /* rectMode(CENTER);
    textAlign(CENTER); */


    for (var i = 0; i < 21; i++) {
        tiles[i] = [];
        for (var j = 0; j < 12; j++) {
            tiles[i][j] = new Tile(i, j);
        }
    }
    
    setLevel1Walls();
    setLevel1Goal();
    setLevel1SafeArea();
    setEdges();
    // setMazeWalls();
    setSolids();

    p = new Player();
    //p.human = true;
    

    

    //prevents the window from moving from the arrow keys or the spacebar
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
}



function draw() {
    //background(200)
    //rect(50, 50, 1000, 1000);

    //fill(100,200,95)
    //circle(xpos, ypos, 35);

    /*  if (stage == 0) {
         game();
         
     } */
    background(180, 181, 254);
    drawTiles();

    //p = new Player();
    //p.human = true;
   
    p.update();
    p.show();
    

   // setPlayerVelocity();


    /* if (humanPlaying) {//if the user is controlling the square
        if ((p.dead && p.fadeCounter<=0) || p.reachedGoal) {
          //reset player and dots
          if(p.reachedGoal){
            winCounter = 100;
     
          }
          p = new Player();
          p.human = true;
          //resetDots();
     
        } else {
          //update the dots and the players and show them to the screen
     
     
          //moveAndShowDots();
     
          p.update();
          p.show();
        }
 */
      
     
    // drawTiles();


   /*  // update moving character
    if (movingRight) {
        p.xpos += speed;
    }
    if (movingLeft) {
        p.xpos -= speed;
    }
    if (movingUp) {
        p.ypos -= speed;
    }
    if (movingDown) {
        p.ypos += speed;
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
    for (var i = 1; i < tiles.length-4; i++) {
    //for (var i = 0; i < tiles.length; i++) {
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

/* function keyPressed() {
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

    if (movingRight) {
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
    }

     if (humanPlaying) {//if human is currently playing

        //reset dots to position
        humanPlaying = false;
        //loadDots();
      } else {//if AI is currently playing
        if (replayGens) {
          upToGenPos = 0;
          replayGens = false;
        }
        humanPlaying = true;
        p = new Player();
        p.human = true;
        //save the positions of the dots
        //saveDots();
        //resetDots();
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

} */
function keyPressed(){
    if(humanPlaying){
      switch(keyCode) {
      case UP_ARROW:
        up = true;
        break;
      case DOWN_ARROW:
        down = true;
        break;
      case RIGHT_ARROW:
        right = true;
        break;
      case LEFT_ARROW:
        left = true;
        break;
      }
      switch(key){
        case 'W':
          up = true;
          break;
        case 'S':
          down = true;
          break;
        case 'D':
          right = true;
          break;
        case 'A':
          left = true;
          break;
      }
      setPlayerVelocity();
    }
}
function keyReleased(){
    if(humanPlaying){
      switch(keyCode) {
      case UP_ARROW:
        up = false;
        break;
      case DOWN_ARROW:
        down = false;
        break;
      case RIGHT_ARROW:
        right = false;
        break;
      case LEFT_ARROW:
        left = false;
        break;
      }
      switch(key){
        case 'W':
          up = false;
          break;
        case 'S':
          down = false;
          break;
        case 'D':
          right = false;
          break;
        case 'A':
          left = false;
          break;
      }
  
      setPlayerVelocity();
    }
  
  }
  //set the velocity of the player based on what keys are currently down
  
  function setPlayerVelocity(){
    p.vel.y= 0;
    if (up) {
      p.vel.y -=1;
    }
    if (down) {
      p.vel.y +=1;
    }
    p.vel.x= 0;
    if (left) {
      p.vel.x -=1;
    }
    if (right) {
      p.vel.x +=1;
    }
  
  }