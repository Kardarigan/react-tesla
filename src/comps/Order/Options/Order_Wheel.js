import { useState } from "react";

const Order_Wheel = ({ car }) => {
  const [wheel, setWheel] = useState(0);
  const [wheelName, setWheelName] = useState("Stealth Gray");
  const [wheelType, setWheelType] = useState("Stealth Gray");
  const [wheelRange, setWheelRange] = useState("Stealth Gray");
  const [price, setPrice] = useState("Included");

  const handleClick = (i, item) => {
    setWheel(i);
    setWheelName(item.name);
    setWheelType(item.type);
    setWheelRange(item.range);
    setPrice(item.price);
  };

  return (
    <section className="grid gap-y-5">
      <h2 className="title-sm">Paint</h2>
      <div className="flex justify-center gap-x-1">
        {car.wheels.map((item, index) => {
          return (
            <button
              onClick={() => handleClick(index, item)}
              className={`w-14 rounded-full select-none p-2 ${
                wheel === index ? "selected-ring" : ""
              }`}
            >
              <img src={item.demo} alt="demo color" className="" />
            </button>
          );
        })}
      </div>
      <p className="para-sm leading-5">
        {wheelName}{" "}
        <span className="text-slate-400 ms-2">
          {Number.isInteger(price) ? "$" + price : price}
          <br />
          {wheelType}
          <br />
          Range (EPA est.) : {wheelRange}km
        </span>
      </p>
      <button className="button button-dark mx-auto">Learn More</button>
    </section>
  );
};

export default Order_Wheel;
