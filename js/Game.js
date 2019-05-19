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
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  
  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
  createPhrases() {
    return [
      'When the Rubber Hits the Road',
      'Throw In the Towel',
      'Mountain Out of a Molehill',
      'Fish Out Of Water',
      'Head Over Heels'
    ]
  }
}