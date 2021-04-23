var n;
var p;
var game = false;
var score = 0;
function determineWinner() {
  if (p==n){
    document.getElementById("result").innerHTML="DRAW";
  }
  if (p == "r" && game) {
    if (n == "s") {
      document.getElementById("result").innerHTML="VICTORY";
      score++;
      document.getElementById("score").innerHTML="Score: "+score;
      localStorage.setItem('score', score);
    }
    else if (n == "p") {
      document.getElementById("result").innerHTML="FAILURE";
    }
  }else if (p == "s" && game) {
    if (n == "r") {
      document.getElementById("result").innerHTML="FAILURE";
    }else if (n == "p") {
      document.getElementById("result").innerHTML="VICTORY";
      score++;
      document.getElementById("score").innerHTML="Score: "+score;
      localStorage.setItem('score', score);
    }
  }else if (p == "p" && game) {
    if (n == "r") {
      document.getElementById("result").innerHTML="VICTORY";
      score++;
      document.getElementById("score").innerHTML="Score: "+score;
      localStorage.setItem('score', score);
    }else if (n == "s") {
      document.getElementById("score").innerHTML="FAILURE";                                                                                                                                                                  ("result").innerHTML="FAILURE";
    }
  }
  
}
document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById("rock").disabled=true;
  // document.getElementById("scissors").disabled=true;
  // document.getElementById("paper").disabled=true;
  document.getElementById("form").onsubmit = function () {
    document.getElementById("result").innerHTML="Game Started: Choose a button!"
    console.log("This is the rps.html console log");
    n = Math.floor(Math.random() * 100) % 3;
    console.log(n);
    if (n == 0) {
      n = "r";
    } else if (n == 1) {
      n = "s";
    } else {
      n = "p";
    }
    game = true;
    // document.getElementById("rock").disabled=false;
    // document.getElementById("scissors").disabled=false;
    // document.getElementById("paper").disabled=false;
    return false;
  };
  document.getElementById("rock").onclick = function () {
    if (game) {
      p = "p";
      determineWinner();
    }
    game = false;
  };
  document.getElementById("scissors").onclick = function () {
    if (game) {
      p = "s";
      determineWinner();
    }
    game = false;
  };
  document.getElementById("paper").onclick = function () {
    if (game) {
      p = "p";
      determineWinner();
    }
    game = false;
    
  };
});
