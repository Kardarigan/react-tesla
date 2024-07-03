import Poster from "../../assets/Overview/Homepage-Demo-Drive-Desktop-Poster-NA.avif";
import Video from "../../assets/Overview/Homepage-Demo-Drive-Desktop-NA.webm";
import { Button } from "../Portal";

const Ow_Hero = () => {
  return (
    <section className="fullSection">
      <video
        autoPlay
        muted
        loop
        poster={Poster}
        className="absolute bg-fullobject w-full"
      >
        <source src={Video} type={`video/${Video.split(".").pop()}`} />
        Your browser does not support the video tag.
      </video>
      <div className="text-center h-full  z-20 flex flex-col justify-between pt-[100px]">
        <div className="mix-blend-exclusion">
          <h1>This is Tesla Family</h1>
          <p>Find Your Best, Then Customize It</p>
        </div>
        <div>
          <Button to="/inventory" label="View Invertory" light />
          <p className="max-w-[600px] mx-auto pt-3">
            Lorem ipsum dolor sit amet consectetur, it amet consectetur,
            adipisicing elit ipsum id! Tenetur inventore earum maiores neque
            animi <u>et odit eligendi, sequi velit.</u>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ow_Hero;
