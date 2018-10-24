var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison(),
  repl: false
});

const boardVariables = {
  board,
  five
}

module.exports = function (io, _) {
  board.on("ready", function() {
    var led = new five.Led(13);
    io.on('connection', (socket) => {
      led.on();
      console.log(`New connection detected`);
      require('./sensors')(io, _, socket, boardVariables);
    });
  });
}
