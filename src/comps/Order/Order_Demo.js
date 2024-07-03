import { Splide, SplideSlide } from "@splidejs/react-splide";

const Order_Demo = ({ car }) => {
  return (
    <section className="bg-slate-50 fixed w-2/3 top-16 orderSlider overflow-hidden rounded-tr-xl">
      <Splide
        aria-label="Power Train"
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: true,
          pagination: false,
        }}
      >
        {car.order.demo.map((item, index) => {
          return (
            <SplideSlide>
              <img
                src={item}
                alt={index}
                className="bg-fullobject scale-125 h-[90vh]"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Order_Demo;
