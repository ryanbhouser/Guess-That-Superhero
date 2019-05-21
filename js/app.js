const startGameBtn = document.getElementById('btn__reset');
const phraseSection = document.getElementById('phrase');
const phraseUl = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');

let game;
startGameBtn.addEventListener('click', () => {
  game = new Game();
  game.resetGame(); // Reset game if played before
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

document.getElementById('qwerty').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});