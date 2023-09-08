import express from 'express'
import session from 'express-session'
import mongoose from "mongoose"
import cors from "cors"
const port = 8000

import patriesRouter from './routers/patrie.routes.js'
import resultRouter from './routers/result.routes.js'
import userRouter from './routers/user.routes.js'

const app = express()

app.options('*', cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT")
  next();
})

app.use(session({
  secret: 'doggy dog',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 30 }
}))

app.use('/patries', patriesRouter)
app.use('/results', resultRouter)
app.use('/login', userRouter)

try {
  await mongoose.connect('mongodb://localhost:27017/nodeweek3');
} catch (error) {
  handleError(error);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})