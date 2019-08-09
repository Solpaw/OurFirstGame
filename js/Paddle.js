class Paddle {
    constructor(canvasConfig){
        this.cvs = canvasConfig.cvs; // pobranie wartości cvs z gettera 
        this.ctx = canvasConfig.ctx; // pobranie wartości ctx z gettera
        this.paddleHeight = 10; // wysokość paletki
        this.paddleWidth = 75; //szerokość paletki
        this.paddleX = (this.canvas.width-this.paddleWidth)/2; // pozycja paletki na osi X
        this.rightPressed = false; // czy prawa strzałka jest obecnie wciśnięta
        this.leftPressed = false; // czy lewa strzałka jest obecnie wciścnięta
    }

    drawPaddle(){
        // TO DO -> funkcja tworząca paletkę
        // hint: korzystajcie z wartości zdefiniowanych w constructorze oraz metod canvas'a
    };

    movePaddle(){
        // TO DO -> funkcja ruszające paletką na podstawie tego co zwracają eventListenery w index.js
        // hint: "szybkość" = 7
    };

    setRightPressed(){
        // TO DO -> setter zmieniający wartość this.rightPressed
    };

    setLeftPressed(leftPressed){
        // TO DO -> setter zmieniający wartość this.leftPressed
    };

    getPaddleConfig(){
        // TO DO -> getter zwracający: this.paddleWidth, this.paddleX, this.rightPressed i this.leftPressed
    };
}
