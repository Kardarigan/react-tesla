import {
  En_Hero,
  En_Overall,
  Free_slider,
  Middle,
  Middle_Image,
} from "../comps/Portal";
import { supercharging } from "../constants";
import Supercharger_Background from "../assets/Supercharging/Supercharger-Savings-Hero-Desktop-NA.avif";

const Supercharging = () => {
  return (
    <>
      <En_Hero prod={supercharging} title="Supercharger" />
      <Middle_Image
        topic="Locations"
        title={supercharging.locations.title}
        cover={supercharging.locations.cover}
        describe={supercharging.locations.describe}
        link="/"
        label="Find Us"
      />
      <Middle
        topic="Experience"
        title="Freedom to Travel"
        describe="To use a Supercharger, simply plug in and charge automatically. With the Tesla app, you can view Supercharger stall availability, monitor your charge status or get notified when you’re ready to go."
        light
      />
      <Free_slider prod={supercharging.freedom} />
      <Middle_Image
        topic="Trip Planner"
        title={supercharging.speed.title}
        cover={supercharging.speed.cover}
        describe={supercharging.speed.describe}
        numbers={supercharging.speed.numbers}
        right
      />
      <Middle_Image
        topic="Trip Planner"
        title={supercharging.trip.title}
        cover={supercharging.trip.cover}
        describe={supercharging.trip.describe}
        link="/"
        label="Find My Route"
      />
      <section
        style={{ backgroundImage: "url(" + Supercharger_Background + ")" }}
        className="bg-fullcenter h-[70vh]"
      />
      <Middle
        topic="Savings"
        title="Cheaper Than Gas"
        describe="The goal of the Supercharger network is to enable freedom of travel for Tesla owners at a fraction of the cost of gasoline. Reduce your cost per kilometer and never pay for gas again."
        link="/"
        label="Learn More"
        light
      />
      <En_Overall
        title="Host a Supercharger"
        describe="Apply to install a Supercharger at your business property"
        link="/"
        label="Apply"
        offer="Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. Learn more about Standard Connectivity and any limitations."
      />
    </>
  );
};

export default Supercharging;
