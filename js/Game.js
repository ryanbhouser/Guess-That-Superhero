/**
 * Start and end the game
 * Handle interactions
 * Getting the random phrase
 * Checking for a win
 * Removing a life from scoreboard
 */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      'When the Rubber Hits the Road',
      'Throw In the Towel',
      'Mountain Out of a Molehill',
      'Fish Out Of Water',
      'Head Over Heels'
    ];
    this.activePhrase = null;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const random = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = new Phrase(this.phrases[random]);
    return this.activePhrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    overlay.style.display = 'none';
    this.getRandomPhrase().addPhraseToDisplay();
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    const allLi = document.querySelectorAll('li');
    let flag = false;
    for (let li of allLi) {
      if (li.classList.contains('hide')) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    return flag;
  }

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    const heartList = document.querySelectorAll('.tries');
    var last = heartList[heartList.length - (this.missed + 1)];
    last.firstChild.src = 'images/lostHeart.png';
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    overlay.style.display = 'block';
    overlay.classList.remove('start');

    const gameOverMsg = document.getElementById('game-over-message');

    if (gameWon == true) {
      overlay.classList.add('win');
      gameOverMsg.innerText = 'Congratulations!  Play again?';
    } else {
      overlay.classList.add('lose');
      gameOverMsg.innerText = 'You ran out of lives.  Try again?';
    }
    
  }


}