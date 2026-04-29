"use client";
import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatWindow({ activeUser }) {
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(activeUser);
      return saved
        ? JSON.parse(saved)
        : [
            {
              text: "Hi! Is the villa still available next weekend?",
              sender: false,
            },
            {
              text: "Yes, would Saturday at 3pm work for a viewing?",
              sender: true,
            },
          ];
    }
  });

  // Save messages per user
  useEffect(() => {
    localStorage.setItem(activeUser, JSON.stringify(messages));
  }, [messages, activeUser]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (newMessage) => {
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: newMessage, sender: true },
    ]);

    // Fake reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Got it 👍", sender: false },
      ]);
    }, 1000);
  };

  return (
    <div className="w-2/3 bg-white rounded-2xl flex flex-col shadow">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white">
          {activeUser?.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{activeUser}</p>
          <p className="text-sm text-green-500">Online now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages?.map((msg, i) => (
          <MessageBubble key={i} text={msg.text} isSender={msg.sender} />
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}