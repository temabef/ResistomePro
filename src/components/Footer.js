import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>ResistomePro</h5>
            <p className="small">
              An interactive tool for visualizing rainbow trout genetic markers 
              related to disease resistance and environmental factors.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.ncbi.nlm.nih.gov/genome/196" className="text-white" target="_blank" rel="noopener noreferrer">Rainbow Trout Genome</a></li>
              <li><a href="https://www.animalgenome.org/QTLdb" className="text-white" target="_blank" rel="noopener noreferrer">Animal QTLdb</a></li>
              <li><a href="http://www.fao.org/fishery/culturedspecies/Oncorhynchus_mykiss/en" className="text-white" target="_blank" rel="noopener noreferrer">FAO Rainbow Trout Info</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>About</h5>
            <p className="small">
              This project was created by Saheed Kolawole as a portfolio project to showcase integration
              of genetic data with environmental factors for rainbow trout farming.
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} ResistomePro | Developed by Saheed Kolawole | 
            <a href="https://github.com/temabef/ResistomePro" className="text-white ms-2" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 