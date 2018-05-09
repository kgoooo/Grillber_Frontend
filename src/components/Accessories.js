import React, { Component } from 'react';
import fetchAllAccessories from '../api/accessoriesAPI';

class Accessories extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			accessoriesList: []
		}
	}
	componentWillMount() {
		fetchAllAccessories()
		.then((res) => {
			this.setState({ accessoriesList: res[0]});
			console.log("#3 acc state: ", this.state.accessoriesList);
		})
	}
	render(){
		return <div className="accessories">
        <h1 className="accessories__title">Add your accessories</h1>
			<div className="accessories__wrapper">
        {this.state.accessoriesList.length >= 1 ? this.state.accessoriesList.map(
            accessory => (
							<div key={accessory.name}>
								<div className="accessories__card">
									<div className="accessories__card__side">
										<img src={accessory.image1} className="accessories__image"/>
										<h2 key={accessory.name} className="accessories__name">{accessory.name}</h2>
										<p className="accessories__copy">{accessory.description}</p>
										<p key={`${accessory.name}${accessory.price}`} className="accessories__price">
											Price: <span className="accessories__price--span">${accessory.price}</span>
										</p>
										<button className="accessories__btn btn btn--action">Add to cart</button>
									</div>
								</div>
              </div>
            )
          ) : <p>accessories loading...</p>}
				</div>
      </div>;
	}
}

export default Accessories;

// import React, { Component } from 'react';
// import fetchAllAccessories from '../api/accessoriesAPI';
//
// class Accessories extends Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.state={
// 			accessoriesList: []
// 		}
// 	}
// 	componentWillMount() {
// 		fetchAllAccessories()
// 			.then((res) => {
// 				this.setState({ accessoriesList: res[0]});
// 				console.log("#3 acc state: ", this.state.accessoriesList);
// 			})
// 	}
// 	render(){
// 		return <div className="accessories">
// 			<div className="row">
// 				<h1 className="accessories__title">Add your accessories</h1>
// 				{this.state.accessoriesList.length >= 1 ? this.state.accessoriesList.map(
// 					accessory => (
// 						<div key={accessory.name} className="col-1-of-3">
// 							<div className="accessories__card">
// 								<div className="accessories__card__side">
// 									<img src={accessory.image1} className="accessories__image"/>
// 									<h2 key={accessory.name} className="accessories__name">{accessory.name}</h2>
// 									<p className="accessories__copy">{accessory.description}</p>
// 									<p key={`${accessory.name}${accessory.price}`} className="accessories__price">
// 										Price: <span className="accessories__price--span">${accessory.price}</span>
// 									</p>
// 									<button className="accessories__btn btn btn--action">Add to cart</button>
// 								</div>
// 							</div>
// 						</div>
// 					)
// 				) : <p>accessories loading...</p>}
// 			</div>
// 		</div>;
// 	}
// }
//
// export default Accessories;