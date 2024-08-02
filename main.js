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
    FPS: 10,
    Temp: 0,
    score: 0,
    framesCounter:0,
    tilted: false,
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
    bulletsLine: [],
    bulletLine: undefined,
    intervalId: 0,
    audio: undefined,
    x:undefined,
    y: undefined,
    prevFrameCounter: undefined,
    FPS: 20,
    goingUp:false,
    counter: 0,
    bonuses: [],
    isMovingRight: false,
    isMovingLeft: false,
    inTheGround: false,



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
        this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
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
            // console.log("x: " + that.x + " y: " + that.y)
            that.createBullet()
            that.createBulletLine()
        }
        document.onkeydown =e => {
            e.code === this.keys.SPACE ? this.createBall() : null
            e.key === 'z' ? console.log("espacio apryad"): null
            e.key === 'd' ? this.isMovingRight = true: null
            e.key === 'a' ? this.isMovingLeft = true: null
            

        }

        document.onkeyup =e => {
            e.code === this.keys.SPACE ? this.createBall() : null
            e.key === 'z' ? console.log("espacio apryad"): null
            e.key === 'd' ? this.isMovingRight = false: null
            e.key === 'a' ? this.isMovingLeft = false: null
            

        }
        document.onkeypress = e => {
            // e.key === 'd' ? this.moveRight() : null
            e.key === 'a' ?  this.moveLeft() : null
            e.key === 'w' ? this.moveUp() : null
            // if(e.key === 'w') { 
            //     console.log("UUUUUPPPPPP!!!!")
            //     this.goingUp = true
            //     this.prevFrameCounter = this.framesCounter
            //     this.moveUp()
            // }
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
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            this.drawAll()
            this.moveAll()
            this.allCollision()
            if(this.goingUp=== true && this.framesCounter < this.prevFrameCounter +9){
                this.counter = this.counter +1
                 console.log("this.counter", this.counter)
                 this.player.playerPos.y -= 75
             }else{
                this.goingUp = false
             }
        }, 1000/this.FPS)
    },
    createBall(){
        //contexto, radio, x, y 
        //  this.ball= new Ball(this.ctx, 50, 100, 100, 100, this.canvasSize) // una bola
         this.balls.push(new Ball(this.ctx, 150 , this.canvasSize.w/2, 100, 100, this.canvasSize, 10)) // muchas bolas
    },
    createBullet(){
         this.bullets.push(new Bullet(this.ctx, 10, this.player.playerPos.x+ this.player.playerSize.w, this.player.playerPos.y, 100, this.canvasSize, this.x, this.y, this.player.playerPos.x, this.player.playerPos.y ))

    },
    
    createBulletLine(){
        // console.log("bulletsline.lenght",  this.bulletsLine.length)
        //   this.bulletLine = new BulletLine(this.ctx, 10, this.player.playerPos.x+ this.player.playerSize.w, this.player.playerPos.y, 100, this.canvasSize, this.x, this.y, this.player.playerPos.x, this.player.playerPos.y )
        this.bulletsLine.push( new BulletLine(this.ctx, 10, this.player.playerPos.x+ this.player.playerSize.w, this.player.playerPos.y, 100, this.canvasSize, this.x, this.y, this.player.playerPos.x, this.player.playerPos.y ))
        if(this.bulletsLine.length >2){
            this.bulletsLine.splice(0, 1)

        }    
    },

    createPlayer(){
        this.player = new Player(this.ctx, 50, 80, 0, this.canvasSize.h-900, this.canvasSize, this.bulletsLine.angleRad, this.bulletsLine.playerPosY, this.bulletsLine.playerPosX, this.bulletsLine.xClick, this.bulletsLine.yClick)
    },
    clearAll(){
        this.ctx.clearRect(0,0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll(){
        // this.ball.draw() // dibujar un abola
        this.balls.forEach(elm => elm.draw())
        this.bonuses.forEach(elm => elm.draw())
        this.bullets.forEach(elm => elm.draw())
        this.player.draw(this.tilted) 
        this.player.drawLife()
        this.drawText()
        // this.bulletLine?.draw()
         this.bulletsLine.forEach(elm => elm.draw())
        //  console.log("this.bulletsLine.angleRad", this.bulletsLine[0]?.angleRad)

        


    }, 
    allCollision(){
        this.bullletsBallsCollision()
        this.playerColission()
        this.bulletsOut()
        this.bonusesOut()
        this.playerGettingBonus()


    },
    moveAll(){

        this.gravityMove()

        if(this.isMovingRight){
            this.moveRight()
        }        
        if(this.isMovingLeft){
            this.moveLeft()
        }

        this.balls.forEach(elm => elm.move())
        this.bullets.forEach(elm => elm.move())
        this.bonuses.forEach(elm => elm.move())

        
    },

    bulletsOut(){
        for(let i=0; i < this.bullets.length; i++){
            // console.log("number of bullets=", this.bullets.length)
            if(this.bullets[i].bulletPos.x > this.canvasSize.w || this.bullets[i].bulletPos.y < 0 || this.bullets[i].bulletPos.x < 0 ){
                this.bullets.splice(i, 1)
            }
        }

    },
    bonusesOut(){
        for(let i=0; i < this.bonuses.length; i++){
            if(this.bonuses[i].bonusesPos.y > this.canvasSize.h ){
                this.bonuses.splice(i, 1)
            }
        }

    },

    bullletsBallsCollision(){
        // console.log("---")
        // console.log(this.bullets)
        for(let i=0; i< this.balls.length; i++){
            //  console.log(this.balls[i])
            for(let j=0; j < this.bullets.length; j++){
              if (Math.abs(this.bullets[j].bulletPos.x - this.balls[i].ballPos.x) < (this.bullets[j].bulletSize + this.balls[i].ballSize) &&
               Math.abs(this.bullets[j].bulletPos.y - this.balls[i].ballPos.y) < (this.bullets[j].bulletSize + this.balls[i].ballSize)){
                // console.log("colission!!!!!")
                if(this.balls[i].ballSize <20){
                    this.balls.splice(i, 1)
                    this.bullets.splice(j, 1)
                    return
                }
            this.balls.push(new Ball(this.ctx, this.balls[i].ballSize/2, this.balls[i].ballPos.x, this.balls[i].ballPos.y, 100, this.canvasSize, 10)) 
            this.balls.push(new Ball(this.ctx, this.balls[i].ballSize/2, this.balls[i].ballPos.x, this.balls[i].ballPos.y, 100, this.canvasSize, -10)) 
                this.score += this.balls[i].ballSize
                if(this.score >= 100){
                    this.bonuses.push(new Bonus(this.ctx, 40, 40, this.balls[i].ballPos.x, this.balls[i].ballPos.y, 100, this.canvasSize, 10)) 

                }
                this.balls.splice(i, 1)
                this.bullets.splice(j, 1)
              }
            }
        }

    },
    playerColission(){
        for(let i=0; i< this.balls.length; i++){
            if (this.balls[i].ballPos.x + this.balls[i].ballSize > this.player.playerPos.x && this.balls[i].ballPos.y + this.balls[i].ballSize > this.player.playerPos.y 
                && this.balls[i].ballPos.x - this.balls[i].ballSize < this.player.playerPos.x + this.player.playerSize.w 
                ){
                    console.log("ayyyy daño!!!!!")
                    if(this.player.lifeBar <= 1){
                        return
                    }
                    this.player.lifeBar -= 33
            }
        }
    }, 
    playerGettingBonus(){
        for(let i=0; i< this.bonuses.length; i++){
            if (this.bonuses[i].bonusesPos.x + this.bonuses[i].bonusesSize.x > this.player.playerPos.x && this.bonuses[i].bonusesPos.y + this.bonuses[i].bonusesSize.y > this.player.playerPos.y 
                && this.bonuses[i].bonusesPos.x < this.player.playerPos.x + this.player.playerSize.w 
                ){
                    console.log("ayyyy alivio!!!!!")
                    if(this.player.lifeBar >= 300){
                        return
                    }
                    this.player.lifeBar += 33
            }
        }

    },

    drawText(){
        this.ctx.fillStyle = 'white'
        this.ctx.strokeStyle = 'black'
        this.ctx.font = '48px serif';
        this.ctx.strokeText(`Score ${this.score}`, 700, 80);
        this.ctx.fillText(`Score ${this.score}`, 700, 80);
    },

    gravityMove(){

        if(this.player.playerPos.y < this.canvasSize.h-this.player.playerSize.h ){
            this.inTheGround = false
            if(this.player.velocityY < 50){
                this.player.velocityY += this.player.playerPhysics.gravity
            }

            this.player.playerPos.y += this.player.velocityY
        }else {
            this.player.playerPos.y = this.canvasSize.h-this.player.playerSize.h
            this.inTheGround = true
        }
        
        // console.log('this.player.velocityY', this.player.velocityY)
        console.log('this.player.playerPos.y', this.player.playerPos.y)



    //     for(let i = 0; i< this.bulletsLine.length ; i++ ){
    //         const finalValueBulletLineFloor = this.canvasSize.h - (((this.player.playerPos.x - this.bulletsLine[i].bulletLinePos.x) * Math.tan(this.bulletsLine[i].angleRad)) + ( this.canvasSize.h - this.bulletsLine[i].bulletLinePos.y ))
    //         console.log("finalValueBulletLineFloor", finalValueBulletLineFloor)
    //     if(this.player.playerPos.x > this.bulletsLine[i].bulletLinePos.x &&  this.player.playerPos.x < this.bulletsLine[i].deltaX && this.player.playerPos.y + this.player.playerSize.h < finalValueBulletLineFloor- 20 ){
    //         this.tilted = true

    //         if(this.player.playerPos.y + this.player.playerSize.h < finalValueBulletLineFloor- 20 ){

    //         }


    //         this.player.playerPos.y += this.player.playerPhysics.gravity

    //         // const HowInsideBulletLinePlayerIsInX =  this.player.playerPos.x - this.bulletsLine[i].bulletLinePos.x
    //         // const bulletLineFloorLimit =   HowInsideBulletLinePlayerIsInX * Math.tan(this.bulletsLine[i].angleRad)
    //         // const floorToBulletLineFloor = bulletLineFloorLimit + ( this.canvasSize.h - this.bulletsLine[i].bulletLinePos.y )
            

    //         //  if(this.player.playerPos.x > this.bulletsLine[i].bulletLinePos.x &&  this.player.playerPos.x < this.bulletsLine[i].deltaX && this.player.playerPos.y > finalValueBulletLineFloor ){
    //         //     if(this.player.playerPos.y < this.canvasSize.h-this.player.playerSize.h){
    //         //         this.player.playerPos.y += this.player.playerPhysics.gravity
    //         //     }    
    //         //  }else{
    //         //     return
    //         //  }
    //     // if(this.player.playerPos.y + this.player.playerSize.h < finalValueBulletLineFloor- 20 ){
    //     //     this.player.playerPos.y += this.player.playerPhysics.gravity
    //     //  }else{
    //     //     return
    //     //  }
    // }else{
    //     this.tilted = false
    //     if(this.player.playerPos.y < this.canvasSize.h-this.player.playerSize.h){
    //         this.player.playerPos.y += this.player.playerPhysics.gravity
    //     }

    // }
    //     }

    //     if(this.player.playerPos.y < this.canvasSize.h-this.player.playerSize.h){
    //         this.player.playerPos.y += this.player.playerPhysics.gravity
    //     }
    //     // this.player.playerPhysics.gravity = 0.8
    },
    moveRight(){
        this.player.playerPos.x += 10
    },
    moveLeft(){
        this.player.playerPos.x -= 10
    },
    moveUp(){
        // if(this.goingUp=== true && this.framesCounter < this.prevFrameCounter +550){
        //    this.counter = this.counter +1
        //     console.log("this.counter", this.counter)
        //     this.player.playerPos.y -= 500
        //     this.goingUp = false
            
        // }
        console.log('moveup')
        // this.player.playerPhysics.gravity = this.player.playerPhysics.gravity*-1d
        // this.player.playerPos.y += this.player.playerPhysics.gravity
        // this.player.playerPos.y = this.player.playerPos.y -100w
        if(this.inTheGround){

            this.player.velocityY = -50
            console.log('this.player.velocityY--', this.player.velocityY)
            if(this.player.playerPos.y >= this.canvasSize.h-this.player.playerSize.h  ){
    
                this.player.playerPos.y = this.canvasSize.h-this.player.playerSize.h -10
            }
        }
    }
}