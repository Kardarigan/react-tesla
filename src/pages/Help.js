import { useParams } from "react-router-dom";
import { helpPages } from "../constants";

const Help = () => {
  const { help } = useParams();
  const helpPage = helpPages.find((e) => e === help);
  return (
    <section
      className="pagecenter"
      dangerouslySetInnerHTML={{ __html: helpPage }}
    />
  );
};

export default Help;
