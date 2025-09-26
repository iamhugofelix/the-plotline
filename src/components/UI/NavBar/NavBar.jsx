import { Compass, Film, Tv } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to={"/"}>
        <img src="/plotline-icon.svg" alt="Plotline Logo" />
      </Link>
      <div className="nav-links">
        <Link to={"/"} className="btn btn-nav btn--md">
          <Compass size={16} /> <span>Discover</span>
        </Link>
        <Link to={"/movies"} className="btn btn-nav btn--md">
          <Film size={16} /> <span>Movies</span>
        </Link>
        <Link to={"/tv-series"} className="btn btn-nav btn--md">
          <Tv size={16} /> <span>Tv Series</span>
        </Link>
      </div>
      <dir className="nav-actions">
        <Link to={"https://github.com/iamhugofelix"}>
          <FaGithub size={32} />
        </Link>
      </dir>
    </nav>
  );
}
