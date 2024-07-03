import React from "react";

const Learn_Bgsection = ({ car, seperate = false }) => {
  return (
    <section className={seperate ? "padding" : "mt-24"}>
      {seperate ? (
        <div className="min-h-[120vh]">
          {car.cover.endsWith(".mp4") || car.cover.endsWith(".webm") ? (
            <video
              autoPlay
              muted
              controls
              loop
              className="bg-fullobject rounded"
            >
              <source
                src={car.cover}
                type={`video/${car.cover.split(".").pop()}`}
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={car.cover}
              alt={car.title}
              className="bg-fullobject rounded"
            />
          )}
          <div className="absolute padding-x">
            <div className="gap-x-9 pagecenter-x pt-0 flex max-md:flex-col">
              <h3 className="title min-w-48">{car.title}</h3>
              <p className="md:mt-[10px] mt-5">{car.describe}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="min-h-[120vh] flex flex-col justify-end bg-fullcenter"
          style={{ backgroundImage: "url(" + car.cover + ")" }}
        >
          <div className="absolute padding-x">
            <div className="gap-x-9 pagecenter-x-md:flex-col">
              <h3 className="title min-w-48">{car.title}</h3>
              <p className="md:mt-[10px] mt-5">{car.describe}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Learn_Bgsection;
