const axios = require("axios");

const fetchAllAccessories = () => {
	const accessoriesURI = "http://localhost:3000/api/accessories";
	let accessoriesList = [];
	return axios.get(`${accessoriesURI}`)
		.then((res) => {
			console.log('#1 All Accs recieved!');
			accessoriesList.push(res.data)
			console.log('#2 Acc list on API file:', accessoriesList);
			return accessoriesList;
		})
		.catch((e) => {
			console.log('Error fetching ALL accesories!', e);
		})
}

export default fetchAllAccessories;