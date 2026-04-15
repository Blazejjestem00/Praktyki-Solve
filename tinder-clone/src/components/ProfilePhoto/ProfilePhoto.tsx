import { useState } from "react";
import "./ProfilePhoto.css";

function ProfilePhoto({ person }: any) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % person.photoUrl.length);
  };

  return (
    <div className="photo-container">
      <div className="photo-progress">
        <div className="photo-container">
          <div className="photo-progress">
            {person.photoUrl.map((_: any, i: number) => (
              <div
                key={i}
                className={i === index ? "active-photo" : "inactive-photo"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="List">
        <img
          src={person.photoUrl[index]}
          alt="profile"
          onClick={handleClick}
          className="photo"
        />
      </div>
    </div>
  );
}

export default ProfilePhoto;
