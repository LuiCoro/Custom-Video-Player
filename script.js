// JavaScript Goes Here
const video = document.getElementById('video');
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

//Play & Pause Video
function toggleVideoStatus() {
  return true;
}

// Update Play/Pause Icon
function updatePlayIcon(){
  return true;
}

// Update Progress & Timestamp
function updateProgress() {
  return true;
}

//Set Video Time to Progress
function setVideoProgress() {
  return true;
}

//Stop Video
function stopVideo() {
  return true;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)