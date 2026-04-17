import { useRef, useState } from "react";
import { FaInstagram, FaHeart, FaTimes } from "react-icons/fa";
import "./Info.css";

interface Person {
  id: string | number;
  name: string;
  age: number;
  photoUrl: string[];
  caption?: string;
  interests?: string[];
  instagram?: string;
}

interface InfoProps {
  person: Person | null;
  nextPerson: Person | null;
  onSwipe: (direction: "left" | "right") => void;
}

export default function Info({ person, onSwipe, nextPerson }: InfoProps) {
  const [x, setX] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const isDragging = useRef(false);
  const startPos = useRef(0);

  if (!person) return null;

  const getPos = (e: any) => e.clientX ?? e.touches[0].clientX;

  const handleStart = (e: any) => {
    if (e.button > 0) return;
    isDragging.current = true;
    startPos.current = getPos(e);
  };

  const handleMove = (e: any) => {
    if (isDragging.current) setX(getPos(e) - startPos.current);
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(x) > 120) {
      onSwipe(x > 0 ? "right" : "left");
      setPhotoIndex(0);
    }
    setX(0);
  };

  return (
    <div className="stack">
    
      <div className={`overlay like ${x > 60 ? "show" : ""}`}>
        <FaHeart /> LIKE
      </div>

      <div className={`overlay nope ${x < -60 ? "show" : ""}`}>
        <FaTimes /> NOPE
      </div>

      
      {[nextPerson, person].map((p, i) => {
        if (!p) return null;

    
        const isMainCard = i === 1;   

        return (
          <div
            key={p.id || i}
            className={`card-container ${isMainCard ? "main-card" : "back-card"}`}
            onMouseDown={isMainCard ? handleStart : undefined}
            onMouseMove={isMainCard ? handleMove : undefined}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={isMainCard ? handleStart : undefined}
            onTouchMove={isMainCard ? handleMove : undefined}
            onTouchEnd={handleEnd}
            style={
              isMainCard
                ? {
                    transform: `translateX(${x}px) rotate(${x / 20}deg)`,
                    transition: isDragging.current
                      ? "none"
                      : "0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2)",
                  }
                : {}
            }
          >
      
            <div
              className="photo-bg"
              onClick={() =>
                isMainCard &&
                setPhotoIndex((prev) => (prev + 1) % p.photoUrl.length)
              }
            >
              <img
                src={p.photoUrl[isMainCard ? photoIndex : 0]}
                draggable="false"
                alt=""
              />
            </div>

            <div className="card-ui">
              
              {isMainCard && (
                <div className="progress-container">
                  {p.photoUrl.map((_: any, idx: number) => (
                    <div key={idx} className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: idx <= photoIndex ? "100%" : "0%" }}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="profile-info">
                <div className="name-row">
                  {p.name}, <span className="age">{p.age}</span>
                </div>
                <p className="caption">{p.caption}</p>

                <div className="tags">
                  {p.interests?.map((t: string) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="instagram-link">
                  <FaInstagram /> @{p.instagram}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}