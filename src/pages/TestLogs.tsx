import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

type ImageObj = {
  id: string;
  src: string;
  alt: string;
};

const groups: ImageObj[][] = [
  [
    { id: '2_0', src: 'https://gbe88.uk/2/Eo/2_0.webp', alt: '테스트 로그' },
    { id: '2_1', src: 'https://gbe88.uk/2/Eo/2_1.webp', alt: '테스트 로그' },
  ],
  [
    { id: '3_0', src: 'https://gbe88.uk/2/Eo/3_0.webp', alt: '테스트 로그' },
    { id: '3_1', src: 'https://gbe88.uk/2/Eo/3_1.webp', alt: '테스트 로그' },
  ],
  [
    { id: '4_0', src: 'https://gbe88.uk/2/Eo/4_0.webp', alt: '테스트 로그' },
    { id: '4_1', src: 'https://gbe88.uk/2/Eo/4_1.webp', alt: '테스트 로그' },
  ],
  [
    { id: '1_0', src: 'https://gbe88.uk/2/Eo/1_0.webp', alt: '테스트 로그' },
  ],
];

export default function TestLogs() {
  const [selectedGroup, setSelectedGroup] = useState<ImageObj[] | null>(null);

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
                className="w-full h-auto object-cover block"
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
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
          >
            <button
              onClick={() => setSelectedGroup(null)}
              className="fixed bottom-8 right-6 sm:right-8 p-4 text-gray-400 hover:text-gray-200 transition-colors z-10"
            >
              <X size={36} strokeWidth={2.5} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl w-full m-auto flex flex-col rounded-xl overflow-hidden shadow-2xl bg-transparent"
            >
              {selectedGroup.map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block"
                  style={{ margin: 0, padding: 0 }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
