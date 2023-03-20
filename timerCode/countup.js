let timerInterval
let sec = 0
let min = 0
let h = 0
let pass = 0
let sp = false

function start() {
  sp = false
  timerInterval = setInterval(change, 1000)
}

function stop() {
  sp = true
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
  pass += 1
  let timeString = h.toString().padStart(2, "0") + ":" + min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0")
  document.getElementById("timer").innerHTML = timeString
}

function startT(){
  h = Math.floor(pass/3600)
  min = Math.floor(pass/60)
  sec = pass- h*3600 - min*60
  sp = false
  timerInterval = setInterval(change, 1000)
}

function conT() {
  if (sp === true) {
    startT()
  }
}
