class Ground {
    constructor (x, y, wdith, height) {
      var options = {
       'isStatic': true,
       'density': 0.5
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options)
      this.width = wdith
      this.height = height
      World.add(world, this.body)

    }

    display(){
    var pos = this.body.position
    rectMode(CENTER);
    fill("brown")
    rectangle(position.x, position.y, this.width, this.height)

    }
}