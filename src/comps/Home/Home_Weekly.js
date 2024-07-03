import { Button } from "../Portal";

const Home_Weekly = () => {
  return (
    <section className="max-h-screen padding">
      <div className="w-full">
        <div className="flex md:flex-row flex-col justify-center sm:gap-12 max-container bg-slate-200 padding-x rounded">
          <div className="relative md:w-3/5 flex justify-start flex-col w-full py-5">
            <h1 className="mt-2 text-slate-950  xl:text-4xl text-2xl">
              Always Be Up To Date
            </h1>
            <h2 className="mt-3 text-slate-600">
              Join to out Weekly Offers and Events Service. This will Help you
              be Aware of all Things that will be Happened i Tesla's Universe
            </h2>
            <Button to="/" label="Last Events" customClass="mt-10" />
            <div className="mt-5 md:flex gap-5"></div>
          </div>
          <form className="md:w-2/5 w-full flex-fullcenter md:py-5 pb-5">
            <div className="flex justify-between flex-col w-full min-h-[100px] rounded-lg p-4 bg-slate-800">
              <div className="flex items-center text-slate-200">
                <i className="fa-light fa-envelope-circle text-4xl pe-3" />
                <label htmlFor="weeklyMail" className="text-sm max-w-[260px] ">
                  Enter your Email Address to Recieve them every Weeks :
                </label>
              </div>
              <input
                type="text"
                id="weeklyMail"
                className="field mt-12"
                placeholder="example@email.com"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home_Weekly;
