import lodash from 'lodash';

const buildBoard = () => {
  const board = [];
  for (let row = 1; row <= 15; row++) {
    let nextRow = [];
    for (let col = 1; col <= 15; col++) {
      nextRow.push(new BoardLocation(row, col));
    }
    board.push(nextRow);
  }

  return board;
};

const BoardLocation = function(row, col, tile=null) {
  this.row = row;
  this.col = col;
  this.multiplier = getMultiplier({ row, col });
  this.tile = tile;

  return this;
}

const Board = function() {
  this.board = buildBoard();


  // word: malAria - A is a blank
  this.playWord = function(word, startingLocation, horizontal=true) {
    let wordMultiplier = 1;
    let { row, col } = startingLocation;
    let letterPoints = 0;
    /// make sure space clear
    word.forEach(letter => {

    });
  }

};

const isBlank = letter => letter === letter.toUpperCase();

// const playLetter = letter => {

// }

const Word = function(letters, startingLocation, horizontal=true) {
  this.letters = letters;
}

const Tile = function(letter) {
  this.letter = letter;
  this.value = isBlank(letter) ? 0 : TILE_VALUES[letter];

  return this;
}

const getMultiplier = ({ row, col }) => {
  if (lodash.get(DOUBLE_LETTER_LOCATIONS, [row, col], false)) {
    return 2;
  }
  if (lodash.get(TRIPLE_LETTER_LOCATIONS, [row, col], false)) {
    return 3;
  }
  if (lodash.get(DOUBLE_WORD_LOCATIONS, [row, col], false)) {
    return -2;
  }
  if (lodash.get(TRIPLE_WORD_LOCATIONS, [row, col], false)) {
    return -3;
  }
  return 1;
};

const DOUBLE_WORD_LOCATIONS = {
  2: { 2: true, 14: true },
  3: { 3: true, 13: true },
  4: { 4: true, 12: true },
  5: { 5: true, 11: true },
  8: { 8: true },
  11: { 5: true, 11: true },
  12: { 4: true, 12: true },
  13: { 3: true, 13: true },
  14: { 2: true, 14: true },
};

const TRIPLE_WORD_LOCATIONS = {
  1: { 1: true, 8: true, 15: true },
  8: { 1: true, 15: true },
  15: { 1: true, 8: true, 15: true },
};

const DOUBLE_LETTER_LOCATIONS = {
  1: { 4: true, 12: true },
  3: { 7: true, 9: true },
  4: { 1: true, 8: true, 15: true },
  7: { 3: true, 7: true, 9: true, 13: true },
  8: { 4: true, 12: true },
  9: { 3: true, 7: true, 9: true, 13: true },
  12: { 1: true, 8: true, 15: true },
  13: { 7: true, 9: true },
  15: { 4: true, 12: true },
};

const TRIPLE_LETTER_LOCATIONS = {
  2: { 6: true, 10: true },
  6: { 2: true, 6: true, 10: true, 14: true },
  10: { 2: true, 6: true, 10: true, 14: true },
  14: { 6: true, 10: true },
};

const TILE_VALUES = { a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10, '*': 0, };

export default buildBoard;