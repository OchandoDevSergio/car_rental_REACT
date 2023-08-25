
import './CarCard.css';

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadCarData } from "../../pages/carSlice";

export const CarCard = ({id, model, year, picture, car}) => {

    const showMe = () =>{
        const dispatch = useDispatch();
        //const navigate = useNavigate();
        dispatch(loadCarData({ carData: car}));
        console.log("ésta es la carData", carData);
        //navigate("/showcar");
    } 

    return (
        <div className='cardDesign' onClick={()=>showMe(car)}>
            
            {model}
            <img className='picture' src={picture} alt={id}/>
            <div>Year: {year}</div>

        </div>
    )
}