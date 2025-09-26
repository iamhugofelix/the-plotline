import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer () {

  return (
    <footer className="footer">
      <span>
        Created by{" "}
        <Link to={"https://uxhugo.com"} className="link">
          Hugo Felix
        </Link>{" "}
        using React and{" "}
        <Link to={"https://www.themoviedb.org/"} className="link">
          The Movie DB
        </Link>{" "}
        API.
      </span>
      <Link className="btn btn-transparent btn--sm">
        <FaGithub size={16} /> View on GitHub
      </Link>
    </footer>
  );
}