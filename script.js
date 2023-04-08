let choice = "";
let result = "";
let userChoice = "";
let choices = document.querySelectorAll(".choice");
let winCount = 0;
let loseCount = 0;

function select(choice) {
  if (choice === "heads") {
    userChoice = "heads";
    document.getElementById("heads").style.border = "4px solid #18005a";
    document.getElementById("tails").style.border = "none";
  } else if (choice === "tails") {
    userChoice = "tails";
    document.getElementById("tails").style.border = "4px solid #18005a";
    document.getElementById("heads").style.border = "none";
  }
}

function play() {
  let AkifChoice = Math.floor(Math.random() * 2) == 0 ? "heads" : "tails";

  if (userChoice === "") {
    alert("You forgot to make a choice. Akif is wishing you good luck!");
  } else {
    if (AkifChoice === "heads") {
      result = "heads";
    } else {
      result = "tails";
    }

    if (userChoice === result) {
      alert("Congratulations!");
      winCount++;
    } else {
      alert("You lost.");
      loseCount++;
    }

    document.getElementById("win-count").innerHTML = winCount;
    document.getElementById("lose-count").innerHTML = loseCount;

    userChoice = "";
    document.getElementById("heads").style.border = "none";
    document.getElementById("tails").style.border = "none";
  }
}