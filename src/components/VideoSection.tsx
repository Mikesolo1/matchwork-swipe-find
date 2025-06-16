
import { Users, Briefcase, Clock, CheckCircle, ArrowRight, Zap, Eye, Play, Star, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [activeTab, setActiveTab] = useState<'candidates' | 'employers'>('candidates');

  const CandidateVideoMockup = () => (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300">
      {/* Video area */}
      <div className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent"></div>
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
          <Play className="text-brand-primary ml-1" size={24} />
        </div>
        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
          1:30
        </div>
      </div>
      
      {/* Profile info */}
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
            АМ
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">Анна Михайлова</h4>
            <p className="text-sm text-brand-primary font-medium">Frontend разработчик</p>
            <div className="flex items-center space-x-2 mt-1">
              <MapPin size={12} className="text-gray-400" />
              <span className="text-xs text-gray-600">Москва</span>
              <div className="flex items-center space-x-1">
                <Star size={12} className="text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600">4.9</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {['React', 'TypeScript', 'Node.js'].map((skill) => (
            <span key={skill} className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const EmployerVideoMockup = () => (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300">
      {/* Video area */}
      <div className="aspect-video bg-gradient-to-br from-brand-secondary/10 to-brand-accent/5 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent"></div>
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
          <Play className="text-brand-secondary ml-1" size={24} />
        </div>
        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
          1:20
        </div>
      </div>
      
      {/* Company info */}
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
            IT
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">IT Solutions</h4>
            <p className="text-sm text-brand-secondary font-medium">Senior React Developer</p>
            <div className="flex items-center space-x-2 mt-1">
              <MapPin size={12} className="text-gray-400" />
              <span className="text-xs text-gray-600">Санкт-Петербург</span>
              <Calendar size={12} className="text-gray-400" />
              <span className="text-xs text-gray-600">Удаленно</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-1 bg-brand-secondary/10 text-brand-secondary text-xs rounded-full">
              200k - 300k ₽
            </span>
          </div>
          <div className="text-xs text-gray-600">
            +50 откликов
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-brand-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -right-20 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute -bottom-10 -left-20 w-48 h-48 bg-gradient-to-tr from-brand-secondary/8 to-brand-accent/5 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-3 py-2 rounded-full mb-4 animate-fade-in-down">
            <Zap className="text-brand-primary" size={16} />
            <span className="text-xs font-medium text-gray-800">Видео знакомство</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Видео визитка за{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text">
              90 секунд
            </span>
          </h2>

          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Создайте персональное видео до 1:30, которое покажет вас с лучшей стороны. 
            Знакомьтесь мгновенно, без долгих собеседований!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab switcher */}
          <div className="flex bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-100 mb-8 animate-scale-in" style={{animationDelay: '0.3s'}}>
            <button
              onClick={() => setActiveTab('candidates')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === 'candidates'
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Users size={16} />
              <span>Для соискателей</span>
            </button>
            <button
              onClick={() => setActiveTab('employers')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === 'employers'
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Briefcase size={16} />
              <span>Для работодателей</span>
            </button>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Left side - Benefits */}
            <div className="space-y-6 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <h3 className="font-display font-bold text-xl text-gray-900">
                {activeTab === 'candidates' ? 'Покажите себя с лучшей стороны' : 'Привлекайте лучших кандидатов'}
              </h3>
              
              <div className="space-y-3">
                {(activeTab === 'candidates' ? [
                  'Расскажите о своем опыте и навыках',
                  'Покажите вашу личность и мотивацию',
                  'Продемонстрируйте портфолио или проекты',
                  'Выделитесь среди других кандидатов'
                ] : [
                  'Познакомьте с командой и культурой',
                  'Покажите офис и рабочую атмосферу',
                  'Расскажите о проектах и возможностях',
                  'Объясните преимущества работы у вас'
                ]).map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} size={16} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="glass rounded-xl p-4 text-center group hover:shadow-hover-lift transition-all duration-300">
                  <Clock className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'} mx-auto mb-2 group-hover:scale-110 transition-transform`} size={20} />
                  <div className="font-bold text-lg text-gray-900">1:30</div>
                  <div className="text-xs text-gray-600">Длительность</div>
                </div>
                
                <div className="glass rounded-xl p-4 text-center group hover:shadow-hover-lift transition-all duration-300">
                  <Eye className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'} mx-auto mb-2 group-hover:scale-110 transition-transform`} size={20} />
                  <div className="font-bold text-lg text-gray-900">100%</div>
                  <div className="text-xs text-gray-600">Внимание</div>
                </div>
              </div>
            </div>

            {/* Right side - Video mockup */}
            <div className="animate-slide-in-right" style={{animationDelay: '0.5s'}}>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-center mb-4">
                  {activeTab === 'candidates' ? 'Пример видео визитки соискателя' : 'Пример видео визитки вакансии'}
                </h4>
                
                {activeTab === 'candidates' ? <CandidateVideoMockup /> : <EmployerVideoMockup />}
                
                <div className={`p-4 rounded-xl border ${activeTab === 'candidates' ? 'bg-brand-primary/10 border-brand-primary/20' : 'bg-brand-secondary/10 border-brand-secondary/20'} transition-all duration-300`}>
                  <div className="flex items-center space-x-3">
                    <Zap className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'}`} size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {activeTab === 'candidates' ? 'Быстрое знакомство' : 'Эффективный отбор'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {activeTab === 'candidates' ? 'Работодатели узнают вас за минуту' : 'Найдите идеальных кандидатов'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://t.me/workswipematch_bot/work"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-elegant hover:shadow-hover-lift transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Создать видео визитку</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-gray-600 mt-3">
              Запись займет всего несколько минут
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
