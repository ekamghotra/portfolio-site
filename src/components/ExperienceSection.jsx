import { useState } from "react";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Student Research @ UW-Madison Economics",
      subtitle: "Madison, WI | Aug - Dec 2025",
      bullets: [],
    },
    {
      id: 2,
      title: "Software Engineer Intern @ Entegral - Enterprise Mobility",
      subtitle: "Madison, WI | May - Aug 2025",
      bullets: [
        "Migrated REST APIs from Jersey/Guice to Spring Boot 3, modernizing service layers to improve build times and streamline dependency injection",
        "Developed an Automated VIN Capture Tool with Tesseract-OCR and a TensorFlow workflow that flags low-confidence reads with a Bayesian threshold, aiding a 70% reduction in manual data entry",
        "Stored VIN-image hashes, capture time, and confidence scores in a MongoDB collection, providing adjusters ease of search for prior damage photos and reducing lookup time"
      ],
    },
    {
      id: 3,
      title: "Machine Learning Engineer Intern @ Equii Foods",
      subtitle: "Remote | Sep - Dec 2024",
      bullets: [
        "Part-Time Intern, fine-tuning Random Forest classifiers in scikit-learn to detect outlier proteins in prototype recipes, achieving 0.92 AUC and a false positives reduction",
      ],
    },
    {
      id: 4,
      title: "Data Engineer Intern @ Comcast EngOps",
      subtitle: "San Francisco Bay Area | Jun - Aug 2024",
      bullets: [
        "Analyzed field-active tech telemetry to pinpoint efficiency bottlenecks and reliability risks, collaborating with analysts and engineers to inform targeted process improvements",
        "Engineered ELT pipelines with Apache Airflow, extracting from Microsoft and Oracle SQL servers into Snowflake and automating Tableau extracts, contributing to a 20% improvement in data processing and reporting time",
        "Developed a data-quality framework using scikit-learn's Random Forest classifier to detect anomalies and missing values, integrated with Airflow to send automated alerts, contributing to on-team manual triage reduction of 30%",
      ],
    },
    {
      id: 5,
      title: "Informatics Intern @ Manus Bio",
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
          Academic & Professional <span className="text-primary">Experience</span>
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
            {activeExp.bullets.length > 0 && (
              <ul className="list-disc list-inside mt-4 space-y-2">
                {activeExp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 