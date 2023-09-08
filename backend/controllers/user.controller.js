import User from '../models/user.model.js'

export const getUserByUsername = async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    const user = await User.findOne({ username: username, password: password }).orFail()

    res.json({ user })
    req.session.isLogged = true
}

export const logout = (req, res) => {
    req.session.destroy()

    return res.redirect('/login')
}

export const isAuth = async (req, res, next) => {
    if (req.session.isLogged) {
        next()
    } else {
        return res.redirect('/login')
    }
}