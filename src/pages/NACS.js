import {
  En_Hero,
  En_Overall,
  Full_Middle,
  Middle,
  Middle_Image,
} from "../comps/Portal";
import { chargingForAll } from "../constants";
import map from "../assets/NACS/NACS-Network-Desktop.avif";
import evs from "../assets/NACS/NACS-End-of-Page-Desktop.avif";
import Half_Slider from "../comps/Charg/Half_Slider";

const NACS = () => {
  return (
    <>
      <En_Hero
        prod={chargingForAll}
        title="Charging for All"
        customLinkLabel="Find Us"
        get="/"
      />
      <section className="padding text-center pagecenter">
        <h2 className="title">Expanding Charging Access</h2>
        <p className="para mt-5">
          To accelerate the world’s transition to sustainable energy, we are
          making it as easy as possible for drivers to own and charge an
          electric vehicle (EV). That’s why we’re opening our fast-charging
          network to allow more EV drivers to charge at over 15,000
          Supercharging stalls across North America. And with approximately one
          new stall opening every hour, we’re just getting started.{" "}
        </p>
      </section>
      <Full_Middle
        title={chargingForAll.access.title}
        cover={chargingForAll.access.cover}
        describe={chargingForAll.access.describe}
      />
      <Middle_Image
        title={chargingForAll.ready.title}
        cover={chargingForAll.ready.cover}
        describe={chargingForAll.ready.describe}
        label="Get Powerwall"
      />
      <section className="min-h-screen">
        <img src={map} alt="Map of Locations" className="bg-fullobject h-4/5" />
        <Middle
          title="Access the Largest, Most Reliable Fast-Charging Network"
          describe="Increasing access to charging is a pillar of Tesla’s mission. Since 2012, we’ve been building the best charging experience in the world, achieving a 99.95% uptime. We engineer, manufacture and install Superchargers where drivers need them most. Superchargers were always intended to be made available to other EV drivers. Opening our charging network is the right thing to do and helps us accelerate the transition to sustainable energy."
          light
        />
      </section>
      <section
        style={{ backgroundImage: "url(" + evs + ")" }}
        className="bg-fullcenter h-screen"
      />
      <Half_Slider thing={chargingForAll.mobile} />
      <En_Overall
        title="Go Anywhere"
        describe="If you do not yet have access, your automaker may be joining our network soon. For more information, review our FAQs page or check with your automaker."
        link="/"
        label="Find Us"
      />
    </>
  );
};

export default NACS;
