import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className="main--navigation">
          <li>
            <h3>
              <Link to="/fixtures">Fixtures </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to="/standings"> Standings</Link>
            </h3>
          </li>
        </ul>
      </nav>
    </header>
  );
}
