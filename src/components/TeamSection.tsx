
import { Card } from "@/components/ui/card";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Dance Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our talented dancers who bring passion and energy to every performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-96">
              <img 
                src="/lovable-uploads/7a6f5173-fadf-4f6e-b9c3-1585e8ce1d33.png" 
                alt="Classical Dance Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Classical Dance Ensemble</h3>
                <p className="text-lg opacity-90">Traditional elegance in motion</p>
              </div>
            </div>
          </Card>
          
          <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-96">
              <img 
                src="/lovable-uploads/72742a0c-1ab4-4343-9bfd-c13a5e312613.png" 
                alt="Folk Dance Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Folk Dance Troupe</h3>
                <p className="text-lg opacity-90">Celebrating cultural heritage</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
