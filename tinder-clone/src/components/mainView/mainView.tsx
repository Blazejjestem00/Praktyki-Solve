import { useState } from 'react'
import Info from '../info/info'

import Description from '../description/Description'

function MainView() {
  const [count, setCount] = useState(0)

  return (
  <div><Info /></div>
  <div>
    <Description />
  </div>
  )
}

export default MainView
