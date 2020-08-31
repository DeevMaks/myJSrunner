import Wall from './Game/actors/Wall';
import MapClass from './Engine/helpers/mapClass';


const canvas = document.getElementById('canvas').getContext('2d');

const map = new MapClass();
map.add('first', 3);
map.add('second', 1);
map.add('third', 2);

for (const item of map) {
    console.log(item);
}



