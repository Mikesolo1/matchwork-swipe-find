
import Logo from './Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 animate-fade-in">
          <Logo size="normal" />
          <span className="text-xl font-montserrat font-bold text-brand-gray-dark">
            Мэ́тчворк
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-brand-gray-dark hover:text-brand-pink transition-colors font-open-sans">
            Как работает
          </a>
          <a href="#benefits" className="text-brand-gray-dark hover:text-brand-pink transition-colors font-open-sans">
            Преимущества
          </a>
          <a href="#demo" className="text-brand-gray-dark hover:text-brand-pink transition-colors font-open-sans">
            Демо
          </a>
        </nav>
        
        <a 
          href="https://t.me/matchwork_bot" 
          className="bg-gradient-to-r from-brand-pink to-brand-pink-light text-white px-6 py-2 rounded-full font-open-sans font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-pink"
        >
          Открыть в Telegram
        </a>
      </div>
    </header>
  );
};

export default Header;
