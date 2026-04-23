import { useEffect, useRef } from "react";
import type { Conversation, Message } from "./chatData";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import "./Chats.css";

interface ChatWindowProps {
  conversation: Conversation;
  onSend: (text: string) => void;
}

function ChatWindow({ conversation, onSend }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation.messages]);

  return (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-window-header">
        <img
          src={conversation.photoUrl}
          alt={conversation.name}
          className="chat-window-avatar"
        />
        <span className="chat-window-name">{conversation.name}</span>
      </div>

      {/* Messages */}
      <div className="chat-window-messages">
        {conversation.messages.map((msg: Message) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <MessageInput onSend={onSend} />
    </div>
  );
}

export default ChatWindow;
