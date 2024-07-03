import { Link } from "react-router-dom";
import Cover from "../../assets/tradein.jpg";

const Tradein = () => {
  return (
    <section className="max-w-[800px] mx-auto pb-52 min-h-screen">
      <div className="flex max-md:flex-col-reverse md:pt-40 gap-10">
        <div className="max-md:padding-x">
          <h1 className="title">Get Trade-In Estimate</h1>
          <p>
            Trade-in your current vehicle for a new Tesla. Enter your VIN to
            receive an estimate for your trade-in.
          </p>
          <form className="mt-12">
            <label htmlFor="vin">Enter VIN</label>
            <br />
            <input id="vin" type="text" className="field" />
            <p className="mt-5 mb-2">
              <Link to="/" className="link">
                Where's my VIN?
              </Link>
            </p>
            <button type="submit" className="button button-sky w-full">
              Next
            </button>
          </form>
        </div>
        <div>
          <img src={Cover} alt="Trade-in" className="rounded" />
        </div>
      </div>
      <p className="text-center mt-12 text-xs text-slate-300">
        You Wanna Use the Form Instead?{" "}
        <Link to="/tradein/form" className="text-slate-50 link">
          Click Here
        </Link>
        .
      </p>
    </section>
  );
};

export default Tradein;
