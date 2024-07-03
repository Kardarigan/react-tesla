import { Button } from "../Portal";
import Background from "../../assets/Cybertruck-Second-Hero-Desktop.jpg";

const Home_Join = () => {
  return (
    <section
      className="fullSection"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <section className="text-center padding">
        <h2>Join to the Tesla's Family</h2>
        <Button to="/" label="Choose Yours" customClass="mt-3" />
      </section>
    </section>
  );
};

export default Home_Join;
