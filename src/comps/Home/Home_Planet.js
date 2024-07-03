import Earth from "../../assets/Mars.webp";

const Home_Planet = () => {
  return (
    <section className="max-h-screen padding">
      <div className="w-full">
        <div className="halfhalf">
          <div className="relative md:w-3/5 flex justify-start flex-col w-full padding-b pt-10">
            <h1 className="mt-2  xl:text-4xl text-2xl">
              Ride with Welcom in Mars, And Other Planet...
            </h1>
            <h2 className="mt-3 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              assumenda velit minima a ratione rerum, at dignissimos, minus
              magni mollitia nemo voluptate asperiores id, deserunt reiciendis
              beatae.
            </h2>
            <div className="mt-5 md:flex gap-5"></div>
          </div>
          <div className="md:w-2/5 w-full flex-fullcenter">
            <img className="mars  max-w-[300px]" src={Earth} alt="Our Planet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Planet;
