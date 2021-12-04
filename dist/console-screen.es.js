/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
var ConsoleScreen = /** @class */ (function () {
    function ConsoleScreen(screen) {
        this.$ = {
            screenX: process.stdout.columns,
            screenY: process.stdout.rows,
            status: 'offline',
            core: setInterval(function () { return 0; }, 64)
        };
        this.$ = Object.assign(this.$, screen || {});
    }
    ConsoleScreen.prototype.rendering = function (object) {
        this.clear();
        process.stdout.write("".concat(object));
        this.resetCursor();
    };
    ConsoleScreen.prototype.resetCursor = function () {
        process.stdout.write('\u001b[0;0H');
    };
    ConsoleScreen.prototype.clear = function () {
        process.stdout.write('\u001b[2J');
    };
    ConsoleScreen.prototype.exit = function () {
        clearInterval(this.$.core);
    };
    return ConsoleScreen;
}());

export { ConsoleScreen as default };
//# sourceMappingURL=console-screen.es.js.map
