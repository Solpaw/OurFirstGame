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
        // kolimna "c" będize zawierać będzie 3 rzędy cegiełek o domyślnej pozycji x i y = 0 
        this.bricks = [];
        for(let c=0; c<this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for(let r=0; r<this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1 };
            }       
        }       
    }

    drawBricks(){
        // TO DO -> funkcja renderująca cegiełki
        // hint: korzystajcie z wartości zdefiniowanych w constructorze oraz metod canvas'a
        // hint: tablica dwuwymiarowa 
    };

    collisionDetection() {
        // TO DO -> funkcja wykrywająca kolizję piłeczki z cegiełką i usuwająca trafioną cegiełke
        // hint: jako argumenty funkcja przyjmuje x i y zdefinowane globalnie w index.js
        // hint: przy trafieniu w cegiełke score++
        // hint: jeśli skończą się cegiełki -> wygrana, czyli alert oraz przeładowanie dokumentu i wyczesczenie intarwału
    };
    
}
