import { contactFrom, tradeinForm } from "../constants";
import { Checkbox, Many_Fields } from "../comps/Portal";
import { Link } from "react-router-dom";

const Callback = () => {
  return (
    <section className="pagecenter pb-24">
      <h1 className="title text-center">Request a Call</h1>
      <form action="" className="grid gap-y-5 py-12">
        <div className="grid gap-y-3">
          <Many_Fields fields={contactFrom} />
        </div>
        <h2 className="pt-12">Product Interest</h2>
        <div className="grid gap-y-3 md:grid-cols-3 sm:grid-cols-2">
          {tradeinForm.model.map((item, index) => {
            const id = item.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={index}>
                <Checkbox label={item} id={id} />
              </div>
            );
          })}
        </div>
        <div>
          <button className="button button-sky my-5 px-24">Submit</button>
        </div>
        <p className="text-xs">
          By clicking "Submit", I authorize Tesla to contact me about this
          request via the contact information I provide. I understand calls or
          texts may use automatic or computer-assisted dialing or pre-recorded
          messages. Normal message and data rates apply. I can opt out at any
          time in the Tesla app or by{" "}
          <Link to="communication-preferences/unsubscribe" className="link">
            unsubscribing
          </Link>
          . This consent is not required to complete your request.
        </p>
      </form>
    </section>
  );
};

export default Callback;
