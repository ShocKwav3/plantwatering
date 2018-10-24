import express from 'express';
const router = express.Router();

router.use('/sensors', require('./sensors'));

module.exports = router;