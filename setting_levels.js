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

}

function setEdges() {

    //Left side walls
    tiles[2][3].edges.push(2);
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
    tiles[8][2].edges.push(2);
    tiles[9][2].edges.push(2);
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
    tiles[8][3].edges.push(3);
    tiles[8][3].edges.push(2);
    tiles[9][3].edges.push(2);
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


/* function setDots() {
 dots.push(new Dot(tiles[2][5], tiles[10][5], 0.6));
 dots.push(new Dot(tiles[4][2], tiles[15][2], 1));
 // dots.push(new Dot(tiles[12][4], tiles[19][4], 0.3));
 dots.push(new Dot(tiles[19][5], tiles[12][5], -0.3));
}
 */

function setSolids() {
    solids.push(new Solid(tiles[2][1], tiles[2][10]));  // Left boundary.
    solids.push(new Solid(tiles[1][1], tiles[20][1]));  // Top boundary.
    solids.push(new Solid(tiles[1][9], tiles[20][9]));  // Bottom boundary.
    solids.push(new Solid(tiles[20][1], tiles[20][9]));  // Right boundary.
    // The vertical inner maze walls.
   /*  solids.push(new Solid(tiles[4][1], tiles[4][3]));
    solids.push(new Solid(tiles[5][3], tiles[5][4]));
    solids.push(new Solid(tiles[7][1], tiles[7][2]));
    solids.push(new Solid(tiles[9][1], tiles[9][2]));
    solids.push(new Solid(tiles[10][3], tiles[10][5]));
    solids.push(new Solid(tiles[11][4], tiles[11][7]));
    solids.push(new Solid(tiles[12][4], tiles[12][6]));
    solids.push(new Solid(tiles[11][1], tiles[11][2]));
    solids.push(new Solid(tiles[13][3], tiles[13][4]));
    solids.push(new Solid(tiles[15][1], tiles[15][2]));
    // The horizontal inner maze walls.
    solids.push(new Solid(tiles[2][2], tiles[3][2]));
    solids.push(new Solid(tiles[3][3], tiles[4][3]));
    solids.push(new Solid(tiles[5][3], tiles[13][3]));
    solids.push(new Solid(tiles[3][4], tiles[5][4]));
    solids.push(new Solid(tiles[6][4], tiles[10][4]));
    solids.push(new Solid(tiles[11][4], tiles[12][4]));
    solids.push(new Solid(tiles[13][4], tiles[20][4]));
    solids.push(new Solid(tiles[2][5], tiles[5][5]));
    solids.push(new Solid(tiles[7][5], tiles[10][5]));
    solids.push(new Solid(tiles[13][6], tiles[17][6]));
    solids.push(new Solid(tiles[2][7], tiles[17][7])); */
}
  //functions which setup the level

/* function setLevel1Walls() {

    tiles[0][0].wall = true;
    tiles[0][1].wall = true;
    tiles[0][2].wall = true;
    tiles[0][3].wall = true;
    tiles[0][4].wall = true;
    tiles[0][5].wall = true;
    tiles[0][6].wall = true;
    tiles[0][7].wall = true;
    tiles[0][8].wall = true;
    tiles[0][9].wall = true;
    tiles[1][0].wall = true;
    tiles[1][1].wall = true;
    tiles[1][2].wall = true;
    tiles[1][3].wall = true;
    tiles[1][4].wall = true;
    tiles[1][5].wall = true;
    tiles[1][6].wall = true;
    tiles[1][7].wall = true;
    tiles[1][8].wall = true;
    tiles[1][9].wall = true;
    tiles[2][0].wall = true;
    tiles[2][1].wall = true;
    tiles[2][8].wall = true;
    tiles[2][9].wall = true;
    tiles[3][0].wall = true;
    tiles[3][1].wall = true;
    tiles[3][8].wall = true;
    tiles[3][9].wall = true;
    tiles[4][0].wall = true;
    tiles[4][1].wall = true;
    tiles[4][8].wall = true;
    tiles[4][9].wall = true;
    tiles[5][0].wall = true;
    tiles[5][1].wall = true;
    tiles[5][2].wall = true;
    tiles[5][3].wall = true;
    tiles[5][4].wall = true;
    tiles[5][5].wall = true;
    tiles[5][6].wall = true;
    tiles[5][8].wall = true;
    tiles[5][9].wall = true;
    tiles[6][0].wall = true;
    tiles[6][1].wall = true;
    tiles[6][2].wall = true;
    tiles[6][8].wall = true;
    tiles[6][9].wall = true;
    tiles[7][0].wall = true;
    tiles[7][1].wall = true;
    tiles[7][2].wall = true;
    tiles[7][7].wall = true;
    tiles[7][8].wall = true;
    tiles[7][9].wall = true;
    tiles[8][0].wall = true;
    tiles[8][1].wall = true;
    tiles[8][2].wall = true;
    tiles[8][7].wall = true;
    tiles[8][8].wall = true;
    tiles[8][9].wall = true;
    tiles[9][0].wall = true;
    tiles[9][1].wall = true;
    tiles[9][2].wall = true;
    tiles[9][7].wall = true;
    tiles[9][8].wall = true;
    tiles[9][9].wall = true;
    tiles[10][0].wall = true;
    tiles[10][1].wall = true;
    tiles[10][2].wall = true;
    tiles[10][7].wall = true;
    tiles[10][8].wall = true;
    tiles[10][9].wall = true;
    tiles[11][0].wall = true;
    tiles[11][1].wall = true;
    tiles[11][2].wall = true;
    tiles[11][7].wall = true;
    tiles[11][8].wall = true;
    tiles[11][9].wall = true;
    tiles[12][0].wall = true;
    tiles[12][1].wall = true;
    tiles[12][2].wall = true;
    tiles[12][7].wall = true;
    tiles[12][8].wall = true;
    tiles[12][9].wall = true;
    tiles[13][0].wall = true;
    tiles[13][1].wall = true;
    tiles[13][2].wall = true;
    tiles[13][7].wall = true;
    tiles[13][8].wall = true;
    tiles[13][9].wall = true;
    tiles[14][0].wall = true;
    tiles[14][1].wall = true;
    tiles[14][2].wall = true;
    tiles[14][7].wall = true;
    tiles[14][8].wall = true;
    tiles[14][9].wall = true;
    tiles[15][0].wall = true;
    tiles[15][1].wall = true;
    tiles[15][7].wall = true;
    tiles[15][8].wall = true;
    tiles[15][9].wall = true;
    tiles[16][0].wall = true;
    tiles[16][1].wall = true;
    tiles[16][3].wall = true;
    tiles[16][4].wall = true;
    tiles[16][5].wall = true;
    tiles[16][6].wall = true;
    tiles[16][7].wall = true;
    tiles[16][8].wall = true;
    tiles[16][9].wall = true;
    tiles[17][0].wall = true;
    tiles[17][1].wall = true;
    tiles[17][8].wall = true;
    tiles[17][9].wall = true;
    tiles[18][0].wall = true;
    tiles[18][1].wall = true;
    tiles[18][8].wall = true;
    tiles[18][9].wall = true;
    tiles[19][0].wall = true;
    tiles[19][1].wall = true;
    tiles[19][8].wall = true;
    tiles[19][9].wall = true;
    tiles[20][0].wall = true;
    tiles[20][1].wall = true;
    tiles[20][2].wall = true;
    tiles[20][3].wall = true;
    tiles[20][4].wall = true;
    tiles[20][5].wall = true;
    tiles[20][6].wall = true;
    tiles[20][7].wall = true;
    tiles[20][8].wall = true;
    tiles[20][9].wall = true;
    tiles[21][0].wall = true;
    tiles[21][1].wall = true;
    tiles[21][2].wall = true;
    tiles[21][3].wall = true;
    tiles[21][4].wall = true;
    tiles[21][5].wall = true;
    tiles[21][6].wall = true;
    tiles[21][7].wall = true;
    tiles[21][8].wall = true;
    tiles[21][9].wall = true;
    //tiles[22][9].wall = true;

  }
  
  
  function setLevel1Goal() {
    tiles[17][2].goal = true;
    tiles[17][3].goal = true;
    tiles[17][4].goal = true;
    tiles[17][5].goal = true;
    tiles[17][6].goal = true;
    tiles[17][7].goal = true;
    tiles[18][2].goal = true;
    tiles[18][3].goal = true;
    tiles[18][4].goal = true;
    tiles[18][5].goal = true;
    tiles[18][6].goal = true;
    tiles[18][7].goal = true;
    tiles[19][2].goal = true;
    tiles[19][3].goal = true;
    tiles[19][4].goal = true;
    tiles[19][5].goal = true;
    tiles[19][6].goal = true;
    tiles[19][7].goal = true;
  }
  
  function setLevel1SafeArea() {
    tiles[2][2].safe = true;
    tiles[2][3].safe = true;
    tiles[2][4].safe = true;
    tiles[2][5].safe = true;
    tiles[2][6].safe = true;
    tiles[2][7].safe = true;
    tiles[3][2].safe = true;
    tiles[3][3].safe = true;
    tiles[3][4].safe = true;
    tiles[3][5].safe = true;
    tiles[3][6].safe = true;
    tiles[3][7].safe = true;
    tiles[4][2].safe = true;
    tiles[4][3].safe = true;
    tiles[4][4].safe = true;
    tiles[4][5].safe = true;
    tiles[4][6].safe = true;
    tiles[4][7].safe = true;
  }
  
  
  function setEdges() {
    for (var i = 1; i< tiles.length-1; i++) {
      for (var j = 1; j< tiles[0].length-1; j++) {
        if (tiles[i][j].wall) {
          if (!tiles[i+1][j].wall) {
            tiles[i][j].edges.push(1);
          }
          if (!tiles[i][j+1].wall) {
            tiles[i][j].edges.push(2);
          }
          if (!tiles[i-1][j].wall) {
            tiles[i][j].edges.push(3);
          }
          if (!tiles[i][j-1].wall) {
            tiles[i][j].edges.push(4);
          }
        }
      }
    }
  }
  
  
  function setDots() {
    dots.push(new Dot(tiles[6][3], tiles[15][3], 1));
    dots.push(new Dot(tiles[6][5], tiles[15][5], 1));
    dots.push(new Dot(tiles[15][4], tiles[6][4], -1));
    dots.push(new Dot(tiles[15][6], tiles[6][6], -1));
  }
  
  
  function setSolids() {
    solids.push(new Solid(tiles[1][1], tiles[1][8]));
    solids.push(new Solid(tiles[1][1], tiles[5][1]));
    solids.push(new Solid(tiles[5][1], tiles[5][6]));
    solids.push(new Solid(tiles[1][8], tiles[7][8]));
    solids.push(new Solid(tiles[7][7], tiles[15][8]));
    solids.push(new Solid(tiles[16][3], tiles[16][8]));
    solids.push(new Solid(tiles[16][8], tiles[20][8]));
    solids.push(new Solid(tiles[20][1], tiles[21][8]));
    solids.push(new Solid(tiles[14][1], tiles[20][1]));
    solids.push(new Solid(tiles[5][2], tiles[14][2]));
  } */