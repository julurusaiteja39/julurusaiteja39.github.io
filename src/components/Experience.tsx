
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo: string;
  website: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Saint Louis University',
      position: 'Graduate Student Assistant',
      duration: 'Jan 2024 - June 2024',
      location: 'Saint Louis, MO',
      description: [
        'Mentored 35+ students on software engineering fundamentals including OOP, Git, and full-stack development workflows.',
        'Collaborated with faculty to design and implement 3 major coding projects focused on Agile, REST APIs, and modular architecture.',
        'Conducted 50+ code reviews ensuring best practices, scalability, and clean coding standards using JavaScript, Flask, and PostgreSQL.',
        'Built Python-based automation scripts that streamlined grading, reducing manual evaluation time by 25% across 100+ submissions.'
      ],
      technologies: ['JavaScript', 'Python', 'SQL', 'Flask', 'GitHub', 'Agile', 'REST APIs', 'Code Reviews', 'Automation Scripting'],
      logo: 'https://www.slu.edu/marcom/tools-downloads/-img/logomark/slu-logomark-blue-rgb.png?w=100&h=100&fit=crop',
      website: 'https://www.slu.edu/'
    },
    {
      id: 2,
      company: 'Zaggle Prepaid Ocean Services',
      position: 'Full Stack Developer',
      duration: 'Jan 2021 - July 2023',
      location: 'Hyderabad, Telangana, India',
      description: [
        'Developed full-stack financial web applications using ReactJS, Ruby on Rails, and Spring Boot.',
        'Improved application modularity and performance, boosting platform efficiency by 20%.',
        'Optimized PostgreSQL queries, achieving 30% faster data retrieval in high-volume transaction modules.',
        'Designed and maintained CI/CD pipelines using Docker and Jenkins, reducing deployment time by 35%.',
        'Implemented unit, integration, and E2E test suites, improving software quality by 25%.',
        'Collaborated in Agile sprints to deliver secure, scalable features while reducing code redundancy by 20% through legacy refactoring.'
      ],
      technologies: ['Java Springboot', 'Ruby on Rails', 'ReactJS', 'Redux', 'PostgreSQL', 'Docker', 'Gitlab', 'Postman', 'Jenkins', 'Microservices'],
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CsEAv2f7ral3OD_ZlWJ7S1FRK_vBPpwu0Q&s?w=100&h=100&fit=crop',
      website: 'https://www.zaggle.in/'
    },
    // {
    //   id: 3,
    //   company: 'Digital Agency Pro',
    //   position: 'Frontend Developer',
    //   duration: 'Jun 2020 - Feb 2021',
    //   location: 'New York, NY',
    //   description: [
    //     'Created pixel-perfect websites from design mockups',
    //     'Implemented responsive designs for various client projects',
    //     'Collaborated with designers and backend developers',
    //     'Maintained and updated existing client websites'
    //   ],
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SASS'],
    //   logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    //   website: 'https://digitalagencypro.com'
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the amazing teams I've had the privilege to work with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Company Logo and Info */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-white dark:bg-gray-700 p-1">
                            <img
                              src={experience.logo}
                              alt={`${experience.company} logo`}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {experience.company}
                              </h3>
                              <a
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                              {experience.position}
                            </h4>
                            <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {experience.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {experience.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-4">
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
