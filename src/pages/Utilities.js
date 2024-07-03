import { utilities, controlSlides } from "../constants";
import {
  En_Hero,
  Form,
  Free_slider,
  Middle,
  Middle_Image,
  Specs,
} from "../comps/Portal";

const Utilities = () => {
  return (
    <>
      <En_Hero prod={utilities} title="Utilities" get={utilities.getLink} />
      <Middle_Image
        topic="Overview"
        title={utilities.overview.title}
        describe={utilities.overview.describe}
        cover={utilities.overview.cover}
      />
      <Middle_Image
        topic="Hardware"
        title={utilities.hardware.title}
        describe={utilities.hardware.describe}
        cover={utilities.hardware.cover}
        link={utilities.learnLink}
        label="Learn More"
        numbers={utilities.hardware.numbers}
        darkNumbers
        right
      />
      <section>
        <img
          src={utilities.controlCenter}
          alt="Control-Center"
          className="bg-fullobject w-full h-[80vh]"
        />
      </section>
      <Middle
        topic="Reliability"
        title={utilities.reliability.title}
        describe={utilities.reliability.describe}
        light
      />
      <Middle
        topic="Software"
        title={utilities.software.title}
        describe={utilities.software.describe}
        learnLink={utilities.learnLink}
        light
      />
      <Free_slider prod={utilities.controlSlides} />
      <Specs
        topic="Applications"
        title={utilities.apps.title}
        describe={utilities.apps.describe}
        cover={utilities.apps.cover}
        items={utilities.apps.items}
      />
      <Middle
        topic="Case Studies"
        title={utilities.studies.title}
        describe={utilities.studies.describe}
        light
      />
      <Free_slider prod={utilities.studies.slides} id="2" />
      <Form title={utilities.formTitle} form={utilities.form} />
    </>
  );
};

export default Utilities;
