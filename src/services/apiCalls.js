import axios from 'axios';

export const bringCars = async () => {

    return await axios.get(`http://localhost:5000/cars`);
}

export const bringUsers = async (userData) => {

    //console.log("a ver que trae el userdata.token", userData.token);

    return await axios.get(`http://localhost:5000/users`, {
        headers: {
          authorization: "Bearer " + userData.token,
        }
    });
}

// export const bringUsers = async (credentials) => {

//     return await axios.get(`http://localhost:5000/users`, credentials);
// }

export const loginUser = async (credentials) => {

    //aqui es donde enviamos al backend los datos de logueo desde el frontend
    return await axios.post(`http://localhost:5000/auth/login`, credentials)
}

export const registerUser = async (registerBody) => {

    return axios.post(`http://localhost:5000/users`, registerBody)
}

export const registerCar = async (newCarBody) => {

    return axios.post(`http://localhost:5000/cars`, newCarBody)
}

export const modifyUser = async (modifyUserBody, userData) => {

    return axios.put(`http://localhost:5000/users`, modifyUserBody, {
        headers: {
          authorization: "Bearer " + userData.token,
        }
    })
 
}
