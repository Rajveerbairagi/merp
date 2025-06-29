export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
      {children}
    </div>
  );
}