"use client";

import { useState } from 'react';
import { Roadmap } from '@/types/roadmap';

export function useRoadmap() {
  const [roadmaps] = useState<Roadmap[]>([
    { id: '1', title: 'Web Development', progress: 60 },
    { id: '2', title: 'Data Science', progress: 30 },
  ]);

  return { roadmaps };
}