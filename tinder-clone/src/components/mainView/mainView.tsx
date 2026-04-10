import { useState } from 'react'
import Info from '../info/info'

import Description from '../description/Description'
import List from '../list/List'
function MainView() {
  const [count, setCount] = useState(0)

  return (
  <div><Info /></div>
  <div>
    
        <List />
    <Description />
    
  </div>
  
  )
}

export default MainView
