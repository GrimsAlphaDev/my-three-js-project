import * as Three from 'three';

var scene = new Three.Scene();
var cam = new Three.PerspectiveCamera(45, innerHeight / innerWidth, 1,100);

var renderer = new Three.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);

var box = new Three.BoxGeometry(1,1,1);
var boxMat = new Three.MeshBasicMaterial({color: 0xff0000});
var boxMesh = new Three.Mesh(box, boxMat);

scene.add(boxMesh);
cam.position.z = 5;

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function(){
  renderer.setSize(innerWidth, innerHeight);
  cam.aspect = innerWidth / innerHeight;
  cam.updateProjectionMatrix();
});

function draw(){
  requestAnimationFrame(draw);
  boxMesh.rotation.y += 0.01;
  renderer.render(scene, cam);
}

draw();