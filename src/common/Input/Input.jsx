
import './Input.css';

export const Input = ({type, placeholder, name, manejadora}) => {

    return (
        <input 
            type={type}
            placeholder={placeholder}
            name={name}
            className='defaultInput'
            onChange={(e)=> manejadora(e)}
        />
    )

}









































// export const InputText = ({placeholder}) => {

//     return (
//     <input type="text" className="defaultInput" placeholder={placeholder} />
//     )
// }

// export const InputNumber = ({placeholder}) => {

//     return (
//     <input type="number" className="defaultInput" placeholder={placeholder} />
//     )
// }

// export const InputMail = ({placeholder}) => {

//     return (
//     <input type="email" className="defaultInput" placeholder={placeholder} />
//     )
// }






//<input type="text" id="playerX" placeholder="Introduzca el nombre del jugador depredador" />




