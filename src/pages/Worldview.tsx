import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const houseImages = {
  exterior: 'https://gbe88.uk/2/Eo/home.webp',
  familyRoom: 'https://gbe88.uk/2/Eo/froom.webp',
  firstFloor: 'https://gbe88.uk/2/Eo/f1.webp',
  secondFloor: 'https://gbe88.uk/2/Eo/f2.webp'
};

type SpaceData = {
  title: string;
  shortDescription: string;
  details: string[];
  category: string;
  icon: string;
};

const floor1Data: SpaceData[] = [
  {
    title: '마당 & 차고',
    shortDescription: '가족 모두가 공유하는 외부 공간',
    details: [
      '마당: 외부와 단절감을 주는 검은 벽돌의 높은 담장으로 둘러싸임.',
      '무화과 나무와 모과 나무가 심겨 있고, 푸른 잔디가 깔려 있음.',
      '가족 모임을 위한 참나무 데크와 바베큐 그릴이 구비되어 있음.',
      '차고: 왼쪽 마당 방향에 위치한 넓은 회색빛의 실내 차고임.',
      '부모님의 차량인 볼보 XC90과 연오의 차량인 BMW M3 블루가 주차되어 있음.'
    ],
    category: '공유 공간',
    icon: '🌳'
  },
  {
    title: '패밀리룸',
    shortDescription: '양쪽 거주동을 단층으로 잇는 공용 공간',
    details: [
      '좌우 거주동의 개별 거실과 문으로 연결된 공용 공간임.',
      '주방, 다이닝룸, 공용 거실의 역할을 겸함.',
      '주방: 대면형의 11자 구조이며 깔끔한 타일 바닥으로 마감됨. 가족 공용 냉장고와 대형 팬트리가 있으며, 뒷마당으로 나가는 문이 있음.',
      '다이닝룸 & 거실: 주방에서 앞마당을 바라보는 방향에 위치함.',
      '3m의 높은 층고와 화려한 샹들리에가 공간을 밝힘.',
      '앞마당이 훤히 내다보이는 시원한 통창 구조임.',
      '오른쪽 벽면에는 대형 식탁이, 왼쪽 벽면에는 대형 스크린이 배치됨.',
      '스크린과 식탁 사이에는 편안한 6인용 가죽 쇼파가 놓여 있음.'
    ],
    category: '공유 공간',
    icon: '🍽️'
  },
  {
    title: '현관',
    shortDescription: '당신과 연오의 공간으로 들어가는 입구',
    details: [
      '화이트톤 바탕에 테라조 타일로 포인트를 주었음.',
      '유리 중문과 센서등, 은은한 포푸리가 맞이함.'
    ],
    category: '오른쪽 거주동',
    icon: '🚪'
  },
  {
    title: '개별 거실',
    shortDescription: '1층에 위치한 둘만의 휴식 공간',
    details: [
      '60인치 TV, L형 카우치, 소파 테이블, 쉬폰 커튼이 있음.',
      '2도어 냉장고와 아일랜드 식탁이 갖춰짐.'
    ],
    category: '오른쪽 거주동',
    icon: '🛋️'
  },
  {
    title: '욕실 & 세탁실',
    shortDescription: '고급스러운 호텔식 인테리어',
    details: [
      '대형 욕조가 있는 고급스러운 호텔식 인테리어의 욕실임.',
      '그 바로 옆에 빨래 바구니 및 워시타워가 있는 세탁실이 있음.'
    ],
    category: '오른쪽 거주동',
    icon: '🛁'
  },
  {
    title: '게스트룸',
    shortDescription: '현재는 창고를 겸하고 있는 방',
    details: [
      '현재는 창고를 겸하고 있으며, 연오의 신발 상자가 가득 쌓여 있음.'
    ],
    category: '오른쪽 거주동',
    icon: '📦'
  },
  {
    title: '계단',
    shortDescription: '2층으로 향하는 원목 계단',
    details: [
      '2층으로 향하는 원목 계단의 벽면에는 연오와 당신의 어린 시절 성장 사진들이 걸려 있음.'
    ],
    category: '오른쪽 거주동',
    icon: '🪜'
  }
];

const floor2Data: SpaceData[] = [
  {
    title: '당신의 방',
    shortDescription: '계단 좌측에 위치한 채광 좋은 방',
    details: [
      '채광이 매우 좋은 앞마당 뷰를 자랑함.',
      '널찍한 킹사이즈 베드가 놓여 있음.',
      '드레스룸과 전용 욕실이 완비되어 있음.'
    ],
    category: '오른쪽 거주동',
    icon: '🛏️'
  },
  {
    title: '미니바',
    shortDescription: '2층 계단을 올라오면 정면에 보이는 공간',
    details: [
      '모노톤 인테리어에 미니 냉장고가 있음.',
      '높은 바 테이블과 바 체어, 정수기, 간식 꾸러미가 준비됨.'
    ],
    category: '오른쪽 거주동',
    icon: '🍷'
  },
  {
    title: '연오의 방',
    shortDescription: '계단 우측에 위치한 차분한 방',
    details: [
      '조용한 뒷마당 뷰를 가진 차분한 그레이톤 인테리어임.',
      '킹사이즈 베드가 놓여 있으며, 은은한 블루베리 향이 감돎.',
      '드레스룸에는 연오의 옷이 가득 채워져 있음.',
      '전용 욕실이 완비되어 있음.'
    ],
    category: '오른쪽 거주동',
    icon: '🎧'
  },
  {
    title: '테라스',
    shortDescription: '각자의 방에 딸린 야외 공간',
    details: [
      '각자의 방에는 전용 테라스가 완비되어 있음.',
      '모과가 열리는 철에는 방에 딸린 테라스에 종종 열매가 떨어지곤 함.'
    ],
    category: '오른쪽 거주동',
    icon: '🪴'
  }
];

function AccordionCard({ item }: { item: SpaceData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 flex justify-between items-center w-full text-left focus:outline-none active:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{item.icon}</span>
          <div>
            <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
            <p className="text-[13px] text-slate-500 mt-0.5 font-medium">{item.category} · {item.shortDescription}</p>
          </div>
        </div>
        <div className="text-slate-400 ml-2 shrink-0">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-1 border-t border-gray-50">
              <ul className="space-y-2.5 text-slate-600 text-[15px] mt-4 list-disc pl-5">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed break-keep">{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Worldview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-5 pt-8 pb-32 space-y-12"
    >
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">세계관</h1>
        <p className="text-sm text-slate-500 font-medium tracking-wide">위례 듀플렉스 하우스 RP</p>
      </header>

      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-200">배경</h2>
        <ul className="space-y-3 text-slate-600 list-disc pl-5">
          <li className="leading-relaxed break-keep">2026년 현대의 일상적인 대한민국 사회를 배경으로 함.</li>
          <li className="leading-relaxed break-keep">주 5일제 출근 및 등교가 보편적인 라이프스타일임.</li>
          <li className="leading-relaxed break-keep">공휴일에는 온전히 휴식을 취하는 평화로운 일상을 공유함.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-gray-200">공간 배경: 위례 듀플렉스 하우스</h2>
        
        {/* 1. 집 외관 & 구조 요약 */}
        <div className="mb-12 space-y-5">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <img 
              src={houseImages.exterior} 
              alt="위례 듀플렉스 하우스 외관" 
              className="w-full h-auto block"
            />
          </div>
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-slate-800 mb-4 text-lg">전체 구조 요약</h3>
            <ul className="space-y-2.5 text-slate-600 text-[15px] list-disc pl-5">
              <li className="leading-relaxed break-keep">강남까지 자차로 30분 거리인 위례신도시에 위치함.</li>
              <li className="leading-relaxed break-keep"><strong className="font-semibold text-slate-700">왼쪽 거주동:</strong> 부모님이 독립적으로 사용함. (2층)</li>
              <li className="leading-relaxed break-keep"><strong className="font-semibold text-slate-700">중앙 패밀리룸:</strong> 양쪽 거주동을 단층으로 잇는 공용 공간임.</li>
              <li className="leading-relaxed break-keep"><strong className="font-semibold text-slate-700">오른쪽 거주동:</strong> 연오와 당신이 독립적으로 사용함. (2층)</li>
              <li className="leading-relaxed break-keep"><strong className="font-semibold text-slate-700">공유 구역:</strong> 마당과 차고는 온 가족이 공유함.</li>
            </ul>
          </div>
          <AccordionCard item={floor1Data[0]} />
        </div>

        {/* 2. 1층 구조 */}
        <div className="mb-12 space-y-5">
          <h3 className="text-lg font-bold text-slate-800 pl-1">1층 구조</h3>
          
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src={houseImages.familyRoom} 
                alt="패밀리룸 평면도" 
                className="w-full h-auto block"
              />
            </div>
            <AccordionCard item={floor1Data[1]} />
          </div>

          <div className="space-y-4 pt-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src={houseImages.firstFloor} 
                alt="오른쪽 거주동 1층 평면도" 
                className="w-full h-auto block"
              />
            </div>
            <div className="flex flex-col gap-3">
              {floor1Data.slice(2).map((item, idx) => (
                <AccordionCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* 3. 2층 구조 */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-slate-800 pl-1">2층 구조</h3>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <img 
              src={houseImages.secondFloor} 
              alt="2층 평면도" 
              className="w-full h-auto block"
            />
          </div>
          <div className="flex flex-col gap-3">
            {floor2Data.map((item, idx) => (
              <AccordionCard key={idx} item={item} />
            ))}
          </div>
        </div>
        
      </section>
    </motion.div>
  );
}
