class Paddle {
    constructor(canvasConfig){
        this.cvs = canvasConfig.cvs; // pobranie wartości cvs z gettera 
        this.ctx = canvasConfig.ctx; // pobranie wartości ctx z gettera
        this.paddleHeight = 10; // wysokość paletki
        this.paddleWidth = 75; //szerokość paletki
        this.paddleX = (this.cvs.width-this.paddleWidth)/2; // pozycja paletki na osi X
        this.rightPressed = false; // czy prawa strzałka jest obecnie wciśnięta
        this.leftPressed = false; // czy lewa strzałka jest obecnie wciścnięta
    }

    drawPaddle(){
        // TO DO -> funkcja tworząca paletkę
        // hint: korzystajcie z wartości zdefiniowanych w constructorze oraz metod canvas'a
        ctx.fillRect(this.paddleX,this.cvs.height-this.paddleHeight,this.paddleWidth,this.paddleHeight);
    };

    movePaddle(){
        //funkcja ruszające paletką na podstawie tego co zwracają eventListenery w index.js
        // hint: "szybkość" = 7
        if (this.rightPressed && this.paddleX<(this.cvs.width-this.paddleWidth)){
            this.paddleX+=7;
        }
        if (this.leftPressed && this.paddleX>0){
            this.paddleX-=7;
        }
    };

    setRightPressed(isRightPressed){
        //setter zmieniający wartość this.rightPressed
        this.rightPressed = isRightPressed;
    };

    setLeftPressed(isLeftPressed){
        //setter zmieniający wartość this.leftPressed
        this.leftPressed = isLeftPressed;
    };

    getPaddleConfig(){
        // TO DO -> getter zwracający: this.paddleWidth, this.paddleX, this.rightPressed i this.leftPressed
        return this;
    };
}
