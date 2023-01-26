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
var yoff = 50;

var humanPlaying = true;

var showBest = true;


var winArea;
var winCounter = -1;

var bonusCounter = 0;

let img;
let img2;
let img3;
let img4;
let img5;
let img6;
var flip = true;

//gen replay vars
var replayGens = false;
var genPlayer;
var upToGenPos = 0;

//population vars
var numberOfSteps = 10;
var testPopulation;

//population size vars
var populationSize = 500;
var popPara;
var popPlus;
var popMinus;

//mutation rate vars
var mutationRate = 0.04;
var mrPara;
var mrPlus;
var mrMinus;

//evolution speed vars
var evolutionSpeed = 1;
var speedPara;
var speedPlus;
var speedMinus;

//increaseMoves
var movesH3;

var increaseMovesBy = 5;
var movesPara;
var movesPlus;
var movesMinus;

var increaseEvery = 3;
var everyPara;
var everyPlus;
var everyMinus;


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
var bonusCoins = [];

//player sprite animation declarations
let playerSprite, playerUp, playerRight, playerDown, playerLeft, girl;

var showedCoin = true;

function preload() {
  playerUp = loadAnimation("Images/Player/p_up1.png", "Images/Player/p_up2.png", "Images/Player/p_up3.png");
  playerRight = loadAnimation("Images/Player/p_right1.png", "Images/Player/p_right2.png", "Images/Player/p_right3.png");
  playerDown = loadAnimation("Images/Player/p_down1.png", "Images/Player/p_down2.png", "Images/Player/p_down3.png");
  playerLeft = loadAnimation("Images/Player/p_left1.png", "Images/Player/p_left2.png", "Images/Player/p_left3.png");

  girl = loadAnimation("Images/Babe/girl.png","Images/Babe/girl2.png","Images/Babe/girl2.png", "Images/Babe/girl2.png", "Images/Babe/girl.png","Images/Babe/girl.png","Images/Babe/girl.png","Images/Babe/girl.png","Images/Babe/girl3.png", "Images/Babe/girl3.png","Images/Babe/girl3.png");
}

function setup() {
  var canvas = createCanvas(2000, 2000);
  img = loadImage('Images/Arrow_keys_transparent.png');
  img2 = loadImage('Images/Arrow_keys_transparent2.png');
  img3 = loadImage('Images/p.png');
  img4 = loadImage('Images/g.png');
  img5 = loadImage('Images/space_key_s.png');
  img6 = loadImage('Images/congrats.gif');
  img7 = loadImage('Images/Player/montydemo.png');
  img8 = loadImage('Images/Player/legend2.png');


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
  setKillWalls();
  setSpikes();
  setSolids();

  this.bonusCoins = [

    new BonusCoin(2.5 * tileSize + xoff, 4.4 * tileSize + yoff),
    new BonusCoin(2.5 * tileSize + xoff, 6.5 * tileSize + yoff),
    new BonusCoin(10.5 * tileSize + xoff, 3.5 * tileSize + yoff),
    //new BonusCoin(5.5 * tileSize + xoff, 4.5 * tileSize + yoff),

  ];



  p = new Player();

  if (humanPlaying) {
    resetSketch();
  }

  setDots();
  //KeyPressedSprite();
  //p.human = true;

  winArea = new Solid(tiles[13][9], tiles[16][9]);

  testPopulation = new Population(populationSize);
  //img = loadImage("https://i.imgur.com/QZf0d6r.gif");
  //img = loadImage("https://imgur.com/u4uRPnB");





  //prevents the window from moving from the arrow keys or the spacebar
  window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  }, false);

  girlSprite = createSprite(13.7 * tileSize + xoff, 8.9 * tileSize + yoff, tileSize / 5, tileSize / 5);
  girlSprite.addAnimation("girlSketch", girl);
}

function resetSketch() {

  playerSprite = createSprite(3.1 * tileSize + xoff, 2.2 * tileSize + yoff, tileSize / 5, tileSize / 5);



  playerSprite.addAnimation("p_up", playerUp);
  playerSprite.addAnimation("p_right", playerRight);
  playerSprite.addAnimation("p_down", playerDown);
  playerSprite.addAnimation("p_left", playerLeft);

}

/* function resetGirlSketch() {



  girlSprite = createSprite(13.7 * tileSize + xoff, 9.9 * tileSize + yoff, tileSize / 5, tileSize / 5);


  girlSprite.addAnimation("girlSketch", girl);
  girlSprite.changeAnimation("girlSketch");
  girlSprite.animation.play();

  

} */







function draw() {



  
  //background(200)
  //rect(50, 50, 1000, 1000);

  //fill(100,200,95)
  //circle(xpos, ypos, 35);

  /*  if (stage == 0) {
       game();
       
   } */
  //resetGirlSketch()
  showedCoin = false;
  background(32, 89, 155);
  drawTiles();
  writeShit();
  for (var bonusCoinsNum = 0; bonusCoinsNum < this.bonusCoins.length; bonusCoinsNum++) {
    this.bonusCoins[bonusCoinsNum].show();

  }


  /* if ((p.dead && p.fadeCounter <= 0) || p.reachedGoal) {
    //reset player and dots
    if (p.reachedGoal) {
      winCounter = 100;

    }
    p = new Player();
    p.human = true;
    resetDots();

  } else {
    //update the dots and the players and show them to the screen


    moveAndShowDots();

    p.update();
    p.show();

  } */

  if (humanPlaying) {//if the user is controlling the square
    if ((p.dead && p.fadeCounter <= 0) || p.reachedGoal) {
      //reset player and dots
      if (p.reachedGoal) {
        winCounter = 100;

      }
      //drawSprites();
      p = new Player();
      p.human = true;
      
      playerSprite.remove()
      resetSketch();
      resetDots();
      resetBonusCoins();

    } else {
      //update the dots and the players and show them to the screen

      drawSprites();
      moveAndShowDots();

      p.update();
      p.show();
    }
  } else
  

    if (replayGens) {//if replaying the best generations
      if ((genPlayer.dead && genPlayer.fadeCounter <= 0) || genPlayer.reachedGoal) { //if the current gen is done
        upToGenPos++;//next gen
        if (testPopulation.genPlayers.length <= upToGenPos) {//if reached the final gen
          //stop replaying gens
          upToGenPos = 0;
          replayGens = false;
          //return the dots to their saved position

          loadDots();
        } else {//if there are more generations to show
          //set gen player as the best player of that generation
          genPlayer = testPopulation.genPlayers[upToGenPos].gimmeBaby();
          //reset the dots positions
          resetDots();
          resetBonusCoins();
        }
      } else {//if not done
        //move and show dots
        moveAndShowDots();
        //move and update player
        genPlayer.update();
        genPlayer.show();
      }
    } else//if training normaly
      if (testPopulation.allPlayersDead()) {
        //genetic algorithm
        testPopulation.calculateFitness();
        testPopulation.naturalSelection();
        testPopulation.mutateDemBabies();
        //reset dots
        resetDots();
        resetBonusCoins();

        //every 5 generations incease the number of moves by 5
        if (testPopulation.gen % increaseEvery == 0) {
          testPopulation.increaseMoves();
        }

      } else {

        // moveAndShowDots();
        //update and show population

        for (var j = 0; j < evolutionSpeed; j++) {
          for (var i = 0; i < dots.length; i++) {
            dots[i].move();
          }
          testPopulation.update();
        }

        for (var i = 0; i < dots.length; i++) {
          dots[i].show();
        }
        testPopulation.show();
      }




  //KeyPressedSprite();
  //drawSprites();


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
  for (var i = 1; i < tiles.length - 4; i++) {
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

function moveAndShowDots() {
  for (var i = 0; i < dots.length; i++) {
    dots[i].move();
    dots[i].show();
  }

}
function resetDots() {
  for (var i = 0; i < dots.length; i++) {
    dots[i].resetDot();
  }

}

function resetBonusCoins() {
  for (var i = 0; i < bonusCoins.length; i++) {
    bonusCoins[i].resetBonus();
  }

}

function sign(x) {
  return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : x === x ? 0 : NaN : NaN;
}

function loadDots() {
  for (var i = 0; i < dots.length; i++) {
    dots[i] = savedDots[i].clone();
  }
}

function saveDots() {
  for (var i = 0; i < dots.length; i++) {
    savedDots[i] = dots[i].clone();
  }
}

function writeShit() {

  fill(247, 247, 255);
  textSize(25);
  noStroke();
  text(" \tPress P to play the game yourself \t\t\t\t\t\t\t\t Press G to replay evolution highlights", 370, 720);

  text("Press SPACE to only show the best player", 570, 760);

  if (winCounter > 0) {

    /* if (flip) {
      push();

      scale(-1.0, 1.0);
      image(img6, -300 - img.width + random(5), 100 + random(5));
      pop();
    } else {
      image(img6, 300 + random(5), 100 + random(5));
    } */
    textSize(100);
    stroke(0);

    text("YEEESSSSSSSIIIIIIRRRRRRRR", 110, 400);
    winCounter--;
    if (winCounter % 10 == 0) {

      flip = !flip;
    }
    textSize(36);
    noStroke();
  }
  if (replayGens) {
    fill(247, 247, 255);
    image(img4, 100, 40, img.width / 2, img.height / 2);
    textSize(20);
    text("Exit Highlights", 110, 165);
    textSize(25);
    fill(0, 0, 0);
    text("Generation: " + genPlayer.gen, 395, 85);
    text("Number of moves: " + genPlayer.brain.directions.length, 840, 85);
  } else if (!humanPlaying) {
    fill(247, 247, 255);
    textSize(25);
    text("Controls:", 120, 80)
    textSize(20);
    text("View population or best player", 30, 220)
    image(img5, 70, 110, img.width / 1.5, img.height / 3);
    image(img3, 10, 235, img.width / 2, img.height / 2);
    textSize(20);
    text("Control Monty\n (Play Game)", 20, 360)
    image(img4, 170, 235, img.width / 2, img.height / 2);
    text("Replay Evolution\n     Highlights", 170, 360)

    if (testPopulation.solutionFound) {
      textSize(25);
      fill(0, 0, 0);
      text("Wins in " + testPopulation.minStep + " moves", 850, 85);
    } else {
      textSize(25);
      fill(0, 0, 0);
      text("Generation: " + testPopulation.gen, 395, 85);
      text("Number of moves: " + testPopulation.players[0].brain.directions.length, 840, 85);
    }
  } else {
    fill(0, 0, 0);
    textSize(25);
    text("Solo Gameplay", 660, 85);
    fill(247, 247, 255);
    text(" Bonus coin counter: " + bonusCounter, 40, 410);
    fill(247, 247, 255);
    textSize(25);
    text("Controls:", 120, 80)
    textSize(20);
    text("Player movement", 90, 250)
    image(img, 10, 110, img.width / 2, img.height / 2);
    image(img2, 190, 110, img.width / 2, img.height / 2);
    textSize(90);
    text("/", 160, 190)
    image(img3, 100, 235, img.width / 2, img.height / 2);
    textSize(20);
    text("Initiate A.I.", 120, 370)
    //image(img7, -100, 400, img7.width/6, img7.height/6);
    image(img8, 10, 450, img8.width/6, img8.height/6);
  }
}


function keyPressed() {
  //playerSprite.animation.stop();
  if (humanPlaying) {
    switch (keyCode) {
      case UP_ARROW:
        up = true;
        /* playerSprite.position.y -= 30;
        playerSprite.changeAnimation("p_up");
        playerSprite.animation.play(); */

        break;
      case DOWN_ARROW:
        down = true;
        /* playerSprite.position.y += 30;
        playerSprite.changeAnimation("p_down");
        playerSprite.animation.play(); */
        break;
      case RIGHT_ARROW:
        right = true;
        /* playerSprite.position.x += 30;
        playerSprite.changeAnimation("p_right");
        playerSprite.animation.play(); */
        break;
      case LEFT_ARROW:
        left = true;
        /* playerSprite.position.x -= 30;
        playerSprite.changeAnimation("p_left");
        playerSprite.animation.play(); */
        break;
    }
    switch (key) {
      case 'w':
        up = true;
        break;
      case 's':
        down = true;
        break;
      case 'd':
        right = true;
        break;
      case 'a':
        left = true;
        break;
    }
    setPlayerVelocity();
  } else {//if human is not playing
    switch (key) {
      case ' ':
        showBest = !showBest;
        break;
      case 'g'://replay gens
        if (replayGens) {
          upToGenPos = 0;
          replayGens = false;
          loadDots();
        } else
          if (testPopulation.genPlayers.length > 0) {
            replayGens = true;
            genPlayer = testPopulation.genPlayers[0].gimmeBaby();
            saveDots();
            resetDots();
            resetBonusCoins();
          }
        break;
    }
  }

  if (key == 'p') {
    if (humanPlaying) {//if human is currently playing

      //reset dots to position
      humanPlaying = false;
      loadDots();
      
    } else {//if AI is currently playing
      if (replayGens) {
        upToGenPos = 0;
        replayGens = false;
      }
      humanPlaying = true;
      p = new Player();
      p.human = true;

      //save the positions of the dots
      saveDots();
      resetDots();
      resetBonusCoins();
      resetSketch();
    }
  }
}




function keyReleased() {
  //playerSprite.animation.stop();
  if (humanPlaying) {
    switch (keyCode) {
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
    switch (key) {
      case 'w':
        up = false;
        break;
      case 's':
        down = false;
        break;
      case 'd':
        right = false;
        break;
      case 'a':
        left = false;
        break;
    }

    setPlayerVelocity();
  }

}
//set the velocity of the player based on what keys are currently down

function setPlayerVelocity() {
  playerSprite.animation.stop();
  p.vel.y = 0;
  if (up) {
    p.vel.y -= 1;
    playerSprite.changeAnimation("p_up");
    playerSprite.animation.play();
    /* playerSprite.position.y -= 30;
    playerSprite.changeAnimation("p_up");
    playerSprite.animation.play(); */
  }
  if (down) {
    p.vel.y += 1;
    playerSprite.changeAnimation("p_down");
    playerSprite.animation.play();
    /* playerSprite.position.y += 30;
    playerSprite.changeAnimation("p_down");
    playerSprite.animation.play(); */
  }
  p.vel.x = 0;
  if (left) {
    p.vel.x -= 1;
    playerSprite.changeAnimation("p_left");
    playerSprite.animation.play();
    /* playerSprite.position.x -= 30;
    playerSprite.changeAnimation("p_left");
    playerSprite.animation.play(); */
  }
  if (right) {
    p.vel.x += 1;
    playerSprite.changeAnimation("p_right");
    playerSprite.animation.play();
    /* playerSprite.position.x += 30;
    playerSprite.changeAnimation("p_right");
    playerSprite.animation.play(); */
  }

}

/* function KeyPressedSprite() {
  playerSprite.animation.stop();
  if (keyIsDown(UP_ARROW)) {
    playerSprite.position.y -= 1;
    playerSprite.changeAnimation("p_up");
    playerSprite.animation.play();

  }
  if (keyIsDown(DOWN_ARROW)) {
    playerSprite.position.y += 1;
    playerSprite.changeAnimation("p_down");
    playerSprite.animation.play();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerSprite.position.x += 1;
    playerSprite.changeAnimation("p_right");
    playerSprite.animation.play();

  }
  if (keyIsDown(LEFT_ARROW)) {
    playerSprite.position.x -= 1;
    playerSprite.changeAnimation("p_left");
    playerSprite.animation.play();
  }
} */