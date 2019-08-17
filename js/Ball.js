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

    bouncing(ballX, ballY, paddle){
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
        let paddleY = this.cvs.height-paddle.paddleHeight;
        let distX = Math.abs(ballX - (paddle.paddleX + paddle.paddleWidth/2));
        let distY = Math.abs(ballY - (paddleY + paddle.paddleHeight/2));
        if (distX <= paddle.paddleWidth/2 && distY <= paddle.paddleHeight/2 + this.ballRadius){
            dy = -dy;
        }
        let pitaX = distX - paddle.paddleWidth/2;
        let pitaY = distY - paddle.paddleHeight/2;
        if (pitaX*pitaX + pitaY*pitaY <= this.ballRadius*this.ballRadius){
            dx = -dx;
            dy = -dy;
        }
    };
}
