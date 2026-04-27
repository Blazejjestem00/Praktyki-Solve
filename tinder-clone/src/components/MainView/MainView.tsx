import Info from "../Info/Info";
import Swipe from "../Swipe/Swipe";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import type { User } from "../../services/api";
import NavLinks from "../NavLinks/NavLinks";
import "./Mainview.css";

function MainView() {
  const [users, setUsers] = useState<User[]>([]);
  const [history, setHistory] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await api.fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to load users:", error);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  const handleSwipe = async (direction: "left" | "right") => {
    if (users.length === 0) return;
    const currentUser = users[0];
    setHistory((prev) => [...prev, currentUser]);
    setUsers((prev) => prev.slice(1));
    try {
      await api.sendSwipe({
        swiper_id: 1,
        swiped_id: currentUser.id,
        action: direction === "right" ? "like" : "pass",
      });
    } catch (error) {
      console.error("Failed to send swipe:", error);
    }
  };

  const rewind = () => {
    if (history.length === 0) return;
    const lastUser = history[history.length - 1];
    setUsers((prev) => [lastUser, ...prev]);
    setHistory((prev) => prev.slice(0, -1));
  };

  const increment = () => handleSwipe("right");
  const decrement = () => handleSwipe("left");

  if (loading) {
    return <div className="main-status">Loading users...</div>;
  }

  if (users.length === 0) {
    return <div className="main-status">No more people in your area! 💔</div>;
  }

  const stackUsers = users.slice(0, 3);

  return (
    <div className="main-view">
      <div className="main-stack">
        {stackUsers.map((user, index) => {
          const isTop = index === 0;
          const depthFromTop = index;
          return (
            <div
              key={user.id}
              className="main-card-wrapper"
              style={{
                zIndex: stackUsers.length - index,
                opacity: depthFromTop === 0 ? 1 : 0.75,
                pointerEvents: isTop ? "auto" : "none",
                filter: depthFromTop === 0 ? "none" : "saturate(0.9)",
              }}
            >
              <Info person={user} onSwipe={handleSwipe} />
            </div>
          );
        })}
      </div>

      <NavLinks />

      <div className="main-swipe">
        <Swipe
          onIncrement={increment}
          onDecrement={decrement}
          onRewind={rewind}
          canRewind={history.length > 0}
        />
      </div>
    </div>
  );
}

export default MainView;
