import { commercial } from "../constants";
import {
  En_Hero,
  Form,
  Free_slider,
  Middle,
  Middle_Image,
  Specs,
} from "../comps/Portal";

const Commercial = () => {
  return (
    <>
      <En_Hero
        prod={commercial}
        title="Commercial Energy"
        get={commercial.getLink}
      />
      <Middle_Image
        topic="Storage"
        title={commercial.storage.title}
        describe={commercial.storage.describe}
        cover={commercial.storage.cover}
        link="/callback"
        label="Contact"
      />
      <section>
        <img
          src={commercial.controlCenter}
          alt="Control-Center"
          className="bg-fullobject w-full h-[80vh]"
        />
      </section>
      <Middle
        topic="Reliability"
        title={commercial.reliability.title}
        describe={commercial.reliability.describe}
        light
      />
      <Middle
        topic="Software"
        title={commercial.software.title}
        describe={commercial.software.describe}
        contact
        light
      />
      <Free_slider prod={commercial.controlSlides} />
      <Specs
        topic="Applications"
        title={commercial.apps.title}
        describe={commercial.apps.describe}
        cover={commercial.apps.cover}
        items={commercial.apps.items}
      />
      <Middle
        topic="Case Studies"
        title={commercial.studies.title}
        describe={commercial.studies.describe}
        light
      />
      <Free_slider prod={commercial.studies.slides} id="2" />
      <Form title={commercial.formTitle} form={commercial.form} />
    </>
  );
};

export default Commercial;
