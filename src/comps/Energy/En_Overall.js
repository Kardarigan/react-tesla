import { Link } from "react-router-dom";
import { Button } from "../Portal";

const En_Overall = ({ title, describe, link, label, offer = false }) => {
  return (
    <>
      <section
        className={`fullSection padding-x padding-t ${offer ? "pb-96" : ""}`}
      >
        <div className="md:w-2/5 text-center">
          <h3 className="title">{title}</h3>
          <p className="py-2">{describe}</p>
          <Button to={link} label={label} outline="light" />
        </div>

        {offer && (
          <div className="w-full absolute bottom-[10vh] text-center text-xs">
            <p
              className="padding max-w-[900px] mx-auto"
              dangerouslySetInnerHTML={{ __html: offer }}
            ></p>
          </div>
        )}
      </section>
    </>
  );
};

export default En_Overall;
