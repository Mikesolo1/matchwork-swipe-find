
import { Heart, Briefcase } from 'lucide-react';

const Logo = ({ className = "", size = "normal" }: { className?: string; size?: "small" | "normal" | "large" }) => {
  const sizes = {
    small: "w-8 h-8",
    normal: "w-12 h-12", 
    large: "w-16 h-16"
  };

  const iconSizes = {
    small: 16,
    normal: 24,
    large: 32
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl shadow-lg">
        <Heart 
          size={iconSizes[size]} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white fill-current"
        />
        <Briefcase 
          size={iconSizes[size] * 0.6} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        />
      </div>
    </div>
  );
};

export default Logo;
