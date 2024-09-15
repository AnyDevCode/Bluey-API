const express = require('express');
const router = express.Router();
const { getCharacters, getCharacterByIdOrName } = require('../../../controllers/characterController');

router.get('/', getCharacters);
router.get('/:id_or_name', getCharacterByIdOrName);

module.exports = router;