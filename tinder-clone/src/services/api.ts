const API_BASE_URL = "http://127.0.0.1:8000";

export interface User {
  id: number;
  name: string;
  surname: string | null;
  age: number;
  email: string;
  interests: string[] | null;
  instagram: string | null;
  caption: string | null;
  created_at: string;
  photoUrl?: string[];
}

export interface SwipeRequest {
  swiper_id: number;
  swiped_id: number;
  action: "like" | "pass";
}

export const api = {
  async fetchUsers(): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/users/all`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },

  async sendSwipe(swipeData: SwipeRequest): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(swipeData),
    });
    if (!response.ok) throw new Error("Failed to send swipe");
  },

  async fetchMatches(userId: number): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/matches/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch matches");
    return response.json();
  },
};