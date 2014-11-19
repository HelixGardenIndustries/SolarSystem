
function Planet(id, planet, positionArray, radius, meshGlowColor) {
    this.id = id;
    this.planet = planet;
    this.radius = radius;
    this.positionArray = positionArray;
    this.planet.position.x = positionArray[0];
    this.planet.position.y = positionArray[1];
    this.planet.position.z = positionArray[2];
    this.planet.scale.set(radius, radius, radius);
    this.distanceAngle = getRandomFloatNumberFromInterval();
    this.radian = Math.PI;
    this.meshGlowColor = meshGlowColor;
}

Planet.prototype = {
    glowMesh : null,

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

    setOutlineMesh: function () {
        scene.add(this.outlineMesh);
    },

    showGlowMesh: function(){

        if(!this.glowMesh){
            var spriteMaterial = getGlowMesh(this.meshGlowColor);
            this.glowMesh = new THREE.Sprite( spriteMaterial );
            this.glowMesh.scale.set(400, 400, 1.0);
         };

        this.planet.add(this.glowMesh); // this centers the glow at the mesh
    },

    hideGlowMesh: function(){
        this.planet.remove(this.glowMesh); // this centers the glow at the mesh
    },

    update: function(){
        this.updatePosition();
        this.updateRotation();
    },

    getId: function(){
        return this.id;
    }

};
