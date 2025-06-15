import React, { useState, useEffect } from 'react';
import fishData from '../data/sample-fish.json';

const BreedingTool = () => {
  const [fish, setFish] = useState([]);
  const [females, setFemales] = useState([]);
  const [males, setMales] = useState([]);
  const [selectedFemale, setSelectedFemale] = useState('');
  const [selectedMale, setSelectedMale] = useState('');
  const [breedingResults, setBreedingResults] = useState(null);
  const [priorityDisease, setPriorityDisease] = useState('bacterialColdWater');

  useEffect(() => {
    // Load fish from JSON file
    setFish(fishData.fish);
    
    // Separate by sex
    const femalesFish = fishData.fish.filter(f => f.sex === 'Female');
    const malesFish = fishData.fish.filter(f => f.sex === 'Male');
    
    setFemales(femalesFish);
    setMales(malesFish);
  }, []);
  
  const handleFemaleChange = (e) => {
    setSelectedFemale(e.target.value);
    setBreedingResults(null); // Reset results when selection changes
  };
  
  const handleMaleChange = (e) => {
    setSelectedMale(e.target.value);
    setBreedingResults(null); // Reset results when selection changes
  };

  const handlePriorityDiseaseChange = (e) => {
    setPriorityDisease(e.target.value);
    if (selectedFemale && selectedMale) {
      calculateBreedingResults(selectedFemale, selectedMale, e.target.value);
    }
  };
  
  const handleBreedingSimulation = () => {
    calculateBreedingResults(selectedFemale, selectedMale, priorityDisease);
  };
  
  const calculateBreedingResults = (femaleId, maleId, priority) => {
    const female = females.find(f => f.id === femaleId);
    const male = males.find(m => m.id === maleId);
    
    if (!female || !male) return;
    
    // Simple breeding simulation based on average resistance scores
    const offspringScores = {
      bacterialColdWater: (female.resistanceScores.bacterialColdWater + male.resistanceScores.bacterialColdWater) / 2,
      viralHemorrhagic: (female.resistanceScores.viralHemorrhagic + male.resistanceScores.viralHemorrhagic) / 2,
      ipnVirus: (female.resistanceScores.ipnVirus + male.resistanceScores.ipnVirus) / 2,
      entericRedmouth: (female.resistanceScores.entericRedmouth + male.resistanceScores.entericRedmouth) / 2,
      columnaris: (female.resistanceScores.columnaris + male.resistanceScores.columnaris) / 2
    };
    
    // Calculate overall score with emphasis on priority disease
    const weights = {
      bacterialColdWater: priority === 'bacterialColdWater' ? 2 : 1,
      viralHemorrhagic: priority === 'viralHemorrhagic' ? 2 : 1,
      ipnVirus: priority === 'ipnVirus' ? 2 : 1,
      entericRedmouth: priority === 'entericRedmouth' ? 2 : 1,
      columnaris: priority === 'columnaris' ? 2 : 1
    };
    
    const weightedSum = 
      offspringScores.bacterialColdWater * weights.bacterialColdWater +
      offspringScores.viralHemorrhagic * weights.viralHemorrhagic +
      offspringScores.ipnVirus * weights.ipnVirus +
      offspringScores.entericRedmouth * weights.entericRedmouth +
      offspringScores.columnaris * weights.columnaris;
    
    const totalWeight = weights.bacterialColdWater + weights.viralHemorrhagic + weights.ipnVirus + weights.entericRedmouth + weights.columnaris;
    
    const overallScore = weightedSum / totalWeight;
    
    // Calculate genotype compatibility (simple example)
    let compatibleMarkers = 0;
    for (let i = 0; i < female.genotypes.length; i++) {
      const femaleGenotype = female.genotypes[i];
      const maleGenotype = male.genotypes.find(g => g.markerId === femaleGenotype.markerId);
      
      if (femaleGenotype.genotype !== maleGenotype.genotype) {
        compatibleMarkers++;
      }
    }
    
    const compatibilityScore = compatibleMarkers / female.genotypes.length;
    
    setBreedingResults({
      female,
      male,
      offspringScores,
      overallScore,
      compatibilityScore,
      recommendation: getRecommendation(overallScore, compatibilityScore),
    });
  };
  
  const getRecommendation = (overallScore, compatibilityScore) => {
    if (overallScore >= 0.75 && compatibilityScore >= 0.6) {
      return {
        text: "Highly Recommended Pairing",
        class: "text-success"
      };
    } else if (overallScore >= 0.6 && compatibilityScore >= 0.4) {
      return {
        text: "Recommended Pairing",
        class: "text-primary"
      };
    } else if (overallScore >= 0.5 && compatibilityScore >= 0.2) {
      return {
        text: "Acceptable Pairing",
        class: "text-warning"
      };
    } else {
      return {
        text: "Not Recommended",
        class: "text-danger"
      };
    }
  };
  
  // Helper function to format scores as percentages
  const formatPercent = (value) => {
    return `${(value * 100).toFixed(0)}%`;
  };
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <h1>Breeding Decision Support Tool</h1>
          <p className="lead">
            Evaluate potential breeding pairs based on their genetic resistance traits.
          </p>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">About This Tool</h5>
              <p>
                This simple tool demonstrates how genetic information can be used to make informed
                breeding decisions. By selecting potential breeding pairs, you can see predicted
                disease resistance traits in their offspring.
              </p>
              <p className="mb-0">
                <strong>Note:</strong> This is a simplified demonstration using sample data. In a 
                real-world scenario, more complex genetic models would be used for prediction.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">Select Breeding Pair</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="femaleSelect" className="form-label">Female</label>
                    <select 
                      id="femaleSelect" 
                      className="form-select"
                      value={selectedFemale}
                      onChange={handleFemaleChange}
                    >
                      <option value="">Select Female...</option>
                      {females.map(female => (
                        <option key={female.id} value={female.id}>
                          {female.name} (Age: {female.age} months, Origin: {female.origin})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="maleSelect" className="form-label">Male</label>
                    <select 
                      id="maleSelect" 
                      className="form-select"
                      value={selectedMale}
                      onChange={handleMaleChange}
                    >
                      <option value="">Select Male...</option>
                      {males.map(male => (
                        <option key={male.id} value={male.id}>
                          {male.name} (Age: {male.age} months, Origin: {male.origin})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="diseaseSelect" className="form-label">Priority Disease Resistance</label>
                    <select 
                      id="diseaseSelect" 
                      className="form-select"
                      value={priorityDisease}
                      onChange={handlePriorityDiseaseChange}
                    >
                      <option value="bacterialColdWater">Bacterial Cold Water Disease</option>
                      <option value="viralHemorrhagic">Viral Hemorrhagic Septicemia</option>
                      <option value="ipnVirus">IPN Virus</option>
                      <option value="entericRedmouth">Enteric Redmouth Disease</option>
                      <option value="columnaris">Columnaris Disease</option>
                    </select>
                  </div>
                  
                  <button 
                    className="btn btn-success"
                    onClick={handleBreedingSimulation}
                    disabled={!selectedFemale || !selectedMale}
                  >
                    Evaluate Breeding Pair
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              {breedingResults ? (
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Breeding Prediction Results</h5>
                  </div>
                  <div className="card-body">
                    <h6 className={`mb-3 ${breedingResults.recommendation.class}`}>
                      <strong>{breedingResults.recommendation.text}</strong>
                    </h6>
                    
                    <h6>Predicted Offspring Disease Resistance</h6>
                    <ul className="list-group mb-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Bacterial Cold Water Disease
                        <span className={priorityDisease === 'bacterialColdWater' ? 'badge bg-primary' : ''}>
                          {formatPercent(breedingResults.offspringScores.bacterialColdWater)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Viral Hemorrhagic Septicemia
                        <span className={priorityDisease === 'viralHemorrhagic' ? 'badge bg-primary' : ''}>
                          {formatPercent(breedingResults.offspringScores.viralHemorrhagic)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        IPN Virus
                        <span className={priorityDisease === 'ipnVirus' ? 'badge bg-primary' : ''}>
                          {formatPercent(breedingResults.offspringScores.ipnVirus)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Enteric Redmouth Disease
                        <span className={priorityDisease === 'entericRedmouth' ? 'badge bg-primary' : ''}>
                          {formatPercent(breedingResults.offspringScores.entericRedmouth)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Columnaris Disease
                        <span className={priorityDisease === 'columnaris' ? 'badge bg-primary' : ''}>
                          {formatPercent(breedingResults.offspringScores.columnaris)}
                        </span>
                      </li>
                    </ul>
                    
                    <div className="row">
                      <div className="col-6">
                        <div className="card bg-light">
                          <div className="card-body p-2 text-center">
                            <h6>Overall Score</h6>
                            <h3>{formatPercent(breedingResults.overallScore)}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="card bg-light">
                          <div className="card-body p-2 text-center">
                            <h6>Genetic Diversity</h6>
                            <h3>{formatPercent(breedingResults.compatibilityScore)}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card">
                  <div className="card-body text-center p-5">
                    <h5 className="text-muted mb-3">No Breeding Pair Selected</h5>
                    <p className="mb-0">Select a female and male, then click "Evaluate Breeding Pair" to see results.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-light rounded">
            <h4>Understanding the Results</h4>
            <p>
              The breeding prediction tool uses a simplified model to estimate potential offspring 
              traits based on the parents' genetic profiles. The evaluation considers:
            </p>
            <ul>
              <li><strong>Disease Resistance Scores:</strong> Predicted from the average of the parents' scores</li>
              <li><strong>Overall Score:</strong> Weighted average with emphasis on your priority disease</li>
              <li><strong>Genetic Diversity:</strong> Based on genotype differences between parents</li>
            </ul>
            <p className="mb-0">
              Higher scores generally indicate better breeding outcomes. The tool's recommendation
              considers both disease resistance potential and genetic diversity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedingTool; 