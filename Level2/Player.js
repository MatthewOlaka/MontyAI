class Player {
  constructor() {
    //this.pos = createVector(3*tileSize + xoff,4* tileSize + yoff);
    //this.playerSprite = createSprite(3.1 * tileSize + xoff, 2.2 * tileSize + yoff, tileSize / 5, tileSize / 5);
    this.pos = createVector(2.9 * tileSize + xoff, 2.2 * tileSize + yoff);
    this.vel = createVector(0, 0);
    this.size = tileSize / 2.0;
    this.playerSpeed = tileSize / 15.0;
    this.dead = false;
    this.reachedGoal = false;
    this.fadeCounter = 255;
    this.isBest = false;
    this.deathByDot = false;
    this.deathAtStep = 0;
    this.moveCount = 0;
    this.gen = 1;
    this.fitness = 0;
    this.nodes = [];
    this.fading = false;
    this.brain = new Brain(numberOfSteps);
    this.human = false;
    
    /* this.playerSprite = createSprite(3.1 * tileSize + xoff, 2.2 * tileSize + yoff, tileSize / 5, tileSize / 5);
    playerSprite.addAnimation("p_up", playerUp);
    playerSprite.addAnimation("p_right", playerRight);
    playerSprite.addAnimation("p_down", playerDown);
    playerSprite.addAnimation("p_left", playerLeft); */
    //this.setNodes();

    this.coins = [
      new Coin(8.5 * tileSize + xoff, 1.6 * tileSize + yoff),
      new Coin(8.5 * tileSize + xoff, 4.6 * tileSize + yoff),
      new Coin(10.5 * tileSize + xoff, 6.5 * tileSize + yoff),
      new Coin(6.5 * tileSize + xoff, 9.5 * tileSize + yoff),
      new Coin(15.5 * tileSize + xoff, 6.5 * tileSize + yoff),
      //new Coin(2.5*tileSize+xoff, 3.5*tileSize+yoff),
      //new Coin(4.5*tileSize+xoff, 3.5*tileSize+yoff),
      //new Coin(4.5*tileSize+xoff, 2.5*tileSize+yoff),
    ];

    /* this.bonusCoins = [
      
      new BonusCoin(2.5 * tileSize + xoff, 4.4 * tileSize + yoff),
      new BonusCoin(2.5 * tileSize + xoff, 6.5 * tileSize + yoff),
      new BonusCoin(10.5 * tileSize + xoff, 3.5 * tileSize + yoff),
      //new BonusCoin(5.5 * tileSize + xoff, 4.5 * tileSize + yoff),
     
    ]; */
    this.setNodes();

  }


  setNodes() {
    /* this.nodes[0] = new Node(tiles[6][7]);
    this.nodes[1] = new Node(tiles[17][2]);
    this.nodes[0].setDistanceToFinish(this.nodes[1]); */

    this.nodes[0] = new Node(this.coins[0], false, true);
    this.nodes[1] = new Node(this.coins[1], false, true);
    this.nodes[2] = new Node(this.coins[2], false, true);
    this.nodes[3] = new Node(this.coins[3], false, true);
    this.nodes[4] = new Node(this.coins[4], false, true);
    //this.nodes[5] = new Node(this.coins[5],false,true);
    //this.nodes[6] = new Node(this.coins[6],false,true);
    this.nodes[5] = new Node(tiles[15][10], true, false);
    //this.nodes[6].setDistanceToFinish(this.nodes[7]);
    //this.nodes[5].setDistanceToFinish(this.nodes[6]);
    this.nodes[4].setDistanceToFinish(this.nodes[5]);
    this.nodes[3].setDistanceToFinish(this.nodes[4]);
    this.nodes[2].setDistanceToFinish(this.nodes[3]);
    this.nodes[1].setDistanceToFinish(this.nodes[2]);
    this.nodes[0].setDistanceToFinish(this.nodes[1]);
  }

  /*
 
  show(){
    fill(255, 0, 0, this.fadeCounter);
    if (this.isBest && !showBest) {
      fill(0, 255, 0, this.fadeCounter);
    }
    stroke(0, 0, 0, this.fadeCounter);
    strokeWeight(4);
    rect(this.pos.x, this.pos.y, this.size, this.size);
    stroke(0);
  } */

  show() {
    //fill(230, 230, 255, this.fadeCounter);

    fill(33, 93, 159, this.fadeCounter);


    /* if (this.isBest && !showBest) {
      fill(255, 0, 0, this.fadeCounter);
    } */

    /* stroke(0, 0, 0, this.fadeCounter);
    strokeWeight(4);
    rect(this.pos.x, this.pos.y, this.size, this.size);
    //rect(xoff, yoff, 200, 200);
    stroke(0); */

    

    //drawSprites();


    //playerSprite = createSprite(/* width/2, height/2,30,30 */30, 30, tileSize / 5, tileSize / 5);
    if (humanPlaying) {
      //resetSketch();
      drawSprites();
      /* stroke(0, 0, 0, this.fadeCounter);
      strokeWeight(4);
      rect(this.pos.x, this.pos.y, this.size, this.size);
      //rect(xoff, yoff, 200, 200);
      stroke(0); */
    
    } else {

      playerSprite.remove()
      
      stroke(0, 0, 0, this.fadeCounter);
      strokeWeight(4);
      rect(this.pos.x, this.pos.y, this.size, this.size);
      //rect(xoff, yoff, 200, 200);
      stroke(0);
    }



    for (var coinNum = 0; coinNum < this.coins.length; coinNum++) {
      this.coins[coinNum].show();
    }

    /* for (var bonusCoinsNum = 0; bonusCoinsNum < this.bonusCoins.length; bonusCoinsNum++) {
      this.bonusCoins[bonusCoinsNum].show();
      
    } */

  }

  move() {
    if (!humanPlaying) {
      if (this.moveCount == 0) {//move in the direction for 6 frames
        if (this.brain.directions.length > this.brain.step) {//if there are still directions left then set the velocity as the next PVector in the direcitons array
          this.vel = this.brain.directions[this.brain.step];
          this.brain.step++;
        } else {//if at the end of the directions array then the player is dead
          this.dead = true;
          this.fading = true;

          //playerSprite.remove()
          
        }
        this.moveCount = 6;
      } else {
        this.moveCount--;
      }
    }
    //KeyPressedSprite();
    var temp = createVector(this.vel.x, this.vel.y);


    temp.normalize();
    temp.mult(this.playerSpeed);
    for (var i = 0; i < solids.length; i++) {
      temp = solids[i].restrictMovement(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size), temp);
    }
    this.pos.add(temp);
    

    var temp2 = createVector(this.vel.x, this.vel.y);

    temp2.normalize();
    temp2.mult(this.playerSpeed);
    for (var i = 0; i < solids.length; i++) {
      temp2 = solids[i].restrictMovement(playerSprite.position, createVector(playerSprite.position.x + this.size, playerSprite.position.y + this.size), temp);
    }

    playerSprite.position.add(temp2);



  }

  //checks if the player
  checkCollisions() {

    for (var coinNum = 0; coinNum < this.coins.length; coinNum++) {
      this.coins[coinNum].collides(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size));
    }

    /* for (var bCoinNum = 0; bCoinNum < this.bonusCoins.length; bCoinNum++) {
      this.bonusCoins[bCoinNum].collides(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size));
    } */
    for (var i = 0; i < bonusCoins.length; i++) {
      bonusCoins[i].collides(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size));

    }

    for (var i = 0; i < dots.length; i++) {
      if (dots[i].collides(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size))) {
        this.fading = true;
        this.dead = true;
        this.deathByDot = true;
        this.deathAtStep = this.brain.step;
        if (humanPlaying) {
          playerSprite.remove()
          resetSketch()
        }

      }

    }
    for (var i = 0; i < spikes.length; i++) {
      if (spikes[i].collision(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size))) {
        this.fading = true;
        this.dead = true;
        this.deathByDot = true;
        this.deathAtStep = this.brain.step;
        if (humanPlaying) {
          playerSprite.remove()
          resetSketch()
        } 
      }

    }

    if (this.coins[0].taken && this.coins[1].taken && this.coins[2].taken && this.coins[3].taken &&
      winArea.collision(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size))) {
      this.reachedGoal = true;
    }
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].collision(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size));
    }


    if (winArea.collision(this.pos, createVector(this.pos.x + this.size, this.pos.y + this.size))) {
      this.reachedGoal = true;
      if (humanPlaying) {
        playerSprite.remove()
        resetSketch()
      }
    }

  }
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  update() {
    if (!this.dead && !this.reachedGoal) {
      this.move();
      this.checkCollisions();
    } else if (this.fading) {
      if (this.fadeCounter > 0) {
        if (humanPlaying || replayGens) {
          this.fadeCounter -= 10;
        } else {
          this.fadeCounter = 0;

        }
      }
    }
  }
  //----------------------------------------------------------------------------------------------------------------------------------------------------------

  calculateFitness() {
    if (this.reachedGoal) {//if the dot reached the goal then the fitness is based on the amount of steps it took to get there
      this.fitness = 1.0 / 16.0 + 10000.0 / (this.brain.step * this.brain.step);
    } else {//if the dot didn't reach the goal then the fitness is based on how close it is to the goal
      var estimatedDistance = 0.0;//the estimated distance of the path from the player to the goal
      for (var i = this.nodes.length - 1; i >= 0; i--) {
        if (!this.nodes[i].reached) {
          estimatedDistance = this.nodes[i].distToFinish;
          estimatedDistance += dist(this.pos.x, this.pos.y, this.nodes[i].pos.x, this.nodes[i].pos.y);
        }
      }
      if (this.deathByDot) {
        estimatedDistance *= 0.9;
      }
      this.fitness = 1.0 / (estimatedDistance * estimatedDistance);
    }
    this.fitness *= this.fitness;
    if (this.coins[0].taken || this.coins[1].taken || this.coins[2].taken || this.coins[3].taken ||
      this.coins[4].taken /* || this.coins[5].taken || this.coins[6].taken */) {
      this.fitness *= 1.2;
    }
  }



  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  gimmeBaby() {
    var baby = new Player();
    baby.brain = this.brain.clone();//babies have the same brain as their parents
    baby.deathByDot = this.deathByDot;
    baby.deathAtStep = this.deathAtStep;
    baby.gen = this.gen;
    return baby;
  }
}