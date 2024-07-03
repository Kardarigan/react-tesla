import { Splide } from "@splidejs/react-splide";
import { Hero_Slide } from "../Portal";
import { heroSlides } from "../../constants";

const Hero = () => {
  return (
    <section className="min-h-screen flex-fullcenter">
      <div className="w-full heroSplide">
        <Splide
          aria-label="Tesla Hero Slider"
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            arrows: false,
          }}
        >
          {heroSlides.map((slide) => {
            return (
              <Hero_Slide
                title={slide.title}
                subtitle={slide.subtitle}
                image={slide.image}
                alt={slide.alt}
                link1={slide.link1}
                link1_label={slide.link1_label}
                link2={slide.link2}
                link2_label={slide.link2_label}
              />
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Hero;
