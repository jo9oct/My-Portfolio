
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that follows best practices."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Dedicated to continuous learning and delivering exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a passionate UI/UX designer and full-stack developer with 2 years of experience creating intuitive mobile apps and web 
            solutions. I love transforming complex challenges into seamless, beautiful, and user-friendly digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started my journey in web development 2 years ago and have been constantly evolving ever since. 
              I've worked with startups and established companies, helping them bring their visions to life 
              through code and design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="glass-card p-8 transition-transform duration-300 hover:scale-[1.03]">
            <h4 className="text-xl font-semibold mb-6 text-center">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-semibold">2+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Projects Completed</span>
                <span className="font-semibold">20+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Happy Clients</span>
                <span className="font-semibold">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coffee Consumed</span>
                <span className="font-semibold">∞</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card transition-transform duration-300 hover:scale-[1.05] border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};