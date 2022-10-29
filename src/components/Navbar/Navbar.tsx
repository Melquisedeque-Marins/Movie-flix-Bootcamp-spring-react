import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthContext';
import { getTokenData, isAuthenticated } from '../../util/auth';
import history from '../../util/history';
import { removeAuthData } from '../../util/requests';
import './Navbar.css';

export default function Navbar() {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            });
        }
        else {
            setAuthContextData ({
                authenticated: false
            });
        }
    }, [setAuthContextData]);

    const handleLogoutClick = (event : React.MouseEvent<HTMLButtonElement>) =>  {
        event.preventDefault();
        removeAuthData();
        setAuthContextData ({
            authenticated: false
        });
        history.replace('/');

    }
    
    return (
        <div className="navbar">
            <a href="/">
                <h1>MovieFlix</h1>
            </a>
               { authContextData.authenticated &&
               <button onClick={handleLogoutClick}>sair</button>
               }
        </div>
    )
}