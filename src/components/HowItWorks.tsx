
import { Bot, Heart, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Bot,
      title: "Откройте Telegram",
      description: "Запустите бота @matchwork_bot — никакой регистрации не требуется",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Свайпайте вакансии", 
      description: "Вправо ❤️ — интересно, влево ❌ — пропустить. Как в Tinder для работы",
      gradient: "from-brand-primary to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Получайте матчи",
      description: "HR видят ваш интерес и присылают персональные предложения",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: CheckCircle,
      title: "Выходите на работу",
      description: "Договаривайтесь об условиях и приступайте к новой карьере",
      gradient: "from-purple-500 to-brand-secondary"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-brand-neutral-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-brand-accent/15 to-brand-primary/10 rounded-full blur-3xl animate-morphing"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-brand-neutral-600">Простой процесс</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-neutral-800 mb-4 sm:mb-6">
            Как это{' '}
            <span className="text-gradient">работает?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed px-4">
            Революционно простой процесс из 4 шагов, который займет всего несколько минут
          </p>
        </div>

        {/* Шаги */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Соединительная линия */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-px bg-gradient-to-r from-brand-primary/50 to-brand-secondary/50 z-10">
                  <ArrowRight className="absolute -right-2 -top-2 text-brand-primary/70" size={16} />
                </div>
              )}
              
              <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-hover-lift transform hover:-translate-y-2 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Номер шага */}
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-elegant text-white font-bold text-base sm:text-lg">
                  {index + 1}
                </div>
                
                {/* Иконка */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${step.gradient} rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                    <step.icon className="text-white" size={28} />
                  </div>
                </div>
                
                {/* Контент */}
                <div className="space-y-3 sm:space-y-4 text-center">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-brand-neutral-800">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-neutral-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Статистика */}
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-auto text-center animate-scale-in" style={{animationDelay: '0.8s'}}>
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-brand-primary font-display font-bold text-base sm:text-lg">Среднее время поиска</span>
          </div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-brand-neutral-800">2-7 дней</div>
          <p className="text-brand-neutral-500 text-sm mt-2">против 2-3 месяцев обычно</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
