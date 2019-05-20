const startGameBtn = document.getElementById('btn__reset');
const phraseSection = document.getElementById('phrase');

// new runs the constructor
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();

// game >> returns an Phrase object with the random phrase passed in >> takes that phrase and runs addPhraseToDisplay();