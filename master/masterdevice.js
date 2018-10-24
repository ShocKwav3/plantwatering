var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function () {
  var write = (message) => {
    this.i2cWrite(0x08, Array.from(message, c => c.charCodeAt(0)));
  };
  this.i2cConfig();
  this.repl.inject({ write });

  write("Hello World");
});