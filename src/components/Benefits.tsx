
import { Zap, Heart, Target, Gift, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Мгновенно",
      description: "Всё в Telegram — без регистрации, форм и сложных интерфейсов. Один клик и вы уже ищете работу",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      stat: "5 сек",
      statLabel: "до начала"
    },
    {
      icon: Clock,
      title: "Молниеносно", 
      description: "Подбор за считанные минуты, первые предложения уже через час благодаря ИИ-алгоритмам",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      stat: "1 час",
      statLabel: "первый матч"
    },
    {
      icon: Target,
      title: "Персонально",
      description: "Продвинутый ИИ анализирует ваши навыки, опыт и предпочтения для идеального подбора",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      stat: "98%",
      statLabel: "точность"
    },
    {
      icon: Gift,
      title: "Полностью бесплатно",
      description: "Для соискателей сервис абсолютно бесплатный навсегда. Никаких скрытых платежей",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      stat: "0₽",
      statLabel: "навсегда"
    },
    {
      icon: Heart,
      title: "Взаимный интерес",
      description: "Работодатели видят только заинтересованных кандидатов, что повышает качество предложений",
      gradient: "from-brand-primary via-pink-500 to-red-400",
      stat: "95%",
      statLabel: "качество"
    },
    {
      icon: Shield,
      title: "Максимальная приватность",
      description: "Полная анонимность до момента взаимного интереса. Ваши данные под надежной защитой",
      gradient: "from-slate-400 via-gray-500 to-zinc-600",
      stat: "100%",
      statLabel: "безопасность"
    }
  ];

  const stats = [
    { value: "2,500+", label: "Активных кандидатов", change: "+23%" },
    { value: "500+", label: "Компаний-партнеров", change: "+45%" },
    { value: "89%", label: "Получили отклик в первый день", change: "+12%" },
    { value: "95%", label: "Довольны результатом", change: "+8%" }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-brand-neutral-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-3xl animate-morphing"></div>
      <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-tl from-brand-secondary/15 to-transparent rounded-full blur-2xl animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-4 sm:mb-6">
            <Sparkles className="text-brand-primary" size={16} />
            <span className="text-sm font-medium text-brand-neutral-600">Почему выбирают нас</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-neutral-800 mb-4 sm:mb-6">
            Революционные{' '}
            <span className="text-gradient">преимущества</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-brand-neutral-600 max-w-3xl mx-auto leading-relaxed px-4">
            Мы объединили лучшее из мира знакомств и рекрутинга, создав идеальную экосистему для поиска работы
          </p>
        </div>

        {/* Преимущества */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-hover-lift transform hover:-translate-y-2 transition-all duration-500 group-hover:scale-[1.02] h-full">
                {/* Статистика в углу */}
                <div className="absolute top-4 right-4 text-right">
                  <div className="text-xl sm:text-2xl font-display font-bold text-brand-primary">{benefit.stat}</div>
                  <div className="text-xs text-brand-neutral-500 font-medium">{benefit.statLabel}</div>
                </div>
                
                {/* Иконка с градиентом */}
                <div className="mb-4 sm:mb-6">
                  <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <benefit.icon className="text-white" size={20} />
                  </div>
                </div>
                
                {/* Контент */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-brand-neutral-800">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-brand-neutral-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                  
                  {/* Подробнее */}
                  <div className="flex items-center text-brand-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    <span>Подробнее</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Расширенная статистика */}
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-scale-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-neutral-800 mb-2">
              Впечатляющие результаты
            </h3>
            <p className="text-brand-neutral-600">Данные за последние 30 дней</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-brand-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-brand-neutral-600 text-xs sm:text-sm mb-2 font-medium px-2">
                  {stat.label}
                </div>
                <div className="inline-flex items-center text-green-600 text-xs font-semibold bg-green-50 px-2 py-1 rounded-full">
                  <ArrowRight size={12} className="mr-1 rotate-[-45deg]" />
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
