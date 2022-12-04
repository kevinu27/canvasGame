// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var ballRadius = 10;
// var x = canvas.width/2;
// var y = canvas.height-30;
// var dx = 2;
// var dy = -2;

// const { throwStatement } = require("@babel/types")

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
    
//     if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
//         dy = -dy;
//     }
    
//     x += dx;
//     y += dy;
// }

// setInterval(draw, 10);

const game = {
    title: 'Shinobi',
    author: 'Jose y Kevin',
    license: undefined,
    version: '1.0.0',
    desciption: 'Ninja Game',
    canvasDom: undefined,
    ctx: undefined,
    myMusic: undefined,
    framesCounter: 0,
    FPS: 20,
    Temp: 0,
    puntos: 0,
    canvasSize: { w: undefined, h: undefined },
    keys: {
        SPACE: 'Space',
        UP_MOVE: 'ArrowLeft', //W
        DOWN_MOVE: 's',//S
        RIGHT_MOVE: 'D',//D
        LEFT_MOVE: 'A',//A
    },
    oneTime: true,
    oneTime2: true,

    // elementros creados
    shinobi: undefined,
    background: undefined,
    platformArrayList: [],
    enemyArrayList: [],     // enemy 
    enemyArrayListEnd: [],
    shurikensArrayAttack: [],
    monstersList: [],
    coins: [],
    ball: undefined,
    intervalId: 0,
    audio: undefined,
    
    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.start()

    },

    setContext() {
        this.canvasDOM = document.querySelector('#myCanvas')
        this.ctx = this.canvasDOM.getContext('2d')
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasDOM.setAttribute('width', this.canvasSize.w/2)
        this.canvasDOM.setAttribute('height', this.canvasSize.h/2)
    },


    setEventListeners() {
        document.onkeydown =e => e.code === this.keys.SPACE ? this.createBall() : null
        // document.onkeypress = e => {
        //     // e.key === 'a' ? this.movementLeft() : null
        //     // e.key === 'd' ? this.movementRight() : null
        //     // e.key === 'w' ? this.shinobi.moveUp() : null
        //     // e.key === 's' ? this.shinobi.moveDown() : null
        //     e.key === " " ? console.log("espacio apryad") : null
        // }
        // document.onkeydown = e => {
        //     e.key === 'm' ? console.log("espacio apryad"): null
        // }
        // document.onkeyup = e => {
        //     e.key === 'm' ? console.log("espacio apryad") : null
        // }
    },

    start(){

        setInterval(()=> {
            console.log('ghgjh')
            this.clearAll()
            this.drawAll()
            this.moveAll()
        }, 300)
    },
    createBall(){
        //contexto, radio, x, y 
         this.ball= new Ball(this.ctx, 50, 100, 100, 100, this.canvasSize)
    },
    clearAll(){
        this.ctx.clearRect(0,0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll(){
        this.ball.draw()
    }, 
    moveAll(){
        this.ball.move()

    },


}