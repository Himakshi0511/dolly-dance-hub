
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Dolly Dance Hub
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to Dolly Dance Hub, where movement becomes magic and every step tells a story. Our studio is a vibrant community dedicated to nurturing dancers of all ages and skill levels.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Under the visionary leadership of co-founder <strong>Himakshi Thakre</strong>, we offer comprehensive training in three dynamic dance forms, creating an environment where creativity flourishes and confidence soars.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h3>
                <p className="text-gray-600">To inspire and empower dancers through exceptional training, fostering creativity, discipline, and self-expression.</p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the premier dance studio that transforms lives through the art of movement and rhythm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
