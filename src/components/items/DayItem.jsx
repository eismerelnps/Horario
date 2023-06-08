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
  //const { timeslots } = hour;
  // console.log(hours[0]);

  return (
    <div className="table-responsive-sm animate__animated animate__bounceInLeft ">
    {
      hour ? (
        <table className="table table-striped-columns table-hover table align-middle">
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

        <tbody className="table-group-divider">
          {hour.map(({ day, timeslots }, i) => (
            <tr key={i + 56}>
              <th scope="row">{i + 1}</th>
              {hour.map((timeslots) => (
                <td key={timeslots.timeslots[i].time}>
                  {timeslots.timeslots[i].classAbr}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <div className="container mt-3">        
        <HugeAlert 
        title={'Sin datos'}
        body_caption={'Lo sentimos, no hay horario disponible en este momento para su grupo, o se ha producido un error al descargar su horario.'}
        footer_caption={''}
        />
        </div>
      )
    }
    </div>
  );
};
