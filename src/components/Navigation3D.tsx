import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Navigation3DProps {
  onToggle3D: () => void;
  is3DMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Navigation3D = ({ onToggle3D, is3DMode, scrollToSection }: Navigation3DProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Classes', id: 'classes' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dolly Dance Hub
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            <Button
              onClick={onToggle3D}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                is3DMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {is3DMode ? '🌟 3D Mode' : '🎭 2D Mode'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left text-white hover:text-purple-300 transition-colors"
              >
                {item.name}
              </button>
            ))}
            
            <Button
              onClick={() => {
                onToggle3D();
                setIsOpen(false);
              }}
              className={`w-full ${
                is3DMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {is3DMode ? '🌟 3D Mode' : '🎭 2D Mode'}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation3D;