import Cube from './Actors/Cube.js';
import Scene from './Scenes/Main.js';
import store from './Store.js';



const canvas = document.getElementById('canvas').getContext('2d');
store.canvasWidth = canvas.canvas.offsetWidth;
store.canvasHeight = canvas.canvas.offsetHeight;
store.speed = 0.1;

const cube = new Cube( {x:10, y:10}, store.speed );
const scene = new Scene( [cube], canvas );

scene.start();
