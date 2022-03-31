import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav className="main--navigation">
        <Link className="button button1" to="/fixtures">
          Fixtures
        </Link>

        <Link className="button button1" to="/standings">
          Standings
        </Link>
      </nav>
    </header>
  );
}
