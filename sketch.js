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
var xoff = 300;
var yoff = 150;

var humanPlaying = true;

var winArea;
var winCounter = -1;

var img;
var flip = true;

let xpos = 300;
let ypos = 300;
//let speed = 10;



//stage i.e player alive, dead, completed level etc
var stage = 0;

//arrays
var tiles = [];
var solids = [];
var dots = [];
var savedDots = [];
var spikes = [];

//player sprite animation declarations
let playerSprite, playerUp, playerRight, playerDown, playerLeft;

function preload(){
  playerUp = loadAnimation("Images/Player/p_up1.png", "Images/Player/p_up2.png", "Images/Player/p_up3.png");
  playerRight = loadAnimation("Images/Player/p_right1.png", "Images/Player/p_right2.png", "Images/Player/p_right3.png");
  playerDown = loadAnimation("Images/Player/p_down1.png", "Images/Player/p_down2.png", "Images/Player/p_down3.png");
  playerLeft = loadAnimation("Images/Player/p_left1.png", "Images/Player/p_left2.png", "Images/Player/p_left3.png");
}

function setup() {
    var canvas = createCanvas(2000, 2000);

    /* rectMode(CENTER);
    textAlign(CENTER); */

    playerSprite = createSprite(width/2, height/2,30,30);
    playerSprite.addAnimation("p_up", playerUp);
    playerSprite.addAnimation("p_right", playerRight);
    playerSprite.addAnimation("p_down", playerDown);
    playerSprite.addAnimation("p_left", playerLeft );


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
    setKillWalls();
    setSpikes();
    setSolids();

    p = new Player();

    setDots();
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
    
    background(32,89,155);
    drawTiles();

    //p = new Player();
    //p.human = true;

    /* moveAndShowDots();
   
    p.update();
    p.show(); */
    

    if ((p.dead && p.fadeCounter<=0) || p.reachedGoal) {
      //reset player and dots
      if(p.reachedGoal){
        winCounter = 100;
 
      }
      p = new Player();
      p.human = true;
      resetDots();
 
    }else {
      //update the dots and the players and show them to the screen
 
 
      moveAndShowDots();
 
      p.update();
      p.show();
      playerSprite;
    }
    playerSprite;

    //console.log(p.dead);
    

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
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < tiles[0].length; j++) {
            tiles[i][j].showSpikes();
        }
    }
}

function moveAndShowDots(){
    for (var i = 0; i < dots.length; i ++) {
      dots[i].move();
      dots[i].show();
    }
  
  }
  function resetDots(){
    for (var i = 0; i < dots.length; i ++) {
      dots[i].resetDot();
    }
  
  }
  
  function loadDots(){
    for (var i = 0; i< dots.length; i++) {
      dots[i] = savedDots[i].clone();
    }
  }
  
  function saveDots(){
    for (var i = 0; i< dots.length; i++) {
      savedDots[i] = dots[i].clone();
    }
  }
  

function keyPressed(){
  playerSprite.animation.stop();
    if(humanPlaying){
      switch(keyCode) {
      case UP_ARROW:
        up = true;
        playerSprite.position.y -= 1;
        playerSprite.changeAnimation("p_up");
        playerSprite.animation.play();

        break;
      case DOWN_ARROW:
        down = true;
        playerSprite.position.y += 1;
        playerSprite.changeAnimation("p_down");
        playerSprite.animation.play();
        break;
      case RIGHT_ARROW:
        right = true;
        playerSprite.position.x += 1;
        playerSprite.changeAnimation("p_right");
        playerSprite.animation.play();
        break;
      case LEFT_ARROW:
        left = true;
        playerSprite.position.x -= 1;
        playerSprite.changeAnimation("p_left");
        playerSprite.animation.play();
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