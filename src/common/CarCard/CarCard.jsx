

import './CarCard.css';

export const CarCard = ({id, plate, model, year, car}) => {

    return (
        <div className='cardDesign' onClick={()=>console.log(car)}>
            {id}
            {plate}
            {model}
            {year}
            {/* <img className='picture' src={picture} alt={id}/> */}
            </div>
    )
}