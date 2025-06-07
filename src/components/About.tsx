
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  // const skills = [
  //   { name: 'Spring Boot', icon: '🍃', color: 'from-green-400 to-green-600' },
  //   { name: 'Ruby On Rails', icon: '💎', color: 'from-red-400 to-red-600' },
  //   { name: 'FastAPI', icon: '⚡', color: 'from-teal-400 to-teal-600' },
  //   { name: 'Django', icon: '🐍', color: 'from-green-500 to-green-700' },
  //   { name: 'React/Next.js', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
  //   { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
  //   { name: 'Angular', icon: '🅰️', color: 'from-green-400 to-green-600' },
  //   { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-600' },
  //   { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600' },
  //   { name: 'Java', icon: '☕', color: 'from-orange-400 to-orange-600' },
  //   { name: 'C/C++', icon: '⚙️', color: 'from-purple-400 to-purple-600' },
  //   { name: 'HTML5/CSS', icon: '🌐', color: 'from-orange-400 to-orange-600' },
  //   // { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600' },
  //   { name: 'MySQL', icon: '🗄️', color: 'from-blue-400 to-blue-600' },
  //   { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-400 to-blue-600' },
  //   { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
  //   // { name: 'Redis', icon: '🔴', color: 'from-red-400 to-red-600' },
  //   // { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-orange-600' },
  //   { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-500' },
  //   // { name: 'Kubernetes', icon: '⎈', color: 'from-blue-500 to-purple-500' },
  //   { name: 'Jenkins', icon: '🔧', color: 'from-orange-400 to-orange-600' },
  //   // { name: 'Git', icon: '📝', color: 'from-orange-400 to-red-500' },
  //   { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' },
  //   { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600' },
  //   // { name: 'Azure', icon: '☁️', color: 'from-blue-400 to-blue-600' },
  //   { name: 'GCP', icon: '☁️', color: 'from-blue-400 to-green-500' },
  //   { name: 'UI/UX Design', icon: '🎨', color: 'from-purple-400 to-purple-600' },
  //   // { name: 'Figma', icon: '🎨', color: 'from-purple-400 to-pink-500' },
  //   // { name: 'Adobe XD', icon: '🎨', color: 'from-pink-400 to-purple-500' },
  //   { name: 'Linux', icon: '🐧', color: 'from-gray-600 to-gray-800' },
  //   { name: 'Windows', icon: '🪟', color: 'from-blue-400 to-blue-600' },
  //   { name: 'macOS', icon: '🍎', color: 'from-gray-400 to-gray-600' }
  // ];
  const skills = [
    // Languages
    { name: 'Java', icon: '☕', color: 'from-orange-400 to-orange-600' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-600' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600' },
    { name: 'SQL', icon: '🧾', color: 'from-gray-400 to-gray-600' },
    { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-400 to-orange-600' },
    { name: 'C/C++', icon: '⚙️', color: 'from-purple-400 to-purple-600' },

    // Frameworks
    { name: 'Spring Boot', icon: '🍃', color: 'from-green-400 to-green-600' },
    { name: 'Ruby on Rails', icon: '💎', color: 'from-red-400 to-red-600' },
    { name: 'FastAPI', icon: '⚡', color: 'from-teal-400 to-teal-600' },
    { name: 'Flask', icon: '🍶', color: 'from-gray-500 to-gray-700' },
    { name: 'ReactJS', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
    { name: 'Angular', icon: '🅰️', color: 'from-green-400 to-green-600' },

    // Libraries & Data
    { name: 'pandas', icon: '🐼', color: 'from-gray-400 to-gray-600' },
    { name: 'NumPy', icon: '📊', color: 'from-yellow-300 to-yellow-500' },
    { name: 'Matplotlib', icon: '📈', color: 'from-purple-300 to-purple-500' },
    { name: 'OpenCV', icon: '👁️', color: 'from-blue-300 to-blue-500' },
    { name: 'Face Recognition', icon: '🧠', color: 'from-pink-300 to-pink-500' },

    // Databases
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-400 to-blue-600' },
    { name: 'MySQL', icon: '🗄️', color: 'from-blue-400 to-blue-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
    { name: 'SQLite', icon: '💾', color: 'from-gray-500 to-gray-700' },

    // Cloud and DevOps
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600' },
    { name: 'Git', icon: '📝', color: 'from-orange-400 to-red-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-500' },
    { name: 'Jenkins', icon: '🔧', color: 'from-orange-400 to-orange-600' },
    { name: 'CircleCI', icon: '⭕', color: 'from-green-400 to-green-600' },
    { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-orange-600' },

    // Developer Tools
    { name: 'JIRA', icon: '📋', color: 'from-indigo-400 to-indigo-600' },
    { name: 'Postman', icon: '📮', color: 'from-orange-400 to-orange-600' },
    { name: 'VS Code', icon: '🧪', color: 'from-blue-400 to-blue-600' },
    { name: 'Figma', icon: '🎨', color: 'from-purple-400 to-pink-500' },

    // OS/Environment
    { name: 'Linux', icon: '🐧', color: 'from-gray-600 to-gray-800' },
    { name: 'Windows', icon: '🪟', color: 'from-blue-400 to-blue-600' },
    { name: 'macOS', icon: '🍎', color: 'from-gray-400 to-gray-600' }
  ];



  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces with attention to detail.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using agile methodologies.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 3+ years of experience creating 
            digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                My journey in web development began during college, where I was fascinated by how code could turn ideas into real, interactive experiences. What started as a simple curiosity soon turned into a deep passion for building impactful software.
              </p>
              <p>
                Professionally, I've worked on diverse projects ranging from enterprise-level platforms to real-time AI applications. I have hands-on experience developing scalable full-stack solutions using Java Spring Boot, Ruby on Rails, React, Angular, and TypeScript. My focus has always been on delivering end-to-end functionality from designing clean, responsive frontends to building secure, efficient backends and database layers.
              </p>
              <p>
                I've also contributed to cloud-based deployments and CI/CD pipelines, collaborating with cross-functional teams to deliver production-ready software. These experiences have strengthened both my technical and problem-solving skills in fast-paced environments.
              </p>
              <p>
                Outside of work, you’ll find me experimenting with new technologies, contributing to open-source projects, and actively engaging with the developer community to share knowledge and learn from others.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Technical Skills</h3>
            
            {/* Skills Grid Layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className={`bg-gradient-to-br ${skill.color} p-1 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 h-full flex flex-col items-center justify-center text-center space-y-2">
                      <div className="text-2xl mb-1">{skill.icon}</div>
                      <span className="font-medium text-gray-900 dark:text-white text-xs leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Alternative: Vertical List Layout */}
            <div className="hidden">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative"
                  >
                    <div className={`bg-gradient-to-r ${skill.color} p-0.5 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                        <div className="text-2xl">{skill.icon}</div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={highlight.title} variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;