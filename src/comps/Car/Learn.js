import { useParams } from "react-router-dom";
import { vehicles, vision360 } from "../../constants";
import {
  Learn_Amenities,
  Learn_Exterior,
  Learn_Hero,
  Learn_Inter,
  Learn_Intertop,
  Middle,
  Learn_Speed,
  Middle_Image,
  Learn_Overall,
  Actioncenter,
  Learn_Safety,
  Three,
  Learn_Bgsection,
  Free_slider,
} from "../Portal";
import V360 from "../../assets/Autopilot/360.jpg";

const Learn = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);
  const overallLight =
    car.model === "Model S" || car.model === "Model X" ? true : false;

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div id="learn">
      <Actioncenter />
      <Learn_Hero car={car} />
      <Learn_Speed car={car} />
      {car.model === "Roadster" ? (
        <>
          {car.model === "Roadster" && (
            <>
              <section className="min-h-screen padding">
                <video autoPlay muted loop className="bg-fullobject rounded">
                  <source
                    src={car.demoVideo}
                    type={`video/${car.demoVideo.split(".").pop()}`}
                  />
                  Your browser does not support the video tag.
                </video>
              </section>
              <Learn_Bgsection car={car.design} />
              <Learn_Bgsection car={car.inter} seperate />
              <Learn_Bgsection car={car.roof} />
            </>
          )}
        </>
      ) : (
        <>
          <Learn_Intertop car={car} />
          <Learn_Inter car={car} />
          <Learn_Amenities car={car} />
          <Middle
            title={car.plaid.title}
            topic={car.plaid.topic}
            describe={car.plaid.describe}
            orderLink={car.orderLink}
            light
          />
          <Free_slider prod={car.powerTrain.editions} />
          {car.utility && (
            <Middle_Image
              topic="Utility"
              title={car.utility.title}
              cover={car.utility.cover}
              describe={car.utility.describe}
              numbers={car.utility.numbers}
              link={car.orderLink}
              label="Order Now"
              link2nd={car.inventoryLink}
              label2nd="View Inventroy"
            />
          )}
          <section
            className="h-[60vh] bg-fullcenter"
            style={{
              backgroundImage: "url(" + car.designTop + ")",
            }}
          ></section>
          <Middle
            title={car.plaid.title}
            topic={car.plaid.topic}
            describe={car.plaid.describe}
            orderLink={car.orderLink}
            inventoryLink={car.inventoryLink}
          />
          <Learn_Exterior car={car} />
          <Middle_Image
            topic="Range"
            title={car.range.title}
            cover={car.range.cover}
            describe={car.range.describe}
            numbers={car.range.numbers}
            link={car.orderLink}
            label="Order Now"
            link2nd={car.inventoryLink}
            label2nd="View Inventroy"
            right
          />
          <Middle
            title={car.autoPilot.title}
            topic={car.autoPilot.topic}
            describe={car.autoPilot.describe}
            orderLink={car.orderLink}
            inventoryLink={car.inventoryLink}
            light
          />
          <Free_slider prod={car.autoPilot.features.items} />
          <Learn_Safety car={car} />
        </>
      )}

      <Three items={vision360} cover={V360} />
      <Learn_Overall
        title={car.model}
        message={car.footerMessage}
        image={car.overal}
        orderLink={car.orderLink}
        light={overallLight}
      />
    </div>
  );
};

export default Learn;
