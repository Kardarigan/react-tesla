import React from "react";

const Many_Fields = ({ fields }) => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 767px)"
  ).matches;
  return (
    <>
      {fields.map((item, index) => {
        const id = item.label.replace(/\s+/g, "-").toLowerCase();
        return (
          <div key={index}>
            <label htmlFor={id} className="label">
              {item.label}
            </label>
            <div className="mt-1">
              {item.type === "textarea" ? (
                <textarea className="field min-h-[120px]"></textarea>
              ) : item.type === "select" ? (
                <select className="field">
                  {item.options.map((option, index) => {
                    let isSelected = false;
                    if (item.label === "Contact Preference") {
                      if (isMobile) {
                        isSelected = index === 0;
                      } else {
                        isSelected = index === 1;
                      }
                    }
                    return (
                      <option key={index} selected={isSelected}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <input id={id} type={item.type} className="field" />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Many_Fields;
