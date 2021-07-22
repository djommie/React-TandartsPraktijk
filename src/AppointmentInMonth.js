import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, sickStyle, appointmentId, removeAppointment }) => (
  <div className="appointment" style={sickStyle} onClick={() => removeAppointment(appointmentId)}>
    <span className="time">{format_time(time)}</span>
    <span className="patient">{patient.firstName} {patient.lastName}</span>
  </div>
);
