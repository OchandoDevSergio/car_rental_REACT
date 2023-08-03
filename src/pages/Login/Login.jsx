import { InputMail, InputText } from '../../common/Input/Input'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="login">
          <InputMail placeholder="Introduzca su e-mail" />
          <InputText placeholder="Introduzca su contraseña" />   
          <div className="buttonClicker" >Login</div>
          <div>En caso de no estar registrado haga click en el boton Registrarse</div>
          <div className="buttonClicker" onClick={()=>navigate("/register")}>Registrarse</div>
        </div>
    )
}