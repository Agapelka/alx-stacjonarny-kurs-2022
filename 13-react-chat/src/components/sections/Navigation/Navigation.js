// Funkcja Link zapobiega całkowitemu odświeżeniu i przeładowaniu przy przełączaniu się miedzu stronami
import { useContext } from 'react';
import { GlobalContext } from 'contexts/global';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import './Navigation.css';

function Navigation() {
// Bez destrukturyzacji:
// const globalState = useContext(GlobalContext)
// console.log(globalState.theme)

//Destrukturyzacja - służy do wydobywania wartości z obiektów lub tablic od razu przy wywołaniu
const { state, handleThemeChange, logout } = useContext(GlobalContext)
const navigate = useNavigate();


const handleLogout = () => {
  logout()
    navigate('/login');
  }


console.log(state.user)

    return (
  
      <nav className={state.theme==='dark' ? 'dark-theme' : ''}>
        <ul>
          <li>
            {/* Jeśli chcemy zmienić zawartość strony bez odświeżenia jej całkowicie, potrzebujemy użyć wbudowanego komponentu Link */}
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
            { !state.user && <li><Link to="/login">Login</Link></li>}            
                    
        </ul>
        <Button text="Zmień theme" onClick={handleThemeChange}></Button>
        {
          state.user && <Button text="Log out" onClick={handleLogout}/>
        }
            {
        state.user && (
          <div>
            <p> Hello {state.user.name} </p>
          </div>
        )
      }
        
      </nav>
    )
  }
  export default Navigation