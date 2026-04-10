import { useState } from 'react'
import './App.css'
import MainView from './components/mainView/mainView'
import Photo from './components/Photo/Photo'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>    <MainView /><Photo />
  </div>
  )
}

export default App
