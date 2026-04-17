import { useState } from "react";
import "./ProfilePhoto.css";

function ProfilePhoto({ person }: any) {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % person.photos.length);
  };

  return (
    <div className="photo-container" onClick={handleClick}>
      <div className="photo-progress">
        {person.photos.map((_: any, i: number) => (
          <div
            key={i}
            className={`progress-bar ${i <= index ? "active" : ""}`}
          />
        ))}
      </div>

      <img src={person.photos[index]} alt="profile" className="photo" />
    </div>
  );
}

export default ProfilePhoto;
