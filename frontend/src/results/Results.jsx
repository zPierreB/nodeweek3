import { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import '../App.css'

const Results = () => {
  const [results, setResults] = useState([])
  const index = async () => {
    await axios.get('http://localhost:8000/results')
      .then((res) => {
        setResults(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    index()
  }, [])

  return (
    <>
      <h1>Results of the contest!</h1>
      {results.map((result) =>
        <li>
          <h3>{result.name} </h3>
          <p>{moment(result.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </li>
      )}
    </>
  )
}

export default Results
