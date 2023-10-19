export default function Field({
  id,
  label = "",
  name = "",
  type = "text",
  placeholder = "",
  className = "",
  error = "",
  icon,
  onIconClick,
  ...rest
}) {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="px-1 pb-2" htmlFor={id}>
          <span className="label-text text-base">{label}</span>
        </label>
      )}
      <div className="relative">
        <input
          {...rest}
          id={id}
          name={name || id}
          type={type}
          placeholder={placeholder}
          className={`input input-bordered w-full ${icon ? "pr-8" : ""} `
            .concat(className)
            .trim()}
        />
        {icon && (
          <span
            onClick={onIconClick}
            className="absolute cursor-pointer right-2.5 top-1/2 -translate-y-1/2"
          >
            {icon}
          </span>
        )}
      </div>
      <p className="label-text-alt text-sm text-error pl-1">{error}</p>
    </div>
  );
}
