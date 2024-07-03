import { SplideSlide } from "@splidejs/react-splide";
import { Button } from "../../Portal";

const Learn_Slide = ({ model, title, subtitle, backgournd, to }) => {
  return (
    <SplideSlide>
      <section
        className="fullSection padding-x shadowFromBottom"
        style={{
          backgroundImage: "url(" + backgournd + ")",
          mixBlendMode: "difference",
        }}
      >
        <div className="text-center h-3/5 flex flex-col justify-between">
          <div className="mix-blend-difference">
            <h3 className="text-xl">{title}</h3>
            <h1>{model}</h1>
            <p>{subtitle}</p>
          </div>
          <Button to={to} label="Order Now" />
        </div>
      </section>
    </SplideSlide>
  );
};

export default Learn_Slide;
