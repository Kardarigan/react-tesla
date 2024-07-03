import React from "react";
import { Button } from "../Portal";

const Full_Middle = ({
  title,
  describe,
  cover,
  center = false,
  links = false,
  light = false,
}) => {
  return (
    <section
      className="h-[120vh] pt-24 padding-container bg-fullcenter"
      style={{ backgroundImage: "url(" + cover + ")" }}
    >
      <div
        className={`max-w-[700px] ${center && "text-center padding-x mx-auto"}`}
      >
        <h2 className={`title ${light ? "text-slate-50" : "text-slate-950"}`}>
          {title}
        </h2>
        <p
          className={`text-sm ${
            light ? "text-slate-200" : "text-slate-700"
          } pt-6`}
        >
          {describe}
        </p>
        {links && (
          <div className="flex max-md:flex-col gap-5 mt-5">
            {links.map((item, index) => {
              return (
                <>
                  {index > 0 ? (
                    <Button to={item.to} label={item.label} />
                  ) : (
                    <Button to={item.to} label={item.label} outline="light" />
                  )}
                </>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Full_Middle;
