class BonusCoin {
    constructor(x, y) {
        this.taken = false;
        this.showedBcoin = true;
        this.pos = createVector(x, y);
        this.diameter = tileSize / 2.0;

       

    }
    

    show() {
        if (this.showedBcoin && !this.taken) {
            stroke(0);
            fill(255, 230, 100);
            ellipse(this.pos.x, this.pos.y, this.diameter);
            textSize(15)
            fill(255, 255, 255);
            text("B", this.pos.x - 5, this.pos.y + 5);

           
            //showedCoin = true;
        }

    }

    resetBonus() {
        this.taken = false;
        this.showedBcoin = true;
        bonusCounter = 0;
    }

    collides(ptl, pbr) {//player dimensions 
        if (this.taken) {
            return false;
        }

        var topLeft = createVector(this.pos.x - this.diameter / 2, this.pos.y - this.diameter / 2);
        var bottomRight = createVector(this.pos.x + this.diameter / 2, this.pos.y + this.diameter / 2);
        if ((ptl.x < bottomRight.x && pbr.x > topLeft.x) && (ptl.y < bottomRight.y && pbr.y > topLeft.y)) {

            this.taken = true;
            this.showedBcoin = false;
            bonusCounter += 1;
            return;
        }
        return;
    }



}