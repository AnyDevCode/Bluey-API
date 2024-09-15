const express = require("express");
const router = express.Router();

const db = require("../../../utils/supabase");
const { sortKeys } = require("../../../utils/utils");

router.get("/", async (req, res) => {
    let { orderby, sort, limit } = req.query;

    limit = (limit && !isNaN(parseInt(limit))) ? parseInt(limit) : 30;
    orderby = orderby || "id";
    sort = (sort && sort.toLowerCase() === "desc") ? false : true;

    const { data, error } = await db.from("characters").select("*").order(orderby, { ascending: sort }).limit(limit);
    
    if (error) {
        return res.status(400).json({ error: "An error occurred while fetching characters" });
    }

    data.forEach((character) => {
        character.episodes_url = `${process.env.BASE_URL}/v1/characters/${character.id}/episodes`;
        character.url = `${process.env.BASE_URL}/v1/characters/${character.id}`;
    });
    
    return res.status(200).json(sortKeys(data));
    }
);

router.get("/:id_or_name", async (req, res) => {
    let { id_or_name } = req.params;

    let id = (id_or_name && !isNaN(parseInt(id_or_name))) ? parseInt(id_or_name) : null;
    let name = (id) ? null : id_or_name;

    const { data, error } = (id) ? await db.from("characters").select("*").eq("id", id).single() : await db.from("characters").select("*").eq("name", name).single();

    if (error) {
        console.log(error);
        return res.status(400).json({ error: "An error occurred while fetching the character" });
    }

    if (!data) {
        return res.status(404).json({ error: "Character not found" });
    }

    data.episodes_url = `${process.env.BASE_URL}/v1/characters/${data.id}/episodes`;

    return res.status(200).json(sortKeys(data));
});

module.exports = router;