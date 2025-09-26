import { Link } from "react-router";

export default function Pill({
  children,
  url,
  type = "transparent",
  size = "sm",
}) {
  return (
    <Link to={url} className={`pill pill-${type} pill--${size}`}>
      {children}
    </Link>
  );
}
