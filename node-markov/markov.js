/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], 
   * "cat": ["in"], 
   * "in": ["the"], 
   * "hat": [null]} */

  makeChains() {
    // TODO
    // creating obj with each word from text is key, the value is whatever word is immediately after
    // keys don't repeat (i.e. "the" is only a key once)
    let wordAssocitaions = {}
    for(let i = 0; i < this.words.length; i++){
      let firstWord = this.words[i];
      let secondWord = this.words[i+1];
      if(wordAssocitaions[firstWord] !== undefined){
        wordAssocitaions[firstWord].push(secondWord)
      }
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) { // numWords is length of made up text
    // TODO

  }
}
