import ProfileName from "../ProfileName/ProfileName";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import UserContact from "../UserContact/UserContact";
import Bio from "../Bio/Bio";
import HomeButton from "../HomeButton/HomeButton";
import ActionButtons from "../ActionButtons/ActionButtons";
import TinderLogo from "../../assets/Tinder_full_logo.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { User } from "../../services/api";

function ProfileView() {
  const { id } = useParams();
  const [person, setPerson] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const users = await api.fetchUsers();
        const found = users.find((p) => p.id === Number(id));
        setPerson(found || null);
      } catch (error) {
        console.error("Failed to load user profile:", error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [id]);

  if (loading) return <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Loading profile...</div>;
  if (!person) return <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Nie znaleziono profilu</div>;

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