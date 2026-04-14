import { useState } from 'react'
import ProfileName from '../profileName/profileName'
import ProfilePhoto from '../profilePhoto/profilePhoto'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProfileName osoba={count} />
      <ProfilePhoto osoba={count} />
    </div>
  )
}

export default App