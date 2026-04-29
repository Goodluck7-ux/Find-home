"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Page() {
  const [activeUser, setActiveUser] = useState("Maria Silva");

  return (
    <div className="flex h-screen p-6 gap-6">
      <Sidebar onSelectUser={setActiveUser} />
      <ChatWindow activeUser={activeUser} />
    </div>
  );
}