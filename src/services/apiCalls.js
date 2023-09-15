import axios from "axios";

export const bringCars = async () => {
  return await axios.get(`http://localhost:5000/cars`);
};

export const bringUsers = async (userData) => {

  return await axios.get(`http://localhost:5000/users`, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};

export const loginUser = async (credentials) => {
  return await axios.post(`http://localhost:5000/auth/login`, credentials);
};

export const registerUser = async (registerBody) => {
  return axios.post(`http://localhost:5000/users`, registerBody);
};

export const registerCar = async (newCarBody, userData) => {
  return axios.post(`http://localhost:5000/cars`, newCarBody, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};

export const modifyUser = async (modifyUserBody, userData) => {
  return axios.put(`http://localhost:5000/users`, modifyUserBody, {
    headers: {
      authorization: "Bearer " + userData.token,
    },
  });
};

export const searchCriteria = async (criteria) => {
  return await axios.get(`http://localhost:5000/cars/${criteria}`);
};
