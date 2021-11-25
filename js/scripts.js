// Imports
import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';
// Configuracion basica
var direction= "stop";
var video, videoImage, videoImageContext, videoTexture;
var video2, videoImage2, videoImageContext2, videoTexture2;
var video3, videoImage3, videoImageContext3, videoTexture3;
var FontLoader = new THREE.FontLoader();
let loader = new GLTFLoader();
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x6D0394,visible:false, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
let cala;
let tumb;
let zomb;
let mesa;
let directionalLight;
const scene = new THREE.Scene();
var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 2000;
var	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);

const renderer = new THREE.WebGLRenderer({ antialias: true });

// Color Interfaz
const palette = {
  bgColor: '#4c48bd', 
};

//Instancias de planos para crear los cuartos
let plane = undefined;
let plane1=undefined;
let plane2=undefined;
let plane3=undefined;
let plane4=undefined;
let plane5=undefined;
let plane6=undefined;
let plane7=undefined;
let plane8=undefined;
let plane9=undefined;
let plane10=undefined;
let plane11=undefined;
let plane12=undefined;
let plane13=undefined;
let plane14=undefined;
let plane15=undefined;
let plane16=undefined;
let plane17=undefined;
let plane18=undefined;
let plane19=undefined;

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

// Configuracion inicial
export function main(optionSize) {
  cube.position.y=2;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(palette.bgColor, 1);
  document.body.appendChild(renderer.domElement);
  scene.add(cube);
  camera.position.set(0.1,0.1,0.4);
  camera.lookAt(cube.position);	

  
  // Controles
  new OrbitControls(camera, renderer.domElement);

//llamado a funciones de los planos
  defaultPlane(40);
  drawPlane();
  drawPlane2();
  drawPlane3();
  drawPlane4();
  drawPlane5();
  drawPlane6();
  drawPlane7();
  drawPlane8();
  drawPlane9();
  drawPlane10();
  drawPlane11();
  drawPlane12();
  drawPlane13();
  drawPlane14();
  drawPlane15();
  drawPlane16();
  drawPlane17();
  drawPlane18();
  drawPlane19();
  planoVideo();
  planoVideo2();
  planoVideo3();

  //llamados a funciones para los textos 3d
  text3d();
  text3d2();
  text3d3();

  //llamado a funciones de los modelos 3d
  loadInitialModel();
  loadInitialModel2();
  loadInitialModel3(); 
  loadInitialModel4();
  

  // Luces
  setupLights();
  pointLight();
  pointLight2();
  pointLight3();

  // interaccion
  animate();
  updateElements();
  
}

//FUNCIONES DE PLANOS

function drawPlane() {//Bien 
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneGeometry(20,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane1 = new THREE.Mesh(geometry, material);
  scene.add(plane1);
  plane1.receiveShadow = true;
  plane1.rotation.y= Math.PI / 2;
  plane1.position.x=20;
  plane1.position.y=2.5;
  plane1.position.z=-10;
}

function drawPlane2() {//bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(10,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane2 = new THREE.Mesh(geometry, material);
  scene.add(plane2);
  plane2.receiveShadow = true;
  plane2.rotation.y= Math.PI / -2;
  plane2.position.x=10;
  plane2.position.y=2.5;
  plane2.position.z=15;
}


function drawPlane3() {//bien 
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(10,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane3 = new THREE.Mesh(geometry, material);
  scene.add(plane3);
  plane3.receiveShadow = true;
  plane3.rotation.y= Math.PI / 1;
  plane3.position.x=15;
  plane3.position.y=2.5;
  plane3.position.z=-8;
}

function drawPlane4() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(12,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane4 = new THREE.Mesh(geometry, material);
  scene.add(plane4);
  plane4.receiveShadow = true;
  plane4.rotation.y= Math.PI / -2;
  plane4.position.x=10;
  plane4.position.y=2.5;
  plane4.position.z=-2;
}


function drawPlane5() {//bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneGeometry(20,5);
  const material = new THREE.MeshBasicMaterial({
    map: textureLoader.load('/assets/img1.jpg'),
    side: THREE.DoubleSide,
  });
  plane5 = new THREE.Mesh(geometry, material);
  scene.add(plane5);
  plane5.receiveShadow = true;
  plane5.rotation.y= Math.PI / 2;
  plane5.position.x=-20;
  plane5.position.y=2.5;
  plane5.position.z=10;
}
function drawPlane6() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(10,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane6 = new THREE.Mesh(geometry, material);
  scene.add(plane6);
  plane6.receiveShadow = true;
  plane6.rotation.y= Math.PI / 2;
  plane6.position.x=-10;
  plane6.position.y=2.5;
  plane6.position.z=15;
}
function drawPlane7() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(20,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane7 = new THREE.Mesh(geometry, material);
  scene.add(plane7);
  plane7.receiveShadow = true;
  plane7.position.x=10;
  plane7.position.y=2.5;
  plane7.position.z=20;
}
function drawPlane8() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(10,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane8 = new THREE.Mesh(geometry, material);
  scene.add(plane8);
  plane8.receiveShadow = true;
  plane8.rotation.y= Math.PI / 1;
  plane8.position.x=-15;
  plane8.position.y=2.5;
  plane8.position.z=-5;
}
function drawPlane9() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(5,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane9 = new THREE.Mesh(geometry, material);
  scene.add(plane9);
  plane9.receiveShadow = true;
  plane9.rotation.y= Math.PI / 2;
  plane9.position.x=-10;
  plane9.position.y=2.5;
  plane9.position.z=-2.5;
}

function drawPlane10() {//bien 
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneGeometry(20,5);
  const material = new THREE.MeshBasicMaterial({
    map: textureLoader.load('/assets/img1.jpg'),
    side: THREE.DoubleSide,
  });
  plane10 = new THREE.Mesh(geometry, material);
  scene.add(plane10);
  plane10.receiveShadow = true;
  plane10.position.x=-10;
  plane10.position.y=2.5;
  plane10.position.z=-20;
}
function drawPlane11() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(10, 5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane11 = new THREE.Mesh(geometry, material);
  scene.add(plane11);
  plane11.receiveShadow = true;
  plane11.rotation.y= Math.PI / -2;
  plane11.position.x=-10;
  plane11.position.y=2.5;
  plane11.position.z=-15;
}
function drawPlane12() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(10, 5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane12= new THREE.Mesh(geometry, material);
  scene.add(plane12);
  plane12.receiveShadow = true;
  plane12.rotation.y= Math.PI / 2;
  plane12.position.x=10;
  plane12.position.y=2.5;
  plane12.position.z=-15;
}
function drawPlane13() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(9,5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane13= new THREE.Mesh(geometry, material);
  scene.add(plane13);
  plane13.receiveShadow = true;
  plane13.position.x=5.5;
  plane13.position.y=2.5;
  plane13.position.z=-10;
}
function drawPlane14() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(9, 5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane14= new THREE.Mesh(geometry, material);
  scene.add(plane14);
  plane14.receiveShadow = true;
  plane14.position.x=-5.5;
  plane14.position.y=2.5;
  plane14.position.z=-10;
}
function drawPlane15() {//Bien 
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(20, 5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane15= new THREE.Mesh(geometry, material);
   scene.add(plane15);
  plane15.position.x=10;
  plane15.position.z=-20;
  plane15.position.y=2.5;
 
}
function drawPlane16() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(20, 5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane16= new THREE.Mesh(geometry, material);
  scene.add(plane16);
  plane16.rotation.y= Math.PI / 2;
  plane16.position.z=-10;
  plane16.position.y=2.5;
  plane16.position.x=-20;
  
}

function drawPlane17() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(20, 5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane17= new THREE.Mesh(geometry, material);
  scene.add(plane17);
  plane17.rotation.y= Math.PI / 2;
  plane17.position.z=10;
  plane17.position.y=2.5;
  plane17.position.x=20;
  
}
function drawPlane18() {//Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(20, 5);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane18= new THREE.Mesh(geometry, material);
  scene.add(plane18);
  plane18.rotation.y= Math.PI / 1
  plane18.position.z=20;
  plane18.position.y=2.5;
  plane18.position.x=-10;
  
}
function drawPlane19() {//Techo Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(40, 40);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img1.jpg'),
  });
  plane19= new THREE.Mesh(geometry, material);
  scene.add(plane19);
  plane19.position.z=0;
  plane19.position.y=5;
  plane19.position.x=0;
  plane19.rotation.x= Math.PI / 2
  
}
function defaultPlane() {//Suelo Bien
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneBufferGeometry(40, 40);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: textureLoader.load('/assets/img2.jpg'),
  });

  plane = new THREE.Mesh(geometry, material);
  scene.add(plane);
  plane.receiveShadow = true;
  plane.rotation.x = Math.PI / -2; 
  plane.position.y =0.1; 
  
}

//LUCES
function setupLights() {
  const ambient = new THREE.AmbientLight(0x404040, 1.7);
  scene.add(ambient);

  directionalLight = new THREE.DirectionalLight(0xffffff, 0);
  directionalLight.position.set(-15, 10, 5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
}

//FUNCION MODELO 1
function loadInitialModel() { //Cargar modelo y ubicarlo
  loader.load(
    'assets/models/HombreCala/scene.gltf',
    function (gltf) {
      cala = gltf.scene.children[0];
      cala.scale.set(1.5, 1.5, 1.5);
      cala.position.x=-15;
      cala.position.y=0.1;
      scene.add(cala);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}
//FUNCION MODELO 2
function loadInitialModel2() { //Cargar modelo y ubicarlo
  loader.load(
    'assets/models/Tumba/scene.gltf',
    function (gltf) {
      tumb = gltf.scene.children[0];
      tumb.scale.set(0.8, 0.8, 0.8);
      tumb.position.x=14;
      tumb.position.y=0;
      tumb.position.z=16;
      scene.add(tumb);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}

//FUNCION MODELO 3 
function loadInitialModel3() { 
  loader.load(
    'assets/models/zombie/scene.gltf',
    function (gltf) {
      zomb = gltf.scene.children[0];
      zomb.scale.set(1.8, 1.8, 1.8);
      zomb.position.x=0;
      zomb.position.y=0.1;
      zomb.position.z=-18;
      scene.add(zomb);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}


//FUNCION MODELO 4 
function loadInitialModel4() { 
  loader.load(
    'assets/models/mesa/scene.gltf',
    function (gltf) {
      mesa = gltf.scene.children[0];
      mesa.scale.set(0.04, 0.04, 0.04);
      mesa.rotation.z = THREE.Math.degToRad(180);
      mesa.position.x=0;
      mesa.position.y=1.6;
      mesa.position.z=18;
      scene.add(mesa);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}


//FUNCION Texto 3D #1
function text3d(){
  var geometry;
  FontLoader.load( './assets/fonts/optimer_bold.typeface.json', 
      
    function ( font ) {

      geometry = new THREE.TextGeometry( 'Billy the Pumpkin', {
        font: font,
        size: 5,
        height: 2,
        curveSegments: 1,
        bevelThickness: 2,
        bevelSize: 1,
        bevelSegments: 5
        } );
          
      var meshMaterial = new THREE.MeshNormalMaterial({
        flatShading: THREE.FlatShading,
        transparent: true,
        opacity: 0.9
      });
      var mesh = new THREE.Mesh(geometry, meshMaterial);
        mesh.position.x=-18;
        mesh.position.y=4;
        mesh.position.z=-4;
        mesh.scale.z=0.1
        mesh.scale.x=0.1
        mesh.scale.y=0.1
        scene.add(mesh);
      },
      // Progreso de carga
      function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },

      function (err) {
        console.log(err);
      }
   );
}

//FUNCION Texto 3D #2
function text3d2(){
  var geometry;
  FontLoader.load( './assets/fonts/optimer_bold.typeface.json',  
      
    function ( font ) {

      geometry = new THREE.TextGeometry( 'Tumbas', {
        font: font,
        size: 5,
        height: 2,
        curveSegments: 1,
        bevelThickness: 2,
        bevelSize: 1,
        bevelSegments: 5
        } );
         
      var meshMaterial = new THREE.MeshNormalMaterial({
        flatShading: THREE.FlatShading,
        transparent: true,
        opacity: 0.9
      });
      var mesh = new THREE.Mesh(geometry, meshMaterial);
        mesh.rotation.y = THREE.Math.degToRad(270);
        mesh.position.x=20;
        mesh.position.y=1.5;
        mesh.position.z=3;
        mesh.scale.z=0.3
        mesh.scale.x=0.3
        mesh.scale.y=0.3
        scene.add(mesh);
      },
      // Progreso de carga
      function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },
      
      function (err) {
        console.log(err);
      }
   );
}

//FUNCION Texto 3D #3
function text3d3(){
  var geometry;
  FontLoader.load( './assets/fonts/optimer_bold.typeface.json', 
      
    function ( font ) {

      geometry = new THREE.TextGeometry( 'Zombie', {
        font: font,
        size: 5,
        height: 2,
        curveSegments: 1,
        bevelThickness: 2,
        bevelSize: 1,
        bevelSegments: 5
        } );
          
      var meshMaterial = new THREE.MeshNormalMaterial({
        flatShading: THREE.FlatShading,
        transparent: true,
        opacity: 0.9
      });
      var mesh = new THREE.Mesh(geometry, meshMaterial);
        mesh.position.x=-1;
        mesh.position.y=3.5;
        mesh.position.z=-18;
        mesh.scale.z=0.1
        mesh.scale.x=0.1
        mesh.scale.y=0.1
        scene.add(mesh);
      },
      // Progreso de carga
      function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },
      
      function (err) {
        console.log(err);
      }
   );
}


//FUNCION ANIMATE -> MOVIMIENTOS
function animate() {

  var moveDistance = 0.75;
  requestAnimationFrame(animate);
  
  if(direction=="right"){
   cube.rotation.y=cube.rotation.y-Math.PI/90;
   direction="stop"
  }

  else if (direction=="left"){
    cube.rotation.y=cube.rotation.y+Math.PI/90;
    direction="stop"
  }


 else if (direction=="up"){
   cube.translateZ(-moveDistance);
   direction="stop"
  }


 else if (direction=="down"){
   cube.translateZ(moveDistance);
   direction="stop"
  }
//SETUP CAMARA
  var relativeCameraOffset = new THREE.Vector3(0,1,1);

	var cameraOffset = relativeCameraOffset.applyMatrix4(cube.matrixWorld);

	camera.position.x = cameraOffset.x;
	camera.position.y = cube.position.y;
	camera.position.z = cameraOffset.z;
	camera.lookAt( cube.position );
	

  if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
	{
		videoImageContext.drawImage( video, 0, 0 );
		if ( videoTexture ) 
			videoTexture.needsUpdate = true;
	}
  if ( video2.readyState === video2.HAVE_ENOUGH_DATA ) 
	{
		videoImageContext2.drawImage( video2, 0, 0 );
		if ( videoTexture2 ) 
			videoTexture2.needsUpdate = true;
	}
  if ( video3.readyState === video3.HAVE_ENOUGH_DATA ) 
	{
		videoImageContext3.drawImage( video3, 0, 0 );
		if ( videoTexture3 ) 
			videoTexture3.needsUpdate = true;
	}

  //Loop para video Tumbas
  if(video.currentTime>=19){
  video.currentTime=0;
  }

  //Loop para video Calabaza
  if(video2.currentTime>=4){
  video2.currentTime=0;
  }

  //Loop para video zombie
  if(video3.currentTime>=24){
  video3.currentTime=0;
  }

  renderer.render(scene, camera);
}

function updateElements() {
 
}
//Video Modelo Zombie
function planoVideo3() {
  video3 = document.createElement( 'video' );
	video3.src = './img/videos/vidZombie.mp4';
	video3.load(); 
	video3.play();
  video3.volume=0;

  videoImage3 = document.createElement( 'canvas' );
	videoImage3.width = 4096;
	videoImage3.height = 2160;

	videoImageContext3 = videoImage3.getContext( '2d' );
	
	videoImageContext3.fillStyle = '#000000';
	videoImageContext3.fillRect( 0, 0, videoImage3.width, videoImage3.height );

	videoTexture3 = new THREE.Texture( videoImage3 );
	videoTexture3.minFilter = THREE.LinearFilter;
	videoTexture3.magFilter = THREE.LinearFilter;

  var movieMaterial3 = new THREE.MeshBasicMaterial( { map: videoTexture3, overdraw: true, side:THREE.DoubleSide } );
	var movieGeometry3 = new THREE.PlaneGeometry( 10, 5);
	var movieScreen3 = new THREE.Mesh( movieGeometry3, movieMaterial3 );
	movieScreen3.position.x=0;
  movieScreen3.position.y=2.5;
  movieScreen3.position.z=-19.9;

  scene.add(movieScreen3);

}
//Video Modelo Tumbas
function planoVideo() {
  video = document.createElement( 'video' );
	video.src = './img/videos/vidTumbas.mp4';
	video.load(); 
	video.play();
  video.volume=0;

  videoImage = document.createElement( 'canvas' );
	videoImage.width = 1920;
	videoImage.height = 1080;

	videoImageContext = videoImage.getContext( '2d' );
	videoImageContext.fillStyle = '#000000';
	videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

	videoTexture = new THREE.Texture( videoImage );
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

  var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
	var movieGeometry = new THREE.PlaneGeometry( 10, 5);
	var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
	movieScreen.position.x=15;
  movieScreen.position.y=2.5;
  movieScreen.position.z=-7.9;

  scene.add(movieScreen);

}
//Video Modelo Cala
function planoVideo2() {
  video2 = document.createElement( 'video' );
	video2.src = './img/videos/vidCala.mp4';
	video2.load(); 
	video2.play();
  video2.volume=0;

  videoImage2 = document.createElement( 'canvas' );
	videoImage2.width = 3840;
	videoImage2.height = 2160;

	videoImageContext2 = videoImage2.getContext( '2d' );
	videoImageContext2.fillStyle = '#000000';
	videoImageContext2.fillRect( 0, 0, videoImage2.width, videoImage2.height );

	videoTexture2 = new THREE.Texture( videoImage2 );
	videoTexture2.minFilter = THREE.LinearFilter;
	videoTexture2.magFilter = THREE.LinearFilter;

  var movieMaterial2 = new THREE.MeshBasicMaterial( { map: videoTexture2, overdraw: true, side:THREE.DoubleSide } );
	var movieGeometry2 = new THREE.PlaneGeometry( 10, 5);
	var movieScreen2 = new THREE.Mesh( movieGeometry2, movieMaterial2 );
	movieScreen2.position.x=-15;
  movieScreen2.position.y=2.5;
  movieScreen2.position.z=-4.8;

  scene.add(movieScreen2);

}
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {

  var keyCode = event.which;
  console.log(keyCode);

    // Izquierda
    if (keyCode == 37) {
      direction="left";
      console.log(direction);
    }
     else if (keyCode == 39) {
  
      direction="right";
      console.log(direction);
    }
    
     else if (keyCode == 40) {

      direction="down";
      console.log(direction);
   
    }
     else if (keyCode == 38) {
      direction="up";
      console.log(direction);
    }
    
};

//Luz Rocola
function pointLight() {
  const light = new THREE.PointLight(0xffffff, 2, 65);
  light.position.set(0, 2, 10);
  scene.add(light);
  light.castShadow = true;

}

//Luz Tumbas
function pointLight2() {
  const light = new THREE.PointLight(0xeeeeee, 2, 65);
  light.position.set(17, 2, 15);
  scene.add(light);
  light.castShadow = true;

  //Helper
  /* const sphereSize = 1;
  const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
  scene.add(pointLightHelper) */
}

//Luz Zombie
function pointLight3() {
  const light = new THREE.PointLight(0xeeeeee, 2, 65);
  light.position.set(0, 2, -15);
  scene.add(light);
  light.castShadow = true;

  //Helper
  /* const sphereSize = 1;
  const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
  scene.add(pointLightHelper) */
}

