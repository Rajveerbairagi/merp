import { Note } from '@/types/notes';

interface NotesListProps {
  notes: Note[];
}

export default function NotesList({ notes }: NotesListProps) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{note.date}</p>
        </div>
      ))}
    </div>
  );
}