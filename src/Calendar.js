import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";

const divideByDay = appointments => {
  const appointmentsByDay = {};
  appointments.forEach(appointment => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment);
  });
  return appointmentsByDay;
};

function Calendar(props) {
  const appointmentsByDay = divideByDay(props.appointments)
  const daysInMonthJSX = Object.values(
    appointmentsByDay
  ).map((appointmentsInDay, index) => (
    <DayInMonth
      appointments={appointmentsInDay}
      key={index}
      sickStyle={props.sickStyle}
      sickDentists={props.sickDentists}
      removeAppointment={props.removeAppointment}
    />
  ));

  return (
    <div className="calendarview">
      <h2>Click on the appointment to remove it.</h2>
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysInMonthJSX}</div>
    </div>
  );
};

export default Calendar