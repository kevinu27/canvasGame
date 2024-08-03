class Ball{
    constructor(ctx, ballSize, ballPosX, ballPosY, ballCircle, canvasSize, ballVelX, ballVelY=10){
        this.ctx = ctx
        this.ballSize = ballSize
        this.ballPos = { x: ballPosX, y: ballPosY}
        this.canvasSize = canvasSize
        this.ballCircle =ballCircle
        this.ballVel = {
            x: ballVelX,
            y:ballVelY
        }
        this.ballPhysics = {
            gravity: 0.8
        } 
        this.init()
    }

        init(){
    //    console.log('iniciada')
    //    console.log('this.ballPos', this.ballPos)
        }

        draw(){
            this.ctx.beginPath();
            this.ctx.arc(this.ballPos.x, this.ballPos.y , this.ballSize+5, 0, Math.PI*2);
            this.ctx.fillStyle = "#000000";
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.beginPath();
            this.ctx.arc(this.ballPos.x, this.ballPos.y , this.ballSize, 0, Math.PI*2);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
            // console.log("canvas size= ", this.canvasSize)
        }
        move(){
            this.ballPos.x += this.ballVel.x
            this.ballVel.y += this.ballPhysics.gravity
            this.ballPos.y += this.ballVel.y
            if(this.ballPos.y > this.canvasSize.h - this.ballSize){
                this.ballVel.y = this.ballVel.y*-1
            }
            if(this.ballPos.x > this.canvasSize.w - this.ballSize){
                this.ballVel.x = this.ballVel.x*-1
            }
            if(this.ballPos.x < this.ballSize){
                this.ballVel.x = this.ballVel.x*-1
            }

        }


}