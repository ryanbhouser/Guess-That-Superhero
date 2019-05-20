const startGameBtn = document.getElementById('btn__reset');
const phraseSection = document.getElementById('phrase');

let game;
startGameBtn.addEventListener('click', () => {
  game = new Game();
  game.startGame();
  // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
