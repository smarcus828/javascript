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

function playGame(userChoiceInput) {
  const compNum = Math.random();
  let compChoice = 'none';
  let result = 'none';

  console.log(`userChoice: ${userChoiceInput} and
  compNum: ${compNum}`);

  // Find Computer Choice
  if (compNum < 1/3) {
      compChoice = 'ROCK';
  } else if ((compNum > 1/3) && (compNum < 2/3)) {
      compChoice = 'PAPER';
  } else {
      compChoice = 'SCISSORS';
  }

  console.log(`compChoice: ${compChoice}`);

  // Decide Winner
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

  }

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

  }

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

  }
  console.log(`Result: ${result}`);
  console.log(`Wins: ${tally.wins}\nLosses: ${tally.losses}\nTies: ${tally.ties}`)
}

