let eventSelected, changeEventCount = 0;

window.on = function(){
  eventSelected = "3x";
  postStats();
}
function removeDivs(){
  if(changeEventCount > 0) {
    for(let b = 0; b < localStorage.length; b++){
      let getDiv;
      if(document.getElementById(b) != null){
        getDiv = document.getElementById(b);
        getDiv.remove();
      }
    }
  }
  getSelectedValue();
  changeEventCount++;
}
function getSelectedValue(){
  let currentEventSelect = document.getElementById('event');
  eventSelected = currentEventSelect.value;
  console.log(eventSelected);
  
  postStats();
}

function postStats(){

  

  //Reading database and setting the times to arrays
  let solveTimes = [], Ao5Times = [], Ao12Times = [];
  for(let i = 0; i < localStorage.length; i++){
    let getKey1 = eventSelected+"S-"+i;
    if(localStorage.getItem(getKey1) != null){
      solveTimes.push(localStorage.getItem(getKey1));  
    }

    let getKey2 = eventSelected+"A5-"+i;
    if(localStorage.getItem(getKey2) != null){
      Ao5Times.push(localStorage.getItem(getKey2));  
    }
    let getKey3 = eventSelected+"A12-"+i;
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
  }

  //Displaying the solve counts to the table
  document.getElementById("overallCount").innerHTML = solveTimes.length;
  document.getElementById("Ao5Count").innerHTML = Ao5Times.length;
  document.getElementById("Ao12Count").innerHTML = Ao12Times.length;



  //Finding fastest Ao5 time and writing to table
  for(let i = 0; i<Ao5Times.length;i++) {
    if((Ao5Times[i] < fastestAo5)&&(Ao5Times[i]!= null)){fastestAo5 = Ao5Times[i];}
  }
  document.getElementById("Ao5Best").innerHTML = fastestAo5;

  //Finding fastest Ao12 time and writing to table
  for(let i = 0; i<Ao12Times.length;i++) {
    if((Ao12Times[i] < fastestAo12)&&(Ao12Times[i]!= null)){fastestAo12 = Ao12Times[i];}
  }
  document.getElementById("Ao12Best").innerHTML = fastestAo12;
}