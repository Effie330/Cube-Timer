const fs = require('fs');
var timeRunning = false,timeStart = 0, timeStop = 0, recentSolve = 0;
var solveTimes = [];
var solveTimeText = "";

//Reading solveTimes file and splitting it into the solveTimes array
fs.readFile('solveTimes.txt', 'utf8', (err, data) => {
  solveTimeText = data;
  solveTimes = solveTimeText.split(',');
  if(err){
    console.error(err);
  }
})

function timerCheck(){
  if(!timeRunning){startTimer();}
  else{stopTimer();}
}
//If the timer isn't running, start time
function startTimer(){
  timeStart = Date.now();
  timeRunning = true;
  document.getElementById("timerText").innerHTML = "Timing";
}
//If timer is running, stop time, log the time
function stopTimer(){
  timeStop = Date.now();
  timeRunning = false;
  recentSolve = (timeStop - timeStart) / 1000;
  solveTimes.push(recentSolve);
  document.getElementById("timerText").innerHTML = recentSolve;
  getScramble();
  //Writing the time to the solveTimes save file
  fs.writeFile('solveTimes.txt', solveTimes.toString(), err => {
    if(err){
      console.error(err);
    }
  });
}
//Detecting when the spacebar is pressed
document.body.onkeyup = function(e){
  //Calling stop and start time when space bar pressed.
  if((e.keyCode == 32) && !timeRunning){startTimer();}
  else if((e.keyCode == 32)){stopTimer();}
};


function getScramble(){
  let scramble= " ";
  
  //Setting the scramble length from 15-20
  let scrambleLength = Math.floor(Math.random()*6)+15;
  let lastMove = -13, twoMovesAgo = -13;
  let duplicateCorrection = 0;
  for(let i=0; i<scrambleLength+duplicateCorrection; i++) {
    //picking a random int between 0-17 corresponging to a move on the cube
    let tempScrambleMoveInt = Math.floor(Math.random()*17);

    //checking if the current random move chosen is the same face as the last move
    if(Math.floor(tempScrambleMoveInt/3)  == lastMove || (Math.floor(tempScrambleMoveInt/3)  == twoMovesAgo)) {
      tempScrambleMoveInt = 20;
      duplicateCorrection  += 1;
    }
    //Switch case for each move then adding that move to the scramble string
    switch (tempScrambleMoveInt){
      case 0: 
        scramble = scramble + "U' ";
        twoMovesAgo = lastMove;
        lastMove = 0;
      break;
    
      case 1:
        scramble = scramble + "U ";
        twoMovesAgo = lastMove;
        lastMove = 0;
      break;
    
      case 2:
        scramble = scramble + "U2 ";
        twoMovesAgo = lastMove;
        lastMove = 0;
      break;
    
      case 3: 
        scramble = scramble + "B' ";
        twoMovesAgo = lastMove;
        lastMove = 1;
      break;
    
      case 4:
        scramble = scramble + "B ";
        twoMovesAgo = lastMove;
        lastMove = 1;
      break;
    
      case 5:
        scramble = scramble + "B2 ";
        twoMovesAgo  = lastMove;  
        lastMove = 1;
      break;
    
      case 6:
        scramble = scramble + "F' ";
        twoMovesAgo = lastMove;
        lastMove = 2;
      break;
    
      case 7:
        scramble = scramble + "F ";
        twoMovesAgo = lastMove;
        lastMove = 2;
      break;
    
      case 8:
        scramble = scramble + "F2 ";
        twoMovesAgo = lastMove;
        lastMove = 2;
      break;
    
      case 9:
        scramble = scramble + "L' ";
        twoMovesAgo = lastMove;
        lastMove = 3;
      break;
    
      case 10:
        scramble = scramble + "L ";
        twoMovesAgo = lastMove;
        lastMove = 3;
      break;
    
      case 11:
        scramble = scramble + "L2 ";
        twoMovesAgo = lastMove;
        lastMove = 3;
      break;
    
      case 12:
        scramble = scramble + "R' ";
        twoMovesAgo = lastMove;
        lastMove = 4;
      break;
    
      case 13:
        scramble = scramble + "R ";
        twoMovesAgo = lastMove;
        lastMove = 4;
      break;
    
      case 14:
        scramble = scramble + "R2 ";
        twoMovesAgo = lastMove;
        lastMove = 4;
      break;
    
      case 15:
        scramble = scramble + "D' ";
        twoMovesAgo = lastMove;
        lastMove = 5;
      break;
    
      case 16:
        scramble = scramble + "D ";
        twoMovesAgo = lastMove;
        lastMove = 5;
      break;
    
      case 17:
        scramble = scramble + "D2 ";
        twoMovesAgo = lastMove;
        lastMove = 5;
      break;
    }
  }
  document.getElementById("scrambleTextZone").innerHTML = scramble;
}
