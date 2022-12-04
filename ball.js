class Ball{
    constructor(ctx, ballSize, ballPosX, ballPosY, canvasSize, ballCircle){
         this.ctx = ctx
         this.ballSize = ballSize
         this.ballPos = { x: ballPosX, y: ballPosY}
         this.canvasSize = canvasSize
         this.ballCircle =ballCircle

         this.init()
    }

        init(){
       console.log('iniciada')
       console.log('this.ballPos', this.ballPos)
        }

        draw(){
            this.ctx.beginPath();
            this.ctx.arc(this.ballPos.x, this.ballPos.y , this.ballSize, 0, Math.PI*2);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
            console.log("ball")
        }
        move(){
            this.ballPos.x += 10
            this.ballPos.y += 10

        }


}