import React from "react";

const Field = ({
  id = false,
  number = false,
  placeholder = false,
  icon = false,
  select = false,
}) => {
  return (
    <label htmlFor={id} className="field py-2 px-0">
      <i className={`fal px-3 ${icon}`} />
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="allunset bg-slate-700"
      />
    </label>
  );
};

export default Field;
