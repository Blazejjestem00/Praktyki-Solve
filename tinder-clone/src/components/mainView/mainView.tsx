import { useState } from 'react'
import Info from '../info/info'


function MainView() {
  const [count, setCount] = useState(0)

  return (
  <div><Info /></div>
  )
}

export default MainView
