
import { Play, ArrowRight } from 'lucide-react';

const Demo = () => {
  return (
    <section id="demo" className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Посмотрите, как это{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              выглядит
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-body max-w-2xl mx-auto px-4">
            30 секунд видео, которые покажут весь процесс от запуска бота до получения предложения о работе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Видео плеер (пока заглушка) */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group animate-scale-in">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-brand-primary/20 to-brand-secondary/30 relative">
              {/* Превью кадр */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Кнопка play */}
              <button className="relative z-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-glow">
                <Play className="text-brand-primary ml-1" size={24} fill="currentColor" />
              </button>
              
              {/* Мокап интерфейса */}
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 max-w-xs hidden sm:block">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-body font-semibold">В реальном времени</span>
                </div>
                <p className="text-xs text-gray-600">Демонстрация процесса свайпа и получения матчей</p>
              </div>
            </div>
            
            {/* Индикатор времени */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-body">
              0:30
            </div>
          </div>
          
          {/* Описание под видео */}
          <div className="mt-6 sm:mt-8 grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                1
              </div>
              <h4 className="font-display font-semibold text-gray-900 text-sm sm:text-base">Запуск бота</h4>
              <p className="text-xs sm:text-sm text-gray-600 font-body px-2">Показываем как найти и запустить @workswipematch_bot</p>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                2
              </div>
              <h4 className="font-display font-semibold text-gray-900 text-sm sm:text-base">Процесс свайпа</h4>
              <p className="text-xs sm:text-sm text-gray-600 font-body px-2">Демонстрируем интерфейс и логику выбора вакансий</p>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                3
              </div>
              <h4 className="font-display font-semibold text-gray-900 text-sm sm:text-base">Получение матчей</h4>
              <p className="text-xs sm:text-sm text-gray-600 font-body px-2">Показываем как приходят предложения от HR</p>
            </div>
          </div>
          
          {/* CTA под демо */}
          <div className="text-center mt-8 sm:mt-12">
            <a 
              href="https://t.me/workswipematch_bot/work"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-body font-semibold text-sm sm:text-base lg:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow"
            >
              <span>Попробовать прямо сейчас</span>
              <ArrowRight size={18} />
            </a>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 font-body px-4">
              Бесплатно • Без регистрации • Результат за 5 минут
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
