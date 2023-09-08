import User from '../models/user.model.js'

export const getUserByUsername = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    res.json({ user })
    console.log('Get one email!')
}