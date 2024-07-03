import { vehicles } from "../../constants";
import { Button } from "../Portal";

const Ow_Cars = () => {
  return (
    <>
      {vehicles.map((car, index) => {
        return (
          <section
            className="fullSection"
            key={index}
            style={{ backgroundImage: " url(" + car.cover + ")" }}
          >
            <div className="text-center h-3/5 flex flex-col justify-between">
              <div className={index === 4 && "text-slate-950"}>
                <h2>{car.model}</h2>
                <p>{car.subtitle}</p>
              </div>
              <div className="linkBox">
                <Button
                  to={car.learnLink}
                  label="Learn About"
                  outline={index === 4 ? "dark" : "light"}
                />
                <Button
                  to={car.orderLink}
                  label="Order Now"
                  customClass="md:mt-0 mt-2"
                />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Ow_Cars;
