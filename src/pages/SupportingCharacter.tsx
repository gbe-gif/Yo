import { motion } from 'motion/react';

export default function SupportingCharacter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-5 pt-8 pb-32 space-y-8 min-h-[80vh] flex flex-col"
    >
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">조연</h1>
        <p className="text-sm text-slate-500 font-medium">인물 소개</p>
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full">
          <span className="text-4xl mb-4 block">🚧</span>
          <h2 className="text-xl font-bold text-slate-700 mb-2">준비 중인 페이지임.</h2>
          <p className="text-slate-500 text-sm">곧 업데이트될 예정임.</p>
        </div>
      </div>
    </motion.div>
  );
}
