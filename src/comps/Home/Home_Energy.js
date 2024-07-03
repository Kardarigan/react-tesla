import { Button } from "../Portal";
import Background from "../../assets/Homepage-SolarPanels-01-Desktop.jpg";

const Home_Energy = () => {
  return (
    <section
      className="fullSection"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <div className="text-center h-3/5 flex flex-col justify-between">
        <div>
          <h2>Power is Yours</h2>
          <p>
            Produce, Provide and Use Energy Completelly in your very own Home
            Built
          </p>
        </div>
        <div className="linkBox">
          <Button to="/" label="Explore Products" light />
          <Button to="/" label="Learn About" customClass="md:mt-0 mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Home_Energy;
