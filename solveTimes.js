//Reading database and setting the times to arrays
let solveTimes = [], Ao5Times = [], Ao12Times = [];
for(let i = 0; i < localStorage.length; i++){
  let getKey1 = "3xS-"+i;
  if(localStorage.getItem(getKey1) != null){
    solveTimes.push(localStorage.getItem(getKey1));  
  }
  
  let getKey2 = "3xA5-"+i;
  if(localStorage.getItem(getKey2) != null){
    Ao5Times.push(localStorage.getItem(getKey2));  
  }
  let getKey3 = "3xA12-"+i;
  if(localStorage.getItem(getKey3) != null){
    Ao12Times.push(localStorage.getItem(getKey3));  
  }
}

let fastestTime = 999, fastestAo5 = 999, fastestAo12 = 999;

//Creating divs to display all the solveTimes
for(let i=0;i<solveTimes.length;i++){
  const newDiv = document.createElement("div");
  newDiv.classList.add("solveTimesGridItems");
  newDiv.setAttribute('id',i);
  newDiv.innerHTML = solveTimes[i];
  document.getElementById("solvesGridHeader").appendChild(newDiv);

  //Finding the fastest solve
  if((solveTimes[i]<fastestTime)&&(solveTimes[i] != null)){fastestTime=solveTimes[i];}
  document.getElementById("overallBest").innerHTML = fastestTime;

  localStorage.clear()
}

//Displaying the solve counts to the table
document.getElementById("overallCount").innerHTML = solveTimes.length;
document.getElementById("Ao5Count").innerHTML = solveTimes.length-4;
document.getElementById("Ao12Count").innerHTML = solveTimes.length-11;



//Finding fastest Ao5 time and writing to table
for(let i = 4; i<Ao5Times.length;i++) {
  if((Ao5Times[i] < fastestAo5)&&(Ao5Times[i]!= null)){fastestAo5 = Ao5Times[i];}
}
document.getElementById("Ao5Best").innerHTML = fastestAo5;

//Finding fastest Ao12 time and writing to table
for(let i = 11; i<Ao12Times.length;i++) {
  if((Ao12Times[i] < fastestAo12)&&(Ao12Times[i]!= null)){fastestAo12 = Ao12Times[i];}
}
document.getElementById("Ao12Best").innerHTML = fastestAo12;