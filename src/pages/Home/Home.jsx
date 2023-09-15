import { useEffect, useState } from "react";
import { bringCars } from "../../services/apiCalls";
import { CarCard } from "../../common/CarCard/CarCard";
import { useSelector } from "react-redux";
import { carDataCheck } from "../../pages/carSlice";
import "./Home.css";

export const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (cars.length === 0) {
      bringCars()
        .then((resultado) => {
          setCars(resultado.data.data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log(cars);
    }
  }, [cars]);

  //Inicializamos o instanciamos REDUX en modo lectura
  const rdxCarData = useSelector(carDataCheck);

  return (
    <>
      {rdxCarData.carData.data.data.length > 0 ? (
        <div className="home">
          <div className="row spaceRow"></div>

          {rdxCarData.carData.data.data.map((car) => {
            return (
              <CarCard
                // Key es una palabra reservada en React
                key={car.id}
                ////////////////////////////////
                id={car.id}
                plate={car.plate_number}
                model={car.model}
                year={car.year}
                picture={car.picture}
                car={car}
              />
            );
          })}
        </div>
      ) : cars.length > 0 ? (
        <div className="home">
          <div className="row spaceRow"></div>

          {cars.map((car) => {
            return (
              <CarCard
                // Key es una palabra reservada en React
                key={car.id}
                ////////////////////////////////
                id={car.id}
                plate={car.plate_number}
                model={car.model}
                year={car.year}
                picture={car.picture}
                car={car}
              />
            );
          })}
        </div>
      ) : (
        <div>data is coming</div>
      )}
    </>
  );
};
