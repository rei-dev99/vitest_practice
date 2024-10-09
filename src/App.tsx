import { useState } from 'react'
import './App.css'
import PokemonFinder from './components/PokemonFinder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonFinder />
    </>
  )
}

export default App
