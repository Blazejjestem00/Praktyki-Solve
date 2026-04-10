import { useState } from 'react'
import './App.css'
import MainView from './components/mainView/mainView'
import Swipe from './components/swipe/Swipe'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>    
    <MainView />
    <Swipe />
  </div>
  )
}

export default App
