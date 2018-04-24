const axios = require('axios');

const postNewUser = (user) => {
	axios
    .post("http://localhost:3000/api/users", {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      dob: user.dob,
      password: user.password,
      address1: user.street1,
      address2: user.street2,
      state: user.state,
      zipcode: user.zipCode,
      phone_number: user.phone
    })
    .then(res => {
      console.log("New user response: ", res);
    })
    .catch(e => {
      console.log("Error posting new user.", e);
    });
}

export default postNewUser;