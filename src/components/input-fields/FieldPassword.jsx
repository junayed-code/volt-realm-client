import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Field from "./Field";

export default function FieldPassword({
  id,
  label = "",
  name = "",
  className = "",
  placeholder = "",
  error = "",
  ...rest
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <Field
      {...rest}
      id={id}
      label={label}
      name={name}
      error={error}
      placeholder={placeholder}
      className={className}
      type={showPass ? `text` : `password`}
      icon={showPass ? <FaEyeSlash /> : <FaEye />}
      onIconClick={() => setShowPass(curr => !curr)}
    />
  );
}
