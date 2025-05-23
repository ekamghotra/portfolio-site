import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "Python", level: 80, category: "languages" },
  { name: "R", level: 70, category: "languages" },
  { name: "SQL", level: 80, category: "languages" },
  { name: "C", level: 70, category: "languages" },
  { name: "C++", level: 65, category: "languages" },

  // Libraries/Frameworks
  { name: "Spring Boot", level: 75, category: "libraries/frameworks" },
  { name: "AngularJS", level: 70, category: "libraries/frameworks" },
  { name: "React", level: 75, category: "libraries/frameworks" },
  { name: "TensorFlow", level: 70, category: "libraries/frameworks" },
  { name: "Keras", level: 65, category: "libraries/frameworks" },
  { name: "Scikit-Learn", level: 70, category: "libraries/frameworks" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "GitLab", level: 85, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "MongoDB", level: 60, category: "tools" },
  { name: "Gradle", level: 70, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "DBeaver", level: 60, category: "tools" },
  { name: "Snowflake", level: 60, category: "tools" },
  { name: "Apache Airflow", level: 55, category: "tools" },
  { name: "Tableau", level: 65, category: "tools" },
  { name: "MATLAB", level: 70, category: "tools" },
  { name: "IntelliJ", level: 80, category: "tools" },
  { name: "VSCode", level: 95, category: "tools" },
  { name: "Microsoft Azure", level: 70, category: "tools" },
];

const categories = ["all", "languages", "libraries/frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
