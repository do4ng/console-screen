/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { Screen } from './interfaces/screen';

class ConsoleScreen {
  public $: Screen = {
    screenX: process.stdout.columns,
    screenY: process.stdout.rows,
    status: 'offline',
    core: setInterval(() => 0, 64),
  };

  constructor(screen?: Screen) {
    this.$ = Object.assign(this.$, screen || {});
  }

  rendering(object: string) {
    this.clear();
    process.stdout.write(`${object}`);
    this.resetCursor();
  }

  resetCursor() {
    process.stdout.write('\u001b[0;0H');
  }

  clear() {
    process.stdout.write('\u001b[2J');
  }
}

export default ConsoleScreen;
