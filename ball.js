class Ball{
    constructor(ctx, ballSize, ballPosX, ballPosY, ballCircle, canvasSize){
        this.ctx = ctx
        this.ballSize = ballSize
        this.ballPos = { x: ballPosX, y: ballPosY}
        this.canvasSize = canvasSize
        this.ballCircle =ballCircle
        this.ballVel = {
            x: 10,
            y:10
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
            this.ctx.arc(this.ballPos.x, this.ballPos.y , this.ballSize, 0, Math.PI*2);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
            console.log("canvas size= ", this.canvasSize)
        }
        move(){
            this.ballPos.x += this.ballVel.x
            this.ballVel.y += this.ballPhysics.gravity
            this.ballPos.y += this.ballVel.y
            if(this.ballPos.y > this.canvasSize.h){
                this.ballVel.y = this.ballVel.y*-1
            }
            if(this.ballPos.x > this.canvasSize.w){
                this.ballVel.x = this.ballVel.x*-1
            }

        }


}