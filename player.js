class Player{
    constructor(ctx,playerWidth, playerheight, playerPosX, playerPosY, canvasSize){
        this.ctx = ctx
        this.playerSize ={ w: playerWidth, h: playerheight}
        this.playerPos = { x: playerPosX, y: playerPosY}
        this.canvasSize = canvasSize
        // this.ballCircle = ballCircle
        this.playerVel = {
            x: 10,
            y:10
        }
        this.playerPhysics = {
            gravity: 3
        } 
        this.init()
    }

        init(){
    //    console.log('iniciada')
    //    console.log('this.ballPos', this.ballPos)
        }

        draw(){
            this.ctx.beginPath();
            this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
            this.ctx.stroke();
            
        }
        gravityMove(){
            console.log("gravity move")
            if(this.playerPos.y < this.canvasSize.h-this.playerSize.h){
              

                console.log("paso el if, o sea debeia caer")
                this.playerPos.y += this.playerPhysics.gravity
            }else {
                console.log("enter de gravitywwww")
                console.log("playerpoY", this.playerPos.y)
                console.log(" canvasSize -playerSize", this.canvasSize.h-this.playerSize.h)
            }
       


        }
        moveRight(){
            this.playerPos.x += 10
        }
        moveLeft(){
            this.playerPos.x -= 10
        }
        moveUp(){
            this.playerPos.y -= 100
        }


}