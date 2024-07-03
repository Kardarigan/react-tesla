import { useState } from "react";

const Order_Self = () => {
  const [addSelfDriving, setAddSelfDriving] = useState(false);

  const selfDrivingItems = [
    "Navigate on Autopilot",
    "Auto Lane Change",
    "Autopark",
    "Summon",
    "Smart Summon",
    "Autosteer on city streets",
    "Traffic Light and Stop Sign Control",
  ];

  return (
    <section>
      <h2 className="title-sm">Full Self-Driving Capability</h2>
      <p className="text-slate-200 my-3">$11,000</p>
      <div className="text-start para text-slate-300">
        <p>
          Your car will be able to drive itself almost anywhere with minimal
          driver intervention and will continuously improve
        </p>
        <ul className="ps-5 mt-3 mb-7 grid gap-2">
          {selfDrivingItems.map((item, index) => {
            return (
              <li key={index} className="list-disc">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="para-sm">
          The currently enabled features require active driver supervision and
          do not make the vehicle autonomous. The activation and use of these
          features are dependent on achieving reliability far in excess of human
          drivers as demonstrated by billions of miles of experience, as well as
          regulatory approval, which may take longer in some jurisdictions. As
          these self-driving features evolve, your car will be continuously
          upgraded through over-the-air software updates.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-3 mt-5">
        <button
          onClick={() => setAddSelfDriving(!addSelfDriving)}
          className={`button ${addSelfDriving ? "button-dark" : "button-sky"}`}
        >
          {addSelfDriving ? "Remove" : "Add"}
        </button>
        <button className="button button-dark">Feature Details</button>
      </div>
    </section>
  );
};

export default Order_Self;
