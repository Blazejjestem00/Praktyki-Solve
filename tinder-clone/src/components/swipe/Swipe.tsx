import { useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { BiSolidRewindCircle } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import './Swipe.css'

function Swipe() {
  const [count, setCount] = useState(0)

  return (
    <div className="swipe">
      <div className="rewind"> <BiSolidRewindCircle /> </div>
      <div className="nope"> <MdClose /> </div>
      <div className="star"> <FaStar /> </div>
      <div className="heart"> <GoHeartFill /> </div>
      <div className="bolt"> <MdElectricBolt /> </div>
    </div>
  )
}

export default Swipe