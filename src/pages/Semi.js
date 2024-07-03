import {
  Button,
  Learn_Bgsection,
  En_Hero,
  En_Overall,
  Specs,
} from "../comps/Portal";
import { semi } from "../constants";

const Semi = () => {
  return (
    <>
      <En_Hero
        prod={semi}
        title="Semi"
        subtitle="The Future of Trucking is Electric"
        dark
      />
      <section className="min-h-[50vh] padding text-center">
        <h2 className="title">It's a Beast</h2>
        <p className="my-6">
          More powerful, more efficient and fully electric. Semi is the future
          of electric trucking.
        </p>
        <Button
          to="/communication-preferences/subscribe"
          label="Get Updates"
          outline="light"
        />
      </section>
      <Learn_Bgsection car={semi.performance} />
      <Learn_Bgsection car={semi.safety} seperate />
      <Learn_Bgsection car={semi.range} seperate />
      <Learn_Bgsection car={semi.owenership} />

      <Specs
        title={semi.specs.title}
        describe={semi.specs.describe}
        cover={semi.specs.cover}
        items={semi.specs.items}
      />

      <En_Overall
        title={semi.overall.title}
        describe={semi.overall.describe}
        link="/communication-preferences/subscribe"
        offer={semi.overall.offer}
        label="Contact Us"
      />
    </>
  );
};

export default Semi;
