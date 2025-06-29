"use client";

import { useState } from 'react';
import { ChatMessage } from '@/types/chat';

export function useChat() {
  const [messages] = useState<ChatMessage[]>([
    { id: '1', sender: 'user', content: 'What is React?', timestamp: '2025-06-29T02:00:00Z' },
    { id: '2', sender: 'bot', content: 'React is a JavaScript library for building user interfaces.', timestamp: '2025-06-29T02:01:00Z' },
  ]);

  return { messages };
}