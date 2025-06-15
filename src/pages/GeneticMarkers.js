import React, { useState, useEffect } from 'react';
import geneticMarkersData from '../data/genetic-markers.json';

const GeneticMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [diseaseFilter, setDiseaseFilter] = useState('');
  const [chromosomeFilter, setChromosomeFilter] = useState('');
  
  useEffect(() => {
    // Load markers from JSON file
    setMarkers(geneticMarkersData.markers);
    setFilteredMarkers(geneticMarkersData.markers);
  }, []);
  
  useEffect(() => {
    // Apply filters when they change
    let result = markers;
    
    if (diseaseFilter) {
      result = result.filter(marker => 
        marker.traitAssociation.toLowerCase().includes(diseaseFilter.toLowerCase())
      );
    }
    
    if (chromosomeFilter) {
      result = result.filter(marker => 
        marker.chromosome === chromosomeFilter
      );
    }
    
    setFilteredMarkers(result);
  }, [markers, diseaseFilter, chromosomeFilter]);
  
  // Get unique chromosomes for filter dropdown
  const uniqueChromosomes = [...new Set(markers.map(marker => marker.chromosome))];
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h1>Genetic Markers</h1>
          <p className="lead">
            Explore genetic markers associated with disease resistance in rainbow trout.
          </p>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">About Genetic Markers</h5>
              <p>
                Genetic markers are specific DNA sequences with known locations on chromosomes
                that can be associated with particular traits, such as disease resistance. 
                In rainbow trout farming, identifying and selecting for beneficial markers 
                can help improve overall health and productivity of fish populations.
              </p>
              <p className="mb-0">
                The markers shown below are derived from published research studies on 
                rainbow trout genetics and disease resistance traits.
              </p>
            </div>
          </div>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">Disease</span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Filter by disease..." 
                  value={diseaseFilter}
                  onChange={(e) => setDiseaseFilter(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">Chromosome</span>
                <select 
                  className="form-select"
                  value={chromosomeFilter}
                  onChange={(e) => setChromosomeFilter(e.target.value)}
                >
                  <option value="">All Chromosomes</option>
                  {uniqueChromosomes.map(chromosome => (
                    <option key={chromosome} value={chromosome}>
                      {chromosome}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Chromosome</th>
                  <th>Position</th>
                  <th>Trait Association</th>
                  <th>Effect Size</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {filteredMarkers.length > 0 ? (
                  filteredMarkers.map(marker => (
                    <tr key={marker.id}>
                      <td>{marker.name}</td>
                      <td>{marker.chromosome}</td>
                      <td>{marker.position.toLocaleString()}</td>
                      <td>{marker.traitAssociation}</td>
                      <td>{marker.effectSize}</td>
                      <td>{marker.source}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">No markers found matching your filters</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-4 bg-light rounded">
            <h4>Understanding Effect Size</h4>
            <p>
              Effect size indicates the estimated contribution of a genetic marker to the trait of interest.
              Higher values suggest stronger associations between the marker and the disease resistance trait.
              Values typically range from 0 (no effect) to 1 (maximum effect).
            </p>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}}>
                0.25 (Small)
              </div>
              <div className="progress-bar bg-info" role="progressbar" style={{width: "15%"}}>
                0.4 (Moderate)
              </div>
              <div className="progress-bar bg-primary" role="progressbar" style={{width: "20%"}}>
                0.6 (Large)
              </div>
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "40%"}}>
                1.0 (Very Large)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneticMarkers; 