class Bricks {
    constructor(canvasConfig) {
        this.ctx = canvasConfig.ctx; // pobranie wartości ctx z gettera 
        this.brickRowCount = 3; // licza rzędów z cegiełkami
        this.brickColumnCount = 5; // liczna kolumn z cegiekami
        this.brickWidth = 75; // szerokość cegiełki
        this.brickHeight = 20; // wysokość cegiełki
        this.brickPadding = 10; // padding cegiełki
        this.brickOffsetTop = 30; // odsunięcie cegiełki od góry
        this.brickOffsetLeft = 30; // odsunięcie cegiełki od lewej

        // dwuwymiarowa tablica, w której przetrzymywane będą cegiełki
        // kolumna "c" będzie zawierać 3 rzędy cegiełek o domyślnej pozycji x i y = 0 
        this.bricks = [];
        for(let c=0; c<this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for(let r=0; r<this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1 };
            }       
        }       
    }

    drawBricks(){
        //funkcja renderująca cegiełki
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                if (this.bricks[c][r].status > 0) {
                    const brickX = (c * (this.brickPadding + this.brickWidth)) + this.brickOffsetLeft;
                    const brickY = (r * (this.brickPadding + this.brickHeight)) + this.brickOffsetTop;
                    this.bricks[c][r].x = brickX;
                    this.bricks[c][r].y = brickY;
                    this.ctx.fillRect(brickX, brickY, this.brickWidth, this.brickHeight);
                }
            }
        }
    };

    collisionDetection() {
        // funkcja wykrywająca kolizję piłeczki z cegiełką i usuwająca trafioną cegiełke
        for(let c=0; c<this.brickColumnCount; c++){
            for(let r=0; r<this.brickRowCount; r++){
                const brick = this.bricks[c][r];
                if(brick.status > 0) {
                    if(x > brick.x && x < brick.x + this.brickWidth && y > brick.y && y < brick.y + this.brickHeight){
                        dy = -dy;
                        brick.status = 0;
                        score++;
                        if (score == this.brickColumnCount * this.brickRowCount) {
                            alert("You Win!"); // Komunikat o wygranej
                            clearInterval(interval);  // Wyczyszczenie interwału
                            document.location.reload(); // Przeładowanie dokumentu
                        }
                    }
                }
            }
        }
    };   
}
