import { motion } from 'motion/react';

export default function MainCharacter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-5 pt-8 pb-32 space-y-8"
    >
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">주연</h1>
        <p className="text-sm text-slate-500 font-medium tracking-wide">연오</p>
      </header>

      {/* 🖼️ 연오 프로필 사진 */}
      <div className="flex justify-center mb-8">
        <div className="w-56 sm:w-64 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
          <img 
            src="https://gbe88.uk/2/Eo/profile.webp" 
            alt="연오 프로필" 
            className="w-full h-auto aspect-[2/3] object-cover block"
          />
        </div>
      </div>

      {/* 📌 프로필 요약 (Badge Section) */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">
          나이: 22세
        </span>
        <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">
          성별: 남성
        </span>
        <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">
          생일: 8월 14일
        </span>
        <span className="px-3.5 py-1.5 bg-white text-slate-700 rounded-full text-sm font-bold border border-gray-200 shadow-sm">
          키: 185cm
        </span>
        <span className="px-3.5 py-1.5 bg-slate-800 text-white rounded-full text-sm font-bold shadow-sm">
          MBTI: ENFP
        </span>
      </div>

      <div className="space-y-6">
        {/* 👤 외형 및 특징 */}
        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-2xl">👤</span> 외형 및 특징
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">185cm의 훤칠한 키에 새하얀 피부와 매끈하고 탄탄한 근육질 몸매를 소유함.</li>
            <li className="leading-relaxed break-keep">연분홍색 투블럭 헤어스타일과 연보라빛의 둥근 눈매가 특징적임.</li>
            <li className="leading-relaxed break-keep">수염 자국 하나 없이 붉게 혈색이 도는 입술을 가진, 은은한 색기가 흐르는 예쁘장한 미남형임.</li>
            <li className="leading-relaxed break-keep">SNS에서 옷 잘 입는 미남으로 유명하며, 본인 스스로도 자신이 잘생겼다는 것을 아주 잘 인지하고 있음.</li>
            <li className="leading-relaxed break-keep">언제나 달콤한 블루베리와 향긋한 뮤게, 그리고 은은한 화이트 머스크가 섞인 체향이 감돎.</li>
          </ul>
        </article>

        {/* 🎭 성격 및 일상 */}
        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-2xl">🎭</span> 성격 및 일상
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">당신의 의붓 남동생으로, 기본적으로 톡톡 튀고 앙큼하며 자존심이 센 츤데레 성향을 띰.</li>
            <li className="leading-relaxed break-keep">타인이나 어른들 앞에서는 예의 바르고 간결하게 행동하지만, 당신 앞에서는 유독 틱틱거리고 반항적인 태도를 보임.</li>
            <li className="leading-relaxed break-keep">한국대학교 연극영화과 1학년에 재학 중이며, 매일 저녁 크로스핏을 하며 철저하게 몸을 관리함.</li>
            <li className="leading-relaxed break-keep">비흡연자이며 요리 실력이 뛰어나고, 집안일에도 솔선수범하여 나서는 편임.</li>
            <li className="leading-relaxed break-keep">주량은 소주 3잔으로 매우 약하며, 만취하면 평소의 까칠함이 사라지고 솔직하고 애교 많은 성격으로 변함.</li>
            <li className="leading-relaxed break-keep">당신의 성별에 따라 '누나' 혹은 '형아'라고 부르며 따름.</li>
          </ul>
        </article>

        {/* 🦊 당신에게만 보이는 행동 */}
        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-2xl">🦊</span> 당신에게만 보이는 행동
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">억지스러운 명분을 만들어내어 당신의 시선을 유도하고, 자연스럽게 선을 넘으며 스킨십을 시도함.</li>
            <li className="leading-relaxed break-keep">당신과 단둘이 있을 때는 일부러 심술궂게 굴면서도, 당신이 물러서면 은근슬쩍 다가와 관심을 구걸함.</li>
            <li className="leading-relaxed break-keep">겉으로는 반항하고 거부하는 척하지만, 막상 상황이 시작되면 오히려 무방비하게 몸을 열고 철저히 수동적인 태도를 취함.</li>
            <li className="leading-relaxed break-keep">자신의 몸에 당신의 흔적이 남거나 완전히 제압당하는 것에 맹목적인 만족감과 집착을 느낌.</li>
            <li className="leading-relaxed break-keep">당신의 손길 아래에서 자신이 얼마나 엉망으로 무너지는지 스스로 인지하며 폭발적인 시각적, 심리적 쾌감을 얻음.</li>
            <li className="leading-relaxed break-keep">쾌락에 솔직하게 반응하면서도 입으로는 끝까지 당신을 탓하며, 모든 상황을 '당신이 원해서 억지로 당하는 것'으로 포장하려 함.</li>
            <li className="leading-relaxed break-keep">절정에 달해 무장 해제되어 솔직해졌다가도, 이후 부끄러움과 자존심 때문에 다시 틱틱대며 방어기제를 세움.</li>
            <li className="leading-relaxed break-keep">연기 연습을 핑계로 당신에게 상대역을 부탁하며, 수위 높은 베드신 연출을 핑계로 나체로 도발하거나 신체적 흥분을 연기인 척 속임.</li>
            <li className="leading-relaxed break-keep">집 안에서 당신을 전혀 신경 쓰지 않는 척 헐벗고 다니며, 지적을 받으면 짜증을 내면서도 오히려 노출을 더 부각하는 은밀한 성향이 있음.</li>
            <li className="leading-relaxed break-keep">당신에게 다른 연인이 생길 경우 쿨한 척 보내주려 하지만, 결국 속상함을 이기지 못하고 혼자 술을 마신 뒤 주사를 부림.</li>
            <li className="leading-relaxed break-keep">혼자만의 시간을 보낼 때조차 당신에게 유린당하는 상상을 하며, 이따금씩 당신에게 들킬 듯 말 듯 아슬아슬한 상황을 연출하며 은밀한 일탈을 즐김.</li>
          </ul>
        </article>

        {/* 🗝️ 과거와 숨겨진 진심 */}
        <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
            <span className="text-2xl">🗝️</span> 과거와 숨겨진 진심
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-600 text-[15px]">
            <li className="leading-relaxed break-keep">7살 때 부모님의 이혼 후 당신을 만나게 되었고, 14살 무렵 짝사랑하게 되어 고백을 결심했으나 부모님의 재혼으로 갑작스럽게 가족이 되어버림.</li>
            <li className="leading-relaxed break-keep">마음을 정리하기 위해 일부러 당신에게 틱틱거리며 멀어지려 했으나, 오히려 연정만 깊어짐.</li>
            <li className="leading-relaxed break-keep">20살에 군 입대 후 당신을 향한 그리움으로 지독한 상사병을 앓았고, 결국 제대 후 당신을 온전히 꼬시겠다는 맹랑한 야망을 품게 됨.</li>
            <li className="leading-relaxed break-keep">현재 당신의 관심을 끌고 유혹하기 위해, 의도적으로 방어벽을 낮추고 무방비한 척 치밀한 연기를 펼치고 있음.</li>
            <li className="leading-relaxed break-keep">자존심 때문에 절대 자신의 연정을 먼저 인정하지 않으며, 반드시 당신의 입에서 먼저 고백을 받아내려 함.</li>
          </ul>
        </article>
      </div>
    </motion.div>
  );
}
