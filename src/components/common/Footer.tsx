import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto mb-4 md:mb-0" />
          <div className="flex space-x-4">
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/privacy" className="hover:text-blue-400">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-400">Terms</Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} AI Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}