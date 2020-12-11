class Roof {
    constructor(x, y, width, height) {
    var options = {
        'isStatic': true,
        'density': 0.5
    }
    
    this.body = Bodies.rectange(x, y, wdith, height, options)
    this.wdith = width
    this.height = height
    World.add(world, this.body)
    }

    display() {
    var pos = this.body.position
    rectMode(CENTER);
    fill("gray")
    rectange(position.x, position.y, this.width, this.height)

    }

}