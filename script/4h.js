import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js"

let scene, camera, renderer, controls, pointlight;
let linePoint = [];
function calculatePointLine(linePoint) {
    const points = [];
    points.push(new THREE.Vector3(linePoint[0], linePoint[1], linePoint[2]));
    points.push(new THREE.Vector3(linePoint[3], linePoint[4], linePoint[5]));
    line(points);
}

function calculatePointTube(linePoint) {
    const tubePoints = [];
    tubePoints.push(new THREE.Vector3(linePoint[0], linePoint[1], linePoint[2]));
    tubePoints.push(new THREE.Vector3(linePoint[3], linePoint[4], linePoint[5]));
    tube(tubePoints);
}


//-50, 50, -50
//-50, 50, 50

function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);

    camera.position.set(0, 0, 500)/* .add( new THREE.Vector3( -200, 0, 0 ) ) */;
    controls = new OrbitControls(camera, renderer.domElement);

    /* pointlight = new THREE.PointLight(0xffffff,1);
    pointlight.position.set(200, 200, 200);
    scene.add(pointlight); */
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(200, 200, 200);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(- 200, - 200, 200);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 1);
    light3.position.set(- 200, 200, -200);
    scene.add(light3);

    /* let ballGeo = new THREE.SphereGeometry(50, 64, 64);
    let ballMat = new THREE.MeshPhysicalMaterial();
    let ballMesh = new THREE.Mesh(ballGeo, ballMat);
    scene.add(ballMesh);

    let ballGeo1 = new THREE.SphereGeometry(100, 64, 64);
    let ballMat1 = new THREE.MeshPhysicalMaterial();
    let ballMesh1 = new THREE.Mesh(ballGeo1, ballMat1);
    
    scene.add(ballMesh1);

    ballMesh1.position.x = 200; */
    //atom(10, 0, 0, 0);
    ///////far from the view///////
    atom(9, 50, 80, -50);//r t
    atom(9, 50, -50, -50);//r b
    atom(9, -50, 80, -50);//l t
    atom(9, -50, -50, -50);//l b
    atom(9, 50, 200, -50);//r t
    atom(9, -50, 200, -50);//l t

    //upper center
    atom(9, 0, 135, -25);
    //lower center
    atom(9, 0, 25, 25);

    ///////close to eye///////////
    atom(9, 50, 80, 50);
    atom(9, 50, -50, 50);
    atom(9, -50, 80, 50);
    atom(9, -50, -50, 50);
    atom(9, 50, 200, 50);//r t
    atom(9, -50, 200, 50);//l t

    /////////carbon///////////
    //////////upper - 1///////////
    carbon(8, 0, 180, -25);
    //////////upper - 2///////////
    carbon(8, -50, 125, -50);
    carbon(8, 50, 125, -50);
    carbon(8, -50, 125, 50);
    carbon(8, 50, 125, 50);
    /////////upper - 4//////////
    carbon(8, -50, 15, -50);
    carbon(8, 50, 15, -50);
    carbon(8, -50, 15, 50);
    carbon(8, 50, 15, 50);
    /////////upper - 3//////////
    carbon(8, 0, 70, 25);

    //frame();
    //far from view frame
    linePoint = [-50, 200, -50, 50, 200, -50];
    calculatePointLine(linePoint);
    linePoint = [-50, 200, 50, 50, 200, 50];
    calculatePointLine(linePoint);
    linePoint = [-50, -50, -50, -50, 200, -50];
    calculatePointLine(linePoint);
    linePoint = [50, 200, -50, 50, -50, -50];
    calculatePointLine(linePoint);
    linePoint = [50, -50, -50, -50, -50, -50];
    calculatePointLine(linePoint);
    //connect far from view with near view frame
    linePoint = [-50, 200, -50, -50, 200, 50];
    calculatePointLine(linePoint);
    linePoint = [50, 200, -50, 50, 200, 50];
    calculatePointLine(linePoint);
    linePoint = [-50, -50, -50, -50, -50, 50];
    calculatePointLine(linePoint);
    linePoint = [50, -50, -50, 50, -50, 50];
    calculatePointLine(linePoint);
    //near view frame
    linePoint = [-50, 50, 50, 50, 50, 50];
    //calculatePointLine(linePoint);
    linePoint = [-50, -50, 50, -50, 200, 50];
    calculatePointLine(linePoint);
    linePoint = [50, 200, 50, 50, -50, 50];
    calculatePointLine(linePoint);
    linePoint = [50, -50, 50, -50, -50, 50];
    calculatePointLine(linePoint);



    linePoint = [0, 180, -25, 50, 200, 50];
    calculatePointTube(linePoint);
    linePoint = [0, 180, -25, -50, 200, -50];
    calculatePointTube(linePoint);
    linePoint = [0, 180, -25, 50, 200, -50];
    calculatePointTube(linePoint);


    linePoint = [0, 180, -25, 0, 135, -25];
    calculatePointTube(linePoint);

    linePoint = [-50, 125, -50, 0, 135, -25];
    calculatePointTube(linePoint);
    linePoint = [50, 125, -50, 0, 135, -25];
    calculatePointTube(linePoint);
    //linePoint = [-50, 125, 50, 0, 135, -25];
    //calculatePointTube(linePoint);
    linePoint = [50, 125, 50, 0, 135, -25];
    calculatePointTube(linePoint);


    linePoint = [-50, 125, -50, -50, 80, -50];
    calculatePointTube(linePoint);
    linePoint = [50, 125, -50, 50, 80, -50];
    calculatePointTube(linePoint);
    linePoint = [50, 125, 50, 50, 80, 50];
    calculatePointTube(linePoint);
    linePoint = [-50, 125, 50, -50, 80, 50];
    calculatePointTube(linePoint);

    linePoint = [0, 70, 25, -50, 80, -50];
    calculatePointTube(linePoint);
    linePoint = [0, 70, 25, 50, 80, -50];
    //calculatePointTube(linePoint);
    linePoint = [0, 70, 25, 50, 80, 50];
    calculatePointTube(linePoint);
    linePoint = [0, 70, 25, -50, 80, 50];
    calculatePointTube(linePoint);

    linePoint = [0, 70, 25, 0, 25, 25];
    calculatePointTube(linePoint);

    linePoint = [-50, 15, 50, 0, 25, 25];
    calculatePointTube(linePoint);
    linePoint = [50, 15, 50, 0, 25, 25];
    calculatePointTube(linePoint);
    linePoint = [-50, 15, -50, 0, 25, 25];
    calculatePointTube(linePoint);

    linePoint = [-50, 15, 50, -50, -50, 50];
    calculatePointTube(linePoint);
    linePoint = [50, 15, 50, 50, -50, 50];
    calculatePointTube(linePoint);
    linePoint = [-50, 15, -50, -50, -50, -50];
    calculatePointTube(linePoint);
    linePoint = [50, 15, -50, 50, -50, -50];
    calculatePointTube(linePoint);




    arrowHelper(0, 1, 0, 250);
    arrowHelper(-1, 0, 0, 80);
    arrowHelper(0, 0, 1, 80);



    animate();

}
function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function atom(d, x, y, z) {
    let ballGeo = new THREE.SphereGeometry(d, 64, 64);
    let ballMat = new THREE.MeshPhysicalMaterial({ color: 0xc70200 });
    let ballMesh = new THREE.Mesh(ballGeo, ballMat);
    scene.add(ballMesh);

    ballMesh.position.x = x;
    ballMesh.position.y = y;
    ballMesh.position.z = z;
}

function carbon(d, x, y, z) {
    let ballGeo = new THREE.SphereGeometry(d, 64, 64);
    let ballMat = new THREE.MeshPhysicalMaterial({ color: 0x1e1e1e });
    let ballMesh = new THREE.Mesh(ballGeo, ballMat);
    scene.add(ballMesh);

    ballMesh.position.x = x;
    ballMesh.position.y = y;
    ballMesh.position.z = z;
}
function frame() {
    const geometry = new THREE.BoxGeometry(100, 100, 100);

    const wireframe = new THREE.WireframeGeometry(geometry);

    const line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = true;

    scene.add(line);
}

function line(points) {
    const material = new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 100
    });
    // Create Tube Geometry
    let geometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        512,// path segments
        0.2,// THICKNESS
        5, //Roundness of Tube
        false //closed
    );

    //const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    line.material.opacity = 0.75;
    line.material.transparent = true;
    scene.add(line);
}

function tube(points) {
    const material = new THREE.LineBasicMaterial({
        color: 0xbebebe//,
        //linewidth: 100
    });
    // Create Tube Geometry
    let geometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        512,// path segments
        2,// THICKNESS
        100, //Roundness of Tube
        false //closed
    );

    //const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line);
}


function arrowHelper(x, y, z, l) {
    const dir = new THREE.Vector3(x, y, z);

    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();

    const origin = new THREE.Vector3(100, -50, -70);
    const length = l;
    const hex = 0x000000;

    const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
    scene.add(arrowHelper);

}


init();