// 1. Używajcie składni ES6 (pamiętajcie tylko, że jak będziecie chcieli dopisać nową metodę do kalsy to nie używać funkcji strzałkowej)

//Do tworzenia elementów typu piłeczka, cegiełki, paletka obczaicie sobie elementu canvas, w szczególności
//.beginPath, closePath, .arc, .rect, .fillStyle, .fill

// NIE ZMIENIAĆ KOLEJNOŚCI !!!!
let score = 0; // wynik
let dx = 2; // "szybkośc poruszania się piłeczki (2px na jedno wywołanie funkcji start)"
let dy = -2; // "szybkośc poruszania się piłeczki (2px na jedno wywołanie funkcji start)"
// utworzenie obiektów na podstawie klas
const canvas = new Canvas();
const paddle = new Paddle(canvas.getCanvasConfig());
const ball = new Ball(canvas.getCanvasConfig(), paddle.getPaddleConfig());
const bricks = new Bricks(canvas.getCanvasConfig());
const { ctx, cvs } = canvas.getCanvasConfig();
let x = cvs.width/2; // początkowa pozycja piłeczki oś x
let y = cvs.height-30; // początkowa pozycja piłeczki oś y

const moveBall = () => {
    x += dx;
    y += dy;
};

const start = () => {
    // TO DO -> wywołanie niezbęędnych metod obiektów, wprawienie w ruch piłeczki, czyszecznie canvas'a
    // hint: wprawienie w ruch piłeczki w ruch to dwie bardzo krótkie linie kodu, nie przekombinujcie
    ctx.clearRect(0,0,cvs.width,cvs.height); // czyszczenie canvas
    paddle.drawPaddle();    // rysowanie Paddle
    ball.drawBall(x, y);    // rysowanie piłki
    paddle.movePaddle();    // przesunięcie Paddle
    ball.bouncing(x, y, paddle); // odbicia piłki od Paddle i ścian, koniec gry
    moveBall(); // przesuwanie piłeczki
    // umieszczenie zmiennej score w spanie, w nagówku h1 o id "score", tego jeszcze nie było, więc nie musice nic tu zmieniać
    document.querySelector("#score span").innerText = score;
};

// Poniżej są eventListenery, które wyłapują wciśnięcie i puszczenie strzełek, tego jeszcze nie mieliśice
// Tutaj nic nie musicie zmieniać
document.addEventListener('keydown', (e) => {
    if(e.key === "Right" || e.key === "ArrowRight")
        paddle.setRightPressed(true);
    else if(e.key === "Left" || e.key === "ArrowLeft")
        paddle.setLeftPressed(true);
}, false);

document.addEventListener('keyup', (e) => {
    if(e.key === "Right" || e.key === "ArrowRight")
        paddle.setRightPressed(false);
    else if(e.key === "Left" || e.key === "ArrowLeft")
        paddle.setLeftPressed(false);
}, false);

// Wywoływanie funkcji start co 10 mlisekund, nie trzeba nic tu zmieniać
const interval = setInterval(start, 10);
