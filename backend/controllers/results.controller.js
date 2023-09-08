import Result from '../models/results.model.js'

export const getAllResults = async (req, res) => {
    const results = await Result.find().sort({ createdAt: 'asc' })
    res.json({ results })
    console.log('Results showed successfully!')
}

export const createResult = async (req, res) => {
    await Result.create(req.body)
        .then((result) => {
            res.json({ result })
            console.log('result post:', result)
            console.log('Result created successfully!')
        })
        .catch((error) => {
            res.status(500).json({ error: "Can't create a result." })
            console.log(error)
        })
}