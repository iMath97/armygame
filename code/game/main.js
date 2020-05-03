// imports
import Map from "./map.js";

// vars
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const gameHeight = 832;
const gameWidth = 1216;

// colors
let grassOwned = "#0f0";

// objects
const map = new Map();

// gameloop
setInterval(gameloop, 1);

function gameloop(){
    draw();
    map.generateMap(ctx);
}

// functions
function draw(){
    ctx.clearRect(0, 0, gameWidth, gameHeight);
}

// input
// mouse
window.onmousedown = ((e) => {
    console.log("posX: " + e.clientX + ", posY: "  + e.clientY);
});