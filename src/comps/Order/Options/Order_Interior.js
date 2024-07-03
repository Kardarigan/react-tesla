import { useState } from "react";
import { interiorColors } from "../../../constants";

const Order_Interior = ({ car }) => {
  const [interior, setInterior] = useState(0);
  const [interiorName, setInteriorName] = useState("Stealth Gray");
  const [price, setPrice] = useState("Included");

  const handleClick = (i, item) => {
    setInterior(i);
    setInteriorName(item.name);
    setPrice(item.price);
  };

  return (
    <section className="grid gap-y-5">
      <h2 className="title-sm">Interior</h2>
      <div className="flex justify-center gap-x-1">
        {interiorColors.map((item, index) => {
          if (car.interior.includes(index)) {
            return (
              <button
                onClick={() => handleClick(index, item)}
                className={`w-14 rounded-full select-none p-2 ${
                  interior === index ? "selected-ring" : ""
                }`}
              >
                <img src={item.demo} alt="demo color" />
              </button>
            );
          }
        })}
      </div>
      <p className="para-sm">
        {interiorName}{" "}
        <span className="text-slate-400 ms-2">
          {Number.isInteger(price) ? "$" + price : price}
        </span>
      </p>
      <button className="button button-dark mx-auto">Feature Details</button>
    </section>
  );
};

export default Order_Interior;
