import { useState } from 'react'
import './App.css'
import FunctionalComponent from './Components/FunctionalComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Alo Mundo</h1>
      <FunctionalComponent />


    </>
  )
}

export default App
