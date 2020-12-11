class rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options= {
            bodyA:body1,
            bodyB:body2,
            stiffness: 0.4,
            length: 250,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options);
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
}