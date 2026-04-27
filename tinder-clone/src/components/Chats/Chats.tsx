import { useState } from "react";
import {
  conversations as initialConversations,
  type Conversation,
} from "./chatData";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import "./Chats.css";

function Chats() {
  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  const activeConv = conversations.find((c) => c.id === activeChatId) ?? null;

  const handleSend = (text: string) => {
    if (activeChatId === null) return;

    const newMsg = {
      id: Date.now(),
      from: "me" as const,
      text,
      timestamp: Date.now(),
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeChatId
          ? {
              ...c,
              messages: [...c.messages, newMsg],
            }
          : c,
      ),
    );
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
