import { useState } from "react";

function ProfilePhoto({ person }: any) {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((prev) => (prev + 1) % person.photoUrl.length);
  };

  return (
    <div key={person.id} className="List">
      <img
        src={person.photoUrl[index]}
        alt="profile"
        onClick={handleClick}
        style={{ width: "100%", cursor: "pointer" }}
      />
    </div>
  );
}
export default ProfilePhoto;
