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
              Over the past 3+ years, I've developed a deep expertise in building and deploying a variety of software, and have shifted my focus to applying statistical techniques and optimizing ML models in a software context. Going forward, my interests lie in applying my expertise to build scalable and efficient economic and financial models.
            </p>

            <p className="text-muted-foreground">
              I would love to connect regarding any New-Grad opportunities starting Summer 2026, feel free to reach out at eghotra@wisc.edu!
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
                  <h4 className="font-semibold text-lg">Statistical Modeling</h4>
                  <p className="text-muted-foreground">
                    Applying advanced statistical techniques to analyze and model financial data for quantitative insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Econometrics</h4>
                  <p className="text-muted-foreground">
                    Leveraging econometric methods to interpret economic data and build predictive financial models.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Developing scalable and efficient software solutions for quantitative finance applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
