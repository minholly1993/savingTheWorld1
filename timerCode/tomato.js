function decrement() {
  totalSeconds-=1
  if (totalSeconds < 0) {
    clearInterval(timerInterval)
    alert("Take a break :]")
    pr()
  } else {
    let hours = Math.floor(totalSeconds / 3600)
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60)
    let timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
    document.getElementById("t").innerHTML = timeString
  }
}

function decrement1() {
  totalSeconds-=1
  if (totalSeconds < 0) {
    clearInterval(timerInterval)
    if (confirm("Are you studying again?")){
    pomodoro()
    }
  } else {
    let hours = Math.floor(totalSeconds / 3600)
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60)
    let timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
    document.getElementById("t").innerHTML = timeString
  }
}

function pw(){
  let hoursInput = 0
  let minutesInput = 25
  let secondsInput = 0

  totalSeconds = (hoursInput * 3600) + (minutesInput * 60) + Number(secondsInput)
  
  timerInterval = setInterval(decrement, 1000)
  
}
function pr() {
  let hoursInput = 0
  let minutesInput = 5
  let secondsInput = 0

  totalSeconds = (hoursInput * 3600) + (minutesInput * 60) + Number(secondsInput)
  
  timerInterval = setInterval(decrement1, 1000)
}

function pomodoro() {
  pw()
}

function stopT() {
  clearInterval(timerInterval)
}

function resetT() {
  clearInterval(timerInterval)
  document.getElementById("t").innerHTML = "00:00:00"
}
