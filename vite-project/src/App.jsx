import { useState } from 'react'
import { processString } from './index'
import './App.css'


function App() {  

    const [string, setString] = useState('')
    const [result, setResult] = useState('')

    const handleChange = (e) => {
        setString(e.target.value)
      
        const resultString = processString(e.target.value)
        setResult(resultString)
    }


  return (
    <>
     
      <input type="text" value={string} onChange={handleChange} />
      <p>Day - {result.day}</p>
      <p>Month - {result.month}</p>
      <p>City - {result.city}</p>
   
    </>
  )
}

export default App
