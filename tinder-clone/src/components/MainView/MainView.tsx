import Info from "../Info/Info";
import Swipe from "../Swipe/Swipe";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import type { User } from "../../services/api";
import NavLinks from "../NavLinks/NavLinks";
import "./MainView.css";

function MainView() {
  const [users, setUsers] = useState<User[]>([]);
  const [history, setHistory] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState("dark");

  const [dragX, setDragX] = useState(0);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  useEffect(() => {
    async function load() {
      try {
        const data = await api.fetchUsers();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleSwipe = async (dir: "left" | "right") => {
    if (!users.length) return;

    const current = users[0];

    setHistory((h) => [...h, current]);
    setUsers((u) => u.slice(1));
    setDragX(0);

    await api.sendSwipe({
      swiper_id: 1,
      swiped_id: current.id,
      action: dir === "right" ? "like" : "pass",
    });
  };

  const rewind = () => {
    if (!history.length) return;

    const last = history[history.length - 1];
    setUsers((u) => [last, ...u]);
    setHistory((h) => h.slice(0, -1));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!users.length)
    return <div className={`empty ${theme}`}>No more users 💔</div>;

  const stack = users.slice(0, 3);

  return (
    <div className={`main-container ${theme}`}>
      <div className="card-wrapper">
        {stack.map((user, index) => {
          const isTop = index === 0;

          return (
            <div
              key={user.id}
              className={`card3 ${theme}`}
              style={{
                zIndex: stack.length - index,

                transform: isTop
                  ? `translateX(${dragX}px) rotate(${dragX * 0.04}deg)`
                  : `translateY(${index * 16}px) scale(${1 - index * 0.04})`,

                pointerEvents: isTop ? "auto" : "none",
              }}
              onMouseDown={(e) => {
                if (!isTop) return;

                const startX = e.clientX;

                const move = (ev: MouseEvent) => {
                  setDragX(ev.clientX - startX);
                };

                const up = () => {
                  const threshold = 180;

                  if (Math.abs(dragX) < 20) {
                    setDragX(0);
                  } else if (dragX > threshold) {
                    handleSwipe("right");
                  } else if (dragX < -threshold) {
                    handleSwipe("left");
                  } else {
                    setDragX(0);
                  }

                  window.removeEventListener("mousemove", move);
                  window.removeEventListener("mouseup", up);
                };

                window.addEventListener("mousemove", move);
                window.addEventListener("mouseup", up);
              }}
            >
              <Info person={user} onSwipe={handleSwipe} />
            </div>
          );
        })}
      </div>

      <NavLinks />

      <div className={`controls ${theme}`}>
        <Swipe
          onIncrement={() => handleSwipe("right")}
          onDecrement={() => handleSwipe("left")}
          onRewind={rewind}
          canRewind={history.length > 0}
        />
      </div>
    </div>
  );
}

export default MainView;
