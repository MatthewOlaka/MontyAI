//functions which setup the level

function setLevel1Walls() {
  //grey area around maze
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 16; j++) {
      //Setting actual walls
      if (i >= 2 && i <19 && j >= 1 && j < 15) {
        tiles[i][j].wall = false;
      }
      else {
        tiles[i][j].wall = true;
      }
    }
  }
}

function setLevel1Goal() {
  /* tiles[13][8].goal = true;
  tiles[14][8].goal = true;
  tiles[15][8].goal = true;
  tiles[13][9].goal = true;
  tiles[14][9].goal = true;
  tiles[15][9].goal = true;
  tiles[13][10].goal = true;
  tiles[14][10].goal = true; */
  tiles[17][12].goal = true;
  tiles[17][13].goal = true;
  tiles[17][14].goal = true;
  tiles[18][12].goal = true;
  tiles[18][13].goal = true;
  tiles[18][14].goal = true;


}

function setLevel1SafeArea() {
  //tiles[2][1].goal = true;
  //tiles[2][2].goal = true;
  //tiles[2][3].goal = true;
  //tiles[3][1].goal = true;
  //tiles[3][2].goal = true;
  //tiles[3][3].goal = true;
  tiles[2][4].goal = true;
  tiles[3][4].goal = true;
  tiles[2][5].goal = true;
  tiles[3][5].goal = true;
  //tiles[4][1].goal = true;
  //tiles[4][2].goal = true;
  //tiles[4][3].goal = true;
  //tiles[1][1].goal = true;
  //tiles[4][3].spikes = true;

}

function setSpikes() { 

  tiles[2][1].spikes.push(3);
  tiles[2][2].spikes.push(3);
  tiles[2][3].spikes.push(3);
  tiles[2][1].spikes.push(4);
  tiles[3][1].spikes.push(4);

  tiles[3][1].spikes.push(1);
  tiles[3][2].spikes.push(1);
  tiles[3][3].spikes.push(1);
  tiles[4][1].spikes.push(3);
  tiles[4][2].spikes.push(3);
  tiles[4][3].spikes.push(3);

  tiles[4][3].spikes.push(2);
  tiles[4][4].spikes.push(4);

  tiles[2][6].spikes.push(3);
  tiles[2][7].spikes.push(3);
  tiles[2][8].spikes.push(3);
  tiles[2][9].spikes.push(3);
  tiles[2][10].spikes.push(3);
  tiles[2][11].spikes.push(3);
  tiles[2][12].spikes.push(3);
  tiles[2][13].spikes.push(3);
  tiles[2][14].spikes.push(3);
  tiles[2][14].spikes.push(2);
  tiles[3][14].spikes.push(2);
  tiles[3][14].spikes.push(1);
  tiles[4][14].spikes.push(3);

  tiles[3][10].spikes.push(1);
  tiles[4][10].spikes.push(3);
  tiles[3][11].spikes.push(1);
  tiles[4][11].spikes.push(3);

  tiles[5][6].spikes.push(1);
  tiles[6][6].spikes.push(3);
  tiles[5][9].spikes.push(1);
  tiles[6][9].spikes.push(3);
  tiles[5][12].spikes.push(1);
  tiles[6][12].spikes.push(3);
  tiles[5][13].spikes.push(1);
  tiles[6][13].spikes.push(3);

  tiles[7][6].spikes.push(1);
  tiles[8][6].spikes.push(3);
  tiles[7][7].spikes.push(1);
  tiles[8][7].spikes.push(3);
  tiles[7][10].spikes.push(1);
  tiles[8][10].spikes.push(3);
  tiles[7][11].spikes.push(1);
  tiles[8][11].spikes.push(3);
  //tiles[7][12].spikes.push(1);
  //tiles[8][12].spikes.push(3);
  tiles[7][14].spikes.push(1);
  tiles[8][14].spikes.push(3);

  tiles[9][12].spikes.push(1);
  tiles[10][12].spikes.push(3);
  tiles[9][13].spikes.push(1);
  tiles[10][13].spikes.push(3);

  tiles[11][10].spikes.push(1);
  tiles[12][10].spikes.push(3);
  tiles[11][11].spikes.push(1);
  tiles[12][11].spikes.push(3);
  tiles[11][13].spikes.push(1);
  tiles[12][13].spikes.push(3);
  tiles[11][14].spikes.push(1);
  tiles[12][14].spikes.push(3);

  tiles[12][12].spikes.push(4);
  tiles[12][13].spikes.push(4);
  tiles[13][12].spikes.push(4);
  tiles[13][13].spikes.push(4);
  tiles[14][12].spikes.push(4);
  tiles[14][13].spikes.push(4);

  tiles[12][11].spikes.push(2);
  tiles[12][12].spikes.push(2);
  tiles[13][11].spikes.push(2);
  tiles[13][12].spikes.push(2);
  tiles[14][11].spikes.push(2);
  tiles[14][12].spikes.push(2);

  tiles[14][13].spikes.push(1);
  tiles[15][13].spikes.push(3);
  tiles[14][11].spikes.push(1);
  tiles[15][11].spikes.push(3);

  tiles[14][11].spikes.push(4);
  tiles[14][14].spikes.push(4);
  tiles[14][10].spikes.push(2);
  tiles[14][13].spikes.push(2);

  tiles[14][2].spikes.push(3);
  tiles[14][3].spikes.push(3);
  tiles[14][4].spikes.push(3);
  tiles[13][2].spikes.push(1);
  tiles[13][3].spikes.push(1);
  tiles[13][4].spikes.push(1);
  tiles[13][5].spikes.push(1);
  tiles[14][3].spikes.push(3);
  tiles[14][4].spikes.push(3);
  tiles[14][5].spikes.push(3);
  tiles[14][6].spikes.push(3);
  tiles[13][6].spikes.push(1);
  tiles[14][7].spikes.push(3);
  tiles[13][7].spikes.push(1);

  tiles[16][7].spikes.push(3);
  tiles[17][7].spikes.push(3);
  tiles[15][7].spikes.push(1);
  tiles[16][7].spikes.push(1);

  tiles[14][7].spikes.push(2);
  tiles[15][7].spikes.push(2);
  tiles[17][7].spikes.push(2);
  tiles[18][7].spikes.push(2);

  tiles[14][8].spikes.push(4);
  tiles[15][8].spikes.push(4);
  tiles[17][8].spikes.push(4);
  tiles[18][8].spikes.push(4);

  tiles[18][7].spikes.push(1);
  tiles[18][6].spikes.push(1);
  tiles[18][5].spikes.push(1);
  tiles[18][4].spikes.push(1);
  tiles[18][3].spikes.push(1);
  tiles[18][2].spikes.push(1);
  tiles[18][1].spikes.push(1);

  


}

function setEdges() {

  //Left side walls
  /* tiles[2][3].edges.push(2);
  //tiles[2][3].edges.push(1);
  tiles[3][3].edges.push(2);
  tiles[4][3].edges.push(2);
  tiles[5][4].edges.push(3);
  tiles[5][4].edges.push(2);
  tiles[6][4].edges.push(2);
  tiles[7][4].edges.push(2);
  tiles[8][4].edges.push(2);
  tiles[7][5].edges.push(1);
  tiles[7][6].edges.push(1);
  tiles[7][7].edges.push(1);
  tiles[7][7].edges.push(2);
  tiles[6][7].edges.push(2);
  tiles[6][8].edges.push(3);
  tiles[6][9].edges.push(3);
  tiles[6][9].edges.push(2);
  tiles[7][9].edges.push(2);
  tiles[8][9].edges.push(2);
  tiles[9][9].edges.push(2);
  tiles[10][9].edges.push(2);
  //tiles[11][9].edges.push(2);

  tiles[2][6].edges.push(2);
  tiles[3][6].edges.push(2); */

  //TOP FLOOR
  tiles[4][1].edges.push(3);
  tiles[4][2].edges.push(3);
  tiles[4][3].edges.push(3);
  //tiles[4][4].edges.push(3);
  tiles[4][3].edges.push(2);

  tiles[2][5].edges.push(2);
  tiles[3][5].edges.push(2);
  tiles[4][5].edges.push(2);
  tiles[5][5].edges.push(2);
  tiles[6][5].edges.push(2);
  tiles[7][5].edges.push(2);
  tiles[8][5].edges.push(2);
  tiles[9][5].edges.push(2);
  tiles[10][5].edges.push(2);
  tiles[11][5].edges.push(2);
  tiles[12][5].edges.push(2);
  tiles[13][5].edges.push(2);

  tiles[13][5].edges.push(1);
  tiles[13][4].edges.push(1);
  tiles[13][3].edges.push(1);
  tiles[13][2].edges.push(1);

  tiles[14][4].edges.push(2);
  tiles[15][4].edges.push(2);
  tiles[17][4].edges.push(2);
  tiles[18][4].edges.push(2);



  // 2nd Floor
  tiles[4][9].edges.push(2);
  tiles[5][9].edges.push(2);
  tiles[6][9].edges.push(2);
  tiles[7][9].edges.push(2);
  tiles[8][9].edges.push(2);
  tiles[9][9].edges.push(2);
  tiles[10][9].edges.push(2);
  tiles[11][9].edges.push(2);
  tiles[12][9].edges.push(2);
  tiles[13][9].edges.push(2);
  tiles[14][9].edges.push(2);
  tiles[15][9].edges.push(2);
  tiles[16][9].edges.push(2);
  tiles[17][9].edges.push(2);
  tiles[18][9].edges.push(2);

  tiles[17][7].edges.push(2);
  tiles[18][7].edges.push(2);
  tiles[14][7].edges.push(2);
  tiles[15][7].edges.push(2);

  tiles[14][6].edges.push(3);
  tiles[14][7].edges.push(3);
  tiles[16][7].edges.push(3);
  tiles[17][7].edges.push(3);

  /* tiles[6][6].edges.push(3);
  tiles[6][9].edges.push(3);
  tiles[8][6].edges.push(3);
  tiles[8][7].edges.push(3); */

  //3rd Floor
  tiles[4][10].edges.push(3);
  tiles[4][11].edges.push(3);
  tiles[4][14].edges.push(3);
  tiles[6][12].edges.push(3);
  tiles[6][13].edges.push(3);
  tiles[8][10].edges.push(3);
  tiles[8][11].edges.push(3);
  tiles[8][14].edges.push(3);
  tiles[10][12].edges.push(3);
  tiles[10][13].edges.push(3);
  tiles[12][10].edges.push(3);
  tiles[12][11].edges.push(3);
  tiles[12][11].edges.push(2);
  tiles[13][11].edges.push(2);
  tiles[14][11].edges.push(2);
  tiles[14][11].edges.push(1);
  tiles[14][11].edges.push(4);

  tiles[12][13].edges.push(3);
  tiles[12][14].edges.push(3);
  tiles[12][12].edges.push(2);
  tiles[13][12].edges.push(2);
  tiles[14][12].edges.push(2);
  tiles[14][13].edges.push(1);
  tiles[14][13].edges.push(2);

  tiles[15][10].edges.push(1);
  tiles[15][11].edges.push(1);
  tiles[15][12].edges.push(1);
  tiles[15][13].edges.push(1);

  //tiles[16][11].edges.push(1);
  tiles[16][12].edges.push(1);
  tiles[16][13].edges.push(1);
  tiles[16][14].edges.push(1);







  /* //Right side walls
  //tiles[8][2].edges.push(2);
  //tiles[9][2].edges.push(2);
  tiles[10][2].edges.push(3);
  tiles[10][1].edges.push(3);
  tiles[10][2].edges.push(2);
  tiles[11][2].edges.push(2);
  tiles[12][2].edges.push(2);
  tiles[12][3].edges.push(1);
  tiles[12][4].edges.push(1);
  tiles[13][4].edges.push(2);
  tiles[14][4].edges.push(2);
  tiles[15][4].edges.push(2);

  tiles[11][4].edges.push(2);
  //tiles[8][3].edges.push(3);
  //tiles[8][3].edges.push(2);
  //tiles[9][3].edges.push(2);
  tiles[10][3].edges.push(3);
  tiles[10][3].edges.push(2);
  tiles[10][4].edges.push(1);
  tiles[10][5].edges.push(1);
  tiles[10][6].edges.push(1);
  tiles[10][7].edges.push(1);
  tiles[10][8].edges.push(1);
  tiles[10][8].edges.push(2);
  tiles[9][8].edges.push(2);
  tiles[8][8].edges.push(2);
  tiles[7][8].edges.push(2);

  //Round Goal
  tiles[13][8].edges.push(3);
  tiles[13][9].edges.push(3);
  tiles[13][10].edges.push(3);
  tiles[13][7].edges.push(2); */


  // The outer walls.
  for (var i = 0; i < 19; i++) {
    for (var j = 0; j < 15; j++) {
      console.log('i: ' + i + ' j: ' + j)
      if (!tiles[i][j].wall) {
        //Right wall -m
        if (tiles[i + 1][j].wall) {
          tiles[i][j].edges.push(1);
        }
        //bottom wall
        if (tiles[i][j + 1].wall) {
          tiles[i][j].edges.push(2);
        }
        //left wall
        if (tiles[i - 1][j].wall) {
          tiles[i][j].edges.push(3);
        }
        //top wall
        if (tiles[i][j - 1].wall) {
          tiles[i][j].edges.push(4);
        }
      }
    }
  }
}


function setDots() {
  /* dots.push(new Dot(tiles[5][1], tiles[5][4], 0, 0.6));
  dots.push(new Dot(tiles[6][4], tiles[6][1], 0, -0.6));
  dots.push(new Dot(tiles[7][1], tiles[7][4], 0, 0.6));
  dots.push(new Dot(tiles[8][5], tiles[8][8], 0, 0.6));
  dots.push(new Dot(tiles[2][10], tiles[12][10], 0.7));
  dots.push(new Dot(tiles[11][7], tiles[15][7], 0.6)); */

  //dots.push(new Dot(tiles[4][1], tiles[13][1], -0.6));
  dots.push(new Dot(tiles[4][2], tiles[13][2], 0.8));
  dots.push(new Dot(tiles[13][3], tiles[4][3], -0.8));
  dots.push(new Dot(tiles[4][4], tiles[13][4], 0.8));
  dots.push(new Dot(tiles[13][5],tiles[4][5], -0.8));

  dots.push(new Dot(tiles[14][2], tiles[18][2], 0.8));
  dots.push(new Dot( tiles[18][3], tiles[14][3], -0.8));

  dots.push(new Dot(tiles[14][6], tiles[18][6], 1));

  
  dots.push(new Dot( tiles[9][9], tiles[9][6], 0,-0.6));
  dots.push(new Dot(tiles[10][6], tiles[10][9], 0, 0.6));
  dots.push(new Dot( tiles[11][9], tiles[11][6], 0,-0.6));
  dots.push(new Dot(tiles[12][6], tiles[12][9], 0, 0.6));
  dots.push(new Dot(tiles[13][9],tiles[13][6],  0, -0.6));
  
  dots.push(new Dot(tiles[5][6], tiles[5][9], 0, 0.8));
  dots.push(new Dot(tiles[4][9],tiles[4][6],  0, -0.8));

  dots.push(new Dot(tiles[4][10], tiles[7][10], 0.8));
  dots.push(new Dot(tiles[7][11], tiles[4][11], -0.8));
  dots.push(new Dot(tiles[4][14], tiles[7][14], 0.5));

  dots.push(new Dot(tiles[8][14],tiles[8][10], 0, -0.6));
  dots.push(new Dot(tiles[9][10], tiles[9][14], 0, 0.6));
  dots.push(new Dot(tiles[11][10], tiles[11][14], 0, 0.6));

  dots.push(new Dot( tiles[15][14], tiles[15][10], 0, -0.3));
  dots.push(new Dot(tiles[16][10], tiles[16][14], 0, 0.3));
  


}


function setSolids() {
  //solids.push(new Solid(tiles[2][1], tiles[2][11])); 
  //solids.push(new Solid(tiles[2][1], tiles[2][4])); 
  solids.push(new Solid(tiles[2][4], tiles[2][6]));  // Left boundary.
  solids.push(new Solid(tiles[4][1], tiles[19][1]));  // Top boundary.
  solids.push(new Solid(tiles[4][15], tiles[19][15]));  // Bottom boundary.
  solids.push(new Solid(tiles[19][8], tiles[19][15]));  // Right boundary.

  // The vertical inner maze walls.

  solids.push(new Solid(tiles[16][10], tiles[16][14]));
  solids.push(new Solid(tiles[17][12], tiles[17][15]));
  //solids.push(new Solid(tiles[10][3], tiles[10][4]));
  /* solids.push(new Solid(tiles[13][3], tiles[13][5]));
  //solids.push(new Solid(tiles[5][4], tiles[5][5]));
  solids.push(new Solid(tiles[11][4], tiles[11][9]));
  solids.push(new Solid(tiles[8][5], tiles[8][8]));
  solids.push(new Solid(tiles[13][8], tiles[13][11]));
  solids.push(new Solid(tiles[6][8], tiles[6][10])); */
  //solids.push(new Solid(tiles[13][3], tiles[13][4]));
  //solids.push(new Solid(tiles[15][1], tiles[15][2]));

  // The horizontal inner maze walls.

  solids.push(new Solid(tiles[2][6], tiles[14][6])); 
  solids.push(new Solid(tiles[14][5], tiles[16][5])); 
  solids.push(new Solid(tiles[17][5], tiles[19][5])); 
  solids.push(new Solid(tiles[4][10], tiles[19][10])); 
  /* solids.push(new Solid(tiles[2][4], tiles[5][4]));
  solids.push(new Solid(tiles[5][5], tiles[9][5]));
  solids.push(new Solid(tiles[10][3], tiles[13][3]));
  solids.push(new Solid(tiles[10][4], tiles[11][4]));
  //solids.push(new Solid(tiles[11][5], tiles[12][5]));
  //solids.push(new Solid(tiles[13][5], tiles[16][5]));
  //solids.push(new Solid(tiles[2][7], tiles[4][7]));
  solids.push(new Solid(tiles[6][8], tiles[8][8]));
  solids.push(new Solid(tiles[13][8], tiles[14][8]));
  solids.push(new Solid(tiles[7][9], tiles[11][9]));
  solids.push(new Solid(tiles[6][10], tiles[11][10])); */
  //solids.push(new Solid(tiles[7][5], tiles[10][5]));
  //solids.push(new Solid(tiles[2][7], tiles[17][7]));
} 

function setKillWalls() {
  
  //Vertical Walls
  spikes.push(new Spikes(tiles[2][1], tiles[2][4]));
  spikes.push(new Spikes(tiles[4][1], tiles[4][4]));

  spikes.push(new Spikes(tiles[14][2], tiles[14][8]));
  spikes.push(new Spikes(tiles[19][1], tiles[19][8]));
  spikes.push(new Spikes(tiles[17][7], tiles[17][8]));
  spikes.push(new Spikes(tiles[16][7], tiles[16][8]));

  spikes.push(new Spikes(tiles[8][6], tiles[8][8]));
  spikes.push(new Spikes(tiles[6][6], tiles[6][7]));
  spikes.push(new Spikes(tiles[6][9], tiles[6][10]));

  spikes.push(new Spikes(tiles[2][6], tiles[2][15]));

  spikes.push(new Spikes(tiles[4][10], tiles[4][12]));
  spikes.push(new Spikes(tiles[4][14], tiles[4][15]));

  spikes.push(new Spikes(tiles[6][12], tiles[6][14]));

  spikes.push(new Spikes(tiles[8][10], tiles[8][12]));
  spikes.push(new Spikes(tiles[8][14], tiles[8][15]));

  spikes.push(new Spikes(tiles[10][12], tiles[10][14]));

  spikes.push(new Spikes(tiles[12][10], tiles[12][12]));
  spikes.push(new Spikes(tiles[12][13], tiles[12][15]));

  spikes.push(new Spikes(tiles[15][11], tiles[15][12]));
  spikes.push(new Spikes(tiles[15][13], tiles[15][14]));




  //Horizontal Walls
  spikes.push(new Spikes(tiles[2][1], tiles[4][1]));
  spikes.push(new Spikes(tiles[2][15], tiles[4][15]));
  spikes.push(new Spikes(tiles[4][4], tiles[5][4]));
  spikes.push(new Spikes(tiles[14][8], tiles[16][8]));
  spikes.push(new Spikes(tiles[17][8], tiles[19][8]));
  spikes.push(new Spikes(tiles[14][11], tiles[15][11]));
  spikes.push(new Spikes(tiles[12][12], tiles[15][12]));
  spikes.push(new Spikes(tiles[12][13], tiles[15][13]));
  spikes.push(new Spikes(tiles[14][14], tiles[15][14]));
  

  



}
