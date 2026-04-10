import { useState } from 'react'
import '../../../public/../src/components/info/styl.css'


function Info() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <div id='content'>
    <label id="imie">Anna</label><label id='inter'> </label>
    <label id="nazwisko">Nowak</label><label id='inter'>, </label>
    <label id="wiek">12</label><br />
    <ul>
      <li>Sport</li>
      <li>Muzyka</li>
      <li>Literatura</li>
    </ul>
  <label id='instagram'>@Annadzik</label>
  </div>
  </div>
  )
}

export default Info
