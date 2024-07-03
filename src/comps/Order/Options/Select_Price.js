import { useState } from "react";

const Select_Price = ({ car }) => {
  const [showModel, setShowModel] = useState(0);

  return (
    <section className="text-start text-xs mt-5 grid gap-y-2">
      {car.editions.map((item, index) => {
        return (
          <div key={index}>
            {item.title && <h5 className="mt-5 mb-2">{item.title}</h5>}
            <button
              onClick={() => setShowModel(index)}
              className={`rounded w-full px-3 py-5 border border-slate-200 transition-all flex-seperate ${
                showModel === index ? "bg-slate-200 text-slate-950" : ""
              }`}
            >
              <span>{item.label}</span>
              <span>${item.price}</span>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Select_Price;
