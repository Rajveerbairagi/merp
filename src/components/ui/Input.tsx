export default function Input({ type, placeholder }: { type: string; placeholder: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    />
  );
}