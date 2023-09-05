import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import RollDice from './rollDice/RollDice.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [patries, setPatries] = useState([])

  const index = async () => {
    axios.get('http://localhost:8000/patries')
      .then((res) => {
        setPatries(res.data.patries)
        console.log(patries)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const update = async (number) => {
  //   axios.put('http://localhost:8000/patries/')
  // }

  const checkWin = (winResult) => {
    setCount(winResult)
  }

  useEffect(() => {
    index()
  }, [])

  return (
    <>
      <h1>Wanna win a patrie? Roll the dice!</h1>
      <h2>Pastries left: {count} </h2>
      <div>
        {patries.length > 0 && patries.map((patrie) =>
          <li key={patrie._id}>
            <p><strong>{patrie.name}</strong>, Amount: {patrie.number} <button onClick={() => setCount((count) => count - 1)} disabled={count <= 0}>Take the {patrie.name} </button></p>
          </li>
        )}
      </div>
      <RollDice checkWin={checkWin} />
    </>
  )
}

export default App
