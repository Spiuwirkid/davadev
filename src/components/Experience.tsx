import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Tehnical Support',
    company: 'PT. Netsentra Cyberindo.',
    period: 'July 2024 - January 2025',
    description: 'Leading infrastructure, Network Monitoring, Troubleshooting & Maintenance, Data Center'
  },
  // {
  //   title: 'Network Engineer',
  //   company: 'Global Networks Ltd.',
  //   period: '2018 - 2020',
  //   description: 'Designed and maintained enterprise network infrastructure for Fortune 500 clients.'
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company: 'Web Innovators',
  //   period: '2016 - 2018',
  //   description: 'Developed and maintained multiple web applications using modern JavaScript frameworks.'
  // }
];

const certifications = [
  {
    name: 'MTCNA',
    issuer: 'Mikrotik',
    date: 'Sept 2024'
  },
  {
    name: 'FCF Cybersecurity',
    issuer: 'Fortinet',
    date: 'Feb 2025'
  },
  {
    name: 'Web Development',
    issuer: 'Coding Studio',
    date: 'April 2023'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={item}
                  className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0 group"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px] group-hover:scale-125 transition-transform" />
                  <div className="backdrop-blur-lg bg-white/70 p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-blue-600 mb-2">{exp.company}</p>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 flex items-center gap-3">
              <Award className="w-6 h-6 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={item}
                  className="group backdrop-blur-lg bg-white/70 p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-gray-500">Issued: {cert.date}</p>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;