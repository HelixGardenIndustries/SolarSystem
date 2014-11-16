function createCelestialBodies(){
    celestialBodyMap["sun"] = new Planet(THREEx.Planets.createSun(), [POSITION_SUN,0,0], RADIUS_SUN);
    celestialBodyMap["mercury"] = new Planet(THREEx.Planets.createMercury(), [POSITION_MERCURY, 0, 0], RADIUS_MERCURY);
    celestialBodyMap["venus"] = new Planet(THREEx.Planets.createVenus(), [POSITION_VENUS, 0, 0], RADIUS_VENUS);
    celestialBodyMap["earth"] = new Planet(THREEx.Planets.createEarth(), [POSITION_EARTH,0,0], RADIUS_EARTH);
    celestialBodyMap["mars"] = new Planet(THREEx.Planets.createMars(), [POSITION_MARS, 0, 0], RADIUS_MARS);
    celestialBodyMap["jupiter"] = new Planet(THREEx.Planets.createJupiter(), [POSITION_SATURN, 0, 0], RADIUS_SATURN);
    celestialBodyMap["saturn"] = new Planet(THREEx.Planets.createSaturn(), [POSITION_JUPITER, 0, 0], RADIUS_JUPITER);
    celestialBodyMap["uranus"] = new Planet(THREEx.Planets.createUranus(), [POSITION_URANUS, 0, 0], RADIUS_URANUS);
    celestialBodyMap["neptune"] = new Planet(THREEx.Planets.createNeptune(), [POSITION_NEPTUNE, 0, 0], RADIUS_NEPTUNE);
    celestialBodyMap["pluto"] = new Planet(THREEx.Planets.createPluto(), [POSITION_PLUTO, 0, 0], RADIUS_PLUTO);
}

function addCelestialBodiesToScene(){

    $.each(celestialBodyMap, function(planetName, celestialBody) {
        scene.add(celestialBody.getPlanet());

        var sphereGeometry =  new THREE.SphereGeometry(50, 32, 16);
        var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.BackSide } );
        var outlineMesh1 = new THREE.Mesh( sphereGeometry, outlineMaterial1 );
        outlineMesh1.position.set(celestialBody.getPlanet().position[0], 0, 0);
        outlineMesh1.scale.multiplyScalar(1.1);

        celestialBody.setOutlineMesh(outlineMesh1);
    });

    $( "#celestialBodyNavigation li" ).mouseover(function(event) {
        var celestialBodyTarget = event.target.innerHTML.toLowerCase();
        var planet = celestialBodyMap[celestialBodyTarget];
        planet.update();
        //.showOutlineMesh();
    });
}

function updateCelestialBodies(){
    $.each(celestialBodyMap, function(planetName, celestialBody) {
        celestialBody.update();
    });
}




