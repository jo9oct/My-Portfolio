import { motion } from 'framer-motion';
import { ArrowDown,Download, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      
      <div className="relative z-10 container mx-auto px-6 lg:mt-0 mt-20">
        <div className="grid lg:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-6 sm:gap-4 items-center min-h-screen mx-6 ">
          {/* Left side - Text and social icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:mb-0 mb-[-20rem]"
          >
            <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold mb-6 text-hero-gradient leading-tight text-gradient bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              YOHANNIS HAILYE
            </h1>
            
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 
               text-center lg:text-left"
            >
              <span className="mr-2 ">I'AM</span> 
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", // first text
                  2000,                   
                  "Backend Developer",    
                  2000,
                  "FrontEnd Developer", 
                  2000,
                  "UI/UX Designer", 
                  2000,
                  "Mobile App Developer", 
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className="font-bold text-[#00abf0]" 
              />
            </motion.h2>

            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl lg:max-w-none text-center lg:text-left max-w-2xl mx-auto"
            >
              Transforming ideas into polished, user-friendly web experiences with modern design and development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16"
            >

              <div className="text1">
                <div className="inline-block">
                  <button
                    className="relative flex items-center z-10 text-lg font-medium px-8 py-2 rounded-xl text-white
                          bg-[#00abf0] cursor-pointer overflow-hidden 
                          before:content-[''] before:absolute before:top-0 before:left-0 
                          before:w-0 before:h-full before:bg-[#081b29] before:rounded-xl 
                          before:z-[-1] before:transition-all before:duration-500 
                          hover:text-[#00abf0] hover:before:w-full hover:before:border
                          hover:before:border-[#00abf0] hover:before:border-2"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <a href="#">View My Work</a>
                      <ArrowDown className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="text1">
                <div className="inline-block">
                  <button
                    className="relative z-10 flex items-center text-lg font-medium px-8 py-2 rounded-xl text-[#00abf0]
                                border-2 border-[#00abf0] bg-[#00abf0] cursor-pointer overflow-hidden
                                before:content-[''] before:absolute before:top-0 before:left-0
                                before:w-full before:h-full before:bg-[#081b29] before:rounded-xl
                                before:z-[-1] before:transition-transform before:duration-500 before:origin-right
                                hover:before:scale-x-0 hover:text-[#00abf0] hover:border-[#00abf0] hover:text-white"
                  >
                    <a  href="/Yohannis_Hailye_CV.pdf" 
                        download="Yohannis_Hailye_CV.pdf" >
                        Download CV</a>
                    <Download className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

            </motion.div>
            
          </motion.div>

          {/* Right side - Profile photo with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end lg:mt-0 mt-80"
          >
            <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 0.75 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              src="/I.png"
              alt="Jo Anderson"
              className="w-[22rem] h-[22rem] sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-cover rounded-full shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.4))',
                background: 'transparent'
              }}
            />

              {/* Main launching stars animation - increased from 12 to 24 */}
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0,
                    scale: 0 
                  }}
                  animate={{ 
                    x: Math.cos((i * 15) * Math.PI / 180) * (150 + Math.random() * 100),
                    y: Math.sin((i * 15) * Math.PI / 180) * (150 + Math.random() * 100),
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{ 
                    duration: 2 + Math.random(),
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2 + Math.random() * 2
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    boxShadow: '0 0 8px currentColor'
                  }}
                />
              ))}
              
              {/* Secondary star bursts - increased from 8 to 16 */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={`burst-${i}`}
                  className="absolute w-0.5 h-0.5 bg-secondary rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.5, 2, 0.5],
                    x: Math.cos((i * 22.5) * Math.PI / 180) * (80 + Math.random() * 60),
                    y: Math.sin((i * 22.5) * Math.PI / 180) * (80 + Math.random() * 60)
                  }}
                  transition={{ 
                    duration: 1.5 + Math.random(),
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3 + Math.random()
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 4px currentColor'
                  }}
                />
              ))}

              {/* Additional twinkling stars around the photo */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`twinkle-${i}`}
                  className="absolute w-0.5 h-0.5 bg-accent rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.3, 1.2, 0.3]
                  }}
                  transition={{ 
                    duration: 1 + Math.random(),
                    delay: i * 0.15,
                    repeat: Infinity,
                    repeatDelay: 1.5 + Math.random() * 2
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'blur(0.3px)'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className='flex flex-row justify-center aligns-center lg:mt-0 mt-40'>
          <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center lg:justify-start space-x-6 "
                style={{marginTop:"-130px"}}
              >
                <a href="https://github.com/jo9oct" target='__blank' className="glow-hover p-3 rounded-full border border-muted hover:scale-110 transition-all duration-500">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/yohannis-hailye-433065339/" target='__blank' className="glow-hover p-3 rounded-full border border-muted hover:scale-110 transition-all duration-500">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                   className="glow-hover p-3 rounded-full border border-muted hover:scale-110 transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}