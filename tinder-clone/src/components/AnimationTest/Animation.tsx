import { motion } from "motion/react";
import { useEffect, useState } from "react";
import bozena from "../../assets/bozena.png";

function Animation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomX = Math.floor(Math.random() * 1000 - 500);
      const randomY = Math.floor(Math.random() * 1000 - 500);

      setPosition({ x: randomX, y: randomY });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <motion.img
        src={bozena}
        alt="moving"
        animate={{ x: position.x, y: position.y }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 120,
          duration: 0.5,
        }}
        style={{
          width: 200,
          height: 200,
          position: "absolute",
        }}
      />
    </div>
  );
}

export default Animation;
