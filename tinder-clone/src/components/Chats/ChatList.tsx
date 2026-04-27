import type { Conversation } from "./chatData";

function formatPreviewTime(ts: number) {
  const now = Date.now();
  const diff = now - ts;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 1) return "teraz";
  if (mins < 60) return `${mins} min`;
  if (hours < 24) return `${hours} godz`;
  return `${days} dni`;
}

interface ChatListProps {
  conversations: Conversation[];
  activeChatId: number | null;
  setActiveChatId: (id: number) => void;
}

function ChatList({
  conversations,
  activeChatId,
  setActiveChatId,
}: ChatListProps) {
  return (
    <div className="chat-list">
      {conversations.map((conv) => {
        const lastMsg = conv.messages[conv.messages.length - 1];
        const isActive = conv.id === activeChatId;
        return (
          <button
            key={conv.id}
            className={`chat-list-item ${isActive ? "chat-list-item--active" : ""}`}
            onClick={() => setActiveChatId(conv.id)}
          >
            <img
              src={conv.photoUrl}
              alt={conv.name}
              className="chat-list-avatar"
            />
            <div className="chat-list-info">
              <div className="chat-list-name">{conv.name}</div>
              <div className="chat-list-preview">
                {lastMsg ? (
                  <>
                    {lastMsg.from === "me" ? "Ty: " : ""}
                    {lastMsg.text}
                  </>
                ) : (
                  "Brak wiadomości"
                )}
              </div>

              <div className="chat-list-time">
                {lastMsg ? formatPreviewTime(lastMsg.timestamp) : ""}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default ChatList;
