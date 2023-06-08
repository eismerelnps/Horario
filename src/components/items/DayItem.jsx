import React from "react";

import "../body/body.css";
import hours from "../../data/hours";

export const DayItem = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem("settings"));
  };




  const hour = hours;
  //const { timeslots } = hour;
  console.log(hours[0]);

  return (
    <div className="table-responsive-sm animate__animated animate__bounceInLeft ">
      <table className="table table-striped-columns table-hover table align-middle">
        <thead className="table-primary">
          <tr>
            <th scope="col">.</th>
            {hour.map(({ day }) => (
              <th key={day} scope="col">{day}</th>
            ))}
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {hour.map(({ day, timeslots }, i) => (
            <tr key={i+56}>
              <th scope="row">{i + 1}</th>
              {hour.map((timeslots) => (
                <td key={timeslots.timeslots[i].time}>{timeslots.timeslots[i].classAbr}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
