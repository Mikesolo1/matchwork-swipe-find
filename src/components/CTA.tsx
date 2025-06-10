
import { ArrowRight, Star, Users, Zap, Sparkles, CheckCircle } from 'lucide-react';

const CTA = () => {
  const features = [
    "Бесплатно навсегда",
    "Без регистрации", 
    "Результат за 5 минут",
    "Поддержка 24/7"
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Сложный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent"></div>
      
      {/* Анимированные декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48 animate-morphing"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-x-80 translate-y-80 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/15 rounded-full animate-morphing" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="space-y-12 animate-fade-in-up">
            {/* Бейдж */}
            <div className="inline-flex items-center space-x-2 glass border border-white/20 px-4 py-2 rounded-full">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Ограниченное предложение</span>
            </div>
            
            {/* Заголовок */}
            <div className="space-y-6">
              <h2 className="text-display-xl font-display font-bold leading-tight">
                Готовы найти работу за<br />
                <span className="relative">
                  пару свайпов?
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed font-body">
                Присоединяйтесь к профессионалам, которые уже нашли работу мечты через нашу платформу. Это быстро, просто и эффективно.
              </p>
            </div>
            
            {/* Социальные доказательства */}
            <div className="grid md:grid-cols-3 gap-8 py-8">
              <div className="flex items-center justify-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-2xl">2,500+</div>
                  <div className="text-white/80 text-sm">пользователей</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  <Star size={24} />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-2xl">4.9/5</div>
                  <div className="text-white/80 text-sm">рейтинг</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-2xl">500+</div>
                  <div className="text-white/80 text-sm">компаний</div>
                </div>
              </div>
            </div>
            
            {/* Главный CTA */}
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <a 
                href="https://t.me/matchwork_bot"
                className="group relative inline-flex items-center space-x-4 bg-white text-brand-primary px-12 py-6 rounded-2xl font-display font-bold text-xl shadow-hover-lift hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-neutral-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Начать прямо сейчас</span>
                <ArrowRight size={28} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                
                {/* Эффект блеска */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </a>
              
              {/* Список преимуществ */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 animate-fade-in-up"
                    style={{animationDelay: `${1 + index * 0.1}s`}}
                  >
                    <CheckCircle size={16} className="text-green-300" />
                    <span className="text-sm font-medium opacity-90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Специальное предложение */}
            <div className="glass border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto animate-scale-in" style={{animationDelay: '1.2s'}}>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Sparkles size={20} />
                  <h3 className="text-2xl font-display font-bold">
                    🎯 Эксклюзивное предложение
                  </h3>
                </div>
                
                <p className="text-lg opacity-90 leading-relaxed">
                  Первые <strong>1,000 пользователей</strong> получают приоритетный показ вакансий и персональную поддержку от нашей команды экспертов
                </p>
                
                <div className="flex items-center justify-center space-x-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-sm"></div>
                    ))}
                  </div>
                  <span className="text-sm font-medium opacity-80">
                    Осталось <strong className="text-yellow-300">347</strong> мест
                  </span>
                </div>
              </div>
            </div>
            
            {/* Мелкий текст */}
            <p className="text-sm opacity-70 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              Нажимая на кнопку, вы переходите в Telegram и принимаете{' '}
              <a href="#" className="underline hover:no-underline transition-all">условия использования</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
