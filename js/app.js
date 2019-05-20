const startGameBtn = document.getElementById('btn__reset');
const phraseSection = document.getElementById('phrase');

const game = new Game();
startGameBtn.addEventListener('click', () => {
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
