import { useState } from "react";
import { conversations as initialConversations, type Conversation } from "./chatData";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import "./Chats.css";

function Chats() {
  const [convs, setConvs] = useState<Conversation[]>(initialConversations);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  const activeConv = convs.find((c) => c.id === activeChatId) ?? null;

  const handleSend = (text: string) => {
    if (!activeChatId) return;
    setConvs((prev) =>
      prev.map((c) => {
        if (c.id !== activeChatId) return c;
        const newMsg = {
          id: c.messages.length + 1,
          from: "me" as const,
          text,
          timestamp: Date.now(),
        };
        return { ...c, messages: [...c.messages, newMsg] };
      })
    );
  };

  return (
    <div className="chats-layout">
      <ChatList
        conversations={convs}
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
