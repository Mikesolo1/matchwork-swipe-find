
import { ArrowRight, Heart, Zap, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-gray-light via-white to-brand-pink/10 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-brand-pink font-open-sans font-semibold animate-bounce-subtle">
                <Zap size={20} />
                <span>Революция в поиске работы</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-brand-gray-dark leading-tight">
                Найдите работу за{' '}
                <span className="bg-gradient-to-r from-brand-pink to-brand-pink-light bg-clip-text text-transparent">
                  5 минут
                </span>
              </h1>
              
              <p className="text-xl text-brand-gray-dark/80 font-open-sans leading-relaxed">
                Прямо в Telegram. Без резюме. Свайпайте вакансии как в Tinder и получайте предложения от работодателей.
              </p>
            </div>
            
            {/* Статистика */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-montserrat font-bold text-brand-pink">1000+</div>
                <div className="text-sm text-brand-gray-dark/70 font-open-sans">Вакансий</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-montserrat font-bold text-brand-pink">500+</div>
                <div className="text-sm text-brand-gray-dark/70 font-open-sans">Компаний</div>
              </div>
              <div className="text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
                <div className="text-3xl font-montserrat font-bold text-brand-pink">95%</div>
                <div className="text-sm text-brand-gray-dark/70 font-open-sans">Матчей</div>
              </div>
            </div>
            
            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/matchwork_bot"
                className="group bg-gradient-to-r from-brand-pink to-brand-pink-light text-white px-8 py-4 rounded-full font-open-sans font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse-pink"
              >
                <span>Попробовать сейчас</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-full font-open-sans font-semibold text-lg hover:bg-brand-pink hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Clock size={20} />
                <span>Посмотреть как работает</span>
              </button>
            </div>
            
            {/* Социальное доказательство */}
            <div className="flex items-center space-x-4 text-sm text-brand-gray-dark/60 font-open-sans">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-pink to-brand-pink-light rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-pink rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span>Уже <strong>2,500+</strong> человек нашли работу</span>
            </div>
          </div>
          
          {/* Правая колонка с демо телефона */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto max-w-sm">
              {/* Мокап телефона */}
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl animate-float">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Статус бар */}
                  <div className="bg-gray-900 h-8 flex items-center justify-center">
                    <div className="text-white text-xs font-semibold">Telegram</div>
                  </div>
                  
                  {/* Контент бота */}
                  <div className="p-6 space-y-4 h-96 bg-gradient-to-b from-white to-brand-gray-light/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-pink to-brand-pink-light rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Heart className="text-white" size={24} />
                      </div>
                      <h3 className="font-montserrat font-bold text-lg">Frontend Developer</h3>
                      <p className="text-sm text-gray-600">IT-компания • Удаленно</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-sm text-gray-700 mb-3">💰 80,000 - 120,000 ₽</p>
                      <p className="text-xs text-gray-500">React, TypeScript, Node.js</p>
                    </div>
                    
                    <div className="flex justify-center space-x-4 pt-4">
                      <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        ❌
                      </button>
                      <button className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center animate-pulse-pink">
                        <Heart className="text-white" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-pink/20 rounded-full animate-bounce-subtle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-pink-light/30 rounded-full animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
