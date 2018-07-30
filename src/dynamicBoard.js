
let dynamicBoard = [];
let shipCounter = 0;



function trueOrFalse(){
  let randomBool = Math.floor(Math.random() * 2);
  return (randomBool === 0) ? true : false;
}

for (let i = 0; i < 25; i++){
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
