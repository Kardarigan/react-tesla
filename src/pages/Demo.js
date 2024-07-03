import { Checkbox, Field, Many_Fields } from "../comps/Portal";
import { contactFrom, vehicles } from "../constants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Demo = () => {
  const [showModel, setShowModel] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowModel((showModel) => (showModel + 1) % vehicles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const demoButton = Array.from(
    document.getElementsByClassName("demoDriveButton")
  );

  demoButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      setShowModel(index);
    });
  });

  return (
    <section className="pagecenter pb-32">
      <h1 className="title">Schedule a Demo Drive</h1>
      <p className="text-xs my-3">Demo Drive a Tesla at a store near you.</p>
      <div className="flex max-md:flex-col-reverse gap-5 mt-12">
        <div className="md:w-4/12 grid max-md:grid-cols-6 gap-2">
          {vehicles.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setShowModel(index)}
                className={`demoDriveButton rounded border border-slate-200 transition-all ${
                  showModel === index && "bg-slate-200 text-slate-950"
                } text-xs py-3 max-md:min-h-[100px] flex-fullcenter`}
              >
                <h3 className="max-md:rotate-90 max-md:h-3 text-nowrap ">
                  {item.model}
                </h3>
              </button>
            );
          })}
        </div>
        <div className="md:w-8/12 bg-slate-50 rounded flex-fullcenter relative min-h-[317px]">
          {vehicles.map((item, index) => {
            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ${
                  showModel === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={item.trsModel} alt="Transparent Model" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-24">
        <h2 className="title">Find Time and Location</h2>
        <p className="my-6">
          Input your postal code to search for Tesla showrooms and schedule a
          Test Drive
        </p>
        <div className="max-w-[320px]">
          <Field
            icon="fa-magnifying-glass"
            id="postalCode"
            placeholder="Postal Code"
          />
        </div>
      </div>

      <div className="mt-24">
        <h2 className="title">Contact Information</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <Many_Fields fields={contactFrom} />
        </div>
      </div>
      <p className="flex my-10">
        <Checkbox label="Get" />
        <Link to="/" className="ms-1 link">
          Updates
        </Link>
      </p>
      <p className="text-xs">
        By clicking "Schedule Demo Drive", I authorize Tesla to contact me about
        this request as well as with more information about Tesla products,
        services and regional events via the contact information I provide. I
        understand calls or texts may use automatic or computer-assisted dialing
        or pre-recorded messages. Normal message and data rates apply. I can opt
        out at any time in the Tesla app or by{" "}
        <Link to="/communication-preferences/unsubscribe" className="link">
          unsubscribing
        </Link>
        . This is not required for purchase.
      </p>
      <button type="submit" className="button button-sky mt-12">
        Schedule Demo Drive
      </button>
    </section>
  );
};

export default Demo;
