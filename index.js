/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-const */
/* eslint-disable new-cap */
const consoleScreen = require('./dist/console-screen.cjs');

const screen = new consoleScreen();

let player1 = { space: '' };
let player2 = { space: '' };
let index = 0;
let message = 'ready..';

let won;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  screen.rendering(
    `    [${index} / ${screen.$.screenX}]  ${message}\n\n\n${player1.space}*\n${player2.space}*`
  );
  index += 1;
  if (index >= 25) {
    message = 'start!';

    if (player1.space.length <= screen.$.screenX - 4) {
      if (!won) won = 'player1';
      player1.space += ' ';
      if (getRandom(1, 2) === 1) {
        player1.space += ' ';
      }
    }
    if (player2.space.length <= screen.$.screenX - 4) {
      if (!won) won = 'player2';
      player2.space += ' ';
      if (getRandom(1, 2) === 1) {
        player2.space += ' ';
      }
    }
  }
}, 40);
