import React, { useEffect, useState } from 'react';
import { getTokenData, isAuthenticated, TokenData } from '../../util/auth';
import history from '../../util/history';
import { removeAuthData } from '../../util/requests';
import './Navbar.css';

type AuthData = {
    authenticated: boolean;
    tokenData?: TokenData;
}

export default function Navbar() {

    const [ authData, setAuthData] = useState<AuthData>({authenticated: false});
    
    useEffect(() => {
        if (isAuthenticated()) {
            setAuthData({
                authenticated: true,
                tokenData: getTokenData()
            });
        }
        else {
            setAuthData ({
                authenticated: false
            });
        }
    }, []);

    const handleLogoutClick = (event : React.MouseEvent<HTMLButtonElement>) =>  {
        event.preventDefault();
        removeAuthData();
        setAuthData ({
            authenticated: false
        });
        history.replace('/');

    }
    
    return (
        <div className="navbar">
            <a href="/">
                <h1>MovieFlix</h1>
            </a>
               { authData.authenticated &&
               <button onClick={handleLogoutClick}>sair</button>
               }
        </div>
    )
}