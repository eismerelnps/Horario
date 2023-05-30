import React from 'react';

import '../body/body.css';

export const DayItem = ({ day, timeslots }) => {
  return (
    <div className="day-item-container bg-primary">
      <div className="day">
        <h3 className="day-name text-center p-4">{day}</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {/* <th>Hora</th>
                <th>Clase</th>
                <th>Aula</th>
                <th>Tipo</th>
                <th>Profesor</th> */}
              </tr>
            </thead>
            </table>
            <div className=''>
              {timeslots.map((timeslot) => (
                <div className="round-item-row row text-center" key={timeslot.time}>
                  {/* <div>{timeslot.time}</div> */}
                  <div className='round-item col-12 col-lg-3'><h3>{timeslot.classAbr}</h3></div>
                  <div className='round-item col-12 col-lg-3'>{timeslot.classType}</div>
                  <div className='round-item col-12 col-lg-3'><h6>{timeslot.classRoom}</h6></div>
                  <div className='round-item col-12 col-lg-3'><i className="fa-sharp fa-solid fa-circle-info"></i></div>
        
                </div>
                
              ))}
            </div>
          
        </div>
      </div>
    </div>
  );
};
