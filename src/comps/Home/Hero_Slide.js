import { SplideSlide } from "@splidejs/react-splide";
import { Button } from "../Portal";

const Hero_Slide = ({
  title,
  subtitle,
  image,
  alt,
  link1,
  link1_label,
  link2,
  link2_label,
}) => {
  return (
    <SplideSlide>
      <section className="halfhalf padding-x min-h-screen padding-t">
        <div className="relative md:w-1/2 flex justify-start flex-col w-full padding-b md:pt-28 pt-10">
          <h1 className="mt-2  xl:text-4xl text-2xl">{title}</h1>
          <h2 className="mt-3 text-slate-400">{subtitle}</h2>
          <div className="mt-5 md:flex gap-5">
            <Button to={link1} label={link1_label} light />
            {link2 && (
              <Button
                to={link2}
                label={link2_label}
                customClass="md:mt-0 mt-2"
              />
            )}
          </div>
        </div>
        <div className="md:w-1/2 w-full sm:pt-28">
          <img className="bg-slate-200 rounded-lg" src={image} alt={alt} />
        </div>
      </section>
    </SplideSlide>
  );
};

export default Hero_Slide;
