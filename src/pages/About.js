import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h1>About ResistomePro</h1>
          <p className="lead">
            An educational tool for exploring genetic markers related to disease resistance in rainbow trout.
          </p>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Project Overview</h5>
              <p>
                ResistomePro is a web application designed to demonstrate the potential of integrating
                genetic marker data with environmental factors to inform breeding decisions in rainbow trout
                aquaculture. The application serves as an educational resource and portfolio project.
              </p>
              <p className="mb-0">
                This project demonstrates how genetic information can be made accessible and useful to
                non-specialists through intuitive visualization and analysis tools.
              </p>
            </div>
          </div>

          <div className="card mb-4 bg-primary-subtle">
            <div className="card-body">
              <h5 className="card-title">Creator</h5>
              <p className="mb-0">
                <strong>Developed by:</strong> Saheed Kolawole
              </p>
              <p className="mb-0">
                This portfolio project showcases integration of genetic data with environmental factors
                in aquaculture through interactive visualization and analysis.
              </p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="mb-0">Project Goals</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Visualize genetic markers related to disease resistance</li>
                    <li className="list-group-item">Demonstrate relationships between environmental factors and disease susceptibility</li>
                    <li className="list-group-item">Provide a simple tool for evaluating breeding decisions</li>
                    <li className="list-group-item">Showcase integration of biological data with interactive visualization</li>
                    <li className="list-group-item">Create an educational resource for understanding genetic selection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="mb-0">Technologies Used</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">React.js for user interface development</li>
                    <li className="list-group-item">React Router for application navigation</li>
                    <li className="list-group-item">Bootstrap for responsive design</li>
                    <li className="list-group-item">JSON data format for genetic and environmental data</li>
                    <li className="list-group-item">GitHub Pages/Netlify for free hosting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Data Sources</h5>
            </div>
            <div className="card-body">
              <p>
                The genetic marker data used in this application is derived from publicly available
                research publications and databases, including:
              </p>
              <ul>
                <li><strong>Rainbow Trout Genome Project</strong> - NCBI genomic resources</li>
                <li><strong>Published Research Papers</strong> - Including works by Vallejo et al. (2019), Palti et al. (2015), and Leeds et al. (2010)</li>
                <li><strong>Animal QTLdb</strong> - Repository of quantitative trait loci for aquaculture species</li>
                <li><strong>FAO Guidelines</strong> - Environmental parameters for rainbow trout cultivation</li>
              </ul>
              <p className="mb-0">
                <strong>Note:</strong> This application uses simplified data for educational purposes.
                For actual breeding decisions, more comprehensive genetic analysis would be required.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Educational Value</h5>
            </div>
            <div className="card-body">
              <p>
                ResistomePro demonstrates several important concepts in modern aquaculture:
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <h6>Marker-Assisted Selection</h6>
                    <p>
                      Using genetic markers to identify fish with desirable traits for breeding,
                      rather than relying solely on observable characteristics.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <h6>Gene-Environment Interactions</h6>
                    <p>
                      Understanding how environmental conditions affect the expression of genetic traits
                      and disease susceptibility.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <h6>Disease Resistance Genetics</h6>
                    <p>
                      Exploring the genetic basis for disease resistance and how it can be improved
                      through selective breeding.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <h6>Data Visualization</h6>
                    <p>
                      Transforming complex genetic information into intuitive visualizations that
                      can inform practical decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light p-4 rounded">
            <h4>Open Source Project</h4>
            <p>
              This project is open source and available on GitHub. Feel free to explore the code,
              suggest improvements, or use it as a starting point for your own projects.
            </p>
            <a 
              href="https://github.com/temabef/ResistomePro" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 