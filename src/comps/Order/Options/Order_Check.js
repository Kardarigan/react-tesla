import { Checkbox } from "../../Portal";

const Order_Check = ({ thing }) => {
  return (
    <section className="grid gap-y-10">
      <h2 className="title-sm">{thing.title}</h2>
      {thing.warn && (
        <div className="flex-fullcenter">
          <i className="fa-solid fa-circle-info text-blue-500 me-1" />
          <p className="para-sm text-slate-400">{thing.warn}</p>
        </div>
      )}
      <div className="grid gap-y-5">
        {thing.checkes.map((item, index) => {
          const id = item.label.replace(/\s+/g, "-").toLowerCase();
          return (
            <div className="flex-seperate w-full">
              <Checkbox label={item.label} id={id} />
              <span className="para-sm">${item.price}</span>
            </div>
          );
        })}
      </div>
      <button className="button button-dark mx-auto">Learn More</button>
    </section>
  );
};

export default Order_Check;
