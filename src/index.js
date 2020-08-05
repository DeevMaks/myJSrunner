import Actor from './Engine/Actor.js';
import Scene from './Engine/Scene.js';

const canvas = document.getElementById('canvas').getContext('2d');
const actor = new Actor( {x:10, y:10}, 0.02 );
const scene = new Scene( [actor], canvas );

scene.start();
