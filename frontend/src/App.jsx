import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './App.css'
import RollDice from './rollDice/RollDice.jsx'

const App = () => {
  const [count, setCount] = useState(0)
  const [maxNumbers, setMaxNumbers] = useState()
  const [pastries, setPastries] = useState([])

  const index = async () => {
    await axios.get('http://localhost:8000/patries')
      .then((res) => {
        setPastries(res.data.patries)
      })
      .catch((error) => {
        console.log(error)
      })
    await getAllNumbers()
  }

  const update = async (pastry) => {
    axios.put(`http://localhost:8000/patries/${pastry._id}`, {
      _id: pastry._id,
      name: pastry.name,
      number: (pastry.number - 1),
      order: pastry.order
    })
    axios.post(`http://localhost:8000/results`, {
      name: pastry.name,
      amount: 1,
      order: pastry.order
    })
    setCount(count - 1)
    setMaxNumbers(maxNumbers - 1)
  }

  const getAllNumbers = async () => {
    let maxNum = 0
    pastries.map((pastry) => {
      maxNum = maxNum + pastry.number
    })
    setMaxNumbers(maxNum - 30)
    return maxNumbers
  }

  const checkWin = (winResult) => {
    setCount(winResult)
  }

  useEffect(() => {
    index()
  }, [count, maxNumbers])

  console.log('count:', count)

  return (
    <>
      <h1>Wanna win a pastry? Roll the dice!</h1>
      {maxNumbers <= 0 ?
        <Link to='/results'>Check results!</Link>
        :
        <>
          <h2>You can select {count} {count < 2 ? 'pastry' : 'pastries'}</h2>
          <h2>{maxNumbers} {maxNumbers < 2 ? 'pastry' : 'pastries'} left to win!</h2>
          <div>
            {pastries.length > 0 && pastries.map((pastry) =>
              <li key={pastry._id}>
                <p name={pastry.name}><strong>{pastry.name}</strong>, Amount: {pastry.number} <button onClick={() => update(pastry)} disabled={count <= 0}>Take the {pastry.name} </button></p>
              </li>
            )}
          </div>
          <RollDice checkWin={checkWin} />
        </>
      }
    </>
  )
}

export default App
