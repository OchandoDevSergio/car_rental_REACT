import { InputMail, InputText } from '../../common/Input/Input'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="login">
          <InputMail placeholder="Introduce your e-mail" />
          <InputText placeholder="Introduce your password" />   
          <div className="buttonClicker" >Login</div>
          <div>If you don't have an acount click on the button to register</div>
          <div className="buttonClicker" onClick={()=>navigate("/register")}>Register</div>
        </div>
    )
}