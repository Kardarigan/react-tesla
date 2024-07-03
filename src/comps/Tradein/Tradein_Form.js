import React from "react";
import { Link } from "react-router-dom";
import { tradeinForm } from "../../constants";
import { Checkbox, Many_Fields } from "../Portal";

const Tradein_Form = () => {
  return (
    <section className="pagecenter pb-32">
      <p>
        <i className="fal fa-chevron-left" />
        <Link to="/" className="link ms-2">
          Back
        </Link>
      </p>
      <form action="">
        <h2 className="title mt-8">Vehicle Details</h2>
        <div className="mt-3 grid sm:grid-cols-2 gap-6">
          <Many_Fields fields={tradeinForm.vahicle} />
        </div>
        <h2 className="title mt-8">Contact Information</h2>
        <div className="mt-3 grid sm:grid-cols-2 gap-6">
          <Many_Fields fields={tradeinForm.contact} />
        </div>
        <h2 className="mt-8 mb-4">Product Interests</h2>
        <div className="mt-3 flex flex-col gap-y-4">
          {tradeinForm.model.map((item, index) => {
            const id = item.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={index}>
                <Checkbox label={item} id={id} />
              </div>
            );
          })}
        </div>
        <p className="flex mt-8">
          <Checkbox label="Get" />
          <Link to="/" className="link ms-1">
            Tesla Updates
          </Link>
        </p>
        <p className="text-xs mt-6">
          By clicking 'Next', I authorize Tesla to contact me, including to
          follow up, about this request via the contact information I provide. I
          understand calls or texts may use automatic or computer-assisted
          dialing or pre-recorded messages. Normal message and data rates apply.
          I can opt out at any time in the Tesla app or by{" "}
          <Link to="/communication-preferences/unsubscribe" className="link">
            unsubscribing
          </Link>
          .
        </p>
        <button type="submit" className="button button-sky mt-6 px-24">
          Next
        </button>
      </form>
    </section>
  );
};

export default Tradein_Form;
