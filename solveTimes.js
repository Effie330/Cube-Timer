const fs = require('fs');
var solveTimes = [];
var solveTimeText = "";

//Reading solveTimes file and splitting it into the solveTimes array
fs.readFile('solveTimes.txt', 'utf8', (err, data) => {
  solveTimeText = data;
  solveTimes = solveTimeText.split(',');
  drawTimeDivs();
  if(err){
    console.error(err);
  }
})


function drawTimeDivs() {
  console.log("lmoa");
  for(let i=0;i<solveTimes.length;i++){
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("solveTimesGridItems");
    newDiv.setAttribute('id',i);
    newDiv.innerHTML = solveTimes[i];
    
    document.getElementById("solvesGridHeader").appendChild(newDiv);
  }
}