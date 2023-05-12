const year = new Date();
document.getElementById('year').innerHTML = year.getFullYear();
let tie = lose = win = 0;
document.getElementById('reset').onclick = function() {
  tie = lose = win = 0;
  document.getElementById('w').innerHTML = 0;
  document.getElementById('l').innerHTML = 0;
  document.getElementById('t').innerHTML = 0;
  document.getElementById('you').innerHTML = 'Re-start';
  document.getElementById('com').innerHTML = 'Re-start';
  document.getElementById('miniDisplay').innerHTML = "Re-start"
}
//game configuration in arrow function.
const rps = (player) => {
  choice = ["Rock","Paper","Scissor"];
  num = Math.floor(Math.random() * choice.length)
  computer = choice[num] 
  document.getElementById('you').innerHTML = player;
  document.getElementById('com').innerHTML = computer;

 
  if (computer == "Rock") {
      if (player === "Rock") {
        document.getElementById('t').innerHTML = tie += 1;
        document.getElementById("miniDisplay").innerHTML = "Tie";
      } 
      else if (player === "Paper") {
        document.getElementById('w').innerHTML = win += 1;
        document.getElementById("miniDisplay").innerHTML = "Win";
      } 
      else {
        document.getElementById('l').innerHTML = lose += 1;
        document.getElementById("miniDisplay").innerHTML = "Lose";
      }
  }
  else if (computer == "Paper") {
      if (player === "Paper" ) {
        document.getElementById('t').innerHTML = tie += 1;
        document.getElementById("miniDisplay").innerHTML = "Tie";
      } else if (player === "Rock" ) {
        document.getElementById('l').innerHTML = lose += 1;
        document.getElementById("miniDisplay").innerHTML = "Lose";
      } else {
        document.getElementById('w').innerHTML = win += 1;
        document.getElementById("miniDisplay").innerHTML = "Win";
      }
  }
  else {
      if (player === "Scissor") {
        document.getElementById('t').innerHTML = tie += 1;
        document.getElementById("miniDisplay").innerHTML = "Tie";
      } else if (player === "Paper") {
        document.getElementById('l').innerHTML = lose += 1;
        document.getElementById("miniDisplay").innerHTML = "Lose";
      } else {
        document.getElementById('w').innerHTML = win += 1;
        document.getElementById("miniDisplay").innerHTML = "Win";
      }
  }
}
