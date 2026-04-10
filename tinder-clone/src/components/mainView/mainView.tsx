import { useState } from 'react'
import dzik from '../../../public/dzik.jpg'
import Info from '../info/info'

import Description from '../description/Description'
import List from '../list/List'
import Photo from '../Photo/Photo'
function MainView() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div><Photo /></div>
      <div><Info /></div>
      <div>
        <div>
          <List />
          <Description />
        </div>
      </div>
    </div>
  )
}

export default MainView
