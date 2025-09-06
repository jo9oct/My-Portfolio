
import { motion } from 'framer-motion';
import {  Code, Smartphone, Globe, Zap } from 'lucide-react';
import { AnimatedButton } from '../ui/animated-button';

const project = [
  {
    title: 'Hotel-Room Booking System',
    description: 'Full stack Hotel-Room solution with React, Node.js, "Express.js",Tailwind CSS and Mongodb. Features include user & Admin authentication , Booking System , User dashboard , Admin dashboard and Hotel-Manager dashboard.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', "Express.js", 'mongodb', 'Zustand', "Tailwind CSS" , 'AWS'],
    category: 'Web App',
    icon: Globe,
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    title: 'MovieHub',
    description: 'Full stack MovieHub solution with React Native , TypeScript , Expo , Bootstrap  . Features include user & Admin authentication , Booking System , User dashboard , Admin dashboard and Hotel-Manager dashboard.',
    image: '/placeholder.svg',
    technologies: ['React Native', 'TypeScript', 'Expo', "Bootstrap" ,  'Zustand'],
    category: 'Mobile App With UX/UI Design',
    icon: Smartphone,
    gradient: 'from-green-600 to-teal-600',
  },
  {
    title: 'Car Rental System',
    description: 'Full stack Car-Rental solution with React, Node.js, "Express.js",Tailwind CSS and Mongodb. Features include user & Admin authentication , Booking System , User dashboard , Admin dashboard.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', "Express.js", 'mongodb', 'Zustand', "Tailwind CSS" , 'Docker'],
    category: 'Web App',
    icon: Code,
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Accessory Shop',
    description: 'Full stack Accessory-Shop solution with React, Node.js, "Express.js",Tailwind CSS and Mongodb. Features include user & Admin authentication , Booking System , User dashboard , Admin dashboard.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', "Express.js", 'mongodb', 'Zustand', "Tailwind CSS"],
    category: 'Web App',
    icon: Zap,
    gradient: 'from-orange-600 to-red-600',
  },
];

export const FeatureWorkSection = () => {
  return (
    <section id="work" className="py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent project spanning web applications, mobile apps, 
            3D experiences, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-3d rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                  {/* Project Image/Preview */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Icon className="w-16 h-16 text-white" />
                      <motion.div
                        className="absolute -inset-4 bg-white/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <span className="px-3 py-1 bg-black/30 text-white text-xs rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full backdrop-blur-sm">
                        featured
                      </span>
                    </div>

                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Interested in collaborating?
          </h3>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new project and opportunities.
          </p>
          <AnimatedButton 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className='border-[1px] border-transparent rounded-md bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-border text-white'
          >
            Let's Work Together
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};