import { useEffect, useState } from "react";
import { stories } from "../../constants";
import { Link } from "react-router-dom";

const All_Stories = () => {
  const [page, setPage] = useState(1);
  const isFirstPage = page === 1;
  const isLastPage = page === stories.length / 12;

  const theStories = [];
  for (let i = (page - 1) * 12; i < page * 12; i++) {
    if (stories[i]) {
      theStories.push(stories[i]);
    }
  }

  const pageDivisons = [];
  for (let i = 1; i < stories.length / 12 + 1; i++) {
    pageDivisons.push(i);
  }

  const handlePageChanging = (e) => {
    const pageNumber = parseInt(e.target.value);
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (!isFirstPage) {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    const selectBox = document.getElementById("pageSelect");
    if (selectBox) {
      selectBox.value = page;
    }
  }, [page]);
  return (
    <>
      <section className="mt-8 grid md:grid-cols-3 gap-8">
        {theStories.map((item, index) => {
          return (
            <Link key={index} to={item.path} className="group fadeIn">
              <div className="w-full h-44 overflow-hidden rounded">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="size-full bg-fullobject group-hover:scale-105 transition-all"
                />
              </div>
              <h6 className="text-lg mt-5 mb-1 line-clamp-2 text-ellipsis">
                {item.title}
              </h6>
              <p className="text-slate-500 text-xs">{item.uploadDate}</p>
            </Link>
          );
        })}
      </section>

      <div className="max-w-[250px] mx-auto text-center mt-12">
        <button
          onClick={handlePrevPage}
          className={isFirstPage && "opacity-70"}
        >
          Prev
        </button>
        <select
          id="pageSelect"
          className="mx-1 bg-transparent py-0 px-[30px!important] border border-transparent shadow-none focus:border focus:border-slate-100"
          onChange={handlePageChanging}
        >
          {pageDivisons.map((item, index) => {
            return (
              <option key={index} value={item} className="text-slate-950">
                {item} of {stories.length / 12}
              </option>
            );
          })}
        </select>

        <button onClick={handleNextPage} className={isLastPage && "opacity-70"}>
          Next
        </button>
      </div>
    </>
  );
};

export default All_Stories;
