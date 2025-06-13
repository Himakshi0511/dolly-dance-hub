
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dolly Dance Hub
          </h3>
          <p className="text-gray-300 mb-6">Co-founded by Himakshi Thakre</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <span>Bollywood</span>
            <span>•</span>
            <span>Freestyle</span>
            <span>•</span>
            <span>Belly Dance</span>
            <span>•</span>
            <span>Classical</span>
            <span>•</span>
            <span>Folk</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 Dolly Dance Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
