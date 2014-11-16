var outlineMesh1;
function Planet(planet, positionArray, radius) {
    this.planet = planet;
    this.radius = radius;
    this.positionArray = positionArray;
    this.planet.position.x = positionArray[0];
    this.planet.position.y = positionArray[1];
    this.planet.position.z = positionArray[2];
    this.planet.scale.set(radius, radius, radius);
    this.distanceAngle = getRandomFloatNumberFromInterval();
    this.radian = Math.PI;
}

Planet.prototype = {

    getPlanet: function(){
        return this.planet;
    },

    updatePosition: function(){
        this.radian += this.distanceAngle;
        this.getPlanet().position.x = this.positionArray[0] * Math.sin(this.getRadian());
        this.getPlanet().position.z = this.positionArray[0] * Math.cos(this.getRadian());
    },

    updateRotation: function(){
        this.getPlanet().rotation.y += 1 / 1024 * 5;
    },

    getRadian: function(){
        return this.radian;
    },

    updateOutlinePosition: function(){
        this.outlineMesh.position.x = this.getPlanet().position.x;
        this.outlineMesh.position.z = this.getPlanet().position.z;
    },

    setOutlineMesh: function (outlineMesh) {
        this.outlineMesh = outlineMesh;
        //scene.add(this.outlineMesh);
    },

    showOutlineMesh: function(){
        scene.add(this.outlineMesh);
    },

    update: function(){
        this.updatePosition();
        this.updateRotation();
        this.updateOutlinePosition();
    }
};
