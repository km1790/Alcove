import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ResultThumbnail from './ResultThumbnail.jsx';
import './Results.css';

const ResultsList = ({ listings, getSelectedListing }) => (
  <div id="results-list-container">
      {listings.slice(0, 100).map((listing, index) => (
        <ResultThumbnail
          listing={listing}
          key={`${listing.dateSubmitted}-${index}`}
          getSelectedListing={getSelectedListing}
        />
      ))}
  </div>
);

export default ResultsList;
