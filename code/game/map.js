// textures
let grass = new Image();
grass.src = "./game/img/grass.png";

let wasteland = new Image();
wasteland.src = "./game/img/wasteland.png";

export default class Map {
    gameTiles = [];
    gameMap = [];
    blockWidth;
    blockHeight;

    constructor() {
        this.blockWidth = 64;
        this.blockHeight = 64;
        this.gameTiles = [{status: "enemy", color: "#6e2b02"}, {status: "owned", color: "#06992d"}];
        this.gameMap = [
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: 0}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: 0}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 1}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 1}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 2}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 2}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 3}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 3}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 4}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 4}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 5}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 5}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 6}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 6}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 7}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 7}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 8}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 8}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 8, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 9, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 10, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 9}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 9}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 10}, 
                {status: "owned", posX: this.blockWidth * 8, posY: this.blockHeight * 10}, 
                {status: "owned", posX: this.blockWidth * 9, posY: this.blockHeight * 10}, 
                {status: "owned", posX: this.blockWidth * 10, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 10}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 10}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 11}, 
                {status: "owned", posX: this.blockWidth * 8, posY: this.blockHeight * 11}, 
                {status: "owned", posX: this.blockWidth * 9, posY: this.blockHeight * 11}, 
                {status: "owned", posX: this.blockWidth * 10, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 11}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 11}
            ],
            [
                {status: "enemy", posX: this.blockWidth * 0, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 1, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 2, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 3, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 4, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 5, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 6, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 7, posY: this.blockHeight * 12}, 
                {status: "owned", posX: this.blockWidth * 8, posY: this.blockHeight * 12}, 
                {status: "owned", posX: this.blockWidth * 9, posY: this.blockHeight * 12}, 
                {status: "owned", posX: this.blockWidth * 10, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 11, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 12, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 13, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 14, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 15, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 16, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 17, posY: this.blockHeight * 12}, 
                {status: "enemy", posX: this.blockWidth * 18, posY: this.blockHeight * 12}
            ]
        ];
    }

    generateMap(ctx){
        // let color; 
        let image;

        for(let i = 0; i < this.gameMap.length; i++){
            for(let j = 0; j < this.gameMap[i].length; j++){
                if(this.gameMap[i][j].status == "enemy"){
                    // color = this.gameTiles[0].color;
                    image = wasteland;
                } else {
                    // color = this.gameTiles[1].color;
                    image = grass;
                }
                // ctx.fillStyle = color;
                ctx.drawImage(image ,this.gameMap[i][j].posX, this.gameMap[i][j].posY, this.blockWidth, this.blockHeight);
            }
        }
    }
}