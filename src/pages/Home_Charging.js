import { Charg_Three, En_Hero, En_Overall, Middle } from "../comps/Portal";
import { homeCharging } from "../constants";

const Home_Charging = () => {
  return (
    <>
      <En_Hero
        prod={homeCharging}
        title="Home Charging"
        customLinkLabel="Shop Now"
        get="/"
      />
      <Charg_Three thing={homeCharging.ways} />
      {homeCharging.middles.map((item, index) => {
        return (
          <section key={index} className="my-3 padding-container">
            <img
              src={item.cover}
              alt={item.title}
              className="rounded bg-fullobject"
            />
            <Middle
              topic={item.topic}
              title={item.title}
              describe={item.describe}
              learnLink={item.learnLink}
            />
          </section>
        );
      })}
      <En_Overall
        title="Order a Home Charging Product"
        orderLink="/"
        offer="Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. Learn more about Standard Connectivity and any limitations."
        label="Home Charging Support"
      />
    </>
  );
};

export default Home_Charging;
