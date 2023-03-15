let timerInterval
let totalSeconds = 0
let totalSeconds1 = 0
let sec = 0
let min = 0
let h = 0

function start() {
  timerInterval = setInterval(change, 1000)
}

function stop() {
  clearInterval(timerInterval)
}

function reset() {
  clearInterval(timerInterval)
  sec = 0
  min = 0
  h = 0
  document.getElementById("timer").innerHTML = "00:00:00"
}

function change() {
  sec+=1
  if (sec === 60) {
    sec = 0
    min+=1
  }
  if (min === 60) {
    min = 0
    h+=1
  }
  let timeString = h.toString().padStart(2, "0") + ":" + min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0")
  document.getElementById("timer").innerHTML = timeString
}
