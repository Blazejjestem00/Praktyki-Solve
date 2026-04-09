import { useState } from 'react'
import './App.css'
import MainView from './components/mainView/mainView'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>    <MainView />
  </div>
  )
}

export default App
