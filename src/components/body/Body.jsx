import React from "react";
import "./body.css";
import { DayItem } from "../items/DayItem";

export const Body = ({ hours }) => {
  return (
    <div className="bg-dark">
      <h2 className="text-primary text-center">Facultad: FTE</h2>
      <h6 className="text-primary text-center"> Grupo: 203</h6>
      <div className="row bg-warning">

        {hours.map((day) => (
          <div className="col bg-danger" key={day.day}>
            <DayItem day={day.day} timeslots={day.timeslots} />
          </div>
        ))}

      </div>
    </div>
  );
};
