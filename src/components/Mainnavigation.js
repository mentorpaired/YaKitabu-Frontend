import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
    <nav>
        <ul>
          <li>
            <Link to="/">Landingpage</Link>
          </li>
          <li>
            <Link to="/Loginpage">Loginpage</Link>
          </li>         
        </ul>
    </nav>
    </header>
  );
}

export default MainNavigation;
