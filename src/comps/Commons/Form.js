import React from "react";
import { Link } from "react-router-dom";
import Many_Fields from "./Many_Fields";

const Form = ({ title = null, describe = null, form }) => {
  return (
    <section className="padding-x padding-t pb-32">
      <div className="pagecenter-x flex md:gap-x-24 max-md:flex-col">
        <div className="md:w-3/5 pb-3">
          <h2 className="title">{title}</h2>
          {describe && <p className="mt-4">{describe}</p>}
        </div>
        <form className="md:w-2/5">
          <div className="grid gap-y-3">
            <Many_Fields fields={form} />
          </div>
          <button className="button button-sky w-full mt-12" type="submit">
            Submit
          </button>
          <div className="mt-8 text-center px-5 text-xs text-slate-200">
            <p>
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
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
