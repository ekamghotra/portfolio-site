import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Receipt Predictions",
    description: "Java application demonstrating SHA-1 password hashing and brute-force cracking, with efficient storage and lookup via binary search trees.",
    tags: ["Machine Learning", "PyTorch", "Flask", "Docker"],
    githubUrl: "https://github.com/ekamghotra/receiptpredictions",
  },
  {
    id: 2,
    title: "Password Cracker",
    description: "Flask-powered web app that forecasts monthly receipt counts for the year 2022 using an LSTM neural network, containerized with Docker and featuring interactive table and chart visualizations.",
    tags: ["Java", "Data Structures", "Hashing"],
    githubUrl: "https://github.com/ekamghotra/PasswordCracker",
  },
  {
    id: 3,
    title: "Virtual Stock Assistant Chatbot",
    description: "Stock market assistant powered by ChatGPT with real-time data via Yahoo Finance API, supporting SMA, EMA, RSI, and MACD.",
    tags: ["Python", "ChatGPT", "Yahoo Finance API"],
    githubUrl: "https://github.com/ekamghotra/VirtualStockAsisstantChatbot",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg shadow-xs p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-center gap-2">
                <strong>GitHub Repo Here</strong>
                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center justify-center gap-2 mx-auto"
            target="_blank"
            href="https://github.com/ekamghotra"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
