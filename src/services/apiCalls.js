import axios from 'axios';

export const bringCharacters = async () => {

    return await axios.get(`http://localhost:5000/cars`);
}