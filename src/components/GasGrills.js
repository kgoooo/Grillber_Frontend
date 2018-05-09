import React from 'react';

const GasGrills = ({grills}) => {
	return <div>
      <h2>Gas grills:</h2>
		<div className="grills__wrapper">
      {grills.length >= 1 ? grills.map(grill => (
          <div key={grill.name}>
						<div className="card">
							<div className="card__side card__side--front">
								<img src={grill.image1} className="grills__image" />
								<h2 className="grills__name" key={grill.name}>
									{grill.name}
								</h2>
								<p key={`${grill.name}${grill.serves}`} className="grills__copy">
								 Serves aproximately {grill.serves} people
								</p>
								<p className="grills__copy grills__copy--desc">{grill.description}</p>
								<button className="btn btn--hollow grills__btn">&rarr;</button>
							</div>
							<div className="card__side card__side--back">
								<img src={grill.image2} className="grills__image" />
								<p className="grills__copy">Hourly rate: <span className="grills__price">${grill.rate_hourly}</span></p>
								<p className="grills__copy">Daily rate: <span className="grills__price">${grill.rate_daily}</span></p>
								<button className="btn btn--action grills__btn">Book this grill</button>
							</div>
						</div>
          </div>
        )) : <p>Grills are loading...</p>}
		</div>
    </div>;
};

export default GasGrills;


//<h2>Gas grills:</h2>
//{grills.length >= 1 ? grills.map(grill => (
	//<div key={grill.name} className="grills__box">
		//<img src={grill.image1} className="grills__image" />
		//<img src={grill.image2} className="grills__image" />
		//<h2 className="grills__name" key={grill.name}>
			//Name: {grill.name}
		//</h2>
		//<p key={`${grill.name}${grill.serves}`}>
		//	Serves aproximately {grill.serves} people
		//</p>
		//<p>Hourly rate: ${grill.rate_hourly}</p>
		//<p>Daily rate: ${grill.rate_daily}</p>
		//<button className="btn btn--action">Book this grill</button>
	//</div>
//)) : <p>Grills are loading...</p>}