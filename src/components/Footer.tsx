import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size="normal" />
              <span className="text-xl font-display font-bold">Мэ́тчворк</span>
            </div>
            <p className="text-gray-300 font-body leading-relaxed">
              Революционный способ поиска работы через Telegram. Свайпайте вакансии и получайте предложения мгновенно.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/matchwork_support" className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary/80 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://instagram.com/matchwork_ru" className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center hover:bg-brand-primary/80 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Продукт */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold">Продукт</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#how-it-works" className="text-gray-300 hover:text-brand-primary transition-colors">Как работает</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-brand-primary transition-colors">Преимущества</a></li>
              <li><a href="#demo" className="text-gray-300 hover:text-brand-primary transition-colors">Демо</a></li>
              <li><a href="https://t.me/workswipematch_bot/work" className="text-gray-300 hover:text-brand-primary transition-colors">Telegram бот</a></li>
            </ul>
          </div>
          
          {/* Для бизнеса */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold">Для работодателей</h4>
            <ul className="space-y-2 font-body">
              <li><a href="https://t.me/matchwork_business" className="text-gray-300 hover:text-brand-primary transition-colors">Разместить вакансию</a></li>
              <li><a href="mailto:business@matchwork.ru" className="text-gray-300 hover:text-brand-primary transition-colors">Корпоративные планы</a></li>
              <li><a href="mailto:api@matchwork.ru" className="text-gray-300 hover:text-brand-primary transition-colors">API для интеграции</a></li>
              <li><a href="mailto:support@matchwork.ru" className="text-gray-300 hover:text-brand-primary transition-colors">Техподдержка</a></li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold">Контакты</h4>
            <div className="space-y-3 font-body">
              <a href="mailto:hello@matchwork.ru" className="flex items-center space-x-2 text-gray-300 hover:text-brand-primary transition-colors">
                <Mail size={16} />
                <span>hello@matchwork.ru</span>
              </a>
              <a href="https://t.me/matchwork_support" className="flex items-center space-x-2 text-gray-300 hover:text-brand-primary transition-colors">
                <MessageCircle size={16} />
                <span>Поддержка в Telegram</span>
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-400 font-body">
                Мы работаем 24/7 и отвечаем в течение 15 минут
              </p>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-body text-sm">
              © 2025 Мэ́тчворк. Все права защищены.
            </div>
            
            <div className="flex space-x-6 text-sm font-body">
              <a href="/privacy" className="text-gray-400 hover:text-brand-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms" className="text-gray-400 hover:text-brand-primary transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 font-body">
              Планируется выпуск web-версии и мобильных приложений для iOS/Android в 2025 году
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
