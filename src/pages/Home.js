import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>ResistomePro</h1>
            <p className="lead">
              An interactive tool for exploring genetic markers related to disease resistance in rainbow trout
              and their correlation with environmental factors.
            </p>
            <p>
              This educational platform helps bridge the gap between complex genetic data and practical
              breeding decisions by visualizing relationships between genes, environment, and disease resistance.
            </p>
            <div className="mt-4">
              <Link to="/genetic-markers" className="btn btn-primary me-3">
                Explore Genetic Markers
              </Link>
              <Link to="/about" className="btn btn-outline-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img 
              src={`${process.env.PUBLIC_URL}/images/rainbow_trout.jpg`}
              alt="Rainbow Trout" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px", width: "auto", margin: "0 auto", display: "block", background: "#f8f9fa", padding: "20px" }}
            />
            <p className="text-center mt-2 text-muted small">
              <em>Rainbow Trout </em>
            </p>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-12">
            <h2 className="text-center mb-5">Features</h2>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h4">Genetic Marker Visualization</h3>
                <p className="card-text">
                  Explore visual representations of genetic markers associated with disease resistance
                  in rainbow trout. Filter by disease type, chromosome location, and effect size.
                </p>
                <Link to="/genetic-markers" className="btn btn-sm btn-outline-primary">
                  View Markers
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h4">Environmental Correlation</h3>
                <p className="card-text">
                  Understand how environmental factors interact with genetic markers to influence
                  disease susceptibility in rainbow trout populations.
                </p>
                <Link to="/environmental-correlation" className="btn btn-sm btn-outline-primary">
                  Explore Correlations
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h4">Breeding Decision Support</h3>
                <p className="card-text">
                  Use our simple breeding tool to evaluate potential breeding pairs based on
                  their genetic markers for disease resistance traits.
                </p>
                <Link to="/breeding-tool" className="btn btn-sm btn-outline-primary">
                  Try Breeding Tool
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5 pt-3">
          <div className="card bg-light">
            <div className="card-body p-4">
              <h3>Educational Purpose</h3>
              <p>
                This application was developed as an educational portfolio project to demonstrate the 
                integration of genomic data with environmental factors in aquaculture. It serves as 
                a resource for understanding the potential of genetic marker-assisted selection for 
                disease resistance in rainbow trout farming.
              </p>
              <p className="mb-0">
                All genetic marker data is derived from publicly available research publications and 
                databases. This tool is intended for educational purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 