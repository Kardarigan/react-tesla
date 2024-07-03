import { useState } from "react";
import { paintColors } from "../../../constants";

const Order_Paint = ({ car }) => {
  const [paint, setPaint] = useState(0);
  const [paintName, setPaintName] = useState("Stealth Gray");
  const [price, setPrice] = useState("Included");

  const handleClick = (i, item) => {
    setPaint(i);
    setPaintName(item.name);
    setPrice(item.price);
  };

  return (
    <section className="grid gap-y-5">
      <h2 className="title-sm">Paint</h2>
      <div className="flex justify-center gap-x-1">
        {paintColors.map((item, index) => {
          if (car.paint.includes(index)) {
            return (
              <button
                onClick={() => handleClick(index, item)}
                className={`w-14 rounded-full select-none p-2 ${
                  paint === index ? "selected-ring" : ""
                }`}
              >
                <img src={item.demo} alt="demo color" />
              </button>
            );
          }
        })}
      </div>
      <p className="para-sm">
        {paintName}{" "}
        <span className="text-slate-400 ms-2">
          {Number.isInteger(price) ? "$" + price : price}
        </span>
      </p>
    </section>
  );
};

export default Order_Paint;
