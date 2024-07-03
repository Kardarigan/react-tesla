import React from "react";
import { statistics } from "../../constants";

const Home_Statistics = () => {
  return (
    <section className="flex-seperate md:px-32 padding bg-slate-950">
      {statistics.map((item) => {
        return (
          <div key={item.label} className="text-center">
            <h4 className="title">{item.count}</h4>
            <p className="text-slate-400 para-sm">{item.label}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Home_Statistics;
