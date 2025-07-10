function startProposal() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('proposal-screen').classList.remove('hidden');
}

function moveButton(btn) {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  btn.style.position = 'absolute';
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function showLoveLetter() {
  document.getElementById('proposal-screen').classList.add('hidden');
  document.getElementById('letter-screen').classList.remove('hidden');
}
