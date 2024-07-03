import { useEffect, useState } from "react";

const Half_Slider = ({ thing }) => {
  const [showModel, setShowModel] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowModel((showModel) => (showModel + 1) % thing.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const demoButton = Array.from(
    document.getElementsByClassName("demoDriveButton")
  );

  demoButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      setShowModel(index);
    });
  });

  return (
    <section className="flex max-md:flex-col-reverse gap-12 mt-12 padding-x py-24 min-h-screen">
      <div className="md:w-1/2 grid md:gap-y-5 max-md:pt-24">
        {thing.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setShowModel(index)}
              className={`transition-all cursor-pointer py-3 overflow-hidden ${
                showModel === index ? "md:h-16 h-16" : "md:h-12 h-10"
              } `}
            >
              <h3 className="title">{item.title}</h3>
              <p className="text-xs text-slate-400">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
      <div className="md:w-1/2 bg-slate-50 rounded flex-fullcenter relative py-24">
        {thing.map((item, index) => {
          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                showModel === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={item.cover} alt="Model" className="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Half_Slider;
