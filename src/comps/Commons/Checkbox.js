import React from "react";

const Checkbox = ({ label, id, className = false }) => {
  return (
    <label for={id} className="checkWrapp flex items-center relative">
      <input type="checkbox" id={id} name="check" className="hidden" />
      <span className="checkMark rounded-sm size-[20px] absolute border border-slate-50"></span>
      <span className={`ms-8 text-sm ${className}`}>{label}</span>
    </label>
  );
};

export default Checkbox;
