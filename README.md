# ResistomePro

ResistomePro is an interactive web application for visualizing and analyzing genetic markers related to disease resistance in rainbow trout. The project serves as an educational resource and demonstrates the integration of genomic data with environmental factors in aquaculture.

## Project Overview

This application allows users to:

- Explore genetic markers associated with disease resistance in rainbow trout
- Understand correlations between environmental factors and disease susceptibility
- Use a simple breeding decision support tool to evaluate potential breeding pairs

## Live Demo

[[View the live demo here]](https://temabef.github.io/ResistomePro/)

## Features

### Genetic Marker Visualization
- Interactive display of genetic markers related to disease resistance
- Filter by disease type and chromosome
- Information about marker significance and effect size

### Environmental Correlation
- Explore how water parameters affect disease susceptibility
- Interactive visualization of optimal ranges and critical thresholds
- Disease correlations for different environmental conditions

### Breeding Decision Support
- Simple tool to evaluate breeding pairs based on genetic markers
- Prediction of offspring disease resistance traits
- Recommendations based on genetic diversity and resistance scores

## Technologies Used

- React.js
- React Router for navigation
- Bootstrap for responsive design
- D3.js/Chart.js for data visualization
- JSON data format

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/resistomepro.git
cd resistomepro
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm start
```

4. Open your browser and navigate to http://localhost:3000

## Deployment

This project can be deployed for free using GitHub Pages:

```
npm run build
```

Then deploy the contents of the `build` directory to your hosting service of choice.

## Data Sources

The genetic marker and environmental data used in this application are derived from publicly available research publications and databases, including:

- Rainbow Trout Genome Project (NCBI)
- Published research papers on rainbow trout genetics
- Animal QTLdb for trait loci information
- FAO guidelines for environmental parameters

> Note: This application uses simplified data for educational purposes. For actual breeding decisions, more comprehensive genetic analysis would be required.

## Educational Value

ResistomePro demonstrates several important concepts in modern aquaculture:

- Marker-assisted selection for disease resistance
- Gene-environment interactions affecting fish health
- Visualization of complex genetic data for practical use
- Breeding decision support using genetic information

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data derived from published research by Vallejo et al. (2019), Palti et al. (2015), and others
- Bootstrap themes and components
- React.js and related libraries
