"use client";

import RoadmapCard from '@/components/dashboard/RoadmapCard';
import NotesList from '@/components/dashboard/NotesList';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { useRoadmap } from '@/hooks/useRoadmap';
import { useNotes } from '@/hooks/useNotes';

export default function Dashboard() {
  const { roadmaps } = useRoadmap();
  const { notes } = useNotes();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Roadmaps</h2>
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} title={roadmap.title} progress={roadmap.progress} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Notes</h2>
          <NotesList notes={notes} />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Learning Analytics</h2>
        <AnalyticsChart />
      </div>
    </div>
  );
}