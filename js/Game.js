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
    return new Phrase(this.phrases[random]);
  }
}