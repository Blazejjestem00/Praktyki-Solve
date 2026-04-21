import Info from "../Info/Info";
import Swipe from "../Swipe/Swipe";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import type { User } from "../../services/api";

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

    // Save to history for rewind
    setHistory((prev) => [...prev, currentUser]);
    // Remove from current stack
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
    return (
      <div
        style={{
          color: "white",
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading users...
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div
        style={{
          color: "white",
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        No more people in your area! 💔
      </div>
    );
  }

  const stackUsers = users.slice(0, 3);
  const topIndex = stackUsers.length - 1;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
        position: "relative",
        backgroundColor: "#0b0c10",
        backgroundImage:
          "radial-gradient(900px 600px at 50% 20%, rgba(255, 0, 128, 0.12), transparent 60%), radial-gradient(700px 500px at 20% 80%, rgba(46, 204, 113, 0.10), transparent 60%)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "450px",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {stackUsers.map((user, index) => {
          const isTop = index === 0;
          const depthFromTop = index;

          return (
            <div
              key={user.id}
              style={{
                position: "absolute",
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

      <div style={{ zIndex: 20 }}>
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