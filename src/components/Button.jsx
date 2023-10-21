import { Link } from "react-router-dom";

export default function Button({
  type = "button",
  className = "",
  onClick,
  children,
  to,
  ...rest
}) {
  if (to) {
    return (
      <Link
        to={to}
        className={"btn min-h-0 h-auto px-[1em] py-[0.5em] "
          .concat(className)
          .trim()}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      className={"btn min-h-0 h-auto px-[1em] py-[0.5em] "
        .concat(className)
        .trim()}
    >
      {children}
    </button>
  );
}
