
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, RefreshCw } from "lucide-react";

interface Person {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
  avatar: string;
}

const generateRandomPeople = (): Person[] => {
  const firstNames = ["Alex", "Sarah", "Michael", "Emma", "David", "Lisa", "John", "Maria", "Chris", "Anna"];
  const lastNames = ["Johnson", "Smith", "Brown", "Davis", "Wilson", "Miller", "Moore", "Taylor", "Anderson", "Thomas"];
  const roles = ["CEO", "CTO", "Product Manager", "Senior Developer", "UX Designer", "Tech Lead", "Founder", "VP Engineering"];
  const companies = ["TechCorp", "InnovateLab", "StartupXYZ", "DigitalFlow", "CodeWorks", "FutureTech", "DevStudio", "CloudNine"];
  
  const testimonials = [
    "Outstanding work! The attention to detail and technical expertise exceeded our expectations.",
    "Delivered a fantastic product on time and within budget. Highly recommend!",
    "Incredible problem-solving skills and creative solutions. A true professional.",
    "The user experience is phenomenal. Our customers love the new interface!",
    "Excellent communication throughout the project. Made the entire process smooth.",
    "Technical excellence combined with great design sense. Perfect collaboration!",
    "Transformed our vision into reality with amazing precision and creativity.",
    "Professional, reliable, and incredibly talented. Will definitely work together again!"
  ];

  return Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    role: roles[Math.floor(Math.random() * roles.length)],
    company: companies[Math.floor(Math.random() * companies.length)],
    rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
    testimonial: testimonials[Math.floor(Math.random() * testimonials.length)],
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=b6e3f4,c0aede,d1d4f9`
  }));
};

export const Testimonials = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateNewPeople = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPeople(generateRandomPeople());
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    setPeople(generateRandomPeople());
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-accent fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            What people are saying about working with me
          </p>
          <Button
            onClick={generateNewPeople}
            disabled={isLoading}
            className="transform transition-transform duration-300 hover:scale-110"
            variant="outline"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Generate New Reviews
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {people.map((person, index) => (
            <Card 
              key={person.id} 
              className="skill-card hover-lift h-full"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isLoading ? 'none' : 'fadeIn 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={person.avatar} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{person.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{person.role}</p>
                    <p className="text-xs text-primary truncate">{person.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(person.rating)}
                </div>

                <blockquote className="text-sm text-muted-foreground flex-1">
                  "{person.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Random Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Happy Clients", value: "15+" },
            { label: "Projects Completed", value: "20+" },
            { label: "Years Experience", value: "2+" },
            { label: "Technologies Used", value: "30+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};