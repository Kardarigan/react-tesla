import { energyHero } from "../constants";
import { Link } from "react-router-dom";

const Energy = () => {
  return (
    <section className="h-screen energy group">
      <div className="flex h-full">
        {energyHero.map((item) => {
          return (
            <Link
              to={item.link}
              className="md:w-1/2 h-full relative transition-all md:hover:w-2/3"
            >
              <h1 className="size-full md:text-4xl sm:text-xl absolute transition-all flex-fullcenter opacity-0 hover:bg-slate-900 hover:opacity-100 hover:bg-opacity-55">
                {item.title}
              </h1>
              <img
                src={item.cover}
                alt={item.title}
                className="bg-fullobject h-full"
              />
            </Link>
          );
        })}

        <div className="absolute top-[48vh] text-center displayTrans group-hover:invisible group-hover:opacity-0 flex-fullcenter w-full">
          <h4 className="title">Choose one Product</h4>
        </div>
      </div>
    </section>
  );
};

export default Energy;
