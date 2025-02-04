import { motion } from 'framer-motion';

const skills = {
  'Network Engineering': [
    { name: 'Cisco Networking', level: 70 },
    { name: 'Mikrotik Networking', level: 73 },
    { name: 'Network Monitoring', level: 85 },
    { name: 'Data Center Operations', level: 85 },
    { name: 'Troubleshooting & Maintenance', level: 92 },
  ],
  'DevOps': [
    { name: 'Docker', level: 76 },
    { name: 'Kubernetes', level: 76 },
    { name: 'AWS', level: 92 },
    { name: 'CI/CD', level: 88 },
    { name: 'Jenkins', level: 66 },
  ],
  'Web Development': [
    { name: 'Python', level: 79 },
    { name: 'Node.js', level: 69 },
    { name: 'Php', level: 70 },
    { name: 'React', level: 61 },
    { name: 'MongoDB', level: 87 },
  ]
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="relative">
      <div className="flex items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 backdrop-blur-lg bg-white/70 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">{category}</h3>
              <div className="space-y-6">
                {skillList.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
