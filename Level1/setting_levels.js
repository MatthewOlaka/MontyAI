//functions which setup the level

function setLevel1Walls() {
  //grey area around maze
  for (var i = 0; i < 17; i++) {
    for (var j = 0; j < 12; j++) {
      //Setting actual walls
      if (i >= 2 && i < 16 && j >= 1 && j < 11) {
        tiles[i][j].wall = false;
      }
      else {
        tiles[i][j].wall = true;
      }
    }
  }
}

function setLevel1Goal() {
  tiles[13][8].goal = true;
  tiles[14][8].goal = true;
  tiles[15][8].goal = true;
  tiles[13][9].goal = true;
  tiles[14][9].goal = true;
  tiles[15][9].goal = true;
  tiles[13][10].goal = true;
  tiles[14][10].goal = true;
  tiles[15][10].goal = true;


}

function setLevel1SafeArea() {
  tiles[2][1].goal = true;
  tiles[2][2].goal = true;
  tiles[2][3].goal = true;
  tiles[3][1].goal = true;
  tiles[3][2].goal = true;
  tiles[3][3].goal = true;
  tiles[4][1].goal = true;
  tiles[4][2].goal = true;
  tiles[4][3].goal = true;
  //tiles[1][1].goal = true;
  //tiles[4][3].spikes = true;

}

function setSpikes() { 
  //tiles[6][7].spikes.push(2);
  //tiles[7][7].spikes.push(2);
  //tiles[7][7].spikes.push(1);
  //tiles[7][6].spikes.push(1);
  //tiles[7][5].spikes.push(1);
  //tiles[7][5].spikes.push(4);
  //tiles[6][5].spikes.push(4);
  //tiles[5][5].spikes.push(4);
  tiles[5][4].spikes.push(3);
  //tiles[6][4].spikes.push(2);
  //tiles[5][4].spikes.push(2);
  tiles[4][4].spikes.push(1);
  //tiles[2][4].spikes.push(4);
  //tiles[3][4].spikes.push(4);
  //tiles[4][4].spikes.push(4);
  tiles[2][4].spikes.push(3);
  tiles[2][5].spikes.push(3);
  tiles[2][6].spikes.push(3);
  tiles[2][6].spikes.push(2);
  tiles[3][6].spikes.push(2);
  tiles[2][7].spikes.push(4);
  tiles[3][7].spikes.push(4);

  tiles[9][1].spikes.push(1);
  tiles[9][2].spikes.push(1);
  tiles[9][3].spikes.push(1);
  tiles[10][3].spikes.push(3);


  tiles[11][5].spikes.push(4);
  tiles[11][4].spikes.push(2);
  tiles[13][5].spikes.push(4);
  tiles[14][5].spikes.push(4);
  tiles[15][5].spikes.push(4);

  tiles[2][10].spikes.push(2);
  tiles[3][10].spikes.push(2);
  tiles[4][10].spikes.push(2);
  tiles[5][10].spikes.push(2);
  tiles[6][10].spikes.push(2);
  tiles[7][10].spikes.push(2);
  tiles[8][10].spikes.push(2);
  tiles[9][10].spikes.push(2);
  tiles[10][10].spikes.push(2);
  tiles[11][10].spikes.push(2);
  tiles[12][10].spikes.push(2);

  tiles[5][9].spikes.push(1);
  tiles[6][9].spikes.push(3);
  tiles[6][9].spikes.push(2);
  tiles[6][10].spikes.push(4);



}

function setEdges() {

  //Left side walls
  tiles[2][3].edges.push(2);
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
  tiles[3][6].edges.push(2);



  //Right side walls
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
  tiles[13][7].edges.push(2);


  // The outer walls.
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 11; j++) {
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
  dots.push(new Dot(tiles[5][1], tiles[5][4], 0, 0.6));
  dots.push(new Dot(tiles[6][4], tiles[6][1], 0, -0.6));
  dots.push(new Dot(tiles[7][1], tiles[7][4], 0, 0.6));
  dots.push(new Dot(tiles[8][5], tiles[8][8], 0, 0.6));
  dots.push(new Dot(tiles[2][10], tiles[12][10], 0.7));
  dots.push(new Dot(tiles[11][7], tiles[15][7], 0.6));
}


function setSolids() {
  //solids.push(new Solid(tiles[2][1], tiles[2][11])); 
  solids.push(new Solid(tiles[2][1], tiles[2][4])); 
  solids.push(new Solid(tiles[2][7], tiles[2][11]));  // Left boundary.
  solids.push(new Solid(tiles[2][1], tiles[16][1]));  // Top boundary.
  solids.push(new Solid(tiles[13][11], tiles[16][11]));  // Bottom boundary.
  solids.push(new Solid(tiles[16][1], tiles[16][11]));  // Right boundary.

  // The vertical inner maze walls.
 // solids.push(new Solid(tiles[10][1], tiles[10][3]));
  //solids.push(new Solid(tiles[10][3], tiles[10][4]));
  //solids.push(new Solid(tiles[13][3], tiles[13][5]));
  solids.push(new Solid(tiles[5][4], tiles[5][5]));
  solids.push(new Solid(tiles[11][4], tiles[11][9]));
  solids.push(new Solid(tiles[8][5], tiles[8][8]));
  solids.push(new Solid(tiles[13][8], tiles[13][11]));
  solids.push(new Solid(tiles[6][8], tiles[6][9]));
  solids.push(new Solid(tiles[13][3], tiles[13][4]));
  //solids.push(new Solid(tiles[15][1], tiles[15][2]));

  // The horizontal inner maze walls.
  solids.push(new Solid(tiles[2][4], tiles[5][4]));
  solids.push(new Solid(tiles[5][5], tiles[9][5]));
  solids.push(new Solid(tiles[10][3], tiles[13][3]));
  solids.push(new Solid(tiles[10][4], tiles[11][4]));
  //solids.push(new Solid(tiles[11][5], tiles[12][5]));
  //solids.push(new Solid(tiles[13][5], tiles[16][5]));
  //solids.push(new Solid(tiles[2][7], tiles[4][7]));
  solids.push(new Solid(tiles[6][8], tiles[8][8]));
  solids.push(new Solid(tiles[13][8], tiles[14][8]));
  solids.push(new Solid(tiles[7][9], tiles[11][9]));
  solids.push(new Solid(tiles[7][10], tiles[11][10]));
  //solids.push(new Solid(tiles[7][5], tiles[10][5]));
  //solids.push(new Solid(tiles[2][7], tiles[17][7]));
} 

function setKillWalls() {
  
  //Vertical Walls
  spikes.push(new Spikes(tiles[10][1], tiles[10][4]));
  spikes.push(new Spikes(tiles[5][4], tiles[5][5]));
  spikes.push(new Spikes(tiles[2][4], tiles[2][7])); 
  spikes.push(new Spikes(tiles[6][9], tiles[6][10]));

  //Horizontal Walls
  spikes.push(new Spikes(tiles[2][7], tiles[4][7]));
  spikes.push(new Spikes(tiles[11][5], tiles[12][5]));
  spikes.push(new Spikes(tiles[13][5], tiles[16][5]));
  spikes.push(new Spikes(tiles[2][11], tiles[13][11]));
  spikes.push(new Spikes(tiles[6][10], tiles[7][10]));



}
