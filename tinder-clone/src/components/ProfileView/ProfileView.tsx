import ProfileName from "../ProfileName/ProfileName";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import UserContact from "../UserContact/UserContact";
import Bio from "../Bio/Bio";
import HomeButton from "../HomeButton/HomeButton";
import ActionButtons from "../ActionButtons/ActionButtons";
import TinderLogo from "../../assets/Tinder_full_logo.png";
import { persons } from "../MainView/MainView";

function ProfileView() {
  const personIndex = 0;

  const person = persons[personIndex];

  return (
    <div>
      <div>
        <img src={TinderLogo} alt="Tinder Logo" />
      </div>

      <ProfileName person={person} />
      <ProfilePhoto person={person} />
      <ActionButtons />
      <HomeButton />
      <br />
      <Bio person={person} />
      <UserContact person={person} />
    </div>
  );
}

export default ProfileView;
