
import { useState } from 'react'
import Link from 'next/link'

const photos = [
  {
    id: 1,
    src: '/gallery/photo1.jpg',
    alt: 'Photo 1',
    description: 'This photo was taken on our first trip together to the mountains. It reminds us of the peace and love we found in nature.'
  },
  {
    id: 2,
    src: '/gallery/photo2.jpg',
    alt: 'Photo 2',
    description: "Celebrating Jean's birthday — the moment we realized how much we mean to each other."
  },
]

export default function Gallery() {
  const [flipped, setFlipped] = useState({})

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-[#f0eae5] p-8">
      <h1 className="text-4xl font-serif text-center text-[#1a1332] mb-8">
        Our Love Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handleFlip(photo.id)}
            className="cursor-pointer perspective"
          >
            <div
              className={\`transition-transform duration-700 transform-style-preserve-3d relative w-full h-64 \${flipped[photo.id] ? 'rotate-y-180' : ''}\`}
            >
              <div className="absolute w-full h-full backface-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-64 rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#1a1332] text-[#f0eae5] p-6 rounded-2xl shadow-xl flex items-center justify-center text-center">
                <p className="font-serif text-lg">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/">
          <a className="bg-[#1a1332] text-[#f0eae5] px-6 py-3 rounded-xl hover:bg-[#32254e] transition">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  )
}
