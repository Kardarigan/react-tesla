import { Splide, SplideSlide } from "@splidejs/react-splide";

const Learn_Powertrain = ({ car }) => {
  const carPowerTrain = car.powerTrain;

  if (car.powerTrain) {
    return (
      <section className="sectionSplide padding text-slate-900 bg-slate-200">
        <div className="padding-x py-12">
          <h2 className="title">Electric Powertrain</h2>
          <p className="pt-5">{carPowerTrain.describe}</p>
        </div>
        <Splide
          aria-label="Power Train"
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            arrows: false,
            pagination: false,
          }}
        >
          {carPowerTrain.editions.map((model) => {
            return (
              <SplideSlide>
                <img src={model.image} alt={model.title} />
              </SplideSlide>
            );
          })}
        </Splide>

        <div className="flex padding-x py-8 gap-x-10">
          {carPowerTrain.editions.map((model) => {
            return (
              <div className="w-1/2 border-t-2 border-slate-900 pt-5">
                <h5 className="text-xl">{model.title}</h5>
                <p className="text-sm pt-5">{model.describe}</p>
                <div className="pt-12 grid sm:grid-cols-2 max-w-80">
                  <div>
                    <h4 className="font-semibold text-3xl">
                      {model.acceleration}
                      <span> s</span>
                    </h4>
                    <h5>0-100 km/h</h5>
                  </div>
                  <div>
                    <h4 className="font-semibold text-3xl">
                      {model.range}
                      <span> km</span>
                    </h4>
                    <h5>Range (EPA est.)</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Learn_Powertrain;
