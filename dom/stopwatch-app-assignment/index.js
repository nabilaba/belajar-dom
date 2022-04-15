/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let stopwatch = document.getElementById("stopwatch"); // mendapatkan value dari stopwatch
let startbtn = document.getElementsByClassName("btn btn-start btn-success")[0]; // tombol untuk memulai stapwatch
let stopbtn = document.getElementsByClassName("btn btn-stop btn-danger")[0]; // tombol untuk memberhentikan stopwatch
let resetbtn = document.getElementsByClassName("btn btn-reset btn-warning")[0]; // tombol untuk mereset value dari stopwatch

// TODO: answer here
var tampilanmili, tampilanseconds, tampilanmenit;
var mili = 0, seconds = 0, menit = 0;
var Interval;
startbtn.onclick = start;
stopbtn.onclick = stop;
resetbtn.onclick = reset;

function start() {
  // TODO: answer here
  clearInterval(Interval);
  Interval = setInterval(runTime, 10);
}

function stop() {
  // TODO: answer here
  clearInterval(Interval);
}

function reset() {
  // TODO: answer here
  clearInterval(Interval);
  mili = 0, seconds = 0, menit = 0;
  stopwatch.innerHTML = "00:00:00";
}

function runTime() {
  // TODO: answer here
  mili++;

  if (mili <= 9) {
    tampilanmili = "0" + mili;
  } else {
    tampilanmili = mili;
  }
  
  if (mili >= 60) {
    mili = 0;
    seconds++;
  }

  if (seconds <= 9) {
    tampilanseconds =  "0" + seconds;
  } else {
    tampilanseconds = seconds;
  }

  if (seconds >= 60) {
    seconds = 0;
    menit++;
  }

  if (menit <= 9) {
    tampilanmenit = "0" + menit;
  } else {
    tampilanmenit = menit;
  }

  if (menit >= 60) {
    menit = 0;
  }

  stopwatch.innerHTML = tampilanmenit + ":" + tampilanseconds + ":" + tampilanmili;
}
