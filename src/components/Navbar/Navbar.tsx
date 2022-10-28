import { isAuthenticated } from '../../util/auth';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/">
                <h1>MovieFlix</h1>
            </a>
               { isAuthenticated() &&
               <button>sair</button>
               }
        </div>
    )
}