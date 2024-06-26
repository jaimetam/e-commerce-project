import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <div className="spaceBet"></div>
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <div className="spaceBet"></div>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <div className="spaceBet"></div>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <div className="spaceBet"></div>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <div className="spaceBet"></div>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <div className="spaceBet"></div>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          MinimalCloth
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
