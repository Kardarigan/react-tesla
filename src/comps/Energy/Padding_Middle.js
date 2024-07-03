import React from "react";

const Padding_Middle = ({ title, cover, describe, right = false }) => {
  return (
    <section
      className={`min-h-screen bg-slate-50 padding flex ${
        right ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col`}
    >
      <div className="md:w-3/5 padding-y">
        <div className="padding-x pt-6">
          {cover.endsWith(".mp4") || cover.endsWith(".webm") ? (
            <video
              autoPlay
              loop
              controls
              className="bg-fullobject w-full rounded"
            >
              <source src={cover} type={`video/${cover.split(".").pop()}`} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={cover}
              alt={title}
              className="bg-fullobject w-full rounded"
            />
          )}
        </div>
      </div>
      <div className="md:w-2/5 padding-y">
        <div className="padding">
          <h2 className="title text-slate-950">{title}</h2>
          <p className="text-sm text-slate-600 pt-6">{describe}</p>
        </div>
      </div>
    </section>
  );
};

export default Padding_Middle;
