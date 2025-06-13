
import { Button } from "@/components/ui/button";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Dolly Dance Hub
          </h1>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('classes')} className="text-gray-700 hover:text-purple-600 transition-colors">Classes</button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-purple-600 transition-colors">Our Team</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
