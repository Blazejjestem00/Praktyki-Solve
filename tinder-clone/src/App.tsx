import { useState } from 'react'
import './App.css'
import Swipe from './components/swipe/swipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Swipe/>
    </div>
  )
}

export default App
