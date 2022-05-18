class Snake{
  constructor(){
    this.arrowUp = document.getElementById('arrowUp');
    this.arrowDown = document.getElementById('arrowDown');
    this.arrowLeft = document.getElementById('arrowLeft');
    this.arrowRight = document.getElementById('arrowRight');
    this.border = document.getElementById('border');
    this.food = document.createElement('img');
    this.msgStart = document.createElement('p');
    this.head = document.createElement('div');
    this.keypress;
    this.left = false;
    this.right = false;
    this.top = false;
    this.bottom = false;
    this.isMoving = false;
    this.speed = 1;
    this.animation; // RequestAnim
    this.foodX = Math.floor(Math.random() * (this.border.clientWidth - this.food.clientWidth - 10));
    this.foodY = Math.floor(Math.random() * (this.border.clientHeight - this.food.clientHeight - 10));
    this.score = 0;
    this.snake = [];
    this.snakeHead = {
      elem: this.head,
      lastPosX: 160,
      lastPosY: 160
    }
    this.snakeTail;
    this.bonusVisible = false;
  }


  init(){
    this.startGame();
    this.responsArrows();
    this.displayScore();
    this.reset();
  }
  
  startGame(){

    this.msgStart.innerHTML = 'Press z, s, q or d to start game';
    this.msgStart.id = 'msg';
    this.border.append(this.msgStart);

    this.snakeHead.elem.className = 'snake';
    this.snakeHead.elem.style.left = `${this.snakeHead.lastPosX}px`;
    this.snakeHead.elem.style.top = `${this.snakeHead.lastPosY}px`;
    this.snake.push(this.snakeHead);
    this.border.append(this.snakeHead.elem);

    this.food.id = 'food';
    this.food.src = 'img/Food.png';
    this.border.append(this.food);
    this.food.style.left = `${this.foodX}px`;
    this.food.style.top = `${this.foodY}px`;

    // Direction
    document.addEventListener('keydown', (event) => {
      if(event.key === 'z'){
        this.keypress = event.key;
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
      }
      if(event.key === 's'){
        this.keypress = event.key;
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
      }
      if(event.key === 'q'){
        this.keypress = event.key;
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
      }
      if(event.key === 'd'){
        this.keypress = event.key;
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
      }
    });
  }
  
  move(){
    window.requestAnimationFrame(() => {

      this.isMoving = true;
      let x = this.snakeHead.lastPosX;
      let y = this.snakeHead.lastPosY;

      if(this.keypress === 'z' && this.bottom === false){
        this.snakeHead.lastPosY -= this.speed;
        this.top = true;
        this.bottom = false;
        this.right = false;
        this.left = false;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
              item.elem.style.left = `${x}px`;
              item.elem.style.top = `${y}px`;
              item.lastPosX = x;
              item.lastPosY = y;
              item.placed = true;
            }, 300 * idx);
          }
        });
      }else if(this.keypress === 'z' && this.bottom === true){ // No reverse Y top
        this.snakeHead.lastPosY += this.speed;
        this.top = false;
        this.bottom = true;
        this.right = false;
        this.left = false;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
              item.elem.style.left = `${x}px`;
              item.elem.style.top = `${y}px`;
              item.lastPosX = x;
              item.lastPosY = y;
              item.placed = true;
            }, 300  * idx);
          }
        });
      }else if(this.keypress === 's' && this.top === false){
        this.snakeHead.lastPosY += this.speed;
        this.top = false;
        this.bottom = true;
        this.left = false;
        this.right = false;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
            item.elem.style.left = `${x}px`;
            item.elem.style.top = `${y}px`;
            item.lastPosX = x;
            item.lastPosY = y;
            item.placed = true;
            },300 * idx);
          }
        });
      }else if(this.keypress === 's' && this.top === true){ // No reverse Y bottom
        this.snakeHead.lastPosY -= this.speed;
        this.top = true;
        this.bottom = false;
        this.left = false;
        this.right = false;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
              item.elem.style.left = `${x}px`;
              item.elem.style.top = `${y}px`;
              item.lastPosX = x;
              item.lastPosY = y;
              item.placed = true;
            }, 300  * idx);
          }
        });
      }else if(this.keypress === 'q' && this.right === false){
        this.snakeHead.lastPosX -= this.speed;
        this.top = false;
        this.bottom = false;
        this.left = true;
        this.right = false;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
              item.elem.style.left = `${x}px`;
              item.elem.style.top = `${y}px`;
              item.lastPosX = x;
              item.lastPosY = y;
              item.placed = true;
            }, 300 * idx);
          }
        });
      }else if(this.keypress === 'q' && this.right === true){ // No reverse X right
        this.snakeHead.lastPosX += this.speed;
        this.top = false;
        this.bottom = false;
        this.left = false;
        this.right = true;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
              item.elem.style.left = `${x}px`;
              item.elem.style.top = `${y}px`;
              item.lastPosX = x;
              item.lastPosY = y;
              item.placed = true;
            }, 300  * idx);
          }
        });
      }else if(this.keypress === 'd' && this.left === false){
        this.snakeHead.lastPosX += this.speed;
        this.top = false;
        this.bottom = false;
        this.left = false;
        this.right = true;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
              item.elem.style.left = `${x}px`;
              item.elem.style.top = `${y}px`;
              item.lastPosX = x;
              item.lastPosY = y;
              item.placed = true;
            }, 300 * idx);
          }
        });
      }else if(this.keypress === 'd' && this.left === true){ // No reverse X left
        this.snakeHead.lastPosX -= this.speed;
        this.top = false;
        this.bottom = false;
        this.left = true;
        this.right = false;
        this.snake.forEach((item, idx) => {
          if(idx > 0){
            window.setTimeout(() => {
              item.elem.style.backgroundColor = 'black';
              item.elem.style.left = `${x}px`;
              item.elem.style.top = `${y}px`;
              item.lastPosX = x;
              item.lastPosY = y;
              item.placed = true;
            }, 300  * idx);
          }
        });
      }

      this.snakeHead.elem.style.left = `${this.snakeHead.lastPosX}px`;
      this.snakeHead.elem.style.top = `${this.snakeHead.lastPosY}px`;

      if(this.snakeHead.lastPosX > 0 && this.snakeHead.lastPosX < this.border.clientWidth - this.head.clientWidth && 
        this.snakeHead.lastPosY > 0 && this.snakeHead.lastPosY < this.border.clientHeight - this.head.clientHeight){
        this.animation = requestAnimationFrame(this.move.bind(this));
        this.eatFood();
        this.collision();
      }else{
        this.stopGame();
      }

    });
  }

  eatFood(){
    // snakeHead hit food
    if(this.foodX < this.snakeHead.lastPosX + this.head.clientWidth &&
      this.foodX + this.food.clientWidth > this.snakeHead.lastPosX &&
      this.foodY < this.snakeHead.lastPosY + this.head.clientHeight &&
      this.foodY + this.food.clientHeight > this.snakeHead.lastPosY){
        this.foodX = Math.floor(Math.random() * (this.border.clientWidth - this.food.clientWidth - 10));
        this.foodY = Math.floor(Math.random() * (this.border.clientHeight - this.food.clientHeight - 10));
        this.food.style.left = `${this.foodX}px`;
        this.food.style.top = `${this.foodY}px`;
        this.addTail();
        this.displayScore();
        this.bonus();
    }

    // snakeHead hit foodBonus
    if(this.snakeHead.lastPosX + this.snakeHead.elem.clientWidth > this.foodBonusX &&
      this.snakeHead.lastPosX < this.foodBonusX + this.foodBonus.clientWidth && 
      this.snakeHead.lastPosY + this.snakeHead.elem.clientHeight > this.foodBonusY &&
      this.snakeHead.lastPosY < this.foodBonusY + this.foodBonus.clientHeight && this.bonusVisible === true){
        this.foodBonus.remove();
        this.msgTimer.remove();
        this.score += 30; // Stopper répétition
        this.bonusVisible = false;
        this.displayScore();
      }
  }

  addTail(){
    this.snakeTail = Object.create(this.snakeHead);
    this.snakeTail.elem = document.createElement('div');
    this.snakeTail.elem.className = 'snake';
    this.snakeTail.lastPosX = `${this.snakeHead.lastPosX}`;
    this.snakeTail.lastPosY = `${this.snakeHead.lastPosY}`;
    this.snakeTail.elem.style.left = `${this.snakeTail.lastPosX}px`;
    this.snakeTail.elem.style.top = `${this.snakeTail.lastPosY}px`;
    this.snakeTail.elem.style.backgroundColor = '#20fd03';
    this.snake.push(this.snakeTail);
    this.border.append(this.snakeTail.elem);
    this.snakeTail.placed = false;
    this.score += 15;
  }

  bonus(){
    let chance = Math.floor(Math.random() * 6);

    if(chance === 0){
      this.foodBonus = document.createElement('div');
      this.foodBonusX = Math.floor(Math.random() * (this.border.clientWidth - this.foodBonus.clientWidth - 20));
      this.foodBonusY = Math.floor(Math.random() * (this.border.clientHeight - this.foodBonus.clientHeight - 20));
      this.msgTimer = document.createElement('p');
      let timeLeft = 9;
      this.bonusVisible = true;
      
      this.msgTimer.id = 'timer';
      this.msgTimer.innerHTML = `Bonus:${timeLeft}`;
      this.foodBonus.id = 'bonus';
      this.foodBonus.style.left = `${this.foodBonusX}px`;
      this.foodBonus.style.top = `${this.foodBonusY}px`;
  
      const countdown = setInterval(() =>{
        timeLeft--;
  
        if(timeLeft === 0){
          clearInterval(countdown);
          this.msgTimer.remove();
          this.foodBonus.remove();
        }
  
        this.msgTimer.innerHTML = `Bonus:${timeLeft}`;
      }, 1000);
  
      this.border.append(this.msgTimer);
      border.append(this.foodBonus);
    }
    
  }

  collision(){ 
    // snakeHead hit tail1
    if(this.snake.length === 2){
      if(this.snakeHead.lastPosX + this.snakeHead.elem.clientWidth - 15 > this.snake[1].lastPosX &&
        this.snakeHead.lastPosX < this.snake[1].lastPosX + this.snake[1].elem.clientWidth - 15 &&
        this.snakeHead.lastPosY + this.snakeHead.elem.clientHeight - 15 > this.snake[1].lastPosY &&
        this.snakeHead.lastPosY < this.snake[1].lastPosY + this.snake[1].elem.clientHeight - 15 && this.snakeTail.placed === true){
          this.stopGame();
      }
    }
    // -8 and -15 reduce the hitBox
    // snakeHead hit tails
    this.snake.forEach((item, idx) => {
      if(idx > 1){
        if(this.snakeHead.lastPosX + this.snakeHead.elem.clientWidth - 8 > item.lastPosX &&
        this.snakeHead.lastPosX < item.lastPosX + item.elem.clientWidth - 8 &&
        this.snakeHead.lastPosY + this.snakeHead.elem.clientHeight - 8 > item.lastPosY &&
        this.snakeHead.lastPosY < item.lastPosY + item.elem.clientHeight - 8 && this.snakeTail.placed === true){
          this.stopGame();
        }  
      }
    });

  }

  displayScore(){
    const outputScore = document.getElementById('score');
    outputScore.innerHTML = this.score;
  }

  stopGame(){
    const msgGameOver = document.createElement('p');
    const msgGameOverEffetTop = document.createElement('p');
    const msgGameOverEffetBottom = document.createElement('p');
    const msgReset = document.createElement('p');
    const animArrow = document.createElement('p');

    msgGameOver.id = 'gameOver';
    msgGameOverEffetTop.id = 'gameOver';
    msgGameOverEffetBottom.id = 'gameOver';
    msgReset.id = 'gameOverRetry';
    animArrow.id = 'arrow';

    msgGameOver.innerHTML = 'Game Over';
    msgGameOverEffetTop.innerHTML= 'Game Over';
    msgGameOverEffetBottom.innerHTML= 'Game Over';
    msgReset.innerHTML = 'Press space, or click this big button';
    animArrow.innerHTML = 'ꜜ';

    msgGameOverEffetTop.style.animationDuration = '2s';
    msgGameOverEffetTop.style.color = "black";
    msgGameOverEffetTop.style.transform = "translate(-2px, -3px)";
    msgGameOverEffetTop.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 30%, 0 30%)";
    msgGameOverEffetBottom.style.animationDuration = '1s';
    msgGameOverEffetBottom.style.color = 'black';
    msgGameOverEffetBottom.style.transform = "translate(3px, 2px)";
    msgGameOverEffetBottom.style.clipPath = "polygon(0% 70%, 100% 70%, 100% 100%, 0% 100%)";
    
    this.border.append(msgGameOver);
    this.border.append(msgGameOverEffetTop);
    this.border.append(msgGameOverEffetBottom);
    this.border.append(msgReset);
    this.border.append(animArrow);
    // this.msgTimer.remove();
    // this.foodBonus.remove();
    this.speed = 0;

    window.cancelAnimationFrame(this.animation);
    console.log("ok");
  }

  reset(){
    window.addEventListener('keydown', (event) => {
      if(event.key === ' '){
        location.reload();
      }
    });
  }

  responsArrows(){
    this.arrowUp.addEventListener("click", () => {
      this.keypress = 'z';
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
    });
    this.arrowDown.addEventListener("click", () => {
      this.keypress = 's';
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
    });
    this.arrowLeft.addEventListener("click", () => {
      this.keypress = 'q';
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
    });
    this.arrowRight.addEventListener("click", () => {
      this.keypress = 'd';
        this.msgStart.style.display = "none";
        if(this.isMoving === false){
          this.move();
        }
    });
  }
  
}
  
let jeu = new Snake();
  
jeu.init();