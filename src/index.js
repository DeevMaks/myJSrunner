import MainScene from './Game/Scenes/Main';
import Wall from './Game/actors/Wall';

const canvas = document.getElementById('canvas').getContext('2d');
const scene = new MainScene(canvas);
const wall = new Wall(canvas);

scene.push('wall', wall);
wall.position = [50, 120];
wall.speed = [-0.1, 0];
console.log(scene.container);
const test = scene.container[Symbol.iterator]();
console.log(test.next());
scene.start();




