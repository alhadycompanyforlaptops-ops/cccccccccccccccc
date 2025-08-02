import React from 'react';
import { Heart, Mail, Phone, MapPin, MessageCircle, Globe, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full animate-pulse-soft">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-golden">
              مسابقة المولد النبوي الشريف
            </h2>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}>
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-xl text-blue-200 mb-6 leading-relaxed">
            نسعى لتشجيع الطلاب على حفظ وتلاوة القرآن الكريم وتعلم تعاليم الدين الإسلامي
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Contact Information */}
          <div className="text-center md:text-right">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">تواصل معنا</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <a href="mailto:tarekaboya2019@gmail.com" className="text-blue-200 hover:text-white transition-colors font-medium text-sm">
                    tarekaboya2019@gmail.com
                  </a>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 group">
                    <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <a href="tel:+01559181558" className="text-blue-200 hover:text-white transition-colors font-medium text-sm">
                      +20 155 918 1558
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 group">
                    <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <a href="tel:+201205362040" className="text-blue-200 hover:text-white transition-colors font-medium text-sm">
                      +20 120 536 2040
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 group">
                    <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <a href="tel:+201276099675" className="text-blue-200 hover:text-white transition-colors font-medium text-sm">
                      +20 127 609 9675
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Schedule */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-2 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">الموقع والمواعيد</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <h4 className="font-semibold text-white">العنوان</h4>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/BA3xbuvekc8kgKaMA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors text-sm hover:underline"
                  >
                    الجامع الشرقي، دمليج، منوف، المنوفية
                  </a>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <h4 className="font-semibold text-white">مواعيد الاختبارات</h4>
                  </div>
                  <p className="text-blue-200 text-sm">
                    راجع جدول الاختبارات للمواعيد المحدثة
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Info */}
          <div className="text-center md:text-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 p-2 rounded-full">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">روابط مهمة</h3>
              </div>
              
              <div className="space-y-3">
                <a href="#" className="block bg-white/5 rounded-xl p-3 text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">
                  📋 قوانين المسابقة
                </a>
                <a href="#" className="block bg-white/5 rounded-xl p-3 text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">
                  ❓ الأسئلة الشائعة
                </a>
                <a href="#" className="block bg-white/5 rounded-xl p-3 text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">
                  📞 اتصل بنا
                </a>
                <a href="#" className="block bg-white/5 rounded-xl p-3 text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">
                  🏆 نتائج السنوات السابقة
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2 glowing-text">
              "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
            </p>
            <p className="text-yellow-200 text-lg">
              صدق الله العظيم - سورة المزمل
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                &copy; 2025 مسابقة المولد النبوي الشريف بالجامع الشرقي. جميع الحقوق محفوظة.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300">
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm">تم التطوير بحب بواسطة</span>
              <a 
                href="https://www.facebook.com/palestine7102023y/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-yellow-400 hover:text-white transition-colors hover:underline"
              >
                Ahmed Tareq
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};