class Bullet{
    constructor(ctx, bulletSize, bulletPosX, bulletPosY, bulletCircle, canvasSize, xClick, yClick, playerPosX, playerposY){
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
        this.xClick = xClick
        this.yClick = yClick
        this.playerPosX = playerPosX
        this.playerPosY = playerposY
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
            // console.log("canvas size= ", this.canvasSize)
            // console.log("this.playerposy",  this.playerposY)
        }

        move(){

            let angle = Math.atan2( this.playerPosY - this.yClick , this.xClick - this.playerPosX) * 180 / Math.PI
            const angleRad = Math.atan2( this.playerPosY - this.yClick , this.xClick - this.playerPosX) 
            // console.log("angulo", angle)
             console.log("angleRad", angleRad)

            const deltaX = Math.cos(angleRad)*30
            const deltaY = Math.sin(angleRad)*30*-1
            this.bulletPos.x += deltaX
            this.bulletPos.y += deltaY
         

        }


}