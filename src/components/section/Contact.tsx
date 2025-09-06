import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Youtube, Instagram, MessageCircle } from 'lucide-react';
import { AnimatedButton } from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";


export const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "coder<jo>",
      "template_iy8btmr",
      e.target,
      "8ws9zrwgVR9zxfAKp"
    ).then(
      (result) => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      },
      (error) => alert("Error sending email: " + error.text)
    );

    e.target.reset();
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-3d p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send Message
                </h3>
                
                <form onSubmit={sendEmail} className="space-y-6" >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>
                  
                  <AnimatedButton
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    <input type="hidden" name="_next" value="thanks.html"></input>
                    <input type="hidden" name="_template" value="box"></input>
                    <input type="submit" value={isSubmitting ? 'Sending...' : 'Send Message'}></input>
                  </AnimatedButton>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with 
                  talented individuals. Whether you have a specific project in mind 
                  or just want to say hello, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4  rounded-xl cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jops7326@email.com" className="text-gray-400 hover:text-white" target="_blank">jops7326@gmail.com</a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4  rounded-xl cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#43cea2] to-[#185a9d] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium ">Phone</div>
                    <a href="tel:+251973260091" className="text-gray-400 hover:text-white">+251973260091</a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4  rounded-xl cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className=" font-medium">Location</div>
                    <a href="https://www.google.com/maps?q=9.005401,38.763611" target="_blank" className="text-gray-400 hover:text-white">Ethiopia, Addis Ababa</a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 ">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/jo9oct', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/yohannis-hailye-433065339/', label: 'LinkedIn' },
                    { icon: MessageCircle, href: 'https://t.me/coderJo21', label: 'Telegram' },
                    { icon: Instagram, href: 'https://instagram.com/jo9oct', label: 'Instagram' },
                    { icon: Youtube, href: 'https://www.youtube.com/@jo9oct21', label: 'Youtube' },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-[#9F44D3] to-[#6638F0] rounded-xl flex items-center justify-center text-white transition-transform duration-300"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>


              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="card-3d p-6 rounded-2xl bg-[#111] "
              >
                <div className="flex items-center space-x-3 ">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div>
                    <div className="font-medium text-foreground text-white">Available for work</div>
                    <div className="text-sm text-muted-foreground">
                      Open to new opportunities and projects
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};