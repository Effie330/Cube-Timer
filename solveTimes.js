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

let fastestTime = 999;

function drawTimeDivs() {
  for(let i=0;i<solveTimes.length;i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("solveTimesGridItems");
    newDiv.setAttribute('id',i);
    newDiv.innerHTML = solveTimes[i];
    if(solveTimes[i]<fastestTime){fastestTime=solveTimes[i];}
    
    document.getElementById("solvesGridHeader").appendChild(newDiv);
  }
  document.getElementById("overallBest").innerHTML = fastestTime;
  document.getElementById("overallCount").innerHTML = solveTimes.length;
  document.getElementById("Ao5Count").innerHTML = solveTimes.length-4;
  document.getElementById("Ao12Count").innerHTML = solveTimes.length-11;
}