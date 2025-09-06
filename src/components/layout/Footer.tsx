import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6">
            <span className="text-2xl font-bold">
              <span className="text-gradient">JO.</span>
              <span className="text-foreground">Portfolio</span>
            </span>
          </div>

          <div className="flex mb-5 items-center justify-center space-x-2 text-muted-foreground flex-wrap gap-2">
            <span className='whitespace-nowrap'>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </motion.div>
            <span>React, TypeScript, and Tailwind CSS</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-muted-foreground flex-wrap gap-2">
            <span className='whitespace-nowrap'>© 2025 JO.Portfolio. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>By Yohannis Hailye</span>
          </div>
          
        </motion.div>
      </div>
    </footer>
  );
};