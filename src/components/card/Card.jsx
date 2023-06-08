import React from "react";

export const Card = ({ header, title, text }) => {
  return (
    <div class="card card-sm border-primary mb-3 ">
      <div class="card-header text-primary fs-6">{header}</div>
      <div class="card-body text-primary ">
        <h5 class="card-title text-info fs-6  ">{title}</h5>
        {text}
      </div>
    </div>
  );
};
