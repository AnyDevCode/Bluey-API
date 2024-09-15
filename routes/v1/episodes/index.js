const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const { data, error } = await global.db.from("episodes").select("*");
    
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    
    return res.status(200).json(data);
    }
);

module.exports = router;