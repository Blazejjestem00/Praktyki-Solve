import { useState } from 'react'


function MainView() {
  const [count, setCount] = useState(0)

  return (
    <div className='description'>
      <p>Description</p>
      <p>This is a simple description of the user.</p>
    </div>
  )
}

export default MainView
