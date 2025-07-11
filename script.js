let diceV = document.getElementById('dice');
let btnV = document.getElementById('btnCl');
let rollV = document.getElementById('rollDice');

btnV.addEventListener('click',()=>{

})

let DiceList = [];

function diceRoll() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceV.innerHTML = diceFace;
  List.push(rollResult);
  updateRollHistory();
}


