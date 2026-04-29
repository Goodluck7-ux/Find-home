"use client";
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <div className="p-4 border-t flex gap-3 items-center">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-3 rounded-full border outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />

      <button
        onClick={handleSend}
        className="bg-orange-400 text-white p-3 rounded-full"
      >
        ➤
      </button>
    </div>
  );
}