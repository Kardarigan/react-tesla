import { events, singUpForm, vehicles } from "../constants";
import { Link, useParams } from "react-router-dom";
import Background from "../assets/Event.avif";
import { Checkbox, Many_Fields } from "../comps/Portal";

const Event = () => {
  const { event } = useParams();
  const theEvent = events.find(
    (e) =>
      e.title.replace(/\s+/g, "-").toLowerCase() ===
      event.replace(/\s+/g, "-").toLowerCase()
  );
  return (
    <>
      <div
        className="h-96 bg-fullcenter"
        style={{ backgroundImage: "url(" + Background + ")" }}
      ></div>
      <section className="pagecenter-x pb-40">
        <Link to="/events" className="group">
          <i className="fal fa-chevron-left transition-all group-hover:translate-x-[-5px]" />{" "}
          Events
        </Link>
        <h1 className="md:text-4xl sm:text-2xl text-xl mt-2">
          {theEvent.title}
        </h1>
        <div className="flex justify-between max-md:flex-col-reverse mt-8">
          <form className="md:w-2/6 grid gap-8 max-md:mt-10">
            <h4 className="title">Sign Up</h4>
            <div className="grid gap-y-3">
              <Many_Fields fields={singUpForm} />
            </div>
            <div className="grid gap-y-3">
              <h6 className="text-sm text-slate-200">Select Interests</h6>
              {vehicles.map((item, index) => {
                return <Checkbox key={index} label={item.model} />;
              })}
            </div>
            <p className="flex">
              <Checkbox label="Get" />
              <Link to="/" className="ps-1 link">
                Tesla updates
              </Link>
            </p>
            <p className="mt-8 text-xs text-slate-200">
              div By clicking "Submit", I authorize Tesla to contact me about
              this request via the contact information I provide. I understand
              calls or texts may use automatic or computer-assisted dialing or
              pre-recorded messages. Normal message and data rates apply. I can
              opt out at any time in the Tesla app or by{" "}
              <Link
                to="/communication-preferences/unsubscribe"
                className="link"
              >
                unsubscribing
              </Link>
              . This consent is not required to complete your request.
            </p>
            <button className="button button-sky w-full" type="submit">
              Submit
            </button>
          </form>
          <div className="md:w-3/6 flex flex-col gap-y-6">
            <div>
              <h3 className="mb-2 title">Overview</h3>
              <p
                className="text-slate-200"
                dangerouslySetInnerHTML={{ __html: theEvent.overview }}
              ></p>
            </div>
            <div>
              <h3 className="mb-2 title">Schedule</h3>
              <p className="text-slate-200">{theEvent.schedule}</p>
            </div>
            <div>
              <h3 className="mb-2 title">Location</h3>
              <p className="text-slate-200">
                {theEvent.location.map((item) => {
                  return (
                    <>
                      {item}
                      <br />
                    </>
                  );
                })}
              </p>
            </div>
            <Link to="/" className="link">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
