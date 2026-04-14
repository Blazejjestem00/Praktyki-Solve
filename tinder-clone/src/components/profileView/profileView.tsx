import { useState } from 'react'
import ProfileName from '../profileName/profileName'
import ProfilePhoto from '../profilePhoto/profilePhoto'


function profileView() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProfileName osoba={count} />
      <ProfilePhoto osoba={count} />
    </div>
  )
}

export default profileView