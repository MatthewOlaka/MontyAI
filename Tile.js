class Tile {

  constructor(x, y) {
    this.matrixPos = createVector(x, y);
    this.pixelPos = createVector(x * tileSize + xoff, y * tileSize + yoff);
    this.safe = false;
    this.goal = false;
    this.wall = false;
    this.edges = [];
    this.spikes = [];

  }

  show() {
    if ((this.matrixPos.x + this.matrixPos.y) % 2 == 0) {
      //fill(247, 247, 255); //Checkerboard 1
      fill(250,250,242);
    } else {
      //fill(230, 230, 255); //Checkerboard 2
      fill(250,250,242);

    }
    if (this.wall) {
      fill(221, 221, 221);
    }
    if (this.goal || this.safe) {
      fill(73, 239, 144);

    }
    /* if (this.spikes) {
      fill(110, 221, 300);
      triangle(0, 0, 50, 0, 25, 25);
      

    } */


    noStroke();
    rect(this.pixelPos.x, this.pixelPos.y, tileSize, tileSize);

  }

  showEdges() {
    for (var i = 0; i < this.edges.length; i++) {
      stroke(0);
      strokeWeight(6);
      switch (this.edges[i]) {
        case 4:
          line(this.pixelPos.x, this.pixelPos.y, this.pixelPos.x + tileSize, this.pixelPos.y);
          break;
        case 1:
          line(this.pixelPos.x + tileSize, this.pixelPos.y, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize);
          break;
        case 2:
          line(this.pixelPos.x, this.pixelPos.y + tileSize, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize);
          break;
        case 3:
          line(this.pixelPos.x, this.pixelPos.y, this.pixelPos.x, this.pixelPos.y + tileSize);
          break;
      }
    }
  }

  showSpikes() {


    for (var i = 0; i < this.spikes.length; i++) {
      stroke(0);
      strokeWeight(2);
      //triangle(0, 0, 50, 0, 25, 25);
      //fill(221, 221, 221);
      switch (this.spikes[i]) {
        case 4:
          //line(this.pixelPos.x, this.pixelPos.y, this.pixelPos.x + tileSize, this.pixelPos.y);
          triangle(this.pixelPos.x+tileSize/20, this.pixelPos.y + tileSize*0.02, this.pixelPos.x + tileSize*0.16, this.pixelPos.y + tileSize /5, this.pixelPos.x + tileSize/3.5,this.pixelPos.y + tileSize*0.02);
          triangle(this.pixelPos.x+tileSize/1.9, this.pixelPos.y + tileSize*0.02, this.pixelPos.x + tileSize*0.4, this.pixelPos.y + tileSize /5, this.pixelPos.x + tileSize/3.5,this.pixelPos.y + tileSize*0.02);
          triangle(this.pixelPos.x+tileSize/1.9, this.pixelPos.y + tileSize*0.02, this.pixelPos.x + tileSize*0.65, this.pixelPos.y + tileSize /5, this.pixelPos.x + tileSize/1.3,this.pixelPos.y + tileSize*0.02);
          triangle(this.pixelPos.x+tileSize, this.pixelPos.y + tileSize*0.02, this.pixelPos.x + tileSize*0.9, this.pixelPos.y + tileSize /5, this.pixelPos.x + tileSize/1.3,this.pixelPos.y + tileSize*0.02);
          break;
        case 1:
          //line(this.pixelPos.x + tileSize, this.pixelPos.y, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize);
          triangle(this.pixelPos.x+tileSize, this.pixelPos.y + tileSize/70, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize /4, this.pixelPos.x + tileSize/1.2,this.pixelPos.y + tileSize/9);
          triangle(this.pixelPos.x+tileSize, this.pixelPos.y + tileSize/5, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize /1.95, this.pixelPos.x + tileSize/1.2,this.pixelPos.y + tileSize/2.8);
          triangle(this.pixelPos.x+tileSize, this.pixelPos.y + tileSize/1.3, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize /2.1, this.pixelPos.x + tileSize/1.2,this.pixelPos.y + tileSize/1.6);
          triangle(this.pixelPos.x+tileSize, this.pixelPos.y + tileSize/1.4, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize, this.pixelPos.x + tileSize/1.2,this.pixelPos.y + tileSize/1.15);
          break;
        case 2:
          //line(this.pixelPos.x, this.pixelPos.y + tileSize, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize);
          triangle(this.pixelPos.x+tileSize/8, this.pixelPos.y + tileSize/1.2, this.pixelPos.x,this.pixelPos.y + tileSize, this.pixelPos.x + tileSize/4,this.pixelPos.y + tileSize);
          triangle(this.pixelPos.x+tileSize/2.7, this.pixelPos.y + tileSize/1.2, this.pixelPos.x + tileSize/2, this.pixelPos.y + tileSize, this.pixelPos.x + tileSize/3.9,this.pixelPos.y + tileSize);
          triangle(this.pixelPos.x+tileSize/1.7, this.pixelPos.y + tileSize/1.2, this.pixelPos.x + tileSize/1.35, this.pixelPos.y + tileSize, this.pixelPos.x + tileSize/2.1,this.pixelPos.y + tileSize);
          triangle(this.pixelPos.x+tileSize/1.2, this.pixelPos.y + tileSize/1.2, this.pixelPos.x + tileSize, this.pixelPos.y + tileSize, this.pixelPos.x + tileSize/1.4,this.pixelPos.y + tileSize);
          break;
        case 3:
          //line(this.pixelPos.x, this.pixelPos.y, this.pixelPos.x, this.pixelPos.y + tileSize);
          triangle(this.pixelPos.x+tileSize/20, this.pixelPos.y + tileSize*0.02, this.pixelPos.x + tileSize*0.2, this.pixelPos.y + tileSize /6.5, this.pixelPos.x + tileSize/25 ,this.pixelPos.y + tileSize*0.25);
          triangle(this.pixelPos.x+tileSize/20, this.pixelPos.y + tileSize*0.5, this.pixelPos.x + tileSize*0.2, this.pixelPos.y + tileSize /2.6, this.pixelPos.x + tileSize/25 ,this.pixelPos.y + tileSize*0.25);
          triangle(this.pixelPos.x+tileSize/20, this.pixelPos.y + tileSize*0.5, this.pixelPos.x + tileSize*0.2, this.pixelPos.y + tileSize /1.6, this.pixelPos.x + tileSize/25 ,this.pixelPos.y + tileSize*0.74);
          triangle(this.pixelPos.x+tileSize/20, this.pixelPos.y + tileSize*0.97, this.pixelPos.x + tileSize*0.2, this.pixelPos.y + tileSize /1.15, this.pixelPos.x + tileSize/25 ,this.pixelPos.y + tileSize*0.74);

          break;
      }
    }

  }



}