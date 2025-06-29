"use client";

import { useState } from 'react';
import { Note } from '@/types/notes';

export function useNotes() {
  const [notes] = useState<Note[]>([
    { id: '1', title: 'React Hooks', date: '2025-06-28' },
    { id: '2', title: 'API Integration', date: '2025-06-27' },
  ]);

  return { notes };
}