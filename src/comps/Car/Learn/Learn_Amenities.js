import React from "react";
import { vehicles } from "../../../constants";
import { Fadein } from "../../Portal";

const Learn_Amenities = ({ car }) => {
  const carAmenities = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).amenities;

  return (
    <section className="lg:px-10 py-10 mx-auto max-w-[1200px]">
      {carAmenities.map((item, index) => {
        return (
          <Fadein>
            <div
              className={`flex justify-between ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-col sm:px-5 sm:py-0 py-5`}
            >
              <div className="sm:w-1/2 flex items-center">
                {item.image.endsWith(".mp4") || item.image.endsWith(".webm") ? (
                  <video autoPlay muted loop className="bg-fullobject w-full">
                    <source
                      src={item.image}
                      type={`video/${item.image.split(".").pop()}`}
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full bg-fullobject"
                  />
                )}
              </div>
              <div className="sm:w-1/2 flex items-center">
                <div className="px-5 sm:py-0 py-10">
                  <h3>{item.title}</h3>
                  <p className="mt-3">{item.describe}</p>
                </div>
              </div>
            </div>
          </Fadein>
        );
      })}
    </section>
  );
};

export default Learn_Amenities;
