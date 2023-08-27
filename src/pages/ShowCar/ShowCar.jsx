import './ShowCar.css'


export const ShowCar = () => {



return (
    <div className="container-fluid showCar">
       <img src={car.picture} alt={car.id}/>
       <div>{car.model}</div>
       <div>{car.year}</div>
       <div>{car.plate}</div>
        
    </div>
)




}