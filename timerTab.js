import { selectedPage } from '/main.js';
console.log(selectedPage);




function getScramble(){
  let scramble= " ";
  let randomScrambleLength = Math.floor(Math.random() * 5)+10;
  console.log(randomScrambleLength);
  let lastMove = -13;
  let lol = 0;
  //let duplicateCorrection = 0;
  for(let i=0; i<randomScrambleLength+lol; i++) {
    let tempScrambleMoveInt = Math.floor(Math.random()*17);
    
    if(tempScrambleMoveInt  == lastMove) {
      tempScrambleMoveInt = 20;
      lol  += 1;
      console.log("Scramble int" + tempScrambleMoveInt);
    }
    //Some way to check if same move twice in a row
    switch (tempScrambleMoveInt){
      case 0: 
        scramble = scramble + " U'";
        lastMove = 0;
      break;

      case 1:
        scramble = scramble + " U";
        lastMove = 0;
      break;

      case 2:
        scramble = scramble + " U2";
        lastMove = 0;
      break;

      case 3: 
        scramble = scramble + " B'";
        lastMove = 1;
      break;

      case 4: scramble = scramble + " B";
        lastMove = 1;
      break;

      case 5: scramble = scramble + " B2";
        lastMove = 1;
      break;

      case 6: scramble = scramble + " F'";
        lastMove = 2;
      break;

      case 7: scramble = scramble + " F";
        lastMove = 2;
      break;

      case 8: scramble = scramble + " F2";
        lastMove = 2;
      break;

      case 9: scramble = scramble + " L'";
        lastMove = 3;
      break;

      case 10: scramble = scramble + " L";
        lastMove = 3;
      break;

      case 11: scramble = scramble + " L2";
        lastMove = 3;
      break;

      case 12: scramble = scramble + " R'";
        lastMove = 4;
      break;

      case 13: scramble = scramble + " R";
        lastMove = 4;
      break;

      case 14: scramble = scramble + " R2";
        lastMove = 4;
      break;

      case 15: scramble = scramble + " D'";
        lastMove = 5;
      break;

      case 16: scramble = scramble + " D";
        lastMove = 5;
      break;

      case 17: scramble = scramble + " D2";
        lastMove = 5;
      break;

      case 20:
      break;
    }

     /*
    if(tempScrambleMoveInt == lastMove) {
      duplicateCorrection += 1;
      console.log(duplicateCorrection);
      break;
    }
    */
  }
}

export default { scramble };