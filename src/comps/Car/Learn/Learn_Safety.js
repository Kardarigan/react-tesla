import { Button } from "../../Portal";

const Learn_Safety = ({ car }) => {
  const carSafe = car.safety;
  const haveDarkBg = car.model == "Model 3" || car.model == "Model Y";

  return (
    <section
      className={`min-h-screen padding-y overflow-hidden ${
        haveDarkBg ? "text-slate-50 bg-slate-950" : "text-slate-950 bg-slate-50"
      }`}
    >
      <div className="relative safemark">
        <img src={carSafe.cover} alt={carSafe.title} />
        {carSafe.marks.map((item) => {
          return (
            <div className={`safemark ${!haveDarkBg && "safemark-dark"}`}>
              <span className={!haveDarkBg && "text-slate-950"}>{item}</span>
            </div>
          );
        })}
      </div>
      <div className="md:px-48 px-14 pt-24">
        <h2 className="title">{carSafe.title}</h2>
        <p className="py-7">{carSafe.describe}</p>
        <Button
          label="Safety Overview"
          to="/"
          outline={haveDarkBg ? "light" : "dark"}
        />
      </div>
    </section>
  );
};

export default Learn_Safety;
