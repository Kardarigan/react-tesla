const Pw_Abilities = ({ pw, cover }) => {
  return (
    <section
      className="bg-slate-950 bg-fullcenter flex items-end min-h-[70vh]"
      style={{ backgroundImage: "url(" + cover + ")" }}
    >
      <div className="flex-seperate size-full shadowFromBottom md:px-80 padding">
        {pw.map((item) => {
          return (
            <div key={item.key} className="text-center max-w-[200px]">
              {item.icon ? (
                <i className={item.icon + " md:text-3xl sm:text-2xl text-md"} />
              ) : (
                <h3 className="md:text-3xl sm:text-2xl text-md">
                  {item.title}
                </h3>
              )}
              <h6 className="md:text-sm para-sm mt-5">{item.describe}</h6>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pw_Abilities;
