class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.003,
            length: 50
        }
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.launcher);
    }
    display(){
        if(this.launcher.bodyA) {
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.launcher.bodyA = null 
    }
};
