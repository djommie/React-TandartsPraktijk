import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

function AppointmentInDay(props) {
  return (
    <li className="appointment" style={props.sickStyle}>
      <div className="time">{format_time(props.time)}</div>
      <div className="patient">Patiënt: {props.patient.firstName} {props.patient.lastName}</div>
      <div className="dentist">Tandarts: {props.dentist.firstName} {props.dentist.lastName}</div>
      <div className="assistant">Assistent: {props.assistant.firstName} {props.assistant.lastName}</div>
    </li>
  )
};

export default AppointmentInDay
