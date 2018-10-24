import express from 'express';
const router = express.Router();

//index page on GET request
router.get('/', (req, res) => {
  //console.log(req.url);
  res.send('Master Device Control !!!');
});

module.exports = router;
