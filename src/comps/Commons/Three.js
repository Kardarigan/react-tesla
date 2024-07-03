import React from "react";
import { Fadein } from "../Portal";

const Three = ({ items, cover }) => {
  return (
    <section
      className="fullSection"
      style={{ backgroundImage: "url(" + cover + ")" }}
    >
      <ul className="padding flex md:flex-col flex-row md:text-start text-center size-full justify-between">
        {items.map((item, index) => {
          return (
            <li key={index} className="md:max-w-[250px] w-1/3">
              <Fadein>
                <div className="md:text-4xl text-xl">
                  {item.title ? (
                    <h3>
                      {item.title}
                      <span className="md:text-base text-xs"> {item.unit}</span>
                    </h3>
                  ) : (
                    <i className={item.icon} />
                  )}
                </div>
                <p>{item.sub}</p>
              </Fadein>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Three;
