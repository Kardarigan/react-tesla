import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";

const Learn_Autopilot = ({ car }) => {
  const carAutopilot = car.autoPilot.features;
  const videoSlide = document.getElementsByClassName("splide__slide");

  useEffect(() => {
    const intervalId = setInterval(() => {
      for (let i = 0; i < videoSlide.length; i++) {
        if (videoSlide[i] && videoSlide[i].classList.contains("is-visible")) {
          const video = videoSlide[i].querySelector("video");
          if (video && video.paused && document.hasFocus()) {
            video.play();
          }
        } else {
          const video = videoSlide[i].querySelector("video");
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (tabId) => {
    const videoSlide = document.querySelector(`[data-tabcontent="${tabId}"]`);
    if (videoSlide && !videoSlide.classList.contains("is-visible")) {
      const visibleVideoSlide = document.querySelector(
        ".splide__slide.is-visible"
      );
      if (visibleVideoSlide) {
        const video = visibleVideoSlide.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
        visibleVideoSlide.classList.remove("is-visible", "is-active");
      }
      videoSlide.classList.add("is-visible", "is-active");
      const video = videoSlide.querySelector("video");
      if (video) {
        video.play();
      }
    }
  };

  return (
    <section className="padding bg-slate-50 text-slate-950">
      <div className="padding-x">
        <h2 className="md:text-3xl text-xl mb-5">Features</h2>
        <p>{carAutopilot.describe}</p>
      </div>

      <Splide
        aria-label="Power Train"
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
          pagination: false,
        }}
      >
        {carAutopilot.items.map((feature, index) => {
          return (
            <SplideSlide
              data-splide-interval={feature.duration}
              data-tabcontent={`tabAutopilot_${index}`}
            >
              <video muted loop className="bg-fullobject w-full">
                <source
                  src={feature.video}
                  type={`video/${feature.video.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="lg:w-4/5 flex padding-x py-4 gap-x-3 mx-auto">
        {carAutopilot.items.map((model, index) => {
          return (
            <div
              className="w-1/4 border-t-2 border-slate-900 pt-3"
              data-tabbutton={`tabAutopilot_${index}`}
              onClick={() => handleTabClick(`tabAutopilot_${index}`)}
            >
              <h5 className="text-xl">{model.title}</h5>
              <p className="text-sm pt-5">{model.describe}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Learn_Autopilot;
