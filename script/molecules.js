import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js"

let scene, sceneExport, camera, renderer, controls, pointlight;
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
    sceneExport = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

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

    // this renderer is only used for the export

    const rendererExport = new THREE.WebGLRenderer({ antialias: true });
    rendererExport.setSize(window.innerWidth, window.innerHeight);

    const exportLink = document.getElementById('exportLink');
    exportLink.addEventListener('click', () => {

        rendererExport.render(scene, camera); // only export mesh1
        const dataURL = rendererExport.domElement.toDataURL('image/png');

        exportLink.href = dataURL;
        exportLink.download = "3c.png";

    });

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
    atom(9, 50, 50, -50);//r t
    atom(9, 50, -50, -50);//r b
    atom(9, -50, 50, -50);//l t
    atom(9, -50, -50, -50);//l b
    ///////far from the view - center///////
    atom(9, 0, 0, -50);
    ///////close to eye///////////
    atom(9, 50, 50, 50);
    atom(9, 50, -50, 50);
    atom(9, -50, 50, 50);
    atom(9, -50, -50, 50);
    ///////close to eye - center///////////
    atom(9, 0, 0, 50);
    ////////////up center/////////////////
    atom(9, 0, 50, 0);
    /////////lower center/////////
    atom(9, 0, -50, 0);
    ////////left center////////
    atom(9, -50, 0, 0);
    ////////right center////////
    atom(9, 50, 0, 0);
    /////////carbon///////////
    //////////upper///////////
    carbon(8, -25, 25, 25);
    carbon(8, 25, 25, -25);
    /////////lower//////////
    carbon(8, 25, -25, 25);
    carbon(8, -25, -25, -25);


    //frame();
    //far from view frame
    linePoint = [-50, 50, -50, 50, 50, -50];
    calculatePointLine(linePoint);
    linePoint = [-50, -50, -50, -50, 50, -50];
    calculatePointLine(linePoint);
    linePoint = [50, 50, -50, 50, -50, -50];
    calculatePointLine(linePoint);
    linePoint = [50, -50, -50, -50, -50, -50];
    calculatePointLine(linePoint);
    //connect far from view with near view frame
    linePoint = [-50, 50, -50, -50, 50, 50];
    calculatePointLine(linePoint);
    linePoint = [50, 50, -50, 50, 50, 50];
    calculatePointLine(linePoint);
    linePoint = [-50, -50, -50, -50, -50, 50];
    calculatePointLine(linePoint);
    linePoint = [50, -50, -50, 50, -50, 50];
    calculatePointLine(linePoint);
    //near view frame
    linePoint = [-50, 50, 50, 50, 50, 50];
    calculatePointLine(linePoint);
    linePoint = [-50, -50, 50, -50, 50, 50];
    calculatePointLine(linePoint);
    linePoint = [50, 50, 50, 50, -50, 50];
    calculatePointLine(linePoint);
    linePoint = [50, -50, 50, -50, -50, 50];
    calculatePointLine(linePoint);
    //connect upper left carbon 
    linePoint = [-50, 50, 50, -25, 25, 25];
    calculatePointTube(linePoint);
    linePoint = [0, 50, 0, -25, 25, 25];
    calculatePointTube(linePoint);
    linePoint = [-50, 0, 0, -25, 25, 25];
    calculatePointTube(linePoint);
    linePoint = [0, 0, 50, -25, 25, 25];
    calculatePointTube(linePoint);
    //connect upper right carbon
    linePoint = [50, 50, -50, 25, 25, -25];
    calculatePointTube(linePoint);
    linePoint = [0, 50, 0, 25, 25, -25];
    calculatePointTube(linePoint);
    linePoint = [50, 0, 0, 25, 25, -25];
    calculatePointTube(linePoint);
    linePoint = [0, 0, -50, 25, 25, -25];
    calculatePointTube(linePoint);
    //connect lower left carbon 
    linePoint = [50, -50, 50, 25, -25, 25];
    calculatePointTube(linePoint);
    linePoint = [0, -50, 0, 25, -25, 25];
    calculatePointTube(linePoint);
    linePoint = [50, 0, 0, 25, -25, 25];
    calculatePointTube(linePoint);
    linePoint = [0, 0, 50, 25, -25, 25];
    calculatePointTube(linePoint);
    //connect lower right carbon
    linePoint = [-50, -50, -50, -25, -25, -25];
    calculatePointTube(linePoint);
    linePoint = [0, -50, 0, -25, -25, -25];
    calculatePointTube(linePoint);
    linePoint = [-50, 0, 0, -25, -25, -25];
    calculatePointTube(linePoint);
    linePoint = [0, 0, -50, -25, -25, -25];
    calculatePointTube(linePoint);

    //a axis
    //linePoint = [70, -70, 70, 70, 0, 70];
    //calculatePointLine(linePoint);
    //axis();
    //arrowHelper(0,1,0);
    //arrowHelper(-1,0,0);
    //arrowHelper(0,0,1);



    animate();

}
function animate() {
    controls.update();
    renderer.render(scene, camera);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    //renderer.clear();
    
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
        1.5,// THICKNESS
        100, //Roundness of Tube
        false //closed
    );

    //const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line);
}


function arrowHelper(x, y, z) {
    const dir = new THREE.Vector3(x, y, z);

    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();

    const origin = new THREE.Vector3(100, -50, -70);
    const length = 80;
    const hex = 0x000000;

    const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
    scene.add(arrowHelper);

}


init();