import express from 'express'
/*import five from 'johnny-five'
import edison from 'edison-io'



const board = new five.board({
    io: new edison()
})
*/const router = express.Router()
router.get('/', (req, res) => {

    /*board.on("ready", function() {
        var led = new five.Led(13);
        led.blink();
      });*/
    res.send('Master Device SENSOR Control !!!!!!');

});

module.exports = router;