import { Link } from "react-router-dom";
import {
  Order_Check,
  Order_Interior,
  Order_Paint,
  Order_Self,
  Order_Wheel,
  Select_Price,
  Outlaw,
} from "../Portal";
import { useState } from "react";
import { registrationState, tempModelSpecs } from "../../constants";

const Order_Options = ({ car }) => {
  const [postOpen, setPostOpen] = useState(false);
  var url = window.location.href;
  var lastPart = url.substr(url.lastIndexOf("#") + 1);

  return (
    <div className="px-10">
      {lastPart === "payment" ? (
        <div className="grid gap-y-8 text-start pb-12">
          <div className="text-start">
            <Link className="navitem ">
              <i className="fal fa-chevron-left me-2" />
              Edit Design
            </Link>
          </div>

          <h2 className="title-lg text-center">Your {car.model}</h2>
          <label htmlFor="registrationState" className="label">
            Registration Province
          </label>
          <select className="field" id="registrationState">
            {registrationState.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <ul className="grid gap-y-3 text-start para">
            {tempModelSpecs.map((item, index) => {
              return (
                <li className="text-slate-300" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
          <div>
            <button className="link para">
              30-Day Premium Connectivity Trial
            </button>
          </div>
          <ul className="grid gap-y-3 border-y border-slate-600 para py-5">
            {car.order.price.map((item, index) => {
              return (
                <li className="flex-seperate">
                  <span className="text-slate-100">{item.label}</span>
                  <span>${item.cost}</span>
                </li>
              );
            })}
          </ul>
          <div>
            <h5 className="w-full flex-seperate para">
              <span>Purchase Price</span>
              <span>${car.order.purchasePrice}</span>
            </h5>
            <p className="para-sm text-slate-300 text-justify mt-1">
              Taxes and fees calculated using the Purchase Price and current
              taxes and fees. Additional taxes and fees may apply.
            </p>
          </div>
          {car.order.iZEV && (
            <div className="flex gap-x-3 px-5">
              <i class="fa-light fa-check text-green-400" />
              <p className="text-justify para-sm">
                Your design may qualify for a $5,000 iZEV incentive for eligible
                buyers. Incentives are deducted after taxes and fees.
                <Link to="/" className="link ms-2">
                  Learn More
                </Link>
              </p>
            </div>
          )}
          <div>
            <h6 className="w-full flex-seperate para">
              <span>Due Today</span>
              <span>$250</span>
            </h6>
            <p className="para-sm text-slate-300">
              Non-refundable Order Deposit
            </p>
          </div>
          <button className="button button-sky">Order with Card</button>
        </div>
      ) : (
        <div className="py-5 grid gap-y-32 text-center">
          <section className="grid gap-y-3">
            <h2 className="title-lg">{car.model}</h2>
            <p className="para  text-slate-300">
              Estimated Delivery: {car.order.estimated}
            </p>
            <div className="flex-fullcenter">
              <i className="fa-solid fa-circle-info text-blue-500 me-1" />
              <button
                className="link para text-slate-200"
                onClick={() => setPostOpen(true)}
              >
                Enter Postal Code
              </button>
              <Outlaw
                Outlaw
                title="Enter Your Postal Code"
                isOpen={postOpen}
                onClose={() => setPostOpen(false)}
              >
                <form className="mt-10">
                  <input type="text" className="field" />
                  <button type="submit" className="button button-sky mt-12">
                    Confirm
                  </button>
                </form>
              </Outlaw>
            </div>
            <div className=" grid grid-cols-3">
              {car.numbers.map((item, index) => {
                if (index != 2) {
                  return (
                    <div>
                      <h3 className="md:text-lg text-base">
                        {item.value}
                        <span className="para-sm">{item.unit}</span>
                      </h3>
                      <p className="para-sm">{item.key}</p>
                    </div>
                  );
                }
              })}
            </div>
            <Select_Price car={car.order} />
            <p className="para-sm my-5">
              * Costs above include potential incentives and gas savings of
              $10,100.
            </p>
            <button className="button button-dark">Feature Details</button>
          </section>
          <Order_Paint car={car.order} />
          <Order_Wheel car={car.order} />
          <Order_Interior car={car.order} />
          <Order_Self />
          <Order_Check thing={car.order.charging} />
          <Order_Check thing={car.order.accessories} />
          <section className="grid gap-y-5">
            <h2 className="title-sm">Order Your {car.model}</h2>
            <p className="para-sm text-slate-300">
              Estimated Delivery: {car.order.estimated}
            </p>
            {car.order.iZEV && (
              <div className="flex gap-x-3 px-5">
                <i class="fa-light fa-check text-green-400" />
                <p className="text-justify para-sm">
                  Your design may qualify for a $5,000 iZEV incentive for
                  eligible buyers. Incentives are deducted after taxes and fees.
                  <Link to="/" className="link ms-2">
                    Learn More
                  </Link>
                </p>
              </div>
            )}
            <Link className="button button-sky" to="#payment">
              Continue
            </Link>
          </section>
        </div>
      )}
    </div>
  );
};

export default Order_Options;
