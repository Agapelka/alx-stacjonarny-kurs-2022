import { Link } from "react-router-dom";
function FooterNav() {
    return (
        <nav>
        <ul>
          <li>
            {/* Jeśli chcemy zmienić zawartość strony bez odświeżenia jej całkowicie, potrzebujemy użyć wbudowanego komponentu Link */}
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

    )
}
export default FooterNav;