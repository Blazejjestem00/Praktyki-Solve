import { useState } from "react";
import {
  conversations as initialConversations,
  type Conversation,
} from "./chatData";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import "./Chats.css";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

async function askOpenRouter(messages: { role: string; content: string }[]) {
  
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:5173",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages,
    }),
    
  });

  if (!res.ok) throw new Error(`Błąd API: ${res.status}`);
  const data = await res.json();
  return data.choices[0].message.content as string;
}

function Chats() {
  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const activeConv = conversations.find((c) => c.id === activeChatId) ?? null;

  const addMessage = (chatId: number, from: "me" | "bot", text: string) => {
    const newMsg = {
      id: Date.now(),
      from,
      text,
      timestamp: Date.now(),
    };
    setConversations((prev) =>
      prev.map((c) =>
        c.id === chatId ? { ...c, messages: [...c.messages, newMsg] } : c,
      ),
    );
  };

  const handleSend = async (text: string) => {
    if (activeChatId === null) return;
    addMessage(activeChatId, "me", text);
    setIsLoading(true);

    try {
      const activeConvNow = conversations.find((c) => c.id === activeChatId);
      const history = (activeConvNow?.messages ?? []).map((m) => ({
        role: m.from === "me" ? "user" : "assistant",
        content: m.text,
      }));

      const reply = await askOpenRouter([
        ...history,
        { role: "user", content: text },
      ]);

      addMessage(activeChatId, "bot", reply);
    } catch (e: any) {
      console.error("Błąd szczegóły:", e?.message, e);
      addMessage(activeChatId, "bot", "Błąd połączenia z AI.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chats-layout">
      <ChatList
        conversations={conversations}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
      />
      <div className="chats-main">
        {activeConv ? (
          <ChatWindow
            conversation={activeConv}
            onSend={handleSend}
            isLoading={isLoading}
          />
        ) : (
          <div className="chats-empty">
            <span>Wybierz rozmowę 💬</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chats;
