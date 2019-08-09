class Ball {
    constructor(canvasConfig){
        this.cvs = canvasConfig.cvs; // pobranie wartości cvs z gettera 
        this.ctx = canvasConfig.ctx; // pobranie wartości ctx z gettera 
        this.ballRadius = 10; // promień piłeczki
    }

    drawBall(){
        // TO DO -> metoda tworząca piłeczkę (metody canvas'a)
        // hint: jako argument funkcja przyjmuję x i y zdefiniowane globalnie w index.js 
    };

    bouncing(){
        // TO DO -> funcja odbijąca piłeczkę od ścian
        // hint: jako argumenty funkcja przyjmuje x i y zdefiniowane globalnie w index.js oraz pozycję i szerokość paddle
        // hint: gdy piłeczka wpadnie w dolną ścianę -> game over, czyli alert oraz przeładowanie dokumentu i wyczesczenie intarwału
    };
}
