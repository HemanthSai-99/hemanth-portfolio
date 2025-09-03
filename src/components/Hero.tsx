import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLlhVaE0xUzA8p1tUUbflRAtqBRjPG3lznq8cjWuAwdazUhg9s=s288-c-no"
              alt="Hemanth Sai Tholikonda"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hemanth Sai Tholikonda
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fade-in-delay-1">
          Software Tester || Manual || Automation
        </p>
        
        <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
         Proven ability to design and execute comprehensive test plans, identify
and document bugs, and collaborate with cross-functional teams to ensure highquality software delivery
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button 
            onClick={scrollToContact}
            className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </button>
         <a
            href="file:///C:/Users/ATTIVO/Downloads/Hemanth_Tester.pdf"
  download="Hemanth_Sai_Resume.pdf"
  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2"
>
  <Download size={20} />
  Download Resume
</a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay-1 { animation: fade-in 1s ease-out 0.2s both; }
        .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 0.4s both; }
        .animate-fade-in-delay-3 { animation: fade-in 1s ease-out 0.6s both; }
      `}</style>
    </section>
  );
};

export default Hero;