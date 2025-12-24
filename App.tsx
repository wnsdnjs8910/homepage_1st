import React, { useState } from 'react';
import { Section, PointBadge } from './components/Section';
import { GenAIImage } from './components/GenAIImage';
import { ClinicalChart } from './components/ClinicalChart';
import { Check, Star, ShieldCheck, Leaf, Activity, Phone, ChevronRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    gender: 'male'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 완료되었습니다.');
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-gray-800 font-sans selection:bg-pine-800 selection:text-gold-400">
      {/* Hero Section */}
      <header className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GenAIImage 
            prompt="Cinematic misty pine forest in mountains at sunrise, sun rays piercing through fog, hyper realistic, deep green and gold tones, 8k wallpaper"
            alt="Pine Forest"
            className="w-full h-full scale-105"
            aspectRatio="16:9"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-pine-900/90"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in-up flex flex-col items-center">
          <div className="inline-block border border-gold-400/50 px-6 py-2 rounded-full backdrop-blur-sm bg-black/20 mb-6">
             <p className="text-gold-400 text-sm md:text-base font-medium tracking-[0.2em] uppercase">Premium Pine Needle Extract</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
            더 파인 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">프리미엄</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light text-gray-100 mb-12 leading-relaxed drop-shadow-lg">
            천년의 생명력을 담은<br/>
            <span className="font-bold border-b-2 border-gold-500 pb-1">100% 솔잎증류농축액</span>의 기적
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
             <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
               <GenAIImage 
                  prompt="Luxury black box packaging of The Pine Premium with gold foil stamping, standing on black reflective surface, dramatic lighting"
                  alt="Product Box"
                  className="relative w-64 md:w-80 rounded-lg shadow-2xl"
                  aspectRatio="4:3"
               />
             </div>
          </div>
          
          <div className="absolute bottom-10 animate-bounce text-gold-400">
            <span className="text-sm tracking-widest uppercase mb-2 block">Scroll Down</span>
            <ChevronRight className="rotate-90 mx-auto w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Intro Section - Philosophy */}
      <Section className="text-center relative">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-5xl text-pine-900 leading-tight mb-8">
              "사계절 푸르름을 간직한<br/>소나무의 <span className="text-gold-600 italic">강인한 생명력</span>"
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-pine-200 to-transparent max-w-md mx-auto mb-12"></div>
            
            <GenAIImage 
               prompt="Macro close-up of a pine needle with a single water droplet reflecting the forest, high detail, bokeh background"
               alt="Pine Needles"
               className="w-full h-64 md:h-96 object-cover rounded-sm shadow-2xl"
               aspectRatio="16:9"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
             <div className="space-y-6">
               <h3 className="text-2xl font-serif font-bold text-pine-800 border-l-4 border-gold-500 pl-4">자연이 준 귀한 선물</h3>
               <p className="text-gray-600 leading-loose text-lg">
                 예로부터 소나무는 십장생의 하나로 건강과 장수를 상징했습니다.
                 더 파인 프리미엄은 청정 자연에서 자란 소나무의 귀한 솔잎만을 엄선하여
                 현대인의 건강을 위해 탄생했습니다.
               </p>
             </div>
             <div className="relative">
               <div className="absolute inset-0 bg-pine-800 transform translate-x-4 translate-y-4 rounded-lg opacity-10"></div>
               <GenAIImage 
                 prompt="Sunlight filtering through a dense pine forest, looking up at tall trees, peaceful and healing atmosphere"
                 alt="Forest Atmosphere"
                 className="w-full h-72 object-cover rounded-lg shadow-lg relative z-10"
                 aspectRatio="4:3"
              />
             </div>
          </div>
        </div>
      </Section>

      {/* Point 01: Purity - Dark Theme */}
      <Section dark className="text-center bg-pine-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
        
        <PointBadge number="01" />
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 drop-shadow-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">100% 순수</span><br/>솔잎 증류농축액
        </h2>
        <p className="text-gray-300 mb-16 text-xl font-light">
          타협하지 않는 원칙으로,<br/>
          <span className="text-white font-medium">솔잎 외에는 아무것도 넣지 않았습니다.</span>
        </p>
        
        <div className="relative max-w-3xl mx-auto group">
          <div className="absolute inset-0 bg-gold-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
          <GenAIImage 
            prompt="Close up of clear golden liquid pouring into a glass spoon from a bottle, green nature bokeh background, pharmaceutical quality, 8k"
            alt="Pure Extract"
            className="w-full h-auto rounded-full shadow-2xl border-4 border-pine-700/50 aspect-square object-cover"
            aspectRatio="1:1"
          />
          <div className="absolute bottom-0 right-0 md:-right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center animate-float">
             <span className="text-gold-400 text-xs tracking-widest mb-1">PREMIUM</span>
             <span className="text-3xl font-serif font-bold text-white">100%</span>
             <span className="text-white text-sm">증류농축액</span>
          </div>
        </div>
      </Section>

      {/* Point 02: Functionality */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-20">
          <PointBadge number="02" />
          <h2 className="text-3xl md:text-4xl font-serif text-pine-900 mb-6">
            "식약처 인정 기능성 원료"
          </h2>
          <p className="text-xl text-pine-700 font-medium bg-pine-100 inline-block px-6 py-2 rounded-full">
            건강한 혈당 유지에 도움을 줄 수 있음
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
           <div className="order-2 md:order-1 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pine-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <GenAIImage 
                  prompt="Medical digital blood glucose monitor showing healthy numbers on a clean wooden table, healthy lifestyle concept, bright and airy"
                  alt="Blood Sugar Monitor"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl relative z-10"
                  aspectRatio="3:4"
               />
           </div>
           
           <div className="order-1 md:order-2 space-y-10">
             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
               <div className="flex items-center gap-4 mb-4">
                 <div className="bg-pine-100 p-4 rounded-full text-pine-700"><Activity size={28} /></div>
                 <h4 className="font-bold text-2xl text-pine-900">식후 혈당 상승 억제</h4>
               </div>
               <p className="text-gray-600 leading-relaxed pl-16">
                 식사 후 급격히 오르는 혈당, 걱정되시나요?<br/>
                 더 파인 프리미엄이 식후 혈당 관리를 도와드립니다.
               </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
               <div className="flex items-center gap-4 mb-4">
                 <div className="bg-pine-100 p-4 rounded-full text-pine-700"><ShieldCheck size={28} /></div>
                 <h4 className="font-bold text-2xl text-pine-900">검증된 안전성</h4>
               </div>
               <p className="text-gray-600 leading-relaxed pl-16">
                 식약처로부터 기능성과 안전성을 인정받은<br/>
                 개별인정형 원료를 사용해 믿을 수 있습니다.
               </p>
             </div>
           </div>
        </div>
      </Section>

      {/* Point 03: Ingredients */}
      <Section className="bg-pine-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pine-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="text-center mb-16 relative z-10">
           <PointBadge number="03" />
           <h2 className="text-3xl md:text-4xl font-serif text-pine-900 mb-8">
             핵심 지표성분 3가지
           </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto relative z-10">
          {[
            { name: 'Terpinolene', ko: '테르피놀렌', amount: '18~26%' },
            { name: '3-Carene', ko: '3-카렌', amount: '12.5~16.5%' },
            { name: 'Limonene', ko: '리모넨', amount: '5~10%' }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white rounded-3xl w-64 h-64 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-pine-100 hover:-translate-y-2">
              <div className="w-16 h-1 bg-gradient-to-r from-pine-400 to-pine-600 mb-6 group-hover:w-24 transition-all duration-300"></div>
              <span className="text-pine-700 font-bold text-xl mb-2">{item.ko}</span>
              <span className="text-gray-400 text-sm font-serif italic mb-4">{item.name}</span>
              <span className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-pine-700 to-pine-900">{item.amount}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative h-64">
           <GenAIImage 
              prompt="Abstract scientific molecular structure visualization with green natural elements, soft depth of field, medical research background"
              alt="Ingredients Background"
              className="w-full h-full object-cover"
              aspectRatio="16:9"
           />
           <div className="absolute inset-0 bg-pine-900/40 flex items-center justify-center">
             <p className="text-white text-lg font-light tracking-widest uppercase border border-white/30 px-8 py-3 backdrop-blur-sm rounded-full">Science x Nature</p>
           </div>
        </div>
      </Section>

      {/* Point 04: Functional Ingredient */}
      <Section>
        <div className="text-center">
          <PointBadge number="04" />
          <h2 className="text-3xl md:text-4xl font-serif text-pine-900 mb-4">"국내 최초, 국내 유일"</h2>
          <p className="text-xl text-gray-500 font-light mb-16">
            <span className="text-gold-600 font-bold">건강한 혈당 유지</span>에 도움을 줄 수 있는 기능성 원료
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <div className="group border border-gray-100 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition text-center">
                <div className="overflow-hidden rounded-xl mb-6">
                   <GenAIImage 
                     prompt="Official Korean government certificate document with seal, framed, clean layout, high resolution"
                     alt="Certificate 1"
                     className="w-full h-80 object-contain group-hover:scale-105 transition duration-500"
                     aspectRatio="3:4"
                   />
                </div>
                <h4 className="font-bold text-pine-800 text-lg">개별인정형원료 제2012-30호</h4>
                <p className="text-sm text-gray-500 mt-2">식약처 기능성 인정</p>
             </div>
             <div className="group border border-gray-100 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition text-center">
                <div className="overflow-hidden rounded-xl mb-6">
                   <GenAIImage 
                     prompt="Asian female scientist in a high-tech laboratory holding a green vial, smiling confidently, bright clean background"
                     alt="Certificate 2"
                     className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                     aspectRatio="3:4"
                   />
                </div>
                <h4 className="font-bold text-pine-800 text-lg">엄격한 품질 관리</h4>
                <p className="text-sm text-gray-500 mt-2">연구 개발 및 생산</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Point 05: Convenience - Parallax Effect */}
      <Section className="bg-gray-100 p-0 overflow-hidden relative">
        <div className="absolute inset-0">
          <GenAIImage 
            prompt="Hiking in a green forest, bright sunlight, person holding a bottle of water, lifestyle shot, blurred background"
            alt="Lifestyle Background"
            className="w-full h-full object-cover opacity-90"
            aspectRatio="16:9"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto py-24 px-4">
          <div className="md:w-1/2">
            <PointBadge number="05" />
            <h2 className="text-4xl md:text-5xl font-serif text-pine-900 mb-6">
              언제 어디서나,<br/>간편한 <span className="text-gold-600">하루 3캡슐</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              바쁜 현대인을 위해 준비했습니다.<br/>
              식물성 캡슐 개별 포장으로 위생적이고<br/>
              휴대가 간편합니다.
            </p>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white shadow-lg inline-block">
               <ul className="space-y-2 text-pine-800 font-medium">
                 <li className="flex items-center gap-2"><Check className="text-gold-500" size={20}/> 1일 3회 섭취</li>
                 <li className="flex items-center gap-2"><Check className="text-gold-500" size={20}/> 1회 1캡슐 (450mg)</li>
                 <li className="flex items-center gap-2"><Check className="text-gold-500" size={20}/> 물과 함께 섭취</li>
               </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Point 06: Clinical Trials */}
      <Section>
        <div className="text-center mb-16">
          <PointBadge number="06" />
          <h2 className="text-3xl md:text-4xl font-serif text-pine-900 mb-6">인체적용시험 결과 확인</h2>
          <div className="bg-pine-50 p-6 rounded-xl inline-block max-w-3xl border border-pine-100">
             <p className="text-gray-600 leading-relaxed">
               솔잎증류농축액을 12주간 섭취한 군에서 대조군에 비해<br className="hidden md:block"/>
               <strong className="text-red-500 text-lg">공복혈당, 2시간 혈당이 유의하게 개선</strong>됨을 확인했습니다.
             </p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-100 max-w-5xl mx-auto">
           <ClinicalChart />
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-12 max-w-4xl mx-auto bg-gray-50 p-4 rounded-lg">
          [출처] 혈당장애를 가진 사람에게 솔잎 추출액 섭취 혈당강하및 혈청 콜레스테롤 농도 저하 관련 기능성 평가를 위한 건강기능식품개발연구<br/>
          * 본 자료는 제품과 직접적인 관계가 없으며 주원료 솔잎증류농축액에 대한 인체적용시험결과입니다. 모든 사람에게 동일하게 적용되지 않습니다.
        </p>
      </Section>

      {/* Point 07: Target Audience */}
      <Section className="bg-pine-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 text-center mb-16">
          <PointBadge number="07" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            이런 분들께 <span className="text-gold-400">강력 추천</span>합니다
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
          {[
            { text: "건강한 삶의 활력을\n되찾고 싶으신 분", prompt: "Active happy senior couple jogging in a park, sunny morning, healthy lifestyle" },
            { text: "식후 치솟는 혈당이\n걱정되시는 분", prompt: "Close up of digital blood sugar monitor reading normal numbers, medical health concept" },
            { text: "탄수화물 섭취가 많아\n관리가 필요하신 분", prompt: "Table full of bread and pasta, unhealthy food concept but warm lighting" },
            { text: "간편하게 혈당 건강을\n챙기고 싶으신 분", prompt: "Business person taking a pill with water in an office setting, convenient health care" }
          ].map((item, idx) => (
             <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl border border-white/10">
               <GenAIImage 
                 prompt={item.prompt}
                 alt="Target Audience"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                 aspectRatio="3:4"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center p-6 text-center">
                 <p className="font-bold text-white text-lg leading-tight mb-4 group-hover:-translate-y-2 transition-transform duration-300">{item.text}</p>
               </div>
             </div>
          ))}
        </div>
      </Section>

      {/* Promise Section - Card Style */}
      <Section className="bg-gray-50">
         <div className="max-w-5xl mx-auto">
           <div className="bg-white p-8 md:p-16 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="flex flex-col lg:flex-row items-center gap-12 mb-12 relative z-10">
               <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-600 rounded-lg blur opacity-30"></div>
                    <GenAIImage 
                      prompt="High end black packaging box for supplements, centered, studio lighting, soft shadow on white" 
                      alt="Product" 
                      className="w-64 h-auto relative z-10 drop-shadow-2xl" 
                      aspectRatio="3:4" 
                    />
                  </div>
               </div>
               <div className="lg:w-2/3">
                  <h3 className="text-3xl font-serif text-pine-900 mb-8 border-b border-gray-100 pb-4">
                    더 파인 프리미엄의 <span className="text-gold-600">3가지 약속</span>
                  </h3>
                  <div className="space-y-8">
                     {[
                       { title: "정직함", desc: "100% 순수 솔잎 증류 농축액. 단 1%의 다른 성분도 섞지 않았습니다." },
                       { title: "전문성", desc: "식약처에서 기능성을 인정받은 원료만을 사용했습니다." },
                       { title: "책임감", desc: "고객님의 건강을 최우선으로 생각하며 끝까지 함께하겠습니다." }
                     ].map((promise, i) => (
                       <div key={i} className="flex gap-6">
                          <span className="text-4xl font-serif font-bold text-pine-200">0{i+1}</span>
                          <div>
                             <p className="text-xl font-bold text-pine-800 mb-2">{promise.title}</p>
                             <p className="text-gray-600">{promise.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
             </div>
           </div>
         </div>
      </Section>

      {/* Reviews */}
      <Section className="bg-pine-900 text-white">
        <div className="text-center mb-16">
          <PointBadge number="Review" />
          <div className="flex justify-center gap-1 text-gold-500 mb-4">
            {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" size={24} />)}
          </div>
          <h2 className="text-3xl font-serif mb-2">고객님들의 생생한 후기</h2>
          <p className="text-gray-400">만족도 99% 재구매율 1위</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {[
             { name: "김*숙 님 (58세)", text: "부모님 선물로 사드렸는데 너무 좋아하세요. 아침에 일어나실 때 몸이 가볍다고 하시네요.", img: "Portrait of a happy asian elderly woman smiling outdoors" },
             { name: "박*철 님 (49세)", text: "식후 혈당 때문에 걱정이 많았는데, 3개월 정도 먹고 나니 확실히 마음이 편안해졌습니다.", img: "Portrait of a middle aged asian man in suit smiling" }
           ].map((review, i) => (
             <div key={i} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition duration-300">
                <div className="flex items-center gap-4 mb-6">
                   <GenAIImage prompt={review.img} alt="User" className="w-16 h-16 rounded-full object-cover border-2 border-gold-500" aspectRatio="1:1" />
                   <div>
                     <p className="font-bold text-lg">{review.name}</p>
                     <div className="flex text-gold-500 text-xs"><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/><Star fill="currentColor" size={12}/></div>
                   </div>
                </div>
                <p className="text-gray-200 leading-relaxed italic">"{review.text}"</p>
             </div>
           ))}
        </div>
      </Section>

      {/* Consultation Form - Footer Area */}
      <section className="bg-gradient-to-br from-pine-900 to-black text-white py-24 px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
              지금 바로 상담받아보세요!
            </h2>
            <p className="text-gray-400 mb-12 text-lg">전문 상담원이 친절하게 안내해 드립니다.</p>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-gray-800 max-w-2xl mx-auto border-4 border-gold-500/20">
               <h4 className="text-2xl font-bold mb-8 text-pine-900 border-b-2 border-gray-100 pb-4">무료 상담 신청</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="text-left group">
                     <label className="block text-sm font-bold text-gray-600 mb-2 group-focus-within:text-pine-700">이름</label>
                     <input 
                       type="text" 
                       name="name" 
                       value={formData.name} 
                       onChange={handleInputChange}
                       className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:border-pine-600 focus:bg-white focus:outline-none transition" 
                       placeholder="이름을 입력하세요" 
                       required
                     />
                  </div>
                  <div className="text-left group">
                     <label className="block text-sm font-bold text-gray-600 mb-2 group-focus-within:text-pine-700">나이</label>
                     <input 
                       type="text" 
                       name="age"
                       value={formData.age}
                       onChange={handleInputChange} 
                       className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:border-pine-600 focus:bg-white focus:outline-none transition" 
                       placeholder="나이를 입력하세요" 
                     />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                     <label className="block text-sm font-bold text-gray-600 mb-2">성별</label>
                     <div className="flex gap-4">
                        <label className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition has-[:checked]:bg-pine-50 has-[:checked]:border-pine-500 has-[:checked]:text-pine-800">
                           <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} className="accent-pine-600"/> 남
                        </label>
                        <label className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition has-[:checked]:bg-pine-50 has-[:checked]:border-pine-500 has-[:checked]:text-pine-800">
                           <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} className="accent-pine-600"/> 여
                        </label>
                     </div>
                  </div>
                   <div className="text-left group">
                     <label className="block text-sm font-bold text-gray-600 mb-2 group-focus-within:text-pine-700">연락처</label>
                     <div className="flex gap-2">
                       <select className="bg-gray-50 border border-gray-200 rounded-lg p-3 w-24 focus:border-pine-600 focus:outline-none">
                         <option>010</option>
                         <option>011</option>
                       </select>
                       <input 
                         type="tel"
                         name="phone"
                         value={formData.phone}
                         onChange={handleInputChange} 
                         className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:border-pine-600 focus:bg-white focus:outline-none transition" 
                         placeholder="나머지 번호" 
                         required
                       />
                     </div>
                  </div>
               </div>
               
               <div className="mb-8 text-left">
                  <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-pine-700 transition">
                     <input type="checkbox" required className="w-4 h-4 accent-pine-600" /> 
                     개인정보 수집 및 이용에 동의합니다.
                  </label>
               </div>
               
               <button type="submit" className="w-full bg-gradient-to-r from-pine-800 to-pine-900 text-white font-bold text-xl py-5 rounded-xl hover:from-pine-700 hover:to-pine-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  이벤트 가격 알아보기
               </button>
            </form>
         </div>
         
         <footer className="mt-24 text-center text-gray-500 text-xs border-t border-white/10 pt-8 max-w-6xl mx-auto">
            <p className="mb-2 text-white/50 font-serif text-lg">The Pine Premium</p>
            <p>회사명: (주)예시코퍼레이션 | 대표자: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123 | 통신판매업신고: 제2024-서울강남-0000호</p>
            <p className="mt-4 opacity-50">Copyright © The Pine Premium. All rights reserved.</p>
         </footer>
      </section>
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden z-50 flex gap-3 pb-6">
        <button className="flex-1 bg-pine-900 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition flex items-center justify-center gap-2">
           <Phone size={18} /> 전화상담
        </button>
        <button onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="flex-[1.5] bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition">
           가격 알아보기
        </button>
      </div>
    </div>
  );
}

export default App;