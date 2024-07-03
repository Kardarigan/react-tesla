import { Splide } from "@splidejs/react-splide";
import Learn_Slide from "../Learn/Learn_Slide";
import { vehicles } from "../../../constants";
import { Link } from "react-router-dom";

const Learn_Hero = ({ car }) => {
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;

  return (
    <section className="w-full h-screen heroSplide">
      <Splide
        aria-label={`${car.model} hero slider`}
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
      >
        {carSlides.map((slide) => {
          return (
            <Learn_Slide
              key={slide.title}
              title={slide.title}
              subtitle={slide.subtitle}
              backgournd={slide.bg}
              model={car.model}
              to={car.orderLink}
            />
          );
        })}

        <div className="absolute w-full text-center top-[90%] z-10 para-sm">
          <p>{car.saving}</p>
        </div>
        <div className="md:block hidden splide__progress">
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </section>
  );
};

export default Learn_Hero;
