
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-3 animate-fade-in-down">
            <Logo size="normal" />
            <span className="text-2xl font-display font-bold text-brand-neutral-800">
              Мэ́тчворк
            </span>
          </div>
          
          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Как работает', href: '#how-it-works' },
              { label: 'Преимущества', href: '#benefits' },
              { label: 'Демо', href: '#demo' }
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-brand-neutral-600 hover:text-brand-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* CTA кнопка */}
          <div className="hidden md:block">
            <a 
              href="https://t.me/matchwork_bot" 
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-elegant hover:shadow-hover-lift transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Открыть в Telegram</span>
            </a>
          </div>

          {/* Мобильное меню */}
          <button 
            className="md:hidden p-2 text-brand-neutral-600 hover:text-brand-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-6 animate-fade-in-down">
            <nav className="space-y-4">
              {[
                { label: 'Как работает', href: '#how-it-works' },
                { label: 'Преимущества', href: '#benefits' },
                { label: 'Демо', href: '#demo' }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="block text-brand-neutral-600 hover:text-brand-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://t.me/matchwork_bot" 
                className="block bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Открыть в Telegram
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
