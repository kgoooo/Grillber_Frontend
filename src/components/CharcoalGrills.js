import React from 'react';

const CharcoalGrills = ({grills}) => {
	return <div>
      <h2>Charcoal grills:</h2>
      {grills.length >= 1 ? grills.map(grill => (
          <div key={grill.name} className="col-1-of-3">
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
    </div>;
}

export default CharcoalGrills;