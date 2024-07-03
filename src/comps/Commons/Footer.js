import { Link } from "react-router-dom";
import { footLinks } from "../../constants";

const Footer = ({ className }) => {
  return (
    <footer
      className={`shadowFromBottom w-full absolute bottom-0 text-slate-100 mix-blend-exclusion text-xs text-center z-20${
        className ? " " + className : ""
      }`}
    >
      <ul className="pb-3 mx-auto md:w-3/5 grid md:grid-cols-5 grid-cols-2 gap-4 text-center">
        {footLinks.map((item, index) => {
          return index === 4 ? (
            <li key={item} className="max-md:col-span-2">
              <Link to={item.href}>{item.label}</Link>
            </li>
          ) : (
            <li key={item}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
