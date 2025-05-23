import { useState } from "react";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern @ Entegral - Enterprise Mobility",
      subtitle: "Madison, WI | May - Aug 2025",
      bullets: ["Bullet point with information to be added later"],
    },
    {
      id: 2,
      title: "Machine Learning Engineer Intern @ Equii Foods",
      subtitle: "Remote | Sep - Dec 2024",
      bullets: [
        "Fine tuning classification models to identify outlier proteins in prototype recipes of future food products using Python's Scikit-Learn, TensorFlow, and Keras",
      ],
    },
    {
      id: 3,
      title: "Data Engineer Intern @ Comcast EngOps",
      subtitle: "San Francisco Bay Area | Jun - Aug 2024",
      bullets: [
        "Utilized Microsoft & Oracle SQL servers in creating a seamless data warehouse integration framework, accessed through DBeaver for streamlined data management",
        "Engineered scalable ETL pipelines with Python, SQL, and Apache Airflow, contributing to 20% improvement in data processing and subsequent modeling and Tableau dashboard construction time",
        "Implemented Machine Learning powered predictive analytics solution for data quality and completeness checks, cutting necessary manual intervention by almost 50%",
      ],
    },
    {
      id: 4,
      title: "Data Science Intern @ Manus Bio",
      subtitle: "Augusta, GA | Jun - Jul 2022",
      bullets: [
        "Aided computational biology team in parsing and analyzing DNA fingerprinting data in Python and R, primarily for genetic trait improvement and novel genetic sequence detection to design commercial & industrial bio-alternatives",
      ],
    },
  ];

  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExp = experiences.find((exp) => exp.id === activeId);

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-center space-y-4">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`w-full max-w-xs px-4 py-2 text-center rounded transition-colors duration-300 ${
                    activeId === exp.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-secondary/50"
                  }`}
                >
                  {exp.title}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4 flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold">{activeExp.title}</h3>
            <p className="text-muted-foreground">{activeExp.subtitle}</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {activeExp.bullets.map((bullet, idx) => (
                <li key={idx} className="text-muted-foreground">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 