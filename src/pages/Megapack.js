import { megapack } from "../constants";
import {
  En_Hero,
  En_Overall,
  Full_Middle,
  Padding_Middle,
  Specs,
  Studios,
} from "../comps/Portal";

const Megapack = () => {
  return (
    <>
      <En_Hero
        prod={megapack}
        title="Megapack"
        subtitle="Massive Energy Storage"
        get={megapack.getLink}
        dark
      />
      <Padding_Middle
        title={megapack.cleaner.title}
        cover={megapack.cleaner.cover}
        describe={megapack.cleaner.describe}
      />
      <Full_Middle
        title={megapack.resiliency.title}
        describe={megapack.resiliency.describe}
        cover={megapack.resiliency.cover}
        center
      />
      <Padding_Middle
        title={megapack.install.title}
        cover={megapack.install.cover}
        describe={megapack.install.describe}
        right
      />
      <Full_Middle
        title={megapack.integrated.title}
        describe={megapack.integrated.describe}
        cover={megapack.integrated.cover}
      />
      <Padding_Middle
        title={megapack.design.title}
        cover={megapack.design.cover}
        describe={megapack.design.describe}
      />
      <Studios prod={megapack.studies} />
      <Specs
        title={megapack.apps.title}
        describe={megapack.apps.describe}
        cover={megapack.apps.cover}
        items={megapack.apps.items}
      />
      <En_Overall
        title={megapack.overall.title}
        describe={megapack.overall.describe}
        link={megapack.overall.getLink}
        label="Contact Us"
      />
    </>
  );
};

export default Megapack;
