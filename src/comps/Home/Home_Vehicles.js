import { Link } from "react-router-dom";
import { vehicles } from "../../constants";

const Home_Vehicles = () => {
  return (
    <section className="vehicles">
      {vehicles.map((model) => {
        return (
          <Link
            to={model.learnLink}
            className="vehicles-section bg-fullcenter text-slate-100 w-full flex-fullcenter flex-col h-[45vh] min-h-[50vh]"
            style={{ backgroundImage: "url(" + model.cover + ")" }}
          >
            <div className="w-full h-full flex-fullcenter">
              <h2 className="text-3xl font-semibold">{model.model}</h2>
            </div>
            <p>{model.subtitle}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Home_Vehicles;
