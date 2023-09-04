import express from 'express'
import mongoose from "mongoose"
const port = 8000

import patriesRouter from "./routers/patrie.routes.js"

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/patries', patriesRouter)

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