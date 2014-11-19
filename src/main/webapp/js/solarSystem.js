var planetUIDMap = {};
var planet2GlowColorMap = {};
var selectedCelestialBody;

function createCelestialBodies(){
    celestialBodyMap["sonne"] = new Planet(THREEx.Planets.createSun(), [POSITION_SUN,0,0], RADIUS_SUN, 0xffff00);
    celestialBodyMap["merkur"] = new Planet(THREEx.Planets.createMercury(), [POSITION_MERCURY, 0, 0], RADIUS_MERCURY, 0x8e5e12);
    celestialBodyMap["venus"] = new Planet(THREEx.Planets.createVenus(), [POSITION_VENUS, 0, 0], RADIUS_VENUS, 0x6d5438);
    celestialBodyMap["erde"] = new Planet(THREEx.Planets.createEarth(), [POSITION_EARTH,0,0], RADIUS_EARTH, 0x1d5570);
    celestialBodyMap["mars"] = new Planet(THREEx.Planets.createMars(), [POSITION_MARS, 0, 0], RADIUS_MARS, 0xab5c33);
    celestialBodyMap["jupiter"] = new Planet(THREEx.Planets.createJupiter(), [POSITION_SATURN, 0, 0], RADIUS_SATURN, 0xd9b180);
    celestialBodyMap["saturn"] = new Planet(THREEx.Planets.createSaturn(), [POSITION_JUPITER, 0, 0], RADIUS_JUPITER, 0xeacaa4);
    celestialBodyMap["uranus"] = new Planet(THREEx.Planets.createUranus(), [POSITION_URANUS, 0, 0], RADIUS_URANUS, 0x99b5c1);
    celestialBodyMap["neptun"] = new Planet(THREEx.Planets.createNeptune(), [POSITION_NEPTUNE, 0, 0], RADIUS_NEPTUNE, 0x5e80da);
    celestialBodyMap["pluto"] = new Planet(THREEx.Planets.createPluto(), [POSITION_PLUTO, 0, 0], RADIUS_PLUTO, 0xb3bfbf);
}

function fillPlanetUUIDMap(){
    $.each(celestialBodyMap, function(planetName, celestialBody) {
        planetUIDMap[celestialBody.getPlanet().geometry.uuid] = planetName;
    });
}

function fillPlanet2GlowColorMap(){
    $.each(celestialBodyMap, function(planetName, celestialBody) {
        planet2GlowColorMap[celestialBody.getPlanet().geometry.uuid] = planetName;
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
        planet.showGlowMesh();
    });
}

function navigationButtonsMouseLeave(navigationButtons){
    navigationButtons.mouseleave(function(event) {
        var celestialBodyTarget = event.target.innerHTML.toLowerCase();
        var planet = celestialBodyMap[celestialBodyTarget];
        planet.hideGlowMesh();
    });
}


function onDocumentMouseMove( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function setIntersectedUUID(intersectedUUID) {
    var selectedPlanet = planetUIDMap[intersectedUUID];

    if(typeof selectedPlanet != 'undefined'){
        selectedCelestialBody = celestialBodyMap[selectedPlanet];
        selectedCelestialBody.showGlowMesh();
    }else{
        selectedCelestialBody.hideGlowMesh();
    }
}

