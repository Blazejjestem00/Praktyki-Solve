import { useState } from 'react'
import './Description.css'

function description() {
  const [count, setCount] = useState(0)

  return (
    <div className='description1'>
      <p>Description</p>
      <p>This is a simple description of the user.</p>
    </div>
  )
}

export default description
