import { Map, User, Users, FileText } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type BottomNavProps = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: 1, label: '세계관', icon: Map },
    { id: 2, label: '주연', icon: User },
    { id: 3, label: '조연', icon: Users },
    { id: 4, label: '테스트 로그', icon: FileText },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
      {/* SafeArea padding for iOS */}
      <div className="pb-safe">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-2 sm:px-6 h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                  isActive ? 'text-slate-800' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className={`p-1 rounded-full ${isActive ? 'bg-slate-100' : ''}`}>
                   <Icon size={22} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
                </div>
                <span className={`text-[10px] sm:text-xs font-medium tracking-tight ${isActive ? 'font-bold' : ''}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
