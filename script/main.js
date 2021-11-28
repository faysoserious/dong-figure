import * as THREE from "https://cdn.skypack.dev/three@0.132.2";

/* const scene = new THREE.Scene();

const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 500;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
}

const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2),
]; */
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);



//const animate = function () {
//   requestAnimationFrame(animate);

//cubes.rotation.x += 0.01;
//cubes.rotation.y += 0.01;

//renderer.render(scene, camera);
//};
/* function render(time) {
    time *= 0.001;

    cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * .1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

requestAnimationFrame(render); */
/* cubes.forEach((cube, ndx) => {
    animate();
}); */

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;  // the canvas default
    const near = 1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    //camera.position.z = 20;

    const scene = new THREE.Scene();

    /* {
        const color = 0xFFFFFF;
        const intensity = 1.2;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 0, 4);
        scene.add(light);
    } */
    /* scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505); */

    /* camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000); */
    camera.position.z = 80;
    scene.add(camera);

    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(1, 1, 1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(- 1, - 1, 1);
    scene.add(light2);
/* 
    let root = new THREE.Group();
    scene.add(root); */


    const boxWidth = 1;
    const boxHeight = 64;
    const boxDepth = 32;

    const sphere = new THREE.SphereGeometry(boxWidth, boxHeight, boxDepth);
    const square = new THREE.BoxGeometry(3, 3, 3);

    function makeInstance(geometry, color, x, y, z) {
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;

        return cube;
    }

    const cubes = [
        makeInstance(sphere, 0x44aa88, 0, 0, 0),
        makeInstance(sphere, 0x8844aa, 1, 0, -2),
        makeInstance(sphere, 0xaa8844, 8, 0, 0),
        makeInstance(square, 0xaa8844, 0, 0, 0)
    ];
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = canvas.clientWidth * pixelRatio | 0;
        const height = canvas.clientHeight * pixelRatio | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    function render(time) {
        time *= 0.001;  // convert time to seconds

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        /* cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        }); */

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

}

main();

