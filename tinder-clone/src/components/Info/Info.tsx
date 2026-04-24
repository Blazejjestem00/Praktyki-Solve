import "./Info.css";
import { FaInstagram } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import type { User } from "../../services/api";

type Person = User & { photoUrl?: string[] };

interface InfoProps {
  person: Person;
  onSwipe: (direction: "left" | "right") => void;
}

function seededPhotoUrls(userId: number, count = 3) {
  return Array.from({ length: count }, (_, i) => {
    const seed = `${userId}-${i}`;
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/400/600`;
  });
}

function Info({ person, onSwipe }: InfoProps) {
  const [photoIndex, setPhotoIndex] = useState(0);

  // reset zdjęć przy zmianie usera
  useEffect(() => {
    setPhotoIndex(0);
  }, [person.id]);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-25, 0, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const likeOpacity = useTransform(x, [20, 140], [0, 1]);
  const nopeOpacity = useTransform(x, [-140, -20], [1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 150) onSwipe("right");
    else if (info.offset.x < -150) onSwipe("left");
  };

  const fallbackPhotos = seededPhotoUrls(person.id);
  const photos = person.photoUrl?.length ? person.photoUrl : fallbackPhotos;

  if (!photos.length) return null;

  const handlePhotoClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    const isLeft = clickX < rect.width / 2;

    setPhotoIndex((prev) =>
      isLeft
        ? (prev - 1 + photos.length) % photos.length
        : (prev + 1) % photos.length,
    );
  };

  return (
    <div className="content">
      <motion.div
        className="tinder-card"
        style={{ x, rotate, opacity }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        {/* badges */}
        <motion.div
          className="swipe-badge swipe-badge-like"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>

        <motion.div
          className="swipe-badge swipe-badge-nope"
          style={{ opacity: nopeOpacity }}
        >
          NOPE
        </motion.div>

        {/* SINGLE PHOTO SYSTEM */}
        <div className="photo2" onClick={handlePhotoClick}>
          {/* progress */}
          <div className="photo-progress">
            {photos.map((_, i) => (
              <div
                key={i}
                className={`progress-bar ${i <= photoIndex ? "active" : ""}`}
              />
            ))}
          </div>

          {/* image */}
          <img src={photos[photoIndex]} alt={person.name} />
        </div>

        {/* TEXT */}
        <div className="text">
          <div className="name-row">
            <span className="name">{person.name}</span>
            <span className="surname">{person.surname || ""}</span>
            <span className="age">{person.age}</span>
          </div>

          <span className="caption">
            {person.caption || "No caption provided"}
          </span>

          <ul>
            {person.interests?.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>

          <span className="instagram">
            <FaInstagram /> @{person.instagram || "unknown"}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Info;
