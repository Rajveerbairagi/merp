"use client";

import RoadmapCard from '@/components/dashboard/RoadmapCard';
import { useRoadmap } from '@/hooks/useRoadmap';

export default function Roadmap() {
  const { roadmaps } = useRoadmap();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Learning Roadmaps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roadmaps.map((roadmap) => (
          <RoadmapCard key={roadmap.id} title={roadmap.title} progress={roadmap.progress} />
        ))}
      </div>
    </div>
  );
}