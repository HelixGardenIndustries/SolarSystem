
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
    outlineMesh : null,

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
        if(this.outlineMesh == null){
                this.outlineMesh = this.getOutlineMesh();
        }

        this.outlineMesh.position.x = this.getPlanet().position.x;
        this.outlineMesh.position.z = this.getPlanet().position.z;
    },

    setOutlineMesh: function () {
        scene.add(this.outlineMesh);
    },

    showOutlineMesh: function(){
        if(this.outlineMesh == null){
            this.outlineMesh = this.getOutlineMesh();
        }
        scene.add(this.outlineMesh);
    },

    removeOutlineMesh: function(){
    console.log("sdfds");
        this.outlineMesh.scale.multiplyScalar(0.5);
    },

    update: function(){
        this.updatePosition();
        this.updateRotation();
        this.updateOutlinePosition();
    },

    getOutlineMesh: function(){
        var sphereGeometry =  new THREE.SphereGeometry(50, 32, 16);
        var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.BackSide } );
        var outlineMesh = new THREE.Mesh( sphereGeometry, outlineMaterial1 );
        outlineMesh.position.set(this.getPlanet().position[0], 0, 0);
        outlineMesh.scale.multiplyScalar(1.1);
        return outlineMesh;
    }
};
