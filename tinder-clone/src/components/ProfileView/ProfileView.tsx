import ProfileName from "../ProfileName/ProfileName";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import UserContact from "../UserContact/UserContact";
import Bio from "../Bio/Bio";
import HomeButton from "../HomeButton/HomeButton";
import ActionButtons from "../ActionButtons/ActionButtons";
import TinderLogo from "../../assets/Tinder_full_logo.png";
import { persons } from "../MainView/MainView";
import { useParams } from "react-router-dom";
function ProfileView() {
  const { id } = useParams();

  const person = persons.find((p) => p.id === Number(id));

  if (!person) return <div>Nie znaleziono profilu</div>;

  return (
    <div>
      <img src={TinderLogo} alt="Tinder Logo" />

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
