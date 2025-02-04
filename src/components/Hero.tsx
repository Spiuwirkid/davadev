import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="hero-image-container">
            <img
              src="/assets/images/IMG_1689.JPG"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg transition-transform duration-700 transform hover:rotate-y-180"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Dava Yuste</h1>
        <p className="text-2xl text-gray-600 mb-8">Network Engineer | DevOps | Web Developer</p>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Bridging network engineering, cloud infrastructure, and modern web development to create scalable, efficient, and secure solutions.
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Learn More
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-0" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-1500" />
      <div className="absolute top-2/3 right-1/4 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/6 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2500" />
    </section>
  );
};

export default Hero;
