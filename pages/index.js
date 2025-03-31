
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0eae5] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-serif text-[#1a1332] mb-6">Jean Ochoa Lover & Co.</h1>
      <p className="text-lg text-[#1a1332] mb-10">Explore the Modern Love Story of Jean and Kyra</p>
      <Link href="/gallery">
        <a className="bg-[#1a1332] text-[#f0eae5] px-6 py-3 rounded-xl font-semibold hover:bg-[#32254e] transition">
          View Our Gallery
        </a>
      </Link>
    </div>
  )
}
