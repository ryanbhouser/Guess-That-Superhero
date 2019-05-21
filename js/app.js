const startGameBtn = document.getElementById('btn__reset');
const phraseSection = document.getElementById('phrase');
const phraseUl = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');
const pressedKeys = [];

let game;
startGameBtn.addEventListener('click', () => {
  game = new Game();
  game.resetGame(); // Reset game if played before
  game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});

// EXTRA CREDIT :)
window.addEventListener('keydown', (e) => {
  game.physKeyboardInteraction(e.key);
});

