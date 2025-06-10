
import { Zap, Heart, Target, Gift, Shield, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Просто",
      description: "Всё в Telegram — без регистрации, форм и сложных интерфейсов",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Clock,
      title: "Быстро", 
      description: "Подбор за считанные минуты, первые предложения уже через час",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Target,
      title: "Точно",
      description: "ИИ-алгоритм учитывает ваши навыки, опыт и предпочтения",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Gift,
      title: "Бесплатно",
      description: "Для соискателей сервис полностью бесплатный навсегда",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Heart,
      title: "Честно",
      description: "Взаимный интерес — работодатели видят только тех, кому интересно",
      color: "from-brand-pink to-brand-pink-light"
    },
    {
      icon: Shield,
      title: "Безопасно",
      description: "Ваши данные защищены, анонимность до момента взаимного интереса",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-brand-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-brand-gray-dark mb-6">
            Почему{' '}
            <span className="bg-gradient-to-r from-brand-pink to-brand-pink-light bg-clip-text text-transparent">
              Мэ́тчворк?
            </span>
          </h2>
          <p className="text-xl text-brand-gray-dark/70 font-open-sans max-w-3xl mx-auto">
            Мы объединили лучшее из мира знакомств и рекрутинга, чтобы сделать поиск работы простым и эффективным
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform animate-pulse-pink`}>
                  <benefit.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-montserrat font-bold text-brand-gray-dark">
                  {benefit.title}
                </h3>
                
                <p className="text-brand-gray-dark/70 font-open-sans leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Статистика успеха */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-montserrat font-bold text-brand-pink mb-2">89%</div>
              <div className="text-brand-gray-dark/70 font-open-sans">Получили отклик в первый день</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-montserrat font-bold text-brand-pink mb-2">2.3x</div>
              <div className="text-brand-gray-dark/70 font-open-sans">Быстрее чем обычные сайты</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-montserrat font-bold text-brand-pink mb-2">95%</div>
              <div className="text-brand-gray-dark/70 font-open-sans">Довольны результатом</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-montserrat font-bold text-brand-pink mb-2">24/7</div>
              <div className="text-brand-gray-dark/70 font-open-sans">Поддержка в Telegram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
