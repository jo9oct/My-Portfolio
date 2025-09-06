import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink,Eye,Figma} from 'lucide-react';
import {FeatureWorkSection} from "@/components/subSection/featureWork"

const projects = [
  {
    id: 1,
    title: "Hotel Menu",
    description: "Full-stack Hotel Menu solution with React, Node.js, Tailwind CSS and Mongodb. Features include user Order , admin dashboard.",
    image: "/hotel-menu.png",
    technologies: ["React", "Node.js", "Express.js", "Mongodb", "Bootstrap", "Zustand"],
    liveUrl: "https://hotel-menu-32.onrender.com",
    githubUrl: "https://github.com/jo9oct/Hotel-Menu.git",
    category: "Full-Stack Web",
    type: "GitHub"
  },
  {
    id: 1,
    title: "Exam Platform",
    description: "Full-stack Exam solution with React, Node.js, Bootstrap and Mongodb. Features include user authentication , superAdmin dashboard and admin dashboard.",
    image: "/exam.png",
    technologies: ["React", "Node.js", "Express.js", "Mongodb", "Bootstrap", "Zustand"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack Web",
    type: "GitHub"
  },
  {
    id: 2,
    title: "Exam Web Design",
    description: "Designed entirely in Figma, utilizing Auto Layout, components, and interactive prototyping to simulate real-world user behavior.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlnbWF8ZW58MHx8MHx8fDA%3D",
    technologies: ["Figma"],
    liveUrl: "https://www.figma.com/proto/dq7fWLBP58xlv00jWWMuoW/FreashmanEXAM?node-id=1-111&t=CnsnS3bt0CboCWLA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=162%3A2065&show-proto-sidebar=1",
    githubUrl: "https://www.figma.com/design/dq7fWLBP58xlv00jWWMuoW/FreashmanEXAM?node-id=0-1&t=CnsnS3bt0CboCWLA-1",
    category: "UX/UI Design",
    type: "Figma"
  },
  {
    id: 3,
    title: "Accessory Hub",
    description: "Front-End Accessory Hub with HTML, CSS and Java-Script.",
    image: "/accessory.png",
    technologies: ["HTML", "CSS", "Java-Script"],
    liveUrl: "https://accessory-hub.vercel.app",
    githubUrl: "https://github.com/jo9oct/web-front-end.git",
    category: "Front-end Web",
    type: "GitHub"
  },
  {
    id: 3,
    title: "Library Management System",
    description: "Full-stack Library Management System solution with C#, RESTful API, ASP.NET and MySQL. Features include Borrow Book ,dashboard and admin dashboard.",
    image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    technologies: ["ASP.NET", "RESTful-API", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/jo9oct/back-end-cs.git",
    category: "Back-End Web",
    type: "GitHub"
  },
];

export const Projects = () => {
  return (
    <>
      <section id="projects" className="pt-[15rem] bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              My Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for creating innovative digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg  hover:shadow-md transition-shadow duration-300 p-6 cursor-pointer">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                style={{ animationDelay: `${index * 100}ms` }}
              >
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay with bottom-heavy opacity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 
                              flex flex-col justify-center items-center text-center text-white transform 
                              translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex space-x-2">
                  {project.liveUrl !== "#" &&  
                  <Button size="sm" variant="secondary" className="glow-effect"
                          onClick={() => {if(project.liveUrl !== "#")window.open(project.liveUrl, "_blank")}}>
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>}
                  {project.githubUrl !== "#" &&
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:opacity-50 transition-opacity duration-300"
                    onClick={() => {if(project.githubUrl !== "#")window.open(project.githubUrl, "_blank")}}
                  >
                  {project.type === "Figma" ? <Figma className="mr-2 h-4 w-4" /> : <Github className="mr-2 h-4 w-4" />}
                  <a href={project.githubUrl} target="__black">{project.type}</a>
                </Button>}
                
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/30 text-white text-xs rounded-full backdrop-blur-sm">
                {project.category}
              </span>
            </div>

          </div>


                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    {project.liveUrl !== "#" &&
                    <Button size="sm" onClick={() => {if(project.liveUrl !== "#"){window.open(project.liveUrl, "_blank")}}}
                            className="flex-1 rounded-2xl px-6 py-3 font-semibold text-black bg-indigo-600 hover:opacity-80 transition-opacity duration-300">
                        <Eye className="mr-2 h-4 w-4" />    
                        Live Demo
                    </Button>}
                    {project.githubUrl !== "#" &&
                    <Button size="sm" variant="outline" onClick={() => {if(project.githubUrl !== "#")window.open(project.githubUrl, "_blank")}}
                            className="flex-1 rounded-2xl px-6 py-3 font-semibold text-black bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-80 transition-opacity duration-300">
                       {project.type === "Figma" ? <Figma className="mr-2 h-4 w-4" /> : <Github className="mr-2 h-4 w-4" />}
                       {project.type}
                    </Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
      <FeatureWorkSection/>
    </>
  );
};
