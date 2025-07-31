
const projects = [
  {
    id: 1,
    title: "Time Series ETF Forecaster",
    description: "Advanced forecasting system implementing rolling ARIMA and GARCH models to predict ETF returns, enhanced with Vector Autoregression using macro signals, and featuring a comprehensive backtesting pipeline with automated performance dashboards.",
    tags: ["Python", "Pandas", "Statsmodels", "scikit-learn", "Matplotlib"],
  },
  {
    id: 2,
    title: "Portfolio Analytics Toolkit",
    description: "Python toolkit leveraging Pandas and NumPy for comprehensive portfolio analysis including time series analysis, Monte Carlo simulations for VaR estimation, and Markowitz optimization to identify efficient frontier optimal asset mix.",
    tags: ["Python", "Pandas", "NumPy", "SciPy"],
  },
  {
    id: 3,
    title: "Social Media Sentiment Trader",
    description: "Automated trading system that analyzes daily tweets using FinBERT sentiment analysis, translates high-confidence signals into paper trading orders, and tracks performance through SQLite logging with Jupyter dashboard visualization.",
    tags: ["Python", "Pandas", "NumPy", "finBERT", "SQLite"],
  },
  {
    id: 4,
    title: "Receipt Predictions",
    description: "Flask-powered web app that forecasts monthly receipt counts for the year 2022 using an LSTM neural network, containerized with Docker and featuring interactive table and chart visualizations.",
    tags: ["Machine Learning", "PyTorch", "Flask", "Docker"],
  },
  {
    id: 5,
    title: "Password Cracker",
    description: "Java application demonstrating SHA-1 password hashing and brute-force cracking, with efficient storage and lookup via binary search trees.",
    tags: ["Java", "Data Structures", "Hashing"],
  },
  {
    id: 6,
    title: "Virtual Stock Assistant Chatbot",
    description: "Stock market assistant powered by ChatGPT with real-time data via Yahoo Finance API, supporting SMA, EMA, RSI, and MACD.",
    tags: ["Python", "ChatGPT", "Yahoo Finance API"],
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

            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
