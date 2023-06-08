import React from "react";

export const HugeAlert = ({ title, body_caption, footer_caption }) => {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">{title}</h4>
      <p>{body_caption}</p>
      <hr />
      <p className="mb-0">{footer_caption}</p>
    </div>
  );
};
