const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsDiv = document.getElementById('buttons');

// Create buttons and corresponding audio elements
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  // Create <audio> element
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  document.body.appendChild(audio); // must be in DOM for test to detect it

  btn.addEventListener('click', () => {
    stopAllSounds();
    audio.play();
  });

  buttonsDiv.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopAllSounds);
buttonsDiv.appendChild(stopBtn);

function stopAllSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
