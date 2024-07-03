import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

const Studios = ({ prod }) => {
  const [index, setIndex] = useState(0);

  return (
    <section
      className={`heroSplide relative ${index === 1 && "text-slate-950"}`}
    >
      <Splide
        aria-label={`${prod} slider`}
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
        onActive={(slide) => setIndex(slide.index)}
      >
        {prod.slides.map((slide, index) => {
          return (
            <SplideSlide key={index}>
              <section
                className="w-screen padding h-[120vh] bg-fullcenter flex flex-col justify-end"
                style={{
                  backgroundImage: "url(" + slide.cover + ")",
                }}
              >
                <div className="mx-auto max-w-[550px]">
                  <h3 className="text-xl mb-3">{slide.title}</h3>
                  <p>{slide.describe}</p>
                </div>
              </section>
            </SplideSlide>
          );
        })}
        <div className="md:block hidden splide__progress">
          <div className="splide__progress__bar" />
        </div>
      </Splide>

      <div className="max-w-[700px] absolute top-0 padding-x md:pt-12 pt-6">
        <h2 className="title">{prod.title}</h2>
        <p className="text-sm pt-5">{prod.describe}</p>
      </div>
    </section>
  );
};

export default Studios;
