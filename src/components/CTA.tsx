
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-pink to-brand-pink-light relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold leading-tight">
                Готовы найти работу за пару свайпов?
              </h2>
              
              <p className="text-xl lg:text-2xl font-open-sans opacity-90 max-w-3xl mx-auto">
                Присоединяйтесь к тем, кто уже нашёл новую позицию через Telegram. 
                Это быстро, просто и эффективно.
              </p>
            </div>
            
            {/* Социальные доказательства */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="flex items-center justify-center space-x-2 animate-scale-in" style={{animationDelay: '0.2s'}}>
                <Users size={20} />
                <span className="font-open-sans font-semibold">2,500+ пользователей</span>
              </div>
              <div className="flex items-center justify-center space-x-2 animate-scale-in" style={{animationDelay: '0.4s'}}>
                <Star size={20} />
                <span className="font-open-sans font-semibold">4.8/5 рейтинг</span>
              </div>
              <div className="flex items-center justify-center space-x-2 animate-scale-in" style={{animationDelay: '0.6s'}}>
                <Zap size={20} />
                <span className="font-open-sans font-semibold">500+ компаний</span>
              </div>
            </div>
            
            {/* Основной CTA */}
            <div className="space-y-6">
              <a 
                href="https://t.me/matchwork_bot"
                className="inline-flex items-center space-x-3 bg-white text-brand-pink px-10 py-5 rounded-2xl font-open-sans font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Начать прямо сейчас</span>
                <ArrowRight size={24} />
              </a>
              
              <div className="space-y-2">
                <p className="font-open-sans opacity-80">
                  ✅ Бесплатно навсегда  ✅ Без регистрации  ✅ Результат за 5 минут
                </p>
                <p className="text-sm font-open-sans opacity-70">
                  Нажимая на кнопку, вы переходите в Telegram и принимаете условия использования
                </p>
              </div>
            </div>
            
            {/* Дополнительная мотивация */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-xl font-montserrat font-bold mb-3">
                🎯 Специальное предложение для первых 1000 пользователей
              </h3>
              <p className="font-open-sans opacity-90">
                Получите приоритетный показ вакансий и персональную поддержку от нашей команды
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
