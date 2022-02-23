const fs = require('fs');
let solveTimes = [], Ao5Times = [], Ao12Times = [];
let solveTimeText = "", Ao5TimeText = "", Ao12TimeText = "";
let fastestTime = 999, fastestAo5 = 999, fastestAo12 = 999;
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

  //Reading the Ao5 times and writing the fastest to the best stats table
  fs.readFile('Ao5Times.txt', 'utf8', (err, data) => {
    Ao5TimeText = data;
    Ao5Times = Ao5TimeText.split(',');
    if(err){
      console.error(err);
    }

    //Starting for loop at 4 to skip the null idecies which i need for the graph
    for(let i = 4; i<Ao5Times.length;i++) {
      if((Ao5Times[i] < fastestAo5)&&(Ao5Times[i]!= null)){fastestAo5 = Ao5Times[i];}
    }
    document.getElementById("Ao5Best").innerHTML = fastestAo5;
  })

   //Reading the Ao12 times and writing the fastest to the best stats table
  fs.readFile('Ao12Times.txt', 'utf8', (err, data) => {
    Ao12TimeText = data;
    Ao12Times = Ao12TimeText.split(',');
    if(err){
      console.error(err);
    }

    //Starting for loop at 11 to skip the null idecies which i need for the graph
    for(let i = 11; i<Ao12Times.length;i++) {
      if((Ao12Times[i] < fastestAo12)&&(Ao12Times[i]!= null)){fastestAo12 = Ao12Times[i];}
    }
    console.log(Ao12Times);
    console.log(fastestAo12);
    document.getElementById("Ao12Best").innerHTML = fastestAo12;
  })
}
