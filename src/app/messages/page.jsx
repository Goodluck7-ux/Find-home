"use client";
import ChatWindow from "@/component/ChatWindow";
import Sidebar from "@/component/sidebar";
import { useState } from "react";

export default function Page() {
  const [activeUser, setActiveUser] = useState("Maria Silva");

  return (
    <div className="flex h-screen p-6 gap-6">
      <Sidebar onSelectUser={setActiveUser} />
      <ChatWindow activeUser={activeUser} />
    </div>
  );
}