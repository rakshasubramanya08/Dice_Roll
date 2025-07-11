let diceV = document.getElementById('dice');
let btnV = document.getElementById('btnCl');
let rollV = document.getElementById('rollDice');

btnV.addEventListener('click',()=>{
    diceV.classList.add("roll-animation");
  setTimeout(() => {
     diceV.classList.remove("roll-animation");
    diceRoll();
  }, 1000);
});


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
  for (let i = 0; i < diceList.length; i++){
   const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      diceList[i]
    )}</span>`;
    rollV.appendChild(listItem);
}
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

