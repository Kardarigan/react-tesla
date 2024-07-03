import { SplideSlide } from "@splidejs/react-splide";

const Learn_Inter_Slide = ({ image, title, describe }) => {
  return (
    <SplideSlide>
      <section className="min-h-screen w-full bg-fullcenter">
        <img
          className="bg-fullobject w-full rounded h-[70vh]"
          src={image}
          alt={title}
        />
        <div className="mt-10 md:w-3/5 mx-auto">
          <h3 className="text-2xl font-smibold">{title}</h3>
          <p className="mt-5">{describe}</p>
        </div>
      </section>
    </SplideSlide>
  );
};
export default Learn_Inter_Slide;
