
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  github: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Interactive Scene Understanding with SceneFun3D ',
      description: "3D scene understanding system for segmentation, language grounding, and motion execution.",
      fullDescription: "Built an interactive 3D scene understanding system using the SceneFun3D dataset with Python, PyTorch3D, and Open3D. The solution enables object segmentation, language grounding (e.g., 'open the microwave door'), and motion estimation with 87% grounding accuracy. Integrated a transformer-based affordance model to map over 15 natural language commands to scene elements. Optimized voxel-level scene processing for real-time inference, reducing compute time by 28%. Designed for intelligent robotics and spatial reasoning applications.",
      image: 'https://plus.unsplash.com/premium_photo-1742884841225-7e8961ec3611?w=600&h=400&fit=crop',
      technologies: ['PyTorch3D', 'Open3D', 'Python', 'Transformers', '3D Segmentation', 'Natural Language Processing', 'SceneFun3D'],
      github: 'https://github.com/julurusaiteja39/Scenefun3D',
      category: 'ai_ml'
    },
    {
      id: 2,
      title: 'Smart Attendance Tracker with Face Recognition',
      description: 'Face recognition-based attendance system with real-time logging and high accuracy.',
      fullDescription: 'Developed a facial recognition-based smart attendance system using FastAPI and MongoDB. The system processes over 100 concurrent requests for real-time attendance logging, achieving 95%+ identity verification accuracy. Features include secure face authentication, responsive React frontend, real-time analytics dashboard, and scalable architecture deployed on Heroku and Vercel. Designed to prevent proxy attendance and reduce manual effort by 80%.',
      image: 'https://plus.unsplash.com/premium_photo-1680807868966-90a84c68c944?w=600&h=400&fit=crop',
      technologies: ['Face Recognition', 'FastApi', 'ReactTS', 'MongoDB', 'Computer Vision', 'Vercel', 'Heroku'],
      github: 'https://github.com/sjuluru1/SAMS-facial-recognition',
      category: 'ai_ml'
    },
    {
      id: 3,
      title: 'Accessible Expense Tracker for the Visually Impaired',
      description: 'Voice-assisted expense tracking tailored for visually impaired users',
      fullDescription: 'An accessible expense management application designed specifically for visually impaired users. Built with React, Springboot, and speech recognition libraries, the app features voice input for adding transactions, audio feedback for confirmations, and high-contrast UI with screen reader support. Includes budget tracking, categorized spending insights, and offline capabilities to ensure inclusivity and independence in managing finances.',
      image: 'https://plus.unsplash.com/premium_photo-1681582863624-24337f436b78?w=600&h=400&fit=crop',
      technologies: ['Bard LLM', 'Springboot', 'React', 'PostgreSQL', 'Postman', 'Selenium', 'Docker', 'CircleCI'],
      github: 'https://github.com/PSDApollo/ExpenseManagementSystem',
      category: 'ai_ml'
    },
    {
      id: 4,
      title: 'Sign Language Recognition',
      description: 'AI-based sign language recognition system using OpenCV and Python',
      fullDescription: 'A real-time sign language recognition system developed using OpenCV and Python, achieving 90% accuracy in gesture classification. Designed to bridge communication gaps for hearing-impaired individuals, the system leverages image preprocessing, hand segmentation, and machine learning techniques for dynamic sign detection. Features include live webcam input, gesture prediction overlay, and a user-friendly interface for accessibility testing and deployment.',
      image: 'https://plus.unsplash.com/premium_photo-1715474788331-b9e5bf96c872?w=600&h=400&fit=crop',
      technologies: ["Python", "OpenCV", "NumPy", "scikit-learn", "MediaPipe", "Jupyter Notebook", "Computer Vision", "Machine Learning", "Real-time Processing"],
      github: 'https://www.ijsr.net/archive/v11i5/SR22503220851.pdf',
      category: 'publication'
    },
    {
      id: 5,
      title: 'Gift Card Platform',
      description: "Digital gift card platform built with React, Ruby on Rails, and PostgreSQL.",
      fullDescription: "A full-stack web platform enabling users to purchase, send, and redeem digital gift cards. The frontend was developed using ReactJS for an interactive user experience, while the backend used Ruby on Rails to manage business logic and APIs. PostgreSQL was used for secure and scalable data storage. Features include gift card templates, user authentication, balance tracking, and admin controls for managing card issuances.",
      image: 'https://plus.unsplash.com/premium_photo-1728897798011-3de899171c76?w=600&h=400&fit=crop',
      technologies: ['Ruby on Rails', 'ReactJS', 'PostgreSQL', 'HTML/CSS', 'Bootstrap', 'Jenkins'],
      github: 'https://github.com/julurusaiteja39/GiftCardApplication',
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'Farmers Loan Processing',
      description: "Loan processing system for farmers built using Java Spring Boot.",
      fullDescription: "A robust backend system developed with Java Spring Boot to streamline the loan application and approval process for farmers. The system includes modules for loan application submission, eligibility validation, document verification, and status tracking. It ensures secure data handling, automated workflow management, and easy integration with financial institutions for faster disbursement of agricultural loans.",
      image: 'https://images.unsplash.com/photo-1636973879067-9404573bdc78?w=600&h=400&fit=crop',
      technologies: ['Springboot', 'MySQL', 'HTML/CSS', 'Bootstrap','Javascript', 'Postman', 'Jenkins'],
      github: 'https://github.com/julurusaiteja39/FarmerLoanProcessing',
      category: 'fullstack'
    },
    {
      id: 7,
      title: 'Instagram Reels Clone',
      description: "A dynamic Instagram Reels clone built using JavaScript and modern web APIs.",
      fullDescription: "An interactive single-page application replicating core functionalities of Instagram Reels, developed using vanilla JavaScript, HTML5, and CSS3. Features include vertical video scrolling, autoplay, like/comment interactions, and smooth UI transitions. This project demonstrates efficient media rendering, responsive design principles, and real-time user interaction handling for short-form video content.",
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop',
      technologies: ['ReactJS', 'ReactJS', 'Static', 'HTML/CSS', 'Bootstrap'],
      github: 'https://github.com/julurusaiteja39/Instagram_Reels_Clone',
      category: 'fullstack'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai_ml', label: 'AI/LLM Projects'},
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'publication', label: 'Publications'}
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            A showcase of my recent work and passion projects, demonstrating various 
            technologies and problem-solving approaches.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="h-full overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-5 h-5 text-white" />
                  </Button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {/* <Button className="flex-1" asChild>
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button> */}
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
