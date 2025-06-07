
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa: string;
  description: string[];
  achievements: string[];
  image: string;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      duration: '2018 - 2022',
      location: 'San Francisco, CA',
      gpa: '3.8/4.0',
      description: [
        'Focused on software engineering, algorithms, and data structures',
        'Completed capstone project on distributed systems',
        'Active member of Computer Science Society',
      ],
      achievements: [
        'Dean\'s List (4 semesters)',
        'Outstanding Student Award 2021',
        'Hackathon Winner - Best Technical Innovation',
      ],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      institution: 'Tech Academy',
      degree: 'Certificate',
      field: 'Full Stack Web Development',
      duration: '2020 - 2021',
      location: 'Online',
      gpa: '4.0/4.0',
      description: [
        'Intensive 6-month program covering modern web technologies',
        'Built multiple full-stack applications using MERN stack',
        'Collaborated on team projects using Agile methodologies',
      ],
      achievements: [
        'Top Graduate of the Cohort',
        'Project Excellence Award',
        'Peer Recognition Award',
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology and computer science.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.institution}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-gray-200">
                      {item.degree} in {item.field}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Duration and Location */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      GPA: {item.gpa}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Program Highlights
                    </h4>
                    <ul className="space-y-2">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="mr-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'AWS Certified Developer',
              'Google Cloud Professional',
              'Microsoft Azure Fundamentals'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {cert}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  2023
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
