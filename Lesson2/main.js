import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);


camera.position.set(1,1,5);
const orbit = new OrbitControls(camera, renderer.domElement);

orbit.update();

function animate(){
	renderer.render( scene, camera );
}

//render
renderer.setAnimationLoop(animate);