import Matches from "../Matches/Matches";
import { useEffect, useMemo, useState } from "react";
import { api } from "../../services/api";
import type { User } from "../../services/api";

function seededPhotoUrl(userId: number) {
  const seed = `${userId}-pair`;
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/400/600`;
}

function Pairs() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      try {
        // Using userId 1 as default current user
        const data = await api.fetchMatches(1);
        setUsers(data);
      } catch (error) {
        console.error("Failed to load matches:", error);
      } finally {
        setLoading(false);
      }
    }
    loadMatches();
  }, []);

  const persons = useMemo(
    () =>
      users.map((u) => ({
        ...u,
        photo: u.photoUrl?.[0] ?? seededPhotoUrl(u.id),
      })),
    [users],
  );

  if (loading)
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
        Loading matches...
      </div>
    );

  if (users.length === 0)
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
        No matches yet! Keep swiping ❤️
      </div>
    );

  return (
    <div className="grid">
      {persons.map((person) => (
        <Matches
          key={person.id}
          name={person.name}
          photoUrl={person.photo}
        />
      ))}
    </div>
  );
}
export default Pairs;