import React from 'react';

const GasGrills = ({grills}) => {
	return <div>
      <h2>Gas grills:</h2>
      {grills.length >= 1 ? grills.map(grill => (
          <div key={grill.name} className="grills__box">
            <img src={grill.image1} className="grills__image" />
            <img src={grill.image2} className="grills__image" />
            <h2 className="grills__name" key={grill.name}>
              Name: {grill.name}
            </h2>
            <p key={`${grill.name}${grill.serves}`}>
              Serves aproximately {grill.serves} people
            </p>
            <p>Hourly rate: ${grill.rate_hourly}</p>
            <p>Daily rate: ${grill.rate_daily}</p>
            <button>Book this grill</button>
          </div>
        )) : <p>Grills loading...</p>}
    </div>;
}

export default GasGrills;