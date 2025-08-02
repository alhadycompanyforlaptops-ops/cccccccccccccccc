import React, { useEffect, useRef } from 'react';
import { BookOpen, Star, Calendar, Trophy, Users, ArrowLeft, Fuel as Mosque } from 'lucide-react';

interface MainPageProps {
  onNavigate: (page: 'main' | 'results' | 'schedule') => void;
}

export const MainPage: React.FC<MainPageProps> = ({ onNavigate }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Try to play the audio when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log('Audio autoplay prevented by browser');
        }
      }
    };

    playAudio();

    // Cleanup function to pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="https://www.youtube.com/watch?v=40l3DfPUYkM" type="audio/mpeg" />
        {/* Fallback for browsers that don't support the audio element */}
      </audio>

      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simplified background for mobile performance */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-yellow-300/10 via-white/5 to-transparent"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
        {/* Header section */}
        <div className="text-center mb-16 animate-slideInDown">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Mosque className="w-16 h-16 text-yellow-300 animate-bounce-slow mosque-glow" />
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 glowing-text-main">
                ترقبوا
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 to-white mx-auto rounded-full animate-pulse-glow"></div>
            </div>
            <Mosque className="w-16 h-16 text-yellow-300 animate-bounce-slow mosque-glow" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 mb-4 animate-slideInUp gradient-text-golden">
            بدء مسابقة المولد النبوي الشريف
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 animate-slideInUp glowing-text" style={{ animationDelay: '0.2s' }}>
            مسابقه المولد النبوي الشريف بالجامع الشرقي
          </h3>
          
          <div className="flex justify-center items-center gap-3 mb-6 animate-fadeInScale">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-300"></div>
            <p className="text-lg md:text-xl text-blue-100 font-semibold">
              بالجامع الشرقي - دمليج
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-yellow-300"></div>
          </div>
        </div>

        {/* Welcome message */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slideInUp" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-300 to-orange-300 p-4 rounded-full">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              أهلاً وسهلاً بكم في موقع مسابقة القرآن الكريم
            </h3>
            
            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-6">
              نرحب بجميع الطلاب والطالبات من مختلف المراحل العمرية للمشاركة في مسابقة المولد النبوي الشريف
              لحفظ وتلاوة القرآن الكريم. هذه المسابقة تهدف إلى تشجيع الشباب على التقرب من كتاب الله العزيز
              وتعلم تعاليم ديننا الحنيف.
            </p>
            
            {/* Categories Grid */}
            <div className="mb-8">
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 text-center">فئات المسابقة</h4>
              <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
                <div className="category-card bg-gradient-to-r from-green-400 to-green-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  ثلاثة أجزاء
                </div>
                <div className="category-card bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  خمسة أجزاء
                </div>
                <div className="category-card bg-gradient-to-r from-purple-400 to-purple-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  ثمانية أجزاء
                </div>
                <div className="category-card bg-gradient-to-r from-indigo-400 to-indigo-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  عشرة أجزاء
                </div>
                <div className="category-card bg-gradient-to-r from-pink-400 to-pink-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-pink-500 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  خمسة عشر جزءاً
                </div>
                <div className="category-card bg-gradient-to-r from-red-400 to-red-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-red-500 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  عشرون جزءاً
                </div>
                <div className="category-card bg-gradient-to-r from-orange-400 to-orange-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  خمسة وعشرون جزءاً
                </div>
                <div className="category-card bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-3 rounded-xl text-center font-semibold text-sm hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  ثلاثون جزءاً
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInScale" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => onNavigate('results')}
            className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-2xl font-bold text-base shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-6 h-6 group-hover:animate-bounce" />
              <span>عرض النتائج</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button
            onClick={() => onNavigate('schedule')}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold text-base shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 group-hover:animate-bounce" />
              <span className="leading-tight">جدول الاختبارات</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Footer message */}
        <div className="text-center mt-16 animate-fadeInScale" style={{ animationDelay: '0.9s' }}>
          <p className="text-blue-200 text-lg">
            "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
          </p>
          <p className="text-blue-300 text-sm mt-2">
            صدق الله العظيم - سورة المزمل
          </p>
        </div>
      </div>
    </div>
  );
};
