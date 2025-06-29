import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="relative bg-cover h-[810px] flex items-center justify-center bg-[url('https://lh3.googleusercontent.com/HqTRsbrZQzos1dm_SMS51COTuSXI3lnLGoTdRP0oLxhQidV27Ly0xwkSjrNcjEcyTyx9VJJ76K-K2Qq_MB-uSPA7S5oNVfiAXHGQIGaCLeifJVe3hQ=w1440')]">
        <div className="absolute inset-0"></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your AI-Powered Learning Journey</h1>
          <p className="text-lg md:text-xl mb-6">Personalized roadmaps, notes, and mentorship.</p>
          <Link href="/auth/register" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </section>
      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center bg-[#060606]">
        <div className="max-w-4xl mx-auto px-4 py-12 ">
          <h2 className="text-3xl font-bold font-mono mb-6">Welcome to MERP</h2>
          <p className="text-lg font-serif mb-4">
            MERP is your personal AI assistant for learning. Whether you're a student, professional, or lifelong learner,
            MERP helps you create personalized learning roadmaps, take notes, and connect with mentors.
          </p>
          <p className="text-lg">
            Join us today and start your journey towards mastering new skills and knowledge!
          </p>
        </div>
      </section>
    </div>
  );
}