const express = require('express');
const CharactersRouter = require('./index');

const router = express.Router();

router.use('/characters', CharactersRouter);

module.exports = router;