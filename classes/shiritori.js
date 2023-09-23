'use strict'

class Shiritori {
    words = [];
    #game_over = false;

    get words() {
        return this.words;
    }

    play(inputWord) {
        if (this.words.length === 0) {
            this.words.push(inputWord);
            return this.words;
        }

        let lastWord = this.words[this.words.length - 1];
        let lastLetter = lastWord[lastWord.length - 1];

        if (this.words.includes(inputWord) || inputWord[0] !== lastLetter) {
            this.#game_over = true;
            return 'game over';
        }

        this.words.push(inputWord);
        return this.words;
    }

    restart() {
        this.words.length = 0;
        this.#game_over = false;
        return 'game restarted';
    }
}
