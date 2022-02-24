class Rope{
    constructor(obj1, obj2){
        var constraint_options = {
            bodyA: obj1,
            pointB: obj2,
            stiffness: 1.2,
            length: 250
        }

        this.pointB = obj2;
        this.marcaolho = Constraint.create(constraint_options);

        World.add(world, this.marcaolho);
    }

    display(){
            var pos1 = this.marcaolho.bodyA.position;
            var pos2 = this.pointB;	
            strokeWeight(2);
            line(pos1.x, pos1.y, pos2.x, pos2.y);
    }

}