class Bullet{
    constructor(ctx, bulletSize, bulletPosX, bulletPosY, bulletCircle, canvasSize){
        this.ctx = ctx
        this.bulletSize = bulletSize
        this.bulletPos = { x: bulletPosX, y: bulletPosY}
        this.canvasSize = canvasSize
        this.bulletCircle =bulletCircle
        this.bulletVel = {
            x: 10,
            y:10
        }
        this.bulletPhysics = {
            gravity: 0.8
        } 
        this.init()
    }

        init(){
    //    console.log('iniciada')
    //    console.log('this.bulletPos', this.bulletPos)
        }

        draw(){
            this.ctx.beginPath();
            this.ctx.arc(this.bulletPos.x, this.bulletPos.y , this.bulletSize, 0, Math.PI*2);
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fill();
            this.ctx.closePath();
            console.log("canvas size= ", this.canvasSize)
        }
        move(){
            this.bulletPos.x += this.bulletVel.x
            // this.bulletVel.y += this.bulletPhysics.gravity
            // this.bulletPos.y += this.bulletVel.y
            // if(this.bulletPos.y > this.canvasSize.h){
            //     this.bulletVel.y = this.bulletVel.y*-1
            // }
            // if(this.bulletPos.x > this.canvasSize.w){
            //     this.bulletVel.x = this.bulletVel.x*-1
            // }

        }


}