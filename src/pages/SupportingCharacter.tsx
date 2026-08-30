import { motion } from 'motion/react';

export default function SupportingCharacter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-5 pt-8 pb-32 space-y-16"
    >
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">조연</h1>
        <p className="text-sm text-slate-500 font-medium tracking-wide">인물 소개</p>
      </header>
      
      {/* 아빠: 서주태 */}
      <section className="space-y-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
            👨 아빠: 서주태 <span className="text-base text-slate-500 font-medium">(당신의 친부)</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">나이: 57세</span>
            <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">성별: 남성</span>
            <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">키: 181cm</span>
            <span className="px-3.5 py-1.5 bg-slate-800 text-white rounded-full text-sm font-bold shadow-sm">MBTI: ESTP</span>
          </div>
        </div>

        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-xl">👤</span> 외형 및 특징
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">흑발에 고동색 눈, 서글서글한 눈매를 가진 중년 남성임.</li>
            <li className="leading-relaxed break-keep">181cm의 훤칠한 키와 탄탄한 체격을 유지하고 있음.</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-xl">🎭</span> 성격 및 일상
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">
              대형 OTA 플랫폼 '저스트 고(Just Go)'의 CEO로, 특유의 낙천적이고 호탕한 성격과 강한 추진력을 지님.
              <div className="mt-2.5 p-3.5 bg-slate-50 border border-slate-100 rounded-lg text-[13px] text-slate-500 flex items-start gap-2">
                <span className="text-slate-400 font-bold shrink-0">*</span>
                <p className="leading-relaxed break-keep"><strong>OTA(Online Travel Agency)</strong>: '야놀자', '여기어때', '익스피디아' 등과 같이 온라인 상에서 숙박, 항공권, 여행 상품 등을 예약할 수 있도록 돕는 여행 플랫폼을 의미함.</p>
              </div>
            </li>
            <li className="leading-relaxed break-keep">아내인 현주를 끔찍이 아끼는 엄청난 애처가이며, 부부 금슬이 세계관 최강 수준임.</li>
            <li className="leading-relaxed break-keep">아내와의 데이트 및 여행 상품 현장 답사를 핑계로 밖으로 나돌아 집에 잘 들어오지 않으며, 대신 자녀들에게 물질적인 지원을 아낌없이 제공함.</li>
            <li className="leading-relaxed break-keep">당신의 의사를 항상 존중하며 사생활에 대한 불필요한 간섭을 일절 하지 않음.</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-xl">👨‍👩‍👧‍👦</span> 당신 및 연오와의 관계
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">애초에 이 거대한 듀플렉스 하우스를 지은 이유 자체가, 재혼 후 아내와 남들 눈치 보지 않고 뜨거운 밤을 보내기 위함이었음.</li>
            <li className="leading-relaxed break-keep">종종 당신과 연오에게 늦둥이 동생이 필요하냐며 호탕하게 실없는 농담을 던짐.</li>
            <li className="leading-relaxed break-keep">당신과 의붓아들인 연오의 사이가 마냥 좋은 친형제남매 같다고 굳게 믿고 있음.</li>
            <li className="leading-relaxed break-keep">새롭게 아들이 된 연오를 무척 귀여워하고 아낌.</li>
          </ul>
        </article>
      </section>

      {/* 구분선 */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* 엄마: 양현주 */}
      <section className="space-y-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
            👩 엄마: 양현주 <span className="text-base text-slate-500 font-medium">(연오의 친모)</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">나이: 57세</span>
            <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">성별: 여성</span>
            <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">키: 166cm</span>
            <span className="px-3.5 py-1.5 bg-slate-800 text-white rounded-full text-sm font-bold shadow-sm">MBTI: ENFP</span>
          </div>
        </div>

        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-xl">👤</span> 외형 및 특징
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">166cm의 키에 분홍빛 중단발, 반짝이는 금안과 둥근 눈매를 지님.</li>
            <li className="leading-relaxed break-keep">나이를 가늠하기 힘들 정도로 사랑스러운 동안 외모의 소유자임.</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-xl">🎭</span> 성격 및 일상
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">감정이 풍부하고 즉흥적이며, 다소 푼수 같으면서도 미워할 수 없는 매력을 지님.</li>
            <li className="leading-relaxed break-keep">다국어 능력자로 해외여행을 매우 자주 다니며, 남편 주태와 함께 여행 패키지 개발에 적극적으로 참여함.</li>
            <li className="leading-relaxed break-keep">매우 개방적인 사고방식을 가지고 있어 타인에 대한 편견이나 선입견이 없음.</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-xl">👨‍👩‍👧‍👦</span> 당신 및 연오와의 관계
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">같은 돌싱 처지였던 소꿉친구 주태와 서로의 자식을 돌봐주다 눈이 맞아 재혼했으며, 지금도 남편과 친구처럼 허물없이 친밀하게 지냄.</li>
            <li className="leading-relaxed break-keep">당신이 자신의 친아들 연오를 무척 잘 돌봐준다고 굳게 믿고 있어 항상 고마운 마음을 품고 있음.</li>
            <li className="leading-relaxed break-keep">친아들인 연오가 겉으로는 당신에게 틱틱거리면서도 내심 당신을 아주 잘 따른다고 생각함.</li>
          </ul>
        </article>
      </section>
    </motion.div>
  );
}
