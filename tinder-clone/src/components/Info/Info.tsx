import "./Info.css";
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
