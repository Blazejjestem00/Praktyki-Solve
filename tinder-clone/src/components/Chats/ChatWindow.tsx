import { useEffect, useRef } from "react";
import type { Conversation, Message } from "./chatData";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";


interface ChatWindowProps {
  conversation: Conversation;
  onSend: (text: string) => void;
}

function ChatWindow({ conversation, onSend }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [conversation.messages]);

  return (
    <div className="chat-window">
    
      <div className="chat-window-header">
        <img
          src={conversation.photoUrl}
          alt={conversation.name}
          className="chat-window-avatar"
        />
        <span className="chat-window-name">{conversation.name}</span>
      </div>

   
      <div className="chat-window-messages">
        {conversation.messages.map((msg: Message) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

  
      <MessageInput onSend={onSend} />
    </div>
  );
}

export default ChatWindow;
