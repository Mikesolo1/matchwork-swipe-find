
import { Users, Briefcase, Clock, CheckCircle, ArrowRight, Zap, Eye, Play, Star, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [activeTab, setActiveTab] = useState<'candidates' | 'employers'>('candidates');

  const CandidateCard = () => (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300 p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-5">
        {/* Улучшенная круглая видео визитка */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent overflow-hidden relative group/video cursor-pointer border-4 border-white shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Аватар с градиентом */}
            <div className="w-full h-full bg-gradient-to-br from-brand-primary/90 to-brand-secondary/80 flex items-center justify-center relative overflow-hidden">
              <span className="text-white font-bold text-xl z-10">АМ</span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/video:translate-x-full transition-transform duration-1000"></div>
            </div>
            {/* Play кнопка при ховере */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform duration-200">
                <Play className="text-brand-primary ml-0.5" size={16} fill="currentColor" />
              </div>
            </div>
            {/* Улучшенный индикатор видео */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
              <Play className="text-white ml-0.5" size={10} fill="white" />
            </div>
          </div>
          {/* Пульсирующий онлайн статус */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg"></div>
        </div>
        
        {/* Информация о кандидате */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-900 truncate mb-1">Анна Михайлова</h4>
              <p className="text-brand-primary font-semibold text-sm mb-2">Frontend разработчик</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1.5">
                  <MapPin size={14} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Москва</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-700 font-medium">4.9</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">150k - 200k ₽</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Ожидания</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js'].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary text-xs font-medium rounded-full border border-brand-primary/20 hover:bg-brand-primary/20 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const EmployerCard = () => (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300 p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-5">
        {/* Улучшенная круглая видео визитка компании */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-primary overflow-hidden relative group/video cursor-pointer border-4 border-white shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Логотип компании с градиентом */}
            <div className="w-full h-full bg-gradient-to-br from-brand-secondary/90 to-brand-accent/80 flex items-center justify-center relative overflow-hidden">
              <span className="text-white font-bold text-lg z-10">IT</span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/video:translate-x-full transition-transform duration-1000"></div>
            </div>
            {/* Play кнопка при ховере */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform duration-200">
                <Play className="text-brand-secondary ml-0.5" size={16} fill="currentColor" />
              </div>
            </div>
            {/* Улучшенный индикатор видео */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
              <Play className="text-white ml-0.5" size={10} fill="white" />
            </div>
          </div>
          {/* Статус компании */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white animate-pulse shadow-lg"></div>
        </div>
        
        {/* Информация о вакансии */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h4 className="font-bold text-lg text-gray-900 truncate mb-1">IT Solutions</h4>
              <p className="text-brand-secondary font-semibold text-sm mb-2">Senior React Developer</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1.5">
                  <MapPin size={14} className="text-gray-500" />
                  <span className="text-sm text-gray-600">СПб</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Calendar size={14} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Удаленно</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">200k - 300k ₽</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">+ бонусы</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 text-brand-secondary text-xs font-medium rounded-full border border-brand-secondary/20 hover:bg-brand-secondary/20 transition-colors">
                React
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 text-brand-secondary text-xs font-medium rounded-full border border-brand-secondary/20 hover:bg-brand-secondary/20 transition-colors">
                Senior
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-sm text-gray-600 bg-green-50 px-2 py-1 rounded-full">
              <TrendingUp size={14} className="text-green-500" />
              <span className="font-medium">+50 откликов</span>
            </div>
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
            Круглая видео визитка{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text">
              как в Telegram
            </span>
          </h2>

          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Персональное видео прямо в карточке профиля. Знакомьтесь мгновенно одним кликом!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
              <span>Соискатели</span>
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
              <span>Работодатели</span>
            </button>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Left side - Benefits */}
            <div className="space-y-6 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <h3 className="font-display font-bold text-xl text-gray-900">
                {activeTab === 'candidates' ? 'Покажите себя одним кликом' : 'Привлекайте лучших кандидатов'}
              </h3>
              
              <div className="space-y-3">
                {(activeTab === 'candidates' ? [
                  'Круглое видео прямо в профиле',
                  'Мгновенное знакомство с личностью',
                  'Выделяйтесь среди резюме',
                  'Показывайте навыки в действии'
                ] : [
                  'Видео-презентация вакансии', 
                  'Покажите команду и офис',
                  'Расскажите о культуре компании',
                  'Привлекайте качественных кандидатов'
                ]).map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} size={16} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="glass rounded-xl p-4 text-center group hover:shadow-hover-lift transition-all duration-300">
                  <Clock className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'} mx-auto mb-2 group-hover:scale-110 transition-transform`} size={20} />
                  <div className="font-bold text-lg text-gray-900">90с</div>
                  <div className="text-xs text-gray-600">Длительность</div>
                </div>
                
                <div className="glass rounded-xl p-4 text-center group hover:shadow-hover-lift transition-all duration-300">
                  <Eye className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'} mx-auto mb-2 group-hover:scale-110 transition-transform`} size={20} />
                  <div className="font-bold text-lg text-gray-900">+300%</div>
                  <div className="text-xs text-gray-600">Просмотры</div>
                </div>

                <div className="glass rounded-xl p-4 text-center group hover:shadow-hover-lift transition-all duration-300">
                  <TrendingUp className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'} mx-auto mb-2 group-hover:scale-110 transition-transform`} size={20} />
                  <div className="font-bold text-lg text-gray-900">+150%</div>
                  <div className="text-xs text-gray-600">Отклик</div>
                </div>
              </div>
            </div>

            {/* Right side - Card examples */}
            <div className="animate-slide-in-right" style={{animationDelay: '0.5s'}}>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-center mb-4">
                  {activeTab === 'candidates' ? 'Карточка кандидата с видео' : 'Карточка вакансии с видео'}
                </h4>
                
                {activeTab === 'candidates' ? <CandidateCard /> : <EmployerCard />}
                
                <div className={`p-4 rounded-xl border ${activeTab === 'candidates' ? 'bg-brand-primary/10 border-brand-primary/20' : 'bg-brand-secondary/10 border-brand-secondary/20'} transition-all duration-300`}>
                  <div className="flex items-center space-x-3">
                    <Zap className={`${activeTab === 'candidates' ? 'text-brand-primary' : 'text-brand-secondary'}`} size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {activeTab === 'candidates' ? 'Мгновенное знакомство' : 'Быстрый отбор'}
                      </p>
                      <p className="text-xs text-gray-600">
                        Кликните на круглое видео для просмотра
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
              Запись займет всего минуту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
