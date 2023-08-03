


import {useEffect, useState} from 'react';
import { bringCars } from '../../services/apiCalls';
import { CarCard } from '../../common/CarCard/CarCard';
import './Home.css'

export const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{

        
        if(cars.length === 0){
            bringCars()
            .then(
                resultado => {
                        setCars(resultado.data.data);
                    }
                )
                .catch(error => console.log(error));
        } else {
            console.log(cars);
        }
    },[cars]);

    return (
        <>
            {cars.length > 0 

                ? (<div className='home'>

                     {cars.map(
                        car => {
                            return (
                                <CarCard
                                
                                    // Key es siempre una palabra reservada en React
                                    key={car.id}
                                    ////////////////////////////////
                                    id={car.id}
                                    plate={car.plate_number}
                                    model={car.model}
                                    year={car.year}
                                    picture={car.picture}
                                    car={car}
                                />
                            )
                        }
                    )}

                </div>

                )

                : (<div>en camino</div>)
            
            }
        </>
    )
}