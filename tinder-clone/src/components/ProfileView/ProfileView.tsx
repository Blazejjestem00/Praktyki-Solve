import { useState } from "react";
import ProfileName from "../ProfileName/ProfileName";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import UserContact from "../UserContact/UserContact";
import Bio from "../Bio/Bio";
import { persons } from "../MainView/MainView";

function ProfileView() {
  const [person] = useState(0);

  return (
    <div>
      <ProfileName person={persons[person]} />
      <ProfilePhoto person={persons[person]} />
      <UserContact person={persons[person]} />
      <Bio person={persons[person]} />
    </div>
  );
}

export default ProfileView;
