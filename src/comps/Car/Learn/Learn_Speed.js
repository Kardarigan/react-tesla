import React from "react";
import { vehicles } from "../../../constants";
import { Fadein } from "../../Portal";

const Learn_Speed = ({ car }) => {
  const carNumebrs = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).numbers;

  return (
    <section
      className="bg-slate-950 bg-fullcenter flex items-end min-h-[100vh]"
      style={{ backgroundImage: "url(" + car.roadImage + ")" }}
    >
      <div className="flex-seperate size-full shadowFromBottom md:px-32 padding">
        {carNumebrs.map((item) => {
          return (
            <Fadein>
              <div key={item.key} className="text-center">
                <h4 className="md:text-4xl sm:text-2xl text-md">
                  {item.value}{" "}
                  <span className="md:text-xl text-[10px]">{item.unit}</span>
                </h4>
                <p className="md:text-sm sm:text-[10px] text-[8px]">
                  {item.key}
                </p>
              </div>
            </Fadein>
          );
        })}
      </div>
    </section>
  );
};

export default Learn_Speed;
