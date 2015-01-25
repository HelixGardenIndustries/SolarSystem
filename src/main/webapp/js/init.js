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
var projector, mouse = { x: 0, y: 0 }, intersectedObject;
var clock = new THREE.Clock();

// custom global variables
var mesh;

window.onload = function(){
    init();
    createCelestialBodies();
    addCelestialBodiesToScene();
    addGeneralEventListener();
    fillPlanetUUIDMap();
    animate();
}

function init(){

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

    // initialize object to perform world/screen calculations
    projector = new THREE.Projector();

    // when the mouse moves, call the given function
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    scene.add(getMainLight());
    scene.add(getSkybox());
}

// FUNCTIONS

function getSkybox() {
    var skyBoxGeometry = new THREE.BoxGeometry(20000, 20000, 20000);
    var skyBoxMaterial = new THREE.MeshBasicMaterial();
    skyBoxMaterial.map = loadTexture("images/galaxy_starfield.png");
    skyBoxMaterial.side = THREE.DoubleSide;
    return new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
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
    // find intersections

    // create a Ray with origin at the mouse position
    //   and direction into the scene (camera direction)
    var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
    projector.unprojectVector( vector, camera );
    var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    // create an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects( scene.children );

    // intersectedObject = the object in the scene currently closest to the camera
    //		and intersected by the Ray projected from the mouse position

    // if there is one (or more) intersections
    if ( intersects.length > 0 )
    {
        // if the closest object intersected is not the currently stored intersection object
        if ( intersects[ 0 ].object != intersectedObject )
        {
            if ( intersectedObject ){
                intersectedObject.material.color.setHex( intersectedObject.currentHex );}
            // store reference to closest object as current intersection object
            intersectedObject = intersects[ 0 ].object;
            // store color of closest object (for later restoration)
            // set a new color for closest object
            // restore previous intersection object (if it exists) to its original color
            processCelestialBodySelection(intersectedObject.geometry.uuid);
        }
    }
    else // there are no intersections
    {
        // restore previous intersection object (if it exists) to its original color
        if ( intersectedObject )
            intersectedObject.material.color.setHex( intersectedObject.currentHex );
        // remove previous intersection object reference
        //     by setting current intersection object to "nothing"
        intersectedObject = null;
    }

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