import { Link } from "react-router-dom";

const Ham_Submenu = ({ title, items, clickes }) => {
  return (
    <>
      <h4 className="w-20 mx-auto translate-y-[-45px] h-0 text-center">
        {title}
      </h4>
      {items.products && (
        <div className="max-w-[900px] mx-auto grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-12 mb-5 pb-12 border-b border-slate-200">
          {items.products?.map((item, index) => {
            return (
              <div key={index} className="text-center" onClick={clickes}>
                <div className="flex justify-center">
                  <Link to={item.links[0].to}>
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="h-[100px]"
                    />
                  </Link>
                </div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-xs mt-2">
                  {item.links.map((link, index) => {
                    return (
                      <Link
                        to={link.to}
                        key={index}
                        className={`link ${index != 0 && "ms-1"}`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <ul className="flex flex-col gap-4">
        {items.links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                className="navitem block py-4"
                onClick={clickes}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Ham_Submenu;
