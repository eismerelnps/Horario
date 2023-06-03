import React from "react";

import "../body/body.css";
import hours from "../../data/hours";

export const DayItem = () => {
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
              <th scope="col">{day}</th>
            ))}
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {hour.map(({ timeslots }, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              {hour.map((timeslots) => (
                <td>{timeslots.timeslots[i].classAbr}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
