
import {useEffect, useState} from 'react';
import { bringUsers } from '../../services/apiCalls';
import { UserCard } from '../../common/UserCard/UserCard'
import { useSelector } from "react-redux";
import { userDataCheck } from "../userSlice";
import { useNavigate } from "react-router-dom";
import "./UsersList.css";





export const UsersList = () => {
    const [users, setUsers] = useState([]);

    const dataUserRedux = useSelector(userDataCheck);

    useEffect(()=>{

        
        if(users.length === 0){
            
            bringUsers(dataUserRedux.credentials)
            .then(
                resultado => {
                        setUsers(resultado.data.data);
                    }
                )
                .catch(error => console.log(error));
        } else {
            console.log(users);
        }
    },[users]);

    const datosReduxUser = useSelector(userDataCheck);
    const navigate = useNavigate();

    useEffect(()=> {

        if(datosReduxUser.credentials?.userData?.roleId !== 1){
            navigate("/");
        } else if (datosReduxUser.length === 0 ){
            navigate("/");
        }
    }, [datosReduxUser]);


    return (
        <>
            {users.length > 0 

                ? (<div className='usersList'>
                   <div className='row spaceRow'></div>

                     {users.map(
                        user => {
                            return (
                                <UserCard
                                
                                    // Key es siempre una palabra reservada en React
                                    key={user.id}
                                    ////////////////////////////////
                                    id={user.id}
                                    surnames={user.surnames}
                                    name={user.name}
                                    dni={user.dni}
                                    email={user.email}
                                    phone={user.phone}
                                    user={user}
                                />
                            )
                        }
                    )}

                </div>

                )

                : (<div>data is coming</div>)
            
            }
        </>
    )
}