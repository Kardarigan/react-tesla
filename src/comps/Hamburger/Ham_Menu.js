import { Link } from "react-router-dom";
import { hamburgerItems } from "../../constants";

const Ham_Menu = ({ handleClick, clickes }) => {
  return (
    <ul className="flex flex-col gap-4">
      {hamburgerItems.map((item, index) => {
        return (
          <>
            {item.submenu ? (
              item.icon ? (
                <li
                  className={`navitem py-4 ${item.submenu && "flex-seperate"}`}
                  onClick={() => handleClick(item.label, item.submenu)}
                  key={index}
                >
                  <div className="flex items-center">
                    <i className={`${item.icon} text-2xl me-2`} />
                    <span>{item.label}</span>
                    {item.label === "Languge" && (
                      <span className="ms-8 mt-10 absolute text-xs text-slate-700 font-thin">
                        English
                      </span>
                    )}
                  </div>
                  {item.submenu && <i className="fa fa-chevron-right pe-2" />}
                </li>
              ) : (
                <li
                  className={`navitem py-4 ${item.submenu && "flex-seperate"}`}
                  onClick={() => handleClick(item.label, item.submenu)}
                  key={index}
                >
                  <span>{item.label}</span>
                  {item.submenu && <i className="fa fa-chevron-right pe-2" />}
                </li>
              )
            ) : (
              <Link
                to="/"
                className="navitem block py-4"
                onClick={clickes}
                key={index}
              >
                <span>{item.label}</span>
              </Link>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default Ham_Menu;
