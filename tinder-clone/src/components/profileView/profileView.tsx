import { useState } from "react";
import ProfileName from "../profileName/profileName";
import ProfilePhoto from "../profilePhoto/profilePhoto";
import UserContact from "../UserContact/UserContact";
import ActionButtons from "../ActionButtons/ActionButtons";
import Bio from "../Bio/Bio";
import { osoby } from "../mainView/mainView";

function ProfileView() {
  const [person, setPerson] = useState(0);

  return (
    <div>
      <ProfileName osoba={osoby[person]} />

      <UserContact osoba={osoby[person]} />
      <Bio osoba={osoby[person]} />
    </div>
  );
}

export default ProfileView;
