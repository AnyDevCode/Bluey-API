const Character = require('../models/character');

const getCharacters = async (req, res) => {
  try {
    const characters = await Character.getAllCharacters(req, res);
    return res.status(200).json(characters);
  } catch (error) {
    if (res.headersSent) {
      return;
    }
    return res.status(500).json({ message: error.message });
  }
}

const getCharacterByIdOrName = async (req, res) => {
  try {
    const character = await Character.getCharacterByIdOrName(req, res);
    return res.status(200).json(character);
  } catch (error) {
    if (res.headersSent) {
      return;
    }
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { getCharacters, getCharacterByIdOrName };