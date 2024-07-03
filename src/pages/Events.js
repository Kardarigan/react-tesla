import { Link } from "react-router-dom";
import Background from "../assets/Events.avif";
import { Field } from "../comps/Portal";
import { events } from "../constants";

const Events = () => {
  return (
    <>
      <div
        className="h-96 bg-fullcenter md:text-4xl text-2xl flex items-center ps-[6vw]"
        style={{ backgroundImage: "url(" + Background + ")" }}
      >
        <h1>Events</h1>
      </div>
      <section className="pagecenter-x flex justify-between max-md:flex-col-reverse pb-40">
        <div className="md:w-7/12">
          <h2 className="title mb-2 max-md:hidden">Near Chicago, Illinois</h2>
          <p className="text-sm text-slate-200 mt-5">
            Can't find an event you're looking for?{" "}
            <Link to="/communication-preferences/subscribe" className="link">
              Receive notifications for future events.
            </Link>
          </p>
          <div className="mt-24 grid gap-y-12">
            {events ? (
              events.map((item, index) => {
                return (
                  <div key={index}>
                    <Link to={item.link} className="group">
                      <h3 className="title-sm">
                        {item.title}
                        <i className="fal fa-chevron-right text-sm ps-3 transition-all group-hover:ps-4" />
                      </h3>
                    </Link>
                    <div className="text-xs">
                      <p className="text-slate-200 pt-1 pb-5">{item.date}</p>
                      <p className="text-sm text-slate-300">
                        {item.location}
                        <br />
                        <br />
                        {item.preview}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>There is no events around you.</h2>
            )}
          </div>
        </div>
        <div className="md:w-4/12">
          <h2 className="mb-2 md:hidden">Near Chicago, Illinois</h2>
          <Field
            icon="fa-magnifying-glass"
            id="location"
            placeholder="Search by location"
          />
        </div>
      </section>
    </>
  );
};

export default Events;
