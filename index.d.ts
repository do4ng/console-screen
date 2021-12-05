interface Screen {
  screenX: number;
  screenY: number;
  status: 'online' | 'offline';
  core: Function | any;
}

declare class ConsoleScreen {
  constructor(screen?: Screen);

  /**
   * clear console and print
   * @param object print value
   */
  rendering(object: string): void;

  /**
   * cursor to 0,0
   */
  resetCursor(): void;

  /**
   * clear console
   */
  clear(): void;
}

export = ConsoleScreen;
