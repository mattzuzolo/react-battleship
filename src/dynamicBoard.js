
let dynamicBoard = [];
let shipCounter = 0;



function trueOrFalse(){
  let flip = Math.floor(Math.random() * 2);
  return (flip === 0) ? true : false;
}

for (let i = 0; i < 9; i++){
  let gameTile = {
    id: i,
    alreadyAttacked: false,
    shipPresent: trueOrFalse()
  }
  if (gameTile.shipPresent === true) {
    shipCounter++;
  }
  dynamicBoard.push(gameTile)

}

let gamePackage = {
  dynamicBoard: dynamicBoard,
  shipCount: shipCounter
}

export default gamePackage;
