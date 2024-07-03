const Learn_Intertop = ({ car }) => {
  return (
    <section
      className="h-screen bg-fullcenter text-center"
      style={{ backgroundImage: "url(" + car.topImage + ")" }}
    >
      <div className="w-full h-1/3 py-8 shadowFromTop">
        <h2 className="md:text-6xl text-4xl">Future of the Interior</h2>
        <p className="mt-5">Comfortable, Modern, Customizable</p>
      </div>
    </section>
  );
};

export default Learn_Intertop;
