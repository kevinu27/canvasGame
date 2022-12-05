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
    player: undefined,
    background: undefined,
    platformArrayList: [],
    enemyArrayList: [],     // enemy 
    enemyArrayListEnd: [],
    shurikensArrayAttack: [],
    monstersList: [],
    coins: [],
    ball: undefined,
    balls: [],
    bullets: [],
    intervalId: 0,
    audio: undefined,
    x:undefined,
    y: undefined,
    
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
        // console.log('window.innerHeight', window.innerHeight)
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },

    
    setEventListeners() {
        const canvas = document.querySelector('canvas')
        // canvas.addEventListener('mousemove', function(e) {
        //     getCursorAngle(canvas, e)
        // })
        // function getCursorAngle (canvas, event) {
        //     console.log("mouse move")
        // }

        canvas.addEventListener('mousedown', function(e) {
        getCursorPosition(canvas, e)
        })
         const that = this
        function getCursorPosition(canvas, event) {
            const rect = canvas.getBoundingClientRect()
            that.x = event.clientX - rect.left
            that.y = event.clientY - rect.top
            console.log("x: " + this.x + " y: " + this.y)
            that.createBullet()
        }
        document.onkeydown =e => {
            e.code === this.keys.SPACE ? this.createBall() : null            
        }
        document.onkeypress = e => {
            e.key === 'd' ? this.player.moveRight() : null
            e.key === 'a' ?  this.player.moveLeft() : null
            e.key === 'w' ? this.player.moveUp() : null
            e.key === 's' ? console.log("s") : null
        }
        // document.onkeydown = e => {
        //     e.key === 'm' ? console.log("espacio apryad"): null
        // }
        // document.onkeyup = e => {
        //     e.key === 'm' ? console.log("espacio apryad") : null
        // }
    },

    start(){
        this.createPlayer()
        setInterval(()=> {
            // console.log('ghgjh')
            this.clearAll()
            this.drawAll()
            this.moveAll()
        }, 100)
    },
    createBall(){
        //contexto, radio, x, y 
        //  this.ball= new Ball(this.ctx, 50, 100, 100, 100, this.canvasSize) // una bola
         this.balls.push(new Ball(this.ctx, 50, 100, 100, 100, this.canvasSize)) // muchas bolas
    },
    createBullet(){
         this.bullets.push(new Bullet(this.ctx, 10, this.player.playerPos.x+ this.player.playerSize.w, this.player.playerPos.y, 100, this.canvasSize, this.x, this.y, this.player.playerPos.x, this.player.playerPos.y ))

    },
    createPlayer(){
        this.player = new Player(this.ctx, 50, 80, 0, this.canvasSize.h-100, this.canvasSize)
    },
    clearAll(){
        this.ctx.clearRect(0,0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll(){
        // this.ball.draw() // dibujar un abola
        this.balls.forEach(elm => elm.draw())
        this.bullets.forEach(elm => elm.draw())
        this.player.draw() // dibujar un abola

    }, 
    moveAll(){
        // this.ball.move()
        this.player.gravityMove()
        this.balls.forEach(elm => elm.move())
        this.bullets.forEach(elm => elm.move())
        
    },


}