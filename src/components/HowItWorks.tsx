import { Bot, Heart, MessageCircle, CheckCircle, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Bot,
      title: "Откройте Telegram",
      description: "Запустите нашего бота @matchwork_bot - никакой регистрации не требуется",
      delay: "0s"
    },
    {
      icon: Heart,
      title: "Свайпайте вакансии", 
      description: "Вправо ❤️ - интересно, влево ❌ - пропустить. Как в Tinder, только для работы",
      delay: "0.2s"
    },
    {
      icon: MessageCircle,
      title: "Получайте матчи",
      description: "Работодатели видят ваш интерес и сами присылают предложения",
      delay: "0.4s"
    },
    {
      icon: CheckCircle,
      title: "Выходите на работу",
      description: "Договаривайтесь об условиях и приступайте к новой работе",
      delay: "0.6s"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-brand-gray-dark mb-6">
            Как это{' '}
            <span className="bg-gradient-to-r from-brand-pink to-brand-pink-light bg-clip-text text-transparent">
              работает?
            </span>
          </h2>
          <p className="text-xl text-brand-gray-dark/70 font-open-sans max-w-2xl mx-auto">
            Простой процесс из 4 шагов, который займет всего несколько минут
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-scale-in"
              style={{animationDelay: step.delay}}
            >
              {/* Соединительная линия */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-brand-pink to-brand-pink-light"></div>
              )}
              
              <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-brand-gray-light/50 transition-all duration-300 group-hover:scale-105">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-pink to-brand-pink-light rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow animate-pulse-pink">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gray-dark text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-brand-gray-dark">
                  {step.title}
                </h3>
                
                <p className="text-brand-gray-dark/70 font-open-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-pink/10 px-6 py-3 rounded-full">
            <Clock className="text-brand-pink" size={20} />
            <span className="text-brand-pink font-open-sans font-semibold">
              Среднее время поиска: 2-7 дней
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
