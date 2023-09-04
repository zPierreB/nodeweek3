import Patrie from "../models/patrie.model.js";

export const getAllPatries = async (req, res) => {
    const patries = await Patrie.find({})
    res.json({ patries })
}

