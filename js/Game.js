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
      'Doctor Strange',
      'Captain America',
      'Black Widow',
      'Nick Fury',
      'Captain Marvel',
      'Batman',
      'Black Panther',
      'Iron Man',
      'The Hulk',
      'Hawkeye',
      'Antman',
      'Spiderman',
      'Aquaman',
      'Stan Lee',
      'Wonder Woman',
      'Superman',
      'Scarlet Witch',
      'Rocket Racoon',
      'Gamora',
      'Ghost Rider',
      'Human Torch',
      'Silver Surfer',
      'Green Lantern'
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
    hideLogo.style.display = '';
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
      if (li.classList.contains('hide') && !li.classList.contains('space')) {
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
    hideLogo.style.display = 'none';
    overlay.classList.remove('start');
    

    const gameOverMsg = document.getElementById('game-over-message');

    if (gameWon == true) {
      overlay.classList.remove('win');
      overlay.classList.remove('lose');
      overlay.classList.add('win');
      gameOverMsg.innerText = 'You saved the day!  Play again?';
    } else {
      overlay.classList.remove('win');
      overlay.classList.remove('lose');
      overlay.classList.add('lose');
      gameOverMsg.innerText = 'You lost!  Reset the universe and try again?';
    }
  }

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
    const buttonLetter = button.textContent;
    button.disabled = true;
    if (!this.activePhrase.checkLetter(buttonLetter)) {
      button.classList.add('wrong');
      this.removeLife();
    } else {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(buttonLetter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }

  // EXTRA CREDIT :)
  physKeyboardInteraction(key) {
    const buttons = [].slice.call(document.querySelectorAll('button'));
    
    for (let i = 0; i < buttons.length; i++) {
      if (!pressedKeys.includes(key)) {
        if (key === buttons[i].textContent) {
          this.handleInteraction(buttons[i]);
        }
      }
    }
    
    pressedKeys.push(key);
  }

  resetGame() {
    // Remove all lis from phrase ul
    while (phraseUl.firstChild) {
      phraseUl.removeChild(phraseUl.firstChild);
    }

    // Enable all buttons
    const btns = document.querySelectorAll('button');
    for (let i=0; i<btns.length; i++) {
      btns[i].classList.remove('chosen');
      btns[i].classList.remove('wrong');
      btns[i].disabled = false;
    }

    // Refill hearts
    this.missed = 0;
    const heartList = document.querySelectorAll('.tries');
    for (let i=0; i < heartList.length; i++) {
      heartList[i].firstChild.src = 'images/liveHeart.png';
    }

    // Reset pressedKeys array
    pressedKeys.length = 0;
  }
}