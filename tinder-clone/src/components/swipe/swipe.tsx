import { useState } from 'react'

import './swipe.css'

function Swipe() {
  const [count, setCount] = useState(0)

  return (
    <div className='swap'>
        <p className='arrow_left'><img src={LeftArrow} alt="arrow"/></p>
        <p className='heart'><img src={Heart} alt="arrow"/></p>
        <p className='arrow_right'><img src={RightArrow} alt="arrow2"/></p>
    </div>
  )
}

export default Swipe