/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import BottomNav from './components/BottomNav';
import Worldview from './pages/Worldview';
import MainCharacter from './pages/MainCharacter';
import SupportingCharacter from './pages/SupportingCharacter';
import IncludedImages from './pages/IncludedImages';
import TestLogs from './pages/TestLogs';

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-[#f5f5f3] font-sans selection:bg-slate-300 selection:text-slate-900 overflow-x-hidden">
      <main className="w-full">
        <AnimatePresence mode="wait">
          {activeTab === 1 && <Worldview key="worldview" />}
          {activeTab === 2 && <MainCharacter key="main-character" />}
          {activeTab === 3 && <SupportingCharacter key="supporting-character" />}
          {activeTab === 4 && <IncludedImages key="included-images" />}
          {activeTab === 5 && <TestLogs key="test-logs" />}
        </AnimatePresence>
      </main>
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

