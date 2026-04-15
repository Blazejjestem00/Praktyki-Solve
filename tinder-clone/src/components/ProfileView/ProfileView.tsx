import { useState } from "react";
import ProfileName from "../ProfileName/ProfileName";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import UserContact from "../UserContact/UserContact";
import Bio from "../Bio/Bio";
import HomeButton from "../HomeButton/HomeButton";
import ActionButtons from "../ActionButtons/ActionButtons";
import TinderLogo from "../../assets/Tinder_full_logo.png";
import { persons } from "../MainView/MainView";

function ProfileView() {
  const [person] = useState(0);

  return (
    <div>
      <div>
        <img src={TinderLogo} alt="Tinder Logo" style={{ padding: "" }} />
      </div>
      <ProfileName person={persons[person]} />
      <ProfilePhoto person={persons[person]} />
      <ActionButtons />
      <HomeButton />
      <br />
      <Bio person={persons[person]} />
      <UserContact person={persons[person]} />
    </div>
  );
}

export default ProfileView;
