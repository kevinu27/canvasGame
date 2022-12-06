class Bonus{
    constructor(ctx, bonusesSizeX,bonusesSizeY, bonusesPosX, bonusesPosY, bonusesCircle, canvasSize, bonusesVel){
        this.ctx = ctx
        this.bonusesSize = {x: bonusesSizeX, y: bonusesSizeY}
        this.bonusesPos = { x: bonusesPosX, y: bonusesPosY}
        this.canvasSize = canvasSize
        this.bonusesCircle =bonusesCircle
        this.bonusesVel = {
            x: bonusesVel,
            y:3
        }
        this.bonusesPhysics = {
            gravity: 0.8
        } 
        this.init()
    }

        init(){
    //    console.log('iniciada')
    //    console.log('this.bonusesPos', this.bonusesPos)
        }

        draw(){
            this.ctx.fillStyle = 'yellow'
            this.ctx.fillRect(this.bonusesPos.x, this.bonusesPos.y, this.bonusesSize.x, this.bonusesSize.y)
            this.ctx.strokeStyle = 'white'
            this.ctx.strokeRect(this.bonusesPos.x, this.bonusesPos.y, this.bonusesSize.x, this.bonusesSize.y)
            this.ctx.lineWidth = 5
            this.ctx.strokeStyle = 'black'
            this.ctx.strokeRect(this.bonusesPos.x, this.bonusesPos.y, this.bonusesSize.x, this.bonusesSize.y)
            this.ctx.lineWidth = 7
        }
        move(){
             this.bonusesPos.y += this.bonusesVel.y
            this.bonusesVel.y += this.bonusesPhysics.gravity


        }


}