class Detail {
    constructor() {
        this.body = Bodies.rectangle(400, 400, 600, 600);
        this.width = 600;
        this.height = 600;
        World.add(world, this.body);
    }

    display() {
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        text ("I am a dancer",500,500);
    }
}