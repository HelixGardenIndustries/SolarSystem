/*
 Three.js "tutorials by example"
 Author: Lee Stemkoski
 Date: July 2013 (three.js v59dev)
 */

// MAIN

// standard global variables
var container, scene, camera, renderer, controls, stats;
var keyboard = new THREEx.KeyboardState();
var celestialBodyMap = {};
var clock = new THREE.Clock();

// custom global variables
var mesh;

window.onload = function(){
    init();
    createCelestialBodies();
    addCelestialBodiesToScene();
    animate();
}

function init()
{
    celestialBodyMap["sun"] = new Planet(THREEx.Planets.createSun(), [POSITION_SUN,0,0], RADIUS_SUN, getRandomFloatNumberFromInterval());
    celestialBodyMap["mercury"] = new Planet(THREEx.Planets.createMercury(), [POSITION_MERCURY, 0, 0], RADIUS_MERCURY, getRandomFloatNumberFromInterval());
    celestialBodyMap["venus"] = new Planet(THREEx.Planets.createVenus(), [POSITION_VENUS, 0, 0], RADIUS_VENUS, getRandomFloatNumberFromInterval());
    celestialBodyMap["earth"] = new Planet(THREEx.Planets.createEarth(), [POSITION_EARTH,0,0], RADIUS_EARTH, getRandomFloatNumberFromInterval());
    celestialBodyMap["mars"] = new Planet(THREEx.Planets.createMars(), [POSITION_MARS, 0, 0], RADIUS_MARS, getRandomFloatNumberFromInterval());
    celestialBodyMap["jupiter"] = new Planet(THREEx.Planets.createJupiter(), [POSITION_SATURN, 0, 0], RADIUS_SATURN, getRandomFloatNumberFromInterval());
    celestialBodyMap["saturn"] = new Planet(THREEx.Planets.createSaturn(), [POSITION_JUPITER, 0, 0], RADIUS_JUPITER, getRandomFloatNumberFromInterval());
    celestialBodyMap["uranus"] = new Planet(THREEx.Planets.createUranus(), [POSITION_URANUS, 0, 0], RADIUS_URANUS, getRandomFloatNumberFromInterval());
    celestialBodyMap["neptune"] = new Planet(THREEx.Planets.createNeptune(), [POSITION_NEPTUNE, 0, 0], RADIUS_NEPTUNE, getRandomFloatNumberFromInterval());
    celestialBodyMap["pluto"] = new Planet(THREEx.Planets.createPluto(), [POSITION_PLUTO, 0, 0], RADIUS_PLUTO, getRandomFloatNumberFromInterval());

    // SCENE
    scene = new THREE.Scene();
    // CAMERA
    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    scene.add(camera);
    camera.position.set(0,150,400);
    camera.lookAt(scene.position);
    // RENDERER
    if ( Detector.webgl )
        renderer = new THREE.WebGLRenderer( {antialias:true} );
    else
        renderer = new THREE.CanvasRenderer();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container = document.getElementById('canvas');
    container.appendChild( renderer.domElement );
    // EVENTS
    THREEx.WindowResize(renderer, camera);
    THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
    // CONTROLS
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    getStatsWindow();
    scene.add(getMainLight());
    scene.add(getSkybox());
}

// FUNCTIONS

function getSkybox() {
    var skyBoxGeometry = new THREE.BoxGeometry(20000, 20000, 20000);
    var skyBoxMaterial = new THREE.MeshBasicMaterial();
    skyBoxMaterial.map = loadTexture("images/galaxy_starfield.png");
    skyBoxMaterial.side = THREE.DoubleSide;
    return new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);;
}
function getMainLight() {
    return new THREE.AmbientLight(0xfffffff);
}
function getStatsWindow() {
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.bottom = '0px';
    stats.domElement.style.zIndex = 100;
    container.appendChild( stats.domElement );
}

function animate()
{
    requestAnimationFrame( animate );
    render();
    update();
}

function update()
{
    if ( keyboard.pressed("z") )
    {
        // do something
    }
    updateCelestialBodies();
    controls.update();
    stats.update();
}

function render()
{
    renderer.render( scene, camera );
}
