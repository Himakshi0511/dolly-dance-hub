
import { Users, Award, Star } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-12 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-2">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">500+</h3>
            <p className="text-gray-600">Happy Students</p>
          </div>
          <div className="animate-fade-in">
            <div className="flex justify-center mb-2">
              <Award className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">5</h3>
            <p className="text-gray-600">Dance Forms</p>
          </div>
          <div className="animate-fade-in">
            <div className="flex justify-center mb-2">
              <Star className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
