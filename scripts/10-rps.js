let playing = false;

const tally = {
  wins: 0,
  losses: 0,
  ties: 0,
                         
  addWin: function(){
      this.wins ++ ;
  },
  addLoss: function(){
      this.losses ++ ;
  },
  addTie: function(){
      this.ties ++ ;
  },
  reset: function(){
      this.wins = 0;
      this.losses = 0;
      this.ties = 0;
  }
}

function getPlay(){
    const Num = Math.random(); 
    if (Num < 1/3) {
        return('ROCK');
    } else if ((Num > 1/3) && (Num < 2/3)) {
        return('PAPER');
    } else {
        return('SCISSORS');
    }
}


function playGame(userChoiceInput) {
  let compChoice = 'none';
  let result = 'none';

  compChoice = getPlay();

  // Decide Winner
  // ROCK
  if (userChoiceInput == 'ROCK'){
      if (compChoice === 'PAPER'){
          result = 'LOSS';
          tally.addLoss();
      } else if (compChoice === 'SCISSORS'){
          result = 'WIN';
          tally.addWin();
      } else {
          result = 'TIE';
          tally.addTie();
      }
      displayWin(userChoiceInput, compChoice, result);

  }

  // PAPER
  if (userChoiceInput == 'PAPER'){
      if (compChoice === 'SCISSORS'){
          result = 'LOSS';
          tally.addLoss();
      } else if (compChoice === 'ROCK'){
          result = 'WIN';
          tally.addWin();
      } else {
          result = 'TIE';
          tally.addTie();
      }
      displayWin(userChoiceInput, compChoice, result);

  }

  // SCISSORS
  if (userChoiceInput == 'SCISSORS'){
      if (compChoice === 'ROCK'){
          result = 'LOSS';
          tally.addLoss();
      } else if (compChoice === 'PAPER'){
          result = 'WIN';
          tally.addWin();
      } else {
          result = 'TIE';
          tally.addTie();
      }
      displayWin(userChoiceInput, compChoice, result);

  }
  console.log(`Result: ${result}`);
  console.log(`Wins: ${tally.wins}\nLosses: ${tally.losses}\nTies: ${tally.ties}`)
  displayTally();
}

function playAlone(){
    if (!playing){
        intervalid=setInterval(function () { playGame(getPlay())},200);
        playing = true;
    } else {
        clearInterval(intervalid);
        playing=false;
    }
}

function displayWin(human,computer,result){
    document.getElementById('winPanel')
    .innerHTML = `
    <div>Human: ${human}</div>
    <div>Computer: ${computer}</div> 
    <div>Result: ${result} </div>`;
}

function displayTally(){
    document.getElementById('resultPanel')
    .innerHTML = `
    <div>Wins: ${tally.wins} </div>
    <div>Losses: ${tally.losses} </div>
    <div>Ties: ${tally.ties} </div>`;
}

