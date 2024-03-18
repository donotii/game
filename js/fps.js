function repeatWithDelayss(delay) {
  setTimeout(function() {
    document.getElementById('fpssss').innerHTML = "fps : " + frames
    frames = 0
    repeatWithDelayss(delay);
  }, delay);
}
repeatWithDelayss(1000);