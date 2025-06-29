"use client";

import NotesList from '@/components/dashboard/NotesList';
import { useNotes } from '@/hooks/useNotes';

export default function Notes() {
  const { notes } = useNotes();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Notes</h1>
      <NotesList notes={notes} />
    </div>
  );
}