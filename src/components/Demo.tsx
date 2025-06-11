
import { Play, ArrowRight } from 'lucide-react';

const Demo = () => {
  return (
    <section id="demo" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-brand-pink/5 to-brand-pink-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-brand-gray-dark mb-4 sm:mb-6">
            Посмотрите, как это{' '}
            <span className="bg-gradient-to-r from-brand-pink to-brand-pink-light bg-clip-text text-transparent">
              выглядит
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-brand-gray-dark/70 font-open-sans max-w-2xl mx-auto px-4">
            30 секунд видео, которые покажут весь процесс от запуска бота до получения предложения о работе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Видео плеер (пока заглушка) */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group animate-scale-in">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-brand-pink/20 to-brand-pink-light/30 relative">
              {/* Превью кадр */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Кнопка play */}
              <button className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-pulse-pink">
                <Play className="text-brand-pink ml-1" size={28} fill="currentColor" />
              </button>
              
              {/* Мокап интерфейса */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 max-w-xs hidden sm:block">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-open-sans font-semibold">В реальном времени</span>
                </div>
                <p className="text-xs text-gray-600">Демонстрация процесса свайпа и получения матчей</p>
              </div>
            </div>
            
            {/* Индикатор времени */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-open-sans">
              0:30
            </div>
          </div>
          
          {/* Описание под видео */}
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-brand-pink to-brand-pink-light rounded-full mx-auto flex items-center justify-center text-white font-bold text-sm sm:text-base">
                1
              </div>
              <h4 className="font-montserrat font-semibold text-brand-gray-dark text-sm sm:text-base">Запуск бота</h4>
              <p className="text-xs sm:text-sm text-brand-gray-dark/70 font-open-sans px-2">Показываем как найти и запустить @matchwork_bot</p>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-brand-pink to-brand-pink-light rounded-full mx-auto flex items-center justify-center text-white font-bold text-sm sm:text-base">
                2
              </div>
              <h4 className="font-montserrat font-semibold text-brand-gray-dark text-sm sm:text-base">Процесс свайпа</h4>
              <p className="text-xs sm:text-sm text-brand-gray-dark/70 font-open-sans px-2">Демонстрируем интерфейс и логику выбора вакансий</p>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-brand-pink to-brand-pink-light rounded-full mx-auto flex items-center justify-center text-white font-bold text-sm sm:text-base">
                3
              </div>
              <h4 className="font-montserrat font-semibold text-brand-gray-dark text-sm sm:text-base">Получение матчей</h4>
              <p className="text-xs sm:text-sm text-brand-gray-dark/70 font-open-sans px-2">Показываем как приходят предложения от HR</p>
            </div>
          </div>
          
          {/* CTA под демо */}
          <div className="text-center mt-8 sm:mt-12">
            <a 
              href="https://t.me/workswipematch_bot/work"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-pink to-brand-pink-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-open-sans font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-pink"
            >
              <span>Попробовать прямо сейчас</span>
              <ArrowRight size={20} />
            </a>
            <p className="mt-4 text-sm text-brand-gray-dark/60 font-open-sans px-4">
              Бесплатно • Без регистрации • Результат за 5 минут
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
