import { useState } from 'react'
import Description from '../description/Description'
import Swipe from '../swipe/Swipe'

function MainView() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Description />
    <Swipe />
  </div>
  )
}

export default MainView
