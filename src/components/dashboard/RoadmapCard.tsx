import { Roadmap } from '@/types/roadmap';

export default function RoadmapCard({ title, progress }: Roadmap) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 mt-2">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{progress}% Complete</p>
    </div>
  );
}