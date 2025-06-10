
import { ArrowRight, Heart, Zap, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-brand-pink/5 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-brand-pink font-open-sans font-semibold">
                <Zap size={20} />
                <span>Революция в поиске работы</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-brand-gray-dark leading-tight">
                Найдите работу за{' '}
                <span className="bg-gradient-to-r from-brand-pink to-brand-pink-light bg-clip-text text-transparent">
                  5 минут
                </span>
              </h1>
              
              <p className="text-xl text-brand-gray-dark/80 font-open-sans leading-relaxed max-w-lg">
                Прямо в Telegram. Без резюме. Свайпайте вакансии как в Tinder и получайте предложения от работодателей.
              </p>
            </div>
            
            {/* Статистика */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl lg:text-3xl font-montserrat font-bold text-brand-pink">1000+</div>
                <div className="text-sm text-brand-gray-dark/70 font-open-sans">Вакансий</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="text-2xl lg:text-3xl font-montserrat font-bold text-brand-pink">500+</div>
                <div className="text-sm text-brand-gray-dark/70 font-open-sans">Компаний</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
                <div className="text-2xl lg:text-3xl font-montserrat font-bold text-brand-pink">95%</div>
                <div className="text-sm text-brand-gray-dark/70 font-open-sans">Матчей</div>
              </div>
            </div>
            
            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/matchwork_bot"
                className="group bg-gradient-to-r from-brand-pink to-brand-pink-light text-white px-8 py-4 rounded-xl font-open-sans font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Попробовать сейчас</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-xl font-open-sans font-semibold text-lg hover:bg-brand-pink/5 transition-all duration-300 flex items-center justify-center space-x-2">
                <Clock size={20} />
                <span>Посмотреть как работает</span>
              </button>
            </div>
            
            {/* Социальное доказательство */}
            <div className="flex items-center space-x-4 text-sm text-brand-gray-dark/60 font-open-sans pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-pink to-brand-pink-light rounded-full border-2 border-white shadow-sm"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-pink rounded-full border-2 border-white shadow-sm"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <span>Уже <strong>2,500+</strong> человек нашли работу</span>
            </div>
          </div>
          
          {/* Правая колонка с демо телефона */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto max-w-sm">
              {/* Мокап телефона */}
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl animate-gentle-float">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Статус бар */}
                  <div className="bg-gray-900 h-8 flex items-center justify-center">
                    <div className="text-white text-xs font-semibold">Telegram</div>
                  </div>
                  
                  {/* Контент бота */}
                  <div className="p-6 space-y-4 h-96 bg-gradient-to-b from-white to-gray-50">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-pink to-brand-pink-light rounded-full mx-auto mb-3 flex items-center justify-center animate-subtle-glow">
                        <Heart className="text-white" size={24} />
                      </div>
                      <h3 className="font-montserrat font-bold text-lg text-gray-800">Frontend Developer</h3>
                      <p className="text-sm text-gray-600">IT-компания • Удаленно</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-sm text-gray-700 mb-3 font-semibold">💰 80,000 - 120,000 ₽</p>
                      <p className="text-xs text-gray-500">React, TypeScript, Node.js</p>
                    </div>
                    
                    <div className="flex justify-center space-x-6 pt-4">
                      <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <span className="text-lg">❌</span>
                      </button>
                      <button className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center hover:bg-brand-pink-dark transition-colors shadow-md">
                        <Heart className="text-white" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-brand-pink/20 rounded-full animate-gentle-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-brand-pink-light/30 rounded-full animate-gentle-bounce" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
