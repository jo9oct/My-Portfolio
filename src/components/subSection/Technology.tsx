import React, { useEffect, useState } from "react";

type Skill = {
  src: string;
  alt: string;
};

const skills: Skill[] = [
  { src: "/atom.png" , alt: "React" },
  { src: "/bootstrap.png", alt: "Bootstrap" },
  { src: "/css.png", alt: "CSS" },
  { src: "/database-management.png", alt: "Mysql" },
  { src: "/figma.png", alt: "Figma" },
  { src: "/git.png", alt: "Git" },
  { src: "/java-script.png", alt: "Java-Script" },
  { src: "/Mongodb.png", alt: "Mongodb" },
  { src: "/Next.png", alt: "Next JS" },
  { src: "/nodeJs.png", alt: "Nodejs" },
  { src: "/typeScript.png", alt: "Type Script" },
  { src: "/social.png", alt: "Docker" },
  { src: "/aws.png", alt: "AWS" },
  { src: "/telwindCss.png", alt: "Tailwind CSS" },
  { src: "/html-5.png", alt: "HTML" },
];

export default function SkillsOvalCarousel() {
  const [angle, setAngle] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360); // 1° per tick
    }, 50);
    return () => clearInterval(id);
  }, []);

  const radiusX = 220; // horizontal oval radius
  const radiusY = 100; // vertical oval radius

  return (
    <section className="w-full">
      <h3 className="text-center text-2xl font-bold mb-8"><span className="text-gradient">Technologies</span> I Work With</h3>

      <div className="relative mx-auto" style={{ width: radiusX * 2, height: radiusY * 2 }}>
        {skills.map((skill, index) => {
          const step = (360 / skills.length) * index;
          const current = (angle + step) % 360;
          const rad = (current * Math.PI) / 180;

          // Position around oval
          const x = radiusX * Math.cos(rad) + radiusX;
          const y = radiusY * Math.sin(rad) + radiusY;

          // Depth effect (closer icons appear larger/brighter)
          const scale = 0.5 + 0.5 * (1 + Math.sin(rad));
          const opacity = 0.4 + 0.6 * (1 + Math.sin(rad)) / 2;

          return (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt}
              draggable={false}
              className="absolute transition-all duration-75"
              style={{
                left: x,
                top: y,
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity,
                width: 64,
                height: 64,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
