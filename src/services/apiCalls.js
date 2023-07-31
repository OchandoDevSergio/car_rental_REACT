import axios from 'axios';

export const bringCars = async () => {

    return await axios.get(`http://localhost:5000/cars`);
}