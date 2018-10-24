module.exports = function (io, _, socket, boardVariables) {
  const { five } = boardVariables
  let moisture = new five.Sensor("A0");
  socket.on("click", () => {
    console.log(`New Message: `);
  });
  socket.on("disconnect", () => {
    console.log("One connection was closed!");
  });
}