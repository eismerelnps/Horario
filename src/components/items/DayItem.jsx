import "../body/body.css";

import hours from "../../data/hours";
import { schoolTree } from "../../data/schoolTree/schoolTree";
import { HugeAlert } from "../alerts/HugeAlert";

export const DayItem = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("settings"));
  };

  const settings = init();
  const { faculty, degree, group } = settings;
  console.log("settings");

  console.log(settings);

  const hour = schoolTree[faculty].degree[degree].group[group].hours;
  console.log("hour");
  console.log(hour);

  return (
    <div className="tabla table-responsive-sm animate__animated animate__bounceInLeft">
      {hour ? (
        <table className="table table-responsive-sm align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">.</th>
              {hour.map(({ day }) => (
                <th key={day} scope="col">
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="table-group-divider ">
            {hour.map(({ day, timeslots }, i) => (
              <tr key={i + 56}>
                <th scope="row ">{i + 1}</th>
                {hour.map((timeslots) => (
                  <td key={timeslots.timeslots[i].time}>
                    <div class="card border-primary">
                      <div class="card-header text-primary">
                        <span className="fs-6"> {timeslots.timeslots[i].classAbr}</span>
                      </div>
                      <div class="card-body text-primary p-1">
                        <h5 class="card-title text-info  col ">
                          {timeslots.timeslots[i].classRoom}
                        </h5>
                        {timeslots.timeslots[i].classType === "PP" ? (
                          <p className="card-text text-danger col col-sm-12 text-end">
                            {timeslots.timeslots[i].classType}
                          </p>
                        ) : (
                          <p className="card-text text-warning col col-sm-12 text-end">
                            {timeslots.timeslots[i].classType}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="container mt-3">
          <HugeAlert
            title={"Sin datos"}
            body_caption={
              "Lo sentimos, no hay horario disponible en este momento para su grupo, o se ha producido un error al descargar su horario."
            }
            footer_caption={""}
          />
        </div>
      )}
    </div>
  );
};
