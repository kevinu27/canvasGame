class Player{
    constructor(ctx,playerWidth, playerheight, playerPosX, playerPosY, canvasSize, bulletLineAngle, bulletLineStartX, bulletLineStartY, bulletLinesEndX, bulletLinesEndY){
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
            gravity: 20
        } 
        this.lifeBar = 300
        this.bulletLineAngle = bulletLineAngle
        this.bulletLineStartX = bulletLineStartX
        this.bulletLineStartY = bulletLineStartY
        this.bulletLinesEndX = bulletLinesEndX
        this.bulletLinesEndY = bulletLinesEndY
        
        this.init()
    }

        init(){
    //    console.log('iniciada')
    //    console.log('this.ballPos', this.ballPos)
        }
        drawLife() {
            if(this.lifeBar >= 0){
                this.ctx.fillStyle = 'green'
            this.ctx.fillRect(80, 30, this.lifeBar, 40)
            }


            // this.ctx.fillStyle = 'green'
            // this.ctx.fillRect(80, 30, this.lifeBar, 40)
            this.ctx.strokeStyle = 'white'
            this.ctx.strokeRect(80, 30, 300, 40)
            this.ctx.lineWidth = 5
            this.ctx.strokeStyle = 'black'
            this.ctx.strokeRect(80, 30, 300, 40)
            this.ctx.lineWidth = 7
            // this.ctx.drawImage(this.imageFavicon, 30, 30, 40, 40)
    
        }

        draw(){
            this.ctx.beginPath();
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
            this.ctx.stroke();
            
        }
        gravityMove(){
            // console.log("bulletLineAngle en player", this.bulletLineAngle)

            if(this.playerPos.y < this.canvasSize.h-this.playerSize.h){
                this.playerPos.y += this.playerPhysics.gravity
            }
            // if(this.playerPos.x > ){
            //     console.log("temp")
            // }


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