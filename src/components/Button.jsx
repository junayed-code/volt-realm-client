export default function Button({
  type = "button",
  className = "",
  onClick,
  children,
  ...rest
}) {
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
