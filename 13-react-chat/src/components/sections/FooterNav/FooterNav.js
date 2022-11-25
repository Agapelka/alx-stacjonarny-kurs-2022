
import { useContext } from "react";
import { GlobalContext } from "contexts/global";
import Button from "components/atoms/Button/Button";
import { Link } from "react-router-dom";
import './FooterNav.css';

function FooterNav() {
  const { state, handleThemeChange } = useContext(GlobalContext);
    return (
      <nav className={state.theme==='dark' ? 'dark-theme-footer' : ''}>
        <ul>
          <li>
            {/* Jeśli chcemy zmienić zawartość strony bez odświeżenia jej całkowicie, potrzebujemy użyć wbudowanego komponentu Link */}
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>   
        <Button text="Zmień theme" onClick={handleThemeChange}></Button>
      </nav>
   

    )
}
export default FooterNav;