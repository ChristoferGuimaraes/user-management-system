import React from "react";

export function RadioBtn({
  value,
  name,
  nameLabel,
  id,
  htmlFor,
  defaultChecked,
}) {
  return (
    <div className="radio inline">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={htmlFor} className="radio-label">
        {nameLabel}
      </label>
    </div>
  );
}
