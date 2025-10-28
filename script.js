//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsDiv = document.getElementById('buttons');

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    currentSound = audio;
  });

  buttonsDiv.appendChild(btn);
});

// Add stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'Stop';
buttonsDiv.appendChild(stopBtn);

let currentSound = null;

function stopSounds() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
}

stopBtn.addEventListener('click', stopSounds);
