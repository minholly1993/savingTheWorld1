let timerInterval
let totalSeconds1 = 0
let timepass = 0
let stopt = false
function startTimer() {
  stopt = false
  let hoursInput = document.getElementById("hours").value
  let minutesInput = document.getElementById("minutes").value
  let secondsInput = document.getElementById("seconds").value

  totalSeconds1 = (hoursInput * 3600) + (minutesInput * 60) + Number(secondsInput)
  timepass=totalSeconds1
  timerInterval = setInterval(decrementTime, 1000)
}
function startTimer1() {
  stopt = false
  totalSeconds1 = timepass
  timepass=totalSeconds1
  timerInterval = setInterval(decrementTime, 1000)
  
}

function stopTimer() {
  stopt = true
  clearInterval(timerInterval)
}

function resetTimer() {
  clearInterval(timerInterval)
  document.getElementById("hours").value = ""
  document.getElementById("minutes").value = ""
  document.getElementById("seconds").value = ""
  document.getElementById("time").innerHTML = "00:00:00"
}

function decrementTime() {
  totalSeconds1-=1
  if (totalSeconds1 < 0) {
    clearInterval(timerInterval)
    alert("Time's up")
  } else {
    let hours = Math.floor(totalSeconds1 / 3600)
    let minutes = Math.floor((totalSeconds1 - (hours * 3600)) / 60)
    let seconds = totalSeconds1 - (hours * 3600) - (minutes * 60)
    timepass -=1
    let timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
    document.getElementById("time").innerHTML = timeString
  }
}

function conTimer() {
  if (stopt === true) {
    startTimer1()
  }
}
