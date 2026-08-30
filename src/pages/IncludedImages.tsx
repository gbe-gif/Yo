import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  src: `https://gbe88.uk/Eo/${i + 1}.webp`,
  alt: `수록 이미지 ${i + 1}`
}));

export default function IncludedImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-5 pt-8 pb-32 space-y-8"
    >
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">수록 이미지</h1>
        <p className="text-sm text-slate-500 font-medium">작품 내에 사용되는 일러스트 및 배경 에셋 모음임.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(img.src)}
            className="block w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full aspect-[3/2] object-cover block bg-slate-50"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 sm:top-8 sm:right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedImage}
              alt="확대된 이미지"
              className="w-full max-w-5xl h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
