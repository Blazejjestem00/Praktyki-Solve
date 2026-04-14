import { useState } from "react";
import type profileName from "../profileName/profileName";

function profilePhoto({ osoba }: any) {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((prev) => (prev + 1) % osoba.zdjecieUrl.length);
  };

  return (
    <div key={osoba.id} className="List">
      <img
        src={osoba.zdjecieUrl[index]}
        alt="profile"
        onClick={handleClick}
        style={{ width: "100%", cursor: "pointer" }}
      />
    </div>
  );
}
export default profilePhoto;
