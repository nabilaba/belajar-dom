/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let newGameBtn = document.getElementsByClassName("btn btn-warning new-game")[0]; // tombol untuk melakukan restart game
let randomNumber = Math.floor(Math.random() * 10) + 1; // generate random number dari 1 sampai 10
let message = document.getElementsByClassName("message")[0]; // element untuk menampilkan pesan
let displayScore = document.getElementsByClassName("score")[0]; // element untuk menampilkan score
let input = document.getElementsByClassName("input")[0]; // element untuk memasukan data
let checkBtn = document.getElementsByClassName("btn btn-primary check")[0]; // tombol untuk melakuan pengecekan angka pada input
let score = 10; // nilai yang akan ditampilakan

// TODO: answer here
let number = document.getElementsByClassName("number")[0];
newGameBtn.onclick = resetGame;
checkBtn.onclick = checkNumber;

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}

function resetGame() {
  // TODO: answer here
  score = 10;
  displayScore.innerHTML = score;
  displayMessage("Lets start guessing...");
}

function checkNumber() {
  // TODO: answer here
  if (input.value == randomNumber) {
    displayMessage("Congratulation! You guessed the correct number!");
    number.innerHTML = randomNumber;
    tambahan();
  } else if (input.value < 1 || input.value > 10) {
    displayMessage("Guess any number between 1 and 10");
  } else if (input.value > randomNumber) {
    displayMessage("Oww... that's too big!");
  } else if (input.value < randomNumber) {
    displayMessage("Too small, buddy!");
  }
}

function tambahan() {
  setTimeout(() => {
    displayMessage("New game starting...");
    number.innerHTML = "?";
    input.value = "";
    score += 10;
    displayScore.innerHTML = score;
    randomNumber = Math.floor(Math.random() * 10) + 1;
  }, 2000);
}
