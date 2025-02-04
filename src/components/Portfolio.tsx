import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion untuk animasi

// Data proyek
const projects = [
  {
    title: 'ESXI Cluster Servers',
    description: 'Setting up 4 Hp servers to create an esxi cluster',
    image: 'https://i.ibb.co.com/0vVH6Lv/photo-2025-02-02-19-10-25.jpg',
    tags: ['HP', 'ESXI', 'Vcenter', 'Cluster'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
    category: 'network'
  },
  {
    title: 'Network Monitoring PRTG',
    description: 'Real-time network monitoring system with PRTG',
    image: 'https://i.ibb.co.com/FL9TQVzC/Screenshot-2025-02-02-190143.png',
    tags: ['PRTG', 'Monitoring', 'System'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'network'
  },
  // {
  //   title: 'DevOps Pipeline Automation',
  //   description: 'Automated deployment pipeline using Jenkins, Docker, and Kubernetes for microservices architecture',
  //   image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=640',
  //   tags: ['Jenkins', 'Kubernetes', 'Docker', 'GitOps'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   category: 'devops'
  // },
  // {
  //   title: 'E-Commerce Mobile App',
  //   description: 'Cross-platform mobile application built with React Native for a leading e-commerce brand',
  //   image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=640',
  //   tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   category: 'app'
  // },
  // {
  //   title: 'Corporate Brand Identity',
  //   description: 'Complete brand identity design including logo, guidelines, and marketing materials',
  //   image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=640',
  //   tags: ['Branding', 'Design', 'Marketing'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   category: 'branding'
  // },
  // {
  //   title: 'Modern Web Application',
  //   description: 'Full-stack web application with real-time features and modern UI/UX design',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=640',
  //   tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   category: 'web'
  // }
];

// Daftar kategori proyek
const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'network', name: 'Network' },
  { id: 'branding', name: 'Branding' },
  { id: 'app', name: 'App' },
  { id: 'devops', name: 'DevOps' }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = React.useState('all'); // State untuk kategori aktif

  const filteredProjects = projects.filter(project =>
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>

        {/* Kategori Filter dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 150,
            duration: 0.1,  // Durasi animasi lebih panjang
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/70 text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Grid Projects dengan Animasi */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 25,
                delay: index * 0.2,  // Penundaan lebih halus antar proyek
              }}
              className="group backdrop-blur-lg bg-white/70 rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
