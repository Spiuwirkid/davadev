import { Server, Cloud, Code, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/assets/images/IMG_1689.JPG"
                alt="Profile"
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
                // className="w-70 h-80 object-cover rounded mx-auto shadow-xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-blue-600 rounded-2xl z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-blue-600 rounded-2xl z-0"></div>
            
            {/* Stats */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] grid grid-cols-3 gap-4 backdrop-blur-lg bg-white/90 p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">8+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">20+</p>
                <p className="text-sm text-gray-600">Certifications</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Network Engineer, DevOps Specialist & Web Developer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
              I am a Network Engineer, DevOps Specialist, and Web Developer with a passion for building scalable infrastructure, automating workflows, and developing high-performance web applications. With extensive experience in networking, cloud computing, and system automation, I specialize in optimizing IT infrastructure to ensure reliability, security, and efficiency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              I thrive in designing and implementing secure network systems, configuring DevOps pipelines, and developing modern, user-friendly web applications. My expertise includes network maintenance, server management, containerization, and cloud services, ensuring seamless and scalable digital experiences.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="grid gap-6">
              <div className="group p-6 backdrop-blur-lg bg-white/70 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Server className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Network Engineering
                      <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h4>
                    <p className="text-gray-600">
                    Installing ESXi clusters, configuring VCenter, automating deployments, and managing aws.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 backdrop-blur-lg bg-white/70 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      DevOps
                      <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h4>
                    <p className="text-gray-600">
                    Developing secure, high-performance web applications with modern technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 backdrop-blur-lg bg-white/70 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Web Development
                      <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h4>
                    <p className="text-gray-600">
                      Building modern, responsive web applications with cutting-edge technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;