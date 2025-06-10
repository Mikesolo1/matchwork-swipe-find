import { Calendar, DollarSign, Target, TrendingUp, Users, Zap, Building, Globe } from 'lucide-react';

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q2 2025",
      status: "current",
      title: "MVP и Первые пользователи",
      items: [
        "Запуск Telegram-бота с базовым функционалом",
        "Первые 5,000 пользователей",
        "100+ активных вакансий",
        "Базовая система матчинга"
      ],
      metrics: "5K пользователей, 100 вакансий",
      investment: "Pre-seed: $100K"
    },
    {
      quarter: "Q3 2025", 
      status: "planned",
      title: "Расширение функций",
      items: [
        "AI-рекомендации на основе профиля",
        "Интеграция с LinkedIn и HH.ru",
        "Расширенная аналитика для HR",
        "Первые платящие корпоративные клиенты"
      ],
      metrics: "25K пользователей, 50 компаний",
      investment: "Seed: $500K"
    },
    {
      quarter: "Q4 2025",
      status: "planned", 
      title: "Масштабирование",
      items: [
        "Запуск веб-платформы",
        "Мобильные приложения iOS/Android",
        "Видеоинтервью внутри платформы",
        "Расширение на регионы РФ"
      ],
      metrics: "100K пользователей, 200+ компаний",
      investment: "Series A: $2M"
    },
    {
      quarter: "Q1 2026",
      status: "planned",
      title: "Международная экспансия", 
      items: [
        "Запуск в странах СНГ",
        "Многоязычная поддержка",
        "Корпоративные решения Enterprise",
        "API для интеграции с ATS системами"
      ],
      metrics: "500K пользователей, 1000+ компаний",
      investment: "Series B: $10M"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'from-green-500 to-emerald-600';
      case 'planned': return 'from-blue-500 to-indigo-600';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current': return 'В разработке';
      case 'planned': return 'Запланировано';
      default: return 'Будущее';
    }
  };

  return (
    <section id="roadmap" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 border border-gray-200">
            <Target className="text-brand-primary" size={16} />
            <span className="text-sm font-medium text-gray-700">Дорожная карта</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Путь к{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text">
              успеху
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Наша стратегия развития от MVP до международной экспансии с четкими метриками и целями для инвесторов
          </p>
        </div>

        {/* Финансовые показатели */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: DollarSign, label: 'Общий объем привлечения', value: '$12.6M', desc: 'За 4 раунда' },
            { icon: Users, label: 'Целевая аудитория', value: '500K+', desc: 'К началу 2026' },
            { icon: Building, label: 'Корпоративных клиентов', value: '1000+', desc: 'Компаний-партнеров' },
            { icon: Globe, label: 'География', value: '15+', desc: 'Стран и регионов' }
          ].map((metric, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <metric.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl font-display font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.desc}</div>
            </div>
          ))}
        </div>

        {/* Дорожная карта */}
        <div className="space-y-8">
          {roadmapData.map((quarter, index) => (
            <div 
              key={index}
              className="relative animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Линия соединения */}
              {index < roadmapData.length - 1 && (
                <div className="hidden md:block absolute left-6 top-20 w-px h-20 bg-gradient-to-b from-gray-300 to-gray-200"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Временная метка */}
                <div className="md:w-32 flex-shrink-0">
                  <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getStatusColor(quarter.status)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                    <Calendar size={14} />
                    <span>{quarter.quarter}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 font-medium">
                    {getStatusText(quarter.status)}
                  </div>
                </div>

                {/* Контент */}
                <div className="flex-1 glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Основная информация */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="text-xl font-display font-bold text-gray-900">
                        {quarter.title}
                      </h3>
                      
                      <ul className="space-y-2">
                        {quarter.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Метрики и инвестиции */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="text-brand-primary" size={16} />
                          <span className="text-sm font-semibold text-gray-700">Целевые метрики</span>
                        </div>
                        <div className="text-sm text-gray-600">{quarter.metrics}</div>
                      </div>
                      
                      <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <DollarSign className="text-green-600" size={16} />
                          <span className="text-sm font-semibold text-green-700">Инвестиции</span>
                        </div>
                        <div className="text-sm text-green-600 font-medium">{quarter.investment}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Призыв к действию для инвесторов */}
        <div className="mt-20 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto border border-gray-200">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Zap className="text-white" size={32} />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Готовы инвестировать в будущее HR?
            </h3>
            
            <p className="text-gray-600 mb-6">
              Присоединяйтесь к нам на этапе активного роста и получите максимальную доходность от инвестиций
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:invest@matchwork.ru"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <DollarSign size={20} />
                <span>Обсудить инвестиции</span>
              </a>
              
              <a
                href="https://docs.google.com/document/d/1OjpDtL5DvS2unwuupRcNCJOxRK-sTcC8aGPSs77ToF4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 glass border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300"
              >
                <span>Подробный план</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
