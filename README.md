# console-screen

🪄 Console Screen

## Install

```bash
yarn add console-screen
npm install console-screen
```

## Use

```js
const ConsoleScreen = require('console-screen');
const screen = new ConsoleScreen();

screen.clear(); // Clear Console

screen.rendering('Hello, World!'); // Clear Console and Print Hello, World!

screen.resetCursor(); // Reset Cursor
```
