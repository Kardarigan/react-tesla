import { Link } from "react-router-dom";
import { Button } from "../Portal";

const Charg_Three = ({ thing }) => {
  return (
    <section className="pagecenter-x padding-y">
      <div className="text-center mb-12 padding-x">
        <h2 className="title mb-3">{thing.title}</h2>
        {thing.subtitle ? (
          <p className="para">{thing.subtitle}</p>
        ) : thing.button ? (
          <Button to={thing.button.to} label={thing.button.label} />
        ) : null}
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        {thing.grids.map((item, index) => {
          return (
            <div key={index} className="text-start">
              <img
                src={item.cover}
                alt={item.title}
                className="rounded bg-fullobject"
              />
              <div className="grid mt-3 gap-y-3">
                <h3 className="title-sm">{item.title}</h3>
                <p className="para">{item.describe}</p>
                {item.link && (
                  <Link className="link block para" to={item.link.to}>
                    {item.link.label}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Charg_Three;
