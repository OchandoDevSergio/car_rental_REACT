

import './CarCard.css';

export const CarCard = ({id, plate, model, year, picture, car}) => {

    return (
        <div className='cardDesign' onClick={()=>console.log(car)}>
            
            {model}
            <img className='picture' src={picture} alt={id}/>
            <div>Year: {year}</div>

        </div>
    )
}