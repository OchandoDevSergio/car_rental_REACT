import "./ShowCar.css";

import { useSelector } from "react-redux";
import { carDataCheck } from "../carSlice";
export const ShowCar = () => {
  //Instanciamos REDUX en modo lectura
  const rdxCarData = useSelector(carDataCheck);

  return (
    <div className="container-fluid showCar">
      <div className="row showCarRows"></div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col carCol">
          <div className="col">
            <img
              className="carPicture"
              src={rdxCarData.carData.picture}
              alt={rdxCarData.carData.id}
            />
          </div>
          <div className="col carData">
            <div>Model : {rdxCarData.carData.model}</div>
            <div>Year : {rdxCarData.carData.year}</div>
            <div>Plate number: {rdxCarData.carData.plate_number}</div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row showCarRows"></div>
    </div>
  );
};
