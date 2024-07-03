import { All_Stories } from "../comps/Portal";

const Stories = () => {
  return (
    <>
      <div className="pagecenter-x pb-40">
        <h1 className="title">Customer Stories</h1>
        <All_Stories />
      </div>
      <section className="bg-slate-50 w-full min-h-[45vh] text-center flex-fullcenter padding">
        <div className="pb-16">
          <h2 className="title text-slate-950">
            Submit your story, photo, or video
          </h2>
          <a
            href="mailto:duckduckstay@hotmail.com"
            className="button button-light mt-8"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Stories;
