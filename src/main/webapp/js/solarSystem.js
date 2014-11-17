var planetUIDMap = {};

function createCelestialBodies(){
    celestialBodyMap["sonne"] = new Planet(THREEx.Planets.createSun(), [POSITION_SUN,0,0], RADIUS_SUN);
    celestialBodyMap["merkur"] = new Planet(THREEx.Planets.createMercury(), [POSITION_MERCURY, 0, 0], RADIUS_MERCURY);
    celestialBodyMap["venus"] = new Planet(THREEx.Planets.createVenus(), [POSITION_VENUS, 0, 0], RADIUS_VENUS);
    celestialBodyMap["erde"] = new Planet(THREEx.Planets.createEarth(), [POSITION_EARTH,0,0], RADIUS_EARTH);
    celestialBodyMap["mars"] = new Planet(THREEx.Planets.createMars(), [POSITION_MARS, 0, 0], RADIUS_MARS);
    celestialBodyMap["jupiter"] = new Planet(THREEx.Planets.createJupiter(), [POSITION_SATURN, 0, 0], RADIUS_SATURN);
    celestialBodyMap["saturn"] = new Planet(THREEx.Planets.createSaturn(), [POSITION_JUPITER, 0, 0], RADIUS_JUPITER);
    celestialBodyMap["uranus"] = new Planet(THREEx.Planets.createUranus(), [POSITION_URANUS, 0, 0], RADIUS_URANUS);
    celestialBodyMap["neptun"] = new Planet(THREEx.Planets.createNeptune(), [POSITION_NEPTUNE, 0, 0], RADIUS_NEPTUNE);
    celestialBodyMap["pluto"] = new Planet(THREEx.Planets.createPluto(), [POSITION_PLUTO, 0, 0], RADIUS_PLUTO);
}

function fillPlanetUUIDMap(){

    $.each(celestialBodyMap, function(planetName, celestialBody) {
        planetUIDMap[celestialBody.getPlanet().geometry.uuid] = planetName;
    });
}

function addCelestialBodiesToScene(){

    $.each(celestialBodyMap, function(planetName, celestialBody) {
        scene.add(celestialBody.getPlanet());
    });
}

function updateCelestialBodies(){
    $.each(celestialBodyMap, function(planetName, celestialBody) {
        celestialBody.update();
    });
}

function addGeneralEventListener(){
    var navigationButtons = $("#celestialBodyNavigation").find("li");
    navigationButtonsMouseEnter(navigationButtons);
    navigationButtonsMouseLeave(navigationButtons);
}

function navigationButtonsMouseEnter(navigationButtons){
    navigationButtons.mouseenter(function(event) {
        var celestialBodyTarget = event.target.innerHTML.toLowerCase();
        var planet = celestialBodyMap[celestialBodyTarget];
        planet.showOutlineMesh();
    });
}

function navigationButtonsMouseLeave(navigationButtons){
    navigationButtons.mouseleave(function(event) {
        var celestialBodyTarget = event.target.innerHTML.toLowerCase();
        var planet = celestialBodyMap[celestialBodyTarget];
        planet.removeOutlineMesh();
    });
}


function onDocumentMouseMove( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function setIntersectedUUID(intersectedUUID) {
    var selectedPlanet = planetUIDMap[intersectedUUID];

    if(typeof selectedPlanet != 'undefined'){
        var celestialBody = celestialBodyMap[selectedPlanet];
        celestialBody.showOutlineMesh();
    }else{

        $.each(celestialBodyMap, function(planetName, celestialBody) {
            celestialBody.removeOutlineMesh();
        });
    }
}

