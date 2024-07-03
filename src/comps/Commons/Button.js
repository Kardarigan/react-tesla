import { Link } from "react-router-dom";

const Button = ({
  to,
  label,
  light = false,
  sky = false,
  outline = false,
  customClass,
}) => {
  let typeClasses;

  if (outline === "light") {
    typeClasses = "button-outline-light";
  } else if (outline === "dark") {
    typeClasses = "button-outline-dark";
  } else {
    typeClasses = light ? "button-light" : sky ? "button-sky" : "button-dark";
  }

  const buttonClass = `button ${typeClasses}`;

  return (
    <Link to={to} className={`${buttonClass} ${customClass}`}>
      {label}
    </Link>
  );
};

export default Button;
