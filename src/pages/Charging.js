import {
  Button,
  Charg_Three,
  En_Hero,
  En_Overall,
  Free_slider,
  Full_Middle,
  Middle,
} from "../comps/Portal";
import { charging } from "../constants";
import ModelY_Charging from "../assets/Charging/Charging-Convenient-Lifestyle-Desktop.avif";
import Less_Charging from "../assets/Charging/Charging-Less-Than-Gas-Desktop-NA-JP-KR.avif";
import Battry from "../assets/Charging/Charging-Battery-Desktop.avif";
import Charging_End from "../assets/Charging/Charging-End-of-Page-Desktop.avif";

const Charging = () => {
  return (
    <>
      <En_Hero
        prod={charging}
        title="Charging"
        subtitle="Go Anywhere, Charge Everywhere"
        customLinkLabel="Demo Drive"
        get="/demo"
      />
      <Charg_Three thing={charging.plugin} />
      <section className="padding-container">
        <img
          src={ModelY_Charging}
          alt="Start Your Day Charged"
          className="bg-fullobject rounded"
        />
      </section>
      <Middle
        title="Start Your Day Charged"
        describe="Charge at home and wake up to a charged battery every day. Our charging options are designed for every property."
        learnLink="/"
      />
      <Full_Middle
        title="Freedom to Go Anywhere"
        cover={charging.freedomCover}
        describe="Recharge with the world’s largest fast-charging network. Our Supercharger network is expansive, ultra-fast and reliable."
        links={charging.freedomLinks}
        right
        light
      />
      <div className="padding-container padding-y">
        <h2 className="title mb-5">Just Enter Your Destination</h2>
        <p>
          Your Tesla automatically finds the best route and suggests charging
          stations along the way.
        </p>
      </div>
      <Free_slider prod={charging.destination} />
      <section
        style={{ backgroundImage: "url(" + Less_Charging + ")" }}
        className="bg-fullcenter h-screen"
      />
      <section className="padding-y padding-container max-w-[1000px]">
        <h2 className="title">Skip the Gas Station</h2>
        <p className="para mt-3">
          Reduce your cost per kilometer and never pay for gas again. Charging
          with electricity typically costs less than paying for gas at your
          local station.
        </p>
        <Button
          to="/"
          label="See Incentives"
          customClass="mt-8"
          outline="light"
        />
      </section>
      <section className="padding-y padding-container flex md:justify-between max-md:flex-col mx-auto">
        <img
          src={Battry}
          alt="
No Required Battery Maintenance"
          className="md:w-1/2 bg-fullobject rounded"
        />
        <div className="md:w-1/2 md:mt-24 mt-5 padding-x">
          <h2 className="title">No Required Battery Maintenance</h2>
          <p className="para mt-2">
            Our batteries don’t require any regular maintenance and are designed
            to outlast your vehicle. Just in case, every new Tesla vehicle
            purchase includes an eight-year battery warranty.*
          </p>
          <p className="text-xs text-slate-300 mt-10">
            *Subject to a mileage cap.
          </p>
        </div>
      </section>
      <section
        style={{ backgroundImage: "url(" + Charging_End + ")" }}
        className="bg-fullcenter h-screen"
      />
      <En_Overall
        title="Go Anywhere"
        describe="Schedule a demo drive and learn how to charge at home or on the road."
        link="/demo"
        label="Demo Drive"
      />
    </>
  );
};

export default Charging;
