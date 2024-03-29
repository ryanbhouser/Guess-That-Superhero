/**
 * Handles the creation of phrases
 */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    // Loops through each character in this.phrase
    for (let i = 0; i < this.phrase.length; i++) {
      // return character, otherwise will return the index
      let char = this.phrase.charAt(i);
      let li = document.createElement('li');

      // if char is a space, create/append li w/ class 'hide space'
      // else, create/append li w/ class 'hide space ${char}'
      if (char === ' ') {
        li.className = 'hide space';
        li.textContent = char;
        phraseUl.appendChild(li);
      } else {
        li.className = `hide letter ${char}`;
        li.textContent = char;
        phraseUl.appendChild(li);
      }
    }
  }

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    const hiddenPhrase = document.querySelectorAll('li.hide');
    let flag = false;
    for (let i=0; i < hiddenPhrase.length; i++) {
      if (letter === hiddenPhrase[i].textContent) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    return flag;
  }

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    if (this.phrase.includes(letter)) {
      const letterLi = document.querySelectorAll(`.${letter}`);
      for (let li of letterLi) {
        li.classList.remove('hide');
        li.classList.add('show');
      }
    }
  }
}