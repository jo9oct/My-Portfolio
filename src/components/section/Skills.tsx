import { useState } from "react";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Code, Database, Wrench, Smartphone, TrendingUp } from "lucide-react";
import SkillsOvalCarousel from "@/components/subSection/Technology"

// Skill categories
const skillCategories = {
  frontend: {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "HTML", level: 99 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 93 },
    ],
  },
  backend: {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Express.js", level: 99 },
    ],
  },
  tools: {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 93 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 80 },
      { name: "Figma", level: 98 },
    ],
  },
  mobile: {
    title: "Mobile App",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 50 },
      { name: "Expo", level: 85 },
    ],
  },
};

// Get gradient stops based on level
const getGradientStops = (level: number) => {
  if (level >= 80)
    return [
      { offset: "0%", color: "#FF4444" },
      { offset: "50%", color: "#FFA500" },
      { offset: "100%", color: "#22CA39" },
    ];
  if (level >= 50)
    return [
      { offset: "0%", color: "#FF4444" },
      { offset: "70%", color: "#FFA500" },
      { offset: "100%", color: "#90EE90" },
    ];
  return [
    { offset: "0%", color: "#FF4444" },
    { offset: "100%", color: "#FFA500" },
  ];
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillCategories>("frontend");
  const [showChart, setShowChart] = useState(false);

  const currentSkills = skillCategories[selectedCategory];

  // Add gradient ID to each skill
  const currentSkillsWithColors = currentSkills.skills.map((skill) => ({
    ...skill,
    gradientId: `gradient-${skill.name.replace(/\s+/g, "")}`,
  }));

  // Overall skill data
  const allSkillsData = Object.entries(skillCategories).map(([key, category]) => {
    const avgLevel = category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length;
    return {
      category: category.title,
      total: avgLevel,
      gradientId: `gradient-${category.title.replace(/\s+/g, "")}`,
    };
  });

  return (
    <>
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
            </p>
          </div>

          {/* Random Skill Images */}
            <div className="flex justify-center gap-4 mt-8 mb-12">
              <div className="flex flex-col items-center  animate-float">
                <p className="z-2 mb-2">Design</p> {/* optional mb-2 for spacing */}
                <img 
                  src="/design.png" 
                  alt="Design" 
                  className="w-16 h-16 rounded-full object-cover" 
                  style={{ animationDelay: '2s' }}
                />
              </div>
              <p className="text-3xl mt-6">+</p>
              <div className="flex flex-col items-center animate-float">
                <p className="z-2 mb-2">Implmentation</p>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center" 
                  alt="Coding" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Category Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === key;
              return (
                <Button
                  key={key}
                  variant={isSelected ? "default" : "outline"}
                  className={`flex h-14 flex-col items-center gap-2 p-2 transition-colors duration-300 ${
                    isSelected ? "bg-blue-500 text-white" : "hover:!bg-blue-100 hover:!text-blue-600"
                  }`}
                  onClick={() => setSelectedCategory(key as keyof typeof skillCategories)}
                >
                  <Icon className="h-8 w-8" />
                  <span className="font-semibold">{category.title}</span>
                </Button>
              );
            })}
          </div>
        
          {/* Skills List & Chart */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Skills List */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <currentSkills.icon className="h-6 w-6 text-primary" />
                  {currentSkills.title} Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentSkills.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(to right, ${getGradientStops(skill.level)
                              .map((stop) => stop.color)
                              .join(", ")})`,
                            animationDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skill Bar Chart */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    Skill Analytics
                  </span>
                  <Button variant="outline" size="sm" onClick={() => setShowChart(!showChart)} className="glow-effect">
                    {showChart ? "Hide Chart" : "Show Chart"}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showChart ? (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={currentSkillsWithColors}>
                        <defs>
                          {currentSkillsWithColors.map((skill) => (
                            <linearGradient key={skill.gradientId} id={skill.gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
                              {getGradientStops(skill.level).map((stop, idx) => (
                                <stop key={idx} offset={stop.offset} stopColor={stop.color} />
                              ))}
                            </linearGradient>
                          ))}
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} interval={0} />
                        <YAxis />
                        <Tooltip
                          contentStyle={{
                            background: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                          {currentSkillsWithColors.map((skill) => (
                            <Cell key={skill.name} fill={`url(#${skill.gradientId})`} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-80 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="rotate-3d w-24 h-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-lg"></div>
                      <p className="text-muted-foreground">Click "Show Chart" to view skill analytics</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Overall Pie Chart */}
          {showChart && (
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Overall Skill Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        {allSkillsData.map((entry) => (
                          <linearGradient key={entry.gradientId} id={entry.gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
                            {getGradientStops(entry.total).map((stop, idx) => (
                              <stop key={idx} offset={stop.offset} stopColor={stop.color} />
                            ))}
                          </linearGradient>
                        ))}
                      </defs>
                      <Pie
                        data={allSkillsData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="total"
                        labelLine={false}
                        label={({ category, total }) => `${category}: ${total.toFixed(1)}%`}
                      >
                        {allSkillsData.map((entry) => (
                          <Cell key={entry.category} fill={`url(#${entry.gradientId})`} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
      <SkillsOvalCarousel/>
    </>
  );
};
