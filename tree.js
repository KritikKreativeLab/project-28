class Tree{
    constructor(x, y, w, h){
        var options = {
            isStatic: true,
            restitution:0,
            friction: 1
        };
            this.x=x;
            this.y=y;
            this.width=w;
            this.height=h;
            this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
            this.image=loadImage("images/tree.png");
            World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}