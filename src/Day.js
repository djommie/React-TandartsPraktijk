import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

function Day(props) {
  const appointmentsJSX = props.appointments.map(
    (appointment, index) => (
      <AppointmentInDay
        time={appointment.time}
        patient={appointment.patient}
        dentist={appointment.dentist}
        assistant={appointment.assistant}
        key={index}
        sickStyle={props.sickStyle}
        sickDentists={props.sickDentists}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};

export default Day
