import { Link, useParams } from "react-router-dom";
import SubscribeImage from "../assets/subscribe.jpg";

const Subscribe = () => {
  const { subscribe } = useParams();
  const isSubscribe = subscribe === "subscribe";
  const pageTitle = isSubscribe ? "Subscribe" : "Unsubscribe";
  const pageDescribe = isSubscribe
    ? "By subscribing, you will receive Tesla marketing communications."
    : "By unsubscribing, you will no longer receive any Tesla marketing communications.";
  const pageIf = isSubscribe
    ? " if you wanted to unsubscribe "
    : " if you didn't subscribe yet ";
  const pageLink = isSubscribe ? "Unsubscribe" : "Subscribe";
  return (
    <section className="py-16">
      <img src={SubscribeImage} alt="Subscribe" />
      <form className="mx-auto max-w-[600px] padding-x pt-8 grid gap-8">
        <h1 className="title">{pageTitle}</h1>
        <p>
          {pageDescribe}
          {pageIf}
          <Link
            className="link"
            to={"/communication-preferences/" + pageLink.toLocaleLowerCase()}
          >
            {pageLink}
          </Link>
        </p>
        <div className="">
          <label className="label" htmlFor="">
            Email
          </label>
          <input className="field" type="text" />
        </div>
        <div>
          <button type="submit" className="button button-sky">
            {pageTitle}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
