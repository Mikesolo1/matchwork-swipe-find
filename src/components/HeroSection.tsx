
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Сложный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-neutral-50 via-white to-brand-primary/5"></div>
      
      {/* Анимированные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 rounded-full animate-morphing blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-secondary/15 to-brand-accent/10 rounded-full animate-float blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-primary/5 to-transparent rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая колонка */}
          <div className="space-y-8">
            {/* Бейдж */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full animate-fade-in-down">
              <Sparkles className="text-brand-primary" size={16} />
              <span className="text-sm font-medium text-brand-neutral-700">Революция в HR-tech</span>
            </div>
            
            {/* Заголовок */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-display-2xl font-display font-bold leading-none">
                Найдите работу за{' '}
                <span className="text-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent animate-gradient-shift bg-300% bg-clip-text">
                  5 минут
                </span>
              </h1>
              
              <p className="text-xl text-brand-neutral-600 leading-relaxed max-w-lg font-body">
                Революционная платформа для поиска работы в Telegram. Свайпайте вакансии, получайте матчи от HR, находите dream job.
              </p>
            </div>
            
            {/* Метрики */}
            <div className="grid grid-cols-3 gap-6 py-6 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-brand-primary">2,500+</div>
                <div className="text-sm text-brand-neutral-500 font-medium">Кандидатов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-brand-primary">500+</div>
                <div className="text-sm text-brand-neutral-500 font-medium">Компаний</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-brand-primary">98%</div>
                <div className="text-sm text-brand-neutral-500 font-medium">Матчей</div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a 
                href="https://t.me/matchwork_bot"
                className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-elegant hover:shadow-hover-lift transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Начать поиск</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group inline-flex items-center justify-center space-x-2 glass border border-brand-neutral-200 text-brand-neutral-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/80 transition-all duration-300">
                <TrendingUp size={20} className="group-hover:scale-110 transition-transform" />
                <span>Как это работает</span>
              </button>
            </div>
            
            {/* Социальное доказательство */}
            <div className="flex items-center space-x-4 text-sm text-brand-neutral-500 pt-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full border-2 border-white shadow-sm"></div>
                ))}
              </div>
              <span className="font-medium">
                Присоединились <strong className="text-brand-primary">2,500+</strong> профессионалов
              </span>
            </div>
          </div>
          
          {/* Правая колонка - Интерактивный мокап */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto max-w-sm perspective-1000">
              {/* Главный мокап телефона */}
              <div className="relative glass border border-white/30 rounded-[2.5rem] p-1 shadow-glass hover:shadow-hover-lift transform hover:-translate-y-2 transition-all duration-500 animate-float">
                <div className="bg-gradient-to-br from-brand-neutral-900 to-brand-neutral-800 rounded-[2.3rem] overflow-hidden">
                  {/* Статус бар */}
                  <div className="bg-brand-neutral-900 h-12 flex items-center justify-center relative">
                    <div className="text-white text-sm font-medium">Telegram</div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Контент */}
                  <div className="h-[500px] bg-gradient-to-b from-white to-brand-neutral-50 p-6 space-y-6">
                    {/* Хедер бота */}
                    <div className="text-center animate-fade-in-down" style={{animationDelay: '1s'}}>
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full mx-auto mb-4 flex items-center justify-center shadow-elegant animate-glow">
                        <Users className="text-white" size={32} />
                      </div>
                      <h3 className="font-display font-bold text-xl text-brand-neutral-800">Frontend Developer</h3>
                      <p className="text-brand-neutral-600 font-medium">Тинькофф • Удаленно</p>
                    </div>
                    
                    {/* Карточка вакансии */}
                    <div className="glass-dark rounded-2xl p-6 shadow-elegant animate-scale-in" style={{animationDelay: '1.2s'}}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-display font-bold text-brand-primary">150,000 ₽</span>
                          <span className="text-sm text-brand-neutral-500 font-medium">в месяц</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'TypeScript', 'Next.js'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Кнопки действий */}
                    <div className="flex justify-center space-x-8 pt-8 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                      <button className="w-16 h-16 bg-brand-neutral-100 rounded-full flex items-center justify-center hover:bg-brand-neutral-200 transition-colors shadow-elegant">
                        <span className="text-2xl">❌</span>
                      </button>
                      <button className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-elegant animate-glow">
                        <span className="text-2xl">💖</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Плавающие элементы */}
              <div className="absolute -top-8 -right-8 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <Zap className="text-brand-primary" size={24} />
              </div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 glass rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
                <TrendingUp className="text-brand-secondary" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
