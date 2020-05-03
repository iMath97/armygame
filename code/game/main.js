// imports
import Map from "./map.js";

// vars
// background canvas
const bgcvs = document.getElementById('bgcanvas');
const bgctx = bgcvs.getContext('2d');

// foreground canvas
const fgcvs = document.getElementById("fgcanvas");
const fgctx = fgcvs.getContext('2d');

// dimensions
const gameHeight = 832;
const gameWidth = 1216;


// objects
const map = new Map();

// gameloop
setInterval(gameloop, 1);

function gameloop(){
    draw();
    map.generateMap(bgctx);
}

// functions
function draw(){
    bgctx.clearRect(0, 0, gameWidth, gameHeight);
}

// input
// mouse
window.onmousedown = ((e) => {
    console.log("posX: " + e.clientX + ", posY: "  + e.clientY);
});