const axios = require('axios');


const fetchAllGrills = () => {
	const grillURI = "http://localhost:3000/api/grills";
	let grillList = [];
	return axios.get(`${grillURI}`)
		.then((res) => {
			console.log('#1 All grills recieved');
			grillList.push(res.data);
			console.log("#2 Grill list on API file: ", grillList);
			return grillList;
		}
	)
		.catch((e) => {
			console.log('Error fetching ALL grills:', e);
		})
};


export default fetchAllGrills