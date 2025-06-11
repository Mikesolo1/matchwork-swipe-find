
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeAnimation, setSwipeAnimation] = useState<'like' | 'pass' | null>(null);

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Тинькофф",
      location: "Удаленно",
      salary: "150,000 ₽",
      period: "в месяц",
      skills: ["React", "TypeScript", "Next.js"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Product Manager",
      company: "Яндекс",
      location: "Москва",
      salary: "200,000 ₽",
      period: "в месяц",
      skills: ["Analytics", "Strategy", "Agile"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "UX/UI Designer",
      company: "Ozon",
      location: "Санкт-Петербург",
      salary: "120,000 ₽",
      period: "в месяц",
      skills: ["Figma", "Prototyping", "Research"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Backend Developer",
      company: "ВКонтакте",
      location: "Удаленно",
      salary: "180,000 ₽",
      period: "в месяц",
      skills: ["Node.js", "Python", "PostgreSQL"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Data Scientist",
      company: "Сбер",
      location: "Москва",
      salary: "250,000 ₽",
      period: "в месяц",
      skills: ["Python", "ML", "TensorFlow"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const nextJob = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSwipeAnimation('like');
    setTimeout(() => {
      setCurrentJobIndex((prev) => (prev + 1) % jobs.length);
      setSwipeAnimation(null);
      setIsAnimating(false);
    }, 500);
  };

  const prevJob = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSwipeAnimation('pass');
    setTimeout(() => {
      setCurrentJobIndex((prev) => (prev - 1 + jobs.length) % jobs.length);
      setSwipeAnimation(null);
      setIsAnimating(false);
    }, 500);
  };

  const currentJob = jobs[currentJobIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-20 sm:pt-24">
      {/* Анимированные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-brand-secondary/8 to-brand-accent/5 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Левая колонка */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Бейдж */}
            <div className="inline-flex items-center space-x-2 glass px-3 sm:px-4 py-2 rounded-full animate-fade-in-down">
              <Sparkles className="text-brand-primary" size={16} />
              <span className="text-sm font-medium text-gray-800">Революция в HR-tech</span>
            </div>
            
            {/* Заголовок с более плавной анимацией */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight text-gray-900 animate-fade-in-up" style={{animationDelay: '0.1s', animationDuration: '0.8s', animationFillMode: 'both'}}>
                Найдите работу за{' '}
                <span className="text-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent animate-gradient-shift bg-300% bg-clip-text">
                  5 минут
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0 font-body animate-fade-in-up" style={{animationDelay: '0.3s', animationDuration: '0.8s', animationFillMode: 'both'}}>
                Революционная платформа для поиска работы в Telegram. Свайпайте вакансии, получайте матчи от HR, находите dream job.
              </p>
            </div>
            
            {/* Метрики */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-3 sm:py-4 lg:py-6 animate-scale-in" style={{animationDelay: '0.5s'}}>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-brand-primary">2,500+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Кандидатов</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-brand-primary">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Компаний</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-brand-primary">98%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Матчей</div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <a 
                href="https://t.me/workswipematch_bot/work"
                className="group relative inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg shadow-elegant hover:shadow-hover-lift transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Начать поиск</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group inline-flex items-center justify-center space-x-2 glass border border-gray-200 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/90 transition-all duration-300">
                <TrendingUp size={18} className="group-hover:scale-110 transition-transform" />
                <span>Как это работает</span>
              </button>
            </div>
            
            {/* Социальное доказательство */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 text-sm pt-3 sm:pt-4 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full border-2 border-white shadow-sm"></div>
                ))}
              </div>
              <span className="font-medium text-gray-700 text-xs sm:text-sm">
                Присоединились <strong className="text-brand-primary">2,500+</strong> профессионалов
              </span>
            </div>
          </div>
          
          {/* Правая колонка - Интерактивная карусель вакансий */}
          <div className="relative animate-slide-in-right order-first lg:order-last mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-xs sm:max-w-sm perspective-1000">
              {/* Главный мокап телефона */}
              <div className="relative glass border border-white/30 rounded-[2rem] sm:rounded-[2.5rem] p-1 shadow-2xl hover:shadow-hover-lift transform hover:-translate-y-2 transition-all duration-500 animate-float">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[1.8rem] sm:rounded-[2.3rem] overflow-hidden">
                  {/* Статус бар */}
                  <div className="bg-gray-900 h-10 sm:h-12 flex items-center justify-center relative">
                    <div className="text-white text-sm font-medium">Telegram</div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Контент */}
                  <div className="h-[400px] sm:h-[500px] bg-gradient-to-b from-white to-gray-50 p-4 sm:p-6 space-y-4 sm:space-y-6 relative">
                    {/* Хедер бота */}
                    <div className="text-center animate-fade-in-down" style={{animationDelay: '1s'}}>
                      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-elegant animate-glow">
                        <Users className="text-white" size={24} />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900">{currentJob.title}</h3>
                      <p className="text-gray-600 font-medium text-sm">{currentJob.company} • {currentJob.location}</p>
                    </div>
                    
                    {/* Карточка вакансии с анимацией свайпа */}
                    <div className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 transition-all duration-500 ${
                      swipeAnimation === 'like' ? 'transform translate-x-full rotate-12 opacity-0' :
                      swipeAnimation === 'pass' ? 'transform -translate-x-full -rotate-12 opacity-0' :
                      'transform translate-x-0 rotate-0 opacity-100'
                    }`}>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xl sm:text-2xl font-display font-bold text-brand-primary">{currentJob.salary}</span>
                          <span className="text-xs sm:text-sm text-gray-500 font-medium">{currentJob.period}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {currentJob.skills.map((tech) => (
                            <span key={tech} className="px-2 sm:px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full border border-brand-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Кнопки действий */}
                    <div className="flex justify-between items-center px-2 sm:px-4 pt-6 sm:pt-8">
                      <button 
                        onClick={prevJob}
                        disabled={isAnimating}
                        className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 shadow-lg border border-gray-200 disabled:opacity-50"
                      >
                        <X className="text-red-500" size={20} />
                      </button>
                      
                      <div className="flex space-x-1 sm:space-x-2">
                        {jobs.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentJobIndex ? 'bg-brand-primary' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <button 
                        onClick={nextJob}
                        disabled={isAnimating}
                        className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg animate-glow disabled:opacity-50"
                      >
                        <Heart className="text-white" size={20} />
                      </button>
                    </div>

                    {/* Анимация лайка/дизлайка */}
                    {swipeAnimation && (
                      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
                        swipeAnimation === 'like' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        <div className="text-6xl sm:text-8xl animate-ping">
                          {swipeAnimation === 'like' ? '💚' : '❌'}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
          
              {/* Плавающие элементы */}
              <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 glass rounded-xl sm:rounded-2xl flex items-center justify-center animate-float border border-white/30" style={{animationDelay: '2s'}}>
                <Zap className="text-brand-primary" size={20} />
              </div>
              <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-10 sm:w-12 h-10 sm:h-12 glass rounded-lg sm:rounded-xl flex items-center justify-center animate-float border border-white/30" style={{animationDelay: '3s'}}>
                <TrendingUp className="text-brand-secondary" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
