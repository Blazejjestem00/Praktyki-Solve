import { useState } from 'react'
import Description from '../description/Description'
import List from '../list/List'
function MainView() {
  const [count, setCount] = useState(0)

  return (
  <div>
    
        <List />
    <Description />
    
  </div>
  
  )
}

export default MainView
