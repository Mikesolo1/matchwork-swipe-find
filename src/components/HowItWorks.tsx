
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
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-white to-brand-neutral-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tr from-brand-accent/15 to-brand-primary/10 rounded-full blur-3xl animate-morphing"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-brand-neutral-600">Простой процесс</span>
          </div>
          
          <h2 className="text-display-lg font-display font-bold text-brand-neutral-800 mb-6">
            Как это{' '}
            <span className="text-gradient">работает?</span>
          </h2>
          
          <p className="text-xl text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Революционно простой процесс из 4 шагов, который займет всего несколько минут
          </p>
        </div>

        {/* Шаги */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              
              <div className="relative glass rounded-3xl p-8 hover:shadow-hover-lift transform hover:-translate-y-2 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Номер шага */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-elegant text-white font-bold text-lg">
                  {index + 1}
                </div>
                
                {/* Иконка */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl mx-auto flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                    <step.icon className="text-white" size={32} />
                  </div>
                </div>
                
                {/* Контент */}
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-display font-bold text-brand-neutral-800">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Статистика */}
        <div className="glass rounded-3xl p-8 max-w-md mx-auto text-center animate-scale-in" style={{animationDelay: '0.8s'}}>
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-brand-primary font-display font-bold text-lg">Среднее время поиска</span>
          </div>
          <div className="text-3xl font-display font-bold text-brand-neutral-800">2-7 дней</div>
          <p className="text-brand-neutral-500 text-sm mt-2">против 2-3 месяцев обычно</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
