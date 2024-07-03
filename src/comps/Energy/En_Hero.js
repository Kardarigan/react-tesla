import { Button } from "../Portal";

const En_Hero = ({
  prod,
  title,
  subtitle = false,
  offer = "Fully Loaded at 37k kg Gross Combination Weight",
  get,
  dark = false,
  contact = false,
  customLinkLabel = false,
}) => {
  const hasButton = get || contact;
  return (
    <>
      <section
        className={`fullSection h-screen ${dark && "text-slate-950"}`}
        style={{ backgroundImage: "url(" + prod.heroCover + ")" }}
      >
        {prod.heroVideo && (
          <video
            autoPlay
            muted
            loop
            className="absolute bg-fullobject w-full h-screen"
          >
            <source
              src={prod.heroVideo}
              type={`video/${prod.heroVideo.split(".").pop()}`}
            />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="padding text-center z-20 h-full flex flex-col justify-between">
          <div>
            <h1>{title}</h1>
            {subtitle && <h6>{subtitle}</h6>}
          </div>
          <div className="max-w-[900px]">
            {prod.heroAbilities && (
              <div
                className={`grid ${
                  hasButton && "lg:grid-cols-4"
                } grid-cols-3 gap-x-5`}
              >
                {prod.heroAbilities.map((item, index) => {
                  return (
                    <div className="text-center" key={index}>
                      {item.icon ? (
                        <i className={item.icon + " md:text-3xl text-xl"} />
                      ) : (
                        <h3 className="md:text-xl text-lg">{item.title}</h3>
                      )}
                      <h6 className="md:text-sm text-xs mt-2">
                        {item.describe}
                      </h6>
                    </div>
                  );
                })}
                {hasButton && (
                  <div className="lg:block hidden pt-3">
                    <Button
                      label={
                        contact
                          ? "Contact Us"
                          : customLinkLabel
                          ? customLinkLabel
                          : "Get " + title
                      }
                      to={get}
                      outline={dark ? "dark" : "light"}
                    />
                  </div>
                )}
              </div>
            )}
            {hasButton && (
              <Button
                label={
                  contact
                    ? "Contact Us"
                    : customLinkLabel
                    ? customLinkLabel
                    : "Get " + title
                }
                to={get}
                outline={dark ? "dark" : "light"}
                customClass={`${
                  prod.heroAbilities && "lg:hidden"
                } block mt-7 mx-auto`}
              />
            )}
          </div>
        </div>

        {offer && <p className="absolute bottom-[1vh]">{offer}</p>}
      </section>
    </>
  );
};

export default En_Hero;
