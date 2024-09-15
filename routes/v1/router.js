const express = require('express');
const CharactersRouter = require('./characters/router');

const router = express.Router();

router.use('/v1', CharactersRouter);

module.exports = router;