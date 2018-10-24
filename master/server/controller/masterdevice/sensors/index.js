import express from 'express';
const router = express.Router();

router.use('/moisture', require('./moisture'));

module.exports = router;