import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js"

let scene, camera, renderer, controls, pointlight;
function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);

    camera.position.set(0, 0, 500);
    controls = new OrbitControls(camera, renderer.domElement);

    /* pointlight = new THREE.PointLight(0xffffff,1);
    pointlight.position.set(200, 200, 200);
    scene.add(pointlight); */
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(1, 1, 1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(- 1, - 1, 1);
    scene.add(light2);

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
    atom(10, 50, 50, -50);//r t
    atom(10, 50, -50, -50);//r b
    atom(10, -50, 50, -50);//l t
    atom(10, -50, -50, -50);//l b
    ///////far from the view - center///////
    atom(10, 0, 0, -50);
    ///////close to eye///////////
    atom(10, 50, 50, 50);
    atom(10, 50, -50, 50);
    atom(10, -50, 50, 50);
    atom(10, -50, -50, 50);
    ///////close to eye - center///////////
    atom(10, 0, 0, 50);
    ////////////up center/////////////////
    atom(10, 0, 50, 0);
    /////////lower center/////////
    atom(10, 0, -50, 0);
    ////////left center////////
    atom(10, -50, 0, 0);
    ////////right center////////
    atom(10, 50, 0, 0);
    /////////carbon///////////
    //////////upper///////////
    carbon(8, -25, 25, 25);
    carbon(8, 25, 25, -25);
    /////////lower//////////
    carbon(8, 25, -25, 25);
    carbon(8, -25, -25, -25);


    frame();
    line();

    animate();

}
function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function atom(d, x, y, z) {
    let ballGeo = new THREE.SphereGeometry(d, 64, 64);
    let ballMat = new THREE.MeshPhysicalMaterial({ color: 0x44aa88 });
    let ballMesh = new THREE.Mesh(ballGeo, ballMat);
    scene.add(ballMesh);

    ballMesh.position.x = x;
    ballMesh.position.y = y;
    ballMesh.position.z = z;
}

function carbon(d, x, y, z) {
    let ballGeo = new THREE.SphereGeometry(d, 64, 64);
    let ballMat = new THREE.MeshPhysicalMaterial();
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

function line() {
    const material = new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 100
    });

    const points = [];
    points.push(new THREE.Vector3(-50, 50, -50));
    points.push(new THREE.Vector3(-50, 50, 50));
    
    // Create Tube Geometry
    let geometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        512,// path segments
        0.5,// THICKNESS
        10, //Roundness of Tube
        false //closed
    );

    //const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line);
}

function tube() {
    const material = new THREE.LineBasicMaterial({
        color: 0x0000ff,
        linewidth: 100
    });

    const points = [];
    points.push(new THREE.Vector3(50, 50, 50));
    points.push(new THREE.Vector3(-50, 50, 50));
    // Create Tube Geometry
    let geometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        512,// path segments
        1,// THICKNESS
        10, //Roundness of Tube
        false //closed
    );

    //const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line);
}
init();