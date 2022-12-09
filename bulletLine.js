class BulletLine{
    constructor(ctx, bulletLineSize, bulletLinePosX, bulletLinePosY, bulletLineCircle, canvasSize, xClick, yClick, playerPosX, playerposY){
        this.ctx = ctx
        this.bulletLineSize = bulletLineSize
        this.bulletLinePos = { x: bulletLinePosX, y: bulletLinePosY}
        this.canvasSize = canvasSize
        this.bulletLineCircle =bulletLineCircle
        this.bulletLineVel = {
            x: 10,
            y:10
        }
        this.bulletLinePhysics = {
            gravity: 0.8
        } 
        this.xClick = xClick
        this.yClick = yClick
        this.playerPosX = playerPosX
        this.playerPosY = playerposY
        this.angleRad =Math.atan2( this.playerPosY - this.yClick , this.xClick - this.playerPosX)
        this.deltaX = this.bulletLinePos.x + Math.cos(this.angleRad)*1000
        this.deltaY = this.bulletLinePos.y - Math.sin(this.angleRad)*1000
        this.init()
    }

        init(){
    //    console.log('iniciada')
    //    console.log('this.bulletLinePos', this.bulletLinePos)
        }

        draw(){
            // console.log("draw del bulletLine")
            // let angle = Math.atan2( this.playerPosY - this.yClick , this.xClick - this.playerPosX) * 180 / Math.PI
            // console.log("------angleread del constructor", this.angleRad)
            const angleRad = Math.atan2( this.playerPosY - this.yClick , this.xClick - this.playerPosX) 
            // // console.log("angulo", angle)
            //  console.log("angleRad BulletLine", angleRad)

            // const deltaX = this.bulletLinePos.x + Math.cos(angleRad)*1000
            // const deltaY = this.bulletLinePos.y - Math.sin(angleRad)*1000

            this.ctx.beginPath(); // Start a new path
            this.ctx.moveTo(this.bulletLinePos.x, this.bulletLinePos.y); // Move the pen to (30, 50)
            this.ctx.lineTo(this.deltaX, this.deltaY); // Draw a line to (150, 100)
            // this.ctx.lineTo(deltaX+10, deltaY+10); // Draw a line to (150, 100)
            this.ctx.stroke(); // Render the path
        }

        // move(){

        // }


}