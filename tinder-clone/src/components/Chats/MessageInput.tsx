import { useState } from "react";
import "./Chats.css";

interface MessageInputProps {
  onSend: (text: string) => void;
}

function MessageInput({ onSend }: MessageInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="msg-input-bar">
      <input
        className="msg-input"
        type="text"
        placeholder="Napisz wiadomość..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="msg-send-btn" onClick={handleSubmit}>
        Wyślij
      </button>
    </div>
  );
}

export default MessageInput;
