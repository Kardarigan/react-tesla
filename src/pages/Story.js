import { stories } from "../constants";
import { Link, useParams } from "react-router-dom";

const Story = () => {
  const { customer_story } = useParams();
  const theStory = stories.find(
    (e) =>
      e &&
      e.title.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase() ===
        customer_story.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );

  return (
    <div className="pagecenter-x pb-20 grid gap-y-5">
      <p>
        <Link to="/customer-stories" className="text-sm text-slate-300">
          <i className="fal fa-chevron-left me-2" />
          Back
        </Link>
      </p>
      <h1 className="title-lg">{theStory.title}</h1>
      <p className="para text-slate-300">
        {theStory.customer}, {theStory.uploadDate}
      </p>
      <img
        src={theStory.cover}
        alt={theStory.title}
        className="w-full max-h-[500px] bg-fullobject rounded"
      />
      <p className="para text-slate-300">{theStory.story}</p>
    </div>
  );
};

export default Story;
