
const fs = require('fs');

let rawTimesTemp = [], rawTimes = [];

let rawTimesText = fs.readFileSync('solveTimes.txt',{encoding:'utf8', flag:'r'});
rawTimesTemp = rawTimesText.split(',');
rawTimes = rawTimesTemp.map(Number);

const Ao5Length = 5, Ao12Length = 12;
let Ao5 = [null,null,null,null];
let Ao12 = [null,null,null,null,null,null,null,null,null,null,null];
let xLabels = [];

//CALCULATING AVERAGE OF 5
for(let i = 0;i<rawTimes.length;i++) {
  let rolling5Average;
  xLabels.push(i+1);
  //CREATING TEMPORARY ARRAY TO ISOLATE THE 5 SOLVE TIMES
  if(i >= Ao5Length - 1){
    rolling5Average = 0;
    let tempAo5Array = [];
    for(let b = 0;b<Ao5Length;b++){
      tempAo5Array.push(rawTimes[i-b]);
    }

    let tempFastest = 99;
    let tempSlowest = 0;

    //FINDING WHICH TWO TIMES NEED TO BE REMOVED
    for(let num = 0; num < Ao5Length; num++){
      if (tempAo5Array[num]<tempFastest) {
        tempFastest = tempAo5Array[num];
      }
      if(tempAo5Array[num] > tempSlowest) {
        tempSlowest = tempAo5Array[num];
      }
    }

    //REMOVING THE SLOWEST AND FASTEST TIMES FROM THE TEMP ARRAY
    for(let a = 0;a<Ao5Length;a++){
      if(tempAo5Array[a] == tempSlowest){
        tempAo5Array[a] = 0;
      }
      if(tempAo5Array[a] == tempFastest) {
        tempAo5Array[a] = 0;
      }
    }

    //FINALLY CALCULATING AND GRAPHING THE AVERAGE OF THE PAST 5 TERMS
    let tempAverageSum = 0.0;
    for(let c = 0;c<tempAo5Array.length;c++){
      tempAverageSum += tempAo5Array[c];
    }
    rolling5Average = tempAverageSum / 3;
    Ao5.push(rolling5Average.toFixed(2));
  }
}
fs.writeFile('Ao5Times.txt', Ao5.toString(), err => {
  if(err){
    console.error(err);
  }
});

//CALCULATING AVERAGE OF 12
for(let i = 0;i<rawTimes.length;i++) {
  let rolling12Average;
   //CREATING TEMPORARY ARRAY TO ISOLATE THE 12 SOLVE TIME
  if(i>=Ao12Length-1){
    let tempAo12Array = [];
    for(let b = 0;b<Ao12Length;b++){
      tempAo12Array.push(rawTimes[i-b]);
    }

    let tempFastest = 99;
    let tempSlowest = 0;
    let tempSecondFastest = 99;
    let tempSecondSlowest = 0;

    //FINDING WHICH FOUR TIMES NEED TO BE REMOVED
    //FIRST TWO TIMES
    for(let num = 0; num < Ao12Length-1; num++){
      if (tempAo12Array[num] < tempFastest) {
        tempFastest = tempAo12Array[num];
      } else if(tempAo12Array[num] > tempSlowest) {
        tempSlowest = tempAo12Array[num];
      }
    }
    //SECOND TWO TIMES
    for(let num = 0; num < Ao12Length-1; num++){
      if ((tempAo12Array[num] < tempSecondFastest)&&(tempAo12Array[num] != tempFastest)) {
        tempSecondFastest = tempAo12Array[num];
      } else if((tempAo12Array[num] > tempSecondSlowest)&&(tempAo12Array[num] != tempSlowest)) {
        tempSecondSlowest = tempAo12Array[num];
      }
    }

    //REMOVING THE SLOWEST AND FASTEST TIMES FROM THE TEMP ARRAY
    for(let b = 0; b<tempAo12Array.length;b++){
      if(tempAo12Array[b] == tempSlowest) {
        tempAo12Array[b] = 0;
      }
      if(tempAo12Array[b] == tempFastest) {
        tempAo12Array[b] = 0;
      }
      if(tempAo12Array[b] == tempSecondFastest) {
        tempAo12Array[b] = 0;
      }
      if(tempAo12Array[b] == tempSecondSlowest) {
        tempAo12Array[b] = 0;
      }
    }

    //FINALLY CALCULATING AND GRAPHING THE AVERAGE OF THE PAST 12 TERMS
    let tempAverageSum = 0.0;
    for(let c = 0; c<tempAo12Array.length;c++){
      tempAverageSum += tempAo12Array[c];
    }
    rolling12Average = tempAverageSum / 8;
    Ao12.push(rolling12Average.toFixed(2));
  }
}
fs.writeFile('Ao12Times.txt', Ao12.toString(), err => {
  if(err){
    console.error(err);
  }
});

let context = document.getElementById('CubeTimer').getContext('2d');
let CubeTimer = new Chart(context, {
  type: 'line',
  data: {
    labels: xLabels,
    datasets: [{
      lineTension: 0.15,
      label: 'Solve Times',
      borderColor: '#353b48',
      borderWidth: 5,
      data: rawTimes,
    },
    {
      lineTension: 0.15,
      label: 'Ao5',
      borderColor: '#B33771',
      borderWidth: 5,
      data: Ao5,
    },
    {
      lineTension: 0.15,
      label: 'Ao12',
      borderColor: '#009432',
      borderWidth: 5,
      data: Ao12,
    }
    ]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: 'black'
        }
      }
    },
    scales: {
      yAxis: {
        ticks: {
          color: 'black',
          stepSize: 5
        },
        title: {
          display: true,
          text: 'Solve Time',
          color: '#26266D', //navy-text color in styles.css
          font: {
            family: 'system-ui',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: {top: 20, left: 0, right: 0, bottom: 0}
        },
        min: 0,
        grid: {
          color: '#000000',
          borderColor: 'black',
        }
      },
      xAxis: {
        ticks: {
          color: 'black'
        },
        title: {
          display: true,
          text: 'Solve Number',
          color: '#26266D', //navy-text color in styles.css
          font: {
            family: 'system-ui',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: {top: 20, left: 0, right: 0, bottom: 0}
        },
        grid: { display: false,}
      }
    }
  }
});