import { BarChart2, Calculator, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Rising Senior at the University of Wisconsin - Madison
            </h3>

            <p className="text-muted-foreground">
              I am a rising Senior at the University of Wisconsin - Madison, double majoring in Computer Sciences and Data Science, with a Minor in Economic Analytics.
            </p>

            <p className="text-muted-foreground">
              Over the past three years I've deepened my understanding of writing reliable software and training predictive models that stand up in production. I'm now channeling that skillset into a particular interest in model development. I'm applying to M.S. programs beginning Fall 2026 and am actively looking for roles starting Summer 2026.
            </p>

            <p className="text-muted-foreground">
              Feel free to send a connection or reach out at eghotra@wisc.edu!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-2xl">Statistical Modeling</h4>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-2xl">Econometrics</h4>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-2xl">Software Development</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
