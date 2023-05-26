import React from "react";
import "./body.css";

export const Body = ({ hours }) => {
  return (
    <div className="row">
      <h2 className="text-primary text-center">Horario Escolar</h2>
      {hours.map((day) => (
        <div className="col-xl-2" key={day.day}>
          <div className="day-item-container bg-light">
            <div className="day">
              <h3 className="text-center p-4">{day.day}</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Hora</th>
                    <th>Clase</th>
                    <th>Aula</th>
                    <th>Tipo</th>
                    <th>Profesor</th>
                  </tr>
                </thead>
                <tbody>
                  {day.timeslots.map((timeslot) => (
                    <tr key={timeslot.time}>
                      <td>{timeslot.time}</td>
                      <td>{timeslot.classAbr}</td>
                      <td>{timeslot.classRoom}</td>
                      <td>{timeslot.classType}</td>
                      <td>{timeslot.teacher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
