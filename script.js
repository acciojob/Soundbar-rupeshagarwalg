const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.getElementById('buttons');
let currentSound = null;

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSound();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    currentSound = audio;
  });

  buttons.appendChild(btn);
});

// stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSound);
buttons.appendChild(stopBtn);

function stopSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
}
