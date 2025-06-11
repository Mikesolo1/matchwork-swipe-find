
import { ArrowRight, Target, Clock, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Анимированные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-brand-secondary/20 to-brand-accent/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Бейдж */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-fade-in-down">
            <Target className="text-brand-primary" size={16} />
            <span className="text-sm font-medium text-white">Эксклюзивное предложение</span>
          </div>

          {/* Заголовок */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight px-4">
              Готовы найти работу{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text">
                мечты?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Присоединяйтесь к тысячам профессионалов, которые уже нашли идеальную работу через наш Telegram-бот
            </p>
          </div>

          {/* Эксклюзивное предложение */}
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="text-orange-400" size={20} />
              <span className="text-base sm:text-lg font-bold text-white">Ограниченное предложение</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
              🎯 Эксклюзивные возможности
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base px-4">
              Первые 1,000 пользователей получают приоритетный показ вакансий и персональную поддержку от нашей команды экспертов
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Target className="text-white" size={20} />
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Приоритетный</div>
                <div className="text-sm sm:text-lg font-bold text-white">показ вакансий</div>
              </div>
              
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Персональная</div>
                <div className="text-sm sm:text-lg font-bold text-white">поддержка HR</div>
              </div>
              
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Быстрый</div>
                <div className="text-sm sm:text-lg font-bold text-white">отклик 24/7</div>
              </div>
            </div>
          </div>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://t.me/workswipematch_bot/work"
              className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-elegant hover:shadow-hover-lift transform hover:-translate-y-1 transition-all duration-300 overflow-hidden min-w-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Начать поиск работы</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Уже зарегистрировано</div>
              <div className="text-base sm:text-lg font-bold text-white">2,847 кандидатов</div>
              <div className="text-xs text-gray-500">из 1,000 мест осталось 153</div>
            </div>
          </div>

          {/* Социальное доказательство */}
          <div className="flex flex-col items-center space-y-4 pt-6 sm:pt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full border-2 border-gray-800 shadow-lg"></div>
              ))}
            </div>
            <p className="text-gray-400 text-sm px-4">
              <span className="text-white font-semibold">2,847 профессионалов</span> уже используют Мэ́тчворк для поиска работы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
