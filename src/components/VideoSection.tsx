
import { Play, Video, Clock, Users, Briefcase, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [activeTab, setActiveTab] = useState<'candidates' | 'employers'>('candidates');
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-brand-primary/5 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-32 w-64 h-64 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-32 w-80 h-80 bg-gradient-to-tr from-brand-secondary/8 to-brand-accent/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          {/* Бейдж */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in-down">
            <Video className="text-brand-primary" size={18} />
            <span className="text-sm font-medium text-gray-800">Видео знакомство</span>
          </div>

          {/* Заголовок */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Видео визитка за{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text">
              90 секунд
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Создайте персональное видео до 1:30, которое покажет вас с лучшей стороны. 
            Больше никаких длинных собеседований — знакомьтесь мгновенно!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая колонка - Интерактивные табы */}
          <div className="space-y-8 animate-slide-in-right" style={{animationDelay: '0.5s'}}>
            {/* Переключатель */}
            <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-100">
              <button
                onClick={() => setActiveTab('candidates')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'candidates'
                    ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Users size={18} />
                <span>Для соискателей</span>
              </button>
              <button
                onClick={() => setActiveTab('employers')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'employers'
                    ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Briefcase size={18} />
                <span>Для работодателей</span>
              </button>
            </div>

            {/* Контент для соискателей */}
            {activeTab === 'candidates' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass rounded-2xl p-6 border border-white/30">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Покажите себя с лучшей стороны
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Расскажите о своем опыте и навыках',
                      'Покажите вашу личность и мотивацию',
                      'Продемонстрируйте портфолио или проекты',
                      'Объясните, почему вы идеальный кандидат'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="text-brand-primary flex-shrink-0" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-brand-primary/10 rounded-xl border border-brand-primary/20">
                  <Clock className="text-brand-primary" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Длительность: до 1:30</p>
                    <p className="text-sm text-gray-600">Оптимальное время для первого впечатления</p>
                  </div>
                </div>
              </div>
            )}

            {/* Контент для работодателей */}
            {activeTab === 'employers' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass rounded-2xl p-6 border border-white/30">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                    Представьте вашу компанию
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Познакомьте с командой и культурой',
                      'Покажите офис и рабочую атмосферу',
                      'Расскажите о проектах и возможностях',
                      'Объясните преимущества работы у вас'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="text-brand-secondary flex-shrink-0" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-brand-secondary/10 rounded-xl border border-brand-secondary/20">
                  <Heart className="text-brand-secondary" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Привлекайте лучших</p>
                    <p className="text-sm text-gray-600">Покажите, почему у вас хотят работать</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Правая колонка - Видео мокап */}
          <div className="relative animate-slide-in-right" style={{animationDelay: '0.7s'}}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Главный экран */}
              <div className="relative glass border border-white/30 rounded-3xl p-2 shadow-2xl hover:shadow-hover-lift transform hover:-translate-y-2 transition-all duration-500">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden aspect-[9/16]">
                  {/* Видео контейнер */}
                  <div className="relative h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
                    {!isPlaying ? (
                      <div className="text-center space-y-4">
                        <button
                          onClick={handlePlayClick}
                          className="group w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Play className="text-white ml-1 group-hover:scale-110 transition-transform" size={32} />
                        </button>
                        <div className="text-white text-center px-4">
                          <h4 className="font-semibold text-lg mb-1">
                            {activeTab === 'candidates' ? 'Мария, Frontend Developer' : 'Команда Яндекса'}
                          </h4>
                          <p className="text-white/80 text-sm">
                            {activeTab === 'candidates' ? 'Видео визитка кандидата' : 'Презентация вакансии'}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-full w-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                        <div className="text-center text-white space-y-3">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                            <Video className="text-white" size={24} />
                          </div>
                          <p className="text-sm animate-pulse">Воспроизведение видео...</p>
                          <button
                            onClick={handlePlayClick}
                            className="text-xs text-white/80 hover:text-white transition-colors"
                          >
                            Остановить
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Индикатор времени */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-xs mb-2">
                        <span>0:00</span>
                        <span>1:30</span>
                      </div>
                      <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className={`h-full bg-white transition-all duration-1000 ${isPlaying ? 'w-1/3' : 'w-0'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Плавающие элементы */}
              <div className="absolute -top-6 -right-6 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float border border-white/30" style={{animationDelay: '2s'}}>
                <Video className="text-brand-primary" size={24} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float border border-white/30" style={{animationDelay: '3s'}}>
                <Clock className="text-brand-secondary" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA секция */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <a 
            href="https://t.me/workswipematch_bot/work"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-elegant hover:shadow-hover-lift transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Создать видео визитку</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-gray-600 mt-4">
            Запись видео займет всего несколько минут
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
