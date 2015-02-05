var planetUIDMap = {};
var currentlySelectedCelestialBody;

function createCelestialBodies(){

    // Place camera on x axis
    camera.position.set(1000,0,0);
    //camera.up = new THREE.Vector3(0,0,1);
    camera.lookAt(new THREE.Vector3(0,0,0));

    celestialBodyMap["sonne"] = new Planet("sonne", THREEx.Planets.createSun(), [POSITION_SUN,0,0], RADIUS_SUN, 0xffff00);
    celestialBodyMap["merkur"] = new Planet("merkur", THREEx.Planets.createMercury(), [POSITION_MERCURY, 0, 0], RADIUS_MERCURY, 0x8e5e12);
    celestialBodyMap["venus"] = new Planet("venus", THREEx.Planets.createVenus(), [POSITION_VENUS, 0, 0], RADIUS_VENUS, 0x6d5438);
    celestialBodyMap["erde"] = new Planet("erde", THREEx.Planets.createEarth(), [POSITION_EARTH,0,0], RADIUS_EARTH, 0x1d5570);
    celestialBodyMap["mars"] = new Planet("mars", THREEx.Planets.createMars(), [POSITION_MARS, 0, 0], RADIUS_MARS, 0xab5c33);
    celestialBodyMap["jupiter"] = new Planet("jupiter", THREEx.Planets.createJupiter(), [POSITION_SATURN, 0, 0], RADIUS_SATURN, 0xd9b180);
    celestialBodyMap["saturn"] = new Planet("saturn", THREEx.Planets.createSaturn(), [POSITION_JUPITER, 0, 0], RADIUS_JUPITER, 0xeacaa4);
    celestialBodyMap["uranus"] = new Planet("uranus", THREEx.Planets.createUranus(), [POSITION_URANUS, 0, 0], RADIUS_URANUS, 0x99b5c1);
    celestialBodyMap["neptun"] = new Planet("neptun", THREEx.Planets.createNeptune(), [POSITION_NEPTUNE, 0, 0], RADIUS_NEPTUNE, 0x5e80da);
    celestialBodyMap["pluto"] = new Planet("pluto", THREEx.Planets.createPluto(), [POSITION_PLUTO, 0, 0], RADIUS_PLUTO, 0xb3bfbf);
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
        planet.showGlowMesh();
        showInfoPanel(planet);
    });
}

function navigationButtonsMouseLeave(navigationButtons){
    navigationButtons.mouseleave(function(event) {
        var celestialBodyTarget = event.target.innerHTML.toLowerCase();
        var planet = celestialBodyMap[celestialBodyTarget];
        planet.hideGlowMesh();
        hideInfoPanel();
    });
}


function onDocumentMouseMove( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function processCelestialBodySelection(intersectedUUID) {
    var selectedPlanet = planetUIDMap[intersectedUUID];
    console.log(selectedPlanet);

    if(typeof selectedPlanet != 'undefined'){
        currentlySelectedCelestialBody = celestialBodyMap[selectedPlanet];
        currentlySelectedCelestialBody.showGlowMesh();
        setButtonSelected(currentlySelectedCelestialBody.getId());
    }else{
        currentlySelectedCelestialBody.hideGlowMesh();
        setButtonUnSelected(currentlySelectedCelestialBody.getId());
    }
}

function setButtonSelected(id){
    $("#" + id).addClass("hovered");
}

function setButtonUnSelected(id){
    $("#" + id).removeClass("hovered");
}

function showInfoPanel(celestialBody){

    // the celestial body data, iterate through json data and set the values
    $.each(getDataForCelestialBodyFromJsonById(celestialBody.id), function(key, value) {
        //display the key and value pair
        $("#" + key).text(value);
        // set the text color of the heading
        setColorToElements("#infoPanel h1", "background-color", celestialBody.meshGlowColor.toString(16));
        setColorToElements("#infoPanel", "border-color", celestialBody.meshGlowColor.toString(16));
        setColorToElements(".block", "border-color", celestialBody.meshGlowColor.toString(16));
    });

    $("#infoPanel").show();
}

function setColorToElements(selector, property, color){
    $(selector).css(property, color);
}

function getDataForCelestialBodyFromJsonById(id){
    for(var o in info){
        // loop over json data to find out the data for select planet
        if(info[o].id == id){
            return info[o].data;
            // the celestial body data
        }
    }
}

function hideInfoPanel(){

    $.each($("#celestialBodyNavigation").find("li"), function() {
        setButtonUnSelected($(this).attr("id"));
    });

    console.log("hideInfoPanel");
    //$("#infoPanel").hide();
}