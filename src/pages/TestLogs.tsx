import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

// Using unsplash placeholder images for demonstration.
// File names would logically be "1_0.jpg", "1_1.jpg", etc.
const testLogImages = [
  { id: '1_0', src: 'https://images.unsplash.com/photo-1595859703065-214c7760c2c3?w=800&q=80', alt: '테스트 로그 1-0' },
  { id: '1_1', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: '테스트 로그 1-1' },
  { id: '2_0', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', alt: '테스트 로그 2-0' },
  { id: '3_0', src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80', alt: '테스트 로그 3-0' },
  { id: '3_1', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: '테스트 로그 3-1' },
  { id: '3_2', src: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?w=800&q=80', alt: '테스트 로그 3-2' },
];

export default function TestLogs() {
  const [selectedGroup, setSelectedGroup] = useState<typeof testLogImages | null>(null);

  // Group images by prefix
  const groupedLogs = testLogImages.reduce((acc, log) => {
    const prefix = log.id.split('_')[0];
    if (!acc[prefix]) {
      acc[prefix] = [];
    }
    acc[prefix].push(log);
    return acc;
  }, {} as Record<string, typeof testLogImages>);

  const groups = Object.values(groupedLogs);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-5 pt-8 pb-32 space-y-8"
    >
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">테스트 로그</h1>
        <p className="text-sm text-slate-500 font-medium">분위기를 미리 맛볼 수 있는 로그 모음임.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {groups.map((group, index) => (
          <button
            key={index}
            onClick={() => setSelectedGroup(group)}
            className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            {group.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain block"
                style={{ margin: 0, padding: 0 }}
                loading="lazy"
              />
            ))}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGroup(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
          >
            <button
              onClick={() => setSelectedGroup(null)}
              className="fixed top-4 right-4 sm:top-8 sm:right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full my-auto flex flex-col rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10"
            >
              {selectedGroup.map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain block pointer-events-none"
                  style={{ margin: 0, padding: 0, maxHeight: 'none' }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
