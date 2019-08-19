class Ball {
    constructor(canvasConfig){
        this.cvs = canvasConfig.cvs; // pobranie wartości cvs z gettera 
        this.ctx = canvasConfig.ctx; // pobranie wartości ctx z gettera 
        this.ballRadius = 10; // promień piłeczki
    }

    drawBall(ballX, ballY){
        // TO DO -> metoda tworząca piłeczkę (metody canvas'a)
        // hint: jako argument funkcja przyjmuję x i y zdefiniowane globalnie w index.js
        this.ctx.beginPath();
        this.ctx.arc(ballX,ballY,this.ballRadius,0,2*Math.PI);
        this.ctx.stroke();
    };

    bouncing(ballX, ballY, {paddleX,paddleWidth,paddleHeight}){
        // TO DO -> funcja odbijąca piłeczkę od ścian
        // hint: jako argumenty funkcja przyjmuje x i y zdefiniowane globalnie w index.js oraz pozycję i szerokość paddle
        // hint: gdy piłeczka wpadnie w dolną ścianę -> game over, czyli alert oraz przeładowanie dokumentu i wyczesczenie intarwału
        
        // Od prawej i lewej ściany
        if (ballX <= this.ballRadius || this.cvs.width-ballX <= this.ballRadius){
            dx = -dx;
        }
        // Od górnej ściany
        if (ballY <= this.ballRadius){
            dy = -dy;
        }
        // Od dolnej ściany
        if (this.cvs.height-ballY<=this.ballRadius){
            alert(`Game over! Your score: ${score}`);
            window.clearInterval(interval);
            location.reload(true);          
        }
        // Od paletki
        const paddleY = this.cvs.height-paddleHeight;
        const distX = Math.abs(ballX - (paddleX + paddleWidth/2));
        const distY = Math.abs(ballY - (paddleY + paddleHeight/2));
        if (distX <= paddleWidth/2 && distY <= paddleHeight/2 + this.ballRadius){
            dy = -dy;
        }
        const pitaX = distX - paddleWidth/2;
        const pitaY = distY - paddleHeight/2;
        if (pitaX*pitaX + pitaY*pitaY <= this.ballRadius*this.ballRadius){
            dx = -dx;
            dy = -dy;
        }
    };
}
