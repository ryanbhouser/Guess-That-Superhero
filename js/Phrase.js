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
    const phraseUl = document.querySelector('#phrase ul');

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
  checkLetter() {
    
  }

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter() {

  }
}