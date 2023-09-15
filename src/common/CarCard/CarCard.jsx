import "./CarCard.css";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadCarData } from "../../pages/carSlice";

export const CarCard = ({ id, model, year, picture, car }) => {
  //Instancia de Redux para el modo de ESCRITURA
  const dispatch = useDispatch();
  //Instancia de Navigate para React Router Dom y movimientos por la app
  const navigate = useNavigate();

  const showMe = () => {
    dispatch(loadCarData({ carData: car }));
    navigate("/showcar");
  };

  return (
    <div className="cardDesign" onClick={() => showMe(car)}>
      {model}
      <img className="picture" src={picture} alt={id} />
      <div>Year: {year}</div>
    </div>
  );
};
