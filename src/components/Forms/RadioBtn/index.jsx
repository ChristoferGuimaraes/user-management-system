import React from "react";

export function RadioBtn({ value, name, nameLabel, id, htmlFor }) {
  return (
    <div className="radio inline">
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={htmlFor} className="radio-label">
        {nameLabel}
      </label>
    </div>
  );
}
