import { Link } from "react-router";

export default function Pill({
  children,
  url,
  type = "transparent",
  size = "sm",
}) {
  return (
    <span to={url} className={`pill pill-${type} pill--${size}`}>
      {children}
    </span>
  );
}
