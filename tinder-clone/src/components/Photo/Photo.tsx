import { useState } from 'react'
import dzik from '../../../public/dzik.jpg'

import './Photo.css';

function Photo() {
  const [count, setCount] = useState(0)

  return (
    <div id="photo">
      <img src={dzik} alt="Dzik" /> 
       </div>
  )
}

export default Photo