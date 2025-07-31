import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "C/C++", level: 80, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "R", level: 75, category: "languages" },

  // Frameworks/Libraries
  { name: "Pandas", level: 90, category: "frameworks/libraries" },
  { name: "NumPy", level: 90, category: "frameworks/libraries" },
  { name: "SciPy", level: 85, category: "frameworks/libraries" },
  { name: "Statsmodels", level: 80, category: "frameworks/libraries" },
  { name: "PyPortfolioOpt", level: 75, category: "frameworks/libraries" },
  { name: "TensorFlow", level: 80, category: "frameworks/libraries" },
  { name: "PyTorch", level: 75, category: "frameworks/libraries" },
  { name: "TA-Lib", level: 70, category: "frameworks/libraries" },
  { name: "Scikit-Learn", level: 85, category: "frameworks/libraries" },
  { name: "Keras", level: 75, category: "frameworks/libraries" },

  // Tools
  { name: "MATLAB", level: 80, category: "tools" },
  { name: "VSCode", level: 95, category: "tools" },
  { name: "IntelliJ", level: 85, category: "tools" },
  { name: "RStudio", level: 80, category: "tools" },
  { name: "Airflow", level: 75, category: "tools" },
  { name: "Snowflake", level: 70, category: "tools" },
  { name: "Azure", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "BigQuery", level: 65, category: "tools" },
  { name: "MongoDB", level: 70, category: "tools" },
  { name: "Tableau", level: 80, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
];

const categories = ["all", "languages", "frameworks/libraries", "tools"];

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
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
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
