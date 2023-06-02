import React from "react";
import "./body.css";
import { DayItem } from "../items/DayItem";
import hours from "../../data/hours";

export const Body = () => {
  const hour = hours;
  //* <div className="col bg-danger" key={day.day}>   </div>

  return (
  
    <div className="container-xxl-fluid animate__animated animate__fadeIn">
      <DayItem />
    </div>

  );
};
