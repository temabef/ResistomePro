import React, { useState, useEffect } from 'react';
import environmentalData from '../data/environmental-parameters.json';

const EnvironmentalCorrelation = () => {
  const [parameters, setParameters] = useState([]);
  const [selectedParameter, setSelectedParameter] = useState(null);
  
  useEffect(() => {
    // Load environmental parameters from JSON file
    setParameters(environmentalData.parameters);
    // Select first parameter by default
    if (environmentalData.parameters.length > 0) {
      setSelectedParameter(environmentalData.parameters[0]);
    }
  }, []);
  
  const handleParameterChange = (parameterId) => {
    const selected = parameters.find(param => param.id === parameterId);
    setSelectedParameter(selected);
  };
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h1>Environmental Correlation</h1>
          <p className="lead">
            Explore how environmental factors correlate with disease susceptibility in rainbow trout.
          </p>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">About Environmental Factors</h5>
              <p>
                Environmental conditions play a crucial role in fish health and can significantly
                influence the expression of genetic traits. Even fish with genetic resistance to
                certain diseases may become susceptible when environmental conditions are poor.
              </p>
              <p className="mb-0">
                Understanding the relationship between environmental factors and disease can help
                farmers optimize conditions to minimize disease outbreaks and maximize the benefit
                of genetic resistance traits.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Environmental Parameters</h5>
                </div>
                <div className="list-group list-group-flush">
                  {parameters.map(param => (
                    <button 
                      key={param.id} 
                      className={`list-group-item list-group-item-action ${selectedParameter && selectedParameter.id === param.id ? 'active' : ''}`}
                      onClick={() => handleParameterChange(param.id)}
                    >
                      {param.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-md-8">
              {selectedParameter ? (
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">{selectedParameter.name} ({selectedParameter.unit})</h5>
                  </div>
                  <div className="card-body">
                    <h6>Optimal Range</h6>
                    <div className="progress mb-3">
                      <div 
                        className="progress-bar bg-success" 
                        role="progressbar" 
                        style={{width: '100%'}}
                      >
                        {selectedParameter.optimalRange.min} - {selectedParameter.optimalRange.max} {selectedParameter.unit}
                      </div>
                    </div>
                    
                    <h6>Critical Thresholds</h6>
                    <div className="row mb-4">
                      <div className="col-6">
                        <div className="alert alert-danger mb-0">
                          Minimum: {selectedParameter.criticalThresholds.min} {selectedParameter.unit}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="alert alert-danger mb-0">
                          Maximum: {selectedParameter.criticalThresholds.max} {selectedParameter.unit}
                        </div>
                      </div>
                    </div>
                    
                    <h6>Disease Correlations</h6>
                    <div className="list-group">
                      {selectedParameter.diseaseCorrelations.map((correlation, index) => (
                        <div className="list-group-item" key={index}>
                          <h6 className="mb-1">{correlation.disease}</h6>
                          <p className="mb-1"><strong>Risk: </strong>{correlation.riskFactor}</p>
                          <small>{correlation.description}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="alert alert-info">
                  Select an environmental parameter to view details
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-light rounded">
            <h4>Environmental and Genetic Interactions</h4>
            <p>
              The expression of genetic traits, including disease resistance, can be strongly
              influenced by environmental conditions. This phenomenon is known as gene-environment
              interaction (GxE).
            </p>
            <p className="mb-0">
              For optimal fish health and performance, both genetic selection for disease resistance
              and environmental parameter management should be considered together. Even the best
              genetic stock can suffer from disease when environmental conditions are suboptimal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalCorrelation; 