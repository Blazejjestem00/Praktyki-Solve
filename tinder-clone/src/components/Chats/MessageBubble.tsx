import type { Message } from "./chatData";

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
}

interface MessageBubbleProps {
  message: Message;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const isMe = message.from === "me";
  return (
    <div className={`bubble-row ${isMe ? "bubble-row--me" : "bubble-row--them"}`}>
      <div className={`bubble ${isMe ? "bubble--me" : "bubble--them"}`}>
        <span className="bubble-text">{message.text}</span>
        <span className="bubble-time">{formatTime(message.timestamp)}</span>
      </div>
    </div>
  );
}

export default MessageBubble;
