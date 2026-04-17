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
import { FaInstagram } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { User } from "../../services/api";

type Person = User & { photoUrl?: string[] };

interface InfoProps {
  person: Person;
  onSwipe: (direction: "left" | "right") => void;
}

function seededPhotoUrls(userId: number, count = 3) {
  // Deterministic per-user photos without needing local assets.
  return Array.from({ length: count }, (_, i) => {
    const seed = `${userId}-${i}`;
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/400/600`;
  });
}

function Info({ person, onSwipe }: InfoProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-25, 0, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const likeOpacity = useTransform(x, [20, 140], [0, 1]);
  const nopeOpacity = useTransform(x, [-140, -20], [1, 0]);

  const handleDragEnd = (_event: any, info: any) => {
    if (info.offset.x > 150) {
      onSwipe("right");
    } else if (info.offset.x < -150) {
      onSwipe("left");
    }
  };

  const fallbackPhotos = seededPhotoUrls(person.id);
  const primaryPhoto = person.photoUrl?.[0] ?? fallbackPhotos[0];

  return (
    <div id="content">
      <motion.div
        className="tinder-card"
        style={{ x, rotate, opacity }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <motion.div className="swipe-badge swipe-badge-like" style={{ opacity: likeOpacity }}>
          LIKE
        </motion.div>
        <motion.div className="swipe-badge swipe-badge-nope" style={{ opacity: nopeOpacity }}>
          NOPE
        </motion.div>
        <div id="photo2">
          <img
            src={primaryPhoto}
            alt={person.name}
          />
        </div>
        <div id="text">
          <div className="name-row">
            <span id="name">{person.name}</span>
            <span id="surname"> {person.surname || ""} </span>
            <span id="age"> {person.age}</span>
          </div>
          <span id="caption">{person.caption || "No caption provided"}</span>
          <ul>
            {person.interests?.map((interest: string, index: number) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <span id="instagram">
            <FaInstagram /> @{person.instagram || "unknown"}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Info;
