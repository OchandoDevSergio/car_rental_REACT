
import './Input.css';

export const InputText = ({placeholder}) => {

    return (
    <input type="text" className="defaultInput" placeholder={placeholder} />
    )
}

export const InputNumber = ({placeholder}) => {

    return (
    <input type="number" className="defaultInput" placeholder={placeholder} />
    )
}

export const InputMail = ({placeholder}) => {

    return (
    <input type="email" className="defaultInput" placeholder={placeholder} />
    )
}






//<input type="text" id="playerX" placeholder="Introduzca el nombre del jugador depredador" />




