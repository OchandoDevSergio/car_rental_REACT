
import {useEffect, useState} from 'react';
import { bringUsers } from '../../services/apiCalls';
import { UserCard } from '../../common/UserCard/UserCard'
import "./UsersList.css";





export const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{

        
        if(users.length === 0){
            bringUsers()
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