import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

function DayInMonth(props) {
  const appointmentsJSX = props.appointments.map(({ time, patient, dentist }, index) => {

    if (props.sickDentists.includes(dentist.id)) {
      return (
        <AppointmentInMonth
          time={time}
          patient={patient}
          key={index}
          dentist={dentist}
          sickStyle={props.sickStyle}
        />
      )
    } else {
      return (
        <AppointmentInMonth
          time={time}
          patient={patient}
          key={index}
          dentist={dentist}
          sickStyle={null}
        />
      )
    }
  });
  return <div className="day">{appointmentsJSX}</div>;
};

export default DayInMonth