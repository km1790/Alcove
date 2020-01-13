import React from "react";

import WrappedMap from './WrappedMap.jsx';

const ListingMap = props => {



  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        lat={30.267153}
        lng={-97.743057}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{height: "100%"}} />}
        containerElement={<div style={{height: "100%"}} />}
        mapElement={<div style={{height: "100%"}} />}
      />
    </div>
  )
};

export default ListingMap;

// defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
