"use client";

import ChatWindow from '@/components/dashboard/ChatWindow';
import { useChat } from '@/hooks/useChat';

export default function MentorChat() {
  const { messages } = useChat();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Talk to Mentor</h1>
      <ChatWindow messages={messages} />
    </div>
  );
}