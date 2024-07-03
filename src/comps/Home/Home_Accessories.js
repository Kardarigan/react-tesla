import { Button } from "../Portal";
import Background from "../../assets/Homepage-SolarRoof-Desktop-Global.jpg";

const Home_Accessories = () => {
  return (
    <section
      className="fullSection"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <div className="text-center h-3/5 flex flex-col justify-between">
        <div className="text-slate-950">
          <h2>Tesla's Life Style</h2>
          <p>
            If you'r a Big Huge Giant Fan of Tesla, You Must check the
            Accessories
          </p>
        </div>
        <div className="linkBox">
          <Button to="/" label="Explore Accessories" light />
          <Button to="/" label="Learn About" customClass="md:mt-0 mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Home_Accessories;
