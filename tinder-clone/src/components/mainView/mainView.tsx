import { useState } from 'react'
import dzik from '../../../public/dzik.jpg'
import Info from '../info/info'

import Description from '../description/Description'
import List from '../list/List'
function MainView() {
  const [count, setCount] = useState(0)

  return (
  <div></div>
  <div><Info /></div>
  <div>
    
        <List />
    <Description />
    
  </div>
  
  )
}

export default MainView
