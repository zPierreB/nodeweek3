import Patrie from "../models/patrie.model.js";

export const getAllPatries = async (req, res) => {
    const patries = await Patrie.find()
    res.json({ patries })
    console.log('Pastries showed successfully!')
}

export const updatePatryById = async (req, res) => {
    const id = req.params.id
    await Patrie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((result) => {
            res.json({ result })
            console.log('result: ', req.body)
        })
        .catch((error) => {
            res.status(500).json({ error: "Can't update a pastry." })
            console.log(error)
        })
    console.log('Updated successfully!')
}

