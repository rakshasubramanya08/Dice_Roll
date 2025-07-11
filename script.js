let diceV = document.getElementById('dice');
let btnV = document.getElementById('btnCl');
let rollV = document.getElementById('rollDice');

btnV.addEventListener('click',()=>{

})

let diceList = [];

function diceRoll() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceV.innerHTML = diceFace;
  diceList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollV.innerHTML = "";
  for (let i = 0; i < diceList.length; i++) {


}
}