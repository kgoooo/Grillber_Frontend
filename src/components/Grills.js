import React, { Component } from 'react';
import fetchAllGrills from '../api/grillAPI';
import GasGrills from './GasGrills';
import CharcoalGrills from './CharcoalGrills';

class Grills extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			showing: 'all',
			allGrills: [],
			charcoal: [],
			gas: []
		}
	}
	componentWillMount() {
		fetchAllGrills()
		.then((res) => {
			this.setState({ allGrills: res[0]})
			let charcoal = [];
			let gas = [];
			res[0].forEach(grill => {
				if(grill.fuel_id === 1){
					charcoal.push(grill)
				} else {
					gas.push(grill)
				}
			});
			this.setState({ 
				charcoal,
				gas 
			});
			console.log(this.state.charcoal);
			console.log(this.state.gas);
		})
	}
	handleAllGrillsClick = () => {
		this.setState({ showing: 'all'})
	}
	handleCharcoalClick = () => {
		this.setState({ showing: 'charcoal'})
	}
	handleGasClick = () => {
		this.setState({ showing: 'gas'})
	}
	
	render(){
		return <div className="grills">
        <h1 className="grills__title">Grills</h1>
        <button onClick={this.handleAllGrillsClick}>All Grills</button>
        <button onClick={this.handleCharcoalClick}>Charcoal</button>
        <button onClick={this.handleGasClick}>Gas</button>
        {this.state.showing === "gas" ? <GasGrills grills={this.state.gas} /> : null}
        {this.state.showing === "charcoal" ? <CharcoalGrills grills={this.state.charcoal} /> : null}
        {this.state.showing === "all" ? <div>
            <GasGrills grills={this.state.gas} />
            <CharcoalGrills grills={this.state.charcoal} />
          </div> : null}
      </div>;
	}
}

export default Grills;


// return (
//   <div className="grills">
//     <h1 className="grills__title">Grills</h1>
//     <button onClick={this.handleAllGrillsClick}>All Grills</button>
//     <button onClick={this.handleCharcoalClick}>Charcoal</button>
//     <button onClick={this.handleGasClick}>Gas</button>
//     {this.state.charcoal.length >= 1 ? (
//       this.state.charcoal.map(grill => (
//         <div key={grill.name} className="grills__box">
//           <img src={grill.image1} className="grills__image" />
//           <img src={grill.image2} className="grills__image" />
//           <h2 className="grills__name" key={grill.name}>
//             Name: {grill.name}
//           </h2>
//           <p key={`${grill.name}${grill.serves}`}>
//             Serves aproximately {grill.serves} people
//           </p>
//           <p>Hourly rate: ${grill.rate_hourly}</p>
//           <p>Daily rate: ${grill.rate_daily}</p>
//         </div>
//       ))
//     ) : (
//       <p>Grills loading...</p>
//     )}
//     <h2>Gas grills:</h2>
//     {this.state.gas.length >= 1 ? (
//       this.state.gas.map(grill => (
//         <div key={grill.name} className="grills__box">
//           <img src={grill.image1} className="grills__image" />
//           <img src={grill.image2} className="grills__image" />
//           <h2 className="grills__name" key={grill.name}>
//             Name: {grill.name}
//           </h2>
//           <p key={`${grill.name}${grill.serves}`}>
//             Serves aproximately {grill.serves} people
//           </p>
//           <p>Hourly rate: ${grill.rate_hourly}</p>
//           <p>Daily rate: ${grill.rate_daily}</p>
//         </div>
//       ))
//     ) : (
//       <p>Grills loading...</p>
//     )}
//   </div>
// );