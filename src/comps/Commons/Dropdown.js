import { Link } from "react-router-dom";

const Dropdown = ({
  prods = false,
  links = [],
  discover = false,
  className = null,
  handleClick,
}) => {
  return (
    <section
      className={`dropdown absolute start-0 w-full bg-slate-50 text-slate-950 z-30 h-auto max-h-[500px] transition-all duration-700 pt-24 pb-12 shadow-sm ${className}`}
    >
      <div className="flex px-12">
        {discover ? (
          <div className="flex gap-12 py-5 mx-auto text-xs">
            {links?.map((linkCategory, index) => (
              <ul key={index}>
                <h3 className="text-slate-500 font-thin mb-5">
                  {linkCategory.title}
                </h3>
                {linkCategory.links.map((link, index) => {
                  return (
                    <li className="mt-4">
                      <Link
                        className="hover:underline hover:decoration-2"
                        to={link.to}
                        onClick={handleClick}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        ) : (
          <>
            <div className="w-3/4 grid grid-cols-4 gap-3 px-12">
              {prods?.map((item, index) => {
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center">
                      <Link to={item.links[0].to} onClick={handleClick}>
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
                            onClick={handleClick}
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
            <div className="w-1/4 flex flex-col justify-center">
              <ul className="border-s ps-16 py-5 text-xs h-full font-bold">
                {links.map((link, index) => (
                  <li key={index} className="py-1">
                    <Link
                      to={link.to}
                      className="hover:underline hover:decoration-2"
                      onClick={handleClick}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Dropdown;
