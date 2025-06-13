
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section 
      id="home" 
      className="pt-20 pb-16 relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.5)), url('/lovable-uploads/3a8b00bd-2cd3-4026-ac7f-d50073771ca1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            ✨ Premier Dance Studio
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in">
            Dolly Dance Hub
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg mb-8 animate-fade-in">
            Where passion meets rhythm and dreams take flight through dance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg shadow-2xl"
              onClick={() => scrollToSection('classes')}
            >
              Explore Classes
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg shadow-2xl backdrop-blur-sm"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
