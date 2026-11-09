import React, { useEffect, useRef } from 'react';

const projectsData = [
  {
    title: 'WasteWhizIBM',
    description:
      'Data-science project using machine learning and data analysis to improve marketing efficiency by optimising customer targeting. Team project; the repository is owned by the SmartInternz organisation.',
    githubLink: 'https://github.com/smartinternz02/SBSPS-Challenge-10787-wastewhiz-Data-Science-enabled-Marketing-Efficiency-Enhancement',
  },
  {
    title: 'WingDash',
    description:
      'A Flappy-Bird-style arcade game in Python and Pygame, split into game, rules and asset modules with unit tests for the rules.',
    githubLink: 'https://github.com/Praneetha1844/WingDash',
  },
  {
    title: 'InkSense',
    description:
      'A convolutional neural network notebook that classifies handwritten letters, with the dataset path, results and known issues documented.',
    githubLink: 'https://github.com/Praneetha1844/InkSense',
  },
  {
    title: 'ShuntCalc',
    description:
      'A Java calculator that evaluates expressions with the shunting-yard algorithm, with a small GUI and JUnit tests.',
    githubLink: 'https://github.com/Praneetha1844/ShuntCalc',
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Apply animation class
        } else {
          entry.target.classList.remove('animate'); // Remove animation class
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    // Observe each card in the projects list
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card); // Cleanup observer on component unmount
        }
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black py-10 px-4">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">My Projects</h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-20">
        {projectsData.map((project, index) => (
          <a
            key={project.title}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white p-6 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] rounded-xl shadow-xl hover:shadow-2xl project-card"
            ref={(el) => cardsRef.current[index] = el} // Store reference to each card
          >
            <div className="flex flex-col justify-between min-h-[250px]">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 description">
                {project.description}
              </p>
              <div className="text-right">
                <span className="text-indigo-700 text-sm font-medium group-hover:text-blue-800 transition-colors">
                  View on GitHub →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
