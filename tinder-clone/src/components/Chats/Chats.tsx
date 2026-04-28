import { useState } from "react";
import {
  conversations as initialConversations,
  type Conversation,
} from "./chatData";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import "./Chats.css";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: "AIzaSyBfF4uvFQCBIKuyBO_1UBlF9VNJAiFp4XM",
});

// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

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
      const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: text,
      });
      addMessage(activeChatId, "bot", response.text ?? "Brak odpowiedzi.");
    } catch (e: any) {
      console.log("Błąd szczegóły:", e?.message, e);
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
          <ChatWindow conversation={activeConv} onSend={handleSend} />
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
