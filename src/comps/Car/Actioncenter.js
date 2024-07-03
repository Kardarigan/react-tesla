import { useParams } from "react-router-dom";
import { vehicles } from "../../constants";
import { Button } from "../Portal";
import { useEffect, useRef, useState } from "react";

const Actioncenter = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);
  const [hideButton, setHideButton] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        setHideButton(true);
      } else {
        setHideButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button className="z-10 fixed sm:block hidden right-[2vw] bottom-[2vh] size-[50px] transition-all lg:text-sm text-center font-semibold backdrop-blur-sm text-[6px] rounded text-slate-200 bg-slate-700 bg-opacity-70 hover:bg-opacity-80">
        <i className="fal fa-comment-alt-dots text-lg" />
      </button>
      <div className="sm:hidden z-10 actioncenter flex justify-between gap-x-1 fixed w-full px-4 bottom-[2vh]">
        <button
          className={`w-[54px] h-[41px] transition-all lg:text-sm text-center font-semibold backdrop-blur-sm text-[6px] rounded inline-block text-slate-200 bg-slate-700 bg-opacity-70 hover:bg-opacity-80`}
        >
          <i className="fal fa-comment-alt-dots text-lg" />
        </button>
        <Button
          ref={buttonRef}
          label={`Custom Order ${car.model}`}
          to={car.orderLink}
          customClass={`py-3 h-[41px] transition-all ${
            hideButton ? "slightHidden" : ""
          }`}
        />
        <button
          className={`w-[54px] h-[41px] transition-all lg:text-sm text-center font-semibold backdrop-blur-sm text-[12px] rounded inline-block text-slate-200 bg-slate-700 bg-opacity-70 hover:bg-opacity-80`}
        >
          <i className="fal fa-chevron-up text-lg" />
        </button>
      </div>
    </>
  );
};

export default Actioncenter;
