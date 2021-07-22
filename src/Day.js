import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

function Day(props) {
  const appointmentsJSX = props.appointments.map(
    (appointment, index) => {
      if (props.sickDentists.includes(appointment.dentist.id)) {
        return (
          <AppointmentInDay
            time={appointment.time}
            patient={appointment.patient}
            dentist={appointment.dentist}
            assistant={appointment.assistant}
            key={index}
            sickStyle={props.sickStyle}
          />
        )
      } else {
        return (
          <AppointmentInDay
            time={appointment.time}
            patient={appointment.patient}
            dentist={appointment.dentist}
            assistant={appointment.assistant}
            key={index}
            sickStyle={null}
          />
        )
      }
    }
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};

export default Day


