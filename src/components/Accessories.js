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
			this.setState({ accessoriesList: res[0]})
			console.log("#3 acc state: ", this.state.accessoriesList);
		})
	}
	render(){
		return <div className="accessories">
        <h1 className="accessories__title">Accessories</h1>
        {this.state.accessoriesList.length >= 1 ? this.state.accessoriesList.map(
            accessory => (
							<div key={accessory.name} className="accessories__box">
								<img src={accessory.image1} className="accessories__image"/>
								<h2 key={accessory.name}>{accessory.name}</h2>
								<p>{accessory.description}</p>
                <p key={`${accessory.name}${accessory.price}`}>
                  Price: {accessory.price}
								</p>
								<button className="btn btn--action">Add to cart</button>
              </div>
            )
          ) : <p>accessories loading...</p>}
      </div>;
	}
}

export default Accessories;