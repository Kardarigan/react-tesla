import { useEffect, useState, useRef } from "react";

const Free_slider = ({ prod, dark = false, customClass = false }) => {
  const [showModel, setShowModel] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [duration, setDuration] = useState([]);
  const [theDuration, setTheDuration] = useState(duration[showModel]);
  const demoButtonRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModel((showModel) => (showModel + 1) % prod.length);
    }, theDuration);

    return () => clearInterval(interval);
  }, [theDuration]);

  useEffect(() => {
    const interval = setInterval(() => {
      const modelSlide = document.querySelector(`.modelSlide${customClass}`);
      if (modelSlide) setSliderHeight(modelSlide.offsetHeight);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const demoButton = Array.from(
      document.getElementsByClassName("demoDriveButton")
    );
    demoButtonRef.current = demoButton;
    demoButton.forEach((button, index) => {
      button.addEventListener("click", () => {
        setShowModel(index);
      });
    });
  }, []);

  useEffect(() => {
    const newDuration = prod.map((item) => item.duration);
    setDuration(newDuration);
    setTheDuration(newDuration[showModel]);
  }, [prod, showModel]);

  return (
    <section className={`padding ${!dark && "bg-slate-50 text-slate-950"}`}>
      <div style={{ height: `${sliderHeight}px` }} className="relative">
        {prod.map((item, index) => (
          <div
            key={index}
            className={`absolute modelSlide${customClass} transition-all duration-500 ${
              showModel === index ? "opacity-100" : "opacity-0"
            }`}
            data-splide-interval={item.duration}
          >
            {item.cover.endsWith(".mp4") || item.cover.endsWith(".webm") ? (
              <video
                autoPlay
                muted
                loop
                className="bg-fullobject w-full rounded"
              >
                <source
                  src={item.cover}
                  type={`video/${item.cover.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.cover}
                alt={item.title}
                className="bg-fullobject w-full rounded"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex padding-x py-5 gap-x-8 mx-auto">
        {prod.map((item, index) => (
          <div
            onClick={() => setShowModel(index)}
            className={`px-1 transition-all cursor-pointer relative ${
              showModel === index ? "opacity-100" : "opacity-45"
            }`}
          >
            <hr
              className={`border-t-2 px-1 absolute w-full transition-all ${
                dark ? "border-slate-100" : "border-slate-900"
              } ${showModel === index ? "border-t-4" : "border-t-2"}`}
            />
            <h5 className={`mt-5 ${item.describe ? "text-xl" : "text-sm"}`}>
              {item.title}
            </h5>
            {item.describe && <p className="mt-1 text-sm">{item.describe}</p>}
            {item.acceleration && item.range && (
              <div className="pt-12 grid sm:grid-cols-2 max-w-80">
                <div>
                  <h4 className="font-semibold text-3xl">
                    {item.acceleration}
                    <span> s</span>
                  </h4>
                  <h5>0-100 km/h</h5>
                </div>
                <div>
                  <h4 className="font-semibold text-3xl">
                    {item.range}
                    <span> km</span>
                  </h4>
                  <h5>Range (EPA est.)</h5>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Free_slider;
