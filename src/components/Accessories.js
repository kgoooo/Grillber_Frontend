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
		return <div>
        <p>ACCESSORIES</p>
        {this.state.accessoriesList.length >= 1 ? this.state.accessoriesList.map(
            accessory => (
              <div key={accessory.name}>
                <p key={accessory.name}>Name: {accessory.name}</p>
                <p key={`${accessory.name}${accessory.price}`}>Price: {accessory.price}</p>
              </div>
            )
          ) : <p>accessories loading...</p>}
      </div>;
	}
}

export default Accessories;