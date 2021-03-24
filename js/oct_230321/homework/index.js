class Football {

  border = 20;
  step = 10;

  constructor (field, ball, score) {

    let self = this;

    this.field = field;
    this.ball = ball;
    this.score = score;

    this.posX;
    this.posY;

    document.addEventListener("keydown", moveEvent);

    this.resetBall();

    function moveEvent (event) {

      switch(event.code) {
        case "ArrowUp":
          moveBall("top", false);
          break;
        case "ArrowDown":
          moveBall("top", true);
        break;
        case "ArrowLeft":
          moveBall("left", false);
          break;
        case "ArrowRight":
          moveBall("left", true);
        break;
      }

      function moveBall (option, direction) {

        let value, max, min;

        if (option === "top") {
          value = self.posY;
          max = self.field.offsetTop + self.field.offsetHeight - self.ball.offsetHeight - self.border;
          min = self.field.offsetTop + self.border;
        } else if (option === "left") {
          value = self.posX;
          max = self.field.offsetLeft + self.field.offsetWidth - self.ball.offsetWidth - self.border;
          min = self.field.offsetLeft + self.border;
        }

        value = direction ? value + self.step : value - self.step;

        if (value>max || value<min) {return}

        self.ball.style[option] = value + "px";
        self.setCurrentPos();

        let goalSide = isGoal(value, option);
        if (goalSide) {
          changeScore(goalSide);
          self.resetBall();
        }

      }

      function isGoal (value, option) {

        let posX = option === "left" ? value : self.posX;
        let posY = option === "top" ? value : self.posY;

        let minX = self.field.offsetLeft+self.border;
        let maxX = self.field.offsetLeft+self.field.offsetWidth-self.border-self.ball.offsetWidth;

        let minY = self.field.offsetTop + 200 + self.ball.offsetHeight/2;
        let maxY = self.field.offsetTop + self.field.offsetHeight - 200 - self.ball.offsetHeight*1.5;

        if ( self.posX<=minX && self.posY>=minY && self.posY<=maxY) {
          return "left";
        } else if ( self.posX>=maxX && self.posY>=minY && self.posY<=maxY) {
          return "right";
        } else {
          return false;
        }

      }

      function changeScore (side) {
        let currentScore = self.score.innerText.split(":");
        console.log("Side: ", side);
        if (side === "left") {
          currentScore[0] = Number(currentScore[0])+1;
        } else if (side === "right") {
          currentScore[1] = Number(currentScore[1])+1;
        }
        self.score.innerText = currentScore.join(":");
      }

    }

  }

  resetBall () {

    let posX = this.field.offsetLeft +
      this.field.offsetWidth/2 -
      this.ball.offsetWidth/2;

    let posY = this.field.offsetTop +
      this.field.offsetHeight/2 -
      this.ball.offsetHeight/2;

    this.ball.style.left = posX + "px";
    this.ball.style.top = posY + "px";

    this.setCurrentPos();

  }

  setCurrentPos () {
    this.posX = this.ball.offsetLeft;
    this.posY = this.ball.offsetTop;
  }

  resetScore() {
    this.score.innerText = "0:0";
  }

}

let field = document.getElementById("field");
let ball = document.getElementById("ball");
let score = document.getElementById("score");

let footballGame = new Football(field, ball, score);